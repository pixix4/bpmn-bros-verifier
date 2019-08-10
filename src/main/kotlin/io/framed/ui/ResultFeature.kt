package io.framed.ui

import de.westermann.kobserve.Property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.checkbox
import de.westermann.kwebview.components.label

class ResultFeature(
        name: String,
        value: Property<Boolean>
) : ViewCollection<View>() {
    init {
        label(
                checkbox(value),
                name
        )
    }
}