package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class Gateway(
    id: String
) : BpmnElement(id) {

    companion object : BpmnParser<Gateway>(".*[Gg]ateway".toRegex()) {
        override fun parse(xml: XmlElement): Gateway {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = Gateway(xml["id"])

            return bpmn
        }
    }
}