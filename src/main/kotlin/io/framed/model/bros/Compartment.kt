package io.framed.model.bros

import io.framed.framework.util.PolymorphicListSerializer
import io.framed.framework.util.PolymorphicSetSerializer
import kotlinx.serialization.Serializable

/**
 * Model class for an crom compartment.
 *
 * @author Sebastian
 */
@Serializable
class Compartment() : ModelElementGroup<Compartment>() {

    constructor(init: (Compartment) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this class
     */
    var name: String = "UnnamedCompartment"

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


    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<ModelElement<*>> = emptySet()

    override fun getAllChildren(): List<ModelElement<*>> {
        return super.getAllChildren() + children.flatMap { it.getAllChildren() } + attributes.flatMap { it.getAllChildren() } + methods.flatMap { it.getAllChildren() }
    }

    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            methods.map { it.maxId() }.max() ?: 0,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy() = Compartment { new ->
        new.name = name
        new.attributes = attributes.map { it.copy() }
        new.methods = methods.map { it.copy() }
        new.children = children.map { it.copy() }.toSet()
    }
}