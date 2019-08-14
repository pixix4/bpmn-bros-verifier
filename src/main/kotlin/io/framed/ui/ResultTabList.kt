package io.framed.ui

import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.boxView

class ResultTabList(init: ResultTabList.() -> Unit) : ViewCollection<View>() {

    private var tabs = emptyList<ResultTab>()

    fun tab(name: String, init: ViewCollection<View>.() -> Unit) {
        val newTab = ResultTab(name, init)
        tabs += newTab

        newTab.selectedProperty.onChange {
            if (newTab.selected) {
                for (t in tabs) {
                    if (t != newTab) {
                        t.selected = false
                    }
                }
            }
        }
    }

    init {
        classList += "container"
        init()

        boxView("result-container-header") {
            for (tab in tabs) {
                +tab.header
            }
        }

        boxView("result-container-body") {
            for (tab in tabs) {
                +tab.content
            }
        }

        tabs.first().selected = true
    }
}