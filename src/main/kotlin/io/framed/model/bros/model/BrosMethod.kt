package io.framed.model.bros.model

import io.framed.model.bros.PolymorphicListSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an uml model.
 *
 * @author lars
 */
@Serializable
@SerialName("Method")
class BrosMethod() : BrosElement() {

    constructor(init: (BrosMethod) -> Unit) : this() {
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
    var parameters: List<BrosParameter> = emptyList()

    override fun stringify() = "${this::class.simpleName}($name:$type)"
}
