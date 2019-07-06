package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnLane
import io.framed.model.bpmn.model.BpmnParticipant
import io.framed.model.bpmn.model.BpmnProcess
import io.framed.model.bros.Event
import io.framed.model.bros.RoleType
import io.framed.model.bros.Scene

fun Context.setupLane() {
    match<BpmnLane, RoleType> { lane, role ->
        matchStrings(lane.element.name, role.element.name)
    }

    match<BpmnParticipant, Scene> { lane, scene ->
        matchStrings(lane.element.name, scene.element.name)
    }
    match<BpmnParticipant, RoleType> { lane, role ->
        matchStrings(lane.element.name, role.element.name)
    }
    match<BpmnParticipant, Event> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    match<BpmnProcess, Scene> { process, scene ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, scene.element.name)
    }
    match<BpmnProcess, RoleType> { process, role ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, role.element.name)
    }
    match<BpmnProcess, Event> { process, bros ->
        process.element.participant != null && matchStrings(process.element.participant!!.name, bros.element.desc)
    }

    verifyBpmn<BpmnLane>("BpmnLaneVerifier") { bpmn ->
        for (match in bpmn.matchingElements) {
            val roleType = match.model<RoleType>()
            if (roleType != null) {
                return@verifyBpmn Result.match("BpmnLane '${bpmn.element.name}' matches RoleType '${roleType.name}'", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnLane '${bpmn.element.name}'")
    }

    verifyBpmn<BpmnParticipant>("BpmnParticipantVerifier") { bpmn ->
        for (match in bpmn.matchingElements) {
            val roleType = match.model<RoleType>()
            if (roleType != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches RoleType '${roleType.name}'", bros = match)
            }
            val scene = match.model<Scene>()
            if (scene != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches Scene '${scene.name}'", bros = match)
            }
            val event = match.model<Event>()
            if (event != null) {
                return@verifyBpmn Result.match("BpmnParticipant '${bpmn.element.name}' matches Event '${event.desc}'", bros = match)
            }
        }
        Result.error("Cannot find matching bros element for BpmnParticipant '${bpmn.element.name}'")
    }
}
