package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class Event(
    id: String
) : BpmnElement(id) {

    var name: String = ""
    var type: EventType = EventType.DEFAULT

    companion object : BpmnParser<Event>(".*[Ee]vent".toRegex()) {
        override fun parse(xml: XmlElement): Event {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = Event(xml["id"])
            bpmn.name = xml["name"]

            when (xml.tagName) {
                "bpmn:startEvent" -> bpmn.type = EventType.START
                "bpmn:endEvent" -> bpmn.type = EventType.END
            }

            return bpmn
        }
    }
}

enum class EventType {
    DEFAULT, START, END
}