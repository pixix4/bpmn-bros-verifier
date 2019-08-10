package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement
import kotlin.reflect.KClass

interface BpmnVerifier : Verifier {

    val filter: Set<KClass<out BpmnElement>>

    override fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean {
        return filter.isEmpty() || bpmn.type in filter
    }

    override fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean {
        return false
    }

    override fun verifyBros(element: ModelTree<ModelElement<*>>): Result? {
        throw UnsupportedOperationException("Cannot verify bros elements in $name:BpmnVerifier!")
    }
}