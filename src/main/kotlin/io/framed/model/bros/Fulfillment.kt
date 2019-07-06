package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * Model class for an uml connection.
 *
 * @author lars
 */
@Serializable
class Fulfillment() : ModelConnection<Fulfillment>() {

    constructor(sourceId: Long, targetId: Long): this() {
        this.sourceId = sourceId
        this.targetId = targetId
    }

    /**
     * Name of this connection.
     */
    var name: String = ""

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy() = Fulfillment().also { new ->
        new.name = name
    }
}
