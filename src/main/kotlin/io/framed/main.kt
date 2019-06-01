package io.framed

import io.framed.bpmn.ParseException
import io.framed.bpmn.model.*
import io.framed.bpmn.xml.BpmnParser
import io.framed.framework.ModelConnection
import io.framed.framework.ModelElement
import io.framed.framework.ModelElementGroup
import io.framed.framework.util.loadAjaxFile
import io.framed.model.*
import io.framed.modules.EndEventVerifier
import io.framed.modules.LaneVerifier
import io.framed.modules.TerminationEventVerifier
import io.framed.verifier.ModelRelation
import io.framed.verifier.ModelTree
import io.framed.verifier.TreeVerifier
import io.framed.verifier.match
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
        console.log(bpmn?.log())
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

    val verifier = TreeVerifier(bpmnTree, brosTree)

    verifier.register(LaneVerifier())
    verifier.register(TerminationEventVerifier())
    verifier.register(EndEventVerifier())

    val errors = verifier.verify()

    verifier.log()

    for (error in errors) {
        println(error.reason)
    }

    if (errors.isEmpty()) {
        println("All checks passed!")
    }
}

fun log(bros: BrosDocument, bpmn: BpmnModel) {
    println(bros.root.name)
    println(bpmn.content.flatMap { if (it is BpmnProcess) it.content else mutableListOf() }
            .filterIsInstance<BpmnLaneSet>().flatMap { it.content }.map { it.name })

    var brosNameList = listOf<String>()
    var bpmnNameList = listOf<String>()

    for (element in bros.root.getAllChildren()) {
        if (element is Event) {
            brosNameList += element.desc
        } else if (element is ReturnEvent) {
            brosNameList += element.desc
        } else if (element is RoleType) {
            brosNameList += element.name
        } else if (element is Scene) {
            brosNameList += element.name
        } else if (element is Class) {
            //brosNameList += element.name
        }
    }

    for (element in bpmn.transitiveChildren()) {
        if (element is BpmnEvent) {
            bpmnNameList += element.name
        } else if (element is BpmnTask) {
            bpmnNameList += element.name
        } else if (element is BpmnLane) {
            bpmnNameList += element.name
        }
    }

    brosNameList = brosNameList.filter {
        it.isNotBlank()
    }.distinct()
    bpmnNameList = bpmnNameList.filter {
        it.isNotBlank()
    }.distinct()

    println(brosNameList)
    println(bpmnNameList)

    for (bpmnName in bpmnNameList) {
        var found = false
        for (brosName in brosNameList) {
            val t1 = match(brosName, bpmnName)
            val t2 = match(bpmnName, brosName)

            if (t1 && t2) {
                println("'$bpmnName' matches '$brosName'")
                found = true
            } else if (t1 || t2) {
                println("Invalid result for '$brosName' and '$bpmnName'")
            }
        }
        if (!found) {
            println("No match for '$bpmnName'")
        }
    }
}
