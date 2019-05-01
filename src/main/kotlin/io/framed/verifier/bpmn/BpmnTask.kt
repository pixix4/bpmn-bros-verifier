package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class BpmnTask(
    override val id: String
) : BpmnElement {

    var name: String = ""

    companion object : BpmnParser<BpmnTask>(".*[Tt]ask".toRegex()) {
        override fun parse(xml: XmlElement): BpmnTask {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnTask")

            val bpmn = BpmnTask(xml["id"])
            bpmn.name = xml["name"]

            return bpmn
        }
    }
}