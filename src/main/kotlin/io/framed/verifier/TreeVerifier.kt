package io.framed.verifier

import io.framed.bpmn.model.BpmnElement
import io.framed.bpmn.model.BpmnModel
import io.framed.framework.ModelElement
import io.framed.model.Package

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

        if (result == Result.Ignore) return
    }

    fun getErrors() = aggregator.getErrors()

    interface Aggregator {

        fun reset()

        fun aggregate(
                bpmn: ModelTree<BpmnElement>,
                bros: ModelTree<ModelElement<*>>,
                result: Result
        )

        fun getErrors(): List<Result.Error>
    }

    inner class DefaultAggregator : Aggregator {

        private val results = mutableListOf<Result>()

        override fun reset() {
            results.clear()
        }

        override fun aggregate(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result) {
            if (result == Result.Ignore) return

            results += result
        }

        override fun getErrors(): List<Result.Error> {
            return when (verifier.modifier) {
                Modifier.ALL -> {
                    results.filterIsInstance<Result.Error>()
                }
                Modifier.ANY -> {
                    if (results.find { it is Result.Valid } != null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
                Modifier.NONE -> {
                    if (results.find { it is Result.Valid } == null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
            }
        }
    }

    inner class BpmnGroupingAggregator(private val grouping: Grouping.Bpmn<*>) : Aggregator {

        private val results = mutableMapOf<Any, MutableList<Result>>()

        override fun reset() {
            results.clear()
        }

        override fun aggregate(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result) {
            if (result == Result.Ignore) return

            val list = results.getOrPut(bpmn.element) { mutableListOf() }
            list += result
        }

        private fun getEntryErrors(key: Any, list: List<Result>): List<Result.Error> {
            return when (grouping.modifier) {
                Modifier.ALL -> {
                    list.filterIsInstance<Result.Error>()
                }
                Modifier.ANY -> {
                    if (list.find { it is Result.Valid } != null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
                Modifier.NONE -> {
                    if (list.find { it is Result.Valid } == null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("Matching element!"))
                    }
                }
            }
        }

        override fun getErrors(): List<Result.Error> {
            val list = results.map { (key, value) ->
                getEntryErrors(key, value)
            }
            return when (verifier.modifier) {
                Modifier.ALL -> {
                    list.flatten()
                }
                Modifier.ANY -> {
                    if (list.find { it.isEmpty() } != null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
                Modifier.NONE -> {
                    if (list.find { it.isNotEmpty() } == null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("Matching element!"))
                    }
                }
            }
        }
    }

    inner class BrosGroupingAggregator(private val grouping: Grouping.Bros<*>) : Aggregator {

        private val results = mutableMapOf<Any, MutableList<Result>>()

        override fun reset() {
            results.clear()
        }

        override fun aggregate(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>, result: Result) {
            if (result == Result.Ignore) return

            val list = results.getOrPut(bros.element) { mutableListOf() }
            list += result
        }

        private fun getEntryErrors(key: Any, list: List<Result>): List<Result.Error> {
            return when (grouping.modifier) {
                Modifier.ALL -> {
                    list.filterIsInstance<Result.Error>()
                }
                Modifier.ANY -> {
                    if (list.find { it is Result.Valid } != null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
                Modifier.NONE -> {
                    if (list.find { it is Result.Valid } == null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("Matching element!"))
                    }
                }
            }
        }

        override fun getErrors(): List<Result.Error> {
            val list = results.map { (key, value) ->
                getEntryErrors(key, value)
            }
            return when (verifier.modifier) {
                Modifier.ALL -> {
                    list.flatten()
                }
                Modifier.ANY -> {
                    if (list.find { it.isEmpty() } != null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("No matching element!"))
                    }
                }
                Modifier.NONE -> {
                    if (list.find { it.isNotEmpty() } == null) {
                        emptyList()
                    } else {
                        listOf(Result.Error("Matching element!"))
                    }
                }
            }
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

    fun verify(): List<Result.Error> {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>()
        val brosSequence = brosTree.asSequence<ModelElement<*>>()

        for (executor in executorList) {
            executor.reset()
        }

        for (bpmn in bpmnSequence) {
            for (bros in brosSequence) {
                for (executor in executorList) {
                    executor.execute(bpmn, bros)
                }
            }
        }

        return executorList.flatMap { it.getErrors() }
    }

}