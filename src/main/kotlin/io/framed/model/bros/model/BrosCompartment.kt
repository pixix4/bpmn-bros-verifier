package io.framed.model.bros.model

import io.framed.model.bros.PolymorphicListSerializer
import io.framed.model.bros.PolymorphicSetSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an crom compartment.
 *
 * @author Sebastian
 */
@Serializable
@SerialName("Compartment")
class BrosCompartment() : BrosObjectGroup() {

    constructor(init: (BrosCompartment) -> Unit) : this() {
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
    var attributes: List<BrosAttribute> = emptyList()

    /**
     * List of class methods
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var methods: List<BrosMethod> = emptyList()


    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<BrosObject> = emptySet()


    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            methods.map { it.maxId() }.max() ?: 0,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"
}
