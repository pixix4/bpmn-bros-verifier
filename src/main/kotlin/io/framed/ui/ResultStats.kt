package io.framed.ui

import de.westermann.kobserve.property.mapBinding
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView
import io.framed.RenderableData
import io.framed.framework.verifier.Result

class ResultStats: ViewCollection<View>() {

    val data= RenderableData.renderableProperty

    init {
        boxView {
            dataset["title"] = "Verification stats"

            +ResultField("Successful checks", data.mapBinding {
                it?.let {
                    val count = it.results.count { it.type == Result.Type.POSITIVE }
                    "$count of ${it.results.size}"
                }
            })

            +ResultField("Errors", data.mapBinding {
                it?.let {
                    val count = it.results.count { it.type == Result.Type.NEGATIVE }
                    "$count of ${it.results.size}"
                }
            })

            +ResultField("Coverage", data.mapBinding {
                it?.let {
                    val count = it.results.count { it.type == Result.Type.POSITIVE }
                    "${count * 100 / it.results.size}%"
                }
            })

            +ResultField("Fixed point matching rounds", data.mapBinding {
                it?.matchRounds?.toString()
            })
        }

        boxView {
            dataset["title"] = "BPMN matching stats"

            val help = data.mapBinding {
                it?.let {
                    var count = 0
                    var matches = 0
                    var doubles = 0
                    for (element in it.bpmnTree.asSequence()) {
                        count++
                        if (element.matchingElements.isNotEmpty()) {
                            matches++
                            if (element.matchingElements.size > 1) {
                                doubles++
                            }
                        }
                    }

                    Help(count, matches, doubles)
                }
            }

            +ResultField("Matched elements", help.mapBinding {
                it?.run { "$matches of $count" }
            })

            +ResultField("Unmatched elements", help.mapBinding {
                it?.run { "${count - matches} of $count" }
            })

            +ResultField("Multiple matches", help.mapBinding {
                it?.run { doubles.toString() }
            })

            +ResultField("Coverage", help.mapBinding {
                it?.run { "${matches * 100 / count}%" }
            })
        }

        boxView {
            dataset["title"] = "BROS matching stats"

            val help = data.mapBinding {
                it?.let {
                    var count = 0
                    var matches = 0
                    var doubles = 0
                    for (element in it.brosTree.asSequence()) {
                        count++
                        if (element.matchingElements.isNotEmpty()) {
                            matches++
                            if (element.matchingElements.size > 1) {
                                doubles++
                            }
                        }
                    }

                    Help(count, matches, doubles)
                }
            }

            +ResultField("Matched elements", help.mapBinding {
                it?.run { "$matches of $count" }
            })

            +ResultField("Unmatched elements", help.mapBinding {
                it?.run { "${count - matches} of $count" }
            })

            +ResultField("Multiple matches", help.mapBinding {
                it?.run { doubles.toString() }
            })

            +ResultField("Coverage", help.mapBinding {
                it?.run { "${matches * 100 / count}%" }
            })
        }

        boxView {
            dataset["title"] = "Features"

            +ResultFeature("Use predefined matching", FeatureState.usePredefinedMatchesProperty)
            +ResultFeature("Show errors", FeatureState.showErrorsProperty)
            +ResultFeature("Show warnings", FeatureState.showWarningsProperty)
            +ResultFeature("Show infos", FeatureState.showInfosProperty)
            +ResultFeature("Show successful", FeatureState.showSuccessfulProperty)
        }
    }

    data class Help(
            val count: Int,
            val matches: Int,
            val doubles: Int
    )
}