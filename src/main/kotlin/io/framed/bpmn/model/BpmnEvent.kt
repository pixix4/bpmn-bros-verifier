package io.framed.bpmn.model

import io.framed.bpmn.xml.XmlElement

class BpmnEvent(
        override val id: String,
        val type: Type,
        val terminationEvent: Boolean
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

            val terminationEvent = xml.children.find { it.tagName == "bpmn:terminateEventDefinition" } != null

            val bpmn = BpmnEvent(xml["id"], type, terminationEvent)
            bpmn.name = xml["name"]

            return bpmn
        }
    }

    override fun stringify(): String {
        return super.stringify() + "($name: $type)"
    }

    enum class Type {
        START, END, UNKNOWN
    }
}
