package io.framed.bpmn.model

import io.framed.bpmn.xml.XmlElement

class BpmnFlow(
        override val id: String,
        val type: Type
) : BpmnElement {

    var sourceRef: String = ""
    var targetRef: String = ""

    lateinit var source: BpmnElement
    lateinit var target: BpmnElement

    override fun build(model: BpmnModel) {
        model.find(sourceRef)?.let {
            source = it
        }
        model.find(targetRef)?.let {
            target = it
        }
    }

    companion object : BpmnParser<BpmnFlow>(".*[Ff]low".toRegex()) {
        override fun parse(xml: XmlElement): BpmnFlow {
            if (!canParse(xml)) throw IllegalArgumentException("Cannot parse BpmnFlow")

            val type = when (xml.tagName) {
                "bpmn:sequenceFlow" -> Type.SEQUENCE
                "bpmn:messageFlow" -> Type.MESSAGE
                else -> Type.UNKNOWN
            }

            val bpmn =  BpmnFlow(xml["id"], type)

            bpmn.sourceRef = xml["sourceRef"]
            bpmn.targetRef = xml["targetRef"]

            return bpmn
        }
    }

    override fun log(expand: Boolean): String {
        return super.log() + "($type) | ${source.log(false)} -> ${target.log(false)}"
    }

    enum class Type {
        SEQUENCE, MESSAGE, UNKNOWN
    }
}