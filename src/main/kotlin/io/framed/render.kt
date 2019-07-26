package io.framed

import de.westermann.kobserve.event.emit
import de.westermann.kobserve.event.subscribe
import io.framed.framework.ModelTree
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.util.async
import io.framed.framework.util.createView
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement
import org.w3c.dom.*
import org.w3c.dom.clipboard.Clipboard
import org.w3c.dom.events.EventListener
import kotlin.browser.window
import kotlin.dom.clear
import kotlin.properties.Delegates
import kotlin.reflect.KMutableProperty0
import kotlin.reflect.KProperty

private data class Entry(
        val type: Type,
        val bpmn: ModelTree<BpmnElement>?,
        val bros: ModelTree<ModelElement<*>>?,
        val module: String?,
        val message: String
) {

    fun render(element: HTMLElement, onDelete: (() -> Unit)? = null) = with(element) {
        element.classList.add("contains-${type.name.toLowerCase()}")

        createView<HTMLDivElement> {
            classList.add("entry", "entry-${type.name.toLowerCase()}")

            createView<HTMLDivElement> {
                field("BPMN", bpmn, bpmn?.element?.id)
                field("BROS", bros, bros?.element?.id)
                field("Module", module)
            }

            createView<HTMLDivElement> {
                field("Message", message)
            }

            if (onDelete != null) {
                createView<HTMLDivElement> {
                    classList.add("delete")
                    createView<HTMLElement>(tag = "i") {
                        classList.add("material-icons")
                        textContent = "clear"
                    }

                    addEventListener("click", EventListener {
                        onDelete()
                    })
                }
            }
        }
    }

    enum class Type {
        ERROR, WARN, INFO, ACCEPT
    }
}

private fun HTMLElement.field(name: String, value: Any?, extra: Any? = null): HTMLElement {
    return createView<HTMLSpanElement> {
        classList.add("field")
        textContent = value?.toString() ?: ""
        dataset["title"] = name
        if (extra != null) {
            val str = extra.toString()
            dataset["extra"] = "ID: $str"
            classList.add("clickable")
            title = "Click to copy ID"

            addEventListener("click", EventListener {
                val clip = js("navigator.clipboard") as? Clipboard ?: return@EventListener
                clip.writeText(str)

                if (name.equals("bpmn", true)) {
                    emit(CopyBpmnId(extra.toString(), value?.toString()))
                } else if (name.equals("bros", true)) {
                    emit(CopyBrosId(extra.toString().toLongOrNull(), value?.toString()))
                }

                createView<HTMLSpanElement> {
                    classList.add("tooltip")
                    textContent = "Copied ID!"

                    async(2000) {
                        remove()
                    }
                    addEventListener("click", EventListener {
                        it.stopPropagation()
                        it.preventDefault()
                        remove()
                    })
                }
            })
        }
    }
}

private fun HTMLElement.feature(default: Boolean, name: String, setup: HTMLElement.() -> Unit = {}, onChange: (value: Boolean) -> Unit) {
    val inputName = name
            .replace("([a-z])([A-Z])".toRegex(), "$1-$2")
            .toLowerCase()
            .replace(" +".toRegex(), "-")
    createView<HTMLDivElement> {
        classList.add("feature")
        createView<HTMLInputElement> {
            type = "checkbox"
            this.name = inputName
            id = inputName
            checked = default

            addEventListener("change", EventListener {
                onChange(checked)
            })
        }
        createView<HTMLLabelElement> {
            htmlFor = inputName
            textContent = name
        }

        setup()
    }
}

private fun Result.Type.transform() = when (this) {
    Result.Type.MATCH -> Entry.Type.ACCEPT
    Result.Type.ERROR -> Entry.Type.ERROR
    Result.Type.IGNORE -> Entry.Type.WARN
}

object FeatureState {
    var showErrors by Delegates.observable(true, this::save)
    var showWarnings by Delegates.observable(true, this::save)
    var showInfos by Delegates.observable(true, this::save)
    var showSuccessful by Delegates.observable(true, this::save)
    var tab by Delegates.observable(0, this::save)
    var usePredefinedMatches = true

    private fun <T : Any> save(property: KProperty<*>, oldValue: T, newValue: T) {
        if (newValue != oldValue) {
            window.localStorage["bbv-" + property.name] = newValue.toString()
        }
    }

    private inline fun <reified T : Any> load(property: KMutableProperty0<T>) {
        val value = window.localStorage["bbv-" + property.name] ?: return
        val h: T = when (T::class) {
            Boolean::class -> value.toBoolean()
            Int::class -> value.toIntOrNull()
            else -> null
        } as? T ?: return
        if (property.get() != h) {
            property.set(h)
        }
    }

    fun update(element: HTMLElement) {
        element.classList.toggle("hide-error", !showErrors)
        element.classList.toggle("hide-warn", !showWarnings)
        element.classList.toggle("hide-info", !showInfos)
        element.classList.toggle("hide-accept", !showSuccessful)
    }

    init {
        load(this::showErrors)
        load(this::showWarnings)
        load(this::showInfos)
        load(this::showSuccessful)
        load(this::tab)
    }
}

data class CopyBpmnId(val id: String?, val name: String? = null)
data class CopyBrosId(val id: Long?, val name: String? = null)

@Suppress("UNCHECKED_CAST")
fun render(
        view: HTMLElement,
        bpmn: ModelTree<BpmnElement>,
        bros: ModelTree<ModelElement<*>>,
        predefinedMatches: List<PredefinedMatch>,
        onPredefinedMatchChange: (List<PredefinedMatch>) -> Unit,
        results: List<Result>,
        matchRounds: Int? = null
) {
    var tabVerifyHead: HTMLSpanElement = js("{}")
    var tabVerifyBody: HTMLDivElement = js("{}")

    var tabBpmnHead: HTMLSpanElement = js("{}")
    var tabBpmnBody: HTMLDivElement = js("{}")

    var tabBrosHead: HTMLSpanElement = js("{}")
    var tabBrosBody: HTMLDivElement = js("{}")

    var tabPredefinedHead: HTMLSpanElement = js("{}")
    var tabPredefinedBody: HTMLDivElement = js("{}")

    view.apply {
        clear()

        createView<HTMLDivElement> selection@{
            classList.add("selection")

            createView<HTMLElement>(tag = "i") {
                classList.add("material-icons")
                textContent = "clear"

                addEventListener("click", EventListener {
                    this@selection.classList.remove("active")
                })
            }

            val bpmnField = field("BPMN", "").apply {
                subscribe<CopyBpmnId> {
                    if (it.id != null) {
                        this@selection.classList.add("active")
                    }
                    textContent = it.name ?: " "
                    dataset["extra"] = it.id?.let { "ID: $it" } ?: ""
                    dataset["id"] = it.id ?: ""
                }
            }

            val brosField = field("BROS", "").apply {
                subscribe<CopyBrosId> {
                    if (it.id != null) {
                        this@selection.classList.add("active")
                    }
                    textContent = it.name ?: " "
                    dataset["extra"] = it.id?.let { "ID: $it" } ?: ""
                    dataset["id"] = it.id?.toString() ?: ""
                }
            }

            val select = createView<HTMLSelectElement> {
                createView<HTMLOptionElement> {
                    textContent = "match"
                }
                createView<HTMLOptionElement> {
                    textContent = "nomatch"
                }
            }

            createView<HTMLButtonElement> {
                textContent = "Create"
                addEventListener("click", EventListener {
                    this@selection.classList.remove("active")

                    val match = PredefinedMatch(
                            bpmnField.dataset["id"] ?: return@EventListener,
                            brosField.dataset["id"]?.toLongOrNull() ?: return@EventListener,
                            if (select.selectedIndex == 0) PredefinedMatch.Type.MATCH else PredefinedMatch.Type.NOMATCH
                    )

                    onPredefinedMatchChange(predefinedMatches + match)
                })

                val updateState = { _: Any ->
                    disabled = bpmnField.dataset["id"].isNullOrBlank() || brosField.dataset["id"].isNullOrBlank()
                }
                subscribe<CopyBpmnId>(updateState)
                subscribe<CopyBrosId>(updateState)

                updateState(Unit)
            }
        }

        createView<HTMLDivElement> container@{
            classList.add("container")
            FeatureState.update(this)

            createView<HTMLDivElement> {
                classList.add("container-stats")

                createView<HTMLDivElement> {
                    dataset["title"] = "Verification stats"
                    val matches = results.count { it.type == Result.Type.MATCH }
                    val errors = results.count { it.type == Result.Type.ERROR }

                    field("Successful checks", "$matches of ${results.size}")
                    field("Errors", "$errors of ${results.size}")
                    field("Coverage", "${matches * 100 / results.size}%")
                    field("Fixed point matching rounds", matchRounds ?: "Cannot find fixed point")
                }
                createView<HTMLDivElement> {
                    dataset["title"] = "BPMN matching stats"
                    var count = 0
                    var matches = 0
                    var doubles = 0
                    for (element in bpmn.asSequence()) {
                        count++
                        if (element.matchingElements.isNotEmpty()) {
                            matches++
                            if (element.matchingElements.size > 1) {
                                doubles++
                            }
                        }
                    }
                    field("Matched elements", "$matches of $count")
                    field("Unmatched elements", "${count - matches} of $count")
                    field("Multiple matches", doubles)
                    field("Coverage", "${matches * 100 / count}%")
                }
                createView<HTMLDivElement> {
                    dataset["title"] = "BROS matching stats"
                    var count = 0
                    var matches = 0
                    var doubles = 0
                    for (element in bros.asSequence()) {
                        count++
                        if (element.matchingElements.isNotEmpty()) {
                            matches++
                            if (element.matchingElements.size > 1) {
                                doubles++
                            }
                        }
                    }
                    field("Matched elements", "$matches of $count")
                    field("Unmatched elements", "${count - matches} of $count")
                    field("Multiple matches", doubles)
                    field("Coverage", "${matches * 100 / count}%")
                }
                createView<HTMLDivElement> {
                    dataset["title"] = "Features"

                    feature(FeatureState.usePredefinedMatches, "Use predefined matching") {
                        this@container.clear()
                        FeatureState.usePredefinedMatches = it
                        verify(view, bpmn, bros, predefinedMatches, onPredefinedMatchChange)
                    }
                    feature(FeatureState.showErrors, "Show errors") {
                        FeatureState.showErrors = it
                        FeatureState.update(this@container)
                    }
                    feature(FeatureState.showWarnings, "Show warnings") {
                        FeatureState.showWarnings = it
                        FeatureState.update(this@container)
                    }
                    feature(FeatureState.showInfos, "Show infos") {
                        FeatureState.showInfos = it
                        FeatureState.update(this@container)
                    }
                    feature(FeatureState.showSuccessful, "Show successful") {
                        FeatureState.showSuccessful = it
                        FeatureState.update(this@container)
                    }
                }
            }

            createView<HTMLDivElement> {
                classList.add("container-header")

                tabVerifyHead = createView {
                    textContent = "Verify result"
                }
                tabBpmnHead = createView {
                    textContent = "BPMN matching"
                }
                tabBrosHead = createView {
                    textContent = "BROS matching"
                }
                tabPredefinedHead = createView {
                    textContent = "Predefined matching"
                }
            }

            createView<HTMLDivElement> {
                classList.add("container-body")

                tabVerifyBody = createView {
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

                            for ((r, modules) in element.matchingElementsMap) {
                                Entry(
                                        Entry.Type.INFO,
                                        element,
                                        r as ModelTree<ModelElement<*>>,
                                        modules.joinToString(", "),
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

                            for ((r, modules) in element.matchingElementsMap) {
                                Entry(
                                        Entry.Type.INFO,
                                        r as ModelTree<BpmnElement>,
                                        element,
                                        modules.joinToString(", "),
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
                tabPredefinedBody = createView {
                    for (element in predefinedMatches) {
                        createView<HTMLDivElement> {
                            classList.add("entry-box")
                            Entry(
                                    when (element.type) {
                                        PredefinedMatch.Type.MATCH -> Entry.Type.ACCEPT
                                        PredefinedMatch.Type.NOMATCH -> Entry.Type.ERROR
                                    },
                                    bpmn.asSequence().firstOrNull {
                                        it.element.id == element.bpmn
                                    },
                                    bros.asSequence().firstOrNull {
                                        it.element.id == element.bros
                                    },
                                    "PredefinedMatcher",
                                    "Add rule by manuel matching"
                            ).render(this) {
                                onPredefinedMatchChange(predefinedMatches - element)
                            }
                        }
                    }
                }
            }
        }
    }

    val header = listOf(tabVerifyHead, tabBpmnHead, tabBrosHead, tabPredefinedHead)
    val body = listOf(tabVerifyBody, tabBpmnBody, tabBrosBody, tabPredefinedBody)

    for ((index, head) in header.withIndex()) {
        head.addEventListener("click", EventListener {
            header.forEach { it.classList.remove("active") }
            body.forEach { it.classList.remove("active") }

            header[index].classList.add("active")
            body[index].classList.add("active")
            FeatureState.tab = index
        })
    }

    header[FeatureState.tab].click()
}
