package io.framed.ui

import de.westermann.kobserve.property.mapBinding
import de.westermann.kobserve.property.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.*
import org.w3c.dom.events.EventListener
import org.w3c.files.get

class FileTextBox<T : Any>(
        name: String,
        private val transform: (String) -> T?,
        private val count: (T) -> Int
) : ViewCollection<View>() {

    val contentProperty = property("")
    var content by contentProperty

    private fun saveTransform(string: String) = try {
        transform(string)
    } catch (_:Exception) {
        null
    }

    val modelProperty = contentProperty.mapBinding(this::saveTransform)
    val model by modelProperty

    private val countTextProperty = modelProperty.mapBinding {
        val m = model
        m?.let(count)?.let {
            if (it == 1) "Found 1 element" else "Found $it elements"
        } ?: "Given file is not valid"
    }

    fun testTransform(value: String) = saveTransform(value) != null

    init {
        textView(name)
        val input = inputView(type = InputType.FILE) {
            html.addEventListener("change", EventListener {
                val files = html.files!!
                for (i in 0 until files.length) {
                    files[i]?.load {
                        content = it
                    }
                }
            })
        }
        button("Select file") {
            onClick {
                input.click()
            }
        }
        boxView {
            textArea(contentProperty)
        }
        boxView {
            textView(countTextProperty)
        }
    }
}
