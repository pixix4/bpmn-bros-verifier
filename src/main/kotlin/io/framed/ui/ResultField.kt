package io.framed.ui

import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.mapBinding
import de.westermann.kobserve.property.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.textView
import io.framed.framework.util.async
import kotlin.browser.window

class ResultField(
        val name: String,
        val value: ReadOnlyProperty<out Any?>,
        val extra: ReadOnlyProperty<out Any?> = property<String?>(null)
) : ViewCollection<View>() {

    private val isBpmnId = name.equals("bpmn", true)
    private val isBrosId = name.equals("bros", true)

    init {
        property(html::textContent).bind(value.mapBinding { it?.toString() })

        if (!(isBpmnId || isBrosId)) {
            value.onChange {
                classList -= "updated"

                async(10) {
                    classList += "updated"
                }
            }
        }

        val clickable = extra.mapBinding { it != null }

        dataset["title"] = name
        dataset.bind("extra", extra.mapBinding {
            it?.let { "ID: $it" }
        })

        classList.bind("clickable", clickable)
        property(this::title).bind(clickable.mapBinding { if (it) "Click to copy ID" else null })

        onClick {
            if (clickable.value) {
                val clip = window.navigator.clipboard
                clip.writeText(value.value.toString())

                if (isBpmnId) {
                    CopyView.bpmnIdProperty.value = extra.value?.toString()
                    CopyView.bpmnNameProperty.value = value.value?.toString() ?: ""
                } else if (isBrosId) {
                    CopyView.brosIdProperty.value = extra.value?.toString()?.toLongOrNull()
                    CopyView.brosNameProperty.value = value.value?.toString() ?: ""
                }

                textView("Copied ID !") {
                    classList += "tooltip"

                    async(2000) {
                        this@ResultField.remove(this)
                    }
                    onClick {
                        it.stopPropagation()
                        it.preventDefault()
                        this@ResultField.remove(this)
                    }
                }
            }
        }
    }
}
