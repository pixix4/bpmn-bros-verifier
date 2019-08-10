package io.framed.ui

import de.westermann.kobserve.event.emit
import de.westermann.kobserve.property.join
import de.westermann.kobserve.property.property
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.components.MaterialIcon
import de.westermann.kwebview.components.button
import de.westermann.kwebview.components.iconView
import de.westermann.kwebview.components.selectView
import io.framed.framework.matcher.PredefinedMatch

object CopyView : ViewCollection<View>() {

    val bpmnNameProperty = property("")
    val bpmnIdProperty = property<String?>(null)

    val brosNameProperty = property("")
    val brosIdProperty = property<Long?>(null)

    private val typeProperty = property(PredefinedMatch.Type.MATCH)

    private var active: Boolean
        get() = classList["active"]
        set(value) {
            classList["active"] = value
        }

    init {
        iconView(MaterialIcon.CLEAR) {
            onClick {
                active = false
            }
        }

        +ResultField(
                "BPMN",
                bpmnNameProperty,
                bpmnIdProperty
        )

        +ResultField(
                "BROS",
                brosNameProperty,
                brosIdProperty
        )

        selectView(typeProperty, {
            it.name.toLowerCase().capitalize()
        })

        button("Create") {
            onClick {
                active = false

                val match = PredefinedMatch(
                        bpmnIdProperty.value ?: return@onClick,
                        brosIdProperty.value ?: return@onClick,
                        typeProperty.value
                )

                emit(UpdatePredefinedMatch(match, UpdatePredefinedMatch.Type.ADD))
            }

            property(html::disabled).bind(bpmnIdProperty.join(brosIdProperty) { a, b ->
                if (a != null || b != null) {
                    active = true
                }
                a == null || b == null
            })
        }
    }
}