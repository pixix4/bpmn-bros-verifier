package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement

@Suppress("DataClassPrivateConstructor", "UNCHECKED_CAST")
data class Result private constructor(
        val type: Type,
        val bpmn: ModelTree<BpmnElement>?,
        val bros: ModelTree<ModelElement<*>>?,
        val message: String,
        val verifier: Verifier?
) {
    companion object {
        fun match(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.POSITIVE,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<ModelElement<*>>,
                message,
                null
        )

        fun error(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.NEGATIVE,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<ModelElement<*>>,
                message,
                null
        )
    }

    enum class Type {
        POSITIVE, NEGATIVE
    }
}
