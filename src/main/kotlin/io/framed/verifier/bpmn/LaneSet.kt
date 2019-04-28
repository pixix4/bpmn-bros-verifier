package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class LaneSet(
    id: String
) : BpmnElement(id) {
    val content: MutableMap<String, Lane> = mutableMapOf()

    override fun build(process: Process) {
        for (it in content.values) {
            it.build(process)
        }
    }

    companion object : BpmnParser<LaneSet>("laneSet".toRegex()) {
        override fun parse(xml: XmlElement): LaneSet {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = LaneSet(xml["id"])

            for (child in xml.children) {
                val element = Lane.parse(child)
                bpmn.content[element.id] = element
            }

            return bpmn
        }
    }
}