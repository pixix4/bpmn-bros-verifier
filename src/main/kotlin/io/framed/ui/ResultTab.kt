package io.framed.ui

import de.westermann.kobserve.property.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.BoxView
import de.westermann.kwebview.components.TextView

class ResultTab(val name: String, init: ViewCollection<View>.() -> Unit) {

    val selectedProperty = property(false)
    var selected by selectedProperty

    val header = TextView(name).apply {
        classList.bind("active", selectedProperty)

        onClick {
            selected = true
        }
    }

    val content = BoxView().apply {
        classList.bind("active", selectedProperty)

        init()
    }
}