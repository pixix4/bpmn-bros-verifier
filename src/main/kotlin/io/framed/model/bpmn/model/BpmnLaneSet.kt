package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnLaneSet(
    override val id: String
) : BpmnElementGroup {

    override val content: MutableList<BpmnLane> = mutableListOf()

    companion object : BpmnParser<BpmnLaneSet>("laneSet".toRegex()) {
        override fun parse(xml: XmlElement): BpmnLaneSet {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnLaneSet")

            val bpmn = BpmnLaneSet(xml["id"])

            for (child in xml.children) {
                val element = BpmnLane.parse(child)
                bpmn.content += element
            }

            return bpmn
        }
    }
}