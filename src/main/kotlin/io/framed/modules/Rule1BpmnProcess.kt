package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnParticipant
import io.framed.model.bpmn.model.BpmnProcess
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosRoleType
import io.framed.model.bros.model.BrosScene

fun Context.setupRule1() {

    match<BpmnParticipant, BrosScene> { lane, scene ->
        matchStrings(lane.element.name, scene.element.name)
    }
    match<BpmnParticipant, BrosRoleType> { lane, role ->
        matchStrings(lane.element.name, role.element.name)
    }
    match<BpmnParticipant, BrosEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    match<BpmnProcess, BrosScene> { process, scene ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, scene.element.name)
    }
    match<BpmnProcess, BrosRoleType> { process, role ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, role.element.name)
    }
    match<BpmnProcess, BrosEvent> { process, bros ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, bros.element.desc)
    }

    verifyBpmn<BpmnParticipant>("Rule 1 - BpmnProcess") { bpmn ->
        for (match in bpmn.matchingElements) {
            val roleType = match.model<BrosRoleType>()
            if (roleType != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches BrosRoleType '${roleType.name}'", bros = match)
            }
            val scene = match.model<BrosScene>()
            if (scene != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches BrosScene '${scene.name}'", bros = match)
            }
            val event = match.model<BrosEvent>()
            if (event != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches BrosEvent '${event.desc}'", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnParticipant '${bpmn.element.name}'")
    }
}