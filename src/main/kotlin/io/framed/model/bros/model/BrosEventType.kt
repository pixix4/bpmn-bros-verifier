package io.framed.model.bros.model

/**
 * The enum defines the model and their specifications
 */
enum class BrosEventType(val printableName: String) {
    TIMER("Timer"),
    MESSAGE("Message"),
    ERROR("Error"),
    STANDARD("Standard"),
    CONDITION("Condition"),
    SIGNAL("Signal");
}
