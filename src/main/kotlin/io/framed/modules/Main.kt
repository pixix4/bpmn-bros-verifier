package io.framed.modules

import io.framed.framework.Context

val activeModules: List<Context.() -> Unit> = listOf(
    Context::setupRule1,
    Context::setupRule2,
    Context::setupRule3,
    Context::setupRule4,
    Context::setupRule5,
    Context::setupRule6
)
