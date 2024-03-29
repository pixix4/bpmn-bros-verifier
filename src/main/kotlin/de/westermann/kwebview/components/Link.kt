package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLAnchorElement

/**
 * Represents a html span element.
 *
 * @author lars
 */
class Link(view: HTMLAnchorElement = createHtmlView()) : View(view) {

    constructor(target: String, view: HTMLAnchorElement = createHtmlView()): this(view) {
        this.target = target
    }

    override val html = super.html as HTMLAnchorElement

    var text: String?
        get() = html.textContent
        set(value) {
            html.textContent = value
        }

    var target: String
        get() = html.href
        set(value) {
            html.href = value
        }

    companion object {
        fun wrap(view: HTMLAnchorElement) = Link(view)
    }
}

@KWebViewDsl
fun ViewCollection<in Link>.link(target: String, text: String? = null, init: Link.() -> Unit = {}): Link {
    val view = Link(target)
    if (text != null) {
        view.text = text
    }
    append(view)
    init(view)
    return view
}
