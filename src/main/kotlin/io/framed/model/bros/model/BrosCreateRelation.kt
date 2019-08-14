package io.framed.model.bros.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Model class for an BROS create relation
 *
 * @author Sebastian
 */
@Serializable
@SerialName("CreateRelationship")
class BrosCreateRelation() : BrosConnection() {

    constructor(sourceId: Long, targetId: Long) : this() {
        this.sourceId = sourceId
        this.targetId = targetId
    }

    /**
     * Name of this connection.
     */
    var name: String = ""

    override fun stringify() = "${this::class.simpleName}($name)"
}
