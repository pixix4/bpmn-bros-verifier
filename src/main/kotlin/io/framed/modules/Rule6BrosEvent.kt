package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnTask
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosReturnEvent

fun Context.setupRule6() {

    match<BpmnTask, BrosEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnTask, BrosReturnEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    /**
     * A bros event should have a matching element in bpmn.
     */
    verifyBros<BrosEvent>("Rule 6 - BrosEvent") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosEvent '${bros.element.desc}'")
    }

    /**
     * A bros return event should have a matching element in bpmn.
     */
    verifyBros<BrosReturnEvent>("Rule 6 - BrosReturnEvent") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosReturnEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosReturnEvent '${bros.element.desc}'")
    }
}