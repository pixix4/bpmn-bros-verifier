package io.framed.model.bros

import io.framed.model.bros.model.*
import kotlinx.serialization.KSerializer
import kotlinx.serialization.json.Json

object BrosParser {

    init {
        register(BrosRelationship.serializer())
        register(BrosFulfillment.serializer())
        register(BrosComposition.serializer())
        register(BrosAggregation.serializer())
        register(BrosInheritance.serializer())
        register(BrosCreateRelation.serializer())
        register(BrosDestroyRelation.serializer())

        register(BrosParameter.serializer())
        register(BrosAttribute.serializer())
        register(BrosMethod.serializer())
        register(BrosRoleType.serializer())
        register(BrosEvent.serializer())
        register(BrosReturnEvent.serializer())
        register(BrosClass.serializer())
        register(BrosPackage.serializer())
        register(BrosCompartment.serializer())
        register(BrosScene.serializer())
    }

    private inline fun <reified M : BrosElement> register(serializer: KSerializer<M>) {
        //val className = M::class.simpleName!!
        val serialName = serializer.descriptor.name
        PolymorphicSerializer.registerSerializer(M::class, serializer, "io.framed.model.$serialName")
    }

    fun parse(content: String): BrosDocument? = try {
        @Suppress("EXPERIMENTAL_API_USAGE") val document = Json.nonstrict.parse(BrosDocument.serializer(), content)
        BrosElement.lastId = document.maxId() + 1
        document
    } catch (e: Exception) {
        //console.log(e)
        null
    }
}
