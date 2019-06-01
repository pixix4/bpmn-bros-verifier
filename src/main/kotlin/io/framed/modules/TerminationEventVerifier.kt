package io.framed.modules

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnEvent
import io.framed.framework.ModelElement
import io.framed.model.ReturnEvent
import io.framed.verifier.*

class TerminationEventVerifier() : Verifier() {

    override val modifier = Modifier.ALL

    override val grouping = Grouping.Bpmn(BpmnEvent::class, Modifier.ANY)

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val bpmnEvent = bpmn.model<BpmnEvent>() ?: return Result.Ignore
        val returnEvent = bros.model<ReturnEvent>() ?: return Result.Ignore

        if (!bpmnEvent.terminationEvent) return Result.Ignore

        val nameMatch = match(bpmnEvent.name, returnEvent.desc)

        return if (nameMatch) {
            log("Termination event '${bpmnEvent.name}' matches return event '${returnEvent.desc}'")
            Result.Valid
        } else {
            Result.Error("Error while checking ${bpmnEvent.name}")
        }
    }
}
