package io.framed.model.bpmn.model

import io.framed.model.bpmn.BpmnModel

interface BpmnElement {
    val id: String
    val name: String

    var parent: BpmnElement?

    fun build(model: BpmnModel) {}

    fun remove(child: BpmnElement) {}

    fun getAllChildren(): List<BpmnElement> = listOf(this)

    fun stringify() = (this::class.simpleName ?: "UnknownElement") + if (name.isNotBlank()) "(${name.trim()})" else ""
}