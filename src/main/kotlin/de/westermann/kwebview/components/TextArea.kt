package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.ValidationProperty
import de.westermann.kobserve.not
import de.westermann.kobserve.property.property
import de.westermann.kwebview.*
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent

class TextArea(
    initValue: String = "",
    view: HTMLTextAreaElement = createHtmlView()
) : ViewForLabel(view) {

    override val html = super.html as HTMLTextAreaElement

    fun bind(property: ReadOnlyProperty<String>) {
        valueProperty.bind(property)
        readonly = true
    }

    fun bind(property: Property<String>) {
        valueProperty.bindBidirectional(property)
    }

    fun bind(property: ValidationProperty<String>) {
        valueProperty.bindBidirectional(property)
        invalidProperty.bind(!property.validProperty)
    }

    fun unbind() {
        valueProperty.unbind()
        if (invalidProperty.isBound) {
            invalidProperty.unbind()
        }
    }

    var value: String
        get() = html.value
        set(value) {
            html.value = value
            valueProperty.invalidate()
        }

    val valueProperty: Property<String> = property(this::value)

    var placeholder: String
        get() = html.placeholder
        set(value) {
            html.placeholder = value
            placeholderProperty.invalidate()
        }

    val placeholderProperty: Property<String> = property(this::placeholder)

    val invalidProperty by ClassDelegate("invalid")
    var invalid by invalidProperty

    private var typeInternal by AttributeDelegate("type")
    var type: InputType?
        get() = typeInternal?.let(InputType.Companion::find)
        set(value) {
            typeInternal = value?.html
        }
    private var minInternal by AttributeDelegate("min")
    var min: Double?
        get() = minInternal?.toDoubleOrNull()
        set(value) {
            minInternal = value?.toString()
        }
    private var maxInternal by AttributeDelegate("max")
    var max: Double?
        get() = maxInternal?.toDoubleOrNull()
        set(value) {
            maxInternal = value?.toString()
        }
    private var stepInternal by AttributeDelegate("step")
    var step: Double?
        get() = stepInternal?.toDoubleOrNull()
        set(value) {
            stepInternal = value?.toString()
        }

    init {
        value = initValue
        this.type = type

        var lastValue = value
        val changeListener = object : EventListener {
            override fun handleEvent(event: Event) {
                val value = value
                if (value != valueProperty.value || value != lastValue) {
                    lastValue = value
                    valueProperty.value = value
                }

                (event as? KeyboardEvent)?.let { e ->
                    when (e.keyCode) {
                        13, 27 -> blur()
                    }
                }
            }
        }

        html.addEventListener("change", changeListener)
        html.addEventListener("keyup", changeListener)
        html.addEventListener("keypress", changeListener)
    }

    companion object {
        fun wrap(view: HTMLTextAreaElement) = TextArea(view.value, view)
    }
}

@KWebViewDsl
fun ViewCollection<in TextArea>.textArea(text: String = "", init: TextArea.() -> Unit = {}) =
    TextArea(text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in TextArea>.textArea(text: ReadOnlyProperty<String>, init: TextArea.() -> Unit = {}) =
    TextArea(text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in TextArea>.textArea(text: Property<String>, init: TextArea.() -> Unit = {}) =
    TextArea(text.value).also(this::append).also { it.bind(text) }.also(init)

@KWebViewDsl
fun ViewCollection<in TextArea>.textArea(text: ValidationProperty<String>, init: TextArea.() -> Unit = {}) =
    TextArea(text.value).also(this::append).also { it.bind(text) }.also(init)
