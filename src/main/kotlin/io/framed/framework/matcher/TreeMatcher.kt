package io.framed.framework.matcher

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement


class TreeMatcher(
        private val bpmnTree: ModelTree<BpmnElement>,
        private val brosTree: ModelTree<BrosElement>
) {

    private val matcherList = mutableListOf<Matcher>()

    fun register(matcher: Matcher) {
        matcherList += matcher
    }

    fun match(predefinedMatches: List<PredefinedMatch>): Int? {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>().toList()
        val brosSequence = brosTree.asSequence<BrosElement>().toList()

        var bpmnState = bpmnSequence.associateWith { it.matchingElements.toSet() }
        var brosState = brosSequence.associateWith { it.matchingElements.toSet() }
        var hasChanged = true

        var remainingRounds = MAX_ROUNDS

        while (hasChanged && remainingRounds > 0) {
            remainingRounds--
            hasChanged = false

            for (bpmn in bpmnSequence) {
                for (bros in brosSequence) {
                    for (matcher in matcherList) {
                        if (matcher.filterBpmn(bpmn) && matcher.filterBros(bros) && matcher.match(bpmn, bros)) {
                            bpmn.matchingElementsMap.getOrPut(bros) { mutableSetOf() } += matcher.name
                            bros.matchingElementsMap.getOrPut(bpmn) { mutableSetOf() } += matcher.name
                        }
                    }
                    for (match in predefinedMatches) {
                        if (bpmn.element.id == match.bpmn && bros.element.id == match.bros) {
                            when (match.type) {
                                PredefinedMatch.Type.MATCH -> {
                                    bpmn.matchingElementsMap.getOrPut(bros) { mutableSetOf() } += "PredefinedMatcher"
                                    bros.matchingElementsMap.getOrPut(bpmn) { mutableSetOf() } += "PredefinedMatcher"
                                }
                                PredefinedMatch.Type.NOMATCH -> {
                                    bpmn.matchingElementsMap -= bros
                                    bros.matchingElementsMap -= bpmn
                                }
                            }
                        }
                    }
                }
            }

            val newBpmnState = bpmnSequence.associateWith { it.matchingElements.toSet() }
            val newBrosState = brosSequence.associateWith { it.matchingElements.toSet() }

            if (newBpmnState != bpmnState) {
                hasChanged = true
            }
            if (newBrosState != brosState) {
                hasChanged = true
            }

            bpmnState = newBpmnState
            brosState = newBrosState
        }

        if (remainingRounds <= 0) return null
        return MAX_ROUNDS - remainingRounds
    }

    companion object {
        const val MAX_ROUNDS = 100
    }
}
