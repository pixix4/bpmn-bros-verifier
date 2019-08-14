package io.framed.model.bpmn.model

import io.framed.model.bpmn.BpmnModel
import io.framed.model.bpmn.xml.XmlElement

class BpmnProcess(
        override val id: String,
        override var parent: BpmnElement?
) : BpmnElement {

    override var name: String = ""

    val content = mutableListOf<BpmnElement>()

    override fun build(model: BpmnModel) {
        name = model.participants.firstOrNull { it.id == id }?.name ?: ""
        for (element in content) {
            element.build(model)
        }
    }

    override fun getAllChildren(): List<BpmnElement> {
        return super.getAllChildren() + content.flatMap { it.getAllChildren() }
    }

    override fun remove(child: BpmnElement) {
        content.remove(child)
    }

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement?): BpmnProcess {
            val process = BpmnProcess(xml["id"], parent)

            process.content.addAll(xml.children.map { child ->
                when {
                    child.tagName.contains("sequenceFlow", true) -> BpmnSequenceFlow.parse(child)
                    child.tagName.contains("messageFlow", true) -> BpmnMessageFlow.parse(child)
                    child.tagName.contains("laneSet") -> BpmnLaneSet.parse(child, process)
                    else -> BpmnFlowObject.parse(child, process)
                }
            })

            return process
        }
    }
}
