package io.framed.model.bros

import io.framed.model.bros.model.BrosPackage
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import kotlin.math.max

@Serializable
class BrosDocument(
        @Serializable(with = PolymorphicSerializer::class)
        val root: BrosPackage,
        val connections: Connections
) {

    @Transient
    val name: String
        get() = root.name.toLowerCase()

    fun maxId(): Long {
        return max(root.maxId(), connections.maxId())
    }
}
