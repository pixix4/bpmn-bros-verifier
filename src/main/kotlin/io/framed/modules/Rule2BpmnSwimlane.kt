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

    verifyBpmn<BpmnLane>("Rule 2 - BpmnSwimlane") { bpmn ->
        for (match in bpmn.matchingElements) {
            val roleType = match.model<BrosRoleType>() ?: continue
            return@verifyBpmn Result.match("BpmnLane '${bpmn.element.name}' matches BrosRoleType '${roleType.name}'", bros = match)
        }
        Result.error("Cannot find matching bros element for BpmnLane '${bpmn.element.name}'")
    }
}