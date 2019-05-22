package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnLane
import io.framed.framework.ModelElement
import io.framed.model.RoleType
import io.framed.verifier.*

class LaneVerifier() : Verifier {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnLane::class, Modifier.ANY)

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val lane = bpmn.model<BpmnLane>() ?: return Result.Ignore
        val role = bros.model<RoleType>() ?: return Result.Ignore

        val nameMatch = match(lane.name, role.name)

        return if (nameMatch) {
            println("Lane '${lane.name}' matches role '${role.name}'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${lane.name}")
        }
    }
}
