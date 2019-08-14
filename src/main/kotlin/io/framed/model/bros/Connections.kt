package io.framed.model.bros

import io.framed.model.bros.model.BrosConnection
import kotlinx.serialization.Serializable

@Serializable
class Connections {

    @Serializable(with = PolymorphicSetSerializer::class)
    var connections: Set<BrosConnection> = emptySet()

    fun maxId(): Long = listOfNotNull(
            connections.maxBy { it.id }?.id
    ).max() ?: 0
}