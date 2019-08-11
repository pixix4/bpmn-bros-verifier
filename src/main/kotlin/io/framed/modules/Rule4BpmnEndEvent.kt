package io.framed.modules

import io.framed.containerName
import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bros.DestroyRelationship
import io.framed.model.bros.Event
import io.framed.model.bros.ModelElement
import io.framed.model.bros.ReturnEvent

@Suppress("UNCHECKED_CAST")
fun Context.setupRule4() {

    /**
     * Bpmn end event must match a bros event that destroys the same container
     */
    verifyBpmn<BpmnEvent>("Rule 4 - BpmnEndEvent") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.END) return@verifyBpmn null

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
}