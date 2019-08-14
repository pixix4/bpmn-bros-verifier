package io.framed.model.bros.model

import io.framed.model.bros.PolymorphicListSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model roleType for an uml roleType.
 *
 * @author lars
 */
@Serializable
@SerialName("RoleType")
class BrosRoleType() : BrosObject() {

    constructor(init: (BrosRoleType) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this roleType
     */
    var name: String = "UnnamedRole"

    /**
     * List of roleType attributes
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var attributes: List<BrosAttribute> = emptyList()

    /**
     * List of roleType methods
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var methods: List<BrosMethod> = emptyList()

    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            methods.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"
}
