package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * Model class for an BROS create relation
 *
 * @author Sebastian
 */
@Serializable
class CreateRelationship() : ModelConnection<CreateRelationship>() {

    constructor(sourceId: Long, targetId: Long): this() {
        this.sourceId = sourceId
        this.targetId = targetId
    }

    /**
     * Name of this connection.
     */
    var name: String = ""

    override fun stringify() = "${this::class.simpleName}($name)"

    override fun copy() = CreateRelationship().also { new ->
        new.name = name
    }
}
