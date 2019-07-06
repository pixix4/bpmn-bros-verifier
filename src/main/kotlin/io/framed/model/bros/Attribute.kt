package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * Model class for an uml model.
 *
 * @author lars
 */
@Serializable
class Attribute() : ModelElement<Attribute>() {

    constructor(init: (Attribute) -> Unit) : this() {
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

    override fun copy() = Attribute { new ->
        new.name = name
        new.type = type
    }
}
