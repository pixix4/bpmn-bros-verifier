package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement

interface Verifier {

    fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean

    fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean

    fun verifyBpmn(element: ModelTree<BpmnElement>): Result

    fun verifyBros(element: ModelTree<ModelElement<*>>): Result

    val name: String
            get() = this::class.simpleName ?: "UnknownVerifier"
}

