package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bpmn.model.BpmnFlow
import io.framed.model.bpmn.model.BpmnGateway
import io.framed.model.bros.Event
import io.framed.model.bros.ReturnEvent

fun Context.setupRule3() {

    match<BpmnEvent, Event>("DefaultEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc) &&
                !bpmn.element.terminationEvent
    }
    match<BpmnEvent, ReturnEvent>("ReturnEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnGateway, Event> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnGateway, ReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnEvent, Event> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements

        }
    }
    match<BpmnEvent, ReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements

        }
    }

    /**
     * Bpmn termination event must match a bros return event
     */
    verifyBpmn<BpmnEvent>("BpmnTerminationEventVerifier") { bpmn ->
        if (!bpmn.element.terminationEvent) return@verifyBpmn null

        for (match in bpmn.matchingElements) {
            val returnEvent = match.model<ReturnEvent>() ?: continue
            return@verifyBpmn Result.match("BpmnTerminationEvent '${bpmn.element.name}' matches ReturnEvent '${returnEvent.desc}'", bros = match)
        }
        Result.error("Cannot find matching bros element for BpmnTerminationEvent '${bpmn.element.name}'")
    }
}