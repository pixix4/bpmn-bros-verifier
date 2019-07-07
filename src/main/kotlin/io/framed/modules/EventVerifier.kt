package io.framed.modules

import io.framed.containerName
import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bpmn.model.BpmnFlow
import io.framed.model.bpmn.model.BpmnGateway
import io.framed.model.bros.*

@Suppress("UNCHECKED_CAST")
fun Context.setupEvent() {
    match<BpmnEvent, Event>("DefaultEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc) && !bpmn.element.terminationEvent
    }
    match<BpmnEvent, ReturnEvent>("ReturnEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnGateway, Event> { bpmn, bros ->
        for (flow in bpmn.relations<BpmnFlow>()) {
            if (flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)) {
                return@match true
            }
        }
        false
    }
    match<BpmnGateway, ReturnEvent> { bpmn, bros ->
        for (flow in bpmn.relations<BpmnFlow>()) {
            if (flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)) {
                return@match true
            }
        }
        false
    }
    match<BpmnEvent, Event> { bpmn, bros ->
        for (flow in bpmn.relations<BpmnFlow>()) {
            if (flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements || flow.target in bros.matchingElements) {
                return@match true
            }
        }
        false
    }
    match<BpmnEvent, ReturnEvent> { bpmn, bros ->
        for (flow in bpmn.relations<BpmnFlow>()) {
            if (flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements || flow.target in bros.matchingElements) {
                return@match true
            }
        }
        false
    }

    /**
     * Bpmn termination event must match a bros return event
     */
    verifyBpmn<BpmnEvent>("BpmnTerminationEventVerifier") { bpmn ->
        if (!bpmn.element.terminationEvent) return@verifyBpmn Result.ignore()

        for (match in bpmn.matchingElements) {
            val returnEvent = match.model<ReturnEvent>()
            if (returnEvent != null) {
                return@verifyBpmn Result.match("BpmnTerminationEvent '${bpmn.element.name}' matches ReturnEvent '${returnEvent.desc}'", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnTerminationEvent '${bpmn.element.name}'")
    }

    /**
     * Bpmn end event must match a bros event that destroys the same container
     */
    verifyBpmn<BpmnEvent>("BpmnEndEventVerifier") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.END) return@verifyBpmn Result.ignore()

        for (match in bpmn.matchingElements) {
            val event = match.model<Event>()
            if (event != null) {
                val container = bpmn.containerName()
                val destroysName = match.relations<DestroyRelationship>().firstOrNull()?.target as? ModelTree<ModelElement<*>>
                if (container != null && destroysName != null && destroysName in container.second.matchingElements) {
                    return@verifyBpmn Result.match("BpmnEndEvent '${bpmn.element.name}' matches Event '${event.desc}' and they destroy '${container.first}'", bros = match)
                } else {
                    return@verifyBpmn Result.error("BpmnEndEvent '${bpmn.element.name}' matches Event '${event.desc}' but they destroy different container (${container?.second} | $destroysName)", bros = match)
                }
            }
            val returnEvent = match.model<ReturnEvent>()
            if (returnEvent != null) {
                val container = bpmn.containerName()
                val destroysName = match.parent
                if (container != null && destroysName != null && destroysName in container.second.matchingElements) {
                    return@verifyBpmn Result.match("BpmnEndEvent '${bpmn.element.name}' matches Event '${returnEvent.desc}' and they destroy '${container.first}'", bros = match)
                } else {
                    return@verifyBpmn Result.error("BpmnEndEvent '${bpmn.element.name}' matches Event '${returnEvent.desc}' but they destroy different container (${container?.second} | $destroysName)", bros = match)
                }
            }
        }
        Result.error("Cannot find matching bros element for BpmnEndEvent '${bpmn.element.name}'")
    }

    /**
     * Bpmn start event must match a bros event that creates the same container
     */
    verifyBpmn<BpmnEvent>("BpmnStartEventVerifier") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.START) return@verifyBpmn Result.ignore()

        for (match in bpmn.matchingElements) {
            val event = match.model<Event>()
            if (event != null) {
                val container = bpmn.containerName()
                val destroysName = match.relations<CreateRelationship>().firstOrNull()?.source as? ModelTree<ModelElement<*>>
                if (container != null && destroysName != null && destroysName in container.second.matchingElements) {
                    return@verifyBpmn Result.match("BpmnStartEvent '${bpmn.element.name}' matches Event '${event.desc}' and they create '${container.first}'", bros = match)
                } else {
                    return@verifyBpmn Result.error("BpmnStartEvent '${bpmn.element.name}' matches Event '${event.desc}' but they create different container (${container?.second} | $destroysName)", bros = match)
                }
            }
        }
        Result.error("Cannot find matching bros element for BpmnStartEvent '${bpmn.element.name}'")
    }

    /**
     * A bros event should have a matching element in bpmn.
     */
    verifyBros<Event>("BrosEventVerifier") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosEvent '${bros.element.desc}'")
    }

    /**
     * A bros return event should have a matching element in bpmn.
     */
    verifyBros<ReturnEvent>("BrosReturnEventVerifier") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosReturnEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosReturnEvent '${bros.element.desc}'")
    }
}
