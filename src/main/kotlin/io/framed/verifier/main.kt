package io.framed.verifier

import io.framed.BrosDocument
import io.framed.BrosParser
import io.framed.framework.util.loadAjaxFile
import io.framed.verifier.bpmn.BpmnLaneSet
import io.framed.verifier.bpmn.BpmnModel
import io.framed.verifier.bpmn.BpmnProcess
import io.framed.verifier.xml.BpmnParser
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

    loadAjaxFile("pizza.bpmn") {
        bpmn = BpmnParser.parse(it)?: throw ParseException("bpmn")
        console.log(bpmn?.log())
        check()
    }
}

fun verify(bros: BrosDocument, bpmn: BpmnModel) {
    println(bros.root.name)
    println(bpmn.content.filterIsInstance<BpmnLaneSet>().flatMap { it.content }.map { it.name })
}