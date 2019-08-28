(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'KObserve', 'kotlinx-serialization-kotlinx-serialization-runtime'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('KObserve'), require('kotlinx-serialization-kotlinx-serialization-runtime'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'bpmn-bros-verifier'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bpmn-bros-verifier'.");
    }
    if (typeof KObserve === 'undefined') {
      throw new Error("Error loading module 'bpmn-bros-verifier'. Its dependency 'KObserve' was not found. Please, check whether 'KObserve' is loaded prior to 'bpmn-bros-verifier'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'bpmn-bros-verifier'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'bpmn-bros-verifier'.");
    }
    root['bpmn-bros-verifier'] = factory(typeof this['bpmn-bros-verifier'] === 'undefined' ? {} : this['bpmn-bros-verifier'], kotlin, KObserve, this['kotlinx-serialization-kotlinx-serialization-runtime']);
  }
}(this, function (_, Kotlin, $module$KObserve, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var property = $module$KObserve.de.westermann.kobserve.property.property_mh5how$;
  var Unit = Kotlin.kotlin.Unit;
  var Property = $module$KObserve.de.westermann.kobserve.Property;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Math_0 = Math;
  var Annotation = Kotlin.kotlin.Annotation;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var EventHandler = $module$KObserve.de.westermann.kobserve.event.EventHandler;
  var getKClass = Kotlin.getKClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Random = Kotlin.kotlin.random.Random;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var toString = Kotlin.kotlin.text.toString_if0zpk$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var property_0 = $module$KObserve.de.westermann.kobserve.property.property_w7kr7o$;
  var getCallableRef = Kotlin.getCallableRef;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var not = $module$KObserve.de.westermann.kobserve.not_nwpeaj$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var toShort = Kotlin.toShort;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Error_0 = Kotlin.kotlin.Error;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Sequence = Kotlin.kotlin.sequences.Sequence;
  var toString_0 = Kotlin.toString;
  var hashCode = Kotlin.hashCode;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var get_list = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.get_list_gekvwj$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var EnumSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.EnumSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var abs_0 = Kotlin.kotlin.math.abs_za3lpa$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Exception = Kotlin.kotlin.Exception;
  var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_issdgt$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var L0 = Kotlin.Long.ZERO;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var UnionKind = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnionKind;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ArrayListSerializer;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.KSerializer;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var SerializationException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.SerializationException;
  var HashSetSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.HashSetSerializer;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var PolymorphicSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.PolymorphicSerializer;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var List = Kotlin.kotlin.collections.List;
  var count = Kotlin.kotlin.sequences.count_veqyi0$;
  var join = $module$KObserve.de.westermann.kobserve.property.join_fac9v2$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var event = $module$KObserve.de.westermann.kobserve.event;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var emit = $module$KObserve.de.westermann.kobserve.event.emit_issdgt$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var mapBinding = $module$KObserve.de.westermann.kobserve.property.mapBinding_z4jc1y$;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var observe = $module$KObserve.de.westermann.kobserve.property.observe_eoe559$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  View$Companion$wrap$ObjectLiteral.prototype = Object.create(View.prototype);
  View$Companion$wrap$ObjectLiteral.prototype.constructor = View$Companion$wrap$ObjectLiteral;
  ViewCollection.prototype = Object.create(View.prototype);
  ViewCollection.prototype.constructor = ViewCollection;
  ViewForLabel.prototype = Object.create(View.prototype);
  ViewForLabel.prototype.constructor = ViewForLabel;
  Body.prototype = Object.create(ViewCollection.prototype);
  Body.prototype.constructor = Body;
  BoxView.prototype = Object.create(ViewCollection.prototype);
  BoxView.prototype.constructor = BoxView;
  Button.prototype = Object.create(ViewCollection.prototype);
  Button.prototype.constructor = Button;
  Checkbox.prototype = Object.create(ViewForLabel.prototype);
  Checkbox.prototype.constructor = Checkbox;
  FilterList.prototype = Object.create(ViewCollection.prototype);
  FilterList.prototype.constructor = FilterList;
  Heading$Type.prototype = Object.create(Enum.prototype);
  Heading$Type.prototype.constructor = Heading$Type;
  Heading.prototype = Object.create(View.prototype);
  Heading.prototype.constructor = Heading;
  IconView.prototype = Object.create(View.prototype);
  IconView.prototype.constructor = IconView;
  ImageView.prototype = Object.create(View.prototype);
  ImageView.prototype.constructor = ImageView;
  InputView.prototype = Object.create(ViewForLabel.prototype);
  InputView.prototype.constructor = InputView;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  Label.prototype = Object.create(View.prototype);
  Label.prototype.constructor = Label;
  Link.prototype = Object.create(View.prototype);
  Link.prototype.constructor = Link;
  ListView.prototype = Object.create(ViewCollection.prototype);
  ListView.prototype.constructor = ListView;
  MaterialIcon.prototype = Object.create(Enum.prototype);
  MaterialIcon.prototype.constructor = MaterialIcon;
  OptionView.prototype = Object.create(View.prototype);
  OptionView.prototype.constructor = OptionView;
  SelectView.prototype = Object.create(ViewCollection.prototype);
  SelectView.prototype.constructor = SelectView;
  Table.prototype = Object.create(ViewCollection.prototype);
  Table.prototype.constructor = Table;
  TableCaption.prototype = Object.create(ViewCollection.prototype);
  TableCaption.prototype.constructor = TableCaption;
  TableCell.prototype = Object.create(ViewCollection.prototype);
  TableCell.prototype.constructor = TableCell;
  TableRow.prototype = Object.create(ViewCollection.prototype);
  TableRow.prototype.constructor = TableRow;
  TableSection$Type.prototype = Object.create(Enum.prototype);
  TableSection$Type.prototype.constructor = TableSection$Type;
  TableSection.prototype = Object.create(ViewCollection.prototype);
  TableSection.prototype.constructor = TableSection;
  TextArea.prototype = Object.create(ViewForLabel.prototype);
  TextArea.prototype.constructor = TextArea;
  TextView.prototype = Object.create(View.prototype);
  TextView.prototype.constructor = TextView;
  InternationalizationError.prototype = Object.create(Error_0.prototype);
  InternationalizationError.prototype.constructor = InternationalizationError;
  PredefinedMatch$Type.prototype = Object.create(Enum.prototype);
  PredefinedMatch$Type.prototype.constructor = PredefinedMatch$Type;
  Result$Type.prototype = Object.create(Enum.prototype);
  Result$Type.prototype.constructor = Result$Type;
  PolymorphicClassDesc.prototype = Object.create(SerialClassDescImpl.prototype);
  PolymorphicClassDesc.prototype.constructor = PolymorphicClassDesc;
  BrosConnection.prototype = Object.create(BrosElement.prototype);
  BrosConnection.prototype.constructor = BrosConnection;
  BrosAggregation.prototype = Object.create(BrosConnection.prototype);
  BrosAggregation.prototype.constructor = BrosAggregation;
  BrosAttribute.prototype = Object.create(BrosElement.prototype);
  BrosAttribute.prototype.constructor = BrosAttribute;
  BrosObject.prototype = Object.create(BrosElement.prototype);
  BrosObject.prototype.constructor = BrosObject;
  BrosClass.prototype = Object.create(BrosObject.prototype);
  BrosClass.prototype.constructor = BrosClass;
  BrosObjectGroup.prototype = Object.create(BrosObject.prototype);
  BrosObjectGroup.prototype.constructor = BrosObjectGroup;
  BrosCompartment.prototype = Object.create(BrosObjectGroup.prototype);
  BrosCompartment.prototype.constructor = BrosCompartment;
  BrosComposition.prototype = Object.create(BrosConnection.prototype);
  BrosComposition.prototype.constructor = BrosComposition;
  BrosCreateRelation.prototype = Object.create(BrosConnection.prototype);
  BrosCreateRelation.prototype.constructor = BrosCreateRelation;
  BrosDestroyRelation.prototype = Object.create(BrosConnection.prototype);
  BrosDestroyRelation.prototype.constructor = BrosDestroyRelation;
  BrosEvent.prototype = Object.create(BrosObject.prototype);
  BrosEvent.prototype.constructor = BrosEvent;
  BrosEventType.prototype = Object.create(Enum.prototype);
  BrosEventType.prototype.constructor = BrosEventType;
  BrosFulfillment.prototype = Object.create(BrosConnection.prototype);
  BrosFulfillment.prototype.constructor = BrosFulfillment;
  BrosInheritance.prototype = Object.create(BrosConnection.prototype);
  BrosInheritance.prototype.constructor = BrosInheritance;
  BrosMethod.prototype = Object.create(BrosElement.prototype);
  BrosMethod.prototype.constructor = BrosMethod;
  BrosPackage.prototype = Object.create(BrosObjectGroup.prototype);
  BrosPackage.prototype.constructor = BrosPackage;
  BrosParameter.prototype = Object.create(BrosElement.prototype);
  BrosParameter.prototype.constructor = BrosParameter;
  BrosRelationship.prototype = Object.create(BrosConnection.prototype);
  BrosRelationship.prototype.constructor = BrosRelationship;
  BrosReturnEvent.prototype = Object.create(BrosObject.prototype);
  BrosReturnEvent.prototype.constructor = BrosReturnEvent;
  BrosRoleType.prototype = Object.create(BrosObject.prototype);
  BrosRoleType.prototype.constructor = BrosRoleType;
  BrosScene.prototype = Object.create(BrosObjectGroup.prototype);
  BrosScene.prototype.constructor = BrosScene;
  Application.prototype = Object.create(ViewCollection.prototype);
  Application.prototype.constructor = Application;
  CopyView.prototype = Object.create(ViewCollection.prototype);
  CopyView.prototype.constructor = CopyView;
  FileTextBox.prototype = Object.create(ViewCollection.prototype);
  FileTextBox.prototype.constructor = FileTextBox;
  ResultEntry$Type.prototype = Object.create(Enum.prototype);
  ResultEntry$Type.prototype.constructor = ResultEntry$Type;
  ResultEntry.prototype = Object.create(ViewCollection.prototype);
  ResultEntry.prototype.constructor = ResultEntry;
  ResultFeature.prototype = Object.create(ViewCollection.prototype);
  ResultFeature.prototype.constructor = ResultFeature;
  ResultField.prototype = Object.create(ViewCollection.prototype);
  ResultField.prototype.constructor = ResultField;
  ResultStats.prototype = Object.create(ViewCollection.prototype);
  ResultStats.prototype.constructor = ResultStats;
  ResultTabList.prototype = Object.create(ViewCollection.prototype);
  ResultTabList.prototype.constructor = ResultTabList;
  ResultView.prototype = Object.create(ViewCollection.prototype);
  ResultView.prototype.constructor = ResultView;
  UpdatePredefinedMatch$Type.prototype = Object.create(Enum.prototype);
  UpdatePredefinedMatch$Type.prototype.constructor = UpdatePredefinedMatch$Type;
  function AttributeDelegate(paramName) {
    if (paramName === void 0)
      paramName = null;
    this.paramName_0 = paramName;
  }
  AttributeDelegate.prototype.getParamName_0 = function (property) {
    var tmp$;
    return (tmp$ = this.paramName_0) != null ? tmp$ : property.callableName.toLowerCase();
  };
  AttributeDelegate.prototype.getValue_g92zoq$ = function (container, property) {
    return container.html.getAttribute(this.getParamName_0(property));
  };
  AttributeDelegate.prototype.setValue_wcp6fr$ = function (container, property, value) {
    if (value == null) {
      container.html.removeAttribute(this.getParamName_0(property));
    }
     else {
      container.html.setAttribute(this.getParamName_0(property), value.toString());
    }
  };
  AttributeDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttributeDelegate',
    interfaces: []
  };
  function ClassDelegate(className) {
    if (className === void 0)
      className = null;
    this.container_52mgvt$_0 = this.container_52mgvt$_0;
    this.paramName_9waf8i$_0 = this.paramName_9waf8i$_0;
    this.classProperty_irsmlv$_0 = this.classProperty_irsmlv$_0;
    if (className != null) {
      this.paramName_0 = className;
    }
  }
  Object.defineProperty(ClassDelegate.prototype, 'container_0', {
    get: function () {
      if (this.container_52mgvt$_0 == null)
        return throwUPAE('container');
      return this.container_52mgvt$_0;
    },
    set: function (container) {
      this.container_52mgvt$_0 = container;
    }
  });
  Object.defineProperty(ClassDelegate.prototype, 'paramName_0', {
    get: function () {
      if (this.paramName_9waf8i$_0 == null)
        return throwUPAE('paramName');
      return this.paramName_9waf8i$_0;
    },
    set: function (paramName) {
      this.paramName_9waf8i$_0 = paramName;
    }
  });
  Object.defineProperty(ClassDelegate.prototype, 'classProperty_0', {
    get: function () {
      if (this.classProperty_irsmlv$_0 == null)
        return throwUPAE('classProperty');
      return this.classProperty_irsmlv$_0;
    },
    set: function (classProperty) {
      this.classProperty_irsmlv$_0 = classProperty;
    }
  });
  function ClassDelegate$getValue$lambda(closure$container, this$ClassDelegate) {
    return function (it) {
      closure$container.html.classList.toggle(this$ClassDelegate.paramName_0, this$ClassDelegate.classProperty_0.value);
      return Unit;
    };
  }
  ClassDelegate.prototype.getValue_g92zoq$ = function (container, property_0) {
    if (this.container_52mgvt$_0 == null) {
      this.container_0 = container;
    }
    if (this.paramName_9waf8i$_0 == null) {
      var name = toDashCase(property_0.callableName);
      if (endsWith(name, '-property')) {
        name = replace(name, '-property', '');
      }
      this.paramName_0 = name;
    }
    if (this.classProperty_irsmlv$_0 == null) {
      this.classProperty_0 = property(container.html.classList.contains(this.paramName_0));
      this.classProperty_0.onChange.invoke_qlkmfe$(ClassDelegate$getValue$lambda(container, this));
    }
    return this.classProperty_0;
  };
  ClassDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassDelegate',
    interfaces: []
  };
  function ClassList(list) {
    this.list_0 = list;
    this.bound_0 = LinkedHashMap_init();
  }
  ClassList.prototype.add_61zpoe$ = function (clazz) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(clazz)) {
      tmp$ = this.bound_0.get_11rb$(clazz);
      if (tmp$ == null) {
        return;
      }
      var p = tmp$;
      if (Kotlin.isType(p.property, Property)) {
        p.property.value = true;
      }
       else {
        throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
      }
    }
     else {
      this.list_0.add(clazz);
    }
  };
  ClassList.prototype.plusAssign_61zpoe$ = function (clazz) {
    this.add_61zpoe$(clazz);
  };
  ClassList.prototype.remove_61zpoe$ = function (clazz) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(clazz)) {
      tmp$ = this.bound_0.get_11rb$(clazz);
      if (tmp$ == null) {
        return;
      }
      var p = tmp$;
      if (Kotlin.isType(p.property, Property)) {
        p.property.value = false;
      }
       else {
        throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
      }
    }
     else {
      this.list_0.remove(clazz);
    }
  };
  ClassList.prototype.minusAssign_61zpoe$ = function (clazz) {
    this.remove_61zpoe$(clazz);
  };
  ClassList.prototype.get_61zpoe$ = function (clazz) {
    return this.list_0.contains(clazz);
  };
  ClassList.prototype.contains_61zpoe$ = function (clazz) {
    return this.list_0.contains(clazz);
  };
  ClassList.prototype.set_ivxn3r$ = function (clazz, present) {
    if (present) {
      this.add_61zpoe$(clazz);
    }
     else {
      this.remove_61zpoe$(clazz);
    }
  };
  ClassList.prototype.toggle_h92gdm$ = function (clazz, force) {
    if (force === void 0)
      force = null;
    this.set_ivxn3r$(clazz, force != null ? force : !this.contains_61zpoe$(clazz));
  };
  function ClassList$bind$lambda(this$ClassList, closure$clazz, closure$property) {
    return function (it) {
      this$ClassList.list_0.toggle(closure$clazz, closure$property.value);
      return Unit;
    };
  }
  ClassList.prototype.bind_pwxjbw$ = function (clazz, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(clazz)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    this.set_ivxn3r$(clazz, property.value);
    var $receiver_0 = this.bound_0;
    var value = new ClassList$Bound(property, property.onChange.reference_qlkmfe$(ClassList$bind$lambda(this, clazz, property)));
    $receiver_0.put_xwzc9p$(clazz, value);
  };
  function ClassList$property$lambda(this$ClassList, closure$clazz, closure$property) {
    return function (it) {
      this$ClassList.list_0.toggle(closure$clazz, closure$property.value);
      return Unit;
    };
  }
  ClassList.prototype.property_61zpoe$ = function (clazz) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(clazz)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    var property_0 = property(this.get_61zpoe$(clazz));
    var $receiver_0 = this.bound_0;
    var value = new ClassList$Bound(property_0, property_0.onChange.reference_qlkmfe$(ClassList$property$lambda(this, clazz, property_0)));
    $receiver_0.put_xwzc9p$(clazz, value);
    return property_0;
  };
  ClassList.prototype.unbind_61zpoe$ = function (clazz) {
    var tmp$, tmp$_0;
    var $receiver = this.bound_0;
    var tmp$_1;
    if (!(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(clazz)) {
      throw IllegalArgumentException_init('Class is not bound!');
    }
    (tmp$_0 = (tmp$ = this.bound_0.get_11rb$(clazz)) != null ? tmp$.reference : null) != null ? tmp$_0.detach() : null;
    this.bound_0.remove_11rb$(clazz);
  };
  ClassList.prototype.iterator = function () {
    var tmp$ = this.toString();
    return Regex_init(' +').split_905azu$(tmp$, 0).iterator();
  };
  ClassList.prototype.toString = function () {
    return this.list_0.value;
  };
  ClassList.prototype.clear = function () {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.remove_61zpoe$(element);
    }
  };
  function ClassList$Bound(property, reference) {
    this.property = property;
    this.reference = reference;
  }
  ClassList$Bound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bound',
    interfaces: []
  };
  ClassList$Bound.prototype.component1 = function () {
    return this.property;
  };
  ClassList$Bound.prototype.component2 = function () {
    return this.reference;
  };
  ClassList$Bound.prototype.copy_tu793a$ = function (property, reference) {
    return new ClassList$Bound(property === void 0 ? this.property : property, reference === void 0 ? this.reference : reference);
  };
  ClassList$Bound.prototype.toString = function () {
    return 'Bound(property=' + Kotlin.toString(this.property) + (', reference=' + Kotlin.toString(this.reference)) + ')';
  };
  ClassList$Bound.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.property) | 0;
    result = result * 31 + Kotlin.hashCode(this.reference) | 0;
    return result;
  };
  ClassList$Bound.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.property, other.property) && Kotlin.equals(this.reference, other.reference)))));
  };
  ClassList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassList',
    interfaces: [Iterable]
  };
  function DataSet(map) {
    this.map_0 = map;
    this.bound_0 = LinkedHashMap_init();
  }
  DataSet.prototype.plusAssign_mdsbjt$ = function (entry) {
    var tmp$;
    var $receiver = this.bound_0;
    var key = entry.first;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key)) {
      (tmp$ = this.bound_0.get_11rb$(entry.first)) != null ? (tmp$.set_pdl1vj$(entry.second), Unit) : null;
    }
     else {
      this.map_0[entry.first] = entry.second;
    }
  };
  DataSet.prototype.minusAssign_61zpoe$ = function (key) {
    var tmp$;
    var $receiver = this.bound_0;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key)) {
      (tmp$ = this.bound_0.get_11rb$(key)) != null ? (tmp$.set_pdl1vj$(null), Unit) : null;
    }
     else {
      delete_0(this.map_0, key);
    }
  };
  DataSet.prototype.get_61zpoe$ = function (key) {
    return this.map_0[key];
  };
  DataSet.prototype.set_jyasbz$ = function (key, value) {
    if (value == null) {
      this.minusAssign_61zpoe$(key);
    }
     else {
      this.plusAssign_mdsbjt$(to(key, value));
    }
  };
  DataSet.prototype.bind_uidmrr$ = function (key, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    var $receiver_0 = this.bound_0;
    var value = new DataSet$Bound(this, key, null, property);
    $receiver_0.put_xwzc9p$(key, value);
  };
  DataSet.prototype.bind_mf9wae$ = function (key, property) {
    var $receiver = this.bound_0;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is already bound!');
    }
    var $receiver_0 = this.bound_0;
    var value = new DataSet$Bound(this, key, property, null);
    $receiver_0.put_xwzc9p$(key, value);
  };
  DataSet.prototype.property_61zpoe$ = function (key) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = this.bound_0;
    var tmp$_2;
    if ((Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(key)) {
      tmp$_1 = Kotlin.isType(tmp$_0 = (tmp$ = this.bound_0.get_11rb$(key)) != null ? tmp$.propertyNullable : null, Property) ? tmp$_0 : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Class is already bound!');
      }
      return tmp$_1;
    }
    var property_0 = property(this.get_61zpoe$(key));
    var $receiver_0 = this.bound_0;
    var value = new DataSet$Bound(this, key, property_0, null);
    $receiver_0.put_xwzc9p$(key, value);
    return property_0;
  };
  DataSet.prototype.unbind_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    var $receiver = this.bound_0;
    var tmp$_1;
    if (!(Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(key)) {
      throw IllegalArgumentException_init('Class is not bound!');
    }
    (tmp$_0 = (tmp$ = this.bound_0.get_11rb$(key)) != null ? tmp$.reference : null) != null ? tmp$_0.detach() : null;
    this.bound_0.remove_11rb$(key);
  };
  function DataSet$Bound($outer, key, propertyNullable, property) {
    this.$outer = $outer;
    this.key = key;
    this.propertyNullable = propertyNullable;
    this.property = property;
    this.reference = null;
    if (this.propertyNullable != null) {
      this.reference = this.propertyNullable.onChange.reference_qlkmfe$(DataSet$DataSet$Bound_init$lambda(this, this.$outer));
      var value = this.propertyNullable.value;
      if (value == null) {
        delete_0(this.$outer.map_0, this.key);
      }
       else {
        this.$outer.map_0[this.key] = value;
      }
    }
     else if (this.property != null) {
      this.reference = this.property.onChange.reference_qlkmfe$(DataSet$DataSet$Bound_init$lambda_0(this, this.$outer));
      this.$outer.map_0[this.key] = this.property.value;
    }
  }
  DataSet$Bound.prototype.set_pdl1vj$ = function (value) {
    if (this.propertyNullable != null && Kotlin.isType(this.propertyNullable, Property)) {
      this.propertyNullable.value = value;
    }
     else if (this.property != null && Kotlin.isType(this.property, Property) && value != null) {
      this.property.value = value;
    }
     else {
      throw IllegalStateException_init('The given class is bound and cannot be modified manually!');
    }
  };
  function DataSet$DataSet$Bound_init$lambda(this$Bound, this$DataSet) {
    return function (it) {
      var value = this$Bound.propertyNullable.value;
      if (value == null) {
        delete_0(this$DataSet.map_0, this$Bound.key);
      }
       else {
        this$DataSet.map_0[this$Bound.key] = value;
      }
      return Unit;
    };
  }
  function DataSet$DataSet$Bound_init$lambda_0(this$Bound, this$DataSet) {
    return function (it) {
      this$DataSet.map_0[this$Bound.key] = this$Bound.property.value;
      return Unit;
    };
  }
  DataSet$Bound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bound',
    interfaces: []
  };
  DataSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSet',
    interfaces: []
  };
  function Dimension(left, top, width, height) {
    Dimension$Companion_getInstance();
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(Dimension.prototype, 'position', {
    get: function () {
      return new Point(this.left, this.top);
    }
  });
  Object.defineProperty(Dimension.prototype, 'size', {
    get: function () {
      return new Point(this.width, this.height);
    }
  });
  Object.defineProperty(Dimension.prototype, 'right', {
    get: function () {
      return this.left + this.width;
    }
  });
  Object.defineProperty(Dimension.prototype, 'bottom', {
    get: function () {
      return this.top + this.height;
    }
  });
  Object.defineProperty(Dimension.prototype, 'center', {
    get: function () {
      return new Point(this.left + this.width / 2.0, this.top + this.height / 2.0);
    }
  });
  Object.defineProperty(Dimension.prototype, 'edges', {
    get: function () {
      return setOf([new Point(this.left, this.top), new Point(this.right, this.top), new Point(this.left, this.bottom), new Point(this.right, this.bottom)]);
    }
  });
  Object.defineProperty(Dimension.prototype, 'normalized', {
    get: function () {
      var a = this.left;
      var b = this.right;
      var l = Math_0.min(a, b);
      var a_0 = this.top;
      var b_0 = this.bottom;
      var t = Math_0.min(a_0, b_0);
      var x = this.width;
      var tmp$ = Math_0.abs(x);
      var x_0 = this.width;
      return new Dimension(l, t, tmp$, Math_0.abs(x_0));
    }
  });
  Dimension.prototype.contains_wi5w89$ = function (other) {
    return !(other.left > this.right || other.right < this.left || other.top > this.bottom || other.bottom < this.top);
  };
  Dimension.prototype.contains_lw9iv3$ = function (other) {
    var n = this.normalized;
    return n.left <= other.x && n.left + this.width >= other.x && (n.top <= other.y && n.top + this.height >= other.y);
  };
  Dimension.prototype.plus_lw9iv3$ = function (point) {
    return this.copy_6y0v78$(this.left + point.x, this.top + point.y);
  };
  function Dimension$Companion() {
    Dimension$Companion_instance = this;
    this.ZERO = new Dimension(0.0, 0.0);
  }
  Dimension$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dimension$Companion_instance = null;
  function Dimension$Companion_getInstance() {
    if (Dimension$Companion_instance === null) {
      new Dimension$Companion();
    }
    return Dimension$Companion_instance;
  }
  Dimension.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dimension',
    interfaces: []
  };
  function Dimension_init(position, size, $this) {
    if (size === void 0)
      size = Point$Companion_getInstance().ZERO;
    $this = $this || Object.create(Dimension.prototype);
    Dimension.call($this, position.x, position.y, size.x, size.y);
    return $this;
  }
  Dimension.prototype.component1 = function () {
    return this.left;
  };
  Dimension.prototype.component2 = function () {
    return this.top;
  };
  Dimension.prototype.component3 = function () {
    return this.width;
  };
  Dimension.prototype.component4 = function () {
    return this.height;
  };
  Dimension.prototype.copy_6y0v78$ = function (left, top, width, height) {
    return new Dimension(left === void 0 ? this.left : left, top === void 0 ? this.top : top, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Dimension.prototype.toString = function () {
    return 'Dimension(left=' + Kotlin.toString(this.left) + (', top=' + Kotlin.toString(this.top)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Dimension.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Dimension.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function KWebViewDsl() {
  }
  KWebViewDsl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KWebViewDsl',
    interfaces: [Annotation]
  };
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  Point.prototype.plus_za3lpa$ = function (number) {
    return new Point(this.x + number, this.y + number);
  };
  Point.prototype.plus_14dthe$ = function (number) {
    return new Point(this.x + number, this.y + number);
  };
  Point.prototype.plus_lw9iv3$ = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
  };
  Point.prototype.minus_za3lpa$ = function (number) {
    return new Point(this.x - number, this.y - number);
  };
  Point.prototype.minus_14dthe$ = function (number) {
    return new Point(this.x - number, this.y - number);
  };
  Point.prototype.minus_lw9iv3$ = function (point) {
    return new Point(this.x - point.x, this.y - point.y);
  };
  Point.prototype.times_za3lpa$ = function (number) {
    return new Point(this.x * number, this.y * number);
  };
  Point.prototype.times_14dthe$ = function (number) {
    return new Point(this.x * number, this.y * number);
  };
  Point.prototype.times_lw9iv3$ = function (point) {
    return new Point(this.x * point.x, this.y * point.y);
  };
  Point.prototype.div_za3lpa$ = function (number) {
    return new Point(this.x / number, this.y / number);
  };
  Point.prototype.div_14dthe$ = function (number) {
    return new Point(this.x / number, this.y / number);
  };
  Point.prototype.div_lw9iv3$ = function (point) {
    return new Point(this.x / point.x, this.y / point.y);
  };
  Point.prototype.unaryMinus = function () {
    return new Point(-this.x, -this.y);
  };
  Point.prototype.min = function () {
    var a = this.x;
    var b = this.y;
    return Math_0.min(a, b);
  };
  Point.prototype.max = function () {
    var a = this.x;
    var b = this.y;
    return Math_0.max(a, b);
  };
  Object.defineProperty(Point.prototype, 'isZero', {
    get: function () {
      return this.x === 0.0 && this.y === 0.0;
    }
  });
  function Point$Companion() {
    Point$Companion_instance = this;
    this.ZERO = new Point(0.0, 0.0);
  }
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Object.defineProperty(Point.prototype, 'asPx', {
    get: function () {
      return this.x.toString() + 'px, ' + this.y + 'px';
    }
  });
  Point.prototype.distance = function () {
    var x = this.x * this.x + this.y * this.y;
    return Math_0.sqrt(x);
  };
  Point.prototype.distance_lw9iv3$ = function (other) {
    return this.minus_lw9iv3$(other).distance();
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  function Point_init(x, y, $this) {
    $this = $this || Object.create(Point.prototype);
    Point.call($this, x, y);
    return $this;
  }
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_lu1900$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function get_0($receiver, index) {
    return $receiver.item(index);
  }
  function all($receiver) {
    var $receiver_0 = new IntRange(0, $receiver.length);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$($receiver.item(item));
    }
    return filterNotNull(destination);
  }
  function find($receiver, identifier) {
    var $receiver_0 = all($receiver);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.identifier === identifier) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  }
  function bind$ObjectLiteral(this$bind, isT, typeClosure$T) {
    this.this$bind = this$bind;
    this.isT = isT;
    this.typeClosure$T = typeClosure$T;
  }
  bind$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$;
    this.this$bind.emit_11rb$(this.isT(tmp$ = event) ? tmp$ : throwCCE());
  };
  bind$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function bind$lambda(this$bind, closure$isAttached, closure$element, closure$event, closure$listener) {
    return function () {
      if (this$bind.isEmpty() && closure$isAttached.v) {
        closure$element.removeEventListener(closure$event, closure$listener);
        closure$isAttached.v = false;
      }
       else if (!this$bind.isEmpty() && !closure$isAttached.v) {
        closure$element.addEventListener(closure$event, closure$listener);
        closure$isAttached.v = true;
      }
      return Unit;
    };
  }
  function View(view_0) {
    View$Companion_getInstance();
    if (view_0 === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view_0 = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    }
    var $receiver = view_0;
    var tmp$_1;
    if ((tmp$_1 = Kotlin.getKClassFromExpression(this).simpleName) != null) {
      $receiver.classList.add(toDashCase(tmp$_1));
    }
    this.html_2h1ff9$_0 = $receiver;
    this.classList = new ClassList(view_0.classList);
    this.dataset = new DataSet(view_0.dataset);
    this.id_ly6v17$_0 = new AttributeDelegate();
    this.title_b5qgcc$_0 = new AttributeDelegate();
    this.style = view_0.style;
    this.onClick = new EventHandler();
    this.onDblClick = new EventHandler();
    this.onContext = new EventHandler();
    this.onMouseDown = new EventHandler();
    this.onMouseMove = new EventHandler();
    this.onMouseUp = new EventHandler();
    this.onMouseEnter = new EventHandler();
    this.onMouseLeave = new EventHandler();
    this.onWheel = new EventHandler();
    this.onKeyDown = new EventHandler();
    this.onKeyPress = new EventHandler();
    this.onKeyUp = new EventHandler();
    this.onFocus = new EventHandler();
    this.onBlur = new EventHandler();
    this.onDragStart = new EventHandler();
    this.onDrag = new EventHandler();
    this.onDragEnter = new EventHandler();
    this.onDragLeave = new EventHandler();
    this.onDragOver = new EventHandler();
    this.onDrop = new EventHandler();
    this.onDragEnd = new EventHandler();
    var $receiver_0 = this.onClick;
    var element = view_0;
    var listener = new bind$ObjectLiteral($receiver_0, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached = {v: false};
    var updateState = bind$lambda($receiver_0, isAttached, element, 'click', listener);
    $receiver_0.onAttach = updateState;
    $receiver_0.onDetach = updateState;
    updateState();
    var $receiver_1 = this.onDblClick;
    var element_0 = view_0;
    var event = 'dblclick';
    var listener_0 = new bind$ObjectLiteral($receiver_1, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_0 = {v: false};
    var updateState_0 = bind$lambda($receiver_1, isAttached_0, element_0, event, listener_0);
    $receiver_1.onAttach = updateState_0;
    $receiver_1.onDetach = updateState_0;
    updateState_0();
    var $receiver_2 = this.onContext;
    var element_1 = view_0;
    var event_0 = 'contextmenu';
    var listener_1 = new bind$ObjectLiteral($receiver_2, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_1 = {v: false};
    var updateState_1 = bind$lambda($receiver_2, isAttached_1, element_1, event_0, listener_1);
    $receiver_2.onAttach = updateState_1;
    $receiver_2.onDetach = updateState_1;
    updateState_1();
    var $receiver_3 = this.onMouseDown;
    var element_2 = view_0;
    var event_1 = 'mousedown';
    var listener_2 = new bind$ObjectLiteral($receiver_3, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_2 = {v: false};
    var updateState_2 = bind$lambda($receiver_3, isAttached_2, element_2, event_1, listener_2);
    $receiver_3.onAttach = updateState_2;
    $receiver_3.onDetach = updateState_2;
    updateState_2();
    var $receiver_4 = this.onMouseMove;
    var element_3 = view_0;
    var event_2 = 'mousemove';
    var listener_3 = new bind$ObjectLiteral($receiver_4, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_3 = {v: false};
    var updateState_3 = bind$lambda($receiver_4, isAttached_3, element_3, event_2, listener_3);
    $receiver_4.onAttach = updateState_3;
    $receiver_4.onDetach = updateState_3;
    updateState_3();
    var $receiver_5 = this.onMouseUp;
    var element_4 = view_0;
    var listener_4 = new bind$ObjectLiteral($receiver_5, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_4 = {v: false};
    var updateState_4 = bind$lambda($receiver_5, isAttached_4, element_4, 'mouseup', listener_4);
    $receiver_5.onAttach = updateState_4;
    $receiver_5.onDetach = updateState_4;
    updateState_4();
    var $receiver_6 = this.onMouseEnter;
    var element_5 = view_0;
    var event_3 = 'mouseenter';
    var listener_5 = new bind$ObjectLiteral($receiver_6, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_5 = {v: false};
    var updateState_5 = bind$lambda($receiver_6, isAttached_5, element_5, event_3, listener_5);
    $receiver_6.onAttach = updateState_5;
    $receiver_6.onDetach = updateState_5;
    updateState_5();
    var $receiver_7 = this.onMouseLeave;
    var element_6 = view_0;
    var event_4 = 'mouseleave';
    var listener_6 = new bind$ObjectLiteral($receiver_7, Kotlin.isInstanceOf(MouseEvent), MouseEvent);
    var isAttached_6 = {v: false};
    var updateState_6 = bind$lambda($receiver_7, isAttached_6, element_6, event_4, listener_6);
    $receiver_7.onAttach = updateState_6;
    $receiver_7.onDetach = updateState_6;
    updateState_6();
    var $receiver_8 = this.onWheel;
    var element_7 = view_0;
    var listener_7 = new bind$ObjectLiteral($receiver_8, Kotlin.isInstanceOf(WheelEvent), WheelEvent);
    var isAttached_7 = {v: false};
    var updateState_7 = bind$lambda($receiver_8, isAttached_7, element_7, 'wheel', listener_7);
    $receiver_8.onAttach = updateState_7;
    $receiver_8.onDetach = updateState_7;
    updateState_7();
    var $receiver_9 = this.onKeyDown;
    var element_8 = view_0;
    var listener_8 = new bind$ObjectLiteral($receiver_9, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_8 = {v: false};
    var updateState_8 = bind$lambda($receiver_9, isAttached_8, element_8, 'keydown', listener_8);
    $receiver_9.onAttach = updateState_8;
    $receiver_9.onDetach = updateState_8;
    updateState_8();
    var $receiver_10 = this.onKeyPress;
    var element_9 = view_0;
    var event_5 = 'keypress';
    var listener_9 = new bind$ObjectLiteral($receiver_10, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_9 = {v: false};
    var updateState_9 = bind$lambda($receiver_10, isAttached_9, element_9, event_5, listener_9);
    $receiver_10.onAttach = updateState_9;
    $receiver_10.onDetach = updateState_9;
    updateState_9();
    var $receiver_11 = this.onKeyUp;
    var element_10 = view_0;
    var listener_10 = new bind$ObjectLiteral($receiver_11, Kotlin.isInstanceOf(KeyboardEvent), KeyboardEvent);
    var isAttached_10 = {v: false};
    var updateState_10 = bind$lambda($receiver_11, isAttached_10, element_10, 'keyup', listener_10);
    $receiver_11.onAttach = updateState_10;
    $receiver_11.onDetach = updateState_10;
    updateState_10();
    var $receiver_12 = this.onFocus;
    var element_11 = view_0;
    var listener_11 = new bind$ObjectLiteral($receiver_12, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_11 = {v: false};
    var updateState_11 = bind$lambda($receiver_12, isAttached_11, element_11, 'focus', listener_11);
    $receiver_12.onAttach = updateState_11;
    $receiver_12.onDetach = updateState_11;
    updateState_11();
    var $receiver_13 = this.onBlur;
    var element_12 = view_0;
    var listener_12 = new bind$ObjectLiteral($receiver_13, Kotlin.isInstanceOf(FocusEvent), FocusEvent);
    var isAttached_12 = {v: false};
    var updateState_12 = bind$lambda($receiver_13, isAttached_12, element_12, 'blur', listener_12);
    $receiver_13.onAttach = updateState_12;
    $receiver_13.onDetach = updateState_12;
    updateState_12();
    var $receiver_14 = this.onDragStart;
    var element_13 = view_0;
    var event_6 = 'dragstart';
    var listener_13 = new bind$ObjectLiteral($receiver_14, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_13 = {v: false};
    var updateState_13 = bind$lambda($receiver_14, isAttached_13, element_13, event_6, listener_13);
    $receiver_14.onAttach = updateState_13;
    $receiver_14.onDetach = updateState_13;
    updateState_13();
    var $receiver_15 = this.onDrag;
    var element_14 = view_0;
    var listener_14 = new bind$ObjectLiteral($receiver_15, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_14 = {v: false};
    var updateState_14 = bind$lambda($receiver_15, isAttached_14, element_14, 'drag', listener_14);
    $receiver_15.onAttach = updateState_14;
    $receiver_15.onDetach = updateState_14;
    updateState_14();
    var $receiver_16 = this.onDragEnter;
    var element_15 = view_0;
    var event_7 = 'dragenter';
    var listener_15 = new bind$ObjectLiteral($receiver_16, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_15 = {v: false};
    var updateState_15 = bind$lambda($receiver_16, isAttached_15, element_15, event_7, listener_15);
    $receiver_16.onAttach = updateState_15;
    $receiver_16.onDetach = updateState_15;
    updateState_15();
    var $receiver_17 = this.onDragLeave;
    var element_16 = view_0;
    var event_8 = 'dragleave';
    var listener_16 = new bind$ObjectLiteral($receiver_17, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_16 = {v: false};
    var updateState_16 = bind$lambda($receiver_17, isAttached_16, element_16, event_8, listener_16);
    $receiver_17.onAttach = updateState_16;
    $receiver_17.onDetach = updateState_16;
    updateState_16();
    var $receiver_18 = this.onDragOver;
    var element_17 = view_0;
    var event_9 = 'dragover';
    var listener_17 = new bind$ObjectLiteral($receiver_18, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_17 = {v: false};
    var updateState_17 = bind$lambda($receiver_18, isAttached_17, element_17, event_9, listener_17);
    $receiver_18.onAttach = updateState_17;
    $receiver_18.onDetach = updateState_17;
    updateState_17();
    var $receiver_19 = this.onDrop;
    var element_18 = view_0;
    var listener_18 = new bind$ObjectLiteral($receiver_19, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_18 = {v: false};
    var updateState_18 = bind$lambda($receiver_19, isAttached_18, element_18, 'drop', listener_18);
    $receiver_19.onAttach = updateState_18;
    $receiver_19.onDetach = updateState_18;
    updateState_18();
    var $receiver_20 = this.onDragEnd;
    var element_19 = view_0;
    var listener_19 = new bind$ObjectLiteral($receiver_20, Kotlin.isInstanceOf(DragEvent), DragEvent);
    var isAttached_19 = {v: false};
    var updateState_19 = bind$lambda($receiver_20, isAttached_19, element_19, 'dragend', listener_19);
    $receiver_20.onAttach = updateState_19;
    $receiver_20.onDetach = updateState_19;
    updateState_19();
  }
  Object.defineProperty(View.prototype, 'html', {
    get: function () {
      return this.html_2h1ff9$_0;
    }
  });
  var View$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(View.prototype, 'id', {
    get: function () {
      return this.id_ly6v17$_0.getValue_g92zoq$(this, View$id_metadata);
    },
    set: function (id) {
      this.id_ly6v17$_0.setValue_wcp6fr$(this, View$id_metadata, id);
    }
  });
  Object.defineProperty(View.prototype, 'clientLeft', {
    get: function () {
      return this.html.clientLeft;
    }
  });
  Object.defineProperty(View.prototype, 'clientTop', {
    get: function () {
      return this.html.clientTop;
    }
  });
  Object.defineProperty(View.prototype, 'clientWidth', {
    get: function () {
      return this.html.clientWidth;
    }
  });
  Object.defineProperty(View.prototype, 'clientHeight', {
    get: function () {
      return this.html.clientHeight;
    }
  });
  Object.defineProperty(View.prototype, 'offsetLeft', {
    get: function () {
      return this.html.offsetLeft;
    }
  });
  Object.defineProperty(View.prototype, 'offsetTop', {
    get: function () {
      return this.html.offsetTop;
    }
  });
  Object.defineProperty(View.prototype, 'offsetWidth', {
    get: function () {
      return this.html.offsetWidth;
    }
  });
  Object.defineProperty(View.prototype, 'offsetHeight', {
    get: function () {
      return this.html.offsetHeight;
    }
  });
  Object.defineProperty(View.prototype, 'offsetLeftTotal', {
    get: function () {
      var tmp$;
      var element = this.html;
      var offset = 0;
      while (element != null) {
        offset = offset + element.offsetLeft | 0;
        element = Kotlin.isType(tmp$ = element.offsetParent, HTMLElement) ? tmp$ : null;
      }
      return offset;
    }
  });
  Object.defineProperty(View.prototype, 'offsetTopTotal', {
    get: function () {
      var tmp$;
      var element = this.html;
      var offset = 0;
      while (element != null) {
        offset = offset + element.offsetTop | 0;
        element = Kotlin.isType(tmp$ = element.offsetParent, HTMLElement) ? tmp$ : null;
      }
      return offset;
    }
  });
  Object.defineProperty(View.prototype, 'dimension', {
    get: function () {
      return toDimension(this.html.getBoundingClientRect());
    }
  });
  Object.defineProperty(View.prototype, 'point', {
    get: function () {
      return this.dimension.position;
    }
  });
  var View$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(View.prototype, 'title', {
    get: function () {
      return this.title_b5qgcc$_0.getValue_g92zoq$(this, View$title_metadata);
    },
    set: function (title) {
      this.title_b5qgcc$_0.setValue_wcp6fr$(this, View$title_metadata, title);
    }
  });
  View.prototype.style_ro3e7h$ = function (block) {
    block(this.style);
  };
  View.prototype.focus = function () {
    this.html.focus();
  };
  View.prototype.blur = function () {
    this.html.blur();
  };
  View.prototype.click = function () {
    this.html.click();
  };
  function View$Companion() {
    View$Companion_instance = this;
  }
  function View$Companion$wrap$lambda($receiver) {
    return Unit;
  }
  function View$Companion$wrap$ObjectLiteral(view_0) {
    View.call(this, view_0);
  }
  View$Companion$wrap$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [View]
  };
  View$Companion.prototype.wrap_rjrahh$ = function (htmlElement, init) {
    if (init === void 0)
      init = View$Companion$wrap$lambda;
    var $receiver = new View$Companion$wrap$ObjectLiteral(htmlElement);
    init($receiver);
    return $receiver;
  };
  View$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var View$Companion_instance = null;
  function View$Companion_getInstance() {
    if (View$Companion_instance === null) {
      new View$Companion();
    }
    return View$Companion_instance;
  }
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: []
  };
  function ViewCollection(view) {
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    }
    View.call(this, view);
    this.children = ArrayList_init_0();
  }
  ViewCollection.prototype.wrapContent_5iug5c$ = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.ViewCollection.wrapContent_5iug5c$', wrapFunction(function () {
    var iterator = _.de.westermann.kwebview.iterator_sg7yuv$;
    var contains = Kotlin.kotlin.text.contains_li3zpu$;
    return function (T_0, isT, classes, transform) {
      if (classes === void 0)
        classes = '';
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = iterator(this.html.children);
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        tmp$_1 = isT(tmp$_0 = element) ? tmp$_0 : null;
        if (tmp$_1 == null) {
          continue;
        }
        var html = tmp$_1;
        if (!contains(html.className, classes))
          continue;
        var tmp$_2;
        tmp$_2 = this.children;
        var tmp$_3;
        tmp$_3 = transform(html);
        if (tmp$_3 == null) {
          continue;
        }
        tmp$_2.add_11rb$(tmp$_3);
      }
    };
  }));
  ViewCollection.prototype.wrapContent_47f7g4$ = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.ViewCollection.wrapContent_47f7g4$', wrapFunction(function () {
    var HTMLElement_0 = HTMLElement;
    var iterator = _.de.westermann.kwebview.iterator_sg7yuv$;
    var contains = Kotlin.kotlin.text.contains_li3zpu$;
    return function (classes, transform) {
      if (classes === void 0)
        classes = '';
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = iterator(this.html.children);
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        tmp$_1 = Kotlin.isType(tmp$_0 = element, HTMLElement_0) ? tmp$_0 : null;
        if (tmp$_1 == null) {
          continue;
        }
        var html = tmp$_1;
        if (!contains(html.className, classes))
          continue;
        var tmp$_2;
        tmp$_2 = this.children;
        var tmp$_3;
        tmp$_3 = transform(html);
        if (tmp$_3 == null) {
          continue;
        }
        tmp$_2.add_11rb$(tmp$_3);
      }
    };
  }));
  ViewCollection.prototype.append_4q8e84$ = function (view) {
    this.children.add_11rb$(view);
    this.html.appendChild(view.html);
  };
  ViewCollection.prototype.plusAssign_4q8e84$ = function (view) {
    this.append_4q8e84$(view);
  };
  ViewCollection.prototype.prepand_4q8e84$ = function (view) {
    this.children.add_wxm5ur$(0, view);
    this.html.insertBefore(view.html, this.html.firstChild);
  };
  ViewCollection.prototype.remove_4q8e84$ = function (view) {
    if (this.children.contains_11rb$(view)) {
      this.children.remove_11rb$(view);
      this.html.removeChild(view.html);
    }
  };
  ViewCollection.prototype.replace_6kgn13$ = function (oldView, newView) {
    if (this.children.contains_11rb$(oldView)) {
      this.children.add_wxm5ur$(this.children.indexOf_11rb$(oldView), newView);
      this.html.insertBefore(newView.html, oldView.html);
      this.children.remove_11rb$(oldView);
      this.html.removeChild(oldView.html);
    }
  };
  ViewCollection.prototype.add_4q8e84$ = function (view) {
    this.append_4q8e84$(view);
  };
  ViewCollection.prototype.add_3kdhji$ = function (index, view) {
    if (index >= this.size) {
      this.append_4q8e84$(view);
    }
     else {
      this.html.insertBefore(view.html, this.children.get_za3lpa$(index).html);
      this.children.add_wxm5ur$(index, view);
    }
  };
  ViewCollection.prototype.get_za3lpa$ = function (index) {
    return this.children.get_za3lpa$(index);
  };
  ViewCollection.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.size;
    if (0 <= index && index < tmp$) {
      this.remove_4q8e84$(this.children.get_za3lpa$(index));
    }
  };
  ViewCollection.prototype.toForeground_4q8e84$ = function (view) {
    if (this.children.contains_11rb$(view) && this.children.indexOf_11rb$(view) < (this.children.size - 1 | 0)) {
      this.remove_4q8e84$(view);
      this.append_4q8e84$(view);
    }
  };
  ViewCollection.prototype.toBackground_4q8e84$ = function (view) {
    if (this.children.contains_11rb$(view) && this.children.indexOf_11rb$(view) > 0) {
      this.remove_4q8e84$(view);
      this.prepand_4q8e84$(view);
    }
  };
  ViewCollection.prototype.first = function () {
    return first(this.children);
  };
  ViewCollection.prototype.last = function () {
    return last(this.children);
  };
  ViewCollection.prototype.minusAssign_4q8e84$ = function (view) {
    this.remove_4q8e84$(view);
  };
  ViewCollection.prototype.isEmpty = function () {
    return this.children.isEmpty();
  };
  ViewCollection.prototype.clear = function () {
    this.children.clear();
    clear(this.html);
  };
  ViewCollection.prototype.iterator = function () {
    return this.children.iterator();
  };
  Object.defineProperty(ViewCollection.prototype, 'size', {
    get: function () {
      return this.children.size;
    }
  });
  ViewCollection.prototype.contains_11rb$ = function (element) {
    return this.children.contains_11rb$(element);
  };
  ViewCollection.prototype.containsAll_brywnq$ = function (elements) {
    return this.children.containsAll_brywnq$(elements);
  };
  ViewCollection.prototype.unaryPlus_o71kt9$ = function ($receiver) {
    this.append_4q8e84$($receiver);
  };
  ViewCollection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewCollection',
    interfaces: [Collection, View]
  };
  function ViewForLabel(view) {
    ViewForLabel$Companion_getInstance();
    View.call(this, view);
    this.label_l3sykr$_0 = null;
    this.requiredInternal_voook1$_awav3d$_0 = new AttributeDelegate('required');
    this.readonlyInternal_y59ok4$_8ilbr2$_0 = new AttributeDelegate('readonly');
    this.tabindex_ht064y$_0 = new AttributeDelegate();
  }
  ViewForLabel.prototype.setLabel_f5v1jf$ = function (label) {
    var tmp$;
    if (this.label_l3sykr$_0 != null) {
      throw IllegalStateException_init('Label already set!');
    }
    this.label_l3sykr$_0 = label;
    var id = this.id;
    if ((id != null ? !isBlank(id) : null) === true) {
      label.html.htmlFor = id;
    }
     else {
      var newId = ((tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? toDashCase(tmp$) : null) + '-' + ViewForLabel$Companion_getInstance().generateId_za3lpa$();
      this.id = newId;
      label.html.htmlFor = newId;
    }
  };
  var ViewForLabel$requiredInternal_metadata = new PropertyMetadata('requiredInternal');
  Object.defineProperty(ViewForLabel.prototype, 'requiredInternal_voook1$_0', {
    get: function () {
      return this.requiredInternal_voook1$_awav3d$_0.getValue_g92zoq$(this, ViewForLabel$requiredInternal_metadata);
    },
    set: function (requiredInternal) {
      this.requiredInternal_voook1$_awav3d$_0.setValue_wcp6fr$(this, ViewForLabel$requiredInternal_metadata, requiredInternal);
    }
  });
  Object.defineProperty(ViewForLabel.prototype, 'required', {
    get: function () {
      return this.requiredInternal_voook1$_0 != null;
    },
    set: function (value) {
      this.requiredInternal_voook1$_0 = value ? 'required' : null;
    }
  });
  var ViewForLabel$readonlyInternal_metadata = new PropertyMetadata('readonlyInternal');
  Object.defineProperty(ViewForLabel.prototype, 'readonlyInternal_y59ok4$_0', {
    get: function () {
      return this.readonlyInternal_y59ok4$_8ilbr2$_0.getValue_g92zoq$(this, ViewForLabel$readonlyInternal_metadata);
    },
    set: function (readonlyInternal) {
      this.readonlyInternal_y59ok4$_8ilbr2$_0.setValue_wcp6fr$(this, ViewForLabel$readonlyInternal_metadata, readonlyInternal);
    }
  });
  Object.defineProperty(ViewForLabel.prototype, 'readonly', {
    get: function () {
      return this.readonlyInternal_y59ok4$_0 != null;
    },
    set: function (value) {
      this.readonlyInternal_y59ok4$_0 = value ? 'readonly' : null;
    }
  });
  var ViewForLabel$tabindex_metadata = new PropertyMetadata('tabindex');
  Object.defineProperty(ViewForLabel.prototype, 'tabindex', {
    get: function () {
      return this.tabindex_ht064y$_0.getValue_g92zoq$(this, ViewForLabel$tabindex_metadata);
    },
    set: function (tabindex) {
      this.tabindex_ht064y$_0.setValue_wcp6fr$(this, ViewForLabel$tabindex_metadata, tabindex);
    }
  });
  ViewForLabel.prototype.preventTabStop = function () {
    this.tabindex = '-1';
  };
  function ViewForLabel$Companion() {
    ViewForLabel$Companion_instance = this;
  }
  ViewForLabel$Companion.prototype.generateId_za3lpa$ = function (length) {
    if (length === void 0)
      length = 16;
    var str = '';
    while (str.length <= length) {
      str += toString(abs(Random.Default.nextLong()), 36);
    }
    return take(str, length);
  };
  ViewForLabel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ViewForLabel$Companion_instance = null;
  function ViewForLabel$Companion_getInstance() {
    if (ViewForLabel$Companion_instance === null) {
      new ViewForLabel$Companion();
    }
    return ViewForLabel$Companion_instance;
  }
  ViewForLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewForLabel',
    interfaces: [View]
  };
  function Body() {
    Body_instance = this;
    tmp$ = document.body;
    if (tmp$ == null) {
      throw new NullPointerException('Access to body before body was loaded');
    }
    var tmp$;
    ViewCollection.call(this, tmp$);
    var tmp$_0;
    this.html_eoe4bw$_0 = Kotlin.isType(tmp$_0 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLBodyElement) ? tmp$_0 : throwCCE();
  }
  Object.defineProperty(Body.prototype, 'html', {
    get: function () {
      return this.html_eoe4bw$_0;
    }
  });
  Body.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Body',
    interfaces: [ViewCollection]
  };
  var Body_instance = null;
  function Body_getInstance() {
    if (Body_instance === null) {
      new Body();
    }
    return Body_instance;
  }
  function init$lambda(closure$done, closure$block) {
    return function (it) {
      closure$done.v = closure$done.v - 1 | 0;
      if (closure$done.v <= 0) {
        closure$block(Body_getInstance());
      }
      return Unit;
    };
  }
  function init$lambda_0(closure$done, closure$block) {
    return function () {
      closure$done.v = closure$done.v - 1 | 0;
      if (closure$done.v <= 0) {
        closure$block(Body_getInstance());
      }
      return Unit;
    };
  }
  function init(language, block) {
    if (language === void 0)
      language = null;
    var done = {v: language == null ? 1 : 2};
    if (equals(document.readyState, 'loading')) {
      window.onload = init$lambda(done, block);
    }
     else {
      done.v = done.v - 1 | 0;
      if (done.v <= 0) {
        block(Body_getInstance());
      }
    }
    if (language != null) {
      i18n_getInstance().load_a4mwiz$(language, init$lambda_0(done, block));
    }
  }
  function BoxView() {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLDivElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLDivElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_kguaso$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLDivElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(BoxView.prototype, 'html', {
    get: function () {
      return this.html_kguaso$_0;
    }
  });
  BoxView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoxView',
    interfaces: [ViewCollection]
  };
  function boxView$lambda($receiver) {
    return Unit;
  }
  function boxView($receiver, classes, init) {
    if (init === void 0)
      init = boxView$lambda;
    var tmp$;
    var view = new BoxView();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function Button(view) {
    Button$Companion_getInstance();
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLButtonElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLButtonElement) ? tmp$ : throwCCE();
    }
    ViewCollection.call(this, view);
    var tmp$_1;
    this.html_tbrays$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
  }
  Object.defineProperty(Button.prototype, 'html', {
    get: function () {
      return this.html_tbrays$_0;
    }
  });
  Button.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Button.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  function Button$Companion() {
    Button$Companion_instance = this;
  }
  Button$Companion.prototype.wrap_cqtaea$ = function (view) {
    return new Button(view);
  };
  Button$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Button$Companion_instance = null;
  function Button$Companion_getInstance() {
    if (Button$Companion_instance === null) {
      new Button$Companion();
    }
    return Button$Companion_instance;
  }
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [ViewCollection]
  };
  function Button_init(text, $this) {
    $this = $this || Object.create(Button.prototype);
    Button.call($this);
    $this.text = text;
    return $this;
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function button($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = button$lambda;
    var $receiver_0 = Button_init(text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function button$lambda_0($receiver) {
    return Unit;
  }
  function button_0($receiver, text, init) {
    if (init === void 0)
      init = button$lambda_0;
    var $receiver_0 = Button_init(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function button$lambda_1($receiver) {
    return Unit;
  }
  function button_1($receiver, init) {
    if (init === void 0)
      init = button$lambda_1;
    var $receiver_0 = new Button();
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function Checkbox(initValue, view) {
    if (initValue === void 0)
      initValue = false;
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLInputElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLInputElement) ? tmp$ : throwCCE();
    }
    ViewForLabel.call(this, view);
    var tmp$_1;
    this.html_7tcg99$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewForLabel.prototype, 'html'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.checkedProperty = property_0(getPropertyCallableRef('checked', 0, function ($receiver) {
      return $receiver.checked;
    }.bind(null, this), function ($receiver, value) {
      $receiver.checked = value;
    }.bind(null, this)));
    this.checked = initValue;
    this.html.type = 'checkbox';
    var lastValue = {v: this.checked};
    var changeListener = new Checkbox_init$ObjectLiteral(this, lastValue);
    this.html.addEventListener('change', changeListener);
    this.html.addEventListener('keyup', changeListener);
    this.html.addEventListener('keypress', changeListener);
  }
  Object.defineProperty(Checkbox.prototype, 'html', {
    get: function () {
      return this.html_7tcg99$_0;
    }
  });
  Checkbox.prototype.bind_qq32mi$ = function (property) {
    this.checkedProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  Checkbox.prototype.bind_8y7n20$ = function (property) {
    this.checkedProperty.bindBidirectional_8xvv9u$(property);
  };
  Checkbox.prototype.unbind = function () {
    this.checkedProperty.unbind();
  };
  Object.defineProperty(Checkbox.prototype, 'checked', {
    get: function () {
      return this.html.checked;
    },
    set: function (value) {
      this.html.checked = value;
      this.checkedProperty.invalidate();
    }
  });
  function Checkbox_init$ObjectLiteral(this$Checkbox, closure$lastValue) {
    this.this$Checkbox = this$Checkbox;
    this.closure$lastValue = closure$lastValue;
  }
  Checkbox_init$ObjectLiteral.prototype.handleEvent = function (event) {
    var value = this.this$Checkbox.checked;
    if (value !== this.this$Checkbox.checkedProperty.value || value !== this.closure$lastValue.v) {
      this.closure$lastValue.v = value;
      this.this$Checkbox.checkedProperty.value = value;
    }
  };
  Checkbox_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Checkbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Checkbox',
    interfaces: [ViewForLabel]
  };
  function checkbox$lambda($receiver) {
    return Unit;
  }
  function checkbox($receiver, value, init) {
    if (value === void 0)
      value = false;
    if (init === void 0)
      init = checkbox$lambda;
    var $receiver_0 = new Checkbox(value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function checkbox$lambda_0($receiver) {
    return Unit;
  }
  function checkbox_0($receiver, value, init) {
    if (init === void 0)
      init = checkbox$lambda_0;
    var $receiver_0 = new Checkbox(value.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_qq32mi$(value);
    init($receiver_0);
    return $receiver_0;
  }
  function checkbox$lambda_1($receiver) {
    return Unit;
  }
  function checkbox_1($receiver, value, init) {
    if (init === void 0)
      init = checkbox$lambda_1;
    var $receiver_0 = new Checkbox(value.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_8y7n20$(value);
    init($receiver_0);
    return $receiver_0;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function FilterList(property, filter) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE());
    this.property = property;
    this.filter = filter;
    this.content_0 = LinkedHashMap_init();
    this.update();
    this.property.onChange.invoke_qlkmfe$(FilterList_init$lambda(this));
  }
  function FilterList$update$lambda(closure$element, this$FilterList) {
    return function (it) {
      this$FilterList.property.value = closure$element;
      return Unit;
    };
  }
  FilterList.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1;
    var list = this.filter.filter_11rb$(this.property.value);
    var missing = list;
    tmp$ = this.content_0.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var element = tmp$_2.key;
      var view = tmp$_2.value;
      if (list.contains_11rb$(element)) {
        missing = minus(missing, element);
      }
       else {
        if (this.contains_11rb$(view)) {
          this.remove_4q8e84$(view);
        }
        if (!this.filter.useCache) {
          this.content_0.remove_11rb$(element);
        }
      }
    }
    tmp$_0 = missing.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var view_0 = this.filter.render_11rb$(element_0);
      this.append_4q8e84$(view_0);
      if (Kotlin.isType(this.property, Property)) {
        view_0.onClick.invoke_qlkmfe$(FilterList$update$lambda(element_0, this));
      }
      this.content_0.put_xwzc9p$(element_0, view_0);
    }
    this.clear();
    tmp$_1 = list.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      this.append_4q8e84$(ensureNotNull(this.content_0.get_11rb$(element_1)));
    }
  };
  function FilterList_init$lambda(this$FilterList) {
    return function (it) {
      this$FilterList.update();
      return Unit;
    };
  }
  FilterList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterList',
    interfaces: [ViewCollection]
  };
  function Filter() {
  }
  Filter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Filter',
    interfaces: []
  };
  function StringFilter(dataSet) {
    this.dataSet_0 = dataSet;
    this.useCache_uti5lv$_0 = true;
  }
  function StringFilter$filter$lambda(closure$partial) {
    return function (it) {
      return it.length + (indexOf(it.toLowerCase(), closure$partial) * 2 | 0) | 0;
    };
  }
  StringFilter.prototype.filter_11rb$ = function (partial) {
    var tmp$;
    var lower = trim(Kotlin.isCharSequence(tmp$ = partial) ? tmp$ : throwCCE()).toString().toLowerCase();
    var $receiver = this.dataSet_0;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (contains(element.toLowerCase(), lower))
        destination.add_11rb$(element);
    }
    return sortedWith(destination, new Comparator$ObjectLiteral(compareBy$lambda(StringFilter$filter$lambda(partial))));
  };
  StringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(StringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_uti5lv$_0;
    }
  });
  StringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringFilter',
    interfaces: [Filter]
  };
  function StaticStringFilter(dataSet) {
    this.dataSet_0 = dataSet;
    this.useCache_h5ipm9$_0 = true;
  }
  StaticStringFilter.prototype.filter_11rb$ = function (partial) {
    return this.dataSet_0;
  };
  StaticStringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(StaticStringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_h5ipm9$_0;
    }
  });
  StaticStringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StaticStringFilter',
    interfaces: [Filter]
  };
  function DynamicStringFilter(filter) {
    this.filter_0 = filter;
    this.useCache_6r3q28$_0 = false;
  }
  DynamicStringFilter.prototype.filter_11rb$ = function (partial) {
    return this.filter_0(partial);
  };
  DynamicStringFilter.prototype.render_11rb$ = function (element) {
    return new TextView(element);
  };
  Object.defineProperty(DynamicStringFilter.prototype, 'useCache', {
    get: function () {
      return this.useCache_6r3q28$_0;
    }
  });
  DynamicStringFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicStringFilter',
    interfaces: [Filter]
  };
  function filterList$lambda($receiver) {
    return Unit;
  }
  function filterList($receiver, property, filter, init) {
    if (init === void 0)
      init = filterList$lambda;
    var $receiver_0 = new FilterList(property, filter);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function Heading(type, value) {
    if (value === void 0)
      value = '';
    var tag = type.tagName;
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLHeadingElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLHeadingElement) ? tmp$ : throwCCE());
    this.type = type;
    var tmp$_1;
    this.html_6orzhi$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLHeadingElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.text = value;
  }
  Object.defineProperty(Heading.prototype, 'html', {
    get: function () {
      return this.html_6orzhi$_0;
    }
  });
  Heading.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Heading.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Heading.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  function Heading$Type(name, ordinal, tagName) {
    Enum.call(this);
    this.tagName = tagName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Heading$Type_initFields() {
    Heading$Type_initFields = function () {
    };
    Heading$Type$H1_instance = new Heading$Type('H1', 0, 'h1');
    Heading$Type$H2_instance = new Heading$Type('H2', 1, 'h2');
    Heading$Type$H3_instance = new Heading$Type('H3', 2, 'h3');
    Heading$Type$H4_instance = new Heading$Type('H4', 3, 'h4');
    Heading$Type$H5_instance = new Heading$Type('H5', 4, 'h5');
    Heading$Type$H6_instance = new Heading$Type('H6', 5, 'h6');
  }
  var Heading$Type$H1_instance;
  function Heading$Type$H1_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H1_instance;
  }
  var Heading$Type$H2_instance;
  function Heading$Type$H2_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H2_instance;
  }
  var Heading$Type$H3_instance;
  function Heading$Type$H3_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H3_instance;
  }
  var Heading$Type$H4_instance;
  function Heading$Type$H4_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H4_instance;
  }
  var Heading$Type$H5_instance;
  function Heading$Type$H5_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H5_instance;
  }
  var Heading$Type$H6_instance;
  function Heading$Type$H6_getInstance() {
    Heading$Type_initFields();
    return Heading$Type$H6_instance;
  }
  Heading$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Heading$Type$values() {
    return [Heading$Type$H1_getInstance(), Heading$Type$H2_getInstance(), Heading$Type$H3_getInstance(), Heading$Type$H4_getInstance(), Heading$Type$H5_getInstance(), Heading$Type$H6_getInstance()];
  }
  Heading$Type.values = Heading$Type$values;
  function Heading$Type$valueOf(name) {
    switch (name) {
      case 'H1':
        return Heading$Type$H1_getInstance();
      case 'H2':
        return Heading$Type$H2_getInstance();
      case 'H3':
        return Heading$Type$H3_getInstance();
      case 'H4':
        return Heading$Type$H4_getInstance();
      case 'H5':
        return Heading$Type$H5_getInstance();
      case 'H6':
        return Heading$Type$H6_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.Heading.Type.' + name);
    }
  }
  Heading$Type.valueOf_61zpoe$ = Heading$Type$valueOf;
  Heading.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Heading',
    interfaces: [View]
  };
  function h1$lambda($receiver) {
    return Unit;
  }
  function h1($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h1$lambda;
    var $receiver_0 = new Heading(Heading$Type$H1_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h1$lambda_0($receiver) {
    return Unit;
  }
  function h1_0($receiver, text, init) {
    if (init === void 0)
      init = h1$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H1_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h2$lambda($receiver) {
    return Unit;
  }
  function h2($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h2$lambda;
    var $receiver_0 = new Heading(Heading$Type$H2_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h2$lambda_0($receiver) {
    return Unit;
  }
  function h2_0($receiver, text, init) {
    if (init === void 0)
      init = h2$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H2_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h3$lambda($receiver) {
    return Unit;
  }
  function h3($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h3$lambda;
    var $receiver_0 = new Heading(Heading$Type$H3_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h3$lambda_0($receiver) {
    return Unit;
  }
  function h3_0($receiver, text, init) {
    if (init === void 0)
      init = h3$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H3_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h4$lambda($receiver) {
    return Unit;
  }
  function h4($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h4$lambda;
    var $receiver_0 = new Heading(Heading$Type$H4_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h4$lambda_0($receiver) {
    return Unit;
  }
  function h4_0($receiver, text, init) {
    if (init === void 0)
      init = h4$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H4_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h5$lambda($receiver) {
    return Unit;
  }
  function h5($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h5$lambda;
    var $receiver_0 = new Heading(Heading$Type$H5_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h5$lambda_0($receiver) {
    return Unit;
  }
  function h5_0($receiver, text, init) {
    if (init === void 0)
      init = h5$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H5_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function h6$lambda($receiver) {
    return Unit;
  }
  function h6($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = h6$lambda;
    var $receiver_0 = new Heading(Heading$Type$H6_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function h6$lambda_0($receiver) {
    return Unit;
  }
  function h6_0($receiver, text, init) {
    if (init === void 0)
      init = h6$lambda_0;
    var $receiver_0 = new Heading(Heading$Type$H6_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Icon() {
  }
  Icon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Icon',
    interfaces: []
  };
  function IconView(icon) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLSpanElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSpanElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_dso3rc$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    this.icon_dsx33u$_0 = null;
    this.iconProperty = property_0(getPropertyCallableRef('icon', 0, function ($receiver) {
      return $receiver.icon;
    }.bind(null, this), function ($receiver, value) {
      $receiver.icon = value;
    }.bind(null, this)));
    this.icon = icon;
  }
  Object.defineProperty(IconView.prototype, 'html', {
    get: function () {
      return this.html_dso3rc$_0;
    }
  });
  IconView.prototype.bind_gvhbgm$ = function (property) {
    this.iconProperty.bind_ybyx9l$(property);
  };
  IconView.prototype.unbind = function () {
    this.iconProperty.unbind();
  };
  Object.defineProperty(IconView.prototype, 'icon', {
    get: function () {
      return this.icon_dsx33u$_0;
    },
    set: function (value) {
      this.icon_dsx33u$_0 = value;
      clear(this.html);
      if (value != null) {
        this.html.appendChild(value.element);
      }
      this.iconProperty.invalidate();
    }
  });
  IconView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IconView',
    interfaces: [View]
  };
  function iconView$lambda($receiver) {
    return Unit;
  }
  function iconView($receiver, icon, init) {
    if (icon === void 0)
      icon = null;
    if (init === void 0)
      init = iconView$lambda;
    var $receiver_0 = new IconView(icon);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function iconView$lambda_0($receiver) {
    return Unit;
  }
  function iconView_0($receiver, icon, init) {
    if (init === void 0)
      init = iconView$lambda_0;
    var $receiver_0 = new IconView(icon.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_gvhbgm$(icon);
    init($receiver_0);
    return $receiver_0;
  }
  function ImageView(src) {
    var tmp$;
    var tagName;
    if ('img' != null) {
      tagName = 'img';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLImageElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLImageElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_7oytxk$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLImageElement) ? tmp$_1 : throwCCE();
    this.sourceProperty = property_0(getPropertyCallableRef('source', 0, function ($receiver) {
      return $receiver.source;
    }.bind(null, this), function ($receiver, value) {
      $receiver.source = value;
    }.bind(null, this)));
    this.alt_kvg7zs$_0 = new AttributeDelegate('alt');
    this.source = src;
  }
  Object.defineProperty(ImageView.prototype, 'html', {
    get: function () {
      return this.html_7oytxk$_0;
    }
  });
  ImageView.prototype.bind_vbud5z$ = function (property) {
    this.sourceProperty.bind_ybyx9l$(property);
  };
  ImageView.prototype.unbind = function () {
    this.sourceProperty.unbind();
  };
  Object.defineProperty(ImageView.prototype, 'source', {
    get: function () {
      return this.html.src;
    },
    set: function (value) {
      this.html.src = value;
      this.sourceProperty.invalidate();
    }
  });
  var ImageView$alt_metadata = new PropertyMetadata('alt');
  Object.defineProperty(ImageView.prototype, 'alt', {
    get: function () {
      return this.alt_kvg7zs$_0.getValue_g92zoq$(this, ImageView$alt_metadata);
    },
    set: function (alt) {
      this.alt_kvg7zs$_0.setValue_wcp6fr$(this, ImageView$alt_metadata, alt);
    }
  });
  ImageView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageView',
    interfaces: [View]
  };
  function imageView$lambda($receiver) {
    return Unit;
  }
  function imageView($receiver, src, init) {
    if (src === void 0)
      src = '';
    if (init === void 0)
      init = imageView$lambda;
    var $receiver_0 = new ImageView(src);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function imageView$lambda_0($receiver) {
    return Unit;
  }
  function imageView_0($receiver, src, init) {
    if (init === void 0)
      init = imageView$lambda_0;
    var $receiver_0 = new ImageView(src.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(src);
    init($receiver_0);
    return $receiver_0;
  }
  function InputView(type, initValue, view) {
    InputView$Companion_getInstance();
    if (initValue === void 0)
      initValue = '';
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLInputElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLInputElement) ? tmp$ : throwCCE();
    }
    ViewForLabel.call(this, view);
    var tmp$_1;
    this.html_7idvtl$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewForLabel.prototype, 'html'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.valueProperty = property_0(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.placeholderProperty = property_0(getPropertyCallableRef('placeholder', 0, function ($receiver) {
      return $receiver.placeholder;
    }.bind(null, this), function ($receiver, value) {
      $receiver.placeholder = value;
    }.bind(null, this)));
    this.invalidProperty_37x0iy$_0 = new ClassDelegate('invalid');
    this.invalid_bm4ajv$_0 = this.invalidProperty;
    this.typeInternal_mhbykb$_0 = new AttributeDelegate('type');
    this.minInternal_fe6219$_0 = new AttributeDelegate('min');
    this.maxInternal_n8mnj3$_0 = new AttributeDelegate('max');
    this.stepInternal_nor8tl$_0 = new AttributeDelegate('step');
    this.value = initValue;
    this.type = type;
    var lastValue = {v: this.value};
    var changeListener = new InputView_init$ObjectLiteral(this, lastValue);
    this.html.addEventListener('change', changeListener);
    this.html.addEventListener('keyup', changeListener);
    this.html.addEventListener('keypress', changeListener);
  }
  Object.defineProperty(InputView.prototype, 'html', {
    get: function () {
      return this.html_7idvtl$_0;
    }
  });
  InputView.prototype.bind_vbud5z$ = function (property) {
    this.valueProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  InputView.prototype.bind_e5den9$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
  };
  InputView.prototype.bind_tz5vj6$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
    this.invalidProperty.bind_ybyx9l$(not(property.validProperty));
  };
  InputView.prototype.unbind = function () {
    this.valueProperty.unbind();
    if (this.invalidProperty.isBound) {
      this.invalidProperty.unbind();
    }
  };
  Object.defineProperty(InputView.prototype, 'value', {
    get: function () {
      return this.html.value;
    },
    set: function (value) {
      this.html.value = value;
      this.valueProperty.invalidate();
    }
  });
  Object.defineProperty(InputView.prototype, 'placeholder', {
    get: function () {
      return this.html.placeholder;
    },
    set: function (value) {
      this.html.placeholder = value;
      this.placeholderProperty.invalidate();
    }
  });
  var InputView$invalidProperty_metadata = new PropertyMetadata('invalidProperty');
  Object.defineProperty(InputView.prototype, 'invalidProperty', {
    get: function () {
      return this.invalidProperty_37x0iy$_0.getValue_g92zoq$(this, InputView$invalidProperty_metadata);
    }
  });
  var InputView$invalid_metadata = new PropertyMetadata('invalid');
  Object.defineProperty(InputView.prototype, 'invalid', {
    get: function () {
      return this.invalid_bm4ajv$_0.getValue_n5byny$(this, InputView$invalid_metadata);
    },
    set: function (invalid) {
      this.invalid_bm4ajv$_0.setValue_sq4zib$(this, InputView$invalid_metadata, invalid);
    }
  });
  var InputView$typeInternal_metadata = new PropertyMetadata('typeInternal');
  Object.defineProperty(InputView.prototype, 'typeInternal_0', {
    get: function () {
      return this.typeInternal_mhbykb$_0.getValue_g92zoq$(this, InputView$typeInternal_metadata);
    },
    set: function (typeInternal) {
      this.typeInternal_mhbykb$_0.setValue_wcp6fr$(this, InputView$typeInternal_metadata, typeInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'type', {
    get: function () {
      var tmp$;
      return (tmp$ = this.typeInternal_0) != null ? getCallableRef('find', function ($receiver, html) {
        return $receiver.find_61zpoe$(html);
      }.bind(null, InputType$Companion_getInstance()))(tmp$) : null;
    },
    set: function (value) {
      this.typeInternal_0 = value != null ? value.html : null;
    }
  });
  var InputView$minInternal_metadata = new PropertyMetadata('minInternal');
  Object.defineProperty(InputView.prototype, 'minInternal_0', {
    get: function () {
      return this.minInternal_fe6219$_0.getValue_g92zoq$(this, InputView$minInternal_metadata);
    },
    set: function (minInternal) {
      this.minInternal_fe6219$_0.setValue_wcp6fr$(this, InputView$minInternal_metadata, minInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'min', {
    get: function () {
      var tmp$;
      return (tmp$ = this.minInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.minInternal_0 = value != null ? value.toString() : null;
    }
  });
  var InputView$maxInternal_metadata = new PropertyMetadata('maxInternal');
  Object.defineProperty(InputView.prototype, 'maxInternal_0', {
    get: function () {
      return this.maxInternal_n8mnj3$_0.getValue_g92zoq$(this, InputView$maxInternal_metadata);
    },
    set: function (maxInternal) {
      this.maxInternal_n8mnj3$_0.setValue_wcp6fr$(this, InputView$maxInternal_metadata, maxInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'max', {
    get: function () {
      var tmp$;
      return (tmp$ = this.maxInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.maxInternal_0 = value != null ? value.toString() : null;
    }
  });
  var InputView$stepInternal_metadata = new PropertyMetadata('stepInternal');
  Object.defineProperty(InputView.prototype, 'stepInternal_0', {
    get: function () {
      return this.stepInternal_nor8tl$_0.getValue_g92zoq$(this, InputView$stepInternal_metadata);
    },
    set: function (stepInternal) {
      this.stepInternal_nor8tl$_0.setValue_wcp6fr$(this, InputView$stepInternal_metadata, stepInternal);
    }
  });
  Object.defineProperty(InputView.prototype, 'step', {
    get: function () {
      var tmp$;
      return (tmp$ = this.stepInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.stepInternal_0 = value != null ? value.toString() : null;
    }
  });
  function InputView$Companion() {
    InputView$Companion_instance = this;
  }
  InputView$Companion.prototype.wrap_2w6gnp$ = function (type, view) {
    return new InputView(type, view.value, view);
  };
  InputView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InputView$Companion_instance = null;
  function InputView$Companion_getInstance() {
    if (InputView$Companion_instance === null) {
      new InputView$Companion();
    }
    return InputView$Companion_instance;
  }
  function InputView_init$ObjectLiteral(this$InputView, closure$lastValue) {
    this.this$InputView = this$InputView;
    this.closure$lastValue = closure$lastValue;
  }
  InputView_init$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$, tmp$_0;
    var value = this.this$InputView.value;
    if (!equals(value, this.this$InputView.valueProperty.value) || !equals(value, this.closure$lastValue.v)) {
      this.closure$lastValue.v = value;
      this.this$InputView.valueProperty.value = value;
    }
    if ((tmp$_0 = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : null) != null) {
      this.this$InputView;
      var this$InputView = this.this$InputView;
      switch (tmp$_0.keyCode) {
        case 13:
        case 27:
          this$InputView.blur();
          break;
      }
    }
  };
  InputView_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  InputView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputView',
    interfaces: [ViewForLabel]
  };
  function InputType(name, ordinal, html) {
    Enum.call(this);
    this.html = html;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function InputType_initFields() {
    InputType_initFields = function () {
    };
    InputType$TEXT_instance = new InputType('TEXT', 0, 'text');
    InputType$NUMBER_instance = new InputType('NUMBER', 1, 'number');
    InputType$PASSWORD_instance = new InputType('PASSWORD', 2, 'password');
    InputType$SEARCH_instance = new InputType('SEARCH', 3, 'search');
    InputType$FILE_instance = new InputType('FILE', 4, 'file');
    InputType$Companion_getInstance();
  }
  var InputType$TEXT_instance;
  function InputType$TEXT_getInstance() {
    InputType_initFields();
    return InputType$TEXT_instance;
  }
  var InputType$NUMBER_instance;
  function InputType$NUMBER_getInstance() {
    InputType_initFields();
    return InputType$NUMBER_instance;
  }
  var InputType$PASSWORD_instance;
  function InputType$PASSWORD_getInstance() {
    InputType_initFields();
    return InputType$PASSWORD_instance;
  }
  var InputType$SEARCH_instance;
  function InputType$SEARCH_getInstance() {
    InputType_initFields();
    return InputType$SEARCH_instance;
  }
  var InputType$FILE_instance;
  function InputType$FILE_getInstance() {
    InputType_initFields();
    return InputType$FILE_instance;
  }
  function InputType$Companion() {
    InputType$Companion_instance = this;
  }
  InputType$Companion.prototype.find_61zpoe$ = function (html) {
    var $receiver = InputType$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.html, html)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  InputType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var InputType$Companion_instance = null;
  function InputType$Companion_getInstance() {
    InputType_initFields();
    if (InputType$Companion_instance === null) {
      new InputType$Companion();
    }
    return InputType$Companion_instance;
  }
  InputType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputType',
    interfaces: [Enum]
  };
  function InputType$values() {
    return [InputType$TEXT_getInstance(), InputType$NUMBER_getInstance(), InputType$PASSWORD_getInstance(), InputType$SEARCH_getInstance(), InputType$FILE_getInstance()];
  }
  InputType.values = InputType$values;
  function InputType$valueOf(name) {
    switch (name) {
      case 'TEXT':
        return InputType$TEXT_getInstance();
      case 'NUMBER':
        return InputType$NUMBER_getInstance();
      case 'PASSWORD':
        return InputType$PASSWORD_getInstance();
      case 'SEARCH':
        return InputType$SEARCH_getInstance();
      case 'FILE':
        return InputType$FILE_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.InputType.' + name);
    }
  }
  InputType.valueOf_61zpoe$ = InputType$valueOf;
  function inputView$lambda($receiver) {
    return Unit;
  }
  function inputView($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = inputView$lambda;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_0($receiver) {
    return Unit;
  }
  function inputView_0($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_0;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_1($receiver) {
    return Unit;
  }
  function inputView_1($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_1;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_e5den9$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_2($receiver) {
    return Unit;
  }
  function inputView_2($receiver, text, init) {
    if (init === void 0)
      init = inputView$lambda_2;
    var $receiver_0 = new InputView(InputType$TEXT_getInstance(), text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_tz5vj6$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_3($receiver) {
    return Unit;
  }
  function inputView_3($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = inputView$lambda_3;
    var $receiver_0 = new InputView(type, text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_4($receiver) {
    return Unit;
  }
  function inputView_4($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_4;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_5($receiver) {
    return Unit;
  }
  function inputView_5($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_5;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_e5den9$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function inputView$lambda_6($receiver) {
    return Unit;
  }
  function inputView_6($receiver, type, text, init) {
    if (type === void 0)
      type = InputType$TEXT_getInstance();
    if (init === void 0)
      init = inputView$lambda_6;
    var $receiver_0 = new InputView(type, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_tz5vj6$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Label(inputElement, value) {
    if (value === void 0)
      value = '';
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLLabelElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLLabelElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_rwv64$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLLabelElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.text = value;
    inputElement.setLabel_f5v1jf$(this);
  }
  Object.defineProperty(Label.prototype, 'html', {
    get: function () {
      return this.html_rwv64$_0;
    }
  });
  Label.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  Label.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(Label.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: [View]
  };
  function label$lambda($receiver) {
    return Unit;
  }
  function label($receiver, inputElement, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = label$lambda;
    var $receiver_0 = new Label(inputElement, text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function label$lambda_0($receiver) {
    return Unit;
  }
  function label_0($receiver, inputElement, text, init) {
    if (init === void 0)
      init = label$lambda_0;
    var $receiver_0 = new Label(inputElement, text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function Link(view) {
    Link$Companion_getInstance();
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLAnchorElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLAnchorElement) ? tmp$ : throwCCE();
    }
    View.call(this, view);
    var tmp$_1;
    this.html_v6f6pw$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLAnchorElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(Link.prototype, 'html', {
    get: function () {
      return this.html_v6f6pw$_0;
    }
  });
  Object.defineProperty(Link.prototype, 'text', {
    get: function () {
      return this.html.textContent;
    },
    set: function (value) {
      this.html.textContent = value;
    }
  });
  Object.defineProperty(Link.prototype, 'target', {
    get: function () {
      return this.html.href;
    },
    set: function (value) {
      this.html.href = value;
    }
  });
  function Link$Companion() {
    Link$Companion_instance = this;
  }
  Link$Companion.prototype.wrap_mvlgqn$ = function (view) {
    return new Link(view);
  };
  Link$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Link$Companion_instance = null;
  function Link$Companion_getInstance() {
    if (Link$Companion_instance === null) {
      new Link$Companion();
    }
    return Link$Companion_instance;
  }
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [View]
  };
  function Link_init(target, view, $this) {
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLAnchorElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLAnchorElement) ? tmp$ : throwCCE();
    }
    $this = $this || Object.create(Link.prototype);
    Link.call($this, view);
    $this.target = target;
    return $this;
  }
  function link$lambda($receiver) {
    return Unit;
  }
  function link($receiver, target, text, init) {
    if (text === void 0)
      text = null;
    if (init === void 0)
      init = link$lambda;
    var view = Link_init(target);
    if (text != null) {
      view.text = text;
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function ListView(view) {
    ListView$Companion_getInstance();
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLElement) ? tmp$ : throwCCE();
    }
    ViewCollection.call(this, view);
    var tmp$_1;
    this.html_2x6419$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLDivElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(ListView.prototype, 'html', {
    get: function () {
      return this.html_2x6419$_0;
    }
  });
  function ListView$Companion() {
    ListView$Companion_instance = this;
  }
  ListView$Companion.prototype.wrap_vmqmx4$ = function (view) {
    return new ListView(view);
  };
  ListView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListView$Companion_instance = null;
  function ListView$Companion_getInstance() {
    if (ListView$Companion_instance === null) {
      new ListView$Companion();
    }
    return ListView$Companion_instance;
  }
  ListView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListView',
    interfaces: [ViewCollection]
  };
  function listView$lambda($receiver) {
    return Unit;
  }
  function listView($receiver, classes, init) {
    if (init === void 0)
      init = listView$lambda;
    var tmp$;
    var view = new ListView();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function MaterialIcon(name, ordinal, ligature) {
    Enum.call(this);
    this.ligature_6ddpre$_0 = ligature;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MaterialIcon_initFields() {
    MaterialIcon_initFields = function () {
    };
    MaterialIcon$ROTATION_3D_instance = new MaterialIcon('ROTATION_3D', 0, '3d_rotation');
    MaterialIcon$AC_UNIT_instance = new MaterialIcon('AC_UNIT', 1, 'ac_unit');
    MaterialIcon$ACCESS_ALARM_instance = new MaterialIcon('ACCESS_ALARM', 2, 'access_alarm ');
    MaterialIcon$ACCESS_ALARMS_instance = new MaterialIcon('ACCESS_ALARMS', 3, 'access_alarms');
    MaterialIcon$ACCESS_TIME_instance = new MaterialIcon('ACCESS_TIME', 4, 'access_time');
    MaterialIcon$ACCESSIBILITY_instance = new MaterialIcon('ACCESSIBILITY', 5, 'accessibility');
    MaterialIcon$ACCESSIBLE_instance = new MaterialIcon('ACCESSIBLE', 6, 'accessible');
    MaterialIcon$ACCOUNT_BALANCE_instance = new MaterialIcon('ACCOUNT_BALANCE', 7, 'account_balance');
    MaterialIcon$ACCOUNT_BALANCE_WALLET_instance = new MaterialIcon('ACCOUNT_BALANCE_WALLET', 8, 'account_balance_wallet');
    MaterialIcon$ACCOUNT_BOX_instance = new MaterialIcon('ACCOUNT_BOX', 9, 'account_box');
    MaterialIcon$ACCOUNT_CIRCLE_instance = new MaterialIcon('ACCOUNT_CIRCLE', 10, 'account_circle');
    MaterialIcon$ADB_instance = new MaterialIcon('ADB', 11, 'adb');
    MaterialIcon$ADD_instance = new MaterialIcon('ADD', 12, 'add');
    MaterialIcon$ADD_A_PHOTO_instance = new MaterialIcon('ADD_A_PHOTO', 13, 'add_a_photo');
    MaterialIcon$ADD_ALARM_instance = new MaterialIcon('ADD_ALARM', 14, 'add_alarm');
    MaterialIcon$ADD_ALERT_instance = new MaterialIcon('ADD_ALERT', 15, 'add_alert');
    MaterialIcon$ADD_BOX_instance = new MaterialIcon('ADD_BOX', 16, 'add_box');
    MaterialIcon$ADD_CIRCLE_instance = new MaterialIcon('ADD_CIRCLE', 17, 'add_circle');
    MaterialIcon$ADD_CIRCLE_OUTLINE_instance = new MaterialIcon('ADD_CIRCLE_OUTLINE', 18, 'add_circle_outline');
    MaterialIcon$ADD_LOCATION_instance = new MaterialIcon('ADD_LOCATION', 19, 'add_location ');
    MaterialIcon$ADD_SHOPPING_CART_instance = new MaterialIcon('ADD_SHOPPING_CART', 20, 'add_shopping_cart');
    MaterialIcon$ADD_TO_PHOTOS_instance = new MaterialIcon('ADD_TO_PHOTOS', 21, 'add_to_photos');
    MaterialIcon$ADD_TO_QUEUE_instance = new MaterialIcon('ADD_TO_QUEUE', 22, 'add_to_queue ');
    MaterialIcon$ADJUST_instance = new MaterialIcon('ADJUST', 23, 'adjust');
    MaterialIcon$AIRLINE_SEAT_FLAT_instance = new MaterialIcon('AIRLINE_SEAT_FLAT', 24, 'airline_seat_flat');
    MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance = new MaterialIcon('AIRLINE_SEAT_FLAT_ANGLED', 25, 'airline_seat_flat_angled');
    MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance = new MaterialIcon('AIRLINE_SEAT_INDIVIDUAL_SUITE', 26, 'airline_seat_individual_suite');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_EXTRA', 27, 'airline_seat_legroom_extra');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_NORMAL', 28, 'airline_seat_legroom_normal');
    MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance = new MaterialIcon('AIRLINE_SEAT_LEGROOM_REDUCED', 29, 'airline_seat_legroom_reduced');
    MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance = new MaterialIcon('AIRLINE_SEAT_RECLINE_EXTRA', 30, 'airline_seat_recline_extra');
    MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance = new MaterialIcon('AIRLINE_SEAT_RECLINE_NORMAL', 31, 'airline_seat_recline_normal');
    MaterialIcon$AIRPLANEMODE_ACTIVE_instance = new MaterialIcon('AIRPLANEMODE_ACTIVE', 32, 'airplanemode_active');
    MaterialIcon$AIRPLANEMODE_INACTIVE_instance = new MaterialIcon('AIRPLANEMODE_INACTIVE', 33, 'airplanemode_inactive');
    MaterialIcon$AIRPLAY_instance = new MaterialIcon('AIRPLAY', 34, 'airplay');
    MaterialIcon$AIRPORT_SHUTTLE_instance = new MaterialIcon('AIRPORT_SHUTTLE', 35, 'airport_shuttle');
    MaterialIcon$ALARM_instance = new MaterialIcon('ALARM', 36, 'alarm');
    MaterialIcon$ALARM_ADD_instance = new MaterialIcon('ALARM_ADD', 37, 'alarm_add');
    MaterialIcon$ALARM_OFF_instance = new MaterialIcon('ALARM_OFF', 38, 'alarm_off');
    MaterialIcon$ALARM_ON_instance = new MaterialIcon('ALARM_ON', 39, 'alarm_on');
    MaterialIcon$ALBUM_instance = new MaterialIcon('ALBUM', 40, 'album');
    MaterialIcon$ALL_INCLUSIVE_instance = new MaterialIcon('ALL_INCLUSIVE', 41, 'all_inclusive');
    MaterialIcon$ALL_OUT_instance = new MaterialIcon('ALL_OUT', 42, 'all_out');
    MaterialIcon$ANDROID_instance = new MaterialIcon('ANDROID', 43, 'android');
    MaterialIcon$ANNOUNCEMENT_instance = new MaterialIcon('ANNOUNCEMENT', 44, 'announcement ');
    MaterialIcon$APPS_instance = new MaterialIcon('APPS', 45, 'apps');
    MaterialIcon$ARCHIVE_instance = new MaterialIcon('ARCHIVE', 46, 'archive');
    MaterialIcon$ARROW_BACK_instance = new MaterialIcon('ARROW_BACK', 47, 'arrow_back');
    MaterialIcon$ARROW_DOWNWARD_instance = new MaterialIcon('ARROW_DOWNWARD', 48, 'arrow_downward');
    MaterialIcon$ARROW_DROP_DOWN_instance = new MaterialIcon('ARROW_DROP_DOWN', 49, 'arrow_drop_down');
    MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance = new MaterialIcon('ARROW_DROP_DOWN_CIRCLE', 50, 'arrow_drop_down_circle');
    MaterialIcon$ARROW_DROP_UP_instance = new MaterialIcon('ARROW_DROP_UP', 51, 'arrow_drop_up');
    MaterialIcon$ARROW_FORWARD_instance = new MaterialIcon('ARROW_FORWARD', 52, 'arrow_forward');
    MaterialIcon$ARROW_UPWARD_instance = new MaterialIcon('ARROW_UPWARD', 53, 'arrow_upward ');
    MaterialIcon$ART_TRACK_instance = new MaterialIcon('ART_TRACK', 54, 'art_track');
    MaterialIcon$ASPECT_RATIO_instance = new MaterialIcon('ASPECT_RATIO', 55, 'aspect_ratio ');
    MaterialIcon$ASSESSMENT_instance = new MaterialIcon('ASSESSMENT', 56, 'assessment');
    MaterialIcon$ASSIGNMENT_instance = new MaterialIcon('ASSIGNMENT', 57, 'assignment');
    MaterialIcon$ASSIGNMENT_IND_instance = new MaterialIcon('ASSIGNMENT_IND', 58, 'assignment_ind');
    MaterialIcon$ASSIGNMENT_LATE_instance = new MaterialIcon('ASSIGNMENT_LATE', 59, 'assignment_late');
    MaterialIcon$ASSIGNMENT_RETURN_instance = new MaterialIcon('ASSIGNMENT_RETURN', 60, 'assignment_return');
    MaterialIcon$ASSIGNMENT_RETURNED_instance = new MaterialIcon('ASSIGNMENT_RETURNED', 61, 'assignment_returned');
    MaterialIcon$ASSIGNMENT_TURNED_IN_instance = new MaterialIcon('ASSIGNMENT_TURNED_IN', 62, 'assignment_turned_in');
    MaterialIcon$ASSISTANT_instance = new MaterialIcon('ASSISTANT', 63, 'assistant');
    MaterialIcon$ASSISTANT_PHOTO_instance = new MaterialIcon('ASSISTANT_PHOTO', 64, 'assistant_photo');
    MaterialIcon$ATTACH_FILE_instance = new MaterialIcon('ATTACH_FILE', 65, 'attach_file');
    MaterialIcon$ATTACH_MONEY_instance = new MaterialIcon('ATTACH_MONEY', 66, 'attach_money ');
    MaterialIcon$ATTACHMENT_instance = new MaterialIcon('ATTACHMENT', 67, 'attachment');
    MaterialIcon$AUDIOTRACK_instance = new MaterialIcon('AUDIOTRACK', 68, 'audiotrack');
    MaterialIcon$AUTORENEW_instance = new MaterialIcon('AUTORENEW', 69, 'autorenew');
    MaterialIcon$AV_TIMER_instance = new MaterialIcon('AV_TIMER', 70, 'av_timer');
    MaterialIcon$BACKSPACE_instance = new MaterialIcon('BACKSPACE', 71, 'backspace');
    MaterialIcon$BACKUP_instance = new MaterialIcon('BACKUP', 72, 'backup');
    MaterialIcon$BATTERY_ALERT_instance = new MaterialIcon('BATTERY_ALERT', 73, 'battery_alert');
    MaterialIcon$BATTERY_CHARGING_FULL_instance = new MaterialIcon('BATTERY_CHARGING_FULL', 74, 'battery_charging_full');
    MaterialIcon$BATTERY_FULL_instance = new MaterialIcon('BATTERY_FULL', 75, 'battery_full ');
    MaterialIcon$BATTERY_STD_instance = new MaterialIcon('BATTERY_STD', 76, 'battery_std');
    MaterialIcon$BATTERY_UNKNOWN_instance = new MaterialIcon('BATTERY_UNKNOWN', 77, 'battery_unknown');
    MaterialIcon$BEACH_ACCESS_instance = new MaterialIcon('BEACH_ACCESS', 78, 'beach_access ');
    MaterialIcon$BEENHERE_instance = new MaterialIcon('BEENHERE', 79, 'beenhere');
    MaterialIcon$BLOCK_instance = new MaterialIcon('BLOCK', 80, 'block');
    MaterialIcon$BLUETOOTH_instance = new MaterialIcon('BLUETOOTH', 81, 'bluetooth');
    MaterialIcon$BLUETOOTH_AUDIO_instance = new MaterialIcon('BLUETOOTH_AUDIO', 82, 'bluetooth_audio');
    MaterialIcon$BLUETOOTH_CONNECTED_instance = new MaterialIcon('BLUETOOTH_CONNECTED', 83, 'bluetooth_connected');
    MaterialIcon$BLUETOOTH_DISABLED_instance = new MaterialIcon('BLUETOOTH_DISABLED', 84, 'bluetooth_disabled');
    MaterialIcon$BLUETOOTH_SEARCHING_instance = new MaterialIcon('BLUETOOTH_SEARCHING', 85, 'bluetooth_searching');
    MaterialIcon$BLUR_CIRCULAR_instance = new MaterialIcon('BLUR_CIRCULAR', 86, 'blur_circular');
    MaterialIcon$BLUR_LINEAR_instance = new MaterialIcon('BLUR_LINEAR', 87, 'blur_linear');
    MaterialIcon$BLUR_OFF_instance = new MaterialIcon('BLUR_OFF', 88, 'blur_off');
    MaterialIcon$BLUR_ON_instance = new MaterialIcon('BLUR_ON', 89, 'blur_on');
    MaterialIcon$BOOK_instance = new MaterialIcon('BOOK', 90, 'book');
    MaterialIcon$BOOKMARK_instance = new MaterialIcon('BOOKMARK', 91, 'bookmark');
    MaterialIcon$BOOKMARK_BORDER_instance = new MaterialIcon('BOOKMARK_BORDER', 92, 'bookmark_border');
    MaterialIcon$BORDER_ALL_instance = new MaterialIcon('BORDER_ALL', 93, 'border_all');
    MaterialIcon$BORDER_BOTTOM_instance = new MaterialIcon('BORDER_BOTTOM', 94, 'border_bottom');
    MaterialIcon$BORDER_CLEAR_instance = new MaterialIcon('BORDER_CLEAR', 95, 'border_clear ');
    MaterialIcon$BORDER_COLOR_instance = new MaterialIcon('BORDER_COLOR', 96, 'border_color ');
    MaterialIcon$BORDER_HORIZONTAL_instance = new MaterialIcon('BORDER_HORIZONTAL', 97, 'border_horizontal');
    MaterialIcon$BORDER_INNER_instance = new MaterialIcon('BORDER_INNER', 98, 'border_inner ');
    MaterialIcon$BORDER_LEFT_instance = new MaterialIcon('BORDER_LEFT', 99, 'border_left');
    MaterialIcon$BORDER_OUTER_instance = new MaterialIcon('BORDER_OUTER', 100, 'border_outer ');
    MaterialIcon$BORDER_RIGHT_instance = new MaterialIcon('BORDER_RIGHT', 101, 'border_right ');
    MaterialIcon$BORDER_STYLE_instance = new MaterialIcon('BORDER_STYLE', 102, 'border_style ');
    MaterialIcon$BORDER_TOP_instance = new MaterialIcon('BORDER_TOP', 103, 'border_top');
    MaterialIcon$BORDER_VERTICAL_instance = new MaterialIcon('BORDER_VERTICAL', 104, 'border_vertical');
    MaterialIcon$BRANDING_WATERMARK_instance = new MaterialIcon('BRANDING_WATERMARK', 105, 'branding_watermark');
    MaterialIcon$BRIGHTNESS_1_instance = new MaterialIcon('BRIGHTNESS_1', 106, 'brightness_1 ');
    MaterialIcon$BRIGHTNESS_2_instance = new MaterialIcon('BRIGHTNESS_2', 107, 'brightness_2 ');
    MaterialIcon$BRIGHTNESS_3_instance = new MaterialIcon('BRIGHTNESS_3', 108, 'brightness_3 ');
    MaterialIcon$BRIGHTNESS_4_instance = new MaterialIcon('BRIGHTNESS_4', 109, 'brightness_4 ');
    MaterialIcon$BRIGHTNESS_5_instance = new MaterialIcon('BRIGHTNESS_5', 110, 'brightness_5 ');
    MaterialIcon$BRIGHTNESS_6_instance = new MaterialIcon('BRIGHTNESS_6', 111, 'brightness_6 ');
    MaterialIcon$BRIGHTNESS_7_instance = new MaterialIcon('BRIGHTNESS_7', 112, 'brightness_7 ');
    MaterialIcon$BRIGHTNESS_AUTO_instance = new MaterialIcon('BRIGHTNESS_AUTO', 113, 'brightness_auto');
    MaterialIcon$BRIGHTNESS_HIGH_instance = new MaterialIcon('BRIGHTNESS_HIGH', 114, 'brightness_high');
    MaterialIcon$BRIGHTNESS_LOW_instance = new MaterialIcon('BRIGHTNESS_LOW', 115, 'brightness_low');
    MaterialIcon$BRIGHTNESS_MEDIUM_instance = new MaterialIcon('BRIGHTNESS_MEDIUM', 116, 'brightness_medium');
    MaterialIcon$BROKEN_IMAGE_instance = new MaterialIcon('BROKEN_IMAGE', 117, 'broken_image ');
    MaterialIcon$BRUSH_instance = new MaterialIcon('BRUSH', 118, 'brush');
    MaterialIcon$BUBBLE_CHART_instance = new MaterialIcon('BUBBLE_CHART', 119, 'bubble_chart ');
    MaterialIcon$BUG_REPORT_instance = new MaterialIcon('BUG_REPORT', 120, 'bug_report');
    MaterialIcon$BUILD_instance = new MaterialIcon('BUILD', 121, 'build');
    MaterialIcon$BURST_MODE_instance = new MaterialIcon('BURST_MODE', 122, 'burst_mode');
    MaterialIcon$BUSINESS_instance = new MaterialIcon('BUSINESS', 123, 'business');
    MaterialIcon$BUSINESS_CENTER_instance = new MaterialIcon('BUSINESS_CENTER', 124, 'business_center');
    MaterialIcon$CACHED_instance = new MaterialIcon('CACHED', 125, 'cached');
    MaterialIcon$CAKE_instance = new MaterialIcon('CAKE', 126, 'cake');
    MaterialIcon$CALL_instance = new MaterialIcon('CALL', 127, 'call');
    MaterialIcon$CALL_END_instance = new MaterialIcon('CALL_END', 128, 'call_end');
    MaterialIcon$CALL_MADE_instance = new MaterialIcon('CALL_MADE', 129, 'call_made');
    MaterialIcon$CALL_MERGE_instance = new MaterialIcon('CALL_MERGE', 130, 'call_merge');
    MaterialIcon$CALL_MISSED_instance = new MaterialIcon('CALL_MISSED', 131, 'call_missed');
    MaterialIcon$CALL_MISSED_OUTGOING_instance = new MaterialIcon('CALL_MISSED_OUTGOING', 132, 'call_missed_outgoing');
    MaterialIcon$CALL_RECEIVED_instance = new MaterialIcon('CALL_RECEIVED', 133, 'call_received');
    MaterialIcon$CALL_SPLIT_instance = new MaterialIcon('CALL_SPLIT', 134, 'call_split');
    MaterialIcon$CALL_TO_ACTION_instance = new MaterialIcon('CALL_TO_ACTION', 135, 'call_to_action');
    MaterialIcon$CAMERA_instance = new MaterialIcon('CAMERA', 136, 'camera');
    MaterialIcon$CAMERA_ALT_instance = new MaterialIcon('CAMERA_ALT', 137, 'camera_alt');
    MaterialIcon$CAMERA_ENHANCE_instance = new MaterialIcon('CAMERA_ENHANCE', 138, 'camera_enhance');
    MaterialIcon$CAMERA_FRONT_instance = new MaterialIcon('CAMERA_FRONT', 139, 'camera_front ');
    MaterialIcon$CAMERA_REAR_instance = new MaterialIcon('CAMERA_REAR', 140, 'camera_rear');
    MaterialIcon$CAMERA_ROLL_instance = new MaterialIcon('CAMERA_ROLL', 141, 'camera_roll');
    MaterialIcon$CANCEL_instance = new MaterialIcon('CANCEL', 142, 'cancel');
    MaterialIcon$CARD_GIFTCARD_instance = new MaterialIcon('CARD_GIFTCARD', 143, 'card_giftcard');
    MaterialIcon$CARD_MEMBERSHIP_instance = new MaterialIcon('CARD_MEMBERSHIP', 144, 'card_membership');
    MaterialIcon$CARD_TRAVEL_instance = new MaterialIcon('CARD_TRAVEL', 145, 'card_travel');
    MaterialIcon$CASINO_instance = new MaterialIcon('CASINO', 146, 'casino');
    MaterialIcon$CAST_instance = new MaterialIcon('CAST', 147, 'cast');
    MaterialIcon$CAST_CONNECTED_instance = new MaterialIcon('CAST_CONNECTED', 148, 'cast_connected');
    MaterialIcon$CENTER_FOCUS_STRONG_instance = new MaterialIcon('CENTER_FOCUS_STRONG', 149, 'center_focus_strong');
    MaterialIcon$CENTER_FOCUS_WEAK_instance = new MaterialIcon('CENTER_FOCUS_WEAK', 150, 'center_focus_weak');
    MaterialIcon$CHANGE_HISTORY_instance = new MaterialIcon('CHANGE_HISTORY', 151, 'change_history');
    MaterialIcon$CHAT_instance = new MaterialIcon('CHAT', 152, 'chat');
    MaterialIcon$CHAT_BUBBLE_instance = new MaterialIcon('CHAT_BUBBLE', 153, 'chat_bubble');
    MaterialIcon$CHAT_BUBBLE_OUTLINE_instance = new MaterialIcon('CHAT_BUBBLE_OUTLINE', 154, 'chat_bubble_outline');
    MaterialIcon$CHECK_instance = new MaterialIcon('CHECK', 155, 'checkUpdates');
    MaterialIcon$CHECK_BOX_instance = new MaterialIcon('CHECK_BOX', 156, 'check_box');
    MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance = new MaterialIcon('CHECK_BOX_OUTLINE_BLANK', 157, 'check_box_outline_blank');
    MaterialIcon$CHECK_CIRCLE_instance = new MaterialIcon('CHECK_CIRCLE', 158, 'check_circle ');
    MaterialIcon$CHEVRON_LEFT_instance = new MaterialIcon('CHEVRON_LEFT', 159, 'chevron_left ');
    MaterialIcon$CHEVRON_RIGHT_instance = new MaterialIcon('CHEVRON_RIGHT', 160, 'chevron_right');
    MaterialIcon$CHILD_CARE_instance = new MaterialIcon('CHILD_CARE', 161, 'child_care');
    MaterialIcon$CHILD_FRIENDLY_instance = new MaterialIcon('CHILD_FRIENDLY', 162, 'child_friendly');
    MaterialIcon$CHROME_RR_MODE_instance = new MaterialIcon('CHROME_RR_MODE', 163, 'chrome_rr_mode');
    MaterialIcon$CLASS_instance = new MaterialIcon('CLASS', 164, 'class');
    MaterialIcon$CLEAR_instance = new MaterialIcon('CLEAR', 165, 'clear');
    MaterialIcon$CLEAR_ALL_instance = new MaterialIcon('CLEAR_ALL', 166, 'clear_all');
    MaterialIcon$CLOSE_instance = new MaterialIcon('CLOSE', 167, 'close');
    MaterialIcon$CLOSED_CAPTION_instance = new MaterialIcon('CLOSED_CAPTION', 168, 'closed_caption');
    MaterialIcon$CLOUD_instance = new MaterialIcon('CLOUD', 169, 'cloud');
    MaterialIcon$CLOUD_CIRCLE_instance = new MaterialIcon('CLOUD_CIRCLE', 170, 'cloud_circle ');
    MaterialIcon$CLOUD_DONE_instance = new MaterialIcon('CLOUD_DONE', 171, 'cloud_done');
    MaterialIcon$CLOUD_DOWNLOAD_instance = new MaterialIcon('CLOUD_DOWNLOAD', 172, 'cloud_download');
    MaterialIcon$CLOUD_OFF_instance = new MaterialIcon('CLOUD_OFF', 173, 'cloud_off');
    MaterialIcon$CLOUD_QUEUE_instance = new MaterialIcon('CLOUD_QUEUE', 174, 'cloud_queue');
    MaterialIcon$CLOUD_UPLOAD_instance = new MaterialIcon('CLOUD_UPLOAD', 175, 'cloud_upload ');
    MaterialIcon$CODE_instance = new MaterialIcon('CODE', 176, 'code');
    MaterialIcon$COLLECTIONS_instance = new MaterialIcon('COLLECTIONS', 177, 'collections');
    MaterialIcon$COLLECTIONS_BOOKMARK_instance = new MaterialIcon('COLLECTIONS_BOOKMARK', 178, 'collections_bookmark');
    MaterialIcon$COLOR_LENS_instance = new MaterialIcon('COLOR_LENS', 179, 'color_lens');
    MaterialIcon$COLORIZE_instance = new MaterialIcon('COLORIZE', 180, 'colorize');
    MaterialIcon$COMMENT_instance = new MaterialIcon('COMMENT', 181, 'comment');
    MaterialIcon$COMPARE_instance = new MaterialIcon('COMPARE', 182, 'compare');
    MaterialIcon$COMPARE_ARROWS_instance = new MaterialIcon('COMPARE_ARROWS', 183, 'compare_arrows');
    MaterialIcon$COMPUTER_instance = new MaterialIcon('COMPUTER', 184, 'computer');
    MaterialIcon$CONFIRMATION_NUMBER_instance = new MaterialIcon('CONFIRMATION_NUMBER', 185, 'confirmation_number');
    MaterialIcon$CONTACT_MAIL_instance = new MaterialIcon('CONTACT_MAIL', 186, 'contact_mail ');
    MaterialIcon$CONTACT_PHONE_instance = new MaterialIcon('CONTACT_PHONE', 187, 'contact_phone');
    MaterialIcon$CONTACTS_instance = new MaterialIcon('CONTACTS', 188, 'contacts');
    MaterialIcon$CONTENT_COPY_instance = new MaterialIcon('CONTENT_COPY', 189, 'content_copy ');
    MaterialIcon$CONTENT_CUT_instance = new MaterialIcon('CONTENT_CUT', 190, 'content_cut');
    MaterialIcon$CONTENT_PASTE_instance = new MaterialIcon('CONTENT_PASTE', 191, 'content_paste');
    MaterialIcon$CONTROL_POINT_instance = new MaterialIcon('CONTROL_POINT', 192, 'control_point');
    MaterialIcon$CONTROL_POINT_DUPLICATE_instance = new MaterialIcon('CONTROL_POINT_DUPLICATE', 193, 'control_point_duplicate');
    MaterialIcon$COPYRIGHT_instance = new MaterialIcon('COPYRIGHT', 194, 'copyright');
    MaterialIcon$CREATE_instance = new MaterialIcon('CREATE', 195, 'onCreate');
    MaterialIcon$CREATE_NEW_FOLDER_instance = new MaterialIcon('CREATE_NEW_FOLDER', 196, 'create_new_folder');
    MaterialIcon$CREDIT_CARD_instance = new MaterialIcon('CREDIT_CARD', 197, 'credit_card');
    MaterialIcon$CROP_instance = new MaterialIcon('CROP', 198, 'crop');
    MaterialIcon$CROP_16_9_instance = new MaterialIcon('CROP_16_9', 199, 'crop_16_9');
    MaterialIcon$CROP_3_2_instance = new MaterialIcon('CROP_3_2', 200, 'crop_3_2');
    MaterialIcon$CROP_5_4_instance = new MaterialIcon('CROP_5_4', 201, 'crop_5_4');
    MaterialIcon$CROP_7_5_instance = new MaterialIcon('CROP_7_5', 202, 'crop_7_5');
    MaterialIcon$CROP_DIN_instance = new MaterialIcon('CROP_DIN', 203, 'crop_din');
    MaterialIcon$CROP_FREE_instance = new MaterialIcon('CROP_FREE', 204, 'crop_free');
    MaterialIcon$CROP_LANDSCAPE_instance = new MaterialIcon('CROP_LANDSCAPE', 205, 'crop_landscape');
    MaterialIcon$CROP_ORIGINAL_instance = new MaterialIcon('CROP_ORIGINAL', 206, 'crop_original');
    MaterialIcon$CROP_PORTRAIT_instance = new MaterialIcon('CROP_PORTRAIT', 207, 'crop_portrait');
    MaterialIcon$CROP_ROTATE_instance = new MaterialIcon('CROP_ROTATE', 208, 'crop_rotate');
    MaterialIcon$CROP_SQUARE_instance = new MaterialIcon('CROP_SQUARE', 209, 'crop_square');
    MaterialIcon$DASHBOARD_instance = new MaterialIcon('DASHBOARD', 210, 'dashboard');
    MaterialIcon$DATA_USAGE_instance = new MaterialIcon('DATA_USAGE', 211, 'data_usage');
    MaterialIcon$DATE_RANGE_instance = new MaterialIcon('DATE_RANGE', 212, 'date_range');
    MaterialIcon$DEHAZE_instance = new MaterialIcon('DEHAZE', 213, 'dehaze');
    MaterialIcon$DELETE_instance = new MaterialIcon('DELETE', 214, 'delete');
    MaterialIcon$DELETE_FOREVER_instance = new MaterialIcon('DELETE_FOREVER', 215, 'delete_forever');
    MaterialIcon$DELETE_SWEEP_instance = new MaterialIcon('DELETE_SWEEP', 216, 'delete_sweep ');
    MaterialIcon$DESCRIPTION_instance = new MaterialIcon('DESCRIPTION', 217, 'description');
    MaterialIcon$DESKTOP_MAC_instance = new MaterialIcon('DESKTOP_MAC', 218, 'desktop_mac');
    MaterialIcon$DESKTOP_WINDOWS_instance = new MaterialIcon('DESKTOP_WINDOWS', 219, 'desktop_windows');
    MaterialIcon$DETAILS_instance = new MaterialIcon('DETAILS', 220, 'details');
    MaterialIcon$DEVELOPER_BOARD_instance = new MaterialIcon('DEVELOPER_BOARD', 221, 'developer_board');
    MaterialIcon$DEVELOPER_MODE_instance = new MaterialIcon('DEVELOPER_MODE', 222, 'developer_mode');
    MaterialIcon$DEVICE_HUB_instance = new MaterialIcon('DEVICE_HUB', 223, 'device_hub');
    MaterialIcon$DEVICES_instance = new MaterialIcon('DEVICES', 224, 'devices');
    MaterialIcon$DEVICES_OTHER_instance = new MaterialIcon('DEVICES_OTHER', 225, 'devices_other');
    MaterialIcon$DIALER_SIP_instance = new MaterialIcon('DIALER_SIP', 226, 'dialer_sip');
    MaterialIcon$DIALPAD_instance = new MaterialIcon('DIALPAD', 227, 'dialpad');
    MaterialIcon$DIRECTIONS_instance = new MaterialIcon('DIRECTIONS', 228, 'directions');
    MaterialIcon$DIRECTIONS_BIKE_instance = new MaterialIcon('DIRECTIONS_BIKE', 229, 'directions_bike');
    MaterialIcon$DIRECTIONS_BOAT_instance = new MaterialIcon('DIRECTIONS_BOAT', 230, 'directions_boat');
    MaterialIcon$DIRECTIONS_BUS_instance = new MaterialIcon('DIRECTIONS_BUS', 231, 'directions_bus');
    MaterialIcon$DIRECTIONS_CAR_instance = new MaterialIcon('DIRECTIONS_CAR', 232, 'directions_car');
    MaterialIcon$DIRECTIONS_RAILWAY_instance = new MaterialIcon('DIRECTIONS_RAILWAY', 233, 'directions_railway');
    MaterialIcon$DIRECTIONS_RUN_instance = new MaterialIcon('DIRECTIONS_RUN', 234, 'directions_run');
    MaterialIcon$DIRECTIONS_SUBWAY_instance = new MaterialIcon('DIRECTIONS_SUBWAY', 235, 'directions_subway');
    MaterialIcon$DIRECTIONS_TRANSIT_instance = new MaterialIcon('DIRECTIONS_TRANSIT', 236, 'directions_transit');
    MaterialIcon$DIRECTIONS_WALK_instance = new MaterialIcon('DIRECTIONS_WALK', 237, 'directions_walk');
    MaterialIcon$DISC_FULL_instance = new MaterialIcon('DISC_FULL', 238, 'disc_full');
    MaterialIcon$DNS_instance = new MaterialIcon('DNS', 239, 'dns');
    MaterialIcon$DO_NOT_DISTURB_instance = new MaterialIcon('DO_NOT_DISTURB', 240, 'do_not_disturb');
    MaterialIcon$DO_NOT_DISTURB_ALT_instance = new MaterialIcon('DO_NOT_DISTURB_ALT', 241, 'do_not_disturb_alt');
    MaterialIcon$DO_NOT_DISTURB_OFF_instance = new MaterialIcon('DO_NOT_DISTURB_OFF', 242, 'do_not_disturb_off');
    MaterialIcon$DO_NOT_DISTURB_ON_instance = new MaterialIcon('DO_NOT_DISTURB_ON', 243, 'do_not_disturb_on');
    MaterialIcon$DOCK_instance = new MaterialIcon('DOCK', 244, 'dock');
    MaterialIcon$DOMAIN_instance = new MaterialIcon('DOMAIN', 245, 'domain');
    MaterialIcon$DONE_instance = new MaterialIcon('DONE', 246, 'done');
    MaterialIcon$DONE_ALL_instance = new MaterialIcon('DONE_ALL', 247, 'done_all');
    MaterialIcon$DONUT_LARGE_instance = new MaterialIcon('DONUT_LARGE', 248, 'donut_large');
    MaterialIcon$DONUT_SMALL_instance = new MaterialIcon('DONUT_SMALL', 249, 'donut_small');
    MaterialIcon$DRAFTS_instance = new MaterialIcon('DRAFTS', 250, 'drafts');
    MaterialIcon$DRAG_HANDLE_instance = new MaterialIcon('DRAG_HANDLE', 251, 'drag_handle');
    MaterialIcon$DRIVE_ETA_instance = new MaterialIcon('DRIVE_ETA', 252, 'drive_eta');
    MaterialIcon$DVR_instance = new MaterialIcon('DVR', 253, 'dvr');
    MaterialIcon$EDIT_instance = new MaterialIcon('EDIT', 254, 'edit');
    MaterialIcon$EDIT_LOCATION_instance = new MaterialIcon('EDIT_LOCATION', 255, 'edit_location');
    MaterialIcon$EJECT_instance = new MaterialIcon('EJECT', 256, 'eject');
    MaterialIcon$EMAIL_instance = new MaterialIcon('EMAIL', 257, 'email');
    MaterialIcon$ENHANCED_ENCRYPTION_instance = new MaterialIcon('ENHANCED_ENCRYPTION', 258, 'enhanced_encryption');
    MaterialIcon$EQUALIZER_instance = new MaterialIcon('EQUALIZER', 259, 'equalizer');
    MaterialIcon$ERROR_instance = new MaterialIcon('ERROR', 260, 'error');
    MaterialIcon$ERROR_OUTLINE_instance = new MaterialIcon('ERROR_OUTLINE', 261, 'error_outline');
    MaterialIcon$EURO_SYMBOL_instance = new MaterialIcon('EURO_SYMBOL', 262, 'euro_symbol');
    MaterialIcon$EV_STATION_instance = new MaterialIcon('EV_STATION', 263, 'ev_station');
    MaterialIcon$EVENT_instance = new MaterialIcon('EVENT', 264, 'model');
    MaterialIcon$EVENT_AVAILABLE_instance = new MaterialIcon('EVENT_AVAILABLE', 265, 'event_available');
    MaterialIcon$EVENT_BUSY_instance = new MaterialIcon('EVENT_BUSY', 266, 'event_busy');
    MaterialIcon$EVENT_NOTE_instance = new MaterialIcon('EVENT_NOTE', 267, 'event_note');
    MaterialIcon$EVENT_SEAT_instance = new MaterialIcon('EVENT_SEAT', 268, 'event_seat');
    MaterialIcon$EXIT_TO_APP_instance = new MaterialIcon('EXIT_TO_APP', 269, 'exit_to_app');
    MaterialIcon$EXPAND_LESS_instance = new MaterialIcon('EXPAND_LESS', 270, 'expand_less');
    MaterialIcon$EXPAND_MORE_instance = new MaterialIcon('EXPAND_MORE', 271, 'expand_more');
    MaterialIcon$EXPLICIT_instance = new MaterialIcon('EXPLICIT', 272, 'explicit');
    MaterialIcon$EXPLORE_instance = new MaterialIcon('EXPLORE', 273, 'explore');
    MaterialIcon$EXPOSURE_instance = new MaterialIcon('EXPOSURE', 274, 'exposure');
    MaterialIcon$EXPOSURE_NEG_1_instance = new MaterialIcon('EXPOSURE_NEG_1', 275, 'exposure_neg_1');
    MaterialIcon$EXPOSURE_NEG_2_instance = new MaterialIcon('EXPOSURE_NEG_2', 276, 'exposure_neg_2');
    MaterialIcon$EXPOSURE_PLUS_1_instance = new MaterialIcon('EXPOSURE_PLUS_1', 277, 'exposure_plus_1');
    MaterialIcon$EXPOSURE_PLUS_2_instance = new MaterialIcon('EXPOSURE_PLUS_2', 278, 'exposure_plus_2');
    MaterialIcon$EXPOSURE_ZERO_instance = new MaterialIcon('EXPOSURE_ZERO', 279, 'exposure_zero');
    MaterialIcon$EXTENSION_instance = new MaterialIcon('EXTENSION', 280, 'extension');
    MaterialIcon$FACE_instance = new MaterialIcon('FACE', 281, 'face');
    MaterialIcon$FAST_FORWARD_instance = new MaterialIcon('FAST_FORWARD', 282, 'fast_forward ');
    MaterialIcon$FAST_REWIND_instance = new MaterialIcon('FAST_REWIND', 283, 'fast_rewind');
    MaterialIcon$FAVORITE_instance = new MaterialIcon('FAVORITE', 284, 'favorite');
    MaterialIcon$FAVORITE_BORDER_instance = new MaterialIcon('FAVORITE_BORDER', 285, 'favorite_border');
    MaterialIcon$FEATURED_PLAY_LIST_instance = new MaterialIcon('FEATURED_PLAY_LIST', 286, 'featured_play_list');
    MaterialIcon$FEATURED_VIDEO_instance = new MaterialIcon('FEATURED_VIDEO', 287, 'featured_video');
    MaterialIcon$FACK_instance = new MaterialIcon('FACK', 288, 'fack');
    MaterialIcon$FIBER_DVR_instance = new MaterialIcon('FIBER_DVR', 289, 'fiber_dvr');
    MaterialIcon$FIBER_MANUAL_RECORD_instance = new MaterialIcon('FIBER_MANUAL_RECORD', 290, 'fiber_manual_record');
    MaterialIcon$FIBER_NEW_instance = new MaterialIcon('FIBER_NEW', 291, 'fiber_new');
    MaterialIcon$FIBER_PIN_instance = new MaterialIcon('FIBER_PIN', 292, 'fiber_pin');
    MaterialIcon$FIBER_SMART_RECORD_instance = new MaterialIcon('FIBER_SMART_RECORD', 293, 'fiber_smart_record');
    MaterialIcon$FILE_DOWNLOAD_instance = new MaterialIcon('FILE_DOWNLOAD', 294, 'file_download');
    MaterialIcon$FILE_UPLOAD_instance = new MaterialIcon('FILE_UPLOAD', 295, 'file_upload');
    MaterialIcon$FILTER_instance = new MaterialIcon('FILTER', 296, 'filter');
    MaterialIcon$FILTER_1_instance = new MaterialIcon('FILTER_1', 297, 'filter_1');
    MaterialIcon$FILTER_2_instance = new MaterialIcon('FILTER_2', 298, 'filter_2');
    MaterialIcon$FILTER_3_instance = new MaterialIcon('FILTER_3', 299, 'filter_3');
    MaterialIcon$FILTER_4_instance = new MaterialIcon('FILTER_4', 300, 'filter_4');
    MaterialIcon$FILTER_5_instance = new MaterialIcon('FILTER_5', 301, 'filter_5');
    MaterialIcon$FILTER_6_instance = new MaterialIcon('FILTER_6', 302, 'filter_6');
    MaterialIcon$FILTER_7_instance = new MaterialIcon('FILTER_7', 303, 'filter_7');
    MaterialIcon$FILTER_8_instance = new MaterialIcon('FILTER_8', 304, 'filter_8');
    MaterialIcon$FILTER_9_instance = new MaterialIcon('FILTER_9', 305, 'filter_9');
    MaterialIcon$FILTER_9_PLUS_instance = new MaterialIcon('FILTER_9_PLUS', 306, 'filter_9_plus');
    MaterialIcon$FILTER_B_AND_W_instance = new MaterialIcon('FILTER_B_AND_W', 307, 'filter_b_and_w');
    MaterialIcon$FILTER_CENTER_FOCUS_instance = new MaterialIcon('FILTER_CENTER_FOCUS', 308, 'filter_center_focus');
    MaterialIcon$FILTER_DRAMA_instance = new MaterialIcon('FILTER_DRAMA', 309, 'filter_drama ');
    MaterialIcon$FILTER_FRAMES_instance = new MaterialIcon('FILTER_FRAMES', 310, 'filter_frames');
    MaterialIcon$FILTER_HDR_instance = new MaterialIcon('FILTER_HDR', 311, 'filter_hdr');
    MaterialIcon$FILTER_LIST_instance = new MaterialIcon('FILTER_LIST', 312, 'filter_list');
    MaterialIcon$FILTER_NONE_instance = new MaterialIcon('FILTER_NONE', 313, 'filter_none');
    MaterialIcon$FILTER_TILT_SHIFT_instance = new MaterialIcon('FILTER_TILT_SHIFT', 314, 'filter_tilt_shift');
    MaterialIcon$FILTER_VINTAGE_instance = new MaterialIcon('FILTER_VINTAGE', 315, 'filter_vintage');
    MaterialIcon$FIND_IN_PAGE_instance = new MaterialIcon('FIND_IN_PAGE', 316, 'find_in_page ');
    MaterialIcon$FIND_REPLACE_instance = new MaterialIcon('FIND_REPLACE', 317, 'find_replace ');
    MaterialIcon$FINGERPRINT_instance = new MaterialIcon('FINGERPRINT', 318, 'fingerprint');
    MaterialIcon$FIRST_PAGE_instance = new MaterialIcon('FIRST_PAGE', 319, 'first_page');
    MaterialIcon$FITNESS_CENTER_instance = new MaterialIcon('FITNESS_CENTER', 320, 'fitness_center');
    MaterialIcon$FLAG_instance = new MaterialIcon('FLAG', 321, 'flag');
    MaterialIcon$FLARE_instance = new MaterialIcon('FLARE', 322, 'flare');
    MaterialIcon$FLASH_AUTO_instance = new MaterialIcon('FLASH_AUTO', 323, 'flash_auto');
    MaterialIcon$FLASH_OFF_instance = new MaterialIcon('FLASH_OFF', 324, 'flash_off');
    MaterialIcon$FLASH_ON_instance = new MaterialIcon('FLASH_ON', 325, 'flash_on');
    MaterialIcon$FLIGHT_instance = new MaterialIcon('FLIGHT', 326, 'flight');
    MaterialIcon$FLIGHT_LAND_instance = new MaterialIcon('FLIGHT_LAND', 327, 'flight_land');
    MaterialIcon$FLIGHT_TAKEOFF_instance = new MaterialIcon('FLIGHT_TAKEOFF', 328, 'flight_takeoff');
    MaterialIcon$FLIP_instance = new MaterialIcon('FLIP', 329, 'flip');
    MaterialIcon$FLIP_TO_BACK_instance = new MaterialIcon('FLIP_TO_BACK', 330, 'flip_to_back ');
    MaterialIcon$FLIP_TO_FRONT_instance = new MaterialIcon('FLIP_TO_FRONT', 331, 'flip_to_front');
    MaterialIcon$FOLDER_instance = new MaterialIcon('FOLDER', 332, 'folder');
    MaterialIcon$FOLDER_OPEN_instance = new MaterialIcon('FOLDER_OPEN', 333, 'folder_open');
    MaterialIcon$FOLDER_SHARED_instance = new MaterialIcon('FOLDER_SHARED', 334, 'folder_shared');
    MaterialIcon$FOLDER_SPECIAL_instance = new MaterialIcon('FOLDER_SPECIAL', 335, 'folder_special');
    MaterialIcon$FONT_DOWNLOAD_instance = new MaterialIcon('FONT_DOWNLOAD', 336, 'font_download');
    MaterialIcon$FORMAT_ALIGN_CENTER_instance = new MaterialIcon('FORMAT_ALIGN_CENTER', 337, 'format_align_center');
    MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance = new MaterialIcon('FORMAT_ALIGN_JUSTIFY', 338, 'format_align_justify');
    MaterialIcon$FORMAT_ALIGN_LEFT_instance = new MaterialIcon('FORMAT_ALIGN_LEFT', 339, 'format_align_left');
    MaterialIcon$FORMAT_ALIGN_RIGHT_instance = new MaterialIcon('FORMAT_ALIGN_RIGHT', 340, 'format_align_right');
    MaterialIcon$FORMAT_BOLD_instance = new MaterialIcon('FORMAT_BOLD', 341, 'format_bold');
    MaterialIcon$FORMAT_CLEAR_instance = new MaterialIcon('FORMAT_CLEAR', 342, 'format_clear ');
    MaterialIcon$FORMAT_COLOR_FILL_instance = new MaterialIcon('FORMAT_COLOR_FILL', 343, 'format_color_fill');
    MaterialIcon$FORMAT_COLOR_RESET_instance = new MaterialIcon('FORMAT_COLOR_RESET', 344, 'format_color_reset');
    MaterialIcon$FORMAT_COLOR_TEXT_instance = new MaterialIcon('FORMAT_COLOR_TEXT', 345, 'format_color_text');
    MaterialIcon$FORMAT_INDENT_DECREASE_instance = new MaterialIcon('FORMAT_INDENT_DECREASE', 346, 'format_indent_decrease');
    MaterialIcon$FORMAT_INDENT_INCREASE_instance = new MaterialIcon('FORMAT_INDENT_INCREASE', 347, 'format_indent_increase');
    MaterialIcon$FORMAT_ITALIC_instance = new MaterialIcon('FORMAT_ITALIC', 348, 'format_italic');
    MaterialIcon$FORMAT_LINE_SPACING_instance = new MaterialIcon('FORMAT_LINE_SPACING', 349, 'format_line_spacing');
    MaterialIcon$FORMAT_LIST_BULLETED_instance = new MaterialIcon('FORMAT_LIST_BULLETED', 350, 'format_list_bulleted');
    MaterialIcon$FORMAT_LIST_NUMBERED_instance = new MaterialIcon('FORMAT_LIST_NUMBERED', 351, 'format_list_numbered');
    MaterialIcon$FORMAT_PAINT_instance = new MaterialIcon('FORMAT_PAINT', 352, 'format_paint ');
    MaterialIcon$FORMAT_QUOTE_instance = new MaterialIcon('FORMAT_QUOTE', 353, 'format_quote ');
    MaterialIcon$FORMAT_SHAPES_instance = new MaterialIcon('FORMAT_SHAPES', 354, 'format_shapes');
    MaterialIcon$FORMAT_SIZE_instance = new MaterialIcon('FORMAT_SIZE', 355, 'format_size');
    MaterialIcon$FORMAT_STRIKETHROUGH_instance = new MaterialIcon('FORMAT_STRIKETHROUGH', 356, 'format_strikethrough');
    MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance = new MaterialIcon('FORMAT_TEXTDIRECTION_L_TO_R', 357, 'format_textdirection_l_to_r');
    MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance = new MaterialIcon('FORMAT_TEXTDIRECTION_R_TO_L', 358, 'format_textdirection_r_to_l');
    MaterialIcon$FORMAT_UNDERLINED_instance = new MaterialIcon('FORMAT_UNDERLINED', 359, 'format_underlined');
    MaterialIcon$FORUM_instance = new MaterialIcon('FORUM', 360, 'forum');
    MaterialIcon$FORWARD_instance = new MaterialIcon('FORWARD', 361, 'forward');
    MaterialIcon$FORWARD_10_instance = new MaterialIcon('FORWARD_10', 362, 'forward_10');
    MaterialIcon$FORWARD_30_instance = new MaterialIcon('FORWARD_30', 363, 'forward_30');
    MaterialIcon$FORWARD_5_instance = new MaterialIcon('FORWARD_5', 364, 'forward_5');
    MaterialIcon$FREE_BREAKFAST_instance = new MaterialIcon('FREE_BREAKFAST', 365, 'free_breakfast');
    MaterialIcon$FULLSCREEN_instance = new MaterialIcon('FULLSCREEN', 366, 'fullscreen');
    MaterialIcon$FULLSCREEN_EXIT_instance = new MaterialIcon('FULLSCREEN_EXIT', 367, 'fullscreen_exit');
    MaterialIcon$FUNCTIONS_instance = new MaterialIcon('FUNCTIONS', 368, 'functions');
    MaterialIcon$G_TRANSLATE_instance = new MaterialIcon('G_TRANSLATE', 369, 'g_translate');
    MaterialIcon$GAMEPAD_instance = new MaterialIcon('GAMEPAD', 370, 'gamepad');
    MaterialIcon$GAMES_instance = new MaterialIcon('GAMES', 371, 'games');
    MaterialIcon$GAVEL_instance = new MaterialIcon('GAVEL', 372, 'gavel');
    MaterialIcon$GESTURE_instance = new MaterialIcon('GESTURE', 373, 'gesture');
    MaterialIcon$GET_APP_instance = new MaterialIcon('GET_APP', 374, 'get_app');
    MaterialIcon$GIF_instance = new MaterialIcon('GIF', 375, 'gif');
    MaterialIcon$GOLF_COURSE_instance = new MaterialIcon('GOLF_COURSE', 376, 'golf_course');
    MaterialIcon$GPS_FIXED_instance = new MaterialIcon('GPS_FIXED', 377, 'gps_fixed');
    MaterialIcon$GPS_NOT_FIXED_instance = new MaterialIcon('GPS_NOT_FIXED', 378, 'gps_not_fixed');
    MaterialIcon$GPS_OFF_instance = new MaterialIcon('GPS_OFF', 379, 'gps_off');
    MaterialIcon$GRADE_instance = new MaterialIcon('GRADE', 380, 'grade');
    MaterialIcon$GRADIENT_instance = new MaterialIcon('GRADIENT', 381, 'gradient');
    MaterialIcon$GRAIN_instance = new MaterialIcon('GRAIN', 382, 'grain');
    MaterialIcon$GRAPHIC_EQ_instance = new MaterialIcon('GRAPHIC_EQ', 383, 'graphic_eq');
    MaterialIcon$GRID_OFF_instance = new MaterialIcon('GRID_OFF', 384, 'grid_off');
    MaterialIcon$GRID_ON_instance = new MaterialIcon('GRID_ON', 385, 'grid_on');
    MaterialIcon$GROUP_instance = new MaterialIcon('GROUP', 386, 'group');
    MaterialIcon$GROUP_ADD_instance = new MaterialIcon('GROUP_ADD', 387, 'group_add');
    MaterialIcon$GROUP_WORK_instance = new MaterialIcon('GROUP_WORK', 388, 'group_work');
    MaterialIcon$HD_instance = new MaterialIcon('HD', 389, 'hd');
    MaterialIcon$HDR_OFF_instance = new MaterialIcon('HDR_OFF', 390, 'hdr_off');
    MaterialIcon$HDR_ON_instance = new MaterialIcon('HDR_ON', 391, 'hdr_on');
    MaterialIcon$HDR_STRONG_instance = new MaterialIcon('HDR_STRONG', 392, 'hdr_strong');
    MaterialIcon$HDR_WEAK_instance = new MaterialIcon('HDR_WEAK', 393, 'hdr_weak');
    MaterialIcon$HEADSET_instance = new MaterialIcon('HEADSET', 394, 'headset');
    MaterialIcon$HEADSET_MIC_instance = new MaterialIcon('HEADSET_MIC', 395, 'headset_mic');
    MaterialIcon$HEALING_instance = new MaterialIcon('HEALING', 396, 'healing');
    MaterialIcon$HEARING_instance = new MaterialIcon('HEARING', 397, 'hearing');
    MaterialIcon$HELP_instance = new MaterialIcon('HELP', 398, 'help');
    MaterialIcon$HELP_OUTLINE_instance = new MaterialIcon('HELP_OUTLINE', 399, 'help_outline ');
    MaterialIcon$HIGH_QUALITY_instance = new MaterialIcon('HIGH_QUALITY', 400, 'high_quality ');
    MaterialIcon$HIGHLIGHT_instance = new MaterialIcon('HIGHLIGHT', 401, 'highlight');
    MaterialIcon$HIGHLIGHT_OFF_instance = new MaterialIcon('HIGHLIGHT_OFF', 402, 'highlight_off');
    MaterialIcon$HISTORY_instance = new MaterialIcon('HISTORY', 403, 'history');
    MaterialIcon$HOME_instance = new MaterialIcon('HOME', 404, 'home');
    MaterialIcon$HOT_TUB_instance = new MaterialIcon('HOT_TUB', 405, 'hot_tub');
    MaterialIcon$HOTEL_instance = new MaterialIcon('HOTEL', 406, 'hotel');
    MaterialIcon$HOURGLASS_EMPTY_instance = new MaterialIcon('HOURGLASS_EMPTY', 407, 'hourglass_empty');
    MaterialIcon$HOURGLASS_FULL_instance = new MaterialIcon('HOURGLASS_FULL', 408, 'hourglass_full');
    MaterialIcon$HTTP_instance = new MaterialIcon('HTTP', 409, 'http');
    MaterialIcon$HTTPS_instance = new MaterialIcon('HTTPS', 410, 'https');
    MaterialIcon$IMAGE_instance = new MaterialIcon('IMAGE', 411, 'image');
    MaterialIcon$IMAGE_ASPECT_RATIO_instance = new MaterialIcon('IMAGE_ASPECT_RATIO', 412, 'image_aspect_ratio');
    MaterialIcon$IMPORT_CONTACTS_instance = new MaterialIcon('IMPORT_CONTACTS', 413, 'import_contacts');
    MaterialIcon$IMPORT_EXPORT_instance = new MaterialIcon('IMPORT_EXPORT', 414, 'import_export');
    MaterialIcon$IMPORTANT_DEVICES_instance = new MaterialIcon('IMPORTANT_DEVICES', 415, 'important_devices');
    MaterialIcon$INBOX_instance = new MaterialIcon('INBOX', 416, 'inbox');
    MaterialIcon$INDETERMINATE_CHECK_BOX_instance = new MaterialIcon('INDETERMINATE_CHECK_BOX', 417, 'indeterminate_check_box');
    MaterialIcon$INFO_instance = new MaterialIcon('INFO', 418, 'info');
    MaterialIcon$INFO_OUTLINE_instance = new MaterialIcon('INFO_OUTLINE', 419, 'info_outline ');
    MaterialIcon$INPUT_instance = new MaterialIcon('INPUT', 420, 'input');
    MaterialIcon$INSERT_CHART_instance = new MaterialIcon('INSERT_CHART', 421, 'insert_chart ');
    MaterialIcon$INSERT_COMMENT_instance = new MaterialIcon('INSERT_COMMENT', 422, 'insert_comment');
    MaterialIcon$INSERT_DRIVE_FILE_instance = new MaterialIcon('INSERT_DRIVE_FILE', 423, 'insert_drive_file');
    MaterialIcon$INSERT_EMOTICON_instance = new MaterialIcon('INSERT_EMOTICON', 424, 'insert_emoticon');
    MaterialIcon$INSERT_INVITATION_instance = new MaterialIcon('INSERT_INVITATION', 425, 'insert_invitation');
    MaterialIcon$INSERT_LINK_instance = new MaterialIcon('INSERT_LINK', 426, 'insert_link');
    MaterialIcon$INSERT_PHOTO_instance = new MaterialIcon('INSERT_PHOTO', 427, 'insert_photo ');
    MaterialIcon$INVERT_COLORS_instance = new MaterialIcon('INVERT_COLORS', 428, 'invert_colors');
    MaterialIcon$INVERT_COLORS_OFF_instance = new MaterialIcon('INVERT_COLORS_OFF', 429, 'invert_colors_off');
    MaterialIcon$ISO_instance = new MaterialIcon('ISO', 430, 'iso');
    MaterialIcon$KEYBOARD_instance = new MaterialIcon('KEYBOARD', 431, 'keyboard');
    MaterialIcon$KEYBOARD_ARROW_DOWN_instance = new MaterialIcon('KEYBOARD_ARROW_DOWN', 432, 'keyboard_arrow_down');
    MaterialIcon$KEYBOARD_ARROW_LEFT_instance = new MaterialIcon('KEYBOARD_ARROW_LEFT', 433, 'keyboard_arrow_left');
    MaterialIcon$KEYBOARD_ARROW_RIGHT_instance = new MaterialIcon('KEYBOARD_ARROW_RIGHT', 434, 'keyboard_arrow_right');
    MaterialIcon$KEYBOARD_ARROW_UP_instance = new MaterialIcon('KEYBOARD_ARROW_UP', 435, 'keyboard_arrow_up');
    MaterialIcon$KEYBOARD_BACKSPACE_instance = new MaterialIcon('KEYBOARD_BACKSPACE', 436, 'keyboard_backspace');
    MaterialIcon$KEYBOARD_CAPSLOCK_instance = new MaterialIcon('KEYBOARD_CAPSLOCK', 437, 'keyboard_capslock');
    MaterialIcon$KEYBOARD_HIDE_instance = new MaterialIcon('KEYBOARD_HIDE', 438, 'keyboard_hide');
    MaterialIcon$KEYBOARD_RETURN_instance = new MaterialIcon('KEYBOARD_RETURN', 439, 'keyboard_return');
    MaterialIcon$KEYBOARD_TAB_instance = new MaterialIcon('KEYBOARD_TAB', 440, 'keyboard_tab ');
    MaterialIcon$KEYBOARD_VOICE_instance = new MaterialIcon('KEYBOARD_VOICE', 441, 'keyboard_voice');
    MaterialIcon$KITCHEN_instance = new MaterialIcon('KITCHEN', 442, 'kitchen');
    MaterialIcon$LABEL_instance = new MaterialIcon('LABEL', 443, 'label');
    MaterialIcon$LABEL_OUTLINE_instance = new MaterialIcon('LABEL_OUTLINE', 444, 'label_outline');
    MaterialIcon$LANDSCAPE_instance = new MaterialIcon('LANDSCAPE', 445, 'landscape');
    MaterialIcon$LANGUAGE_instance = new MaterialIcon('LANGUAGE', 446, 'language');
    MaterialIcon$LAPTOP_instance = new MaterialIcon('LAPTOP', 447, 'laptop');
    MaterialIcon$LAPTOP_CHROMEBOOK_instance = new MaterialIcon('LAPTOP_CHROMEBOOK', 448, 'laptop_chromebook');
    MaterialIcon$LAPTOP_MAC_instance = new MaterialIcon('LAPTOP_MAC', 449, 'laptop_mac');
    MaterialIcon$LAPTOP_WINDOWS_instance = new MaterialIcon('LAPTOP_WINDOWS', 450, 'laptop_windows');
    MaterialIcon$LAST_PAGE_instance = new MaterialIcon('LAST_PAGE', 451, 'last_page');
    MaterialIcon$LAUNCH_instance = new MaterialIcon('LAUNCH', 452, 'launch');
    MaterialIcon$LAYERS_instance = new MaterialIcon('LAYERS', 453, 'layers');
    MaterialIcon$LAYERS_CLEAR_instance = new MaterialIcon('LAYERS_CLEAR', 454, 'layers_clear ');
    MaterialIcon$LEAK_ADD_instance = new MaterialIcon('LEAK_ADD', 455, 'leak_add');
    MaterialIcon$LEAK_REMOVE_instance = new MaterialIcon('LEAK_REMOVE', 456, 'leak_remove');
    MaterialIcon$LENS_instance = new MaterialIcon('LENS', 457, 'lens');
    MaterialIcon$LIBRARY_ADD_instance = new MaterialIcon('LIBRARY_ADD', 458, 'library_add');
    MaterialIcon$LIBRARY_BOOKS_instance = new MaterialIcon('LIBRARY_BOOKS', 459, 'library_books');
    MaterialIcon$LIBRARY_MUSIC_instance = new MaterialIcon('LIBRARY_MUSIC', 460, 'library_music');
    MaterialIcon$LIGHTBULB_OUTLINE_instance = new MaterialIcon('LIGHTBULB_OUTLINE', 461, 'lightbulb_outline');
    MaterialIcon$LINE_STYLE_instance = new MaterialIcon('LINE_STYLE', 462, 'line_style');
    MaterialIcon$LINE_WEIGHT_instance = new MaterialIcon('LINE_WEIGHT', 463, 'line_weight');
    MaterialIcon$LINEAR_SCALE_instance = new MaterialIcon('LINEAR_SCALE', 464, 'linear_scale ');
    MaterialIcon$LINK_instance = new MaterialIcon('LINK', 465, 'link');
    MaterialIcon$LINKED_CAMERA_instance = new MaterialIcon('LINKED_CAMERA', 466, 'linked_camera');
    MaterialIcon$LIST_instance = new MaterialIcon('LIST', 467, 'list');
    MaterialIcon$LIVE_HELP_instance = new MaterialIcon('LIVE_HELP', 468, 'live_help');
    MaterialIcon$LIVE_TV_instance = new MaterialIcon('LIVE_TV', 469, 'live_tv');
    MaterialIcon$LOCAL_ACTIVITY_instance = new MaterialIcon('LOCAL_ACTIVITY', 470, 'local_activity');
    MaterialIcon$LOCAL_AIRPORT_instance = new MaterialIcon('LOCAL_AIRPORT', 471, 'local_airport');
    MaterialIcon$LOCAL_ATM_instance = new MaterialIcon('LOCAL_ATM', 472, 'local_atm');
    MaterialIcon$LOCAL_BAR_instance = new MaterialIcon('LOCAL_BAR', 473, 'local_bar');
    MaterialIcon$LOCAL_CAFE_instance = new MaterialIcon('LOCAL_CAFE', 474, 'local_cafe');
    MaterialIcon$LOCAL_CAR_WASH_instance = new MaterialIcon('LOCAL_CAR_WASH', 475, 'local_car_wash');
    MaterialIcon$LOCAL_CONVENIENCE_STORE_instance = new MaterialIcon('LOCAL_CONVENIENCE_STORE', 476, 'local_convenience_store');
    MaterialIcon$LOCAL_DINING_instance = new MaterialIcon('LOCAL_DINING', 477, 'local_dining ');
    MaterialIcon$LOCAL_DRINK_instance = new MaterialIcon('LOCAL_DRINK', 478, 'local_drink');
    MaterialIcon$LOCAL_FLORIST_instance = new MaterialIcon('LOCAL_FLORIST', 479, 'local_florist');
    MaterialIcon$LOCAL_GAS_STATION_instance = new MaterialIcon('LOCAL_GAS_STATION', 480, 'local_gas_station');
    MaterialIcon$LOCAL_GROCERY_STORE_instance = new MaterialIcon('LOCAL_GROCERY_STORE', 481, 'local_grocery_store');
    MaterialIcon$LOCAL_HOSPITAL_instance = new MaterialIcon('LOCAL_HOSPITAL', 482, 'local_hospital');
    MaterialIcon$LOCAL_HOTEL_instance = new MaterialIcon('LOCAL_HOTEL', 483, 'local_hotel');
    MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance = new MaterialIcon('LOCAL_LAUNDRY_SERVICE', 484, 'local_laundry_service');
    MaterialIcon$LOCAL_LIBRARY_instance = new MaterialIcon('LOCAL_LIBRARY', 485, 'local_library');
    MaterialIcon$LOCAL_MALL_instance = new MaterialIcon('LOCAL_MALL', 486, 'local_mall');
    MaterialIcon$LOCAL_MOVIES_instance = new MaterialIcon('LOCAL_MOVIES', 487, 'local_movies ');
    MaterialIcon$LOCAL_OFFER_instance = new MaterialIcon('LOCAL_OFFER', 488, 'local_offer');
    MaterialIcon$LOCAL_PARKING_instance = new MaterialIcon('LOCAL_PARKING', 489, 'local_parking');
    MaterialIcon$LOCAL_PHARMACY_instance = new MaterialIcon('LOCAL_PHARMACY', 490, 'local_pharmacy');
    MaterialIcon$LOCAL_PHONE_instance = new MaterialIcon('LOCAL_PHONE', 491, 'local_phone');
    MaterialIcon$LOCAL_PIZZA_instance = new MaterialIcon('LOCAL_PIZZA', 492, 'local_pizza');
    MaterialIcon$LOCAL_PLAY_instance = new MaterialIcon('LOCAL_PLAY', 493, 'local_play');
    MaterialIcon$LOCAL_POST_OFFICE_instance = new MaterialIcon('LOCAL_POST_OFFICE', 494, 'local_post_office');
    MaterialIcon$LOCAL_PRINTSHOP_instance = new MaterialIcon('LOCAL_PRINTSHOP', 495, 'local_printshop');
    MaterialIcon$LOCAL_SEE_instance = new MaterialIcon('LOCAL_SEE', 496, 'local_see');
    MaterialIcon$LOCAL_SHIPPING_instance = new MaterialIcon('LOCAL_SHIPPING', 497, 'local_shipping');
    MaterialIcon$LOCAL_TAXI_instance = new MaterialIcon('LOCAL_TAXI', 498, 'local_taxi');
    MaterialIcon$LOCATION_CITY_instance = new MaterialIcon('LOCATION_CITY', 499, 'location_city');
    MaterialIcon$LOCATION_DISABLED_instance = new MaterialIcon('LOCATION_DISABLED', 500, 'location_disabled');
    MaterialIcon$LOCATION_OFF_instance = new MaterialIcon('LOCATION_OFF', 501, 'location_off ');
    MaterialIcon$LOCATION_ON_instance = new MaterialIcon('LOCATION_ON', 502, 'location_on');
    MaterialIcon$LOCATION_SEARCHING_instance = new MaterialIcon('LOCATION_SEARCHING', 503, 'location_searching');
    MaterialIcon$LOCK_instance = new MaterialIcon('LOCK', 504, 'lock');
    MaterialIcon$LOCK_OPEN_instance = new MaterialIcon('LOCK_OPEN', 505, 'lock_open');
    MaterialIcon$LOCK_OUTLINE_instance = new MaterialIcon('LOCK_OUTLINE', 506, 'lock_outline ');
    MaterialIcon$LOOKS_instance = new MaterialIcon('LOOKS', 507, 'looks');
    MaterialIcon$LOOKS_3_instance = new MaterialIcon('LOOKS_3', 508, 'looks_3');
    MaterialIcon$LOOKS_4_instance = new MaterialIcon('LOOKS_4', 509, 'looks_4');
    MaterialIcon$LOOKS_5_instance = new MaterialIcon('LOOKS_5', 510, 'looks_5');
    MaterialIcon$LOOKS_6_instance = new MaterialIcon('LOOKS_6', 511, 'looks_6');
    MaterialIcon$LOOKS_ONE_instance = new MaterialIcon('LOOKS_ONE', 512, 'looks_one');
    MaterialIcon$LOOKS_TWO_instance = new MaterialIcon('LOOKS_TWO', 513, 'looks_two');
    MaterialIcon$LOOP_instance = new MaterialIcon('LOOP', 514, 'loop');
    MaterialIcon$LOUPE_instance = new MaterialIcon('LOUPE', 515, 'loupe');
    MaterialIcon$LOW_PRIORITY_instance = new MaterialIcon('LOW_PRIORITY', 516, 'low_priority ');
    MaterialIcon$LOYALTY_instance = new MaterialIcon('LOYALTY', 517, 'loyalty');
    MaterialIcon$MAIL_instance = new MaterialIcon('MAIL', 518, 'mail');
    MaterialIcon$MAIL_OUTLINE_instance = new MaterialIcon('MAIL_OUTLINE', 519, 'mail_outline ');
    MaterialIcon$MAP_instance = new MaterialIcon('MAP', 520, 'map');
    MaterialIcon$MARKUNREAD_instance = new MaterialIcon('MARKUNREAD', 521, 'markunread');
    MaterialIcon$MARKUNREAD_MAILBOX_instance = new MaterialIcon('MARKUNREAD_MAILBOX', 522, 'markunread_mailbox');
    MaterialIcon$MEMORY_instance = new MaterialIcon('MEMORY', 523, 'memory');
    MaterialIcon$MENU_instance = new MaterialIcon('MENU', 524, 'menu');
    MaterialIcon$MERGE_TYPE_instance = new MaterialIcon('MERGE_TYPE', 525, 'merge_type');
    MaterialIcon$MESSAGE_instance = new MaterialIcon('MESSAGE', 526, 'message');
    MaterialIcon$MIC_instance = new MaterialIcon('MIC', 527, 'mic');
    MaterialIcon$MIC_NONE_instance = new MaterialIcon('MIC_NONE', 528, 'mic_none');
    MaterialIcon$MIC_OFF_instance = new MaterialIcon('MIC_OFF', 529, 'mic_off');
    MaterialIcon$MMS_instance = new MaterialIcon('MMS', 530, 'mms');
    MaterialIcon$MODE_COMMENT_instance = new MaterialIcon('MODE_COMMENT', 531, 'mode_comment ');
    MaterialIcon$MODE_EDIT_instance = new MaterialIcon('MODE_EDIT', 532, 'mode_edit');
    MaterialIcon$MONETIZATION_ON_instance = new MaterialIcon('MONETIZATION_ON', 533, 'monetization_on');
    MaterialIcon$MONEY_OFF_instance = new MaterialIcon('MONEY_OFF', 534, 'money_off');
    MaterialIcon$MONOCHROME_PHOTOS_instance = new MaterialIcon('MONOCHROME_PHOTOS', 535, 'monochrome_photos');
    MaterialIcon$MOOD_instance = new MaterialIcon('MOOD', 536, 'mood');
    MaterialIcon$MOOD_BAD_instance = new MaterialIcon('MOOD_BAD', 537, 'mood_bad');
    MaterialIcon$MORE_instance = new MaterialIcon('MORE', 538, 'more');
    MaterialIcon$MORE_HORIZ_instance = new MaterialIcon('MORE_HORIZ', 539, 'more_horiz');
    MaterialIcon$MORE_VERT_instance = new MaterialIcon('MORE_VERT', 540, 'more_vert');
    MaterialIcon$MOTORCYCLE_instance = new MaterialIcon('MOTORCYCLE', 541, 'motorcycle');
    MaterialIcon$MOUSE_instance = new MaterialIcon('MOUSE', 542, 'mouse');
    MaterialIcon$MOVE_TO_INBOX_instance = new MaterialIcon('MOVE_TO_INBOX', 543, 'move_to_inbox');
    MaterialIcon$MOVIE_instance = new MaterialIcon('MOVIE', 544, 'movie');
    MaterialIcon$MOVIE_CREATION_instance = new MaterialIcon('MOVIE_CREATION', 545, 'movie_creation');
    MaterialIcon$MOVIE_FILTER_instance = new MaterialIcon('MOVIE_FILTER', 546, 'movie_filter ');
    MaterialIcon$MULTILINE_CHART_instance = new MaterialIcon('MULTILINE_CHART', 547, 'multiline_chart');
    MaterialIcon$MUSIC_NOTE_instance = new MaterialIcon('MUSIC_NOTE', 548, 'music_note');
    MaterialIcon$MUSIC_VIDEO_instance = new MaterialIcon('MUSIC_VIDEO', 549, 'music_video');
    MaterialIcon$MY_LOCATION_instance = new MaterialIcon('MY_LOCATION', 550, 'my_location');
    MaterialIcon$NATURE_instance = new MaterialIcon('NATURE', 551, 'nature');
    MaterialIcon$NATURE_PEOPLE_instance = new MaterialIcon('NATURE_PEOPLE', 552, 'nature_people');
    MaterialIcon$NAVIGATE_BEFORE_instance = new MaterialIcon('NAVIGATE_BEFORE', 553, 'navigate_before');
    MaterialIcon$NAVIGATE_NEXT_instance = new MaterialIcon('NAVIGATE_NEXT', 554, 'navigate_next');
    MaterialIcon$NAVIGATION_instance = new MaterialIcon('NAVIGATION', 555, 'navigationDrawer');
    MaterialIcon$NEAR_ME_instance = new MaterialIcon('NEAR_ME', 556, 'near_me');
    MaterialIcon$NETWORK_CELL_instance = new MaterialIcon('NETWORK_CELL', 557, 'network_cell ');
    MaterialIcon$NETWORK_CHECK_instance = new MaterialIcon('NETWORK_CHECK', 558, 'network_check');
    MaterialIcon$NETWORK_LOCKED_instance = new MaterialIcon('NETWORK_LOCKED', 559, 'network_locked');
    MaterialIcon$NETWORK_WIFI_instance = new MaterialIcon('NETWORK_WIFI', 560, 'network_wifi ');
    MaterialIcon$NEW_RELEASES_instance = new MaterialIcon('NEW_RELEASES', 561, 'new_releases ');
    MaterialIcon$NEXT_WEEK_instance = new MaterialIcon('NEXT_WEEK', 562, 'next_week');
    MaterialIcon$NFC_instance = new MaterialIcon('NFC', 563, 'nfc');
    MaterialIcon$NO_ENCRYPTION_instance = new MaterialIcon('NO_ENCRYPTION', 564, 'no_encryption');
    MaterialIcon$NO_SIM_instance = new MaterialIcon('NO_SIM', 565, 'no_sim');
    MaterialIcon$NOT_INTERESTED_instance = new MaterialIcon('NOT_INTERESTED', 566, 'not_interested');
    MaterialIcon$NOTE_instance = new MaterialIcon('NOTE', 567, 'note');
    MaterialIcon$NOTE_ADD_instance = new MaterialIcon('NOTE_ADD', 568, 'note_add');
    MaterialIcon$NOTIFICATIONS_instance = new MaterialIcon('NOTIFICATIONS', 569, 'notifications');
    MaterialIcon$NOTIFICATIONS_ACTIVE_instance = new MaterialIcon('NOTIFICATIONS_ACTIVE', 570, 'notifications_active');
    MaterialIcon$NOTIFICATIONS_NONE_instance = new MaterialIcon('NOTIFICATIONS_NONE', 571, 'notifications_none');
    MaterialIcon$NOTIFICATIONS_OFF_instance = new MaterialIcon('NOTIFICATIONS_OFF', 572, 'notifications_off');
    MaterialIcon$NOTIFICATIONS_PAUSED_instance = new MaterialIcon('NOTIFICATIONS_PAUSED', 573, 'notifications_paused');
    MaterialIcon$OFFLINE_PIN_instance = new MaterialIcon('OFFLINE_PIN', 574, 'offline_pin');
    MaterialIcon$ONDEMAND_VIDEO_instance = new MaterialIcon('ONDEMAND_VIDEO', 575, 'ondemand_video');
    MaterialIcon$OPACITY_instance = new MaterialIcon('OPACITY', 576, 'opacity');
    MaterialIcon$OPEN_IN_BROWSER_instance = new MaterialIcon('OPEN_IN_BROWSER', 577, 'open_in_browser');
    MaterialIcon$OPEN_IN_NEW_instance = new MaterialIcon('OPEN_IN_NEW', 578, 'open_in_new');
    MaterialIcon$OPEN_WITH_instance = new MaterialIcon('OPEN_WITH', 579, 'open_with');
    MaterialIcon$PAGES_instance = new MaterialIcon('PAGES', 580, 'pages');
    MaterialIcon$PAGEVIEW_instance = new MaterialIcon('PAGEVIEW', 581, 'pageview');
    MaterialIcon$PALETTE_instance = new MaterialIcon('PALETTE', 582, 'palette');
    MaterialIcon$PAN_TOOL_instance = new MaterialIcon('PAN_TOOL', 583, 'pan_tool');
    MaterialIcon$PANORAMA_instance = new MaterialIcon('PANORAMA', 584, 'panorama');
    MaterialIcon$PANORAMA_FISH_EYE_instance = new MaterialIcon('PANORAMA_FISH_EYE', 585, 'panorama_fish_eye');
    MaterialIcon$PANORAMA_HORIZONTAL_instance = new MaterialIcon('PANORAMA_HORIZONTAL', 586, 'panorama_horizontal');
    MaterialIcon$PANORAMA_VERTICAL_instance = new MaterialIcon('PANORAMA_VERTICAL', 587, 'panorama_vertical');
    MaterialIcon$PANORAMA_WIDE_ANGLE_instance = new MaterialIcon('PANORAMA_WIDE_ANGLE', 588, 'panorama_wide_angle');
    MaterialIcon$PARTY_MODE_instance = new MaterialIcon('PARTY_MODE', 589, 'party_mode');
    MaterialIcon$PAUSE_instance = new MaterialIcon('PAUSE', 590, 'pause');
    MaterialIcon$PAUSE_CIRCLE_FILLED_instance = new MaterialIcon('PAUSE_CIRCLE_FILLED', 591, 'pause_circle_filled');
    MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance = new MaterialIcon('PAUSE_CIRCLE_OUTLINE', 592, 'pause_circle_outline');
    MaterialIcon$PAYMENT_instance = new MaterialIcon('PAYMENT', 593, 'payment');
    MaterialIcon$PEOPLE_instance = new MaterialIcon('PEOPLE', 594, 'people');
    MaterialIcon$PEOPLE_OUTLINE_instance = new MaterialIcon('PEOPLE_OUTLINE', 595, 'people_outline');
    MaterialIcon$PERM_CAMERA_MIC_instance = new MaterialIcon('PERM_CAMERA_MIC', 596, 'perm_camera_mic');
    MaterialIcon$PERM_CONTACT_CALENDAR_instance = new MaterialIcon('PERM_CONTACT_CALENDAR', 597, 'perm_contact_calendar');
    MaterialIcon$PERM_DATA_SETTING_instance = new MaterialIcon('PERM_DATA_SETTING', 598, 'perm_data_setting');
    MaterialIcon$PERM_DEVICE_INFORMATION_instance = new MaterialIcon('PERM_DEVICE_INFORMATION', 599, 'perm_device_information');
    MaterialIcon$PERM_IDENTITY_instance = new MaterialIcon('PERM_IDENTITY', 600, 'perm_identity');
    MaterialIcon$PERM_MEDIA_instance = new MaterialIcon('PERM_MEDIA', 601, 'perm_media');
    MaterialIcon$PERM_PHONE_MSG_instance = new MaterialIcon('PERM_PHONE_MSG', 602, 'perm_phone_msg');
    MaterialIcon$PERM_SCAN_WIFI_instance = new MaterialIcon('PERM_SCAN_WIFI', 603, 'perm_scan_wifi');
    MaterialIcon$PERSON_instance = new MaterialIcon('PERSON', 604, 'person');
    MaterialIcon$PERSON_ADD_instance = new MaterialIcon('PERSON_ADD', 605, 'person_add');
    MaterialIcon$PERSON_OUTLINE_instance = new MaterialIcon('PERSON_OUTLINE', 606, 'person_outline');
    MaterialIcon$PERSON_PIN_instance = new MaterialIcon('PERSON_PIN', 607, 'person_pin');
    MaterialIcon$PERSON_PIN_CIRCLE_instance = new MaterialIcon('PERSON_PIN_CIRCLE', 608, 'person_pin_circle');
    MaterialIcon$PERSONAL_VIDEO_instance = new MaterialIcon('PERSONAL_VIDEO', 609, 'personal_video');
    MaterialIcon$PETS_instance = new MaterialIcon('PETS', 610, 'pets');
    MaterialIcon$PHONE_instance = new MaterialIcon('PHONE', 611, 'phone');
    MaterialIcon$PHONE_ANDROID_instance = new MaterialIcon('PHONE_ANDROID', 612, 'phone_android');
    MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance = new MaterialIcon('PHONE_BLUETOOTH_SPEAKER', 613, 'phone_bluetooth_speaker');
    MaterialIcon$PHONE_FORWARDED_instance = new MaterialIcon('PHONE_FORWARDED', 614, 'phone_forwarded');
    MaterialIcon$PHONE_IN_TALK_instance = new MaterialIcon('PHONE_IN_TALK', 615, 'phone_in_talk');
    MaterialIcon$PHONE_IPHONE_instance = new MaterialIcon('PHONE_IPHONE', 616, 'phone_iphone ');
    MaterialIcon$PHONE_LOCKED_instance = new MaterialIcon('PHONE_LOCKED', 617, 'phone_locked ');
    MaterialIcon$PHONE_MISSED_instance = new MaterialIcon('PHONE_MISSED', 618, 'phone_missed ');
    MaterialIcon$PHONE_PAUSED_instance = new MaterialIcon('PHONE_PAUSED', 619, 'phone_paused ');
    MaterialIcon$PHONELINK_instance = new MaterialIcon('PHONELINK', 620, 'phonelink');
    MaterialIcon$PHONELINK_ERASE_instance = new MaterialIcon('PHONELINK_ERASE', 621, 'phonelink_erase');
    MaterialIcon$PHONELINK_LOCK_instance = new MaterialIcon('PHONELINK_LOCK', 622, 'phonelink_lock');
    MaterialIcon$PHONELINK_OFF_instance = new MaterialIcon('PHONELINK_OFF', 623, 'phonelink_off');
    MaterialIcon$PHONELINK_RING_instance = new MaterialIcon('PHONELINK_RING', 624, 'phonelink_ring');
    MaterialIcon$PHONELINK_SETUP_instance = new MaterialIcon('PHONELINK_SETUP', 625, 'phonelink_setup');
    MaterialIcon$PHOTO_instance = new MaterialIcon('PHOTO', 626, 'photo');
    MaterialIcon$PHOTO_ALBUM_instance = new MaterialIcon('PHOTO_ALBUM', 627, 'photo_album');
    MaterialIcon$PHOTO_CAMERA_instance = new MaterialIcon('PHOTO_CAMERA', 628, 'photo_camera ');
    MaterialIcon$PHOTO_FILTER_instance = new MaterialIcon('PHOTO_FILTER', 629, 'photo_filter ');
    MaterialIcon$PHOTO_LIBRARY_instance = new MaterialIcon('PHOTO_LIBRARY', 630, 'photo_library');
    MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance = new MaterialIcon('PHOTO_SIZE_SELECT_ACTUAL', 631, 'photo_size_select_actual');
    MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance = new MaterialIcon('PHOTO_SIZE_SELECT_LARGE', 632, 'photo_size_select_large');
    MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance = new MaterialIcon('PHOTO_SIZE_SELECT_SMALL', 633, 'photo_size_select_small');
    MaterialIcon$PICTURE_AS_PDF_instance = new MaterialIcon('PICTURE_AS_PDF', 634, 'picture_as_pdf');
    MaterialIcon$PICTURE_IN_PICTURE_instance = new MaterialIcon('PICTURE_IN_PICTURE', 635, 'picture_in_picture');
    MaterialIcon$PICTURE_IN_PICTURE_ALT_instance = new MaterialIcon('PICTURE_IN_PICTURE_ALT', 636, 'picture_in_picture_alt');
    MaterialIcon$PIE_CHART_instance = new MaterialIcon('PIE_CHART', 637, 'pie_chart');
    MaterialIcon$PIE_CHART_OUTLINED_instance = new MaterialIcon('PIE_CHART_OUTLINED', 638, 'pie_chart_outlined');
    MaterialIcon$PIN_DROP_instance = new MaterialIcon('PIN_DROP', 639, 'pin_drop');
    MaterialIcon$PLACE_instance = new MaterialIcon('PLACE', 640, 'place');
    MaterialIcon$PLAY_ARROW_instance = new MaterialIcon('PLAY_ARROW', 641, 'play_arrow');
    MaterialIcon$PLAY_CIRCLE_FILLED_instance = new MaterialIcon('PLAY_CIRCLE_FILLED', 642, 'play_circle_filled');
    MaterialIcon$PLAY_CIRCLE_OUTLINE_instance = new MaterialIcon('PLAY_CIRCLE_OUTLINE', 643, 'play_circle_outline');
    MaterialIcon$PLAY_FOR_WORK_instance = new MaterialIcon('PLAY_FOR_WORK', 644, 'play_for_work');
    MaterialIcon$PLAYLIST_ADD_instance = new MaterialIcon('PLAYLIST_ADD', 645, 'playlist_add ');
    MaterialIcon$PLAYLIST_ADD_CHECK_instance = new MaterialIcon('PLAYLIST_ADD_CHECK', 646, 'playlist_add_check');
    MaterialIcon$PLAYLIST_PLAY_instance = new MaterialIcon('PLAYLIST_PLAY', 647, 'playlist_play');
    MaterialIcon$PLUS_ONE_instance = new MaterialIcon('PLUS_ONE', 648, 'plus_one');
    MaterialIcon$POLL_instance = new MaterialIcon('POLL', 649, 'poll');
    MaterialIcon$POLYMER_instance = new MaterialIcon('POLYMER', 650, 'polymer');
    MaterialIcon$POOL_instance = new MaterialIcon('POOL', 651, 'pool');
    MaterialIcon$PORTABLE_WIFI_OFF_instance = new MaterialIcon('PORTABLE_WIFI_OFF', 652, 'portable_wifi_off');
    MaterialIcon$PORTRAIT_instance = new MaterialIcon('PORTRAIT', 653, 'portrait');
    MaterialIcon$POWER_instance = new MaterialIcon('POWER', 654, 'power');
    MaterialIcon$POWER_INPUT_instance = new MaterialIcon('POWER_INPUT', 655, 'power_input');
    MaterialIcon$POWER_SETTINGS_NEW_instance = new MaterialIcon('POWER_SETTINGS_NEW', 656, 'power_settings_new');
    MaterialIcon$PREGNANT_WOMAN_instance = new MaterialIcon('PREGNANT_WOMAN', 657, 'pregnant_woman');
    MaterialIcon$PRESENT_TO_ALL_instance = new MaterialIcon('PRESENT_TO_ALL', 658, 'present_to_all');
    MaterialIcon$PRINT_instance = new MaterialIcon('PRINT', 659, 'print');
    MaterialIcon$PRIORITY_HIGH_instance = new MaterialIcon('PRIORITY_HIGH', 660, 'priority_high');
    MaterialIcon$PUBLIC_instance = new MaterialIcon('PUBLIC', 661, 'public');
    MaterialIcon$PUBLISH_instance = new MaterialIcon('PUBLISH', 662, 'publish');
    MaterialIcon$QUERY_BUILDER_instance = new MaterialIcon('QUERY_BUILDER', 663, 'query_builder');
    MaterialIcon$QUESTION_ANSWER_instance = new MaterialIcon('QUESTION_ANSWER', 664, 'question_answer');
    MaterialIcon$QUEUE_instance = new MaterialIcon('QUEUE', 665, 'queue');
    MaterialIcon$QUEUE_MUSIC_instance = new MaterialIcon('QUEUE_MUSIC', 666, 'queue_music');
    MaterialIcon$QUEUE_PLAY_NEXT_instance = new MaterialIcon('QUEUE_PLAY_NEXT', 667, 'queue_play_next');
    MaterialIcon$RADIO_instance = new MaterialIcon('RADIO', 668, 'radio');
    MaterialIcon$RADIO_BUTTON_CHECKED_instance = new MaterialIcon('RADIO_BUTTON_CHECKED', 669, 'radio_button_checked');
    MaterialIcon$RADIO_BUTTON_UNCHECKED_instance = new MaterialIcon('RADIO_BUTTON_UNCHECKED', 670, 'radio_button_unchecked');
    MaterialIcon$RATE_REVIEW_instance = new MaterialIcon('RATE_REVIEW', 671, 'rate_review');
    MaterialIcon$RECEIPT_instance = new MaterialIcon('RECEIPT', 672, 'receipt');
    MaterialIcon$RECENT_ACTORS_instance = new MaterialIcon('RECENT_ACTORS', 673, 'recent_actors');
    MaterialIcon$RECORD_VOICE_OVER_instance = new MaterialIcon('RECORD_VOICE_OVER', 674, 'record_voice_over');
    MaterialIcon$RM_instance = new MaterialIcon('RM', 675, 'rm');
    MaterialIcon$REDO_instance = new MaterialIcon('REDO', 676, 'redo');
    MaterialIcon$REFRESH_instance = new MaterialIcon('REFRESH', 677, 'refresh');
    MaterialIcon$REMOVE_instance = new MaterialIcon('REMOVE', 678, 'remove');
    MaterialIcon$REMOVE_CIRCLE_instance = new MaterialIcon('REMOVE_CIRCLE', 679, 'remove_circle');
    MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance = new MaterialIcon('REMOVE_CIRCLE_OUTLINE', 680, 'remove_circle_outline');
    MaterialIcon$REMOVE_FROM_QUEUE_instance = new MaterialIcon('REMOVE_FROM_QUEUE', 681, 'remove_from_queue');
    MaterialIcon$REMOVE_RED_EYE_instance = new MaterialIcon('REMOVE_RED_EYE', 682, 'remove_red_eye');
    MaterialIcon$REMOVE_SHOPPING_CART_instance = new MaterialIcon('REMOVE_SHOPPING_CART', 683, 'remove_shopping_cart');
    MaterialIcon$REORDER_instance = new MaterialIcon('REORDER', 684, 'reorder');
    MaterialIcon$REPEAT_instance = new MaterialIcon('REPEAT', 685, 'repeat');
    MaterialIcon$REPEAT_ONE_instance = new MaterialIcon('REPEAT_ONE', 686, 'repeat_one');
    MaterialIcon$REPLAY_instance = new MaterialIcon('REPLAY', 687, 'replay');
    MaterialIcon$REPLAY_10_instance = new MaterialIcon('REPLAY_10', 688, 'replay_10');
    MaterialIcon$REPLAY_30_instance = new MaterialIcon('REPLAY_30', 689, 'replay_30');
    MaterialIcon$REPLAY_5_instance = new MaterialIcon('REPLAY_5', 690, 'replay_5');
    MaterialIcon$REPLY_instance = new MaterialIcon('REPLY', 691, 'reply');
    MaterialIcon$REPLY_ALL_instance = new MaterialIcon('REPLY_ALL', 692, 'reply_all');
    MaterialIcon$REPORT_instance = new MaterialIcon('REPORT', 693, 'report');
    MaterialIcon$REPORT_PROBLEM_instance = new MaterialIcon('REPORT_PROBLEM', 694, 'report_problem');
    MaterialIcon$RESTAURANT_instance = new MaterialIcon('RESTAURANT', 695, 'restaurant');
    MaterialIcon$RESTAURANT_MENU_instance = new MaterialIcon('RESTAURANT_MENU', 696, 'restaurant_menu');
    MaterialIcon$RESTORE_instance = new MaterialIcon('RESTORE', 697, 'restore');
    MaterialIcon$RESTORE_PAGE_instance = new MaterialIcon('RESTORE_PAGE', 698, 'restore_page ');
    MaterialIcon$RING_VOLUME_instance = new MaterialIcon('RING_VOLUME', 699, 'ring_volume');
    MaterialIcon$ROOM_instance = new MaterialIcon('ROOM', 700, 'room');
    MaterialIcon$ROOM_SERVICE_instance = new MaterialIcon('ROOM_SERVICE', 701, 'room_service ');
    MaterialIcon$ROTATE_90_DEGREES_CCW_instance = new MaterialIcon('ROTATE_90_DEGREES_CCW', 702, 'rotate_90_degrees_ccw');
    MaterialIcon$ROTATE_LEFT_instance = new MaterialIcon('ROTATE_LEFT', 703, 'rotate_left');
    MaterialIcon$ROTATE_RIGHT_instance = new MaterialIcon('ROTATE_RIGHT', 704, 'rotate_right ');
    MaterialIcon$ROUNDED_CORNER_instance = new MaterialIcon('ROUNDED_CORNER', 705, 'rounded_corner');
    MaterialIcon$ROUTER_instance = new MaterialIcon('ROUTER', 706, 'router');
    MaterialIcon$ROWING_instance = new MaterialIcon('ROWING', 707, 'rowing');
    MaterialIcon$RSS_FEED_instance = new MaterialIcon('RSS_FEED', 708, 'rss_feed');
    MaterialIcon$RV_HOOKUP_instance = new MaterialIcon('RV_HOOKUP', 709, 'rv_hookup');
    MaterialIcon$SATELLITE_instance = new MaterialIcon('SATELLITE', 710, 'satellite');
    MaterialIcon$SAVE_instance = new MaterialIcon('SAVE', 711, 'save');
    MaterialIcon$SCANNER_instance = new MaterialIcon('SCANNER', 712, 'scanner');
    MaterialIcon$SCHEDULE_instance = new MaterialIcon('SCHEDULE', 713, 'schedule');
    MaterialIcon$SCHOOL_instance = new MaterialIcon('SCHOOL', 714, 'school');
    MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance = new MaterialIcon('SCREEN_LOCK_LANDSCAPE', 715, 'screen_lock_landscape');
    MaterialIcon$SCREEN_LOCK_PORTRAIT_instance = new MaterialIcon('SCREEN_LOCK_PORTRAIT', 716, 'screen_lock_portrait');
    MaterialIcon$SCREEN_LOCK_ROTATION_instance = new MaterialIcon('SCREEN_LOCK_ROTATION', 717, 'screen_lock_rotation');
    MaterialIcon$SCREEN_ROTATION_instance = new MaterialIcon('SCREEN_ROTATION', 718, 'screen_rotation');
    MaterialIcon$SCREEN_SHARE_instance = new MaterialIcon('SCREEN_SHARE', 719, 'screen_share ');
    MaterialIcon$SD_CARD_instance = new MaterialIcon('SD_CARD', 720, 'sd_card');
    MaterialIcon$SD_STORAGE_instance = new MaterialIcon('SD_STORAGE', 721, 'sd_storage');
    MaterialIcon$SEARCH_instance = new MaterialIcon('SEARCH', 722, 'search');
    MaterialIcon$SECURITY_instance = new MaterialIcon('SECURITY', 723, 'security');
    MaterialIcon$SELECT_ALL_instance = new MaterialIcon('SELECT_ALL', 724, 'select_all');
    MaterialIcon$SEND_instance = new MaterialIcon('SEND', 725, 'send');
    MaterialIcon$SENTIMENT_DISSATISFIED_instance = new MaterialIcon('SENTIMENT_DISSATISFIED', 726, 'sentiment_dissatisfied');
    MaterialIcon$SENTIMENT_NEUTRAL_instance = new MaterialIcon('SENTIMENT_NEUTRAL', 727, 'sentiment_neutral');
    MaterialIcon$SENTIMENT_SATISFIED_instance = new MaterialIcon('SENTIMENT_SATISFIED', 728, 'sentiment_satisfied');
    MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance = new MaterialIcon('SENTIMENT_VERY_DISSATISFIED', 729, 'sentiment_very_dissatisfied');
    MaterialIcon$SENTIMENT_VERY_SATISFIED_instance = new MaterialIcon('SENTIMENT_VERY_SATISFIED', 730, 'sentiment_very_satisfied');
    MaterialIcon$SETTINGS_instance = new MaterialIcon('SETTINGS', 731, 'settings');
    MaterialIcon$SETTINGS_APPLICATIONS_instance = new MaterialIcon('SETTINGS_APPLICATIONS', 732, 'settings_applications');
    MaterialIcon$SETTINGS_BACKUP_RESTORE_instance = new MaterialIcon('SETTINGS_BACKUP_RESTORE', 733, 'settings_backup_restore');
    MaterialIcon$SETTINGS_BLUETOOTH_instance = new MaterialIcon('SETTINGS_BLUETOOTH', 734, 'settings_bluetooth');
    MaterialIcon$SETTINGS_BRIGHTNESS_instance = new MaterialIcon('SETTINGS_BRIGHTNESS', 735, 'settings_brightness');
    MaterialIcon$SETTINGS_CELL_instance = new MaterialIcon('SETTINGS_CELL', 736, 'settings_cell');
    MaterialIcon$SETTINGS_ETHERNET_instance = new MaterialIcon('SETTINGS_ETHERNET', 737, 'settings_ethernet');
    MaterialIcon$SETTINGS_INPUT_ANTENNA_instance = new MaterialIcon('SETTINGS_INPUT_ANTENNA', 738, 'settings_input_antenna');
    MaterialIcon$SETTINGS_INPUT_COMPONENT_instance = new MaterialIcon('SETTINGS_INPUT_COMPONENT', 739, 'settings_input_component');
    MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance = new MaterialIcon('SETTINGS_INPUT_COMPOSITE', 740, 'settings_input_composite');
    MaterialIcon$SETTINGS_INPUT_HDMI_instance = new MaterialIcon('SETTINGS_INPUT_HDMI', 741, 'settings_input_hdmi');
    MaterialIcon$SETTINGS_INPUT_SVIDEO_instance = new MaterialIcon('SETTINGS_INPUT_SVIDEO', 742, 'settings_input_svideo');
    MaterialIcon$SETTINGS_OVERSCAN_instance = new MaterialIcon('SETTINGS_OVERSCAN', 743, 'settings_overscan');
    MaterialIcon$SETTINGS_PHONE_instance = new MaterialIcon('SETTINGS_PHONE', 744, 'settings_phone');
    MaterialIcon$SETTINGS_POWER_instance = new MaterialIcon('SETTINGS_POWER', 745, 'settings_power');
    MaterialIcon$SETTINGS_REMOTE_instance = new MaterialIcon('SETTINGS_REMOTE', 746, 'settings_remote');
    MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance = new MaterialIcon('SETTINGS_SYSTEM_DAYDREAM', 747, 'settings_system_daydream');
    MaterialIcon$SETTINGS_VOICE_instance = new MaterialIcon('SETTINGS_VOICE', 748, 'settings_voice');
    MaterialIcon$SHARE_instance = new MaterialIcon('SHARE', 749, 'share');
    MaterialIcon$SHOP_instance = new MaterialIcon('SHOP', 750, 'shop');
    MaterialIcon$SHOP_TWO_instance = new MaterialIcon('SHOP_TWO', 751, 'shop_two');
    MaterialIcon$SHOPPING_BASKET_instance = new MaterialIcon('SHOPPING_BASKET', 752, 'shopping_basket');
    MaterialIcon$SHOPPING_CART_instance = new MaterialIcon('SHOPPING_CART', 753, 'shopping_cart');
    MaterialIcon$SHORT_TEXT_instance = new MaterialIcon('SHORT_TEXT', 754, 'short_text');
    MaterialIcon$SHOW_CHART_instance = new MaterialIcon('SHOW_CHART', 755, 'show_chart');
    MaterialIcon$SHUFFLE_instance = new MaterialIcon('SHUFFLE', 756, 'shuffle');
    MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance = new MaterialIcon('SIGNAL_CELLULAR_4_BAR', 757, 'signal_cellular_4_bar');
    MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance = new MaterialIcon('SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR', 758, 'signal_cellular_connected_no_internet_4_bar');
    MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance = new MaterialIcon('SIGNAL_CELLULAR_NO_SIM', 759, 'signal_cellular_no_sim');
    MaterialIcon$SIGNAL_CELLULAR_NULL_instance = new MaterialIcon('SIGNAL_CELLULAR_NULL', 760, 'signal_cellular_null');
    MaterialIcon$SIGNAL_CELLULAR_OFF_instance = new MaterialIcon('SIGNAL_CELLULAR_OFF', 761, 'signal_cellular_off');
    MaterialIcon$SIGNAL_WIFI_4_BAR_instance = new MaterialIcon('SIGNAL_WIFI_4_BAR', 762, 'signal_wifi_4_bar');
    MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance = new MaterialIcon('SIGNAL_WIFI_4_BAR_LOCK', 763, 'signal_wifi_4_bar_lock');
    MaterialIcon$SIGNAL_WIFI_OFF_instance = new MaterialIcon('SIGNAL_WIFI_OFF', 764, 'signal_wifi_off');
    MaterialIcon$SIM_CARD_instance = new MaterialIcon('SIM_CARD', 765, 'sim_card');
    MaterialIcon$SIM_CARD_ALERT_instance = new MaterialIcon('SIM_CARD_ALERT', 766, 'sim_card_alert');
    MaterialIcon$SKIP_NEXT_instance = new MaterialIcon('SKIP_NEXT', 767, 'skip_next');
    MaterialIcon$SKIP_PREVIOUS_instance = new MaterialIcon('SKIP_PREVIOUS', 768, 'skip_previous');
    MaterialIcon$SLIDESHOW_instance = new MaterialIcon('SLIDESHOW', 769, 'slideshow');
    MaterialIcon$SLOW_MOTION_VIDEO_instance = new MaterialIcon('SLOW_MOTION_VIDEO', 770, 'slow_motion_video');
    MaterialIcon$SMARTPHONE_instance = new MaterialIcon('SMARTPHONE', 771, 'smartphone');
    MaterialIcon$SMOKE_FREE_instance = new MaterialIcon('SMOKE_FREE', 772, 'smoke_free');
    MaterialIcon$SMOKING_ROOMS_instance = new MaterialIcon('SMOKING_ROOMS', 773, 'smoking_rooms');
    MaterialIcon$SMS_instance = new MaterialIcon('SMS', 774, 'sms');
    MaterialIcon$SMS_FAILED_instance = new MaterialIcon('SMS_FAILED', 775, 'sms_failed');
    MaterialIcon$SNOOZE_instance = new MaterialIcon('SNOOZE', 776, 'snooze');
    MaterialIcon$SORT_instance = new MaterialIcon('SORT', 777, 'sort');
    MaterialIcon$SORT_BY_ALPHA_instance = new MaterialIcon('SORT_BY_ALPHA', 778, 'sort_by_alpha');
    MaterialIcon$SPA_instance = new MaterialIcon('SPA', 779, 'spa');
    MaterialIcon$SPACE_BAR_instance = new MaterialIcon('SPACE_BAR', 780, 'space_bar');
    MaterialIcon$SPEAKER_instance = new MaterialIcon('SPEAKER', 781, 'speaker');
    MaterialIcon$SPEAKER_GROUP_instance = new MaterialIcon('SPEAKER_GROUP', 782, 'speaker_group');
    MaterialIcon$SPEAKER_NOTES_instance = new MaterialIcon('SPEAKER_NOTES', 783, 'speaker_notes');
    MaterialIcon$SPEAKER_NOTES_OFF_instance = new MaterialIcon('SPEAKER_NOTES_OFF', 784, 'speaker_notes_off');
    MaterialIcon$SPEAKER_PHONE_instance = new MaterialIcon('SPEAKER_PHONE', 785, 'speaker_phone');
    MaterialIcon$SPELLCHECK_instance = new MaterialIcon('SPELLCHECK', 786, 'spellcheck');
    MaterialIcon$STAR_instance = new MaterialIcon('STAR', 787, 'star');
    MaterialIcon$STAR_BORDER_instance = new MaterialIcon('STAR_BORDER', 788, 'star_border');
    MaterialIcon$STAR_HALF_instance = new MaterialIcon('STAR_HALF', 789, 'star_half');
    MaterialIcon$STARS_instance = new MaterialIcon('STARS', 790, 'stars');
    MaterialIcon$STAY_CURRENT_LANDSCAPE_instance = new MaterialIcon('STAY_CURRENT_LANDSCAPE', 791, 'stay_current_landscape');
    MaterialIcon$STAY_CURRENT_PORTRAIT_instance = new MaterialIcon('STAY_CURRENT_PORTRAIT', 792, 'stay_current_portrait');
    MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance = new MaterialIcon('STAY_PRIMARY_LANDSCAPE', 793, 'stay_primary_landscape');
    MaterialIcon$STAY_PRIMARY_PORTRAIT_instance = new MaterialIcon('STAY_PRIMARY_PORTRAIT', 794, 'stay_primary_portrait');
    MaterialIcon$STOP_instance = new MaterialIcon('STOP', 795, 'stop');
    MaterialIcon$STOP_SCREEN_SHARE_instance = new MaterialIcon('STOP_SCREEN_SHARE', 796, 'stop_screen_share');
    MaterialIcon$STORAGE_instance = new MaterialIcon('STORAGE', 797, 'storage');
    MaterialIcon$STORE_instance = new MaterialIcon('STORE', 798, 'store');
    MaterialIcon$STORE_MALL_DIRECTORY_instance = new MaterialIcon('STORE_MALL_DIRECTORY', 799, 'store_mall_directory');
    MaterialIcon$STRAIGHTEN_instance = new MaterialIcon('STRAIGHTEN', 800, 'straighten');
    MaterialIcon$STREETVIEW_instance = new MaterialIcon('STREETVIEW', 801, 'streetview');
    MaterialIcon$STRIKETHROUGH_S_instance = new MaterialIcon('STRIKETHROUGH_S', 802, 'strikethrough_s');
    MaterialIcon$STYLE_instance = new MaterialIcon('STYLE', 803, 'style');
    MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance = new MaterialIcon('SUBDIRECTORY_ARROW_LEFT', 804, 'subdirectory_arrow_left');
    MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance = new MaterialIcon('SUBDIRECTORY_ARROW_RIGHT', 805, 'subdirectory_arrow_right');
    MaterialIcon$SUBJECT_instance = new MaterialIcon('SUBJECT', 806, 'subject');
    MaterialIcon$SUBSCRIPTIONS_instance = new MaterialIcon('SUBSCRIPTIONS', 807, 'subscriptions');
    MaterialIcon$SUBTITLES_instance = new MaterialIcon('SUBTITLES', 808, 'subtitles');
    MaterialIcon$SUBWAY_instance = new MaterialIcon('SUBWAY', 809, 'subway');
    MaterialIcon$SUPERVISOR_ACCOUNT_instance = new MaterialIcon('SUPERVISOR_ACCOUNT', 810, 'supervisor_account');
    MaterialIcon$SURROUND_SOUND_instance = new MaterialIcon('SURROUND_SOUND', 811, 'surround_sound');
    MaterialIcon$SWAP_CALLS_instance = new MaterialIcon('SWAP_CALLS', 812, 'swap_calls');
    MaterialIcon$SWAP_HORIZ_instance = new MaterialIcon('SWAP_HORIZ', 813, 'swap_horiz');
    MaterialIcon$SWAP_VERT_instance = new MaterialIcon('SWAP_VERT', 814, 'swap_vert');
    MaterialIcon$SWAP_VERTICAL_CIRCLE_instance = new MaterialIcon('SWAP_VERTICAL_CIRCLE', 815, 'swap_vertical_circle');
    MaterialIcon$SWITCH_CAMERA_instance = new MaterialIcon('SWITCH_CAMERA', 816, 'switch_camera');
    MaterialIcon$SWITCH_VIDEO_instance = new MaterialIcon('SWITCH_VIDEO', 817, 'switch_video ');
    MaterialIcon$SYNC_instance = new MaterialIcon('SYNC', 818, 'sync');
    MaterialIcon$SYNC_DISABLED_instance = new MaterialIcon('SYNC_DISABLED', 819, 'sync_disabled');
    MaterialIcon$SYNC_PROBLEM_instance = new MaterialIcon('SYNC_PROBLEM', 820, 'sync_problem ');
    MaterialIcon$SYSTEM_UPDATE_instance = new MaterialIcon('SYSTEM_UPDATE', 821, 'system_update');
    MaterialIcon$SYSTEM_UPDATE_ALT_instance = new MaterialIcon('SYSTEM_UPDATE_ALT', 822, 'system_update_alt');
    MaterialIcon$TAB_instance = new MaterialIcon('TAB', 823, 'tab');
    MaterialIcon$TAB_UNSELECTED_instance = new MaterialIcon('TAB_UNSELECTED', 824, 'tab_unselected');
    MaterialIcon$TABLET_instance = new MaterialIcon('TABLET', 825, 'tablet');
    MaterialIcon$TABLET_ANDROID_instance = new MaterialIcon('TABLET_ANDROID', 826, 'tablet_android');
    MaterialIcon$TABLET_MAC_instance = new MaterialIcon('TABLET_MAC', 827, 'tablet_mac');
    MaterialIcon$TAG_FACES_instance = new MaterialIcon('TAG_FACES', 828, 'tag_faces');
    MaterialIcon$TAP_AND_PLAY_instance = new MaterialIcon('TAP_AND_PLAY', 829, 'tap_and_play ');
    MaterialIcon$TERRAIN_instance = new MaterialIcon('TERRAIN', 830, 'terrain');
    MaterialIcon$TEXT_FIELDS_instance = new MaterialIcon('TEXT_FIELDS', 831, 'text_fields');
    MaterialIcon$TEXT_FORMAT_instance = new MaterialIcon('TEXT_FORMAT', 832, 'text_format');
    MaterialIcon$TEXTSMS_instance = new MaterialIcon('TEXTSMS', 833, 'textsms');
    MaterialIcon$TEXTURE_instance = new MaterialIcon('TEXTURE', 834, 'texture');
    MaterialIcon$THEATERS_instance = new MaterialIcon('THEATERS', 835, 'theaters');
    MaterialIcon$THUMB_DOWN_instance = new MaterialIcon('THUMB_DOWN', 836, 'thumb_down');
    MaterialIcon$THUMB_UP_instance = new MaterialIcon('THUMB_UP', 837, 'thumb_up');
    MaterialIcon$THUMBS_UP_DOWN_instance = new MaterialIcon('THUMBS_UP_DOWN', 838, 'thumbs_up_down');
    MaterialIcon$TIME_TO_LEAVE_instance = new MaterialIcon('TIME_TO_LEAVE', 839, 'time_to_leave');
    MaterialIcon$TIMELAPSE_instance = new MaterialIcon('TIMELAPSE', 840, 'timelapse');
    MaterialIcon$TIMELINE_instance = new MaterialIcon('TIMELINE', 841, 'timeline');
    MaterialIcon$TIMER_instance = new MaterialIcon('TIMER', 842, 'timer');
    MaterialIcon$TIMER_10_instance = new MaterialIcon('TIMER_10', 843, 'timer_10');
    MaterialIcon$TIMER_3_instance = new MaterialIcon('TIMER_3', 844, 'timer_3');
    MaterialIcon$TIMER_OFF_instance = new MaterialIcon('TIMER_OFF', 845, 'timer_off');
    MaterialIcon$TITLE_instance = new MaterialIcon('TITLE', 846, 'title');
    MaterialIcon$TOC_instance = new MaterialIcon('TOC', 847, 'toc');
    MaterialIcon$TODAY_instance = new MaterialIcon('TODAY', 848, 'today');
    MaterialIcon$TOLL_instance = new MaterialIcon('TOLL', 849, 'toll');
    MaterialIcon$TONALITY_instance = new MaterialIcon('TONALITY', 850, 'tonality');
    MaterialIcon$TOUCH_APP_instance = new MaterialIcon('TOUCH_APP', 851, 'touch_app');
    MaterialIcon$TOYS_instance = new MaterialIcon('TOYS', 852, 'toys');
    MaterialIcon$TRACK_CHANGES_instance = new MaterialIcon('TRACK_CHANGES', 853, 'track_changes');
    MaterialIcon$TRAFFIC_instance = new MaterialIcon('TRAFFIC', 854, 'traffic');
    MaterialIcon$TRAIN_instance = new MaterialIcon('TRAIN', 855, 'train');
    MaterialIcon$TRAM_instance = new MaterialIcon('TRAM', 856, 'tram');
    MaterialIcon$TRANSFER_WITHIN_A_STATION_instance = new MaterialIcon('TRANSFER_WITHIN_A_STATION', 857, 'transfer_within_a_station');
    MaterialIcon$TRANSFORM_instance = new MaterialIcon('TRANSFORM', 858, 'transform');
    MaterialIcon$TRANSLATE_instance = new MaterialIcon('TRANSLATE', 859, 'translate');
    MaterialIcon$TRENDING_DOWN_instance = new MaterialIcon('TRENDING_DOWN', 860, 'trending_down');
    MaterialIcon$TRENDING_FLAT_instance = new MaterialIcon('TRENDING_FLAT', 861, 'trending_flat');
    MaterialIcon$TRENDING_UP_instance = new MaterialIcon('TRENDING_UP', 862, 'trending_up');
    MaterialIcon$TUNE_instance = new MaterialIcon('TUNE', 863, 'tune');
    MaterialIcon$TURNED_IN_instance = new MaterialIcon('TURNED_IN', 864, 'turned_in');
    MaterialIcon$TURNED_IN_NOT_instance = new MaterialIcon('TURNED_IN_NOT', 865, 'turned_in_not');
    MaterialIcon$TV_instance = new MaterialIcon('TV', 866, 'tv');
    MaterialIcon$UNARCHIVE_instance = new MaterialIcon('UNARCHIVE', 867, 'unarchive');
    MaterialIcon$UNDO_instance = new MaterialIcon('UNDO', 868, 'undo');
    MaterialIcon$UNFOLD_LESS_instance = new MaterialIcon('UNFOLD_LESS', 869, 'unfold_less');
    MaterialIcon$UNFOLD_MORE_instance = new MaterialIcon('UNFOLD_MORE', 870, 'unfold_more');
    MaterialIcon$UPDATE_instance = new MaterialIcon('UPDATE', 871, 'update');
    MaterialIcon$USB_instance = new MaterialIcon('USB', 872, 'usb');
    MaterialIcon$VERIFIED_USER_instance = new MaterialIcon('VERIFIED_USER', 873, 'verified_user');
    MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance = new MaterialIcon('VERTICAL_ALIGN_BOTTOM', 874, 'vertical_align_bottom');
    MaterialIcon$VERTICAL_ALIGN_CENTER_instance = new MaterialIcon('VERTICAL_ALIGN_CENTER', 875, 'vertical_align_center');
    MaterialIcon$VERTICAL_ALIGN_TOP_instance = new MaterialIcon('VERTICAL_ALIGN_TOP', 876, 'vertical_align_top');
    MaterialIcon$VIBRATION_instance = new MaterialIcon('VIBRATION', 877, 'vibration');
    MaterialIcon$VIDEO_CALL_instance = new MaterialIcon('VIDEO_CALL', 878, 'video_call');
    MaterialIcon$VIDEO_LABEL_instance = new MaterialIcon('VIDEO_LABEL', 879, 'video_label');
    MaterialIcon$VIDEO_LIBRARY_instance = new MaterialIcon('VIDEO_LIBRARY', 880, 'video_library');
    MaterialIcon$VIDEOCAM_instance = new MaterialIcon('VIDEOCAM', 881, 'videocam');
    MaterialIcon$VIDEOCAM_OFF_instance = new MaterialIcon('VIDEOCAM_OFF', 882, 'videocam_off ');
    MaterialIcon$VIDEOGAME_ASSET_instance = new MaterialIcon('VIDEOGAME_ASSET', 883, 'videogame_asset');
    MaterialIcon$VIEW_AGENDA_instance = new MaterialIcon('VIEW_AGENDA', 884, 'view_agenda');
    MaterialIcon$VIEW_ARRAY_instance = new MaterialIcon('VIEW_ARRAY', 885, 'view_array');
    MaterialIcon$VIEW_CAROUSEL_instance = new MaterialIcon('VIEW_CAROUSEL', 886, 'view_carousel');
    MaterialIcon$VIEW_COLUMN_instance = new MaterialIcon('VIEW_COLUMN', 887, 'view_column');
    MaterialIcon$VIEW_COMFY_instance = new MaterialIcon('VIEW_COMFY', 888, 'view_comfy');
    MaterialIcon$VIEW_COMPACT_instance = new MaterialIcon('VIEW_COMPACT', 889, 'view_compact ');
    MaterialIcon$VIEW_DAY_instance = new MaterialIcon('VIEW_DAY', 890, 'view_day');
    MaterialIcon$VIEW_HEADLINE_instance = new MaterialIcon('VIEW_HEADLINE', 891, 'view_headline');
    MaterialIcon$VIEW_LIST_instance = new MaterialIcon('VIEW_LIST', 892, 'view_list');
    MaterialIcon$VIEW_MODULE_instance = new MaterialIcon('VIEW_MODULE', 893, 'view_module');
    MaterialIcon$VIEW_QUILT_instance = new MaterialIcon('VIEW_QUILT', 894, 'view_quilt');
    MaterialIcon$VIEW_STREAM_instance = new MaterialIcon('VIEW_STREAM', 895, 'view_stream');
    MaterialIcon$VIEW_WEEK_instance = new MaterialIcon('VIEW_WEEK', 896, 'view_week');
    MaterialIcon$VIGNETTE_instance = new MaterialIcon('VIGNETTE', 897, 'vignette');
    MaterialIcon$VISIBILITY_instance = new MaterialIcon('VISIBILITY', 898, 'visibility');
    MaterialIcon$VISIBILITY_OFF_instance = new MaterialIcon('VISIBILITY_OFF', 899, 'visibility_off');
    MaterialIcon$VOICE_CHAT_instance = new MaterialIcon('VOICE_CHAT', 900, 'voice_chat');
    MaterialIcon$VOICEMAIL_instance = new MaterialIcon('VOICEMAIL', 901, 'voicemail');
    MaterialIcon$VOLUME_DOWN_instance = new MaterialIcon('VOLUME_DOWN', 902, 'volume_down');
    MaterialIcon$VOLUME_MUTE_instance = new MaterialIcon('VOLUME_MUTE', 903, 'volume_mute');
    MaterialIcon$VOLUME_OFF_instance = new MaterialIcon('VOLUME_OFF', 904, 'volume_off');
    MaterialIcon$VOLUME_UP_instance = new MaterialIcon('VOLUME_UP', 905, 'volume_up');
    MaterialIcon$VPN_KEY_instance = new MaterialIcon('VPN_KEY', 906, 'vpn_key');
    MaterialIcon$VPN_LOCK_instance = new MaterialIcon('VPN_LOCK', 907, 'vpn_lock');
    MaterialIcon$WALLPAPER_instance = new MaterialIcon('WALLPAPER', 908, 'wallpaper');
    MaterialIcon$WARNING_instance = new MaterialIcon('WARNING', 909, 'warning');
    MaterialIcon$WATCH_instance = new MaterialIcon('WATCH', 910, 'watch');
    MaterialIcon$WATCH_LATER_instance = new MaterialIcon('WATCH_LATER', 911, 'watch_later');
    MaterialIcon$WB_AUTO_instance = new MaterialIcon('WB_AUTO', 912, 'wb_auto');
    MaterialIcon$WB_CLOUDY_instance = new MaterialIcon('WB_CLOUDY', 913, 'wb_cloudy');
    MaterialIcon$WB_INCANDESCENT_instance = new MaterialIcon('WB_INCANDESCENT', 914, 'wb_incandescent');
    MaterialIcon$WB_IRIDESCENT_instance = new MaterialIcon('WB_IRIDESCENT', 915, 'wb_iridescent');
    MaterialIcon$WB_SUNNY_instance = new MaterialIcon('WB_SUNNY', 916, 'wb_sunny');
    MaterialIcon$WC_instance = new MaterialIcon('WC', 917, 'wc');
    MaterialIcon$WEB_instance = new MaterialIcon('WEB', 918, 'web');
    MaterialIcon$WEB_ASSET_instance = new MaterialIcon('WEB_ASSET', 919, 'web_asset');
    MaterialIcon$WEEKEND_instance = new MaterialIcon('WEEKEND', 920, 'weekend');
    MaterialIcon$WHATSHOT_instance = new MaterialIcon('WHATSHOT', 921, 'whatshot');
    MaterialIcon$WIDGETS_instance = new MaterialIcon('WIDGETS', 922, 'widgets');
    MaterialIcon$WIFI_instance = new MaterialIcon('WIFI', 923, 'wifi');
    MaterialIcon$WIFI_LOCK_instance = new MaterialIcon('WIFI_LOCK', 924, 'wifi_lock');
    MaterialIcon$WIFI_TETHERING_instance = new MaterialIcon('WIFI_TETHERING', 925, 'wifi_tethering');
    MaterialIcon$WORK_instance = new MaterialIcon('WORK', 926, 'work');
    MaterialIcon$WRAP_TEXT_instance = new MaterialIcon('WRAP_TEXT', 927, 'wrap_text');
    MaterialIcon$YOUTUBE_SEARCHED_FOR_instance = new MaterialIcon('YOUTUBE_SEARCHED_FOR', 928, 'youtube_searched_for');
    MaterialIcon$ZOOM_IN_instance = new MaterialIcon('ZOOM_IN', 929, 'zoom_in');
    MaterialIcon$ZOOM_OUT_instance = new MaterialIcon('ZOOM_OUT', 930, 'zoom_out');
    MaterialIcon$ZOOM_OUT_MAP_instance = new MaterialIcon('ZOOM_OUT_MAP', 931, 'zoom_out_map ');
  }
  var MaterialIcon$ROTATION_3D_instance;
  function MaterialIcon$ROTATION_3D_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATION_3D_instance;
  }
  var MaterialIcon$AC_UNIT_instance;
  function MaterialIcon$AC_UNIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AC_UNIT_instance;
  }
  var MaterialIcon$ACCESS_ALARM_instance;
  function MaterialIcon$ACCESS_ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_ALARM_instance;
  }
  var MaterialIcon$ACCESS_ALARMS_instance;
  function MaterialIcon$ACCESS_ALARMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_ALARMS_instance;
  }
  var MaterialIcon$ACCESS_TIME_instance;
  function MaterialIcon$ACCESS_TIME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESS_TIME_instance;
  }
  var MaterialIcon$ACCESSIBILITY_instance;
  function MaterialIcon$ACCESSIBILITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESSIBILITY_instance;
  }
  var MaterialIcon$ACCESSIBLE_instance;
  function MaterialIcon$ACCESSIBLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCESSIBLE_instance;
  }
  var MaterialIcon$ACCOUNT_BALANCE_instance;
  function MaterialIcon$ACCOUNT_BALANCE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BALANCE_instance;
  }
  var MaterialIcon$ACCOUNT_BALANCE_WALLET_instance;
  function MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BALANCE_WALLET_instance;
  }
  var MaterialIcon$ACCOUNT_BOX_instance;
  function MaterialIcon$ACCOUNT_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_BOX_instance;
  }
  var MaterialIcon$ACCOUNT_CIRCLE_instance;
  function MaterialIcon$ACCOUNT_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ACCOUNT_CIRCLE_instance;
  }
  var MaterialIcon$ADB_instance;
  function MaterialIcon$ADB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADB_instance;
  }
  var MaterialIcon$ADD_instance;
  function MaterialIcon$ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_instance;
  }
  var MaterialIcon$ADD_A_PHOTO_instance;
  function MaterialIcon$ADD_A_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_A_PHOTO_instance;
  }
  var MaterialIcon$ADD_ALARM_instance;
  function MaterialIcon$ADD_ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_ALARM_instance;
  }
  var MaterialIcon$ADD_ALERT_instance;
  function MaterialIcon$ADD_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_ALERT_instance;
  }
  var MaterialIcon$ADD_BOX_instance;
  function MaterialIcon$ADD_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_BOX_instance;
  }
  var MaterialIcon$ADD_CIRCLE_instance;
  function MaterialIcon$ADD_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_CIRCLE_instance;
  }
  var MaterialIcon$ADD_CIRCLE_OUTLINE_instance;
  function MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$ADD_LOCATION_instance;
  function MaterialIcon$ADD_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_LOCATION_instance;
  }
  var MaterialIcon$ADD_SHOPPING_CART_instance;
  function MaterialIcon$ADD_SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_SHOPPING_CART_instance;
  }
  var MaterialIcon$ADD_TO_PHOTOS_instance;
  function MaterialIcon$ADD_TO_PHOTOS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_TO_PHOTOS_instance;
  }
  var MaterialIcon$ADD_TO_QUEUE_instance;
  function MaterialIcon$ADD_TO_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADD_TO_QUEUE_instance;
  }
  var MaterialIcon$ADJUST_instance;
  function MaterialIcon$ADJUST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ADJUST_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_FLAT_instance;
  function MaterialIcon$AIRLINE_SEAT_FLAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_FLAT_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance;
  function MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance;
  function MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance;
  function MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance;
  function MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_instance;
  }
  var MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance;
  function MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_instance;
  }
  var MaterialIcon$AIRPLANEMODE_ACTIVE_instance;
  function MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLANEMODE_ACTIVE_instance;
  }
  var MaterialIcon$AIRPLANEMODE_INACTIVE_instance;
  function MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLANEMODE_INACTIVE_instance;
  }
  var MaterialIcon$AIRPLAY_instance;
  function MaterialIcon$AIRPLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPLAY_instance;
  }
  var MaterialIcon$AIRPORT_SHUTTLE_instance;
  function MaterialIcon$AIRPORT_SHUTTLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AIRPORT_SHUTTLE_instance;
  }
  var MaterialIcon$ALARM_instance;
  function MaterialIcon$ALARM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_instance;
  }
  var MaterialIcon$ALARM_ADD_instance;
  function MaterialIcon$ALARM_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_ADD_instance;
  }
  var MaterialIcon$ALARM_OFF_instance;
  function MaterialIcon$ALARM_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_OFF_instance;
  }
  var MaterialIcon$ALARM_ON_instance;
  function MaterialIcon$ALARM_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALARM_ON_instance;
  }
  var MaterialIcon$ALBUM_instance;
  function MaterialIcon$ALBUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALBUM_instance;
  }
  var MaterialIcon$ALL_INCLUSIVE_instance;
  function MaterialIcon$ALL_INCLUSIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALL_INCLUSIVE_instance;
  }
  var MaterialIcon$ALL_OUT_instance;
  function MaterialIcon$ALL_OUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ALL_OUT_instance;
  }
  var MaterialIcon$ANDROID_instance;
  function MaterialIcon$ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ANDROID_instance;
  }
  var MaterialIcon$ANNOUNCEMENT_instance;
  function MaterialIcon$ANNOUNCEMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ANNOUNCEMENT_instance;
  }
  var MaterialIcon$APPS_instance;
  function MaterialIcon$APPS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$APPS_instance;
  }
  var MaterialIcon$ARCHIVE_instance;
  function MaterialIcon$ARCHIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARCHIVE_instance;
  }
  var MaterialIcon$ARROW_BACK_instance;
  function MaterialIcon$ARROW_BACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_BACK_instance;
  }
  var MaterialIcon$ARROW_DOWNWARD_instance;
  function MaterialIcon$ARROW_DOWNWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DOWNWARD_instance;
  }
  var MaterialIcon$ARROW_DROP_DOWN_instance;
  function MaterialIcon$ARROW_DROP_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_DOWN_instance;
  }
  var MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance;
  function MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_DOWN_CIRCLE_instance;
  }
  var MaterialIcon$ARROW_DROP_UP_instance;
  function MaterialIcon$ARROW_DROP_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_DROP_UP_instance;
  }
  var MaterialIcon$ARROW_FORWARD_instance;
  function MaterialIcon$ARROW_FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_FORWARD_instance;
  }
  var MaterialIcon$ARROW_UPWARD_instance;
  function MaterialIcon$ARROW_UPWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ARROW_UPWARD_instance;
  }
  var MaterialIcon$ART_TRACK_instance;
  function MaterialIcon$ART_TRACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ART_TRACK_instance;
  }
  var MaterialIcon$ASPECT_RATIO_instance;
  function MaterialIcon$ASPECT_RATIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASPECT_RATIO_instance;
  }
  var MaterialIcon$ASSESSMENT_instance;
  function MaterialIcon$ASSESSMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSESSMENT_instance;
  }
  var MaterialIcon$ASSIGNMENT_instance;
  function MaterialIcon$ASSIGNMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_instance;
  }
  var MaterialIcon$ASSIGNMENT_IND_instance;
  function MaterialIcon$ASSIGNMENT_IND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_IND_instance;
  }
  var MaterialIcon$ASSIGNMENT_LATE_instance;
  function MaterialIcon$ASSIGNMENT_LATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_LATE_instance;
  }
  var MaterialIcon$ASSIGNMENT_RETURN_instance;
  function MaterialIcon$ASSIGNMENT_RETURN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_RETURN_instance;
  }
  var MaterialIcon$ASSIGNMENT_RETURNED_instance;
  function MaterialIcon$ASSIGNMENT_RETURNED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_RETURNED_instance;
  }
  var MaterialIcon$ASSIGNMENT_TURNED_IN_instance;
  function MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSIGNMENT_TURNED_IN_instance;
  }
  var MaterialIcon$ASSISTANT_instance;
  function MaterialIcon$ASSISTANT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSISTANT_instance;
  }
  var MaterialIcon$ASSISTANT_PHOTO_instance;
  function MaterialIcon$ASSISTANT_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ASSISTANT_PHOTO_instance;
  }
  var MaterialIcon$ATTACH_FILE_instance;
  function MaterialIcon$ATTACH_FILE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACH_FILE_instance;
  }
  var MaterialIcon$ATTACH_MONEY_instance;
  function MaterialIcon$ATTACH_MONEY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACH_MONEY_instance;
  }
  var MaterialIcon$ATTACHMENT_instance;
  function MaterialIcon$ATTACHMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ATTACHMENT_instance;
  }
  var MaterialIcon$AUDIOTRACK_instance;
  function MaterialIcon$AUDIOTRACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AUDIOTRACK_instance;
  }
  var MaterialIcon$AUTORENEW_instance;
  function MaterialIcon$AUTORENEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AUTORENEW_instance;
  }
  var MaterialIcon$AV_TIMER_instance;
  function MaterialIcon$AV_TIMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$AV_TIMER_instance;
  }
  var MaterialIcon$BACKSPACE_instance;
  function MaterialIcon$BACKSPACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BACKSPACE_instance;
  }
  var MaterialIcon$BACKUP_instance;
  function MaterialIcon$BACKUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BACKUP_instance;
  }
  var MaterialIcon$BATTERY_ALERT_instance;
  function MaterialIcon$BATTERY_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_ALERT_instance;
  }
  var MaterialIcon$BATTERY_CHARGING_FULL_instance;
  function MaterialIcon$BATTERY_CHARGING_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_CHARGING_FULL_instance;
  }
  var MaterialIcon$BATTERY_FULL_instance;
  function MaterialIcon$BATTERY_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_FULL_instance;
  }
  var MaterialIcon$BATTERY_STD_instance;
  function MaterialIcon$BATTERY_STD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_STD_instance;
  }
  var MaterialIcon$BATTERY_UNKNOWN_instance;
  function MaterialIcon$BATTERY_UNKNOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BATTERY_UNKNOWN_instance;
  }
  var MaterialIcon$BEACH_ACCESS_instance;
  function MaterialIcon$BEACH_ACCESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BEACH_ACCESS_instance;
  }
  var MaterialIcon$BEENHERE_instance;
  function MaterialIcon$BEENHERE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BEENHERE_instance;
  }
  var MaterialIcon$BLOCK_instance;
  function MaterialIcon$BLOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLOCK_instance;
  }
  var MaterialIcon$BLUETOOTH_instance;
  function MaterialIcon$BLUETOOTH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_instance;
  }
  var MaterialIcon$BLUETOOTH_AUDIO_instance;
  function MaterialIcon$BLUETOOTH_AUDIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_AUDIO_instance;
  }
  var MaterialIcon$BLUETOOTH_CONNECTED_instance;
  function MaterialIcon$BLUETOOTH_CONNECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_CONNECTED_instance;
  }
  var MaterialIcon$BLUETOOTH_DISABLED_instance;
  function MaterialIcon$BLUETOOTH_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_DISABLED_instance;
  }
  var MaterialIcon$BLUETOOTH_SEARCHING_instance;
  function MaterialIcon$BLUETOOTH_SEARCHING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUETOOTH_SEARCHING_instance;
  }
  var MaterialIcon$BLUR_CIRCULAR_instance;
  function MaterialIcon$BLUR_CIRCULAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_CIRCULAR_instance;
  }
  var MaterialIcon$BLUR_LINEAR_instance;
  function MaterialIcon$BLUR_LINEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_LINEAR_instance;
  }
  var MaterialIcon$BLUR_OFF_instance;
  function MaterialIcon$BLUR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_OFF_instance;
  }
  var MaterialIcon$BLUR_ON_instance;
  function MaterialIcon$BLUR_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BLUR_ON_instance;
  }
  var MaterialIcon$BOOK_instance;
  function MaterialIcon$BOOK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOK_instance;
  }
  var MaterialIcon$BOOKMARK_instance;
  function MaterialIcon$BOOKMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOKMARK_instance;
  }
  var MaterialIcon$BOOKMARK_BORDER_instance;
  function MaterialIcon$BOOKMARK_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BOOKMARK_BORDER_instance;
  }
  var MaterialIcon$BORDER_ALL_instance;
  function MaterialIcon$BORDER_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_ALL_instance;
  }
  var MaterialIcon$BORDER_BOTTOM_instance;
  function MaterialIcon$BORDER_BOTTOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_BOTTOM_instance;
  }
  var MaterialIcon$BORDER_CLEAR_instance;
  function MaterialIcon$BORDER_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_CLEAR_instance;
  }
  var MaterialIcon$BORDER_COLOR_instance;
  function MaterialIcon$BORDER_COLOR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_COLOR_instance;
  }
  var MaterialIcon$BORDER_HORIZONTAL_instance;
  function MaterialIcon$BORDER_HORIZONTAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_HORIZONTAL_instance;
  }
  var MaterialIcon$BORDER_INNER_instance;
  function MaterialIcon$BORDER_INNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_INNER_instance;
  }
  var MaterialIcon$BORDER_LEFT_instance;
  function MaterialIcon$BORDER_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_LEFT_instance;
  }
  var MaterialIcon$BORDER_OUTER_instance;
  function MaterialIcon$BORDER_OUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_OUTER_instance;
  }
  var MaterialIcon$BORDER_RIGHT_instance;
  function MaterialIcon$BORDER_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_RIGHT_instance;
  }
  var MaterialIcon$BORDER_STYLE_instance;
  function MaterialIcon$BORDER_STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_STYLE_instance;
  }
  var MaterialIcon$BORDER_TOP_instance;
  function MaterialIcon$BORDER_TOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_TOP_instance;
  }
  var MaterialIcon$BORDER_VERTICAL_instance;
  function MaterialIcon$BORDER_VERTICAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BORDER_VERTICAL_instance;
  }
  var MaterialIcon$BRANDING_WATERMARK_instance;
  function MaterialIcon$BRANDING_WATERMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRANDING_WATERMARK_instance;
  }
  var MaterialIcon$BRIGHTNESS_1_instance;
  function MaterialIcon$BRIGHTNESS_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_1_instance;
  }
  var MaterialIcon$BRIGHTNESS_2_instance;
  function MaterialIcon$BRIGHTNESS_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_2_instance;
  }
  var MaterialIcon$BRIGHTNESS_3_instance;
  function MaterialIcon$BRIGHTNESS_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_3_instance;
  }
  var MaterialIcon$BRIGHTNESS_4_instance;
  function MaterialIcon$BRIGHTNESS_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_4_instance;
  }
  var MaterialIcon$BRIGHTNESS_5_instance;
  function MaterialIcon$BRIGHTNESS_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_5_instance;
  }
  var MaterialIcon$BRIGHTNESS_6_instance;
  function MaterialIcon$BRIGHTNESS_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_6_instance;
  }
  var MaterialIcon$BRIGHTNESS_7_instance;
  function MaterialIcon$BRIGHTNESS_7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_7_instance;
  }
  var MaterialIcon$BRIGHTNESS_AUTO_instance;
  function MaterialIcon$BRIGHTNESS_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_AUTO_instance;
  }
  var MaterialIcon$BRIGHTNESS_HIGH_instance;
  function MaterialIcon$BRIGHTNESS_HIGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_HIGH_instance;
  }
  var MaterialIcon$BRIGHTNESS_LOW_instance;
  function MaterialIcon$BRIGHTNESS_LOW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_LOW_instance;
  }
  var MaterialIcon$BRIGHTNESS_MEDIUM_instance;
  function MaterialIcon$BRIGHTNESS_MEDIUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRIGHTNESS_MEDIUM_instance;
  }
  var MaterialIcon$BROKEN_IMAGE_instance;
  function MaterialIcon$BROKEN_IMAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BROKEN_IMAGE_instance;
  }
  var MaterialIcon$BRUSH_instance;
  function MaterialIcon$BRUSH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BRUSH_instance;
  }
  var MaterialIcon$BUBBLE_CHART_instance;
  function MaterialIcon$BUBBLE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUBBLE_CHART_instance;
  }
  var MaterialIcon$BUG_REPORT_instance;
  function MaterialIcon$BUG_REPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUG_REPORT_instance;
  }
  var MaterialIcon$BUILD_instance;
  function MaterialIcon$BUILD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUILD_instance;
  }
  var MaterialIcon$BURST_MODE_instance;
  function MaterialIcon$BURST_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BURST_MODE_instance;
  }
  var MaterialIcon$BUSINESS_instance;
  function MaterialIcon$BUSINESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUSINESS_instance;
  }
  var MaterialIcon$BUSINESS_CENTER_instance;
  function MaterialIcon$BUSINESS_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$BUSINESS_CENTER_instance;
  }
  var MaterialIcon$CACHED_instance;
  function MaterialIcon$CACHED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CACHED_instance;
  }
  var MaterialIcon$CAKE_instance;
  function MaterialIcon$CAKE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAKE_instance;
  }
  var MaterialIcon$CALL_instance;
  function MaterialIcon$CALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_instance;
  }
  var MaterialIcon$CALL_END_instance;
  function MaterialIcon$CALL_END_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_END_instance;
  }
  var MaterialIcon$CALL_MADE_instance;
  function MaterialIcon$CALL_MADE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MADE_instance;
  }
  var MaterialIcon$CALL_MERGE_instance;
  function MaterialIcon$CALL_MERGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MERGE_instance;
  }
  var MaterialIcon$CALL_MISSED_instance;
  function MaterialIcon$CALL_MISSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MISSED_instance;
  }
  var MaterialIcon$CALL_MISSED_OUTGOING_instance;
  function MaterialIcon$CALL_MISSED_OUTGOING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_MISSED_OUTGOING_instance;
  }
  var MaterialIcon$CALL_RECEIVED_instance;
  function MaterialIcon$CALL_RECEIVED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_RECEIVED_instance;
  }
  var MaterialIcon$CALL_SPLIT_instance;
  function MaterialIcon$CALL_SPLIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_SPLIT_instance;
  }
  var MaterialIcon$CALL_TO_ACTION_instance;
  function MaterialIcon$CALL_TO_ACTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CALL_TO_ACTION_instance;
  }
  var MaterialIcon$CAMERA_instance;
  function MaterialIcon$CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_instance;
  }
  var MaterialIcon$CAMERA_ALT_instance;
  function MaterialIcon$CAMERA_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ALT_instance;
  }
  var MaterialIcon$CAMERA_ENHANCE_instance;
  function MaterialIcon$CAMERA_ENHANCE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ENHANCE_instance;
  }
  var MaterialIcon$CAMERA_FRONT_instance;
  function MaterialIcon$CAMERA_FRONT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_FRONT_instance;
  }
  var MaterialIcon$CAMERA_REAR_instance;
  function MaterialIcon$CAMERA_REAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_REAR_instance;
  }
  var MaterialIcon$CAMERA_ROLL_instance;
  function MaterialIcon$CAMERA_ROLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAMERA_ROLL_instance;
  }
  var MaterialIcon$CANCEL_instance;
  function MaterialIcon$CANCEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CANCEL_instance;
  }
  var MaterialIcon$CARD_GIFTCARD_instance;
  function MaterialIcon$CARD_GIFTCARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_GIFTCARD_instance;
  }
  var MaterialIcon$CARD_MEMBERSHIP_instance;
  function MaterialIcon$CARD_MEMBERSHIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_MEMBERSHIP_instance;
  }
  var MaterialIcon$CARD_TRAVEL_instance;
  function MaterialIcon$CARD_TRAVEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CARD_TRAVEL_instance;
  }
  var MaterialIcon$CASINO_instance;
  function MaterialIcon$CASINO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CASINO_instance;
  }
  var MaterialIcon$CAST_instance;
  function MaterialIcon$CAST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAST_instance;
  }
  var MaterialIcon$CAST_CONNECTED_instance;
  function MaterialIcon$CAST_CONNECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CAST_CONNECTED_instance;
  }
  var MaterialIcon$CENTER_FOCUS_STRONG_instance;
  function MaterialIcon$CENTER_FOCUS_STRONG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CENTER_FOCUS_STRONG_instance;
  }
  var MaterialIcon$CENTER_FOCUS_WEAK_instance;
  function MaterialIcon$CENTER_FOCUS_WEAK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CENTER_FOCUS_WEAK_instance;
  }
  var MaterialIcon$CHANGE_HISTORY_instance;
  function MaterialIcon$CHANGE_HISTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHANGE_HISTORY_instance;
  }
  var MaterialIcon$CHAT_instance;
  function MaterialIcon$CHAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_instance;
  }
  var MaterialIcon$CHAT_BUBBLE_instance;
  function MaterialIcon$CHAT_BUBBLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_BUBBLE_instance;
  }
  var MaterialIcon$CHAT_BUBBLE_OUTLINE_instance;
  function MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHAT_BUBBLE_OUTLINE_instance;
  }
  var MaterialIcon$CHECK_instance;
  function MaterialIcon$CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_instance;
  }
  var MaterialIcon$CHECK_BOX_instance;
  function MaterialIcon$CHECK_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_BOX_instance;
  }
  var MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance;
  function MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_BOX_OUTLINE_BLANK_instance;
  }
  var MaterialIcon$CHECK_CIRCLE_instance;
  function MaterialIcon$CHECK_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHECK_CIRCLE_instance;
  }
  var MaterialIcon$CHEVRON_LEFT_instance;
  function MaterialIcon$CHEVRON_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHEVRON_LEFT_instance;
  }
  var MaterialIcon$CHEVRON_RIGHT_instance;
  function MaterialIcon$CHEVRON_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHEVRON_RIGHT_instance;
  }
  var MaterialIcon$CHILD_CARE_instance;
  function MaterialIcon$CHILD_CARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHILD_CARE_instance;
  }
  var MaterialIcon$CHILD_FRIENDLY_instance;
  function MaterialIcon$CHILD_FRIENDLY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHILD_FRIENDLY_instance;
  }
  var MaterialIcon$CHROME_RR_MODE_instance;
  function MaterialIcon$CHROME_RR_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CHROME_RR_MODE_instance;
  }
  var MaterialIcon$CLASS_instance;
  function MaterialIcon$CLASS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLASS_instance;
  }
  var MaterialIcon$CLEAR_instance;
  function MaterialIcon$CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLEAR_instance;
  }
  var MaterialIcon$CLEAR_ALL_instance;
  function MaterialIcon$CLEAR_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLEAR_ALL_instance;
  }
  var MaterialIcon$CLOSE_instance;
  function MaterialIcon$CLOSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOSE_instance;
  }
  var MaterialIcon$CLOSED_CAPTION_instance;
  function MaterialIcon$CLOSED_CAPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOSED_CAPTION_instance;
  }
  var MaterialIcon$CLOUD_instance;
  function MaterialIcon$CLOUD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_instance;
  }
  var MaterialIcon$CLOUD_CIRCLE_instance;
  function MaterialIcon$CLOUD_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_CIRCLE_instance;
  }
  var MaterialIcon$CLOUD_DONE_instance;
  function MaterialIcon$CLOUD_DONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_DONE_instance;
  }
  var MaterialIcon$CLOUD_DOWNLOAD_instance;
  function MaterialIcon$CLOUD_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_DOWNLOAD_instance;
  }
  var MaterialIcon$CLOUD_OFF_instance;
  function MaterialIcon$CLOUD_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_OFF_instance;
  }
  var MaterialIcon$CLOUD_QUEUE_instance;
  function MaterialIcon$CLOUD_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_QUEUE_instance;
  }
  var MaterialIcon$CLOUD_UPLOAD_instance;
  function MaterialIcon$CLOUD_UPLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CLOUD_UPLOAD_instance;
  }
  var MaterialIcon$CODE_instance;
  function MaterialIcon$CODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CODE_instance;
  }
  var MaterialIcon$COLLECTIONS_instance;
  function MaterialIcon$COLLECTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLLECTIONS_instance;
  }
  var MaterialIcon$COLLECTIONS_BOOKMARK_instance;
  function MaterialIcon$COLLECTIONS_BOOKMARK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLLECTIONS_BOOKMARK_instance;
  }
  var MaterialIcon$COLOR_LENS_instance;
  function MaterialIcon$COLOR_LENS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLOR_LENS_instance;
  }
  var MaterialIcon$COLORIZE_instance;
  function MaterialIcon$COLORIZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COLORIZE_instance;
  }
  var MaterialIcon$COMMENT_instance;
  function MaterialIcon$COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMMENT_instance;
  }
  var MaterialIcon$COMPARE_instance;
  function MaterialIcon$COMPARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPARE_instance;
  }
  var MaterialIcon$COMPARE_ARROWS_instance;
  function MaterialIcon$COMPARE_ARROWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPARE_ARROWS_instance;
  }
  var MaterialIcon$COMPUTER_instance;
  function MaterialIcon$COMPUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COMPUTER_instance;
  }
  var MaterialIcon$CONFIRMATION_NUMBER_instance;
  function MaterialIcon$CONFIRMATION_NUMBER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONFIRMATION_NUMBER_instance;
  }
  var MaterialIcon$CONTACT_MAIL_instance;
  function MaterialIcon$CONTACT_MAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACT_MAIL_instance;
  }
  var MaterialIcon$CONTACT_PHONE_instance;
  function MaterialIcon$CONTACT_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACT_PHONE_instance;
  }
  var MaterialIcon$CONTACTS_instance;
  function MaterialIcon$CONTACTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTACTS_instance;
  }
  var MaterialIcon$CONTENT_COPY_instance;
  function MaterialIcon$CONTENT_COPY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_COPY_instance;
  }
  var MaterialIcon$CONTENT_CUT_instance;
  function MaterialIcon$CONTENT_CUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_CUT_instance;
  }
  var MaterialIcon$CONTENT_PASTE_instance;
  function MaterialIcon$CONTENT_PASTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTENT_PASTE_instance;
  }
  var MaterialIcon$CONTROL_POINT_instance;
  function MaterialIcon$CONTROL_POINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTROL_POINT_instance;
  }
  var MaterialIcon$CONTROL_POINT_DUPLICATE_instance;
  function MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CONTROL_POINT_DUPLICATE_instance;
  }
  var MaterialIcon$COPYRIGHT_instance;
  function MaterialIcon$COPYRIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$COPYRIGHT_instance;
  }
  var MaterialIcon$CREATE_instance;
  function MaterialIcon$CREATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREATE_instance;
  }
  var MaterialIcon$CREATE_NEW_FOLDER_instance;
  function MaterialIcon$CREATE_NEW_FOLDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREATE_NEW_FOLDER_instance;
  }
  var MaterialIcon$CREDIT_CARD_instance;
  function MaterialIcon$CREDIT_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CREDIT_CARD_instance;
  }
  var MaterialIcon$CROP_instance;
  function MaterialIcon$CROP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_instance;
  }
  var MaterialIcon$CROP_16_9_instance;
  function MaterialIcon$CROP_16_9_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_16_9_instance;
  }
  var MaterialIcon$CROP_3_2_instance;
  function MaterialIcon$CROP_3_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_3_2_instance;
  }
  var MaterialIcon$CROP_5_4_instance;
  function MaterialIcon$CROP_5_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_5_4_instance;
  }
  var MaterialIcon$CROP_7_5_instance;
  function MaterialIcon$CROP_7_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_7_5_instance;
  }
  var MaterialIcon$CROP_DIN_instance;
  function MaterialIcon$CROP_DIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_DIN_instance;
  }
  var MaterialIcon$CROP_FREE_instance;
  function MaterialIcon$CROP_FREE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_FREE_instance;
  }
  var MaterialIcon$CROP_LANDSCAPE_instance;
  function MaterialIcon$CROP_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_LANDSCAPE_instance;
  }
  var MaterialIcon$CROP_ORIGINAL_instance;
  function MaterialIcon$CROP_ORIGINAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_ORIGINAL_instance;
  }
  var MaterialIcon$CROP_PORTRAIT_instance;
  function MaterialIcon$CROP_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_PORTRAIT_instance;
  }
  var MaterialIcon$CROP_ROTATE_instance;
  function MaterialIcon$CROP_ROTATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_ROTATE_instance;
  }
  var MaterialIcon$CROP_SQUARE_instance;
  function MaterialIcon$CROP_SQUARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$CROP_SQUARE_instance;
  }
  var MaterialIcon$DASHBOARD_instance;
  function MaterialIcon$DASHBOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DASHBOARD_instance;
  }
  var MaterialIcon$DATA_USAGE_instance;
  function MaterialIcon$DATA_USAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DATA_USAGE_instance;
  }
  var MaterialIcon$DATE_RANGE_instance;
  function MaterialIcon$DATE_RANGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DATE_RANGE_instance;
  }
  var MaterialIcon$DEHAZE_instance;
  function MaterialIcon$DEHAZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEHAZE_instance;
  }
  var MaterialIcon$DELETE_instance;
  function MaterialIcon$DELETE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_instance;
  }
  var MaterialIcon$DELETE_FOREVER_instance;
  function MaterialIcon$DELETE_FOREVER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_FOREVER_instance;
  }
  var MaterialIcon$DELETE_SWEEP_instance;
  function MaterialIcon$DELETE_SWEEP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DELETE_SWEEP_instance;
  }
  var MaterialIcon$DESCRIPTION_instance;
  function MaterialIcon$DESCRIPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESCRIPTION_instance;
  }
  var MaterialIcon$DESKTOP_MAC_instance;
  function MaterialIcon$DESKTOP_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESKTOP_MAC_instance;
  }
  var MaterialIcon$DESKTOP_WINDOWS_instance;
  function MaterialIcon$DESKTOP_WINDOWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DESKTOP_WINDOWS_instance;
  }
  var MaterialIcon$DETAILS_instance;
  function MaterialIcon$DETAILS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DETAILS_instance;
  }
  var MaterialIcon$DEVELOPER_BOARD_instance;
  function MaterialIcon$DEVELOPER_BOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVELOPER_BOARD_instance;
  }
  var MaterialIcon$DEVELOPER_MODE_instance;
  function MaterialIcon$DEVELOPER_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVELOPER_MODE_instance;
  }
  var MaterialIcon$DEVICE_HUB_instance;
  function MaterialIcon$DEVICE_HUB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICE_HUB_instance;
  }
  var MaterialIcon$DEVICES_instance;
  function MaterialIcon$DEVICES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICES_instance;
  }
  var MaterialIcon$DEVICES_OTHER_instance;
  function MaterialIcon$DEVICES_OTHER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DEVICES_OTHER_instance;
  }
  var MaterialIcon$DIALER_SIP_instance;
  function MaterialIcon$DIALER_SIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIALER_SIP_instance;
  }
  var MaterialIcon$DIALPAD_instance;
  function MaterialIcon$DIALPAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIALPAD_instance;
  }
  var MaterialIcon$DIRECTIONS_instance;
  function MaterialIcon$DIRECTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_instance;
  }
  var MaterialIcon$DIRECTIONS_BIKE_instance;
  function MaterialIcon$DIRECTIONS_BIKE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BIKE_instance;
  }
  var MaterialIcon$DIRECTIONS_BOAT_instance;
  function MaterialIcon$DIRECTIONS_BOAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BOAT_instance;
  }
  var MaterialIcon$DIRECTIONS_BUS_instance;
  function MaterialIcon$DIRECTIONS_BUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_BUS_instance;
  }
  var MaterialIcon$DIRECTIONS_CAR_instance;
  function MaterialIcon$DIRECTIONS_CAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_CAR_instance;
  }
  var MaterialIcon$DIRECTIONS_RAILWAY_instance;
  function MaterialIcon$DIRECTIONS_RAILWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_RAILWAY_instance;
  }
  var MaterialIcon$DIRECTIONS_RUN_instance;
  function MaterialIcon$DIRECTIONS_RUN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_RUN_instance;
  }
  var MaterialIcon$DIRECTIONS_SUBWAY_instance;
  function MaterialIcon$DIRECTIONS_SUBWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_SUBWAY_instance;
  }
  var MaterialIcon$DIRECTIONS_TRANSIT_instance;
  function MaterialIcon$DIRECTIONS_TRANSIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_TRANSIT_instance;
  }
  var MaterialIcon$DIRECTIONS_WALK_instance;
  function MaterialIcon$DIRECTIONS_WALK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DIRECTIONS_WALK_instance;
  }
  var MaterialIcon$DISC_FULL_instance;
  function MaterialIcon$DISC_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DISC_FULL_instance;
  }
  var MaterialIcon$DNS_instance;
  function MaterialIcon$DNS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DNS_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_instance;
  function MaterialIcon$DO_NOT_DISTURB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_ALT_instance;
  function MaterialIcon$DO_NOT_DISTURB_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_ALT_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_OFF_instance;
  function MaterialIcon$DO_NOT_DISTURB_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_OFF_instance;
  }
  var MaterialIcon$DO_NOT_DISTURB_ON_instance;
  function MaterialIcon$DO_NOT_DISTURB_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DO_NOT_DISTURB_ON_instance;
  }
  var MaterialIcon$DOCK_instance;
  function MaterialIcon$DOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DOCK_instance;
  }
  var MaterialIcon$DOMAIN_instance;
  function MaterialIcon$DOMAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DOMAIN_instance;
  }
  var MaterialIcon$DONE_instance;
  function MaterialIcon$DONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONE_instance;
  }
  var MaterialIcon$DONE_ALL_instance;
  function MaterialIcon$DONE_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONE_ALL_instance;
  }
  var MaterialIcon$DONUT_LARGE_instance;
  function MaterialIcon$DONUT_LARGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONUT_LARGE_instance;
  }
  var MaterialIcon$DONUT_SMALL_instance;
  function MaterialIcon$DONUT_SMALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DONUT_SMALL_instance;
  }
  var MaterialIcon$DRAFTS_instance;
  function MaterialIcon$DRAFTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRAFTS_instance;
  }
  var MaterialIcon$DRAG_HANDLE_instance;
  function MaterialIcon$DRAG_HANDLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRAG_HANDLE_instance;
  }
  var MaterialIcon$DRIVE_ETA_instance;
  function MaterialIcon$DRIVE_ETA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DRIVE_ETA_instance;
  }
  var MaterialIcon$DVR_instance;
  function MaterialIcon$DVR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$DVR_instance;
  }
  var MaterialIcon$EDIT_instance;
  function MaterialIcon$EDIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EDIT_instance;
  }
  var MaterialIcon$EDIT_LOCATION_instance;
  function MaterialIcon$EDIT_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EDIT_LOCATION_instance;
  }
  var MaterialIcon$EJECT_instance;
  function MaterialIcon$EJECT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EJECT_instance;
  }
  var MaterialIcon$EMAIL_instance;
  function MaterialIcon$EMAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EMAIL_instance;
  }
  var MaterialIcon$ENHANCED_ENCRYPTION_instance;
  function MaterialIcon$ENHANCED_ENCRYPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ENHANCED_ENCRYPTION_instance;
  }
  var MaterialIcon$EQUALIZER_instance;
  function MaterialIcon$EQUALIZER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EQUALIZER_instance;
  }
  var MaterialIcon$ERROR_instance;
  function MaterialIcon$ERROR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ERROR_instance;
  }
  var MaterialIcon$ERROR_OUTLINE_instance;
  function MaterialIcon$ERROR_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ERROR_OUTLINE_instance;
  }
  var MaterialIcon$EURO_SYMBOL_instance;
  function MaterialIcon$EURO_SYMBOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EURO_SYMBOL_instance;
  }
  var MaterialIcon$EV_STATION_instance;
  function MaterialIcon$EV_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EV_STATION_instance;
  }
  var MaterialIcon$EVENT_instance;
  function MaterialIcon$EVENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_instance;
  }
  var MaterialIcon$EVENT_AVAILABLE_instance;
  function MaterialIcon$EVENT_AVAILABLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_AVAILABLE_instance;
  }
  var MaterialIcon$EVENT_BUSY_instance;
  function MaterialIcon$EVENT_BUSY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_BUSY_instance;
  }
  var MaterialIcon$EVENT_NOTE_instance;
  function MaterialIcon$EVENT_NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_NOTE_instance;
  }
  var MaterialIcon$EVENT_SEAT_instance;
  function MaterialIcon$EVENT_SEAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EVENT_SEAT_instance;
  }
  var MaterialIcon$EXIT_TO_APP_instance;
  function MaterialIcon$EXIT_TO_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXIT_TO_APP_instance;
  }
  var MaterialIcon$EXPAND_LESS_instance;
  function MaterialIcon$EXPAND_LESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPAND_LESS_instance;
  }
  var MaterialIcon$EXPAND_MORE_instance;
  function MaterialIcon$EXPAND_MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPAND_MORE_instance;
  }
  var MaterialIcon$EXPLICIT_instance;
  function MaterialIcon$EXPLICIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPLICIT_instance;
  }
  var MaterialIcon$EXPLORE_instance;
  function MaterialIcon$EXPLORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPLORE_instance;
  }
  var MaterialIcon$EXPOSURE_instance;
  function MaterialIcon$EXPOSURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_instance;
  }
  var MaterialIcon$EXPOSURE_NEG_1_instance;
  function MaterialIcon$EXPOSURE_NEG_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_NEG_1_instance;
  }
  var MaterialIcon$EXPOSURE_NEG_2_instance;
  function MaterialIcon$EXPOSURE_NEG_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_NEG_2_instance;
  }
  var MaterialIcon$EXPOSURE_PLUS_1_instance;
  function MaterialIcon$EXPOSURE_PLUS_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_PLUS_1_instance;
  }
  var MaterialIcon$EXPOSURE_PLUS_2_instance;
  function MaterialIcon$EXPOSURE_PLUS_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_PLUS_2_instance;
  }
  var MaterialIcon$EXPOSURE_ZERO_instance;
  function MaterialIcon$EXPOSURE_ZERO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXPOSURE_ZERO_instance;
  }
  var MaterialIcon$EXTENSION_instance;
  function MaterialIcon$EXTENSION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$EXTENSION_instance;
  }
  var MaterialIcon$FACE_instance;
  function MaterialIcon$FACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FACE_instance;
  }
  var MaterialIcon$FAST_FORWARD_instance;
  function MaterialIcon$FAST_FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAST_FORWARD_instance;
  }
  var MaterialIcon$FAST_REWIND_instance;
  function MaterialIcon$FAST_REWIND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAST_REWIND_instance;
  }
  var MaterialIcon$FAVORITE_instance;
  function MaterialIcon$FAVORITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAVORITE_instance;
  }
  var MaterialIcon$FAVORITE_BORDER_instance;
  function MaterialIcon$FAVORITE_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FAVORITE_BORDER_instance;
  }
  var MaterialIcon$FEATURED_PLAY_LIST_instance;
  function MaterialIcon$FEATURED_PLAY_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FEATURED_PLAY_LIST_instance;
  }
  var MaterialIcon$FEATURED_VIDEO_instance;
  function MaterialIcon$FEATURED_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FEATURED_VIDEO_instance;
  }
  var MaterialIcon$FACK_instance;
  function MaterialIcon$FACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FACK_instance;
  }
  var MaterialIcon$FIBER_DVR_instance;
  function MaterialIcon$FIBER_DVR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_DVR_instance;
  }
  var MaterialIcon$FIBER_MANUAL_RECORD_instance;
  function MaterialIcon$FIBER_MANUAL_RECORD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_MANUAL_RECORD_instance;
  }
  var MaterialIcon$FIBER_NEW_instance;
  function MaterialIcon$FIBER_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_NEW_instance;
  }
  var MaterialIcon$FIBER_PIN_instance;
  function MaterialIcon$FIBER_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_PIN_instance;
  }
  var MaterialIcon$FIBER_SMART_RECORD_instance;
  function MaterialIcon$FIBER_SMART_RECORD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIBER_SMART_RECORD_instance;
  }
  var MaterialIcon$FILE_DOWNLOAD_instance;
  function MaterialIcon$FILE_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILE_DOWNLOAD_instance;
  }
  var MaterialIcon$FILE_UPLOAD_instance;
  function MaterialIcon$FILE_UPLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILE_UPLOAD_instance;
  }
  var MaterialIcon$FILTER_instance;
  function MaterialIcon$FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_instance;
  }
  var MaterialIcon$FILTER_1_instance;
  function MaterialIcon$FILTER_1_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_1_instance;
  }
  var MaterialIcon$FILTER_2_instance;
  function MaterialIcon$FILTER_2_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_2_instance;
  }
  var MaterialIcon$FILTER_3_instance;
  function MaterialIcon$FILTER_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_3_instance;
  }
  var MaterialIcon$FILTER_4_instance;
  function MaterialIcon$FILTER_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_4_instance;
  }
  var MaterialIcon$FILTER_5_instance;
  function MaterialIcon$FILTER_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_5_instance;
  }
  var MaterialIcon$FILTER_6_instance;
  function MaterialIcon$FILTER_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_6_instance;
  }
  var MaterialIcon$FILTER_7_instance;
  function MaterialIcon$FILTER_7_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_7_instance;
  }
  var MaterialIcon$FILTER_8_instance;
  function MaterialIcon$FILTER_8_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_8_instance;
  }
  var MaterialIcon$FILTER_9_instance;
  function MaterialIcon$FILTER_9_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_9_instance;
  }
  var MaterialIcon$FILTER_9_PLUS_instance;
  function MaterialIcon$FILTER_9_PLUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_9_PLUS_instance;
  }
  var MaterialIcon$FILTER_B_AND_W_instance;
  function MaterialIcon$FILTER_B_AND_W_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_B_AND_W_instance;
  }
  var MaterialIcon$FILTER_CENTER_FOCUS_instance;
  function MaterialIcon$FILTER_CENTER_FOCUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_CENTER_FOCUS_instance;
  }
  var MaterialIcon$FILTER_DRAMA_instance;
  function MaterialIcon$FILTER_DRAMA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_DRAMA_instance;
  }
  var MaterialIcon$FILTER_FRAMES_instance;
  function MaterialIcon$FILTER_FRAMES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_FRAMES_instance;
  }
  var MaterialIcon$FILTER_HDR_instance;
  function MaterialIcon$FILTER_HDR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_HDR_instance;
  }
  var MaterialIcon$FILTER_LIST_instance;
  function MaterialIcon$FILTER_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_LIST_instance;
  }
  var MaterialIcon$FILTER_NONE_instance;
  function MaterialIcon$FILTER_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_NONE_instance;
  }
  var MaterialIcon$FILTER_TILT_SHIFT_instance;
  function MaterialIcon$FILTER_TILT_SHIFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_TILT_SHIFT_instance;
  }
  var MaterialIcon$FILTER_VINTAGE_instance;
  function MaterialIcon$FILTER_VINTAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FILTER_VINTAGE_instance;
  }
  var MaterialIcon$FIND_IN_PAGE_instance;
  function MaterialIcon$FIND_IN_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIND_IN_PAGE_instance;
  }
  var MaterialIcon$FIND_REPLACE_instance;
  function MaterialIcon$FIND_REPLACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIND_REPLACE_instance;
  }
  var MaterialIcon$FINGERPRINT_instance;
  function MaterialIcon$FINGERPRINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FINGERPRINT_instance;
  }
  var MaterialIcon$FIRST_PAGE_instance;
  function MaterialIcon$FIRST_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FIRST_PAGE_instance;
  }
  var MaterialIcon$FITNESS_CENTER_instance;
  function MaterialIcon$FITNESS_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FITNESS_CENTER_instance;
  }
  var MaterialIcon$FLAG_instance;
  function MaterialIcon$FLAG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLAG_instance;
  }
  var MaterialIcon$FLARE_instance;
  function MaterialIcon$FLARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLARE_instance;
  }
  var MaterialIcon$FLASH_AUTO_instance;
  function MaterialIcon$FLASH_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_AUTO_instance;
  }
  var MaterialIcon$FLASH_OFF_instance;
  function MaterialIcon$FLASH_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_OFF_instance;
  }
  var MaterialIcon$FLASH_ON_instance;
  function MaterialIcon$FLASH_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLASH_ON_instance;
  }
  var MaterialIcon$FLIGHT_instance;
  function MaterialIcon$FLIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_instance;
  }
  var MaterialIcon$FLIGHT_LAND_instance;
  function MaterialIcon$FLIGHT_LAND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_LAND_instance;
  }
  var MaterialIcon$FLIGHT_TAKEOFF_instance;
  function MaterialIcon$FLIGHT_TAKEOFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIGHT_TAKEOFF_instance;
  }
  var MaterialIcon$FLIP_instance;
  function MaterialIcon$FLIP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_instance;
  }
  var MaterialIcon$FLIP_TO_BACK_instance;
  function MaterialIcon$FLIP_TO_BACK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_TO_BACK_instance;
  }
  var MaterialIcon$FLIP_TO_FRONT_instance;
  function MaterialIcon$FLIP_TO_FRONT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FLIP_TO_FRONT_instance;
  }
  var MaterialIcon$FOLDER_instance;
  function MaterialIcon$FOLDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_instance;
  }
  var MaterialIcon$FOLDER_OPEN_instance;
  function MaterialIcon$FOLDER_OPEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_OPEN_instance;
  }
  var MaterialIcon$FOLDER_SHARED_instance;
  function MaterialIcon$FOLDER_SHARED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_SHARED_instance;
  }
  var MaterialIcon$FOLDER_SPECIAL_instance;
  function MaterialIcon$FOLDER_SPECIAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FOLDER_SPECIAL_instance;
  }
  var MaterialIcon$FONT_DOWNLOAD_instance;
  function MaterialIcon$FONT_DOWNLOAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FONT_DOWNLOAD_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_CENTER_instance;
  function MaterialIcon$FORMAT_ALIGN_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_CENTER_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance;
  function MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_JUSTIFY_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_LEFT_instance;
  function MaterialIcon$FORMAT_ALIGN_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_LEFT_instance;
  }
  var MaterialIcon$FORMAT_ALIGN_RIGHT_instance;
  function MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ALIGN_RIGHT_instance;
  }
  var MaterialIcon$FORMAT_BOLD_instance;
  function MaterialIcon$FORMAT_BOLD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_BOLD_instance;
  }
  var MaterialIcon$FORMAT_CLEAR_instance;
  function MaterialIcon$FORMAT_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_CLEAR_instance;
  }
  var MaterialIcon$FORMAT_COLOR_FILL_instance;
  function MaterialIcon$FORMAT_COLOR_FILL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_FILL_instance;
  }
  var MaterialIcon$FORMAT_COLOR_RESET_instance;
  function MaterialIcon$FORMAT_COLOR_RESET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_RESET_instance;
  }
  var MaterialIcon$FORMAT_COLOR_TEXT_instance;
  function MaterialIcon$FORMAT_COLOR_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_COLOR_TEXT_instance;
  }
  var MaterialIcon$FORMAT_INDENT_DECREASE_instance;
  function MaterialIcon$FORMAT_INDENT_DECREASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_INDENT_DECREASE_instance;
  }
  var MaterialIcon$FORMAT_INDENT_INCREASE_instance;
  function MaterialIcon$FORMAT_INDENT_INCREASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_INDENT_INCREASE_instance;
  }
  var MaterialIcon$FORMAT_ITALIC_instance;
  function MaterialIcon$FORMAT_ITALIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_ITALIC_instance;
  }
  var MaterialIcon$FORMAT_LINE_SPACING_instance;
  function MaterialIcon$FORMAT_LINE_SPACING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LINE_SPACING_instance;
  }
  var MaterialIcon$FORMAT_LIST_BULLETED_instance;
  function MaterialIcon$FORMAT_LIST_BULLETED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LIST_BULLETED_instance;
  }
  var MaterialIcon$FORMAT_LIST_NUMBERED_instance;
  function MaterialIcon$FORMAT_LIST_NUMBERED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_LIST_NUMBERED_instance;
  }
  var MaterialIcon$FORMAT_PAINT_instance;
  function MaterialIcon$FORMAT_PAINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_PAINT_instance;
  }
  var MaterialIcon$FORMAT_QUOTE_instance;
  function MaterialIcon$FORMAT_QUOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_QUOTE_instance;
  }
  var MaterialIcon$FORMAT_SHAPES_instance;
  function MaterialIcon$FORMAT_SHAPES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_SHAPES_instance;
  }
  var MaterialIcon$FORMAT_SIZE_instance;
  function MaterialIcon$FORMAT_SIZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_SIZE_instance;
  }
  var MaterialIcon$FORMAT_STRIKETHROUGH_instance;
  function MaterialIcon$FORMAT_STRIKETHROUGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_STRIKETHROUGH_instance;
  }
  var MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance;
  function MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_instance;
  }
  var MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance;
  function MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_instance;
  }
  var MaterialIcon$FORMAT_UNDERLINED_instance;
  function MaterialIcon$FORMAT_UNDERLINED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORMAT_UNDERLINED_instance;
  }
  var MaterialIcon$FORUM_instance;
  function MaterialIcon$FORUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORUM_instance;
  }
  var MaterialIcon$FORWARD_instance;
  function MaterialIcon$FORWARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_instance;
  }
  var MaterialIcon$FORWARD_10_instance;
  function MaterialIcon$FORWARD_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_10_instance;
  }
  var MaterialIcon$FORWARD_30_instance;
  function MaterialIcon$FORWARD_30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_30_instance;
  }
  var MaterialIcon$FORWARD_5_instance;
  function MaterialIcon$FORWARD_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FORWARD_5_instance;
  }
  var MaterialIcon$FREE_BREAKFAST_instance;
  function MaterialIcon$FREE_BREAKFAST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FREE_BREAKFAST_instance;
  }
  var MaterialIcon$FULLSCREEN_instance;
  function MaterialIcon$FULLSCREEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FULLSCREEN_instance;
  }
  var MaterialIcon$FULLSCREEN_EXIT_instance;
  function MaterialIcon$FULLSCREEN_EXIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FULLSCREEN_EXIT_instance;
  }
  var MaterialIcon$FUNCTIONS_instance;
  function MaterialIcon$FUNCTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$FUNCTIONS_instance;
  }
  var MaterialIcon$G_TRANSLATE_instance;
  function MaterialIcon$G_TRANSLATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$G_TRANSLATE_instance;
  }
  var MaterialIcon$GAMEPAD_instance;
  function MaterialIcon$GAMEPAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAMEPAD_instance;
  }
  var MaterialIcon$GAMES_instance;
  function MaterialIcon$GAMES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAMES_instance;
  }
  var MaterialIcon$GAVEL_instance;
  function MaterialIcon$GAVEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GAVEL_instance;
  }
  var MaterialIcon$GESTURE_instance;
  function MaterialIcon$GESTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GESTURE_instance;
  }
  var MaterialIcon$GET_APP_instance;
  function MaterialIcon$GET_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GET_APP_instance;
  }
  var MaterialIcon$GIF_instance;
  function MaterialIcon$GIF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GIF_instance;
  }
  var MaterialIcon$GOLF_COURSE_instance;
  function MaterialIcon$GOLF_COURSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GOLF_COURSE_instance;
  }
  var MaterialIcon$GPS_FIXED_instance;
  function MaterialIcon$GPS_FIXED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_FIXED_instance;
  }
  var MaterialIcon$GPS_NOT_FIXED_instance;
  function MaterialIcon$GPS_NOT_FIXED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_NOT_FIXED_instance;
  }
  var MaterialIcon$GPS_OFF_instance;
  function MaterialIcon$GPS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GPS_OFF_instance;
  }
  var MaterialIcon$GRADE_instance;
  function MaterialIcon$GRADE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRADE_instance;
  }
  var MaterialIcon$GRADIENT_instance;
  function MaterialIcon$GRADIENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRADIENT_instance;
  }
  var MaterialIcon$GRAIN_instance;
  function MaterialIcon$GRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRAIN_instance;
  }
  var MaterialIcon$GRAPHIC_EQ_instance;
  function MaterialIcon$GRAPHIC_EQ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRAPHIC_EQ_instance;
  }
  var MaterialIcon$GRID_OFF_instance;
  function MaterialIcon$GRID_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRID_OFF_instance;
  }
  var MaterialIcon$GRID_ON_instance;
  function MaterialIcon$GRID_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GRID_ON_instance;
  }
  var MaterialIcon$GROUP_instance;
  function MaterialIcon$GROUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_instance;
  }
  var MaterialIcon$GROUP_ADD_instance;
  function MaterialIcon$GROUP_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_ADD_instance;
  }
  var MaterialIcon$GROUP_WORK_instance;
  function MaterialIcon$GROUP_WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$GROUP_WORK_instance;
  }
  var MaterialIcon$HD_instance;
  function MaterialIcon$HD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HD_instance;
  }
  var MaterialIcon$HDR_OFF_instance;
  function MaterialIcon$HDR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_OFF_instance;
  }
  var MaterialIcon$HDR_ON_instance;
  function MaterialIcon$HDR_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_ON_instance;
  }
  var MaterialIcon$HDR_STRONG_instance;
  function MaterialIcon$HDR_STRONG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_STRONG_instance;
  }
  var MaterialIcon$HDR_WEAK_instance;
  function MaterialIcon$HDR_WEAK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HDR_WEAK_instance;
  }
  var MaterialIcon$HEADSET_instance;
  function MaterialIcon$HEADSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEADSET_instance;
  }
  var MaterialIcon$HEADSET_MIC_instance;
  function MaterialIcon$HEADSET_MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEADSET_MIC_instance;
  }
  var MaterialIcon$HEALING_instance;
  function MaterialIcon$HEALING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEALING_instance;
  }
  var MaterialIcon$HEARING_instance;
  function MaterialIcon$HEARING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HEARING_instance;
  }
  var MaterialIcon$HELP_instance;
  function MaterialIcon$HELP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HELP_instance;
  }
  var MaterialIcon$HELP_OUTLINE_instance;
  function MaterialIcon$HELP_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HELP_OUTLINE_instance;
  }
  var MaterialIcon$HIGH_QUALITY_instance;
  function MaterialIcon$HIGH_QUALITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGH_QUALITY_instance;
  }
  var MaterialIcon$HIGHLIGHT_instance;
  function MaterialIcon$HIGHLIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGHLIGHT_instance;
  }
  var MaterialIcon$HIGHLIGHT_OFF_instance;
  function MaterialIcon$HIGHLIGHT_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HIGHLIGHT_OFF_instance;
  }
  var MaterialIcon$HISTORY_instance;
  function MaterialIcon$HISTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HISTORY_instance;
  }
  var MaterialIcon$HOME_instance;
  function MaterialIcon$HOME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOME_instance;
  }
  var MaterialIcon$HOT_TUB_instance;
  function MaterialIcon$HOT_TUB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOT_TUB_instance;
  }
  var MaterialIcon$HOTEL_instance;
  function MaterialIcon$HOTEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOTEL_instance;
  }
  var MaterialIcon$HOURGLASS_EMPTY_instance;
  function MaterialIcon$HOURGLASS_EMPTY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOURGLASS_EMPTY_instance;
  }
  var MaterialIcon$HOURGLASS_FULL_instance;
  function MaterialIcon$HOURGLASS_FULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HOURGLASS_FULL_instance;
  }
  var MaterialIcon$HTTP_instance;
  function MaterialIcon$HTTP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HTTP_instance;
  }
  var MaterialIcon$HTTPS_instance;
  function MaterialIcon$HTTPS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$HTTPS_instance;
  }
  var MaterialIcon$IMAGE_instance;
  function MaterialIcon$IMAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMAGE_instance;
  }
  var MaterialIcon$IMAGE_ASPECT_RATIO_instance;
  function MaterialIcon$IMAGE_ASPECT_RATIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMAGE_ASPECT_RATIO_instance;
  }
  var MaterialIcon$IMPORT_CONTACTS_instance;
  function MaterialIcon$IMPORT_CONTACTS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORT_CONTACTS_instance;
  }
  var MaterialIcon$IMPORT_EXPORT_instance;
  function MaterialIcon$IMPORT_EXPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORT_EXPORT_instance;
  }
  var MaterialIcon$IMPORTANT_DEVICES_instance;
  function MaterialIcon$IMPORTANT_DEVICES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$IMPORTANT_DEVICES_instance;
  }
  var MaterialIcon$INBOX_instance;
  function MaterialIcon$INBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INBOX_instance;
  }
  var MaterialIcon$INDETERMINATE_CHECK_BOX_instance;
  function MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INDETERMINATE_CHECK_BOX_instance;
  }
  var MaterialIcon$INFO_instance;
  function MaterialIcon$INFO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INFO_instance;
  }
  var MaterialIcon$INFO_OUTLINE_instance;
  function MaterialIcon$INFO_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INFO_OUTLINE_instance;
  }
  var MaterialIcon$INPUT_instance;
  function MaterialIcon$INPUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INPUT_instance;
  }
  var MaterialIcon$INSERT_CHART_instance;
  function MaterialIcon$INSERT_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_CHART_instance;
  }
  var MaterialIcon$INSERT_COMMENT_instance;
  function MaterialIcon$INSERT_COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_COMMENT_instance;
  }
  var MaterialIcon$INSERT_DRIVE_FILE_instance;
  function MaterialIcon$INSERT_DRIVE_FILE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_DRIVE_FILE_instance;
  }
  var MaterialIcon$INSERT_EMOTICON_instance;
  function MaterialIcon$INSERT_EMOTICON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_EMOTICON_instance;
  }
  var MaterialIcon$INSERT_INVITATION_instance;
  function MaterialIcon$INSERT_INVITATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_INVITATION_instance;
  }
  var MaterialIcon$INSERT_LINK_instance;
  function MaterialIcon$INSERT_LINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_LINK_instance;
  }
  var MaterialIcon$INSERT_PHOTO_instance;
  function MaterialIcon$INSERT_PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INSERT_PHOTO_instance;
  }
  var MaterialIcon$INVERT_COLORS_instance;
  function MaterialIcon$INVERT_COLORS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INVERT_COLORS_instance;
  }
  var MaterialIcon$INVERT_COLORS_OFF_instance;
  function MaterialIcon$INVERT_COLORS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$INVERT_COLORS_OFF_instance;
  }
  var MaterialIcon$ISO_instance;
  function MaterialIcon$ISO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ISO_instance;
  }
  var MaterialIcon$KEYBOARD_instance;
  function MaterialIcon$KEYBOARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_DOWN_instance;
  function MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_DOWN_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_LEFT_instance;
  function MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_LEFT_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_RIGHT_instance;
  function MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_RIGHT_instance;
  }
  var MaterialIcon$KEYBOARD_ARROW_UP_instance;
  function MaterialIcon$KEYBOARD_ARROW_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_ARROW_UP_instance;
  }
  var MaterialIcon$KEYBOARD_BACKSPACE_instance;
  function MaterialIcon$KEYBOARD_BACKSPACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_BACKSPACE_instance;
  }
  var MaterialIcon$KEYBOARD_CAPSLOCK_instance;
  function MaterialIcon$KEYBOARD_CAPSLOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_CAPSLOCK_instance;
  }
  var MaterialIcon$KEYBOARD_HIDE_instance;
  function MaterialIcon$KEYBOARD_HIDE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_HIDE_instance;
  }
  var MaterialIcon$KEYBOARD_RETURN_instance;
  function MaterialIcon$KEYBOARD_RETURN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_RETURN_instance;
  }
  var MaterialIcon$KEYBOARD_TAB_instance;
  function MaterialIcon$KEYBOARD_TAB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_TAB_instance;
  }
  var MaterialIcon$KEYBOARD_VOICE_instance;
  function MaterialIcon$KEYBOARD_VOICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KEYBOARD_VOICE_instance;
  }
  var MaterialIcon$KITCHEN_instance;
  function MaterialIcon$KITCHEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$KITCHEN_instance;
  }
  var MaterialIcon$LABEL_instance;
  function MaterialIcon$LABEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LABEL_instance;
  }
  var MaterialIcon$LABEL_OUTLINE_instance;
  function MaterialIcon$LABEL_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LABEL_OUTLINE_instance;
  }
  var MaterialIcon$LANDSCAPE_instance;
  function MaterialIcon$LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LANDSCAPE_instance;
  }
  var MaterialIcon$LANGUAGE_instance;
  function MaterialIcon$LANGUAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LANGUAGE_instance;
  }
  var MaterialIcon$LAPTOP_instance;
  function MaterialIcon$LAPTOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_instance;
  }
  var MaterialIcon$LAPTOP_CHROMEBOOK_instance;
  function MaterialIcon$LAPTOP_CHROMEBOOK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_CHROMEBOOK_instance;
  }
  var MaterialIcon$LAPTOP_MAC_instance;
  function MaterialIcon$LAPTOP_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_MAC_instance;
  }
  var MaterialIcon$LAPTOP_WINDOWS_instance;
  function MaterialIcon$LAPTOP_WINDOWS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAPTOP_WINDOWS_instance;
  }
  var MaterialIcon$LAST_PAGE_instance;
  function MaterialIcon$LAST_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAST_PAGE_instance;
  }
  var MaterialIcon$LAUNCH_instance;
  function MaterialIcon$LAUNCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAUNCH_instance;
  }
  var MaterialIcon$LAYERS_instance;
  function MaterialIcon$LAYERS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAYERS_instance;
  }
  var MaterialIcon$LAYERS_CLEAR_instance;
  function MaterialIcon$LAYERS_CLEAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LAYERS_CLEAR_instance;
  }
  var MaterialIcon$LEAK_ADD_instance;
  function MaterialIcon$LEAK_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LEAK_ADD_instance;
  }
  var MaterialIcon$LEAK_REMOVE_instance;
  function MaterialIcon$LEAK_REMOVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LEAK_REMOVE_instance;
  }
  var MaterialIcon$LENS_instance;
  function MaterialIcon$LENS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LENS_instance;
  }
  var MaterialIcon$LIBRARY_ADD_instance;
  function MaterialIcon$LIBRARY_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_ADD_instance;
  }
  var MaterialIcon$LIBRARY_BOOKS_instance;
  function MaterialIcon$LIBRARY_BOOKS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_BOOKS_instance;
  }
  var MaterialIcon$LIBRARY_MUSIC_instance;
  function MaterialIcon$LIBRARY_MUSIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIBRARY_MUSIC_instance;
  }
  var MaterialIcon$LIGHTBULB_OUTLINE_instance;
  function MaterialIcon$LIGHTBULB_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIGHTBULB_OUTLINE_instance;
  }
  var MaterialIcon$LINE_STYLE_instance;
  function MaterialIcon$LINE_STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINE_STYLE_instance;
  }
  var MaterialIcon$LINE_WEIGHT_instance;
  function MaterialIcon$LINE_WEIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINE_WEIGHT_instance;
  }
  var MaterialIcon$LINEAR_SCALE_instance;
  function MaterialIcon$LINEAR_SCALE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINEAR_SCALE_instance;
  }
  var MaterialIcon$LINK_instance;
  function MaterialIcon$LINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINK_instance;
  }
  var MaterialIcon$LINKED_CAMERA_instance;
  function MaterialIcon$LINKED_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LINKED_CAMERA_instance;
  }
  var MaterialIcon$LIST_instance;
  function MaterialIcon$LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIST_instance;
  }
  var MaterialIcon$LIVE_HELP_instance;
  function MaterialIcon$LIVE_HELP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIVE_HELP_instance;
  }
  var MaterialIcon$LIVE_TV_instance;
  function MaterialIcon$LIVE_TV_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LIVE_TV_instance;
  }
  var MaterialIcon$LOCAL_ACTIVITY_instance;
  function MaterialIcon$LOCAL_ACTIVITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_ACTIVITY_instance;
  }
  var MaterialIcon$LOCAL_AIRPORT_instance;
  function MaterialIcon$LOCAL_AIRPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_AIRPORT_instance;
  }
  var MaterialIcon$LOCAL_ATM_instance;
  function MaterialIcon$LOCAL_ATM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_ATM_instance;
  }
  var MaterialIcon$LOCAL_BAR_instance;
  function MaterialIcon$LOCAL_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_BAR_instance;
  }
  var MaterialIcon$LOCAL_CAFE_instance;
  function MaterialIcon$LOCAL_CAFE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CAFE_instance;
  }
  var MaterialIcon$LOCAL_CAR_WASH_instance;
  function MaterialIcon$LOCAL_CAR_WASH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CAR_WASH_instance;
  }
  var MaterialIcon$LOCAL_CONVENIENCE_STORE_instance;
  function MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_CONVENIENCE_STORE_instance;
  }
  var MaterialIcon$LOCAL_DINING_instance;
  function MaterialIcon$LOCAL_DINING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_DINING_instance;
  }
  var MaterialIcon$LOCAL_DRINK_instance;
  function MaterialIcon$LOCAL_DRINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_DRINK_instance;
  }
  var MaterialIcon$LOCAL_FLORIST_instance;
  function MaterialIcon$LOCAL_FLORIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_FLORIST_instance;
  }
  var MaterialIcon$LOCAL_GAS_STATION_instance;
  function MaterialIcon$LOCAL_GAS_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_GAS_STATION_instance;
  }
  var MaterialIcon$LOCAL_GROCERY_STORE_instance;
  function MaterialIcon$LOCAL_GROCERY_STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_GROCERY_STORE_instance;
  }
  var MaterialIcon$LOCAL_HOSPITAL_instance;
  function MaterialIcon$LOCAL_HOSPITAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_HOSPITAL_instance;
  }
  var MaterialIcon$LOCAL_HOTEL_instance;
  function MaterialIcon$LOCAL_HOTEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_HOTEL_instance;
  }
  var MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance;
  function MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_LAUNDRY_SERVICE_instance;
  }
  var MaterialIcon$LOCAL_LIBRARY_instance;
  function MaterialIcon$LOCAL_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_LIBRARY_instance;
  }
  var MaterialIcon$LOCAL_MALL_instance;
  function MaterialIcon$LOCAL_MALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_MALL_instance;
  }
  var MaterialIcon$LOCAL_MOVIES_instance;
  function MaterialIcon$LOCAL_MOVIES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_MOVIES_instance;
  }
  var MaterialIcon$LOCAL_OFFER_instance;
  function MaterialIcon$LOCAL_OFFER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_OFFER_instance;
  }
  var MaterialIcon$LOCAL_PARKING_instance;
  function MaterialIcon$LOCAL_PARKING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PARKING_instance;
  }
  var MaterialIcon$LOCAL_PHARMACY_instance;
  function MaterialIcon$LOCAL_PHARMACY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PHARMACY_instance;
  }
  var MaterialIcon$LOCAL_PHONE_instance;
  function MaterialIcon$LOCAL_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PHONE_instance;
  }
  var MaterialIcon$LOCAL_PIZZA_instance;
  function MaterialIcon$LOCAL_PIZZA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PIZZA_instance;
  }
  var MaterialIcon$LOCAL_PLAY_instance;
  function MaterialIcon$LOCAL_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PLAY_instance;
  }
  var MaterialIcon$LOCAL_POST_OFFICE_instance;
  function MaterialIcon$LOCAL_POST_OFFICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_POST_OFFICE_instance;
  }
  var MaterialIcon$LOCAL_PRINTSHOP_instance;
  function MaterialIcon$LOCAL_PRINTSHOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_PRINTSHOP_instance;
  }
  var MaterialIcon$LOCAL_SEE_instance;
  function MaterialIcon$LOCAL_SEE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_SEE_instance;
  }
  var MaterialIcon$LOCAL_SHIPPING_instance;
  function MaterialIcon$LOCAL_SHIPPING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_SHIPPING_instance;
  }
  var MaterialIcon$LOCAL_TAXI_instance;
  function MaterialIcon$LOCAL_TAXI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCAL_TAXI_instance;
  }
  var MaterialIcon$LOCATION_CITY_instance;
  function MaterialIcon$LOCATION_CITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_CITY_instance;
  }
  var MaterialIcon$LOCATION_DISABLED_instance;
  function MaterialIcon$LOCATION_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_DISABLED_instance;
  }
  var MaterialIcon$LOCATION_OFF_instance;
  function MaterialIcon$LOCATION_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_OFF_instance;
  }
  var MaterialIcon$LOCATION_ON_instance;
  function MaterialIcon$LOCATION_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_ON_instance;
  }
  var MaterialIcon$LOCATION_SEARCHING_instance;
  function MaterialIcon$LOCATION_SEARCHING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCATION_SEARCHING_instance;
  }
  var MaterialIcon$LOCK_instance;
  function MaterialIcon$LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_instance;
  }
  var MaterialIcon$LOCK_OPEN_instance;
  function MaterialIcon$LOCK_OPEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_OPEN_instance;
  }
  var MaterialIcon$LOCK_OUTLINE_instance;
  function MaterialIcon$LOCK_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOCK_OUTLINE_instance;
  }
  var MaterialIcon$LOOKS_instance;
  function MaterialIcon$LOOKS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_instance;
  }
  var MaterialIcon$LOOKS_3_instance;
  function MaterialIcon$LOOKS_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_3_instance;
  }
  var MaterialIcon$LOOKS_4_instance;
  function MaterialIcon$LOOKS_4_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_4_instance;
  }
  var MaterialIcon$LOOKS_5_instance;
  function MaterialIcon$LOOKS_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_5_instance;
  }
  var MaterialIcon$LOOKS_6_instance;
  function MaterialIcon$LOOKS_6_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_6_instance;
  }
  var MaterialIcon$LOOKS_ONE_instance;
  function MaterialIcon$LOOKS_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_ONE_instance;
  }
  var MaterialIcon$LOOKS_TWO_instance;
  function MaterialIcon$LOOKS_TWO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOKS_TWO_instance;
  }
  var MaterialIcon$LOOP_instance;
  function MaterialIcon$LOOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOOP_instance;
  }
  var MaterialIcon$LOUPE_instance;
  function MaterialIcon$LOUPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOUPE_instance;
  }
  var MaterialIcon$LOW_PRIORITY_instance;
  function MaterialIcon$LOW_PRIORITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOW_PRIORITY_instance;
  }
  var MaterialIcon$LOYALTY_instance;
  function MaterialIcon$LOYALTY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$LOYALTY_instance;
  }
  var MaterialIcon$MAIL_instance;
  function MaterialIcon$MAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAIL_instance;
  }
  var MaterialIcon$MAIL_OUTLINE_instance;
  function MaterialIcon$MAIL_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAIL_OUTLINE_instance;
  }
  var MaterialIcon$MAP_instance;
  function MaterialIcon$MAP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MAP_instance;
  }
  var MaterialIcon$MARKUNREAD_instance;
  function MaterialIcon$MARKUNREAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MARKUNREAD_instance;
  }
  var MaterialIcon$MARKUNREAD_MAILBOX_instance;
  function MaterialIcon$MARKUNREAD_MAILBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MARKUNREAD_MAILBOX_instance;
  }
  var MaterialIcon$MEMORY_instance;
  function MaterialIcon$MEMORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MEMORY_instance;
  }
  var MaterialIcon$MENU_instance;
  function MaterialIcon$MENU_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MENU_instance;
  }
  var MaterialIcon$MERGE_TYPE_instance;
  function MaterialIcon$MERGE_TYPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MERGE_TYPE_instance;
  }
  var MaterialIcon$MESSAGE_instance;
  function MaterialIcon$MESSAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MESSAGE_instance;
  }
  var MaterialIcon$MIC_instance;
  function MaterialIcon$MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_instance;
  }
  var MaterialIcon$MIC_NONE_instance;
  function MaterialIcon$MIC_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_NONE_instance;
  }
  var MaterialIcon$MIC_OFF_instance;
  function MaterialIcon$MIC_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MIC_OFF_instance;
  }
  var MaterialIcon$MMS_instance;
  function MaterialIcon$MMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MMS_instance;
  }
  var MaterialIcon$MODE_COMMENT_instance;
  function MaterialIcon$MODE_COMMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MODE_COMMENT_instance;
  }
  var MaterialIcon$MODE_EDIT_instance;
  function MaterialIcon$MODE_EDIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MODE_EDIT_instance;
  }
  var MaterialIcon$MONETIZATION_ON_instance;
  function MaterialIcon$MONETIZATION_ON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONETIZATION_ON_instance;
  }
  var MaterialIcon$MONEY_OFF_instance;
  function MaterialIcon$MONEY_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONEY_OFF_instance;
  }
  var MaterialIcon$MONOCHROME_PHOTOS_instance;
  function MaterialIcon$MONOCHROME_PHOTOS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MONOCHROME_PHOTOS_instance;
  }
  var MaterialIcon$MOOD_instance;
  function MaterialIcon$MOOD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOOD_instance;
  }
  var MaterialIcon$MOOD_BAD_instance;
  function MaterialIcon$MOOD_BAD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOOD_BAD_instance;
  }
  var MaterialIcon$MORE_instance;
  function MaterialIcon$MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_instance;
  }
  var MaterialIcon$MORE_HORIZ_instance;
  function MaterialIcon$MORE_HORIZ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_HORIZ_instance;
  }
  var MaterialIcon$MORE_VERT_instance;
  function MaterialIcon$MORE_VERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MORE_VERT_instance;
  }
  var MaterialIcon$MOTORCYCLE_instance;
  function MaterialIcon$MOTORCYCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOTORCYCLE_instance;
  }
  var MaterialIcon$MOUSE_instance;
  function MaterialIcon$MOUSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOUSE_instance;
  }
  var MaterialIcon$MOVE_TO_INBOX_instance;
  function MaterialIcon$MOVE_TO_INBOX_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVE_TO_INBOX_instance;
  }
  var MaterialIcon$MOVIE_instance;
  function MaterialIcon$MOVIE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_instance;
  }
  var MaterialIcon$MOVIE_CREATION_instance;
  function MaterialIcon$MOVIE_CREATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_CREATION_instance;
  }
  var MaterialIcon$MOVIE_FILTER_instance;
  function MaterialIcon$MOVIE_FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MOVIE_FILTER_instance;
  }
  var MaterialIcon$MULTILINE_CHART_instance;
  function MaterialIcon$MULTILINE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MULTILINE_CHART_instance;
  }
  var MaterialIcon$MUSIC_NOTE_instance;
  function MaterialIcon$MUSIC_NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MUSIC_NOTE_instance;
  }
  var MaterialIcon$MUSIC_VIDEO_instance;
  function MaterialIcon$MUSIC_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MUSIC_VIDEO_instance;
  }
  var MaterialIcon$MY_LOCATION_instance;
  function MaterialIcon$MY_LOCATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$MY_LOCATION_instance;
  }
  var MaterialIcon$NATURE_instance;
  function MaterialIcon$NATURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NATURE_instance;
  }
  var MaterialIcon$NATURE_PEOPLE_instance;
  function MaterialIcon$NATURE_PEOPLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NATURE_PEOPLE_instance;
  }
  var MaterialIcon$NAVIGATE_BEFORE_instance;
  function MaterialIcon$NAVIGATE_BEFORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATE_BEFORE_instance;
  }
  var MaterialIcon$NAVIGATE_NEXT_instance;
  function MaterialIcon$NAVIGATE_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATE_NEXT_instance;
  }
  var MaterialIcon$NAVIGATION_instance;
  function MaterialIcon$NAVIGATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NAVIGATION_instance;
  }
  var MaterialIcon$NEAR_ME_instance;
  function MaterialIcon$NEAR_ME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEAR_ME_instance;
  }
  var MaterialIcon$NETWORK_CELL_instance;
  function MaterialIcon$NETWORK_CELL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_CELL_instance;
  }
  var MaterialIcon$NETWORK_CHECK_instance;
  function MaterialIcon$NETWORK_CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_CHECK_instance;
  }
  var MaterialIcon$NETWORK_LOCKED_instance;
  function MaterialIcon$NETWORK_LOCKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_LOCKED_instance;
  }
  var MaterialIcon$NETWORK_WIFI_instance;
  function MaterialIcon$NETWORK_WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NETWORK_WIFI_instance;
  }
  var MaterialIcon$NEW_RELEASES_instance;
  function MaterialIcon$NEW_RELEASES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEW_RELEASES_instance;
  }
  var MaterialIcon$NEXT_WEEK_instance;
  function MaterialIcon$NEXT_WEEK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NEXT_WEEK_instance;
  }
  var MaterialIcon$NFC_instance;
  function MaterialIcon$NFC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NFC_instance;
  }
  var MaterialIcon$NO_ENCRYPTION_instance;
  function MaterialIcon$NO_ENCRYPTION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NO_ENCRYPTION_instance;
  }
  var MaterialIcon$NO_SIM_instance;
  function MaterialIcon$NO_SIM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NO_SIM_instance;
  }
  var MaterialIcon$NOT_INTERESTED_instance;
  function MaterialIcon$NOT_INTERESTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOT_INTERESTED_instance;
  }
  var MaterialIcon$NOTE_instance;
  function MaterialIcon$NOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTE_instance;
  }
  var MaterialIcon$NOTE_ADD_instance;
  function MaterialIcon$NOTE_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTE_ADD_instance;
  }
  var MaterialIcon$NOTIFICATIONS_instance;
  function MaterialIcon$NOTIFICATIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_instance;
  }
  var MaterialIcon$NOTIFICATIONS_ACTIVE_instance;
  function MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_ACTIVE_instance;
  }
  var MaterialIcon$NOTIFICATIONS_NONE_instance;
  function MaterialIcon$NOTIFICATIONS_NONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_NONE_instance;
  }
  var MaterialIcon$NOTIFICATIONS_OFF_instance;
  function MaterialIcon$NOTIFICATIONS_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_OFF_instance;
  }
  var MaterialIcon$NOTIFICATIONS_PAUSED_instance;
  function MaterialIcon$NOTIFICATIONS_PAUSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$NOTIFICATIONS_PAUSED_instance;
  }
  var MaterialIcon$OFFLINE_PIN_instance;
  function MaterialIcon$OFFLINE_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OFFLINE_PIN_instance;
  }
  var MaterialIcon$ONDEMAND_VIDEO_instance;
  function MaterialIcon$ONDEMAND_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ONDEMAND_VIDEO_instance;
  }
  var MaterialIcon$OPACITY_instance;
  function MaterialIcon$OPACITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPACITY_instance;
  }
  var MaterialIcon$OPEN_IN_BROWSER_instance;
  function MaterialIcon$OPEN_IN_BROWSER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_IN_BROWSER_instance;
  }
  var MaterialIcon$OPEN_IN_NEW_instance;
  function MaterialIcon$OPEN_IN_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_IN_NEW_instance;
  }
  var MaterialIcon$OPEN_WITH_instance;
  function MaterialIcon$OPEN_WITH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$OPEN_WITH_instance;
  }
  var MaterialIcon$PAGES_instance;
  function MaterialIcon$PAGES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAGES_instance;
  }
  var MaterialIcon$PAGEVIEW_instance;
  function MaterialIcon$PAGEVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAGEVIEW_instance;
  }
  var MaterialIcon$PALETTE_instance;
  function MaterialIcon$PALETTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PALETTE_instance;
  }
  var MaterialIcon$PAN_TOOL_instance;
  function MaterialIcon$PAN_TOOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAN_TOOL_instance;
  }
  var MaterialIcon$PANORAMA_instance;
  function MaterialIcon$PANORAMA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_instance;
  }
  var MaterialIcon$PANORAMA_FISH_EYE_instance;
  function MaterialIcon$PANORAMA_FISH_EYE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_FISH_EYE_instance;
  }
  var MaterialIcon$PANORAMA_HORIZONTAL_instance;
  function MaterialIcon$PANORAMA_HORIZONTAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_HORIZONTAL_instance;
  }
  var MaterialIcon$PANORAMA_VERTICAL_instance;
  function MaterialIcon$PANORAMA_VERTICAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_VERTICAL_instance;
  }
  var MaterialIcon$PANORAMA_WIDE_ANGLE_instance;
  function MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PANORAMA_WIDE_ANGLE_instance;
  }
  var MaterialIcon$PARTY_MODE_instance;
  function MaterialIcon$PARTY_MODE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PARTY_MODE_instance;
  }
  var MaterialIcon$PAUSE_instance;
  function MaterialIcon$PAUSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_instance;
  }
  var MaterialIcon$PAUSE_CIRCLE_FILLED_instance;
  function MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_CIRCLE_FILLED_instance;
  }
  var MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance;
  function MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAUSE_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$PAYMENT_instance;
  function MaterialIcon$PAYMENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PAYMENT_instance;
  }
  var MaterialIcon$PEOPLE_instance;
  function MaterialIcon$PEOPLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PEOPLE_instance;
  }
  var MaterialIcon$PEOPLE_OUTLINE_instance;
  function MaterialIcon$PEOPLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PEOPLE_OUTLINE_instance;
  }
  var MaterialIcon$PERM_CAMERA_MIC_instance;
  function MaterialIcon$PERM_CAMERA_MIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_CAMERA_MIC_instance;
  }
  var MaterialIcon$PERM_CONTACT_CALENDAR_instance;
  function MaterialIcon$PERM_CONTACT_CALENDAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_CONTACT_CALENDAR_instance;
  }
  var MaterialIcon$PERM_DATA_SETTING_instance;
  function MaterialIcon$PERM_DATA_SETTING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_DATA_SETTING_instance;
  }
  var MaterialIcon$PERM_DEVICE_INFORMATION_instance;
  function MaterialIcon$PERM_DEVICE_INFORMATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_DEVICE_INFORMATION_instance;
  }
  var MaterialIcon$PERM_IDENTITY_instance;
  function MaterialIcon$PERM_IDENTITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_IDENTITY_instance;
  }
  var MaterialIcon$PERM_MEDIA_instance;
  function MaterialIcon$PERM_MEDIA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_MEDIA_instance;
  }
  var MaterialIcon$PERM_PHONE_MSG_instance;
  function MaterialIcon$PERM_PHONE_MSG_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_PHONE_MSG_instance;
  }
  var MaterialIcon$PERM_SCAN_WIFI_instance;
  function MaterialIcon$PERM_SCAN_WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERM_SCAN_WIFI_instance;
  }
  var MaterialIcon$PERSON_instance;
  function MaterialIcon$PERSON_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_instance;
  }
  var MaterialIcon$PERSON_ADD_instance;
  function MaterialIcon$PERSON_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_ADD_instance;
  }
  var MaterialIcon$PERSON_OUTLINE_instance;
  function MaterialIcon$PERSON_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_OUTLINE_instance;
  }
  var MaterialIcon$PERSON_PIN_instance;
  function MaterialIcon$PERSON_PIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_PIN_instance;
  }
  var MaterialIcon$PERSON_PIN_CIRCLE_instance;
  function MaterialIcon$PERSON_PIN_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSON_PIN_CIRCLE_instance;
  }
  var MaterialIcon$PERSONAL_VIDEO_instance;
  function MaterialIcon$PERSONAL_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PERSONAL_VIDEO_instance;
  }
  var MaterialIcon$PETS_instance;
  function MaterialIcon$PETS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PETS_instance;
  }
  var MaterialIcon$PHONE_instance;
  function MaterialIcon$PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_instance;
  }
  var MaterialIcon$PHONE_ANDROID_instance;
  function MaterialIcon$PHONE_ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_ANDROID_instance;
  }
  var MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance;
  function MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_BLUETOOTH_SPEAKER_instance;
  }
  var MaterialIcon$PHONE_FORWARDED_instance;
  function MaterialIcon$PHONE_FORWARDED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_FORWARDED_instance;
  }
  var MaterialIcon$PHONE_IN_TALK_instance;
  function MaterialIcon$PHONE_IN_TALK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_IN_TALK_instance;
  }
  var MaterialIcon$PHONE_IPHONE_instance;
  function MaterialIcon$PHONE_IPHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_IPHONE_instance;
  }
  var MaterialIcon$PHONE_LOCKED_instance;
  function MaterialIcon$PHONE_LOCKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_LOCKED_instance;
  }
  var MaterialIcon$PHONE_MISSED_instance;
  function MaterialIcon$PHONE_MISSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_MISSED_instance;
  }
  var MaterialIcon$PHONE_PAUSED_instance;
  function MaterialIcon$PHONE_PAUSED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONE_PAUSED_instance;
  }
  var MaterialIcon$PHONELINK_instance;
  function MaterialIcon$PHONELINK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_instance;
  }
  var MaterialIcon$PHONELINK_ERASE_instance;
  function MaterialIcon$PHONELINK_ERASE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_ERASE_instance;
  }
  var MaterialIcon$PHONELINK_LOCK_instance;
  function MaterialIcon$PHONELINK_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_LOCK_instance;
  }
  var MaterialIcon$PHONELINK_OFF_instance;
  function MaterialIcon$PHONELINK_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_OFF_instance;
  }
  var MaterialIcon$PHONELINK_RING_instance;
  function MaterialIcon$PHONELINK_RING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_RING_instance;
  }
  var MaterialIcon$PHONELINK_SETUP_instance;
  function MaterialIcon$PHONELINK_SETUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHONELINK_SETUP_instance;
  }
  var MaterialIcon$PHOTO_instance;
  function MaterialIcon$PHOTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_instance;
  }
  var MaterialIcon$PHOTO_ALBUM_instance;
  function MaterialIcon$PHOTO_ALBUM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_ALBUM_instance;
  }
  var MaterialIcon$PHOTO_CAMERA_instance;
  function MaterialIcon$PHOTO_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_CAMERA_instance;
  }
  var MaterialIcon$PHOTO_FILTER_instance;
  function MaterialIcon$PHOTO_FILTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_FILTER_instance;
  }
  var MaterialIcon$PHOTO_LIBRARY_instance;
  function MaterialIcon$PHOTO_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_LIBRARY_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_LARGE_instance;
  }
  var MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance;
  function MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PHOTO_SIZE_SELECT_SMALL_instance;
  }
  var MaterialIcon$PICTURE_AS_PDF_instance;
  function MaterialIcon$PICTURE_AS_PDF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_AS_PDF_instance;
  }
  var MaterialIcon$PICTURE_IN_PICTURE_instance;
  function MaterialIcon$PICTURE_IN_PICTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_IN_PICTURE_instance;
  }
  var MaterialIcon$PICTURE_IN_PICTURE_ALT_instance;
  function MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PICTURE_IN_PICTURE_ALT_instance;
  }
  var MaterialIcon$PIE_CHART_instance;
  function MaterialIcon$PIE_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIE_CHART_instance;
  }
  var MaterialIcon$PIE_CHART_OUTLINED_instance;
  function MaterialIcon$PIE_CHART_OUTLINED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIE_CHART_OUTLINED_instance;
  }
  var MaterialIcon$PIN_DROP_instance;
  function MaterialIcon$PIN_DROP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PIN_DROP_instance;
  }
  var MaterialIcon$PLACE_instance;
  function MaterialIcon$PLACE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLACE_instance;
  }
  var MaterialIcon$PLAY_ARROW_instance;
  function MaterialIcon$PLAY_ARROW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_ARROW_instance;
  }
  var MaterialIcon$PLAY_CIRCLE_FILLED_instance;
  function MaterialIcon$PLAY_CIRCLE_FILLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_CIRCLE_FILLED_instance;
  }
  var MaterialIcon$PLAY_CIRCLE_OUTLINE_instance;
  function MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$PLAY_FOR_WORK_instance;
  function MaterialIcon$PLAY_FOR_WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAY_FOR_WORK_instance;
  }
  var MaterialIcon$PLAYLIST_ADD_instance;
  function MaterialIcon$PLAYLIST_ADD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_ADD_instance;
  }
  var MaterialIcon$PLAYLIST_ADD_CHECK_instance;
  function MaterialIcon$PLAYLIST_ADD_CHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_ADD_CHECK_instance;
  }
  var MaterialIcon$PLAYLIST_PLAY_instance;
  function MaterialIcon$PLAYLIST_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLAYLIST_PLAY_instance;
  }
  var MaterialIcon$PLUS_ONE_instance;
  function MaterialIcon$PLUS_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PLUS_ONE_instance;
  }
  var MaterialIcon$POLL_instance;
  function MaterialIcon$POLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POLL_instance;
  }
  var MaterialIcon$POLYMER_instance;
  function MaterialIcon$POLYMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POLYMER_instance;
  }
  var MaterialIcon$POOL_instance;
  function MaterialIcon$POOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POOL_instance;
  }
  var MaterialIcon$PORTABLE_WIFI_OFF_instance;
  function MaterialIcon$PORTABLE_WIFI_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PORTABLE_WIFI_OFF_instance;
  }
  var MaterialIcon$PORTRAIT_instance;
  function MaterialIcon$PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PORTRAIT_instance;
  }
  var MaterialIcon$POWER_instance;
  function MaterialIcon$POWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_instance;
  }
  var MaterialIcon$POWER_INPUT_instance;
  function MaterialIcon$POWER_INPUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_INPUT_instance;
  }
  var MaterialIcon$POWER_SETTINGS_NEW_instance;
  function MaterialIcon$POWER_SETTINGS_NEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$POWER_SETTINGS_NEW_instance;
  }
  var MaterialIcon$PREGNANT_WOMAN_instance;
  function MaterialIcon$PREGNANT_WOMAN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PREGNANT_WOMAN_instance;
  }
  var MaterialIcon$PRESENT_TO_ALL_instance;
  function MaterialIcon$PRESENT_TO_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRESENT_TO_ALL_instance;
  }
  var MaterialIcon$PRINT_instance;
  function MaterialIcon$PRINT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRINT_instance;
  }
  var MaterialIcon$PRIORITY_HIGH_instance;
  function MaterialIcon$PRIORITY_HIGH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PRIORITY_HIGH_instance;
  }
  var MaterialIcon$PUBLIC_instance;
  function MaterialIcon$PUBLIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PUBLIC_instance;
  }
  var MaterialIcon$PUBLISH_instance;
  function MaterialIcon$PUBLISH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$PUBLISH_instance;
  }
  var MaterialIcon$QUERY_BUILDER_instance;
  function MaterialIcon$QUERY_BUILDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUERY_BUILDER_instance;
  }
  var MaterialIcon$QUESTION_ANSWER_instance;
  function MaterialIcon$QUESTION_ANSWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUESTION_ANSWER_instance;
  }
  var MaterialIcon$QUEUE_instance;
  function MaterialIcon$QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_instance;
  }
  var MaterialIcon$QUEUE_MUSIC_instance;
  function MaterialIcon$QUEUE_MUSIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_MUSIC_instance;
  }
  var MaterialIcon$QUEUE_PLAY_NEXT_instance;
  function MaterialIcon$QUEUE_PLAY_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$QUEUE_PLAY_NEXT_instance;
  }
  var MaterialIcon$RADIO_instance;
  function MaterialIcon$RADIO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_instance;
  }
  var MaterialIcon$RADIO_BUTTON_CHECKED_instance;
  function MaterialIcon$RADIO_BUTTON_CHECKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_BUTTON_CHECKED_instance;
  }
  var MaterialIcon$RADIO_BUTTON_UNCHECKED_instance;
  function MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RADIO_BUTTON_UNCHECKED_instance;
  }
  var MaterialIcon$RATE_REVIEW_instance;
  function MaterialIcon$RATE_REVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RATE_REVIEW_instance;
  }
  var MaterialIcon$RECEIPT_instance;
  function MaterialIcon$RECEIPT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECEIPT_instance;
  }
  var MaterialIcon$RECENT_ACTORS_instance;
  function MaterialIcon$RECENT_ACTORS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECENT_ACTORS_instance;
  }
  var MaterialIcon$RECORD_VOICE_OVER_instance;
  function MaterialIcon$RECORD_VOICE_OVER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RECORD_VOICE_OVER_instance;
  }
  var MaterialIcon$RM_instance;
  function MaterialIcon$RM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RM_instance;
  }
  var MaterialIcon$REDO_instance;
  function MaterialIcon$REDO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REDO_instance;
  }
  var MaterialIcon$REFRESH_instance;
  function MaterialIcon$REFRESH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REFRESH_instance;
  }
  var MaterialIcon$REMOVE_instance;
  function MaterialIcon$REMOVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_instance;
  }
  var MaterialIcon$REMOVE_CIRCLE_instance;
  function MaterialIcon$REMOVE_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_CIRCLE_instance;
  }
  var MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance;
  function MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_CIRCLE_OUTLINE_instance;
  }
  var MaterialIcon$REMOVE_FROM_QUEUE_instance;
  function MaterialIcon$REMOVE_FROM_QUEUE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_FROM_QUEUE_instance;
  }
  var MaterialIcon$REMOVE_RED_EYE_instance;
  function MaterialIcon$REMOVE_RED_EYE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_RED_EYE_instance;
  }
  var MaterialIcon$REMOVE_SHOPPING_CART_instance;
  function MaterialIcon$REMOVE_SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REMOVE_SHOPPING_CART_instance;
  }
  var MaterialIcon$REORDER_instance;
  function MaterialIcon$REORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REORDER_instance;
  }
  var MaterialIcon$REPEAT_instance;
  function MaterialIcon$REPEAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPEAT_instance;
  }
  var MaterialIcon$REPEAT_ONE_instance;
  function MaterialIcon$REPEAT_ONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPEAT_ONE_instance;
  }
  var MaterialIcon$REPLAY_instance;
  function MaterialIcon$REPLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_instance;
  }
  var MaterialIcon$REPLAY_10_instance;
  function MaterialIcon$REPLAY_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_10_instance;
  }
  var MaterialIcon$REPLAY_30_instance;
  function MaterialIcon$REPLAY_30_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_30_instance;
  }
  var MaterialIcon$REPLAY_5_instance;
  function MaterialIcon$REPLAY_5_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLAY_5_instance;
  }
  var MaterialIcon$REPLY_instance;
  function MaterialIcon$REPLY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLY_instance;
  }
  var MaterialIcon$REPLY_ALL_instance;
  function MaterialIcon$REPLY_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPLY_ALL_instance;
  }
  var MaterialIcon$REPORT_instance;
  function MaterialIcon$REPORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPORT_instance;
  }
  var MaterialIcon$REPORT_PROBLEM_instance;
  function MaterialIcon$REPORT_PROBLEM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$REPORT_PROBLEM_instance;
  }
  var MaterialIcon$RESTAURANT_instance;
  function MaterialIcon$RESTAURANT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTAURANT_instance;
  }
  var MaterialIcon$RESTAURANT_MENU_instance;
  function MaterialIcon$RESTAURANT_MENU_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTAURANT_MENU_instance;
  }
  var MaterialIcon$RESTORE_instance;
  function MaterialIcon$RESTORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTORE_instance;
  }
  var MaterialIcon$RESTORE_PAGE_instance;
  function MaterialIcon$RESTORE_PAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RESTORE_PAGE_instance;
  }
  var MaterialIcon$RING_VOLUME_instance;
  function MaterialIcon$RING_VOLUME_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RING_VOLUME_instance;
  }
  var MaterialIcon$ROOM_instance;
  function MaterialIcon$ROOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROOM_instance;
  }
  var MaterialIcon$ROOM_SERVICE_instance;
  function MaterialIcon$ROOM_SERVICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROOM_SERVICE_instance;
  }
  var MaterialIcon$ROTATE_90_DEGREES_CCW_instance;
  function MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_90_DEGREES_CCW_instance;
  }
  var MaterialIcon$ROTATE_LEFT_instance;
  function MaterialIcon$ROTATE_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_LEFT_instance;
  }
  var MaterialIcon$ROTATE_RIGHT_instance;
  function MaterialIcon$ROTATE_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROTATE_RIGHT_instance;
  }
  var MaterialIcon$ROUNDED_CORNER_instance;
  function MaterialIcon$ROUNDED_CORNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROUNDED_CORNER_instance;
  }
  var MaterialIcon$ROUTER_instance;
  function MaterialIcon$ROUTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROUTER_instance;
  }
  var MaterialIcon$ROWING_instance;
  function MaterialIcon$ROWING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ROWING_instance;
  }
  var MaterialIcon$RSS_FEED_instance;
  function MaterialIcon$RSS_FEED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RSS_FEED_instance;
  }
  var MaterialIcon$RV_HOOKUP_instance;
  function MaterialIcon$RV_HOOKUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$RV_HOOKUP_instance;
  }
  var MaterialIcon$SATELLITE_instance;
  function MaterialIcon$SATELLITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SATELLITE_instance;
  }
  var MaterialIcon$SAVE_instance;
  function MaterialIcon$SAVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SAVE_instance;
  }
  var MaterialIcon$SCANNER_instance;
  function MaterialIcon$SCANNER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCANNER_instance;
  }
  var MaterialIcon$SCHEDULE_instance;
  function MaterialIcon$SCHEDULE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCHEDULE_instance;
  }
  var MaterialIcon$SCHOOL_instance;
  function MaterialIcon$SCHOOL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCHOOL_instance;
  }
  var MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance;
  function MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_LANDSCAPE_instance;
  }
  var MaterialIcon$SCREEN_LOCK_PORTRAIT_instance;
  function MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_PORTRAIT_instance;
  }
  var MaterialIcon$SCREEN_LOCK_ROTATION_instance;
  function MaterialIcon$SCREEN_LOCK_ROTATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_LOCK_ROTATION_instance;
  }
  var MaterialIcon$SCREEN_ROTATION_instance;
  function MaterialIcon$SCREEN_ROTATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_ROTATION_instance;
  }
  var MaterialIcon$SCREEN_SHARE_instance;
  function MaterialIcon$SCREEN_SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SCREEN_SHARE_instance;
  }
  var MaterialIcon$SD_CARD_instance;
  function MaterialIcon$SD_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SD_CARD_instance;
  }
  var MaterialIcon$SD_STORAGE_instance;
  function MaterialIcon$SD_STORAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SD_STORAGE_instance;
  }
  var MaterialIcon$SEARCH_instance;
  function MaterialIcon$SEARCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SEARCH_instance;
  }
  var MaterialIcon$SECURITY_instance;
  function MaterialIcon$SECURITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SECURITY_instance;
  }
  var MaterialIcon$SELECT_ALL_instance;
  function MaterialIcon$SELECT_ALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SELECT_ALL_instance;
  }
  var MaterialIcon$SEND_instance;
  function MaterialIcon$SEND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SEND_instance;
  }
  var MaterialIcon$SENTIMENT_DISSATISFIED_instance;
  function MaterialIcon$SENTIMENT_DISSATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_DISSATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_NEUTRAL_instance;
  function MaterialIcon$SENTIMENT_NEUTRAL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_NEUTRAL_instance;
  }
  var MaterialIcon$SENTIMENT_SATISFIED_instance;
  function MaterialIcon$SENTIMENT_SATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_SATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance;
  function MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_VERY_DISSATISFIED_instance;
  }
  var MaterialIcon$SENTIMENT_VERY_SATISFIED_instance;
  function MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SENTIMENT_VERY_SATISFIED_instance;
  }
  var MaterialIcon$SETTINGS_instance;
  function MaterialIcon$SETTINGS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_instance;
  }
  var MaterialIcon$SETTINGS_APPLICATIONS_instance;
  function MaterialIcon$SETTINGS_APPLICATIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_APPLICATIONS_instance;
  }
  var MaterialIcon$SETTINGS_BACKUP_RESTORE_instance;
  function MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BACKUP_RESTORE_instance;
  }
  var MaterialIcon$SETTINGS_BLUETOOTH_instance;
  function MaterialIcon$SETTINGS_BLUETOOTH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BLUETOOTH_instance;
  }
  var MaterialIcon$SETTINGS_BRIGHTNESS_instance;
  function MaterialIcon$SETTINGS_BRIGHTNESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_BRIGHTNESS_instance;
  }
  var MaterialIcon$SETTINGS_CELL_instance;
  function MaterialIcon$SETTINGS_CELL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_CELL_instance;
  }
  var MaterialIcon$SETTINGS_ETHERNET_instance;
  function MaterialIcon$SETTINGS_ETHERNET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_ETHERNET_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_ANTENNA_instance;
  function MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_ANTENNA_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_COMPONENT_instance;
  function MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_COMPONENT_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance;
  function MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_COMPOSITE_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_HDMI_instance;
  function MaterialIcon$SETTINGS_INPUT_HDMI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_HDMI_instance;
  }
  var MaterialIcon$SETTINGS_INPUT_SVIDEO_instance;
  function MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_INPUT_SVIDEO_instance;
  }
  var MaterialIcon$SETTINGS_OVERSCAN_instance;
  function MaterialIcon$SETTINGS_OVERSCAN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_OVERSCAN_instance;
  }
  var MaterialIcon$SETTINGS_PHONE_instance;
  function MaterialIcon$SETTINGS_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_PHONE_instance;
  }
  var MaterialIcon$SETTINGS_POWER_instance;
  function MaterialIcon$SETTINGS_POWER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_POWER_instance;
  }
  var MaterialIcon$SETTINGS_REMOTE_instance;
  function MaterialIcon$SETTINGS_REMOTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_REMOTE_instance;
  }
  var MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance;
  function MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_instance;
  }
  var MaterialIcon$SETTINGS_VOICE_instance;
  function MaterialIcon$SETTINGS_VOICE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SETTINGS_VOICE_instance;
  }
  var MaterialIcon$SHARE_instance;
  function MaterialIcon$SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHARE_instance;
  }
  var MaterialIcon$SHOP_instance;
  function MaterialIcon$SHOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOP_instance;
  }
  var MaterialIcon$SHOP_TWO_instance;
  function MaterialIcon$SHOP_TWO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOP_TWO_instance;
  }
  var MaterialIcon$SHOPPING_BASKET_instance;
  function MaterialIcon$SHOPPING_BASKET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOPPING_BASKET_instance;
  }
  var MaterialIcon$SHOPPING_CART_instance;
  function MaterialIcon$SHOPPING_CART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOPPING_CART_instance;
  }
  var MaterialIcon$SHORT_TEXT_instance;
  function MaterialIcon$SHORT_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHORT_TEXT_instance;
  }
  var MaterialIcon$SHOW_CHART_instance;
  function MaterialIcon$SHOW_CHART_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHOW_CHART_instance;
  }
  var MaterialIcon$SHUFFLE_instance;
  function MaterialIcon$SHUFFLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SHUFFLE_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance;
  function MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance;
  function MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance;
  function MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_NO_SIM_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_NULL_instance;
  function MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_NULL_instance;
  }
  var MaterialIcon$SIGNAL_CELLULAR_OFF_instance;
  function MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_CELLULAR_OFF_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_4_BAR_instance;
  function MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_4_BAR_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance;
  function MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_instance;
  }
  var MaterialIcon$SIGNAL_WIFI_OFF_instance;
  function MaterialIcon$SIGNAL_WIFI_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIGNAL_WIFI_OFF_instance;
  }
  var MaterialIcon$SIM_CARD_instance;
  function MaterialIcon$SIM_CARD_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIM_CARD_instance;
  }
  var MaterialIcon$SIM_CARD_ALERT_instance;
  function MaterialIcon$SIM_CARD_ALERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SIM_CARD_ALERT_instance;
  }
  var MaterialIcon$SKIP_NEXT_instance;
  function MaterialIcon$SKIP_NEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SKIP_NEXT_instance;
  }
  var MaterialIcon$SKIP_PREVIOUS_instance;
  function MaterialIcon$SKIP_PREVIOUS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SKIP_PREVIOUS_instance;
  }
  var MaterialIcon$SLIDESHOW_instance;
  function MaterialIcon$SLIDESHOW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SLIDESHOW_instance;
  }
  var MaterialIcon$SLOW_MOTION_VIDEO_instance;
  function MaterialIcon$SLOW_MOTION_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SLOW_MOTION_VIDEO_instance;
  }
  var MaterialIcon$SMARTPHONE_instance;
  function MaterialIcon$SMARTPHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMARTPHONE_instance;
  }
  var MaterialIcon$SMOKE_FREE_instance;
  function MaterialIcon$SMOKE_FREE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMOKE_FREE_instance;
  }
  var MaterialIcon$SMOKING_ROOMS_instance;
  function MaterialIcon$SMOKING_ROOMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMOKING_ROOMS_instance;
  }
  var MaterialIcon$SMS_instance;
  function MaterialIcon$SMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMS_instance;
  }
  var MaterialIcon$SMS_FAILED_instance;
  function MaterialIcon$SMS_FAILED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SMS_FAILED_instance;
  }
  var MaterialIcon$SNOOZE_instance;
  function MaterialIcon$SNOOZE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SNOOZE_instance;
  }
  var MaterialIcon$SORT_instance;
  function MaterialIcon$SORT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SORT_instance;
  }
  var MaterialIcon$SORT_BY_ALPHA_instance;
  function MaterialIcon$SORT_BY_ALPHA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SORT_BY_ALPHA_instance;
  }
  var MaterialIcon$SPA_instance;
  function MaterialIcon$SPA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPA_instance;
  }
  var MaterialIcon$SPACE_BAR_instance;
  function MaterialIcon$SPACE_BAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPACE_BAR_instance;
  }
  var MaterialIcon$SPEAKER_instance;
  function MaterialIcon$SPEAKER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_instance;
  }
  var MaterialIcon$SPEAKER_GROUP_instance;
  function MaterialIcon$SPEAKER_GROUP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_GROUP_instance;
  }
  var MaterialIcon$SPEAKER_NOTES_instance;
  function MaterialIcon$SPEAKER_NOTES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_NOTES_instance;
  }
  var MaterialIcon$SPEAKER_NOTES_OFF_instance;
  function MaterialIcon$SPEAKER_NOTES_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_NOTES_OFF_instance;
  }
  var MaterialIcon$SPEAKER_PHONE_instance;
  function MaterialIcon$SPEAKER_PHONE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPEAKER_PHONE_instance;
  }
  var MaterialIcon$SPELLCHECK_instance;
  function MaterialIcon$SPELLCHECK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SPELLCHECK_instance;
  }
  var MaterialIcon$STAR_instance;
  function MaterialIcon$STAR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_instance;
  }
  var MaterialIcon$STAR_BORDER_instance;
  function MaterialIcon$STAR_BORDER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_BORDER_instance;
  }
  var MaterialIcon$STAR_HALF_instance;
  function MaterialIcon$STAR_HALF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAR_HALF_instance;
  }
  var MaterialIcon$STARS_instance;
  function MaterialIcon$STARS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STARS_instance;
  }
  var MaterialIcon$STAY_CURRENT_LANDSCAPE_instance;
  function MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_CURRENT_LANDSCAPE_instance;
  }
  var MaterialIcon$STAY_CURRENT_PORTRAIT_instance;
  function MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_CURRENT_PORTRAIT_instance;
  }
  var MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance;
  function MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_PRIMARY_LANDSCAPE_instance;
  }
  var MaterialIcon$STAY_PRIMARY_PORTRAIT_instance;
  function MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STAY_PRIMARY_PORTRAIT_instance;
  }
  var MaterialIcon$STOP_instance;
  function MaterialIcon$STOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STOP_instance;
  }
  var MaterialIcon$STOP_SCREEN_SHARE_instance;
  function MaterialIcon$STOP_SCREEN_SHARE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STOP_SCREEN_SHARE_instance;
  }
  var MaterialIcon$STORAGE_instance;
  function MaterialIcon$STORAGE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORAGE_instance;
  }
  var MaterialIcon$STORE_instance;
  function MaterialIcon$STORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORE_instance;
  }
  var MaterialIcon$STORE_MALL_DIRECTORY_instance;
  function MaterialIcon$STORE_MALL_DIRECTORY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STORE_MALL_DIRECTORY_instance;
  }
  var MaterialIcon$STRAIGHTEN_instance;
  function MaterialIcon$STRAIGHTEN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STRAIGHTEN_instance;
  }
  var MaterialIcon$STREETVIEW_instance;
  function MaterialIcon$STREETVIEW_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STREETVIEW_instance;
  }
  var MaterialIcon$STRIKETHROUGH_S_instance;
  function MaterialIcon$STRIKETHROUGH_S_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STRIKETHROUGH_S_instance;
  }
  var MaterialIcon$STYLE_instance;
  function MaterialIcon$STYLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$STYLE_instance;
  }
  var MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance;
  function MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBDIRECTORY_ARROW_LEFT_instance;
  }
  var MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance;
  function MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_instance;
  }
  var MaterialIcon$SUBJECT_instance;
  function MaterialIcon$SUBJECT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBJECT_instance;
  }
  var MaterialIcon$SUBSCRIPTIONS_instance;
  function MaterialIcon$SUBSCRIPTIONS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBSCRIPTIONS_instance;
  }
  var MaterialIcon$SUBTITLES_instance;
  function MaterialIcon$SUBTITLES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBTITLES_instance;
  }
  var MaterialIcon$SUBWAY_instance;
  function MaterialIcon$SUBWAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUBWAY_instance;
  }
  var MaterialIcon$SUPERVISOR_ACCOUNT_instance;
  function MaterialIcon$SUPERVISOR_ACCOUNT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SUPERVISOR_ACCOUNT_instance;
  }
  var MaterialIcon$SURROUND_SOUND_instance;
  function MaterialIcon$SURROUND_SOUND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SURROUND_SOUND_instance;
  }
  var MaterialIcon$SWAP_CALLS_instance;
  function MaterialIcon$SWAP_CALLS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_CALLS_instance;
  }
  var MaterialIcon$SWAP_HORIZ_instance;
  function MaterialIcon$SWAP_HORIZ_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_HORIZ_instance;
  }
  var MaterialIcon$SWAP_VERT_instance;
  function MaterialIcon$SWAP_VERT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_VERT_instance;
  }
  var MaterialIcon$SWAP_VERTICAL_CIRCLE_instance;
  function MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWAP_VERTICAL_CIRCLE_instance;
  }
  var MaterialIcon$SWITCH_CAMERA_instance;
  function MaterialIcon$SWITCH_CAMERA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWITCH_CAMERA_instance;
  }
  var MaterialIcon$SWITCH_VIDEO_instance;
  function MaterialIcon$SWITCH_VIDEO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SWITCH_VIDEO_instance;
  }
  var MaterialIcon$SYNC_instance;
  function MaterialIcon$SYNC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_instance;
  }
  var MaterialIcon$SYNC_DISABLED_instance;
  function MaterialIcon$SYNC_DISABLED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_DISABLED_instance;
  }
  var MaterialIcon$SYNC_PROBLEM_instance;
  function MaterialIcon$SYNC_PROBLEM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYNC_PROBLEM_instance;
  }
  var MaterialIcon$SYSTEM_UPDATE_instance;
  function MaterialIcon$SYSTEM_UPDATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYSTEM_UPDATE_instance;
  }
  var MaterialIcon$SYSTEM_UPDATE_ALT_instance;
  function MaterialIcon$SYSTEM_UPDATE_ALT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$SYSTEM_UPDATE_ALT_instance;
  }
  var MaterialIcon$TAB_instance;
  function MaterialIcon$TAB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAB_instance;
  }
  var MaterialIcon$TAB_UNSELECTED_instance;
  function MaterialIcon$TAB_UNSELECTED_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAB_UNSELECTED_instance;
  }
  var MaterialIcon$TABLET_instance;
  function MaterialIcon$TABLET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_instance;
  }
  var MaterialIcon$TABLET_ANDROID_instance;
  function MaterialIcon$TABLET_ANDROID_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_ANDROID_instance;
  }
  var MaterialIcon$TABLET_MAC_instance;
  function MaterialIcon$TABLET_MAC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TABLET_MAC_instance;
  }
  var MaterialIcon$TAG_FACES_instance;
  function MaterialIcon$TAG_FACES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAG_FACES_instance;
  }
  var MaterialIcon$TAP_AND_PLAY_instance;
  function MaterialIcon$TAP_AND_PLAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TAP_AND_PLAY_instance;
  }
  var MaterialIcon$TERRAIN_instance;
  function MaterialIcon$TERRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TERRAIN_instance;
  }
  var MaterialIcon$TEXT_FIELDS_instance;
  function MaterialIcon$TEXT_FIELDS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXT_FIELDS_instance;
  }
  var MaterialIcon$TEXT_FORMAT_instance;
  function MaterialIcon$TEXT_FORMAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXT_FORMAT_instance;
  }
  var MaterialIcon$TEXTSMS_instance;
  function MaterialIcon$TEXTSMS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXTSMS_instance;
  }
  var MaterialIcon$TEXTURE_instance;
  function MaterialIcon$TEXTURE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TEXTURE_instance;
  }
  var MaterialIcon$THEATERS_instance;
  function MaterialIcon$THEATERS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THEATERS_instance;
  }
  var MaterialIcon$THUMB_DOWN_instance;
  function MaterialIcon$THUMB_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMB_DOWN_instance;
  }
  var MaterialIcon$THUMB_UP_instance;
  function MaterialIcon$THUMB_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMB_UP_instance;
  }
  var MaterialIcon$THUMBS_UP_DOWN_instance;
  function MaterialIcon$THUMBS_UP_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$THUMBS_UP_DOWN_instance;
  }
  var MaterialIcon$TIME_TO_LEAVE_instance;
  function MaterialIcon$TIME_TO_LEAVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIME_TO_LEAVE_instance;
  }
  var MaterialIcon$TIMELAPSE_instance;
  function MaterialIcon$TIMELAPSE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMELAPSE_instance;
  }
  var MaterialIcon$TIMELINE_instance;
  function MaterialIcon$TIMELINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMELINE_instance;
  }
  var MaterialIcon$TIMER_instance;
  function MaterialIcon$TIMER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_instance;
  }
  var MaterialIcon$TIMER_10_instance;
  function MaterialIcon$TIMER_10_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_10_instance;
  }
  var MaterialIcon$TIMER_3_instance;
  function MaterialIcon$TIMER_3_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_3_instance;
  }
  var MaterialIcon$TIMER_OFF_instance;
  function MaterialIcon$TIMER_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TIMER_OFF_instance;
  }
  var MaterialIcon$TITLE_instance;
  function MaterialIcon$TITLE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TITLE_instance;
  }
  var MaterialIcon$TOC_instance;
  function MaterialIcon$TOC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOC_instance;
  }
  var MaterialIcon$TODAY_instance;
  function MaterialIcon$TODAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TODAY_instance;
  }
  var MaterialIcon$TOLL_instance;
  function MaterialIcon$TOLL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOLL_instance;
  }
  var MaterialIcon$TONALITY_instance;
  function MaterialIcon$TONALITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TONALITY_instance;
  }
  var MaterialIcon$TOUCH_APP_instance;
  function MaterialIcon$TOUCH_APP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOUCH_APP_instance;
  }
  var MaterialIcon$TOYS_instance;
  function MaterialIcon$TOYS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TOYS_instance;
  }
  var MaterialIcon$TRACK_CHANGES_instance;
  function MaterialIcon$TRACK_CHANGES_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRACK_CHANGES_instance;
  }
  var MaterialIcon$TRAFFIC_instance;
  function MaterialIcon$TRAFFIC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAFFIC_instance;
  }
  var MaterialIcon$TRAIN_instance;
  function MaterialIcon$TRAIN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAIN_instance;
  }
  var MaterialIcon$TRAM_instance;
  function MaterialIcon$TRAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRAM_instance;
  }
  var MaterialIcon$TRANSFER_WITHIN_A_STATION_instance;
  function MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSFER_WITHIN_A_STATION_instance;
  }
  var MaterialIcon$TRANSFORM_instance;
  function MaterialIcon$TRANSFORM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSFORM_instance;
  }
  var MaterialIcon$TRANSLATE_instance;
  function MaterialIcon$TRANSLATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRANSLATE_instance;
  }
  var MaterialIcon$TRENDING_DOWN_instance;
  function MaterialIcon$TRENDING_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_DOWN_instance;
  }
  var MaterialIcon$TRENDING_FLAT_instance;
  function MaterialIcon$TRENDING_FLAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_FLAT_instance;
  }
  var MaterialIcon$TRENDING_UP_instance;
  function MaterialIcon$TRENDING_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TRENDING_UP_instance;
  }
  var MaterialIcon$TUNE_instance;
  function MaterialIcon$TUNE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TUNE_instance;
  }
  var MaterialIcon$TURNED_IN_instance;
  function MaterialIcon$TURNED_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TURNED_IN_instance;
  }
  var MaterialIcon$TURNED_IN_NOT_instance;
  function MaterialIcon$TURNED_IN_NOT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TURNED_IN_NOT_instance;
  }
  var MaterialIcon$TV_instance;
  function MaterialIcon$TV_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$TV_instance;
  }
  var MaterialIcon$UNARCHIVE_instance;
  function MaterialIcon$UNARCHIVE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNARCHIVE_instance;
  }
  var MaterialIcon$UNDO_instance;
  function MaterialIcon$UNDO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNDO_instance;
  }
  var MaterialIcon$UNFOLD_LESS_instance;
  function MaterialIcon$UNFOLD_LESS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNFOLD_LESS_instance;
  }
  var MaterialIcon$UNFOLD_MORE_instance;
  function MaterialIcon$UNFOLD_MORE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UNFOLD_MORE_instance;
  }
  var MaterialIcon$UPDATE_instance;
  function MaterialIcon$UPDATE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$UPDATE_instance;
  }
  var MaterialIcon$USB_instance;
  function MaterialIcon$USB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$USB_instance;
  }
  var MaterialIcon$VERIFIED_USER_instance;
  function MaterialIcon$VERIFIED_USER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERIFIED_USER_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance;
  function MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_BOTTOM_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_CENTER_instance;
  function MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_CENTER_instance;
  }
  var MaterialIcon$VERTICAL_ALIGN_TOP_instance;
  function MaterialIcon$VERTICAL_ALIGN_TOP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VERTICAL_ALIGN_TOP_instance;
  }
  var MaterialIcon$VIBRATION_instance;
  function MaterialIcon$VIBRATION_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIBRATION_instance;
  }
  var MaterialIcon$VIDEO_CALL_instance;
  function MaterialIcon$VIDEO_CALL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_CALL_instance;
  }
  var MaterialIcon$VIDEO_LABEL_instance;
  function MaterialIcon$VIDEO_LABEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_LABEL_instance;
  }
  var MaterialIcon$VIDEO_LIBRARY_instance;
  function MaterialIcon$VIDEO_LIBRARY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEO_LIBRARY_instance;
  }
  var MaterialIcon$VIDEOCAM_instance;
  function MaterialIcon$VIDEOCAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOCAM_instance;
  }
  var MaterialIcon$VIDEOCAM_OFF_instance;
  function MaterialIcon$VIDEOCAM_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOCAM_OFF_instance;
  }
  var MaterialIcon$VIDEOGAME_ASSET_instance;
  function MaterialIcon$VIDEOGAME_ASSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIDEOGAME_ASSET_instance;
  }
  var MaterialIcon$VIEW_AGENDA_instance;
  function MaterialIcon$VIEW_AGENDA_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_AGENDA_instance;
  }
  var MaterialIcon$VIEW_ARRAY_instance;
  function MaterialIcon$VIEW_ARRAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_ARRAY_instance;
  }
  var MaterialIcon$VIEW_CAROUSEL_instance;
  function MaterialIcon$VIEW_CAROUSEL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_CAROUSEL_instance;
  }
  var MaterialIcon$VIEW_COLUMN_instance;
  function MaterialIcon$VIEW_COLUMN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COLUMN_instance;
  }
  var MaterialIcon$VIEW_COMFY_instance;
  function MaterialIcon$VIEW_COMFY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COMFY_instance;
  }
  var MaterialIcon$VIEW_COMPACT_instance;
  function MaterialIcon$VIEW_COMPACT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_COMPACT_instance;
  }
  var MaterialIcon$VIEW_DAY_instance;
  function MaterialIcon$VIEW_DAY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_DAY_instance;
  }
  var MaterialIcon$VIEW_HEADLINE_instance;
  function MaterialIcon$VIEW_HEADLINE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_HEADLINE_instance;
  }
  var MaterialIcon$VIEW_LIST_instance;
  function MaterialIcon$VIEW_LIST_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_LIST_instance;
  }
  var MaterialIcon$VIEW_MODULE_instance;
  function MaterialIcon$VIEW_MODULE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_MODULE_instance;
  }
  var MaterialIcon$VIEW_QUILT_instance;
  function MaterialIcon$VIEW_QUILT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_QUILT_instance;
  }
  var MaterialIcon$VIEW_STREAM_instance;
  function MaterialIcon$VIEW_STREAM_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_STREAM_instance;
  }
  var MaterialIcon$VIEW_WEEK_instance;
  function MaterialIcon$VIEW_WEEK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIEW_WEEK_instance;
  }
  var MaterialIcon$VIGNETTE_instance;
  function MaterialIcon$VIGNETTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VIGNETTE_instance;
  }
  var MaterialIcon$VISIBILITY_instance;
  function MaterialIcon$VISIBILITY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VISIBILITY_instance;
  }
  var MaterialIcon$VISIBILITY_OFF_instance;
  function MaterialIcon$VISIBILITY_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VISIBILITY_OFF_instance;
  }
  var MaterialIcon$VOICE_CHAT_instance;
  function MaterialIcon$VOICE_CHAT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOICE_CHAT_instance;
  }
  var MaterialIcon$VOICEMAIL_instance;
  function MaterialIcon$VOICEMAIL_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOICEMAIL_instance;
  }
  var MaterialIcon$VOLUME_DOWN_instance;
  function MaterialIcon$VOLUME_DOWN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_DOWN_instance;
  }
  var MaterialIcon$VOLUME_MUTE_instance;
  function MaterialIcon$VOLUME_MUTE_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_MUTE_instance;
  }
  var MaterialIcon$VOLUME_OFF_instance;
  function MaterialIcon$VOLUME_OFF_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_OFF_instance;
  }
  var MaterialIcon$VOLUME_UP_instance;
  function MaterialIcon$VOLUME_UP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VOLUME_UP_instance;
  }
  var MaterialIcon$VPN_KEY_instance;
  function MaterialIcon$VPN_KEY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VPN_KEY_instance;
  }
  var MaterialIcon$VPN_LOCK_instance;
  function MaterialIcon$VPN_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$VPN_LOCK_instance;
  }
  var MaterialIcon$WALLPAPER_instance;
  function MaterialIcon$WALLPAPER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WALLPAPER_instance;
  }
  var MaterialIcon$WARNING_instance;
  function MaterialIcon$WARNING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WARNING_instance;
  }
  var MaterialIcon$WATCH_instance;
  function MaterialIcon$WATCH_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WATCH_instance;
  }
  var MaterialIcon$WATCH_LATER_instance;
  function MaterialIcon$WATCH_LATER_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WATCH_LATER_instance;
  }
  var MaterialIcon$WB_AUTO_instance;
  function MaterialIcon$WB_AUTO_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_AUTO_instance;
  }
  var MaterialIcon$WB_CLOUDY_instance;
  function MaterialIcon$WB_CLOUDY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_CLOUDY_instance;
  }
  var MaterialIcon$WB_INCANDESCENT_instance;
  function MaterialIcon$WB_INCANDESCENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_INCANDESCENT_instance;
  }
  var MaterialIcon$WB_IRIDESCENT_instance;
  function MaterialIcon$WB_IRIDESCENT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_IRIDESCENT_instance;
  }
  var MaterialIcon$WB_SUNNY_instance;
  function MaterialIcon$WB_SUNNY_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WB_SUNNY_instance;
  }
  var MaterialIcon$WC_instance;
  function MaterialIcon$WC_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WC_instance;
  }
  var MaterialIcon$WEB_instance;
  function MaterialIcon$WEB_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEB_instance;
  }
  var MaterialIcon$WEB_ASSET_instance;
  function MaterialIcon$WEB_ASSET_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEB_ASSET_instance;
  }
  var MaterialIcon$WEEKEND_instance;
  function MaterialIcon$WEEKEND_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WEEKEND_instance;
  }
  var MaterialIcon$WHATSHOT_instance;
  function MaterialIcon$WHATSHOT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WHATSHOT_instance;
  }
  var MaterialIcon$WIDGETS_instance;
  function MaterialIcon$WIDGETS_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIDGETS_instance;
  }
  var MaterialIcon$WIFI_instance;
  function MaterialIcon$WIFI_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_instance;
  }
  var MaterialIcon$WIFI_LOCK_instance;
  function MaterialIcon$WIFI_LOCK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_LOCK_instance;
  }
  var MaterialIcon$WIFI_TETHERING_instance;
  function MaterialIcon$WIFI_TETHERING_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WIFI_TETHERING_instance;
  }
  var MaterialIcon$WORK_instance;
  function MaterialIcon$WORK_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WORK_instance;
  }
  var MaterialIcon$WRAP_TEXT_instance;
  function MaterialIcon$WRAP_TEXT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$WRAP_TEXT_instance;
  }
  var MaterialIcon$YOUTUBE_SEARCHED_FOR_instance;
  function MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$YOUTUBE_SEARCHED_FOR_instance;
  }
  var MaterialIcon$ZOOM_IN_instance;
  function MaterialIcon$ZOOM_IN_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_IN_instance;
  }
  var MaterialIcon$ZOOM_OUT_instance;
  function MaterialIcon$ZOOM_OUT_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_OUT_instance;
  }
  var MaterialIcon$ZOOM_OUT_MAP_instance;
  function MaterialIcon$ZOOM_OUT_MAP_getInstance() {
    MaterialIcon_initFields();
    return MaterialIcon$ZOOM_OUT_MAP_instance;
  }
  Object.defineProperty(MaterialIcon.prototype, 'element', {
    get: function () {
      var $receiver = document.createElement('i');
      $receiver.classList.add('material-icons');
      $receiver.textContent = this.ligature_6ddpre$_0;
      return $receiver;
    }
  });
  MaterialIcon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaterialIcon',
    interfaces: [Icon, Enum]
  };
  function MaterialIcon$values() {
    return [MaterialIcon$ROTATION_3D_getInstance(), MaterialIcon$AC_UNIT_getInstance(), MaterialIcon$ACCESS_ALARM_getInstance(), MaterialIcon$ACCESS_ALARMS_getInstance(), MaterialIcon$ACCESS_TIME_getInstance(), MaterialIcon$ACCESSIBILITY_getInstance(), MaterialIcon$ACCESSIBLE_getInstance(), MaterialIcon$ACCOUNT_BALANCE_getInstance(), MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance(), MaterialIcon$ACCOUNT_BOX_getInstance(), MaterialIcon$ACCOUNT_CIRCLE_getInstance(), MaterialIcon$ADB_getInstance(), MaterialIcon$ADD_getInstance(), MaterialIcon$ADD_A_PHOTO_getInstance(), MaterialIcon$ADD_ALARM_getInstance(), MaterialIcon$ADD_ALERT_getInstance(), MaterialIcon$ADD_BOX_getInstance(), MaterialIcon$ADD_CIRCLE_getInstance(), MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance(), MaterialIcon$ADD_LOCATION_getInstance(), MaterialIcon$ADD_SHOPPING_CART_getInstance(), MaterialIcon$ADD_TO_PHOTOS_getInstance(), MaterialIcon$ADD_TO_QUEUE_getInstance(), MaterialIcon$ADJUST_getInstance(), MaterialIcon$AIRLINE_SEAT_FLAT_getInstance(), MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance(), MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance(), MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance(), MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance(), MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance(), MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance(), MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance(), MaterialIcon$AIRPLAY_getInstance(), MaterialIcon$AIRPORT_SHUTTLE_getInstance(), MaterialIcon$ALARM_getInstance(), MaterialIcon$ALARM_ADD_getInstance(), MaterialIcon$ALARM_OFF_getInstance(), MaterialIcon$ALARM_ON_getInstance(), MaterialIcon$ALBUM_getInstance(), MaterialIcon$ALL_INCLUSIVE_getInstance(), MaterialIcon$ALL_OUT_getInstance(), MaterialIcon$ANDROID_getInstance(), MaterialIcon$ANNOUNCEMENT_getInstance(), MaterialIcon$APPS_getInstance(), MaterialIcon$ARCHIVE_getInstance(), MaterialIcon$ARROW_BACK_getInstance(), MaterialIcon$ARROW_DOWNWARD_getInstance(), MaterialIcon$ARROW_DROP_DOWN_getInstance(), MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance(), MaterialIcon$ARROW_DROP_UP_getInstance(), MaterialIcon$ARROW_FORWARD_getInstance(), MaterialIcon$ARROW_UPWARD_getInstance(), MaterialIcon$ART_TRACK_getInstance(), MaterialIcon$ASPECT_RATIO_getInstance(), MaterialIcon$ASSESSMENT_getInstance(), MaterialIcon$ASSIGNMENT_getInstance(), MaterialIcon$ASSIGNMENT_IND_getInstance(), MaterialIcon$ASSIGNMENT_LATE_getInstance(), MaterialIcon$ASSIGNMENT_RETURN_getInstance(), MaterialIcon$ASSIGNMENT_RETURNED_getInstance(), MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance(), MaterialIcon$ASSISTANT_getInstance(), MaterialIcon$ASSISTANT_PHOTO_getInstance(), MaterialIcon$ATTACH_FILE_getInstance(), MaterialIcon$ATTACH_MONEY_getInstance(), MaterialIcon$ATTACHMENT_getInstance(), MaterialIcon$AUDIOTRACK_getInstance(), MaterialIcon$AUTORENEW_getInstance(), MaterialIcon$AV_TIMER_getInstance(), MaterialIcon$BACKSPACE_getInstance(), MaterialIcon$BACKUP_getInstance(), MaterialIcon$BATTERY_ALERT_getInstance(), MaterialIcon$BATTERY_CHARGING_FULL_getInstance(), MaterialIcon$BATTERY_FULL_getInstance(), MaterialIcon$BATTERY_STD_getInstance(), MaterialIcon$BATTERY_UNKNOWN_getInstance(), MaterialIcon$BEACH_ACCESS_getInstance(), MaterialIcon$BEENHERE_getInstance(), MaterialIcon$BLOCK_getInstance(), MaterialIcon$BLUETOOTH_getInstance(), MaterialIcon$BLUETOOTH_AUDIO_getInstance(), MaterialIcon$BLUETOOTH_CONNECTED_getInstance(), MaterialIcon$BLUETOOTH_DISABLED_getInstance(), MaterialIcon$BLUETOOTH_SEARCHING_getInstance(), MaterialIcon$BLUR_CIRCULAR_getInstance(), MaterialIcon$BLUR_LINEAR_getInstance(), MaterialIcon$BLUR_OFF_getInstance(), MaterialIcon$BLUR_ON_getInstance(), MaterialIcon$BOOK_getInstance(), MaterialIcon$BOOKMARK_getInstance(), MaterialIcon$BOOKMARK_BORDER_getInstance(), MaterialIcon$BORDER_ALL_getInstance(), MaterialIcon$BORDER_BOTTOM_getInstance(), MaterialIcon$BORDER_CLEAR_getInstance(), MaterialIcon$BORDER_COLOR_getInstance(), MaterialIcon$BORDER_HORIZONTAL_getInstance(), MaterialIcon$BORDER_INNER_getInstance(), MaterialIcon$BORDER_LEFT_getInstance(), MaterialIcon$BORDER_OUTER_getInstance(), MaterialIcon$BORDER_RIGHT_getInstance(), MaterialIcon$BORDER_STYLE_getInstance(), MaterialIcon$BORDER_TOP_getInstance(), MaterialIcon$BORDER_VERTICAL_getInstance(), MaterialIcon$BRANDING_WATERMARK_getInstance(), MaterialIcon$BRIGHTNESS_1_getInstance(), MaterialIcon$BRIGHTNESS_2_getInstance(), MaterialIcon$BRIGHTNESS_3_getInstance(), MaterialIcon$BRIGHTNESS_4_getInstance(), MaterialIcon$BRIGHTNESS_5_getInstance(), MaterialIcon$BRIGHTNESS_6_getInstance(), MaterialIcon$BRIGHTNESS_7_getInstance(), MaterialIcon$BRIGHTNESS_AUTO_getInstance(), MaterialIcon$BRIGHTNESS_HIGH_getInstance(), MaterialIcon$BRIGHTNESS_LOW_getInstance(), MaterialIcon$BRIGHTNESS_MEDIUM_getInstance(), MaterialIcon$BROKEN_IMAGE_getInstance(), MaterialIcon$BRUSH_getInstance(), MaterialIcon$BUBBLE_CHART_getInstance(), MaterialIcon$BUG_REPORT_getInstance(), MaterialIcon$BUILD_getInstance(), MaterialIcon$BURST_MODE_getInstance(), MaterialIcon$BUSINESS_getInstance(), MaterialIcon$BUSINESS_CENTER_getInstance(), MaterialIcon$CACHED_getInstance(), MaterialIcon$CAKE_getInstance(), MaterialIcon$CALL_getInstance(), MaterialIcon$CALL_END_getInstance(), MaterialIcon$CALL_MADE_getInstance(), MaterialIcon$CALL_MERGE_getInstance(), MaterialIcon$CALL_MISSED_getInstance(), MaterialIcon$CALL_MISSED_OUTGOING_getInstance(), MaterialIcon$CALL_RECEIVED_getInstance(), MaterialIcon$CALL_SPLIT_getInstance(), MaterialIcon$CALL_TO_ACTION_getInstance(), MaterialIcon$CAMERA_getInstance(), MaterialIcon$CAMERA_ALT_getInstance(), MaterialIcon$CAMERA_ENHANCE_getInstance(), MaterialIcon$CAMERA_FRONT_getInstance(), MaterialIcon$CAMERA_REAR_getInstance(), MaterialIcon$CAMERA_ROLL_getInstance(), MaterialIcon$CANCEL_getInstance(), MaterialIcon$CARD_GIFTCARD_getInstance(), MaterialIcon$CARD_MEMBERSHIP_getInstance(), MaterialIcon$CARD_TRAVEL_getInstance(), MaterialIcon$CASINO_getInstance(), MaterialIcon$CAST_getInstance(), MaterialIcon$CAST_CONNECTED_getInstance(), MaterialIcon$CENTER_FOCUS_STRONG_getInstance(), MaterialIcon$CENTER_FOCUS_WEAK_getInstance(), MaterialIcon$CHANGE_HISTORY_getInstance(), MaterialIcon$CHAT_getInstance(), MaterialIcon$CHAT_BUBBLE_getInstance(), MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance(), MaterialIcon$CHECK_getInstance(), MaterialIcon$CHECK_BOX_getInstance(), MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance(), MaterialIcon$CHECK_CIRCLE_getInstance(), MaterialIcon$CHEVRON_LEFT_getInstance(), MaterialIcon$CHEVRON_RIGHT_getInstance(), MaterialIcon$CHILD_CARE_getInstance(), MaterialIcon$CHILD_FRIENDLY_getInstance(), MaterialIcon$CHROME_RR_MODE_getInstance(), MaterialIcon$CLASS_getInstance(), MaterialIcon$CLEAR_getInstance(), MaterialIcon$CLEAR_ALL_getInstance(), MaterialIcon$CLOSE_getInstance(), MaterialIcon$CLOSED_CAPTION_getInstance(), MaterialIcon$CLOUD_getInstance(), MaterialIcon$CLOUD_CIRCLE_getInstance(), MaterialIcon$CLOUD_DONE_getInstance(), MaterialIcon$CLOUD_DOWNLOAD_getInstance(), MaterialIcon$CLOUD_OFF_getInstance(), MaterialIcon$CLOUD_QUEUE_getInstance(), MaterialIcon$CLOUD_UPLOAD_getInstance(), MaterialIcon$CODE_getInstance(), MaterialIcon$COLLECTIONS_getInstance(), MaterialIcon$COLLECTIONS_BOOKMARK_getInstance(), MaterialIcon$COLOR_LENS_getInstance(), MaterialIcon$COLORIZE_getInstance(), MaterialIcon$COMMENT_getInstance(), MaterialIcon$COMPARE_getInstance(), MaterialIcon$COMPARE_ARROWS_getInstance(), MaterialIcon$COMPUTER_getInstance(), MaterialIcon$CONFIRMATION_NUMBER_getInstance(), MaterialIcon$CONTACT_MAIL_getInstance(), MaterialIcon$CONTACT_PHONE_getInstance(), MaterialIcon$CONTACTS_getInstance(), MaterialIcon$CONTENT_COPY_getInstance(), MaterialIcon$CONTENT_CUT_getInstance(), MaterialIcon$CONTENT_PASTE_getInstance(), MaterialIcon$CONTROL_POINT_getInstance(), MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance(), MaterialIcon$COPYRIGHT_getInstance(), MaterialIcon$CREATE_getInstance(), MaterialIcon$CREATE_NEW_FOLDER_getInstance(), MaterialIcon$CREDIT_CARD_getInstance(), MaterialIcon$CROP_getInstance(), MaterialIcon$CROP_16_9_getInstance(), MaterialIcon$CROP_3_2_getInstance(), MaterialIcon$CROP_5_4_getInstance(), MaterialIcon$CROP_7_5_getInstance(), MaterialIcon$CROP_DIN_getInstance(), MaterialIcon$CROP_FREE_getInstance(), MaterialIcon$CROP_LANDSCAPE_getInstance(), MaterialIcon$CROP_ORIGINAL_getInstance(), MaterialIcon$CROP_PORTRAIT_getInstance(), MaterialIcon$CROP_ROTATE_getInstance(), MaterialIcon$CROP_SQUARE_getInstance(), MaterialIcon$DASHBOARD_getInstance(), MaterialIcon$DATA_USAGE_getInstance(), MaterialIcon$DATE_RANGE_getInstance(), MaterialIcon$DEHAZE_getInstance(), MaterialIcon$DELETE_getInstance(), MaterialIcon$DELETE_FOREVER_getInstance(), MaterialIcon$DELETE_SWEEP_getInstance(), MaterialIcon$DESCRIPTION_getInstance(), MaterialIcon$DESKTOP_MAC_getInstance(), MaterialIcon$DESKTOP_WINDOWS_getInstance(), MaterialIcon$DETAILS_getInstance(), MaterialIcon$DEVELOPER_BOARD_getInstance(), MaterialIcon$DEVELOPER_MODE_getInstance(), MaterialIcon$DEVICE_HUB_getInstance(), MaterialIcon$DEVICES_getInstance(), MaterialIcon$DEVICES_OTHER_getInstance(), MaterialIcon$DIALER_SIP_getInstance(), MaterialIcon$DIALPAD_getInstance(), MaterialIcon$DIRECTIONS_getInstance(), MaterialIcon$DIRECTIONS_BIKE_getInstance(), MaterialIcon$DIRECTIONS_BOAT_getInstance(), MaterialIcon$DIRECTIONS_BUS_getInstance(), MaterialIcon$DIRECTIONS_CAR_getInstance(), MaterialIcon$DIRECTIONS_RAILWAY_getInstance(), MaterialIcon$DIRECTIONS_RUN_getInstance(), MaterialIcon$DIRECTIONS_SUBWAY_getInstance(), MaterialIcon$DIRECTIONS_TRANSIT_getInstance(), MaterialIcon$DIRECTIONS_WALK_getInstance(), MaterialIcon$DISC_FULL_getInstance(), MaterialIcon$DNS_getInstance(), MaterialIcon$DO_NOT_DISTURB_getInstance(), MaterialIcon$DO_NOT_DISTURB_ALT_getInstance(), MaterialIcon$DO_NOT_DISTURB_OFF_getInstance(), MaterialIcon$DO_NOT_DISTURB_ON_getInstance(), MaterialIcon$DOCK_getInstance(), MaterialIcon$DOMAIN_getInstance(), MaterialIcon$DONE_getInstance(), MaterialIcon$DONE_ALL_getInstance(), MaterialIcon$DONUT_LARGE_getInstance(), MaterialIcon$DONUT_SMALL_getInstance(), MaterialIcon$DRAFTS_getInstance(), MaterialIcon$DRAG_HANDLE_getInstance(), MaterialIcon$DRIVE_ETA_getInstance(), MaterialIcon$DVR_getInstance(), MaterialIcon$EDIT_getInstance(), MaterialIcon$EDIT_LOCATION_getInstance(), MaterialIcon$EJECT_getInstance(), MaterialIcon$EMAIL_getInstance(), MaterialIcon$ENHANCED_ENCRYPTION_getInstance(), MaterialIcon$EQUALIZER_getInstance(), MaterialIcon$ERROR_getInstance(), MaterialIcon$ERROR_OUTLINE_getInstance(), MaterialIcon$EURO_SYMBOL_getInstance(), MaterialIcon$EV_STATION_getInstance(), MaterialIcon$EVENT_getInstance(), MaterialIcon$EVENT_AVAILABLE_getInstance(), MaterialIcon$EVENT_BUSY_getInstance(), MaterialIcon$EVENT_NOTE_getInstance(), MaterialIcon$EVENT_SEAT_getInstance(), MaterialIcon$EXIT_TO_APP_getInstance(), MaterialIcon$EXPAND_LESS_getInstance(), MaterialIcon$EXPAND_MORE_getInstance(), MaterialIcon$EXPLICIT_getInstance(), MaterialIcon$EXPLORE_getInstance(), MaterialIcon$EXPOSURE_getInstance(), MaterialIcon$EXPOSURE_NEG_1_getInstance(), MaterialIcon$EXPOSURE_NEG_2_getInstance(), MaterialIcon$EXPOSURE_PLUS_1_getInstance(), MaterialIcon$EXPOSURE_PLUS_2_getInstance(), MaterialIcon$EXPOSURE_ZERO_getInstance(), MaterialIcon$EXTENSION_getInstance(), MaterialIcon$FACE_getInstance(), MaterialIcon$FAST_FORWARD_getInstance(), MaterialIcon$FAST_REWIND_getInstance(), MaterialIcon$FAVORITE_getInstance(), MaterialIcon$FAVORITE_BORDER_getInstance(), MaterialIcon$FEATURED_PLAY_LIST_getInstance(), MaterialIcon$FEATURED_VIDEO_getInstance(), MaterialIcon$FACK_getInstance(), MaterialIcon$FIBER_DVR_getInstance(), MaterialIcon$FIBER_MANUAL_RECORD_getInstance(), MaterialIcon$FIBER_NEW_getInstance(), MaterialIcon$FIBER_PIN_getInstance(), MaterialIcon$FIBER_SMART_RECORD_getInstance(), MaterialIcon$FILE_DOWNLOAD_getInstance(), MaterialIcon$FILE_UPLOAD_getInstance(), MaterialIcon$FILTER_getInstance(), MaterialIcon$FILTER_1_getInstance(), MaterialIcon$FILTER_2_getInstance(), MaterialIcon$FILTER_3_getInstance(), MaterialIcon$FILTER_4_getInstance(), MaterialIcon$FILTER_5_getInstance(), MaterialIcon$FILTER_6_getInstance(), MaterialIcon$FILTER_7_getInstance(), MaterialIcon$FILTER_8_getInstance(), MaterialIcon$FILTER_9_getInstance(), MaterialIcon$FILTER_9_PLUS_getInstance(), MaterialIcon$FILTER_B_AND_W_getInstance(), MaterialIcon$FILTER_CENTER_FOCUS_getInstance(), MaterialIcon$FILTER_DRAMA_getInstance(), MaterialIcon$FILTER_FRAMES_getInstance(), MaterialIcon$FILTER_HDR_getInstance(), MaterialIcon$FILTER_LIST_getInstance(), MaterialIcon$FILTER_NONE_getInstance(), MaterialIcon$FILTER_TILT_SHIFT_getInstance(), MaterialIcon$FILTER_VINTAGE_getInstance(), MaterialIcon$FIND_IN_PAGE_getInstance(), MaterialIcon$FIND_REPLACE_getInstance(), MaterialIcon$FINGERPRINT_getInstance(), MaterialIcon$FIRST_PAGE_getInstance(), MaterialIcon$FITNESS_CENTER_getInstance(), MaterialIcon$FLAG_getInstance(), MaterialIcon$FLARE_getInstance(), MaterialIcon$FLASH_AUTO_getInstance(), MaterialIcon$FLASH_OFF_getInstance(), MaterialIcon$FLASH_ON_getInstance(), MaterialIcon$FLIGHT_getInstance(), MaterialIcon$FLIGHT_LAND_getInstance(), MaterialIcon$FLIGHT_TAKEOFF_getInstance(), MaterialIcon$FLIP_getInstance(), MaterialIcon$FLIP_TO_BACK_getInstance(), MaterialIcon$FLIP_TO_FRONT_getInstance(), MaterialIcon$FOLDER_getInstance(), MaterialIcon$FOLDER_OPEN_getInstance(), MaterialIcon$FOLDER_SHARED_getInstance(), MaterialIcon$FOLDER_SPECIAL_getInstance(), MaterialIcon$FONT_DOWNLOAD_getInstance(), MaterialIcon$FORMAT_ALIGN_CENTER_getInstance(), MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance(), MaterialIcon$FORMAT_ALIGN_LEFT_getInstance(), MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance(), MaterialIcon$FORMAT_BOLD_getInstance(), MaterialIcon$FORMAT_CLEAR_getInstance(), MaterialIcon$FORMAT_COLOR_FILL_getInstance(), MaterialIcon$FORMAT_COLOR_RESET_getInstance(), MaterialIcon$FORMAT_COLOR_TEXT_getInstance(), MaterialIcon$FORMAT_INDENT_DECREASE_getInstance(), MaterialIcon$FORMAT_INDENT_INCREASE_getInstance(), MaterialIcon$FORMAT_ITALIC_getInstance(), MaterialIcon$FORMAT_LINE_SPACING_getInstance(), MaterialIcon$FORMAT_LIST_BULLETED_getInstance(), MaterialIcon$FORMAT_LIST_NUMBERED_getInstance(), MaterialIcon$FORMAT_PAINT_getInstance(), MaterialIcon$FORMAT_QUOTE_getInstance(), MaterialIcon$FORMAT_SHAPES_getInstance(), MaterialIcon$FORMAT_SIZE_getInstance(), MaterialIcon$FORMAT_STRIKETHROUGH_getInstance(), MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance(), MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance(), MaterialIcon$FORMAT_UNDERLINED_getInstance(), MaterialIcon$FORUM_getInstance(), MaterialIcon$FORWARD_getInstance(), MaterialIcon$FORWARD_10_getInstance(), MaterialIcon$FORWARD_30_getInstance(), MaterialIcon$FORWARD_5_getInstance(), MaterialIcon$FREE_BREAKFAST_getInstance(), MaterialIcon$FULLSCREEN_getInstance(), MaterialIcon$FULLSCREEN_EXIT_getInstance(), MaterialIcon$FUNCTIONS_getInstance(), MaterialIcon$G_TRANSLATE_getInstance(), MaterialIcon$GAMEPAD_getInstance(), MaterialIcon$GAMES_getInstance(), MaterialIcon$GAVEL_getInstance(), MaterialIcon$GESTURE_getInstance(), MaterialIcon$GET_APP_getInstance(), MaterialIcon$GIF_getInstance(), MaterialIcon$GOLF_COURSE_getInstance(), MaterialIcon$GPS_FIXED_getInstance(), MaterialIcon$GPS_NOT_FIXED_getInstance(), MaterialIcon$GPS_OFF_getInstance(), MaterialIcon$GRADE_getInstance(), MaterialIcon$GRADIENT_getInstance(), MaterialIcon$GRAIN_getInstance(), MaterialIcon$GRAPHIC_EQ_getInstance(), MaterialIcon$GRID_OFF_getInstance(), MaterialIcon$GRID_ON_getInstance(), MaterialIcon$GROUP_getInstance(), MaterialIcon$GROUP_ADD_getInstance(), MaterialIcon$GROUP_WORK_getInstance(), MaterialIcon$HD_getInstance(), MaterialIcon$HDR_OFF_getInstance(), MaterialIcon$HDR_ON_getInstance(), MaterialIcon$HDR_STRONG_getInstance(), MaterialIcon$HDR_WEAK_getInstance(), MaterialIcon$HEADSET_getInstance(), MaterialIcon$HEADSET_MIC_getInstance(), MaterialIcon$HEALING_getInstance(), MaterialIcon$HEARING_getInstance(), MaterialIcon$HELP_getInstance(), MaterialIcon$HELP_OUTLINE_getInstance(), MaterialIcon$HIGH_QUALITY_getInstance(), MaterialIcon$HIGHLIGHT_getInstance(), MaterialIcon$HIGHLIGHT_OFF_getInstance(), MaterialIcon$HISTORY_getInstance(), MaterialIcon$HOME_getInstance(), MaterialIcon$HOT_TUB_getInstance(), MaterialIcon$HOTEL_getInstance(), MaterialIcon$HOURGLASS_EMPTY_getInstance(), MaterialIcon$HOURGLASS_FULL_getInstance(), MaterialIcon$HTTP_getInstance(), MaterialIcon$HTTPS_getInstance(), MaterialIcon$IMAGE_getInstance(), MaterialIcon$IMAGE_ASPECT_RATIO_getInstance(), MaterialIcon$IMPORT_CONTACTS_getInstance(), MaterialIcon$IMPORT_EXPORT_getInstance(), MaterialIcon$IMPORTANT_DEVICES_getInstance(), MaterialIcon$INBOX_getInstance(), MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance(), MaterialIcon$INFO_getInstance(), MaterialIcon$INFO_OUTLINE_getInstance(), MaterialIcon$INPUT_getInstance(), MaterialIcon$INSERT_CHART_getInstance(), MaterialIcon$INSERT_COMMENT_getInstance(), MaterialIcon$INSERT_DRIVE_FILE_getInstance(), MaterialIcon$INSERT_EMOTICON_getInstance(), MaterialIcon$INSERT_INVITATION_getInstance(), MaterialIcon$INSERT_LINK_getInstance(), MaterialIcon$INSERT_PHOTO_getInstance(), MaterialIcon$INVERT_COLORS_getInstance(), MaterialIcon$INVERT_COLORS_OFF_getInstance(), MaterialIcon$ISO_getInstance(), MaterialIcon$KEYBOARD_getInstance(), MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance(), MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance(), MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance(), MaterialIcon$KEYBOARD_ARROW_UP_getInstance(), MaterialIcon$KEYBOARD_BACKSPACE_getInstance(), MaterialIcon$KEYBOARD_CAPSLOCK_getInstance(), MaterialIcon$KEYBOARD_HIDE_getInstance(), MaterialIcon$KEYBOARD_RETURN_getInstance(), MaterialIcon$KEYBOARD_TAB_getInstance(), MaterialIcon$KEYBOARD_VOICE_getInstance(), MaterialIcon$KITCHEN_getInstance(), MaterialIcon$LABEL_getInstance(), MaterialIcon$LABEL_OUTLINE_getInstance(), MaterialIcon$LANDSCAPE_getInstance(), MaterialIcon$LANGUAGE_getInstance(), MaterialIcon$LAPTOP_getInstance(), MaterialIcon$LAPTOP_CHROMEBOOK_getInstance(), MaterialIcon$LAPTOP_MAC_getInstance(), MaterialIcon$LAPTOP_WINDOWS_getInstance(), MaterialIcon$LAST_PAGE_getInstance(), MaterialIcon$LAUNCH_getInstance(), MaterialIcon$LAYERS_getInstance(), MaterialIcon$LAYERS_CLEAR_getInstance(), MaterialIcon$LEAK_ADD_getInstance(), MaterialIcon$LEAK_REMOVE_getInstance(), MaterialIcon$LENS_getInstance(), MaterialIcon$LIBRARY_ADD_getInstance(), MaterialIcon$LIBRARY_BOOKS_getInstance(), MaterialIcon$LIBRARY_MUSIC_getInstance(), MaterialIcon$LIGHTBULB_OUTLINE_getInstance(), MaterialIcon$LINE_STYLE_getInstance(), MaterialIcon$LINE_WEIGHT_getInstance(), MaterialIcon$LINEAR_SCALE_getInstance(), MaterialIcon$LINK_getInstance(), MaterialIcon$LINKED_CAMERA_getInstance(), MaterialIcon$LIST_getInstance(), MaterialIcon$LIVE_HELP_getInstance(), MaterialIcon$LIVE_TV_getInstance(), MaterialIcon$LOCAL_ACTIVITY_getInstance(), MaterialIcon$LOCAL_AIRPORT_getInstance(), MaterialIcon$LOCAL_ATM_getInstance(), MaterialIcon$LOCAL_BAR_getInstance(), MaterialIcon$LOCAL_CAFE_getInstance(), MaterialIcon$LOCAL_CAR_WASH_getInstance(), MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance(), MaterialIcon$LOCAL_DINING_getInstance(), MaterialIcon$LOCAL_DRINK_getInstance(), MaterialIcon$LOCAL_FLORIST_getInstance(), MaterialIcon$LOCAL_GAS_STATION_getInstance(), MaterialIcon$LOCAL_GROCERY_STORE_getInstance(), MaterialIcon$LOCAL_HOSPITAL_getInstance(), MaterialIcon$LOCAL_HOTEL_getInstance(), MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance(), MaterialIcon$LOCAL_LIBRARY_getInstance(), MaterialIcon$LOCAL_MALL_getInstance(), MaterialIcon$LOCAL_MOVIES_getInstance(), MaterialIcon$LOCAL_OFFER_getInstance(), MaterialIcon$LOCAL_PARKING_getInstance(), MaterialIcon$LOCAL_PHARMACY_getInstance(), MaterialIcon$LOCAL_PHONE_getInstance(), MaterialIcon$LOCAL_PIZZA_getInstance(), MaterialIcon$LOCAL_PLAY_getInstance(), MaterialIcon$LOCAL_POST_OFFICE_getInstance(), MaterialIcon$LOCAL_PRINTSHOP_getInstance(), MaterialIcon$LOCAL_SEE_getInstance(), MaterialIcon$LOCAL_SHIPPING_getInstance(), MaterialIcon$LOCAL_TAXI_getInstance(), MaterialIcon$LOCATION_CITY_getInstance(), MaterialIcon$LOCATION_DISABLED_getInstance(), MaterialIcon$LOCATION_OFF_getInstance(), MaterialIcon$LOCATION_ON_getInstance(), MaterialIcon$LOCATION_SEARCHING_getInstance(), MaterialIcon$LOCK_getInstance(), MaterialIcon$LOCK_OPEN_getInstance(), MaterialIcon$LOCK_OUTLINE_getInstance(), MaterialIcon$LOOKS_getInstance(), MaterialIcon$LOOKS_3_getInstance(), MaterialIcon$LOOKS_4_getInstance(), MaterialIcon$LOOKS_5_getInstance(), MaterialIcon$LOOKS_6_getInstance(), MaterialIcon$LOOKS_ONE_getInstance(), MaterialIcon$LOOKS_TWO_getInstance(), MaterialIcon$LOOP_getInstance(), MaterialIcon$LOUPE_getInstance(), MaterialIcon$LOW_PRIORITY_getInstance(), MaterialIcon$LOYALTY_getInstance(), MaterialIcon$MAIL_getInstance(), MaterialIcon$MAIL_OUTLINE_getInstance(), MaterialIcon$MAP_getInstance(), MaterialIcon$MARKUNREAD_getInstance(), MaterialIcon$MARKUNREAD_MAILBOX_getInstance(), MaterialIcon$MEMORY_getInstance(), MaterialIcon$MENU_getInstance(), MaterialIcon$MERGE_TYPE_getInstance(), MaterialIcon$MESSAGE_getInstance(), MaterialIcon$MIC_getInstance(), MaterialIcon$MIC_NONE_getInstance(), MaterialIcon$MIC_OFF_getInstance(), MaterialIcon$MMS_getInstance(), MaterialIcon$MODE_COMMENT_getInstance(), MaterialIcon$MODE_EDIT_getInstance(), MaterialIcon$MONETIZATION_ON_getInstance(), MaterialIcon$MONEY_OFF_getInstance(), MaterialIcon$MONOCHROME_PHOTOS_getInstance(), MaterialIcon$MOOD_getInstance(), MaterialIcon$MOOD_BAD_getInstance(), MaterialIcon$MORE_getInstance(), MaterialIcon$MORE_HORIZ_getInstance(), MaterialIcon$MORE_VERT_getInstance(), MaterialIcon$MOTORCYCLE_getInstance(), MaterialIcon$MOUSE_getInstance(), MaterialIcon$MOVE_TO_INBOX_getInstance(), MaterialIcon$MOVIE_getInstance(), MaterialIcon$MOVIE_CREATION_getInstance(), MaterialIcon$MOVIE_FILTER_getInstance(), MaterialIcon$MULTILINE_CHART_getInstance(), MaterialIcon$MUSIC_NOTE_getInstance(), MaterialIcon$MUSIC_VIDEO_getInstance(), MaterialIcon$MY_LOCATION_getInstance(), MaterialIcon$NATURE_getInstance(), MaterialIcon$NATURE_PEOPLE_getInstance(), MaterialIcon$NAVIGATE_BEFORE_getInstance(), MaterialIcon$NAVIGATE_NEXT_getInstance(), MaterialIcon$NAVIGATION_getInstance(), MaterialIcon$NEAR_ME_getInstance(), MaterialIcon$NETWORK_CELL_getInstance(), MaterialIcon$NETWORK_CHECK_getInstance(), MaterialIcon$NETWORK_LOCKED_getInstance(), MaterialIcon$NETWORK_WIFI_getInstance(), MaterialIcon$NEW_RELEASES_getInstance(), MaterialIcon$NEXT_WEEK_getInstance(), MaterialIcon$NFC_getInstance(), MaterialIcon$NO_ENCRYPTION_getInstance(), MaterialIcon$NO_SIM_getInstance(), MaterialIcon$NOT_INTERESTED_getInstance(), MaterialIcon$NOTE_getInstance(), MaterialIcon$NOTE_ADD_getInstance(), MaterialIcon$NOTIFICATIONS_getInstance(), MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance(), MaterialIcon$NOTIFICATIONS_NONE_getInstance(), MaterialIcon$NOTIFICATIONS_OFF_getInstance(), MaterialIcon$NOTIFICATIONS_PAUSED_getInstance(), MaterialIcon$OFFLINE_PIN_getInstance(), MaterialIcon$ONDEMAND_VIDEO_getInstance(), MaterialIcon$OPACITY_getInstance(), MaterialIcon$OPEN_IN_BROWSER_getInstance(), MaterialIcon$OPEN_IN_NEW_getInstance(), MaterialIcon$OPEN_WITH_getInstance(), MaterialIcon$PAGES_getInstance(), MaterialIcon$PAGEVIEW_getInstance(), MaterialIcon$PALETTE_getInstance(), MaterialIcon$PAN_TOOL_getInstance(), MaterialIcon$PANORAMA_getInstance(), MaterialIcon$PANORAMA_FISH_EYE_getInstance(), MaterialIcon$PANORAMA_HORIZONTAL_getInstance(), MaterialIcon$PANORAMA_VERTICAL_getInstance(), MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance(), MaterialIcon$PARTY_MODE_getInstance(), MaterialIcon$PAUSE_getInstance(), MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance(), MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance(), MaterialIcon$PAYMENT_getInstance(), MaterialIcon$PEOPLE_getInstance(), MaterialIcon$PEOPLE_OUTLINE_getInstance(), MaterialIcon$PERM_CAMERA_MIC_getInstance(), MaterialIcon$PERM_CONTACT_CALENDAR_getInstance(), MaterialIcon$PERM_DATA_SETTING_getInstance(), MaterialIcon$PERM_DEVICE_INFORMATION_getInstance(), MaterialIcon$PERM_IDENTITY_getInstance(), MaterialIcon$PERM_MEDIA_getInstance(), MaterialIcon$PERM_PHONE_MSG_getInstance(), MaterialIcon$PERM_SCAN_WIFI_getInstance(), MaterialIcon$PERSON_getInstance(), MaterialIcon$PERSON_ADD_getInstance(), MaterialIcon$PERSON_OUTLINE_getInstance(), MaterialIcon$PERSON_PIN_getInstance(), MaterialIcon$PERSON_PIN_CIRCLE_getInstance(), MaterialIcon$PERSONAL_VIDEO_getInstance(), MaterialIcon$PETS_getInstance(), MaterialIcon$PHONE_getInstance(), MaterialIcon$PHONE_ANDROID_getInstance(), MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance(), MaterialIcon$PHONE_FORWARDED_getInstance(), MaterialIcon$PHONE_IN_TALK_getInstance(), MaterialIcon$PHONE_IPHONE_getInstance(), MaterialIcon$PHONE_LOCKED_getInstance(), MaterialIcon$PHONE_MISSED_getInstance(), MaterialIcon$PHONE_PAUSED_getInstance(), MaterialIcon$PHONELINK_getInstance(), MaterialIcon$PHONELINK_ERASE_getInstance(), MaterialIcon$PHONELINK_LOCK_getInstance(), MaterialIcon$PHONELINK_OFF_getInstance(), MaterialIcon$PHONELINK_RING_getInstance(), MaterialIcon$PHONELINK_SETUP_getInstance(), MaterialIcon$PHOTO_getInstance(), MaterialIcon$PHOTO_ALBUM_getInstance(), MaterialIcon$PHOTO_CAMERA_getInstance(), MaterialIcon$PHOTO_FILTER_getInstance(), MaterialIcon$PHOTO_LIBRARY_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance(), MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance(), MaterialIcon$PICTURE_AS_PDF_getInstance(), MaterialIcon$PICTURE_IN_PICTURE_getInstance(), MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance(), MaterialIcon$PIE_CHART_getInstance(), MaterialIcon$PIE_CHART_OUTLINED_getInstance(), MaterialIcon$PIN_DROP_getInstance(), MaterialIcon$PLACE_getInstance(), MaterialIcon$PLAY_ARROW_getInstance(), MaterialIcon$PLAY_CIRCLE_FILLED_getInstance(), MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance(), MaterialIcon$PLAY_FOR_WORK_getInstance(), MaterialIcon$PLAYLIST_ADD_getInstance(), MaterialIcon$PLAYLIST_ADD_CHECK_getInstance(), MaterialIcon$PLAYLIST_PLAY_getInstance(), MaterialIcon$PLUS_ONE_getInstance(), MaterialIcon$POLL_getInstance(), MaterialIcon$POLYMER_getInstance(), MaterialIcon$POOL_getInstance(), MaterialIcon$PORTABLE_WIFI_OFF_getInstance(), MaterialIcon$PORTRAIT_getInstance(), MaterialIcon$POWER_getInstance(), MaterialIcon$POWER_INPUT_getInstance(), MaterialIcon$POWER_SETTINGS_NEW_getInstance(), MaterialIcon$PREGNANT_WOMAN_getInstance(), MaterialIcon$PRESENT_TO_ALL_getInstance(), MaterialIcon$PRINT_getInstance(), MaterialIcon$PRIORITY_HIGH_getInstance(), MaterialIcon$PUBLIC_getInstance(), MaterialIcon$PUBLISH_getInstance(), MaterialIcon$QUERY_BUILDER_getInstance(), MaterialIcon$QUESTION_ANSWER_getInstance(), MaterialIcon$QUEUE_getInstance(), MaterialIcon$QUEUE_MUSIC_getInstance(), MaterialIcon$QUEUE_PLAY_NEXT_getInstance(), MaterialIcon$RADIO_getInstance(), MaterialIcon$RADIO_BUTTON_CHECKED_getInstance(), MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance(), MaterialIcon$RATE_REVIEW_getInstance(), MaterialIcon$RECEIPT_getInstance(), MaterialIcon$RECENT_ACTORS_getInstance(), MaterialIcon$RECORD_VOICE_OVER_getInstance(), MaterialIcon$RM_getInstance(), MaterialIcon$REDO_getInstance(), MaterialIcon$REFRESH_getInstance(), MaterialIcon$REMOVE_getInstance(), MaterialIcon$REMOVE_CIRCLE_getInstance(), MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance(), MaterialIcon$REMOVE_FROM_QUEUE_getInstance(), MaterialIcon$REMOVE_RED_EYE_getInstance(), MaterialIcon$REMOVE_SHOPPING_CART_getInstance(), MaterialIcon$REORDER_getInstance(), MaterialIcon$REPEAT_getInstance(), MaterialIcon$REPEAT_ONE_getInstance(), MaterialIcon$REPLAY_getInstance(), MaterialIcon$REPLAY_10_getInstance(), MaterialIcon$REPLAY_30_getInstance(), MaterialIcon$REPLAY_5_getInstance(), MaterialIcon$REPLY_getInstance(), MaterialIcon$REPLY_ALL_getInstance(), MaterialIcon$REPORT_getInstance(), MaterialIcon$REPORT_PROBLEM_getInstance(), MaterialIcon$RESTAURANT_getInstance(), MaterialIcon$RESTAURANT_MENU_getInstance(), MaterialIcon$RESTORE_getInstance(), MaterialIcon$RESTORE_PAGE_getInstance(), MaterialIcon$RING_VOLUME_getInstance(), MaterialIcon$ROOM_getInstance(), MaterialIcon$ROOM_SERVICE_getInstance(), MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance(), MaterialIcon$ROTATE_LEFT_getInstance(), MaterialIcon$ROTATE_RIGHT_getInstance(), MaterialIcon$ROUNDED_CORNER_getInstance(), MaterialIcon$ROUTER_getInstance(), MaterialIcon$ROWING_getInstance(), MaterialIcon$RSS_FEED_getInstance(), MaterialIcon$RV_HOOKUP_getInstance(), MaterialIcon$SATELLITE_getInstance(), MaterialIcon$SAVE_getInstance(), MaterialIcon$SCANNER_getInstance(), MaterialIcon$SCHEDULE_getInstance(), MaterialIcon$SCHOOL_getInstance(), MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance(), MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance(), MaterialIcon$SCREEN_LOCK_ROTATION_getInstance(), MaterialIcon$SCREEN_ROTATION_getInstance(), MaterialIcon$SCREEN_SHARE_getInstance(), MaterialIcon$SD_CARD_getInstance(), MaterialIcon$SD_STORAGE_getInstance(), MaterialIcon$SEARCH_getInstance(), MaterialIcon$SECURITY_getInstance(), MaterialIcon$SELECT_ALL_getInstance(), MaterialIcon$SEND_getInstance(), MaterialIcon$SENTIMENT_DISSATISFIED_getInstance(), MaterialIcon$SENTIMENT_NEUTRAL_getInstance(), MaterialIcon$SENTIMENT_SATISFIED_getInstance(), MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance(), MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance(), MaterialIcon$SETTINGS_getInstance(), MaterialIcon$SETTINGS_APPLICATIONS_getInstance(), MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance(), MaterialIcon$SETTINGS_BLUETOOTH_getInstance(), MaterialIcon$SETTINGS_BRIGHTNESS_getInstance(), MaterialIcon$SETTINGS_CELL_getInstance(), MaterialIcon$SETTINGS_ETHERNET_getInstance(), MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance(), MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance(), MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance(), MaterialIcon$SETTINGS_INPUT_HDMI_getInstance(), MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance(), MaterialIcon$SETTINGS_OVERSCAN_getInstance(), MaterialIcon$SETTINGS_PHONE_getInstance(), MaterialIcon$SETTINGS_POWER_getInstance(), MaterialIcon$SETTINGS_REMOTE_getInstance(), MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance(), MaterialIcon$SETTINGS_VOICE_getInstance(), MaterialIcon$SHARE_getInstance(), MaterialIcon$SHOP_getInstance(), MaterialIcon$SHOP_TWO_getInstance(), MaterialIcon$SHOPPING_BASKET_getInstance(), MaterialIcon$SHOPPING_CART_getInstance(), MaterialIcon$SHORT_TEXT_getInstance(), MaterialIcon$SHOW_CHART_getInstance(), MaterialIcon$SHUFFLE_getInstance(), MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance(), MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance(), MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance(), MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance(), MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance(), MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance(), MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance(), MaterialIcon$SIGNAL_WIFI_OFF_getInstance(), MaterialIcon$SIM_CARD_getInstance(), MaterialIcon$SIM_CARD_ALERT_getInstance(), MaterialIcon$SKIP_NEXT_getInstance(), MaterialIcon$SKIP_PREVIOUS_getInstance(), MaterialIcon$SLIDESHOW_getInstance(), MaterialIcon$SLOW_MOTION_VIDEO_getInstance(), MaterialIcon$SMARTPHONE_getInstance(), MaterialIcon$SMOKE_FREE_getInstance(), MaterialIcon$SMOKING_ROOMS_getInstance(), MaterialIcon$SMS_getInstance(), MaterialIcon$SMS_FAILED_getInstance(), MaterialIcon$SNOOZE_getInstance(), MaterialIcon$SORT_getInstance(), MaterialIcon$SORT_BY_ALPHA_getInstance(), MaterialIcon$SPA_getInstance(), MaterialIcon$SPACE_BAR_getInstance(), MaterialIcon$SPEAKER_getInstance(), MaterialIcon$SPEAKER_GROUP_getInstance(), MaterialIcon$SPEAKER_NOTES_getInstance(), MaterialIcon$SPEAKER_NOTES_OFF_getInstance(), MaterialIcon$SPEAKER_PHONE_getInstance(), MaterialIcon$SPELLCHECK_getInstance(), MaterialIcon$STAR_getInstance(), MaterialIcon$STAR_BORDER_getInstance(), MaterialIcon$STAR_HALF_getInstance(), MaterialIcon$STARS_getInstance(), MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance(), MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance(), MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance(), MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance(), MaterialIcon$STOP_getInstance(), MaterialIcon$STOP_SCREEN_SHARE_getInstance(), MaterialIcon$STORAGE_getInstance(), MaterialIcon$STORE_getInstance(), MaterialIcon$STORE_MALL_DIRECTORY_getInstance(), MaterialIcon$STRAIGHTEN_getInstance(), MaterialIcon$STREETVIEW_getInstance(), MaterialIcon$STRIKETHROUGH_S_getInstance(), MaterialIcon$STYLE_getInstance(), MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance(), MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance(), MaterialIcon$SUBJECT_getInstance(), MaterialIcon$SUBSCRIPTIONS_getInstance(), MaterialIcon$SUBTITLES_getInstance(), MaterialIcon$SUBWAY_getInstance(), MaterialIcon$SUPERVISOR_ACCOUNT_getInstance(), MaterialIcon$SURROUND_SOUND_getInstance(), MaterialIcon$SWAP_CALLS_getInstance(), MaterialIcon$SWAP_HORIZ_getInstance(), MaterialIcon$SWAP_VERT_getInstance(), MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance(), MaterialIcon$SWITCH_CAMERA_getInstance(), MaterialIcon$SWITCH_VIDEO_getInstance(), MaterialIcon$SYNC_getInstance(), MaterialIcon$SYNC_DISABLED_getInstance(), MaterialIcon$SYNC_PROBLEM_getInstance(), MaterialIcon$SYSTEM_UPDATE_getInstance(), MaterialIcon$SYSTEM_UPDATE_ALT_getInstance(), MaterialIcon$TAB_getInstance(), MaterialIcon$TAB_UNSELECTED_getInstance(), MaterialIcon$TABLET_getInstance(), MaterialIcon$TABLET_ANDROID_getInstance(), MaterialIcon$TABLET_MAC_getInstance(), MaterialIcon$TAG_FACES_getInstance(), MaterialIcon$TAP_AND_PLAY_getInstance(), MaterialIcon$TERRAIN_getInstance(), MaterialIcon$TEXT_FIELDS_getInstance(), MaterialIcon$TEXT_FORMAT_getInstance(), MaterialIcon$TEXTSMS_getInstance(), MaterialIcon$TEXTURE_getInstance(), MaterialIcon$THEATERS_getInstance(), MaterialIcon$THUMB_DOWN_getInstance(), MaterialIcon$THUMB_UP_getInstance(), MaterialIcon$THUMBS_UP_DOWN_getInstance(), MaterialIcon$TIME_TO_LEAVE_getInstance(), MaterialIcon$TIMELAPSE_getInstance(), MaterialIcon$TIMELINE_getInstance(), MaterialIcon$TIMER_getInstance(), MaterialIcon$TIMER_10_getInstance(), MaterialIcon$TIMER_3_getInstance(), MaterialIcon$TIMER_OFF_getInstance(), MaterialIcon$TITLE_getInstance(), MaterialIcon$TOC_getInstance(), MaterialIcon$TODAY_getInstance(), MaterialIcon$TOLL_getInstance(), MaterialIcon$TONALITY_getInstance(), MaterialIcon$TOUCH_APP_getInstance(), MaterialIcon$TOYS_getInstance(), MaterialIcon$TRACK_CHANGES_getInstance(), MaterialIcon$TRAFFIC_getInstance(), MaterialIcon$TRAIN_getInstance(), MaterialIcon$TRAM_getInstance(), MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance(), MaterialIcon$TRANSFORM_getInstance(), MaterialIcon$TRANSLATE_getInstance(), MaterialIcon$TRENDING_DOWN_getInstance(), MaterialIcon$TRENDING_FLAT_getInstance(), MaterialIcon$TRENDING_UP_getInstance(), MaterialIcon$TUNE_getInstance(), MaterialIcon$TURNED_IN_getInstance(), MaterialIcon$TURNED_IN_NOT_getInstance(), MaterialIcon$TV_getInstance(), MaterialIcon$UNARCHIVE_getInstance(), MaterialIcon$UNDO_getInstance(), MaterialIcon$UNFOLD_LESS_getInstance(), MaterialIcon$UNFOLD_MORE_getInstance(), MaterialIcon$UPDATE_getInstance(), MaterialIcon$USB_getInstance(), MaterialIcon$VERIFIED_USER_getInstance(), MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance(), MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance(), MaterialIcon$VERTICAL_ALIGN_TOP_getInstance(), MaterialIcon$VIBRATION_getInstance(), MaterialIcon$VIDEO_CALL_getInstance(), MaterialIcon$VIDEO_LABEL_getInstance(), MaterialIcon$VIDEO_LIBRARY_getInstance(), MaterialIcon$VIDEOCAM_getInstance(), MaterialIcon$VIDEOCAM_OFF_getInstance(), MaterialIcon$VIDEOGAME_ASSET_getInstance(), MaterialIcon$VIEW_AGENDA_getInstance(), MaterialIcon$VIEW_ARRAY_getInstance(), MaterialIcon$VIEW_CAROUSEL_getInstance(), MaterialIcon$VIEW_COLUMN_getInstance(), MaterialIcon$VIEW_COMFY_getInstance(), MaterialIcon$VIEW_COMPACT_getInstance(), MaterialIcon$VIEW_DAY_getInstance(), MaterialIcon$VIEW_HEADLINE_getInstance(), MaterialIcon$VIEW_LIST_getInstance(), MaterialIcon$VIEW_MODULE_getInstance(), MaterialIcon$VIEW_QUILT_getInstance(), MaterialIcon$VIEW_STREAM_getInstance(), MaterialIcon$VIEW_WEEK_getInstance(), MaterialIcon$VIGNETTE_getInstance(), MaterialIcon$VISIBILITY_getInstance(), MaterialIcon$VISIBILITY_OFF_getInstance(), MaterialIcon$VOICE_CHAT_getInstance(), MaterialIcon$VOICEMAIL_getInstance(), MaterialIcon$VOLUME_DOWN_getInstance(), MaterialIcon$VOLUME_MUTE_getInstance(), MaterialIcon$VOLUME_OFF_getInstance(), MaterialIcon$VOLUME_UP_getInstance(), MaterialIcon$VPN_KEY_getInstance(), MaterialIcon$VPN_LOCK_getInstance(), MaterialIcon$WALLPAPER_getInstance(), MaterialIcon$WARNING_getInstance(), MaterialIcon$WATCH_getInstance(), MaterialIcon$WATCH_LATER_getInstance(), MaterialIcon$WB_AUTO_getInstance(), MaterialIcon$WB_CLOUDY_getInstance(), MaterialIcon$WB_INCANDESCENT_getInstance(), MaterialIcon$WB_IRIDESCENT_getInstance(), MaterialIcon$WB_SUNNY_getInstance(), MaterialIcon$WC_getInstance(), MaterialIcon$WEB_getInstance(), MaterialIcon$WEB_ASSET_getInstance(), MaterialIcon$WEEKEND_getInstance(), MaterialIcon$WHATSHOT_getInstance(), MaterialIcon$WIDGETS_getInstance(), MaterialIcon$WIFI_getInstance(), MaterialIcon$WIFI_LOCK_getInstance(), MaterialIcon$WIFI_TETHERING_getInstance(), MaterialIcon$WORK_getInstance(), MaterialIcon$WRAP_TEXT_getInstance(), MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance(), MaterialIcon$ZOOM_IN_getInstance(), MaterialIcon$ZOOM_OUT_getInstance(), MaterialIcon$ZOOM_OUT_MAP_getInstance()];
  }
  MaterialIcon.values = MaterialIcon$values;
  function MaterialIcon$valueOf(name) {
    switch (name) {
      case 'ROTATION_3D':
        return MaterialIcon$ROTATION_3D_getInstance();
      case 'AC_UNIT':
        return MaterialIcon$AC_UNIT_getInstance();
      case 'ACCESS_ALARM':
        return MaterialIcon$ACCESS_ALARM_getInstance();
      case 'ACCESS_ALARMS':
        return MaterialIcon$ACCESS_ALARMS_getInstance();
      case 'ACCESS_TIME':
        return MaterialIcon$ACCESS_TIME_getInstance();
      case 'ACCESSIBILITY':
        return MaterialIcon$ACCESSIBILITY_getInstance();
      case 'ACCESSIBLE':
        return MaterialIcon$ACCESSIBLE_getInstance();
      case 'ACCOUNT_BALANCE':
        return MaterialIcon$ACCOUNT_BALANCE_getInstance();
      case 'ACCOUNT_BALANCE_WALLET':
        return MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance();
      case 'ACCOUNT_BOX':
        return MaterialIcon$ACCOUNT_BOX_getInstance();
      case 'ACCOUNT_CIRCLE':
        return MaterialIcon$ACCOUNT_CIRCLE_getInstance();
      case 'ADB':
        return MaterialIcon$ADB_getInstance();
      case 'ADD':
        return MaterialIcon$ADD_getInstance();
      case 'ADD_A_PHOTO':
        return MaterialIcon$ADD_A_PHOTO_getInstance();
      case 'ADD_ALARM':
        return MaterialIcon$ADD_ALARM_getInstance();
      case 'ADD_ALERT':
        return MaterialIcon$ADD_ALERT_getInstance();
      case 'ADD_BOX':
        return MaterialIcon$ADD_BOX_getInstance();
      case 'ADD_CIRCLE':
        return MaterialIcon$ADD_CIRCLE_getInstance();
      case 'ADD_CIRCLE_OUTLINE':
        return MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance();
      case 'ADD_LOCATION':
        return MaterialIcon$ADD_LOCATION_getInstance();
      case 'ADD_SHOPPING_CART':
        return MaterialIcon$ADD_SHOPPING_CART_getInstance();
      case 'ADD_TO_PHOTOS':
        return MaterialIcon$ADD_TO_PHOTOS_getInstance();
      case 'ADD_TO_QUEUE':
        return MaterialIcon$ADD_TO_QUEUE_getInstance();
      case 'ADJUST':
        return MaterialIcon$ADJUST_getInstance();
      case 'AIRLINE_SEAT_FLAT':
        return MaterialIcon$AIRLINE_SEAT_FLAT_getInstance();
      case 'AIRLINE_SEAT_FLAT_ANGLED':
        return MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance();
      case 'AIRLINE_SEAT_INDIVIDUAL_SUITE':
        return MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_EXTRA':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_NORMAL':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance();
      case 'AIRLINE_SEAT_LEGROOM_REDUCED':
        return MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance();
      case 'AIRLINE_SEAT_RECLINE_EXTRA':
        return MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance();
      case 'AIRLINE_SEAT_RECLINE_NORMAL':
        return MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance();
      case 'AIRPLANEMODE_ACTIVE':
        return MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance();
      case 'AIRPLANEMODE_INACTIVE':
        return MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance();
      case 'AIRPLAY':
        return MaterialIcon$AIRPLAY_getInstance();
      case 'AIRPORT_SHUTTLE':
        return MaterialIcon$AIRPORT_SHUTTLE_getInstance();
      case 'ALARM':
        return MaterialIcon$ALARM_getInstance();
      case 'ALARM_ADD':
        return MaterialIcon$ALARM_ADD_getInstance();
      case 'ALARM_OFF':
        return MaterialIcon$ALARM_OFF_getInstance();
      case 'ALARM_ON':
        return MaterialIcon$ALARM_ON_getInstance();
      case 'ALBUM':
        return MaterialIcon$ALBUM_getInstance();
      case 'ALL_INCLUSIVE':
        return MaterialIcon$ALL_INCLUSIVE_getInstance();
      case 'ALL_OUT':
        return MaterialIcon$ALL_OUT_getInstance();
      case 'ANDROID':
        return MaterialIcon$ANDROID_getInstance();
      case 'ANNOUNCEMENT':
        return MaterialIcon$ANNOUNCEMENT_getInstance();
      case 'APPS':
        return MaterialIcon$APPS_getInstance();
      case 'ARCHIVE':
        return MaterialIcon$ARCHIVE_getInstance();
      case 'ARROW_BACK':
        return MaterialIcon$ARROW_BACK_getInstance();
      case 'ARROW_DOWNWARD':
        return MaterialIcon$ARROW_DOWNWARD_getInstance();
      case 'ARROW_DROP_DOWN':
        return MaterialIcon$ARROW_DROP_DOWN_getInstance();
      case 'ARROW_DROP_DOWN_CIRCLE':
        return MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance();
      case 'ARROW_DROP_UP':
        return MaterialIcon$ARROW_DROP_UP_getInstance();
      case 'ARROW_FORWARD':
        return MaterialIcon$ARROW_FORWARD_getInstance();
      case 'ARROW_UPWARD':
        return MaterialIcon$ARROW_UPWARD_getInstance();
      case 'ART_TRACK':
        return MaterialIcon$ART_TRACK_getInstance();
      case 'ASPECT_RATIO':
        return MaterialIcon$ASPECT_RATIO_getInstance();
      case 'ASSESSMENT':
        return MaterialIcon$ASSESSMENT_getInstance();
      case 'ASSIGNMENT':
        return MaterialIcon$ASSIGNMENT_getInstance();
      case 'ASSIGNMENT_IND':
        return MaterialIcon$ASSIGNMENT_IND_getInstance();
      case 'ASSIGNMENT_LATE':
        return MaterialIcon$ASSIGNMENT_LATE_getInstance();
      case 'ASSIGNMENT_RETURN':
        return MaterialIcon$ASSIGNMENT_RETURN_getInstance();
      case 'ASSIGNMENT_RETURNED':
        return MaterialIcon$ASSIGNMENT_RETURNED_getInstance();
      case 'ASSIGNMENT_TURNED_IN':
        return MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance();
      case 'ASSISTANT':
        return MaterialIcon$ASSISTANT_getInstance();
      case 'ASSISTANT_PHOTO':
        return MaterialIcon$ASSISTANT_PHOTO_getInstance();
      case 'ATTACH_FILE':
        return MaterialIcon$ATTACH_FILE_getInstance();
      case 'ATTACH_MONEY':
        return MaterialIcon$ATTACH_MONEY_getInstance();
      case 'ATTACHMENT':
        return MaterialIcon$ATTACHMENT_getInstance();
      case 'AUDIOTRACK':
        return MaterialIcon$AUDIOTRACK_getInstance();
      case 'AUTORENEW':
        return MaterialIcon$AUTORENEW_getInstance();
      case 'AV_TIMER':
        return MaterialIcon$AV_TIMER_getInstance();
      case 'BACKSPACE':
        return MaterialIcon$BACKSPACE_getInstance();
      case 'BACKUP':
        return MaterialIcon$BACKUP_getInstance();
      case 'BATTERY_ALERT':
        return MaterialIcon$BATTERY_ALERT_getInstance();
      case 'BATTERY_CHARGING_FULL':
        return MaterialIcon$BATTERY_CHARGING_FULL_getInstance();
      case 'BATTERY_FULL':
        return MaterialIcon$BATTERY_FULL_getInstance();
      case 'BATTERY_STD':
        return MaterialIcon$BATTERY_STD_getInstance();
      case 'BATTERY_UNKNOWN':
        return MaterialIcon$BATTERY_UNKNOWN_getInstance();
      case 'BEACH_ACCESS':
        return MaterialIcon$BEACH_ACCESS_getInstance();
      case 'BEENHERE':
        return MaterialIcon$BEENHERE_getInstance();
      case 'BLOCK':
        return MaterialIcon$BLOCK_getInstance();
      case 'BLUETOOTH':
        return MaterialIcon$BLUETOOTH_getInstance();
      case 'BLUETOOTH_AUDIO':
        return MaterialIcon$BLUETOOTH_AUDIO_getInstance();
      case 'BLUETOOTH_CONNECTED':
        return MaterialIcon$BLUETOOTH_CONNECTED_getInstance();
      case 'BLUETOOTH_DISABLED':
        return MaterialIcon$BLUETOOTH_DISABLED_getInstance();
      case 'BLUETOOTH_SEARCHING':
        return MaterialIcon$BLUETOOTH_SEARCHING_getInstance();
      case 'BLUR_CIRCULAR':
        return MaterialIcon$BLUR_CIRCULAR_getInstance();
      case 'BLUR_LINEAR':
        return MaterialIcon$BLUR_LINEAR_getInstance();
      case 'BLUR_OFF':
        return MaterialIcon$BLUR_OFF_getInstance();
      case 'BLUR_ON':
        return MaterialIcon$BLUR_ON_getInstance();
      case 'BOOK':
        return MaterialIcon$BOOK_getInstance();
      case 'BOOKMARK':
        return MaterialIcon$BOOKMARK_getInstance();
      case 'BOOKMARK_BORDER':
        return MaterialIcon$BOOKMARK_BORDER_getInstance();
      case 'BORDER_ALL':
        return MaterialIcon$BORDER_ALL_getInstance();
      case 'BORDER_BOTTOM':
        return MaterialIcon$BORDER_BOTTOM_getInstance();
      case 'BORDER_CLEAR':
        return MaterialIcon$BORDER_CLEAR_getInstance();
      case 'BORDER_COLOR':
        return MaterialIcon$BORDER_COLOR_getInstance();
      case 'BORDER_HORIZONTAL':
        return MaterialIcon$BORDER_HORIZONTAL_getInstance();
      case 'BORDER_INNER':
        return MaterialIcon$BORDER_INNER_getInstance();
      case 'BORDER_LEFT':
        return MaterialIcon$BORDER_LEFT_getInstance();
      case 'BORDER_OUTER':
        return MaterialIcon$BORDER_OUTER_getInstance();
      case 'BORDER_RIGHT':
        return MaterialIcon$BORDER_RIGHT_getInstance();
      case 'BORDER_STYLE':
        return MaterialIcon$BORDER_STYLE_getInstance();
      case 'BORDER_TOP':
        return MaterialIcon$BORDER_TOP_getInstance();
      case 'BORDER_VERTICAL':
        return MaterialIcon$BORDER_VERTICAL_getInstance();
      case 'BRANDING_WATERMARK':
        return MaterialIcon$BRANDING_WATERMARK_getInstance();
      case 'BRIGHTNESS_1':
        return MaterialIcon$BRIGHTNESS_1_getInstance();
      case 'BRIGHTNESS_2':
        return MaterialIcon$BRIGHTNESS_2_getInstance();
      case 'BRIGHTNESS_3':
        return MaterialIcon$BRIGHTNESS_3_getInstance();
      case 'BRIGHTNESS_4':
        return MaterialIcon$BRIGHTNESS_4_getInstance();
      case 'BRIGHTNESS_5':
        return MaterialIcon$BRIGHTNESS_5_getInstance();
      case 'BRIGHTNESS_6':
        return MaterialIcon$BRIGHTNESS_6_getInstance();
      case 'BRIGHTNESS_7':
        return MaterialIcon$BRIGHTNESS_7_getInstance();
      case 'BRIGHTNESS_AUTO':
        return MaterialIcon$BRIGHTNESS_AUTO_getInstance();
      case 'BRIGHTNESS_HIGH':
        return MaterialIcon$BRIGHTNESS_HIGH_getInstance();
      case 'BRIGHTNESS_LOW':
        return MaterialIcon$BRIGHTNESS_LOW_getInstance();
      case 'BRIGHTNESS_MEDIUM':
        return MaterialIcon$BRIGHTNESS_MEDIUM_getInstance();
      case 'BROKEN_IMAGE':
        return MaterialIcon$BROKEN_IMAGE_getInstance();
      case 'BRUSH':
        return MaterialIcon$BRUSH_getInstance();
      case 'BUBBLE_CHART':
        return MaterialIcon$BUBBLE_CHART_getInstance();
      case 'BUG_REPORT':
        return MaterialIcon$BUG_REPORT_getInstance();
      case 'BUILD':
        return MaterialIcon$BUILD_getInstance();
      case 'BURST_MODE':
        return MaterialIcon$BURST_MODE_getInstance();
      case 'BUSINESS':
        return MaterialIcon$BUSINESS_getInstance();
      case 'BUSINESS_CENTER':
        return MaterialIcon$BUSINESS_CENTER_getInstance();
      case 'CACHED':
        return MaterialIcon$CACHED_getInstance();
      case 'CAKE':
        return MaterialIcon$CAKE_getInstance();
      case 'CALL':
        return MaterialIcon$CALL_getInstance();
      case 'CALL_END':
        return MaterialIcon$CALL_END_getInstance();
      case 'CALL_MADE':
        return MaterialIcon$CALL_MADE_getInstance();
      case 'CALL_MERGE':
        return MaterialIcon$CALL_MERGE_getInstance();
      case 'CALL_MISSED':
        return MaterialIcon$CALL_MISSED_getInstance();
      case 'CALL_MISSED_OUTGOING':
        return MaterialIcon$CALL_MISSED_OUTGOING_getInstance();
      case 'CALL_RECEIVED':
        return MaterialIcon$CALL_RECEIVED_getInstance();
      case 'CALL_SPLIT':
        return MaterialIcon$CALL_SPLIT_getInstance();
      case 'CALL_TO_ACTION':
        return MaterialIcon$CALL_TO_ACTION_getInstance();
      case 'CAMERA':
        return MaterialIcon$CAMERA_getInstance();
      case 'CAMERA_ALT':
        return MaterialIcon$CAMERA_ALT_getInstance();
      case 'CAMERA_ENHANCE':
        return MaterialIcon$CAMERA_ENHANCE_getInstance();
      case 'CAMERA_FRONT':
        return MaterialIcon$CAMERA_FRONT_getInstance();
      case 'CAMERA_REAR':
        return MaterialIcon$CAMERA_REAR_getInstance();
      case 'CAMERA_ROLL':
        return MaterialIcon$CAMERA_ROLL_getInstance();
      case 'CANCEL':
        return MaterialIcon$CANCEL_getInstance();
      case 'CARD_GIFTCARD':
        return MaterialIcon$CARD_GIFTCARD_getInstance();
      case 'CARD_MEMBERSHIP':
        return MaterialIcon$CARD_MEMBERSHIP_getInstance();
      case 'CARD_TRAVEL':
        return MaterialIcon$CARD_TRAVEL_getInstance();
      case 'CASINO':
        return MaterialIcon$CASINO_getInstance();
      case 'CAST':
        return MaterialIcon$CAST_getInstance();
      case 'CAST_CONNECTED':
        return MaterialIcon$CAST_CONNECTED_getInstance();
      case 'CENTER_FOCUS_STRONG':
        return MaterialIcon$CENTER_FOCUS_STRONG_getInstance();
      case 'CENTER_FOCUS_WEAK':
        return MaterialIcon$CENTER_FOCUS_WEAK_getInstance();
      case 'CHANGE_HISTORY':
        return MaterialIcon$CHANGE_HISTORY_getInstance();
      case 'CHAT':
        return MaterialIcon$CHAT_getInstance();
      case 'CHAT_BUBBLE':
        return MaterialIcon$CHAT_BUBBLE_getInstance();
      case 'CHAT_BUBBLE_OUTLINE':
        return MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance();
      case 'CHECK':
        return MaterialIcon$CHECK_getInstance();
      case 'CHECK_BOX':
        return MaterialIcon$CHECK_BOX_getInstance();
      case 'CHECK_BOX_OUTLINE_BLANK':
        return MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance();
      case 'CHECK_CIRCLE':
        return MaterialIcon$CHECK_CIRCLE_getInstance();
      case 'CHEVRON_LEFT':
        return MaterialIcon$CHEVRON_LEFT_getInstance();
      case 'CHEVRON_RIGHT':
        return MaterialIcon$CHEVRON_RIGHT_getInstance();
      case 'CHILD_CARE':
        return MaterialIcon$CHILD_CARE_getInstance();
      case 'CHILD_FRIENDLY':
        return MaterialIcon$CHILD_FRIENDLY_getInstance();
      case 'CHROME_RR_MODE':
        return MaterialIcon$CHROME_RR_MODE_getInstance();
      case 'CLASS':
        return MaterialIcon$CLASS_getInstance();
      case 'CLEAR':
        return MaterialIcon$CLEAR_getInstance();
      case 'CLEAR_ALL':
        return MaterialIcon$CLEAR_ALL_getInstance();
      case 'CLOSE':
        return MaterialIcon$CLOSE_getInstance();
      case 'CLOSED_CAPTION':
        return MaterialIcon$CLOSED_CAPTION_getInstance();
      case 'CLOUD':
        return MaterialIcon$CLOUD_getInstance();
      case 'CLOUD_CIRCLE':
        return MaterialIcon$CLOUD_CIRCLE_getInstance();
      case 'CLOUD_DONE':
        return MaterialIcon$CLOUD_DONE_getInstance();
      case 'CLOUD_DOWNLOAD':
        return MaterialIcon$CLOUD_DOWNLOAD_getInstance();
      case 'CLOUD_OFF':
        return MaterialIcon$CLOUD_OFF_getInstance();
      case 'CLOUD_QUEUE':
        return MaterialIcon$CLOUD_QUEUE_getInstance();
      case 'CLOUD_UPLOAD':
        return MaterialIcon$CLOUD_UPLOAD_getInstance();
      case 'CODE':
        return MaterialIcon$CODE_getInstance();
      case 'COLLECTIONS':
        return MaterialIcon$COLLECTIONS_getInstance();
      case 'COLLECTIONS_BOOKMARK':
        return MaterialIcon$COLLECTIONS_BOOKMARK_getInstance();
      case 'COLOR_LENS':
        return MaterialIcon$COLOR_LENS_getInstance();
      case 'COLORIZE':
        return MaterialIcon$COLORIZE_getInstance();
      case 'COMMENT':
        return MaterialIcon$COMMENT_getInstance();
      case 'COMPARE':
        return MaterialIcon$COMPARE_getInstance();
      case 'COMPARE_ARROWS':
        return MaterialIcon$COMPARE_ARROWS_getInstance();
      case 'COMPUTER':
        return MaterialIcon$COMPUTER_getInstance();
      case 'CONFIRMATION_NUMBER':
        return MaterialIcon$CONFIRMATION_NUMBER_getInstance();
      case 'CONTACT_MAIL':
        return MaterialIcon$CONTACT_MAIL_getInstance();
      case 'CONTACT_PHONE':
        return MaterialIcon$CONTACT_PHONE_getInstance();
      case 'CONTACTS':
        return MaterialIcon$CONTACTS_getInstance();
      case 'CONTENT_COPY':
        return MaterialIcon$CONTENT_COPY_getInstance();
      case 'CONTENT_CUT':
        return MaterialIcon$CONTENT_CUT_getInstance();
      case 'CONTENT_PASTE':
        return MaterialIcon$CONTENT_PASTE_getInstance();
      case 'CONTROL_POINT':
        return MaterialIcon$CONTROL_POINT_getInstance();
      case 'CONTROL_POINT_DUPLICATE':
        return MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance();
      case 'COPYRIGHT':
        return MaterialIcon$COPYRIGHT_getInstance();
      case 'CREATE':
        return MaterialIcon$CREATE_getInstance();
      case 'CREATE_NEW_FOLDER':
        return MaterialIcon$CREATE_NEW_FOLDER_getInstance();
      case 'CREDIT_CARD':
        return MaterialIcon$CREDIT_CARD_getInstance();
      case 'CROP':
        return MaterialIcon$CROP_getInstance();
      case 'CROP_16_9':
        return MaterialIcon$CROP_16_9_getInstance();
      case 'CROP_3_2':
        return MaterialIcon$CROP_3_2_getInstance();
      case 'CROP_5_4':
        return MaterialIcon$CROP_5_4_getInstance();
      case 'CROP_7_5':
        return MaterialIcon$CROP_7_5_getInstance();
      case 'CROP_DIN':
        return MaterialIcon$CROP_DIN_getInstance();
      case 'CROP_FREE':
        return MaterialIcon$CROP_FREE_getInstance();
      case 'CROP_LANDSCAPE':
        return MaterialIcon$CROP_LANDSCAPE_getInstance();
      case 'CROP_ORIGINAL':
        return MaterialIcon$CROP_ORIGINAL_getInstance();
      case 'CROP_PORTRAIT':
        return MaterialIcon$CROP_PORTRAIT_getInstance();
      case 'CROP_ROTATE':
        return MaterialIcon$CROP_ROTATE_getInstance();
      case 'CROP_SQUARE':
        return MaterialIcon$CROP_SQUARE_getInstance();
      case 'DASHBOARD':
        return MaterialIcon$DASHBOARD_getInstance();
      case 'DATA_USAGE':
        return MaterialIcon$DATA_USAGE_getInstance();
      case 'DATE_RANGE':
        return MaterialIcon$DATE_RANGE_getInstance();
      case 'DEHAZE':
        return MaterialIcon$DEHAZE_getInstance();
      case 'DELETE':
        return MaterialIcon$DELETE_getInstance();
      case 'DELETE_FOREVER':
        return MaterialIcon$DELETE_FOREVER_getInstance();
      case 'DELETE_SWEEP':
        return MaterialIcon$DELETE_SWEEP_getInstance();
      case 'DESCRIPTION':
        return MaterialIcon$DESCRIPTION_getInstance();
      case 'DESKTOP_MAC':
        return MaterialIcon$DESKTOP_MAC_getInstance();
      case 'DESKTOP_WINDOWS':
        return MaterialIcon$DESKTOP_WINDOWS_getInstance();
      case 'DETAILS':
        return MaterialIcon$DETAILS_getInstance();
      case 'DEVELOPER_BOARD':
        return MaterialIcon$DEVELOPER_BOARD_getInstance();
      case 'DEVELOPER_MODE':
        return MaterialIcon$DEVELOPER_MODE_getInstance();
      case 'DEVICE_HUB':
        return MaterialIcon$DEVICE_HUB_getInstance();
      case 'DEVICES':
        return MaterialIcon$DEVICES_getInstance();
      case 'DEVICES_OTHER':
        return MaterialIcon$DEVICES_OTHER_getInstance();
      case 'DIALER_SIP':
        return MaterialIcon$DIALER_SIP_getInstance();
      case 'DIALPAD':
        return MaterialIcon$DIALPAD_getInstance();
      case 'DIRECTIONS':
        return MaterialIcon$DIRECTIONS_getInstance();
      case 'DIRECTIONS_BIKE':
        return MaterialIcon$DIRECTIONS_BIKE_getInstance();
      case 'DIRECTIONS_BOAT':
        return MaterialIcon$DIRECTIONS_BOAT_getInstance();
      case 'DIRECTIONS_BUS':
        return MaterialIcon$DIRECTIONS_BUS_getInstance();
      case 'DIRECTIONS_CAR':
        return MaterialIcon$DIRECTIONS_CAR_getInstance();
      case 'DIRECTIONS_RAILWAY':
        return MaterialIcon$DIRECTIONS_RAILWAY_getInstance();
      case 'DIRECTIONS_RUN':
        return MaterialIcon$DIRECTIONS_RUN_getInstance();
      case 'DIRECTIONS_SUBWAY':
        return MaterialIcon$DIRECTIONS_SUBWAY_getInstance();
      case 'DIRECTIONS_TRANSIT':
        return MaterialIcon$DIRECTIONS_TRANSIT_getInstance();
      case 'DIRECTIONS_WALK':
        return MaterialIcon$DIRECTIONS_WALK_getInstance();
      case 'DISC_FULL':
        return MaterialIcon$DISC_FULL_getInstance();
      case 'DNS':
        return MaterialIcon$DNS_getInstance();
      case 'DO_NOT_DISTURB':
        return MaterialIcon$DO_NOT_DISTURB_getInstance();
      case 'DO_NOT_DISTURB_ALT':
        return MaterialIcon$DO_NOT_DISTURB_ALT_getInstance();
      case 'DO_NOT_DISTURB_OFF':
        return MaterialIcon$DO_NOT_DISTURB_OFF_getInstance();
      case 'DO_NOT_DISTURB_ON':
        return MaterialIcon$DO_NOT_DISTURB_ON_getInstance();
      case 'DOCK':
        return MaterialIcon$DOCK_getInstance();
      case 'DOMAIN':
        return MaterialIcon$DOMAIN_getInstance();
      case 'DONE':
        return MaterialIcon$DONE_getInstance();
      case 'DONE_ALL':
        return MaterialIcon$DONE_ALL_getInstance();
      case 'DONUT_LARGE':
        return MaterialIcon$DONUT_LARGE_getInstance();
      case 'DONUT_SMALL':
        return MaterialIcon$DONUT_SMALL_getInstance();
      case 'DRAFTS':
        return MaterialIcon$DRAFTS_getInstance();
      case 'DRAG_HANDLE':
        return MaterialIcon$DRAG_HANDLE_getInstance();
      case 'DRIVE_ETA':
        return MaterialIcon$DRIVE_ETA_getInstance();
      case 'DVR':
        return MaterialIcon$DVR_getInstance();
      case 'EDIT':
        return MaterialIcon$EDIT_getInstance();
      case 'EDIT_LOCATION':
        return MaterialIcon$EDIT_LOCATION_getInstance();
      case 'EJECT':
        return MaterialIcon$EJECT_getInstance();
      case 'EMAIL':
        return MaterialIcon$EMAIL_getInstance();
      case 'ENHANCED_ENCRYPTION':
        return MaterialIcon$ENHANCED_ENCRYPTION_getInstance();
      case 'EQUALIZER':
        return MaterialIcon$EQUALIZER_getInstance();
      case 'ERROR':
        return MaterialIcon$ERROR_getInstance();
      case 'ERROR_OUTLINE':
        return MaterialIcon$ERROR_OUTLINE_getInstance();
      case 'EURO_SYMBOL':
        return MaterialIcon$EURO_SYMBOL_getInstance();
      case 'EV_STATION':
        return MaterialIcon$EV_STATION_getInstance();
      case 'EVENT':
        return MaterialIcon$EVENT_getInstance();
      case 'EVENT_AVAILABLE':
        return MaterialIcon$EVENT_AVAILABLE_getInstance();
      case 'EVENT_BUSY':
        return MaterialIcon$EVENT_BUSY_getInstance();
      case 'EVENT_NOTE':
        return MaterialIcon$EVENT_NOTE_getInstance();
      case 'EVENT_SEAT':
        return MaterialIcon$EVENT_SEAT_getInstance();
      case 'EXIT_TO_APP':
        return MaterialIcon$EXIT_TO_APP_getInstance();
      case 'EXPAND_LESS':
        return MaterialIcon$EXPAND_LESS_getInstance();
      case 'EXPAND_MORE':
        return MaterialIcon$EXPAND_MORE_getInstance();
      case 'EXPLICIT':
        return MaterialIcon$EXPLICIT_getInstance();
      case 'EXPLORE':
        return MaterialIcon$EXPLORE_getInstance();
      case 'EXPOSURE':
        return MaterialIcon$EXPOSURE_getInstance();
      case 'EXPOSURE_NEG_1':
        return MaterialIcon$EXPOSURE_NEG_1_getInstance();
      case 'EXPOSURE_NEG_2':
        return MaterialIcon$EXPOSURE_NEG_2_getInstance();
      case 'EXPOSURE_PLUS_1':
        return MaterialIcon$EXPOSURE_PLUS_1_getInstance();
      case 'EXPOSURE_PLUS_2':
        return MaterialIcon$EXPOSURE_PLUS_2_getInstance();
      case 'EXPOSURE_ZERO':
        return MaterialIcon$EXPOSURE_ZERO_getInstance();
      case 'EXTENSION':
        return MaterialIcon$EXTENSION_getInstance();
      case 'FACE':
        return MaterialIcon$FACE_getInstance();
      case 'FAST_FORWARD':
        return MaterialIcon$FAST_FORWARD_getInstance();
      case 'FAST_REWIND':
        return MaterialIcon$FAST_REWIND_getInstance();
      case 'FAVORITE':
        return MaterialIcon$FAVORITE_getInstance();
      case 'FAVORITE_BORDER':
        return MaterialIcon$FAVORITE_BORDER_getInstance();
      case 'FEATURED_PLAY_LIST':
        return MaterialIcon$FEATURED_PLAY_LIST_getInstance();
      case 'FEATURED_VIDEO':
        return MaterialIcon$FEATURED_VIDEO_getInstance();
      case 'FACK':
        return MaterialIcon$FACK_getInstance();
      case 'FIBER_DVR':
        return MaterialIcon$FIBER_DVR_getInstance();
      case 'FIBER_MANUAL_RECORD':
        return MaterialIcon$FIBER_MANUAL_RECORD_getInstance();
      case 'FIBER_NEW':
        return MaterialIcon$FIBER_NEW_getInstance();
      case 'FIBER_PIN':
        return MaterialIcon$FIBER_PIN_getInstance();
      case 'FIBER_SMART_RECORD':
        return MaterialIcon$FIBER_SMART_RECORD_getInstance();
      case 'FILE_DOWNLOAD':
        return MaterialIcon$FILE_DOWNLOAD_getInstance();
      case 'FILE_UPLOAD':
        return MaterialIcon$FILE_UPLOAD_getInstance();
      case 'FILTER':
        return MaterialIcon$FILTER_getInstance();
      case 'FILTER_1':
        return MaterialIcon$FILTER_1_getInstance();
      case 'FILTER_2':
        return MaterialIcon$FILTER_2_getInstance();
      case 'FILTER_3':
        return MaterialIcon$FILTER_3_getInstance();
      case 'FILTER_4':
        return MaterialIcon$FILTER_4_getInstance();
      case 'FILTER_5':
        return MaterialIcon$FILTER_5_getInstance();
      case 'FILTER_6':
        return MaterialIcon$FILTER_6_getInstance();
      case 'FILTER_7':
        return MaterialIcon$FILTER_7_getInstance();
      case 'FILTER_8':
        return MaterialIcon$FILTER_8_getInstance();
      case 'FILTER_9':
        return MaterialIcon$FILTER_9_getInstance();
      case 'FILTER_9_PLUS':
        return MaterialIcon$FILTER_9_PLUS_getInstance();
      case 'FILTER_B_AND_W':
        return MaterialIcon$FILTER_B_AND_W_getInstance();
      case 'FILTER_CENTER_FOCUS':
        return MaterialIcon$FILTER_CENTER_FOCUS_getInstance();
      case 'FILTER_DRAMA':
        return MaterialIcon$FILTER_DRAMA_getInstance();
      case 'FILTER_FRAMES':
        return MaterialIcon$FILTER_FRAMES_getInstance();
      case 'FILTER_HDR':
        return MaterialIcon$FILTER_HDR_getInstance();
      case 'FILTER_LIST':
        return MaterialIcon$FILTER_LIST_getInstance();
      case 'FILTER_NONE':
        return MaterialIcon$FILTER_NONE_getInstance();
      case 'FILTER_TILT_SHIFT':
        return MaterialIcon$FILTER_TILT_SHIFT_getInstance();
      case 'FILTER_VINTAGE':
        return MaterialIcon$FILTER_VINTAGE_getInstance();
      case 'FIND_IN_PAGE':
        return MaterialIcon$FIND_IN_PAGE_getInstance();
      case 'FIND_REPLACE':
        return MaterialIcon$FIND_REPLACE_getInstance();
      case 'FINGERPRINT':
        return MaterialIcon$FINGERPRINT_getInstance();
      case 'FIRST_PAGE':
        return MaterialIcon$FIRST_PAGE_getInstance();
      case 'FITNESS_CENTER':
        return MaterialIcon$FITNESS_CENTER_getInstance();
      case 'FLAG':
        return MaterialIcon$FLAG_getInstance();
      case 'FLARE':
        return MaterialIcon$FLARE_getInstance();
      case 'FLASH_AUTO':
        return MaterialIcon$FLASH_AUTO_getInstance();
      case 'FLASH_OFF':
        return MaterialIcon$FLASH_OFF_getInstance();
      case 'FLASH_ON':
        return MaterialIcon$FLASH_ON_getInstance();
      case 'FLIGHT':
        return MaterialIcon$FLIGHT_getInstance();
      case 'FLIGHT_LAND':
        return MaterialIcon$FLIGHT_LAND_getInstance();
      case 'FLIGHT_TAKEOFF':
        return MaterialIcon$FLIGHT_TAKEOFF_getInstance();
      case 'FLIP':
        return MaterialIcon$FLIP_getInstance();
      case 'FLIP_TO_BACK':
        return MaterialIcon$FLIP_TO_BACK_getInstance();
      case 'FLIP_TO_FRONT':
        return MaterialIcon$FLIP_TO_FRONT_getInstance();
      case 'FOLDER':
        return MaterialIcon$FOLDER_getInstance();
      case 'FOLDER_OPEN':
        return MaterialIcon$FOLDER_OPEN_getInstance();
      case 'FOLDER_SHARED':
        return MaterialIcon$FOLDER_SHARED_getInstance();
      case 'FOLDER_SPECIAL':
        return MaterialIcon$FOLDER_SPECIAL_getInstance();
      case 'FONT_DOWNLOAD':
        return MaterialIcon$FONT_DOWNLOAD_getInstance();
      case 'FORMAT_ALIGN_CENTER':
        return MaterialIcon$FORMAT_ALIGN_CENTER_getInstance();
      case 'FORMAT_ALIGN_JUSTIFY':
        return MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance();
      case 'FORMAT_ALIGN_LEFT':
        return MaterialIcon$FORMAT_ALIGN_LEFT_getInstance();
      case 'FORMAT_ALIGN_RIGHT':
        return MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance();
      case 'FORMAT_BOLD':
        return MaterialIcon$FORMAT_BOLD_getInstance();
      case 'FORMAT_CLEAR':
        return MaterialIcon$FORMAT_CLEAR_getInstance();
      case 'FORMAT_COLOR_FILL':
        return MaterialIcon$FORMAT_COLOR_FILL_getInstance();
      case 'FORMAT_COLOR_RESET':
        return MaterialIcon$FORMAT_COLOR_RESET_getInstance();
      case 'FORMAT_COLOR_TEXT':
        return MaterialIcon$FORMAT_COLOR_TEXT_getInstance();
      case 'FORMAT_INDENT_DECREASE':
        return MaterialIcon$FORMAT_INDENT_DECREASE_getInstance();
      case 'FORMAT_INDENT_INCREASE':
        return MaterialIcon$FORMAT_INDENT_INCREASE_getInstance();
      case 'FORMAT_ITALIC':
        return MaterialIcon$FORMAT_ITALIC_getInstance();
      case 'FORMAT_LINE_SPACING':
        return MaterialIcon$FORMAT_LINE_SPACING_getInstance();
      case 'FORMAT_LIST_BULLETED':
        return MaterialIcon$FORMAT_LIST_BULLETED_getInstance();
      case 'FORMAT_LIST_NUMBERED':
        return MaterialIcon$FORMAT_LIST_NUMBERED_getInstance();
      case 'FORMAT_PAINT':
        return MaterialIcon$FORMAT_PAINT_getInstance();
      case 'FORMAT_QUOTE':
        return MaterialIcon$FORMAT_QUOTE_getInstance();
      case 'FORMAT_SHAPES':
        return MaterialIcon$FORMAT_SHAPES_getInstance();
      case 'FORMAT_SIZE':
        return MaterialIcon$FORMAT_SIZE_getInstance();
      case 'FORMAT_STRIKETHROUGH':
        return MaterialIcon$FORMAT_STRIKETHROUGH_getInstance();
      case 'FORMAT_TEXTDIRECTION_L_TO_R':
        return MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance();
      case 'FORMAT_TEXTDIRECTION_R_TO_L':
        return MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance();
      case 'FORMAT_UNDERLINED':
        return MaterialIcon$FORMAT_UNDERLINED_getInstance();
      case 'FORUM':
        return MaterialIcon$FORUM_getInstance();
      case 'FORWARD':
        return MaterialIcon$FORWARD_getInstance();
      case 'FORWARD_10':
        return MaterialIcon$FORWARD_10_getInstance();
      case 'FORWARD_30':
        return MaterialIcon$FORWARD_30_getInstance();
      case 'FORWARD_5':
        return MaterialIcon$FORWARD_5_getInstance();
      case 'FREE_BREAKFAST':
        return MaterialIcon$FREE_BREAKFAST_getInstance();
      case 'FULLSCREEN':
        return MaterialIcon$FULLSCREEN_getInstance();
      case 'FULLSCREEN_EXIT':
        return MaterialIcon$FULLSCREEN_EXIT_getInstance();
      case 'FUNCTIONS':
        return MaterialIcon$FUNCTIONS_getInstance();
      case 'G_TRANSLATE':
        return MaterialIcon$G_TRANSLATE_getInstance();
      case 'GAMEPAD':
        return MaterialIcon$GAMEPAD_getInstance();
      case 'GAMES':
        return MaterialIcon$GAMES_getInstance();
      case 'GAVEL':
        return MaterialIcon$GAVEL_getInstance();
      case 'GESTURE':
        return MaterialIcon$GESTURE_getInstance();
      case 'GET_APP':
        return MaterialIcon$GET_APP_getInstance();
      case 'GIF':
        return MaterialIcon$GIF_getInstance();
      case 'GOLF_COURSE':
        return MaterialIcon$GOLF_COURSE_getInstance();
      case 'GPS_FIXED':
        return MaterialIcon$GPS_FIXED_getInstance();
      case 'GPS_NOT_FIXED':
        return MaterialIcon$GPS_NOT_FIXED_getInstance();
      case 'GPS_OFF':
        return MaterialIcon$GPS_OFF_getInstance();
      case 'GRADE':
        return MaterialIcon$GRADE_getInstance();
      case 'GRADIENT':
        return MaterialIcon$GRADIENT_getInstance();
      case 'GRAIN':
        return MaterialIcon$GRAIN_getInstance();
      case 'GRAPHIC_EQ':
        return MaterialIcon$GRAPHIC_EQ_getInstance();
      case 'GRID_OFF':
        return MaterialIcon$GRID_OFF_getInstance();
      case 'GRID_ON':
        return MaterialIcon$GRID_ON_getInstance();
      case 'GROUP':
        return MaterialIcon$GROUP_getInstance();
      case 'GROUP_ADD':
        return MaterialIcon$GROUP_ADD_getInstance();
      case 'GROUP_WORK':
        return MaterialIcon$GROUP_WORK_getInstance();
      case 'HD':
        return MaterialIcon$HD_getInstance();
      case 'HDR_OFF':
        return MaterialIcon$HDR_OFF_getInstance();
      case 'HDR_ON':
        return MaterialIcon$HDR_ON_getInstance();
      case 'HDR_STRONG':
        return MaterialIcon$HDR_STRONG_getInstance();
      case 'HDR_WEAK':
        return MaterialIcon$HDR_WEAK_getInstance();
      case 'HEADSET':
        return MaterialIcon$HEADSET_getInstance();
      case 'HEADSET_MIC':
        return MaterialIcon$HEADSET_MIC_getInstance();
      case 'HEALING':
        return MaterialIcon$HEALING_getInstance();
      case 'HEARING':
        return MaterialIcon$HEARING_getInstance();
      case 'HELP':
        return MaterialIcon$HELP_getInstance();
      case 'HELP_OUTLINE':
        return MaterialIcon$HELP_OUTLINE_getInstance();
      case 'HIGH_QUALITY':
        return MaterialIcon$HIGH_QUALITY_getInstance();
      case 'HIGHLIGHT':
        return MaterialIcon$HIGHLIGHT_getInstance();
      case 'HIGHLIGHT_OFF':
        return MaterialIcon$HIGHLIGHT_OFF_getInstance();
      case 'HISTORY':
        return MaterialIcon$HISTORY_getInstance();
      case 'HOME':
        return MaterialIcon$HOME_getInstance();
      case 'HOT_TUB':
        return MaterialIcon$HOT_TUB_getInstance();
      case 'HOTEL':
        return MaterialIcon$HOTEL_getInstance();
      case 'HOURGLASS_EMPTY':
        return MaterialIcon$HOURGLASS_EMPTY_getInstance();
      case 'HOURGLASS_FULL':
        return MaterialIcon$HOURGLASS_FULL_getInstance();
      case 'HTTP':
        return MaterialIcon$HTTP_getInstance();
      case 'HTTPS':
        return MaterialIcon$HTTPS_getInstance();
      case 'IMAGE':
        return MaterialIcon$IMAGE_getInstance();
      case 'IMAGE_ASPECT_RATIO':
        return MaterialIcon$IMAGE_ASPECT_RATIO_getInstance();
      case 'IMPORT_CONTACTS':
        return MaterialIcon$IMPORT_CONTACTS_getInstance();
      case 'IMPORT_EXPORT':
        return MaterialIcon$IMPORT_EXPORT_getInstance();
      case 'IMPORTANT_DEVICES':
        return MaterialIcon$IMPORTANT_DEVICES_getInstance();
      case 'INBOX':
        return MaterialIcon$INBOX_getInstance();
      case 'INDETERMINATE_CHECK_BOX':
        return MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance();
      case 'INFO':
        return MaterialIcon$INFO_getInstance();
      case 'INFO_OUTLINE':
        return MaterialIcon$INFO_OUTLINE_getInstance();
      case 'INPUT':
        return MaterialIcon$INPUT_getInstance();
      case 'INSERT_CHART':
        return MaterialIcon$INSERT_CHART_getInstance();
      case 'INSERT_COMMENT':
        return MaterialIcon$INSERT_COMMENT_getInstance();
      case 'INSERT_DRIVE_FILE':
        return MaterialIcon$INSERT_DRIVE_FILE_getInstance();
      case 'INSERT_EMOTICON':
        return MaterialIcon$INSERT_EMOTICON_getInstance();
      case 'INSERT_INVITATION':
        return MaterialIcon$INSERT_INVITATION_getInstance();
      case 'INSERT_LINK':
        return MaterialIcon$INSERT_LINK_getInstance();
      case 'INSERT_PHOTO':
        return MaterialIcon$INSERT_PHOTO_getInstance();
      case 'INVERT_COLORS':
        return MaterialIcon$INVERT_COLORS_getInstance();
      case 'INVERT_COLORS_OFF':
        return MaterialIcon$INVERT_COLORS_OFF_getInstance();
      case 'ISO':
        return MaterialIcon$ISO_getInstance();
      case 'KEYBOARD':
        return MaterialIcon$KEYBOARD_getInstance();
      case 'KEYBOARD_ARROW_DOWN':
        return MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance();
      case 'KEYBOARD_ARROW_LEFT':
        return MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance();
      case 'KEYBOARD_ARROW_RIGHT':
        return MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance();
      case 'KEYBOARD_ARROW_UP':
        return MaterialIcon$KEYBOARD_ARROW_UP_getInstance();
      case 'KEYBOARD_BACKSPACE':
        return MaterialIcon$KEYBOARD_BACKSPACE_getInstance();
      case 'KEYBOARD_CAPSLOCK':
        return MaterialIcon$KEYBOARD_CAPSLOCK_getInstance();
      case 'KEYBOARD_HIDE':
        return MaterialIcon$KEYBOARD_HIDE_getInstance();
      case 'KEYBOARD_RETURN':
        return MaterialIcon$KEYBOARD_RETURN_getInstance();
      case 'KEYBOARD_TAB':
        return MaterialIcon$KEYBOARD_TAB_getInstance();
      case 'KEYBOARD_VOICE':
        return MaterialIcon$KEYBOARD_VOICE_getInstance();
      case 'KITCHEN':
        return MaterialIcon$KITCHEN_getInstance();
      case 'LABEL':
        return MaterialIcon$LABEL_getInstance();
      case 'LABEL_OUTLINE':
        return MaterialIcon$LABEL_OUTLINE_getInstance();
      case 'LANDSCAPE':
        return MaterialIcon$LANDSCAPE_getInstance();
      case 'LANGUAGE':
        return MaterialIcon$LANGUAGE_getInstance();
      case 'LAPTOP':
        return MaterialIcon$LAPTOP_getInstance();
      case 'LAPTOP_CHROMEBOOK':
        return MaterialIcon$LAPTOP_CHROMEBOOK_getInstance();
      case 'LAPTOP_MAC':
        return MaterialIcon$LAPTOP_MAC_getInstance();
      case 'LAPTOP_WINDOWS':
        return MaterialIcon$LAPTOP_WINDOWS_getInstance();
      case 'LAST_PAGE':
        return MaterialIcon$LAST_PAGE_getInstance();
      case 'LAUNCH':
        return MaterialIcon$LAUNCH_getInstance();
      case 'LAYERS':
        return MaterialIcon$LAYERS_getInstance();
      case 'LAYERS_CLEAR':
        return MaterialIcon$LAYERS_CLEAR_getInstance();
      case 'LEAK_ADD':
        return MaterialIcon$LEAK_ADD_getInstance();
      case 'LEAK_REMOVE':
        return MaterialIcon$LEAK_REMOVE_getInstance();
      case 'LENS':
        return MaterialIcon$LENS_getInstance();
      case 'LIBRARY_ADD':
        return MaterialIcon$LIBRARY_ADD_getInstance();
      case 'LIBRARY_BOOKS':
        return MaterialIcon$LIBRARY_BOOKS_getInstance();
      case 'LIBRARY_MUSIC':
        return MaterialIcon$LIBRARY_MUSIC_getInstance();
      case 'LIGHTBULB_OUTLINE':
        return MaterialIcon$LIGHTBULB_OUTLINE_getInstance();
      case 'LINE_STYLE':
        return MaterialIcon$LINE_STYLE_getInstance();
      case 'LINE_WEIGHT':
        return MaterialIcon$LINE_WEIGHT_getInstance();
      case 'LINEAR_SCALE':
        return MaterialIcon$LINEAR_SCALE_getInstance();
      case 'LINK':
        return MaterialIcon$LINK_getInstance();
      case 'LINKED_CAMERA':
        return MaterialIcon$LINKED_CAMERA_getInstance();
      case 'LIST':
        return MaterialIcon$LIST_getInstance();
      case 'LIVE_HELP':
        return MaterialIcon$LIVE_HELP_getInstance();
      case 'LIVE_TV':
        return MaterialIcon$LIVE_TV_getInstance();
      case 'LOCAL_ACTIVITY':
        return MaterialIcon$LOCAL_ACTIVITY_getInstance();
      case 'LOCAL_AIRPORT':
        return MaterialIcon$LOCAL_AIRPORT_getInstance();
      case 'LOCAL_ATM':
        return MaterialIcon$LOCAL_ATM_getInstance();
      case 'LOCAL_BAR':
        return MaterialIcon$LOCAL_BAR_getInstance();
      case 'LOCAL_CAFE':
        return MaterialIcon$LOCAL_CAFE_getInstance();
      case 'LOCAL_CAR_WASH':
        return MaterialIcon$LOCAL_CAR_WASH_getInstance();
      case 'LOCAL_CONVENIENCE_STORE':
        return MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance();
      case 'LOCAL_DINING':
        return MaterialIcon$LOCAL_DINING_getInstance();
      case 'LOCAL_DRINK':
        return MaterialIcon$LOCAL_DRINK_getInstance();
      case 'LOCAL_FLORIST':
        return MaterialIcon$LOCAL_FLORIST_getInstance();
      case 'LOCAL_GAS_STATION':
        return MaterialIcon$LOCAL_GAS_STATION_getInstance();
      case 'LOCAL_GROCERY_STORE':
        return MaterialIcon$LOCAL_GROCERY_STORE_getInstance();
      case 'LOCAL_HOSPITAL':
        return MaterialIcon$LOCAL_HOSPITAL_getInstance();
      case 'LOCAL_HOTEL':
        return MaterialIcon$LOCAL_HOTEL_getInstance();
      case 'LOCAL_LAUNDRY_SERVICE':
        return MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance();
      case 'LOCAL_LIBRARY':
        return MaterialIcon$LOCAL_LIBRARY_getInstance();
      case 'LOCAL_MALL':
        return MaterialIcon$LOCAL_MALL_getInstance();
      case 'LOCAL_MOVIES':
        return MaterialIcon$LOCAL_MOVIES_getInstance();
      case 'LOCAL_OFFER':
        return MaterialIcon$LOCAL_OFFER_getInstance();
      case 'LOCAL_PARKING':
        return MaterialIcon$LOCAL_PARKING_getInstance();
      case 'LOCAL_PHARMACY':
        return MaterialIcon$LOCAL_PHARMACY_getInstance();
      case 'LOCAL_PHONE':
        return MaterialIcon$LOCAL_PHONE_getInstance();
      case 'LOCAL_PIZZA':
        return MaterialIcon$LOCAL_PIZZA_getInstance();
      case 'LOCAL_PLAY':
        return MaterialIcon$LOCAL_PLAY_getInstance();
      case 'LOCAL_POST_OFFICE':
        return MaterialIcon$LOCAL_POST_OFFICE_getInstance();
      case 'LOCAL_PRINTSHOP':
        return MaterialIcon$LOCAL_PRINTSHOP_getInstance();
      case 'LOCAL_SEE':
        return MaterialIcon$LOCAL_SEE_getInstance();
      case 'LOCAL_SHIPPING':
        return MaterialIcon$LOCAL_SHIPPING_getInstance();
      case 'LOCAL_TAXI':
        return MaterialIcon$LOCAL_TAXI_getInstance();
      case 'LOCATION_CITY':
        return MaterialIcon$LOCATION_CITY_getInstance();
      case 'LOCATION_DISABLED':
        return MaterialIcon$LOCATION_DISABLED_getInstance();
      case 'LOCATION_OFF':
        return MaterialIcon$LOCATION_OFF_getInstance();
      case 'LOCATION_ON':
        return MaterialIcon$LOCATION_ON_getInstance();
      case 'LOCATION_SEARCHING':
        return MaterialIcon$LOCATION_SEARCHING_getInstance();
      case 'LOCK':
        return MaterialIcon$LOCK_getInstance();
      case 'LOCK_OPEN':
        return MaterialIcon$LOCK_OPEN_getInstance();
      case 'LOCK_OUTLINE':
        return MaterialIcon$LOCK_OUTLINE_getInstance();
      case 'LOOKS':
        return MaterialIcon$LOOKS_getInstance();
      case 'LOOKS_3':
        return MaterialIcon$LOOKS_3_getInstance();
      case 'LOOKS_4':
        return MaterialIcon$LOOKS_4_getInstance();
      case 'LOOKS_5':
        return MaterialIcon$LOOKS_5_getInstance();
      case 'LOOKS_6':
        return MaterialIcon$LOOKS_6_getInstance();
      case 'LOOKS_ONE':
        return MaterialIcon$LOOKS_ONE_getInstance();
      case 'LOOKS_TWO':
        return MaterialIcon$LOOKS_TWO_getInstance();
      case 'LOOP':
        return MaterialIcon$LOOP_getInstance();
      case 'LOUPE':
        return MaterialIcon$LOUPE_getInstance();
      case 'LOW_PRIORITY':
        return MaterialIcon$LOW_PRIORITY_getInstance();
      case 'LOYALTY':
        return MaterialIcon$LOYALTY_getInstance();
      case 'MAIL':
        return MaterialIcon$MAIL_getInstance();
      case 'MAIL_OUTLINE':
        return MaterialIcon$MAIL_OUTLINE_getInstance();
      case 'MAP':
        return MaterialIcon$MAP_getInstance();
      case 'MARKUNREAD':
        return MaterialIcon$MARKUNREAD_getInstance();
      case 'MARKUNREAD_MAILBOX':
        return MaterialIcon$MARKUNREAD_MAILBOX_getInstance();
      case 'MEMORY':
        return MaterialIcon$MEMORY_getInstance();
      case 'MENU':
        return MaterialIcon$MENU_getInstance();
      case 'MERGE_TYPE':
        return MaterialIcon$MERGE_TYPE_getInstance();
      case 'MESSAGE':
        return MaterialIcon$MESSAGE_getInstance();
      case 'MIC':
        return MaterialIcon$MIC_getInstance();
      case 'MIC_NONE':
        return MaterialIcon$MIC_NONE_getInstance();
      case 'MIC_OFF':
        return MaterialIcon$MIC_OFF_getInstance();
      case 'MMS':
        return MaterialIcon$MMS_getInstance();
      case 'MODE_COMMENT':
        return MaterialIcon$MODE_COMMENT_getInstance();
      case 'MODE_EDIT':
        return MaterialIcon$MODE_EDIT_getInstance();
      case 'MONETIZATION_ON':
        return MaterialIcon$MONETIZATION_ON_getInstance();
      case 'MONEY_OFF':
        return MaterialIcon$MONEY_OFF_getInstance();
      case 'MONOCHROME_PHOTOS':
        return MaterialIcon$MONOCHROME_PHOTOS_getInstance();
      case 'MOOD':
        return MaterialIcon$MOOD_getInstance();
      case 'MOOD_BAD':
        return MaterialIcon$MOOD_BAD_getInstance();
      case 'MORE':
        return MaterialIcon$MORE_getInstance();
      case 'MORE_HORIZ':
        return MaterialIcon$MORE_HORIZ_getInstance();
      case 'MORE_VERT':
        return MaterialIcon$MORE_VERT_getInstance();
      case 'MOTORCYCLE':
        return MaterialIcon$MOTORCYCLE_getInstance();
      case 'MOUSE':
        return MaterialIcon$MOUSE_getInstance();
      case 'MOVE_TO_INBOX':
        return MaterialIcon$MOVE_TO_INBOX_getInstance();
      case 'MOVIE':
        return MaterialIcon$MOVIE_getInstance();
      case 'MOVIE_CREATION':
        return MaterialIcon$MOVIE_CREATION_getInstance();
      case 'MOVIE_FILTER':
        return MaterialIcon$MOVIE_FILTER_getInstance();
      case 'MULTILINE_CHART':
        return MaterialIcon$MULTILINE_CHART_getInstance();
      case 'MUSIC_NOTE':
        return MaterialIcon$MUSIC_NOTE_getInstance();
      case 'MUSIC_VIDEO':
        return MaterialIcon$MUSIC_VIDEO_getInstance();
      case 'MY_LOCATION':
        return MaterialIcon$MY_LOCATION_getInstance();
      case 'NATURE':
        return MaterialIcon$NATURE_getInstance();
      case 'NATURE_PEOPLE':
        return MaterialIcon$NATURE_PEOPLE_getInstance();
      case 'NAVIGATE_BEFORE':
        return MaterialIcon$NAVIGATE_BEFORE_getInstance();
      case 'NAVIGATE_NEXT':
        return MaterialIcon$NAVIGATE_NEXT_getInstance();
      case 'NAVIGATION':
        return MaterialIcon$NAVIGATION_getInstance();
      case 'NEAR_ME':
        return MaterialIcon$NEAR_ME_getInstance();
      case 'NETWORK_CELL':
        return MaterialIcon$NETWORK_CELL_getInstance();
      case 'NETWORK_CHECK':
        return MaterialIcon$NETWORK_CHECK_getInstance();
      case 'NETWORK_LOCKED':
        return MaterialIcon$NETWORK_LOCKED_getInstance();
      case 'NETWORK_WIFI':
        return MaterialIcon$NETWORK_WIFI_getInstance();
      case 'NEW_RELEASES':
        return MaterialIcon$NEW_RELEASES_getInstance();
      case 'NEXT_WEEK':
        return MaterialIcon$NEXT_WEEK_getInstance();
      case 'NFC':
        return MaterialIcon$NFC_getInstance();
      case 'NO_ENCRYPTION':
        return MaterialIcon$NO_ENCRYPTION_getInstance();
      case 'NO_SIM':
        return MaterialIcon$NO_SIM_getInstance();
      case 'NOT_INTERESTED':
        return MaterialIcon$NOT_INTERESTED_getInstance();
      case 'NOTE':
        return MaterialIcon$NOTE_getInstance();
      case 'NOTE_ADD':
        return MaterialIcon$NOTE_ADD_getInstance();
      case 'NOTIFICATIONS':
        return MaterialIcon$NOTIFICATIONS_getInstance();
      case 'NOTIFICATIONS_ACTIVE':
        return MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance();
      case 'NOTIFICATIONS_NONE':
        return MaterialIcon$NOTIFICATIONS_NONE_getInstance();
      case 'NOTIFICATIONS_OFF':
        return MaterialIcon$NOTIFICATIONS_OFF_getInstance();
      case 'NOTIFICATIONS_PAUSED':
        return MaterialIcon$NOTIFICATIONS_PAUSED_getInstance();
      case 'OFFLINE_PIN':
        return MaterialIcon$OFFLINE_PIN_getInstance();
      case 'ONDEMAND_VIDEO':
        return MaterialIcon$ONDEMAND_VIDEO_getInstance();
      case 'OPACITY':
        return MaterialIcon$OPACITY_getInstance();
      case 'OPEN_IN_BROWSER':
        return MaterialIcon$OPEN_IN_BROWSER_getInstance();
      case 'OPEN_IN_NEW':
        return MaterialIcon$OPEN_IN_NEW_getInstance();
      case 'OPEN_WITH':
        return MaterialIcon$OPEN_WITH_getInstance();
      case 'PAGES':
        return MaterialIcon$PAGES_getInstance();
      case 'PAGEVIEW':
        return MaterialIcon$PAGEVIEW_getInstance();
      case 'PALETTE':
        return MaterialIcon$PALETTE_getInstance();
      case 'PAN_TOOL':
        return MaterialIcon$PAN_TOOL_getInstance();
      case 'PANORAMA':
        return MaterialIcon$PANORAMA_getInstance();
      case 'PANORAMA_FISH_EYE':
        return MaterialIcon$PANORAMA_FISH_EYE_getInstance();
      case 'PANORAMA_HORIZONTAL':
        return MaterialIcon$PANORAMA_HORIZONTAL_getInstance();
      case 'PANORAMA_VERTICAL':
        return MaterialIcon$PANORAMA_VERTICAL_getInstance();
      case 'PANORAMA_WIDE_ANGLE':
        return MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance();
      case 'PARTY_MODE':
        return MaterialIcon$PARTY_MODE_getInstance();
      case 'PAUSE':
        return MaterialIcon$PAUSE_getInstance();
      case 'PAUSE_CIRCLE_FILLED':
        return MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance();
      case 'PAUSE_CIRCLE_OUTLINE':
        return MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance();
      case 'PAYMENT':
        return MaterialIcon$PAYMENT_getInstance();
      case 'PEOPLE':
        return MaterialIcon$PEOPLE_getInstance();
      case 'PEOPLE_OUTLINE':
        return MaterialIcon$PEOPLE_OUTLINE_getInstance();
      case 'PERM_CAMERA_MIC':
        return MaterialIcon$PERM_CAMERA_MIC_getInstance();
      case 'PERM_CONTACT_CALENDAR':
        return MaterialIcon$PERM_CONTACT_CALENDAR_getInstance();
      case 'PERM_DATA_SETTING':
        return MaterialIcon$PERM_DATA_SETTING_getInstance();
      case 'PERM_DEVICE_INFORMATION':
        return MaterialIcon$PERM_DEVICE_INFORMATION_getInstance();
      case 'PERM_IDENTITY':
        return MaterialIcon$PERM_IDENTITY_getInstance();
      case 'PERM_MEDIA':
        return MaterialIcon$PERM_MEDIA_getInstance();
      case 'PERM_PHONE_MSG':
        return MaterialIcon$PERM_PHONE_MSG_getInstance();
      case 'PERM_SCAN_WIFI':
        return MaterialIcon$PERM_SCAN_WIFI_getInstance();
      case 'PERSON':
        return MaterialIcon$PERSON_getInstance();
      case 'PERSON_ADD':
        return MaterialIcon$PERSON_ADD_getInstance();
      case 'PERSON_OUTLINE':
        return MaterialIcon$PERSON_OUTLINE_getInstance();
      case 'PERSON_PIN':
        return MaterialIcon$PERSON_PIN_getInstance();
      case 'PERSON_PIN_CIRCLE':
        return MaterialIcon$PERSON_PIN_CIRCLE_getInstance();
      case 'PERSONAL_VIDEO':
        return MaterialIcon$PERSONAL_VIDEO_getInstance();
      case 'PETS':
        return MaterialIcon$PETS_getInstance();
      case 'PHONE':
        return MaterialIcon$PHONE_getInstance();
      case 'PHONE_ANDROID':
        return MaterialIcon$PHONE_ANDROID_getInstance();
      case 'PHONE_BLUETOOTH_SPEAKER':
        return MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance();
      case 'PHONE_FORWARDED':
        return MaterialIcon$PHONE_FORWARDED_getInstance();
      case 'PHONE_IN_TALK':
        return MaterialIcon$PHONE_IN_TALK_getInstance();
      case 'PHONE_IPHONE':
        return MaterialIcon$PHONE_IPHONE_getInstance();
      case 'PHONE_LOCKED':
        return MaterialIcon$PHONE_LOCKED_getInstance();
      case 'PHONE_MISSED':
        return MaterialIcon$PHONE_MISSED_getInstance();
      case 'PHONE_PAUSED':
        return MaterialIcon$PHONE_PAUSED_getInstance();
      case 'PHONELINK':
        return MaterialIcon$PHONELINK_getInstance();
      case 'PHONELINK_ERASE':
        return MaterialIcon$PHONELINK_ERASE_getInstance();
      case 'PHONELINK_LOCK':
        return MaterialIcon$PHONELINK_LOCK_getInstance();
      case 'PHONELINK_OFF':
        return MaterialIcon$PHONELINK_OFF_getInstance();
      case 'PHONELINK_RING':
        return MaterialIcon$PHONELINK_RING_getInstance();
      case 'PHONELINK_SETUP':
        return MaterialIcon$PHONELINK_SETUP_getInstance();
      case 'PHOTO':
        return MaterialIcon$PHOTO_getInstance();
      case 'PHOTO_ALBUM':
        return MaterialIcon$PHOTO_ALBUM_getInstance();
      case 'PHOTO_CAMERA':
        return MaterialIcon$PHOTO_CAMERA_getInstance();
      case 'PHOTO_FILTER':
        return MaterialIcon$PHOTO_FILTER_getInstance();
      case 'PHOTO_LIBRARY':
        return MaterialIcon$PHOTO_LIBRARY_getInstance();
      case 'PHOTO_SIZE_SELECT_ACTUAL':
        return MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance();
      case 'PHOTO_SIZE_SELECT_LARGE':
        return MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance();
      case 'PHOTO_SIZE_SELECT_SMALL':
        return MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance();
      case 'PICTURE_AS_PDF':
        return MaterialIcon$PICTURE_AS_PDF_getInstance();
      case 'PICTURE_IN_PICTURE':
        return MaterialIcon$PICTURE_IN_PICTURE_getInstance();
      case 'PICTURE_IN_PICTURE_ALT':
        return MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance();
      case 'PIE_CHART':
        return MaterialIcon$PIE_CHART_getInstance();
      case 'PIE_CHART_OUTLINED':
        return MaterialIcon$PIE_CHART_OUTLINED_getInstance();
      case 'PIN_DROP':
        return MaterialIcon$PIN_DROP_getInstance();
      case 'PLACE':
        return MaterialIcon$PLACE_getInstance();
      case 'PLAY_ARROW':
        return MaterialIcon$PLAY_ARROW_getInstance();
      case 'PLAY_CIRCLE_FILLED':
        return MaterialIcon$PLAY_CIRCLE_FILLED_getInstance();
      case 'PLAY_CIRCLE_OUTLINE':
        return MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance();
      case 'PLAY_FOR_WORK':
        return MaterialIcon$PLAY_FOR_WORK_getInstance();
      case 'PLAYLIST_ADD':
        return MaterialIcon$PLAYLIST_ADD_getInstance();
      case 'PLAYLIST_ADD_CHECK':
        return MaterialIcon$PLAYLIST_ADD_CHECK_getInstance();
      case 'PLAYLIST_PLAY':
        return MaterialIcon$PLAYLIST_PLAY_getInstance();
      case 'PLUS_ONE':
        return MaterialIcon$PLUS_ONE_getInstance();
      case 'POLL':
        return MaterialIcon$POLL_getInstance();
      case 'POLYMER':
        return MaterialIcon$POLYMER_getInstance();
      case 'POOL':
        return MaterialIcon$POOL_getInstance();
      case 'PORTABLE_WIFI_OFF':
        return MaterialIcon$PORTABLE_WIFI_OFF_getInstance();
      case 'PORTRAIT':
        return MaterialIcon$PORTRAIT_getInstance();
      case 'POWER':
        return MaterialIcon$POWER_getInstance();
      case 'POWER_INPUT':
        return MaterialIcon$POWER_INPUT_getInstance();
      case 'POWER_SETTINGS_NEW':
        return MaterialIcon$POWER_SETTINGS_NEW_getInstance();
      case 'PREGNANT_WOMAN':
        return MaterialIcon$PREGNANT_WOMAN_getInstance();
      case 'PRESENT_TO_ALL':
        return MaterialIcon$PRESENT_TO_ALL_getInstance();
      case 'PRINT':
        return MaterialIcon$PRINT_getInstance();
      case 'PRIORITY_HIGH':
        return MaterialIcon$PRIORITY_HIGH_getInstance();
      case 'PUBLIC':
        return MaterialIcon$PUBLIC_getInstance();
      case 'PUBLISH':
        return MaterialIcon$PUBLISH_getInstance();
      case 'QUERY_BUILDER':
        return MaterialIcon$QUERY_BUILDER_getInstance();
      case 'QUESTION_ANSWER':
        return MaterialIcon$QUESTION_ANSWER_getInstance();
      case 'QUEUE':
        return MaterialIcon$QUEUE_getInstance();
      case 'QUEUE_MUSIC':
        return MaterialIcon$QUEUE_MUSIC_getInstance();
      case 'QUEUE_PLAY_NEXT':
        return MaterialIcon$QUEUE_PLAY_NEXT_getInstance();
      case 'RADIO':
        return MaterialIcon$RADIO_getInstance();
      case 'RADIO_BUTTON_CHECKED':
        return MaterialIcon$RADIO_BUTTON_CHECKED_getInstance();
      case 'RADIO_BUTTON_UNCHECKED':
        return MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance();
      case 'RATE_REVIEW':
        return MaterialIcon$RATE_REVIEW_getInstance();
      case 'RECEIPT':
        return MaterialIcon$RECEIPT_getInstance();
      case 'RECENT_ACTORS':
        return MaterialIcon$RECENT_ACTORS_getInstance();
      case 'RECORD_VOICE_OVER':
        return MaterialIcon$RECORD_VOICE_OVER_getInstance();
      case 'RM':
        return MaterialIcon$RM_getInstance();
      case 'REDO':
        return MaterialIcon$REDO_getInstance();
      case 'REFRESH':
        return MaterialIcon$REFRESH_getInstance();
      case 'REMOVE':
        return MaterialIcon$REMOVE_getInstance();
      case 'REMOVE_CIRCLE':
        return MaterialIcon$REMOVE_CIRCLE_getInstance();
      case 'REMOVE_CIRCLE_OUTLINE':
        return MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance();
      case 'REMOVE_FROM_QUEUE':
        return MaterialIcon$REMOVE_FROM_QUEUE_getInstance();
      case 'REMOVE_RED_EYE':
        return MaterialIcon$REMOVE_RED_EYE_getInstance();
      case 'REMOVE_SHOPPING_CART':
        return MaterialIcon$REMOVE_SHOPPING_CART_getInstance();
      case 'REORDER':
        return MaterialIcon$REORDER_getInstance();
      case 'REPEAT':
        return MaterialIcon$REPEAT_getInstance();
      case 'REPEAT_ONE':
        return MaterialIcon$REPEAT_ONE_getInstance();
      case 'REPLAY':
        return MaterialIcon$REPLAY_getInstance();
      case 'REPLAY_10':
        return MaterialIcon$REPLAY_10_getInstance();
      case 'REPLAY_30':
        return MaterialIcon$REPLAY_30_getInstance();
      case 'REPLAY_5':
        return MaterialIcon$REPLAY_5_getInstance();
      case 'REPLY':
        return MaterialIcon$REPLY_getInstance();
      case 'REPLY_ALL':
        return MaterialIcon$REPLY_ALL_getInstance();
      case 'REPORT':
        return MaterialIcon$REPORT_getInstance();
      case 'REPORT_PROBLEM':
        return MaterialIcon$REPORT_PROBLEM_getInstance();
      case 'RESTAURANT':
        return MaterialIcon$RESTAURANT_getInstance();
      case 'RESTAURANT_MENU':
        return MaterialIcon$RESTAURANT_MENU_getInstance();
      case 'RESTORE':
        return MaterialIcon$RESTORE_getInstance();
      case 'RESTORE_PAGE':
        return MaterialIcon$RESTORE_PAGE_getInstance();
      case 'RING_VOLUME':
        return MaterialIcon$RING_VOLUME_getInstance();
      case 'ROOM':
        return MaterialIcon$ROOM_getInstance();
      case 'ROOM_SERVICE':
        return MaterialIcon$ROOM_SERVICE_getInstance();
      case 'ROTATE_90_DEGREES_CCW':
        return MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance();
      case 'ROTATE_LEFT':
        return MaterialIcon$ROTATE_LEFT_getInstance();
      case 'ROTATE_RIGHT':
        return MaterialIcon$ROTATE_RIGHT_getInstance();
      case 'ROUNDED_CORNER':
        return MaterialIcon$ROUNDED_CORNER_getInstance();
      case 'ROUTER':
        return MaterialIcon$ROUTER_getInstance();
      case 'ROWING':
        return MaterialIcon$ROWING_getInstance();
      case 'RSS_FEED':
        return MaterialIcon$RSS_FEED_getInstance();
      case 'RV_HOOKUP':
        return MaterialIcon$RV_HOOKUP_getInstance();
      case 'SATELLITE':
        return MaterialIcon$SATELLITE_getInstance();
      case 'SAVE':
        return MaterialIcon$SAVE_getInstance();
      case 'SCANNER':
        return MaterialIcon$SCANNER_getInstance();
      case 'SCHEDULE':
        return MaterialIcon$SCHEDULE_getInstance();
      case 'SCHOOL':
        return MaterialIcon$SCHOOL_getInstance();
      case 'SCREEN_LOCK_LANDSCAPE':
        return MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance();
      case 'SCREEN_LOCK_PORTRAIT':
        return MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance();
      case 'SCREEN_LOCK_ROTATION':
        return MaterialIcon$SCREEN_LOCK_ROTATION_getInstance();
      case 'SCREEN_ROTATION':
        return MaterialIcon$SCREEN_ROTATION_getInstance();
      case 'SCREEN_SHARE':
        return MaterialIcon$SCREEN_SHARE_getInstance();
      case 'SD_CARD':
        return MaterialIcon$SD_CARD_getInstance();
      case 'SD_STORAGE':
        return MaterialIcon$SD_STORAGE_getInstance();
      case 'SEARCH':
        return MaterialIcon$SEARCH_getInstance();
      case 'SECURITY':
        return MaterialIcon$SECURITY_getInstance();
      case 'SELECT_ALL':
        return MaterialIcon$SELECT_ALL_getInstance();
      case 'SEND':
        return MaterialIcon$SEND_getInstance();
      case 'SENTIMENT_DISSATISFIED':
        return MaterialIcon$SENTIMENT_DISSATISFIED_getInstance();
      case 'SENTIMENT_NEUTRAL':
        return MaterialIcon$SENTIMENT_NEUTRAL_getInstance();
      case 'SENTIMENT_SATISFIED':
        return MaterialIcon$SENTIMENT_SATISFIED_getInstance();
      case 'SENTIMENT_VERY_DISSATISFIED':
        return MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance();
      case 'SENTIMENT_VERY_SATISFIED':
        return MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance();
      case 'SETTINGS':
        return MaterialIcon$SETTINGS_getInstance();
      case 'SETTINGS_APPLICATIONS':
        return MaterialIcon$SETTINGS_APPLICATIONS_getInstance();
      case 'SETTINGS_BACKUP_RESTORE':
        return MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance();
      case 'SETTINGS_BLUETOOTH':
        return MaterialIcon$SETTINGS_BLUETOOTH_getInstance();
      case 'SETTINGS_BRIGHTNESS':
        return MaterialIcon$SETTINGS_BRIGHTNESS_getInstance();
      case 'SETTINGS_CELL':
        return MaterialIcon$SETTINGS_CELL_getInstance();
      case 'SETTINGS_ETHERNET':
        return MaterialIcon$SETTINGS_ETHERNET_getInstance();
      case 'SETTINGS_INPUT_ANTENNA':
        return MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance();
      case 'SETTINGS_INPUT_COMPONENT':
        return MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance();
      case 'SETTINGS_INPUT_COMPOSITE':
        return MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance();
      case 'SETTINGS_INPUT_HDMI':
        return MaterialIcon$SETTINGS_INPUT_HDMI_getInstance();
      case 'SETTINGS_INPUT_SVIDEO':
        return MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance();
      case 'SETTINGS_OVERSCAN':
        return MaterialIcon$SETTINGS_OVERSCAN_getInstance();
      case 'SETTINGS_PHONE':
        return MaterialIcon$SETTINGS_PHONE_getInstance();
      case 'SETTINGS_POWER':
        return MaterialIcon$SETTINGS_POWER_getInstance();
      case 'SETTINGS_REMOTE':
        return MaterialIcon$SETTINGS_REMOTE_getInstance();
      case 'SETTINGS_SYSTEM_DAYDREAM':
        return MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance();
      case 'SETTINGS_VOICE':
        return MaterialIcon$SETTINGS_VOICE_getInstance();
      case 'SHARE':
        return MaterialIcon$SHARE_getInstance();
      case 'SHOP':
        return MaterialIcon$SHOP_getInstance();
      case 'SHOP_TWO':
        return MaterialIcon$SHOP_TWO_getInstance();
      case 'SHOPPING_BASKET':
        return MaterialIcon$SHOPPING_BASKET_getInstance();
      case 'SHOPPING_CART':
        return MaterialIcon$SHOPPING_CART_getInstance();
      case 'SHORT_TEXT':
        return MaterialIcon$SHORT_TEXT_getInstance();
      case 'SHOW_CHART':
        return MaterialIcon$SHOW_CHART_getInstance();
      case 'SHUFFLE':
        return MaterialIcon$SHUFFLE_getInstance();
      case 'SIGNAL_CELLULAR_4_BAR':
        return MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance();
      case 'SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR':
        return MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance();
      case 'SIGNAL_CELLULAR_NO_SIM':
        return MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance();
      case 'SIGNAL_CELLULAR_NULL':
        return MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance();
      case 'SIGNAL_CELLULAR_OFF':
        return MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance();
      case 'SIGNAL_WIFI_4_BAR':
        return MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance();
      case 'SIGNAL_WIFI_4_BAR_LOCK':
        return MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance();
      case 'SIGNAL_WIFI_OFF':
        return MaterialIcon$SIGNAL_WIFI_OFF_getInstance();
      case 'SIM_CARD':
        return MaterialIcon$SIM_CARD_getInstance();
      case 'SIM_CARD_ALERT':
        return MaterialIcon$SIM_CARD_ALERT_getInstance();
      case 'SKIP_NEXT':
        return MaterialIcon$SKIP_NEXT_getInstance();
      case 'SKIP_PREVIOUS':
        return MaterialIcon$SKIP_PREVIOUS_getInstance();
      case 'SLIDESHOW':
        return MaterialIcon$SLIDESHOW_getInstance();
      case 'SLOW_MOTION_VIDEO':
        return MaterialIcon$SLOW_MOTION_VIDEO_getInstance();
      case 'SMARTPHONE':
        return MaterialIcon$SMARTPHONE_getInstance();
      case 'SMOKE_FREE':
        return MaterialIcon$SMOKE_FREE_getInstance();
      case 'SMOKING_ROOMS':
        return MaterialIcon$SMOKING_ROOMS_getInstance();
      case 'SMS':
        return MaterialIcon$SMS_getInstance();
      case 'SMS_FAILED':
        return MaterialIcon$SMS_FAILED_getInstance();
      case 'SNOOZE':
        return MaterialIcon$SNOOZE_getInstance();
      case 'SORT':
        return MaterialIcon$SORT_getInstance();
      case 'SORT_BY_ALPHA':
        return MaterialIcon$SORT_BY_ALPHA_getInstance();
      case 'SPA':
        return MaterialIcon$SPA_getInstance();
      case 'SPACE_BAR':
        return MaterialIcon$SPACE_BAR_getInstance();
      case 'SPEAKER':
        return MaterialIcon$SPEAKER_getInstance();
      case 'SPEAKER_GROUP':
        return MaterialIcon$SPEAKER_GROUP_getInstance();
      case 'SPEAKER_NOTES':
        return MaterialIcon$SPEAKER_NOTES_getInstance();
      case 'SPEAKER_NOTES_OFF':
        return MaterialIcon$SPEAKER_NOTES_OFF_getInstance();
      case 'SPEAKER_PHONE':
        return MaterialIcon$SPEAKER_PHONE_getInstance();
      case 'SPELLCHECK':
        return MaterialIcon$SPELLCHECK_getInstance();
      case 'STAR':
        return MaterialIcon$STAR_getInstance();
      case 'STAR_BORDER':
        return MaterialIcon$STAR_BORDER_getInstance();
      case 'STAR_HALF':
        return MaterialIcon$STAR_HALF_getInstance();
      case 'STARS':
        return MaterialIcon$STARS_getInstance();
      case 'STAY_CURRENT_LANDSCAPE':
        return MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance();
      case 'STAY_CURRENT_PORTRAIT':
        return MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance();
      case 'STAY_PRIMARY_LANDSCAPE':
        return MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance();
      case 'STAY_PRIMARY_PORTRAIT':
        return MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance();
      case 'STOP':
        return MaterialIcon$STOP_getInstance();
      case 'STOP_SCREEN_SHARE':
        return MaterialIcon$STOP_SCREEN_SHARE_getInstance();
      case 'STORAGE':
        return MaterialIcon$STORAGE_getInstance();
      case 'STORE':
        return MaterialIcon$STORE_getInstance();
      case 'STORE_MALL_DIRECTORY':
        return MaterialIcon$STORE_MALL_DIRECTORY_getInstance();
      case 'STRAIGHTEN':
        return MaterialIcon$STRAIGHTEN_getInstance();
      case 'STREETVIEW':
        return MaterialIcon$STREETVIEW_getInstance();
      case 'STRIKETHROUGH_S':
        return MaterialIcon$STRIKETHROUGH_S_getInstance();
      case 'STYLE':
        return MaterialIcon$STYLE_getInstance();
      case 'SUBDIRECTORY_ARROW_LEFT':
        return MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance();
      case 'SUBDIRECTORY_ARROW_RIGHT':
        return MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance();
      case 'SUBJECT':
        return MaterialIcon$SUBJECT_getInstance();
      case 'SUBSCRIPTIONS':
        return MaterialIcon$SUBSCRIPTIONS_getInstance();
      case 'SUBTITLES':
        return MaterialIcon$SUBTITLES_getInstance();
      case 'SUBWAY':
        return MaterialIcon$SUBWAY_getInstance();
      case 'SUPERVISOR_ACCOUNT':
        return MaterialIcon$SUPERVISOR_ACCOUNT_getInstance();
      case 'SURROUND_SOUND':
        return MaterialIcon$SURROUND_SOUND_getInstance();
      case 'SWAP_CALLS':
        return MaterialIcon$SWAP_CALLS_getInstance();
      case 'SWAP_HORIZ':
        return MaterialIcon$SWAP_HORIZ_getInstance();
      case 'SWAP_VERT':
        return MaterialIcon$SWAP_VERT_getInstance();
      case 'SWAP_VERTICAL_CIRCLE':
        return MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance();
      case 'SWITCH_CAMERA':
        return MaterialIcon$SWITCH_CAMERA_getInstance();
      case 'SWITCH_VIDEO':
        return MaterialIcon$SWITCH_VIDEO_getInstance();
      case 'SYNC':
        return MaterialIcon$SYNC_getInstance();
      case 'SYNC_DISABLED':
        return MaterialIcon$SYNC_DISABLED_getInstance();
      case 'SYNC_PROBLEM':
        return MaterialIcon$SYNC_PROBLEM_getInstance();
      case 'SYSTEM_UPDATE':
        return MaterialIcon$SYSTEM_UPDATE_getInstance();
      case 'SYSTEM_UPDATE_ALT':
        return MaterialIcon$SYSTEM_UPDATE_ALT_getInstance();
      case 'TAB':
        return MaterialIcon$TAB_getInstance();
      case 'TAB_UNSELECTED':
        return MaterialIcon$TAB_UNSELECTED_getInstance();
      case 'TABLET':
        return MaterialIcon$TABLET_getInstance();
      case 'TABLET_ANDROID':
        return MaterialIcon$TABLET_ANDROID_getInstance();
      case 'TABLET_MAC':
        return MaterialIcon$TABLET_MAC_getInstance();
      case 'TAG_FACES':
        return MaterialIcon$TAG_FACES_getInstance();
      case 'TAP_AND_PLAY':
        return MaterialIcon$TAP_AND_PLAY_getInstance();
      case 'TERRAIN':
        return MaterialIcon$TERRAIN_getInstance();
      case 'TEXT_FIELDS':
        return MaterialIcon$TEXT_FIELDS_getInstance();
      case 'TEXT_FORMAT':
        return MaterialIcon$TEXT_FORMAT_getInstance();
      case 'TEXTSMS':
        return MaterialIcon$TEXTSMS_getInstance();
      case 'TEXTURE':
        return MaterialIcon$TEXTURE_getInstance();
      case 'THEATERS':
        return MaterialIcon$THEATERS_getInstance();
      case 'THUMB_DOWN':
        return MaterialIcon$THUMB_DOWN_getInstance();
      case 'THUMB_UP':
        return MaterialIcon$THUMB_UP_getInstance();
      case 'THUMBS_UP_DOWN':
        return MaterialIcon$THUMBS_UP_DOWN_getInstance();
      case 'TIME_TO_LEAVE':
        return MaterialIcon$TIME_TO_LEAVE_getInstance();
      case 'TIMELAPSE':
        return MaterialIcon$TIMELAPSE_getInstance();
      case 'TIMELINE':
        return MaterialIcon$TIMELINE_getInstance();
      case 'TIMER':
        return MaterialIcon$TIMER_getInstance();
      case 'TIMER_10':
        return MaterialIcon$TIMER_10_getInstance();
      case 'TIMER_3':
        return MaterialIcon$TIMER_3_getInstance();
      case 'TIMER_OFF':
        return MaterialIcon$TIMER_OFF_getInstance();
      case 'TITLE':
        return MaterialIcon$TITLE_getInstance();
      case 'TOC':
        return MaterialIcon$TOC_getInstance();
      case 'TODAY':
        return MaterialIcon$TODAY_getInstance();
      case 'TOLL':
        return MaterialIcon$TOLL_getInstance();
      case 'TONALITY':
        return MaterialIcon$TONALITY_getInstance();
      case 'TOUCH_APP':
        return MaterialIcon$TOUCH_APP_getInstance();
      case 'TOYS':
        return MaterialIcon$TOYS_getInstance();
      case 'TRACK_CHANGES':
        return MaterialIcon$TRACK_CHANGES_getInstance();
      case 'TRAFFIC':
        return MaterialIcon$TRAFFIC_getInstance();
      case 'TRAIN':
        return MaterialIcon$TRAIN_getInstance();
      case 'TRAM':
        return MaterialIcon$TRAM_getInstance();
      case 'TRANSFER_WITHIN_A_STATION':
        return MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance();
      case 'TRANSFORM':
        return MaterialIcon$TRANSFORM_getInstance();
      case 'TRANSLATE':
        return MaterialIcon$TRANSLATE_getInstance();
      case 'TRENDING_DOWN':
        return MaterialIcon$TRENDING_DOWN_getInstance();
      case 'TRENDING_FLAT':
        return MaterialIcon$TRENDING_FLAT_getInstance();
      case 'TRENDING_UP':
        return MaterialIcon$TRENDING_UP_getInstance();
      case 'TUNE':
        return MaterialIcon$TUNE_getInstance();
      case 'TURNED_IN':
        return MaterialIcon$TURNED_IN_getInstance();
      case 'TURNED_IN_NOT':
        return MaterialIcon$TURNED_IN_NOT_getInstance();
      case 'TV':
        return MaterialIcon$TV_getInstance();
      case 'UNARCHIVE':
        return MaterialIcon$UNARCHIVE_getInstance();
      case 'UNDO':
        return MaterialIcon$UNDO_getInstance();
      case 'UNFOLD_LESS':
        return MaterialIcon$UNFOLD_LESS_getInstance();
      case 'UNFOLD_MORE':
        return MaterialIcon$UNFOLD_MORE_getInstance();
      case 'UPDATE':
        return MaterialIcon$UPDATE_getInstance();
      case 'USB':
        return MaterialIcon$USB_getInstance();
      case 'VERIFIED_USER':
        return MaterialIcon$VERIFIED_USER_getInstance();
      case 'VERTICAL_ALIGN_BOTTOM':
        return MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance();
      case 'VERTICAL_ALIGN_CENTER':
        return MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance();
      case 'VERTICAL_ALIGN_TOP':
        return MaterialIcon$VERTICAL_ALIGN_TOP_getInstance();
      case 'VIBRATION':
        return MaterialIcon$VIBRATION_getInstance();
      case 'VIDEO_CALL':
        return MaterialIcon$VIDEO_CALL_getInstance();
      case 'VIDEO_LABEL':
        return MaterialIcon$VIDEO_LABEL_getInstance();
      case 'VIDEO_LIBRARY':
        return MaterialIcon$VIDEO_LIBRARY_getInstance();
      case 'VIDEOCAM':
        return MaterialIcon$VIDEOCAM_getInstance();
      case 'VIDEOCAM_OFF':
        return MaterialIcon$VIDEOCAM_OFF_getInstance();
      case 'VIDEOGAME_ASSET':
        return MaterialIcon$VIDEOGAME_ASSET_getInstance();
      case 'VIEW_AGENDA':
        return MaterialIcon$VIEW_AGENDA_getInstance();
      case 'VIEW_ARRAY':
        return MaterialIcon$VIEW_ARRAY_getInstance();
      case 'VIEW_CAROUSEL':
        return MaterialIcon$VIEW_CAROUSEL_getInstance();
      case 'VIEW_COLUMN':
        return MaterialIcon$VIEW_COLUMN_getInstance();
      case 'VIEW_COMFY':
        return MaterialIcon$VIEW_COMFY_getInstance();
      case 'VIEW_COMPACT':
        return MaterialIcon$VIEW_COMPACT_getInstance();
      case 'VIEW_DAY':
        return MaterialIcon$VIEW_DAY_getInstance();
      case 'VIEW_HEADLINE':
        return MaterialIcon$VIEW_HEADLINE_getInstance();
      case 'VIEW_LIST':
        return MaterialIcon$VIEW_LIST_getInstance();
      case 'VIEW_MODULE':
        return MaterialIcon$VIEW_MODULE_getInstance();
      case 'VIEW_QUILT':
        return MaterialIcon$VIEW_QUILT_getInstance();
      case 'VIEW_STREAM':
        return MaterialIcon$VIEW_STREAM_getInstance();
      case 'VIEW_WEEK':
        return MaterialIcon$VIEW_WEEK_getInstance();
      case 'VIGNETTE':
        return MaterialIcon$VIGNETTE_getInstance();
      case 'VISIBILITY':
        return MaterialIcon$VISIBILITY_getInstance();
      case 'VISIBILITY_OFF':
        return MaterialIcon$VISIBILITY_OFF_getInstance();
      case 'VOICE_CHAT':
        return MaterialIcon$VOICE_CHAT_getInstance();
      case 'VOICEMAIL':
        return MaterialIcon$VOICEMAIL_getInstance();
      case 'VOLUME_DOWN':
        return MaterialIcon$VOLUME_DOWN_getInstance();
      case 'VOLUME_MUTE':
        return MaterialIcon$VOLUME_MUTE_getInstance();
      case 'VOLUME_OFF':
        return MaterialIcon$VOLUME_OFF_getInstance();
      case 'VOLUME_UP':
        return MaterialIcon$VOLUME_UP_getInstance();
      case 'VPN_KEY':
        return MaterialIcon$VPN_KEY_getInstance();
      case 'VPN_LOCK':
        return MaterialIcon$VPN_LOCK_getInstance();
      case 'WALLPAPER':
        return MaterialIcon$WALLPAPER_getInstance();
      case 'WARNING':
        return MaterialIcon$WARNING_getInstance();
      case 'WATCH':
        return MaterialIcon$WATCH_getInstance();
      case 'WATCH_LATER':
        return MaterialIcon$WATCH_LATER_getInstance();
      case 'WB_AUTO':
        return MaterialIcon$WB_AUTO_getInstance();
      case 'WB_CLOUDY':
        return MaterialIcon$WB_CLOUDY_getInstance();
      case 'WB_INCANDESCENT':
        return MaterialIcon$WB_INCANDESCENT_getInstance();
      case 'WB_IRIDESCENT':
        return MaterialIcon$WB_IRIDESCENT_getInstance();
      case 'WB_SUNNY':
        return MaterialIcon$WB_SUNNY_getInstance();
      case 'WC':
        return MaterialIcon$WC_getInstance();
      case 'WEB':
        return MaterialIcon$WEB_getInstance();
      case 'WEB_ASSET':
        return MaterialIcon$WEB_ASSET_getInstance();
      case 'WEEKEND':
        return MaterialIcon$WEEKEND_getInstance();
      case 'WHATSHOT':
        return MaterialIcon$WHATSHOT_getInstance();
      case 'WIDGETS':
        return MaterialIcon$WIDGETS_getInstance();
      case 'WIFI':
        return MaterialIcon$WIFI_getInstance();
      case 'WIFI_LOCK':
        return MaterialIcon$WIFI_LOCK_getInstance();
      case 'WIFI_TETHERING':
        return MaterialIcon$WIFI_TETHERING_getInstance();
      case 'WORK':
        return MaterialIcon$WORK_getInstance();
      case 'WRAP_TEXT':
        return MaterialIcon$WRAP_TEXT_getInstance();
      case 'YOUTUBE_SEARCHED_FOR':
        return MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance();
      case 'ZOOM_IN':
        return MaterialIcon$ZOOM_IN_getInstance();
      case 'ZOOM_OUT':
        return MaterialIcon$ZOOM_OUT_getInstance();
      case 'ZOOM_OUT_MAP':
        return MaterialIcon$ZOOM_OUT_MAP_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.MaterialIcon.' + name);
    }
  }
  MaterialIcon.valueOf_61zpoe$ = MaterialIcon$valueOf;
  function OptionView(value) {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLOptionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    View.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLOptionElement) ? tmp$ : throwCCE());
    this.value = value;
    var tmp$_1;
    this.html_vnqh1g$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLOptionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(OptionView.prototype, 'html', {
    get: function () {
      return this.html_vnqh1g$_0;
    }
  });
  Object.defineProperty(OptionView.prototype, 'htmlValue', {
    get: function () {
      return this.html.value;
    },
    set: function (value) {
      this.html.value = value;
    }
  });
  Object.defineProperty(OptionView.prototype, 'text', {
    get: function () {
      return this.html.text;
    },
    set: function (value) {
      this.html.text = value;
    }
  });
  Object.defineProperty(OptionView.prototype, 'index', {
    get: function () {
      return this.html.index;
    }
  });
  Object.defineProperty(OptionView.prototype, 'selected', {
    get: function () {
      return this.html.selected;
    },
    set: function (value) {
      this.html.selected = value;
    }
  });
  OptionView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionView',
    interfaces: [View]
  };
  function SelectView(dataSet, initValue, transform) {
    if (transform === void 0)
      transform = SelectView_init$lambda;
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLSelectElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSelectElement) ? tmp$ : throwCCE());
    this.initValue_0 = initValue;
    this.transform = transform;
    var tmp$_1;
    this.html_w6ruyz$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLSelectElement) ? tmp$_1 : throwCCE();
    this.dataSet_zi3a62$_0 = emptyList();
    this.valueProperty = property_0(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.readonlyInternal_2ppa53$_0 = new AttributeDelegate('readonly');
    this.tabindex_7ycq3d$_0 = new AttributeDelegate();
    this.dataSet = dataSet;
    this.value = this.initValue_0;
    this.html.addEventListener('change', new SelectView_init$ObjectLiteral(this));
  }
  Object.defineProperty(SelectView.prototype, 'html', {
    get: function () {
      return this.html_w6ruyz$_0;
    }
  });
  SelectView.prototype.bind_1gog60$ = function (property) {
    this.valueProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  SelectView.prototype.bind_bqrw12$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
  };
  SelectView.prototype.unbind = function () {
    this.valueProperty.unbind();
  };
  Object.defineProperty(SelectView.prototype, 'dataSet', {
    get: function () {
      return this.dataSet_zi3a62$_0;
    },
    set: function (value) {
      this.dataSet_zi3a62$_0 = value;
      this.clear();
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        var $receiver = new OptionView(item);
        $receiver.text = this.transform(item);
        $receiver.htmlValue = index_0.toString();
        this.unaryPlus_o71kt9$($receiver);
      }
    }
  });
  Object.defineProperty(SelectView.prototype, 'index', {
    get: function () {
      return this.html.selectedIndex;
    },
    set: function (value) {
      var invalidate = this.html.selectedIndex !== value;
      this.html.selectedIndex = value;
      if (invalidate) {
        this.valueProperty.invalidate();
      }
    }
  });
  Object.defineProperty(SelectView.prototype, 'value', {
    get: function () {
      var tmp$;
      return (tmp$ = getOrNull(this.dataSet, this.index)) != null ? tmp$ : this.initValue_0;
    },
    set: function (value) {
      this.index = this.dataSet.indexOf_11rb$(value);
    }
  });
  var SelectView$readonlyInternal_metadata = new PropertyMetadata('readonlyInternal');
  Object.defineProperty(SelectView.prototype, 'readonlyInternal_0', {
    get: function () {
      return this.readonlyInternal_2ppa53$_0.getValue_g92zoq$(this, SelectView$readonlyInternal_metadata);
    },
    set: function (readonlyInternal) {
      this.readonlyInternal_2ppa53$_0.setValue_wcp6fr$(this, SelectView$readonlyInternal_metadata, readonlyInternal);
    }
  });
  Object.defineProperty(SelectView.prototype, 'readonly', {
    get: function () {
      return this.readonlyInternal_0 != null;
    },
    set: function (value) {
      this.readonlyInternal_0 = value ? 'readonly' : null;
    }
  });
  var SelectView$tabindex_metadata = new PropertyMetadata('tabindex');
  Object.defineProperty(SelectView.prototype, 'tabindex', {
    get: function () {
      return this.tabindex_7ycq3d$_0.getValue_g92zoq$(this, SelectView$tabindex_metadata);
    },
    set: function (tabindex) {
      this.tabindex_7ycq3d$_0.setValue_wcp6fr$(this, SelectView$tabindex_metadata, tabindex);
    }
  });
  SelectView.prototype.preventTabStop = function () {
    this.tabindex = '-1';
  };
  function SelectView_init$lambda(it) {
    return it.toString();
  }
  function SelectView_init$ObjectLiteral(this$SelectView) {
    this.this$SelectView = this$SelectView;
  }
  SelectView_init$ObjectLiteral.prototype.handleEvent = function (event) {
    this.this$SelectView.valueProperty.invalidate();
  };
  SelectView_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  SelectView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SelectView',
    interfaces: [ViewCollection]
  };
  function selectView$lambda(it) {
    return it.toString();
  }
  function selectView$lambda_0($receiver) {
    return Unit;
  }
  function selectView($receiver, dataSet, initValue, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda;
    if (init === void 0)
      init = selectView$lambda_0;
    var $receiver_0 = new SelectView(dataSet, initValue, transform);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function selectView$lambda_1(it) {
    return it.toString();
  }
  function selectView$lambda_2($receiver) {
    return Unit;
  }
  function selectView_0($receiver, dataSet, property, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda_1;
    if (init === void 0)
      init = selectView$lambda_2;
    var $receiver_0 = new SelectView(dataSet, property.value, transform);
    $receiver_0.bind_1gog60$(property);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function selectView$lambda_3(it) {
    return it.toString();
  }
  function selectView$lambda_4($receiver) {
    return Unit;
  }
  function selectView_1($receiver, dataSet, property, transform, init) {
    if (transform === void 0)
      transform = selectView$lambda_3;
    if (init === void 0)
      init = selectView$lambda_4;
    var $receiver_0 = new SelectView(dataSet, property.value, transform);
    $receiver_0.bind_bqrw12$(property);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  var selectView_2 = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.components.selectView_ga1ra3$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, initValue, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), initValue, transform);
      getCallableRef('append', function ($receiver, view) {
        return $receiver.append_4q8e84$(view), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  var selectView_3 = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.components.selectView_4j6g2o$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, property, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), property.value, transform);
      $receiver_0.bind_1gog60$(property);
      getCallableRef('append', function ($receiver, view) {
        return $receiver.append_4q8e84$(view), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  var selectView_4 = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.components.selectView_5gp52a$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var SelectView_init = _.de.westermann.kwebview.components.SelectView;
    var getCallableRef = Kotlin.getCallableRef;
    function selectView$lambda(it) {
      return it.toString();
    }
    function selectView$lambda_0($receiver) {
      return Unit;
    }
    return function (T_0, isT, $receiver, property, transform, init) {
      if (transform === void 0)
        transform = selectView$lambda;
      if (init === void 0)
        init = selectView$lambda_0;
      var $receiver_0 = new SelectView_init(toList(T_0.values()), property.value, transform);
      $receiver_0.bind_bqrw12$(property);
      getCallableRef('append', function ($receiver_0, view_0) {
        return $receiver_0.append_4q8e84$(view_0), Unit;
      }.bind(null, $receiver))($receiver_0);
      init($receiver_0);
      return $receiver_0;
    };
  }));
  function Table() {
    var tmp$;
    var tagName;
    if (null != null) {
      tagName = null;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_43v2na$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(Table.prototype, 'html', {
    get: function () {
      return this.html_43v2na$_0;
    }
  });
  Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: [ViewCollection]
  };
  function table$lambda($receiver) {
    return Unit;
  }
  function table($receiver, classes, init) {
    if (init === void 0)
      init = table$lambda;
    var tmp$;
    var view = new Table();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableCaption() {
    var tmp$;
    var tagName;
    if ('caption' != null) {
      tagName = 'caption';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableCaptionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableCaptionElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_z7nhj2$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableCaptionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableCaption.prototype, 'html', {
    get: function () {
      return this.html_z7nhj2$_0;
    }
  });
  TableCaption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableCaption',
    interfaces: [ViewCollection]
  };
  function caption$lambda($receiver) {
    return Unit;
  }
  function caption($receiver, init) {
    if (init === void 0)
      init = caption$lambda;
    var view = new TableCaption();
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableCell(isHead) {
    var tag = isHead ? 'th' : 'td';
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableCellElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableCellElement) ? tmp$ : throwCCE());
    this.isHead = isHead;
    var tmp$_1;
    this.html_q38fjc$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableCellElement) ? tmp$_1 : throwCCE();
    this.colSpanInternal_bqa8l6$_0 = new AttributeDelegate('colspan');
    this.rowSpanInternal_679za8$_0 = new AttributeDelegate('rowspan');
  }
  Object.defineProperty(TableCell.prototype, 'html', {
    get: function () {
      return this.html_q38fjc$_0;
    }
  });
  var TableCell$colSpanInternal_metadata = new PropertyMetadata('colSpanInternal');
  Object.defineProperty(TableCell.prototype, 'colSpanInternal_0', {
    get: function () {
      return this.colSpanInternal_bqa8l6$_0.getValue_g92zoq$(this, TableCell$colSpanInternal_metadata);
    },
    set: function (colSpanInternal) {
      this.colSpanInternal_bqa8l6$_0.setValue_wcp6fr$(this, TableCell$colSpanInternal_metadata, colSpanInternal);
    }
  });
  Object.defineProperty(TableCell.prototype, 'colSpan', {
    get: function () {
      var tmp$;
      return (tmp$ = this.colSpanInternal_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.colSpanInternal_0 = value != null ? value.toString() : null;
    }
  });
  var TableCell$rowSpanInternal_metadata = new PropertyMetadata('rowSpanInternal');
  Object.defineProperty(TableCell.prototype, 'rowSpanInternal_0', {
    get: function () {
      return this.rowSpanInternal_679za8$_0.getValue_g92zoq$(this, TableCell$rowSpanInternal_metadata);
    },
    set: function (rowSpanInternal) {
      this.rowSpanInternal_679za8$_0.setValue_wcp6fr$(this, TableCell$rowSpanInternal_metadata, rowSpanInternal);
    }
  });
  Object.defineProperty(TableCell.prototype, 'rowSpan', {
    get: function () {
      var tmp$;
      return (tmp$ = this.rowSpanInternal_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.rowSpanInternal_0 = value != null ? value.toString() : null;
    }
  });
  TableCell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableCell',
    interfaces: [ViewCollection]
  };
  function cell$lambda($receiver) {
    return Unit;
  }
  function cell($receiver, colSpan, init) {
    if (colSpan === void 0)
      colSpan = null;
    if (init === void 0)
      init = cell$lambda;
    var view = new TableCell(false);
    view.colSpan = colSpan;
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function head$lambda($receiver) {
    return Unit;
  }
  function head($receiver, colSpan, init) {
    if (colSpan === void 0)
      colSpan = null;
    if (init === void 0)
      init = head$lambda;
    var view = new TableCell(true);
    view.colSpan = colSpan;
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableRow() {
    var tmp$;
    var tagName;
    if ('tr' != null) {
      tagName = 'tr';
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableRowElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableRowElement) ? tmp$ : throwCCE());
    var tmp$_1;
    this.html_x6xdl6$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableRowElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableRow.prototype, 'html', {
    get: function () {
      return this.html_x6xdl6$_0;
    }
  });
  TableRow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableRow',
    interfaces: [ViewCollection]
  };
  function row$lambda($receiver) {
    return Unit;
  }
  function row($receiver, classes, init) {
    if (init === void 0)
      init = row$lambda;
    var tmp$;
    var view = new TableRow();
    for (tmp$ = 0; tmp$ !== classes.length; ++tmp$) {
      var c = classes[tmp$];
      view.classList.plusAssign_61zpoe$(c);
    }
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TableSection(type) {
    var tag = type.tagName;
    var tmp$;
    var tagName;
    if (tag != null) {
      tagName = tag;
    }
     else {
      var tmp$_0 = get_js(getKClass(HTMLTableSectionElement)).name.toLowerCase();
      tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
      if (isBlank(tagName))
        tagName = 'div';
      if (equals(tagName, 'anchor'))
        tagName = 'a';
    }
    ViewCollection.call(this, Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTableSectionElement) ? tmp$ : throwCCE());
    this.type = type;
    var tmp$_1;
    this.html_23hi9r$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewCollection.prototype, 'html'), HTMLTableSectionElement) ? tmp$_1 : throwCCE();
  }
  Object.defineProperty(TableSection.prototype, 'html', {
    get: function () {
      return this.html_23hi9r$_0;
    }
  });
  function TableSection$Type(name, ordinal, tagName) {
    Enum.call(this);
    this.tagName = tagName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TableSection$Type_initFields() {
    TableSection$Type_initFields = function () {
    };
    TableSection$Type$THEAD_instance = new TableSection$Type('THEAD', 0, 'thead');
    TableSection$Type$TBODY_instance = new TableSection$Type('TBODY', 1, 'tbody');
    TableSection$Type$TFOOT_instance = new TableSection$Type('TFOOT', 2, 'tfoot');
  }
  var TableSection$Type$THEAD_instance;
  function TableSection$Type$THEAD_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$THEAD_instance;
  }
  var TableSection$Type$TBODY_instance;
  function TableSection$Type$TBODY_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$TBODY_instance;
  }
  var TableSection$Type$TFOOT_instance;
  function TableSection$Type$TFOOT_getInstance() {
    TableSection$Type_initFields();
    return TableSection$Type$TFOOT_instance;
  }
  TableSection$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function TableSection$Type$values() {
    return [TableSection$Type$THEAD_getInstance(), TableSection$Type$TBODY_getInstance(), TableSection$Type$TFOOT_getInstance()];
  }
  TableSection$Type.values = TableSection$Type$values;
  function TableSection$Type$valueOf(name) {
    switch (name) {
      case 'THEAD':
        return TableSection$Type$THEAD_getInstance();
      case 'TBODY':
        return TableSection$Type$TBODY_getInstance();
      case 'TFOOT':
        return TableSection$Type$TFOOT_getInstance();
      default:throwISE('No enum constant de.westermann.kwebview.components.TableSection.Type.' + name);
    }
  }
  TableSection$Type.valueOf_61zpoe$ = TableSection$Type$valueOf;
  TableSection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TableSection',
    interfaces: [ViewCollection]
  };
  function thead$lambda($receiver) {
    return Unit;
  }
  function thead($receiver, init) {
    if (init === void 0)
      init = thead$lambda;
    var view = new TableSection(TableSection$Type$THEAD_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function tbody$lambda($receiver) {
    return Unit;
  }
  function tbody($receiver, init) {
    if (init === void 0)
      init = tbody$lambda;
    var view = new TableSection(TableSection$Type$TBODY_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function tfoot$lambda($receiver) {
    return Unit;
  }
  function tfoot($receiver, init) {
    if (init === void 0)
      init = tfoot$lambda;
    var view = new TableSection(TableSection$Type$TFOOT_getInstance());
    $receiver.append_4q8e84$(view);
    init(view);
    return view;
  }
  function TextArea(initValue, view) {
    TextArea$Companion_getInstance();
    if (initValue === void 0)
      initValue = '';
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLTextAreaElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLTextAreaElement) ? tmp$ : throwCCE();
    }
    ViewForLabel.call(this, view);
    var tmp$_1;
    this.html_aocfc4$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, ViewForLabel.prototype, 'html'), HTMLTextAreaElement) ? tmp$_1 : throwCCE();
    this.valueProperty = property_0(getPropertyCallableRef('value', 0, function ($receiver) {
      return $receiver.value;
    }.bind(null, this), function ($receiver, value) {
      $receiver.value = value;
    }.bind(null, this)));
    this.placeholderProperty = property_0(getPropertyCallableRef('placeholder', 0, function ($receiver) {
      return $receiver.placeholder;
    }.bind(null, this), function ($receiver, value) {
      $receiver.placeholder = value;
    }.bind(null, this)));
    this.invalidProperty_nk8l53$_0 = new ClassDelegate('invalid');
    this.invalid_46ujsi$_0 = this.invalidProperty;
    this.typeInternal_3z49c8$_0 = new AttributeDelegate('type');
    this.minInternal_peubu2$_0 = new AttributeDelegate('min');
    this.maxInternal_x9axbw$_0 = new AttributeDelegate('max');
    this.stepInternal_2roz2y$_0 = new AttributeDelegate('step');
    this.value = initValue;
    this.type = this.type;
    var lastValue = {v: this.value};
    var changeListener = new TextArea_init$ObjectLiteral(this, lastValue);
    this.html.addEventListener('change', changeListener);
    this.html.addEventListener('keyup', changeListener);
    this.html.addEventListener('keypress', changeListener);
  }
  Object.defineProperty(TextArea.prototype, 'html', {
    get: function () {
      return this.html_aocfc4$_0;
    }
  });
  TextArea.prototype.bind_vbud5z$ = function (property) {
    this.valueProperty.bind_ybyx9l$(property);
    this.readonly = true;
  };
  TextArea.prototype.bind_e5den9$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
  };
  TextArea.prototype.bind_tz5vj6$ = function (property) {
    this.valueProperty.bindBidirectional_8xvv9u$(property);
    this.invalidProperty.bind_ybyx9l$(not(property.validProperty));
  };
  TextArea.prototype.unbind = function () {
    this.valueProperty.unbind();
    if (this.invalidProperty.isBound) {
      this.invalidProperty.unbind();
    }
  };
  Object.defineProperty(TextArea.prototype, 'value', {
    get: function () {
      return this.html.value;
    },
    set: function (value) {
      this.html.value = value;
      this.valueProperty.invalidate();
    }
  });
  Object.defineProperty(TextArea.prototype, 'placeholder', {
    get: function () {
      return this.html.placeholder;
    },
    set: function (value) {
      this.html.placeholder = value;
      this.placeholderProperty.invalidate();
    }
  });
  var TextArea$invalidProperty_metadata = new PropertyMetadata('invalidProperty');
  Object.defineProperty(TextArea.prototype, 'invalidProperty', {
    get: function () {
      return this.invalidProperty_nk8l53$_0.getValue_g92zoq$(this, TextArea$invalidProperty_metadata);
    }
  });
  var TextArea$invalid_metadata = new PropertyMetadata('invalid');
  Object.defineProperty(TextArea.prototype, 'invalid', {
    get: function () {
      return this.invalid_46ujsi$_0.getValue_n5byny$(this, TextArea$invalid_metadata);
    },
    set: function (invalid) {
      this.invalid_46ujsi$_0.setValue_sq4zib$(this, TextArea$invalid_metadata, invalid);
    }
  });
  var TextArea$typeInternal_metadata = new PropertyMetadata('typeInternal');
  Object.defineProperty(TextArea.prototype, 'typeInternal_0', {
    get: function () {
      return this.typeInternal_3z49c8$_0.getValue_g92zoq$(this, TextArea$typeInternal_metadata);
    },
    set: function (typeInternal) {
      this.typeInternal_3z49c8$_0.setValue_wcp6fr$(this, TextArea$typeInternal_metadata, typeInternal);
    }
  });
  Object.defineProperty(TextArea.prototype, 'type', {
    get: function () {
      var tmp$;
      return (tmp$ = this.typeInternal_0) != null ? getCallableRef('find', function ($receiver, html) {
        return $receiver.find_61zpoe$(html);
      }.bind(null, InputType$Companion_getInstance()))(tmp$) : null;
    },
    set: function (value) {
      this.typeInternal_0 = value != null ? value.html : null;
    }
  });
  var TextArea$minInternal_metadata = new PropertyMetadata('minInternal');
  Object.defineProperty(TextArea.prototype, 'minInternal_0', {
    get: function () {
      return this.minInternal_peubu2$_0.getValue_g92zoq$(this, TextArea$minInternal_metadata);
    },
    set: function (minInternal) {
      this.minInternal_peubu2$_0.setValue_wcp6fr$(this, TextArea$minInternal_metadata, minInternal);
    }
  });
  Object.defineProperty(TextArea.prototype, 'min', {
    get: function () {
      var tmp$;
      return (tmp$ = this.minInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.minInternal_0 = value != null ? value.toString() : null;
    }
  });
  var TextArea$maxInternal_metadata = new PropertyMetadata('maxInternal');
  Object.defineProperty(TextArea.prototype, 'maxInternal_0', {
    get: function () {
      return this.maxInternal_x9axbw$_0.getValue_g92zoq$(this, TextArea$maxInternal_metadata);
    },
    set: function (maxInternal) {
      this.maxInternal_x9axbw$_0.setValue_wcp6fr$(this, TextArea$maxInternal_metadata, maxInternal);
    }
  });
  Object.defineProperty(TextArea.prototype, 'max', {
    get: function () {
      var tmp$;
      return (tmp$ = this.maxInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.maxInternal_0 = value != null ? value.toString() : null;
    }
  });
  var TextArea$stepInternal_metadata = new PropertyMetadata('stepInternal');
  Object.defineProperty(TextArea.prototype, 'stepInternal_0', {
    get: function () {
      return this.stepInternal_2roz2y$_0.getValue_g92zoq$(this, TextArea$stepInternal_metadata);
    },
    set: function (stepInternal) {
      this.stepInternal_2roz2y$_0.setValue_wcp6fr$(this, TextArea$stepInternal_metadata, stepInternal);
    }
  });
  Object.defineProperty(TextArea.prototype, 'step', {
    get: function () {
      var tmp$;
      return (tmp$ = this.stepInternal_0) != null ? toDoubleOrNull(tmp$) : null;
    },
    set: function (value) {
      this.stepInternal_0 = value != null ? value.toString() : null;
    }
  });
  function TextArea$Companion() {
    TextArea$Companion_instance = this;
  }
  TextArea$Companion.prototype.wrap_97c7d2$ = function (view) {
    return new TextArea(view.value, view);
  };
  TextArea$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextArea$Companion_instance = null;
  function TextArea$Companion_getInstance() {
    if (TextArea$Companion_instance === null) {
      new TextArea$Companion();
    }
    return TextArea$Companion_instance;
  }
  function TextArea_init$ObjectLiteral(this$TextArea, closure$lastValue) {
    this.this$TextArea = this$TextArea;
    this.closure$lastValue = closure$lastValue;
  }
  TextArea_init$ObjectLiteral.prototype.handleEvent = function (event) {
    var tmp$, tmp$_0;
    var value = this.this$TextArea.value;
    if (!equals(value, this.this$TextArea.valueProperty.value) || !equals(value, this.closure$lastValue.v)) {
      this.closure$lastValue.v = value;
      this.this$TextArea.valueProperty.value = value;
    }
    if ((tmp$_0 = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : null) != null) {
      this.this$TextArea;
      var this$TextArea = this.this$TextArea;
      switch (tmp$_0.keyCode) {
        case 13:
        case 27:
          this$TextArea.blur();
          break;
      }
    }
  };
  TextArea_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  TextArea.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextArea',
    interfaces: [ViewForLabel]
  };
  function textArea$lambda($receiver) {
    return Unit;
  }
  function textArea($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = textArea$lambda;
    var $receiver_0 = new TextArea(text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function textArea$lambda_0($receiver) {
    return Unit;
  }
  function textArea_0($receiver, text, init) {
    if (init === void 0)
      init = textArea$lambda_0;
    var $receiver_0 = new TextArea(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function textArea$lambda_1($receiver) {
    return Unit;
  }
  function textArea_1($receiver, text, init) {
    if (init === void 0)
      init = textArea$lambda_1;
    var $receiver_0 = new TextArea(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_e5den9$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function textArea$lambda_2($receiver) {
    return Unit;
  }
  function textArea_2($receiver, text, init) {
    if (init === void 0)
      init = textArea$lambda_2;
    var $receiver_0 = new TextArea(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_tz5vj6$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function TextView(value, view) {
    TextView$Companion_getInstance();
    if (value === void 0)
      value = '';
    if (view === void 0) {
      var tmp$;
      var tagName;
      if (null != null) {
        tagName = null;
      }
       else {
        var tmp$_0 = get_js(getKClass(HTMLSpanElement)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      view = Kotlin.isType(tmp$ = document.createElement(tagName), HTMLSpanElement) ? tmp$ : throwCCE();
    }
    View.call(this, view);
    var tmp$_1;
    this.html_xvsv2c$_0 = Kotlin.isType(tmp$_1 = Kotlin.callGetter(this, View.prototype, 'html'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    this.textProperty = property_0(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this)));
    this.internalTabIndex_rl1h9p$_0 = new AttributeDelegate('tabIndex');
    this.text = value;
  }
  Object.defineProperty(TextView.prototype, 'html', {
    get: function () {
      return this.html_xvsv2c$_0;
    }
  });
  TextView.prototype.bind_vbud5z$ = function (property) {
    this.textProperty.bind_ybyx9l$(property);
  };
  TextView.prototype.unbind = function () {
    this.textProperty.unbind();
  };
  Object.defineProperty(TextView.prototype, 'text', {
    get: function () {
      var tmp$;
      return (tmp$ = this.html.textContent) != null ? tmp$ : '';
    },
    set: function (value) {
      this.html.textContent = value;
      this.textProperty.invalidate();
    }
  });
  Object.defineProperty(TextView.prototype, 'contentEditable', {
    get: function () {
      return this.html.isContentEditable;
    },
    set: function (value) {
      this.html.contentEditable = value.toString();
    }
  });
  var TextView$internalTabIndex_metadata = new PropertyMetadata('internalTabIndex');
  Object.defineProperty(TextView.prototype, 'internalTabIndex_0', {
    get: function () {
      return this.internalTabIndex_rl1h9p$_0.getValue_g92zoq$(this, TextView$internalTabIndex_metadata);
    },
    set: function (internalTabIndex) {
      this.internalTabIndex_rl1h9p$_0.setValue_wcp6fr$(this, TextView$internalTabIndex_metadata, internalTabIndex);
    }
  });
  Object.defineProperty(TextView.prototype, 'tabIndex', {
    get: function () {
      var tmp$;
      return (tmp$ = this.internalTabIndex_0) != null ? toIntOrNull(tmp$) : null;
    },
    set: function (value) {
      this.internalTabIndex_0 = value != null ? value.toString() : null;
    }
  });
  function TextView$Companion() {
    TextView$Companion_instance = this;
  }
  TextView$Companion.prototype.wrap_i51tme$ = function (view) {
    var tmp$;
    return new TextView((tmp$ = view.textContent) != null ? tmp$ : '', view);
  };
  TextView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextView$Companion_instance = null;
  function TextView$Companion_getInstance() {
    if (TextView$Companion_instance === null) {
      new TextView$Companion();
    }
    return TextView$Companion_instance;
  }
  TextView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextView',
    interfaces: [View]
  };
  function textView$lambda($receiver) {
    return Unit;
  }
  function textView($receiver, text, init) {
    if (text === void 0)
      text = '';
    if (init === void 0)
      init = textView$lambda;
    var $receiver_0 = new TextView(text);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    init($receiver_0);
    return $receiver_0;
  }
  function textView$lambda_0($receiver) {
    return Unit;
  }
  function textView_0($receiver, text, init) {
    if (init === void 0)
      init = textView$lambda_0;
    var $receiver_0 = new TextView(text.value);
    getCallableRef('append', function ($receiver, view) {
      return $receiver.append_4q8e84$(view), Unit;
    }.bind(null, $receiver))($receiver_0);
    $receiver_0.bind_vbud5z$(text);
    init($receiver_0);
    return $receiver_0;
  }
  function iterator$ObjectLiteral(this$iterator) {
    this.this$iterator = this$iterator;
    this.index_0 = 0;
  }
  iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.index_0 < this.this$iterator.length;
  };
  iterator$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0;
    return Kotlin.isType(tmp$_0 = this.this$iterator[tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$], HTMLElement) ? tmp$_0 : throwCCE();
  };
  iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function iterator($receiver) {
    return new iterator$ObjectLiteral($receiver);
  }
  function iterator$ObjectLiteral_0(this$iterator) {
    this.this$iterator = this$iterator;
    this.index_0 = 0;
  }
  iterator$ObjectLiteral_0.prototype.hasNext = function () {
    return this.index_0 < this.this$iterator.length;
  };
  iterator$ObjectLiteral_0.prototype.next = function () {
    var tmp$;
    return ensureNotNull(this.this$iterator[tmp$ = this.index_0, this.index_0 = tmp$ + 1 | 0, tmp$]);
  };
  iterator$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function iterator_0($receiver) {
    return new iterator$ObjectLiteral_0($receiver);
  }
  var createHtmlView = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.createHtmlView_fbk42d$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
    var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
    var equals = Kotlin.equals;
    var throwCCE = Kotlin.throwCCE;
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    return function (V_0, isV, tag) {
      if (tag === void 0)
        tag = null;
      var tmp$;
      var tagName;
      if (tag != null) {
        tagName = tag;
      }
       else {
        var tmp$_0 = get_js(getKClass(V_0)).name.toLowerCase();
        tagName = Regex_init('html([a-z]*)element').replace_x2uqeu$(tmp$_0, '$1');
        if (isBlank(tagName))
          tagName = 'div';
        if (equals(tagName, 'anchor'))
          tagName = 'a';
      }
      return isV(tmp$ = document.createElement(tagName)) ? tmp$ : throwCCE();
    };
  }));
  function toDashCase($receiver) {
    return Regex_init('([a-z])([A-Z])').replace_x2uqeu$($receiver, '$1-$2').toLowerCase();
  }
  var bind = defineInlineFunction('bpmn-bros-verifier.de.westermann.kwebview.bind_f5xd9h$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Unit = Kotlin.kotlin.Unit;
    function bind$ObjectLiteral(this$bind, isT, typeClosure$T) {
      this.this$bind = this$bind;
      this.isT = isT;
      this.typeClosure$T = typeClosure$T;
    }
    bind$ObjectLiteral.prototype.handleEvent = function (event) {
      var tmp$;
      this.this$bind.emit_11rb$(this.isT(tmp$ = event) ? tmp$ : throwCCE());
    };
    bind$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: []
    };
    function bind$lambda(this$bind, closure$isAttached, closure$element, closure$event, closure$listener) {
      return function () {
        if (this$bind.isEmpty() && closure$isAttached.v) {
          closure$element.removeEventListener(closure$event, closure$listener);
          closure$isAttached.v = false;
        }
         else if (!this$bind.isEmpty() && !closure$isAttached.v) {
          closure$element.addEventListener(closure$event, closure$listener);
          closure$isAttached.v = true;
        }
        return Unit;
      };
    }
    return function (T_0, isT, $receiver, element, event) {
      var listener = new bind$ObjectLiteral($receiver, isT, T_0);
      var isAttached = {v: false};
      var updateState = bind$lambda($receiver, isAttached, element, event, listener);
      $receiver.onAttach = updateState;
      $receiver.onDetach = updateState;
      updateState();
    };
  }));
  function toPoint($receiver) {
    return Point_init($receiver.clientX, $receiver.clientY);
  }
  function toPoint_0($receiver) {
    var tmp$;
    return (tmp$ = get_0($receiver.touches, 0)) != null ? Point_init(tmp$.clientX, tmp$.clientY) : null;
  }
  function toDimension($receiver) {
    return new Dimension($receiver.x, $receiver.y, $receiver.width, $receiver.height);
  }
  function format($receiver, digits) {
    return $receiver.toFixed(digits);
  }
  function delete_0(thing, key) {
    delete(thing[key]);
  }
  function async(timeout, block) {
    if (timeout === void 0)
      timeout = 1;
    if (timeout < 1)
      throw IllegalArgumentException_init('Timeout must be greater than 0!');
    return window.setTimeout(block, timeout);
  }
  function interval(delay, block) {
    if (delay < 1)
      throw IllegalArgumentException_init('Delay must be greater than 0!');
    return window.setInterval(block, delay);
  }
  function clearTimeout(id) {
    window.clearTimeout(id);
  }
  function clearInterval(id) {
    window.clearInterval(id);
  }
  function get$lambda(it) {
    return Unit;
  }
  function get$lambda_0(it) {
    return Unit;
  }
  function get$lambda_1(closure$xhttp, closure$onSuccess, closure$onError) {
    return function (it) {
      if (closure$xhttp.readyState === toShort(4)) {
        if (closure$xhttp.status === toShort(200) || closure$xhttp.status === toShort(304)) {
          closure$onSuccess(closure$xhttp.responseText);
        }
         else {
          closure$onError(closure$xhttp.status);
        }
      }
      return Unit;
    };
  }
  function get_1(url, data, onError, onSuccess) {
    if (data === void 0)
      data = emptyMap();
    if (onError === void 0)
      onError = get$lambda;
    if (onSuccess === void 0)
      onSuccess = get$lambda_0;
    var tmp$;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = get$lambda_1(xhttp, onSuccess, onError);
    xhttp.open('GET', url, true);
    if (!data.isEmpty()) {
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      var formData = new FormData();
      tmp$ = data.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var key = tmp$_0.key;
        var value = tmp$_0.value;
        formData.append(key, value);
      }
      xhttp.send(formData);
    }
     else {
      xhttp.send();
    }
  }
  function postForm$lambda(it) {
    return Unit;
  }
  function postForm$lambda_0(it) {
    return Unit;
  }
  function postForm$lambda_1(closure$xhttp, closure$onSuccess, closure$onError) {
    return function (it) {
      if (closure$xhttp.readyState === toShort(4)) {
        console.log(closure$xhttp.status);
        if (closure$xhttp.status === toShort(200) || closure$xhttp.status === toShort(304)) {
          closure$onSuccess(closure$xhttp.responseText);
        }
         else {
          closure$onError(closure$xhttp.status);
        }
      }
      return Unit;
    };
  }
  function postForm(url, data, onError, onSuccess) {
    if (data === void 0)
      data = emptyMap();
    if (onError === void 0)
      onError = postForm$lambda;
    if (onSuccess === void 0)
      onSuccess = postForm$lambda_0;
    var tmp$;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = postForm$lambda_1(xhttp, onSuccess, onError);
    xhttp.open('POST', url, true);
    if (!data.isEmpty()) {
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      var formData = new FormData();
      tmp$ = data.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var key = tmp$_0.key;
        var value = tmp$_0.value;
        formData.append(key, value);
      }
      xhttp.send(formData);
    }
     else {
      xhttp.send();
    }
  }
  function postJson$lambda(it) {
    return Unit;
  }
  function postJson$lambda_0(it) {
    return Unit;
  }
  function postJson$lambda_1(closure$xhttp, closure$onSuccess, closure$onError) {
    return function (it) {
      if (closure$xhttp.readyState === toShort(4)) {
        console.log(closure$xhttp.status);
        if (closure$xhttp.status === toShort(200) || closure$xhttp.status === toShort(304)) {
          closure$onSuccess(closure$xhttp.responseText);
        }
         else {
          closure$onError(closure$xhttp.status);
        }
      }
      return Unit;
    };
  }
  function postJson(url, data, onError, onSuccess) {
    if (onError === void 0)
      onError = postJson$lambda;
    if (onSuccess === void 0)
      onSuccess = postJson$lambda_0;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = postJson$lambda_1(xhttp, onSuccess, onError);
    xhttp.open('POST', url, true);
    if (data.isNotEmpty()) {
      xhttp.setRequestHeader('Content-type', 'application/json');
      xhttp.send(data);
    }
     else {
      xhttp.send();
    }
  }
  function jsonObject(block) {
    var json = {};
    block(json);
    return json;
  }
  function jsonArray(block) {
    var json = [];
    block(json);
    return json;
  }
  function listFactory$lambda$lambda(this$listFactory, closure$view) {
    return function () {
      this$listFactory.classList.minusAssign_61zpoe$('animate-add');
      closure$view.classList.minusAssign_61zpoe$('active');
      return Unit;
    };
  }
  function listFactory$lambda(closure$factory, this$listFactory, closure$animateAdd) {
    return function (f) {
      var index = f.component1()
      , element = f.component2();
      var view = closure$factory(element);
      this$listFactory.add_3kdhji$(index, view);
      if (closure$animateAdd != null) {
        this$listFactory.classList.plusAssign_61zpoe$('animate-add');
        view.classList.plusAssign_61zpoe$('active');
        async(closure$animateAdd, listFactory$lambda$lambda(this$listFactory, view));
      }
      return Unit;
    };
  }
  function listFactory$lambda$lambda_0(this$listFactory, closure$view) {
    return function () {
      this$listFactory.classList.minusAssign_61zpoe$('animate-remove');
      closure$view.classList.minusAssign_61zpoe$('active');
      this$listFactory.remove_4q8e84$(closure$view);
      return Unit;
    };
  }
  function listFactory$lambda_0(this$listFactory, closure$animateRemove) {
    return function (f) {
      var index = f.component1();
      var tmp$;
      var view = Kotlin.isType(tmp$ = this$listFactory.get_za3lpa$(index), View) ? tmp$ : throwCCE();
      if (closure$animateRemove == null) {
        this$listFactory.remove_4q8e84$(view);
      }
       else {
        this$listFactory.classList.plusAssign_61zpoe$('animate-remove');
        view.classList.plusAssign_61zpoe$('active');
        async(closure$animateRemove, listFactory$lambda$lambda_0(this$listFactory, view));
      }
      return Unit;
    };
  }
  function listFactory$lambda_1(this$listFactory, closure$factory) {
    return function (f) {
      var oldIndex = f.component1()
      , newIndex = f.component2()
      , element = f.component3();
      this$listFactory.removeAt_za3lpa$(oldIndex);
      this$listFactory.add_3kdhji$(newIndex, closure$factory(element));
      return Unit;
    };
  }
  function listFactory($receiver, list, factory, animateAdd, animateRemove) {
    if (animateAdd === void 0)
      animateAdd = null;
    if (animateRemove === void 0)
      animateRemove = null;
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.unaryPlus_o71kt9$(factory(element));
    }
    list.onAdd.invoke_qlkmfe$(listFactory$lambda(factory, $receiver, animateAdd));
    list.onRemove.invoke_qlkmfe$(listFactory$lambda_0($receiver, animateRemove));
    list.onUpdate.invoke_qlkmfe$(listFactory$lambda_1($receiver, factory));
  }
  function listFactory$lambda_2(it) {
    return it;
  }
  function listFactory_0($receiver, list, animateAdd, animateRemove) {
    if (animateAdd === void 0)
      animateAdd = null;
    if (animateRemove === void 0)
      animateRemove = null;
    listFactory($receiver, list, listFactory$lambda_2, animateAdd, animateRemove);
  }
  function i18n() {
    i18n_instance = this;
    this.data_0 = LinkedHashMap_init();
    this.fallbackLocale_0 = null;
    this.locale_0 = null;
  }
  function i18n$register$lambda(it) {
    return it.json();
  }
  function i18n$register$lambda_0(closure$locale) {
    return function (it) {
      closure$locale.json = it;
      closure$locale.isLoaded = true;
      return Unit;
    };
  }
  function i18n$register$lambda_1(it) {
    throw it;
  }
  i18n.prototype.register_shg59h$ = function (id, name, path, fallback) {
    if (fallback === void 0)
      fallback = false;
    var locale = new i18n$Locale(id, name, path, fallback);
    if (fallback) {
      if (this.fallbackLocale_0 != null) {
        throw IllegalStateException_init('Fallback locale is already set!');
      }
      this.fallbackLocale_0 = locale;
    }
    this.data_0.put_xwzc9p$(id, locale);
    window.fetch(path).then(i18n$register$lambda).then(i18n$register$lambda_0(locale)).catch(i18n$register$lambda_1);
  };
  Object.defineProperty(i18n.prototype, 'isReady', {
    get: function () {
      var $receiver = this.data_0.values;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.isLoaded) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    }
  });
  function i18n$load$ready$lambda(closure$ready) {
    return function () {
      closure$ready();
      return Unit;
    };
  }
  function i18n$load$ready(this$i18n, closure$id, closure$block) {
    return function closure$ready() {
      if (this$i18n.isReady) {
        this$i18n.locale_0 = this$i18n.data_0.get_11rb$(closure$id);
        closure$block();
      }
       else {
        async(50, i18n$load$ready$lambda(closure$ready));
      }
    };
  }
  i18n.prototype.load_a4mwiz$ = function (id, block) {
    var ready = i18n$load$ready(this, id, block);
    ready();
  };
  i18n.prototype.findKey_0 = function (locale, key) {
    var tmp$, tmp$_0;
    var keys = split(key, ['.']);
    var result = locale.json;
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var k = tmp$.next();
      if (typeof (tmp$_0 = result.hasOwnProperty(k)) === 'boolean' ? tmp$_0 : throwCCE()) {
        result = result[k];
      }
       else {
        return undefined;
      }
    }
    return result;
  };
  i18n.prototype.findKey_1 = function (key) {
    var result = undefined;
    if (this.locale_0 != null) {
      result = this.findKey_0(ensureNotNull(this.locale_0), key);
    }
    if (result == undefined) {
      if (this.fallbackLocale_0 != null) {
        result = this.findKey_0(ensureNotNull(this.fallbackLocale_0), key);
      }
    }
    if (result == undefined) {
      throw new InternationalizationError("Cannot find key '" + key + "'!");
    }
     else {
      return result;
    }
  };
  i18n.prototype.replace_0 = function (str, arguments_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var destination = ArrayList_init_0();
    var tmp$_3;
    tmp$_3 = arguments_0.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      if (element.first == null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_4;
    tmp$_4 = destination.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination_0.add_11rb$(item.second);
    }
    var unnamed = destination_0;
    var destination_1 = ArrayList_init_0();
    var tmp$_5;
    tmp$_5 = arguments_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      var tmp$_0_0;
      var tmp$_6;
      if ((tmp$_0_0 = (tmp$_6 = element_0.first) != null ? to(tmp$_6, element_0.second) : null) != null) {
        destination_1.add_11rb$(tmp$_0_0);
      }
    }
    var named = destination_1;
    var s = str;
    tmp$ = named.iterator();
    while (tmp$.hasNext()) {
      var tmp$_7 = tmp$.next();
      var key = tmp$_7.component1()
      , replacement = tmp$_7.component2();
      s = replace(s, '{' + key + '}', (tmp$_0 = replacement != null ? replacement.toString() : null) != null ? tmp$_0 : 'null');
    }
    tmp$_1 = unnamed.iterator();
    while (tmp$_1.hasNext()) {
      var replacement_0 = tmp$_1.next();
      if (contains(s, '{}')) {
        s = replaceFirst(s, '{}', (tmp$_2 = replacement_0 != null ? replacement_0.toString() : null) != null ? tmp$_2 : 'null');
      }
    }
    return s;
  };
  i18n.prototype.t_f2l2vj$ = function (key, arguments_0) {
    return this.replace_0(this.findKey_1(key).toString(), arguments_0);
  };
  i18n.prototype.t_u5kxgn$ = function (count, key, arguments_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var json = this.findKey_1(key);
    if (equals(count, 0) && (typeof (tmp$ = json.hasOwnProperty('zero')) === 'boolean' ? tmp$ : throwCCE())) {
      return this.replace_0(json.zero.toString(), arguments_0);
    }
     else if (equals(count, 1) && (typeof (tmp$_0 = json.hasOwnProperty('one')) === 'boolean' ? tmp$_0 : throwCCE())) {
      return this.replace_0(json.one.toString(), arguments_0);
    }
    if (typeof (tmp$_1 = json.hasOwnProperty('many')) === 'boolean' ? tmp$_1 : throwCCE())
      tmp$_2 = this.replace_0(json.many.toString(), arguments_0);
    else {
      tmp$_2 = this.replace_0(json.toString(), arguments_0);
    }
    return tmp$_2;
  };
  function i18n$Locale(id, name, path, fallback) {
    this.id = id;
    this.name = name;
    this.path = path;
    this.fallback = fallback;
    this.isLoaded = false;
    this.json = {};
  }
  i18n$Locale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Locale',
    interfaces: []
  };
  i18n.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'i18n',
    interfaces: []
  };
  var i18n_instance = null;
  function i18n_getInstance() {
    if (i18n_instance === null) {
      new i18n();
    }
    return i18n_instance;
  }
  function InternationalizationError(message) {
    if (message === void 0)
      message = null;
    Error_init(message, this);
    this.name = 'InternationalizationError';
  }
  InternationalizationError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternationalizationError',
    interfaces: [Error_0]
  };
  function t(key) {
    return i18n_getInstance().t_f2l2vj$(key, emptyList());
  }
  function t_0(key, arguments_0) {
    var tmp$ = i18n_getInstance();
    var destination = ArrayList_init(arguments_0.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== arguments_0.length; ++tmp$_0) {
      var item = arguments_0[tmp$_0];
      destination.add_11rb$(to(null, item));
    }
    return tmp$.t_f2l2vj$(key, destination);
  }
  function t_1(key, arguments_0) {
    return i18n_getInstance().t_f2l2vj$(key, asList(arguments_0));
  }
  function t_2(count, key) {
    return i18n_getInstance().t_u5kxgn$(count, key, emptyList());
  }
  function t_3(count, key, arguments_0) {
    var tmp$ = i18n_getInstance();
    var destination = ArrayList_init(arguments_0.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== arguments_0.length; ++tmp$_0) {
      var item = arguments_0[tmp$_0];
      destination.add_11rb$(to(null, item));
    }
    return tmp$.t_u5kxgn$(count, key, destination);
  }
  function t_4(count, key, arguments_0) {
    return i18n_getInstance().t_u5kxgn$(count, key, asList(arguments_0));
  }
  function Context() {
    this.matcherList = ArrayList_init_0();
    this.verifierList = ArrayList_init_0();
  }
  Context.prototype.match_s8eb88$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.Context.match_s8eb88$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var toString = Kotlin.toString;
    var ModelTree = _.io.framed.framework.ModelTree;
    var throwCCE = Kotlin.throwCCE;
    var Matcher = _.io.framed.framework.matcher.Matcher;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    function Context$match$ObjectLiteral(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
      this.isBpmn = isBpmn;
      this.typeClosure$Bpmn = typeClosure$Bpmn;
      this.isBros = isBros;
      this.typeClosure$Bros = typeClosure$Bros;
      this.closure$matcher = closure$matcher;
      var tmp$;
      this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
    }
    Object.defineProperty(Context$match$ObjectLiteral.prototype, 'name', {
      get: function () {
        return this.name_8pvve9$_0;
      }
    });
    Context$match$ObjectLiteral.prototype.filterBpmn_ay07g6$ = function (bpmn) {
      return this.isBpmn(bpmn.element);
    };
    Context$match$ObjectLiteral.prototype.filterBros_yl4c2y$ = function (bros) {
      return this.isBros(bros.element);
    };
    Context$match$ObjectLiteral.prototype.match_omkx58$ = function (bpmn, bros) {
      var tmp$, tmp$_0;
      return this.closure$matcher(Kotlin.isType(tmp$ = bpmn, ModelTree) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = bros, ModelTree) ? tmp$_0 : throwCCE());
    };
    Context$match$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Matcher]
    };
    return function (Bpmn_0, isBpmn, Bros_0, isBros, name, matcher) {
      if (name === void 0)
        name = null;
      var bpmnName = getKClass(Bpmn_0).simpleName;
      var brosName = getKClass(Bros_0).simpleName;
      var matcherName;
      if (bpmnName != null && brosName != null) {
        matcherName = toString(bpmnName) + toString(brosName) + 'Matcher';
      }
       else
        matcherName = null;
      var $receiver = this.matcherList;
      var element = new Context$match$ObjectLiteral(isBpmn, Bpmn_0, isBros, Bros_0, matcher, name, matcherName);
      $receiver.add_11rb$(element);
    };
  }));
  function Context$verifyBpmn$ObjectLiteral(closure$verifier, closure$name, closure$clazz) {
    this.closure$verifier = closure$verifier;
    this.name_km71ri$_0 = closure$name != null ? closure$name : Kotlin.callGetter(this, BpmnVerifier.prototype, 'name');
    this.filter_xjes79$_0 = setOf_0(closure$clazz);
  }
  Object.defineProperty(Context$verifyBpmn$ObjectLiteral.prototype, 'name', {
    get: function () {
      return this.name_km71ri$_0;
    }
  });
  Object.defineProperty(Context$verifyBpmn$ObjectLiteral.prototype, 'filter', {
    get: function () {
      return this.filter_xjes79$_0;
    }
  });
  Context$verifyBpmn$ObjectLiteral.prototype.verifyBpmn_ay07g6$ = function (element) {
    var tmp$;
    return this.closure$verifier(Kotlin.isType(tmp$ = element, ModelTree) ? tmp$ : throwCCE());
  };
  Context$verifyBpmn$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BpmnVerifier]
  };
  Context.prototype.verifyBpmn_f0wvhr$ = function (clazz, name, verifier) {
    if (name === void 0)
      name = null;
    var $receiver = this.verifierList;
    var element = new Context$verifyBpmn$ObjectLiteral(verifier, name, clazz);
    $receiver.add_11rb$(element);
  };
  Context.prototype.verifyBpmn_j99s2c$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.Context.verifyBpmn_j99s2c$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (Bpmn_0, isBpmn, name, verifier) {
      if (name === void 0)
        name = null;
      this.verifyBpmn_f0wvhr$(getKClass(Bpmn_0), name, verifier);
    };
  }));
  function Context$verifyBros$ObjectLiteral(closure$verifier, closure$name, closure$clazz) {
    this.closure$verifier = closure$verifier;
    this.name_5buxpp$_0 = closure$name != null ? closure$name : Kotlin.callGetter(this, BrosVerifier.prototype, 'name');
    this.filter_z98h40$_0 = setOf_0(closure$clazz);
  }
  Object.defineProperty(Context$verifyBros$ObjectLiteral.prototype, 'name', {
    get: function () {
      return this.name_5buxpp$_0;
    }
  });
  Object.defineProperty(Context$verifyBros$ObjectLiteral.prototype, 'filter', {
    get: function () {
      return this.filter_z98h40$_0;
    }
  });
  Context$verifyBros$ObjectLiteral.prototype.verifyBros_yl4c2y$ = function (element) {
    var tmp$;
    return this.closure$verifier(Kotlin.isType(tmp$ = element, ModelTree) ? tmp$ : throwCCE());
  };
  Context$verifyBros$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BrosVerifier]
  };
  Context.prototype.verifyBros_dk1dfz$ = function (clazz, name, verifier) {
    if (name === void 0)
      name = null;
    var $receiver = this.verifierList;
    var element = new Context$verifyBros$ObjectLiteral(verifier, name, clazz);
    $receiver.add_11rb$(element);
  };
  Context.prototype.verifyBros_kq5a44$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.Context.verifyBros_kq5a44$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (Bros_0, isBros, name, verifier) {
      if (name === void 0)
        name = null;
      this.verifyBros_dk1dfz$(getKClass(Bros_0), name, verifier);
    };
  }));
  Context.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context',
    interfaces: []
  };
  function ModelRelation(relation, type) {
    this.relation = relation;
    this.type = type;
    this.source_tjzhzd$_0 = this.source_tjzhzd$_0;
    this.target_lk2a2n$_0 = this.target_lk2a2n$_0;
  }
  Object.defineProperty(ModelRelation.prototype, 'source', {
    get: function () {
      if (this.source_tjzhzd$_0 == null)
        return throwUPAE('source');
      return this.source_tjzhzd$_0;
    },
    set: function (source) {
      this.source_tjzhzd$_0 = source;
    }
  });
  Object.defineProperty(ModelRelation.prototype, 'target', {
    get: function () {
      if (this.target_lk2a2n$_0 == null)
        return throwUPAE('target');
      return this.target_lk2a2n$_0;
    },
    set: function (target) {
      this.target_lk2a2n$_0 = target;
    }
  });
  ModelRelation.prototype.checkType_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.checkType_287e2$', function (M_0, isM) {
    return isM(this.relation);
  });
  ModelRelation.prototype.model_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.model_287e2$', function (M_0, isM) {
    var tmp$;
    return isM(tmp$ = this.relation) ? tmp$ : null;
  });
  ModelRelation.prototype.checkSourceType_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.checkSourceType_287e2$', function (M_0, isM) {
    return isM(this.source.element);
  });
  ModelRelation.prototype.source_30y1fr$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.source_30y1fr$', wrapFunction(function () {
    var ModelTree = _.io.framed.framework.ModelTree;
    var throwCCE = Kotlin.throwCCE;
    return function (M_0, isM) {
      var tmp$;
      if (!isM(this.source.element))
        return null;
      return Kotlin.isType(tmp$ = this.source, ModelTree) ? tmp$ : throwCCE();
    };
  }));
  ModelRelation.prototype.sourceModel_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.sourceModel_287e2$', function (M_0, isM) {
    var tmp$;
    return isM(tmp$ = this.source.element) ? tmp$ : null;
  });
  ModelRelation.prototype.checkTargetType_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.checkTargetType_287e2$', function (M_0, isM) {
    return isM(this.target.element);
  });
  ModelRelation.prototype.target_30y1fr$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.target_30y1fr$', wrapFunction(function () {
    var ModelTree = _.io.framed.framework.ModelTree;
    var throwCCE = Kotlin.throwCCE;
    return function (M_0, isM) {
      var tmp$;
      if (!isM(this.target.element))
        return null;
      return Kotlin.isType(tmp$ = this.target, ModelTree) ? tmp$ : throwCCE();
    };
  }));
  ModelRelation.prototype.targetModel_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelRelation.targetModel_287e2$', function (M_0, isM) {
    var tmp$;
    return isM(tmp$ = this.target.element) ? tmp$ : null;
  });
  ModelRelation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModelRelation',
    interfaces: []
  };
  function ModelTree(parent, element, type, children) {
    this.parent = parent;
    this.element = element;
    this.type = type;
    this.children = children;
    this.isRoot = this.parent == null;
    this.relations = LinkedHashSet_init();
    this.matchingElementsMap = LinkedHashMap_init();
  }
  Object.defineProperty(ModelTree.prototype, 'matchingElements', {
    get: function () {
      return this.matchingElementsMap.keys;
    }
  });
  ModelTree.prototype.checkType_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelTree.checkType_287e2$', function (M_0, isM) {
    return isM(this.element);
  });
  ModelTree.prototype.model_287e2$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelTree.model_287e2$', function (M_0, isM) {
    var tmp$;
    return isM(tmp$ = this.element) ? tmp$ : null;
  });
  ModelTree.prototype.relations_30y1fr$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelTree.relations_30y1fr$', wrapFunction(function () {
    var List = Kotlin.kotlin.collections.List;
    var throwCCE = Kotlin.throwCCE;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function (M_0, isM) {
      var tmp$;
      var $receiver = this.relations;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (isM(element.relation))
          destination.add_11rb$(element);
      }
      return Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    };
  }));
  function ModelTree$asSequence$ObjectLiteral(this$ModelTree) {
    this.this$ModelTree = this$ModelTree;
  }
  function ModelTree$asSequence$ObjectLiteral$iterator$ObjectLiteral(this$ModelTree) {
    this.queue_0 = mutableListOf([this$ModelTree]);
  }
  ModelTree$asSequence$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return !this.queue_0.isEmpty();
  };
  ModelTree$asSequence$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    if (!this.hasNext())
      throw IllegalStateException_init('End reached!');
    var top = Kotlin.isType(tmp$ = this.queue_0.removeAt_za3lpa$(0), ModelTree) ? tmp$ : throwCCE();
    this.queue_0.addAll_brywnq$(top.children);
    return top;
  };
  ModelTree$asSequence$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  ModelTree$asSequence$ObjectLiteral.prototype.iterator = function () {
    return new ModelTree$asSequence$ObjectLiteral$iterator$ObjectLiteral(this.this$ModelTree);
  };
  ModelTree$asSequence$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Sequence]
  };
  ModelTree.prototype.asSequence_30y1fr$ = function () {
    return new ModelTree$asSequence$ObjectLiteral(this);
  };
  ModelTree.prototype.asSequence = function () {
    return this.asSequence_30y1fr$();
  };
  ModelTree.prototype.parent_30y1fr$ = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.ModelTree.parent_30y1fr$', wrapFunction(function () {
    var ModelTree = _.io.framed.framework.ModelTree;
    var throwCCE = Kotlin.throwCCE;
    return function (M_0, isM) {
      var tmp$, tmp$_0;
      tmp$ = this.parent;
      if (tmp$ == null) {
        return null;
      }
      var p = tmp$;
      if (isM(p.element)) {
        return Kotlin.isType(tmp$_0 = p, ModelTree) ? tmp$_0 : throwCCE();
      }
      return null;
    };
  }));
  ModelTree.prototype.log = function () {
    var current = '<' + toString_0(Kotlin.getKClassFromExpression(this.element).simpleName) + '> ' + this.element;
    var $receiver = this.children;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.log());
    }
    var child = copyToArray(destination);
    var obj = {};
    obj[current] = child;
    return obj;
  };
  ModelTree.prototype.toString = function () {
    var tmp$;
    tmp$ = this.element;
    if (Kotlin.isType(tmp$, BpmnElement))
      return this.element.stringify();
    else if (Kotlin.isType(tmp$, BrosElement))
      return this.element.stringify();
    else
      return this.element.toString();
  };
  ModelTree.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, ModelTree) ? tmp$ : throwCCE();
    if (!equals(this.element, other.element))
      return false;
    return true;
  };
  ModelTree.prototype.hashCode = function () {
    return hashCode(this.element);
  };
  ModelTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModelTree',
    interfaces: []
  };
  var transitiveParent = defineInlineFunction('bpmn-bros-verifier.io.framed.framework.transitiveParent_9172jy$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var ModelTree = _.io.framed.framework.ModelTree;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver) {
      var tmp$;
      var element = $receiver;
      var parents = ArrayList_init();
      loop_label: while (element.parent != null) {
        var $this = element;
        var parent_30y1fr$result;
        parent_30y1fr$break: do {
          var tmp$_0, tmp$_1;
          tmp$_0 = $this.parent;
          if (tmp$_0 == null) {
            parent_30y1fr$result = null;
            break parent_30y1fr$break;
          }
          var p = tmp$_0;
          if (isT(p.element)) {
            parent_30y1fr$result = Kotlin.isType(tmp$_1 = p, ModelTree) ? tmp$_1 : throwCCE();
            break parent_30y1fr$break;
          }
          parent_30y1fr$result = null;
        }
         while (false);
        tmp$ = parent_30y1fr$result;
        if (tmp$ == null) {
          break loop_label;
        }
        var p_0 = tmp$;
        parents.add_11rb$(p_0);
        element = p_0;
      }
      return parents;
    };
  }));
  function Matcher() {
  }
  Object.defineProperty(Matcher.prototype, 'name', {
    get: function () {
      var tmp$;
      return (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : 'UnknownMatcher';
    }
  });
  Matcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Matcher',
    interfaces: []
  };
  function PredefinedMatch(bpmn, bros, type) {
    PredefinedMatch$Companion_getInstance();
    this.bpmn = bpmn;
    this.bros = bros;
    this.type = type;
  }
  function PredefinedMatch$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PredefinedMatch$Type_initFields() {
    PredefinedMatch$Type_initFields = function () {
    };
    PredefinedMatch$Type$MATCH_instance = new PredefinedMatch$Type('MATCH', 0);
    PredefinedMatch$Type$NOMATCH_instance = new PredefinedMatch$Type('NOMATCH', 1);
  }
  var PredefinedMatch$Type$MATCH_instance;
  function PredefinedMatch$Type$MATCH_getInstance() {
    PredefinedMatch$Type_initFields();
    return PredefinedMatch$Type$MATCH_instance;
  }
  var PredefinedMatch$Type$NOMATCH_instance;
  function PredefinedMatch$Type$NOMATCH_getInstance() {
    PredefinedMatch$Type_initFields();
    return PredefinedMatch$Type$NOMATCH_instance;
  }
  PredefinedMatch$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function PredefinedMatch$Type$values() {
    return [PredefinedMatch$Type$MATCH_getInstance(), PredefinedMatch$Type$NOMATCH_getInstance()];
  }
  PredefinedMatch$Type.values = PredefinedMatch$Type$values;
  function PredefinedMatch$Type$valueOf(name) {
    switch (name) {
      case 'MATCH':
        return PredefinedMatch$Type$MATCH_getInstance();
      case 'NOMATCH':
        return PredefinedMatch$Type$NOMATCH_getInstance();
      default:throwISE('No enum constant io.framed.framework.matcher.PredefinedMatch.Type.' + name);
    }
  }
  PredefinedMatch$Type.valueOf_61zpoe$ = PredefinedMatch$Type$valueOf;
  function PredefinedMatch$Companion() {
    PredefinedMatch$Companion_instance = this;
  }
  PredefinedMatch$Companion.prototype.parse_61zpoe$ = function (data) {
    var $receiver = Json.Companion.nonstrict.parse_awif5v$(get_list(this.serializer()), data);
    var accumulator = emptyList();
    if (!$receiver.isEmpty()) {
      var iterator = $receiver.listIterator_za3lpa$($receiver.size);
      loop_label: while (iterator.hasPrevious()) {
        var predefinedMatch = iterator.previous();
        var acc = accumulator;
        var operation$result;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$;
          tmp$ = acc.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (equals(element.bpmn, predefinedMatch.bpmn) && equals(element.bros, predefinedMatch.bros)) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        if (firstOrNull$result == null) {
          operation$result = plus(listOf(predefinedMatch), acc);
        }
         else {
          operation$result = acc;
        }
        accumulator = operation$result;
      }
    }
    return accumulator;
  };
  PredefinedMatch$Companion.prototype.stringify_nh9bv7$ = function (list) {
    var tmp$ = Json.Companion.indented;
    var tmp$_0 = get_list(this.serializer());
    var accumulator = emptyList();
    if (!list.isEmpty()) {
      var iterator = list.listIterator_za3lpa$(list.size);
      loop_label: while (iterator.hasPrevious()) {
        var predefinedMatch = iterator.previous();
        var acc = accumulator;
        var operation$result;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_1;
          tmp$_1 = acc.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            if (equals(element.bpmn, predefinedMatch.bpmn) && equals(element.bros, predefinedMatch.bros)) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        if (firstOrNull$result == null) {
          operation$result = plus(listOf(predefinedMatch), acc);
        }
         else {
          operation$result = acc;
        }
        accumulator = operation$result;
      }
    }
    return tmp$.stringify_tf03ej$(tmp$_0, accumulator);
  };
  PredefinedMatch$Companion.prototype.serializer = function () {
    return PredefinedMatch$$serializer_getInstance();
  };
  PredefinedMatch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PredefinedMatch$Companion_instance = null;
  function PredefinedMatch$Companion_getInstance() {
    if (PredefinedMatch$Companion_instance === null) {
      new PredefinedMatch$Companion();
    }
    return PredefinedMatch$Companion_instance;
  }
  function PredefinedMatch$$serializer() {
    this.descriptor_2yw52v$_0 = new SerialClassDescImpl('io.framed.framework.matcher.PredefinedMatch', this);
    this.descriptor.addElement_ivxn3r$('bpmn', false);
    this.descriptor.addElement_ivxn3r$('bros', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    PredefinedMatch$$serializer_instance = this;
  }
  Object.defineProperty(PredefinedMatch$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2yw52v$_0;
    }
  });
  PredefinedMatch$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, obj.bpmn);
    output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.bros);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new EnumSerializer(getKClass(PredefinedMatch$Type)), obj.type);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PredefinedMatch$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new EnumSerializer(getKClass(PredefinedMatch$Type))) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new EnumSerializer(getKClass(PredefinedMatch$Type)), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return PredefinedMatch_init(bitMask0, local0, local1, local2, null);
  };
  PredefinedMatch$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.LongSerializer, new EnumSerializer(getKClass(PredefinedMatch$Type))];
  };
  PredefinedMatch$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PredefinedMatch$$serializer_instance = null;
  function PredefinedMatch$$serializer_getInstance() {
    if (PredefinedMatch$$serializer_instance === null) {
      new PredefinedMatch$$serializer();
    }
    return PredefinedMatch$$serializer_instance;
  }
  function PredefinedMatch_init(seen1, bpmn, bros, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PredefinedMatch.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('bpmn');
    else
      $this.bpmn = bpmn;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('bros');
    else
      $this.bros = bros;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    return $this;
  }
  PredefinedMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredefinedMatch',
    interfaces: []
  };
  PredefinedMatch.prototype.component1 = function () {
    return this.bpmn;
  };
  PredefinedMatch.prototype.component2 = function () {
    return this.bros;
  };
  PredefinedMatch.prototype.component3 = function () {
    return this.type;
  };
  PredefinedMatch.prototype.copy_4m69ud$ = function (bpmn, bros, type) {
    return new PredefinedMatch(bpmn === void 0 ? this.bpmn : bpmn, bros === void 0 ? this.bros : bros, type === void 0 ? this.type : type);
  };
  PredefinedMatch.prototype.toString = function () {
    return 'PredefinedMatch(bpmn=' + Kotlin.toString(this.bpmn) + (', bros=' + Kotlin.toString(this.bros)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  PredefinedMatch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bpmn) | 0;
    result = result * 31 + Kotlin.hashCode(this.bros) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  PredefinedMatch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bpmn, other.bpmn) && Kotlin.equals(this.bros, other.bros) && Kotlin.equals(this.type, other.type)))));
  };
  function matchStrings(string1, string2) {
    var a = stringToSet(string1);
    var b = stringToSet(string2);
    var longer;
    var shorter;
    if (a.size >= b.size) {
      longer = a;
      shorter = b;
    }
     else {
      longer = b;
      shorter = a;
    }
    if (shorter.isEmpty() || shorter.size / longer.size < WORD_LENGTH_THRESHOLD) {
      return false;
    }
    var $receiver = shorter;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      loop_label: while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$longer = longer;
        var b_0 = element.length - 2 | 0;
        var s = take(element, Math_0.max(3, b_0));
        var any$result;
        any$break: do {
          var tmp$_0;
          if (Kotlin.isType(closure$longer, Collection) && closure$longer.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_0 = closure$longer.iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            var b_1 = element_0.length - 2 | 0;
            var l = take(element_0, Math_0.max(3, b_1));
            if (startsWith(element_0, s) || (startsWith(element, l) && abs_0(l.length - s.length | 0) <= 2)) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        if (!any$result) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  }
  function stringToSet(str) {
    var $receiver = split(SPLIT_CAMEL_CASE_REGEX.replace_x2uqeu$(str, '$1 $2'), [' ']);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString());
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (element.length >= 3)
        destination_0.add_11rb$(element);
    }
    return toSet(destination_0);
  }
  var SPLIT_CAMEL_CASE_REGEX;
  var WORD_LENGTH_THRESHOLD;
  var MIN_WORD_LENGTH;
  var WORD_ENDING_LENGTH;
  function TreeMatcher(bpmnTree, brosTree) {
    TreeMatcher$Companion_getInstance();
    this.bpmnTree_0 = bpmnTree;
    this.brosTree_0 = brosTree;
    this.matcherList_0 = ArrayList_init_0();
  }
  TreeMatcher.prototype.register_psc61j$ = function (matcher) {
    this.matcherList_0.add_11rb$(matcher);
  };
  TreeMatcher.prototype.match_nh9bv7$ = function (predefinedMatches) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var bpmnSequence = toList(this.bpmnTree_0.asSequence_30y1fr$());
    var brosSequence = toList(this.brosTree_0.asSequence_30y1fr$());
    var result = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(bpmnSequence, 10)), 16));
    var tmp$_3;
    tmp$_3 = bpmnSequence.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      result.put_xwzc9p$(element, toSet(element.matchingElements));
    }
    var bpmnState = result;
    var result_0 = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(brosSequence, 10)), 16));
    var tmp$_4;
    tmp$_4 = brosSequence.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      result_0.put_xwzc9p$(element_0, toSet(element_0.matchingElements));
    }
    var brosState = result_0;
    var hasChanged = true;
    var remainingRounds = 100;
    while (hasChanged && remainingRounds > 0) {
      remainingRounds = remainingRounds - 1 | 0;
      hasChanged = false;
      tmp$ = bpmnSequence.iterator();
      while (tmp$.hasNext()) {
        var bpmn = tmp$.next();
        tmp$_0 = brosSequence.iterator();
        while (tmp$_0.hasNext()) {
          var bros = tmp$_0.next();
          tmp$_1 = this.matcherList_0.iterator();
          while (tmp$_1.hasNext()) {
            var matcher = tmp$_1.next();
            if (matcher.filterBpmn_ay07g6$(bpmn) && matcher.filterBros_yl4c2y$(bros) && matcher.match_omkx58$(bpmn, bros)) {
              var $receiver = bpmn.matchingElementsMap;
              var tmp$_5;
              var value = $receiver.get_11rb$(bros);
              if (value == null) {
                var answer = LinkedHashSet_init();
                $receiver.put_xwzc9p$(bros, answer);
                tmp$_5 = answer;
              }
               else {
                tmp$_5 = value;
              }
              var $receiver_0 = tmp$_5;
              var element_1 = matcher.name;
              $receiver_0.add_11rb$(element_1);
              var $receiver_1 = bros.matchingElementsMap;
              var tmp$_6;
              var value_0 = $receiver_1.get_11rb$(bpmn);
              if (value_0 == null) {
                var answer_0 = LinkedHashSet_init();
                $receiver_1.put_xwzc9p$(bpmn, answer_0);
                tmp$_6 = answer_0;
              }
               else {
                tmp$_6 = value_0;
              }
              var $receiver_2 = tmp$_6;
              var element_2 = matcher.name;
              $receiver_2.add_11rb$(element_2);
            }
          }
          tmp$_2 = predefinedMatches.iterator();
          while (tmp$_2.hasNext()) {
            var match = tmp$_2.next();
            if (equals(bpmn.element.id, match.bpmn) && equals(bros.element.id, match.bros)) {
              switch (match.type.name) {
                case 'MATCH':
                  var $receiver_3 = bpmn.matchingElementsMap;
                  var tmp$_7;
                  var value_1 = $receiver_3.get_11rb$(bros);
                  if (value_1 == null) {
                    var answer_1 = LinkedHashSet_init();
                    $receiver_3.put_xwzc9p$(bros, answer_1);
                    tmp$_7 = answer_1;
                  }
                   else {
                    tmp$_7 = value_1;
                  }

                  var $receiver_4 = tmp$_7;
                  var element_3 = 'PredefinedMatcher';
                  $receiver_4.add_11rb$(element_3);
                  var $receiver_5 = bros.matchingElementsMap;
                  var tmp$_8;
                  var value_2 = $receiver_5.get_11rb$(bpmn);
                  if (value_2 == null) {
                    var answer_2 = LinkedHashSet_init();
                    $receiver_5.put_xwzc9p$(bpmn, answer_2);
                    tmp$_8 = answer_2;
                  }
                   else {
                    tmp$_8 = value_2;
                  }

                  var $receiver_6 = tmp$_8;
                  var element_4 = 'PredefinedMatcher';
                  $receiver_6.add_11rb$(element_4);
                  break;
                case 'NOMATCH':
                  bpmn.matchingElementsMap.remove_11rb$(bros);
                  bros.matchingElementsMap.remove_11rb$(bpmn);
                  break;
              }
            }
          }
        }
      }
      var result_1 = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(bpmnSequence, 10)), 16));
      var tmp$_9;
      tmp$_9 = bpmnSequence.iterator();
      while (tmp$_9.hasNext()) {
        var element_5 = tmp$_9.next();
        result_1.put_xwzc9p$(element_5, toSet(element_5.matchingElements));
      }
      var newBpmnState = result_1;
      var result_2 = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(brosSequence, 10)), 16));
      var tmp$_10;
      tmp$_10 = brosSequence.iterator();
      while (tmp$_10.hasNext()) {
        var element_6 = tmp$_10.next();
        result_2.put_xwzc9p$(element_6, toSet(element_6.matchingElements));
      }
      var newBrosState = result_2;
      if (!equals(newBpmnState, bpmnState)) {
        hasChanged = true;
      }
      if (!equals(newBrosState, brosState)) {
        hasChanged = true;
      }
      bpmnState = newBpmnState;
      brosState = newBrosState;
    }
    if (remainingRounds <= 0)
      return null;
    return 100 - remainingRounds | 0;
  };
  function TreeMatcher$Companion() {
    TreeMatcher$Companion_instance = this;
    this.MAX_ROUNDS = 100;
  }
  TreeMatcher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TreeMatcher$Companion_instance = null;
  function TreeMatcher$Companion_getInstance() {
    if (TreeMatcher$Companion_instance === null) {
      new TreeMatcher$Companion();
    }
    return TreeMatcher$Companion_instance;
  }
  TreeMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeMatcher',
    interfaces: []
  };
  function BpmnVerifier() {
  }
  BpmnVerifier.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.filter.isEmpty() || this.filter.contains_11rb$(bpmn.type);
  };
  BpmnVerifier.prototype.filterBros_yl4c2y$ = function (bros) {
    return false;
  };
  BpmnVerifier.prototype.verifyBros_yl4c2y$ = function (element) {
    throw UnsupportedOperationException_init('Cannot verify bros elements in ' + this.name + ':BpmnVerifier!');
  };
  BpmnVerifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BpmnVerifier',
    interfaces: [Verifier]
  };
  function BrosVerifier() {
  }
  BrosVerifier.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return false;
  };
  BrosVerifier.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.filter.isEmpty() || this.filter.contains_11rb$(bros.type);
  };
  BrosVerifier.prototype.verifyBpmn_ay07g6$ = function (element) {
    throw UnsupportedOperationException_init('Cannot verify bpmn elements in ' + this.name + ':BrosVerifier!');
  };
  BrosVerifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BrosVerifier',
    interfaces: [Verifier]
  };
  function Result(type, bpmn, bros, message, verifier) {
    Result$Companion_getInstance();
    this.type = type;
    this.bpmn = bpmn;
    this.bros = bros;
    this.message = message;
    this.verifier = verifier;
  }
  function Result$Companion() {
    Result$Companion_instance = this;
  }
  Result$Companion.prototype.match_i63koc$ = function (message, bpmn, bros) {
    if (bpmn === void 0)
      bpmn = null;
    if (bros === void 0)
      bros = null;
    var tmp$, tmp$_0;
    return new Result(Result$Type$POSITIVE_getInstance(), Kotlin.isType(tmp$ = bpmn, ModelTree) ? tmp$ : null, Kotlin.isType(tmp$_0 = bros, ModelTree) ? tmp$_0 : null, message, null);
  };
  Result$Companion.prototype.error_i63koc$ = function (message, bpmn, bros) {
    if (bpmn === void 0)
      bpmn = null;
    if (bros === void 0)
      bros = null;
    var tmp$, tmp$_0;
    return new Result(Result$Type$NEGATIVE_getInstance(), Kotlin.isType(tmp$ = bpmn, ModelTree) ? tmp$ : null, Kotlin.isType(tmp$_0 = bros, ModelTree) ? tmp$_0 : null, message, null);
  };
  Result$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Result$Companion_instance = null;
  function Result$Companion_getInstance() {
    if (Result$Companion_instance === null) {
      new Result$Companion();
    }
    return Result$Companion_instance;
  }
  function Result$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Result$Type_initFields() {
    Result$Type_initFields = function () {
    };
    Result$Type$POSITIVE_instance = new Result$Type('POSITIVE', 0);
    Result$Type$NEGATIVE_instance = new Result$Type('NEGATIVE', 1);
  }
  var Result$Type$POSITIVE_instance;
  function Result$Type$POSITIVE_getInstance() {
    Result$Type_initFields();
    return Result$Type$POSITIVE_instance;
  }
  var Result$Type$NEGATIVE_instance;
  function Result$Type$NEGATIVE_getInstance() {
    Result$Type_initFields();
    return Result$Type$NEGATIVE_instance;
  }
  Result$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Result$Type$values() {
    return [Result$Type$POSITIVE_getInstance(), Result$Type$NEGATIVE_getInstance()];
  }
  Result$Type.values = Result$Type$values;
  function Result$Type$valueOf(name) {
    switch (name) {
      case 'POSITIVE':
        return Result$Type$POSITIVE_getInstance();
      case 'NEGATIVE':
        return Result$Type$NEGATIVE_getInstance();
      default:throwISE('No enum constant io.framed.framework.verifier.Result.Type.' + name);
    }
  }
  Result$Type.valueOf_61zpoe$ = Result$Type$valueOf;
  Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  Result.prototype.component1 = function () {
    return this.type;
  };
  Result.prototype.component2 = function () {
    return this.bpmn;
  };
  Result.prototype.component3 = function () {
    return this.bros;
  };
  Result.prototype.component4 = function () {
    return this.message;
  };
  Result.prototype.component5 = function () {
    return this.verifier;
  };
  Result.prototype.copy_d5qt8a$ = function (type, bpmn, bros, message, verifier) {
    return new Result(type === void 0 ? this.type : type, bpmn === void 0 ? this.bpmn : bpmn, bros === void 0 ? this.bros : bros, message === void 0 ? this.message : message, verifier === void 0 ? this.verifier : verifier);
  };
  Result.prototype.toString = function () {
    return 'Result(type=' + Kotlin.toString(this.type) + (', bpmn=' + Kotlin.toString(this.bpmn)) + (', bros=' + Kotlin.toString(this.bros)) + (', message=' + Kotlin.toString(this.message)) + (', verifier=' + Kotlin.toString(this.verifier)) + ')';
  };
  Result.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.bpmn) | 0;
    result = result * 31 + Kotlin.hashCode(this.bros) | 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    result = result * 31 + Kotlin.hashCode(this.verifier) | 0;
    return result;
  };
  Result.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.bpmn, other.bpmn) && Kotlin.equals(this.bros, other.bros) && Kotlin.equals(this.message, other.message) && Kotlin.equals(this.verifier, other.verifier)))));
  };
  function TreeVerifier(bpmnTree, brosTree) {
    this.bpmnTree_0 = bpmnTree;
    this.brosTree_0 = brosTree;
    this.verifierList_0 = ArrayList_init_0();
  }
  TreeVerifier.prototype.register_5z8r3$ = function (verifier) {
    this.verifierList_0.add_11rb$(verifier);
  };
  TreeVerifier.prototype.verify = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bpmnSequence = toList(this.bpmnTree_0.asSequence_30y1fr$());
    var brosSequence = toList(this.brosTree_0.asSequence_30y1fr$());
    var results = ArrayList_init_0();
    tmp$ = this.verifierList_0.iterator();
    while (tmp$.hasNext()) {
      var verifier = tmp$.next();
      if (!Kotlin.isType(verifier, BrosVerifier)) {
        tmp$_0 = bpmnSequence.iterator();
        while (tmp$_0.hasNext()) {
          var bpmn = tmp$_0.next();
          if (verifier.filterBpmn_ay07g6$(bpmn)) {
            tmp$_1 = verifier.verifyBpmn_ay07g6$(bpmn);
            if (tmp$_1 == null) {
              continue;
            }
            var result = tmp$_1;
            var element = result.copy_d5qt8a$(void 0, bpmn, void 0, void 0, verifier);
            results.add_11rb$(element);
          }
        }
      }
      if (!Kotlin.isType(verifier, BpmnVerifier)) {
        tmp$_2 = brosSequence.iterator();
        while (tmp$_2.hasNext()) {
          var bros = tmp$_2.next();
          if (verifier.filterBros_yl4c2y$(bros)) {
            tmp$_3 = verifier.verifyBros_yl4c2y$(bros);
            if (tmp$_3 == null) {
              continue;
            }
            var result_0 = tmp$_3;
            var element_0 = result_0.copy_d5qt8a$(void 0, void 0, bros, void 0, verifier);
            results.add_11rb$(element_0);
          }
        }
      }
    }
    return results;
  };
  TreeVerifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TreeVerifier',
    interfaces: []
  };
  function Verifier() {
  }
  Object.defineProperty(Verifier.prototype, 'name', {
    get: function () {
      var tmp$;
      return (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : 'UnknownVerifier';
    }
  });
  Verifier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Verifier',
    interfaces: []
  };
  function main$lambda(it) {
    init_0();
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function init$check$lambda(closure$bpmnContent, closure$application, closure$brosContent, closure$predefinedMatchesContent) {
    return function () {
      closure$application.bpmnFile.content = closure$bpmnContent.v;
      closure$application.brosFile.content = closure$brosContent.v;
      closure$application.predefinedFile.content = closure$predefinedMatchesContent.v;
      return Unit;
    };
  }
  function init$check(closure$bros, closure$bpmn, closure$predefinedMatches, closure$application, closure$bpmnContent, closure$brosContent, closure$predefinedMatchesContent) {
    return function () {
      if (closure$bros.v != null && closure$bpmn.v != null && closure$predefinedMatches.v != null) {
        closure$application.enableDemo_o14v8n$(init$check$lambda(closure$bpmnContent, closure$application, closure$brosContent, closure$predefinedMatchesContent));
      }
    };
  }
  function init$lambda_1(closure$bros, closure$brosContent, closure$check) {
    return function (it) {
      closure$bros.v = BrosParser_getInstance().parse_61zpoe$(it);
      closure$brosContent.v = it;
      closure$check();
      return Unit;
    };
  }
  function init$lambda_2(closure$bpmn, closure$bpmnContent, closure$check) {
    return function (it) {
      closure$bpmn.v = BpmnParser_getInstance().parse_61zpoe$(it);
      closure$bpmnContent.v = it;
      closure$check();
      return Unit;
    };
  }
  function init$lambda_3(closure$predefinedMatches, closure$predefinedMatchesContent, closure$check) {
    return function (it) {
      closure$predefinedMatches.v = PredefinedMatch$Companion_getInstance().parse_61zpoe$(it);
      closure$predefinedMatchesContent.v = it;
      closure$check();
      return Unit;
    };
  }
  function init_0() {
    var application = new Application();
    var $receiver = ensureNotNull(document.body);
    clear($receiver);
    $receiver.appendChild(application.html);
    var bros = {v: null};
    var brosContent = {v: ''};
    var bpmn = {v: null};
    var bpmnContent = {v: ''};
    var predefinedMatches = {v: null};
    var predefinedMatchesContent = {v: ''};
    var check = init$check(bros, bpmn, predefinedMatches, application, bpmnContent, brosContent, predefinedMatchesContent);
    get_1('restaurant.json', void 0, void 0, init$lambda_1(bros, brosContent, check));
    get_1('restaurant.bpmn', void 0, void 0, init$lambda_2(bpmn, bpmnContent, check));
    get_1('match.json', void 0, void 0, init$lambda_3(predefinedMatches, predefinedMatchesContent, check));
  }
  function BpmnModel() {
    BpmnModel$Companion_getInstance();
    this.id_n3u24g$_0 = '';
    this.name_rdknww$_0 = '';
    this.parent_dolb3j$_0 = null;
    this.allChildren_pmz4x3$_0 = lazy(BpmnModel$allChildren$lambda(this));
    this.participants_8be2vx$ = ArrayList_init_0();
    this.content = ArrayList_init_0();
  }
  Object.defineProperty(BpmnModel.prototype, 'id', {
    get: function () {
      return this.id_n3u24g$_0;
    }
  });
  Object.defineProperty(BpmnModel.prototype, 'name', {
    get: function () {
      return this.name_rdknww$_0;
    }
  });
  Object.defineProperty(BpmnModel.prototype, 'parent', {
    get: function () {
      return this.parent_dolb3j$_0;
    },
    set: function (parent) {
      this.parent_dolb3j$_0 = parent;
    }
  });
  Object.defineProperty(BpmnModel.prototype, 'allChildren', {
    get: function () {
      return this.allChildren_pmz4x3$_0.value;
    }
  });
  BpmnModel.prototype.find_9i7s9p$ = defineInlineFunction('bpmn-bros-verifier.io.framed.model.bpmn.BpmnModel.find_9i7s9p$', function (T_0, isT, id) {
    var tmp$;
    return isT(tmp$ = this.allChildren.get_11rb$(id)) ? tmp$ : null;
  });
  BpmnModel.prototype.remove_h0xiwz$ = function (child) {
    this.content.remove_11rb$(child);
  };
  function BpmnModel$Companion() {
    BpmnModel$Companion_instance = this;
  }
  BpmnModel$Companion.prototype.parse_z5i007$ = function (xml) {
    var tmp$, tmp$_0, tmp$_1;
    var model = new BpmnModel();
    tmp$ = xml.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      if (!startsWith(child.tagName, 'bpmn:'))
        continue;
      if (contains(child.tagName, 'process')) {
        var $receiver = model.content;
        var element = BpmnProcess$Companion_getInstance().parse_rd97wj$(child, model);
        $receiver.add_11rb$(element);
      }
       else if (contains(child.tagName, 'collaboration')) {
        tmp$_0 = child.children.iterator();
        while (tmp$_0.hasNext()) {
          var collaboration = tmp$_0.next();
          if (contains(collaboration.tagName, 'participant', true)) {
            var $receiver_0 = model.participants_8be2vx$;
            var element_0 = new BpmnModel$Participant(collaboration.get_61zpoe$('processRef'), collaboration.get_61zpoe$('name'));
            $receiver_0.add_11rb$(element_0);
          }
           else if (contains(collaboration.tagName, 'messageFlow', true)) {
            var $receiver_1 = model.content;
            var element_1 = BpmnMessageFlow$Companion_getInstance().parse_z5i007$(collaboration);
            $receiver_1.add_11rb$(element_1);
          }
        }
      }
    }
    tmp$_1 = model.content.iterator();
    while (tmp$_1.hasNext()) {
      var element_2 = tmp$_1.next();
      element_2.build_fh2yzz$(model);
    }
    return model;
  };
  BpmnModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnModel$Companion_instance = null;
  function BpmnModel$Companion_getInstance() {
    if (BpmnModel$Companion_instance === null) {
      new BpmnModel$Companion();
    }
    return BpmnModel$Companion_instance;
  }
  function BpmnModel$Participant(id, name) {
    this.id = id;
    this.name = name;
  }
  BpmnModel$Participant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Participant',
    interfaces: []
  };
  BpmnModel$Participant.prototype.component1 = function () {
    return this.id;
  };
  BpmnModel$Participant.prototype.component2 = function () {
    return this.name;
  };
  BpmnModel$Participant.prototype.copy_puj7f4$ = function (id, name) {
    return new BpmnModel$Participant(id === void 0 ? this.id : id, name === void 0 ? this.name : name);
  };
  BpmnModel$Participant.prototype.toString = function () {
    return 'Participant(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  BpmnModel$Participant.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  BpmnModel$Participant.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name)))));
  };
  function BpmnModel$allChildren$lambda(this$BpmnModel) {
    return function () {
      var $receiver = this$BpmnModel.content;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element.getAllChildren();
        addAll(destination, list);
      }
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination, 10)), 16);
      var destination_0 = LinkedHashMap_init_0(capacity);
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        destination_0.put_xwzc9p$(element_0.id, element_0);
      }
      return destination_0;
    };
  }
  BpmnModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnModel',
    interfaces: [BpmnElement]
  };
  function BpmnElement() {
  }
  BpmnElement.prototype.build_fh2yzz$ = function (model) {
  };
  BpmnElement.prototype.remove_h0xiwz$ = function (child) {
  };
  BpmnElement.prototype.getAllChildren = function () {
    return listOf(this);
  };
  BpmnElement.prototype.stringify = function () {
    var tmp$;
    var tmp$_0 = (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : 'UnknownElement';
    var tmp$_1;
    if (!isBlank(this.name)) {
      var $receiver = this.name;
      var tmp$_2;
      tmp$_1 = '(' + trim(Kotlin.isCharSequence(tmp$_2 = $receiver) ? tmp$_2 : throwCCE()).toString() + ')';
    }
     else
      tmp$_1 = '';
    return tmp$_0 + tmp$_1;
  };
  BpmnElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BpmnElement',
    interfaces: []
  };
  function BpmnEvent() {
    BpmnEvent$Companion_getInstance();
  }
  function BpmnEvent$Companion() {
    BpmnEvent$Companion_instance = this;
  }
  BpmnEvent$Companion.prototype.parse_7r8tha$ = function (xml, parent) {
    switch (xml.tagName) {
      case 'bpmn:startEvent':
        return new BpmnStartEvent(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), parent);
      case 'bpmn:endEvent':
        var tmp$ = xml.get_61zpoe$('id');
        var tmp$_0 = xml.get_61zpoe$('name');
        var $receiver = xml.children;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_1;
          tmp$_1 = $receiver.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            if (equals(element.tagName, 'bpmn:terminateEventDefinition')) {
              firstOrNull$result = element;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        return new BpmnEndEvent(tmp$, tmp$_0, firstOrNull$result != null, parent);
      default:return new BpmnIntermediateEvent(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), parent);
    }
  };
  BpmnEvent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnEvent$Companion_instance = null;
  function BpmnEvent$Companion_getInstance() {
    if (BpmnEvent$Companion_instance === null) {
      new BpmnEvent$Companion();
    }
    return BpmnEvent$Companion_instance;
  }
  BpmnEvent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BpmnEvent',
    interfaces: [BpmnFlowObject]
  };
  function BpmnStartEvent(id, name, parent) {
    this.id_y735c8$_0 = id;
    this.name_o1dp0o$_0 = name;
    this.parent_dmlnyx$_0 = parent;
  }
  Object.defineProperty(BpmnStartEvent.prototype, 'id', {
    get: function () {
      return this.id_y735c8$_0;
    }
  });
  Object.defineProperty(BpmnStartEvent.prototype, 'name', {
    get: function () {
      return this.name_o1dp0o$_0;
    }
  });
  Object.defineProperty(BpmnStartEvent.prototype, 'parent', {
    get: function () {
      return this.parent_dmlnyx$_0;
    },
    set: function (parent) {
      this.parent_dmlnyx$_0 = parent;
    }
  });
  BpmnStartEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnStartEvent',
    interfaces: [BpmnEvent]
  };
  function BpmnEndEvent(id, name, terminationEvent, parent) {
    this.id_iq2c6n$_0 = id;
    this.name_n1njr3$_0 = name;
    this.terminationEvent = terminationEvent;
    this.parent_ey1ugw$_0 = parent;
  }
  Object.defineProperty(BpmnEndEvent.prototype, 'id', {
    get: function () {
      return this.id_iq2c6n$_0;
    }
  });
  Object.defineProperty(BpmnEndEvent.prototype, 'name', {
    get: function () {
      return this.name_n1njr3$_0;
    }
  });
  Object.defineProperty(BpmnEndEvent.prototype, 'parent', {
    get: function () {
      return this.parent_ey1ugw$_0;
    },
    set: function (parent) {
      this.parent_ey1ugw$_0 = parent;
    }
  });
  BpmnEndEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnEndEvent',
    interfaces: [BpmnEvent]
  };
  function BpmnIntermediateEvent(id, name, parent) {
    this.id_ax9ab7$_0 = id;
    this.name_ep1p8d$_0 = name;
    this.parent_t2j0ak$_0 = parent;
  }
  Object.defineProperty(BpmnIntermediateEvent.prototype, 'id', {
    get: function () {
      return this.id_ax9ab7$_0;
    }
  });
  Object.defineProperty(BpmnIntermediateEvent.prototype, 'name', {
    get: function () {
      return this.name_ep1p8d$_0;
    }
  });
  Object.defineProperty(BpmnIntermediateEvent.prototype, 'parent', {
    get: function () {
      return this.parent_t2j0ak$_0;
    },
    set: function (parent) {
      this.parent_t2j0ak$_0 = parent;
    }
  });
  BpmnIntermediateEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnIntermediateEvent',
    interfaces: [BpmnEvent]
  };
  function BpmnFlowObject() {
    BpmnFlowObject$Companion_getInstance();
  }
  function BpmnFlowObject$Companion() {
    BpmnFlowObject$Companion_instance = this;
  }
  BpmnFlowObject$Companion.prototype.parse_7r8tha$ = function (xml, parent) {
    if (contains(xml.tagName, 'event', true))
      return BpmnEvent$Companion_getInstance().parse_7r8tha$(xml, parent);
    else if (contains(xml.tagName, 'gateway', true))
      return BpmnGateway$Companion_getInstance().parse_7r8tha$(xml, parent);
    else if (contains(xml.tagName, 'task', true))
      return BpmnTask$Companion_getInstance().parse_rd97wj$(xml, parent);
    else if (contains(xml.tagName, 'subProcess', true))
      return BpmnTask$Companion_getInstance().parse_rd97wj$(xml, parent);
    else
      throw IllegalArgumentException_init(xml.tagName);
  };
  BpmnFlowObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnFlowObject$Companion_instance = null;
  function BpmnFlowObject$Companion_getInstance() {
    if (BpmnFlowObject$Companion_instance === null) {
      new BpmnFlowObject$Companion();
    }
    return BpmnFlowObject$Companion_instance;
  }
  BpmnFlowObject.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BpmnFlowObject',
    interfaces: [BpmnElement]
  };
  function BpmnGateway(id, parent) {
    BpmnGateway$Companion_getInstance();
    this.id_8paffu$_0 = id;
    this.parent_vllkpz$_0 = parent;
    this.name_immhpi$_0 = '';
  }
  Object.defineProperty(BpmnGateway.prototype, 'id', {
    get: function () {
      return this.id_8paffu$_0;
    }
  });
  Object.defineProperty(BpmnGateway.prototype, 'parent', {
    get: function () {
      return this.parent_vllkpz$_0;
    },
    set: function (parent) {
      this.parent_vllkpz$_0 = parent;
    }
  });
  Object.defineProperty(BpmnGateway.prototype, 'name', {
    get: function () {
      return this.name_immhpi$_0;
    }
  });
  function BpmnGateway$Companion() {
    BpmnGateway$Companion_instance = this;
  }
  BpmnGateway$Companion.prototype.parse_7r8tha$ = function (xml, parent) {
    return new BpmnGateway(xml.get_61zpoe$('id'), parent);
  };
  BpmnGateway$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnGateway$Companion_instance = null;
  function BpmnGateway$Companion_getInstance() {
    if (BpmnGateway$Companion_instance === null) {
      new BpmnGateway$Companion();
    }
    return BpmnGateway$Companion_instance;
  }
  BpmnGateway.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnGateway',
    interfaces: [BpmnFlowObject]
  };
  function BpmnLane(id, name, parent) {
    BpmnLane$Companion_getInstance();
    this.id_dtyavw$_0 = id;
    this.name_9vci5o$_0 = name;
    this.parent_2wpymr$_0 = parent;
    this.contentIds_0 = ArrayList_init_0();
    this.content = ArrayList_init_0();
  }
  Object.defineProperty(BpmnLane.prototype, 'id', {
    get: function () {
      return this.id_dtyavw$_0;
    }
  });
  Object.defineProperty(BpmnLane.prototype, 'name', {
    get: function () {
      return this.name_9vci5o$_0;
    }
  });
  Object.defineProperty(BpmnLane.prototype, 'parent', {
    get: function () {
      return this.parent_2wpymr$_0;
    },
    set: function (parent) {
      this.parent_2wpymr$_0 = parent;
    }
  });
  BpmnLane.prototype.build_fh2yzz$ = function (model) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.contentIds_0.iterator();
    while (tmp$.hasNext()) {
      var id = tmp$.next();
      var tmp$_2;
      tmp$_0 = Kotlin.isType(tmp$_2 = model.allChildren.get_11rb$(id), BpmnFlowObject) ? tmp$_2 : null;
      if (tmp$_0 == null) {
        continue;
      }
      var element = tmp$_0;
      this.content.add_11rb$(element);
      (tmp$_1 = element.parent) != null ? (tmp$_1.remove_h0xiwz$(element), Unit) : null;
      element.parent = this;
    }
  };
  BpmnLane.prototype.getAllChildren = function () {
    var tmp$ = BpmnElement.prototype.getAllChildren.call(this);
    var $receiver = this.content;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.getAllChildren();
      addAll(destination, list);
    }
    return plus(tmp$, destination);
  };
  BpmnLane.prototype.remove_h0xiwz$ = function (child) {
    var $receiver = this.content;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableCollection) ? tmp$ : throwCCE()).remove_11rb$(child);
  };
  function BpmnLane$Companion() {
    BpmnLane$Companion_instance = this;
  }
  BpmnLane$Companion.prototype.parse_7r8tha$ = function (xml, parent) {
    var tmp$;
    var bpmn = new BpmnLane(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), parent);
    tmp$ = xml.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      var $receiver = bpmn.contentIds_0;
      var element = child.textContent;
      $receiver.add_11rb$(element);
    }
    return bpmn;
  };
  BpmnLane$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnLane$Companion_instance = null;
  function BpmnLane$Companion_getInstance() {
    if (BpmnLane$Companion_instance === null) {
      new BpmnLane$Companion();
    }
    return BpmnLane$Companion_instance;
  }
  BpmnLane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnLane',
    interfaces: [BpmnElement]
  };
  function BpmnLaneSet(id, parent) {
    BpmnLaneSet$Companion_getInstance();
    this.id_7az508$_0 = id;
    this.parent_sxaj47$_0 = parent;
    this.name_c4uywo$_0 = '';
    this.content = ArrayList_init_0();
  }
  Object.defineProperty(BpmnLaneSet.prototype, 'id', {
    get: function () {
      return this.id_7az508$_0;
    }
  });
  Object.defineProperty(BpmnLaneSet.prototype, 'parent', {
    get: function () {
      return this.parent_sxaj47$_0;
    },
    set: function (parent) {
      this.parent_sxaj47$_0 = parent;
    }
  });
  Object.defineProperty(BpmnLaneSet.prototype, 'name', {
    get: function () {
      return this.name_c4uywo$_0;
    }
  });
  BpmnLaneSet.prototype.getAllChildren = function () {
    var tmp$ = BpmnElement.prototype.getAllChildren.call(this);
    var $receiver = this.content;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.getAllChildren();
      addAll(destination, list);
    }
    return plus(tmp$, destination);
  };
  BpmnLaneSet.prototype.build_fh2yzz$ = function (model) {
    var tmp$;
    tmp$ = this.content.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.build_fh2yzz$(model);
    }
  };
  BpmnLaneSet.prototype.remove_h0xiwz$ = function (child) {
    var $receiver = this.content;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableCollection) ? tmp$ : throwCCE()).remove_11rb$(child);
  };
  function BpmnLaneSet$Companion() {
    BpmnLaneSet$Companion_instance = this;
  }
  BpmnLaneSet$Companion.prototype.parse_rd97wj$ = function (xml, parent) {
    var laneSet = new BpmnLaneSet(xml.get_61zpoe$('id'), parent);
    var tmp$ = laneSet.content;
    var $receiver = xml.children;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(BpmnLane$Companion_getInstance().parse_7r8tha$(item, laneSet));
    }
    tmp$.addAll_brywnq$(destination);
    return laneSet;
  };
  BpmnLaneSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnLaneSet$Companion_instance = null;
  function BpmnLaneSet$Companion_getInstance() {
    if (BpmnLaneSet$Companion_instance === null) {
      new BpmnLaneSet$Companion();
    }
    return BpmnLaneSet$Companion_instance;
  }
  BpmnLaneSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnLaneSet',
    interfaces: [BpmnElement]
  };
  function BpmnMessageFlow(id, name, sourceRef, targetRef) {
    BpmnMessageFlow$Companion_getInstance();
    this.id_5jrl7d$_0 = id;
    this.name_59ar2h$_0 = name;
    this.sourceRef = sourceRef;
    this.targetRef = targetRef;
    this.parent_jek01k$_0 = null;
    this.source_wv1nd$_0 = this.source_wv1nd$_0;
    this.target_73269d$_0 = this.target_73269d$_0;
  }
  Object.defineProperty(BpmnMessageFlow.prototype, 'id', {
    get: function () {
      return this.id_5jrl7d$_0;
    }
  });
  Object.defineProperty(BpmnMessageFlow.prototype, 'name', {
    get: function () {
      return this.name_59ar2h$_0;
    }
  });
  Object.defineProperty(BpmnMessageFlow.prototype, 'parent', {
    get: function () {
      return this.parent_jek01k$_0;
    },
    set: function (parent) {
      this.parent_jek01k$_0 = parent;
    }
  });
  Object.defineProperty(BpmnMessageFlow.prototype, 'source', {
    get: function () {
      if (this.source_wv1nd$_0 == null)
        return throwUPAE('source');
      return this.source_wv1nd$_0;
    },
    set: function (source) {
      this.source_wv1nd$_0 = source;
    }
  });
  Object.defineProperty(BpmnMessageFlow.prototype, 'target', {
    get: function () {
      if (this.target_73269d$_0 == null)
        return throwUPAE('target');
      return this.target_73269d$_0;
    },
    set: function (target) {
      this.target_73269d$_0 = target;
    }
  });
  BpmnMessageFlow.prototype.build_fh2yzz$ = function (model) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var id = this.sourceRef;
    var tmp$_2;
    if ((tmp$ = Kotlin.isType(tmp$_2 = model.allChildren.get_11rb$(id), BpmnElement) ? tmp$_2 : null) != null) {
      this.source = tmp$;
      tmp$_1 = Unit;
    }
     else
      tmp$_1 = null;
    if (tmp$_1 == null)
      throw IllegalArgumentException_init('Cannot find sourceRef: ' + this.sourceRef);
    var tmp$_3;
    var id_0 = this.targetRef;
    var tmp$_4;
    if ((tmp$_0 = Kotlin.isType(tmp$_4 = model.allChildren.get_11rb$(id_0), BpmnElement) ? tmp$_4 : null) != null) {
      this.target = tmp$_0;
      tmp$_3 = Unit;
    }
     else
      tmp$_3 = null;
    if (tmp$_3 == null)
      throw IllegalArgumentException_init('Cannot find targetRef: ' + this.targetRef);
  };
  function BpmnMessageFlow$Companion() {
    BpmnMessageFlow$Companion_instance = this;
  }
  BpmnMessageFlow$Companion.prototype.parse_z5i007$ = function (xml) {
    return new BpmnMessageFlow(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), xml.get_61zpoe$('sourceRef'), xml.get_61zpoe$('targetRef'));
  };
  BpmnMessageFlow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnMessageFlow$Companion_instance = null;
  function BpmnMessageFlow$Companion_getInstance() {
    if (BpmnMessageFlow$Companion_instance === null) {
      new BpmnMessageFlow$Companion();
    }
    return BpmnMessageFlow$Companion_instance;
  }
  BpmnMessageFlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnMessageFlow',
    interfaces: [BpmnElement]
  };
  function BpmnProcess(id, parent) {
    BpmnProcess$Companion_getInstance();
    this.id_1ugvep$_0 = id;
    this.parent_8aajbm$_0 = parent;
    this.name_1coru7$_0 = '';
    this.content = ArrayList_init_0();
  }
  Object.defineProperty(BpmnProcess.prototype, 'id', {
    get: function () {
      return this.id_1ugvep$_0;
    }
  });
  Object.defineProperty(BpmnProcess.prototype, 'parent', {
    get: function () {
      return this.parent_8aajbm$_0;
    },
    set: function (parent) {
      this.parent_8aajbm$_0 = parent;
    }
  });
  Object.defineProperty(BpmnProcess.prototype, 'name', {
    get: function () {
      return this.name_1coru7$_0;
    },
    set: function (name) {
      this.name_1coru7$_0 = name;
    }
  });
  BpmnProcess.prototype.build_fh2yzz$ = function (model) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = model.participants_8be2vx$;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (equals(element.id, this.id)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    this.name = (tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    tmp$_1 = this.content.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      element_0.build_fh2yzz$(model);
    }
  };
  BpmnProcess.prototype.getAllChildren = function () {
    var tmp$ = BpmnElement.prototype.getAllChildren.call(this);
    var $receiver = this.content;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.getAllChildren();
      addAll(destination, list);
    }
    return plus(tmp$, destination);
  };
  BpmnProcess.prototype.remove_h0xiwz$ = function (child) {
    this.content.remove_11rb$(child);
  };
  function BpmnProcess$Companion() {
    BpmnProcess$Companion_instance = this;
  }
  BpmnProcess$Companion.prototype.parse_rd97wj$ = function (xml, parent) {
    var process = new BpmnProcess(xml.get_61zpoe$('id'), parent);
    var tmp$ = process.content;
    var $receiver = xml.children;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var transform$result;
      if (contains(item.tagName, 'sequenceFlow', true)) {
        transform$result = BpmnSequenceFlow$Companion_getInstance().parse_z5i007$(item);
      }
       else if (contains(item.tagName, 'messageFlow', true)) {
        transform$result = BpmnMessageFlow$Companion_getInstance().parse_z5i007$(item);
      }
       else if (contains(item.tagName, 'laneSet')) {
        transform$result = BpmnLaneSet$Companion_getInstance().parse_rd97wj$(item, process);
      }
       else {
        transform$result = BpmnFlowObject$Companion_getInstance().parse_7r8tha$(item, process);
      }
      tmp$_1.call(destination, transform$result);
    }
    tmp$.addAll_brywnq$(destination);
    return process;
  };
  BpmnProcess$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnProcess$Companion_instance = null;
  function BpmnProcess$Companion_getInstance() {
    if (BpmnProcess$Companion_instance === null) {
      new BpmnProcess$Companion();
    }
    return BpmnProcess$Companion_instance;
  }
  BpmnProcess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnProcess',
    interfaces: [BpmnElement]
  };
  function BpmnSequenceFlow(id, name, sourceRef, targetRef) {
    BpmnSequenceFlow$Companion_getInstance();
    if (sourceRef === void 0)
      sourceRef = '';
    if (targetRef === void 0)
      targetRef = '';
    this.id_8rtarj$_0 = id;
    this.name_m4jzxt$_0 = name;
    this.sourceRef = sourceRef;
    this.targetRef = targetRef;
    this.parent_42epzk$_0 = null;
    this.source_g90bpd$_0 = this.source_g90bpd$_0;
    this.target_8933sn$_0 = this.target_8933sn$_0;
  }
  Object.defineProperty(BpmnSequenceFlow.prototype, 'id', {
    get: function () {
      return this.id_8rtarj$_0;
    }
  });
  Object.defineProperty(BpmnSequenceFlow.prototype, 'name', {
    get: function () {
      return this.name_m4jzxt$_0;
    }
  });
  Object.defineProperty(BpmnSequenceFlow.prototype, 'parent', {
    get: function () {
      return this.parent_42epzk$_0;
    },
    set: function (parent) {
      this.parent_42epzk$_0 = parent;
    }
  });
  Object.defineProperty(BpmnSequenceFlow.prototype, 'source', {
    get: function () {
      if (this.source_g90bpd$_0 == null)
        return throwUPAE('source');
      return this.source_g90bpd$_0;
    },
    set: function (source) {
      this.source_g90bpd$_0 = source;
    }
  });
  Object.defineProperty(BpmnSequenceFlow.prototype, 'target', {
    get: function () {
      if (this.target_8933sn$_0 == null)
        return throwUPAE('target');
      return this.target_8933sn$_0;
    },
    set: function (target) {
      this.target_8933sn$_0 = target;
    }
  });
  BpmnSequenceFlow.prototype.build_fh2yzz$ = function (model) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var id = this.sourceRef;
    var tmp$_2;
    if ((tmp$ = Kotlin.isType(tmp$_2 = model.allChildren.get_11rb$(id), BpmnFlowObject) ? tmp$_2 : null) != null) {
      this.source = tmp$;
      tmp$_1 = Unit;
    }
     else
      tmp$_1 = null;
    if (tmp$_1 == null)
      throw IllegalArgumentException_init('Cannot find sourceRef: ' + this.sourceRef);
    var tmp$_3;
    var id_0 = this.targetRef;
    var tmp$_4;
    if ((tmp$_0 = Kotlin.isType(tmp$_4 = model.allChildren.get_11rb$(id_0), BpmnFlowObject) ? tmp$_4 : null) != null) {
      this.target = tmp$_0;
      tmp$_3 = Unit;
    }
     else
      tmp$_3 = null;
    if (tmp$_3 == null)
      throw IllegalArgumentException_init('Cannot find targetRef: ' + this.targetRef);
  };
  function BpmnSequenceFlow$Companion() {
    BpmnSequenceFlow$Companion_instance = this;
  }
  BpmnSequenceFlow$Companion.prototype.parse_z5i007$ = function (xml) {
    return new BpmnSequenceFlow(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), xml.get_61zpoe$('sourceRef'), xml.get_61zpoe$('targetRef'));
  };
  BpmnSequenceFlow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnSequenceFlow$Companion_instance = null;
  function BpmnSequenceFlow$Companion_getInstance() {
    if (BpmnSequenceFlow$Companion_instance === null) {
      new BpmnSequenceFlow$Companion();
    }
    return BpmnSequenceFlow$Companion_instance;
  }
  BpmnSequenceFlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnSequenceFlow',
    interfaces: [BpmnElement]
  };
  function BpmnTask(id, name, parent) {
    BpmnTask$Companion_getInstance();
    this.id_xs4sz9$_0 = id;
    this.name_2yiojp$_0 = name;
    this.parent_vnrrie$_0 = parent;
  }
  Object.defineProperty(BpmnTask.prototype, 'id', {
    get: function () {
      return this.id_xs4sz9$_0;
    }
  });
  Object.defineProperty(BpmnTask.prototype, 'name', {
    get: function () {
      return this.name_2yiojp$_0;
    }
  });
  Object.defineProperty(BpmnTask.prototype, 'parent', {
    get: function () {
      return this.parent_vnrrie$_0;
    },
    set: function (parent) {
      this.parent_vnrrie$_0 = parent;
    }
  });
  function BpmnTask$Companion() {
    BpmnTask$Companion_instance = this;
  }
  BpmnTask$Companion.prototype.parse_rd97wj$ = function (xml, parent) {
    return new BpmnTask(xml.get_61zpoe$('id'), xml.get_61zpoe$('name'), parent);
  };
  BpmnTask$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BpmnTask$Companion_instance = null;
  function BpmnTask$Companion_getInstance() {
    if (BpmnTask$Companion_instance === null) {
      new BpmnTask$Companion();
    }
    return BpmnTask$Companion_instance;
  }
  BpmnTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BpmnTask',
    interfaces: [BpmnFlowObject]
  };
  function BpmnParser() {
    BpmnParser_instance = this;
  }
  BpmnParser.prototype.parse_61zpoe$ = function (content) {
    var tmp$;
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, 'text/xml');
    var it = doc.getElementsByTagName('bpmn:definitions');
    tmp$ = it.length > 0 ? it.item(0) : null;
    if (tmp$ == null) {
      return null;
    }
    var node = tmp$;
    return BpmnModel$Companion_getInstance().parse_z5i007$(new XmlElement(node));
  };
  BpmnParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BpmnParser',
    interfaces: []
  };
  var BpmnParser_instance = null;
  function BpmnParser_getInstance() {
    if (BpmnParser_instance === null) {
      new BpmnParser();
    }
    return BpmnParser_instance;
  }
  function XmlElement(element) {
    this.element = element;
    this.children_q9ev0s$_0 = lazy(XmlElement$children$lambda(this));
  }
  Object.defineProperty(XmlElement.prototype, 'tagName', {
    get: function () {
      return this.element.tagName;
    }
  });
  Object.defineProperty(XmlElement.prototype, 'textContent', {
    get: function () {
      var tmp$;
      return (tmp$ = this.element.textContent) != null ? tmp$ : '';
    }
  });
  XmlElement.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.element.getAttribute(name)) != null ? tmp$ : '';
  };
  Object.defineProperty(XmlElement.prototype, 'children', {
    get: function () {
      return this.children_q9ev0s$_0.value;
    }
  });
  XmlElement.prototype.toString = function () {
    return this.element.toString();
  };
  function XmlElement$children$lambda(this$XmlElement) {
    return function () {
      var $receiver = until(0, this$XmlElement.element.childNodes.length);
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        var item = this$XmlElement.element.childNodes.item(element);
        if ((tmp$_0 = Kotlin.isType(item, Element) ? new XmlElement(item) : null) != null) {
          destination.add_11rb$(tmp$_0);
        }
      }
      return destination;
    };
  }
  XmlElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmlElement',
    interfaces: []
  };
  function BrosDocument(root, connections) {
    BrosDocument$Companion_getInstance();
    this.root = root;
    this.connections = connections;
  }
  Object.defineProperty(BrosDocument.prototype, 'name', {
    get: function () {
      return this.root.name.toLowerCase();
    }
  });
  BrosDocument.prototype.maxId = function () {
    var a = this.root.maxId();
    var b = this.connections.maxId();
    return a.compareTo_11rb$(b) >= 0 ? a : b;
  };
  function BrosDocument$Companion() {
    BrosDocument$Companion_instance = this;
  }
  BrosDocument$Companion.prototype.serializer = function () {
    return BrosDocument$$serializer_getInstance();
  };
  BrosDocument$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosDocument$Companion_instance = null;
  function BrosDocument$Companion_getInstance() {
    if (BrosDocument$Companion_instance === null) {
      new BrosDocument$Companion();
    }
    return BrosDocument$Companion_instance;
  }
  function BrosDocument$$serializer() {
    this.descriptor_2v0mti$_0 = new SerialClassDescImpl('io.framed.model.bros.BrosDocument', this);
    this.descriptor.addElement_ivxn3r$('root', false);
    this.descriptor.addElement_ivxn3r$('connections', false);
    BrosDocument$$serializer_instance = this;
  }
  Object.defineProperty(BrosDocument$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2v0mti$_0;
    }
  });
  BrosDocument$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, PolymorphicSerializer_getInstance(), obj.root);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Connections$$serializer_getInstance(), obj.connections);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosDocument$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, PolymorphicSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, PolymorphicSerializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Connections$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Connections$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosDocument_init(bitMask0, local0, local1, null);
  };
  BrosDocument$$serializer.prototype.childSerializers = function () {
    return [PolymorphicSerializer_getInstance(), Connections$$serializer_getInstance()];
  };
  BrosDocument$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosDocument$$serializer_instance = null;
  function BrosDocument$$serializer_getInstance() {
    if (BrosDocument$$serializer_instance === null) {
      new BrosDocument$$serializer();
    }
    return BrosDocument$$serializer_instance;
  }
  function BrosDocument_init(seen1, root, connections, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosDocument.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('root');
    else
      $this.root = root;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('connections');
    else
      $this.connections = connections;
    return $this;
  }
  BrosDocument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosDocument',
    interfaces: []
  };
  function BrosParser() {
    BrosParser_instance = this;
    var serializer = BrosRelationship$Companion_getInstance().serializer();
    var serialName = serializer.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosRelationship), serializer, 'io.framed.model.' + serialName);
    var serializer_0 = BrosFulfillment$Companion_getInstance().serializer();
    var serialName_0 = serializer_0.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosFulfillment), serializer_0, 'io.framed.model.' + serialName_0);
    var serializer_1 = BrosComposition$Companion_getInstance().serializer();
    var serialName_1 = serializer_1.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosComposition), serializer_1, 'io.framed.model.' + serialName_1);
    var serializer_2 = BrosAggregation$Companion_getInstance().serializer();
    var serialName_2 = serializer_2.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosAggregation), serializer_2, 'io.framed.model.' + serialName_2);
    var serializer_3 = BrosInheritance$Companion_getInstance().serializer();
    var serialName_3 = serializer_3.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosInheritance), serializer_3, 'io.framed.model.' + serialName_3);
    var serializer_4 = BrosCreateRelation$Companion_getInstance().serializer();
    var serialName_4 = serializer_4.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosCreateRelation), serializer_4, 'io.framed.model.' + serialName_4);
    var serializer_5 = BrosDestroyRelation$Companion_getInstance().serializer();
    var serialName_5 = serializer_5.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosDestroyRelation), serializer_5, 'io.framed.model.' + serialName_5);
    var serializer_6 = BrosParameter$Companion_getInstance().serializer();
    var serialName_6 = serializer_6.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosParameter), serializer_6, 'io.framed.model.' + serialName_6);
    var serializer_7 = BrosAttribute$Companion_getInstance().serializer();
    var serialName_7 = serializer_7.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosAttribute), serializer_7, 'io.framed.model.' + serialName_7);
    var serializer_8 = BrosMethod$Companion_getInstance().serializer();
    var serialName_8 = serializer_8.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosMethod), serializer_8, 'io.framed.model.' + serialName_8);
    var serializer_9 = BrosRoleType$Companion_getInstance().serializer();
    var serialName_9 = serializer_9.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosRoleType), serializer_9, 'io.framed.model.' + serialName_9);
    var serializer_10 = BrosEvent$Companion_getInstance().serializer();
    var serialName_10 = serializer_10.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosEvent), serializer_10, 'io.framed.model.' + serialName_10);
    var serializer_11 = BrosReturnEvent$Companion_getInstance().serializer();
    var serialName_11 = serializer_11.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosReturnEvent), serializer_11, 'io.framed.model.' + serialName_11);
    var serializer_12 = BrosClass$Companion_getInstance().serializer();
    var serialName_12 = serializer_12.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosClass), serializer_12, 'io.framed.model.' + serialName_12);
    var serializer_13 = BrosPackage$Companion_getInstance().serializer();
    var serialName_13 = serializer_13.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosPackage), serializer_13, 'io.framed.model.' + serialName_13);
    var serializer_14 = BrosCompartment$Companion_getInstance().serializer();
    var serialName_14 = serializer_14.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosCompartment), serializer_14, 'io.framed.model.' + serialName_14);
    var serializer_15 = BrosScene$Companion_getInstance().serializer();
    var serialName_15 = serializer_15.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(BrosScene), serializer_15, 'io.framed.model.' + serialName_15);
  }
  BrosParser.prototype.register_0 = function (M_0, isM, serializer) {
    var serialName = serializer.descriptor.name;
    PolymorphicSerializer_getInstance().registerSerializer_gskgm0$(getKClass(M_0), serializer, 'io.framed.model.' + serialName);
  };
  BrosParser.prototype.parse_61zpoe$ = function (content) {
    try {
      var document = Json.Companion.nonstrict.parse_awif5v$(BrosDocument$Companion_getInstance().serializer(), content);
      BrosElement$Companion_getInstance().lastId = document.maxId().add(Kotlin.Long.fromInt(1));
      return document;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  BrosParser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BrosParser',
    interfaces: []
  };
  var BrosParser_instance = null;
  function BrosParser_getInstance() {
    if (BrosParser_instance === null) {
      new BrosParser();
    }
    return BrosParser_instance;
  }
  function Connections() {
    Connections$Companion_getInstance();
    this.connections = emptySet();
  }
  Connections.prototype.maxId = function () {
    var tmp$, tmp$_0;
    var $receiver = this.connections;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.id;
      do {
        var e = iterator.next();
        var v = e.id;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return (tmp$_0 = max(listOfNotNull((tmp$ = maxBy$result) != null ? tmp$.id : null))) != null ? tmp$_0 : L0;
  };
  function Connections$Companion() {
    Connections$Companion_instance = this;
  }
  Connections$Companion.prototype.serializer = function () {
    return Connections$$serializer_getInstance();
  };
  Connections$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Connections$Companion_instance = null;
  function Connections$Companion_getInstance() {
    if (Connections$Companion_instance === null) {
      new Connections$Companion();
    }
    return Connections$Companion_instance;
  }
  function Connections$$serializer() {
    this.descriptor_qg6b2s$_0 = new SerialClassDescImpl('io.framed.model.bros.Connections', this);
    this.descriptor.addElement_ivxn3r$('connections', true);
    Connections$$serializer_instance = this;
  }
  Object.defineProperty(Connections$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_qg6b2s$_0;
    }
  });
  Connections$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.connections, emptySet()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeSerializableElement_blecud$(this.descriptor, 0, PolymorphicSetSerializer_getInstance(), obj.connections);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Connections$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, PolymorphicSetSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, PolymorphicSetSerializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Connections_init(bitMask0, local0, null);
  };
  Connections$$serializer.prototype.childSerializers = function () {
    return [PolymorphicSetSerializer_getInstance()];
  };
  Connections$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Connections$$serializer_instance = null;
  function Connections$$serializer_getInstance() {
    if (Connections$$serializer_instance === null) {
      new Connections$$serializer();
    }
    return Connections$$serializer_instance;
  }
  function Connections_init(seen1, connections, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Connections.prototype);
    if ((seen1 & 1) === 0)
      $this.connections = emptySet();
    else
      $this.connections = connections;
    return $this;
  }
  Connections.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Connections',
    interfaces: []
  };
  function PolymorphicClassDesc() {
    PolymorphicClassDesc_instance = this;
    SerialClassDescImpl.call(this, 'kotlin.Any');
    this.kind_ddpa41$_0 = UnionKind.POLYMORPHIC;
    this.addElement_ivxn3r$('klass');
    this.addElement_ivxn3r$('value');
  }
  Object.defineProperty(PolymorphicClassDesc.prototype, 'kind', {
    get: function () {
      return this.kind_ddpa41$_0;
    }
  });
  PolymorphicClassDesc.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PolymorphicClassDesc',
    interfaces: [SerialClassDescImpl]
  };
  var PolymorphicClassDesc_instance = null;
  function PolymorphicClassDesc_getInstance() {
    if (PolymorphicClassDesc_instance === null) {
      new PolymorphicClassDesc();
    }
    return PolymorphicClassDesc_instance;
  }
  function PolymorphicListSerializer() {
    PolymorphicListSerializer_instance = this;
    this.$delegate_cbzi8$_0 = new ArrayListSerializer(PolymorphicSerializer_getInstance());
  }
  Object.defineProperty(PolymorphicListSerializer.prototype, 'descriptor', {
    get: function () {
      return this.$delegate_cbzi8$_0.descriptor;
    }
  });
  PolymorphicListSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.$delegate_cbzi8$_0.deserialize_nts5qn$(decoder);
  };
  PolymorphicListSerializer.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.$delegate_cbzi8$_0.patch_mynpiu$(decoder, old);
  };
  PolymorphicListSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.$delegate_cbzi8$_0.serialize_awe97i$(encoder, obj);
  };
  PolymorphicListSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PolymorphicListSerializer',
    interfaces: [KSerializer]
  };
  var PolymorphicListSerializer_instance = null;
  function PolymorphicListSerializer_getInstance() {
    if (PolymorphicListSerializer_instance === null) {
      new PolymorphicListSerializer();
    }
    return PolymorphicListSerializer_instance;
  }
  function PolymorphicSerializer_0() {
    PolymorphicSerializer_instance = this;
    this.simpleNameSerializers_0 = LinkedHashMap_init();
    this.qualifiedSerializers_0 = LinkedHashMap_init();
  }
  Object.defineProperty(PolymorphicSerializer_0.prototype, 'descriptor', {
    get: function () {
      return PolymorphicClassDesc_getInstance();
    }
  });
  PolymorphicSerializer_0.prototype.registerSerializer_gskgm0$ = function (klass, serializer, qualifiedName) {
    var tmp$;
    var className = ensureNotNull(klass.simpleName);
    var anySerializer = Kotlin.isType(tmp$ = serializer, KSerializer) ? tmp$ : throwCCE();
    var error = 'For now, polymorphic serialization in JavaScript does not allow duplicate class names.';
    if (this.simpleNameSerializers_0.containsKey_11rb$(className)) {
      throw IllegalArgumentException_init("A class with the name '" + className + '$' + "' is already registered. " + error);
    }
    if (this.qualifiedSerializers_0.containsKey_11rb$(qualifiedName)) {
      throw IllegalArgumentException_init("A class with the qualified name '" + qualifiedName + "' is already registered. " + error);
    }
    this.simpleNameSerializers_0.put_xwzc9p$(className, anySerializer);
    this.qualifiedSerializers_0.put_xwzc9p$(qualifiedName, anySerializer);
  };
  PolymorphicSerializer_0.prototype.getSerializerBySimpleClassName_0 = function (className) {
    if (!this.simpleNameSerializers_0.containsKey_11rb$(className)) {
      throw new NoSuchElementException("No polymorphic serializer is registered for the class '" + className + "'.");
    }
    return ensureNotNull(this.simpleNameSerializers_0.get_11rb$(className));
  };
  PolymorphicSerializer_0.prototype.getSerializerByQualifiedName_0 = function (qualifiedName) {
    if (!this.isSerializerByQualifiedNameRegistered_0(qualifiedName)) {
      throw new NoSuchElementException("No polymorphic serializer is registered with the qualified name '" + qualifiedName + "'.");
    }
    return ensureNotNull(this.qualifiedSerializers_0.get_11rb$(qualifiedName));
  };
  PolymorphicSerializer_0.prototype.isSerializerByQualifiedNameRegistered_0 = function (qualifiedName) {
    return this.qualifiedSerializers_0.containsKey_11rb$(qualifiedName);
  };
  PolymorphicSerializer_0.prototype.serialize_awe97i$ = function (encoder, obj) {
    var saver = this.getSerializerBySimpleClassName_0(ensureNotNull(Kotlin.getKClassFromExpression(obj).simpleName));
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeStringElement_bgm7zs$(this.descriptor, 0, saver.descriptor.name);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, saver, obj);
    output.endStructure_qatsm0$(this.descriptor);
  };
  PolymorphicSerializer_0.prototype.deserialize_nts5qn$ = function (decoder) {
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    var klassName = null;
    var value = null;
    mainLoop: while (true) {
      switch (input.decodeElementIndex_qatsm0$(this.descriptor)) {
        case -2:
          klassName = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          var loader = this.getSerializerByQualifiedName_0(klassName);
          value = input.decodeSerializableElement_s44l7r$(this.descriptor, 1, loader);
          break mainLoop;
        case -1:
          break mainLoop;
        case 0:
          klassName = input.decodeStringElement_3zr2iy$(this.descriptor, 0);
          break;
        case 1:
          var value_0 = klassName;
          var requireNotNull$result;
          if (value_0 == null) {
            var message = 'Cannot read polymorphic value before its type token';
            throw IllegalArgumentException_init(message.toString());
          }
           else {
            requireNotNull$result = value_0;
          }

          klassName = requireNotNull$result;
          var loader_0 = this.getSerializerByQualifiedName_0(klassName);
          value = input.decodeSerializableElement_s44l7r$(this.descriptor, 1, loader_0);
          break;
        default:throw new SerializationException('Invalid index');
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    var value_1 = value;
    var requireNotNull$result_0;
    if (value_1 == null) {
      var message_0 = 'Polymorphic value have not been read';
      throw IllegalArgumentException_init(message_0.toString());
    }
     else {
      requireNotNull$result_0 = value_1;
    }
    return requireNotNull$result_0;
  };
  PolymorphicSerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PolymorphicSerializer',
    interfaces: [KSerializer]
  };
  var PolymorphicSerializer_instance = null;
  function PolymorphicSerializer_getInstance() {
    if (PolymorphicSerializer_instance === null) {
      new PolymorphicSerializer_0();
    }
    return PolymorphicSerializer_instance;
  }
  function PolymorphicSetSerializer() {
    PolymorphicSetSerializer_instance = this;
    this.$delegate_8lp90k$_0 = new HashSetSerializer(PolymorphicSerializer_getInstance());
  }
  Object.defineProperty(PolymorphicSetSerializer.prototype, 'descriptor', {
    get: function () {
      return this.$delegate_8lp90k$_0.descriptor;
    }
  });
  PolymorphicSetSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return this.$delegate_8lp90k$_0.deserialize_nts5qn$(decoder);
  };
  PolymorphicSetSerializer.prototype.patch_mynpiu$ = function (decoder, old) {
    return this.$delegate_8lp90k$_0.patch_mynpiu$(decoder, old);
  };
  PolymorphicSetSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    return this.$delegate_8lp90k$_0.serialize_awe97i$(encoder, obj);
  };
  PolymorphicSetSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PolymorphicSetSerializer',
    interfaces: [KSerializer]
  };
  var PolymorphicSetSerializer_instance = null;
  function PolymorphicSetSerializer_getInstance() {
    if (PolymorphicSetSerializer_instance === null) {
      new PolymorphicSetSerializer();
    }
    return PolymorphicSetSerializer_instance;
  }
  function BrosAggregation() {
    BrosAggregation$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
    this.sourceCardinality = '1';
    this.targetCardinality = '*';
  }
  BrosAggregation.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosAggregation$Companion() {
    BrosAggregation$Companion_instance = this;
  }
  BrosAggregation$Companion.prototype.serializer = function () {
    return BrosAggregation$$serializer_getInstance();
  };
  BrosAggregation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosAggregation$Companion_instance = null;
  function BrosAggregation$Companion_getInstance() {
    if (BrosAggregation$Companion_instance === null) {
      new BrosAggregation$Companion();
    }
    return BrosAggregation$Companion_instance;
  }
  function BrosAggregation$$serializer() {
    this.descriptor_dp3do8$_0 = new SerialClassDescImpl('Aggregation', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('sourceCardinality', true);
    this.descriptor.addElement_ivxn3r$('targetCardinality', true);
    BrosAggregation$$serializer_instance = this;
  }
  Object.defineProperty(BrosAggregation$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_dp3do8$_0;
    }
  });
  BrosAggregation$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    if (!equals(obj.sourceCardinality, '1') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.sourceCardinality);
    if (!equals(obj.targetCardinality, '*') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeStringElement_bgm7zs$(this.descriptor, 5, obj.targetCardinality);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosAggregation$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosAggregation_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  BrosAggregation$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosAggregation$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosAggregation$$serializer_instance = null;
  function BrosAggregation$$serializer_getInstance() {
    if (BrosAggregation$$serializer_instance === null) {
      new BrosAggregation$$serializer();
    }
    return BrosAggregation$$serializer_instance;
  }
  function BrosAggregation_init(seen1, id, sourceId, targetId, name, sourceCardinality, targetCardinality, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosAggregation.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    if ((seen1 & 16) === 0)
      $this.sourceCardinality = '1';
    else
      $this.sourceCardinality = sourceCardinality;
    if ((seen1 & 32) === 0)
      $this.targetCardinality = '*';
    else
      $this.targetCardinality = targetCardinality;
    return $this;
  }
  BrosAggregation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosAggregation',
    interfaces: [BrosConnection]
  };
  function BrosAggregation_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosAggregation.prototype);
    BrosAggregation.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosAttribute() {
    BrosAttribute$Companion_getInstance();
    BrosElement.call(this);
    this.name = 'unnamed';
    this.type = '';
  }
  BrosAttribute.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ':' + this.type + ')';
  };
  function BrosAttribute$Companion() {
    BrosAttribute$Companion_instance = this;
  }
  BrosAttribute$Companion.prototype.serializer = function () {
    return BrosAttribute$$serializer_getInstance();
  };
  BrosAttribute$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosAttribute$Companion_instance = null;
  function BrosAttribute$Companion_getInstance() {
    if (BrosAttribute$Companion_instance === null) {
      new BrosAttribute$Companion();
    }
    return BrosAttribute$Companion_instance;
  }
  function BrosAttribute$$serializer() {
    this.descriptor_3xzv2a$_0 = new SerialClassDescImpl('Attribute', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('type', true);
    BrosAttribute$$serializer_instance = this;
  }
  Object.defineProperty(BrosAttribute$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_3xzv2a$_0;
    }
  });
  BrosAttribute$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'unnamed') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.type, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.type);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosAttribute$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosAttribute_init(bitMask0, local0, local1, local2, null);
  };
  BrosAttribute$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosAttribute$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosAttribute$$serializer_instance = null;
  function BrosAttribute$$serializer_getInstance() {
    if (BrosAttribute$$serializer_instance === null) {
      new BrosAttribute$$serializer();
    }
    return BrosAttribute$$serializer_instance;
  }
  function BrosAttribute_init(seen1, id, name, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosAttribute.prototype);
    $this = BrosElement_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'unnamed';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.type = '';
    else
      $this.type = type;
    return $this;
  }
  BrosAttribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosAttribute',
    interfaces: [BrosElement]
  };
  function BrosAttribute_init_0(init, $this) {
    $this = $this || Object.create(BrosAttribute.prototype);
    BrosAttribute.call($this);
    init($this);
    return $this;
  }
  function BrosClass() {
    BrosClass$Companion_getInstance();
    BrosObject.call(this);
    this.name = 'UnnamedClass';
    this.attributes = emptyList();
    this.methods = emptyList();
  }
  BrosClass.prototype.maxId = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.id;
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(item.maxId());
    }
    tmp$_1 = (tmp$_0 = max(destination)) != null ? tmp$_0 : L0;
    var $receiver_0 = this.methods;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_5;
    tmp$_5 = $receiver_0.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      destination_0.add_11rb$(item_0.maxId());
    }
    return (tmp$_3 = max(listOf_0([tmp$, tmp$_1, (tmp$_2 = max(destination_0)) != null ? tmp$_2 : L0]))) != null ? tmp$_3 : this.id;
  };
  BrosClass.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosClass$Companion() {
    BrosClass$Companion_instance = this;
  }
  BrosClass$Companion.prototype.serializer = function () {
    return BrosClass$$serializer_getInstance();
  };
  BrosClass$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosClass$Companion_instance = null;
  function BrosClass$Companion_getInstance() {
    if (BrosClass$Companion_instance === null) {
      new BrosClass$Companion();
    }
    return BrosClass$Companion_instance;
  }
  function BrosClass$$serializer() {
    this.descriptor_i5odk2$_0 = new SerialClassDescImpl('Class', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('attributes', true);
    this.descriptor.addElement_ivxn3r$('methods', true);
    BrosClass$$serializer_instance = this;
  }
  Object.defineProperty(BrosClass$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_i5odk2$_0;
    }
  });
  BrosClass$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'UnnamedClass') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.attributes, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), obj.attributes);
    if (!equals(obj.methods, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), obj.methods);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosClass$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosClass_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosClass$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, PolymorphicListSerializer_getInstance(), PolymorphicListSerializer_getInstance()];
  };
  BrosClass$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosClass$$serializer_instance = null;
  function BrosClass$$serializer_getInstance() {
    if (BrosClass$$serializer_instance === null) {
      new BrosClass$$serializer();
    }
    return BrosClass$$serializer_instance;
  }
  function BrosClass_init(seen1, id, name, attributes, methods, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosClass.prototype);
    $this = BrosObject_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'UnnamedClass';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.attributes = emptyList();
    else
      $this.attributes = attributes;
    if ((seen1 & 8) === 0)
      $this.methods = emptyList();
    else
      $this.methods = methods;
    return $this;
  }
  BrosClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosClass',
    interfaces: [BrosObject]
  };
  function BrosClass_init_0(init, $this) {
    $this = $this || Object.create(BrosClass.prototype);
    BrosClass.call($this);
    init($this);
    return $this;
  }
  function BrosCompartment() {
    BrosCompartment$Companion_getInstance();
    BrosObjectGroup.call(this);
    this.name = 'UnnamedCompartment';
    this.attributes = emptyList();
    this.methods = emptyList();
    this.children_va4w68$_0 = emptySet();
  }
  Object.defineProperty(BrosCompartment.prototype, 'children', {
    get: function () {
      return this.children_va4w68$_0;
    },
    set: function (children) {
      this.children_va4w68$_0 = children;
    }
  });
  BrosCompartment.prototype.maxId = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.id;
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_6;
    tmp$_6 = $receiver.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      destination.add_11rb$(item.maxId());
    }
    tmp$_1 = (tmp$_0 = max(destination)) != null ? tmp$_0 : L0;
    var $receiver_0 = this.methods;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_7;
    tmp$_7 = $receiver_0.iterator();
    while (tmp$_7.hasNext()) {
      var item_0 = tmp$_7.next();
      destination_0.add_11rb$(item_0.maxId());
    }
    tmp$_3 = (tmp$_2 = max(destination_0)) != null ? tmp$_2 : L0;
    var $receiver_1 = this.children;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_8;
    tmp$_8 = $receiver_1.iterator();
    while (tmp$_8.hasNext()) {
      var item_1 = tmp$_8.next();
      destination_1.add_11rb$(item_1.maxId());
    }
    return (tmp$_5 = max(listOf_0([tmp$, tmp$_1, tmp$_3, (tmp$_4 = max(destination_1)) != null ? tmp$_4 : L0]))) != null ? tmp$_5 : this.id;
  };
  BrosCompartment.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosCompartment$Companion() {
    BrosCompartment$Companion_instance = this;
  }
  BrosCompartment$Companion.prototype.serializer = function () {
    return BrosCompartment$$serializer_getInstance();
  };
  BrosCompartment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosCompartment$Companion_instance = null;
  function BrosCompartment$Companion_getInstance() {
    if (BrosCompartment$Companion_instance === null) {
      new BrosCompartment$Companion();
    }
    return BrosCompartment$Companion_instance;
  }
  function BrosCompartment$$serializer() {
    this.descriptor_f9918o$_0 = new SerialClassDescImpl('Compartment', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('attributes', true);
    this.descriptor.addElement_ivxn3r$('methods', true);
    this.descriptor.addElement_ivxn3r$('children', true);
    BrosCompartment$$serializer_instance = this;
  }
  Object.defineProperty(BrosCompartment$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_f9918o$_0;
    }
  });
  BrosCompartment$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'UnnamedCompartment') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.attributes, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), obj.attributes);
    if (!equals(obj.methods, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), obj.methods);
    if (!equals(obj.children, emptySet()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeSerializableElement_blecud$(this.descriptor, 4, PolymorphicSetSerializer_getInstance(), obj.children);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosCompartment$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 4, PolymorphicSetSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 4, PolymorphicSetSerializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosCompartment_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  BrosCompartment$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, PolymorphicListSerializer_getInstance(), PolymorphicListSerializer_getInstance(), PolymorphicSetSerializer_getInstance()];
  };
  BrosCompartment$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosCompartment$$serializer_instance = null;
  function BrosCompartment$$serializer_getInstance() {
    if (BrosCompartment$$serializer_instance === null) {
      new BrosCompartment$$serializer();
    }
    return BrosCompartment$$serializer_instance;
  }
  function BrosCompartment_init(seen1, id, name, attributes, methods, children, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosCompartment.prototype);
    $this = BrosObjectGroup_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'UnnamedCompartment';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.attributes = emptyList();
    else
      $this.attributes = attributes;
    if ((seen1 & 8) === 0)
      $this.methods = emptyList();
    else
      $this.methods = methods;
    if ((seen1 & 16) === 0)
      $this.children_va4w68$_0 = emptySet();
    else
      $this.children_va4w68$_0 = children;
    return $this;
  }
  BrosCompartment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosCompartment',
    interfaces: [BrosObjectGroup]
  };
  function BrosCompartment_init_0(init, $this) {
    $this = $this || Object.create(BrosCompartment.prototype);
    BrosCompartment.call($this);
    init($this);
    return $this;
  }
  function BrosComposition() {
    BrosComposition$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
    this.sourceCardinality = '1';
    this.targetCardinality = '*';
  }
  BrosComposition.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosComposition$Companion() {
    BrosComposition$Companion_instance = this;
  }
  BrosComposition$Companion.prototype.serializer = function () {
    return BrosComposition$$serializer_getInstance();
  };
  BrosComposition$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosComposition$Companion_instance = null;
  function BrosComposition$Companion_getInstance() {
    if (BrosComposition$Companion_instance === null) {
      new BrosComposition$Companion();
    }
    return BrosComposition$Companion_instance;
  }
  function BrosComposition$$serializer() {
    this.descriptor_w9uk34$_0 = new SerialClassDescImpl('Composition', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('sourceCardinality', true);
    this.descriptor.addElement_ivxn3r$('targetCardinality', true);
    BrosComposition$$serializer_instance = this;
  }
  Object.defineProperty(BrosComposition$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_w9uk34$_0;
    }
  });
  BrosComposition$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    if (!equals(obj.sourceCardinality, '1') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.sourceCardinality);
    if (!equals(obj.targetCardinality, '*') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeStringElement_bgm7zs$(this.descriptor, 5, obj.targetCardinality);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosComposition$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosComposition_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  BrosComposition$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosComposition$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosComposition$$serializer_instance = null;
  function BrosComposition$$serializer_getInstance() {
    if (BrosComposition$$serializer_instance === null) {
      new BrosComposition$$serializer();
    }
    return BrosComposition$$serializer_instance;
  }
  function BrosComposition_init(seen1, id, sourceId, targetId, name, sourceCardinality, targetCardinality, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosComposition.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    if ((seen1 & 16) === 0)
      $this.sourceCardinality = '1';
    else
      $this.sourceCardinality = sourceCardinality;
    if ((seen1 & 32) === 0)
      $this.targetCardinality = '*';
    else
      $this.targetCardinality = targetCardinality;
    return $this;
  }
  BrosComposition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosComposition',
    interfaces: [BrosConnection]
  };
  function BrosComposition_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosComposition.prototype);
    BrosComposition.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosConnection() {
    BrosConnection$Companion_getInstance();
    BrosElement.call(this);
    this.sourceId = this.id;
    this.targetId = this.id;
  }
  function BrosConnection$Companion() {
    BrosConnection$Companion_instance = this;
  }
  BrosConnection$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(BrosConnection));
  };
  BrosConnection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosConnection$Companion_instance = null;
  function BrosConnection$Companion_getInstance() {
    if (BrosConnection$Companion_instance === null) {
      new BrosConnection$Companion();
    }
    return BrosConnection$Companion_instance;
  }
  function BrosConnection$$serializer() {
    this.descriptor_xh1e1q$_0 = new SerialClassDescImpl('io.framed.model.bros.model.BrosConnection', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    BrosConnection$$serializer_instance = this;
  }
  Object.defineProperty(BrosConnection$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_xh1e1q$_0;
    }
  });
  BrosConnection$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosConnection$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosConnection_init(bitMask0, local0, local1, local2, null);
  };
  BrosConnection$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer];
  };
  BrosConnection$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosConnection$$serializer_instance = null;
  function BrosConnection$$serializer_getInstance() {
    if (BrosConnection$$serializer_instance === null) {
      new BrosConnection$$serializer();
    }
    return BrosConnection$$serializer_instance;
  }
  function BrosConnection_init(seen1, id, sourceId, targetId, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosConnection.prototype);
    $this = BrosElement_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.sourceId = $this.id;
    else
      $this.sourceId = sourceId;
    if ((seen1 & 4) === 0)
      $this.targetId = $this.id;
    else
      $this.targetId = targetId;
    return $this;
  }
  BrosConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosConnection',
    interfaces: [BrosElement]
  };
  function BrosCreateRelation() {
    BrosCreateRelation$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
  }
  BrosCreateRelation.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosCreateRelation$Companion() {
    BrosCreateRelation$Companion_instance = this;
  }
  BrosCreateRelation$Companion.prototype.serializer = function () {
    return BrosCreateRelation$$serializer_getInstance();
  };
  BrosCreateRelation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosCreateRelation$Companion_instance = null;
  function BrosCreateRelation$Companion_getInstance() {
    if (BrosCreateRelation$Companion_instance === null) {
      new BrosCreateRelation$Companion();
    }
    return BrosCreateRelation$Companion_instance;
  }
  function BrosCreateRelation$$serializer() {
    this.descriptor_eiptng$_0 = new SerialClassDescImpl('CreateRelationship', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    BrosCreateRelation$$serializer_instance = this;
  }
  Object.defineProperty(BrosCreateRelation$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_eiptng$_0;
    }
  });
  BrosCreateRelation$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosCreateRelation$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosCreateRelation_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosCreateRelation$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer];
  };
  BrosCreateRelation$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosCreateRelation$$serializer_instance = null;
  function BrosCreateRelation$$serializer_getInstance() {
    if (BrosCreateRelation$$serializer_instance === null) {
      new BrosCreateRelation$$serializer();
    }
    return BrosCreateRelation$$serializer_instance;
  }
  function BrosCreateRelation_init(seen1, id, sourceId, targetId, name, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosCreateRelation.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    return $this;
  }
  BrosCreateRelation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosCreateRelation',
    interfaces: [BrosConnection]
  };
  function BrosCreateRelation_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosCreateRelation.prototype);
    BrosCreateRelation.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosDestroyRelation() {
    BrosDestroyRelation$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
  }
  BrosDestroyRelation.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosDestroyRelation$Companion() {
    BrosDestroyRelation$Companion_instance = this;
  }
  BrosDestroyRelation$Companion.prototype.serializer = function () {
    return BrosDestroyRelation$$serializer_getInstance();
  };
  BrosDestroyRelation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosDestroyRelation$Companion_instance = null;
  function BrosDestroyRelation$Companion_getInstance() {
    if (BrosDestroyRelation$Companion_instance === null) {
      new BrosDestroyRelation$Companion();
    }
    return BrosDestroyRelation$Companion_instance;
  }
  function BrosDestroyRelation$$serializer() {
    this.descriptor_tt18sc$_0 = new SerialClassDescImpl('DestroyRelationship', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    BrosDestroyRelation$$serializer_instance = this;
  }
  Object.defineProperty(BrosDestroyRelation$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_tt18sc$_0;
    }
  });
  BrosDestroyRelation$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosDestroyRelation$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosDestroyRelation_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosDestroyRelation$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer];
  };
  BrosDestroyRelation$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosDestroyRelation$$serializer_instance = null;
  function BrosDestroyRelation$$serializer_getInstance() {
    if (BrosDestroyRelation$$serializer_instance === null) {
      new BrosDestroyRelation$$serializer();
    }
    return BrosDestroyRelation$$serializer_instance;
  }
  function BrosDestroyRelation_init(seen1, id, sourceId, targetId, name, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosDestroyRelation.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    return $this;
  }
  BrosDestroyRelation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosDestroyRelation',
    interfaces: [BrosConnection]
  };
  function BrosDestroyRelation_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosDestroyRelation.prototype);
    BrosDestroyRelation.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosElement() {
    BrosElement$Companion_getInstance();
    var tmp$;
    this.id = (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$);
  }
  BrosElement.prototype.maxId = function () {
    return this.id;
  };
  function BrosElement$Companion() {
    BrosElement$Companion_instance = this;
    this.lastId = L0;
  }
  BrosElement$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(BrosElement));
  };
  BrosElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosElement$Companion_instance = null;
  function BrosElement$Companion_getInstance() {
    if (BrosElement$Companion_instance === null) {
      new BrosElement$Companion();
    }
    return BrosElement$Companion_instance;
  }
  function BrosElement$$serializer() {
    this.descriptor_31121u$_0 = new SerialClassDescImpl('io.framed.model.bros.model.BrosElement', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    BrosElement$$serializer_instance = this;
  }
  Object.defineProperty(BrosElement$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_31121u$_0;
    }
  });
  BrosElement$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosElement$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosElement_init(bitMask0, local0, null);
  };
  BrosElement$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer];
  };
  BrosElement$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosElement$$serializer_instance = null;
  function BrosElement$$serializer_getInstance() {
    if (BrosElement$$serializer_instance === null) {
      new BrosElement$$serializer();
    }
    return BrosElement$$serializer_instance;
  }
  function BrosElement_init(seen1, id, serializationConstructorMarker) {
    var tmp$;
    var $this = serializationConstructorMarker || Object.create(BrosElement.prototype);
    if ((seen1 & 1) === 0)
      $this.id = (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$);
    else
      $this.id = id;
    return $this;
  }
  BrosElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosElement',
    interfaces: []
  };
  function BrosEvent() {
    BrosEvent$Companion_getInstance();
    BrosObject.call(this);
    this.type = BrosEventType$STANDARD_getInstance();
    this.desc = '';
  }
  BrosEvent.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.desc + ')';
  };
  function BrosEvent$Companion() {
    BrosEvent$Companion_instance = this;
  }
  BrosEvent$Companion.prototype.serializer = function () {
    return BrosEvent$$serializer_getInstance();
  };
  BrosEvent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosEvent$Companion_instance = null;
  function BrosEvent$Companion_getInstance() {
    if (BrosEvent$Companion_instance === null) {
      new BrosEvent$Companion();
    }
    return BrosEvent$Companion_instance;
  }
  function BrosEvent$$serializer() {
    this.descriptor_anzbls$_0 = new SerialClassDescImpl('Event', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('type', true);
    this.descriptor.addElement_ivxn3r$('desc', true);
    BrosEvent$$serializer_instance = this;
  }
  Object.defineProperty(BrosEvent$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_anzbls$_0;
    }
  });
  BrosEvent$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.type, BrosEventType$STANDARD_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType)), obj.type);
    if (!equals(obj.desc, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.desc);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosEvent$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType)), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosEvent_init(bitMask0, local0, local1, local2, null);
  };
  BrosEvent$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, new EnumSerializer(getKClass(BrosEventType)), internal.StringSerializer];
  };
  BrosEvent$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosEvent$$serializer_instance = null;
  function BrosEvent$$serializer_getInstance() {
    if (BrosEvent$$serializer_instance === null) {
      new BrosEvent$$serializer();
    }
    return BrosEvent$$serializer_instance;
  }
  function BrosEvent_init(seen1, id, type, desc, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosEvent.prototype);
    $this = BrosObject_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.type = BrosEventType$STANDARD_getInstance();
    else
      $this.type = type;
    if ((seen1 & 4) === 0)
      $this.desc = '';
    else
      $this.desc = desc;
    return $this;
  }
  BrosEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosEvent',
    interfaces: [BrosObject]
  };
  function BrosEvent_init_0(init, $this) {
    $this = $this || Object.create(BrosEvent.prototype);
    BrosEvent.call($this);
    init($this);
    return $this;
  }
  function BrosEventType(name, ordinal, printableName) {
    Enum.call(this);
    this.printableName = printableName;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BrosEventType_initFields() {
    BrosEventType_initFields = function () {
    };
    BrosEventType$TIMER_instance = new BrosEventType('TIMER', 0, 'Timer');
    BrosEventType$MESSAGE_instance = new BrosEventType('MESSAGE', 1, 'Message');
    BrosEventType$ERROR_instance = new BrosEventType('ERROR', 2, 'Error');
    BrosEventType$STANDARD_instance = new BrosEventType('STANDARD', 3, 'Standard');
    BrosEventType$CONDITION_instance = new BrosEventType('CONDITION', 4, 'Condition');
    BrosEventType$SIGNAL_instance = new BrosEventType('SIGNAL', 5, 'Signal');
  }
  var BrosEventType$TIMER_instance;
  function BrosEventType$TIMER_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$TIMER_instance;
  }
  var BrosEventType$MESSAGE_instance;
  function BrosEventType$MESSAGE_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$MESSAGE_instance;
  }
  var BrosEventType$ERROR_instance;
  function BrosEventType$ERROR_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$ERROR_instance;
  }
  var BrosEventType$STANDARD_instance;
  function BrosEventType$STANDARD_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$STANDARD_instance;
  }
  var BrosEventType$CONDITION_instance;
  function BrosEventType$CONDITION_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$CONDITION_instance;
  }
  var BrosEventType$SIGNAL_instance;
  function BrosEventType$SIGNAL_getInstance() {
    BrosEventType_initFields();
    return BrosEventType$SIGNAL_instance;
  }
  BrosEventType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosEventType',
    interfaces: [Enum]
  };
  function BrosEventType$values() {
    return [BrosEventType$TIMER_getInstance(), BrosEventType$MESSAGE_getInstance(), BrosEventType$ERROR_getInstance(), BrosEventType$STANDARD_getInstance(), BrosEventType$CONDITION_getInstance(), BrosEventType$SIGNAL_getInstance()];
  }
  BrosEventType.values = BrosEventType$values;
  function BrosEventType$valueOf(name) {
    switch (name) {
      case 'TIMER':
        return BrosEventType$TIMER_getInstance();
      case 'MESSAGE':
        return BrosEventType$MESSAGE_getInstance();
      case 'ERROR':
        return BrosEventType$ERROR_getInstance();
      case 'STANDARD':
        return BrosEventType$STANDARD_getInstance();
      case 'CONDITION':
        return BrosEventType$CONDITION_getInstance();
      case 'SIGNAL':
        return BrosEventType$SIGNAL_getInstance();
      default:throwISE('No enum constant io.framed.model.bros.model.BrosEventType.' + name);
    }
  }
  BrosEventType.valueOf_61zpoe$ = BrosEventType$valueOf;
  function BrosFulfillment() {
    BrosFulfillment$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
  }
  BrosFulfillment.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosFulfillment$Companion() {
    BrosFulfillment$Companion_instance = this;
  }
  BrosFulfillment$Companion.prototype.serializer = function () {
    return BrosFulfillment$$serializer_getInstance();
  };
  BrosFulfillment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosFulfillment$Companion_instance = null;
  function BrosFulfillment$Companion_getInstance() {
    if (BrosFulfillment$Companion_instance === null) {
      new BrosFulfillment$Companion();
    }
    return BrosFulfillment$Companion_instance;
  }
  function BrosFulfillment$$serializer() {
    this.descriptor_2yvd30$_0 = new SerialClassDescImpl('Fulfillment', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    BrosFulfillment$$serializer_instance = this;
  }
  Object.defineProperty(BrosFulfillment$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2yvd30$_0;
    }
  });
  BrosFulfillment$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosFulfillment$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosFulfillment_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosFulfillment$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer];
  };
  BrosFulfillment$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosFulfillment$$serializer_instance = null;
  function BrosFulfillment$$serializer_getInstance() {
    if (BrosFulfillment$$serializer_instance === null) {
      new BrosFulfillment$$serializer();
    }
    return BrosFulfillment$$serializer_instance;
  }
  function BrosFulfillment_init(seen1, id, sourceId, targetId, name, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosFulfillment.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    return $this;
  }
  BrosFulfillment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosFulfillment',
    interfaces: [BrosConnection]
  };
  function BrosFulfillment_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosFulfillment.prototype);
    BrosFulfillment.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosInheritance() {
    BrosInheritance$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
    this.sourceCardinality = '';
    this.targetCardinality = '';
  }
  BrosInheritance.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosInheritance$Companion() {
    BrosInheritance$Companion_instance = this;
  }
  BrosInheritance$Companion.prototype.serializer = function () {
    return BrosInheritance$$serializer_getInstance();
  };
  BrosInheritance$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosInheritance$Companion_instance = null;
  function BrosInheritance$Companion_getInstance() {
    if (BrosInheritance$Companion_instance === null) {
      new BrosInheritance$Companion();
    }
    return BrosInheritance$Companion_instance;
  }
  function BrosInheritance$$serializer() {
    this.descriptor_647vgw$_0 = new SerialClassDescImpl('Inheritance', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('sourceCardinality', true);
    this.descriptor.addElement_ivxn3r$('targetCardinality', true);
    BrosInheritance$$serializer_instance = this;
  }
  Object.defineProperty(BrosInheritance$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_647vgw$_0;
    }
  });
  BrosInheritance$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    if (!equals(obj.sourceCardinality, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.sourceCardinality);
    if (!equals(obj.targetCardinality, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeStringElement_bgm7zs$(this.descriptor, 5, obj.targetCardinality);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosInheritance$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosInheritance_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  BrosInheritance$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosInheritance$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosInheritance$$serializer_instance = null;
  function BrosInheritance$$serializer_getInstance() {
    if (BrosInheritance$$serializer_instance === null) {
      new BrosInheritance$$serializer();
    }
    return BrosInheritance$$serializer_instance;
  }
  function BrosInheritance_init(seen1, id, sourceId, targetId, name, sourceCardinality, targetCardinality, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosInheritance.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    if ((seen1 & 16) === 0)
      $this.sourceCardinality = '';
    else
      $this.sourceCardinality = sourceCardinality;
    if ((seen1 & 32) === 0)
      $this.targetCardinality = '';
    else
      $this.targetCardinality = targetCardinality;
    return $this;
  }
  BrosInheritance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosInheritance',
    interfaces: [BrosConnection]
  };
  function BrosInheritance_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosInheritance.prototype);
    BrosInheritance.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosMethod() {
    BrosMethod$Companion_getInstance();
    BrosElement.call(this);
    this.name = 'unnamed';
    this.type = '';
    this.parameters = emptyList();
  }
  BrosMethod.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ':' + this.type + ')';
  };
  function BrosMethod$Companion() {
    BrosMethod$Companion_instance = this;
  }
  BrosMethod$Companion.prototype.serializer = function () {
    return BrosMethod$$serializer_getInstance();
  };
  BrosMethod$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosMethod$Companion_instance = null;
  function BrosMethod$Companion_getInstance() {
    if (BrosMethod$Companion_instance === null) {
      new BrosMethod$Companion();
    }
    return BrosMethod$Companion_instance;
  }
  function BrosMethod$$serializer() {
    this.descriptor_myt0ij$_0 = new SerialClassDescImpl('Method', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('type', true);
    this.descriptor.addElement_ivxn3r$('parameters', true);
    BrosMethod$$serializer_instance = this;
  }
  Object.defineProperty(BrosMethod$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_myt0ij$_0;
    }
  });
  BrosMethod$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'unnamed') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.type, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.type);
    if (!equals(obj.parameters, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), obj.parameters);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosMethod$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosMethod_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosMethod$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, internal.StringSerializer, PolymorphicListSerializer_getInstance()];
  };
  BrosMethod$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosMethod$$serializer_instance = null;
  function BrosMethod$$serializer_getInstance() {
    if (BrosMethod$$serializer_instance === null) {
      new BrosMethod$$serializer();
    }
    return BrosMethod$$serializer_instance;
  }
  function BrosMethod_init(seen1, id, name, type, parameters, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosMethod.prototype);
    $this = BrosElement_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'unnamed';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.type = '';
    else
      $this.type = type;
    if ((seen1 & 8) === 0)
      $this.parameters = emptyList();
    else
      $this.parameters = parameters;
    return $this;
  }
  BrosMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosMethod',
    interfaces: [BrosElement]
  };
  function BrosMethod_init_0(init, $this) {
    $this = $this || Object.create(BrosMethod.prototype);
    BrosMethod.call($this);
    init($this);
    return $this;
  }
  function BrosObject() {
    BrosObject$Companion_getInstance();
    BrosElement.call(this);
  }
  BrosObject.prototype.getAllChildren = function () {
    return listOf(this);
  };
  function BrosObject$Companion() {
    BrosObject$Companion_instance = this;
  }
  BrosObject$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(BrosObject));
  };
  BrosObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosObject$Companion_instance = null;
  function BrosObject$Companion_getInstance() {
    if (BrosObject$Companion_instance === null) {
      new BrosObject$Companion();
    }
    return BrosObject$Companion_instance;
  }
  function BrosObject$$serializer() {
    this.descriptor_kwpbib$_0 = new SerialClassDescImpl('io.framed.model.bros.model.BrosObject', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    BrosObject$$serializer_instance = this;
  }
  Object.defineProperty(BrosObject$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_kwpbib$_0;
    }
  });
  BrosObject$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosObject$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosObject_init(bitMask0, local0, null);
  };
  BrosObject$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer];
  };
  BrosObject$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosObject$$serializer_instance = null;
  function BrosObject$$serializer_getInstance() {
    if (BrosObject$$serializer_instance === null) {
      new BrosObject$$serializer();
    }
    return BrosObject$$serializer_instance;
  }
  function BrosObject_init(seen1, id, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosObject.prototype);
    $this = BrosElement_init(seen1, id, $this);
    return $this;
  }
  BrosObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosObject',
    interfaces: [BrosElement]
  };
  function BrosObjectGroup() {
    BrosObjectGroup$Companion_getInstance();
    BrosObject.call(this);
  }
  BrosObjectGroup.prototype.getAllChildren = function () {
    var tmp$ = listOf(this);
    var $receiver = this.children;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.getAllChildren();
      addAll(destination, list);
    }
    return plus(tmp$, destination);
  };
  function BrosObjectGroup$Companion() {
    BrosObjectGroup$Companion_instance = this;
  }
  BrosObjectGroup$Companion.prototype.serializer = function () {
    return new PolymorphicSerializer(getKClass(BrosObjectGroup));
  };
  BrosObjectGroup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosObjectGroup$Companion_instance = null;
  function BrosObjectGroup$Companion_getInstance() {
    if (BrosObjectGroup$Companion_instance === null) {
      new BrosObjectGroup$Companion();
    }
    return BrosObjectGroup$Companion_instance;
  }
  function BrosObjectGroup$$serializer() {
    this.descriptor_p5zmu$_0 = new SerialClassDescImpl('io.framed.model.bros.model.BrosObjectGroup', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    BrosObjectGroup$$serializer_instance = this;
  }
  Object.defineProperty(BrosObjectGroup$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_p5zmu$_0;
    }
  });
  BrosObjectGroup$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosObjectGroup$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosObjectGroup_init(bitMask0, local0, null);
  };
  BrosObjectGroup$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer];
  };
  BrosObjectGroup$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosObjectGroup$$serializer_instance = null;
  function BrosObjectGroup$$serializer_getInstance() {
    if (BrosObjectGroup$$serializer_instance === null) {
      new BrosObjectGroup$$serializer();
    }
    return BrosObjectGroup$$serializer_instance;
  }
  function BrosObjectGroup_init(seen1, id, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosObjectGroup.prototype);
    $this = BrosObject_init(seen1, id, $this);
    return $this;
  }
  BrosObjectGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosObjectGroup',
    interfaces: [BrosObject]
  };
  function BrosPackage() {
    BrosPackage$Companion_getInstance();
    BrosObjectGroup.call(this);
    this.name = 'UnnamedPackage';
    this.children_x5xff8$_0 = emptySet();
  }
  Object.defineProperty(BrosPackage.prototype, 'children', {
    get: function () {
      return this.children_x5xff8$_0;
    },
    set: function (children) {
      this.children_x5xff8$_0 = children;
    }
  });
  BrosPackage.prototype.maxId = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.id;
    var $receiver = this.children;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.maxId());
    }
    return (tmp$_1 = max(listOf_0([tmp$, (tmp$_0 = max(destination)) != null ? tmp$_0 : L0]))) != null ? tmp$_1 : this.id;
  };
  BrosPackage.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosPackage$Companion() {
    BrosPackage$Companion_instance = this;
  }
  BrosPackage$Companion.prototype.serializer = function () {
    return BrosPackage$$serializer_getInstance();
  };
  BrosPackage$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosPackage$Companion_instance = null;
  function BrosPackage$Companion_getInstance() {
    if (BrosPackage$Companion_instance === null) {
      new BrosPackage$Companion();
    }
    return BrosPackage$Companion_instance;
  }
  function BrosPackage$$serializer() {
    this.descriptor_15yx2k$_0 = new SerialClassDescImpl('Package', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('children', true);
    BrosPackage$$serializer_instance = this;
  }
  Object.defineProperty(BrosPackage$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_15yx2k$_0;
    }
  });
  BrosPackage$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'UnnamedPackage') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.children, emptySet()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, PolymorphicSetSerializer_getInstance(), obj.children);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosPackage$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PolymorphicSetSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PolymorphicSetSerializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosPackage_init(bitMask0, local0, local1, local2, null);
  };
  BrosPackage$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, PolymorphicSetSerializer_getInstance()];
  };
  BrosPackage$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosPackage$$serializer_instance = null;
  function BrosPackage$$serializer_getInstance() {
    if (BrosPackage$$serializer_instance === null) {
      new BrosPackage$$serializer();
    }
    return BrosPackage$$serializer_instance;
  }
  function BrosPackage_init(seen1, id, name, children, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosPackage.prototype);
    $this = BrosObjectGroup_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'UnnamedPackage';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.children_x5xff8$_0 = emptySet();
    else
      $this.children_x5xff8$_0 = children;
    return $this;
  }
  BrosPackage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosPackage',
    interfaces: [BrosObjectGroup]
  };
  function BrosPackage_init_0(init, $this) {
    $this = $this || Object.create(BrosPackage.prototype);
    BrosPackage.call($this);
    init($this);
    return $this;
  }
  function BrosParameter() {
    BrosParameter$Companion_getInstance();
    BrosElement.call(this);
    this.name = 'unnamed';
    this.type = '';
  }
  BrosParameter.prototype.toString = function () {
    var tmp$ = this.name;
    var it = this.type;
    return tmp$ + (isBlank(this.type) ? '' : ': ' + it);
  };
  BrosParameter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, BrosParameter))
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(this.type, other.type))
      return false;
    return true;
  };
  BrosParameter.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(this.type) | 0;
    return result;
  };
  BrosParameter.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ':' + this.type + ')';
  };
  function BrosParameter$Companion() {
    BrosParameter$Companion_instance = this;
  }
  BrosParameter$Companion.prototype.serializer = function () {
    return BrosParameter$$serializer_getInstance();
  };
  BrosParameter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosParameter$Companion_instance = null;
  function BrosParameter$Companion_getInstance() {
    if (BrosParameter$Companion_instance === null) {
      new BrosParameter$Companion();
    }
    return BrosParameter$Companion_instance;
  }
  function BrosParameter$$serializer() {
    this.descriptor_2qzf1t$_0 = new SerialClassDescImpl('Parameter', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('type', true);
    BrosParameter$$serializer_instance = this;
  }
  Object.defineProperty(BrosParameter$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_2qzf1t$_0;
    }
  });
  BrosParameter$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'unnamed') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.type, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.type);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosParameter$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosParameter_init(bitMask0, local0, local1, local2, null);
  };
  BrosParameter$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosParameter$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosParameter$$serializer_instance = null;
  function BrosParameter$$serializer_getInstance() {
    if (BrosParameter$$serializer_instance === null) {
      new BrosParameter$$serializer();
    }
    return BrosParameter$$serializer_instance;
  }
  function BrosParameter_init(seen1, id, name, type, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosParameter.prototype);
    $this = BrosElement_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'unnamed';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.type = '';
    else
      $this.type = type;
    return $this;
  }
  BrosParameter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosParameter',
    interfaces: [BrosElement]
  };
  function BrosParameter_init_0(init, $this) {
    $this = $this || Object.create(BrosParameter.prototype);
    BrosParameter.call($this);
    init($this);
    return $this;
  }
  function BrosRelationship() {
    BrosRelationship$Companion_getInstance();
    BrosConnection.call(this);
    this.name = '';
    this.sourceCardinality = '*';
    this.targetCardinality = '*';
  }
  BrosRelationship.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosRelationship$Companion() {
    BrosRelationship$Companion_instance = this;
  }
  BrosRelationship$Companion.prototype.serializer = function () {
    return BrosRelationship$$serializer_getInstance();
  };
  BrosRelationship$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosRelationship$Companion_instance = null;
  function BrosRelationship$Companion_getInstance() {
    if (BrosRelationship$Companion_instance === null) {
      new BrosRelationship$Companion();
    }
    return BrosRelationship$Companion_instance;
  }
  function BrosRelationship$$serializer() {
    this.descriptor_m0y4ho$_0 = new SerialClassDescImpl('Relationship', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('sourceId', true);
    this.descriptor.addElement_ivxn3r$('targetId', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('sourceCardinality', true);
    this.descriptor.addElement_ivxn3r$('targetCardinality', true);
    BrosRelationship$$serializer_instance = this;
  }
  Object.defineProperty(BrosRelationship$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_m0y4ho$_0;
    }
  });
  BrosRelationship$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.sourceId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeLongElement_a3zgoj$(this.descriptor, 1, obj.sourceId);
    if (!equals(obj.targetId, this.id) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeLongElement_a3zgoj$(this.descriptor, 2, obj.targetId);
    if (!equals(obj.name, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeStringElement_bgm7zs$(this.descriptor, 3, obj.name);
    if (!equals(obj.sourceCardinality, '*') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 4))
      output.encodeStringElement_bgm7zs$(this.descriptor, 4, obj.sourceCardinality);
    if (!equals(obj.targetCardinality, '*') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 5))
      output.encodeStringElement_bgm7zs$(this.descriptor, 5, obj.targetCardinality);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosRelationship$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeLongElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeLongElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeStringElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = input.decodeStringElement_3zr2iy$(this.descriptor, 4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = input.decodeStringElement_3zr2iy$(this.descriptor, 5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosRelationship_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  BrosRelationship$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.LongSerializer, internal.LongSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  BrosRelationship$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosRelationship$$serializer_instance = null;
  function BrosRelationship$$serializer_getInstance() {
    if (BrosRelationship$$serializer_instance === null) {
      new BrosRelationship$$serializer();
    }
    return BrosRelationship$$serializer_instance;
  }
  function BrosRelationship_init(seen1, id, sourceId, targetId, name, sourceCardinality, targetCardinality, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosRelationship.prototype);
    $this = BrosConnection_init(seen1, id, sourceId, targetId, $this);
    if ((seen1 & 8) === 0)
      $this.name = '';
    else
      $this.name = name;
    if ((seen1 & 16) === 0)
      $this.sourceCardinality = '*';
    else
      $this.sourceCardinality = sourceCardinality;
    if ((seen1 & 32) === 0)
      $this.targetCardinality = '*';
    else
      $this.targetCardinality = targetCardinality;
    return $this;
  }
  BrosRelationship.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosRelationship',
    interfaces: [BrosConnection]
  };
  function BrosRelationship_init_0(sourceId, targetId, $this) {
    $this = $this || Object.create(BrosRelationship.prototype);
    BrosRelationship.call($this);
    $this.sourceId = sourceId;
    $this.targetId = targetId;
    return $this;
  }
  function BrosReturnEvent() {
    BrosReturnEvent$Companion_getInstance();
    BrosObject.call(this);
    this.type = BrosEventType$STANDARD_getInstance();
    this.desc = '';
  }
  BrosReturnEvent.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.desc + ')';
  };
  function BrosReturnEvent$Companion() {
    BrosReturnEvent$Companion_instance = this;
  }
  BrosReturnEvent$Companion.prototype.serializer = function () {
    return BrosReturnEvent$$serializer_getInstance();
  };
  BrosReturnEvent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosReturnEvent$Companion_instance = null;
  function BrosReturnEvent$Companion_getInstance() {
    if (BrosReturnEvent$Companion_instance === null) {
      new BrosReturnEvent$Companion();
    }
    return BrosReturnEvent$Companion_instance;
  }
  function BrosReturnEvent$$serializer() {
    this.descriptor_fbtwgg$_0 = new SerialClassDescImpl('ReturnEvent', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('type', true);
    this.descriptor.addElement_ivxn3r$('desc', true);
    BrosReturnEvent$$serializer_instance = this;
  }
  Object.defineProperty(BrosReturnEvent$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_fbtwgg$_0;
    }
  });
  BrosReturnEvent$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.type, BrosEventType$STANDARD_getInstance()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeSerializableElement_blecud$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType)), obj.type);
    if (!equals(obj.desc, '') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.desc);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosReturnEvent$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType))) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new EnumSerializer(getKClass(BrosEventType)), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosReturnEvent_init(bitMask0, local0, local1, local2, null);
  };
  BrosReturnEvent$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, new EnumSerializer(getKClass(BrosEventType)), internal.StringSerializer];
  };
  BrosReturnEvent$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosReturnEvent$$serializer_instance = null;
  function BrosReturnEvent$$serializer_getInstance() {
    if (BrosReturnEvent$$serializer_instance === null) {
      new BrosReturnEvent$$serializer();
    }
    return BrosReturnEvent$$serializer_instance;
  }
  function BrosReturnEvent_init(seen1, id, type, desc, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosReturnEvent.prototype);
    $this = BrosObject_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.type = BrosEventType$STANDARD_getInstance();
    else
      $this.type = type;
    if ((seen1 & 4) === 0)
      $this.desc = '';
    else
      $this.desc = desc;
    return $this;
  }
  BrosReturnEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosReturnEvent',
    interfaces: [BrosObject]
  };
  function BrosReturnEvent_init_0(init, $this) {
    $this = $this || Object.create(BrosReturnEvent.prototype);
    BrosReturnEvent.call($this);
    init($this);
    return $this;
  }
  function BrosRoleType() {
    BrosRoleType$Companion_getInstance();
    BrosObject.call(this);
    this.name = 'UnnamedRole';
    this.attributes = emptyList();
    this.methods = emptyList();
  }
  BrosRoleType.prototype.maxId = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.id;
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(item.maxId());
    }
    tmp$_1 = (tmp$_0 = max(destination)) != null ? tmp$_0 : L0;
    var $receiver_0 = this.methods;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_5;
    tmp$_5 = $receiver_0.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      destination_0.add_11rb$(item_0.maxId());
    }
    return (tmp$_3 = max(listOf_0([tmp$, tmp$_1, (tmp$_2 = max(destination_0)) != null ? tmp$_2 : L0]))) != null ? tmp$_3 : this.id;
  };
  BrosRoleType.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosRoleType$Companion() {
    BrosRoleType$Companion_instance = this;
  }
  BrosRoleType$Companion.prototype.serializer = function () {
    return BrosRoleType$$serializer_getInstance();
  };
  BrosRoleType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosRoleType$Companion_instance = null;
  function BrosRoleType$Companion_getInstance() {
    if (BrosRoleType$Companion_instance === null) {
      new BrosRoleType$Companion();
    }
    return BrosRoleType$Companion_instance;
  }
  function BrosRoleType$$serializer() {
    this.descriptor_yxgx90$_0 = new SerialClassDescImpl('RoleType', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('attributes', true);
    this.descriptor.addElement_ivxn3r$('methods', true);
    BrosRoleType$$serializer_instance = this;
  }
  Object.defineProperty(BrosRoleType$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_yxgx90$_0;
    }
  });
  BrosRoleType$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'UnnamedRole') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.attributes, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), obj.attributes);
    if (!equals(obj.methods, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), obj.methods);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosRoleType$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PolymorphicListSerializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosRoleType_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosRoleType$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, PolymorphicListSerializer_getInstance(), PolymorphicListSerializer_getInstance()];
  };
  BrosRoleType$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosRoleType$$serializer_instance = null;
  function BrosRoleType$$serializer_getInstance() {
    if (BrosRoleType$$serializer_instance === null) {
      new BrosRoleType$$serializer();
    }
    return BrosRoleType$$serializer_instance;
  }
  function BrosRoleType_init(seen1, id, name, attributes, methods, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosRoleType.prototype);
    $this = BrosObject_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'UnnamedRole';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.attributes = emptyList();
    else
      $this.attributes = attributes;
    if ((seen1 & 8) === 0)
      $this.methods = emptyList();
    else
      $this.methods = methods;
    return $this;
  }
  BrosRoleType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosRoleType',
    interfaces: [BrosObject]
  };
  function BrosRoleType_init_0(init, $this) {
    $this = $this || Object.create(BrosRoleType.prototype);
    BrosRoleType.call($this);
    init($this);
    return $this;
  }
  function BrosScene() {
    BrosScene$Companion_getInstance();
    BrosObjectGroup.call(this);
    this.name = 'UnnamedScene';
    this.attributes = emptyList();
    this.children_7jvj52$_0 = emptySet();
  }
  Object.defineProperty(BrosScene.prototype, 'children', {
    get: function () {
      return this.children_7jvj52$_0;
    },
    set: function (children) {
      this.children_7jvj52$_0 = children;
    }
  });
  BrosScene.prototype.maxId = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this.id;
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(item.maxId());
    }
    tmp$_1 = (tmp$_0 = max(destination)) != null ? tmp$_0 : L0;
    var $receiver_0 = this.children;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_5;
    tmp$_5 = $receiver_0.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      destination_0.add_11rb$(item_0.maxId());
    }
    return (tmp$_3 = max(listOf_0([tmp$, tmp$_1, (tmp$_2 = max(destination_0)) != null ? tmp$_2 : L0]))) != null ? tmp$_3 : this.id;
  };
  BrosScene.prototype.stringify = function () {
    return toString_0(Kotlin.getKClassFromExpression(this).simpleName) + '(' + this.name + ')';
  };
  function BrosScene$Companion() {
    BrosScene$Companion_instance = this;
  }
  BrosScene$Companion.prototype.serializer = function () {
    return BrosScene$$serializer_getInstance();
  };
  BrosScene$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BrosScene$Companion_instance = null;
  function BrosScene$Companion_getInstance() {
    if (BrosScene$Companion_instance === null) {
      new BrosScene$Companion();
    }
    return BrosScene$Companion_instance;
  }
  function BrosScene$$serializer() {
    this.descriptor_yuf4oi$_0 = new SerialClassDescImpl('Scene', this);
    this.descriptor.addElement_ivxn3r$('id', true);
    this.descriptor.addElement_ivxn3r$('name', true);
    this.descriptor.addElement_ivxn3r$('attributes', true);
    this.descriptor.addElement_ivxn3r$('children', true);
    BrosScene$$serializer_instance = this;
  }
  Object.defineProperty(BrosScene$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_yuf4oi$_0;
    }
  });
  BrosScene$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var tmp$;
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    if (!equals(obj.id, (tmp$ = BrosElement$Companion_getInstance().lastId, BrosElement$Companion_getInstance().lastId = tmp$.inc(), tmp$)) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 0))
      output.encodeLongElement_a3zgoj$(this.descriptor, 0, obj.id);
    if (!equals(obj.name, 'UnnamedScene') || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 1))
      output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.name);
    if (!equals(obj.attributes, emptyList()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 2))
      output.encodeSerializableElement_blecud$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), obj.attributes);
    if (!equals(obj.children, emptySet()) || output.shouldEncodeElementDefault_3zr2iy$(this.descriptor, 3))
      output.encodeSerializableElement_blecud$(this.descriptor, 3, PolymorphicSetSerializer_getInstance(), obj.children);
    output.endStructure_qatsm0$(this.descriptor);
  };
  BrosScene$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeLongElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, PolymorphicListSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, PolymorphicListSerializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, PolymorphicSetSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, PolymorphicSetSerializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return BrosScene_init(bitMask0, local0, local1, local2, local3, null);
  };
  BrosScene$$serializer.prototype.childSerializers = function () {
    return [internal.LongSerializer, internal.StringSerializer, PolymorphicListSerializer_getInstance(), PolymorphicSetSerializer_getInstance()];
  };
  BrosScene$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var BrosScene$$serializer_instance = null;
  function BrosScene$$serializer_getInstance() {
    if (BrosScene$$serializer_instance === null) {
      new BrosScene$$serializer();
    }
    return BrosScene$$serializer_instance;
  }
  function BrosScene_init(seen1, id, name, attributes, children, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(BrosScene.prototype);
    $this = BrosObjectGroup_init(seen1, id, $this);
    if ((seen1 & 2) === 0)
      $this.name = 'UnnamedScene';
    else
      $this.name = name;
    if ((seen1 & 4) === 0)
      $this.attributes = emptyList();
    else
      $this.attributes = attributes;
    if ((seen1 & 8) === 0)
      $this.children_7jvj52$_0 = emptySet();
    else
      $this.children_7jvj52$_0 = children;
    return $this;
  }
  BrosScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrosScene',
    interfaces: [BrosObjectGroup]
  };
  function BrosScene_init_0(init, $this) {
    $this = $this || Object.create(BrosScene.prototype);
    BrosScene.call($this);
    init($this);
    return $this;
  }
  var activeModules;
  function Context$match$ObjectLiteral(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
    this.isBpmn = isBpmn;
    this.typeClosure$Bpmn = typeClosure$Bpmn;
    this.isBros = isBros;
    this.typeClosure$Bros = typeClosure$Bros;
    this.closure$matcher = closure$matcher;
    var tmp$;
    this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
  }
  Object.defineProperty(Context$match$ObjectLiteral.prototype, 'name', {
    get: function () {
      return this.name_8pvve9$_0;
    }
  });
  Context$match$ObjectLiteral.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.isBpmn(bpmn.element);
  };
  Context$match$ObjectLiteral.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.isBros(bros.element);
  };
  Context$match$ObjectLiteral.prototype.match_omkx58$ = function (bpmn, bros) {
    var tmp$, tmp$_0;
    return this.closure$matcher(Kotlin.isInstanceOf(ModelTree)(tmp$ = bpmn) ? tmp$ : throwCCE(), Kotlin.isInstanceOf(ModelTree)(tmp$_0 = bros) ? tmp$_0 : throwCCE());
  };
  Context$match$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Matcher]
  };
  function setupRule1$lambda(process, scene) {
    return matchStrings(process.element.name, scene.element.name);
  }
  function setupRule1$lambda_0(process, role) {
    return matchStrings(process.element.name, role.element.name);
  }
  function setupRule1$lambda_1(process, bros) {
    return matchStrings(process.element.name, bros.element.desc);
  }
  function setupRule1$lambda_2(bpmn) {
    var tmp$;
    tmp$ = bpmn.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bros = tmp$.next();
      if (Kotlin.isType(bros.element, BrosRoleType)) {
        return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros, void 0, bros);
      }
      if (Kotlin.isType(bros.element, BrosScene)) {
        return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros, void 0, bros);
      }
      if (Kotlin.isType(bros.element, BrosEvent)) {
        return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros, void 0, bros);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BrosElement for ' + bpmn);
  }
  function setupRule1($receiver) {
    var bpmnName = getKClass(BpmnProcess).simpleName;
    var brosName = getKClass(BrosScene).simpleName;
    var matcherName;
    if (bpmnName != null && brosName != null) {
      matcherName = toString_0(bpmnName) + toString_0(brosName) + 'Matcher';
    }
     else
      matcherName = null;
    var $receiver_0 = $receiver.matcherList;
    var element = new Context$match$ObjectLiteral(Kotlin.isInstanceOf(BpmnProcess), BpmnProcess, Kotlin.isInstanceOf(BrosScene), BrosScene, setupRule1$lambda, null, matcherName);
    $receiver_0.add_11rb$(element);
    var bpmnName_0 = getKClass(BpmnProcess).simpleName;
    var brosName_0 = getKClass(BrosRoleType).simpleName;
    var matcherName_0;
    if (bpmnName_0 != null && brosName_0 != null) {
      matcherName_0 = toString_0(bpmnName_0) + toString_0(brosName_0) + 'Matcher';
    }
     else
      matcherName_0 = null;
    var $receiver_1 = $receiver.matcherList;
    var element_0 = new Context$match$ObjectLiteral(Kotlin.isInstanceOf(BpmnProcess), BpmnProcess, Kotlin.isInstanceOf(BrosRoleType), BrosRoleType, setupRule1$lambda_0, null, matcherName_0);
    $receiver_1.add_11rb$(element_0);
    var bpmnName_1 = getKClass(BpmnProcess).simpleName;
    var brosName_1 = getKClass(BrosEvent).simpleName;
    var matcherName_1;
    if (bpmnName_1 != null && brosName_1 != null) {
      matcherName_1 = toString_0(bpmnName_1) + toString_0(brosName_1) + 'Matcher';
    }
     else
      matcherName_1 = null;
    var $receiver_2 = $receiver.matcherList;
    var element_1 = new Context$match$ObjectLiteral(Kotlin.isInstanceOf(BpmnProcess), BpmnProcess, Kotlin.isInstanceOf(BrosEvent), BrosEvent, setupRule1$lambda_1, null, matcherName_1);
    $receiver_2.add_11rb$(element_1);
    var name = 'Rule 1 - BpmnProcess';
    $receiver.verifyBpmn_f0wvhr$(getKClass(BpmnProcess), name, setupRule1$lambda_2);
  }
  function Context$match$ObjectLiteral_0(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
    this.isBpmn = isBpmn;
    this.typeClosure$Bpmn = typeClosure$Bpmn;
    this.isBros = isBros;
    this.typeClosure$Bros = typeClosure$Bros;
    this.closure$matcher = closure$matcher;
    var tmp$;
    this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
  }
  Object.defineProperty(Context$match$ObjectLiteral_0.prototype, 'name', {
    get: function () {
      return this.name_8pvve9$_0;
    }
  });
  Context$match$ObjectLiteral_0.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.isBpmn(bpmn.element);
  };
  Context$match$ObjectLiteral_0.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.isBros(bros.element);
  };
  Context$match$ObjectLiteral_0.prototype.match_omkx58$ = function (bpmn, bros) {
    var tmp$, tmp$_0;
    return this.closure$matcher(Kotlin.isInstanceOf(ModelTree)(tmp$ = bpmn) ? tmp$ : throwCCE(), Kotlin.isInstanceOf(ModelTree)(tmp$_0 = bros) ? tmp$_0 : throwCCE());
  };
  Context$match$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Matcher]
  };
  function setupRule2$lambda(lane, role) {
    return matchStrings(lane.element.name, role.element.name);
  }
  function setupRule2$lambda_0(bpmn) {
    var tmp$;
    tmp$ = bpmn.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bros = tmp$.next();
      if (Kotlin.isType(bros.element, BrosRoleType)) {
        return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros, void 0, bros);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BrosElement for ' + bpmn);
  }
  function setupRule2($receiver) {
    var bpmnName = getKClass(BpmnLane).simpleName;
    var brosName = getKClass(BrosRoleType).simpleName;
    var matcherName;
    if (bpmnName != null && brosName != null) {
      matcherName = toString_0(bpmnName) + toString_0(brosName) + 'Matcher';
    }
     else
      matcherName = null;
    var $receiver_0 = $receiver.matcherList;
    var element = new Context$match$ObjectLiteral_0(Kotlin.isInstanceOf(BpmnLane), BpmnLane, Kotlin.isInstanceOf(BrosRoleType), BrosRoleType, setupRule2$lambda, null, matcherName);
    $receiver_0.add_11rb$(element);
    var name = 'Rule 2 - BpmnLane';
    $receiver.verifyBpmn_f0wvhr$(getKClass(BpmnLane), name, setupRule2$lambda_0);
  }
  function Context$match$ObjectLiteral_1(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
    this.isBpmn = isBpmn;
    this.typeClosure$Bpmn = typeClosure$Bpmn;
    this.isBros = isBros;
    this.typeClosure$Bros = typeClosure$Bros;
    this.closure$matcher = closure$matcher;
    var tmp$;
    this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
  }
  Object.defineProperty(Context$match$ObjectLiteral_1.prototype, 'name', {
    get: function () {
      return this.name_8pvve9$_0;
    }
  });
  Context$match$ObjectLiteral_1.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.isBpmn(bpmn.element);
  };
  Context$match$ObjectLiteral_1.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.isBros(bros.element);
  };
  Context$match$ObjectLiteral_1.prototype.match_omkx58$ = function (bpmn, bros) {
    var tmp$, tmp$_0;
    return this.closure$matcher(Kotlin.isInstanceOf(ModelTree)(tmp$ = bpmn) ? tmp$ : throwCCE(), Kotlin.isInstanceOf(ModelTree)(tmp$_0 = bros) ? tmp$_0 : throwCCE());
  };
  Context$match$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Matcher]
  };
  function setupRule3$lambda(bpmn, bros) {
    return matchStrings(bpmn.element.name, bros.element.desc);
  }
  function setupRule3$lambda_0(bpmn) {
    var tmp$;
    if (!bpmn.element.terminationEvent)
      return null;
    tmp$ = bpmn.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bros = tmp$.next();
      if (Kotlin.isType(bros.element, BrosReturnEvent)) {
        return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros, void 0, bros);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BrosElement for ' + bpmn);
  }
  function setupRule3($receiver) {
    var name = 'ReturnEventMatcher';
    var bpmnName = getKClass(BpmnEndEvent).simpleName;
    var brosName = getKClass(BrosReturnEvent).simpleName;
    var matcherName;
    if (bpmnName != null && brosName != null) {
      matcherName = toString_0(bpmnName) + toString_0(brosName) + 'Matcher';
    }
     else
      matcherName = null;
    var $receiver_0 = $receiver.matcherList;
    var element = new Context$match$ObjectLiteral_1(Kotlin.isInstanceOf(BpmnEndEvent), BpmnEndEvent, Kotlin.isInstanceOf(BrosReturnEvent), BrosReturnEvent, setupRule3$lambda, name, matcherName);
    $receiver_0.add_11rb$(element);
    var name_0 = 'Rule 3 - BpmnTerminationEvent';
    $receiver.verifyBpmn_f0wvhr$(getKClass(BpmnEndEvent), name_0, setupRule3$lambda_0);
  }
  function Context$match$ObjectLiteral_2(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
    this.isBpmn = isBpmn;
    this.typeClosure$Bpmn = typeClosure$Bpmn;
    this.isBros = isBros;
    this.typeClosure$Bros = typeClosure$Bros;
    this.closure$matcher = closure$matcher;
    var tmp$;
    this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
  }
  Object.defineProperty(Context$match$ObjectLiteral_2.prototype, 'name', {
    get: function () {
      return this.name_8pvve9$_0;
    }
  });
  Context$match$ObjectLiteral_2.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.isBpmn(bpmn.element);
  };
  Context$match$ObjectLiteral_2.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.isBros(bros.element);
  };
  Context$match$ObjectLiteral_2.prototype.match_omkx58$ = function (bpmn, bros) {
    var tmp$, tmp$_0;
    return this.closure$matcher(Kotlin.isInstanceOf(ModelTree)(tmp$ = bpmn) ? tmp$ : throwCCE(), Kotlin.isInstanceOf(ModelTree)(tmp$_0 = bros) ? tmp$_0 : throwCCE());
  };
  Context$match$ObjectLiteral_2.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Matcher]
  };
  function setupRule4$lambda(bpmn, bros) {
    return matchStrings(bpmn.element.name, bros.element.desc);
  }
  function setupRule4$lambda_0(bpmn, bros) {
    var tmp$;
    var $receiver = bpmn.relations;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element.relation, BpmnMessageFlow))
        destination.add_11rb$(element);
    }
    var $receiver_0 = Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (bros.matchingElements.contains_11rb$(element_0.source) || bros.matchingElements.contains_11rb$(element_0.target)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function setupRule4$lambda_1(bpmn, bros) {
    var tmp$;
    var $receiver = bpmn.relations;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element.relation, BpmnMessageFlow))
        destination.add_11rb$(element);
    }
    var $receiver_0 = Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (bros.matchingElements.contains_11rb$(element_0.source) || bros.matchingElements.contains_11rb$(element_0.target)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function setupRule4$lambda$lambda(it) {
    return it.toString();
  }
  function setupRule4$lambda$lambda_0(it) {
    return it.toString();
  }
  function setupRule4$lambda_2(bpmn) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (bpmn.element.terminationEvent)
      return null;
    tmp$ = bpmn.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bros = tmp$.next();
      if (Kotlin.isType(bros.element, BrosEvent)) {
        var tmp$_5;
        var element = bpmn;
        var parents = ArrayList_init_0();
        loop_label: while (element.parent != null) {
          var $this = element;
          var parent_30y1fr$result;
          parent_30y1fr$break: do {
            var tmp$_6, tmp$_7;
            tmp$_6 = $this.parent;
            if (tmp$_6 == null) {
              parent_30y1fr$result = null;
              break parent_30y1fr$break;
            }
            var p = tmp$_6;
            if (Kotlin.isType(p.element, BpmnElement)) {
              parent_30y1fr$result = Kotlin.isType(tmp$_7 = p, ModelTree) ? tmp$_7 : throwCCE();
              break parent_30y1fr$break;
            }
            parent_30y1fr$result = null;
          }
           while (false);
          tmp$_5 = parent_30y1fr$result;
          if (tmp$_5 == null) {
            break loop_label;
          }
          var p_0 = tmp$_5;
          parents.add_11rb$(p_0);
          element = p_0;
        }
        var bpmnParents = parents;
        var tmp$_8;
        var $receiver = bros.relations;
        var destination = ArrayList_init_0();
        var tmp$_9;
        tmp$_9 = $receiver.iterator();
        while (tmp$_9.hasNext()) {
          var element_0 = tmp$_9.next();
          if (Kotlin.isType(element_0.relation, BrosDestroyRelation))
            destination.add_11rb$(element_0);
        }
        var brosDestroy = Kotlin.isType(tmp$_1 = (tmp$_0 = firstOrNull(Kotlin.isType(tmp$_8 = destination, List) ? tmp$_8 : throwCCE())) != null ? tmp$_0.target : null, ModelTree) ? tmp$_1 : null;
        tmp$_2 = bpmnParents.iterator();
        while (tmp$_2.hasNext()) {
          var bpmnParent = tmp$_2.next();
          if (brosDestroy != null && bpmnParent.matchingElements.contains_11rb$(brosDestroy)) {
            return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros + " and they destroy '" + bpmnParent + "'", void 0, bros);
          }
        }
        return Result$Companion_getInstance().error_i63koc$(bpmn.toString() + ' matches ' + bros + ' but they destroy different container (' + joinToString(bpmnParents, void 0, void 0, void 0, void 0, void 0, setupRule4$lambda$lambda) + ' | ' + toString_0(brosDestroy) + ')', void 0, bros);
      }
      if (Kotlin.isType(bros.element, BrosReturnEvent)) {
        var tmp$_10;
        var element_1 = bpmn;
        var parents_0 = ArrayList_init_0();
        loop_label: while (element_1.parent != null) {
          var $this_0 = element_1;
          var parent_30y1fr$result_0;
          parent_30y1fr$break: do {
            var tmp$_11, tmp$_12;
            tmp$_11 = $this_0.parent;
            if (tmp$_11 == null) {
              parent_30y1fr$result_0 = null;
              break parent_30y1fr$break;
            }
            var p_1 = tmp$_11;
            if (Kotlin.isType(p_1.element, BpmnElement)) {
              parent_30y1fr$result_0 = Kotlin.isType(tmp$_12 = p_1, ModelTree) ? tmp$_12 : throwCCE();
              break parent_30y1fr$break;
            }
            parent_30y1fr$result_0 = null;
          }
           while (false);
          tmp$_10 = parent_30y1fr$result_0;
          if (tmp$_10 == null) {
            break loop_label;
          }
          var p_2 = tmp$_10;
          parents_0.add_11rb$(p_2);
          element_1 = p_2;
        }
        var bpmnParents_0 = parents_0;
        var brosParent = Kotlin.isType(tmp$_3 = bros.parent, ModelTree) ? tmp$_3 : null;
        tmp$_4 = bpmnParents_0.iterator();
        while (tmp$_4.hasNext()) {
          var bpmnParent_0 = tmp$_4.next();
          if (brosParent != null && bpmnParent_0.matchingElements.contains_11rb$(brosParent)) {
            return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros + " and they destroy '" + bpmnParent_0 + "'", void 0, bros);
          }
        }
        return Result$Companion_getInstance().error_i63koc$(bpmn.toString() + ' matches ' + bros + ' but they destroy different container (' + joinToString(bpmnParents_0, void 0, void 0, void 0, void 0, void 0, setupRule4$lambda$lambda_0) + ' | ' + toString_0(brosParent) + ')', void 0, bros);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BrosElement for ' + bpmn);
  }
  function setupRule4($receiver) {
    var bpmnName = getKClass(BpmnEvent).simpleName;
    var brosName = getKClass(BrosEvent).simpleName;
    var matcherName;
    if (bpmnName != null && brosName != null) {
      matcherName = toString_0(bpmnName) + toString_0(brosName) + 'Matcher';
    }
     else
      matcherName = null;
    var $receiver_0 = $receiver.matcherList;
    var element = new Context$match$ObjectLiteral_2(Kotlin.isInstanceOf(BpmnEvent), BpmnEvent, Kotlin.isInstanceOf(BrosEvent), BrosEvent, setupRule4$lambda, null, matcherName);
    $receiver_0.add_11rb$(element);
    var bpmnName_0 = getKClass(BpmnEvent).simpleName;
    var brosName_0 = getKClass(BrosEvent).simpleName;
    var matcherName_0;
    if (bpmnName_0 != null && brosName_0 != null) {
      matcherName_0 = toString_0(bpmnName_0) + toString_0(brosName_0) + 'Matcher';
    }
     else
      matcherName_0 = null;
    var $receiver_1 = $receiver.matcherList;
    var element_0 = new Context$match$ObjectLiteral_2(Kotlin.isInstanceOf(BpmnEvent), BpmnEvent, Kotlin.isInstanceOf(BrosEvent), BrosEvent, setupRule4$lambda_0, null, matcherName_0);
    $receiver_1.add_11rb$(element_0);
    var bpmnName_1 = getKClass(BpmnEvent).simpleName;
    var brosName_1 = getKClass(BrosReturnEvent).simpleName;
    var matcherName_1;
    if (bpmnName_1 != null && brosName_1 != null) {
      matcherName_1 = toString_0(bpmnName_1) + toString_0(brosName_1) + 'Matcher';
    }
     else
      matcherName_1 = null;
    var $receiver_2 = $receiver.matcherList;
    var element_1 = new Context$match$ObjectLiteral_2(Kotlin.isInstanceOf(BpmnEvent), BpmnEvent, Kotlin.isInstanceOf(BrosReturnEvent), BrosReturnEvent, setupRule4$lambda_1, null, matcherName_1);
    $receiver_2.add_11rb$(element_1);
    var name = 'Rule 4 - BpmnEndEvent';
    $receiver.verifyBpmn_f0wvhr$(getKClass(BpmnEndEvent), name, setupRule4$lambda_2);
  }
  function setupRule5$lambda$lambda(it) {
    return it.toString();
  }
  function setupRule5$lambda(bpmn) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = bpmn.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bros = tmp$.next();
      if (Kotlin.isType(bros.element, BrosEvent)) {
        var tmp$_3;
        var element = bpmn;
        var parents = ArrayList_init_0();
        loop_label: while (element.parent != null) {
          var $this = element;
          var parent_30y1fr$result;
          parent_30y1fr$break: do {
            var tmp$_4, tmp$_5;
            tmp$_4 = $this.parent;
            if (tmp$_4 == null) {
              parent_30y1fr$result = null;
              break parent_30y1fr$break;
            }
            var p = tmp$_4;
            if (Kotlin.isType(p.element, BpmnElement)) {
              parent_30y1fr$result = Kotlin.isType(tmp$_5 = p, ModelTree) ? tmp$_5 : throwCCE();
              break parent_30y1fr$break;
            }
            parent_30y1fr$result = null;
          }
           while (false);
          tmp$_3 = parent_30y1fr$result;
          if (tmp$_3 == null) {
            break loop_label;
          }
          var p_0 = tmp$_3;
          parents.add_11rb$(p_0);
          element = p_0;
        }
        var bpmnParents = parents;
        var tmp$_6;
        var $receiver = bros.relations;
        var destination = ArrayList_init_0();
        var tmp$_7;
        tmp$_7 = $receiver.iterator();
        while (tmp$_7.hasNext()) {
          var element_0 = tmp$_7.next();
          if (Kotlin.isType(element_0.relation, BrosCreateRelation))
            destination.add_11rb$(element_0);
        }
        var brosCreate = Kotlin.isType(tmp$_1 = (tmp$_0 = firstOrNull(Kotlin.isType(tmp$_6 = destination, List) ? tmp$_6 : throwCCE())) != null ? tmp$_0.source : null, ModelTree) ? tmp$_1 : null;
        tmp$_2 = bpmnParents.iterator();
        while (tmp$_2.hasNext()) {
          var bpmnParent = tmp$_2.next();
          if (brosCreate != null && bpmnParent.matchingElements.contains_11rb$(brosCreate)) {
            return Result$Companion_getInstance().match_i63koc$(bpmn.toString() + ' matches ' + bros + ' and they create ' + bpmnParent, void 0, bros);
          }
        }
        return Result$Companion_getInstance().error_i63koc$(bpmn.toString() + ' matches ' + bros + ' but they create different container (' + joinToString(bpmnParents, void 0, void 0, void 0, void 0, void 0, setupRule5$lambda$lambda) + ' | ' + toString_0(brosCreate) + ')', void 0, bros);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BrosElement for ' + bpmn);
  }
  function setupRule5($receiver) {
    var name = 'Rule 5 - BpmnStartEvent';
    $receiver.verifyBpmn_f0wvhr$(getKClass(BpmnStartEvent), name, setupRule5$lambda);
  }
  function Context$match$ObjectLiteral_3(isBpmn, typeClosure$Bpmn, isBros, typeClosure$Bros, closure$matcher, closure$name, closure$matcherName) {
    this.isBpmn = isBpmn;
    this.typeClosure$Bpmn = typeClosure$Bpmn;
    this.isBros = isBros;
    this.typeClosure$Bros = typeClosure$Bros;
    this.closure$matcher = closure$matcher;
    var tmp$;
    this.name_8pvve9$_0 = (tmp$ = closure$name != null ? closure$name : closure$matcherName) != null ? tmp$ : Kotlin.callGetter(this, Matcher.prototype, 'name');
  }
  Object.defineProperty(Context$match$ObjectLiteral_3.prototype, 'name', {
    get: function () {
      return this.name_8pvve9$_0;
    }
  });
  Context$match$ObjectLiteral_3.prototype.filterBpmn_ay07g6$ = function (bpmn) {
    return this.isBpmn(bpmn.element);
  };
  Context$match$ObjectLiteral_3.prototype.filterBros_yl4c2y$ = function (bros) {
    return this.isBros(bros.element);
  };
  Context$match$ObjectLiteral_3.prototype.match_omkx58$ = function (bpmn, bros) {
    var tmp$, tmp$_0;
    return this.closure$matcher(Kotlin.isInstanceOf(ModelTree)(tmp$ = bpmn) ? tmp$ : throwCCE(), Kotlin.isInstanceOf(ModelTree)(tmp$_0 = bros) ? tmp$_0 : throwCCE());
  };
  Context$match$ObjectLiteral_3.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Matcher]
  };
  function setupRule6$lambda(bpmn, bros) {
    var tmp$;
    var $receiver = bpmn.relations;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element.relation, BpmnSequenceFlow))
        destination.add_11rb$(element);
    }
    var $receiver_0 = Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (!isBlank(element_0.relation.name) && matchStrings(element_0.relation.name, bros.element.desc)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function setupRule6$lambda_0(bpmn, bros) {
    var tmp$;
    var $receiver = bpmn.relations;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element.relation, BpmnSequenceFlow))
        destination.add_11rb$(element);
    }
    var $receiver_0 = Kotlin.isType(tmp$ = destination, List) ? tmp$ : throwCCE();
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (!isBlank(element_0.relation.name) && matchStrings(element_0.relation.name, bros.element.desc)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  }
  function setupRule6$lambda_1(bpmn, bros) {
    return matchStrings(bpmn.element.name, bros.element.desc);
  }
  function setupRule6$lambda_2(bpmn, bros) {
    return matchStrings(bpmn.element.name, bros.element.desc);
  }
  function setupRule6$lambda_3(bros) {
    var tmp$;
    tmp$ = bros.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bpmn = tmp$.next();
      if (Kotlin.isType(bpmn.element, BpmnElement)) {
        return Result$Companion_getInstance().match_i63koc$(bros.toString() + ' matches ' + bpmn, bpmn);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BpmnElement for ' + bros);
  }
  function setupRule6$lambda_4(bros) {
    var tmp$;
    tmp$ = bros.matchingElements.iterator();
    while (tmp$.hasNext()) {
      var bpmn = tmp$.next();
      if (Kotlin.isType(bpmn.element, BpmnElement)) {
        return Result$Companion_getInstance().match_i63koc$(bros.toString() + ' matches ' + bpmn, bpmn);
      }
    }
    return Result$Companion_getInstance().error_i63koc$('Cannot find matching BpmnElement for ' + bros);
  }
  function setupRule6($receiver) {
    var bpmnName = getKClass(BpmnGateway).simpleName;
    var brosName = getKClass(BrosEvent).simpleName;
    var matcherName;
    if (bpmnName != null && brosName != null) {
      matcherName = toString_0(bpmnName) + toString_0(brosName) + 'Matcher';
    }
     else
      matcherName = null;
    var $receiver_0 = $receiver.matcherList;
    var element = new Context$match$ObjectLiteral_3(Kotlin.isInstanceOf(BpmnGateway), BpmnGateway, Kotlin.isInstanceOf(BrosEvent), BrosEvent, setupRule6$lambda, null, matcherName);
    $receiver_0.add_11rb$(element);
    var bpmnName_0 = getKClass(BpmnGateway).simpleName;
    var brosName_0 = getKClass(BrosReturnEvent).simpleName;
    var matcherName_0;
    if (bpmnName_0 != null && brosName_0 != null) {
      matcherName_0 = toString_0(bpmnName_0) + toString_0(brosName_0) + 'Matcher';
    }
     else
      matcherName_0 = null;
    var $receiver_1 = $receiver.matcherList;
    var element_0 = new Context$match$ObjectLiteral_3(Kotlin.isInstanceOf(BpmnGateway), BpmnGateway, Kotlin.isInstanceOf(BrosReturnEvent), BrosReturnEvent, setupRule6$lambda_0, null, matcherName_0);
    $receiver_1.add_11rb$(element_0);
    var bpmnName_1 = getKClass(BpmnTask).simpleName;
    var brosName_1 = getKClass(BrosEvent).simpleName;
    var matcherName_1;
    if (bpmnName_1 != null && brosName_1 != null) {
      matcherName_1 = toString_0(bpmnName_1) + toString_0(brosName_1) + 'Matcher';
    }
     else
      matcherName_1 = null;
    var $receiver_2 = $receiver.matcherList;
    var element_1 = new Context$match$ObjectLiteral_3(Kotlin.isInstanceOf(BpmnTask), BpmnTask, Kotlin.isInstanceOf(BrosEvent), BrosEvent, setupRule6$lambda_1, null, matcherName_1);
    $receiver_2.add_11rb$(element_1);
    var bpmnName_2 = getKClass(BpmnTask).simpleName;
    var brosName_2 = getKClass(BrosReturnEvent).simpleName;
    var matcherName_2;
    if (bpmnName_2 != null && brosName_2 != null) {
      matcherName_2 = toString_0(bpmnName_2) + toString_0(brosName_2) + 'Matcher';
    }
     else
      matcherName_2 = null;
    var $receiver_3 = $receiver.matcherList;
    var element_2 = new Context$match$ObjectLiteral_3(Kotlin.isInstanceOf(BpmnTask), BpmnTask, Kotlin.isInstanceOf(BrosReturnEvent), BrosReturnEvent, setupRule6$lambda_2, null, matcherName_2);
    $receiver_3.add_11rb$(element_2);
    var name = 'Rule 6 - BrosEvent';
    $receiver.verifyBros_dk1dfz$(getKClass(BrosEvent), name, setupRule6$lambda_3);
    var name_0 = 'Rule 6 - BrosReturnEvent';
    $receiver.verifyBros_dk1dfz$(getKClass(BrosReturnEvent), name_0, setupRule6$lambda_4);
  }
  function Application() {
    ViewCollection.call(this);
    this.bpmnFile = new FileTextBox('BPMN', Application$bpmnFile$lambda, Application$bpmnFile$lambda_0);
    this.brosFile = new FileTextBox('BROS', Application$brosFile$lambda, Application$brosFile$lambda_0);
    this.predefinedFile = new FileTextBox('Predefined matching', Application$predefinedFile$lambda, Application$predefinedFile$lambda_0);
    this.validProperty_0 = join(this.brosFile.modelProperty, this.bpmnFile.modelProperty, Application$validProperty$lambda);
    this.valid_x05i0p$_0 = this.validProperty_0;
    this.bpmnFile.modelProperty.onChange.invoke_qlkmfe$(Application_init$lambda(this));
    this.brosFile.modelProperty.onChange.invoke_qlkmfe$(Application_init$lambda_0(this));
    this.predefinedFile.modelProperty.onChange.invoke_qlkmfe$(Application_init$lambda_1(this));
    FeatureState_getInstance().usePredefinedMatchesProperty.onChange.invoke_qlkmfe$(Application_init$lambda_2(this));
    event.GlobalEventBus.subscribe_8bdrlz$(getKClass(UpdatePredefinedMatch), Application_init$lambda_3(this));
    boxView(this, ['start-page'], Application_init$lambda_4(this));
    this.unaryPlus_o71kt9$(new ResultView());
    boxView(this, ['start-drag'], Application_init$lambda_5);
    this.onDrop.invoke_qlkmfe$(Application_init$lambda_6(this));
    this.onDragOver.invoke_qlkmfe$(Application_init$lambda_7(this));
    this.onDragEnter.invoke_qlkmfe$(Application_init$lambda_8(this));
    this.onDragLeave.invoke_qlkmfe$(Application_init$lambda_9(this));
  }
  var Application$valid_metadata = new PropertyMetadata('valid');
  Object.defineProperty(Application.prototype, 'valid_0', {
    get: function () {
      return this.valid_x05i0p$_0.getValue_n5byny$(this, Application$valid_metadata);
    }
  });
  function Application$loadFile$lambda(this$Application) {
    return function (it) {
      if (this$Application.bpmnFile.testTransform_61zpoe$(it))
        this$Application.bpmnFile.content = it;
      else if (this$Application.brosFile.testTransform_61zpoe$(it))
        this$Application.brosFile.content = it;
      else if (this$Application.predefinedFile.testTransform_61zpoe$(it))
        this$Application.predefinedFile.content = it;
      return Unit;
    };
  }
  Application.prototype.loadFile_0 = function (file) {
    load(file, Application$loadFile$lambda(this));
  };
  function Application$enableDemo$lambda$lambda(closure$action) {
    return function (it) {
      closure$action();
      return Unit;
    };
  }
  function Application$enableDemo$lambda(closure$action) {
    return function ($receiver) {
      $receiver.classList.plusAssign_61zpoe$('load-demo');
      $receiver.onClick.invoke_qlkmfe$(Application$enableDemo$lambda$lambda(closure$action));
      return Unit;
    };
  }
  Application.prototype.enableDemo_o14v8n$ = function (action) {
    button(this, 'Load demo', Application$enableDemo$lambda(action));
  };
  Application.prototype.update_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.valid_0) {
      tmp$ = this.bpmnFile.model;
      if (tmp$ == null) {
        return;
      }
      tmp$_0 = this.brosFile.model;
      if (tmp$_0 == null) {
        return;
      }
      verify(tmp$, tmp$_0, (tmp$_1 = this.predefinedFile.model) != null ? tmp$_1 : emptyList());
    }
  };
  function Application$bpmnFile$lambda(content) {
    var tmp$;
    tmp$ = BpmnParser_getInstance().parse_61zpoe$(content);
    if (tmp$ == null) {
      return null;
    }
    var bpmn = tmp$;
    var $receiver = bpmn.allChildren.values;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, BpmnSequenceFlow) || Kotlin.isType(element, BpmnMessageFlow))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var $receiver_0 = new ModelRelation(item, Kotlin.getKClassFromExpression(item));
      'println ' + $receiver_0.relation.stringify();
      tmp$_2.call(destination_0, $receiver_0);
    }
    return generateBpmnTree(destination_0, bpmn);
  }
  function Application$bpmnFile$lambda_0(it) {
    return count(it.asSequence());
  }
  function Application$brosFile$lambda(content) {
    var tmp$;
    tmp$ = BrosParser_getInstance().parse_61zpoe$(content);
    if (tmp$ == null) {
      return null;
    }
    var bros = tmp$;
    var $receiver = bros.connections.connections;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new ModelRelation(item, Kotlin.getKClassFromExpression(item)));
    }
    return generateBrosTree(destination, bros.root);
  }
  function Application$brosFile$lambda_0(it) {
    return count(it.asSequence());
  }
  function Application$predefinedFile$lambda(content) {
    return PredefinedMatch$Companion_getInstance().parse_61zpoe$(content);
  }
  function Application$predefinedFile$lambda_0(it) {
    return it.size;
  }
  function Application$validProperty$lambda(a, b) {
    return a != null && b != null;
  }
  function Application_init$lambda(this$Application) {
    return function (it) {
      this$Application.update_0();
      return Unit;
    };
  }
  function Application_init$lambda_0(this$Application) {
    return function (it) {
      this$Application.update_0();
      return Unit;
    };
  }
  function Application_init$lambda_1(this$Application) {
    return function (it) {
      this$Application.update_0();
      return Unit;
    };
  }
  function Application_init$lambda_2(this$Application) {
    return function (it) {
      this$Application.update_0();
      return Unit;
    };
  }
  function Application_init$lambda_3(this$Application) {
    return function (it) {
      var tmp$, tmp$_0;
      var current = (tmp$ = this$Application.predefinedFile.model) != null ? tmp$ : emptyList();
      if (it.type === UpdatePredefinedMatch$Type$DELETE_getInstance()) {
        tmp$_0 = minus(current, it.match);
      }
       else {
        tmp$_0 = plus_0(current, it.match);
      }
      var new_0 = tmp$_0;
      this$Application.predefinedFile.content = PredefinedMatch$Companion_getInstance().stringify_nh9bv7$(new_0);
      return Unit;
    };
  }
  function Application_init$lambda$lambda$lambda($receiver) {
    h1($receiver, 'BPMN-BROS-Verifier');
    textView($receiver, 'Select bpmn and bros file to start verification');
    return Unit;
  }
  function Application_init$lambda$lambda($receiver) {
    boxView($receiver, [], Application_init$lambda$lambda$lambda);
    return Unit;
  }
  function Application_init$lambda$lambda_0(this$Application) {
    return function ($receiver) {
      $receiver.unaryPlus_o71kt9$(this$Application.bpmnFile);
      $receiver.unaryPlus_o71kt9$(this$Application.brosFile);
      $receiver.unaryPlus_o71kt9$(this$Application.predefinedFile);
      return Unit;
    };
  }
  function Application_init$lambda$lambda$lambda$lambda(it) {
    var tmp$ = ensureNotNull(document.documentElement);
    var top = window.innerHeight;
    var behavior = 'smooth';
    if (behavior === void 0) {
      behavior = 'auto';
    }
    var o = {};
    o['left'] = 0.0;
    o['top'] = top;
    o['behavior'] = behavior;
    tmp$.scrollTo(o);
    return Unit;
  }
  function Application_init$lambda$lambda$lambda_0(this$Application) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('active', this$Application.validProperty_0);
      textView($receiver, 'Scroll down to view result');
      $receiver.onClick.invoke_qlkmfe$(Application_init$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function Application_init$lambda$lambda_1(this$Application) {
    return function ($receiver) {
      boxView($receiver, [], Application_init$lambda$lambda$lambda_0(this$Application));
      return Unit;
    };
  }
  function Application_init$lambda_4(this$Application) {
    return function ($receiver) {
      boxView($receiver, ['start-header'], Application_init$lambda$lambda);
      boxView($receiver, ['start-files'], Application_init$lambda$lambda_0(this$Application));
      boxView($receiver, ['start-verify'], Application_init$lambda$lambda_1(this$Application));
      return Unit;
    };
  }
  function Application_init$lambda_5($receiver) {
    textView($receiver, 'Drag file here');
    return Unit;
  }
  function Application_init$lambda_6(this$Application) {
    return function (ev) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      ev.preventDefault();
      this$Application.classList.remove_61zpoe$('drag');
      tmp$ = ev.dataTransfer;
      if (tmp$ == null) {
        return;
      }
      var dataTransfer = tmp$;
      if (dataTransfer.items.length > 0) {
        tmp$_0 = dataTransfer.items.length;
        for (var i = 0; i < tmp$_0; i++) {
          if (equals((tmp$_1 = dataTransfer.items[i]) != null ? tmp$_1.kind : null, 'file')) {
            var file = ensureNotNull(ensureNotNull(dataTransfer.items[i]).getAsFile());
            this$Application.loadFile_0(file);
          }
        }
      }
       else {
        tmp$_2 = dataTransfer.files.length;
        for (var i_0 = 0; i_0 < tmp$_2; i_0++) {
          var file_0 = ensureNotNull(dataTransfer.files[i_0]);
          this$Application.loadFile_0(file_0);
        }
      }
      return Unit;
    };
  }
  function Application_init$lambda_7(this$Application) {
    return function (it) {
      it.preventDefault();
      this$Application.classList.add_61zpoe$('drag');
      return Unit;
    };
  }
  function Application_init$lambda_8(this$Application) {
    return function (it) {
      this$Application.classList.add_61zpoe$('drag');
      return Unit;
    };
  }
  function Application_init$lambda_9(this$Application) {
    return function (it) {
      this$Application.classList.remove_61zpoe$('drag');
      return Unit;
    };
  }
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: [ViewCollection]
  };
  function load$lambda(closure$onLoad, closure$reader) {
    return function (it) {
      closure$onLoad(closure$reader.result);
      return Unit;
    };
  }
  function load($receiver, onLoad) {
    var reader = new FileReader();
    reader.readAsText($receiver);
    reader.onloadend = load$lambda(onLoad, reader);
  }
  function CopyView() {
    CopyView_instance = this;
    ViewCollection.call(this);
    this.bpmnNameProperty = property('');
    this.bpmnIdProperty = property(null);
    this.brosNameProperty = property('');
    this.brosIdProperty = property(null);
    this.typeProperty_0 = property(PredefinedMatch$Type$MATCH_getInstance());
    iconView(this, MaterialIcon$CLEAR_getInstance(), CopyView_init$lambda(this));
    this.unaryPlus_o71kt9$(new ResultField('BPMN', this.bpmnNameProperty, this.bpmnIdProperty));
    this.unaryPlus_o71kt9$(new ResultField('BROS', this.brosNameProperty, this.brosIdProperty));
    var property_0 = this.typeProperty_0;
    var $receiver_0 = new SelectView(toList_0(PredefinedMatch$Type.values()), property_0.value, CopyView_init$lambda_0);
    $receiver_0.bind_bqrw12$(property_0);
    getCallableRef('append', function ($receiver_0, view_0) {
      return $receiver_0.append_4q8e84$(view_0), Unit;
    }.bind(null, this))($receiver_0);
    button(this, 'Create', CopyView_init$lambda_1(this));
  }
  Object.defineProperty(CopyView.prototype, 'active_0', {
    get: function () {
      return this.classList.get_61zpoe$('active');
    },
    set: function (value) {
      this.classList.set_ivxn3r$('active', value);
    }
  });
  function CopyView_init$lambda$lambda(this$CopyView) {
    return function (it) {
      this$CopyView.active_0 = false;
      return Unit;
    };
  }
  function CopyView_init$lambda(this$CopyView) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(CopyView_init$lambda$lambda(this$CopyView));
      return Unit;
    };
  }
  function CopyView_init$lambda_0(it) {
    return capitalize(it.name.toLowerCase());
  }
  function CopyView_init$lambda$lambda_0(this$CopyView) {
    return function (it) {
      var tmp$, tmp$_0;
      this$CopyView.active_0 = false;
      tmp$ = this$CopyView.bpmnIdProperty.value;
      if (tmp$ == null) {
        return;
      }
      tmp$_0 = this$CopyView.brosIdProperty.value;
      if (tmp$_0 == null) {
        return;
      }
      var match = new PredefinedMatch(tmp$, tmp$_0, this$CopyView.typeProperty_0.value);
      emit(new UpdatePredefinedMatch(match, UpdatePredefinedMatch$Type$ADD_getInstance()));
      return Unit;
    };
  }
  function CopyView_init$lambda$lambda_1(this$CopyView) {
    return function (a, b) {
      if (a != null || b != null) {
        this$CopyView.active_0 = true;
      }
      return a == null || b == null;
    };
  }
  function CopyView_init$lambda_1(this$CopyView) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(CopyView_init$lambda$lambda_0(this$CopyView));
      property_0(getPropertyCallableRef('disabled', 0, function ($receiver) {
        return $receiver.disabled;
      }.bind(null, $receiver.html), function ($receiver, value) {
        $receiver.disabled = value;
      }.bind(null, $receiver.html))).bind_ybyx9l$(join(this$CopyView.bpmnIdProperty, this$CopyView.brosIdProperty, CopyView_init$lambda$lambda_1(this$CopyView)));
      return Unit;
    };
  }
  CopyView.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CopyView',
    interfaces: [ViewCollection]
  };
  var CopyView_instance = null;
  function CopyView_getInstance() {
    if (CopyView_instance === null) {
      new CopyView();
    }
    return CopyView_instance;
  }
  function FeatureState() {
    FeatureState_instance = this;
    this.showErrorsProperty = property(true);
    this.showErrors_587tka$_0 = this.showErrorsProperty;
    this.showWarningsProperty = property(true);
    this.showWarnings_hysoxq$_0 = this.showWarningsProperty;
    this.showInfosProperty = property(true);
    this.showInfos_8vavga$_0 = this.showInfosProperty;
    this.showSuccessfulProperty = property(true);
    this.showSuccessful_7ncvhh$_0 = this.showSuccessfulProperty;
    this.tabProperty = property(0);
    this.tab_arthl9$_0 = this.tabProperty;
    this.usePredefinedMatchesProperty = property(true);
    this.usePredefinedMatches_max47o$_0 = this.usePredefinedMatchesProperty;
    var property_0 = getPropertyCallableRef('showErrors', 0, function ($receiver) {
      return $receiver.showErrors;
    }.bind(null, this), function ($receiver, value) {
      $receiver.showErrors = value;
    }.bind(null, this));
    load_0$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$ = window.localStorage['bbv-' + property_0.callableName];
      if (tmp$ == null) {
        break load_0$break;
      }
      var value = tmp$;
      tmp$_0 = PrimitiveClasses$booleanClass;
      if (equals(tmp$_0, PrimitiveClasses$booleanClass))
        tmp$_1 = toBoolean(value);
      else if (equals(tmp$_0, PrimitiveClasses$intClass))
        tmp$_1 = toIntOrNull(value);
      else
        tmp$_1 = null;
      tmp$_3 = typeof (tmp$_2 = tmp$_1) === 'boolean' ? tmp$_2 : null;
      if (tmp$_3 == null) {
        break load_0$break;
      }
      var h = tmp$_3;
      if (!equals(property_0.get(), h)) {
        property_0.set(h);
      }
    }
     while (false);
    var property_1 = getPropertyCallableRef('showWarnings', 0, function ($receiver) {
      return $receiver.showWarnings;
    }.bind(null, this), function ($receiver, value) {
      $receiver.showWarnings = value;
    }.bind(null, this));
    load_0$break: do {
      var tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
      tmp$_4 = window.localStorage['bbv-' + property_1.callableName];
      if (tmp$_4 == null) {
        break load_0$break;
      }
      var value_0 = tmp$_4;
      tmp$_5 = PrimitiveClasses$booleanClass;
      if (equals(tmp$_5, PrimitiveClasses$booleanClass))
        tmp$_6 = toBoolean(value_0);
      else if (equals(tmp$_5, PrimitiveClasses$intClass))
        tmp$_6 = toIntOrNull(value_0);
      else
        tmp$_6 = null;
      tmp$_8 = typeof (tmp$_7 = tmp$_6) === 'boolean' ? tmp$_7 : null;
      if (tmp$_8 == null) {
        break load_0$break;
      }
      var h_0 = tmp$_8;
      if (!equals(property_1.get(), h_0)) {
        property_1.set(h_0);
      }
    }
     while (false);
    var property_2 = getPropertyCallableRef('showInfos', 0, function ($receiver) {
      return $receiver.showInfos;
    }.bind(null, this), function ($receiver, value) {
      $receiver.showInfos = value;
    }.bind(null, this));
    load_0$break: do {
      var tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      tmp$_9 = window.localStorage['bbv-' + property_2.callableName];
      if (tmp$_9 == null) {
        break load_0$break;
      }
      var value_1 = tmp$_9;
      tmp$_10 = PrimitiveClasses$booleanClass;
      if (equals(tmp$_10, PrimitiveClasses$booleanClass))
        tmp$_11 = toBoolean(value_1);
      else if (equals(tmp$_10, PrimitiveClasses$intClass))
        tmp$_11 = toIntOrNull(value_1);
      else
        tmp$_11 = null;
      tmp$_13 = typeof (tmp$_12 = tmp$_11) === 'boolean' ? tmp$_12 : null;
      if (tmp$_13 == null) {
        break load_0$break;
      }
      var h_1 = tmp$_13;
      if (!equals(property_2.get(), h_1)) {
        property_2.set(h_1);
      }
    }
     while (false);
    var property_3 = getPropertyCallableRef('showSuccessful', 0, function ($receiver) {
      return $receiver.showSuccessful;
    }.bind(null, this), function ($receiver, value) {
      $receiver.showSuccessful = value;
    }.bind(null, this));
    load_0$break: do {
      var tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18;
      tmp$_14 = window.localStorage['bbv-' + property_3.callableName];
      if (tmp$_14 == null) {
        break load_0$break;
      }
      var value_2 = tmp$_14;
      tmp$_15 = PrimitiveClasses$booleanClass;
      if (equals(tmp$_15, PrimitiveClasses$booleanClass))
        tmp$_16 = toBoolean(value_2);
      else if (equals(tmp$_15, PrimitiveClasses$intClass))
        tmp$_16 = toIntOrNull(value_2);
      else
        tmp$_16 = null;
      tmp$_18 = typeof (tmp$_17 = tmp$_16) === 'boolean' ? tmp$_17 : null;
      if (tmp$_18 == null) {
        break load_0$break;
      }
      var h_2 = tmp$_18;
      if (!equals(property_3.get(), h_2)) {
        property_3.set(h_2);
      }
    }
     while (false);
    var property_4 = getPropertyCallableRef('tab', 0, function ($receiver) {
      return $receiver.tab;
    }.bind(null, this), function ($receiver, value) {
      $receiver.tab = value;
    }.bind(null, this));
    load_0$break: do {
      var tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23;
      tmp$_19 = window.localStorage['bbv-' + property_4.callableName];
      if (tmp$_19 == null) {
        break load_0$break;
      }
      var value_3 = tmp$_19;
      tmp$_20 = PrimitiveClasses$intClass;
      if (equals(tmp$_20, PrimitiveClasses$booleanClass))
        tmp$_21 = toBoolean(value_3);
      else if (equals(tmp$_20, PrimitiveClasses$intClass))
        tmp$_21 = toIntOrNull(value_3);
      else
        tmp$_21 = null;
      tmp$_23 = typeof (tmp$_22 = tmp$_21) === 'number' ? tmp$_22 : null;
      if (tmp$_23 == null) {
        break load_0$break;
      }
      var h_3 = tmp$_23;
      if (!equals(property_4.get(), h_3)) {
        property_4.set(h_3);
      }
    }
     while (false);
    this.showErrorsProperty.onChange.invoke_qlkmfe$(FeatureState_init$lambda(this));
    this.showWarningsProperty.onChange.invoke_qlkmfe$(FeatureState_init$lambda_0(this));
    this.showInfosProperty.onChange.invoke_qlkmfe$(FeatureState_init$lambda_1(this));
    this.showSuccessfulProperty.onChange.invoke_qlkmfe$(FeatureState_init$lambda_2(this));
  }
  var FeatureState$showErrors_metadata = new PropertyMetadata('showErrors');
  Object.defineProperty(FeatureState.prototype, 'showErrors', {
    get: function () {
      return this.showErrors_587tka$_0.getValue_n5byny$(this, FeatureState$showErrors_metadata);
    },
    set: function (showErrors) {
      this.showErrors_587tka$_0.setValue_sq4zib$(this, FeatureState$showErrors_metadata, showErrors);
    }
  });
  var FeatureState$showWarnings_metadata = new PropertyMetadata('showWarnings');
  Object.defineProperty(FeatureState.prototype, 'showWarnings', {
    get: function () {
      return this.showWarnings_hysoxq$_0.getValue_n5byny$(this, FeatureState$showWarnings_metadata);
    },
    set: function (showWarnings) {
      this.showWarnings_hysoxq$_0.setValue_sq4zib$(this, FeatureState$showWarnings_metadata, showWarnings);
    }
  });
  var FeatureState$showInfos_metadata = new PropertyMetadata('showInfos');
  Object.defineProperty(FeatureState.prototype, 'showInfos', {
    get: function () {
      return this.showInfos_8vavga$_0.getValue_n5byny$(this, FeatureState$showInfos_metadata);
    },
    set: function (showInfos) {
      this.showInfos_8vavga$_0.setValue_sq4zib$(this, FeatureState$showInfos_metadata, showInfos);
    }
  });
  var FeatureState$showSuccessful_metadata = new PropertyMetadata('showSuccessful');
  Object.defineProperty(FeatureState.prototype, 'showSuccessful', {
    get: function () {
      return this.showSuccessful_7ncvhh$_0.getValue_n5byny$(this, FeatureState$showSuccessful_metadata);
    },
    set: function (showSuccessful) {
      this.showSuccessful_7ncvhh$_0.setValue_sq4zib$(this, FeatureState$showSuccessful_metadata, showSuccessful);
    }
  });
  var FeatureState$tab_metadata = new PropertyMetadata('tab');
  Object.defineProperty(FeatureState.prototype, 'tab', {
    get: function () {
      return this.tab_arthl9$_0.getValue_n5byny$(this, FeatureState$tab_metadata);
    },
    set: function (tab) {
      this.tab_arthl9$_0.setValue_sq4zib$(this, FeatureState$tab_metadata, tab);
    }
  });
  var FeatureState$usePredefinedMatches_metadata = new PropertyMetadata('usePredefinedMatches');
  Object.defineProperty(FeatureState.prototype, 'usePredefinedMatches', {
    get: function () {
      return this.usePredefinedMatches_max47o$_0.getValue_n5byny$(this, FeatureState$usePredefinedMatches_metadata);
    },
    set: function (usePredefinedMatches) {
      this.usePredefinedMatches_max47o$_0.setValue_sq4zib$(this, FeatureState$usePredefinedMatches_metadata, usePredefinedMatches);
    }
  });
  FeatureState.prototype.save_0 = function (property) {
    window.localStorage['bbv-' + property.callableName] = property.get().toString();
  };
  FeatureState.prototype.load_0 = function (T_0, isT, property) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = window.localStorage['bbv-' + property.callableName];
    if (tmp$ == null) {
      return;
    }
    var value = tmp$;
    tmp$_0 = getKClass(T_0);
    if (equals(tmp$_0, PrimitiveClasses$booleanClass))
      tmp$_1 = toBoolean(value);
    else if (equals(tmp$_0, PrimitiveClasses$intClass))
      tmp$_1 = toIntOrNull(value);
    else
      tmp$_1 = null;
    tmp$_3 = isT(tmp$_2 = tmp$_1) ? tmp$_2 : null;
    if (tmp$_3 == null) {
      return;
    }
    var h = tmp$_3;
    if (!equals(property.get(), h)) {
      property.set(h);
    }
  };
  function FeatureState_init$lambda(this$FeatureState) {
    return function (it) {
      this$FeatureState.save_0(getPropertyCallableRef('showErrors', 0, function ($receiver) {
        return $receiver.showErrors;
      }.bind(null, this$FeatureState), function ($receiver, value) {
        $receiver.showErrors = value;
      }.bind(null, this$FeatureState)));
      return Unit;
    };
  }
  function FeatureState_init$lambda_0(this$FeatureState) {
    return function (it) {
      this$FeatureState.save_0(getPropertyCallableRef('showWarnings', 0, function ($receiver) {
        return $receiver.showWarnings;
      }.bind(null, this$FeatureState), function ($receiver, value) {
        $receiver.showWarnings = value;
      }.bind(null, this$FeatureState)));
      return Unit;
    };
  }
  function FeatureState_init$lambda_1(this$FeatureState) {
    return function (it) {
      this$FeatureState.save_0(getPropertyCallableRef('showInfos', 0, function ($receiver) {
        return $receiver.showInfos;
      }.bind(null, this$FeatureState), function ($receiver, value) {
        $receiver.showInfos = value;
      }.bind(null, this$FeatureState)));
      return Unit;
    };
  }
  function FeatureState_init$lambda_2(this$FeatureState) {
    return function (it) {
      this$FeatureState.save_0(getPropertyCallableRef('showSuccessful', 0, function ($receiver) {
        return $receiver.showSuccessful;
      }.bind(null, this$FeatureState), function ($receiver, value) {
        $receiver.showSuccessful = value;
      }.bind(null, this$FeatureState)));
      return Unit;
    };
  }
  FeatureState.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FeatureState',
    interfaces: []
  };
  var FeatureState_instance = null;
  function FeatureState_getInstance() {
    if (FeatureState_instance === null) {
      new FeatureState();
    }
    return FeatureState_instance;
  }
  function FileTextBox(name, transform, count) {
    ViewCollection.call(this);
    this.transform_0 = transform;
    this.count_0 = count;
    this.contentProperty = property('');
    this.content_b910vs$_0 = this.contentProperty;
    this.modelProperty = mapBinding(this.contentProperty, getCallableRef('saveTransform', function ($receiver, string) {
      return $receiver.saveTransform_0(string);
    }.bind(null, this)));
    this.model_29rug$_0 = this.modelProperty;
    this.countTextProperty_0 = mapBinding(this.modelProperty, FileTextBox$countTextProperty$lambda(this));
    textView(this, name);
    var input = inputView_3(this, InputType$FILE_getInstance(), void 0, FileTextBox_init$lambda(this));
    button(this, 'Select file', FileTextBox_init$lambda_0(input));
    boxView(this, ['text-area-box'], FileTextBox_init$lambda_1(this));
    boxView(this, [], FileTextBox_init$lambda_2(this));
  }
  var FileTextBox$content_metadata = new PropertyMetadata('content');
  Object.defineProperty(FileTextBox.prototype, 'content', {
    get: function () {
      return this.content_b910vs$_0.getValue_n5byny$(this, FileTextBox$content_metadata);
    },
    set: function (content) {
      this.content_b910vs$_0.setValue_sq4zib$(this, FileTextBox$content_metadata, content);
    }
  });
  FileTextBox.prototype.saveTransform_0 = function (string) {
    try {
      return this.transform_0(string);
    }
     catch (_) {
      if (Kotlin.isType(_, Exception)) {
        return null;
      }
       else
        throw _;
    }
  };
  var FileTextBox$model_metadata = new PropertyMetadata('model');
  Object.defineProperty(FileTextBox.prototype, 'model', {
    get: function () {
      return this.model_29rug$_0.getValue_n5byny$(this, FileTextBox$model_metadata);
    }
  });
  FileTextBox.prototype.testTransform_61zpoe$ = function (value) {
    return this.saveTransform_0(value) != null;
  };
  function FileTextBox$countTextProperty$lambda(this$FileTextBox) {
    return function (it) {
      var tmp$, tmp$_0;
      var m = this$FileTextBox.model;
      return (tmp$_0 = (tmp$ = m != null ? this$FileTextBox.count_0(m) : null) != null ? tmp$ === 1 ? 'Found 1 element' : 'Found ' + tmp$ + ' elements' : null) != null ? tmp$_0 : isBlank(this$FileTextBox.content) ? '' : 'Given file is not valid';
    };
  }
  function FileTextBox_init$lambda$lambda$lambda(this$FileTextBox) {
    return function (it) {
      this$FileTextBox.content = it;
      return Unit;
    };
  }
  function FileTextBox_init$lambda$lambda(this$, this$FileTextBox) {
    return function (it) {
      var tmp$, tmp$_0;
      var files = ensureNotNull(this$.html.files);
      tmp$ = files.length;
      for (var i = 0; i < tmp$; i++) {
        (tmp$_0 = files[i]) != null ? (load(tmp$_0, FileTextBox_init$lambda$lambda$lambda(this$FileTextBox)), Unit) : null;
      }
      return Unit;
    };
  }
  function FileTextBox_init$lambda(this$FileTextBox) {
    return function ($receiver) {
      $receiver.html.addEventListener('change', EventListener(FileTextBox_init$lambda$lambda($receiver, this$FileTextBox)));
      return Unit;
    };
  }
  function FileTextBox_init$lambda$lambda_0(closure$input) {
    return function (it) {
      closure$input.click();
      return Unit;
    };
  }
  function FileTextBox_init$lambda_0(closure$input) {
    return function ($receiver) {
      $receiver.onClick.invoke_qlkmfe$(FileTextBox_init$lambda$lambda_0(closure$input));
      return Unit;
    };
  }
  function FileTextBox_init$lambda_1(this$FileTextBox) {
    return function ($receiver) {
      textArea_1($receiver, this$FileTextBox.contentProperty);
      return Unit;
    };
  }
  function FileTextBox_init$lambda_2(this$FileTextBox) {
    return function ($receiver) {
      textView_0($receiver, this$FileTextBox.countTextProperty_0);
      return Unit;
    };
  }
  FileTextBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileTextBox',
    interfaces: [ViewCollection]
  };
  function ResultEntry(type, bpmn, bros, module_0, message, onDelete) {
    if (onDelete === void 0)
      onDelete = null;
    ViewCollection.call(this);
    this.type_0 = type;
    this.bpmn_0 = bpmn;
    this.bros_0 = bros;
    this.module_0 = module_0;
    this.message_0 = message;
    this.classList.plusAssign_61zpoe$('entry');
    this.classList.plusAssign_61zpoe$('entry-' + this.type_0.name.toLowerCase());
    boxView(this, [], ResultEntry_init$lambda(this));
    boxView(this, [], ResultEntry_init$lambda_0(this));
    if (onDelete != null) {
      boxView(this, ['delete'], ResultEntry_init$lambda_1(onDelete));
    }
  }
  ResultEntry.prototype.render_5aasrw$ = function (view) {
    view.classList.plusAssign_61zpoe$('contains-' + this.type_0.name.toLowerCase());
    return this;
  };
  function ResultEntry$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ResultEntry$Type_initFields() {
    ResultEntry$Type_initFields = function () {
    };
    ResultEntry$Type$ERROR_instance = new ResultEntry$Type('ERROR', 0);
    ResultEntry$Type$WARN_instance = new ResultEntry$Type('WARN', 1);
    ResultEntry$Type$INFO_instance = new ResultEntry$Type('INFO', 2);
    ResultEntry$Type$ACCEPT_instance = new ResultEntry$Type('ACCEPT', 3);
  }
  var ResultEntry$Type$ERROR_instance;
  function ResultEntry$Type$ERROR_getInstance() {
    ResultEntry$Type_initFields();
    return ResultEntry$Type$ERROR_instance;
  }
  var ResultEntry$Type$WARN_instance;
  function ResultEntry$Type$WARN_getInstance() {
    ResultEntry$Type_initFields();
    return ResultEntry$Type$WARN_instance;
  }
  var ResultEntry$Type$INFO_instance;
  function ResultEntry$Type$INFO_getInstance() {
    ResultEntry$Type_initFields();
    return ResultEntry$Type$INFO_instance;
  }
  var ResultEntry$Type$ACCEPT_instance;
  function ResultEntry$Type$ACCEPT_getInstance() {
    ResultEntry$Type_initFields();
    return ResultEntry$Type$ACCEPT_instance;
  }
  ResultEntry$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function ResultEntry$Type$values() {
    return [ResultEntry$Type$ERROR_getInstance(), ResultEntry$Type$WARN_getInstance(), ResultEntry$Type$INFO_getInstance(), ResultEntry$Type$ACCEPT_getInstance()];
  }
  ResultEntry$Type.values = ResultEntry$Type$values;
  function ResultEntry$Type$valueOf(name) {
    switch (name) {
      case 'ERROR':
        return ResultEntry$Type$ERROR_getInstance();
      case 'WARN':
        return ResultEntry$Type$WARN_getInstance();
      case 'INFO':
        return ResultEntry$Type$INFO_getInstance();
      case 'ACCEPT':
        return ResultEntry$Type$ACCEPT_getInstance();
      default:throwISE('No enum constant io.framed.ui.ResultEntry.Type.' + name);
    }
  }
  ResultEntry$Type.valueOf_61zpoe$ = ResultEntry$Type$valueOf;
  function ResultEntry_init$lambda(this$ResultEntry) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var $receiver_0 = new ResultField('BPMN', observe((tmp$ = this$ResultEntry.bpmn_0) != null ? tmp$.toString() : null), observe((tmp$_1 = (tmp$_0 = this$ResultEntry.bpmn_0) != null ? tmp$_0.element : null) != null ? tmp$_1.id : null));
      $receiver_0.classList.plusAssign_61zpoe$('field-1-1');
      $receiver.unaryPlus_o71kt9$($receiver_0);
      var $receiver_1 = new ResultField('BROS', observe((tmp$_2 = this$ResultEntry.bros_0) != null ? tmp$_2.toString() : null), observe((tmp$_4 = (tmp$_3 = this$ResultEntry.bros_0) != null ? tmp$_3.element : null) != null ? tmp$_4.id : null));
      $receiver_1.classList.plusAssign_61zpoe$('field-1-2');
      $receiver.unaryPlus_o71kt9$($receiver_1);
      var $receiver_2 = new ResultField('Module', observe(this$ResultEntry.module_0));
      $receiver_2.classList.plusAssign_61zpoe$('field-1-3');
      $receiver.unaryPlus_o71kt9$($receiver_2);
      return Unit;
    };
  }
  function ResultEntry_init$lambda_0(this$ResultEntry) {
    return function ($receiver) {
      var $receiver_0 = new ResultField('Message', observe(this$ResultEntry.message_0));
      $receiver_0.classList.plusAssign_61zpoe$('field-2-1');
      $receiver.unaryPlus_o71kt9$($receiver_0);
      return Unit;
    };
  }
  function ResultEntry_init$lambda$lambda(closure$onDelete) {
    return function (it) {
      closure$onDelete();
      return Unit;
    };
  }
  function ResultEntry_init$lambda_1(closure$onDelete) {
    return function ($receiver) {
      iconView($receiver, MaterialIcon$CLEAR_getInstance());
      $receiver.onClick.invoke_qlkmfe$(ResultEntry_init$lambda$lambda(closure$onDelete));
      return Unit;
    };
  }
  ResultEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultEntry',
    interfaces: [ViewCollection]
  };
  function ResultFeature(name, value) {
    ViewCollection.call(this);
    label(this, checkbox_1(this, value), name);
  }
  ResultFeature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultFeature',
    interfaces: [ViewCollection]
  };
  function ResultField(name, value, extra) {
    if (extra === void 0)
      extra = property(null);
    ViewCollection.call(this);
    this.name = name;
    this.value = value;
    this.extra = extra;
    this.isBpmnId_0 = equals_0(this.name, 'bpmn', true);
    this.isBrosId_0 = equals_0(this.name, 'bros', true);
    property_0(getPropertyCallableRef('textContent', 0, function ($receiver) {
      return $receiver.textContent;
    }.bind(null, this.html), function ($receiver, value) {
      $receiver.textContent = value;
    }.bind(null, this.html))).bind_ybyx9l$(mapBinding(this.value, ResultField_init$lambda));
    if (!(this.isBpmnId_0 || this.isBrosId_0)) {
      this.value.onChange.invoke_qlkmfe$(ResultField_init$lambda_0(this));
    }
    var clickable = mapBinding(this.extra, ResultField_init$lambda_1);
    this.dataset.set_jyasbz$('title', this.name);
    this.dataset.bind_mf9wae$('extra', mapBinding(this.extra, ResultField_init$lambda_2));
    this.classList.bind_pwxjbw$('clickable', clickable);
    property_0(getPropertyCallableRef('title', 0, function ($receiver) {
      return $receiver.title;
    }.bind(null, this), function ($receiver, value) {
      $receiver.title = value;
    }.bind(null, this))).bind_ybyx9l$(mapBinding(clickable, ResultField_init$lambda_3));
    this.onClick.invoke_qlkmfe$(ResultField_init$lambda_4(clickable, this));
  }
  function ResultField_init$lambda(it) {
    return it != null ? it.toString() : null;
  }
  function ResultField_init$lambda$lambda(this$ResultField) {
    return function () {
      this$ResultField.classList.plusAssign_61zpoe$('updated');
      return Unit;
    };
  }
  function ResultField_init$lambda_0(this$ResultField) {
    return function (it) {
      this$ResultField.classList.minusAssign_61zpoe$('updated');
      async(10, ResultField_init$lambda$lambda(this$ResultField));
      return Unit;
    };
  }
  function ResultField_init$lambda_1(it) {
    return it != null;
  }
  function ResultField_init$lambda_2(it) {
    return it != null ? 'ID: ' + it.toString() : null;
  }
  function ResultField_init$lambda_3(it) {
    return it ? 'Click to copy ID' : null;
  }
  function ResultField_init$lambda$lambda$lambda(this$ResultField, this$) {
    return function () {
      this$ResultField.remove_4q8e84$(this$);
      return Unit;
    };
  }
  function ResultField_init$lambda$lambda$lambda_0(this$ResultField, this$) {
    return function (it) {
      it.stopPropagation();
      it.preventDefault();
      this$ResultField.remove_4q8e84$(this$);
      return Unit;
    };
  }
  function ResultField_init$lambda$lambda_0(this$ResultField) {
    return function ($receiver) {
      $receiver.classList.plusAssign_61zpoe$('tooltip');
      async(2000, ResultField_init$lambda$lambda$lambda(this$ResultField, $receiver));
      $receiver.onClick.invoke_qlkmfe$(ResultField_init$lambda$lambda$lambda_0(this$ResultField, $receiver));
      return Unit;
    };
  }
  function ResultField_init$lambda_4(closure$clickable, this$ResultField) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      if (closure$clickable.value) {
        var clip = window.navigator.clipboard;
        clip.writeText(toString_0(this$ResultField.value.value));
        if (this$ResultField.isBpmnId_0) {
          CopyView_getInstance().bpmnIdProperty.value = (tmp$ = this$ResultField.extra.value) != null ? tmp$.toString() : null;
          CopyView_getInstance().bpmnNameProperty.value = (tmp$_1 = (tmp$_0 = this$ResultField.value.value) != null ? tmp$_0.toString() : null) != null ? tmp$_1 : '';
        }
         else if (this$ResultField.isBrosId_0) {
          CopyView_getInstance().brosIdProperty.value = (tmp$_3 = (tmp$_2 = this$ResultField.extra.value) != null ? tmp$_2.toString() : null) != null ? toLongOrNull(tmp$_3) : null;
          CopyView_getInstance().brosNameProperty.value = (tmp$_5 = (tmp$_4 = this$ResultField.value.value) != null ? tmp$_4.toString() : null) != null ? tmp$_5 : '';
        }
        textView(this$ResultField, 'Copied ID !', ResultField_init$lambda$lambda_0(this$ResultField));
      }
      return Unit;
    };
  }
  ResultField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultField',
    interfaces: [ViewCollection]
  };
  function ResultStats() {
    ViewCollection.call(this);
    this.data = RenderableData$Companion_getInstance().renderableProperty;
    boxView(this, [], ResultStats_init$lambda(this));
    boxView(this, [], ResultStats_init$lambda_0(this));
    boxView(this, [], ResultStats_init$lambda_1(this));
    boxView(this, [], ResultStats_init$lambda_2);
  }
  function ResultStats$Help(count, matches, doubles) {
    this.count = count;
    this.matches = matches;
    this.doubles = doubles;
  }
  ResultStats$Help.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Help',
    interfaces: []
  };
  ResultStats$Help.prototype.component1 = function () {
    return this.count;
  };
  ResultStats$Help.prototype.component2 = function () {
    return this.matches;
  };
  ResultStats$Help.prototype.component3 = function () {
    return this.doubles;
  };
  ResultStats$Help.prototype.copy_qt1dr2$ = function (count, matches, doubles) {
    return new ResultStats$Help(count === void 0 ? this.count : count, matches === void 0 ? this.matches : matches, doubles === void 0 ? this.doubles : doubles);
  };
  ResultStats$Help.prototype.toString = function () {
    return 'Help(count=' + Kotlin.toString(this.count) + (', matches=' + Kotlin.toString(this.matches)) + (', doubles=' + Kotlin.toString(this.doubles)) + ')';
  };
  ResultStats$Help.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.matches) | 0;
    result = result * 31 + Kotlin.hashCode(this.doubles) | 0;
    return result;
  };
  ResultStats$Help.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.count, other.count) && Kotlin.equals(this.matches, other.matches) && Kotlin.equals(this.doubles, other.doubles)))));
  };
  function ResultStats_init$lambda$lambda(it) {
    var tmp$;
    if (it != null) {
      var $receiver = it.results;
      var count$result;
      count$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          count$result = 0;
          break count$break;
        }
        var count = 0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (element.type === Result$Type$POSITIVE_getInstance())
            checkCountOverflow((count = count + 1 | 0, count));
        }
        count$result = count;
      }
       while (false);
      var count_0 = count$result;
      tmp$ = count_0.toString() + ' of ' + it.results.size;
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function ResultStats_init$lambda$lambda_0(it) {
    var tmp$;
    if (it != null) {
      var $receiver = it.results;
      var count$result;
      count$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          count$result = 0;
          break count$break;
        }
        var count = 0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (element.type === Result$Type$NEGATIVE_getInstance())
            checkCountOverflow((count = count + 1 | 0, count));
        }
        count$result = count;
      }
       while (false);
      var count_0 = count$result;
      tmp$ = count_0.toString() + ' of ' + it.results.size;
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function ResultStats_init$lambda$lambda_1(it) {
    var tmp$;
    if (it != null) {
      var $receiver = it.results;
      var count$result;
      count$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          count$result = 0;
          break count$break;
        }
        var count = 0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (element.type === Result$Type$POSITIVE_getInstance())
            checkCountOverflow((count = count + 1 | 0, count));
        }
        count$result = count;
      }
       while (false);
      var count_0 = count$result;
      tmp$ = ((count_0 * 100 | 0) / it.results.size | 0).toString() + '%';
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function ResultStats_init$lambda$lambda_2(it) {
    var tmp$;
    return (tmp$ = it != null ? it.matchRounds : null) != null ? tmp$.toString() : null;
  }
  function ResultStats_init$lambda(this$ResultStats) {
    return function ($receiver) {
      $receiver.dataset.set_jyasbz$('title', 'Verification stats');
      $receiver.unaryPlus_o71kt9$(new ResultField('Successful checks', mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Errors', mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda_0)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Coverage', mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda_1)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Fixed point matching rounds', mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda_2)));
      return Unit;
    };
  }
  function ResultStats_init$lambda$lambda_3(it) {
    var tmp$;
    if (it != null) {
      var tmp$_0;
      var count = 0;
      var matches = 0;
      var doubles = 0;
      tmp$_0 = it.bpmnTree.asSequence().iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        count = count + 1 | 0;
        if (!element.matchingElements.isEmpty()) {
          matches = matches + 1 | 0;
          if (element.matchingElements.size > 1) {
            doubles = doubles + 1 | 0;
          }
        }
      }
      tmp$ = new ResultStats$Help(count, matches, doubles);
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function ResultStats_init$lambda$lambda_4(it) {
    return it != null ? it.matches.toString() + ' of ' + it.count : null;
  }
  function ResultStats_init$lambda$lambda_5(it) {
    return it != null ? (it.count - it.matches | 0).toString() + ' of ' + it.count : null;
  }
  function ResultStats_init$lambda$lambda_6(it) {
    return it != null ? it.doubles.toString() : null;
  }
  function ResultStats_init$lambda$lambda_7(it) {
    return it != null ? ((it.matches * 100 | 0) / it.count | 0).toString() + '%' : null;
  }
  function ResultStats_init$lambda_0(this$ResultStats) {
    return function ($receiver) {
      $receiver.dataset.set_jyasbz$('title', 'BPMN matching stats');
      var help = mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda_3);
      $receiver.unaryPlus_o71kt9$(new ResultField('Matched elements', mapBinding(help, ResultStats_init$lambda$lambda_4)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Unmatched elements', mapBinding(help, ResultStats_init$lambda$lambda_5)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Multiple matches', mapBinding(help, ResultStats_init$lambda$lambda_6)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Coverage', mapBinding(help, ResultStats_init$lambda$lambda_7)));
      return Unit;
    };
  }
  function ResultStats_init$lambda$lambda_8(it) {
    var tmp$;
    if (it != null) {
      var tmp$_0;
      var count = 0;
      var matches = 0;
      var doubles = 0;
      tmp$_0 = it.brosTree.asSequence().iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        count = count + 1 | 0;
        if (!element.matchingElements.isEmpty()) {
          matches = matches + 1 | 0;
          if (element.matchingElements.size > 1) {
            doubles = doubles + 1 | 0;
          }
        }
      }
      tmp$ = new ResultStats$Help(count, matches, doubles);
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function ResultStats_init$lambda$lambda_9(it) {
    return it != null ? it.matches.toString() + ' of ' + it.count : null;
  }
  function ResultStats_init$lambda$lambda_10(it) {
    return it != null ? (it.count - it.matches | 0).toString() + ' of ' + it.count : null;
  }
  function ResultStats_init$lambda$lambda_11(it) {
    return it != null ? it.doubles.toString() : null;
  }
  function ResultStats_init$lambda$lambda_12(it) {
    return it != null ? ((it.matches * 100 | 0) / it.count | 0).toString() + '%' : null;
  }
  function ResultStats_init$lambda_1(this$ResultStats) {
    return function ($receiver) {
      $receiver.dataset.set_jyasbz$('title', 'BROS matching stats');
      var help = mapBinding(this$ResultStats.data, ResultStats_init$lambda$lambda_8);
      $receiver.unaryPlus_o71kt9$(new ResultField('Matched elements', mapBinding(help, ResultStats_init$lambda$lambda_9)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Unmatched elements', mapBinding(help, ResultStats_init$lambda$lambda_10)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Multiple matches', mapBinding(help, ResultStats_init$lambda$lambda_11)));
      $receiver.unaryPlus_o71kt9$(new ResultField('Coverage', mapBinding(help, ResultStats_init$lambda$lambda_12)));
      return Unit;
    };
  }
  function ResultStats_init$lambda_2($receiver) {
    $receiver.dataset.set_jyasbz$('title', 'Features');
    $receiver.unaryPlus_o71kt9$(new ResultFeature('Use predefined matching', FeatureState_getInstance().usePredefinedMatchesProperty));
    $receiver.unaryPlus_o71kt9$(new ResultFeature('Show errors', FeatureState_getInstance().showErrorsProperty));
    $receiver.unaryPlus_o71kt9$(new ResultFeature('Show warnings', FeatureState_getInstance().showWarningsProperty));
    $receiver.unaryPlus_o71kt9$(new ResultFeature('Show infos', FeatureState_getInstance().showInfosProperty));
    $receiver.unaryPlus_o71kt9$(new ResultFeature('Show successful', FeatureState_getInstance().showSuccessfulProperty));
    return Unit;
  }
  ResultStats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultStats',
    interfaces: [ViewCollection]
  };
  function ResultTab(name, init) {
    this.name = name;
    this.selectedProperty = property(false);
    this.selected_8z9jni$_0 = this.selectedProperty;
    var $receiver = new TextView(this.name);
    $receiver.classList.bind_pwxjbw$('active', this.selectedProperty);
    $receiver.onClick.invoke_qlkmfe$(ResultTab$header$lambda$lambda(this));
    this.header = $receiver;
    var $receiver_0 = new BoxView();
    $receiver_0.classList.bind_pwxjbw$('active', this.selectedProperty);
    init($receiver_0);
    this.content = $receiver_0;
  }
  var ResultTab$selected_metadata = new PropertyMetadata('selected');
  Object.defineProperty(ResultTab.prototype, 'selected', {
    get: function () {
      return this.selected_8z9jni$_0.getValue_n5byny$(this, ResultTab$selected_metadata);
    },
    set: function (selected) {
      this.selected_8z9jni$_0.setValue_sq4zib$(this, ResultTab$selected_metadata, selected);
    }
  });
  function ResultTab$header$lambda$lambda(this$ResultTab) {
    return function (it) {
      this$ResultTab.selected = true;
      return Unit;
    };
  }
  ResultTab.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultTab',
    interfaces: []
  };
  function ResultTabList(init) {
    ViewCollection.call(this);
    this.tabs_0 = emptyList();
    this.classList.plusAssign_61zpoe$('container');
    init(this);
    boxView(this, ['result-container-header'], ResultTabList_init$lambda(this));
    boxView(this, ['result-container-body'], ResultTabList_init$lambda_0(this));
    first(this.tabs_0).selected = true;
  }
  function ResultTabList$tab$lambda(closure$newTab, this$ResultTabList) {
    return function (it) {
      var tmp$;
      if (closure$newTab.selected) {
        tmp$ = this$ResultTabList.tabs_0.iterator();
        while (tmp$.hasNext()) {
          var t = tmp$.next();
          if (!equals(t, closure$newTab)) {
            t.selected = false;
          }
        }
      }
      return Unit;
    };
  }
  ResultTabList.prototype.tab_1wn0x7$ = function (name, init) {
    var newTab = new ResultTab(name, init);
    this.tabs_0 = plus_0(this.tabs_0, newTab);
    newTab.selectedProperty.onChange.invoke_qlkmfe$(ResultTabList$tab$lambda(newTab, this));
  };
  function ResultTabList_init$lambda(this$ResultTabList) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ResultTabList.tabs_0.iterator();
      while (tmp$.hasNext()) {
        var tab = tmp$.next();
        $receiver.unaryPlus_o71kt9$(tab.header);
      }
      return Unit;
    };
  }
  function ResultTabList_init$lambda_0(this$ResultTabList) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$ResultTabList.tabs_0.iterator();
      while (tmp$.hasNext()) {
        var tab = tmp$.next();
        $receiver.unaryPlus_o71kt9$(tab.content);
      }
      return Unit;
    };
  }
  ResultTabList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultTabList',
    interfaces: [ViewCollection]
  };
  function ResultView() {
    ViewCollection.call(this);
    this.data = RenderableData$Companion_getInstance().renderableProperty;
    this.classList.bind_pwxjbw$('hidden', mapBinding(this.data, ResultView_init$lambda));
    this.unaryPlus_o71kt9$(CopyView_getInstance());
    this.unaryPlus_o71kt9$(new ResultStats());
    this.unaryPlus_o71kt9$(new ResultTabList(ResultView_init$lambda_0(this)));
  }
  function ResultView_init$lambda(it) {
    return it == null;
  }
  function ResultView_init$lambda$lambda$lambda$lambda(closure$l) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$l.iterator();
      while (tmp$.hasNext()) {
        var r = tmp$.next();
        $receiver.unaryPlus_o71kt9$((new ResultEntry(transform(r.type), r.bpmn, r.bros, toString_0((tmp$_0 = r.verifier) != null ? tmp$_0.name : null), r.message)).render_5aasrw$($receiver));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda(this$, this$ResultView) {
    return function (it) {
      var tmp$, tmp$_0;
      this$.clear();
      tmp$ = this$ResultView.data.value;
      if (tmp$ == null) {
        return;
      }
      var d = tmp$;
      var $receiver = d.results;
      var destination = LinkedHashMap_init();
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var key = element.verifier;
        var tmp$_0_0;
        var value = destination.get_11rb$(key);
        if (value == null) {
          var answer = ArrayList_init_0();
          destination.put_xwzc9p$(key, answer);
          tmp$_0_0 = answer;
        }
         else {
          tmp$_0_0 = value;
        }
        var list = tmp$_0_0;
        list.add_11rb$(element);
      }
      tmp$_0 = destination.entries.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_2 = tmp$_0.next();
        var l = tmp$_2.value;
        boxView(this$, ['entry-box'], ResultView_init$lambda$lambda$lambda$lambda(l));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda(this$ResultView) {
    return function ($receiver) {
      this$ResultView.data.onChange.invoke_qlkmfe$(ResultView_init$lambda$lambda$lambda($receiver, this$ResultView));
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda$lambda_0(closure$element) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$element.matchingElementsMap.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var r = tmp$_1.key;
        var modules = tmp$_1.value;
        $receiver.unaryPlus_o71kt9$((new ResultEntry(ResultEntry$Type$INFO_getInstance(), closure$element, Kotlin.isType(tmp$_0 = r, ModelTree) ? tmp$_0 : throwCCE(), joinToString(modules, ', '), 'Found name match')).render_5aasrw$($receiver));
      }
      if (closure$element.matchingElements.isEmpty()) {
        $receiver.unaryPlus_o71kt9$((new ResultEntry(ResultEntry$Type$WARN_getInstance(), closure$element, null, null, 'Cannot find matching element')).render_5aasrw$($receiver));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda_0(this$, this$ResultView) {
    return function (it) {
      var tmp$, tmp$_0;
      this$.clear();
      tmp$ = this$ResultView.data.value;
      if (tmp$ == null) {
        return;
      }
      var d = tmp$;
      tmp$_0 = d.bpmnTree.asSequence().iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        boxView(this$, ['entry-box'], ResultView_init$lambda$lambda$lambda$lambda_0(element));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda_0(this$ResultView) {
    return function ($receiver) {
      this$ResultView.data.onChange.invoke_qlkmfe$(ResultView_init$lambda$lambda$lambda_0($receiver, this$ResultView));
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda$lambda_1(closure$element) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$element.matchingElementsMap.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var r = tmp$_1.key;
        var modules = tmp$_1.value;
        $receiver.unaryPlus_o71kt9$((new ResultEntry(ResultEntry$Type$INFO_getInstance(), Kotlin.isType(tmp$_0 = r, ModelTree) ? tmp$_0 : throwCCE(), closure$element, joinToString(modules, ', '), 'Found name match')).render_5aasrw$($receiver));
      }
      if (closure$element.matchingElements.isEmpty()) {
        $receiver.unaryPlus_o71kt9$((new ResultEntry(ResultEntry$Type$WARN_getInstance(), null, closure$element, null, 'Cannot find matching element')).render_5aasrw$($receiver));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda_1(this$, this$ResultView) {
    return function (it) {
      var tmp$, tmp$_0;
      this$.clear();
      tmp$ = this$ResultView.data.value;
      if (tmp$ == null) {
        return;
      }
      var d = tmp$;
      tmp$_0 = d.brosTree.asSequence().iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        boxView(this$, ['entry-box'], ResultView_init$lambda$lambda$lambda$lambda_1(element));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda_1(this$ResultView) {
    return function ($receiver) {
      this$ResultView.data.onChange.invoke_qlkmfe$(ResultView_init$lambda$lambda$lambda_1($receiver, this$ResultView));
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda$lambda$lambda(closure$element) {
    return function () {
      emit(new UpdatePredefinedMatch(closure$element, UpdatePredefinedMatch$Type$DELETE_getInstance()));
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda$lambda_2(closure$element, closure$d) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      switch (closure$element.type.name) {
        case 'MATCH':
          tmp$ = ResultEntry$Type$ACCEPT_getInstance();
          break;
        case 'NOMATCH':
          tmp$ = ResultEntry$Type$ERROR_getInstance();
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var $receiver_0 = closure$d.bpmnTree.asSequence();
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          var closure$element_0 = closure$element;
          if (equals(element.element.id, closure$element_0.bpmn)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      tmp$_0 = firstOrNull$result;
      var $receiver_1 = closure$d.brosTree.asSequence();
      var firstOrNull$result_0;
      firstOrNull$break: do {
        var tmp$_2;
        tmp$_2 = $receiver_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_0 = tmp$_2.next();
          if (equals(element_0.element.id, closure$element.bros)) {
            firstOrNull$result_0 = element_0;
            break firstOrNull$break;
          }
        }
        firstOrNull$result_0 = null;
      }
       while (false);
      $receiver.unaryPlus_o71kt9$((new ResultEntry(tmp$, tmp$_0, firstOrNull$result_0, 'PredefinedMatcher', 'Add rule by manuel matching', ResultView_init$lambda$lambda$lambda$lambda$lambda(closure$element))).render_5aasrw$($receiver));
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda$lambda_2(this$, this$ResultView) {
    return function (it) {
      var tmp$, tmp$_0;
      this$.clear();
      tmp$ = this$ResultView.data.value;
      if (tmp$ == null) {
        return;
      }
      var d = tmp$;
      tmp$_0 = d.predefinedMatches.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        boxView(this$, ['entry-box'], ResultView_init$lambda$lambda$lambda$lambda_2(element, d));
      }
      return Unit;
    };
  }
  function ResultView_init$lambda$lambda_2(this$ResultView) {
    return function ($receiver) {
      this$ResultView.data.onChange.invoke_qlkmfe$(ResultView_init$lambda$lambda$lambda_2($receiver, this$ResultView));
      return Unit;
    };
  }
  function ResultView_init$lambda_0(this$ResultView) {
    return function ($receiver) {
      $receiver.classList.bind_pwxjbw$('hide-accept', not(FeatureState_getInstance().showSuccessfulProperty));
      $receiver.classList.bind_pwxjbw$('hide-error', not(FeatureState_getInstance().showErrorsProperty));
      $receiver.classList.bind_pwxjbw$('hide-warn', not(FeatureState_getInstance().showWarningsProperty));
      $receiver.classList.bind_pwxjbw$('hide-info', not(FeatureState_getInstance().showInfosProperty));
      $receiver.tab_1wn0x7$('Verify result', ResultView_init$lambda$lambda(this$ResultView));
      $receiver.tab_1wn0x7$('BPMN matching', ResultView_init$lambda$lambda_0(this$ResultView));
      $receiver.tab_1wn0x7$('BROS matching', ResultView_init$lambda$lambda_1(this$ResultView));
      $receiver.tab_1wn0x7$('Predefined matching', ResultView_init$lambda$lambda_2(this$ResultView));
      return Unit;
    };
  }
  ResultView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultView',
    interfaces: [ViewCollection]
  };
  function UpdatePredefinedMatch(match, type) {
    this.match = match;
    this.type = type;
  }
  function UpdatePredefinedMatch$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UpdatePredefinedMatch$Type_initFields() {
    UpdatePredefinedMatch$Type_initFields = function () {
    };
    UpdatePredefinedMatch$Type$ADD_instance = new UpdatePredefinedMatch$Type('ADD', 0);
    UpdatePredefinedMatch$Type$DELETE_instance = new UpdatePredefinedMatch$Type('DELETE', 1);
  }
  var UpdatePredefinedMatch$Type$ADD_instance;
  function UpdatePredefinedMatch$Type$ADD_getInstance() {
    UpdatePredefinedMatch$Type_initFields();
    return UpdatePredefinedMatch$Type$ADD_instance;
  }
  var UpdatePredefinedMatch$Type$DELETE_instance;
  function UpdatePredefinedMatch$Type$DELETE_getInstance() {
    UpdatePredefinedMatch$Type_initFields();
    return UpdatePredefinedMatch$Type$DELETE_instance;
  }
  UpdatePredefinedMatch$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function UpdatePredefinedMatch$Type$values() {
    return [UpdatePredefinedMatch$Type$ADD_getInstance(), UpdatePredefinedMatch$Type$DELETE_getInstance()];
  }
  UpdatePredefinedMatch$Type.values = UpdatePredefinedMatch$Type$values;
  function UpdatePredefinedMatch$Type$valueOf(name) {
    switch (name) {
      case 'ADD':
        return UpdatePredefinedMatch$Type$ADD_getInstance();
      case 'DELETE':
        return UpdatePredefinedMatch$Type$DELETE_getInstance();
      default:throwISE('No enum constant io.framed.ui.UpdatePredefinedMatch.Type.' + name);
    }
  }
  UpdatePredefinedMatch$Type.valueOf_61zpoe$ = UpdatePredefinedMatch$Type$valueOf;
  UpdatePredefinedMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdatePredefinedMatch',
    interfaces: []
  };
  function transform($receiver) {
    if (equals($receiver, Result$Type$POSITIVE_getInstance()))
      return ResultEntry$Type$ACCEPT_getInstance();
    else if (equals($receiver, Result$Type$NEGATIVE_getInstance()))
      return ResultEntry$Type$ERROR_getInstance();
    else
      return ResultEntry$Type$WARN_getInstance();
  }
  function generateBpmnTree(connections, element) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(element, BpmnModel)) {
      var $receiver = element.content;
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!Kotlin.isType(element_0, BpmnSequenceFlow) && !Kotlin.isType(element_0, BpmnMessageFlow))
          destination.add_11rb$(element_0);
      }
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination_0.add_11rb$(generateBpmnTree(connections, item));
      }
      tmp$ = destination_0;
    }
     else if (Kotlin.isType(element, BpmnProcess)) {
      var $receiver_0 = element.content;
      var destination_1 = ArrayList_init_0();
      var tmp$_4;
      tmp$_4 = $receiver_0.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        if (!Kotlin.isType(element_1, BpmnSequenceFlow) && !Kotlin.isType(element_1, BpmnMessageFlow))
          destination_1.add_11rb$(element_1);
      }
      var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
      var tmp$_5;
      tmp$_5 = destination_1.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        destination_2.add_11rb$(generateBpmnTree(connections, item_0));
      }
      tmp$ = destination_2;
    }
     else if (Kotlin.isType(element, BpmnLaneSet)) {
      var $receiver_1 = element.content;
      var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_6;
      tmp$_6 = $receiver_1.iterator();
      while (tmp$_6.hasNext()) {
        var item_1 = tmp$_6.next();
        destination_3.add_11rb$(generateBpmnTree(connections, item_1));
      }
      tmp$ = destination_3;
    }
     else if (Kotlin.isType(element, BpmnLane)) {
      var $receiver_2 = element.content;
      var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
      var tmp$_7;
      tmp$_7 = $receiver_2.iterator();
      while (tmp$_7.hasNext()) {
        var item_2 = tmp$_7.next();
        destination_4.add_11rb$(generateBpmnTree(connections, item_2));
      }
      tmp$ = destination_4;
    }
     else
      tmp$ = emptyList();
    var children = tmp$;
    var tree = new ModelTree(null, element, Kotlin.getKClassFromExpression(element), children);
    var tmp$_8;
    tmp$_8 = tree.children.iterator();
    while (tmp$_8.hasNext()) {
      var element_2 = tmp$_8.next();
      element_2.parent = tree;
    }
    tmp$_0 = connections.iterator();
    while (tmp$_0.hasNext()) {
      var connection = tmp$_0.next();
      tmp$_1 = connection.relation;
      if (Kotlin.isType(tmp$_1, BpmnMessageFlow)) {
        if (equals(element.id, connection.relation.sourceRef)) {
          tree.relations.add_11rb$(connection);
          connection.target = tree;
        }
         else if (equals(element.id, connection.relation.targetRef)) {
          tree.relations.add_11rb$(connection);
          connection.source = tree;
        }
      }
       else if (Kotlin.isType(tmp$_1, BpmnSequenceFlow))
        if (equals(element.id, connection.relation.sourceRef)) {
          tree.relations.add_11rb$(connection);
          connection.target = tree;
        }
         else if (equals(element.id, connection.relation.targetRef)) {
          tree.relations.add_11rb$(connection);
          connection.source = tree;
        }
    }
    return tree;
  }
  function generateBrosTree(connections, element) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(element, BrosObjectGroup)) {
      var $receiver = element.children;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(generateBrosTree(connections, item));
      }
      tmp$ = destination;
    }
     else
      tmp$ = emptyList();
    var children = tmp$;
    var tree = new ModelTree(null, element, Kotlin.getKClassFromExpression(element), children);
    var tmp$_2;
    tmp$_2 = tree.children.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      element_0.parent = tree;
    }
    tmp$_0 = connections.iterator();
    while (tmp$_0.hasNext()) {
      var connection = tmp$_0.next();
      if (equals(element.id, connection.relation.sourceId)) {
        tree.relations.add_11rb$(connection);
        connection.target = tree;
      }
       else if (equals(element.id, connection.relation.targetId)) {
        tree.relations.add_11rb$(connection);
        connection.source = tree;
      }
    }
    return tree;
  }
  function RenderableData(bpmnTree, brosTree, predefinedMatches, results, matchRounds) {
    RenderableData$Companion_getInstance();
    if (matchRounds === void 0)
      matchRounds = null;
    this.bpmnTree = bpmnTree;
    this.brosTree = brosTree;
    this.predefinedMatches = predefinedMatches;
    this.results = results;
    this.matchRounds = matchRounds;
    RenderableData$Companion_getInstance().renderableProperty.value = this;
  }
  function RenderableData$Companion() {
    RenderableData$Companion_instance = this;
    this.renderableProperty = property(null);
    this.renderableData_fg0r6v$_0 = this.renderableProperty;
  }
  var RenderableData$Companion$renderableData_metadata = new PropertyMetadata('renderableData');
  Object.defineProperty(RenderableData$Companion.prototype, 'renderableData', {
    get: function () {
      return this.renderableData_fg0r6v$_0.getValue_n5byny$(this, RenderableData$Companion$renderableData_metadata);
    },
    set: function (renderableData) {
      this.renderableData_fg0r6v$_0.setValue_sq4zib$(this, RenderableData$Companion$renderableData_metadata, renderableData);
    }
  });
  RenderableData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RenderableData$Companion_instance = null;
  function RenderableData$Companion_getInstance() {
    if (RenderableData$Companion_instance === null) {
      new RenderableData$Companion();
    }
    return RenderableData$Companion_instance;
  }
  RenderableData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderableData',
    interfaces: []
  };
  RenderableData.prototype.component1 = function () {
    return this.bpmnTree;
  };
  RenderableData.prototype.component2 = function () {
    return this.brosTree;
  };
  RenderableData.prototype.component3 = function () {
    return this.predefinedMatches;
  };
  RenderableData.prototype.component4 = function () {
    return this.results;
  };
  RenderableData.prototype.component5 = function () {
    return this.matchRounds;
  };
  RenderableData.prototype.copy_1uxyi5$ = function (bpmnTree, brosTree, predefinedMatches, results, matchRounds) {
    return new RenderableData(bpmnTree === void 0 ? this.bpmnTree : bpmnTree, brosTree === void 0 ? this.brosTree : brosTree, predefinedMatches === void 0 ? this.predefinedMatches : predefinedMatches, results === void 0 ? this.results : results, matchRounds === void 0 ? this.matchRounds : matchRounds);
  };
  RenderableData.prototype.toString = function () {
    return 'RenderableData(bpmnTree=' + Kotlin.toString(this.bpmnTree) + (', brosTree=' + Kotlin.toString(this.brosTree)) + (', predefinedMatches=' + Kotlin.toString(this.predefinedMatches)) + (', results=' + Kotlin.toString(this.results)) + (', matchRounds=' + Kotlin.toString(this.matchRounds)) + ')';
  };
  RenderableData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bpmnTree) | 0;
    result = result * 31 + Kotlin.hashCode(this.brosTree) | 0;
    result = result * 31 + Kotlin.hashCode(this.predefinedMatches) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchRounds) | 0;
    return result;
  };
  RenderableData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bpmnTree, other.bpmnTree) && Kotlin.equals(this.brosTree, other.brosTree) && Kotlin.equals(this.predefinedMatches, other.predefinedMatches) && Kotlin.equals(this.results, other.results) && Kotlin.equals(this.matchRounds, other.matchRounds)))));
  };
  function verify(bpmnTree, brosTree, predefinedMatches) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = bpmnTree.asSequence().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.matchingElementsMap.clear();
    }
    tmp$_0 = brosTree.asSequence().iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.matchingElementsMap.clear();
    }
    var useMatches = FeatureState_getInstance().usePredefinedMatches ? predefinedMatches : emptyList();
    var context = new Context();
    tmp$_1 = activeModules.iterator();
    while (tmp$_1.hasNext()) {
      var module_0 = tmp$_1.next();
      module_0(context);
    }
    var matcher = new TreeMatcher(bpmnTree, brosTree);
    tmp$_2 = context.matcherList.iterator();
    while (tmp$_2.hasNext()) {
      var m = tmp$_2.next();
      matcher.register_psc61j$(m);
    }
    var matchRounds = matcher.match_nh9bv7$(useMatches);
    var verifier = new TreeVerifier(bpmnTree, brosTree);
    tmp$_3 = context.verifierList.iterator();
    while (tmp$_3.hasNext()) {
      var v = tmp$_3.next();
      verifier.register_5z8r3$(v);
    }
    var results = verifier.verify();
    new RenderableData(bpmnTree, brosTree, predefinedMatches, results, matchRounds);
  }
  var package$de = _.de || (_.de = {});
  var package$westermann = package$de.westermann || (package$de.westermann = {});
  var package$kwebview = package$westermann.kwebview || (package$westermann.kwebview = {});
  package$kwebview.AttributeDelegate = AttributeDelegate;
  package$kwebview.ClassDelegate = ClassDelegate;
  package$kwebview.ClassList = ClassList;
  package$kwebview.DataSet = DataSet;
  Object.defineProperty(Dimension, 'Companion', {
    get: Dimension$Companion_getInstance
  });
  package$kwebview.Dimension_init_syd3qs$ = Dimension_init;
  package$kwebview.Dimension = Dimension;
  package$kwebview.KWebViewDsl = KWebViewDsl;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  package$kwebview.Point_init_vux9f0$ = Point_init;
  package$kwebview.Point = Point;
  var package$robots = package$westermann.robots || (package$westermann.robots = {});
  var package$website = package$robots.website || (package$robots.website = {});
  var package$toolkit = package$website.toolkit || (package$website.toolkit = {});
  var package$view = package$toolkit.view || (package$toolkit.view = {});
  package$view.get_rf3a1y$ = get_0;
  package$view.all_q9262s$ = all;
  package$view.find_rf3a1y$ = find;
  Object.defineProperty(View, 'Companion', {
    get: View$Companion_getInstance
  });
  $$importsForInline$$['bpmn-bros-verifier'] = _;
  package$kwebview.View = View;
  package$kwebview.iterator_sg7yuv$ = iterator;
  package$kwebview.ViewCollection = ViewCollection;
  Object.defineProperty(ViewForLabel, 'Companion', {
    get: ViewForLabel$Companion_getInstance
  });
  package$kwebview.ViewForLabel = ViewForLabel;
  var package$components = package$kwebview.components || (package$kwebview.components = {});
  Object.defineProperty(package$components, 'Body', {
    get: Body_getInstance
  });
  package$components.init_p9xgkf$ = init;
  package$components.BoxView = BoxView;
  package$components.boxView_k4tpi$ = boxView;
  Object.defineProperty(Button, 'Companion', {
    get: Button$Companion_getInstance
  });
  package$components.Button_init_61zpoe$ = Button_init;
  package$components.Button = Button;
  package$components.button_vm1z7l$ = button;
  package$components.button_pvvnso$ = button_0;
  package$components.button_qup9xv$ = button_1;
  package$components.Checkbox = Checkbox;
  package$components.checkbox_md4zoa$ = checkbox;
  package$components.checkbox_n90il3$ = checkbox_0;
  package$components.checkbox_lhi90n$ = checkbox_1;
  package$components.FilterList = FilterList;
  package$components.Filter = Filter;
  package$components.StringFilter = StringFilter;
  package$components.StaticStringFilter = StaticStringFilter;
  package$components.DynamicStringFilter = DynamicStringFilter;
  package$components.filterList_kguhrl$ = filterList;
  Object.defineProperty(Heading$Type, 'H1', {
    get: Heading$Type$H1_getInstance
  });
  Object.defineProperty(Heading$Type, 'H2', {
    get: Heading$Type$H2_getInstance
  });
  Object.defineProperty(Heading$Type, 'H3', {
    get: Heading$Type$H3_getInstance
  });
  Object.defineProperty(Heading$Type, 'H4', {
    get: Heading$Type$H4_getInstance
  });
  Object.defineProperty(Heading$Type, 'H5', {
    get: Heading$Type$H5_getInstance
  });
  Object.defineProperty(Heading$Type, 'H6', {
    get: Heading$Type$H6_getInstance
  });
  Heading.Type = Heading$Type;
  package$components.Heading = Heading;
  package$components.h1_wzoj4d$ = h1;
  package$components.h1_b7eq7w$ = h1_0;
  package$components.h2_wzoj4d$ = h2;
  package$components.h2_b7eq7w$ = h2_0;
  package$components.h3_wzoj4d$ = h3;
  package$components.h3_b7eq7w$ = h3_0;
  package$components.h4_wzoj4d$ = h4;
  package$components.h4_b7eq7w$ = h4_0;
  package$components.h5_wzoj4d$ = h5;
  package$components.h5_b7eq7w$ = h5_0;
  package$components.h6_wzoj4d$ = h6;
  package$components.h6_b7eq7w$ = h6_0;
  package$components.Icon = Icon;
  package$components.IconView = IconView;
  package$components.iconView_28uyuy$ = iconView;
  package$components.iconView_3sarjt$ = iconView_0;
  package$components.ImageView = ImageView;
  package$components.imageView_7vdf7x$ = imageView;
  package$components.imageView_4g1v94$ = imageView_0;
  Object.defineProperty(InputView, 'Companion', {
    get: InputView$Companion_getInstance
  });
  package$components.InputView = InputView;
  Object.defineProperty(InputType, 'TEXT', {
    get: InputType$TEXT_getInstance
  });
  Object.defineProperty(InputType, 'NUMBER', {
    get: InputType$NUMBER_getInstance
  });
  Object.defineProperty(InputType, 'PASSWORD', {
    get: InputType$PASSWORD_getInstance
  });
  Object.defineProperty(InputType, 'SEARCH', {
    get: InputType$SEARCH_getInstance
  });
  Object.defineProperty(InputType, 'FILE', {
    get: InputType$FILE_getInstance
  });
  Object.defineProperty(InputType, 'Companion', {
    get: InputType$Companion_getInstance
  });
  package$components.InputType = InputType;
  package$components.inputView_u9he6r$ = inputView;
  package$components.inputView_7utk0m$ = inputView_0;
  package$components.inputView_kx6us8$ = inputView_1;
  package$components.inputView_1c163j$ = inputView_2;
  package$components.inputView_wm9n32$ = inputView_3;
  package$components.inputView_j4tuhz$ = inputView_4;
  package$components.inputView_hbksx5$ = inputView_5;
  package$components.inputView_s8feog$ = inputView_6;
  package$components.Label = Label;
  package$components.label_byaqjq$ = label;
  package$components.label_pm7ln1$ = label_0;
  Object.defineProperty(Link, 'Companion', {
    get: Link$Companion_getInstance
  });
  package$components.Link_init_evvgj3$ = Link_init;
  package$components.Link = Link;
  package$components.link_d3ifn6$ = link;
  Object.defineProperty(ListView, 'Companion', {
    get: ListView$Companion_getInstance
  });
  package$components.ListView = ListView;
  package$components.listView_yccsjy$ = listView;
  Object.defineProperty(MaterialIcon, 'ROTATION_3D', {
    get: MaterialIcon$ROTATION_3D_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AC_UNIT', {
    get: MaterialIcon$AC_UNIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_ALARM', {
    get: MaterialIcon$ACCESS_ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_ALARMS', {
    get: MaterialIcon$ACCESS_ALARMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESS_TIME', {
    get: MaterialIcon$ACCESS_TIME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESSIBILITY', {
    get: MaterialIcon$ACCESSIBILITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCESSIBLE', {
    get: MaterialIcon$ACCESSIBLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BALANCE', {
    get: MaterialIcon$ACCOUNT_BALANCE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BALANCE_WALLET', {
    get: MaterialIcon$ACCOUNT_BALANCE_WALLET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_BOX', {
    get: MaterialIcon$ACCOUNT_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ACCOUNT_CIRCLE', {
    get: MaterialIcon$ACCOUNT_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADB', {
    get: MaterialIcon$ADB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD', {
    get: MaterialIcon$ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_A_PHOTO', {
    get: MaterialIcon$ADD_A_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_ALARM', {
    get: MaterialIcon$ADD_ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_ALERT', {
    get: MaterialIcon$ADD_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_BOX', {
    get: MaterialIcon$ADD_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_CIRCLE', {
    get: MaterialIcon$ADD_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_CIRCLE_OUTLINE', {
    get: MaterialIcon$ADD_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_LOCATION', {
    get: MaterialIcon$ADD_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_SHOPPING_CART', {
    get: MaterialIcon$ADD_SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_TO_PHOTOS', {
    get: MaterialIcon$ADD_TO_PHOTOS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADD_TO_QUEUE', {
    get: MaterialIcon$ADD_TO_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ADJUST', {
    get: MaterialIcon$ADJUST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_FLAT', {
    get: MaterialIcon$AIRLINE_SEAT_FLAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_FLAT_ANGLED', {
    get: MaterialIcon$AIRLINE_SEAT_FLAT_ANGLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_INDIVIDUAL_SUITE', {
    get: MaterialIcon$AIRLINE_SEAT_INDIVIDUAL_SUITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_EXTRA', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_EXTRA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_NORMAL', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_NORMAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_LEGROOM_REDUCED', {
    get: MaterialIcon$AIRLINE_SEAT_LEGROOM_REDUCED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_RECLINE_EXTRA', {
    get: MaterialIcon$AIRLINE_SEAT_RECLINE_EXTRA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRLINE_SEAT_RECLINE_NORMAL', {
    get: MaterialIcon$AIRLINE_SEAT_RECLINE_NORMAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLANEMODE_ACTIVE', {
    get: MaterialIcon$AIRPLANEMODE_ACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLANEMODE_INACTIVE', {
    get: MaterialIcon$AIRPLANEMODE_INACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPLAY', {
    get: MaterialIcon$AIRPLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AIRPORT_SHUTTLE', {
    get: MaterialIcon$AIRPORT_SHUTTLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM', {
    get: MaterialIcon$ALARM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_ADD', {
    get: MaterialIcon$ALARM_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_OFF', {
    get: MaterialIcon$ALARM_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALARM_ON', {
    get: MaterialIcon$ALARM_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALBUM', {
    get: MaterialIcon$ALBUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALL_INCLUSIVE', {
    get: MaterialIcon$ALL_INCLUSIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ALL_OUT', {
    get: MaterialIcon$ALL_OUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ANDROID', {
    get: MaterialIcon$ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ANNOUNCEMENT', {
    get: MaterialIcon$ANNOUNCEMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'APPS', {
    get: MaterialIcon$APPS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARCHIVE', {
    get: MaterialIcon$ARCHIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_BACK', {
    get: MaterialIcon$ARROW_BACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DOWNWARD', {
    get: MaterialIcon$ARROW_DOWNWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_DOWN', {
    get: MaterialIcon$ARROW_DROP_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_DOWN_CIRCLE', {
    get: MaterialIcon$ARROW_DROP_DOWN_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_DROP_UP', {
    get: MaterialIcon$ARROW_DROP_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_FORWARD', {
    get: MaterialIcon$ARROW_FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ARROW_UPWARD', {
    get: MaterialIcon$ARROW_UPWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ART_TRACK', {
    get: MaterialIcon$ART_TRACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASPECT_RATIO', {
    get: MaterialIcon$ASPECT_RATIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSESSMENT', {
    get: MaterialIcon$ASSESSMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT', {
    get: MaterialIcon$ASSIGNMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_IND', {
    get: MaterialIcon$ASSIGNMENT_IND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_LATE', {
    get: MaterialIcon$ASSIGNMENT_LATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_RETURN', {
    get: MaterialIcon$ASSIGNMENT_RETURN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_RETURNED', {
    get: MaterialIcon$ASSIGNMENT_RETURNED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSIGNMENT_TURNED_IN', {
    get: MaterialIcon$ASSIGNMENT_TURNED_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSISTANT', {
    get: MaterialIcon$ASSISTANT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ASSISTANT_PHOTO', {
    get: MaterialIcon$ASSISTANT_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACH_FILE', {
    get: MaterialIcon$ATTACH_FILE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACH_MONEY', {
    get: MaterialIcon$ATTACH_MONEY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ATTACHMENT', {
    get: MaterialIcon$ATTACHMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AUDIOTRACK', {
    get: MaterialIcon$AUDIOTRACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AUTORENEW', {
    get: MaterialIcon$AUTORENEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'AV_TIMER', {
    get: MaterialIcon$AV_TIMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BACKSPACE', {
    get: MaterialIcon$BACKSPACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BACKUP', {
    get: MaterialIcon$BACKUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_ALERT', {
    get: MaterialIcon$BATTERY_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_CHARGING_FULL', {
    get: MaterialIcon$BATTERY_CHARGING_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_FULL', {
    get: MaterialIcon$BATTERY_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_STD', {
    get: MaterialIcon$BATTERY_STD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BATTERY_UNKNOWN', {
    get: MaterialIcon$BATTERY_UNKNOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BEACH_ACCESS', {
    get: MaterialIcon$BEACH_ACCESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BEENHERE', {
    get: MaterialIcon$BEENHERE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLOCK', {
    get: MaterialIcon$BLOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH', {
    get: MaterialIcon$BLUETOOTH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_AUDIO', {
    get: MaterialIcon$BLUETOOTH_AUDIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_CONNECTED', {
    get: MaterialIcon$BLUETOOTH_CONNECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_DISABLED', {
    get: MaterialIcon$BLUETOOTH_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUETOOTH_SEARCHING', {
    get: MaterialIcon$BLUETOOTH_SEARCHING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_CIRCULAR', {
    get: MaterialIcon$BLUR_CIRCULAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_LINEAR', {
    get: MaterialIcon$BLUR_LINEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_OFF', {
    get: MaterialIcon$BLUR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BLUR_ON', {
    get: MaterialIcon$BLUR_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOK', {
    get: MaterialIcon$BOOK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOKMARK', {
    get: MaterialIcon$BOOKMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BOOKMARK_BORDER', {
    get: MaterialIcon$BOOKMARK_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_ALL', {
    get: MaterialIcon$BORDER_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_BOTTOM', {
    get: MaterialIcon$BORDER_BOTTOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_CLEAR', {
    get: MaterialIcon$BORDER_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_COLOR', {
    get: MaterialIcon$BORDER_COLOR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_HORIZONTAL', {
    get: MaterialIcon$BORDER_HORIZONTAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_INNER', {
    get: MaterialIcon$BORDER_INNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_LEFT', {
    get: MaterialIcon$BORDER_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_OUTER', {
    get: MaterialIcon$BORDER_OUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_RIGHT', {
    get: MaterialIcon$BORDER_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_STYLE', {
    get: MaterialIcon$BORDER_STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_TOP', {
    get: MaterialIcon$BORDER_TOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BORDER_VERTICAL', {
    get: MaterialIcon$BORDER_VERTICAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRANDING_WATERMARK', {
    get: MaterialIcon$BRANDING_WATERMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_1', {
    get: MaterialIcon$BRIGHTNESS_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_2', {
    get: MaterialIcon$BRIGHTNESS_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_3', {
    get: MaterialIcon$BRIGHTNESS_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_4', {
    get: MaterialIcon$BRIGHTNESS_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_5', {
    get: MaterialIcon$BRIGHTNESS_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_6', {
    get: MaterialIcon$BRIGHTNESS_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_7', {
    get: MaterialIcon$BRIGHTNESS_7_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_AUTO', {
    get: MaterialIcon$BRIGHTNESS_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_HIGH', {
    get: MaterialIcon$BRIGHTNESS_HIGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_LOW', {
    get: MaterialIcon$BRIGHTNESS_LOW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRIGHTNESS_MEDIUM', {
    get: MaterialIcon$BRIGHTNESS_MEDIUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BROKEN_IMAGE', {
    get: MaterialIcon$BROKEN_IMAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BRUSH', {
    get: MaterialIcon$BRUSH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUBBLE_CHART', {
    get: MaterialIcon$BUBBLE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUG_REPORT', {
    get: MaterialIcon$BUG_REPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUILD', {
    get: MaterialIcon$BUILD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BURST_MODE', {
    get: MaterialIcon$BURST_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUSINESS', {
    get: MaterialIcon$BUSINESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'BUSINESS_CENTER', {
    get: MaterialIcon$BUSINESS_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CACHED', {
    get: MaterialIcon$CACHED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAKE', {
    get: MaterialIcon$CAKE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL', {
    get: MaterialIcon$CALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_END', {
    get: MaterialIcon$CALL_END_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MADE', {
    get: MaterialIcon$CALL_MADE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MERGE', {
    get: MaterialIcon$CALL_MERGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MISSED', {
    get: MaterialIcon$CALL_MISSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_MISSED_OUTGOING', {
    get: MaterialIcon$CALL_MISSED_OUTGOING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_RECEIVED', {
    get: MaterialIcon$CALL_RECEIVED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_SPLIT', {
    get: MaterialIcon$CALL_SPLIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CALL_TO_ACTION', {
    get: MaterialIcon$CALL_TO_ACTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA', {
    get: MaterialIcon$CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ALT', {
    get: MaterialIcon$CAMERA_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ENHANCE', {
    get: MaterialIcon$CAMERA_ENHANCE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_FRONT', {
    get: MaterialIcon$CAMERA_FRONT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_REAR', {
    get: MaterialIcon$CAMERA_REAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAMERA_ROLL', {
    get: MaterialIcon$CAMERA_ROLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CANCEL', {
    get: MaterialIcon$CANCEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_GIFTCARD', {
    get: MaterialIcon$CARD_GIFTCARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_MEMBERSHIP', {
    get: MaterialIcon$CARD_MEMBERSHIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CARD_TRAVEL', {
    get: MaterialIcon$CARD_TRAVEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CASINO', {
    get: MaterialIcon$CASINO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAST', {
    get: MaterialIcon$CAST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CAST_CONNECTED', {
    get: MaterialIcon$CAST_CONNECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CENTER_FOCUS_STRONG', {
    get: MaterialIcon$CENTER_FOCUS_STRONG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CENTER_FOCUS_WEAK', {
    get: MaterialIcon$CENTER_FOCUS_WEAK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHANGE_HISTORY', {
    get: MaterialIcon$CHANGE_HISTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT', {
    get: MaterialIcon$CHAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT_BUBBLE', {
    get: MaterialIcon$CHAT_BUBBLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHAT_BUBBLE_OUTLINE', {
    get: MaterialIcon$CHAT_BUBBLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK', {
    get: MaterialIcon$CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_BOX', {
    get: MaterialIcon$CHECK_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_BOX_OUTLINE_BLANK', {
    get: MaterialIcon$CHECK_BOX_OUTLINE_BLANK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHECK_CIRCLE', {
    get: MaterialIcon$CHECK_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHEVRON_LEFT', {
    get: MaterialIcon$CHEVRON_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHEVRON_RIGHT', {
    get: MaterialIcon$CHEVRON_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHILD_CARE', {
    get: MaterialIcon$CHILD_CARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHILD_FRIENDLY', {
    get: MaterialIcon$CHILD_FRIENDLY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CHROME_RR_MODE', {
    get: MaterialIcon$CHROME_RR_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLASS', {
    get: MaterialIcon$CLASS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLEAR', {
    get: MaterialIcon$CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLEAR_ALL', {
    get: MaterialIcon$CLEAR_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOSE', {
    get: MaterialIcon$CLOSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOSED_CAPTION', {
    get: MaterialIcon$CLOSED_CAPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD', {
    get: MaterialIcon$CLOUD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_CIRCLE', {
    get: MaterialIcon$CLOUD_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_DONE', {
    get: MaterialIcon$CLOUD_DONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_DOWNLOAD', {
    get: MaterialIcon$CLOUD_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_OFF', {
    get: MaterialIcon$CLOUD_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_QUEUE', {
    get: MaterialIcon$CLOUD_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CLOUD_UPLOAD', {
    get: MaterialIcon$CLOUD_UPLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CODE', {
    get: MaterialIcon$CODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLLECTIONS', {
    get: MaterialIcon$COLLECTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLLECTIONS_BOOKMARK', {
    get: MaterialIcon$COLLECTIONS_BOOKMARK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLOR_LENS', {
    get: MaterialIcon$COLOR_LENS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COLORIZE', {
    get: MaterialIcon$COLORIZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMMENT', {
    get: MaterialIcon$COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPARE', {
    get: MaterialIcon$COMPARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPARE_ARROWS', {
    get: MaterialIcon$COMPARE_ARROWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COMPUTER', {
    get: MaterialIcon$COMPUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONFIRMATION_NUMBER', {
    get: MaterialIcon$CONFIRMATION_NUMBER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACT_MAIL', {
    get: MaterialIcon$CONTACT_MAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACT_PHONE', {
    get: MaterialIcon$CONTACT_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTACTS', {
    get: MaterialIcon$CONTACTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_COPY', {
    get: MaterialIcon$CONTENT_COPY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_CUT', {
    get: MaterialIcon$CONTENT_CUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTENT_PASTE', {
    get: MaterialIcon$CONTENT_PASTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTROL_POINT', {
    get: MaterialIcon$CONTROL_POINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CONTROL_POINT_DUPLICATE', {
    get: MaterialIcon$CONTROL_POINT_DUPLICATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'COPYRIGHT', {
    get: MaterialIcon$COPYRIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREATE', {
    get: MaterialIcon$CREATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREATE_NEW_FOLDER', {
    get: MaterialIcon$CREATE_NEW_FOLDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CREDIT_CARD', {
    get: MaterialIcon$CREDIT_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP', {
    get: MaterialIcon$CROP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_16_9', {
    get: MaterialIcon$CROP_16_9_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_3_2', {
    get: MaterialIcon$CROP_3_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_5_4', {
    get: MaterialIcon$CROP_5_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_7_5', {
    get: MaterialIcon$CROP_7_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_DIN', {
    get: MaterialIcon$CROP_DIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_FREE', {
    get: MaterialIcon$CROP_FREE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_LANDSCAPE', {
    get: MaterialIcon$CROP_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_ORIGINAL', {
    get: MaterialIcon$CROP_ORIGINAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_PORTRAIT', {
    get: MaterialIcon$CROP_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_ROTATE', {
    get: MaterialIcon$CROP_ROTATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'CROP_SQUARE', {
    get: MaterialIcon$CROP_SQUARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DASHBOARD', {
    get: MaterialIcon$DASHBOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DATA_USAGE', {
    get: MaterialIcon$DATA_USAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DATE_RANGE', {
    get: MaterialIcon$DATE_RANGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEHAZE', {
    get: MaterialIcon$DEHAZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE', {
    get: MaterialIcon$DELETE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE_FOREVER', {
    get: MaterialIcon$DELETE_FOREVER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DELETE_SWEEP', {
    get: MaterialIcon$DELETE_SWEEP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESCRIPTION', {
    get: MaterialIcon$DESCRIPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESKTOP_MAC', {
    get: MaterialIcon$DESKTOP_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DESKTOP_WINDOWS', {
    get: MaterialIcon$DESKTOP_WINDOWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DETAILS', {
    get: MaterialIcon$DETAILS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVELOPER_BOARD', {
    get: MaterialIcon$DEVELOPER_BOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVELOPER_MODE', {
    get: MaterialIcon$DEVELOPER_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICE_HUB', {
    get: MaterialIcon$DEVICE_HUB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICES', {
    get: MaterialIcon$DEVICES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DEVICES_OTHER', {
    get: MaterialIcon$DEVICES_OTHER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIALER_SIP', {
    get: MaterialIcon$DIALER_SIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIALPAD', {
    get: MaterialIcon$DIALPAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS', {
    get: MaterialIcon$DIRECTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BIKE', {
    get: MaterialIcon$DIRECTIONS_BIKE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BOAT', {
    get: MaterialIcon$DIRECTIONS_BOAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_BUS', {
    get: MaterialIcon$DIRECTIONS_BUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_CAR', {
    get: MaterialIcon$DIRECTIONS_CAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_RAILWAY', {
    get: MaterialIcon$DIRECTIONS_RAILWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_RUN', {
    get: MaterialIcon$DIRECTIONS_RUN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_SUBWAY', {
    get: MaterialIcon$DIRECTIONS_SUBWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_TRANSIT', {
    get: MaterialIcon$DIRECTIONS_TRANSIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DIRECTIONS_WALK', {
    get: MaterialIcon$DIRECTIONS_WALK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DISC_FULL', {
    get: MaterialIcon$DISC_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DNS', {
    get: MaterialIcon$DNS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB', {
    get: MaterialIcon$DO_NOT_DISTURB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_ALT', {
    get: MaterialIcon$DO_NOT_DISTURB_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_OFF', {
    get: MaterialIcon$DO_NOT_DISTURB_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DO_NOT_DISTURB_ON', {
    get: MaterialIcon$DO_NOT_DISTURB_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DOCK', {
    get: MaterialIcon$DOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DOMAIN', {
    get: MaterialIcon$DOMAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONE', {
    get: MaterialIcon$DONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONE_ALL', {
    get: MaterialIcon$DONE_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONUT_LARGE', {
    get: MaterialIcon$DONUT_LARGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DONUT_SMALL', {
    get: MaterialIcon$DONUT_SMALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRAFTS', {
    get: MaterialIcon$DRAFTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRAG_HANDLE', {
    get: MaterialIcon$DRAG_HANDLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DRIVE_ETA', {
    get: MaterialIcon$DRIVE_ETA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'DVR', {
    get: MaterialIcon$DVR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EDIT', {
    get: MaterialIcon$EDIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EDIT_LOCATION', {
    get: MaterialIcon$EDIT_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EJECT', {
    get: MaterialIcon$EJECT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EMAIL', {
    get: MaterialIcon$EMAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ENHANCED_ENCRYPTION', {
    get: MaterialIcon$ENHANCED_ENCRYPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EQUALIZER', {
    get: MaterialIcon$EQUALIZER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ERROR', {
    get: MaterialIcon$ERROR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ERROR_OUTLINE', {
    get: MaterialIcon$ERROR_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EURO_SYMBOL', {
    get: MaterialIcon$EURO_SYMBOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EV_STATION', {
    get: MaterialIcon$EV_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT', {
    get: MaterialIcon$EVENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_AVAILABLE', {
    get: MaterialIcon$EVENT_AVAILABLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_BUSY', {
    get: MaterialIcon$EVENT_BUSY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_NOTE', {
    get: MaterialIcon$EVENT_NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EVENT_SEAT', {
    get: MaterialIcon$EVENT_SEAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXIT_TO_APP', {
    get: MaterialIcon$EXIT_TO_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPAND_LESS', {
    get: MaterialIcon$EXPAND_LESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPAND_MORE', {
    get: MaterialIcon$EXPAND_MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPLICIT', {
    get: MaterialIcon$EXPLICIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPLORE', {
    get: MaterialIcon$EXPLORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE', {
    get: MaterialIcon$EXPOSURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_NEG_1', {
    get: MaterialIcon$EXPOSURE_NEG_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_NEG_2', {
    get: MaterialIcon$EXPOSURE_NEG_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_PLUS_1', {
    get: MaterialIcon$EXPOSURE_PLUS_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_PLUS_2', {
    get: MaterialIcon$EXPOSURE_PLUS_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXPOSURE_ZERO', {
    get: MaterialIcon$EXPOSURE_ZERO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'EXTENSION', {
    get: MaterialIcon$EXTENSION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FACE', {
    get: MaterialIcon$FACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAST_FORWARD', {
    get: MaterialIcon$FAST_FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAST_REWIND', {
    get: MaterialIcon$FAST_REWIND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAVORITE', {
    get: MaterialIcon$FAVORITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FAVORITE_BORDER', {
    get: MaterialIcon$FAVORITE_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FEATURED_PLAY_LIST', {
    get: MaterialIcon$FEATURED_PLAY_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FEATURED_VIDEO', {
    get: MaterialIcon$FEATURED_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FACK', {
    get: MaterialIcon$FACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_DVR', {
    get: MaterialIcon$FIBER_DVR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_MANUAL_RECORD', {
    get: MaterialIcon$FIBER_MANUAL_RECORD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_NEW', {
    get: MaterialIcon$FIBER_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_PIN', {
    get: MaterialIcon$FIBER_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIBER_SMART_RECORD', {
    get: MaterialIcon$FIBER_SMART_RECORD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILE_DOWNLOAD', {
    get: MaterialIcon$FILE_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILE_UPLOAD', {
    get: MaterialIcon$FILE_UPLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER', {
    get: MaterialIcon$FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_1', {
    get: MaterialIcon$FILTER_1_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_2', {
    get: MaterialIcon$FILTER_2_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_3', {
    get: MaterialIcon$FILTER_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_4', {
    get: MaterialIcon$FILTER_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_5', {
    get: MaterialIcon$FILTER_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_6', {
    get: MaterialIcon$FILTER_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_7', {
    get: MaterialIcon$FILTER_7_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_8', {
    get: MaterialIcon$FILTER_8_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_9', {
    get: MaterialIcon$FILTER_9_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_9_PLUS', {
    get: MaterialIcon$FILTER_9_PLUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_B_AND_W', {
    get: MaterialIcon$FILTER_B_AND_W_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_CENTER_FOCUS', {
    get: MaterialIcon$FILTER_CENTER_FOCUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_DRAMA', {
    get: MaterialIcon$FILTER_DRAMA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_FRAMES', {
    get: MaterialIcon$FILTER_FRAMES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_HDR', {
    get: MaterialIcon$FILTER_HDR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_LIST', {
    get: MaterialIcon$FILTER_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_NONE', {
    get: MaterialIcon$FILTER_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_TILT_SHIFT', {
    get: MaterialIcon$FILTER_TILT_SHIFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FILTER_VINTAGE', {
    get: MaterialIcon$FILTER_VINTAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIND_IN_PAGE', {
    get: MaterialIcon$FIND_IN_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIND_REPLACE', {
    get: MaterialIcon$FIND_REPLACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FINGERPRINT', {
    get: MaterialIcon$FINGERPRINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FIRST_PAGE', {
    get: MaterialIcon$FIRST_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FITNESS_CENTER', {
    get: MaterialIcon$FITNESS_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLAG', {
    get: MaterialIcon$FLAG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLARE', {
    get: MaterialIcon$FLARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_AUTO', {
    get: MaterialIcon$FLASH_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_OFF', {
    get: MaterialIcon$FLASH_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLASH_ON', {
    get: MaterialIcon$FLASH_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT', {
    get: MaterialIcon$FLIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT_LAND', {
    get: MaterialIcon$FLIGHT_LAND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIGHT_TAKEOFF', {
    get: MaterialIcon$FLIGHT_TAKEOFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP', {
    get: MaterialIcon$FLIP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP_TO_BACK', {
    get: MaterialIcon$FLIP_TO_BACK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FLIP_TO_FRONT', {
    get: MaterialIcon$FLIP_TO_FRONT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER', {
    get: MaterialIcon$FOLDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_OPEN', {
    get: MaterialIcon$FOLDER_OPEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_SHARED', {
    get: MaterialIcon$FOLDER_SHARED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FOLDER_SPECIAL', {
    get: MaterialIcon$FOLDER_SPECIAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FONT_DOWNLOAD', {
    get: MaterialIcon$FONT_DOWNLOAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_CENTER', {
    get: MaterialIcon$FORMAT_ALIGN_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_JUSTIFY', {
    get: MaterialIcon$FORMAT_ALIGN_JUSTIFY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_LEFT', {
    get: MaterialIcon$FORMAT_ALIGN_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ALIGN_RIGHT', {
    get: MaterialIcon$FORMAT_ALIGN_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_BOLD', {
    get: MaterialIcon$FORMAT_BOLD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_CLEAR', {
    get: MaterialIcon$FORMAT_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_FILL', {
    get: MaterialIcon$FORMAT_COLOR_FILL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_RESET', {
    get: MaterialIcon$FORMAT_COLOR_RESET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_COLOR_TEXT', {
    get: MaterialIcon$FORMAT_COLOR_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_INDENT_DECREASE', {
    get: MaterialIcon$FORMAT_INDENT_DECREASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_INDENT_INCREASE', {
    get: MaterialIcon$FORMAT_INDENT_INCREASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_ITALIC', {
    get: MaterialIcon$FORMAT_ITALIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LINE_SPACING', {
    get: MaterialIcon$FORMAT_LINE_SPACING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LIST_BULLETED', {
    get: MaterialIcon$FORMAT_LIST_BULLETED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_LIST_NUMBERED', {
    get: MaterialIcon$FORMAT_LIST_NUMBERED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_PAINT', {
    get: MaterialIcon$FORMAT_PAINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_QUOTE', {
    get: MaterialIcon$FORMAT_QUOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_SHAPES', {
    get: MaterialIcon$FORMAT_SHAPES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_SIZE', {
    get: MaterialIcon$FORMAT_SIZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_STRIKETHROUGH', {
    get: MaterialIcon$FORMAT_STRIKETHROUGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_TEXTDIRECTION_L_TO_R', {
    get: MaterialIcon$FORMAT_TEXTDIRECTION_L_TO_R_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_TEXTDIRECTION_R_TO_L', {
    get: MaterialIcon$FORMAT_TEXTDIRECTION_R_TO_L_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORMAT_UNDERLINED', {
    get: MaterialIcon$FORMAT_UNDERLINED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORUM', {
    get: MaterialIcon$FORUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD', {
    get: MaterialIcon$FORWARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_10', {
    get: MaterialIcon$FORWARD_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_30', {
    get: MaterialIcon$FORWARD_30_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FORWARD_5', {
    get: MaterialIcon$FORWARD_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FREE_BREAKFAST', {
    get: MaterialIcon$FREE_BREAKFAST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FULLSCREEN', {
    get: MaterialIcon$FULLSCREEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FULLSCREEN_EXIT', {
    get: MaterialIcon$FULLSCREEN_EXIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'FUNCTIONS', {
    get: MaterialIcon$FUNCTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'G_TRANSLATE', {
    get: MaterialIcon$G_TRANSLATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAMEPAD', {
    get: MaterialIcon$GAMEPAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAMES', {
    get: MaterialIcon$GAMES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GAVEL', {
    get: MaterialIcon$GAVEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GESTURE', {
    get: MaterialIcon$GESTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GET_APP', {
    get: MaterialIcon$GET_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GIF', {
    get: MaterialIcon$GIF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GOLF_COURSE', {
    get: MaterialIcon$GOLF_COURSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_FIXED', {
    get: MaterialIcon$GPS_FIXED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_NOT_FIXED', {
    get: MaterialIcon$GPS_NOT_FIXED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GPS_OFF', {
    get: MaterialIcon$GPS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRADE', {
    get: MaterialIcon$GRADE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRADIENT', {
    get: MaterialIcon$GRADIENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRAIN', {
    get: MaterialIcon$GRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRAPHIC_EQ', {
    get: MaterialIcon$GRAPHIC_EQ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRID_OFF', {
    get: MaterialIcon$GRID_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GRID_ON', {
    get: MaterialIcon$GRID_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP', {
    get: MaterialIcon$GROUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP_ADD', {
    get: MaterialIcon$GROUP_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'GROUP_WORK', {
    get: MaterialIcon$GROUP_WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HD', {
    get: MaterialIcon$HD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_OFF', {
    get: MaterialIcon$HDR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_ON', {
    get: MaterialIcon$HDR_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_STRONG', {
    get: MaterialIcon$HDR_STRONG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HDR_WEAK', {
    get: MaterialIcon$HDR_WEAK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEADSET', {
    get: MaterialIcon$HEADSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEADSET_MIC', {
    get: MaterialIcon$HEADSET_MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEALING', {
    get: MaterialIcon$HEALING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HEARING', {
    get: MaterialIcon$HEARING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HELP', {
    get: MaterialIcon$HELP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HELP_OUTLINE', {
    get: MaterialIcon$HELP_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGH_QUALITY', {
    get: MaterialIcon$HIGH_QUALITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGHLIGHT', {
    get: MaterialIcon$HIGHLIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HIGHLIGHT_OFF', {
    get: MaterialIcon$HIGHLIGHT_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HISTORY', {
    get: MaterialIcon$HISTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOME', {
    get: MaterialIcon$HOME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOT_TUB', {
    get: MaterialIcon$HOT_TUB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOTEL', {
    get: MaterialIcon$HOTEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOURGLASS_EMPTY', {
    get: MaterialIcon$HOURGLASS_EMPTY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HOURGLASS_FULL', {
    get: MaterialIcon$HOURGLASS_FULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HTTP', {
    get: MaterialIcon$HTTP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'HTTPS', {
    get: MaterialIcon$HTTPS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMAGE', {
    get: MaterialIcon$IMAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMAGE_ASPECT_RATIO', {
    get: MaterialIcon$IMAGE_ASPECT_RATIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORT_CONTACTS', {
    get: MaterialIcon$IMPORT_CONTACTS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORT_EXPORT', {
    get: MaterialIcon$IMPORT_EXPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'IMPORTANT_DEVICES', {
    get: MaterialIcon$IMPORTANT_DEVICES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INBOX', {
    get: MaterialIcon$INBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INDETERMINATE_CHECK_BOX', {
    get: MaterialIcon$INDETERMINATE_CHECK_BOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INFO', {
    get: MaterialIcon$INFO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INFO_OUTLINE', {
    get: MaterialIcon$INFO_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INPUT', {
    get: MaterialIcon$INPUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_CHART', {
    get: MaterialIcon$INSERT_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_COMMENT', {
    get: MaterialIcon$INSERT_COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_DRIVE_FILE', {
    get: MaterialIcon$INSERT_DRIVE_FILE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_EMOTICON', {
    get: MaterialIcon$INSERT_EMOTICON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_INVITATION', {
    get: MaterialIcon$INSERT_INVITATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_LINK', {
    get: MaterialIcon$INSERT_LINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INSERT_PHOTO', {
    get: MaterialIcon$INSERT_PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INVERT_COLORS', {
    get: MaterialIcon$INVERT_COLORS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'INVERT_COLORS_OFF', {
    get: MaterialIcon$INVERT_COLORS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ISO', {
    get: MaterialIcon$ISO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD', {
    get: MaterialIcon$KEYBOARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_DOWN', {
    get: MaterialIcon$KEYBOARD_ARROW_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_LEFT', {
    get: MaterialIcon$KEYBOARD_ARROW_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_RIGHT', {
    get: MaterialIcon$KEYBOARD_ARROW_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_ARROW_UP', {
    get: MaterialIcon$KEYBOARD_ARROW_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_BACKSPACE', {
    get: MaterialIcon$KEYBOARD_BACKSPACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_CAPSLOCK', {
    get: MaterialIcon$KEYBOARD_CAPSLOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_HIDE', {
    get: MaterialIcon$KEYBOARD_HIDE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_RETURN', {
    get: MaterialIcon$KEYBOARD_RETURN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_TAB', {
    get: MaterialIcon$KEYBOARD_TAB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KEYBOARD_VOICE', {
    get: MaterialIcon$KEYBOARD_VOICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'KITCHEN', {
    get: MaterialIcon$KITCHEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LABEL', {
    get: MaterialIcon$LABEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LABEL_OUTLINE', {
    get: MaterialIcon$LABEL_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LANDSCAPE', {
    get: MaterialIcon$LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LANGUAGE', {
    get: MaterialIcon$LANGUAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP', {
    get: MaterialIcon$LAPTOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_CHROMEBOOK', {
    get: MaterialIcon$LAPTOP_CHROMEBOOK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_MAC', {
    get: MaterialIcon$LAPTOP_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAPTOP_WINDOWS', {
    get: MaterialIcon$LAPTOP_WINDOWS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAST_PAGE', {
    get: MaterialIcon$LAST_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAUNCH', {
    get: MaterialIcon$LAUNCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAYERS', {
    get: MaterialIcon$LAYERS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LAYERS_CLEAR', {
    get: MaterialIcon$LAYERS_CLEAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LEAK_ADD', {
    get: MaterialIcon$LEAK_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LEAK_REMOVE', {
    get: MaterialIcon$LEAK_REMOVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LENS', {
    get: MaterialIcon$LENS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_ADD', {
    get: MaterialIcon$LIBRARY_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_BOOKS', {
    get: MaterialIcon$LIBRARY_BOOKS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIBRARY_MUSIC', {
    get: MaterialIcon$LIBRARY_MUSIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIGHTBULB_OUTLINE', {
    get: MaterialIcon$LIGHTBULB_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINE_STYLE', {
    get: MaterialIcon$LINE_STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINE_WEIGHT', {
    get: MaterialIcon$LINE_WEIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINEAR_SCALE', {
    get: MaterialIcon$LINEAR_SCALE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINK', {
    get: MaterialIcon$LINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LINKED_CAMERA', {
    get: MaterialIcon$LINKED_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIST', {
    get: MaterialIcon$LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIVE_HELP', {
    get: MaterialIcon$LIVE_HELP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LIVE_TV', {
    get: MaterialIcon$LIVE_TV_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_ACTIVITY', {
    get: MaterialIcon$LOCAL_ACTIVITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_AIRPORT', {
    get: MaterialIcon$LOCAL_AIRPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_ATM', {
    get: MaterialIcon$LOCAL_ATM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_BAR', {
    get: MaterialIcon$LOCAL_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CAFE', {
    get: MaterialIcon$LOCAL_CAFE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CAR_WASH', {
    get: MaterialIcon$LOCAL_CAR_WASH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_CONVENIENCE_STORE', {
    get: MaterialIcon$LOCAL_CONVENIENCE_STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_DINING', {
    get: MaterialIcon$LOCAL_DINING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_DRINK', {
    get: MaterialIcon$LOCAL_DRINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_FLORIST', {
    get: MaterialIcon$LOCAL_FLORIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_GAS_STATION', {
    get: MaterialIcon$LOCAL_GAS_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_GROCERY_STORE', {
    get: MaterialIcon$LOCAL_GROCERY_STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_HOSPITAL', {
    get: MaterialIcon$LOCAL_HOSPITAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_HOTEL', {
    get: MaterialIcon$LOCAL_HOTEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_LAUNDRY_SERVICE', {
    get: MaterialIcon$LOCAL_LAUNDRY_SERVICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_LIBRARY', {
    get: MaterialIcon$LOCAL_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_MALL', {
    get: MaterialIcon$LOCAL_MALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_MOVIES', {
    get: MaterialIcon$LOCAL_MOVIES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_OFFER', {
    get: MaterialIcon$LOCAL_OFFER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PARKING', {
    get: MaterialIcon$LOCAL_PARKING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PHARMACY', {
    get: MaterialIcon$LOCAL_PHARMACY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PHONE', {
    get: MaterialIcon$LOCAL_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PIZZA', {
    get: MaterialIcon$LOCAL_PIZZA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PLAY', {
    get: MaterialIcon$LOCAL_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_POST_OFFICE', {
    get: MaterialIcon$LOCAL_POST_OFFICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_PRINTSHOP', {
    get: MaterialIcon$LOCAL_PRINTSHOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_SEE', {
    get: MaterialIcon$LOCAL_SEE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_SHIPPING', {
    get: MaterialIcon$LOCAL_SHIPPING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCAL_TAXI', {
    get: MaterialIcon$LOCAL_TAXI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_CITY', {
    get: MaterialIcon$LOCATION_CITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_DISABLED', {
    get: MaterialIcon$LOCATION_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_OFF', {
    get: MaterialIcon$LOCATION_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_ON', {
    get: MaterialIcon$LOCATION_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCATION_SEARCHING', {
    get: MaterialIcon$LOCATION_SEARCHING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK', {
    get: MaterialIcon$LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK_OPEN', {
    get: MaterialIcon$LOCK_OPEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOCK_OUTLINE', {
    get: MaterialIcon$LOCK_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS', {
    get: MaterialIcon$LOOKS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_3', {
    get: MaterialIcon$LOOKS_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_4', {
    get: MaterialIcon$LOOKS_4_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_5', {
    get: MaterialIcon$LOOKS_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_6', {
    get: MaterialIcon$LOOKS_6_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_ONE', {
    get: MaterialIcon$LOOKS_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOKS_TWO', {
    get: MaterialIcon$LOOKS_TWO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOOP', {
    get: MaterialIcon$LOOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOUPE', {
    get: MaterialIcon$LOUPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOW_PRIORITY', {
    get: MaterialIcon$LOW_PRIORITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'LOYALTY', {
    get: MaterialIcon$LOYALTY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAIL', {
    get: MaterialIcon$MAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAIL_OUTLINE', {
    get: MaterialIcon$MAIL_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MAP', {
    get: MaterialIcon$MAP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MARKUNREAD', {
    get: MaterialIcon$MARKUNREAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MARKUNREAD_MAILBOX', {
    get: MaterialIcon$MARKUNREAD_MAILBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MEMORY', {
    get: MaterialIcon$MEMORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MENU', {
    get: MaterialIcon$MENU_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MERGE_TYPE', {
    get: MaterialIcon$MERGE_TYPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MESSAGE', {
    get: MaterialIcon$MESSAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC', {
    get: MaterialIcon$MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC_NONE', {
    get: MaterialIcon$MIC_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MIC_OFF', {
    get: MaterialIcon$MIC_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MMS', {
    get: MaterialIcon$MMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MODE_COMMENT', {
    get: MaterialIcon$MODE_COMMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MODE_EDIT', {
    get: MaterialIcon$MODE_EDIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONETIZATION_ON', {
    get: MaterialIcon$MONETIZATION_ON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONEY_OFF', {
    get: MaterialIcon$MONEY_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MONOCHROME_PHOTOS', {
    get: MaterialIcon$MONOCHROME_PHOTOS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOOD', {
    get: MaterialIcon$MOOD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOOD_BAD', {
    get: MaterialIcon$MOOD_BAD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE', {
    get: MaterialIcon$MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE_HORIZ', {
    get: MaterialIcon$MORE_HORIZ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MORE_VERT', {
    get: MaterialIcon$MORE_VERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOTORCYCLE', {
    get: MaterialIcon$MOTORCYCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOUSE', {
    get: MaterialIcon$MOUSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVE_TO_INBOX', {
    get: MaterialIcon$MOVE_TO_INBOX_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE', {
    get: MaterialIcon$MOVIE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE_CREATION', {
    get: MaterialIcon$MOVIE_CREATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MOVIE_FILTER', {
    get: MaterialIcon$MOVIE_FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MULTILINE_CHART', {
    get: MaterialIcon$MULTILINE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MUSIC_NOTE', {
    get: MaterialIcon$MUSIC_NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MUSIC_VIDEO', {
    get: MaterialIcon$MUSIC_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'MY_LOCATION', {
    get: MaterialIcon$MY_LOCATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NATURE', {
    get: MaterialIcon$NATURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NATURE_PEOPLE', {
    get: MaterialIcon$NATURE_PEOPLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATE_BEFORE', {
    get: MaterialIcon$NAVIGATE_BEFORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATE_NEXT', {
    get: MaterialIcon$NAVIGATE_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NAVIGATION', {
    get: MaterialIcon$NAVIGATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEAR_ME', {
    get: MaterialIcon$NEAR_ME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_CELL', {
    get: MaterialIcon$NETWORK_CELL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_CHECK', {
    get: MaterialIcon$NETWORK_CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_LOCKED', {
    get: MaterialIcon$NETWORK_LOCKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NETWORK_WIFI', {
    get: MaterialIcon$NETWORK_WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEW_RELEASES', {
    get: MaterialIcon$NEW_RELEASES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NEXT_WEEK', {
    get: MaterialIcon$NEXT_WEEK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NFC', {
    get: MaterialIcon$NFC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NO_ENCRYPTION', {
    get: MaterialIcon$NO_ENCRYPTION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NO_SIM', {
    get: MaterialIcon$NO_SIM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOT_INTERESTED', {
    get: MaterialIcon$NOT_INTERESTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTE', {
    get: MaterialIcon$NOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTE_ADD', {
    get: MaterialIcon$NOTE_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS', {
    get: MaterialIcon$NOTIFICATIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_ACTIVE', {
    get: MaterialIcon$NOTIFICATIONS_ACTIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_NONE', {
    get: MaterialIcon$NOTIFICATIONS_NONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_OFF', {
    get: MaterialIcon$NOTIFICATIONS_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'NOTIFICATIONS_PAUSED', {
    get: MaterialIcon$NOTIFICATIONS_PAUSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OFFLINE_PIN', {
    get: MaterialIcon$OFFLINE_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ONDEMAND_VIDEO', {
    get: MaterialIcon$ONDEMAND_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPACITY', {
    get: MaterialIcon$OPACITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_IN_BROWSER', {
    get: MaterialIcon$OPEN_IN_BROWSER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_IN_NEW', {
    get: MaterialIcon$OPEN_IN_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'OPEN_WITH', {
    get: MaterialIcon$OPEN_WITH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAGES', {
    get: MaterialIcon$PAGES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAGEVIEW', {
    get: MaterialIcon$PAGEVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PALETTE', {
    get: MaterialIcon$PALETTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAN_TOOL', {
    get: MaterialIcon$PAN_TOOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA', {
    get: MaterialIcon$PANORAMA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_FISH_EYE', {
    get: MaterialIcon$PANORAMA_FISH_EYE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_HORIZONTAL', {
    get: MaterialIcon$PANORAMA_HORIZONTAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_VERTICAL', {
    get: MaterialIcon$PANORAMA_VERTICAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PANORAMA_WIDE_ANGLE', {
    get: MaterialIcon$PANORAMA_WIDE_ANGLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PARTY_MODE', {
    get: MaterialIcon$PARTY_MODE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE', {
    get: MaterialIcon$PAUSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE_CIRCLE_FILLED', {
    get: MaterialIcon$PAUSE_CIRCLE_FILLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAUSE_CIRCLE_OUTLINE', {
    get: MaterialIcon$PAUSE_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PAYMENT', {
    get: MaterialIcon$PAYMENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PEOPLE', {
    get: MaterialIcon$PEOPLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PEOPLE_OUTLINE', {
    get: MaterialIcon$PEOPLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_CAMERA_MIC', {
    get: MaterialIcon$PERM_CAMERA_MIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_CONTACT_CALENDAR', {
    get: MaterialIcon$PERM_CONTACT_CALENDAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_DATA_SETTING', {
    get: MaterialIcon$PERM_DATA_SETTING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_DEVICE_INFORMATION', {
    get: MaterialIcon$PERM_DEVICE_INFORMATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_IDENTITY', {
    get: MaterialIcon$PERM_IDENTITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_MEDIA', {
    get: MaterialIcon$PERM_MEDIA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_PHONE_MSG', {
    get: MaterialIcon$PERM_PHONE_MSG_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERM_SCAN_WIFI', {
    get: MaterialIcon$PERM_SCAN_WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON', {
    get: MaterialIcon$PERSON_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_ADD', {
    get: MaterialIcon$PERSON_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_OUTLINE', {
    get: MaterialIcon$PERSON_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_PIN', {
    get: MaterialIcon$PERSON_PIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSON_PIN_CIRCLE', {
    get: MaterialIcon$PERSON_PIN_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PERSONAL_VIDEO', {
    get: MaterialIcon$PERSONAL_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PETS', {
    get: MaterialIcon$PETS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE', {
    get: MaterialIcon$PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_ANDROID', {
    get: MaterialIcon$PHONE_ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_BLUETOOTH_SPEAKER', {
    get: MaterialIcon$PHONE_BLUETOOTH_SPEAKER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_FORWARDED', {
    get: MaterialIcon$PHONE_FORWARDED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_IN_TALK', {
    get: MaterialIcon$PHONE_IN_TALK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_IPHONE', {
    get: MaterialIcon$PHONE_IPHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_LOCKED', {
    get: MaterialIcon$PHONE_LOCKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_MISSED', {
    get: MaterialIcon$PHONE_MISSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONE_PAUSED', {
    get: MaterialIcon$PHONE_PAUSED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK', {
    get: MaterialIcon$PHONELINK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_ERASE', {
    get: MaterialIcon$PHONELINK_ERASE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_LOCK', {
    get: MaterialIcon$PHONELINK_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_OFF', {
    get: MaterialIcon$PHONELINK_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_RING', {
    get: MaterialIcon$PHONELINK_RING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHONELINK_SETUP', {
    get: MaterialIcon$PHONELINK_SETUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO', {
    get: MaterialIcon$PHOTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_ALBUM', {
    get: MaterialIcon$PHOTO_ALBUM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_CAMERA', {
    get: MaterialIcon$PHOTO_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_FILTER', {
    get: MaterialIcon$PHOTO_FILTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_LIBRARY', {
    get: MaterialIcon$PHOTO_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_ACTUAL', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_ACTUAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_LARGE', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_LARGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PHOTO_SIZE_SELECT_SMALL', {
    get: MaterialIcon$PHOTO_SIZE_SELECT_SMALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_AS_PDF', {
    get: MaterialIcon$PICTURE_AS_PDF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_IN_PICTURE', {
    get: MaterialIcon$PICTURE_IN_PICTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PICTURE_IN_PICTURE_ALT', {
    get: MaterialIcon$PICTURE_IN_PICTURE_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIE_CHART', {
    get: MaterialIcon$PIE_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIE_CHART_OUTLINED', {
    get: MaterialIcon$PIE_CHART_OUTLINED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PIN_DROP', {
    get: MaterialIcon$PIN_DROP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLACE', {
    get: MaterialIcon$PLACE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_ARROW', {
    get: MaterialIcon$PLAY_ARROW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_CIRCLE_FILLED', {
    get: MaterialIcon$PLAY_CIRCLE_FILLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_CIRCLE_OUTLINE', {
    get: MaterialIcon$PLAY_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAY_FOR_WORK', {
    get: MaterialIcon$PLAY_FOR_WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_ADD', {
    get: MaterialIcon$PLAYLIST_ADD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_ADD_CHECK', {
    get: MaterialIcon$PLAYLIST_ADD_CHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLAYLIST_PLAY', {
    get: MaterialIcon$PLAYLIST_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PLUS_ONE', {
    get: MaterialIcon$PLUS_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POLL', {
    get: MaterialIcon$POLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POLYMER', {
    get: MaterialIcon$POLYMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POOL', {
    get: MaterialIcon$POOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PORTABLE_WIFI_OFF', {
    get: MaterialIcon$PORTABLE_WIFI_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PORTRAIT', {
    get: MaterialIcon$PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER', {
    get: MaterialIcon$POWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER_INPUT', {
    get: MaterialIcon$POWER_INPUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'POWER_SETTINGS_NEW', {
    get: MaterialIcon$POWER_SETTINGS_NEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PREGNANT_WOMAN', {
    get: MaterialIcon$PREGNANT_WOMAN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRESENT_TO_ALL', {
    get: MaterialIcon$PRESENT_TO_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRINT', {
    get: MaterialIcon$PRINT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PRIORITY_HIGH', {
    get: MaterialIcon$PRIORITY_HIGH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PUBLIC', {
    get: MaterialIcon$PUBLIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'PUBLISH', {
    get: MaterialIcon$PUBLISH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUERY_BUILDER', {
    get: MaterialIcon$QUERY_BUILDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUESTION_ANSWER', {
    get: MaterialIcon$QUESTION_ANSWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE', {
    get: MaterialIcon$QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE_MUSIC', {
    get: MaterialIcon$QUEUE_MUSIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'QUEUE_PLAY_NEXT', {
    get: MaterialIcon$QUEUE_PLAY_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO', {
    get: MaterialIcon$RADIO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO_BUTTON_CHECKED', {
    get: MaterialIcon$RADIO_BUTTON_CHECKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RADIO_BUTTON_UNCHECKED', {
    get: MaterialIcon$RADIO_BUTTON_UNCHECKED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RATE_REVIEW', {
    get: MaterialIcon$RATE_REVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECEIPT', {
    get: MaterialIcon$RECEIPT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECENT_ACTORS', {
    get: MaterialIcon$RECENT_ACTORS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RECORD_VOICE_OVER', {
    get: MaterialIcon$RECORD_VOICE_OVER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RM', {
    get: MaterialIcon$RM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REDO', {
    get: MaterialIcon$REDO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REFRESH', {
    get: MaterialIcon$REFRESH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE', {
    get: MaterialIcon$REMOVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_CIRCLE', {
    get: MaterialIcon$REMOVE_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_CIRCLE_OUTLINE', {
    get: MaterialIcon$REMOVE_CIRCLE_OUTLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_FROM_QUEUE', {
    get: MaterialIcon$REMOVE_FROM_QUEUE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_RED_EYE', {
    get: MaterialIcon$REMOVE_RED_EYE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REMOVE_SHOPPING_CART', {
    get: MaterialIcon$REMOVE_SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REORDER', {
    get: MaterialIcon$REORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPEAT', {
    get: MaterialIcon$REPEAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPEAT_ONE', {
    get: MaterialIcon$REPEAT_ONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY', {
    get: MaterialIcon$REPLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_10', {
    get: MaterialIcon$REPLAY_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_30', {
    get: MaterialIcon$REPLAY_30_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLAY_5', {
    get: MaterialIcon$REPLAY_5_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLY', {
    get: MaterialIcon$REPLY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPLY_ALL', {
    get: MaterialIcon$REPLY_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPORT', {
    get: MaterialIcon$REPORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'REPORT_PROBLEM', {
    get: MaterialIcon$REPORT_PROBLEM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTAURANT', {
    get: MaterialIcon$RESTAURANT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTAURANT_MENU', {
    get: MaterialIcon$RESTAURANT_MENU_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTORE', {
    get: MaterialIcon$RESTORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RESTORE_PAGE', {
    get: MaterialIcon$RESTORE_PAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RING_VOLUME', {
    get: MaterialIcon$RING_VOLUME_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROOM', {
    get: MaterialIcon$ROOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROOM_SERVICE', {
    get: MaterialIcon$ROOM_SERVICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_90_DEGREES_CCW', {
    get: MaterialIcon$ROTATE_90_DEGREES_CCW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_LEFT', {
    get: MaterialIcon$ROTATE_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROTATE_RIGHT', {
    get: MaterialIcon$ROTATE_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROUNDED_CORNER', {
    get: MaterialIcon$ROUNDED_CORNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROUTER', {
    get: MaterialIcon$ROUTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ROWING', {
    get: MaterialIcon$ROWING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RSS_FEED', {
    get: MaterialIcon$RSS_FEED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'RV_HOOKUP', {
    get: MaterialIcon$RV_HOOKUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SATELLITE', {
    get: MaterialIcon$SATELLITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SAVE', {
    get: MaterialIcon$SAVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCANNER', {
    get: MaterialIcon$SCANNER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCHEDULE', {
    get: MaterialIcon$SCHEDULE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCHOOL', {
    get: MaterialIcon$SCHOOL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_LANDSCAPE', {
    get: MaterialIcon$SCREEN_LOCK_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_PORTRAIT', {
    get: MaterialIcon$SCREEN_LOCK_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_LOCK_ROTATION', {
    get: MaterialIcon$SCREEN_LOCK_ROTATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_ROTATION', {
    get: MaterialIcon$SCREEN_ROTATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SCREEN_SHARE', {
    get: MaterialIcon$SCREEN_SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SD_CARD', {
    get: MaterialIcon$SD_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SD_STORAGE', {
    get: MaterialIcon$SD_STORAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SEARCH', {
    get: MaterialIcon$SEARCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SECURITY', {
    get: MaterialIcon$SECURITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SELECT_ALL', {
    get: MaterialIcon$SELECT_ALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SEND', {
    get: MaterialIcon$SEND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_DISSATISFIED', {
    get: MaterialIcon$SENTIMENT_DISSATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_NEUTRAL', {
    get: MaterialIcon$SENTIMENT_NEUTRAL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_SATISFIED', {
    get: MaterialIcon$SENTIMENT_SATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_VERY_DISSATISFIED', {
    get: MaterialIcon$SENTIMENT_VERY_DISSATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SENTIMENT_VERY_SATISFIED', {
    get: MaterialIcon$SENTIMENT_VERY_SATISFIED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS', {
    get: MaterialIcon$SETTINGS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_APPLICATIONS', {
    get: MaterialIcon$SETTINGS_APPLICATIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BACKUP_RESTORE', {
    get: MaterialIcon$SETTINGS_BACKUP_RESTORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BLUETOOTH', {
    get: MaterialIcon$SETTINGS_BLUETOOTH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_BRIGHTNESS', {
    get: MaterialIcon$SETTINGS_BRIGHTNESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_CELL', {
    get: MaterialIcon$SETTINGS_CELL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_ETHERNET', {
    get: MaterialIcon$SETTINGS_ETHERNET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_ANTENNA', {
    get: MaterialIcon$SETTINGS_INPUT_ANTENNA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_COMPONENT', {
    get: MaterialIcon$SETTINGS_INPUT_COMPONENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_COMPOSITE', {
    get: MaterialIcon$SETTINGS_INPUT_COMPOSITE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_HDMI', {
    get: MaterialIcon$SETTINGS_INPUT_HDMI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_INPUT_SVIDEO', {
    get: MaterialIcon$SETTINGS_INPUT_SVIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_OVERSCAN', {
    get: MaterialIcon$SETTINGS_OVERSCAN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_PHONE', {
    get: MaterialIcon$SETTINGS_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_POWER', {
    get: MaterialIcon$SETTINGS_POWER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_REMOTE', {
    get: MaterialIcon$SETTINGS_REMOTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_SYSTEM_DAYDREAM', {
    get: MaterialIcon$SETTINGS_SYSTEM_DAYDREAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SETTINGS_VOICE', {
    get: MaterialIcon$SETTINGS_VOICE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHARE', {
    get: MaterialIcon$SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOP', {
    get: MaterialIcon$SHOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOP_TWO', {
    get: MaterialIcon$SHOP_TWO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOPPING_BASKET', {
    get: MaterialIcon$SHOPPING_BASKET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOPPING_CART', {
    get: MaterialIcon$SHOPPING_CART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHORT_TEXT', {
    get: MaterialIcon$SHORT_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHOW_CHART', {
    get: MaterialIcon$SHOW_CHART_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SHUFFLE', {
    get: MaterialIcon$SHUFFLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_4_BAR', {
    get: MaterialIcon$SIGNAL_CELLULAR_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR', {
    get: MaterialIcon$SIGNAL_CELLULAR_CONNECTED_NO_INTERNET_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_NO_SIM', {
    get: MaterialIcon$SIGNAL_CELLULAR_NO_SIM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_NULL', {
    get: MaterialIcon$SIGNAL_CELLULAR_NULL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_CELLULAR_OFF', {
    get: MaterialIcon$SIGNAL_CELLULAR_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_4_BAR', {
    get: MaterialIcon$SIGNAL_WIFI_4_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_4_BAR_LOCK', {
    get: MaterialIcon$SIGNAL_WIFI_4_BAR_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIGNAL_WIFI_OFF', {
    get: MaterialIcon$SIGNAL_WIFI_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIM_CARD', {
    get: MaterialIcon$SIM_CARD_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SIM_CARD_ALERT', {
    get: MaterialIcon$SIM_CARD_ALERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SKIP_NEXT', {
    get: MaterialIcon$SKIP_NEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SKIP_PREVIOUS', {
    get: MaterialIcon$SKIP_PREVIOUS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SLIDESHOW', {
    get: MaterialIcon$SLIDESHOW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SLOW_MOTION_VIDEO', {
    get: MaterialIcon$SLOW_MOTION_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMARTPHONE', {
    get: MaterialIcon$SMARTPHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMOKE_FREE', {
    get: MaterialIcon$SMOKE_FREE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMOKING_ROOMS', {
    get: MaterialIcon$SMOKING_ROOMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMS', {
    get: MaterialIcon$SMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SMS_FAILED', {
    get: MaterialIcon$SMS_FAILED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SNOOZE', {
    get: MaterialIcon$SNOOZE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SORT', {
    get: MaterialIcon$SORT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SORT_BY_ALPHA', {
    get: MaterialIcon$SORT_BY_ALPHA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPA', {
    get: MaterialIcon$SPA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPACE_BAR', {
    get: MaterialIcon$SPACE_BAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER', {
    get: MaterialIcon$SPEAKER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_GROUP', {
    get: MaterialIcon$SPEAKER_GROUP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_NOTES', {
    get: MaterialIcon$SPEAKER_NOTES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_NOTES_OFF', {
    get: MaterialIcon$SPEAKER_NOTES_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPEAKER_PHONE', {
    get: MaterialIcon$SPEAKER_PHONE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SPELLCHECK', {
    get: MaterialIcon$SPELLCHECK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR', {
    get: MaterialIcon$STAR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR_BORDER', {
    get: MaterialIcon$STAR_BORDER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAR_HALF', {
    get: MaterialIcon$STAR_HALF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STARS', {
    get: MaterialIcon$STARS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_CURRENT_LANDSCAPE', {
    get: MaterialIcon$STAY_CURRENT_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_CURRENT_PORTRAIT', {
    get: MaterialIcon$STAY_CURRENT_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_PRIMARY_LANDSCAPE', {
    get: MaterialIcon$STAY_PRIMARY_LANDSCAPE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STAY_PRIMARY_PORTRAIT', {
    get: MaterialIcon$STAY_PRIMARY_PORTRAIT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STOP', {
    get: MaterialIcon$STOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STOP_SCREEN_SHARE', {
    get: MaterialIcon$STOP_SCREEN_SHARE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORAGE', {
    get: MaterialIcon$STORAGE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORE', {
    get: MaterialIcon$STORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STORE_MALL_DIRECTORY', {
    get: MaterialIcon$STORE_MALL_DIRECTORY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STRAIGHTEN', {
    get: MaterialIcon$STRAIGHTEN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STREETVIEW', {
    get: MaterialIcon$STREETVIEW_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STRIKETHROUGH_S', {
    get: MaterialIcon$STRIKETHROUGH_S_getInstance
  });
  Object.defineProperty(MaterialIcon, 'STYLE', {
    get: MaterialIcon$STYLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBDIRECTORY_ARROW_LEFT', {
    get: MaterialIcon$SUBDIRECTORY_ARROW_LEFT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBDIRECTORY_ARROW_RIGHT', {
    get: MaterialIcon$SUBDIRECTORY_ARROW_RIGHT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBJECT', {
    get: MaterialIcon$SUBJECT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBSCRIPTIONS', {
    get: MaterialIcon$SUBSCRIPTIONS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBTITLES', {
    get: MaterialIcon$SUBTITLES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUBWAY', {
    get: MaterialIcon$SUBWAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SUPERVISOR_ACCOUNT', {
    get: MaterialIcon$SUPERVISOR_ACCOUNT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SURROUND_SOUND', {
    get: MaterialIcon$SURROUND_SOUND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_CALLS', {
    get: MaterialIcon$SWAP_CALLS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_HORIZ', {
    get: MaterialIcon$SWAP_HORIZ_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_VERT', {
    get: MaterialIcon$SWAP_VERT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWAP_VERTICAL_CIRCLE', {
    get: MaterialIcon$SWAP_VERTICAL_CIRCLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWITCH_CAMERA', {
    get: MaterialIcon$SWITCH_CAMERA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SWITCH_VIDEO', {
    get: MaterialIcon$SWITCH_VIDEO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC', {
    get: MaterialIcon$SYNC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC_DISABLED', {
    get: MaterialIcon$SYNC_DISABLED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYNC_PROBLEM', {
    get: MaterialIcon$SYNC_PROBLEM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYSTEM_UPDATE', {
    get: MaterialIcon$SYSTEM_UPDATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'SYSTEM_UPDATE_ALT', {
    get: MaterialIcon$SYSTEM_UPDATE_ALT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAB', {
    get: MaterialIcon$TAB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAB_UNSELECTED', {
    get: MaterialIcon$TAB_UNSELECTED_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET', {
    get: MaterialIcon$TABLET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET_ANDROID', {
    get: MaterialIcon$TABLET_ANDROID_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TABLET_MAC', {
    get: MaterialIcon$TABLET_MAC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAG_FACES', {
    get: MaterialIcon$TAG_FACES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TAP_AND_PLAY', {
    get: MaterialIcon$TAP_AND_PLAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TERRAIN', {
    get: MaterialIcon$TERRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXT_FIELDS', {
    get: MaterialIcon$TEXT_FIELDS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXT_FORMAT', {
    get: MaterialIcon$TEXT_FORMAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXTSMS', {
    get: MaterialIcon$TEXTSMS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TEXTURE', {
    get: MaterialIcon$TEXTURE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THEATERS', {
    get: MaterialIcon$THEATERS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMB_DOWN', {
    get: MaterialIcon$THUMB_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMB_UP', {
    get: MaterialIcon$THUMB_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'THUMBS_UP_DOWN', {
    get: MaterialIcon$THUMBS_UP_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIME_TO_LEAVE', {
    get: MaterialIcon$TIME_TO_LEAVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMELAPSE', {
    get: MaterialIcon$TIMELAPSE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMELINE', {
    get: MaterialIcon$TIMELINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER', {
    get: MaterialIcon$TIMER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_10', {
    get: MaterialIcon$TIMER_10_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_3', {
    get: MaterialIcon$TIMER_3_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TIMER_OFF', {
    get: MaterialIcon$TIMER_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TITLE', {
    get: MaterialIcon$TITLE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOC', {
    get: MaterialIcon$TOC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TODAY', {
    get: MaterialIcon$TODAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOLL', {
    get: MaterialIcon$TOLL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TONALITY', {
    get: MaterialIcon$TONALITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOUCH_APP', {
    get: MaterialIcon$TOUCH_APP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TOYS', {
    get: MaterialIcon$TOYS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRACK_CHANGES', {
    get: MaterialIcon$TRACK_CHANGES_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAFFIC', {
    get: MaterialIcon$TRAFFIC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAIN', {
    get: MaterialIcon$TRAIN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRAM', {
    get: MaterialIcon$TRAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSFER_WITHIN_A_STATION', {
    get: MaterialIcon$TRANSFER_WITHIN_A_STATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSFORM', {
    get: MaterialIcon$TRANSFORM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRANSLATE', {
    get: MaterialIcon$TRANSLATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_DOWN', {
    get: MaterialIcon$TRENDING_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_FLAT', {
    get: MaterialIcon$TRENDING_FLAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TRENDING_UP', {
    get: MaterialIcon$TRENDING_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TUNE', {
    get: MaterialIcon$TUNE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TURNED_IN', {
    get: MaterialIcon$TURNED_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TURNED_IN_NOT', {
    get: MaterialIcon$TURNED_IN_NOT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'TV', {
    get: MaterialIcon$TV_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNARCHIVE', {
    get: MaterialIcon$UNARCHIVE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNDO', {
    get: MaterialIcon$UNDO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNFOLD_LESS', {
    get: MaterialIcon$UNFOLD_LESS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UNFOLD_MORE', {
    get: MaterialIcon$UNFOLD_MORE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'UPDATE', {
    get: MaterialIcon$UPDATE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'USB', {
    get: MaterialIcon$USB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERIFIED_USER', {
    get: MaterialIcon$VERIFIED_USER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_BOTTOM', {
    get: MaterialIcon$VERTICAL_ALIGN_BOTTOM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_CENTER', {
    get: MaterialIcon$VERTICAL_ALIGN_CENTER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VERTICAL_ALIGN_TOP', {
    get: MaterialIcon$VERTICAL_ALIGN_TOP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIBRATION', {
    get: MaterialIcon$VIBRATION_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_CALL', {
    get: MaterialIcon$VIDEO_CALL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_LABEL', {
    get: MaterialIcon$VIDEO_LABEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEO_LIBRARY', {
    get: MaterialIcon$VIDEO_LIBRARY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOCAM', {
    get: MaterialIcon$VIDEOCAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOCAM_OFF', {
    get: MaterialIcon$VIDEOCAM_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIDEOGAME_ASSET', {
    get: MaterialIcon$VIDEOGAME_ASSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_AGENDA', {
    get: MaterialIcon$VIEW_AGENDA_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_ARRAY', {
    get: MaterialIcon$VIEW_ARRAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_CAROUSEL', {
    get: MaterialIcon$VIEW_CAROUSEL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COLUMN', {
    get: MaterialIcon$VIEW_COLUMN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COMFY', {
    get: MaterialIcon$VIEW_COMFY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_COMPACT', {
    get: MaterialIcon$VIEW_COMPACT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_DAY', {
    get: MaterialIcon$VIEW_DAY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_HEADLINE', {
    get: MaterialIcon$VIEW_HEADLINE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_LIST', {
    get: MaterialIcon$VIEW_LIST_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_MODULE', {
    get: MaterialIcon$VIEW_MODULE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_QUILT', {
    get: MaterialIcon$VIEW_QUILT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_STREAM', {
    get: MaterialIcon$VIEW_STREAM_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIEW_WEEK', {
    get: MaterialIcon$VIEW_WEEK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VIGNETTE', {
    get: MaterialIcon$VIGNETTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VISIBILITY', {
    get: MaterialIcon$VISIBILITY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VISIBILITY_OFF', {
    get: MaterialIcon$VISIBILITY_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOICE_CHAT', {
    get: MaterialIcon$VOICE_CHAT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOICEMAIL', {
    get: MaterialIcon$VOICEMAIL_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_DOWN', {
    get: MaterialIcon$VOLUME_DOWN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_MUTE', {
    get: MaterialIcon$VOLUME_MUTE_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_OFF', {
    get: MaterialIcon$VOLUME_OFF_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VOLUME_UP', {
    get: MaterialIcon$VOLUME_UP_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VPN_KEY', {
    get: MaterialIcon$VPN_KEY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'VPN_LOCK', {
    get: MaterialIcon$VPN_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WALLPAPER', {
    get: MaterialIcon$WALLPAPER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WARNING', {
    get: MaterialIcon$WARNING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WATCH', {
    get: MaterialIcon$WATCH_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WATCH_LATER', {
    get: MaterialIcon$WATCH_LATER_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_AUTO', {
    get: MaterialIcon$WB_AUTO_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_CLOUDY', {
    get: MaterialIcon$WB_CLOUDY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_INCANDESCENT', {
    get: MaterialIcon$WB_INCANDESCENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_IRIDESCENT', {
    get: MaterialIcon$WB_IRIDESCENT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WB_SUNNY', {
    get: MaterialIcon$WB_SUNNY_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WC', {
    get: MaterialIcon$WC_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEB', {
    get: MaterialIcon$WEB_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEB_ASSET', {
    get: MaterialIcon$WEB_ASSET_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WEEKEND', {
    get: MaterialIcon$WEEKEND_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WHATSHOT', {
    get: MaterialIcon$WHATSHOT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIDGETS', {
    get: MaterialIcon$WIDGETS_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI', {
    get: MaterialIcon$WIFI_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI_LOCK', {
    get: MaterialIcon$WIFI_LOCK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WIFI_TETHERING', {
    get: MaterialIcon$WIFI_TETHERING_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WORK', {
    get: MaterialIcon$WORK_getInstance
  });
  Object.defineProperty(MaterialIcon, 'WRAP_TEXT', {
    get: MaterialIcon$WRAP_TEXT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'YOUTUBE_SEARCHED_FOR', {
    get: MaterialIcon$YOUTUBE_SEARCHED_FOR_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_IN', {
    get: MaterialIcon$ZOOM_IN_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_OUT', {
    get: MaterialIcon$ZOOM_OUT_getInstance
  });
  Object.defineProperty(MaterialIcon, 'ZOOM_OUT_MAP', {
    get: MaterialIcon$ZOOM_OUT_MAP_getInstance
  });
  package$components.MaterialIcon = MaterialIcon;
  package$components.OptionView = OptionView;
  package$components.SelectView = SelectView;
  package$components.selectView_of9t8j$ = selectView;
  package$components.selectView_usff2y$ = selectView_0;
  package$components.selectView_8ph9k4$ = selectView_1;
  package$components.Table = Table;
  package$components.table_xx7pay$ = table;
  package$components.TableCaption = TableCaption;
  package$components.caption_drsbkx$ = caption;
  package$components.TableCell = TableCell;
  package$components.cell_1n6lke$ = cell;
  package$components.head_1n6lke$ = head;
  package$components.TableRow = TableRow;
  package$components.row_f5wxgu$ = row;
  Object.defineProperty(TableSection$Type, 'THEAD', {
    get: TableSection$Type$THEAD_getInstance
  });
  Object.defineProperty(TableSection$Type, 'TBODY', {
    get: TableSection$Type$TBODY_getInstance
  });
  Object.defineProperty(TableSection$Type, 'TFOOT', {
    get: TableSection$Type$TFOOT_getInstance
  });
  TableSection.Type = TableSection$Type;
  package$components.TableSection = TableSection;
  package$components.thead_u6ce8t$ = thead;
  package$components.tbody_u6ce8t$ = tbody;
  package$components.tfoot_u6ce8t$ = tfoot;
  Object.defineProperty(TextArea, 'Companion', {
    get: TextArea$Companion_getInstance
  });
  package$components.TextArea = TextArea;
  package$components.textArea_49outt$ = textArea;
  package$components.textArea_eqk8y0$ = textArea_0;
  package$components.textArea_oiktkq$ = textArea_1;
  package$components.textArea_wkxjfl$ = textArea_2;
  Object.defineProperty(TextView, 'Companion', {
    get: TextView$Companion_getInstance
  });
  package$components.TextView = TextView;
  package$components.textView_4w5e81$ = textView;
  package$components.textView_56r808$ = textView_0;
  package$kwebview.iterator_d3eamm$ = iterator_0;
  package$kwebview.toDashCase_pdl1vz$ = toDashCase;
  package$kwebview.toPoint_apx4ki$ = toPoint;
  package$kwebview.toPoint_tc7l1e$ = toPoint_0;
  package$kwebview.toDimension_gf0w06$ = toDimension;
  package$kwebview.format_g814bf$ = format;
  package$kwebview.delete_hwpqgh$ = delete_0;
  package$kwebview.async_n53o35$ = async;
  package$kwebview.interval_n53o35$ = interval;
  package$kwebview.clearTimeout_za3lpa$ = clearTimeout;
  package$kwebview.clearInterval_za3lpa$ = clearInterval;
  package$kwebview.get_9y3p5f$ = get_1;
  package$kwebview.postForm_9y3p5f$ = postForm;
  package$kwebview.postJson_omj2vp$ = postJson;
  package$kwebview.jsonObject_5ij4lk$ = jsonObject;
  package$kwebview.jsonArray_5ij4lk$ = jsonArray;
  var package$extra = package$kwebview.extra || (package$kwebview.extra = {});
  package$extra.listFactory_gfx4w4$ = listFactory;
  package$extra.listFactory_37r4tr$ = listFactory_0;
  Object.defineProperty(package$kwebview, 'i18n', {
    get: i18n_getInstance
  });
  package$kwebview.InternationalizationError = InternationalizationError;
  package$kwebview.t_61zpoe$ = t;
  package$kwebview.t_25kzsl$ = t_0;
  package$kwebview.t_ctfcqn$ = t_1;
  package$kwebview.t_xfy9o8$ = t_2;
  package$kwebview.t_adnhmn$ = t_3;
  package$kwebview.t_saeb5h$ = t_4;
  var package$io = _.io || (_.io = {});
  var package$framed = package$io.framed || (package$io.framed = {});
  var package$framework = package$framed.framework || (package$framed.framework = {});
  package$framework.ModelTree = ModelTree;
  var package$matcher = package$framework.matcher || (package$framework.matcher = {});
  package$matcher.Matcher = Matcher;
  package$framework.Context = Context;
  package$framework.ModelRelation = ModelRelation;
  Object.defineProperty(PredefinedMatch$Type, 'MATCH', {
    get: PredefinedMatch$Type$MATCH_getInstance
  });
  Object.defineProperty(PredefinedMatch$Type, 'NOMATCH', {
    get: PredefinedMatch$Type$NOMATCH_getInstance
  });
  PredefinedMatch.Type = PredefinedMatch$Type;
  Object.defineProperty(PredefinedMatch, 'Companion', {
    get: PredefinedMatch$Companion_getInstance
  });
  Object.defineProperty(PredefinedMatch, '$serializer', {
    get: PredefinedMatch$$serializer_getInstance
  });
  package$matcher.PredefinedMatch_init_jbzc5r$ = PredefinedMatch_init;
  package$matcher.PredefinedMatch = PredefinedMatch;
  package$matcher.matchStrings_puj7f4$ = matchStrings;
  Object.defineProperty(TreeMatcher, 'Companion', {
    get: TreeMatcher$Companion_getInstance
  });
  package$matcher.TreeMatcher = TreeMatcher;
  var package$verifier = package$framework.verifier || (package$framework.verifier = {});
  package$verifier.BpmnVerifier = BpmnVerifier;
  package$verifier.BrosVerifier = BrosVerifier;
  Object.defineProperty(Result, 'Companion', {
    get: Result$Companion_getInstance
  });
  Object.defineProperty(Result$Type, 'POSITIVE', {
    get: Result$Type$POSITIVE_getInstance
  });
  Object.defineProperty(Result$Type, 'NEGATIVE', {
    get: Result$Type$NEGATIVE_getInstance
  });
  Result.Type = Result$Type;
  package$verifier.Result = Result;
  package$verifier.TreeVerifier = TreeVerifier;
  package$verifier.Verifier = Verifier;
  package$framed.main = main;
  package$framed.init = init_0;
  Object.defineProperty(BpmnModel, 'Companion', {
    get: BpmnModel$Companion_getInstance
  });
  BpmnModel.Participant = BpmnModel$Participant;
  var package$model = package$framed.model || (package$framed.model = {});
  var package$bpmn = package$model.bpmn || (package$model.bpmn = {});
  package$bpmn.BpmnModel = BpmnModel;
  var package$model_0 = package$bpmn.model || (package$bpmn.model = {});
  package$model_0.BpmnElement = BpmnElement;
  Object.defineProperty(BpmnEvent, 'Companion', {
    get: BpmnEvent$Companion_getInstance
  });
  package$model_0.BpmnEvent = BpmnEvent;
  package$model_0.BpmnStartEvent = BpmnStartEvent;
  package$model_0.BpmnEndEvent = BpmnEndEvent;
  package$model_0.BpmnIntermediateEvent = BpmnIntermediateEvent;
  Object.defineProperty(BpmnFlowObject, 'Companion', {
    get: BpmnFlowObject$Companion_getInstance
  });
  package$model_0.BpmnFlowObject = BpmnFlowObject;
  Object.defineProperty(BpmnGateway, 'Companion', {
    get: BpmnGateway$Companion_getInstance
  });
  package$model_0.BpmnGateway = BpmnGateway;
  Object.defineProperty(BpmnLane, 'Companion', {
    get: BpmnLane$Companion_getInstance
  });
  package$model_0.BpmnLane = BpmnLane;
  Object.defineProperty(BpmnLaneSet, 'Companion', {
    get: BpmnLaneSet$Companion_getInstance
  });
  package$model_0.BpmnLaneSet = BpmnLaneSet;
  Object.defineProperty(BpmnMessageFlow, 'Companion', {
    get: BpmnMessageFlow$Companion_getInstance
  });
  package$model_0.BpmnMessageFlow = BpmnMessageFlow;
  Object.defineProperty(BpmnProcess, 'Companion', {
    get: BpmnProcess$Companion_getInstance
  });
  package$model_0.BpmnProcess = BpmnProcess;
  Object.defineProperty(BpmnSequenceFlow, 'Companion', {
    get: BpmnSequenceFlow$Companion_getInstance
  });
  package$model_0.BpmnSequenceFlow = BpmnSequenceFlow;
  Object.defineProperty(BpmnTask, 'Companion', {
    get: BpmnTask$Companion_getInstance
  });
  package$model_0.BpmnTask = BpmnTask;
  var package$xml = package$bpmn.xml || (package$bpmn.xml = {});
  Object.defineProperty(package$xml, 'BpmnParser', {
    get: BpmnParser_getInstance
  });
  package$xml.XmlElement = XmlElement;
  Object.defineProperty(BrosDocument, 'Companion', {
    get: BrosDocument$Companion_getInstance
  });
  Object.defineProperty(BrosDocument, '$serializer', {
    get: BrosDocument$$serializer_getInstance
  });
  var package$bros = package$model.bros || (package$model.bros = {});
  package$bros.BrosDocument_init_1wkwt0$ = BrosDocument_init;
  package$bros.BrosDocument = BrosDocument;
  Object.defineProperty(package$bros, 'BrosParser', {
    get: BrosParser_getInstance
  });
  Object.defineProperty(Connections, 'Companion', {
    get: Connections$Companion_getInstance
  });
  Object.defineProperty(Connections, '$serializer', {
    get: Connections$$serializer_getInstance
  });
  package$bros.Connections_init_k8yhnn$ = Connections_init;
  package$bros.Connections = Connections;
  Object.defineProperty(package$bros, 'PolymorphicClassDesc', {
    get: PolymorphicClassDesc_getInstance
  });
  Object.defineProperty(package$bros, 'PolymorphicListSerializer', {
    get: PolymorphicListSerializer_getInstance
  });
  Object.defineProperty(package$bros, 'PolymorphicSerializer', {
    get: PolymorphicSerializer_getInstance
  });
  Object.defineProperty(package$bros, 'PolymorphicSetSerializer', {
    get: PolymorphicSetSerializer_getInstance
  });
  Object.defineProperty(BrosAggregation, 'Companion', {
    get: BrosAggregation$Companion_getInstance
  });
  Object.defineProperty(BrosAggregation, '$serializer', {
    get: BrosAggregation$$serializer_getInstance
  });
  var package$model_1 = package$bros.model || (package$bros.model = {});
  package$model_1.BrosAggregation_init_nweamq$ = BrosAggregation_init;
  package$model_1.BrosAggregation_init_3pjtqy$ = BrosAggregation_init_0;
  package$model_1.BrosAggregation = BrosAggregation;
  Object.defineProperty(BrosAttribute, 'Companion', {
    get: BrosAttribute$Companion_getInstance
  });
  Object.defineProperty(BrosAttribute, '$serializer', {
    get: BrosAttribute$$serializer_getInstance
  });
  package$model_1.BrosAttribute_init_k0evbt$ = BrosAttribute_init;
  package$model_1.BrosAttribute_init_7bw1ei$ = BrosAttribute_init_0;
  package$model_1.BrosAttribute = BrosAttribute;
  Object.defineProperty(BrosClass, 'Companion', {
    get: BrosClass$Companion_getInstance
  });
  Object.defineProperty(BrosClass, '$serializer', {
    get: BrosClass$$serializer_getInstance
  });
  package$model_1.BrosClass_init_3jxczj$ = BrosClass_init;
  package$model_1.BrosClass_init_c80cea$ = BrosClass_init_0;
  package$model_1.BrosClass = BrosClass;
  Object.defineProperty(BrosCompartment, 'Companion', {
    get: BrosCompartment$Companion_getInstance
  });
  Object.defineProperty(BrosCompartment, '$serializer', {
    get: BrosCompartment$$serializer_getInstance
  });
  package$model_1.BrosCompartment_init_ewlbxz$ = BrosCompartment_init;
  package$model_1.BrosCompartment_init_6eflp8$ = BrosCompartment_init_0;
  package$model_1.BrosCompartment = BrosCompartment;
  Object.defineProperty(BrosComposition, 'Companion', {
    get: BrosComposition$Companion_getInstance
  });
  Object.defineProperty(BrosComposition, '$serializer', {
    get: BrosComposition$$serializer_getInstance
  });
  package$model_1.BrosComposition_init_nweamq$ = BrosComposition_init;
  package$model_1.BrosComposition_init_3pjtqy$ = BrosComposition_init_0;
  package$model_1.BrosComposition = BrosComposition;
  Object.defineProperty(BrosConnection, 'Companion', {
    get: BrosConnection$Companion_getInstance
  });
  Object.defineProperty(BrosConnection, '$serializer', {
    get: BrosConnection$$serializer_getInstance
  });
  package$model_1.BrosConnection_init_kcx6dp$ = BrosConnection_init;
  package$model_1.BrosConnection = BrosConnection;
  Object.defineProperty(BrosCreateRelation, 'Companion', {
    get: BrosCreateRelation$Companion_getInstance
  });
  Object.defineProperty(BrosCreateRelation, '$serializer', {
    get: BrosCreateRelation$$serializer_getInstance
  });
  package$model_1.BrosCreateRelation_init_qq224u$ = BrosCreateRelation_init;
  package$model_1.BrosCreateRelation_init_3pjtqy$ = BrosCreateRelation_init_0;
  package$model_1.BrosCreateRelation = BrosCreateRelation;
  Object.defineProperty(BrosDestroyRelation, 'Companion', {
    get: BrosDestroyRelation$Companion_getInstance
  });
  Object.defineProperty(BrosDestroyRelation, '$serializer', {
    get: BrosDestroyRelation$$serializer_getInstance
  });
  package$model_1.BrosDestroyRelation_init_qq224u$ = BrosDestroyRelation_init;
  package$model_1.BrosDestroyRelation_init_3pjtqy$ = BrosDestroyRelation_init_0;
  package$model_1.BrosDestroyRelation = BrosDestroyRelation;
  Object.defineProperty(BrosElement, 'Companion', {
    get: BrosElement$Companion_getInstance
  });
  Object.defineProperty(BrosElement, '$serializer', {
    get: BrosElement$$serializer_getInstance
  });
  package$model_1.BrosElement_init_s7yfif$ = BrosElement_init;
  package$model_1.BrosElement = BrosElement;
  Object.defineProperty(BrosEvent, 'Companion', {
    get: BrosEvent$Companion_getInstance
  });
  Object.defineProperty(BrosEvent, '$serializer', {
    get: BrosEvent$$serializer_getInstance
  });
  package$model_1.BrosEvent_init_hh5xka$ = BrosEvent_init;
  package$model_1.BrosEvent_init_nxlmsc$ = BrosEvent_init_0;
  package$model_1.BrosEvent = BrosEvent;
  Object.defineProperty(BrosEventType, 'TIMER', {
    get: BrosEventType$TIMER_getInstance
  });
  Object.defineProperty(BrosEventType, 'MESSAGE', {
    get: BrosEventType$MESSAGE_getInstance
  });
  Object.defineProperty(BrosEventType, 'ERROR', {
    get: BrosEventType$ERROR_getInstance
  });
  Object.defineProperty(BrosEventType, 'STANDARD', {
    get: BrosEventType$STANDARD_getInstance
  });
  Object.defineProperty(BrosEventType, 'CONDITION', {
    get: BrosEventType$CONDITION_getInstance
  });
  Object.defineProperty(BrosEventType, 'SIGNAL', {
    get: BrosEventType$SIGNAL_getInstance
  });
  package$model_1.BrosEventType = BrosEventType;
  Object.defineProperty(BrosFulfillment, 'Companion', {
    get: BrosFulfillment$Companion_getInstance
  });
  Object.defineProperty(BrosFulfillment, '$serializer', {
    get: BrosFulfillment$$serializer_getInstance
  });
  package$model_1.BrosFulfillment_init_qq224u$ = BrosFulfillment_init;
  package$model_1.BrosFulfillment_init_3pjtqy$ = BrosFulfillment_init_0;
  package$model_1.BrosFulfillment = BrosFulfillment;
  Object.defineProperty(BrosInheritance, 'Companion', {
    get: BrosInheritance$Companion_getInstance
  });
  Object.defineProperty(BrosInheritance, '$serializer', {
    get: BrosInheritance$$serializer_getInstance
  });
  package$model_1.BrosInheritance_init_nweamq$ = BrosInheritance_init;
  package$model_1.BrosInheritance_init_3pjtqy$ = BrosInheritance_init_0;
  package$model_1.BrosInheritance = BrosInheritance;
  Object.defineProperty(BrosMethod, 'Companion', {
    get: BrosMethod$Companion_getInstance
  });
  Object.defineProperty(BrosMethod, '$serializer', {
    get: BrosMethod$$serializer_getInstance
  });
  package$model_1.BrosMethod_init_j5ynh1$ = BrosMethod_init;
  package$model_1.BrosMethod_init_wjtuhd$ = BrosMethod_init_0;
  package$model_1.BrosMethod = BrosMethod;
  Object.defineProperty(BrosObject, 'Companion', {
    get: BrosObject$Companion_getInstance
  });
  Object.defineProperty(BrosObject, '$serializer', {
    get: BrosObject$$serializer_getInstance
  });
  package$model_1.BrosObject_init_s7yfif$ = BrosObject_init;
  package$model_1.BrosObject = BrosObject;
  Object.defineProperty(BrosObjectGroup, 'Companion', {
    get: BrosObjectGroup$Companion_getInstance
  });
  Object.defineProperty(BrosObjectGroup, '$serializer', {
    get: BrosObjectGroup$$serializer_getInstance
  });
  package$model_1.BrosObjectGroup_init_s7yfif$ = BrosObjectGroup_init;
  package$model_1.BrosObjectGroup = BrosObjectGroup;
  Object.defineProperty(BrosPackage, 'Companion', {
    get: BrosPackage$Companion_getInstance
  });
  Object.defineProperty(BrosPackage, '$serializer', {
    get: BrosPackage$$serializer_getInstance
  });
  package$model_1.BrosPackage_init_54fzv4$ = BrosPackage_init;
  package$model_1.BrosPackage_init_irkink$ = BrosPackage_init_0;
  package$model_1.BrosPackage = BrosPackage;
  Object.defineProperty(BrosParameter, 'Companion', {
    get: BrosParameter$Companion_getInstance
  });
  Object.defineProperty(BrosParameter, '$serializer', {
    get: BrosParameter$$serializer_getInstance
  });
  package$model_1.BrosParameter_init_k0evbt$ = BrosParameter_init;
  package$model_1.BrosParameter_init_naagj7$ = BrosParameter_init_0;
  package$model_1.BrosParameter = BrosParameter;
  Object.defineProperty(BrosRelationship, 'Companion', {
    get: BrosRelationship$Companion_getInstance
  });
  Object.defineProperty(BrosRelationship, '$serializer', {
    get: BrosRelationship$$serializer_getInstance
  });
  package$model_1.BrosRelationship_init_nweamq$ = BrosRelationship_init;
  package$model_1.BrosRelationship_init_3pjtqy$ = BrosRelationship_init_0;
  package$model_1.BrosRelationship = BrosRelationship;
  Object.defineProperty(BrosReturnEvent, 'Companion', {
    get: BrosReturnEvent$Companion_getInstance
  });
  Object.defineProperty(BrosReturnEvent, '$serializer', {
    get: BrosReturnEvent$$serializer_getInstance
  });
  package$model_1.BrosReturnEvent_init_hh5xka$ = BrosReturnEvent_init;
  package$model_1.BrosReturnEvent_init_16s6ms$ = BrosReturnEvent_init_0;
  package$model_1.BrosReturnEvent = BrosReturnEvent;
  Object.defineProperty(BrosRoleType, 'Companion', {
    get: BrosRoleType$Companion_getInstance
  });
  Object.defineProperty(BrosRoleType, '$serializer', {
    get: BrosRoleType$$serializer_getInstance
  });
  package$model_1.BrosRoleType_init_3jxczj$ = BrosRoleType_init;
  package$model_1.BrosRoleType_init_ew0mea$ = BrosRoleType_init_0;
  package$model_1.BrosRoleType = BrosRoleType;
  Object.defineProperty(BrosScene, 'Companion', {
    get: BrosScene$Companion_getInstance
  });
  Object.defineProperty(BrosScene, '$serializer', {
    get: BrosScene$$serializer_getInstance
  });
  package$model_1.BrosScene_init_z9tg0l$ = BrosScene_init;
  package$model_1.BrosScene_init_3zlsk6$ = BrosScene_init_0;
  package$model_1.BrosScene = BrosScene;
  var package$modules = package$framed.modules || (package$framed.modules = {});
  Object.defineProperty(package$modules, 'activeModules', {
    get: function () {
      return activeModules;
    }
  });
  package$modules.setupRule1_9k1nkx$ = setupRule1;
  package$modules.setupRule2_9k1nkx$ = setupRule2;
  package$modules.setupRule3_9k1nkx$ = setupRule3;
  package$modules.setupRule4_9k1nkx$ = setupRule4;
  package$modules.setupRule5_9k1nkx$ = setupRule5;
  package$modules.setupRule6_9k1nkx$ = setupRule6;
  $$importsForInline$$.KObserve = $module$KObserve;
  var package$ui = package$framed.ui || (package$framed.ui = {});
  package$ui.Application = Application;
  package$ui.load_vaoiim$ = load;
  Object.defineProperty(package$ui, 'CopyView', {
    get: CopyView_getInstance
  });
  Object.defineProperty(package$ui, 'FeatureState', {
    get: FeatureState_getInstance
  });
  package$ui.FileTextBox = FileTextBox;
  Object.defineProperty(ResultEntry$Type, 'ERROR', {
    get: ResultEntry$Type$ERROR_getInstance
  });
  Object.defineProperty(ResultEntry$Type, 'WARN', {
    get: ResultEntry$Type$WARN_getInstance
  });
  Object.defineProperty(ResultEntry$Type, 'INFO', {
    get: ResultEntry$Type$INFO_getInstance
  });
  Object.defineProperty(ResultEntry$Type, 'ACCEPT', {
    get: ResultEntry$Type$ACCEPT_getInstance
  });
  ResultEntry.Type = ResultEntry$Type;
  package$ui.ResultEntry = ResultEntry;
  package$ui.ResultFeature = ResultFeature;
  package$ui.ResultField = ResultField;
  ResultStats.Help = ResultStats$Help;
  package$ui.ResultStats = ResultStats;
  package$ui.ResultTab = ResultTab;
  package$ui.ResultTabList = ResultTabList;
  package$ui.ResultView = ResultView;
  Object.defineProperty(UpdatePredefinedMatch$Type, 'ADD', {
    get: UpdatePredefinedMatch$Type$ADD_getInstance
  });
  Object.defineProperty(UpdatePredefinedMatch$Type, 'DELETE', {
    get: UpdatePredefinedMatch$Type$DELETE_getInstance
  });
  UpdatePredefinedMatch.Type = UpdatePredefinedMatch$Type;
  package$ui.UpdatePredefinedMatch = UpdatePredefinedMatch;
  package$framed.generateBpmnTree_p0owga$ = generateBpmnTree;
  package$framed.generateBrosTree_e1jaj2$ = generateBrosTree;
  Object.defineProperty(RenderableData, 'Companion', {
    get: RenderableData$Companion_getInstance
  });
  package$framed.RenderableData = RenderableData;
  package$framed.verify_6q13v1$ = verify;
  Object.defineProperty(BpmnVerifier.prototype, 'name', Object.getOwnPropertyDescriptor(Verifier.prototype, 'name'));
  Context$verifyBpmn$ObjectLiteral.prototype.filterBpmn_ay07g6$ = BpmnVerifier.prototype.filterBpmn_ay07g6$;
  Context$verifyBpmn$ObjectLiteral.prototype.filterBros_yl4c2y$ = BpmnVerifier.prototype.filterBros_yl4c2y$;
  Context$verifyBpmn$ObjectLiteral.prototype.verifyBros_yl4c2y$ = BpmnVerifier.prototype.verifyBros_yl4c2y$;
  Object.defineProperty(BrosVerifier.prototype, 'name', Object.getOwnPropertyDescriptor(Verifier.prototype, 'name'));
  Context$verifyBros$ObjectLiteral.prototype.filterBpmn_ay07g6$ = BrosVerifier.prototype.filterBpmn_ay07g6$;
  Context$verifyBros$ObjectLiteral.prototype.filterBros_yl4c2y$ = BrosVerifier.prototype.filterBros_yl4c2y$;
  Context$verifyBros$ObjectLiteral.prototype.verifyBpmn_ay07g6$ = BrosVerifier.prototype.verifyBpmn_ay07g6$;
  PredefinedMatch$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BpmnModel.prototype.build_fh2yzz$ = BpmnElement.prototype.build_fh2yzz$;
  BpmnModel.prototype.getAllChildren = BpmnElement.prototype.getAllChildren;
  BpmnModel.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnFlowObject.prototype.build_fh2yzz$ = BpmnElement.prototype.build_fh2yzz$;
  BpmnFlowObject.prototype.remove_h0xiwz$ = BpmnElement.prototype.remove_h0xiwz$;
  BpmnFlowObject.prototype.getAllChildren = BpmnElement.prototype.getAllChildren;
  BpmnFlowObject.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnEvent.prototype.build_fh2yzz$ = BpmnFlowObject.prototype.build_fh2yzz$;
  BpmnEvent.prototype.remove_h0xiwz$ = BpmnFlowObject.prototype.remove_h0xiwz$;
  BpmnEvent.prototype.getAllChildren = BpmnFlowObject.prototype.getAllChildren;
  BpmnEvent.prototype.stringify = BpmnFlowObject.prototype.stringify;
  BpmnStartEvent.prototype.build_fh2yzz$ = BpmnEvent.prototype.build_fh2yzz$;
  BpmnStartEvent.prototype.remove_h0xiwz$ = BpmnEvent.prototype.remove_h0xiwz$;
  BpmnStartEvent.prototype.getAllChildren = BpmnEvent.prototype.getAllChildren;
  BpmnStartEvent.prototype.stringify = BpmnEvent.prototype.stringify;
  BpmnEndEvent.prototype.build_fh2yzz$ = BpmnEvent.prototype.build_fh2yzz$;
  BpmnEndEvent.prototype.remove_h0xiwz$ = BpmnEvent.prototype.remove_h0xiwz$;
  BpmnEndEvent.prototype.getAllChildren = BpmnEvent.prototype.getAllChildren;
  BpmnEndEvent.prototype.stringify = BpmnEvent.prototype.stringify;
  BpmnIntermediateEvent.prototype.build_fh2yzz$ = BpmnEvent.prototype.build_fh2yzz$;
  BpmnIntermediateEvent.prototype.remove_h0xiwz$ = BpmnEvent.prototype.remove_h0xiwz$;
  BpmnIntermediateEvent.prototype.getAllChildren = BpmnEvent.prototype.getAllChildren;
  BpmnIntermediateEvent.prototype.stringify = BpmnEvent.prototype.stringify;
  BpmnGateway.prototype.build_fh2yzz$ = BpmnFlowObject.prototype.build_fh2yzz$;
  BpmnGateway.prototype.remove_h0xiwz$ = BpmnFlowObject.prototype.remove_h0xiwz$;
  BpmnGateway.prototype.getAllChildren = BpmnFlowObject.prototype.getAllChildren;
  BpmnGateway.prototype.stringify = BpmnFlowObject.prototype.stringify;
  BpmnLane.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnLaneSet.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnMessageFlow.prototype.remove_h0xiwz$ = BpmnElement.prototype.remove_h0xiwz$;
  BpmnMessageFlow.prototype.getAllChildren = BpmnElement.prototype.getAllChildren;
  BpmnMessageFlow.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnProcess.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnSequenceFlow.prototype.remove_h0xiwz$ = BpmnElement.prototype.remove_h0xiwz$;
  BpmnSequenceFlow.prototype.getAllChildren = BpmnElement.prototype.getAllChildren;
  BpmnSequenceFlow.prototype.stringify = BpmnElement.prototype.stringify;
  BpmnTask.prototype.build_fh2yzz$ = BpmnFlowObject.prototype.build_fh2yzz$;
  BpmnTask.prototype.remove_h0xiwz$ = BpmnFlowObject.prototype.remove_h0xiwz$;
  BpmnTask.prototype.getAllChildren = BpmnFlowObject.prototype.getAllChildren;
  BpmnTask.prototype.stringify = BpmnFlowObject.prototype.stringify;
  BrosDocument$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Connections$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  PolymorphicSerializer_0.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  BrosAggregation$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosAttribute$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosClass$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosCompartment$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosComposition$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosConnection$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosCreateRelation$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosDestroyRelation$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosElement$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosEvent$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosFulfillment$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosInheritance$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosMethod$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosObject$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosObjectGroup$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosPackage$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosParameter$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosRelationship$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosReturnEvent$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosRoleType$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  BrosScene$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  SPLIT_CAMEL_CASE_REGEX = Regex_init('([a-z])([A-Z])');
  WORD_LENGTH_THRESHOLD = 0.6;
  MIN_WORD_LENGTH = 3;
  WORD_ENDING_LENGTH = 2;
  activeModules = listOf_0([getCallableRef('setupRule1', function ($receiver) {
    return setupRule1($receiver), Unit;
  }), getCallableRef('setupRule2', function ($receiver) {
    return setupRule2($receiver), Unit;
  }), getCallableRef('setupRule3', function ($receiver) {
    return setupRule3($receiver), Unit;
  }), getCallableRef('setupRule4', function ($receiver) {
    return setupRule4($receiver), Unit;
  }), getCallableRef('setupRule5', function ($receiver) {
    return setupRule5($receiver), Unit;
  }), getCallableRef('setupRule6', function ($receiver) {
    return setupRule6($receiver), Unit;
  })]);
  main();
  Kotlin.defineModule('bpmn-bros-verifier', _);
  return _;
}));

//# sourceMappingURL=bpmn-bros-verifier.js.map
