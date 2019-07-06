package io.framed.model.bros

import io.framed.framework.util.PolymorphicSetSerializer
import kotlinx.serialization.Serializable

/**
 * Model class for an uml package (package is a reserved keyword).
 *
 * It contains classes, connections, role types and nested packages.
 */
@Serializable
class Package() : ModelElementMetadata<Package>() {

    constructor(init: (Package) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this package.
     */
    var name: String = "UnnamedPackage"

    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<ModelElement<*>> = emptySet()

    override fun getAllChildren(): List<ModelElement<*>> {
        return super.getAllChildren() + children.flatMap { it.getAllChildren() }
    }

    override fun maxId(): Long = listOf(
            id,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy(): Package = Package { new ->
        new.name = name
        new.children = children.map { it.copy() }.toSet()
    }
}
