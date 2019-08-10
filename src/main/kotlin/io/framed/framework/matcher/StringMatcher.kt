package io.framed.framework.matcher

import kotlin.math.abs
import kotlin.math.max

/**
 * Compare two strings for similarities.
 */
fun matchStrings(string1: String, string2: String): Boolean {

    // Setup strings.
    val a = stringToSet(string1)
    val b = stringToSet(string2)

    // Determine the shorter and the longer set.
    val longer: Set<String>
    val shorter: Set<String>
    if (a.size >= b.size) {
        longer = a
        shorter = b
    } else {
        longer = b
        shorter = a
    }

    // The shorter set should not be empty or less then 40% shorter as the longer set.
    if (
            shorter.isEmpty() ||
            shorter.size.toDouble() / longer.size.toDouble() < WORD_LENGTH_THRESHOLD
    ) {
        return false

    }
    // Check if all strings in the shorter set are in the longer set.

    return shorter.all { short ->
        // Cut off the last two chars.
        val s = short.take(
                max(
                        MIN_WORD_LENGTH,
                        short.length - WORD_ENDING_LENGTH
                )
        )

        // Check if current string is in the longer set.
        longer.any { long ->
            // Cut off the last two chars.
            val l = long.take(
                    max(
                            MIN_WORD_LENGTH,
                            long.length - WORD_ENDING_LENGTH
                    )
            )

            // Check if a string without the ending is a substring of the other string
            // but only if the strings only diverge in the ending.
            long.startsWith(s) ||
                    short.startsWith(l) &&
                    abs(l.length - s.length) <= WORD_ENDING_LENGTH
        }
    }
}

/**
 * Split string by camel case and lower case substrings.
 */
private fun stringToSet(str: String): Set<String> = str
        .replace(SPLIT_CAMEL_CASE_REGEX, "$1 $2")
        .split(" ")
        .map { it.toLowerCase().trim() }
        .filter { it.length >= MIN_WORD_LENGTH }
        .toSet()

private val SPLIT_CAMEL_CASE_REGEX = "([a-z])([A-Z])".toRegex()
private const val WORD_LENGTH_THRESHOLD = 0.6
private const val MIN_WORD_LENGTH = 3
private const val WORD_ENDING_LENGTH = 2
