package io.framed.framework

import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement
import kotlin.reflect.KClass

class ModelTree<out T : Any>(
        var parent: ModelTree<*>?,
        val element: T,
        val type: KClass<out T>,
        val children: List<ModelTree<*>>
) {
    val isRoot: Boolean = parent == null

    val relations = mutableSetOf<ModelRelation<*>>()

    val matchingElements = mutableListOf<ModelTree<*>>()

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

    fun log(): dynamic {
        val current = "<${element::class.simpleName}> $element"
        val child = children.map(ModelTree<*>::log).toTypedArray()
        val obj = js("{}")
        obj[current] = child
        return obj
    }

    override fun toString() = when (element) {
        is BpmnElement -> element.log(false)
        is ModelElement<*> -> element.stringify()
        else -> element.toString()
    }
}

