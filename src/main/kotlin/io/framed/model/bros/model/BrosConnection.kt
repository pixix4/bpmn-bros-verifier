package io.framed.model.bros.model

import kotlinx.serialization.Serializable

@Serializable
abstract class BrosConnection : BrosElement() {
    var sourceId: Long = id
    var targetId: Long = id
}
