package io.framed.framework

import kotlin.reflect.KClass

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