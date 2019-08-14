package io.framed.model.bros.model

import io.framed.model.bros.PolymorphicListSerializer
import io.framed.model.bros.PolymorphicSetSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for a bros scene.
 */
@Serializable
@SerialName("Scene")
class BrosScene() : BrosObjectGroup() {

    constructor(init: (BrosScene) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this scene
     */
    var name: String = "UnnamedScene"

    /**
     * List of scene attributes
     */
    @Serializable(with = PolymorphicListSerializer::class)
    var attributes: List<BrosAttribute> = emptyList()


    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<BrosObject> = emptySet()

    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

}
