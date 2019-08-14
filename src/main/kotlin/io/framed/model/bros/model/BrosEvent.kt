package io.framed.model.bros.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * The model defines an model of the modeling language
 */
@Serializable
@SerialName("Event")
class BrosEvent() : BrosObject() {

    constructor(init: (BrosEvent) -> Unit) : this() {
        init(this)
    }

    /**
     * Type of the model
     */
    var type: BrosEventType = BrosEventType.STANDARD
    /**
     * Description of the BpmnEvent
     */
    var desc: String = ""

    override fun stringify() = "${this::class.simpleName}($desc)"
}
