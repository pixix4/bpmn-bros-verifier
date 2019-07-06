package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * The model defines an model of the modeling language
 */
@Serializable
class ReturnEvent() : ModelElement<ReturnEvent>() {

    constructor(init: (ReturnEvent) -> Unit) : this() {
        init(this)
    }

    /**
     * Type of the model
     */
    var type: EventType = EventType.STANDARD
    /**
     * Description of the BpmnEvent
     */
    var desc: String = ""

    override fun stringify() = "${this::class.simpleName}($desc)"

    override fun copy() = ReturnEvent { new ->
        new.type = type
        new.desc = desc
    }
}