package io.framed.model

/**
 * The enum defines the model and their specifications
 */
enum class EventType(val printableName: String) {
    TIMER("Timer"),
    MESSAGE("Message"),
    ERROR("Error"),
    STANDARD("Standard"),
    CONDITION("Condition"),
    SIGNAL("Signal");
}
