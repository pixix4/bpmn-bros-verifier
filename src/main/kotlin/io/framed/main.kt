package io.framed

import io.framed.framework.ModelRelation
import io.framed.framework.ModelTree
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.util.*
import io.framed.model.bpmn.ParseException
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnFlow
import io.framed.model.bpmn.model.BpmnModel
import io.framed.model.bpmn.model.transitiveChildren
import io.framed.model.bpmn.xml.BpmnParser
import io.framed.model.bros.ModelElement
import org.w3c.dom.*
import org.w3c.dom.events.EventListener
import org.w3c.files.File
import org.w3c.files.FileReader
import org.w3c.files.get
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
    val bpmnFile = FileObject(
            "BPMN",
            transform = { content ->
                val bpmn = BpmnParser.parse(content) ?: throw ParseException("model")
                generateBpmnTree(
                        bpmn.transitiveChildren().filterIsInstance<BpmnFlow>().map { ModelRelation(it, it::class) },
                        bpmn
                )
            },
            count = {
                it.asSequence().count()
            }
    )

    val brosFile = FileObject(
            "BROS",
            transform = { content ->
                val bros = BrosParser.parse(content) ?: throw ParseException("bros")
                generateBrosTree(
                        bros.connections.connections.map { ModelRelation(it, it::class) },
                        bros.root
                )
            },
            count = {
                it.asSequence().count()
            }
    )
    val predefinedFile = FileObject(
            "Predefined matching",
            transform = { content ->
                PredefinedMatch.parse(content)
            },
            count = {
                it.size
            }
    )

    val application = mainUi(bpmnFile, brosFile, predefinedFile)

    var bros: BrosDocument? = null
    var brosContent = ""
    var bpmn: BpmnModel? = null
    var bpmnContent = ""
    var predefinedMatches: List<PredefinedMatch>? = null
    var predefinedMatchesContent = ""

    fun check() {
        if (bros != null && bpmn != null && predefinedMatches != null) {
            application.createView<HTMLButtonElement>("load-demo") {
                textContent = "Load demo"

                addEventListener("click", EventListener {
                    bpmnFile.load(bpmnContent)
                    brosFile.load(brosContent)
                    predefinedFile.load(predefinedMatchesContent)
                })
            }
        }
    }


    loadAjaxFile("restaurant.json") {
        bros = BrosParser.parse(it) ?: throw ParseException("bros")
        brosContent = it
        check()
    }

    loadAjaxFile("restaurant.bpmn") {
        bpmn = BpmnParser.parse(it) ?: throw ParseException("model")
        bpmnContent = it
        check()
    }

    loadAjaxFile("match.json") {
        predefinedMatches = PredefinedMatch.parse(it)
        predefinedMatchesContent = it
        check()
    }
}

fun mainUi(bpmnFile: FileObject<ModelTree<BpmnElement>>, brosFile: FileObject<ModelTree<ModelElement<*>>>, predefinedFile: FileObject<List<PredefinedMatch>>): HTMLElement {
    var resultPage: HTMLDivElement = js("{}")
    var verifyArrow: HTMLDivElement = js("{}")

    fun checkButtonState() {
        if (bpmnFile.element == null || brosFile.element == null) {
            resultPage.clear()
            verifyArrow.classList.remove("active")
        } else {
            verify(
                    resultPage,
                    bpmnFile.element!!,
                    brosFile.element!!,
                    predefinedFile.element ?: emptyList()
            ) {
                predefinedFile.load(PredefinedMatch.stringify(it))
            }
            verifyArrow.classList.add("active")
        }
    }

    bpmnFile.onUpdate = ::checkButtonState
    brosFile.onUpdate = ::checkButtonState
    predefinedFile.onUpdate = ::checkButtonState

    var application: HTMLDivElement = js("{}")

    fun loadFile(file: File) {
        file.load {
            when {
                bpmnFile.testFile(it) -> bpmnFile.load(it)
                brosFile.testFile(it) -> brosFile.load(it)
                predefinedFile.testFile(it) -> predefinedFile.load(it)
            }
        }
    }

    document.body!!.apply {
        clear()

        application = createView("application") {
            createView<HTMLDivElement>("start-page") {
                createView<HTMLDivElement>("start-header") {
                    createView<HTMLHeadingElement>(tag = "h1").textContent = "BPMN-BROS-Verifier"
                    createView<HTMLSpanElement>().textContent = "Select bpmn and bros file to start verification"
                }
                createView<HTMLDivElement>("start-files") {
                    appendChild(bpmnFile.view)
                    appendChild(brosFile.view)
                    appendChild(predefinedFile.view)
                }
                verifyArrow = createView("start-verify") {
                    createView<HTMLSpanElement>().textContent = "Scroll down to view result"

                    addEventListener("click", EventListener {
                        document.documentElement!!.scrollTo(ScrollToOptions(
                                0.0,
                                window.innerHeight.toDouble(),
                                ScrollBehavior.SMOOTH
                        ))
                    })
                }
                createView<HTMLDivElement>("start-drag") {
                    createView<HTMLSpanElement>().textContent = "Drag file here"
                }

                addEventListener("drop", EventListener {
                    it.preventDefault()
                    classList.remove("drag")

                    val ev = it as DragEvent
                    val dataTransfer = ev.dataTransfer ?: return@EventListener

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
                })
                addEventListener("dragover", EventListener {
                    it.preventDefault()
                    classList.add("drag")
                })
                addEventListener("dragenter", EventListener {
                    classList.add("drag")
                })
                addEventListener("dragleave", EventListener {
                    classList.remove("drag")
                })
            }

            resultPage = createView("result-page")
        }
    }

    return application
}

fun File.load(onLoad: (String) -> Unit) {
    val reader = FileReader()
    reader.readAsText(this)
    reader.onloadend = {
        onLoad(reader.result)
    }
}

class FileObject<T : Any>(
        name: String,
        private val transform: (String) -> T,
        private val count: (T) -> Int,
        var onUpdate: () -> Unit = {}
) {

    private lateinit var textArea: HTMLTextAreaElement
    private lateinit var countView: HTMLSpanElement

    private var internalElement: T? = null
    val element: T?
        get() = internalElement

    val view = createHtmlView<HTMLDivElement>("start-file") {
        createView<HTMLDivElement>() {
            createView<HTMLSpanElement>().textContent = name
            val input = createView<HTMLInputElement> {
                type = "file"

                addEventListener("change", EventListener {
                    val files = files!!
                    for (i in 0 until files.length) {
                        files[i]?.load {
                            load(it)
                        }
                    }
                })
            }
            createView<HTMLButtonElement> {
                textContent = "Select file"
                addEventListener("click", EventListener {
                    input.click()
                })
            }
        }
        createView<HTMLDivElement>() {
            textArea = createView {
                addEventListener("change", EventListener {
                    update()
                })
                addEventListener("keyup", EventListener {
                    update()
                })
            }
        }
        createView<HTMLDivElement>() {
            countView = createView {
                textContent = "No file selected"
            }
        }
    }

    private fun saveTransform(content: String) = try {
        transform(content)
    } catch (_: Exception) {
        null
    }

    fun testFile(content: String) = saveTransform(content) != null

    fun load(content: String) {
        textArea.value = content
        update()
    }

    private fun update() {
        internalElement = saveTransform(textArea.value)
        val e = element
        if (e == null) {
            countView.textContent = "Given file is not valid"
        } else {
            countView.textContent = "Found ${count(e)} elements"
        }
        onUpdate()
    }
}
