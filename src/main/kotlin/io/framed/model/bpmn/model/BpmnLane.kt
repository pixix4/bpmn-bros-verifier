package io.framed.model.bpmn.model

import io.framed.model.bpmn.BpmnModel
import io.framed.model.bpmn.xml.XmlElement

class BpmnLane(
        override val id: String,
        override val name: String,
        override var parent: BpmnElement?
) : BpmnElement {

    private val contentIds: MutableList<String> = mutableListOf()
    val content: MutableList<BpmnFlowObject> = mutableListOf()

    override fun build(model: BpmnModel) {
        for (id in contentIds) {
            val element = model.find<BpmnFlowObject>(id) ?: continue
            content += element
            element.parent?.remove(element)
            element.parent = this
        }
    }

    override fun getAllChildren(): List<BpmnElement> {
        return super.getAllChildren() + content.flatMap { it.getAllChildren() }
    }

    override fun remove(child: BpmnElement) {
        content.remove(child)
    }

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement): BpmnLane {
            val bpmn = BpmnLane(xml["id"], xml["name"], parent)

            for (child in xml.children) {
                bpmn.contentIds += child.textContent
            }

            return bpmn
        }
    }
}
