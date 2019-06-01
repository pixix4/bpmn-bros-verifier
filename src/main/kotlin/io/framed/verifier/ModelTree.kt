package io.framed.verifier

import kotlin.reflect.KClass

class ModelTree<out T : Any>(
        var parent: ModelTree<*>?,
        val element: T,
        val type: KClass<out T>,
        val children: List<ModelTree<*>>
) {
    val isRoot: Boolean = parent == null

    val relations = mutableSetOf<ModelRelation<*>>()

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
}

class ModelRelation<out T : Any>(
        val relation: T,
        val type: KClass<out T>
) {

    lateinit var source: ModelTree<*>
    lateinit var target: ModelTree<*>

    inline fun <reified M> checkType(): Boolean {
        return relation is M
    }

    inline fun <reified M> model(): M? {
        return relation as? M
    }

    inline fun <reified M> checkSourceType(): Boolean {
        return source.checkType<M>()
    }

    inline fun <reified M : Any> source(): ModelTree<M>? {
        if (!source.checkType<M>()) return null
        @Suppress("UNCHECKED_CAST")
        return source as ModelTree<M>
    }

    inline fun <reified M> sourceModel(): M? {
        return source.model()
    }

    inline fun <reified M> checkTargetType(): Boolean {
        return target.checkType<M>()
    }

    inline fun <reified M : Any> target(): ModelTree<M>? {
        if (!target.checkType<M>()) return null
        @Suppress("UNCHECKED_CAST")
        return target as ModelTree<M>
    }

    inline fun <reified M> targetModel(): M? {
        return target.model()
    }
}