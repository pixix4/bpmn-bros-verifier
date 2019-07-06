package io.framed.framework.util

import io.framed.model.bros.Connections
import io.framed.model.bros.Package
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import kotlin.math.max

@Serializable
class BrosDocument(
        @Serializable(with = PolymorphicSerializer::class)
        val root: Package,
        val connections: Connections
) {

    @Transient
    val name: String
        get() = root.name.toLowerCase()

    fun maxId(): Long {
        return max(root.maxId(), connections.maxId())
    }
}
