package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement

interface Verifier {

    fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean

    fun filterBros(bros: ModelTree<BrosElement>): Boolean

    fun verifyBpmn(element: ModelTree<BpmnElement>): Result?

    fun verifyBros(element: ModelTree<BrosElement>): Result?

    val name: String
            get() = this::class.simpleName ?: "UnknownVerifier"
}

