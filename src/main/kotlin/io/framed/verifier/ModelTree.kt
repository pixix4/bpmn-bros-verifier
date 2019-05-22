package io.framed.verifier

import kotlin.reflect.KClass

class ModelTree<out T : Any>(
        var parent: ModelTree<*>?,
        val element: T,
        val type: KClass<out T>,
        val children: List<ModelTree<*>>
) {
    val isRoot: Boolean = parent == null

    inline fun <reified M> model(): M? {
        return element as? M
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

}