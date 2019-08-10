package io.framed.modules

import io.framed.containerName
import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bros.CreateRelationship
import io.framed.model.bros.Event
import io.framed.model.bros.ModelElement

fun Context.setupRule5() {

    /**
     * Bpmn start event must match a bros event that creates the same container
     */
    verifyBpmn<BpmnEvent>("BpmnStartEventVerifier") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.START) return@verifyBpmn null

        for (match in bpmn.matchingElements) {
            val event = match.model<Event>() ?: continue
            val container = bpmn.containerName()
            val destroysName = match.relations<CreateRelationship>()
                    .firstOrNull()
                    ?.source as? ModelTree<ModelElement<*>>
            if (container != null && destroysName != null && destroysName in container.second.matchingElements) {
                return@verifyBpmn Result.match("BpmnStartEvent '${bpmn.element.name}' matches Event '${event.desc}' and they create '${container.first}'", bros = match)
            } else {
                return@verifyBpmn Result.error("BpmnStartEvent '${bpmn.element.name}' matches Event '${event.desc}' but they create different container (${container?.second} | $destroysName)", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnStartEvent '${bpmn.element.name}'")
    }
}