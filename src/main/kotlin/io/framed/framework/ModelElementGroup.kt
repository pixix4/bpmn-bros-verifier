package io.framed.framework

import kotlinx.serialization.Serializable

/**
 * Base model interface for easier access.
 *
 * @author lars
 */
@Serializable
abstract class ModelElementGroup<M : ModelElementGroup<M>> : ModelElement<M>() {

    abstract val children: Collection<ModelElement<*>>
}
