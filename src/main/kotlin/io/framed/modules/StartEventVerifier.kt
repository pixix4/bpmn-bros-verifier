package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnEvent
import io.framed.containerName
import io.framed.framework.ModelElement
import io.framed.model.CreateRelationship
import io.framed.model.Event
import io.framed.model.RoleType
import io.framed.model.Scene
import io.framed.verifier.*

class StartEventVerifier() : Verifier() {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnEvent::class, Modifier.ANY)

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val bpmnEvent = bpmn.model<BpmnEvent>() ?: return Result.Ignore
        val brosEvent = bros.model<Event>() ?: return Result.Ignore

        if (bpmnEvent.type != BpmnEvent.Type.START || bpmnEvent.terminationEvent) return Result.Ignore

        val nameMatch = match(bpmnEvent.name, brosEvent.desc)

        val container = bpmn.containerName() ?: return Result.Error("Error while checking ${bpmnEvent.name}")
        val createName = bros.relations<CreateRelationship>().firstOrNull()?.source?.let {
            it.model<Scene>()?.name ?: it.model<RoleType>()?.name
        } ?: return Result.Error("Error while checking ${bpmnEvent.name}")


        val createNameMatch = match(container.first, createName)

        return if (nameMatch && createNameMatch) {
            log("Start event '${bpmnEvent.name}' matches event '${brosEvent.desc}' and creates '$createName'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${bpmnEvent.name}")
        }
    }
}