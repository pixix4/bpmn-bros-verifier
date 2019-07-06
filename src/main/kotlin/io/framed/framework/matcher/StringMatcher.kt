package io.framed.framework.matcher

import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

fun matchStrings(string1: String, string2: String): Boolean {

    val a = string1
            .replace("([a-z])([A-Z])".toRegex(), "$1 $2")
            .split(" ")
            .map { it.toLowerCase().trim() }
            .filter { it.isNotEmpty() }

    val b = string2
            .replace("([a-z])([A-Z])".toRegex(), "$1 $2")
            .split(" ")
            .map { it.toLowerCase().trim() }
            .filter { it.isNotEmpty() }

    if (a.isEmpty() || b.isEmpty() || min(a.size, b.size).toDouble() / max(a.size, b.size).toDouble() < 0.6) return false

    val longer: List<String>
    val shorter: List<String>
    if (a.size >= b.size) {
        longer = a
        shorter = b
    } else {
        longer = b
        shorter = a
    }

    return shorter.all { short ->
        val s = short.take(max(3, short.length - 2))
        for (long in longer) {
            val l = long.take(max(3, long.length - 2))
            if (long.startsWith(s) || short.startsWith(l) && abs(l.length - s.length) <= 2) return@all true
        }
        return@all false
    }
}
