package io.framed.verifier.bpmn

interface BpmnElement {
    val id: String
    fun build(model: BpmnModel) {}

    fun log(expand: Boolean = true): String = this::class.simpleName ?: "UnknownElement"
}