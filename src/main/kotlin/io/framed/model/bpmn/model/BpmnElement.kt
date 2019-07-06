package io.framed.model.bpmn.model

interface BpmnElement {
    val id: String
    fun build(model: BpmnModel) {}

    fun stringify() = this::class.simpleName ?: "UnknownElement"
    fun log(expand: Boolean = true): String = stringify()
}