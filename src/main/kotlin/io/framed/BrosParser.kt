package io.framed

import io.framed.framework.ModelElement
import io.framed.model.*
import kotlinx.serialization.KSerializer
import kotlinx.serialization.json.Json

object BrosParser {

    init {
        register(Relationship.serializer())
        register(Fulfillment.serializer())
        register(Composition.serializer())
        register(Aggregation.serializer())
        register(Inheritance.serializer())
        register(CreateRelationship.serializer())
        register(DestroyRelationship.serializer())

        register(Parameter.serializer())
        register(Attribute.serializer())
        register(Method.serializer())
        register(RoleType.serializer())
        register(Event.serializer())
        register(ReturnEvent.serializer())
        register(Class.serializer())
        register(Package.serializer())
        register(Compartment.serializer())
        register(Scene.serializer())
    }

    private inline fun <reified M : ModelElement<M>> register(serializer: KSerializer<M>) {
        val className = M::class.simpleName!!
        PolymorphicSerializer.registerSerializer(M::class, serializer, "io.framed.model.$className")
    }

    fun parse(content: String): BrosDocument? = try {
        val document = Json.nonstrict.parse(BrosDocument.serializer(), content)
        ModelElement.lastId = document.maxId() + 1
        document
    } catch (e: Exception) {
        console.log(e)
        null
    }
}
