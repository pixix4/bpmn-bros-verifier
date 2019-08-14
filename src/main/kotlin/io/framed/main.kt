package io.framed

import io.framed.framework.matcher.PredefinedMatch
import io.framed.model.bros.BrosDocument
import io.framed.model.bros.BrosParser
import io.framed.framework.util.loadAjaxFile
import io.framed.model.bpmn.model.BpmnModel
import io.framed.model.bpmn.xml.BpmnParser
import io.framed.ui.Application
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

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
    val application = Application()
    document.body!!.apply {
        clear()

        appendChild(application.html)
    }

    var bros: BrosDocument? = null
    var brosContent = ""
    var bpmn: BpmnModel? = null
    var bpmnContent = ""
    var predefinedMatches: List<PredefinedMatch>? = null
    var predefinedMatchesContent = ""

    fun check() {
        if (bros != null && bpmn != null && predefinedMatches != null) {
            application.enableDemo {
                application.bpmnFile.content = bpmnContent
                application.brosFile.content = brosContent
                application.predefinedFile.content = predefinedMatchesContent
            }
        }
    }

    loadAjaxFile("restaurant.json") {
        bros = BrosParser.parse(it)
        brosContent = it
        check()
    }

    loadAjaxFile("restaurant.bpmn") {
        bpmn = BpmnParser.parse(it)
        bpmnContent = it
        check()
    }

    loadAjaxFile("match.json") {
        predefinedMatches = PredefinedMatch.parse(it)
        predefinedMatchesContent = it
        check()
    }
}
