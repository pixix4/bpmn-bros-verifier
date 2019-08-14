package io.framed.modules

import io.framed.framework.Context
import io.framed.framework.matcher.matchStrings
import io.framed.framework.verifier.Result
import io.framed.model.bpmn.model.BpmnProcess
import io.framed.model.bros.model.BrosEvent
import io.framed.model.bros.model.BrosRoleType
import io.framed.model.bros.model.BrosScene

fun Context.setupRule1() {

    match<BpmnProcess, BrosScene> { process, scene ->
        matchStrings(process.element.name, scene.element.name)
    }
    match<BpmnProcess, BrosRoleType> { process, role ->
        matchStrings(process.element.name, role.element.name)
    }
    match<BpmnProcess, BrosEvent> { process, bros ->
        matchStrings(process.element.name, bros.element.desc)
    }

    verifyBpmn<BpmnProcess>("Rule 1 - BpmnProcess") { bpmn ->
        for (bros in bpmn.matchingElements) {
            if (bros.checkType<BrosRoleType>()) {
                return@verifyBpmn Result.match("$bpmn matches $bros", bros = bros)
            }
            if (bros.checkType<BrosScene>()) {
                return@verifyBpmn Result.match("$bpmn matches $bros", bros = bros)
            }
            if (bros.checkType<BrosEvent>()) {
                return@verifyBpmn Result.match("$bpmn matches $bros", bros = bros)
            }
        }
        Result.error("Cannot find matching BrosElement for $bpmn")
    }
}