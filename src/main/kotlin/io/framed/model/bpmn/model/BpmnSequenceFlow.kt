package io.framed.model.bpmn.model

import io.framed.model.bpmn.BpmnModel
import io.framed.model.bpmn.xml.XmlElement

class BpmnSequenceFlow(
        override val id: String,
        override val name: String,
        var sourceRef: String = "",
        var targetRef: String = ""
) : BpmnElement {

    override var parent: BpmnElement? = null

    lateinit var source: BpmnFlowObject
    lateinit var target: BpmnFlowObject

    override fun build(model: BpmnModel) {
        model.find<BpmnFlowObject>(sourceRef)?.let {
            source = it
        } ?: throw IllegalArgumentException("Cannot find sourceRef: $sourceRef")
        model.find<BpmnFlowObject>(targetRef)?.let {
            target = it
        } ?: throw IllegalArgumentException("Cannot find targetRef: $targetRef")
    }

    companion object {
        fun parse(xml: XmlElement) = BpmnSequenceFlow(
                xml["id"],
                xml["name"],
                xml["sourceRef"],
                xml["targetRef"]
        )
    }
}