package io.framed.model.bros

import io.framed.framework.util.PolymorphicListSerializer
import io.framed.framework.util.PolymorphicSetSerializer
import kotlinx.serialization.Serializable

/**
 * Model class for a bros scene.
 */
@Serializable
class Scene() : ModelElementGroup<Scene>() {

    constructor(init: (Scene) -> Unit) : this() {
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
    var attributes: List<Attribute> = emptyList()


    @Serializable(with = PolymorphicSetSerializer::class)
    override var children: Set<ModelElement<*>> = emptySet()

    override fun getAllChildren(): List<ModelElement<*>> {
        return super.getAllChildren() + children.flatMap { it.getAllChildren() } + attributes.flatMap { it.getAllChildren() }
    }

    override fun maxId(): Long = listOf(
            id,
            attributes.map { it.maxId() }.max() ?: 0,
            children.map { it.maxId() }.max() ?: 0
    ).max() ?: id

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy() = Scene { new ->
        new.name = name
        new.attributes = attributes.map { it.copy() }
        new.children = children.map { it.copy() }.toSet()
    }
}
