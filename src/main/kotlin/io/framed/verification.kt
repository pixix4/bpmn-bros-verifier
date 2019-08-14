package io.framed

import de.westermann.kobserve.property.property
import io.framed.framework.Context
import io.framed.framework.ModelRelation
import io.framed.framework.ModelTree
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.matcher.TreeMatcher
import io.framed.framework.verifier.Result
import io.framed.framework.verifier.TreeVerifier
import io.framed.model.bpmn.BpmnModel
import io.framed.model.bpmn.model.*
import io.framed.model.bros.model.BrosConnection
import io.framed.model.bros.model.BrosElement
import io.framed.model.bros.model.BrosObjectGroup
import io.framed.modules.activeModules
import io.framed.ui.FeatureState

fun generateBpmnTree(connections: List<ModelRelation<BpmnElement>>, element: BpmnElement): ModelTree<BpmnElement> {
    val children = when (element) {
        is BpmnModel -> element.content.filter { it !is BpmnSequenceFlow && it !is BpmnMessageFlow }.map { generateBpmnTree(connections, it) }
        is BpmnProcess -> element.content.filter { it !is BpmnSequenceFlow && it !is BpmnMessageFlow }.map { generateBpmnTree(connections, it) }
        is BpmnLaneSet -> element.content.map { generateBpmnTree(connections, it) }
        is BpmnLane -> element.content.map { generateBpmnTree(connections, it) }
        else -> emptyList()
    }

    val tree = ModelTree(
            null,
            element,
            element::class,
            children
    )

    tree.children.forEach { it.parent = tree }

    for (connection in connections) {
        when (connection.relation) {
            is BpmnMessageFlow -> if (element.id == connection.relation.sourceRef) {
                tree.relations += connection
                connection.target = tree
            } else if (element.id == connection.relation.targetRef) {
                tree.relations += connection
                connection.source = tree
            }
            is BpmnSequenceFlow -> if (element.id == connection.relation.sourceRef) {
                tree.relations += connection
                connection.target = tree
            } else if (element.id == connection.relation.targetRef) {
                tree.relations += connection
                connection.source = tree
            }
        }
    }

    return tree
}

fun generateBrosTree(connections: List<ModelRelation<BrosConnection>>, element: BrosElement): ModelTree<BrosElement> {
    val children = if (element is BrosObjectGroup) {
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

data class RenderableData(
        val bpmnTree: ModelTree<BpmnElement>,
        val brosTree: ModelTree<BrosElement>,
        val predefinedMatches: List<PredefinedMatch>,
        val results: List<Result>,
        val matchRounds: Int? = null
) {

    init {
        renderableProperty.value = this
    }

    companion object {
        val renderableProperty = property<RenderableData?>(null)
        var renderableData by renderableProperty
    }
}

@Suppress("UnsafeCastFromDynamic")
fun verify(
        bpmnTree: ModelTree<BpmnElement>,
        brosTree: ModelTree<BrosElement>,
        predefinedMatches: List<PredefinedMatch>
) {
    for (element in bpmnTree.asSequence()) {
        element.matchingElementsMap.clear()
    }
    for (element in brosTree.asSequence()) {
        element.matchingElementsMap.clear()
    }

    val useMatches: List<PredefinedMatch> = if (FeatureState.usePredefinedMatches) predefinedMatches else emptyList()

    val context = Context()

    for (module in activeModules) {
        module(context)
    }

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

    RenderableData(
            bpmnTree,
            brosTree,
            predefinedMatches,
            results,
            matchRounds
    )
}
