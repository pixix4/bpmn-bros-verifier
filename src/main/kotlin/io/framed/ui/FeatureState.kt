package io.framed.ui

import de.westermann.kobserve.property.property
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window
import kotlin.reflect.KMutableProperty0
import kotlin.reflect.KProperty0

object FeatureState {
    val showErrorsProperty = property(true)
    var showErrors by showErrorsProperty

    val showWarningsProperty = property(true)
    var showWarnings by showWarningsProperty

    val showInfosProperty = property(true)
    var showInfos by showInfosProperty

    val showSuccessfulProperty = property(true)
    var showSuccessful by showSuccessfulProperty

    val tabProperty = property(0)
    var tab by tabProperty

    val usePredefinedMatchesProperty = property(true)
    var usePredefinedMatches by usePredefinedMatchesProperty

    private fun save(property: KProperty0<Boolean>) {
        window.localStorage["bbv-" + property.name] = property.get().toString()
    }

    private inline fun <reified T : Any> load(property: KMutableProperty0<T>) {
        val value = window.localStorage["bbv-" + property.name] ?: return
        val h: T = when (T::class) {
            Boolean::class -> value.toBoolean()
            Int::class -> value.toIntOrNull()
            else -> null
        } as? T ?: return
        if (property.get() != h) {
            property.set(h)
        }
    }

    init {
        load(this::showErrors)
        load(this::showWarnings)
        load(this::showInfos)
        load(this::showSuccessful)
        load(this::tab)

        showErrorsProperty.onChange { save(this::showErrors) }
        showWarningsProperty.onChange { save(this::showWarnings) }
        showInfosProperty.onChange { save(this::showInfos) }
        showSuccessfulProperty.onChange { save(this::showSuccessful) }
    }
}