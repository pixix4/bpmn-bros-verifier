package io.framed.bpmn.model

import io.framed.bpmn.xml.XmlElement

class BpmnParticipant(
    override val id: String
) : BpmnElement {

    var name: String = ""

    var processRef = ""
    lateinit var process: BpmnProcess

    override fun build(model: BpmnModel) {
        model.find<BpmnProcess>(processRef)?.let {
            process = it
        }
    }

    override fun stringify(): String {
        return super.stringify() + "($name)"
    }

    override fun log(expand: Boolean): String {
        return super.log() + " -> " + process.log(false)
    }

    companion object : BpmnParser<BpmnParticipant>("participant".toRegex()) {
        override fun parse(xml: XmlElement): BpmnParticipant {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnParticipant")

            val bpmn = BpmnParticipant(xml["id"])
            bpmn.name = xml["name"]
            bpmn.processRef = xml["processRef"]

            return bpmn
        }
    }
}