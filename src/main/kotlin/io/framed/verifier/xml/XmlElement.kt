package io.framed.verifier.xml

interface XmlElement {
    val tagName: String
    val textContent: String

    fun getAttribute(name: String): String
    operator fun get(name: String): String = getAttribute(name)

    val children: List<XmlElement>
}