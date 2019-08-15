package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.ModelTree
import io.framed.framework.matcher.matchStrings
import io.framed.framework.transitiveParent
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnEndEvent
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bpmn.model.BpmnMessageFlow
import io.framed.model.bros.model.BrosDestroyRelation
import io.framed.model.bros.model.BrosElement
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosReturnEvent

@Suppress("UNCHECKED_CAST")
fun Context.setupRule4() {

    match<BpmnEvent, BrosEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnEvent, BrosEvent> { bpmn, bros ->
        bpmn.relations<BpmnMessageFlow>().any { flow ->
            flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements
        }
    }
    match<BpmnEvent, BrosReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnMessageFlow>().any { flow ->
            flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements
        }
    }

    /**
     * Bpmn end event must match a bros event that destroys the same container
     */
    verifyBpmn<BpmnEndEvent>("Rule 4 - BpmnEndEvent") { bpmn ->
        if (bpmn.element.terminationEvent) return@verifyBpmn null

        for (bros in bpmn.matchingElements) {
            if (bros.checkType<BrosEvent>()) {
                val bpmnParents = bpmn.transitiveParent<BpmnElement>()
                val brosDestroy = bros.relations<BrosDestroyRelation>().firstOrNull()?.target as? ModelTree<BrosElement>

                for (bpmnParent in bpmnParents) {
                    if (brosDestroy != null && brosDestroy in bpmnParent.matchingElements) {
                        return@verifyBpmn Result.match("$bpmn matches $bros and they destroy '$bpmnParent'", bros = bros)
                    }
                }
                return@verifyBpmn Result.error(message = "$bpmn matches $bros but they destroy different container (${bpmnParents.joinToString { it.toString() }} | $brosDestroy)", bros = bros)
            }
            if (bros.checkType<BrosReturnEvent>()) {
                val bpmnParents = bpmn.transitiveParent<BpmnElement>()
                val brosParent = bros.parent as? ModelTree<BrosElement>

                for (bpmnParent in bpmnParents) {
                    if (brosParent != null && brosParent in bpmnParent.matchingElements) {
                        return@verifyBpmn Result.match("$bpmn matches $bros and they destroy '$bpmnParent'", bros = bros)
                    }
                }
                return@verifyBpmn Result.error("$bpmn matches $bros but they destroy different container (${bpmnParents.joinToString { it.toString() }} | $brosParent)", bros = bros)

            }
        }
        Result.error("Cannot find matching BrosElement for $bpmn")
    }
}