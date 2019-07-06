package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnLane(
        override val id: String
) : BpmnElementGroup {

    val contentIds: MutableList<String> = mutableListOf()
    override val content: MutableList<BpmnElement> = mutableListOf()

    var name: String = ""

    override fun build(model: BpmnModel) {
        for (id in contentIds) {
            val element = model.find(id)
            if (element != null) {
                content += element
            }
        }
    }

    override fun stringify(): String {
        return super.stringify() + "($name)"
    }

    companion object : BpmnParser<BpmnLane>("lane".toRegex()) {
        override fun parse(xml: XmlElement): BpmnLane {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnLane")

            val bpmn = BpmnLane(xml["id"])
            bpmn.name = xml["name"]

            for (child in xml.children) {
                bpmn.contentIds += child.textContent
            }

            return bpmn
        }
    }
}