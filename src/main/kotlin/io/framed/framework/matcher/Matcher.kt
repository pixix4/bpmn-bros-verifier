package io.framed.framework.matcher

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement

interface Matcher {

    fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean

    fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean

    fun match(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Boolean

    val name: String
        get() = this::class.simpleName ?: "UnknownMatcher"
}
