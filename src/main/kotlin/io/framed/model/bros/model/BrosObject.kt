package io.framed.model.bros.model

import kotlinx.serialization.Serializable

@Serializable
abstract class BrosObject() : BrosElement() {

    open fun getAllChildren(): List<BrosObject> = listOf(this)
}