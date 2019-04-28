package io.framed.verifier.bpmn

abstract class BpmnElement(
    val id: String
) {
    open fun build(process: Process) {}
}