package de.westermann.kwebview

import de.westermann.kobserve.event.EventHandler
import de.westermann.robots.website.toolkit.view.TouchEvent
import de.westermann.robots.website.toolkit.view.get
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.MouseEvent
import org.w3c.xhr.FormData
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window

operator fun HTMLCollection.iterator() = object : Iterator<HTMLElement> {
    private var index = 0
    override fun hasNext(): Boolean {
        return index < this@iterator.length
    }

    override fun next(): HTMLElement {
        return this@iterator.get(index++) as HTMLElement
    }

}

operator fun NodeList.iterator() = object : Iterator<Node> {
    private var index = 0
    override fun hasNext(): Boolean {
        return index < this@iterator.length
    }

    override fun next(): Node {
        return this@iterator.get(index++)!!
    }

}

inline fun <reified V : HTMLElement> createHtmlView(tag: String? = null): V {
    var tagName: String
    if (tag != null) {
        tagName = tag
    } else {
        tagName = V::class.js.name.toLowerCase().replace("html([a-z]*)element".toRegex(), "$1")
        if (tagName.isBlank()) tagName = "div"
        if (tagName == "anchor") tagName = "a"
    }
    return document.createElement(tagName) as V
}

fun String.toDashCase() = replace("([a-z])([A-Z])".toRegex(), "$1-$2").toLowerCase()

inline fun <reified T> EventHandler<T>.bind(element: HTMLElement, event: String) {
    val listener = object : EventListener {
        override fun handleEvent(event: Event) {
            this@bind.emit(event as T)
        }
    }
    var isAttached = false

    val updateState = {
        if (isEmpty() && isAttached) {
            element.removeEventListener(event, listener)
            isAttached = false
        } else if (!isEmpty() && !isAttached) {
            element.addEventListener(event, listener)
            isAttached = true
        }
    }

    onAttach = updateState
    onDetach = updateState
    updateState()
}

fun MouseEvent.toPoint(): Point = Point(clientX, clientY)
fun TouchEvent.toPoint(): Point? = touches[0]?.let { Point(it.clientX, it.clientY) }
fun DOMRect.toDimension(): Dimension = Dimension(x, y, width, height)

fun Number.format(digits: Int): String = this.asDynamic().toFixed(digits)

external fun delete(p: dynamic): Boolean = definedExternally

fun delete(thing: dynamic, key: String) {
    delete(thing[key])
}

/**
 * Apply current dom changes and recalculate all sizes. Executes the given block afterwards.
 *
 * @param timeout Optionally set a timeout for this call. Defaults to 1.
 * @param block Callback
 */
fun async(timeout: Int = 1, block: () -> Unit): Int {
    if (timeout < 1) throw IllegalArgumentException("Timeout must be greater than 0!")
    return window.setTimeout(block, timeout)
}

fun interval(delay: Int, block: () -> Unit): Int {
    if (delay < 1) throw IllegalArgumentException("Delay must be greater than 0!")
    return window.setInterval(block, delay)
}

fun clearTimeout(id: Int) {
    window.clearTimeout(id)
}

fun clearInterval(id: Int) {
    window.clearInterval(id)
}

fun get(
    url: String,
    data: Map<String, String> = emptyMap(),
    onError: (Int) -> Unit = {},
    onSuccess: (String) -> Unit = {}
) {
    val xhttp = XMLHttpRequest()

    xhttp.onreadystatechange = {
        if (xhttp.readyState == 4.toShort()) {
            if (xhttp.status == 200.toShort() || xhttp.status == 304.toShort()) {
                onSuccess(xhttp.responseText)
            } else {
                onError(xhttp.status.toInt())
            }
        }
    }
    xhttp.open("GET", url, true)

    if (data.isNotEmpty()) {
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        val formData = FormData()
        for ((key, value) in data) {
            formData.append(key, value)
        }
        xhttp.send(formData)
    } else {
        xhttp.send()
    }
}

fun postForm(
    url: String,
    data: Map<String, String> = emptyMap(),
    onError: (Int) -> Unit = {},
    onSuccess: (String) -> Unit = {}
) {
    val xhttp = XMLHttpRequest()

    xhttp.onreadystatechange = {
        if (xhttp.readyState == 4.toShort()) {
            console.log(xhttp.status)
            if (xhttp.status == 200.toShort() || xhttp.status == 304.toShort()) {
                onSuccess(xhttp.responseText)
            } else {
                onError(xhttp.status.toInt())
            }
        }
    }
    xhttp.open("POST", url, true)

    if (data.isNotEmpty()) {
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        val formData = FormData()
        for ((key, value) in data) {
            formData.append(key, value)
        }
        xhttp.send(formData)
    } else {
        xhttp.send()
    }
}

fun postJson(
    url: String,
    data: dynamic,
    onError: (Int) -> Unit = {},
    onSuccess: (String) -> Unit = {}
) {
    val xhttp = XMLHttpRequest()

    xhttp.onreadystatechange = {
        if (xhttp.readyState == 4.toShort()) {
            console.log(xhttp.status)
            if (xhttp.status == 200.toShort() || xhttp.status == 304.toShort()) {
                onSuccess(xhttp.responseText)
            } else {
                onError(xhttp.status.toInt())
            }
        }
    }
    xhttp.open("POST", url, true)

    if (data.isNotEmpty()) {
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(data)
    } else {
        xhttp.send()
    }
}

fun jsonObject(block: (dynamic) -> Unit): dynamic {
    val json = js("{}")
    block(json)
    return json
}

fun jsonArray(block: (dynamic) -> Unit): dynamic {
    val json = js("[]")
    block(json)
    return json
}
