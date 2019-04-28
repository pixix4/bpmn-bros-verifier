package io.framed

import io.framed.model.Connections
import io.framed.model.Package
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
