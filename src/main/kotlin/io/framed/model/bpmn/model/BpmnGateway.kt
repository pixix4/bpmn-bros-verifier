package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnGateway(
        override val id: String,
        override var parent: BpmnElement?
) : BpmnFlowObject {

    override val name: String = ""

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement) = BpmnGateway(xml["id"], parent)
    }
}