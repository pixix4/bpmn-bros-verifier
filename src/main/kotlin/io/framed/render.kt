package io.framed

import io.framed.framework.ModelTree
import io.framed.framework.util.createView
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLSpanElement
import org.w3c.dom.events.EventListener
import kotlin.browser.document
import kotlin.dom.clear

data class Entry(
        val type: Type,
        val bpmn: ModelTree<BpmnElement>?,
        val bros: ModelTree<ModelElement<*>>?,
        val module: String?,
        val message: String
) {

    fun render(element: HTMLElement) = with(element) {
        createView<HTMLDivElement> {
            classList.add("entry", "entry-${type.name.toLowerCase()}")

            createView<HTMLDivElement> {
                createView<HTMLSpanElement> {
                    classList.add("entry-bpmn")
                    textContent = bpmn.fillEmpty()
                }

                createView<HTMLSpanElement> {
                    classList.add("entry-bros")
                    textContent = bros.fillEmpty()
                }

                createView<HTMLSpanElement> {
                    classList.add("entry-module")
                    textContent = module.fillEmpty()
                }
            }

            createView<HTMLDivElement> {
                createView<HTMLSpanElement> {
                    classList.add("entry-message")
                    textContent = message.fillEmpty()
                }
            }
        }
    }

    private fun Any?.fillEmpty(): String {
        if (this == null) return " "
        val str = toString()
        if (str.isBlank()) return " "
        return str
    }

    enum class Type {
        ERROR, WARN, INFO, ACCEPT
    }
}

@Suppress("UNCHECKED_CAST")
fun render(
        bpmn: ModelTree<BpmnElement>,
        bros: ModelTree<ModelElement<*>>,
        results: List<Result>
) {
    val tabVerifyHead: HTMLSpanElement
    val tabVerifyBody: HTMLDivElement

    val tabBpmnHead: HTMLSpanElement
    val tabBpmnBody: HTMLDivElement

    val tabBrosHead: HTMLSpanElement
    val tabBrosBody: HTMLDivElement

    document.body!!.apply {
        clear()
        createView<HTMLDivElement> {
            classList.add("container")


            createView<HTMLDivElement> {
                classList.add("container-header")

                tabVerifyHead = createView {
                    classList.add("active")
                    textContent = "Verify result"
                }
                tabBpmnHead = createView {
                    textContent = "BPMN matching"
                }
                tabBrosHead = createView {
                    textContent = "BROS matching"
                }
            }

            createView<HTMLDivElement> {
                classList.add("container-body")

                tabVerifyBody = createView {
                    classList.add("active")

                    for ((_, l) in results.groupBy { it.verifier }) {
                        createView<HTMLDivElement> {
                            classList.add("entry-box")

                            for (r in l) {
                                Entry(
                                        r.type.transform(),
                                        r.bpmn,
                                        r.bros,
                                        r.verifier?.name.toString(),
                                        r.message
                                ).render(this)
                            }
                        }
                    }
                }
                tabBpmnBody = createView {
                    for (element in bpmn.asSequence()) {
                        createView<HTMLDivElement> {
                            classList.add("entry-box")

                            for (r in element.matchingElements) {
                                Entry(
                                        Entry.Type.INFO,
                                        element,
                                        r as ModelTree<ModelElement<*>>,
                                        null,
                                        "Found name match"
                                ).render(this)
                            }

                            if (element.matchingElements.isEmpty()) {
                                Entry(
                                        Entry.Type.WARN,
                                        element,
                                        null,
                                        null,
                                        "Cannot find matching element"
                                ).render(this)
                            }
                        }
                    }
                }
                tabBrosBody = createView {
                    for (element in bros.asSequence()) {
                        createView<HTMLDivElement> {
                            classList.add("entry-box")

                            for (r in element.matchingElements) {
                                Entry(
                                        Entry.Type.INFO,
                                        r as ModelTree<BpmnElement>,
                                        element,
                                        null,
                                        "Found name match"
                                ).render(this)
                            }

                            if (element.matchingElements.isEmpty()) {
                                Entry(
                                        Entry.Type.WARN,
                                        null,
                                        element,
                                        null,
                                        "Cannot find matching element"
                                ).render(this)
                            }
                        }
                    }
                }
            }
        }
    }

    val all = listOf(tabVerifyHead, tabVerifyBody, tabBpmnHead, tabBpmnBody, tabBrosHead, tabBrosBody)

    tabVerifyHead.addEventListener("click", EventListener {
        for (a in all) a.classList.remove("active")

        tabVerifyHead.classList.add("active")
        tabVerifyBody.classList.add("active")
    })
    tabBpmnHead.addEventListener("click", EventListener {
        for (a in all) a.classList.remove("active")

        tabBpmnHead.classList.add("active")
        tabBpmnBody.classList.add("active")
    })
    tabBrosHead.addEventListener("click", EventListener {
        for (a in all) a.classList.remove("active")

        tabBrosHead.classList.add("active")
        tabBrosBody.classList.add("active")
    })
}

private fun Result.Type.transform() = when (this) {
    Result.Type.MATCH -> Entry.Type.ACCEPT
    Result.Type.ERROR -> Entry.Type.ERROR
    Result.Type.IGNORE -> Entry.Type.WARN
}