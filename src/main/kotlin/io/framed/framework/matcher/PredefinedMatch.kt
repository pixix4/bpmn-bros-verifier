package io.framed.framework.matcher

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.list

@Serializable
data class PredefinedMatch(
        val bpmn: String,
        val bros: Long,
        val type: Type
) {
    enum class Type {
        MATCH, NOMATCH
    }

    companion object {
        fun parse(data: String): List<PredefinedMatch> {
            @Suppress("EXPERIMENTAL_API_USAGE")
            return Json.nonstrict.parse(serializer().list, data).foldRight(emptyList()) { predefinedMatch, acc ->
                if (acc.firstOrNull { it.bpmn == predefinedMatch.bpmn && it.bros == predefinedMatch.bros } == null) {
                    listOf(predefinedMatch) + acc
                } else {
                    acc
                }
            }
        }

        fun stringify(list: List<PredefinedMatch>): String {
            @Suppress("EXPERIMENTAL_API_USAGE")
            return Json.indented.stringify(serializer().list, list.foldRight(emptyList()) { predefinedMatch, acc ->
                if (acc.firstOrNull { it.bpmn == predefinedMatch.bpmn && it.bros == predefinedMatch.bros } == null) {
                    listOf(predefinedMatch) + acc
                } else {
                    acc
                }
            })
        }
    }
}