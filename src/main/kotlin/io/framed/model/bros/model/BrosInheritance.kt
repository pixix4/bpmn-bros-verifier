package io.framed.model.bros.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an uml connection.
 *
 * @author lars
 */
@Serializable
@SerialName("Inheritance")
class BrosInheritance() : BrosConnection() {

    constructor(sourceId: Long, targetId: Long) : this() {
        this.sourceId = sourceId
        this.targetId = targetId
    }

    /**
     * Name of this connection.
     */
    var name: String = ""

    /**
     * Cardinality for the source side of this connection.
     */
    var sourceCardinality: String = ""

    /**
     * Cardinality for the target side of this connection.
     */
    var targetCardinality: String = ""

    override fun stringify() = "${this::class.simpleName}($name)"
}
