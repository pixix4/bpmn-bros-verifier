package de.westermann.kwebview.components

import de.westermann.kwebview.KWebViewDsl
import de.westermann.kwebview.View
import de.westermann.kwebview.ViewCollection
import de.westermann.kwebview.i18n
import org.w3c.dom.DocumentReadyState
import org.w3c.dom.HTMLBodyElement
import org.w3c.dom.LOADING
import kotlin.browser.document
import kotlin.browser.window

object Body : ViewCollection<View>(document.body
        ?: throw NullPointerException("Access to body before body was loaded")) {
    override val html = super.html as HTMLBodyElement
}

@KWebViewDsl
fun init(language: String? = null, block: Body.() -> Unit) {
    var done = if (language == null) 1 else 2
    if (document.readyState == DocumentReadyState.LOADING) {
        window.onload = {
            done -= 1
            if (done <= 0) {
                block(Body)
            }
        }
    } else {
        done -= 1
        if (done <= 0) {
            block(Body)
        }
    }
    if (language != null) {
        i18n.load(language) {
            done -= 1
            if (done <= 0) {
                block(Body)
            }
        }
    }
}