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
        fun ignore( bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.IGNORE,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<ModelElement<*>>,
                "",
                null
        )

        fun match(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.MATCH,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<ModelElement<*>>,
                message,
                null
        )

        fun error(message: String, bpmn: ModelTree<*>? = null, bros: ModelTree<*>? = null) = Result(
                Type.ERROR,
                bpmn as? ModelTree<BpmnElement>,
                bros as? ModelTree<ModelElement<*>>,
                message,
                null
        )
    }

    enum class Type {
        MATCH, ERROR, IGNORE
    }
}
