package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

interface BpmnFlowObject : BpmnElement {
    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement): BpmnFlowObject = when {
            xml.tagName.contains("event", true) -> BpmnEvent.parse(xml, parent)
            xml.tagName.contains("gateway", true) -> BpmnGateway.parse(xml, parent)
            xml.tagName.contains("task", true) -> BpmnTask.parse(xml, parent)
            xml.tagName.contains("subProcess", true) -> BpmnTask.parse(xml, parent)
            else -> throw IllegalArgumentException(xml.tagName)
        }
    }
}