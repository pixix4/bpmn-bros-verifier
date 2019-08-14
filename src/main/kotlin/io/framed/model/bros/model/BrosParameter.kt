package io.framed.model.bros.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an uml parameter.
 *
 * @author lars
 */
@Serializable
@SerialName("Parameter")
class BrosParameter() : BrosElement() {

    constructor(init: (BrosParameter) -> Unit) : this() {
        init(this)
    }

    /**
     * Name of this parameter.
     */
    var name: String = "unnamed"

    /**
     * Type of this parameter.
     */
    var type: String = ""

    override fun toString(): String =
            name + type.let {
                if (type.isBlank()) "" else ": $it"
            }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is BrosParameter) return false

        if (name != other.name) return false
        if (type != other.type) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + type.hashCode()
        return result
    }

    override fun stringify() = "${this::class.simpleName}($name:$type)"
}
