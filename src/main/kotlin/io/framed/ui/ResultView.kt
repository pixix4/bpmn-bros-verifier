package io.framed.ui

import de.westermann.kobserve.event.emit
import de.westermann.kobserve.not
import de.westermann.kobserve.property.mapBinding
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import io.framed.RenderableData
import io.framed.framework.ModelTree
import io.framed.framework.matcher.PredefinedMatch
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.model.BrosElement

@Suppress("UNCHECKED_CAST")
class ResultView : ViewCollection<View>() {

    val data = RenderableData.renderableProperty

    init {
        classList.bind("hidden", data.mapBinding { it == null })

        +CopyView
        +ResultStats()
        +ResultTabList {
            classList.bind("hide-accept", !FeatureState.showSuccessfulProperty)
            classList.bind("hide-error", !FeatureState.showErrorsProperty)
            classList.bind("hide-warn", !FeatureState.showWarningsProperty)
            classList.bind("hide-info", !FeatureState.showInfosProperty)

            tab("Verify result") {
                data.onChange {
                    clear()

                    val d = data.value ?: return@onChange
                    for ((_, l) in d.results.groupBy { it.verifier }) {
                        boxView("entry-box") {
                            for (r in l) {
                                +ResultEntry(
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
            }
            tab("BPMN matching") {
                data.onChange {
                    clear()

                    val d = data.value ?: return@onChange
                    for (element in d.bpmnTree.asSequence()) {
                        boxView("entry-box") {

                            for ((r, modules) in element.matchingElementsMap) {
                                +ResultEntry(
                                        ResultEntry.Type.INFO,
                                        element,
                                        r as ModelTree<BrosElement>,
                                        modules.joinToString(", "),
                                        "Found name match"
                                ).render(this)
                            }

                            if (element.matchingElements.isEmpty()) {
                                +ResultEntry(
                                        ResultEntry.Type.WARN,
                                        element,
                                        null,
                                        null,
                                        "Cannot find matching element"
                                ).render(this)
                            }
                        }
                    }
                }
            }
            tab("BROS matching") {
                data.onChange {
                    clear()

                    val d = data.value ?: return@onChange
                    for (element in d.brosTree.asSequence()) {
                        boxView("entry-box") {

                            for ((r, modules) in element.matchingElementsMap) {
                                +ResultEntry(
                                        ResultEntry.Type.INFO,
                                        r as ModelTree<BpmnElement>,
                                        element,
                                        modules.joinToString(", "),
                                        "Found name match"
                                ).render(this)
                            }

                            if (element.matchingElements.isEmpty()) {
                                +ResultEntry(
                                        ResultEntry.Type.WARN,
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
            tab("Predefined matching") {
                data.onChange {
                    clear()

                    val d = data.value ?: return@onChange
                    for (element in d.predefinedMatches) {
                        boxView("entry-box") {
                            +ResultEntry(
                                    when (element.type) {
                                        PredefinedMatch.Type.MATCH -> ResultEntry.Type.ACCEPT
                                        PredefinedMatch.Type.NOMATCH -> ResultEntry.Type.ERROR
                                    },
                                    d.bpmnTree.asSequence().firstOrNull {
                                        it.element.id == element.bpmn
                                    },
                                    d.brosTree.asSequence().firstOrNull {
                                        it.element.id == element.bros
                                    },
                                    "PredefinedMatcher",
                                    "Add rule by manuel matching"
                            ) {
                                emit(UpdatePredefinedMatch(element, UpdatePredefinedMatch.Type.DELETE))
                            }.render(this)
                        }
                    }
                }
            }
        }
    }
}

class UpdatePredefinedMatch(
        val match: PredefinedMatch,
        val type: Type
) {
    enum class Type {
        ADD, DELETE
    }
}

private fun Result.Type?.transform() = when (this) {
    Result.Type.POSITIVE -> ResultEntry.Type.ACCEPT
    Result.Type.NEGATIVE -> ResultEntry.Type.ERROR
    else -> ResultEntry.Type.WARN
}
