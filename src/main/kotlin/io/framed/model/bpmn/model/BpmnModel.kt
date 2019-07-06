package io.framed.model.bpmn.model

import io.framed.model.bpmn.xml.XmlElement

class BpmnModel : BpmnElementGroup {

    override val id: String = ""

    override val content: MutableList<BpmnElement> = mutableListOf()

    companion object : BpmnParser<BpmnModel>("definitions".toRegex()) {
        override fun parse(xml: XmlElement): BpmnModel {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = BpmnModel()

            for (child in xml.children) {
                if (!child.tagName.startsWith("bpmn:")) continue
                    bpmn.content += BpmnParser.parse(child)
            }

            bpmn.build(bpmn)

            return bpmn
        }

        init {
            register(BpmnCollaboration)
            register(BpmnEvent)
            register(BpmnFlow)
            register(BpmnGateway)
            register(BpmnLane)
            register(BpmnLaneSet)
            register(BpmnModel)
            register(BpmnParticipant)
            register(BpmnProcess)
            register(BpmnTask)
        }
    }
}