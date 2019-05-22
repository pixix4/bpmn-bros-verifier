package io.framed.bpmn.model

import io.framed.bpmn.xml.XmlElement

class BpmnCollaboration(
        override val id: String
) : BpmnElementGroup {

    override val content: MutableList<BpmnElement> = mutableListOf()

    companion object : BpmnParser<BpmnCollaboration>("collaboration".toRegex()) {
        override fun parse(xml: XmlElement): BpmnCollaboration {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnCollaboration")

            val bpmn = BpmnCollaboration(xml["id"])

            for (child in xml.children) {
                val element = BpmnParser.parse(child)
                bpmn.content += element
            }

            return bpmn
        }
    }
}