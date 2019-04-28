package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class SequenceFlow(
    id: String
) : BpmnElement(id) {

    var sourceId: String = ""
    var targetId: String = ""

    lateinit var source: BpmnElement
    lateinit var target: BpmnElement

    override fun build(process: Process) {
        process.content[sourceId]?.let {
            source = it
        }
        process.content[targetId]?.let {
            target = it
        }
    }

    companion object : BpmnParser<SequenceFlow>("sequenceFlow".toRegex()) {
        override fun parse(xml: XmlElement): SequenceFlow {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = SequenceFlow(xml["id"])

            bpmn.sourceId = xml["sourceRef"]
            bpmn.targetId = xml["sourceRef"]

            return bpmn
        }
    }
}