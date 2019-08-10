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
        textView(value.mapBinding { it?.toString() ?: "" })

        if (!(isBpmnId || isBrosId)) {
            value.onChange {
                classList -= "updated"

                async(10) {
                    classList += "updated"
                }
            }
        }

        dataset["title"] = name
        dataset.bind("extra", extra.mapBinding {
            it?.let { "ID: $it" }
        })

        classList.add("clickable")
        title = "Click to copy ID"

        onClick {
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