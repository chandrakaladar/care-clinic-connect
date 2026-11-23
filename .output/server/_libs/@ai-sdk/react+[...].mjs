import { a as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { n as APICallError, r as EmptyResponseBodyError, s as UnsupportedFunctionalityError, t as AISDKError } from "../ai-sdk__provider.mjs";
import { $ as pick, A as aborted, B as finalizeIssue, C as safeParseAsync$1, D as safeParse, E as parseAsync$1, F as clone, G as isPlainObject$1, H as getEnumValues, I as defineLazy, J as normalizeParams, K as issue, L as esc, M as assignProp, N as cached, O as safeParseAsync, P as cleanRegex, Q as partial, R as escapeRegex, S as safeParse$1, T as parse$1, U as getLengthableOrigin, V as floatSafeRemainder, W as isObject, X as omit, Y as nullish, Z as optionalKeys, _ as validateTypes, at as NEVER, b as parse, c as isArrayBuffer, d as lazySchema, et as prefixIssues, f as normalizeHeaders, g as safeParseJSON, h as resolve, i as createIdGenerator, it as $constructor, j as allowsEval, k as NUMBER_FORMAT_RANGES, l as isBuffer, nt as required, o as generateId, ot as config, p as parseJsonEventStream, q as merge, rt as $ZodAsyncError, st as globalConfig, tt as propertyKeyTypes, u as isUint8Array, w as globalRegistry, x as parseAsync, y as zodSchema, z as extend$1 } from "./provider-utils+[...].mjs";
import processModule from "node:process";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result, thenable = ctor();
			thenable.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject, void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error, void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			});
			-1 === payload._status && (payload._status = 0, payload._result = thenable);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof processModule && "function" === typeof processModule.emit) {
			processModule.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	function startTransition(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		currentTransition.types = null !== prevTransition ? prevTransition.types : null;
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	}
	function addTransitionType(type) {
		var transition = ReactSharedInternals.T;
		if (null !== transition) {
			var transitionTypes = transition.types;
			null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
		} else startTransition(addTransitionType.bind(null, type));
	}
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.addTransitionType = addTransitionType;
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = startTransition;
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.3.1";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/zod/v4/core/regexes.js
var cuid = /^[cC][^\s-]{8,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
	const timeRegex = `${time}(?:${opts.join("|")})`;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string$2 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return new RegExp(`^${regex}$`);
};
var integer = /^\d+$/;
var number$2 = /^-?\d+(?:\.\d+)?/i;
var boolean$2 = /true|false/i;
var _null$2 = /null/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
//#endregion
//#region node_modules/zod/v4/core/checks.js
var $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
var $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
		else bag.exclusiveMaximum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
		else bag.exclusiveMinimum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		var _a;
		(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
	});
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
		if (isInt) bag.pattern = integer;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inst
		});
	};
});
var $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
//#endregion
//#region node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
//#endregion
//#region node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 0,
	patch: 0
};
//#endregion
//#region node_modules/zod/v4/core/schemas.js
var $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		inst._zod.run = (payload, ctx) => {
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	inst["~standard"] = {
		validate: (value) => {
			try {
				const r = safeParse(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	};
});
var $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$2(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid(v));
	} else def.pattern ?? (def.pattern = uuid());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
var $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const orig = payload.value;
			const url = new URL(orig);
			const href = url.href;
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (!orig.endsWith("/") && href.endsWith("/")) payload.value = href.slice(0, -1);
			else payload.value = href;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = `ipv4`;
	});
});
var $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = `ipv6`;
	});
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const [address, prefix] = payload.value.split("/");
		try {
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64);
	$ZodStringFormat.init(inst, def);
	inst._zod.onattach.push((inst) => {
		inst._zod.bag.contentEncoding = "base64";
	});
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url);
	$ZodStringFormat.init(inst, def);
	inst._zod.onattach.push((inst) => {
		inst._zod.bag.contentEncoding = "base64url";
	});
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = inst._zod.bag.pattern ?? number$2;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
var $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
var $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$2;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodNull = /*@__PURE__*/ $constructor("$ZodNull", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _null$2;
	inst._zod.values = /* @__PURE__ */ new Set([null]);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input === null) return payload;
		payload.issues.push({
			expected: "null",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleObjectResult(result, final, key) {
	if (result.issues.length) final.issues.push(...prefixIssues(key, result.issues));
	final.value[key] = result.value;
}
function handleOptionalObjectResult(result, final, key, input) {
	if (result.issues.length) if (input[key] === void 0) if (key in input) final.value[key] = void 0;
	else final.value[key] = result.value;
	else final.issues.push(...prefixIssues(key, result.issues));
	else if (result.value === void 0) {
		if (key in input) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
var $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	const _normalized = cached(() => {
		const keys = Object.keys(def.shape);
		for (const k of keys) if (!(def.shape[k] instanceof $ZodType)) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
		const okeys = optionalKeys(def.shape);
		return {
			shape: def.shape,
			keys,
			keySet: new Set(keys),
			numKeys: keys.length,
			optionalKeys: new Set(okeys)
		};
	});
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {}`);
		for (const key of normalized.keys) if (normalized.optionalKeys.has(key)) {
			const id = ids[key];
			doc.write(`const ${id} = ${parseStr(key)};`);
			const k = esc(key);
			doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
		} else {
			const id = ids[key];
			doc.write(`const ${id} = ${parseStr(key)};`);
			doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
			doc.write(`newResult[${esc(key)}] = ${id}.value`);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
		} else {
			payload.value = {};
			const shape = value.shape;
			for (const key of value.keys) {
				const el = shape[key];
				const r = el._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
				if (r instanceof Promise) proms.push(r.then((r) => isOptional ? handleOptionalObjectResult(r, payload, key, input) : handleObjectResult(r, payload, key)));
				else if (isOptional) handleOptionalObjectResult(r, payload, key, input);
				else handleObjectResult(r, payload, key);
			}
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		const unrecognized = [];
		const keySet = value.keySet;
		const _catchall = catchall._zod;
		const t = _catchall.def.type;
		for (const key of Object.keys(input)) {
			if (keySet.has(key)) continue;
			if (t === "never") {
				unrecognized.push(key);
				continue;
			}
			const r = _catchall.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handleObjectResult(r, payload, key)));
			else handleObjectResult(r, payload, key);
		}
		if (unrecognized.length) payload.issues.push({
			code: "unrecognized_keys",
			keys: unrecognized,
			input,
			inst
		});
		if (!proms.length) return payload;
		return Promise.all(proms).then(() => {
			return payload;
		});
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	inst._zod.parse = (payload, ctx) => {
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
var $ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazy(inst._zod, "propValues", () => {
		const propValues = {};
		for (const option of def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
			for (const [k, v] of Object.entries(pv)) {
				if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
				for (const val of v) propValues[k].add(val);
			}
		}
		return propValues;
	});
	const disc = cached(() => {
		const opts = def.options;
		const map = /* @__PURE__ */ new Map();
		for (const o of opts) {
			const values = o._zod.propValues[def.discriminator];
			if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
			for (const v of values) {
				if (map.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
				map.set(v, o);
			}
		}
		return map;
	});
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isObject(input)) {
			payload.issues.push({
				code: "invalid_type",
				expected: "object",
				input,
				inst
			});
			return payload;
		}
		const opt = disc.value.get(input?.[def.discriminator]);
		if (opt) return opt._zod.run(payload, ctx);
		if (def.unionFallback) return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
var $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject$1(a) && isPlainObject$1(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	if (left.issues.length) result.issues.push(...left.issues);
	if (right.issues.length) result.issues.push(...right.issues);
	if (aborted(result)) return result;
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
var $ZodRecord = /*@__PURE__*/ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject$1(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		if (def.keyType._zod.values) {
			const values = def.keyType._zod.values;
			payload.value = {};
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[key] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[key] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!values.has(key)) {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized
			});
		} else {
			payload.value = {};
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
				const keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (keyResult.issues.length) {
					payload.issues.push({
						origin: "record",
						code: "invalid_key",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					payload.value[keyResult.value] = keyResult.value;
					continue;
				}
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
var $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	inst._zod.values = new Set(values);
	inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (inst._zod.values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.values = new Set(def.values);
	inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? o.toString() : String(o)).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (inst._zod.values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values: def.values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const _out = def.transform(payload.value, payload);
		if (_ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		return payload;
	};
});
var $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault always returns the default value immediately.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
var $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
		}
		return payload;
	};
});
var $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	inst._zod.parse = (payload, ctx) => {
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def, ctx));
		return handlePipeResult(left, def, ctx);
	};
});
function handlePipeResult(left, def, ctx) {
	if (aborted(left)) return left;
	return def.out._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
var $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodLazy = /*@__PURE__*/ $constructor("$ZodLazy", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "innerType", () => def.getter());
	defineLazy(inst._zod, "pattern", () => inst._zod.innerType._zod.pattern);
	defineLazy(inst._zod, "propValues", () => inst._zod.innerType._zod.propValues);
	defineLazy(inst._zod, "optin", () => inst._zod.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => inst._zod.innerType._zod.optout);
	inst._zod.parse = (payload, ctx) => {
		return inst._zod.innerType._zod.run(payload, ctx);
	};
});
var $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
//#endregion
//#region node_modules/zod/v4/core/api.js
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
function _number(Class, params) {
	return new Class({
		type: "number",
		checks: [],
		...normalizeParams(params)
	});
}
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
function _null$1(Class, params) {
	return new Class({
		type: "null",
		...normalizeParams(params)
	});
}
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
function _positive(params) {
	return _gt(0, params);
}
function _nonnegative(params) {
	return _gte(0, params);
}
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
function _normalize(form) {
	return _overwrite((input) => input.normalize(form));
}
function _trim() {
	return _overwrite((input) => input.trim());
}
function _toLowerCase() {
	return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
	return _overwrite((input) => input.toUpperCase());
}
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
function _custom(Class, fn, _params) {
	const norm = normalizeParams(_params);
	norm.abort ?? (norm.abort = true);
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...norm
	});
}
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
//#endregion
//#region node_modules/zod/v4/classic/iso.js
var ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date(params) {
	return _isoDate(ZodISODate, params);
}
var ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return _isoDuration(ZodISODuration, params);
}
//#endregion
//#region node_modules/zod/v4/classic/schemas.js
var ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	inst.def = def;
	Object.defineProperty(inst, "_def", { value: def });
	inst.check = (...checks) => {
		return inst.clone({
			...def,
			checks: [...def.checks ?? [], ...checks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)]
		});
	};
	inst.clone = (def, params) => clone(inst, def, params);
	inst.brand = () => inst;
	inst.register = ((reg, meta) => {
		reg.add(inst, meta);
		return inst;
	});
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse$1(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync$1(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.refine = (check, params) => inst.check(refine$1(check, params));
	inst.superRefine = (refinement) => inst.check(superRefine(refinement));
	inst.overwrite = (fn) => inst.check(_overwrite(fn));
	inst.optional = () => optional$1(inst);
	inst.nullable = () => nullable(inst);
	inst.nullish = () => optional$1(nullable(inst));
	inst.nonoptional = (params) => nonoptional(inst, params);
	inst.array = () => array$1(inst);
	inst.or = (arg) => union$1([inst, arg]);
	inst.and = (arg) => intersection(inst, arg);
	inst.transform = (tx) => pipe$1(inst, transform$1(tx));
	inst.default = (def) => _default(inst, def);
	inst.prefault = (def) => prefault(inst, def);
	inst.catch = (params) => _catch(inst, params);
	inst.pipe = (target) => pipe$1(inst, target);
	inst.readonly = () => readonly(inst);
	inst.describe = (description) => {
		const cl = inst.clone();
		globalRegistry.add(cl, { description });
		return cl;
	};
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	inst.meta = (...args) => {
		if (args.length === 0) return globalRegistry.get(inst);
		const cl = inst.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	};
	inst.isOptional = () => inst.safeParse(void 0).success;
	inst.isNullable = () => inst.safeParse(null).success;
	return inst;
});
/** @internal */
var _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	inst.regex = (...args) => inst.check(_regex(...args));
	inst.includes = (...args) => inst.check(_includes(...args));
	inst.startsWith = (...args) => inst.check(_startsWith(...args));
	inst.endsWith = (...args) => inst.check(_endsWith(...args));
	inst.min = (...args) => inst.check(_minLength(...args));
	inst.max = (...args) => inst.check(_maxLength(...args));
	inst.length = (...args) => inst.check(_length(...args));
	inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
	inst.lowercase = (params) => inst.check(_lowercase(params));
	inst.uppercase = (params) => inst.check(_uppercase(params));
	inst.trim = () => inst.check(_trim());
	inst.normalize = (...args) => inst.check(_normalize(...args));
	inst.toLowerCase = () => inst.check(_toLowerCase());
	inst.toUpperCase = () => inst.check(_toUpperCase());
});
var ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(_email(ZodEmail, params));
	inst.url = (params) => inst.check(_url(ZodURL, params));
	inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(_emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(_guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(_guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(_xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(_e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string$1(params) {
	return _string(ZodString, params);
}
var ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType.init(inst, def);
	inst.gt = (value, params) => inst.check(_gt(value, params));
	inst.gte = (value, params) => inst.check(_gte(value, params));
	inst.min = (value, params) => inst.check(_gte(value, params));
	inst.lt = (value, params) => inst.check(_lt(value, params));
	inst.lte = (value, params) => inst.check(_lte(value, params));
	inst.max = (value, params) => inst.check(_lte(value, params));
	inst.int = (params) => inst.check(int$1(params));
	inst.safe = (params) => inst.check(int$1(params));
	inst.positive = (params) => inst.check(_gt(0, params));
	inst.nonnegative = (params) => inst.check(_gte(0, params));
	inst.negative = (params) => inst.check(_lt(0, params));
	inst.nonpositive = (params) => inst.check(_lte(0, params));
	inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
	inst.step = (value, params) => inst.check(_multipleOf(value, params));
	inst.finite = () => inst;
	const bag = inst._zod.bag;
	inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
	inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
	inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
	inst.isFinite = true;
	inst.format = bag.format ?? null;
});
function number$1(params) {
	return _number(ZodNumber, params);
}
var ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber.init(inst, def);
});
function int$1(params) {
	return _int(ZodNumberFormat, params);
}
var ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
});
function boolean$1(params) {
	return _boolean(ZodBoolean, params);
}
var ZodNull = /*@__PURE__*/ $constructor("ZodNull", (inst, def) => {
	$ZodNull.init(inst, def);
	ZodType.init(inst, def);
});
function _null(params) {
	return _null$1(ZodNull, params);
}
var ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
});
function unknown$1() {
	return _unknown(ZodUnknown);
}
var ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
});
function never$1(params) {
	return _never(ZodNever, params);
}
var ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst.element = def.element;
	inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
	inst.nonempty = (params) => inst.check(_minLength(1, params));
	inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
	inst.length = (len, params) => inst.check(_length(len, params));
	inst.unwrap = () => inst.element;
});
function array$1(element, params) {
	return _array(ZodArray, element, params);
}
var ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
	$ZodObject.init(inst, def);
	ZodType.init(inst, def);
	defineLazy(inst, "shape", () => def.shape);
	inst.keyof = () => _enum$1(Object.keys(inst._zod.def.shape));
	inst.catchall = (catchall) => inst.clone({
		...inst._zod.def,
		catchall
	});
	inst.passthrough = () => inst.clone({
		...inst._zod.def,
		catchall: unknown$1()
	});
	inst.loose = () => inst.clone({
		...inst._zod.def,
		catchall: unknown$1()
	});
	inst.strict = () => inst.clone({
		...inst._zod.def,
		catchall: never$1()
	});
	inst.strip = () => inst.clone({
		...inst._zod.def,
		catchall: void 0
	});
	inst.extend = (incoming) => {
		return extend$1(inst, incoming);
	};
	inst.merge = (other) => merge(inst, other);
	inst.pick = (mask) => pick(inst, mask);
	inst.omit = (mask) => omit(inst, mask);
	inst.partial = (...args) => partial(ZodOptional, inst, args[0]);
	inst.required = (...args) => required(ZodNonOptional, inst, args[0]);
});
function object$1(shape, params) {
	return new ZodObject({
		type: "object",
		get shape() {
			assignProp(this, "shape", { ...shape });
			return this.shape;
		},
		...normalizeParams(params)
	});
}
var ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst.options = def.options;
});
function union$1(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("ZodDiscriminatedUnion", (inst, def) => {
	ZodUnion.init(inst, def);
	$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion$1(discriminator, options, params) {
	return new ZodDiscriminatedUnion({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
var ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
var ZodRecord = /*@__PURE__*/ $constructor("ZodRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodType.init(inst, def);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record$1(keyType, valueType, params) {
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
var ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum$1(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodType.init(inst, def);
	inst.values = new Set(def.values);
	Object.defineProperty(inst, "value", { get() {
		if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return def.values[0];
	} });
});
function literal$1(value, params) {
	return new ZodLiteral({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
var ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				_issue.continue ?? (_issue.continue = true);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			return payload;
		});
		payload.value = output;
		return payload;
	};
});
function transform$1(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
var ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional$1(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
var ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : defaultValue;
		}
	});
}
var ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : defaultValue;
		}
	});
}
var ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
var ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe$1(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
var ZodLazy = /*@__PURE__*/ $constructor("ZodLazy", (inst, def) => {
	$ZodLazy.init(inst, def);
	ZodType.init(inst, def);
	inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
	return new ZodLazy({
		type: "lazy",
		getter
	});
}
var ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
});
function check(fn) {
	const ch = new $ZodCheck({ check: "custom" });
	ch._zod.check = fn;
	return ch;
}
function custom$1(fn, _params) {
	return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine$1(fn, _params = {}) {
	return _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
	const ch = check((payload) => {
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	});
	return ch;
}
function _instanceof(cls, params = { error: `Input not instance of ${cls.name}` }) {
	const inst = new ZodCustom({
		type: "custom",
		check: "custom",
		fn: (data) => data instanceof cls,
		abort: true,
		...normalizeParams(params)
	});
	inst._zod.bag.Class = cls;
	return inst;
}
//#endregion
//#region node_modules/zod/v4/mini/schemas.js
var ZodMiniType = /*@__PURE__*/ $constructor("ZodMiniType", (inst, def) => {
	if (!inst._zod) throw new Error("Uninitialized schema in ZodMiniType.");
	$ZodType.init(inst, def);
	inst.def = def;
	inst.parse = (data, params) => parse$1(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync$1(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.check = (...checks) => {
		return inst.clone({
			...def,
			checks: [...def.checks ?? [], ...checks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)]
		});
	};
	inst.clone = (_def, params) => clone(inst, _def, params);
	inst.brand = () => inst;
	inst.register = ((reg, meta) => {
		reg.add(inst, meta);
		return inst;
	});
});
var ZodMiniString = /*@__PURE__*/ $constructor("ZodMiniString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodMiniType.init(inst, def);
});
function string(params) {
	return _string(ZodMiniString, params);
}
var ZodMiniNumber = /*@__PURE__*/ $constructor("ZodMiniNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodMiniType.init(inst, def);
});
function number(params) {
	return _number(ZodMiniNumber, params);
}
var ZodMiniNumberFormat = /*@__PURE__*/ $constructor("ZodMiniNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodMiniNumber.init(inst, def);
});
function int(params) {
	return _int(ZodMiniNumberFormat, params);
}
var ZodMiniBoolean = /*@__PURE__*/ $constructor("ZodMiniBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodMiniType.init(inst, def);
});
function boolean(params) {
	return _boolean(ZodMiniBoolean, params);
}
var ZodMiniUnknown = /*@__PURE__*/ $constructor("ZodMiniUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodMiniType.init(inst, def);
});
function unknown() {
	return _unknown(ZodMiniUnknown);
}
var ZodMiniNever = /*@__PURE__*/ $constructor("ZodMiniNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodMiniType.init(inst, def);
});
function never(params) {
	return _never(ZodMiniNever, params);
}
var ZodMiniArray = /*@__PURE__*/ $constructor("ZodMiniArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodMiniType.init(inst, def);
});
function array(element, params) {
	return new ZodMiniArray({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
var ZodMiniObject = /*@__PURE__*/ $constructor("ZodMiniObject", (inst, def) => {
	$ZodObject.init(inst, def);
	ZodMiniType.init(inst, def);
	defineLazy(inst, "shape", () => def.shape);
});
function object(shape, params) {
	return new ZodMiniObject({
		type: "object",
		get shape() {
			assignProp(this, "shape", { ...shape });
			return this.shape;
		},
		...normalizeParams(params)
	});
}
function looseObject(shape, params) {
	return new ZodMiniObject({
		type: "object",
		get shape() {
			assignProp(this, "shape", { ...shape });
			return this.shape;
		},
		catchall: unknown(),
		...normalizeParams(params)
	});
}
function extend(schema, shape) {
	return extend$1(schema, shape);
}
var ZodMiniUnion = /*@__PURE__*/ $constructor("ZodMiniUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodMiniType.init(inst, def);
});
function union(options, params) {
	return new ZodMiniUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodMiniDiscriminatedUnion = /*@__PURE__*/ $constructor("ZodMiniDiscriminatedUnion", (inst, def) => {
	$ZodDiscriminatedUnion.init(inst, def);
	ZodMiniType.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
	return new ZodMiniDiscriminatedUnion({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
var ZodMiniRecord = /*@__PURE__*/ $constructor("ZodMiniRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodMiniType.init(inst, def);
});
function record(keyType, valueType, params) {
	return new ZodMiniRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
var ZodMiniEnum = /*@__PURE__*/ $constructor("ZodMiniEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodMiniType.init(inst, def);
});
function _enum(values, params) {
	return new ZodMiniEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodMiniLiteral = /*@__PURE__*/ $constructor("ZodMiniLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodMiniType.init(inst, def);
});
function literal(value, params) {
	return new ZodMiniLiteral({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
var ZodMiniTransform = /*@__PURE__*/ $constructor("ZodMiniTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodMiniType.init(inst, def);
});
function transform(fn) {
	return new ZodMiniTransform({
		type: "transform",
		transform: fn
	});
}
var ZodMiniOptional = /*@__PURE__*/ $constructor("ZodMiniOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodMiniType.init(inst, def);
});
function optional(innerType) {
	return new ZodMiniOptional({
		type: "optional",
		innerType
	});
}
var ZodMiniPipe = /*@__PURE__*/ $constructor("ZodMiniPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodMiniType.init(inst, def);
});
function pipe(in_, out) {
	return new ZodMiniPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodMiniCustom = /*@__PURE__*/ $constructor("ZodMiniCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodMiniType.init(inst, def);
});
function custom(fn, _params) {
	return _custom(ZodMiniCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
	return _refine(ZodMiniCustom, fn, _params);
}
//#endregion
//#region node_modules/ai/dist/default-stop-condition-wtuJTiTo.js
var name$11$1 = "AI_InvalidArgumentError";
var marker$11$1 = `vercel.ai.error.${name$11$1}`;
var symbol$11 = Symbol.for(marker$11$1);
var InvalidArgumentError = class extends AISDKError {
	constructor({ parameter, value, message }) {
		super({
			name: name$11$1,
			message: `Invalid argument for parameter ${parameter}: ${message}`
		});
		this[symbol$11] = true;
		this.parameter = parameter;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker$11$1);
	}
};
/**
* Deeply merges two objects together.
* - Properties from the `overrides` object override those in the `base` object with the same key.
* - For nested objects, the merge is performed recursively (deep merge).
* - Arrays are replaced, not merged.
* - Primitive values are replaced.
* - If both `base` and `overrides` are undefined, returns undefined.
* - If one of `base` or `overrides` is undefined, returns the other.
*
* @param base The target object to merge into
* @param overrides The source object to merge from
* @returns A new object with the merged properties, or undefined if both inputs are undefined
*/
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(overrides, key)) {
			const overridesValue = overrides[key];
			if (overridesValue === void 0) continue;
			const baseValue = key in base ? base[key] : void 0;
			const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
			const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
			if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
			else result[key] = overridesValue;
		}
	}
	return result;
}
new TextEncoder();
new TextEncoder();
var name$2 = "AI_UIMessageStreamError";
var marker$2 = `vercel.ai.error.${name$2}`;
var symbol$2 = Symbol.for(marker$2);
/**
* Error thrown when a UI message stream reports an error or contains invalid
* or out-of-sequence chunks.
*
* This typically occurs when:
* - An error chunk is received
* - A delta chunk is received without a corresponding start chunk
* - An end chunk is received without a corresponding start chunk
* - A tool invocation is not found for the given toolCallId
*
* @see https://ai-sdk.dev/docs/reference/ai-sdk-errors/ai-ui-message-stream-error
*/
var UIMessageStreamError = class extends AISDKError {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name$2,
			message
		});
		this[symbol$2] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker$2);
	}
};
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	let unicodeEscapeDigits = 0;
	function isHexDigit(char) {
		return char >= "0" && char <= "9" || char >= "A" && char <= "F" || char >= "a" && char <= "f";
	}
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default: processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				if (char === "u") {
					unicodeEscapeDigits = 0;
					stack.push("INSIDE_STRING_UNICODE_ESCAPE");
				} else lastValidIndex = i;
				break;
			case "INSIDE_STRING_UNICODE_ESCAPE":
				if (isHexDigit(char)) {
					unicodeEscapeDigits++;
					if (unicodeEscapeDigits === 4) {
						stack.pop();
						lastValidIndex = i;
					}
				}
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default: stack.pop();
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
createIdGenerator({
	prefix: "steer",
	size: 24
});
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
TransformStream;
var z$1 = {
	NEVER,
	array,
	boolean,
	custom,
	discriminatedUnion,
	enum: _enum,
	extend,
	int,
	literal,
	looseObject,
	maximum: _lte,
	minLength: _minLength,
	never,
	nonnegative: _nonnegative,
	number,
	object,
	optional,
	pipe,
	positive: _positive,
	record,
	refine,
	safeParse,
	startsWith: _startsWith,
	string,
	transform,
	union,
	unknown
};
var z = {
	array: array$1,
	boolean: boolean$1,
	custom: custom$1,
	discriminatedUnion: discriminatedUnion$1,
	instanceof: _instanceof,
	lazy,
	literal: literal$1,
	null: _null,
	number: number$1,
	object: object$1,
	record: record$1,
	string: string$1,
	union: union$1,
	unknown: unknown$1
};
var jsonValueSchema$1 = z.lazy(() => z.union([
	z.null(),
	z.string(),
	z.number(),
	z.boolean(),
	z.record(z.string(), jsonValueSchema$1.optional()),
	z.array(jsonValueSchema$1)
]));
var providerMetadataSchema$1 = z.record(z.string(), z.record(z.string(), jsonValueSchema$1.optional()));
/**
* Creates a citation schema that validates the provider metadata of the
* source with the given schema.
*/
function createCitationSchema(providerMetadataSchema) {
	return z$1.object({
		source: z$1.discriminatedUnion("sourceType", [z$1.object({
			type: z$1.literal("source"),
			sourceType: z$1.literal("url"),
			id: z$1.string(),
			url: z$1.string(),
			title: z$1.optional(z$1.string()),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}), z$1.object({
			type: z$1.literal("source"),
			sourceType: z$1.literal("document"),
			id: z$1.string(),
			mediaType: z$1.string(),
			title: z$1.string(),
			filename: z$1.optional(z$1.string()),
			providerMetadata: z$1.optional(providerMetadataSchema)
		})]),
		startIndex: z$1.optional(z$1.number().check(z$1.int()).check(z$1.nonnegative())),
		endIndex: z$1.optional(z$1.number().check(z$1.int()).check(z$1.nonnegative())),
		citedText: z$1.optional(z$1.string())
	});
}
var citationSchema = createCitationSchema(providerMetadataSchema$1);
var toolMetadataSchema$1 = z$1.record(z$1.string(), z$1.optional(jsonValueSchema$1));
var uiMessageChunkSchema = lazySchema(() => zodSchema(z$1.union([
	z$1.looseObject({
		type: z$1.literal("text-start"),
		id: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("text-delta"),
		id: z$1.string(),
		delta: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("text-end"),
		id: z$1.string(),
		citations: z$1.optional(z$1.array(citationSchema)),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("error"),
		errorText: z$1.string()
	}),
	z$1.looseObject({
		type: z$1.literal("tool-input-start"),
		toolCallId: z$1.string(),
		toolName: z$1.string(),
		inputEncoding: z$1.optional(z$1.enum(["json", "text"])),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1),
		toolMetadata: z$1.optional(toolMetadataSchema$1),
		dynamic: z$1.optional(z$1.boolean()),
		title: z$1.optional(z$1.string())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-input-delta"),
		toolCallId: z$1.string(),
		inputTextDelta: z$1.string()
	}),
	z$1.looseObject({
		type: z$1.literal("tool-input-available"),
		toolCallId: z$1.string(),
		toolName: z$1.string(),
		input: z$1.unknown(),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1),
		toolMetadata: z$1.optional(toolMetadataSchema$1),
		dynamic: z$1.optional(z$1.boolean()),
		title: z$1.optional(z$1.string())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-input-error"),
		toolCallId: z$1.string(),
		toolName: z$1.string(),
		input: z$1.unknown(),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1),
		toolMetadata: z$1.optional(toolMetadataSchema$1),
		dynamic: z$1.optional(z$1.boolean()),
		errorText: z$1.string(),
		title: z$1.optional(z$1.string())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-approval-request"),
		approvalId: z$1.string(),
		toolCallId: z$1.string(),
		approvalDescriptor: z$1.optional(z$1.unknown()),
		inputSchemaInput: z$1.optional(z$1.unknown()),
		reason: z$1.optional(z$1.string()),
		isAutomatic: z$1.optional(z$1.boolean()),
		signature: z$1.optional(z$1.string())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-approval-response"),
		approvalId: z$1.string(),
		approved: z$1.boolean(),
		reason: z$1.optional(z$1.string()),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("tool-output-available"),
		toolCallId: z$1.string(),
		output: z$1.unknown(),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1),
		toolMetadata: z$1.optional(toolMetadataSchema$1),
		dynamic: z$1.optional(z$1.boolean()),
		preliminary: z$1.optional(z$1.boolean())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-output-error"),
		toolCallId: z$1.string(),
		errorText: z$1.string(),
		providerExecuted: z$1.optional(z$1.boolean()),
		providerMetadata: z$1.optional(providerMetadataSchema$1),
		toolMetadata: z$1.optional(toolMetadataSchema$1),
		dynamic: z$1.optional(z$1.boolean())
	}),
	z$1.looseObject({
		type: z$1.literal("tool-output-denied"),
		toolCallId: z$1.string()
	}),
	z$1.looseObject({
		type: z$1.literal("reasoning-start"),
		id: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("reasoning-delta"),
		id: z$1.string(),
		delta: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("reasoning-end"),
		id: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("custom"),
		kind: z$1.pipe(z$1.string(), z$1.transform((value) => value)),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("source-url"),
		sourceId: z$1.string(),
		url: z$1.string(),
		title: z$1.optional(z$1.string()),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("source-document"),
		sourceId: z$1.string(),
		mediaType: z$1.string(),
		title: z$1.string(),
		filename: z$1.optional(z$1.string()),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("file"),
		url: z$1.string(),
		mediaType: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("reasoning-file"),
		url: z$1.string(),
		mediaType: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema$1)
	}),
	z$1.looseObject({
		type: z$1.literal("steering-message"),
		id: z$1.string(),
		parts: z$1.array(z$1.union([z$1.looseObject({
			type: z$1.literal("text"),
			text: z$1.string(),
			providerMetadata: z$1.optional(providerMetadataSchema$1)
		}), z$1.looseObject({
			type: z$1.literal("file"),
			mediaType: z$1.string(),
			url: z$1.string(),
			filename: z$1.optional(z$1.string()),
			providerReference: z$1.optional(z$1.record(z$1.string(), z$1.string())),
			providerMetadata: z$1.optional(providerMetadataSchema$1)
		})]))
	}),
	z$1.looseObject({
		type: z$1.custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: z$1.optional(z$1.string()),
		data: z$1.unknown(),
		transient: z$1.optional(z$1.boolean())
	}),
	z$1.looseObject({ type: z$1.literal("start-step") }),
	z$1.looseObject({ type: z$1.literal("finish-step") }),
	z$1.looseObject({ type: z$1.literal("reset-step") }),
	z$1.looseObject({
		type: z$1.literal("start"),
		messageId: z$1.optional(z$1.string()),
		messageMetadata: z$1.optional(z$1.unknown())
	}),
	z$1.looseObject({
		type: z$1.literal("finish"),
		finishReason: z$1.optional(z$1.enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"interrupted",
			"other"
		])),
		messageMetadata: z$1.optional(z$1.unknown())
	}),
	z$1.looseObject({
		type: z$1.literal("abort"),
		reason: z$1.optional(z$1.string())
	}),
	z$1.looseObject({
		type: z$1.literal("message-metadata"),
		messageMetadata: z$1.unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
/**
* Creates a string-keyed map without an object prototype.
*
* Use this for lookup tables keyed by IDs or names that may come from outside
* the SDK, such as streamed chunk IDs or tool call IDs. Unlike `{}`, these maps
* do not inherit `__proto__`, `constructor`, or other Object prototype members,
* so a missing untrusted key cannot resolve to a shared prototype object.
*/
function createIdMap() {
	return Object.create(null);
}
/**
* Check if a message part is a static tool part.
*
* Static tools are tools for which the types are known at development time.
*/
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
/**
* Check if a message part is a dynamic tool part.
*
* Dynamic tools are tools for which the input and output types are unknown.
*/
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
/**
* Check if a message part is a tool part.
*
* Tool parts are either static or dynamic tools.
*
* Use `isStaticToolUIPart` or `isDynamicToolUIPart` to check the type of the tool.
*/
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
/**
* Returns the name of the static tool.
*
* The possible values are the keys of the tool set.
*/
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	const message = lastMessage?.role === "assistant" ? lastMessage : {
		id: messageId,
		metadata: void 0,
		role: "assistant",
		parts: []
	};
	const partialToolCalls = createIdMap();
	const lastStepStartIndex = message.parts.findLastIndex((part) => part.type === "step-start");
	let staticToolIndex = 0;
	for (const part of message.parts.slice(lastStepStartIndex + 1)) {
		if (!isToolUIPart(part)) continue;
		const index = staticToolIndex;
		if (isStaticToolUIPart(part)) staticToolIndex++;
		if (part.state !== "input-streaming") continue;
		partialToolCalls[part.toolCallId] = {
			text: part.rawInput ?? "",
			inputEncoding: part.inputEncoding,
			index,
			toolName: part.type === "dynamic-tool" ? part.toolName : getStaticToolName(part),
			dynamic: part.type === "dynamic-tool",
			title: part.title,
			toolMetadata: part.toolMetadata
		};
	}
	return {
		message,
		activeTextParts: createIdMap(),
		activeReasoningParts: createIdMap(),
		partialToolCalls
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData, resetStateOnMessageIdChange = false, resetStateOnFirstMessageStart = false }) {
	let isFirstMessageStart = true;
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			function getCurrentStepParts() {
				const parts = state.message.parts;
				let currentStepStartIndex = parts.length - 1;
				while (currentStepStartIndex >= 0 && parts[currentStepStartIndex].type !== "step-start") currentStepStartIndex--;
				return parts.slice(currentStepStartIndex + 1);
			}
			function getCurrentStepToolInvocations() {
				return getCurrentStepParts().filter(isToolUIPart);
			}
			function getToolInvocation(toolCallId) {
				let toolInvocation = getCurrentStepToolInvocations().find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) {
					const parts = state.message.parts;
					for (let i = parts.length - 1; i >= 0; i--) {
						const part = parts[i];
						if (isToolUIPart(part) && part.toolCallId === toolCallId) {
							toolInvocation = part;
							break;
						}
					}
				}
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function getToolInvocationByApprovalId(approvalId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.approval?.id === approvalId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-approval-response",
					chunkId: approvalId,
					message: `No tool invocation found for approval ID "${approvalId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options, existingPart) {
				const part = existingPart ?? getCurrentStepParts().find((part) => isStaticToolUIPart(part) && part.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.type = `tool-${options.toolName}`;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					if (anyOptions.inputEncoding != null) anyPart.inputEncoding = anyOptions.inputEncoding;
					else delete anyPart.inputEncoding;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = anyOptions.providerExecuted ?? part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					input: anyOptions.input,
					...anyOptions.inputEncoding != null ? { inputEncoding: anyOptions.inputEncoding } : {},
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options, existingPart) {
				const part = existingPart ?? getCurrentStepParts().find((part) => part.type === "dynamic-tool" && part.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					if (anyOptions.inputEncoding != null) anyPart.inputEncoding = anyOptions.inputEncoding;
					else delete anyPart.inputEncoding;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = anyOptions.providerExecuted ?? part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					...anyOptions.inputEncoding != null ? { inputEncoding: anyOptions.inputEncoding } : {},
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = chunk.providerMetadata ?? textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					if (chunk.citations != null) textPart.citations = chunk.citations;
					textPart.providerMetadata = chunk.providerMetadata ?? textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "custom": {
					const customPart = {
						type: "custom",
						kind: chunk.kind,
						providerMetadata: chunk.providerMetadata
					};
					state.message.parts.push(customPart);
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						id: chunk.id,
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = chunk.providerMetadata ?? reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = chunk.providerMetadata ?? reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
				case "reasoning-file":
					state.message.parts.push({
						type: chunk.type,
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = getCurrentStepParts().filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						inputEncoding: chunk.inputEncoding,
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						inputEncoding: chunk.inputEncoding,
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						inputEncoding: chunk.inputEncoding,
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const partialArgs = partialToolCall.inputEncoding === "text" ? partialToolCall.text : (await parsePartialJson(partialToolCall.text)).value;
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						inputEncoding: partialToolCall.inputEncoding,
						input: partialArgs,
						rawInput: partialToolCall.text,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						inputEncoding: partialToolCall.inputEncoding,
						input: partialArgs,
						rawInput: partialToolCall.text,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = getCurrentStepParts().filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = {
						id: chunk.approvalId,
						...chunk.approvalDescriptor != null ? { descriptor: chunk.approvalDescriptor } : {},
						...Object.prototype.hasOwnProperty.call(chunk, "inputSchemaInput") ? { inputSchemaInput: chunk.inputSchemaInput } : {},
						...chunk.reason != null ? { requestReason: chunk.reason } : {},
						...chunk.isAutomatic === true ? { isAutomatic: true } : {},
						...chunk.signature != null ? { signature: chunk.signature } : {}
					};
					write();
					break;
				}
				case "tool-approval-response": {
					const toolInvocation = getToolInvocationByApprovalId(chunk.approvalId);
					const approval = toolInvocation.approval == null ? { id: chunk.approvalId } : toolInvocation.approval;
					toolInvocation.state = "approval-responded";
					toolInvocation.approval = {
						...approval,
						id: chunk.approvalId,
						approved: chunk.approved,
						...chunk.reason != null ? { reason: chunk.reason } : {}
					};
					if (chunk.providerExecuted != null) toolInvocation.providerExecuted = chunk.providerExecuted;
					if (chunk.providerMetadata != null) toolInvocation.callProviderMetadata = chunk.providerMetadata;
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: chunk.toolMetadata ?? toolInvocation.toolMetadata
					}, toolInvocation);
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: chunk.toolMetadata ?? toolInvocation.toolMetadata
					}, toolInvocation);
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: chunk.toolMetadata ?? toolInvocation.toolMetadata
					}, toolInvocation);
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: chunk.toolMetadata ?? toolInvocation.toolMetadata
					}, toolInvocation);
					write();
					break;
				}
				case "steering-message":
					state.message.parts.push({
						type: "steering-message",
						id: chunk.id,
						parts: chunk.parts
					});
					write();
					break;
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step": break;
				case "reset-step": {
					const currentStepParts = getCurrentStepParts();
					state.activeTextParts = createIdMap();
					state.activeReasoningParts = createIdMap();
					state.partialToolCalls = createIdMap();
					if (currentStepParts.length > 0) {
						state.message.parts.splice(state.message.parts.length - currentStepParts.length, currentStepParts.length);
						write();
					}
					break;
				}
				case "start": {
					const shouldReset = resetStateOnFirstMessageStart && isFirstMessageStart || resetStateOnMessageIdChange && chunk.messageId != null && chunk.messageId !== state.message.id;
					isFirstMessageStart = false;
					if (shouldReset) Object.assign(state, createStreamingUIMessageState({
						lastMessage: void 0,
						messageId: chunk.messageId ?? state.message.id
					}), { finishReason: void 0 });
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (shouldReset || chunk.messageId != null || chunk.messageMetadata != null) write({ updateStatus: false });
					break;
				}
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					const dataPartSchema = dataPartSchemas?.[chunk.type.slice(5)];
					if (dataPartSchema != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchema,
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
/**
* Consumes a ReadableStream until it's fully read.
*
* This function reads the stream chunk by chunk until the stream is exhausted.
* It doesn't process or return the data from the stream; it simply ensures
* that the entire stream is read.
*
* @param options - The options for consuming the stream.
* @param options.stream - The ReadableStream to be consumed.
* @param options.onError - Optional callback to handle errors that occur during consumption.
* @returns A promise that resolves when the stream is fully consumed.
*/
async function consumeStream({ stream, onError, abortSignal }) {
	const reader = stream.getReader();
	const cancelOnAbort = () => {
		reader.cancel().catch(() => {});
	};
	if (abortSignal?.aborted) cancelOnAbort();
	else abortSignal?.addEventListener("abort", cancelOnAbort, { once: true });
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		abortSignal?.removeEventListener("abort", cancelOnAbort);
		reader.releaseLock();
	}
}
/**
* Creates a Promise with externally accessible resolve and reject functions.
*
* @template T - The type of the value that the Promise will resolve to.
* @returns An object containing:
*   - promise: A Promise that can be resolved or rejected externally.
*   - resolve: A function to resolve the Promise with a value of type T.
*   - reject: A function to reject the Promise with an error.
*/
function createResolvablePromise() {
	let resolve;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	};
}
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
var invalid = Symbol("invalid");
/**
* Validates that a value is a JSON value: `null`, a string, a finite number, a
* boolean, an array of JSON values, or a plain object with JSON values.
*
* The value is validated in a single pass that does not allocate memory for
* its valid parts, so that validating untrusted input costs little more than
* the input itself. A recursive union schema tries (and reports the issues of)
* every alternative for every nested value and returns a copy of the value.
*
* It accepts the same values as a record schema of JSON values, except that a
* JSON value cannot contain itself:
*
* - Object properties can be `undefined`. Array elements cannot.
* - Objects must be plain objects without enumerable symbol keys.
* - Own `__proto__` keys are removed. Only the objects with such a key and the
*   arrays and objects that contain them are copied. Everything else is
*   returned as is.
*
* @returns The JSON value, or the path to the first invalid value.
*/
function normalizeJsonValue(value) {
	const path = [];
	const normalized = normalize(value, path, /* @__PURE__ */ new Set());
	return normalized === invalid ? {
		success: false,
		path
	} : {
		success: true,
		value: normalized
	};
}
/**
* Returns the normalized value, or `invalid` with the path to the invalid
* value in `path`.
*
* @param ancestors - The arrays and objects that contain `value`. Tracking
* them instead of all visited values detects cycles with memory proportional
* to the nesting depth.
*/
function normalize(value, path, ancestors) {
	switch (typeof value) {
		case "string":
		case "boolean": return value;
		case "number": return Number.isFinite(value) ? value : invalid;
		case "object": {
			if (value === null) return value;
			if (ancestors.has(value)) return invalid;
			ancestors.add(value);
			const normalized = Array.isArray(value) ? normalizeArray(value, path, ancestors) : normalizeObject(value, path, ancestors);
			ancestors.delete(value);
			return normalized;
		}
		default: return invalid;
	}
}
function normalizeArray(array, path, ancestors) {
	let copy;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		path.push(index);
		const normalized = normalize(element, path, ancestors);
		if (normalized === invalid) return invalid;
		path.pop();
		if (copy != null) copy.push(normalized);
		else if (normalized !== element) {
			copy = array.slice(0, index);
			copy.push(normalized);
		}
	}
	return copy ?? array;
}
function normalizeObject(object, path, ancestors) {
	if (!isPlainObject(object) || hasEnumerableSymbolKey(object)) return invalid;
	const keys = Object.keys(object);
	let copy;
	for (let index = 0; index < keys.length; index++) {
		const key = keys[index];
		if (key === "__proto__") {
			copy ??= copyProperties(object, keys, index);
			continue;
		}
		const property = object[key];
		let normalized = property;
		if (property !== void 0) {
			path.push(key);
			normalized = normalize(property, path, ancestors);
			if (normalized === invalid) return invalid;
			path.pop();
		}
		if (copy != null) copy[key] = normalized;
		else if (normalized !== property) {
			copy = copyProperties(object, keys, index);
			copy[key] = normalized;
		}
	}
	return copy ?? object;
}
/**
* Copies the properties of the first `count` keys, which are known to be valid.
*/
function copyProperties(object, keys, count) {
	const copy = {};
	for (let index = 0; index < count; index++) copy[keys[index]] = object[keys[index]];
	return copy;
}
/**
* Same check as record schemas, which accepts plain objects from other realms
* and objects without a prototype.
*/
function isPlainObject(object) {
	const constructor = object.constructor;
	if (typeof constructor !== "function") return true;
	const prototype = constructor.prototype;
	return prototype !== null && typeof prototype === "object" && Object.prototype.hasOwnProperty.call(prototype, "isPrototypeOf");
}
function hasEnumerableSymbolKey(object) {
	const symbols = Object.getOwnPropertySymbols(object);
	for (let index = 0; index < symbols.length; index++) if (Object.prototype.propertyIsEnumerable.call(object, symbols[index])) return true;
	return false;
}
/**
* Validates a JSON value in a single pass and reports an invalid JSON value
* with a single issue.
*
* UI messages are untrusted input. The recursive JSON value schema tries
* every alternative for every nested value and returns a copy of the value,
* so accepting a value would need several times the memory of the value. It
* also reports the issues of every alternative at every nesting level around
* an invalid value, so the size of a validation error would grow much faster
* than the input.
*/
var jsonValueSchema = z$1.pipe(z$1.unknown(), z$1.transform((value, context) => {
	const result = normalizeJsonValue(value);
	if (!result.success) {
		context.issues.push({
			code: "custom",
			message: "Invalid JSON value. Expected null, a string, a finite number, a boolean, an array, or an object.",
			input: value,
			path: result.path
		});
		return z$1.NEVER;
	}
	return result.value;
}));
var validatedJsonValueSchema = z$1.custom();
var toolMetadataSchema = z$1.pipe(jsonValueSchema, z$1.record(z$1.string(), validatedJsonValueSchema));
var providerMetadataSchema = z$1.pipe(jsonValueSchema, z$1.record(z$1.string(), z$1.record(z$1.string(), validatedJsonValueSchema)));
var providerReferenceSchema$1 = z$1.record(z$1.string(), z$1.string());
var uiCitationSchema = createCitationSchema(providerMetadataSchema);
/**
* Creates an array schema that validates its elements in order and stops at
* the first invalid element.
*
* UI messages are untrusted input. `z.array` validates every element and
* reports the issues of all invalid elements, so the memory and time needed to
* reject an input would grow with the number of invalid elements in it.
*/
function arrayUntilFirstInvalidElement(selectElementSchema) {
	return z$1.pipe(z$1.array(z$1.unknown()), z$1.transform((elements, context) => {
		const validatedElements = [];
		for (const [index, element] of elements.entries()) {
			const result = z$1.safeParse(selectElementSchema(element), element);
			if (!result.success) {
				for (const issue of result.error.issues) context.issues.push({
					...issue,
					path: [index, ...issue.path]
				});
				return z$1.NEVER;
			}
			validatedElements.push(result.data);
		}
		return validatedElements;
	}));
}
lazySchema(() => {
	const approvalRequestedSchema = z$1.object({
		id: z$1.string(),
		approved: z$1.optional(z$1.never()),
		descriptor: z$1.optional(z$1.unknown()),
		requestReason: z$1.optional(z$1.string()),
		reason: z$1.optional(z$1.never()),
		isAutomatic: z$1.optional(z$1.boolean()),
		signature: z$1.optional(z$1.string()),
		inputSchemaInput: z$1.optional(z$1.unknown())
	});
	const approvalRespondedSchema = z$1.extend(approvalRequestedSchema, {
		approved: z$1.boolean(),
		reason: z$1.optional(z$1.string())
	});
	const approvalGrantedSchema = z$1.extend(approvalRespondedSchema, { approved: z$1.literal(true) });
	const approvalDeniedSchema = z$1.extend(approvalRespondedSchema, { approved: z$1.literal(false) });
	const steeringMessagePartSchema = z$1.discriminatedUnion("type", [z$1.object({
		type: z$1.literal("text"),
		text: z$1.string(),
		providerMetadata: z$1.optional(providerMetadataSchema)
	}), z$1.object({
		type: z$1.literal("file"),
		mediaType: z$1.string(),
		filename: z$1.optional(z$1.string()),
		url: z$1.string(),
		providerReference: z$1.optional(providerReferenceSchema$1),
		providerMetadata: z$1.optional(providerMetadataSchema)
	})]);
	const invalidPartTypeMessage = "Invalid UI message part type. Expected a known part type (for example \"text\" or \"dynamic-tool\") or a type starting with \"data-\" or \"tool-\".";
	const staticPartSchema = z$1.discriminatedUnion("type", [
		z$1.object({
			type: z$1.literal("text"),
			text: z$1.string(),
			citations: z$1.optional(arrayUntilFirstInvalidElement(() => uiCitationSchema)),
			state: z$1.optional(z$1.enum(["streaming", "done"])),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("reasoning"),
			id: z$1.optional(z$1.string()),
			text: z$1.string(),
			state: z$1.optional(z$1.enum(["streaming", "done"])),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("custom"),
			kind: z$1.string(),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("source-url"),
			sourceId: z$1.string(),
			url: z$1.string(),
			title: z$1.optional(z$1.string()),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("source-document"),
			sourceId: z$1.string(),
			mediaType: z$1.string(),
			title: z$1.string(),
			filename: z$1.optional(z$1.string()),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("file"),
			mediaType: z$1.string(),
			filename: z$1.optional(z$1.string()),
			url: z$1.string(),
			providerReference: z$1.optional(providerReferenceSchema$1),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("reasoning-file"),
			mediaType: z$1.string(),
			url: z$1.string(),
			providerMetadata: z$1.optional(providerMetadataSchema)
		}),
		z$1.object({
			type: z$1.literal("steering-message"),
			id: z$1.string(),
			parts: arrayUntilFirstInvalidElement(() => steeringMessagePartSchema)
		}),
		z$1.object({ type: z$1.literal("step-start") })
	], { error: (issue) => issue.code === "invalid_union" ? invalidPartTypeMessage : void 0 });
	const dataPartSchema = z$1.object({
		type: z$1.string().check(z$1.startsWith("data-")),
		id: z$1.optional(z$1.string()),
		data: z$1.unknown()
	});
	const dynamicToolPartSchema = z$1.discriminatedUnion("state", [
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("input-streaming"),
			input: z$1.optional(z$1.unknown()),
			rawInput: z$1.optional(z$1.string()),
			inputEncoding: z$1.optional(z$1.enum(["json", "text"])),
			providerExecuted: z$1.optional(z$1.boolean()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			approval: z$1.optional(z$1.never())
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("input-available"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: z$1.optional(z$1.never())
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("approval-requested"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalRequestedSchema
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("approval-responded"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalRespondedSchema
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-available"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.unknown(),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			resultProviderMetadata: z$1.optional(providerMetadataSchema),
			preliminary: z$1.optional(z$1.boolean()),
			approval: z$1.optional(approvalGrantedSchema)
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-error"),
			input: z$1.optional(z$1.unknown()),
			rawInput: z$1.optional(z$1.unknown()),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.string(),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			resultProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: z$1.optional(approvalGrantedSchema)
		}),
		z$1.object({
			type: z$1.literal("dynamic-tool"),
			dynamic: z$1.optional(z$1.literal(false)),
			toolName: z$1.string(),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-denied"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalDeniedSchema
		})
	]);
	const toolPartSchema = z$1.discriminatedUnion("state", [
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("input-streaming"),
			providerExecuted: z$1.optional(z$1.boolean()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			input: z$1.optional(z$1.unknown()),
			rawInput: z$1.optional(z$1.string()),
			inputEncoding: z$1.optional(z$1.enum(["json", "text"])),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			approval: z$1.optional(z$1.never())
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("input-available"),
			providerExecuted: z$1.optional(z$1.boolean()),
			input: z$1.unknown(),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: z$1.optional(z$1.never())
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("approval-requested"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalRequestedSchema
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("approval-responded"),
			input: z$1.unknown(),
			providerExecuted: z$1.optional(z$1.boolean()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalRespondedSchema
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-available"),
			providerExecuted: z$1.optional(z$1.boolean()),
			input: z$1.unknown(),
			output: z$1.unknown(),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			resultProviderMetadata: z$1.optional(providerMetadataSchema),
			preliminary: z$1.optional(z$1.boolean()),
			approval: z$1.optional(approvalGrantedSchema)
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-error"),
			providerExecuted: z$1.optional(z$1.boolean()),
			input: z$1.optional(z$1.unknown()),
			rawInput: z$1.optional(z$1.unknown()),
			output: z$1.optional(z$1.never()),
			errorText: z$1.string(),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			resultProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: z$1.optional(approvalGrantedSchema)
		}),
		z$1.object({
			type: z$1.string().check(z$1.startsWith("tool-")),
			toolCallId: z$1.string(),
			title: z$1.optional(z$1.string()),
			toolMetadata: z$1.optional(toolMetadataSchema),
			state: z$1.literal("output-denied"),
			providerExecuted: z$1.optional(z$1.boolean()),
			input: z$1.unknown(),
			output: z$1.optional(z$1.never()),
			errorText: z$1.optional(z$1.never()),
			callProviderMetadata: z$1.optional(providerMetadataSchema),
			approval: approvalDeniedSchema
		})
	]);
	const messageSchema = z$1.object({
		id: z$1.string(),
		role: z$1.enum([
			"system",
			"user",
			"assistant"
		]),
		metadata: z$1.optional(z$1.unknown()),
		parts: arrayUntilFirstInvalidElement((part) => {
			const type = part?.type;
			if (typeof type === "string") {
				if (type.startsWith("data-")) return dataPartSchema;
				if (type.startsWith("tool-")) return toolPartSchema;
				if (type === "dynamic-tool") return dynamicToolPartSchema;
			}
			return staticPartSchema;
		})
	}).check((context) => {
		const message = context.value;
		if (message.role !== "assistant" && message.parts.length === 0) context.issues.push({
			continue: true,
			origin: "array",
			code: "too_small",
			minimum: 1,
			inclusive: true,
			input: message.parts,
			path: ["parts"],
			message: "Message must contain at least one part"
		});
	});
	return zodSchema(arrayUntilFirstInvalidElement(() => messageSchema).check(z$1.minLength(1, "Messages array must not be empty")));
});
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
new TextEncoder();
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
var { atob: atob$1 } = globalThis;
var SerialJobExecutor = class {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
		this.idleWaiters = [];
	}
	async processQueue() {
		if (this.isProcessing) return;
		this.isProcessing = true;
		try {
			while (this.queue.length > 0) {
				await this.queue[0]();
				this.queue.shift();
			}
		} finally {
			this.isProcessing = false;
			for (const resolve of this.idleWaiters.splice(0)) resolve();
		}
	}
	async run(job) {
		return new Promise((resolve, reject) => {
			this.queue.push(async () => {
				try {
					await job();
					resolve();
				} catch (error) {
					reject(error);
				}
			});
			this.processQueue();
		});
	}
	async waitForIdle() {
		if (!this.isProcessing && this.queue.length === 0) return;
		await new Promise((resolve) => {
			this.idleWaiters.push(resolve);
		});
	}
};
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
var fileInlineDataSchema = z.union([
	z.string(),
	z.custom(isUint8Array, { message: "Must be a Uint8Array" }),
	z.custom(isArrayBuffer, { message: "Must be an ArrayBuffer" }),
	z.custom(isBuffer, { message: "Must be a Buffer" })
]);
var providerReferenceSchema = z.record(z.string(), z.string());
/**
* @internal
*/
var textPartSchema = z.object({
	type: z.literal("text"),
	text: z.string(),
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
* @deprecated Use `filePartSchema` with `mediaType: 'image'` instead:
* `{ type: 'file', mediaType: 'image', data: { type: 'data', data } }`.
*/
var imagePartSchema = z.object({
	type: z.literal("image"),
	image: z.union([
		fileInlineDataSchema,
		z.instanceof(URL),
		providerReferenceSchema
	]),
	mediaType: z.string().optional(),
	providerOptions: providerMetadataSchema$1.optional()
});
var taggedFileDataSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("data"),
		data: fileInlineDataSchema
	}),
	z.object({
		type: z.literal("url"),
		url: z.instanceof(URL)
	}),
	z.object({
		type: z.literal("reference"),
		reference: providerReferenceSchema
	}),
	z.object({
		type: z.literal("text"),
		text: z.string()
	})
]);
var taggedReasoningFileDataSchema = z.discriminatedUnion("type", [z.object({
	type: z.literal("data"),
	data: fileInlineDataSchema
}), z.object({
	type: z.literal("url"),
	url: z.instanceof(URL)
})]);
/**
* @internal
*/
var filePartSchema = z.object({
	type: z.literal("file"),
	data: z.union([
		taggedFileDataSchema,
		fileInlineDataSchema,
		z.instanceof(URL),
		providerReferenceSchema
	]),
	filename: z.string().optional(),
	mediaType: z.string(),
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
*/
var reasoningPartSchema = z.object({
	type: z.literal("reasoning"),
	text: z.string(),
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
*/
var customPartSchema = z.object({
	type: z.literal("custom"),
	kind: z.string().transform((value) => value),
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
*/
var reasoningFilePartSchema = z.object({
	type: z.literal("reasoning-file"),
	data: z.union([
		taggedReasoningFileDataSchema,
		fileInlineDataSchema,
		z.instanceof(URL)
	]),
	mediaType: z.string(),
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
*/
var toolCallPartSchema = z.object({
	type: z.literal("tool-call"),
	toolCallId: z.string(),
	toolName: z.string(),
	input: z.unknown(),
	providerOptions: providerMetadataSchema$1.optional(),
	providerExecuted: z.boolean().optional()
});
/**
* @internal
*/
var outputSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("text"),
		value: z.string(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	z.object({
		type: z.literal("json"),
		value: jsonValueSchema$1,
		providerOptions: providerMetadataSchema$1.optional()
	}),
	z.object({
		type: z.literal("execution-denied"),
		reason: z.string().optional(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	z.object({
		type: z.literal("error-text"),
		value: z.string(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	z.object({
		type: z.literal("error-json"),
		value: jsonValueSchema$1,
		providerOptions: providerMetadataSchema$1.optional()
	}),
	z.object({
		type: z.literal("content"),
		value: z.array(z.union([
			z.object({
				type: z.literal("text"),
				text: z.string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("file"),
				data: taggedFileDataSchema,
				mediaType: z.string(),
				filename: z.string().optional(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("file-data"),
				data: z.string(),
				mediaType: z.string(),
				filename: z.string().optional(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("file-url"),
				url: z.string(),
				mediaType: z.string().optional(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("file-id"),
				fileId: z.union([z.string(), z.record(z.string(), z.string())]),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("file-reference"),
				providerReference: z.record(z.string(), z.string()),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("image-data"),
				data: z.string(),
				mediaType: z.string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("image-url"),
				url: z.string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("image-file-id"),
				fileId: z.union([z.string(), z.record(z.string(), z.string())]),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("image-file-reference"),
				providerReference: z.record(z.string(), z.string()),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			z.object({
				type: z.literal("custom"),
				providerOptions: providerMetadataSchema$1.optional()
			})
		]))
	})
]);
/**
* @internal
*/
var toolResultPartSchema = z.object({
	type: z.literal("tool-result"),
	toolCallId: z.string(),
	toolName: z.string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema$1.optional()
});
/**
* @internal
*/
var toolApprovalRequestSchema = z.object({
	type: z.literal("tool-approval-request"),
	approvalId: z.string(),
	toolCallId: z.string(),
	reason: z.string().optional(),
	isAutomatic: z.boolean().optional(),
	signature: z.string().optional(),
	inputSchemaInput: z.unknown().optional()
});
/**
* @internal
*/
var toolApprovalResponseSchema = z.object({
	type: z.literal("tool-approval-response"),
	approvalId: z.string(),
	approved: z.boolean(),
	reason: z.string().optional()
});
var systemModelMessageSchema = z.object({
	role: z.literal("system"),
	content: z.string(),
	providerOptions: providerMetadataSchema$1.optional()
});
var userModelMessageSchema = z.object({
	role: z.literal("user"),
	content: z.union([z.string(), z.array(z.union([
		textPartSchema,
		imagePartSchema,
		filePartSchema
	]))]),
	providerOptions: providerMetadataSchema$1.optional()
});
var assistantModelMessageSchema = z.object({
	role: z.literal("assistant"),
	content: z.union([z.string(), z.array(z.union([
		textPartSchema,
		customPartSchema,
		filePartSchema,
		reasoningPartSchema,
		reasoningFilePartSchema,
		toolCallPartSchema,
		toolResultPartSchema,
		toolApprovalRequestSchema
	]))]),
	providerOptions: providerMetadataSchema$1.optional()
});
var toolModelMessageSchema = z.object({
	role: z.literal("tool"),
	content: z.array(z.union([toolResultPartSchema, toolApprovalResponseSchema])),
	providerOptions: providerMetadataSchema$1.optional()
});
z.union([
	systemModelMessageSchema,
	userModelMessageSchema,
	assistantModelMessageSchema,
	toolModelMessageSchema
]);
z$1.object({
	token: z$1.string().check(z$1.refine((value) => value.trim().length > 0)),
	url: z$1.string().check(z$1.refine((value) => {
		try {
			const url = new URL(value);
			return (url.protocol === "ws:" || url.protocol === "wss:") && url.hostname !== "";
		} catch {
			return false;
		}
	})),
	expiresAt: z$1.optional(z$1.number().check(z$1.positive()).check(z$1.maximum(Number.MAX_SAFE_INTEGER))),
	tools: z$1.optional(z$1.array(z$1.object({
		type: z$1.literal("function"),
		name: z$1.string().check(z$1.minLength(1)),
		description: z$1.optional(z$1.string()),
		parameters: z$1.record(z$1.string(), z$1.unknown())
	})))
});
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
createIdGenerator({
	prefix: "call",
	size: 24
});
async function createUIApiCallError({ response, url, fallbackMessage }) {
	const responseBody = await response.text();
	return new APICallError({
		message: responseBody || fallbackMessage,
		url,
		requestBodyValues: void 0,
		statusCode: response.status,
		responseBody
	});
}
async function convertFileListToFileUIParts(files) {
	if (files == null) return [];
	if (!globalThis.FileList || !(files instanceof globalThis.FileList)) throw new UnsupportedFunctionalityError({
		functionality: "FileList",
		message: "FileList is not supported in the current environment"
	});
	return Promise.all(Array.from(files).map(async (file) => {
		const { name, type } = file;
		return {
			type: "file",
			mediaType: type,
			filename: name,
			url: await new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = (readerEvent) => {
					resolve(readerEvent.target?.result);
				};
				reader.onerror = (error) => reject(error);
				reader.readAsDataURL(file);
			})
		};
	}));
}
function appendPathToUrl(url, path) {
	const queryOrFragmentStart = url.search(/[?#]/);
	const urlPath = queryOrFragmentStart === -1 ? url : url.slice(0, queryOrFragmentStart);
	const suffix = queryOrFragmentStart === -1 ? "" : url.slice(queryOrFragmentStart);
	return `${urlPath.endsWith("/") && path.startsWith("/") ? urlPath.slice(0, -1) : urlPath}${path}${suffix}`;
}
var HttpChatTransport = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await this.prepareSendMessagesRequest?.({
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		});
		const api = preparedRequest?.api ?? this.api;
		const headers = preparedRequest?.headers !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const body = preparedRequest?.body !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = preparedRequest?.credentials ?? resolvedCredentials;
		const response = await (this.fetch ?? globalThis.fetch)(api, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw await createUIApiCallError({
			response,
			url: api,
			fallbackMessage: "Failed to fetch the chat response."
		});
		if (!response.body) throw new EmptyResponseBodyError({ message: "The response body is empty." });
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await this.prepareReconnectToStreamRequest?.({
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		});
		let api = preparedRequest?.api;
		if (api == null) {
			if (options.chatId === "." || options.chatId === "..") throw new InvalidArgumentError({
				parameter: "chatId",
				value: options.chatId,
				message: "Chat IDs must not be \".\" or \"..\" when using the default reconnect URL."
			});
			api = appendPathToUrl(this.api, `/${encodeURIComponent(options.chatId)}/stream`);
		}
		const headers = preparedRequest?.headers !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const credentials = preparedRequest?.credentials ?? resolvedCredentials;
		const response = await (this.fetch ?? globalThis.fetch)(api, {
			method: "GET",
			headers,
			credentials,
			signal: options.abortSignal
		});
		if (response.status === 204) return null;
		if (!response.ok) throw await createUIApiCallError({
			response,
			url: api,
			fallbackMessage: "Failed to fetch the chat response."
		});
		if (!response.body) throw new EmptyResponseBodyError({ message: "The response body is empty." });
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport = class extends HttpChatTransport {
	constructor({ resumeStreamIsReplay = true, ...options } = {}) {
		super(options);
		this.resumeStreamIsReplay = resumeStreamIsReplay;
	}
	processResponseStream(stream) {
		return parseJsonEventStream({
			stream,
			schema: uiMessageChunkSchema
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
var AbstractChat = class {
	get id() {
		return this._id ??= this.generateId();
	}
	constructor({ generateId: generateId$2 = generateId, id, transport = new DefaultChatTransport(), messageMetadataSchema, dataPartSchemas, state, onError, onToolCall, onFinish, onData, sendAutomaticallyWhen, experimental_queue = false }) {
		this.queuedMessagesFallback = [];
		this.queuedMessageOptions = /* @__PURE__ */ new Map();
		this.isQueuePaused = false;
		this.pendingAutomaticDecisions = [];
		this.pendingMessagePreparations = /* @__PURE__ */ new Set();
		this.interruptedMessageIds = /* @__PURE__ */ new Set();
		this.activeResponse = void 0;
		this.activeResumeRequest = void 0;
		this.resumableStreamState = void 0;
		this.jobExecutor = new SerialJobExecutor();
		this.activeStopCount = 0;
		this.stopGeneration = 0;
		this.experimental_removeQueuedMessage = (id) => {
			this.queuedMessageOptions.delete(id);
			this.setQueuedMessages(this.experimental_queuedMessages.filter((message) => message.id !== id));
		};
		this.experimental_sendQueuedMessageNow = async (id) => {
			const message = this.experimental_queuedMessages.find((message) => message.id === id);
			if (message == null) return;
			this.setQueuedMessages([message, ...this.experimental_queuedMessages.filter((queued) => queued.id !== id)]);
			const stopGeneration = this.stopGeneration + 1;
			await this.stop();
			if (stopGeneration !== this.stopGeneration) return;
			await this.resumeQueue({
				skipWaitForUser: true,
				options: this.queuedMessageOptions.get(id)
			});
		};
		this.sendMessage = async (message, options) => {
			if (message == null) {
				let messageId = this.pendingApprovalMessageId;
				if (messageId == null) {
					messageId = this.lastMessage?.id;
					for (let i = this.state.messages.length - 1; i >= 0; i--) {
						const candidate = this.state.messages[i];
						if (candidate.role === "assistant" && candidate.parts.some((part) => isToolUIPart(part) && part.state === "approval-responded")) {
							messageId = candidate.id;
							break;
						}
					}
				}
				const pendingApprovalMessageIndex = messageId != null && messageId === this.pendingApprovalMessageId ? this.state.messages.findIndex((message) => message.id === messageId) : -1;
				await this.makeRequestForToolApproval({
					messageId,
					messageIndex: pendingApprovalMessageIndex,
					...options
				});
				return;
			}
			let uiMessage;
			if ("text" in message || "files" in message) {
				const abortController = new AbortController();
				this.pendingMessagePreparations.add(abortController);
				let fileParts;
				try {
					fileParts = Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files);
				} finally {
					this.pendingMessagePreparations.delete(abortController);
				}
				if (abortController.signal.aborted) return;
				uiMessage = { parts: [...fileParts, ..."text" in message && message.text != null ? [{
					type: "text",
					text: message.text
				}] : []] };
			} else uiMessage = message;
			if (this.queueEnabled && message.messageId == null && (this.isRequestInProgress() || this.isWaitingForUser() || this.experimental_queuedMessages.length > 0)) {
				const queuedMessage = {
					...uiMessage,
					id: uiMessage.id ?? this.generateId(),
					role: uiMessage.role ?? "user",
					metadata: message.metadata
				};
				if (options != null) this.queuedMessageOptions.set(queuedMessage.id, options);
				this.setQueuedMessages([...this.experimental_queuedMessages, queuedMessage]);
				await this.resumeQueue({
					skipWaitForUser: this.isQueuePaused,
					options
				});
				return;
			}
			if (message.messageId != null) {
				await this.clearQueueForHistoryChange();
				const messageIndex = this.state.messages.findIndex((m) => m.id === message.messageId);
				if (messageIndex === -1) throw new InvalidArgumentError({
					parameter: "message.messageId",
					value: message.messageId,
					message: `message with id ${message.messageId} not found`
				});
				if (this.state.messages[messageIndex].role !== "user") throw new InvalidArgumentError({
					parameter: "message.messageId",
					value: message.messageId,
					message: `message with id ${message.messageId} is not a user message`
				});
				this.state.messages = this.state.messages.slice(0, messageIndex + 1);
				this.state.replaceMessage(messageIndex, {
					id: message.messageId,
					...uiMessage,
					role: uiMessage.role ?? "user",
					metadata: message.metadata
				});
			} else this.state.pushMessage({
				...uiMessage,
				id: uiMessage.id ?? this.generateId(),
				role: uiMessage.role ?? "user",
				metadata: message.metadata
			});
			this.isQueuePaused = false;
			await this.makeRequest({
				trigger: "submit-message",
				messageId: message.messageId,
				...options
			});
		};
		this.regenerate = async ({ messageId, ...options } = {}) => {
			await this.clearQueueForHistoryChange();
			const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
			if (messageIndex === -1) throw new InvalidArgumentError({
				parameter: "messageId",
				value: messageId,
				message: `message ${messageId} not found`
			});
			this.state.messages = this.state.messages.slice(0, this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1);
			await this.makeRequest({
				trigger: "regenerate-message",
				messageId,
				...options
			});
		};
		this.resumeStream = async (options = {}) => {
			await this.makeRequest({
				trigger: "resume-stream",
				...options
			});
		};
		this["~resumeStreamIfDisconnected"] = async ({ shouldResume = () => true } = {}) => {
			const activeResponse = this.activeResponse;
			if (this.resumableStreamState == null && activeResponse != null) {
				await activeResponse.completionPromise;
				if (this.resumableStreamState !== activeResponse.state) return;
			}
			if (this.resumableStreamState != null && shouldResume()) await this.resumeStream();
		};
		this.clearError = () => {
			if (this.status === "error") {
				this.state.error = void 0;
				this.setStatus({ status: "ready" });
			}
		};
		this.addToolApprovalResponse = async ({ id, approved, reason, options }) => this.jobExecutor.run(async () => {
			const stopGeneration = this.stopGeneration;
			const messages = this.state.messages;
			const updatePart = (part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id ? {
				...part,
				state: "approval-responded",
				approval: {
					...part.approval,
					id,
					approved,
					reason
				}
			} : part;
			const messageIndex = messages.findIndex((message) => message.parts.some((part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id));
			if (messageIndex !== -1) {
				const message = messages[messageIndex];
				this.state.replaceMessage(messageIndex, {
					...message,
					parts: message.parts.map(updatePart)
				});
				this.pendingApprovalMessageId = message.id;
			}
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (messageIndex !== -1 && this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) {
				const shouldSend = await this.shouldSendAutomatically(messages[messageIndex].id);
				if (shouldSend) {
					this.runAutomaticRequest(() => {
						const messageId = messageIndex === -1 ? this.lastMessage?.id : messages[messageIndex].id;
						return this.makeRequestForToolApproval({
							messageId,
							messageIndex,
							...options
						});
					}, shouldSend);
					return;
				}
			}
			this.settleQueue({ stopGeneration });
		});
		this.addToolOutput = async ({ state, toolCallId, output, errorText, options }) => this.jobExecutor.run(async () => {
			const stopGeneration = this.stopGeneration;
			const messages = this.state.messages;
			const updatePart = (part) => {
				if (!isToolUIPart(part) || part.toolCallId !== toolCallId) return part;
				const { approval: existingApproval, ...toolPart } = part;
				const approval = existingApproval?.approved === true ? { approval: {
					...existingApproval,
					approved: existingApproval.approved
				} } : {};
				return state === "output-error" ? {
					...toolPart,
					...approval,
					state,
					input: part.input,
					output: void 0,
					errorText
				} : {
					...toolPart,
					...approval,
					state: "output-available",
					input: part.input,
					output,
					errorText: void 0
				};
			};
			const messageIndex = messages.findIndex((message) => message.parts.some((part) => isToolUIPart(part) && part.toolCallId === toolCallId));
			if (messageIndex !== -1) {
				const message = messages[messageIndex];
				this.state.replaceMessage(messageIndex, {
					...message,
					parts: message.parts.map(updatePart)
				});
			}
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (messageIndex !== -1 && this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) {
				const shouldSend = await this.shouldSendAutomatically(messages[messageIndex].id);
				if (shouldSend) {
					this.runAutomaticRequest(() => this.makeRequest({
						trigger: "submit-message",
						messageId: messages[messageIndex].id,
						...options
					}), shouldSend);
					return;
				}
			}
			this.settleQueue({ stopGeneration });
		});
		this.addToolResult = this.addToolOutput;
		this.stop = async () => {
			this.activeStopCount++;
			this.stopGeneration++;
			this.deferredApprovalSend = void 0;
			try {
				const activeResumeRequest = this.activeResumeRequest;
				const activeResponse = this.activeResponse;
				for (const controller of this.pendingMessagePreparations) controller.abort();
				activeResumeRequest?.abortController.abort();
				activeResponse?.abortController.abort();
				await Promise.all([activeResumeRequest?.completionPromise, activeResponse?.completionPromise]);
				await this.jobExecutor.waitForIdle();
				this.isQueuePaused = true;
			} finally {
				this.activeStopCount--;
			}
		};
		this.dispose = async () => {
			await this.stop();
			this.transport.close?.();
		};
		this._id = id;
		this.transport = transport;
		this.generateId = generateId$2;
		this.messageMetadataSchema = messageMetadataSchema;
		this.dataPartSchemas = dataPartSchemas;
		this.state = state;
		this.onError = onError;
		this.onToolCall = onToolCall;
		this.onFinish = onFinish;
		this.onData = onData;
		this.sendAutomaticallyWhen = sendAutomaticallyWhen;
		this.queueEnabled = experimental_queue;
	}
	/**
	* Hook status:
	*
	* - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
	* - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
	* - `ready`: The full response has been received and processed; a new user message can be submitted.
	* - `error`: An error occurred during the API request, preventing successful completion.
	*/
	get status() {
		return this.state.status;
	}
	setStatus({ status, error }) {
		if (this.status === status) {
			if (this.error !== error) this.state.error = error;
			return;
		}
		this.state.status = status;
		this.state.error = error;
	}
	get error() {
		return this.state.error;
	}
	get messages() {
		return this.state.messages;
	}
	get lastMessage() {
		return this.state.messages[this.state.messages.length - 1];
	}
	/**
	* Experimental. Messages that wait to be sent when `experimental_queue` is
	* enabled, in the order they will be sent.
	*/
	get experimental_queuedMessages() {
		return this.state.experimental_queuedMessages ?? this.queuedMessagesFallback;
	}
	setQueuedMessages(experimental_queuedMessages) {
		if ("experimental_queuedMessages" in this.state) this.state.experimental_queuedMessages = experimental_queuedMessages;
		else this.queuedMessagesFallback = experimental_queuedMessages;
	}
	async resumeQueue({ skipWaitForUser, options }) {
		this.isQueuePaused = false;
		if (this.hasUnsentApprovalResponse()) {
			if (!this.isRequestInProgress()) {
				await this.sendMessage(void 0, options);
				return;
			}
			this.deferredApprovalSend = { options };
		}
		await this.settleQueue({ skipWaitForUser });
	}
	async clearQueueForHistoryChange() {
		if (!this.queueEnabled) return;
		this.queuedMessageOptions.clear();
		this.setQueuedMessages([]);
		this.deferredApprovalSend = void 0;
		if (this.isRequestInProgress()) await this.stop();
	}
	isRequestInProgress() {
		return this.pendingAutomaticDecisions.includes(this.stopGeneration) || this.activeResponse != null || this.status === "submitted" || this.status === "streaming";
	}
	isWaitingForUser() {
		const lastMessage = this.lastMessage;
		return lastMessage?.role === "assistant" && lastMessage.parts.some((part) => isToolUIPart(part) && (part.state === "approval-requested" || part.state === "approval-responded" || !part.providerExecuted && (part.state === "input-streaming" || part.state === "input-available")));
	}
	hasUnsentApprovalResponse() {
		const lastMessage = this.lastMessage;
		return lastMessage?.role === "assistant" && lastMessage.parts.some((part) => isToolUIPart(part) && part.state === "approval-responded") && !lastMessage.parts.some((part) => isToolUIPart(part) && (part.state === "approval-requested" || !part.providerExecuted && (part.state === "input-streaming" || part.state === "input-available")));
	}
	async settleQueue({ stopGeneration = this.stopGeneration, skipWaitForUser = false } = {}) {
		if (this.isQueuePaused || this.isRequestInProgress() || this.activeStopCount > 0 || stopGeneration !== this.stopGeneration) return;
		const deferredApprovalSend = this.deferredApprovalSend;
		this.deferredApprovalSend = void 0;
		if (deferredApprovalSend != null && this.hasUnsentApprovalResponse()) {
			await this.sendMessage(void 0, deferredApprovalSend.options);
			return;
		}
		const [message, ...rest] = this.experimental_queuedMessages;
		if (message == null || !skipWaitForUser && this.isWaitingForUser()) return;
		const options = this.queuedMessageOptions.get(message.id);
		this.queuedMessageOptions.delete(message.id);
		this.setQueuedMessages(rest);
		this.state.pushMessage(message);
		await this.makeRequest({
			trigger: "submit-message",
			...options
		});
	}
	set messages(messages) {
		this.state.messages = messages;
	}
	async shouldSendAutomatically(messageId = this.lastMessage?.id) {
		const isInterrupted = (id) => id != null && this.interruptedMessageIds.has(id);
		if (!this.sendAutomaticallyWhen || isInterrupted(messageId) || isInterrupted(this.lastMessage?.id)) return false;
		const stopGeneration = this.stopGeneration;
		this.pendingAutomaticDecisions.push(stopGeneration);
		let result;
		try {
			result = await this.sendAutomaticallyWhen({ messages: this.state.messages });
		} finally {
			this.pendingAutomaticDecisions.splice(this.pendingAutomaticDecisions.indexOf(stopGeneration), 1);
		}
		return result && !isInterrupted(messageId) && !isInterrupted(this.lastMessage?.id);
	}
	async runAutomaticRequest(request, shouldSend) {
		const stopGeneration = this.stopGeneration;
		const startedWhileStopping = this.activeStopCount > 0;
		if (!(shouldSend ?? await this.shouldSendAutomatically())) return false;
		if (startedWhileStopping || stopGeneration !== this.stopGeneration || this.activeStopCount > 0) return false;
		await request();
		return true;
	}
	async makeRequestForToolApproval({ messageId, messageIndex, ...options }) {
		this.deferredApprovalSend = void 0;
		const consumesPendingApproval = messageId != null && messageId === this.pendingApprovalMessageId;
		if (consumesPendingApproval) this.pendingApprovalMessageId = void 0;
		await this.makeRequest({
			trigger: "submit-message",
			messageId,
			...options
		});
		if (consumesPendingApproval && this.status === "error" && this.pendingApprovalMessageId == null) this.pendingApprovalMessageId = this.state.messages[messageIndex]?.id ?? messageId;
	}
	async makeRequest(options) {
		const completion = createResolvablePromise();
		try {
			await this.makeRequestImpl({
				...options,
				completionPromise: completion.promise
			});
		} finally {
			completion.resolve();
		}
	}
	async makeRequestImpl({ trigger, metadata, headers, body, messageId, completionPromise }) {
		if (trigger !== "resume-stream") this.resumableStreamState = void 0;
		const abortController = new AbortController();
		const activeResumeRequest = trigger === "resume-stream" ? {
			abortController,
			completionPromise
		} : void 0;
		if (activeResumeRequest) {
			this.activeResumeRequest?.abortController.abort();
			this.activeResumeRequest = activeResumeRequest;
		}
		const isCurrentRequest = () => activeResumeRequest == null || this.activeResumeRequest === activeResumeRequest;
		const clearActiveResumeRequest = () => {
			if (this.activeResumeRequest === activeResumeRequest) this.activeResumeRequest = void 0;
		};
		let resumeStream;
		if (trigger === "resume-stream") try {
			const reconnect = await this.transport.reconnectToStream({
				chatId: this.id,
				abortSignal: abortController.signal,
				metadata,
				headers,
				body
			});
			if (abortController.signal.aborted || !isCurrentRequest()) {
				await reconnect?.cancel().catch(() => {});
				if (isCurrentRequest()) {
					this.setStatus({ status: "ready" });
					this.resumableStreamState = void 0;
				}
				clearActiveResumeRequest();
				return;
			}
			if (reconnect == null) {
				this.setStatus({ status: "ready" });
				this.resumableStreamState = void 0;
				clearActiveResumeRequest();
				return;
			}
			resumeStream = reconnect;
		} catch (err) {
			if (abortController.signal.aborted || err.name === "AbortError") {
				if (isCurrentRequest()) {
					this.setStatus({ status: "ready" });
					this.resumableStreamState = void 0;
				}
				clearActiveResumeRequest();
				return;
			}
			if (!isCurrentRequest()) return;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
			clearActiveResumeRequest();
			return;
		}
		this.setStatus({
			status: "submitted",
			error: void 0
		});
		const lastMessage = this.lastMessage;
		const responseMessageIndex = trigger === "submit-message" && messageId != null ? this.state.messages.findIndex((message) => message.id === messageId) : this.state.messages.length - 1;
		const responseMessage = responseMessageIndex === -1 ? lastMessage : this.state.messages[responseMessageIndex];
		const originalResponseMessageId = responseMessage?.id;
		const resumableResponseMessage = trigger === "resume-stream" && responseMessage?.role === "assistant" && responseMessage.parts.some((part) => isToolUIPart(part) && (part.state === "input-streaming" || part.state === "input-available" && part.providerExecuted || part.state === "approval-responded")) ? this.state.snapshot(responseMessage) : void 0;
		const usesEarlierAssistantMessage = responseMessageIndex !== -1 && responseMessageIndex < this.state.messages.length - 1 && responseMessage?.role === "assistant";
		let isAbort = false;
		let isDisconnect = false;
		let isError = false;
		let activeResponse;
		try {
			const response = {
				state: trigger === "resume-stream" && this.resumableStreamState != null ? this.resumableStreamState : createStreamingUIMessageState({
					lastMessage: trigger === "resume-stream" ? resumableResponseMessage : trigger === "regenerate-message" ? void 0 : this.state.snapshot(responseMessage),
					messageId: this.generateId()
				}),
				abortController,
				completionPromise
			};
			activeResponse = response;
			response.abortController.signal.addEventListener("abort", () => {
				isAbort = true;
			});
			this.activeResponse = response;
			let stream;
			if (trigger === "resume-stream") stream = resumeStream;
			else stream = await this.transport.sendMessages({
				chatId: this.id,
				messages: this.state.messages,
				abortSignal: response.abortController.signal,
				metadata,
				headers,
				body,
				trigger,
				messageId
			});
			const runUpdateMessageJob = (job) => this.jobExecutor.run(() => {
				if (response.abortController.signal.aborted) return Promise.resolve();
				return job({
					state: response.state,
					write: ({ updateStatus = true } = {}) => {
						if (response.abortController.signal.aborted) return;
						if (updateStatus) this.setStatus({ status: "streaming" });
						const existingMessageIndex = this.state.messages.findLastIndex((message) => message.id === response.state.message.id);
						if (existingMessageIndex !== -1) this.state.replaceMessage(existingMessageIndex, response.state.message);
						else if (usesEarlierAssistantMessage) {
							const originalMessageIndex = this.state.messages.findLastIndex((message) => message.id === originalResponseMessageId);
							if (originalMessageIndex !== -1) this.state.replaceMessage(originalMessageIndex, response.state.message);
							else this.state.pushMessage(response.state.message);
						} else this.state.pushMessage(response.state.message);
					}
				});
			});
			await consumeStream({
				stream: processUIMessageStream({
					stream,
					resetStateOnMessageIdChange: trigger === "resume-stream",
					resetStateOnFirstMessageStart: trigger === "resume-stream" && this.transport.resumeStreamIsReplay,
					onToolCall: this.onToolCall,
					onData: this.onData,
					messageMetadataSchema: this.messageMetadataSchema,
					dataPartSchemas: this.dataPartSchemas,
					runUpdateMessageJob,
					onError: (error) => {
						throw error;
					}
				}),
				abortSignal: response.abortController.signal,
				onError: (error) => {
					throw error;
				}
			});
			if (isAbort) {
				if (isCurrentRequest()) {
					this.setStatus({ status: "ready" });
					if (this.resumableStreamState === response.state) this.resumableStreamState = void 0;
				}
				return null;
			}
			if (isCurrentRequest()) {
				this.setStatus({ status: "ready" });
				if (this.resumableStreamState === response.state) this.resumableStreamState = void 0;
			}
		} catch (err) {
			if (isAbort || err.name === "AbortError") {
				isAbort = true;
				if (isCurrentRequest()) {
					this.setStatus({ status: "ready" });
					if (this.resumableStreamState === activeResponse?.state) this.resumableStreamState = void 0;
				}
				return null;
			}
			if (!isCurrentRequest()) return null;
			isError = true;
			if (err instanceof TypeError) {
				const message = err.message.toLowerCase();
				isDisconnect = message.includes("fetch") || message.includes("network") || message === "load failed";
			}
			if (isDisconnect) this.resumableStreamState = activeResponse?.state;
			else if (this.resumableStreamState === activeResponse?.state) this.resumableStreamState = void 0;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
		} finally {
			try {
				if (activeResponse) {
					const { message, finishReason } = activeResponse.state;
					if (finishReason === "interrupted") this.interruptedMessageIds.add(message.id);
					else if (!isAbort && !isError) this.interruptedMessageIds.delete(message.id);
					this.onFinish?.({
						message: activeResponse.state.message,
						messages: this.state.messages,
						isAbort,
						isDisconnect,
						isError,
						finishReason: activeResponse.state.finishReason
					});
				}
			} finally {
				if (isAbort || isError || activeResponse?.state.finishReason === "interrupted") this.isQueuePaused = true;
				if (this.activeResponse === activeResponse) this.activeResponse = void 0;
				clearActiveResumeRequest();
			}
		}
		if (!isAbort && !isError && activeResponse?.state.finishReason !== "interrupted") {
			const stopGeneration = this.stopGeneration;
			if (!await this.runAutomaticRequest(() => this.makeRequest({
				trigger: "submit-message",
				messageId: this.lastMessage?.id,
				metadata,
				headers,
				body
			}))) await this.settleQueue({ stopGeneration });
		}
	}
};
//#endregion
//#region node_modules/throttleit/index.js
var require_throttleit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function throttle(function_, wait) {
		if (typeof function_ !== "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
		let timeoutId;
		let lastCallTime = 0;
		return function throttled(...arguments_) {
			clearTimeout(timeoutId);
			const now = Date.now();
			const delayForNextCall = wait - (now - lastCallTime);
			if (delayForNextCall <= 0) {
				lastCallTime = now;
				function_.apply(this, arguments_);
			} else timeoutId = setTimeout(() => {
				lastCallTime = Date.now();
				function_.apply(this, arguments_);
			}, delayForNextCall);
		};
	}
	module.exports = throttle;
}));
//#endregion
//#region node_modules/@ai-sdk/react/dist/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_throttleit = /* @__PURE__ */ __toESM(require_throttleit(), 1);
require_jsx_runtime();
function throttle(fn, waitMs) {
	return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
function cloneMetadata(metadata) {
	if (Array.isArray(metadata)) return [...metadata];
	if (metadata != null && typeof metadata === "object" && (Object.getPrototypeOf(metadata) === Object.prototype || Object.getPrototypeOf(metadata) === null)) return { ...metadata };
	return metadata;
}
var ReactChatState = class {
	#messages;
	#status;
	#error;
	#queuedMessages;
	#messagesCallbacks;
	#queuedMessagesCallbacks;
	#statusCallbacks;
	#errorCallbacks;
	constructor(initialMessages = []) {
		this.#status = "ready";
		this.#error = void 0;
		this.#queuedMessages = [];
		this.#messagesCallbacks = /* @__PURE__ */ new Set();
		this.#queuedMessagesCallbacks = /* @__PURE__ */ new Set();
		this.#statusCallbacks = /* @__PURE__ */ new Set();
		this.#errorCallbacks = /* @__PURE__ */ new Set();
		this.pushMessage = (message) => {
			this.#messages = this.#messages.concat(message);
			this.#callMessagesCallbacks();
		};
		this.popMessage = () => {
			this.#messages = this.#messages.slice(0, -1);
			this.#callMessagesCallbacks();
		};
		this.replaceMessage = (index, message) => {
			this.#messages = [
				...this.#messages.slice(0, index),
				this.snapshot(message),
				...this.#messages.slice(index + 1)
			];
			this.#callMessagesCallbacks();
		};
		this.snapshot = (value) => {
			if (value == null || typeof value !== "object" || !("parts" in value) || !Array.isArray(value.parts)) return value;
			const message = value;
			const snapshot = {
				...message,
				parts: message.parts.map((part) => ({ ...part }))
			};
			if ("metadata" in message) snapshot.metadata = cloneMetadata(message.metadata);
			return snapshot;
		};
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
			const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
			this.#messagesCallbacks.add(callback);
			return () => {
				this.#messagesCallbacks.delete(callback);
			};
		};
		this["~registerStatusCallback"] = (onChange) => {
			this.#statusCallbacks.add(onChange);
			return () => {
				this.#statusCallbacks.delete(onChange);
			};
		};
		this["~registerErrorCallback"] = (onChange) => {
			this.#errorCallbacks.add(onChange);
			return () => {
				this.#errorCallbacks.delete(onChange);
			};
		};
		this["~registerQueuedMessagesCallback"] = (onChange) => {
			this.#queuedMessagesCallbacks.add(onChange);
			return () => {
				this.#queuedMessagesCallbacks.delete(onChange);
			};
		};
		this.#callMessagesCallbacks = () => {
			this.#messagesCallbacks.forEach((callback) => callback());
		};
		this.#callStatusCallbacks = () => {
			this.#statusCallbacks.forEach((callback) => callback());
		};
		this.#callErrorCallbacks = () => {
			this.#errorCallbacks.forEach((callback) => callback());
		};
		this.#messages = initialMessages;
	}
	get status() {
		return this.#status;
	}
	set status(newStatus) {
		this.#status = newStatus;
		this.#callStatusCallbacks();
	}
	get error() {
		return this.#error;
	}
	set error(newError) {
		this.#error = newError;
		this.#callErrorCallbacks();
	}
	get experimental_queuedMessages() {
		return this.#queuedMessages;
	}
	set experimental_queuedMessages(newQueuedMessages) {
		this.#queuedMessages = newQueuedMessages;
		this.#queuedMessagesCallbacks.forEach((callback) => callback());
	}
	get messages() {
		return this.#messages;
	}
	set messages(newMessages) {
		this.#messages = [...newMessages];
		this.#callMessagesCallbacks();
	}
	#callMessagesCallbacks;
	#callStatusCallbacks;
	#callErrorCallbacks;
};
var Chat = class extends AbstractChat {
	#state;
	constructor({ messages, ...init }) {
		const state = new ReactChatState(messages);
		super({
			...init,
			state
		});
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => this.#state["~registerMessagesCallback"](onChange, throttleWaitMs);
		this["~registerStatusCallback"] = (onChange) => this.#state["~registerStatusCallback"](onChange);
		this["~registerErrorCallback"] = (onChange) => this.#state["~registerErrorCallback"](onChange);
		this["~registerQueuedMessagesCallback"] = (onChange) => this.#state["~registerQueuedMessagesCallback"](onChange);
		this.#state = state;
	}
};
var automaticResumeStates = /* @__PURE__ */ new WeakMap();
/**
* When the document becomes visible again, resume the chat stream if it was
* interrupted by a network disconnect while the page was in the background.
*/
function resumeOnVisible({ chat, state }) {
	if (document.visibilityState !== "visible" || state.pendingVisibilityResume != null) return;
	const isRegistered = () => automaticResumeStates.get(chat) === state && state.registrations.size > 0;
	const clearPendingResume = () => {
		state.pendingVisibilityResume = void 0;
	};
	state.pendingVisibilityResume = chat["~resumeStreamIfDisconnected"]({ shouldResume: () => isRegistered() && document.visibilityState === "visible" }).then(clearPendingResume, clearPendingResume);
}
function registerAutomaticResume({ chat, registration }) {
	let state = automaticResumeStates.get(chat);
	if (state == null) {
		const newState = { registrations: /* @__PURE__ */ new Set() };
		automaticResumeStates.set(chat, newState);
		state = newState;
		if (typeof document !== "undefined") {
			const onVisibilityChange = () => resumeOnVisible({
				chat,
				state: newState
			});
			document.addEventListener("visibilitychange", onVisibilityChange);
			newState.cleanupVisibilityListener = () => {
				document.removeEventListener("visibilitychange", onVisibilityChange);
			};
		}
	}
	const { registrations } = state;
	const shouldResume = registrations.size === 0;
	registrations.add(registration);
	if (shouldResume && chat.status !== "submitted" && chat.status !== "streaming") chat.resumeStream();
	return () => {
		registrations.delete(registration);
		if (registrations.size === 0) {
			state.cleanupVisibilityListener?.();
			automaticResumeStates.delete(chat);
		}
	};
}
function readChatSnapshot(chat) {
	return {
		chat,
		messages: chat.messages,
		status: chat.status,
		error: chat.error,
		experimental_queuedMessages: chat.experimental_queuedMessages
	};
}
function equalChatSnapshots(current, next) {
	return current.chat === next.chat && current.messages === next.messages && current.status === next.status && current.error === next.error && current.experimental_queuedMessages === next.experimental_queuedMessages;
}
function useChat({ throttle, experimental_throttle, resume = false, ...options } = {}) {
	const throttleWaitMs = throttle ?? experimental_throttle;
	const automaticResumeRegistration = (0, import_react.useRef)({});
	const latestRef = (0, import_react.useRef)({});
	if (!("chat" in options)) latestRef.current = {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen,
		transport: options.transport
	};
	let defaultTransport;
	const getTransport = () => latestRef.current.transport ?? (defaultTransport ??= new DefaultChatTransport());
	const chatOptions = {
		...options,
		transport: {
			get resumeStreamIsReplay() {
				return getTransport().resumeStreamIsReplay;
			},
			sendMessages: (sendOptions) => getTransport().sendMessages(sendOptions),
			reconnectToStream: (reconnectOptions) => getTransport().reconnectToStream(reconnectOptions)
		},
		onToolCall: (arg) => latestRef.current.onToolCall?.(arg),
		onData: (arg) => latestRef.current.onData?.(arg),
		onFinish: (arg) => latestRef.current.onFinish?.(arg),
		onError: (arg) => latestRef.current.onError?.(arg),
		sendAutomaticallyWhen: (arg) => latestRef.current.sendAutomaticallyWhen?.(arg) ?? false
	};
	const chatKey = "chat" in options ? options.chat : options.id;
	const { chat, isExternallyManaged } = (0, import_react.useMemo)(() => ({
		chat: "chat" in options ? options.chat : new Chat(chatOptions),
		isExternallyManaged: "chat" in options
	}), [chatKey]);
	(0, import_react.useEffect)(() => {
		if (isExternallyManaged) return;
		return () => {
			chat.stop();
		};
	}, [chat, isExternallyManaged]);
	const [snapshot, setSnapshot] = (0, import_react.useState)(() => readChatSnapshot(chat));
	if (snapshot.chat !== chat) setSnapshot(readChatSnapshot(chat));
	(0, import_react.useEffect)(() => {
		let isSubscribed = true;
		const publishSnapshot = () => {
			if (!isSubscribed) return;
			const nextSnapshot = readChatSnapshot(chat);
			setSnapshot((current) => current.chat !== chat || equalChatSnapshots(current, nextSnapshot) ? current : nextSnapshot);
		};
		const unsubscribes = [
			chat["~registerMessagesCallback"](publishSnapshot, throttleWaitMs),
			chat["~registerStatusCallback"](publishSnapshot),
			chat["~registerErrorCallback"](publishSnapshot),
			chat["~registerQueuedMessagesCallback"](publishSnapshot)
		];
		const nextSnapshot = readChatSnapshot(chat);
		setSnapshot((current) => equalChatSnapshots(current, nextSnapshot) ? current : nextSnapshot);
		return () => {
			isSubscribed = false;
			unsubscribes.forEach((unsubscribe) => unsubscribe());
		};
	}, [chat, throttleWaitMs]);
	const { messages, status, error, experimental_queuedMessages } = snapshot;
	const setMessages = (0, import_react.useCallback)((messagesParam) => {
		if (typeof messagesParam === "function") messagesParam = messagesParam(chat.messages);
		chat.messages = messagesParam;
	}, [chat]);
	(0, import_react.useEffect)(() => {
		if (resume) return registerAutomaticResume({
			chat,
			registration: automaticResumeRegistration.current
		});
	}, [resume, chat]);
	return {
		get id() {
			return chat.id;
		},
		messages,
		setMessages,
		sendMessage: chat.sendMessage,
		regenerate: chat.regenerate,
		clearError: chat.clearError,
		stop: chat.stop,
		error,
		resumeStream: chat.resumeStream,
		status,
		/**
		* @deprecated Use `addToolOutput` instead.
		*/
		addToolResult: chat.addToolOutput,
		addToolOutput: chat.addToolOutput,
		addToolApprovalResponse: chat.addToolApprovalResponse,
		experimental_queuedMessages,
		experimental_removeQueuedMessage: chat.experimental_removeQueuedMessage,
		experimental_sendQueuedMessageNow: chat.experimental_sendQueuedMessageNow
	};
}
//#endregion
export { require_react as i, DefaultChatTransport as n, require_jsx_runtime as r, useChat as t };
