package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEndEvent
import io.framed.model.bros.model.BrosReturnEvent

fun Context.setupRule3() {

    match<BpmnEndEvent, BrosReturnEvent>("ReturnEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    /**
     * Bpmn termination event must match a bros return event
     */
    verifyBpmn<BpmnEndEvent>("Rule 3 - BpmnTerminationEvent") { bpmn ->
        if (!bpmn.element.terminationEvent) return@verifyBpmn null

        for (bros in bpmn.matchingElements) {
            if (bros.checkType<BrosReturnEvent>()) {
                return@verifyBpmn Result.match("$bpmn matches $bros", bros = bros)
            }
        }
        Result.error("Cannot find matching BrosElement for $bpmn")
    }
}