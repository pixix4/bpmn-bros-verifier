package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnEvent
import io.framed.containerName
import io.framed.framework.ModelElement
import io.framed.model.*
import io.framed.verifier.*

class EndEventVerifier() : AnyVerifier() {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnEvent::class, Modifier.ANY)

    private fun verifyEndReturnEvent(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val bpmnEvent = bpmn.model<BpmnEvent>() ?: return Result.Ignore
        val returnEvent = bros.model<ReturnEvent>() ?: return Result.Ignore

        if (bpmnEvent.terminationEvent) return Result.Ignore

        val nameMatch = match(bpmnEvent.name, returnEvent.desc)

        return if (nameMatch) {
            log("End event '${bpmnEvent.name}' matches return event '${returnEvent.desc}'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${bpmnEvent.name}")
        }
    }

    private fun verifyEndDestroyEvent(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val bpmnEvent = bpmn.model<BpmnEvent>() ?: return Result.Ignore
        val brosEvent = bros.model<Event>() ?: return Result.Ignore

        if (bpmnEvent.type != BpmnEvent.Type.END || bpmnEvent.terminationEvent) return Result.Ignore

        val nameMatch = match(bpmnEvent.name, brosEvent.desc)

        val container = bpmn.containerName() ?: return Result.Error("Error while checking ${bpmnEvent.name}")
        val destroysName = bros.relations<DestroyRelationship>().firstOrNull()?.target?.let {
            it.model<Scene>()?.name ?: it.model<RoleType>()?.name
        } ?: return Result.Error("Error while checking ${bpmnEvent.name}")


        val destroyNameMatch = match(container.first, destroysName)

        return if (nameMatch && destroyNameMatch) {
            log("End event '${bpmnEvent.name}' matches event '${brosEvent.desc}' and destroys '$destroysName'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${bpmnEvent.name}")
        }
    }

    init {
        execute(this::verifyEndReturnEvent)
        execute(this::verifyEndDestroyEvent)
    }
}
