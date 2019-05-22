package io.framed.model

import io.framed.framework.ModelElement
import io.framed.framework.ModelElementGroup
import kotlinx.serialization.Serializable

/**
 * Base model interface for easier access.
 *
 * @author lars
 */
@Serializable
abstract class ModelElementMetadata<M : ModelElementMetadata<M>> : ModelElementGroup<M>() {
    val metadata: Metadata = Metadata()
}
