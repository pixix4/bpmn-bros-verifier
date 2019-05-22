package io.framed.bpmn

class ParseException(message: String?, cause: Throwable?) : RuntimeException(message, cause) {
    constructor() : this(null, null)
    constructor(message: String?) : this(message, null)
    constructor(cause: Throwable?) : this(undefined, cause)
}