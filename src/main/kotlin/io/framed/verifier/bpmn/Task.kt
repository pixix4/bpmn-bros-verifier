package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class Task(
    id: String
) : BpmnElement(id) {

    var name: String = ""

    companion object : BpmnParser<Task>(".*[Tt]ask".toRegex()) {
        override fun parse(xml: XmlElement): Task {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = Task(xml["id"])
            bpmn.name = xml["name"]

            return bpmn
        }
    }
}