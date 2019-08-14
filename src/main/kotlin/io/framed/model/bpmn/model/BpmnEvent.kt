package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

interface BpmnEvent : BpmnFlowObject {

    companion object {
        fun parse(xml: XmlElement, parent: BpmnElement) = when (xml.tagName) {
            "bpmn:startEvent" -> {
                BpmnStartEvent(xml["id"], xml["name"], parent)
            }
            "bpmn:endEvent" -> {
                BpmnEndEvent(
                        xml["id"],
                        xml["name"],
                        xml.children.find { it.tagName == "bpmn:terminateEventDefinition" } != null,
                        parent
                )
            }
            else -> {
                BpmnIntermediateEvent(xml["id"], xml["name"], parent)
            }
        }
    }
}

class BpmnStartEvent(
        override val id: String,
        override val name: String,
        override var parent: BpmnElement?
) : BpmnEvent

class BpmnEndEvent(
        override val id: String,
        override val name: String,
        val terminationEvent: Boolean,
        override var parent: BpmnElement?
) : BpmnEvent

class BpmnIntermediateEvent(
        override val id: String,
        override val name: String,
        override var parent: BpmnElement?
) : BpmnEvent