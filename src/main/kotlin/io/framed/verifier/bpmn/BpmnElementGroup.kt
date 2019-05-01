package io.framed.verifier.bpmn

interface BpmnElementGroup : BpmnElement {

    val content: List<BpmnElement>

    override fun build(model: BpmnModel) {
        for (it in content) {
            it.build(model)
        }
    }

    fun find(id: String): BpmnElement? {
        if (this.id == id) return this

        for (element in content) {
            if (element.id == id) return element

            if (element is BpmnElementGroup) {
                val founded = element.find(id)
                if (founded != null) return founded
            }
        }

        return null
    }

    override fun log(expand: Boolean): String = buildString {
        append(super.log())
        if (expand) {
            if (content.isNotEmpty()) append("\n")
            for ((index, element) in content.withIndex()) {
                append(element.log().prependIndent("  "))
                if (index < content.lastIndex) append("\n")
            }
        }
    }
}

@Suppress("EXTENSION_SHADOWED_BY_MEMBER")
inline fun <reified T : BpmnElement> BpmnElementGroup.find(id: String): T? = find(id) as? T
