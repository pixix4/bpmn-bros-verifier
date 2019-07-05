package io.framed.verifier

import io.framed.bpmn.model.BpmnElement
import io.framed.framework.ModelElement

class Executor(
        val verifier: Verifier
) {

    private val aggregator: Aggregator = when (val grouping = verifier.grouping) {
        Grouping.None -> DefaultAggregator()
        is Grouping.Bpmn<*> -> BpmnGroupingAggregator(grouping)
        is Grouping.Bros<*> -> BrosGroupingAggregator(grouping)
    }

    fun reset() {
        aggregator.reset()
    }

    fun execute(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>) {
        if (!verifier.filterBpmn(bpmn)) return
        if (!verifier.filterBros(bros)) return

        val result = verifier.verify(bpmn, bros)

        aggregator.pushResult(bpmn, bros, result)
    }

    fun aggregateResults() = aggregator.aggregateResults().map { it.copy(verifier = verifier) }

    interface Aggregator {

        fun reset()

        fun pushResult(
                bpmn: ModelTree<BpmnElement>,
                bros: ModelTree<ModelElement<*>>,
                result: Result?
        )

        fun aggregateResults(): List<Result>

        fun doStuff(results: List<Result>, modifier: Modifier): List<Result> {
            @Suppress("NAME_SHADOWING") val results = results.filter { it.type != ResultType.IGNORE }

            if (results.isEmpty()) return results

            return when (modifier) {
                is Modifier.ALL -> {
                    results
                }
                is Modifier.ANY -> {
                    val matches = results.filter { it.type == ResultType.MATCH }
                    if (matches.isEmpty()) {
                        listOf(Result(
                                ResultType.ERROR,
                                null,
                                null,
                                modifier.message,
                                null
                        ))
                    } else matches
                }
                is Modifier.NONE -> {
                    val matches = results.filter { it.type == ResultType.MATCH }
                    if (matches.isEmpty()) {
                        listOf(Result(
                                ResultType.MATCH,
                                null,
                                null,
                                modifier.message,
                                null
                        ))
                    } else {
                        matches.map { it.copy(type = ResultType.ERROR) }
                    }
                }
            }
        }

        fun doStuffDeep(results: List<List<Result>>, modifier: Modifier): List<Result> {
            @Suppress("NAME_SHADOWING") val results =
                    results.map { it.filter { it.type != ResultType.IGNORE } }.filter { it.isNotEmpty() }

            if (results.isEmpty()) return emptyList()

            val list = results.map {
                Pair(
                        it.firstOrNull { it.type == ResultType.MATCH } != null,
                        it.firstOrNull { it.type == ResultType.ERROR } != null
                ) to it
            }
            return when (modifier) {
                is Modifier.ALL -> {
                    if (list.none { !it.first.first }) {
                        results.flatten().filter { it.type == ResultType.MATCH }
                    } else {
                        results.flatten()
                    }
                }
                is Modifier.ANY -> {
                    if (list.any { it.first.first }) {
                        results.flatten().filter { it.type == ResultType.MATCH }
                    } else {
                        results.flatten()
                    }
                }
                is Modifier.NONE -> {
                    if (list.none { it.first.first }) {
                        results.flatten().filter { it.type == ResultType.MATCH }
                    } else {
                        results.flatten()
                    }
                }
            }
        }
    }

    inner class DefaultAggregator : Aggregator {

        private val results = mutableListOf<Result>()

        override fun reset() {
            results.clear()
        }

        override fun pushResult(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result?) {
            results += result ?: return
        }

        override fun aggregateResults(): List<Result> = doStuff(results, verifier.modifier)
    }

    inner class BpmnGroupingAggregator(private val grouping: Grouping.Bpmn<*>) : Aggregator {

        private val results = mutableMapOf<ModelTree<BpmnElement>, MutableList<Result>>()

        override fun reset() {
            results.clear()
        }

        override fun pushResult(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result?) {
            results.getOrPut(bpmn) { mutableListOf() } += result ?: return
        }

        override fun aggregateResults(): List<Result> {
            val list = results.map { (key, value) ->
                doStuff(value, grouping.modifier).map {
                    it.copy(bpmn = key, message = it.message.replace("{}", key.element.stringify()))
                }
            }

            return doStuffDeep(list, verifier.modifier)
        }
    }

    inner class BrosGroupingAggregator(private val grouping: Grouping.Bros<*>) : Aggregator {

        private val results = mutableMapOf<ModelTree<ModelElement<*>>, MutableList<Result>>()

        override fun reset() {
            results.clear()
        }

        override fun pushResult(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result?) {
            results.getOrPut(bros) { mutableListOf() } += result ?: return
        }

        override fun aggregateResults(): List<Result> {
            val list = results.map { (key, value) ->
                doStuff(value, grouping.modifier).map {
                    it.copy(bros = key, message = it.message.replace("{}", key.element.toString()))
                }
            }

            return doStuffDeep(list, verifier.modifier)
        }
    }
}

class TreeVerifier(
        val bpmnTree: ModelTree<BpmnElement>,
        val brosTree: ModelTree<ModelElement<*>>
) {

    private val executorList = mutableListOf<Executor>()

    fun register(verifier: Verifier) {
        executorList += Executor(verifier)
    }

    fun indexOf(verifier: Verifier): Int = executorList.indexOfFirst { it.verifier == verifier }

    fun verify(): List<Result> {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>().toList()
        val brosSequence = brosTree.asSequence<ModelElement<*>>().toList()

        for (executor in executorList) {
            executor.reset()
        }

        for (bpmn in bpmnSequence) {
            for (bros in brosSequence) {
                for (executor in executorList) {
                    executor.buildMatching(bpmn, bros)
                }
            }
        }

        for (executor in executorList) {
            for (bpmn in bpmnSequence) {
                executor.verifyBpmn(bpmn)
            }
            for (bros in brosSequence) {
                executor.verifyBros(bros)
            }
        }

        return executorList.flatMap { it.aggregateResults() }
    }
}