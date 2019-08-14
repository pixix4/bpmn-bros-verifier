package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement

@Suppress("DataClassPrivateConstructor", "UNCHECKED_CAST")
data class Result private constructor(
        val type: Type,
        val bpmn: ModelTree<BpmnElement>?,
        val bros: ModelTree<BrosElement>?,
        val message: String,
        val verifier: Verifier?
) {
    companion object {
        fun match(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.POSITIVE,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<BrosElement>,
                message,
                null
        )

        fun error(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.NEGATIVE,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<BrosElement>,
                message,
                null
        )
    }

    enum class Type {
        POSITIVE, NEGATIVE
    }
}
