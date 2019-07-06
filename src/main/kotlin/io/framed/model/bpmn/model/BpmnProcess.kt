package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnProcess(
        override val id: String
) : BpmnElementGroup {

    override val content: MutableList<BpmnElement> = mutableListOf()

    var participant: BpmnParticipant? = null

    override fun stringify(): String {
        return super.stringify() + (participant?.let { "(${it.name})" } ?: "")
    }

    override fun build(model: BpmnModel) {
        for (it in content) {
            it.build(model)
        }
    }

    companion object : BpmnParser<BpmnProcess>("process".toRegex()) {
        override fun parse(xml: XmlElement): BpmnProcess {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnProcess")

            val bpmn = BpmnProcess(xml["id"])

            for (child in xml.children) {
                val element = BpmnParser.parse(child)
                bpmn.content += element
            }

            return bpmn
        }
    }
}