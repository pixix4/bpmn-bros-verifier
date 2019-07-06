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

    fun match() {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>().toList()
        val brosSequence = brosTree.asSequence<ModelElement<*>>().toList()

        for (bpmn in bpmnSequence) {
            for (bros in brosSequence) {
                for (matcher in matcherList) {
                    if (matcher.filterBpmn(bpmn) && matcher.filterBros(bros) && matcher.match(bpmn, bros)) {
                        bpmn.matchingElements += bros
                        bros.matchingElements += bpmn
                    }
                }
            }
        }
    }
}
