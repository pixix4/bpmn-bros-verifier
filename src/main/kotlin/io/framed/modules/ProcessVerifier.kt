package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnLane
import io.framed.bpmn.model.BpmnParticipant
import io.framed.framework.ModelElement
import io.framed.model.Event
import io.framed.model.Scene
import io.framed.verifier.*

class ProcessVerifier() : AnyVerifier() {

    override val modifier = Modifier.ANY

    override val grouping = Grouping.Bpmn(BpmnParticipant::class, Modifier.ANY)

    private fun verifyProcessScene(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val process = bpmn.model<BpmnParticipant>() ?: return Result.Ignore
        val scene = bros.model<Scene>() ?: return Result.Ignore

        val nameMatch = match(process.name, scene.name)

        return if (nameMatch) {
            log("Process '${process.name}' matches scene '${scene.name}'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${process.name}")
        }
    }

    private fun verifyProcessRole(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val process = bpmn.model<BpmnParticipant>() ?: return Result.Ignore
        val event = bros.model<Event>() ?: return Result.Ignore

        val nameMatch = match(process.name, event.desc)

        return if (nameMatch) {
            log("Process '${process.name}' matches event '${event.desc}'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${process.name}")
        }
    }

    init {
        execute(this::verifyProcessScene)
        execute(this::verifyProcessRole)
    }
}
