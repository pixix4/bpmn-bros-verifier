package io.framed.bpmn.xml

import io.framed.bpmn.model.BpmnModel
import org.w3c.dom.Element
import org.w3c.dom.parsing.DOMParser


object BpmnParser {

    fun parse(content: String): BpmnModel? {
        val parser = DOMParser()
        val doc = parser.parseFromString(content, "text/xml")

        val node = doc.getElementsByTagName("bpmn:definitions").let {
            if (it.length > 0) it.item(0) else null
        } ?: return null

        return BpmnModel.parse(parse(node))
    }

    private fun parse(element: Element): XmlElement {
        return object : XmlElement {
            override val tagName: String
                get() = element.tagName

            override val textContent: String
                get() = element.textContent ?: ""

            override fun getAttribute(name: String): String = element.getAttribute(name) ?: ""

            override val children: List<XmlElement> by lazy {
                (0 until element.childNodes.length).mapNotNull {
                    val item = element.childNodes.item(it)
                    if (item is Element) parse(item) else null
                }
            }

            override fun toString(): String {
                return element.toString()
            }
        }
    }
}
