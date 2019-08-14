package io.framed.model.bros.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an uml model.
 *
 * @author lars
 */
@Serializable
@SerialName("Attribute")
class BrosAttribute() : BrosElement() {

    constructor(init: (BrosAttribute) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this model.
     */
    var name: String = "unnamed"

    /**
     * Type of this model.
     */
    var type: String = ""

    override fun stringify() = "${this::class.simpleName}($name:$type)"
}
