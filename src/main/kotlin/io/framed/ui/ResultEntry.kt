package io.framed.ui

import de.westermann.kobserve.property.observe
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.MaterialIcon
import de.westermann.kwebview.components.boxView
import de.westermann.kwebview.components.iconView
import io.framed.framework.ModelTree
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement

class ResultEntry(
        private val type: Type,
        private val bpmn: ModelTree<BpmnElement>?,
        private val bros: ModelTree<ModelElement<*>>?,
        private val module: String?,
        private val message: String,
        onDelete: (() -> Unit)? = null
) : ViewCollection<View>() {

    fun render(view: View): ResultEntry {
        view.classList += "contains-${type.name.toLowerCase()}"
        return this
    }

    init {
        classList += "entry"
        classList += "entry-${type.name.toLowerCase()}"

        boxView {
            +ResultField("BPMN", bpmn.toString().observe(), bpmn?.element?.id.observe())
            +ResultField("BROS", bros.toString().observe(), bros?.element?.id.observe())
            +ResultField("Module", module.toString().observe())
        }

        boxView {
            +ResultField("Message", message.observe())
        }

        if (onDelete != null) {
            boxView("delete") {
                iconView(MaterialIcon.CLEAR)

                onClick {
                    onDelete()
                }
            }
        }
    }

    enum class Type {
        ERROR, WARN, INFO, ACCEPT
    }
}