package io.framed.framework.verifier

import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement

class TreeVerifier(
        private val bpmnTree: ModelTree<BpmnElement>,
        private val brosTree: ModelTree<ModelElement<*>>
) {

    private val verifierList = mutableListOf<Verifier>()

    fun register(verifier: Verifier) {
        verifierList += verifier
    }

    fun verify(): List<Result> {
        val bpmnSequence = bpmnTree.asSequence<BpmnElement>().toList()
        val brosSequence = brosTree.asSequence<ModelElement<*>>().toList()

        val results: MutableList<Result> = mutableListOf()

        for (verifier in verifierList) {
            for (bpmn in bpmnSequence) {
                if (verifier.filterBpmn(bpmn)) {
                    val result = verifier.verifyBpmn(bpmn)
                    if (result.type != Result.Type.IGNORE) {
                        results += result.copy(
                                bpmn = bpmn,
                                verifier = verifier
                        )
                    }
                }
            }
            for (bros in brosSequence) {
                if (verifier.filterBros(bros)) {
                    val result = verifier.verifyBros(bros)
                    if (result.type != Result.Type.IGNORE) {
                        results += result.copy(
                                bros = bros,
                                verifier = verifier
                        )
                    }
                }
            }
        }

        return results
    }
}