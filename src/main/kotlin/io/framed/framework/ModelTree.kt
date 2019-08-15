package io.framed.framework

import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement
import kotlin.reflect.KClass

class ModelTree<out T : Any>(
        var parent: ModelTree<*>?,
        val element: T,
        val type: KClass<out T>,
        val children: List<ModelTree<*>>
) {
    val isRoot: Boolean = parent == null

    val relations = mutableSetOf<ModelRelation<*>>()

    val matchingElementsMap = mutableMapOf<ModelTree<*>, MutableSet<String>>()
    val matchingElements: Set<ModelTree<*>>
        get() = matchingElementsMap.keys

    inline fun <reified M> checkType(): Boolean {
        return element is M
    }

    inline fun <reified M> model(): M? {
        return element as? M
    }

    inline fun <reified M : Any> relations(): List<ModelRelation<M>> {
        @Suppress("UNCHECKED_CAST")
        return relations.filter {
            it.checkType<M>()
        } as List<ModelRelation<M>>
    }

    fun <S : Any> asSequence() = object : Sequence<ModelTree<S>> {
        override fun iterator() = object : Iterator<ModelTree<S>> {

            private val queue = mutableListOf<ModelTree<*>>(this@ModelTree)

            override fun hasNext(): Boolean = queue.isNotEmpty()

            override fun next(): ModelTree<S> {
                if (!hasNext()) throw IllegalStateException("End reached!")

                @Suppress("UNCHECKED_CAST") val top = queue.removeAt(0) as ModelTree<S>

                queue.addAll(top.children)

                return top
            }
        }
    }

    fun asSequence() = asSequence<T>()

    inline fun <reified M: Any> parent(): ModelTree<M>? {
        val p = parent ?: return null
        if (p.element is M) {
            @Suppress("UNCHECKED_CAST")
            return p as ModelTree<M>
        }
        return null
    }

    fun log(): dynamic {
        val current = "<${element::class.simpleName}> $element"
        val child = children.map(ModelTree<*>::log).toTypedArray()
        val obj = js("{}")
        obj[current] = child
        return obj
    }

    override fun toString() = when (element) {
        is BpmnElement -> element.stringify()
        is BrosElement -> element.stringify()
        else -> element.toString()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class.js != other::class.js) return false

        other as ModelTree<*>

        if (element != other.element) return false

        return true
    }

    override fun hashCode(): Int {
        return element.hashCode()
    }
}

inline fun <reified T: Any> ModelTree<*>.transitiveParent(): List<ModelTree<T>> {
    var element = this
    val parents = mutableListOf<ModelTree<T>>()
    while (element.parent != null) {
        val p = element.parent<T>() ?: break
        parents += p
        element = p
    }
    return parents
}
