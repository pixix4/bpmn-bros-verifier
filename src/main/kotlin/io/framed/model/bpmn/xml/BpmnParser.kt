package io.framed.model.bpmn.xml

import io.framed.model.bpmn.BpmnModel
import org.w3c.dom.parsing.DOMParser


object BpmnParser {

    fun parse(content: String): BpmnModel? {
        val parser = DOMParser()
        val doc = parser.parseFromString(content, "text/xml")

        val node = doc.getElementsByTagName("bpmn:definitions").let {
            if (it.length > 0) it.item(0) else null
        } ?: return null

        return BpmnModel.parse(XmlElement(node))
    }
}
