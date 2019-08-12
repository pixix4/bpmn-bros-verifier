package io.framed.ui

import de.westermann.kobserve.event.subscribe
import de.westermann.kobserve.property.join
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.button
import de.westermann.kwebview.components.h1
import de.westermann.kwebview.components.textView
import io.framed.framework.ModelRelation
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.util.BrosParser
import io.framed.generateBpmnTree
import io.framed.generateBrosTree
import io.framed.model.bpmn.model.BpmnFlow
import io.framed.model.bpmn.model.transitiveChildren
import io.framed.model.bpmn.xml.BpmnParser
import io.framed.verify
import org.w3c.dom.SMOOTH
import org.w3c.dom.ScrollBehavior
import org.w3c.dom.ScrollToOptions
import org.w3c.dom.get
import org.w3c.files.File
import org.w3c.files.FileReader
import org.w3c.files.get
import kotlin.browser.document
import kotlin.browser.window

class Application : ViewCollection<View>() {

    val bpmnFile = FileTextBox(
            "BPMN",
            transform = { content ->
                val bpmn = BpmnParser.parse(content) ?: return@FileTextBox null
                generateBpmnTree(
                        bpmn.transitiveChildren().filterIsInstance<BpmnFlow>().map { ModelRelation(it, it::class) },
                        bpmn
                )
            },
            count = {
                it.asSequence().count()
            }
    )

    val brosFile = FileTextBox(
            "BROS",
            transform = { content ->
                val bros = BrosParser.parse(content) ?: return@FileTextBox null
                generateBrosTree(
                        bros.connections.connections.map { ModelRelation(it, it::class) },
                        bros.root
                )
            },
            count = {
                it.asSequence().count()
            }
    )
    val predefinedFile = FileTextBox(
            "Predefined matching",
            transform = { content ->
                PredefinedMatch.parse(content)
            },
            count = {
                it.size
            }
    )

    private val validProperty = brosFile.modelProperty.join(bpmnFile.modelProperty) { a, b ->
        a != null && b != null
    }
    private val valid by validProperty

    private fun loadFile(file: File) {
        file.load {
            when {
                bpmnFile.testTransform(it) -> bpmnFile.content = it
                brosFile.testTransform(it) -> brosFile.content = it
                predefinedFile.testTransform(it) -> predefinedFile.content = it
            }
        }
    }

    fun enableDemo(action: () -> Unit) {
        button("Load demo") {
            classList += "load-demo"
            onClick { action() }
        }
    }

    private fun update() {
        if (valid) {
            verify(
                    bpmnFile.model ?: return,
                    brosFile.model ?: return,
                    predefinedFile.model ?: emptyList()
            )
        }
    }

    init {
        bpmnFile.modelProperty.onChange { update() }
        brosFile.modelProperty.onChange { update() }
        predefinedFile.modelProperty.onChange { update() }
        FeatureState.usePredefinedMatchesProperty.onChange { update() }

        subscribe<UpdatePredefinedMatch> {
            val current = predefinedFile.model ?: emptyList()

            val new = if (it.type == UpdatePredefinedMatch.Type.DELETE) {
                current - it.match
            } else {
                current + it.match
            }

            predefinedFile.content = PredefinedMatch.stringify(new)
        }


        boxView("start-page") {
            boxView("start-header") {
                boxView {
                    h1("BPMN-BROS-Verifier")
                    textView("Select bpmn and bros file to start verification")
                }
            }
            boxView("start-files") {
                +bpmnFile
                +brosFile
                +predefinedFile
            }
            boxView("start-verify") {
                boxView {
                    classList.bind("active", validProperty)
                    textView("Scroll down to view result")

                    onClick {
                        document.documentElement!!.scrollTo(ScrollToOptions(
                                0.0,
                                window.innerHeight.toDouble(),
                                ScrollBehavior.SMOOTH
                        ))
                    }
                }
            }
        }

        +ResultView()

        boxView("start-drag") {
            textView("Drag file here")
        }

        onDrop { ev ->
            ev.preventDefault()
            classList.remove("drag")

            val dataTransfer = ev.dataTransfer ?: return@onDrop

            if (dataTransfer.items.length > 0) {
                for (i in 0 until dataTransfer.items.length) {
                    if (dataTransfer.items[i]?.kind == "file") {
                        val file = dataTransfer.items[i]!!.getAsFile()!!
                        loadFile(file)
                    }
                }
            } else {
                for (i in 0 until dataTransfer.files.length) {
                    val file = dataTransfer.files[i]!!
                    loadFile(file)
                }
            }
        }
        onDragOver {
            it.preventDefault()
            classList.add("drag")
        }
        onDragEnter {
            classList.add("drag")
        }
        onDragLeave {
            classList.remove("drag")
        }
    }
}

fun File.load(onLoad: (String) -> Unit) {
    val reader = FileReader()
    reader.readAsText(this)
    reader.onloadend = {
        onLoad(reader.result)
    }
}
