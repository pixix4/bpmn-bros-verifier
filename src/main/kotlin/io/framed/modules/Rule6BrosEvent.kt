package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnGateway
import io.framed.model.bpmn.model.BpmnSequenceFlow
import io.framed.model.bpmn.model.BpmnTask
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosReturnEvent

fun Context.setupRule6() {

    match<BpmnGateway, BrosEvent> { bpmn, bros ->
        bpmn.relations<BpmnSequenceFlow>().any { flow ->
            flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnGateway, BrosReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnSequenceFlow>().any { flow ->
            flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnTask, BrosEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnTask, BrosReturnEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    /**
     * A bros event should have a matching element in bpmn.
     */
    verifyBros<BrosEvent>("Rule 6 - BrosEvent") { bros ->
        for (bpmn in bros.matchingElements) {
            if (bpmn.checkType<BpmnElement>()) {
                return@verifyBros Result.match("$bros matches $bpmn", bpmn = bpmn)
            }
        }
        Result.error("Cannot find matching BpmnElement for $bros")
    }

    /**
     * A bros return event should have a matching element in bpmn.
     */
    verifyBros<BrosReturnEvent>("Rule 6 - BrosReturnEvent") { bros ->
        for (bpmn in bros.matchingElements) {
            if (bpmn.checkType<BpmnElement>()) {
                return@verifyBros Result.match("$bros matches $bpmn", bpmn = bpmn)
            }
        }
        Result.error("Cannot find matching BpmnElement for $bros")
    }
}