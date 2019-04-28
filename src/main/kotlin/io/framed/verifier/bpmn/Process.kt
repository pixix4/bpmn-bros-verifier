package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

class Process(
    id: String
) : BpmnElement(id) {
    val content: MutableMap<String, BpmnElement> = mutableMapOf()

    override fun build(process: Process) {
        for (it in content.values) {
            it.build(process)
        }
    }

    companion object : BpmnParser<Process>("process".toRegex()) {
        override fun parse(xml: XmlElement): Process {
            if (!canParse(xml)) throw IllegalArgumentException()

            val bpmn = Process(xml["id"])

            for (child in xml.children) {
                val element = BpmnParser.parse(child)
                bpmn.content[element.id] = element
            }

            bpmn.build(bpmn)

            return bpmn
        }

        init {
            register(Event.Companion)
            register(Gateway.Companion)
            register(Lane.Companion)
            register(LaneSet.Companion)
            register(Process)
            register(SequenceFlow)
            register(Task)
        }
    }
}