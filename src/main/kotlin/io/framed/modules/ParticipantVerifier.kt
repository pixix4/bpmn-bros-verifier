package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnParticipant
import io.framed.framework.ModelElement
import io.framed.model.RoleType
import io.framed.model.Scene
import io.framed.verifier.*

class ParticipantVerifier() : Verifier {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnParticipant::class, Modifier.ANY)

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val participant = bpmn.model<BpmnParticipant>() ?: return Result.Ignore
        val role = bros.model<RoleType>()
        val scene = bros.model<Scene>()

        return when {
            role != null -> {
                val nameMatch = match(participant.name, role.name)

                if (nameMatch) {
                    println("Participant '${participant.name}' matches role '${role.name}'")
                    Result.Valid
                } else {
                    Result.Error("Error while checking ${participant.name}")
                }
            }
            scene != null -> {
                val nameMatch = match(participant.name, scene.name)

                if (nameMatch) {
                    println("Participant '${participant.name}' matches scene '${scene.name}'")
                    Result.Valid
                } else {
                    Result.Error("Error while checking ${participant.name}")
                }
            }
            else -> Result.Ignore
        }

    }
}
