package io.framed.verifier

import io.framed.bpmn.model.BpmnElement
import io.framed.framework.ModelElement
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import kotlin.reflect.KClass

abstract class Verifier() {

    abstract val modifier: Modifier

    abstract val grouping: Grouping

    fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean = grouping.filterBpmn(bpmn)

    fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean = grouping.filterBros(bros)

    abstract fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result

    private val logList = mutableListOf<String>()
    fun log(message: Any?) {
        logList += message.toString()
    }

    fun consumeLog(): List<String> {
        val copy = logList.toList()
        logList.clear()
        return copy
    }
}

sealed class Grouping() {

    open fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean = true

    open fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean = true

    object None : Grouping()

    data class Bpmn<T : BpmnElement>(
            val type: KClass<T>,
            val modifier: Modifier
    ) : Grouping() {
        override fun filterBpmn(bpmn: ModelTree<BpmnElement>): Boolean {
            return type.isInstance(bpmn.element)
        }
    }

    data class Bros<T : ModelElement<T>>(
            val type: KClass<T>,
            val modifier: Modifier
    ) : Grouping() {
        override fun filterBros(bros: ModelTree<ModelElement<*>>): Boolean {
            return type == bros.type
        }
    }
}

enum class Modifier {
    ALL, ANY, NONE
}

sealed class Result {
    object Ignore : Result()
    object Valid : Result()
    data class Error(val reason: String, val source: String = "") : Result()
}

typealias Listener = (bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>) -> Result

abstract class AnyVerifier : Verifier() {

    private val list = mutableListOf<Listener>()

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val h = list.map { it(bpmn, bros) }

        return h.firstOrNull { it is Result.Valid } ?: h.firstOrNull { it is Result.Error } ?: Result.Ignore
    }

    fun execute(verify: Listener) {
        list += verify
    }
}

fun match(string1: String, string2: String): Boolean {

    val a = string1
            .replace("([a-z])([A-Z])".toRegex(), "$1 $2")
            .split(" ")
            .map { it.toLowerCase().trim() }
            .filter { it.isNotEmpty() }

    val b = string2
            .replace("([a-z])([A-Z])".toRegex(), "$1 $2")
            .split(" ")
            .map { it.toLowerCase().trim() }
            .filter { it.isNotEmpty() }

    if (a.isEmpty() || b.isEmpty() || min(a.size, b.size).toDouble() / max(a.size, b.size).toDouble() < 0.6) return false

    val longer: List<String>
    val shorter: List<String>
    if (a.size >= b.size) {
        longer = a
        shorter = b
    } else {
        longer = b
        shorter = a
    }

    return shorter.all { short ->
        val s = short.take(max(3, short.length - 2))
        for (long in longer) {
            val l = long.take(max(3, long.length - 2))
            if (long.startsWith(s) || short.startsWith(l) && abs(l.length - s.length) <= 2) return@all true
        }
        return@all false
    }
}
