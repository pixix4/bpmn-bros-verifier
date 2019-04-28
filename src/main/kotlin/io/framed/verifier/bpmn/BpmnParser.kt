package io.framed.verifier.bpmn

import io.framed.verifier.xml.XmlElement

abstract class BpmnParser<T : BpmnElement>(
        tagName: Regex
) {

    private val tagName = "bpmn:${tagName.pattern}".toRegex()

    fun canParse(xml: XmlElement): Boolean {
        return tagName.matches(xml.tagName)
    }

    abstract fun parse(xml: XmlElement): T

    protected fun register(parser: BpmnParser<*>) {
        parserList += parser
    }

    companion object {
        private val parserList = mutableSetOf<BpmnParser<*>>()

        fun parse(xml: XmlElement): BpmnElement {
            for (parser in parserList) {
                if (parser.canParse(xml)) return parser.parse(xml)
            }

            throw IllegalArgumentException()
        }
    }
}