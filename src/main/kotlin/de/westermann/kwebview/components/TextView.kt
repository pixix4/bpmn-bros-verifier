package de.westermann.kwebview.components

import de.westermann.kobserve.Property
import de.westermann.kobserve.ReadOnlyProperty
import de.westermann.kobserve.property.property
import de.westermann.kwebview.*
import org.w3c.dom.HTMLSpanElement

/**
 * Represents a html span element.
 *
 * @author lars
 */
class TextView(
    value: String = "",
    view: HTMLSpanElement = createHtmlView()
) : View(view) {

    override val html = super.html as HTMLSpanElement

    fun bind(property: ReadOnlyProperty<String>) {
        textProperty.bind(property)
    }

    fun unbind() {
        textProperty.unbind()
    }

    var text: String
        get() = html.textContent ?: ""
        set(value) {
            html.textContent = value
            textProperty.invalidate()
        }

    val textProperty: Property<String> = property(this::text)

    var contentEditable: Boolean
        get() = html.isContentEditable
        set(value) {
            html.contentEditable = value.toString()
        }

    private var internalTabIndex by AttributeDelegate("tabIndex")
    var tabIndex: Int?
        get() = internalTabIndex?.toIntOrNull()
        set(value) {
            internalTabIndex = value?.toString()
        }

    init {
        text = value
    }

    companion object {
        fun wrap(view: HTMLSpanElement) = TextView(view.textContent ?: "", view)
    }
}

@KWebViewDsl
fun ViewCollection<in TextView>.textView(text: String = "", init: TextView.() -> Unit = {}) =
    TextView(text).also(this::append).also(init)

@KWebViewDsl
fun ViewCollection<in TextView>.textView(text: ReadOnlyProperty<String>, init: TextView.() -> Unit = {}) =
    TextView(text.value).also(this::append).also { it.bind(text) }.also(init)
