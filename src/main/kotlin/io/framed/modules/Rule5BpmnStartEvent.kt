package io.framed.modules

import io.framed.container
import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bros.model.BrosCreateRelation
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosElement

@Suppress("UNCHECKED_CAST")
fun Context.setupRule5() {

    /**
     * Bpmn start event must match a bros event that creates the same container
     */
    verifyBpmn<BpmnEvent>("Rule 5 - BpmnStartEvent") { bpmn ->
        if (bpmn.element.terminationEvent || bpmn.element.type != BpmnEvent.Type.START) return@verifyBpmn null

        for (match in bpmn.matchingElements) {
            val event = match.model<BrosEvent>() ?: continue
            val container = bpmn.container()
            val destroysName = match.relations<BrosCreateRelation>()
                    .firstOrNull()
                    ?.source as? ModelTree<BrosElement>
            if (container != null && destroysName != null && destroysName in container.element.matchingElements) {
                return@verifyBpmn Result.match("BpmnStartEvent '${bpmn.element.name}' matches BrosEvent '${event.desc}' and they create '${container.name}'", bros = match)
            } else {
                return@verifyBpmn Result.error("BpmnStartEvent '${bpmn.element.name}' matches BrosEvent '${event.desc}' but they create different container (${container?.element} | $destroysName)", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnStartEvent '${bpmn.element.name}'")
    }
}