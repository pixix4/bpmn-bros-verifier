package io.framed.framework

import io.framed.framework.matcher.Matcher
import io.framed.framework.verifier.BpmnVerifier
import io.framed.framework.verifier.BrosVerifier
import io.framed.framework.verifier.Result
import io.framed.framework.verifier.Verifier
import io.framed.model.bpmn.model.BpmnElement
import io.framed.model.bros.ModelElement
import kotlin.reflect.KClass

class Context {
    val matcherList: MutableList<Matcher> = mutableListOf()
    val verifierList: MutableList<Verifier> = mutableListOf()

    inline fun <reified Bpmn : BpmnElement, reified Bros : ModelElement<Bros>> match(
            name: String? = null,
            crossinline matcher: (bpmn: ModelTree<Bpmn>, bros: ModelTree<Bros>) -> Boolean
    ) {

        val bpmnName = Bpmn::class.simpleName
        val brosName = Bros::class.simpleName

        val matcherName: String?
        if (bpmnName != null && brosName != null) {
            matcherName = "$bpmnName${brosName}Matcher"
        } else matcherName = null

        matcherList += object : Matcher {
            override val name = name ?: matcherName ?: super.name

            override fun filterBpmn(bpmn: ModelTree<BpmnElement>) = bpmn.type == Bpmn::class

            override fun filterBros(bros: ModelTree<ModelElement<*>>) = bros.type == Bros::class

            override fun match(bpmn: ModelTree<BpmnElement>, bros: ModelTree<ModelElement<*>>): Boolean {
                @Suppress("UNCHECKED_CAST")
                return matcher(bpmn as ModelTree<Bpmn>, bros as ModelTree<Bros>)
            }
        }
    }

    @PublishedApi
    internal fun <Bpmn : BpmnElement> verifyBpmn(
            clazz: KClass<Bpmn>,
            name: String? = null,
            verifier: (bpmn: ModelTree<Bpmn>) -> Result
    ) {
        verifierList += object : BpmnVerifier {
            override val name = name ?: super.name

            override val filter: Set<KClass<out BpmnElement>> = setOf(clazz)

            override fun verifyBpmn(element: ModelTree<BpmnElement>): Result {
                @Suppress("UNCHECKED_CAST")
                return verifier(element as ModelTree<Bpmn>)
            }
        }
    }

    inline fun <reified Bpmn : BpmnElement> verifyBpmn(
            name: String? = null,
            noinline verifier: (bpmn: ModelTree<Bpmn>) -> Result
    ) = verifyBpmn(Bpmn::class, name, verifier)

    @PublishedApi
    internal fun <Bros : ModelElement<Bros>> verifyBros(
            clazz: KClass<Bros>,
            name: String? = null,
            verifier: (bros: ModelTree<Bros>) -> Result
    ) {
        verifierList += object : BrosVerifier {
            override val name = name ?: super.name
            override val filter: Set<KClass<out ModelElement<*>>> = setOf(clazz)
            override fun verifyBros(element: ModelTree<ModelElement<*>>): Result {
                @Suppress("UNCHECKED_CAST")
                return verifier(element as ModelTree<Bros>)
            }
        }
    }

    inline fun <reified Bros : ModelElement<Bros>> verifyBros(
            name: String? = null,
            noinline verifier: (bros: ModelTree<Bros>) -> Result
    ) = verifyBros(Bros::class, name, verifier)
}