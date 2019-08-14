package io.framed.model.bros.model

import kotlinx.serialization.Serializable

/**
 * Base model interface for easier access.
 *
 * @author lars
 */
@Serializable
abstract class BrosElement {

    val id: Long = lastId++

    open fun maxId(): Long = id

    abstract fun stringify(): String

    companion object {
        var lastId: Long = 0
    }
}
