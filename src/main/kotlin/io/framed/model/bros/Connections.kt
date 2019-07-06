package io.framed.model.bros

import io.framed.framework.util.PolymorphicSetSerializer
import kotlinx.serialization.Serializable

@Serializable
class Connections {

    @Serializable(with = PolymorphicSetSerializer::class)
    var connections: Set<ModelConnection<*>> = emptySet()

    fun maxId(): Long = listOfNotNull(
            connections.maxBy { it.id }?.id
    ).max() ?: 0
}