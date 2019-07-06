package io.framed.model.bros

import io.framed.framework.util.PolymorphicListSerializer
import kotlinx.serialization.Serializable

/**
 * Model class for an uml class.
 *
 * @author lars
 */
@Serializable
class Class() : ModelElement<Class>() {

    constructor(init: (Class) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this class
     */
    var name: String = "UnnamedClass"

    /**
     * List of class attributes
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var attributes: List<Attribute> = emptyList()

    /**
     * List of class methods
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var methods: List<Method> = emptyList()

    override fun getAllChildren(): List<ModelElement<*>> {
        return super.getAllChildren() + attributes.flatMap { it.getAllChildren() } + methods.flatMap { it.getAllChildren() }
    }

    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            methods.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy() = Class { new ->
        new.name = name
        new.attributes = attributes.map { it.copy() }
        new.methods = methods.map { it.copy() }
    }
}
