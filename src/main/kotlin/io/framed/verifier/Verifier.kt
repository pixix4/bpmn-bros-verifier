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

    abstract fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result?

    val name: String = this::class.simpleName ?: "UnknownVerifier"

    override fun toString() = "$name(modifier: ${modifier::class.simpleName})"
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

sealed class Modifier {
    object ALL : Modifier()
    data class ANY(val message: String) : Modifier()
    data class NONE(val message: String) : Modifier()
}

enum class ResultType {
    MATCH, ERROR, IGNORE
}

data class Result(
        val type: ResultType,
        val bpmn: ModelTree<BpmnElement>?,
        val bros: ModelTree<ModelElement<*>>?,
        val message: String,
        val verifier: Verifier?
) {
    companion object {
        fun ignore(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>) = Result(
                ResultType.IGNORE,
                bpmn,
                bros,
                "",
                null
        )

        fun match(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, message: String) = Result(
                ResultType.MATCH,
                bpmn,
                bros,
                message,
                null
        )

        fun error(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, message: String) = Result(
                ResultType.ERROR,
                bpmn,
                bros,
                message,
                null
        )
    }
}

data class VerifyResult(
        val environment: List<Result>,
        val bpmn: Map<BpmnElement, List<Result>>,
        val bros: Map<ModelElement<*>, List<Result>>
) {
    val hasErrors by lazy {
        bpmn.values.asSequence().flatten().firstOrNull { it.type == ResultType.ERROR } != null ||
                bros.values.asSequence().flatten().firstOrNull { it.type == ResultType.ERROR } != null
    }

    companion object {
        fun buildResult(results: List<Result>): VerifyResult {
            val filtered = results.filter { it.type != ResultType.IGNORE }

            val environment = filtered.filter { it.bros == null || it.bpmn == null }

            val bpmn = filtered.groupBy { it.bpmn }
                    .asSequence()
                    .mapNotNull { entry -> entry.key?.let { it.element to entry.value } }
                    .toMap()
            val bros = filtered.groupBy { it.bros }
                    .asSequence()
                    .mapNotNull { entry -> entry.key?.let { it.element to entry.value } }
                    .toMap()

            return VerifyResult(environment, bpmn, bros)
        }
    }
}

typealias Listener = (bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>) -> Result

abstract class AnyVerifier : Verifier() {

    private val list = mutableListOf<Listener>()

    override fun verify(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Result {
        val h = list.map { it(bpmn, bros) }

        return h.firstOrNull { it.type == ResultType.MATCH } ?: h.firstOrNull { it.type == ResultType.ERROR }
        ?: h.firstOrNull() ?: throw IllegalStateException("No listener in any verifier")
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
