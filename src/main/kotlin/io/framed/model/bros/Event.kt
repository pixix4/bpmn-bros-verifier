package io.framed.model.bros

import kotlinx.serialization.Serializable

/**
 * The model defines an model of the modeling language
 */
@Serializable
class Event() : ModelElement<Event>() {

    constructor(init: (Event) -> Unit) : this() {
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

    override fun copy() = Event { new ->
        new.type = type
        new.desc = desc
    }
}
