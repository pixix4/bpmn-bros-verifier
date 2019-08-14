package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnEvent
import io.framed.model.bpmn.model.BpmnFlow
import io.framed.model.bpmn.model.BpmnGateway
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosReturnEvent

fun Context.setupRule3() {

    match<BpmnEvent, BrosEvent>("DefaultEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc) &&
                !bpmn.element.terminationEvent
    }
    match<BpmnEvent, BrosReturnEvent>("ReturnEventMatcher") { bpmn, bros ->
        matchStrings(bpmn.element.name, bros.element.desc)
    }
    match<BpmnGateway, BrosEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnGateway, BrosReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.SEQUENCE &&
                    flow.relation.name.isNotBlank() &&
                    matchStrings(flow.relation.name, bros.element.desc)
        }
    }
    match<BpmnEvent, BrosEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements

        }
    }
    match<BpmnEvent, BrosReturnEvent> { bpmn, bros ->
        bpmn.relations<BpmnFlow>().any { flow ->
            flow.relation.type == BpmnFlow.Type.MESSAGE &&
                    flow.source in bros.matchingElements ||
                    flow.target in bros.matchingElements

        }
    }

    /**
     * Bpmn termination event must match a bros return event
     */
    verifyBpmn<BpmnEvent>("Rule 3 - BpmnTerminationEvent") { bpmn ->
        if (!bpmn.element.terminationEvent) return@verifyBpmn null

        for (match in bpmn.matchingElements) {
            val returnEvent = match.model<BrosReturnEvent>() ?: continue
            return@verifyBpmn Result.match("BpmnTerminationEvent '${bpmn.element.name}' matches BrosReturnEvent '${returnEvent.desc}'", bros = match)
        }
        Result.error("Cannot find matching bros element for BpmnTerminationEvent '${bpmn.element.name}'")
    }
}