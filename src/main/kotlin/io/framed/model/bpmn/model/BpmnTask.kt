package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnTask(
        override val id: String,
        override val name: String,
        override var parent: BpmnElement?
) : BpmnFlowObject {

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement?) = BpmnTask(xml["id"], xml["name"], parent)
    }
}