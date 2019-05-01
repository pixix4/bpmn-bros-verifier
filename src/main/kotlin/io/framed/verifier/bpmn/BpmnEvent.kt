package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class BpmnEvent(
    override val id: String,
    val type: Type
) : BpmnElement {

    var name: String = ""

    companion object : BpmnParser<BpmnEvent>(".*[Ee]vent".toRegex()) {
        override fun parse(xml: XmlElement): BpmnEvent {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnEvent")

            val type = when (xml.tagName) {
                "bpmn:startEvent" -> Type.START
                "bpmn:endEvent" -> Type.END
                else -> Type.UNKNOWN
            }

            val bpmn = BpmnEvent(xml["id"], type)
            bpmn.name = xml["name"]

            return bpmn
        }
    }

    override fun log(expand: Boolean): String {
        return super.log() + "($type)"
    }

    enum class Type {
        START, END, UNKNOWN
    }
}
