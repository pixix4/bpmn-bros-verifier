package io.framed.model.bpmn

import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnMessageFlow
import io.framed.model.bpmn.model.BpmnProcess
import io.framed.model.bpmn.xml.XmlElement

class BpmnModel : BpmnElement {

    override val id: String = ""
    override val name: String = ""
    override var parent: BpmnElement? = null

    @PublishedApi
    internal val allChildren by lazy {
        content.flatMap { it.getAllChildren() }.associateBy { it.id }
    }

    inline fun <reified T : BpmnElement> find(id: String): T? {
        return this.allChildren[id] as? T
    }

    internal val participants: MutableList<Participant> = mutableListOf()

    val content: MutableList<BpmnElement> = mutableListOf()

    override fun remove(child: BpmnElement) {
        content.remove(child)
    }

    companion object {
        fun parse(xml: XmlElement): BpmnModel {
            val model = BpmnModel()

            for (child in xml.children) {
                if (!child.tagName.startsWith("bpmn:")) continue

                when {
                    child.tagName.contains("process") -> model.content += BpmnProcess.parse(child, model)
                    child.tagName.contains("collaboration") -> {
                        for (collaboration in child.children) {
                            when {
                                collaboration.tagName.contains("participant", true) ->
                                    model.participants += Participant(collaboration["processRef"], collaboration["name"])
                                collaboration.tagName.contains("messageFlow", true) ->
                                    model.content += BpmnMessageFlow.parse(collaboration)
                            }
                        }
                    }
                }
            }

            for (element in model.content) {
                element.build(model)
            }

            return model
        }
    }

    data class Participant(
            val id: String,
            val name: String
    )
}