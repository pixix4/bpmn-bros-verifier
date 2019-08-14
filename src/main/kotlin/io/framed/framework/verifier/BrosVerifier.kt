package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement
import kotlin.reflect.KClass

interface BrosVerifier : Verifier {

    val filter: Set<KClass<out BrosElement>>

    override fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean {
        return false
    }

    override fun filterBros(bros: ModelTree<BrosElement>): Boolean {
        return filter.isEmpty() || bros.type in filter
    }

    override fun verifyBpmn(element: ModelTree<BpmnElement>): Result? {
        throw UnsupportedOperationException("Cannot verify bpmn elements in $name:BrosVerifier!")
    }
}