package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class BpmnGateway(
    override  val id: String
) : BpmnElement {

    companion object : BpmnParser<BpmnGateway>(".*[Gg]ateway".toRegex()) {
        override fun parse(xml: XmlElement): BpmnGateway {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnGateway")

            val bpmn = BpmnGateway(xml["id"])

            return bpmn
        }
    }
}