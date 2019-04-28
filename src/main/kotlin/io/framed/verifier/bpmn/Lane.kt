package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class Lane(
    id: String
) : BpmnElement(id) {

    val contentIds: MutableList<String> = mutableListOf()
    val content: MutableMap<String, BpmnElement> = mutableMapOf()

    var name: String = ""

    override fun build(process: Process) {
        for (id in contentIds) {
            val element = process.content[id]
            if (element != null) {
                content[id] = element
            }
        }
    }

    companion object : BpmnParser<Lane>("lane".toRegex()) {
        override fun parse(xml: XmlElement): Lane {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = Lane(xml["id"])
            bpmn.name = xml["name"]

            for (child in xml.children) {
                bpmn.contentIds += child.textContent
            }

            return bpmn
        }
    }
}