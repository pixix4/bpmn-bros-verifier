package io.framed.model.bros

import kotlinx.serialization.Serializable

@Serializable
abstract class ModelConnection<M : ModelConnection<M>>() : ModelElement<M>() {

    var sourceId: Long = id
    var targetId: Long = id
}
