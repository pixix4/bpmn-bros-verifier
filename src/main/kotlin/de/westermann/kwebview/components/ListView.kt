package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.createHtmlView
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement

class ListView<T : View>(view: HTMLElement = createHtmlView()) : ViewCollection<T>(view) {
    override val html = super.html as HTMLDivElement

    companion object {
        fun <T : View> wrap(view: HTMLElement) = ListView<T>(view)
    }
}

@KWebViewDsl
fun <T : View> ViewCollection<in ListView<T>>.listView(
    vararg classes: String,
    init: ListView<T>.() -> Unit = {}
): ListView<T> {
    val view = ListView<T>()
    for (c in classes) {
        view.classList += c
    }
    append(view)
    init(view)
    return view
}
