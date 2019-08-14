package io.framed.modules

import io.framed.container
import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bros.model.BrosDestroyRelation
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosElement
import io.framed.model.bros.model.BrosReturnEvent

@Suppress("UNCHECKED_CAST")
fun Context.setupRule4() {

    /**
     * Bpmn end event must match a bros event that destroys the same container
     */
    verifyBpmn<BpmnEvent>("Rule 4 - BpmnEndEvent") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.END) return@verifyBpmn null

        for (match in bpmn.matchingElements) {
            val event = match.model<BrosEvent>()
            if (event != null) {
                val container = bpmn.container()
                val destroysName = match.relations<BrosDestroyRelation>().firstOrNull()?.target as? ModelTree<BrosElement>
                if (container != null && destroysName != null && destroysName in container.element.matchingElements) {
                    return@verifyBpmn Result.match("BpmnEndEvent '${bpmn.element.name}' matches BrosEvent '${event.desc}' and they destroy '${container.name}'", bros = match)
                } else {
                    return@verifyBpmn Result.error("BpmnEndEvent '${bpmn.element.name}' matches BrosEvent '${event.desc}' but they destroy different container (${container?.element} | $destroysName)", bros = match)
                }
            }
            val returnEvent = match.model<BrosReturnEvent>()
            if (returnEvent != null) {
                val container = bpmn.container()
                val destroysName = match.parent
                if (container != null && destroysName != null && destroysName in container.element.matchingElements) {
                    return@verifyBpmn Result.match("BpmnEndEvent '${bpmn.element.name}' matches BrosEvent '${returnEvent.desc}' and they destroy '${container.name}'", bros = match)
                } else {
                    return@verifyBpmn Result.error("BpmnEndEvent '${bpmn.element.name}' matches BrosEvent '${returnEvent.desc}' but they destroy different container (${container?.element} | $destroysName)", bros = match)
                }
            }
        }
        Result.error("Cannot find matching bros element for BpmnEndEvent '${bpmn.element.name}'")
    }
}