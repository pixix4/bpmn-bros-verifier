package io.framed.model.bpmn.xml

import org.w3c.dom.Element

class XmlElement(val element: Element) {
    val tagName: String
        get() = element.tagName
    val textContent: String
        get() = element.textContent ?: ""

    operator fun get(name: String): String = element.getAttribute(name) ?: ""

    val children: List<XmlElement>by lazy {
        (0 until element.childNodes.length).mapNotNull {
            val item = element.childNodes.item(it)
            if (item is Element) XmlElement(item) else null
        }
    }

    override fun toString(): String {
        return element.toString()
    }
}