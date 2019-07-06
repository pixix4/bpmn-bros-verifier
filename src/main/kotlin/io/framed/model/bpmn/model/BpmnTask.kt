package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnTask(
    override val id: String
) : BpmnElement {

    var name: String = ""

    override fun stringify(): String {
        return super.stringify() + "($name)"
    }

    companion object : BpmnParser<BpmnTask>("(.*[Tt]ask|subProcess)".toRegex()) {
        override fun parse(xml: XmlElement): BpmnTask {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnTask")

            val bpmn = BpmnTask(xml["id"])
            bpmn.name = xml["name"]

            return bpmn
        }
    }
}