package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * Base model interface for easier access.
 *
 * @author lars
 */
@Serializable
abstract class ModelElement<M : ModelElement<M>> {

    val id: Long = lastId++

    abstract fun copy(): M
    open fun getAllChildren(): List<ModelElement<*>> = listOf(this)
    open fun maxId(): Long = id

    abstract fun stringify(): String

    companion object {
        var lastId: Long = 0
    }
}
