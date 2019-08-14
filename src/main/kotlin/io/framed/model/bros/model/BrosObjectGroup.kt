package io.framed.model.bros.model

import kotlinx.serialization.Serializable

/**
 * Base model interface for easier access.
 *
 * @author lars
 */
@Serializable
abstract class BrosObjectGroup : BrosObject() {

    abstract val children: Collection<BrosObject>

    final override fun getAllChildren(): List<BrosObject> = listOf(this) + children.flatMap { it.getAllChildren() }
}
