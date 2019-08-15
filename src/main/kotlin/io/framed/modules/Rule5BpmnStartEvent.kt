package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.transitiveParent
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bpmn.model.BpmnStartEvent
import io.framed.model.bros.model.BrosCreateRelation
import io.framed.model.bros.model.BrosElement
import io.framed.model.bros.model.BrosEvent

@Suppress("UNCHECKED_CAST")
fun Context.setupRule5() {

    /**
     * Bpmn start event must match a bros event that creates the same container
     */
    verifyBpmn<BpmnStartEvent>("Rule 5 - BpmnStartEvent") { bpmn ->
        for (bros in bpmn.matchingElements) {
            if (bros.checkType<BrosEvent>()) {
                val bpmnParents = bpmn.transitiveParent<BpmnElement>()
                val brosCreate = bros.relations<BrosCreateRelation>()
                        .firstOrNull()
                        ?.source as? ModelTree<BrosElement>


                for (bpmnParent in bpmnParents) {
                    if (brosCreate != null && brosCreate in bpmnParent.matchingElements) {
                        return@verifyBpmn Result.match("$bpmn matches $bros and they create $bpmnParent", bros = bros)
                    }
                }
                return@verifyBpmn Result.error("$bpmn matches $bros but they create different container (${bpmnParents.joinToString { it.toString() }} | $brosCreate)", bros = bros)
            }
        }
        Result.error("Cannot find matching BrosElement for $bpmn")
    }
}