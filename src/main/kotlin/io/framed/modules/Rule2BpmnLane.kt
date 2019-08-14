package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnLane
import io.framed.model.bros.model.BrosRoleType

fun Context.setupRule2() {
    match<BpmnLane, BrosRoleType> { lane, role ->
        matchStrings(lane.element.name, role.element.name)
    }

    verifyBpmn<BpmnLane>("Rule 2 - BpmnLane") { bpmn ->
        for (bros in bpmn.matchingElements) {
            if (bros.checkType<BrosRoleType>()) {
                return@verifyBpmn Result.match("$bpmn matches $bros", bros = bros)
            }
        }
        Result.error("Cannot find matching BrosElement for $bpmn")
    }
}