package io.framed.model.bros.model

import io.framed.model.bros.PolymorphicSetSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an uml package (package is a reserved keyword).
 *
 * It contains classes, connections, role types and nested packages.
 */
@Serializable
@SerialName("Package")
class BrosPackage() : BrosObjectGroup() {

    constructor(init: (BrosPackage) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this package.
     */
    var name: String = "UnnamedPackage"

    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<BrosObject> = emptySet()

    override fun maxId(): Long = listOf(
            id,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

}
