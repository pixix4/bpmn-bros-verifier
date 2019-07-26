package io.framed

import io.framed.framework.Context
import io.framed.framework.ModelRelation
import io.framed.framework.ModelTree
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.matcher.TreeMatcher
import io.framed.framework.verifier.TreeVerifier
import io.framed.model.bpmn.model.*
import io.framed.model.bros.ModelConnection
import io.framed.model.bros.ModelElement
import io.framed.model.bros.ModelElementGroup
import io.framed.modules.setupEvent
import io.framed.modules.setupLane
import org.w3c.dom.HTMLElement


fun generateBpmnTree(connections: List<ModelRelation<BpmnFlow>>, element: BpmnElement): ModelTree<BpmnElement> {
    val children = if (element is BpmnElementGroup && element !is BpmnLane) {
        element.content.filter { it !is BpmnFlow }.map { generateBpmnTree(connections, it) }
    } else emptyList()

    val tree = ModelTree(
            null,
            element,
            element::class,
            children
    )

    tree.children.forEach { it.parent = tree }

    for (connection in connections) {
        if (element.id == connection.relation.sourceRef) {
            tree.relations += connection
            connection.target = tree
        } else if (element.id == connection.relation.targetRef) {
            tree.relations += connection
            connection.source = tree
        }
    }

    return tree
}

fun generateBrosTree(connections: List<ModelRelation<ModelConnection<*>>>, element: ModelElement<*>): ModelTree<ModelElement<*>> {
    val children = if (element is ModelElementGroup<*>) {
        element.children.map { generateBrosTree(connections, it) }
    } else emptyList()

    val tree = ModelTree(
            null,
            element,
            element::class,
            children
    )

    tree.children.forEach { it.parent = tree }

    for (connection in connections) {
        if (element.id == connection.relation.sourceId) {
            tree.relations += connection
            connection.target = tree
        } else if (element.id == connection.relation.targetId) {
            tree.relations += connection
            connection.source = tree
        }
    }

    return tree
}

@Suppress("UnsafeCastFromDynamic")
fun verify(
        view: HTMLElement,
        bpmnTree: ModelTree<BpmnElement>,
        brosTree: ModelTree<ModelElement<*>>,
        predefinedMatches: List<PredefinedMatch>,
        onPredefinedMatchChange: (List<PredefinedMatch>) -> Unit
) {
    for (element in bpmnTree.asSequence()) {
        element.matchingElementsMap.clear()
    }
    for (element in brosTree.asSequence()) {
        element.matchingElementsMap.clear()
    }

    val useMatches: List<PredefinedMatch> = if (FeatureState.usePredefinedMatches) predefinedMatches else emptyList()

    /*
    console.log("--- bpmn ---")
    console.log(bpmnTree.log())
    console.log(bpmnTree.asSequence().groupingBy { it.element }.eachCount().filterValues { it > 1 }.entries.map { it.key to it.value }.toTypedArray())

    console.log("--- bros ---")
    console.log(brosTree.log())
    console.log(brosTree.asSequence().groupingBy { it.element }.eachCount().filterValues { it > 1 }.entries.map { it.key to it.value }.toTypedArray())

    console.log("--- predefined matching ---")
    console.log(useMatches.toTypedArray())
     */

    val context = Context()

    context.setupLane()
    context.setupEvent()

    val matcher = TreeMatcher(bpmnTree, brosTree)
    for (m in context.matcherList) {
        matcher.register(m)
    }
    val matchRounds = matcher.match(useMatches)

    val verifier = TreeVerifier(bpmnTree, brosTree)
    for (v in context.verifierList) {
        verifier.register(v)
    }
    val results = verifier.verify()

    render(view, bpmnTree, brosTree, predefinedMatches, onPredefinedMatchChange, results, matchRounds)

}

@Suppress("UNCHECKED_CAST")
fun ModelTree<BpmnElement>.containerName(): Pair<String, ModelTree<BpmnElement>>? {
    return when (val model = this.element) {
        is BpmnLane -> {
            model.name to this
        }
        is BpmnProcess -> {
            parent?.let { parent ->
                parent.children
                        .map { it.element }
                        .filterIsInstance<BpmnCollaboration>()
                        .firstOrNull()
                        ?.let { collaboration ->
                            collaboration.content
                                    .filterIsInstance<BpmnParticipant>()
                                    .firstOrNull { it.processRef == model.id }
                                    ?.name
                                    ?.let { it to this }
                        }
            }
        }
        else -> parent?.let { (it as ModelTree<BpmnElement>).containerName() }
    }
}
