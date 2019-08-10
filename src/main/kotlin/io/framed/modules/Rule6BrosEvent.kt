package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bpmn.model.BpmnTask
import io.framed.model.bros.Event
import io.framed.model.bros.ReturnEvent

fun Context.setupRule6() {

    match<BpmnTask, Event> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnTask, ReturnEvent> { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }

    /**
     * A bros event should have a matching element in bpmn.
     */
    verifyBros<Event>("BrosEventVerifier") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosEvent '${bros.element.desc}'")
    }

    /**
     * A bros return event should have a matching element in bpmn.
     */
    verifyBros<ReturnEvent>("BrosReturnEventVerifier") { bros ->
        for (element in bros.matchingElements) {
            val match = element.element as? BpmnElement ?: continue
            return@verifyBros Result.match("BrosReturnEvent '${bros.element.desc}' matches ${match.stringify()}", bpmn = element)
        }
        Result.error("Cannot find matching bpmn element for BrosReturnEvent '${bros.element.desc}'")
    }
}