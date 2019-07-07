package io.framed.framework.matcher

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.list

@Serializable
data class ForceMatch(
        val bpmn: String,
        val bros: Long,
        val type: Type
) {
    enum class Type {
        MATCH, NOMATCH
    }

    companion object {
        fun parse(data: String): List<ForceMatch> {
            @Suppress("EXPERIMENTAL_API_USAGE")
            return Json.nonstrict.parse(serializer().list, data)
        }
    }
}