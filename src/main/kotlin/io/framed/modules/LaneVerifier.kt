package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnLane
import io.framed.bpmn.model.BpmnParticipant
import io.framed.framework.ModelElement
import io.framed.model.RoleType
import io.framed.model.Scene
import io.framed.verifier.*

class LaneVerifier() : AnyVerifier() {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnElement::class, Modifier.ANY("Cannot find a matching bros element for bpmn lane {}"))

    private fun verifyLane(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val lane = bpmn.model<BpmnLane>() ?: return Result.ignore(bpmn, bros)
        val role = bros.model<RoleType>() ?: return Result.ignore(bpmn, bros)

        val nameMatch = match(lane.name, role.name)

        return if (nameMatch) {
            log("Lane '${lane.name}' matches role '${role.name}'")
            Result.match(bpmn, bros, "Lane '${lane.name}' matches role '${role.name}'")
        } else {
            Result.error(bpmn, bros, "Error while checking ${lane.name}")
        }
    }

    private fun verifyParticipantScene(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val participant = bpmn.model<BpmnParticipant>() ?: return Result.ignore(bpmn, bros)
        val scene = bros.model<Scene>() ?: return Result.ignore(bpmn, bros)

        val nameMatch = match(participant.name, scene.name)

        return if (nameMatch) {
            log("Participant '${participant.name}' matches scene '${scene.name}'")
            Result.match(bpmn, bros, "Participant '${participant.name}' matches scene '${scene.name}'")
        } else {
            Result.error(bpmn, bros, "Error while checking ${participant.name}")
        }
    }

    private fun verifyParticipantRole(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val participant = bpmn.model<BpmnParticipant>() ?: return Result.ignore(bpmn, bros)
        val role = bros.model<RoleType>() ?: return Result.ignore(bpmn, bros)

        val nameMatch = match(participant.name, role.name)

        return if (nameMatch) {
            log("Participant '${participant.name}' matches role '${role.name}'")
            Result.match(bpmn, bros, "Participant '${participant.name}' matches role '${role.name}'")
        } else {
            Result.error(bpmn, bros, "Error while checking ${participant.name}")
        }
    }

    init {
        execute(this::verifyLane)
        execute(this::verifyParticipantScene)
        execute(this::verifyParticipantRole)
    }
}
