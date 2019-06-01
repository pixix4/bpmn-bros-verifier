package io.framed

import io.framed.bpmn.ParseException
import io.framed.bpmn.model.*
import io.framed.bpmn.xml.BpmnParser
import io.framed.framework.ModelConnection
import io.framed.framework.ModelElement
import io.framed.framework.ModelElementGroup
import io.framed.framework.util.loadAjaxFile
import io.framed.modules.EndEventVerifier
import io.framed.modules.LaneVerifier
import io.framed.modules.StartEventVerifier
import io.framed.modules.TerminationEventVerifier
import io.framed.verifier.ModelRelation
import io.framed.verifier.ModelTree
import io.framed.verifier.TreeVerifier
import kotlin.browser.window

@Suppress("UNUSED")
fun main() {
    // Wait for the body to load.
    window.onload = {
        init()
    }
}

/**
 * Startup the application
 */
fun init() {
    var bros: BrosDocument? = null
    var bpmn: BpmnModel? = null

    fun check() {
        if (bros != null && bpmn != null) {
            verify(bros!!, bpmn!!)
        }
    }


    loadAjaxFile("restaurant.json") {
        bros = BrosParser.parse(it) ?: throw ParseException("bros")
        check()
    }

    loadAjaxFile("restaurant.bpmn") {
        bpmn = BpmnParser.parse(it) ?: throw ParseException("model")
        //console.log(bpmn?.log())
        check()
    }
}

fun generateBpmnTree(connections: List<ModelRelation<BpmnFlow>>, element: BpmnElement): ModelTree<BpmnElement> {
    val children = if (element is BpmnElementGroup) {
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

fun verify(bros: BrosDocument, bpmn: BpmnModel) {
    val bpmnTree: ModelTree<BpmnElement> = generateBpmnTree(
            bpmn.transitiveChildren().filterIsInstance<BpmnFlow>().map { ModelRelation(it, it::class) },
            bpmn
    )
    val brosTree: ModelTree<ModelElement<*>> = generateBrosTree(
            bros.connections.connections.map { ModelRelation(it, it::class) },
            bros.root
    )

    console.log("--- bpmn ---")
    console.log(bpmnTree.log())

    console.log("--- bros ---")
    console.log(brosTree.log())

    val verifier = TreeVerifier(bpmnTree, brosTree)

    verifier.register(LaneVerifier())
    verifier.register(TerminationEventVerifier())
    verifier.register(EndEventVerifier())
    verifier.register(StartEventVerifier())

    val errors = verifier.verify()

    verifier.log()

    for (error in errors) {
        println(error.reason)
    }

    if (errors.isEmpty()) {
        println("All checks passed!")
    }
}

fun ModelTree<BpmnElement>.containerName(): Pair<String, ModelTree<BpmnElement>>? {
    val model = this.element

    return when (model) {
        is BpmnLane -> {
            model.name to this
        }
        is BpmnProcess -> {
            parent?.let { parent ->
                parent.children.map { it.element }.filterIsInstance<BpmnCollaboration>().firstOrNull()?.let {
                    it.content.filterIsInstance<BpmnParticipant>().firstOrNull { it.processRef == model.id }?.name?.let { it to this }
                }
            }
        }
        else -> parent?.let { (it as ModelTree<BpmnElement>).containerName() }
    }
}
