package io.framed.framework.matcher

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement


class TreeMatcher(
        private val bpmnTree: ModelTree<BpmnElement>,
        private val brosTree: ModelTree<ModelElement<*>>
) {

    private val matcherList = mutableListOf<Matcher>()

    fun register(matcher: Matcher) {
        matcherList += matcher
    }

    fun match(forceMatches: List<ForceMatch>) {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>().toList()
        val brosSequence = brosTree.asSequence<ModelElement<*>>().toList()

        for (bpmn in bpmnSequence) {
            for (bros in brosSequence) {
                for (matcher in matcherList) {
                    if (matcher.filterBpmn(bpmn) && matcher.filterBros(bros) && matcher.match(bpmn, bros)) {
                        bpmn.matchingElementsMap.getOrPut(bros) { mutableSetOf() } += matcher.name
                        bros.matchingElementsMap.getOrPut(bpmn) { mutableSetOf() } += matcher.name
                    }
                }
                for (match in forceMatches) {
                    if (bpmn.element.id == match.bpmn && bros.element.id == match.bros) {
                        when (match.type) {
                            ForceMatch.Type.MATCH -> {
                                bpmn.matchingElementsMap.getOrPut(bros) { mutableSetOf() } += "ForceMatcher"
                                bros.matchingElementsMap.getOrPut(bpmn) { mutableSetOf() } += "ForceMatcher"
                            }
                            ForceMatch.Type.NOMATCH -> {
                                bpmn.matchingElementsMap -= bros
                                bros.matchingElementsMap -= bpmn
                            }
                        }
                    }
                }
            }
        }
    }
}
