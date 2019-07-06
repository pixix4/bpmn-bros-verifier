package io.framed.model.bros

import io.framed.framework.util.PolymorphicListSerializer
import kotlinx.serialization.Serializable

/**
 * Model class for an uml model.
 *
 * @author lars
 */
@Serializable
class Method() : ModelElement<Method>() {

    constructor(init: (Method) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this model.
     */
    var name: String = "unnamed"

    /**
     * Return model of this model.
     */
    var type: String = ""

    /**
     * List of parameters for this model.
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var parameters: List<Parameter> = emptyList()

    override fun getAllChildren(): List<ModelElement<*>> {
        return super.getAllChildren() + parameters.flatMap { it.getAllChildren() }
    }

    override fun maxId(): Long = listOf(
            id,
            parameters.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name:$type)"

    override fun copy() = Method { new ->
        new.name = name
        new.type = type
        new.parameters = parameters.map { it.copy() }
    }

}
