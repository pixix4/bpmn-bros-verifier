package io.framed.model.bpmn.model

import io.framed.model.bpmn.BpmnModel
import io.framed.model.bpmn.xml.XmlElement

class BpmnLaneSet(
        override val id: String,
        override var parent: BpmnElement?
) : BpmnElement {

    override val name: String = ""

    val content = mutableListOf<BpmnLane>()

    override fun getAllChildren(): List<BpmnElement> {
        return super.getAllChildren() + content.flatMap { it.getAllChildren() }
    }

    override fun build(model: BpmnModel) {
        for (element in content) {
            element.build(model)
        }
    }

    override fun remove(child: BpmnElement) {
        content.remove(child)
    }

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement?): BpmnLaneSet {
            val laneSet = BpmnLaneSet(xml["id"], parent)

            laneSet.content.addAll(xml.children.map { child ->
                BpmnLane.parse(child, laneSet)
            })

            return laneSet
        }
    }
}