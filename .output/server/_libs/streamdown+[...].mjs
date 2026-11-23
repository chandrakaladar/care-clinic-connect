import { a as __toESM } from "../_runtime.mjs";
import { F as performance_default } from "./mermaid-js__parser+unenv.mjs";
import { i as require_react, r as require_jsx_runtime } from "./@ai-sdk/react+[...].mjs";
import { n as clsx } from "./class-variance-authority+clsx.mjs";
import { l as require_react_dom } from "./@floating-ui/react-dom+[...].mjs";
import { _ as visitParents, g as SKIP, o as visit } from "./@streamdown/cjk+[...].mjs";
import { v as VFile } from "./@streamdown/math+[...].mjs";
import { t as harden } from "./rehype-harden.mjs";
import { t as rehypeRaw } from "./rehype-raw.mjs";
import { n as defaultSchema } from "./hast-util-sanitize.mjs";
import { t as rehypeSanitize } from "./rehype-sanitize.mjs";
import { t as remarkGfm } from "./remark-gfm.mjs";
import { t as Fr$1 } from "./remend.mjs";
import { t as toJsxRuntime } from "./hast-util-to-jsx-runtime+[...].mjs";
import { t as urlAttributes } from "./html-url-attributes.mjs";
import { t as remarkParse } from "./remark-parse.mjs";
import { t as remarkRehype } from "./remark-rehype.mjs";
import { t as bail } from "./bail.mjs";
import { t as require_extend } from "./extend.mjs";
import { t as isPlainObject } from "./is-plain-obj.mjs";
import { t as w } from "./marked.mjs";
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
			else if (currentCharacter === "\\") index++;
			else if (currentCharacter === "\"" || currentCharacter === "'") while (++index < len) {
				const quotedCharacter = className[index];
				if (quotedCharacter === "\\") index++;
				else if (quotedCharacter === currentCharacter) break;
			}
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const importantModifierOffset = hasImportantModifier && baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER) ? 1 : 0;
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart - importantModifierOffset : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
	...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let i = 0; i < classGroupIds.length; i++) lookup[classGroupIds[i]] = true;
	return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers, postfixLookupClassGroupIds } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId;
		if (hasPostfixModifier) {
			classGroupId = getClassGroupId(baseClassName.substring(0, maybePostfixModifierPosition));
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	themeGetter.themeKey = key;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|Q|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^--spacing\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark|contrast-color|device-cmyk|--alpha)\(.+\)$/i;
var maskPositionRegex = /^(?:_*[+-]?(?:\d|\.\d)|[\w-]+\(|_*(?:inherit|initial|revert(?:-layer)?|unset)_*$)/i;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isMaskPosition = (value) => maskPositionRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryMaskPosition = (value) => getIsArbitraryValue(value, isLabelMaskPosition, isMaskPosition);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableMaskPosition = (value) => getIsArbitraryVariable(value, isLabelMaskPosition, true);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelMaskPosition = (label) => label !== "color";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		themeContainer,
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariableMaskPosition,
		isArbitraryMaskPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				"auto",
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only"],
			/**
			* Not Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			"not-sr": ["not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/inline-size
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-inline-size
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-inline-size
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/block-size
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-block-size
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-block-size
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [
				"none",
				themeLeading,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariableLength,
				isArbitraryVariablePosition,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						"",
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ mask: ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			"place-content": ["align-content", "justify-content"],
			"place-items": ["align-items", "justify-items"],
			"place-self": ["align-self", "justify-self"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			sr: [
				"not-sr",
				"position",
				"size",
				"w",
				"h",
				"p",
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl",
				"m",
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml",
				"overflow",
				"overflow-x",
				"overflow-y",
				"whitespace"
			],
			"not-sr": ["sr"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			"mask-image-x-from-pos": ["mask-image-r-from-pos", "mask-image-l-from-pos"],
			"mask-image-x-to-pos": ["mask-image-r-to-pos", "mask-image-l-to-pos"],
			"mask-image-x-from-color": ["mask-image-r-from-color", "mask-image-l-from-color"],
			"mask-image-x-to-color": ["mask-image-r-to-color", "mask-image-l-to-color"],
			"mask-image-y-from-pos": ["mask-image-t-from-pos", "mask-image-b-from-pos"],
			"mask-image-y-to-pos": ["mask-image-t-to-pos", "mask-image-b-to-pos"],
			"mask-image-y-from-color": ["mask-image-t-from-color", "mask-image-b-from-color"],
			"mask-image-y-to-color": ["mask-image-t-to-color", "mask-image-b-to-color"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
/**
* @param baseConfig Config where other config will be merged into. This object will be mutated.
* @param configExtension Partial config to merge into the `baseConfig`.
*/
var mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} }) => {
	overrideProperty(baseConfig, "cacheSize", cacheSize);
	overrideProperty(baseConfig, "prefix", prefix);
	overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
	overrideConfigProperties(baseConfig.theme, override.theme);
	overrideConfigProperties(baseConfig.classGroups, override.classGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
	overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
	overrideProperty(baseConfig, "postfixLookupClassGroups", override.postfixLookupClassGroups);
	overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
	mergeConfigProperties(baseConfig.theme, extend.theme);
	mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
	mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
	mergeArrayProperties(baseConfig, extend, "postfixLookupClassGroups");
	mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
	return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
	if (overrideValue !== void 0) baseObject[overrideKey] = overrideValue;
};
var overrideConfigProperties = (baseObject, overrideObject) => {
	if (overrideObject) for (const key in overrideObject) overrideProperty(baseObject, key, overrideObject[key]);
};
var mergeConfigProperties = (baseObject, mergeObject) => {
	if (mergeObject) for (const key in mergeObject) mergeArrayProperties(baseObject, mergeObject, key);
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
	const mergeValue = mergeObject[key];
	if (mergeValue !== void 0) baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
};
var extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
//#endregion
//#region node_modules/trough/lib/index.js
/**
* @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback
*   Callback.
*
* @typedef {(...input: Array<any>) => any} Middleware
*   Ware.
*
* @typedef Pipeline
*   Pipeline.
* @property {Run} run
*   Run the pipeline.
* @property {Use} use
*   Add middleware.
*
* @typedef {(...input: Array<any>) => void} Run
*   Call all middleware.
*
*   Calls `done` on completion with either an error or the output of the
*   last middleware.
*
*   > 👉 **Note**: as the length of input defines whether async functions get a
*   > `next` function,
*   > it’s recommended to keep `input` at one value normally.

*
* @typedef {(fn: Middleware) => Pipeline} Use
*   Add middleware.
*/
/**
* Create new middleware.
*
* @returns {Pipeline}
*   Pipeline.
*/
function trough() {
	/** @type {Array<Middleware>} */
	const fns = [];
	/** @type {Pipeline} */
	const pipeline = {
		run,
		use
	};
	return pipeline;
	/** @type {Run} */
	function run(...values) {
		let middlewareIndex = -1;
		/** @type {Callback} */
		const callback = values.pop();
		if (typeof callback !== "function") throw new TypeError("Expected function as last argument, not " + callback);
		next(null, ...values);
		/**
		* Run the next `fn`, or we’re done.
		*
		* @param {Error | null | undefined} error
		* @param {Array<any>} output
		*/
		function next(error, ...output) {
			const fn = fns[++middlewareIndex];
			let index = -1;
			if (error) {
				callback(error);
				return;
			}
			while (++index < values.length) if (output[index] === null || output[index] === void 0) output[index] = values[index];
			values = output;
			if (fn) wrap(fn, next)(...output);
			else callback(null, ...output);
		}
	}
	/** @type {Use} */
	function use(middelware) {
		if (typeof middelware !== "function") throw new TypeError("Expected `middelware` to be a function, not " + middelware);
		fns.push(middelware);
		return pipeline;
	}
}
/**
* Wrap `middleware` into a uniform interface.
*
* You can pass all input to the resulting function.
* `callback` is then called with the output of `middleware`.
*
* If `middleware` accepts more arguments than the later given in input,
* an extra `done` function is passed to it after that input,
* which must be called by `middleware`.
*
* The first value in `input` is the main input value.
* All other input values are the rest input values.
* The values given to `callback` are the input values,
* merged with every non-nullish output value.
*
* * if `middleware` throws an error,
*   returns a promise that is rejected,
*   or calls the given `done` function with an error,
*   `callback` is called with that error
* * if `middleware` returns a value or returns a promise that is resolved,
*   that value is the main output value
* * if `middleware` calls `done`,
*   all non-nullish values except for the first one (the error) overwrite the
*   output values
*
* @param {Middleware} middleware
*   Function to wrap.
* @param {Callback} callback
*   Callback called with the output of `middleware`.
* @returns {Run}
*   Wrapped middleware.
*/
function wrap(middleware, callback) {
	/** @type {boolean} */
	let called;
	return wrapped;
	/**
	* Call `middleware`.
	* @this {any}
	* @param {Array<any>} parameters
	* @returns {void}
	*/
	function wrapped(...parameters) {
		const fnExpectsCallback = middleware.length > parameters.length;
		/** @type {any} */
		let result;
		if (fnExpectsCallback) parameters.push(done);
		try {
			result = middleware.apply(this, parameters);
		} catch (error) {
			const exception = error;
			if (fnExpectsCallback && called) throw exception;
			return done(exception);
		}
		if (!fnExpectsCallback) if (result && result.then && typeof result.then === "function") result.then(then, done);
		else if (result instanceof Error) done(result);
		else then(result);
	}
	/**
	* Call `callback`, only once.
	*
	* @type {Callback}
	*/
	function done(error, ...output) {
		if (!called) {
			called = true;
			callback(error, ...output);
		}
	}
	/**
	* Call `done` with one value.
	*
	* @param {any} [value]
	*/
	function then(value) {
		done(null, value);
	}
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var import_extend = /* @__PURE__ */ __toESM(require_extend(), 1);
var CallableInstance = (
/**
* @this {Function}
* @param {string | symbol} property
* @returns {(...parameters: Array<unknown>) => unknown}
*/
function(property) {
	const proto = this.constructor.prototype;
	const value = proto[property];
	/** @type {(...parameters: Array<unknown>) => unknown} */
	const apply = function() {
		return value.apply(apply, arguments);
	};
	Object.setPrototypeOf(apply, proto);
	return apply;
});
//#endregion
//#region node_modules/unified/lib/index.js
/**
* @typedef {import('trough').Pipeline} Pipeline
*
* @typedef {import('unist').Node} Node
*
* @typedef {import('vfile').Compatible} Compatible
* @typedef {import('vfile').Value} Value
*
* @typedef {import('../index.js').CompileResultMap} CompileResultMap
* @typedef {import('../index.js').Data} Data
* @typedef {import('../index.js').Settings} Settings
*/
/**
* @typedef {CompileResultMap[keyof CompileResultMap]} CompileResults
*   Acceptable results from compilers.
*
*   To register custom results, add them to
*   {@linkcode CompileResultMap}.
*/
/**
* @template {Node} [Tree=Node]
*   The node that the compiler receives (default: `Node`).
* @template {CompileResults} [Result=CompileResults]
*   The thing that the compiler yields (default: `CompileResults`).
* @callback Compiler
*   A **compiler** handles the compiling of a syntax tree to something else
*   (in most cases, text) (TypeScript type).
*
*   It is used in the stringify phase and called with a {@linkcode Node}
*   and {@linkcode VFile} representation of the document to compile.
*   It should return the textual representation of the given tree (typically
*   `string`).
*
*   > **Note**: unified typically compiles by serializing: most compilers
*   > return `string` (or `Uint8Array`).
*   > Some compilers, such as the one configured with
*   > [`rehype-react`][rehype-react], return other values (in this case, a
*   > React tree).
*   > If you’re using a compiler that doesn’t serialize, expect different
*   > result values.
*   >
*   > To register custom results in TypeScript, add them to
*   > {@linkcode CompileResultMap}.
*
*   [rehype-react]: https://github.com/rehypejs/rehype-react
* @param {Tree} tree
*   Tree to compile.
* @param {VFile} file
*   File associated with `tree`.
* @returns {Result}
*   New content: compiled text (`string` or `Uint8Array`, for `file.value`) or
*   something else (for `file.result`).
*/
/**
* @template {Node} [Tree=Node]
*   The node that the parser yields (default: `Node`)
* @callback Parser
*   A **parser** handles the parsing of text to a syntax tree.
*
*   It is used in the parse phase and is called with a `string` and
*   {@linkcode VFile} of the document to parse.
*   It must return the syntax tree representation of the given file
*   ({@linkcode Node}).
* @param {string} document
*   Document to parse.
* @param {VFile} file
*   File associated with `document`.
* @returns {Tree}
*   Node representing the given file.
*/
/**
* @typedef {(
*   Plugin<Array<any>, any, any> |
*   PluginTuple<Array<any>, any, any> |
*   Preset
* )} Pluggable
*   Union of the different ways to add plugins and settings.
*/
/**
* @typedef {Array<Pluggable>} PluggableList
*   List of plugins and presets.
*/
/**
* @template {Array<unknown>} [PluginParameters=[]]
*   Arguments passed to the plugin (default: `[]`, the empty tuple).
* @template {Node | string | undefined} [Input=Node]
*   Value that is expected as input (default: `Node`).
*
*   *   If the plugin returns a {@linkcode Transformer}, this
*       should be the node it expects.
*   *   If the plugin sets a {@linkcode Parser}, this should be
*       `string`.
*   *   If the plugin sets a {@linkcode Compiler}, this should be the
*       node it expects.
* @template [Output=Input]
*   Value that is yielded as output (default: `Input`).
*
*   *   If the plugin returns a {@linkcode Transformer}, this
*       should be the node that that yields.
*   *   If the plugin sets a {@linkcode Parser}, this should be the
*       node that it yields.
*   *   If the plugin sets a {@linkcode Compiler}, this should be
*       result it yields.
* @typedef {(
*   (this: Processor, ...parameters: PluginParameters) =>
*     Input extends string ? // Parser.
*        Output extends Node | undefined ? undefined | void : never :
*     Output extends CompileResults ? // Compiler.
*        Input extends Node | undefined ? undefined | void : never :
*     Transformer<
*       Input extends Node ? Input : Node,
*       Output extends Node ? Output : Node
*     > | undefined | void
* )} Plugin
*   Single plugin.
*
*   Plugins configure the processors they are applied on in the following
*   ways:
*
*   *   they change the processor, such as the parser, the compiler, or by
*       configuring data
*   *   they specify how to handle trees and files
*
*   In practice, they are functions that can receive options and configure the
*   processor (`this`).
*
*   > **Note**: plugins are called when the processor is *frozen*, not when
*   > they are applied.
*/
/**
* Tuple of a plugin and its configuration.
*
* The first item is a plugin, the rest are its parameters.
*
* @template {Array<unknown>} [TupleParameters=[]]
*   Arguments passed to the plugin (default: `[]`, the empty tuple).
* @template {Node | string | undefined} [Input=undefined]
*   Value that is expected as input (optional).
*
*   *   If the plugin returns a {@linkcode Transformer}, this
*       should be the node it expects.
*   *   If the plugin sets a {@linkcode Parser}, this should be
*       `string`.
*   *   If the plugin sets a {@linkcode Compiler}, this should be the
*       node it expects.
* @template [Output=undefined] (optional).
*   Value that is yielded as output.
*
*   *   If the plugin returns a {@linkcode Transformer}, this
*       should be the node that that yields.
*   *   If the plugin sets a {@linkcode Parser}, this should be the
*       node that it yields.
*   *   If the plugin sets a {@linkcode Compiler}, this should be
*       result it yields.
* @typedef {(
*   [
*     plugin: Plugin<TupleParameters, Input, Output>,
*     ...parameters: TupleParameters
*   ]
* )} PluginTuple
*/
/**
* @typedef Preset
*   Sharable configuration.
*
*   They can contain plugins and settings.
* @property {PluggableList | undefined} [plugins]
*   List of plugins and presets (optional).
* @property {Settings | undefined} [settings]
*   Shared settings for parsers and compilers (optional).
*/
/**
* @template {VFile} [File=VFile]
*   The file that the callback receives (default: `VFile`).
* @callback ProcessCallback
*   Callback called when the process is done.
*
*   Called with either an error or a result.
* @param {Error | undefined} [error]
*   Fatal error (optional).
* @param {File | undefined} [file]
*   Processed file (optional).
* @returns {undefined}
*   Nothing.
*/
/**
* @template {Node} [Tree=Node]
*   The tree that the callback receives (default: `Node`).
* @callback RunCallback
*   Callback called when transformers are done.
*
*   Called with either an error or results.
* @param {Error | undefined} [error]
*   Fatal error (optional).
* @param {Tree | undefined} [tree]
*   Transformed tree (optional).
* @param {VFile | undefined} [file]
*   File (optional).
* @returns {undefined}
*   Nothing.
*/
/**
* @template {Node} [Output=Node]
*   Node type that the transformer yields (default: `Node`).
* @callback TransformCallback
*   Callback passed to transforms.
*
*   If the signature of a `transformer` accepts a third argument, the
*   transformer may perform asynchronous operations, and must call it.
* @param {Error | undefined} [error]
*   Fatal error to stop the process (optional).
* @param {Output | undefined} [tree]
*   New, changed, tree (optional).
* @param {VFile | undefined} [file]
*   New, changed, file (optional).
* @returns {undefined}
*   Nothing.
*/
/**
* @template {Node} [Input=Node]
*   Node type that the transformer expects (default: `Node`).
* @template {Node} [Output=Input]
*   Node type that the transformer yields (default: `Input`).
* @callback Transformer
*   Transformers handle syntax trees and files.
*
*   They are functions that are called each time a syntax tree and file are
*   passed through the run phase.
*   When an error occurs in them (either because it’s thrown, returned,
*   rejected, or passed to `next`), the process stops.
*
*   The run phase is handled by [`trough`][trough], see its documentation for
*   the exact semantics of these functions.
*
*   > **Note**: you should likely ignore `next`: don’t accept it.
*   > it supports callback-style async work.
*   > But promises are likely easier to reason about.
*
*   [trough]: https://github.com/wooorm/trough#function-fninput-next
* @param {Input} tree
*   Tree to handle.
* @param {VFile} file
*   File to handle.
* @param {TransformCallback<Output>} next
*   Callback.
* @returns {(
*   Promise<Output | undefined | void> |
*   Promise<never> | // For some reason this is needed separately.
*   Output |
*   Error |
*   undefined |
*   void
* )}
*   If you accept `next`, nothing.
*   Otherwise:
*
*   *   `Error` — fatal error to stop the process
*   *   `Promise<undefined>` or `undefined` — the next transformer keeps using
*       same tree
*   *   `Promise<Node>` or `Node` — new, changed, tree
*/
/**
* @template {Node | undefined} ParseTree
*   Output of `parse`.
* @template {Node | undefined} HeadTree
*   Input for `run`.
* @template {Node | undefined} TailTree
*   Output for `run`.
* @template {Node | undefined} CompileTree
*   Input of `stringify`.
* @template {CompileResults | undefined} CompileResult
*   Output of `stringify`.
* @template {Node | string | undefined} Input
*   Input of plugin.
* @template Output
*   Output of plugin (optional).
* @typedef {(
*   Input extends string
*     ? Output extends Node | undefined
*       ? // Parser.
*         Processor<
*           Output extends undefined ? ParseTree : Output,
*           HeadTree,
*           TailTree,
*           CompileTree,
*           CompileResult
*         >
*       : // Unknown.
*         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
*     : Output extends CompileResults
*     ? Input extends Node | undefined
*       ? // Compiler.
*         Processor<
*           ParseTree,
*           HeadTree,
*           TailTree,
*           Input extends undefined ? CompileTree : Input,
*           Output extends undefined ? CompileResult : Output
*         >
*       : // Unknown.
*         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
*     : Input extends Node | undefined
*     ? Output extends Node | undefined
*       ? // Transform.
*         Processor<
*           ParseTree,
*           HeadTree extends undefined ? Input : HeadTree,
*           Output extends undefined ? TailTree : Output,
*           CompileTree,
*           CompileResult
*         >
*       : // Unknown.
*         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
*     : // Unknown.
*       Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
* )} UsePlugin
*   Create a processor based on the input/output of a {@link Plugin plugin}.
*/
/**
* @template {CompileResults | undefined} Result
*   Node type that the transformer yields.
* @typedef {(
*   Result extends Value | undefined ?
*     VFile :
*     VFile & {result: Result}
*   )} VFileWithOutput
*   Type to generate a {@linkcode VFile} corresponding to a compiler result.
*
*   If a result that is not acceptable on a `VFile` is used, that will
*   be stored on the `result` field of {@linkcode VFile}.
*/
var own = {}.hasOwnProperty;
/**
* Create a new processor.
*
* @example
*   This example shows how a new processor can be created (from `remark`) and linked
*   to **stdin**(4) and **stdout**(4).
*
*   ```js
*   import process from 'node:process'
*   import concatStream from 'concat-stream'
*   import {remark} from 'remark'
*
*   process.stdin.pipe(
*     concatStream(function (buf) {
*       process.stdout.write(String(remark().processSync(buf)))
*     })
*   )
*   ```
*
* @returns
*   New *unfrozen* processor (`processor`).
*
*   This processor is configured to work the same as its ancestor.
*   When the descendant processor is configured in the future it does not
*   affect the ancestral processor.
*/
var unified = new class Processor extends CallableInstance {
	/**
	* Create a processor.
	*/
	constructor() {
		super("copy");
		/**
		* Compiler to use (deprecated).
		*
		* @deprecated
		*   Use `compiler` instead.
		* @type {(
		*   Compiler<
		*     CompileTree extends undefined ? Node : CompileTree,
		*     CompileResult extends undefined ? CompileResults : CompileResult
		*   > |
		*   undefined
		* )}
		*/
		this.Compiler = void 0;
		/**
		* Parser to use (deprecated).
		*
		* @deprecated
		*   Use `parser` instead.
		* @type {(
		*   Parser<ParseTree extends undefined ? Node : ParseTree> |
		*   undefined
		* )}
		*/
		this.Parser = void 0;
		/**
		* Internal list of configured plugins.
		*
		* @deprecated
		*   This is a private internal property and should not be used.
		* @type {Array<PluginTuple<Array<unknown>>>}
		*/
		this.attachers = [];
		/**
		* Compiler to use.
		*
		* @type {(
		*   Compiler<
		*     CompileTree extends undefined ? Node : CompileTree,
		*     CompileResult extends undefined ? CompileResults : CompileResult
		*   > |
		*   undefined
		* )}
		*/
		this.compiler = void 0;
		/**
		* Internal state to track where we are while freezing.
		*
		* @deprecated
		*   This is a private internal property and should not be used.
		* @type {number}
		*/
		this.freezeIndex = -1;
		/**
		* Internal state to track whether we’re frozen.
		*
		* @deprecated
		*   This is a private internal property and should not be used.
		* @type {boolean | undefined}
		*/
		this.frozen = void 0;
		/**
		* Internal state.
		*
		* @deprecated
		*   This is a private internal property and should not be used.
		* @type {Data}
		*/
		this.namespace = {};
		/**
		* Parser to use.
		*
		* @type {(
		*   Parser<ParseTree extends undefined ? Node : ParseTree> |
		*   undefined
		* )}
		*/
		this.parser = void 0;
		/**
		* Internal list of configured transformers.
		*
		* @deprecated
		*   This is a private internal property and should not be used.
		* @type {Pipeline}
		*/
		this.transformers = trough();
	}
	/**
	* Copy a processor.
	*
	* @deprecated
	*   This is a private internal method and should not be used.
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*   New *unfrozen* processor ({@linkcode Processor}) that is
	*   configured to work the same as its ancestor.
	*   When the descendant processor is configured in the future it does not
	*   affect the ancestral processor.
	*/
	copy() {
		const destination = new Processor();
		let index = -1;
		while (++index < this.attachers.length) {
			const attacher = this.attachers[index];
			destination.use(...attacher);
		}
		destination.data((0, import_extend.default)(true, {}, this.namespace));
		return destination;
	}
	/**
	* Configure the processor with info available to all plugins.
	* Information is stored in an object.
	*
	* Typically, options can be given to a specific plugin, but sometimes it
	* makes sense to have information shared with several plugins.
	* For example, a list of HTML elements that are self-closing, which is
	* needed during all phases.
	*
	* > **Note**: setting information cannot occur on *frozen* processors.
	* > Call the processor first to create a new unfrozen processor.
	*
	* > **Note**: to register custom data in TypeScript, augment the
	* > {@linkcode Data} interface.
	*
	* @example
	*   This example show how to get and set info:
	*
	*   ```js
	*   import {unified} from 'unified'
	*
	*   const processor = unified().data('alpha', 'bravo')
	*
	*   processor.data('alpha') // => 'bravo'
	*
	*   processor.data() // => {alpha: 'bravo'}
	*
	*   processor.data({charlie: 'delta'})
	*
	*   processor.data() // => {charlie: 'delta'}
	*   ```
	*
	* @template {keyof Data} Key
	*
	* @overload
	* @returns {Data}
	*
	* @overload
	* @param {Data} dataset
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*
	* @overload
	* @param {Key} key
	* @returns {Data[Key]}
	*
	* @overload
	* @param {Key} key
	* @param {Data[Key]} value
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*
	* @param {Data | Key} [key]
	*   Key to get or set, or entire dataset to set, or nothing to get the
	*   entire dataset (optional).
	* @param {Data[Key]} [value]
	*   Value to set (optional).
	* @returns {unknown}
	*   The current processor when setting, the value at `key` when getting, or
	*   the entire dataset when getting without key.
	*/
	data(key, value) {
		if (typeof key === "string") {
			if (arguments.length === 2) {
				assertUnfrozen("data", this.frozen);
				this.namespace[key] = value;
				return this;
			}
			return own.call(this.namespace, key) && this.namespace[key] || void 0;
		}
		if (key) {
			assertUnfrozen("data", this.frozen);
			this.namespace = key;
			return this;
		}
		return this.namespace;
	}
	/**
	* Freeze a processor.
	*
	* Frozen processors are meant to be extended and not to be configured
	* directly.
	*
	* When a processor is frozen it cannot be unfrozen.
	* New processors working the same way can be created by calling the
	* processor.
	*
	* It’s possible to freeze processors explicitly by calling `.freeze()`.
	* Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
	* `.stringify()`, `.process()`, or `.processSync()` are called.
	*
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*   The current processor.
	*/
	freeze() {
		if (this.frozen) return this;
		const self = this;
		while (++this.freezeIndex < this.attachers.length) {
			const [attacher, ...options] = this.attachers[this.freezeIndex];
			if (options[0] === false) continue;
			if (options[0] === true) options[0] = void 0;
			const transformer = attacher.call(self, ...options);
			if (typeof transformer === "function") this.transformers.use(transformer);
		}
		this.frozen = true;
		this.freezeIndex = Number.POSITIVE_INFINITY;
		return this;
	}
	/**
	* Parse text to a syntax tree.
	*
	* > **Note**: `parse` freezes the processor if not already *frozen*.
	*
	* > **Note**: `parse` performs the parse phase, not the run phase or other
	* > phases.
	*
	* @param {Compatible | undefined} [file]
	*   file to parse (optional); typically `string` or `VFile`; any value
	*   accepted as `x` in `new VFile(x)`.
	* @returns {ParseTree extends undefined ? Node : ParseTree}
	*   Syntax tree representing `file`.
	*/
	parse(file) {
		this.freeze();
		const realFile = vfile(file);
		const parser = this.parser || this.Parser;
		assertParser("parse", parser);
		return parser(String(realFile), realFile);
	}
	/**
	* Process the given file as configured on the processor.
	*
	* > **Note**: `process` freezes the processor if not already *frozen*.
	*
	* > **Note**: `process` performs the parse, run, and stringify phases.
	*
	* @overload
	* @param {Compatible | undefined} file
	* @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
	* @returns {undefined}
	*
	* @overload
	* @param {Compatible | undefined} [file]
	* @returns {Promise<VFileWithOutput<CompileResult>>}
	*
	* @param {Compatible | undefined} [file]
	*   File (optional); typically `string` or `VFile`]; any value accepted as
	*   `x` in `new VFile(x)`.
	* @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
	*   Callback (optional).
	* @returns {Promise<VFile> | undefined}
	*   Nothing if `done` is given.
	*   Otherwise a promise, rejected with a fatal error or resolved with the
	*   processed file.
	*
	*   The parsed, transformed, and compiled value is available at
	*   `file.value` (see note).
	*
	*   > **Note**: unified typically compiles by serializing: most
	*   > compilers return `string` (or `Uint8Array`).
	*   > Some compilers, such as the one configured with
	*   > [`rehype-react`][rehype-react], return other values (in this case, a
	*   > React tree).
	*   > If you’re using a compiler that doesn’t serialize, expect different
	*   > result values.
	*   >
	*   > To register custom results in TypeScript, add them to
	*   > {@linkcode CompileResultMap}.
	*
	*   [rehype-react]: https://github.com/rehypejs/rehype-react
	*/
	process(file, done) {
		const self = this;
		this.freeze();
		assertParser("process", this.parser || this.Parser);
		assertCompiler("process", this.compiler || this.Compiler);
		return done ? executor(void 0, done) : new Promise(executor);
		/**
		* @param {((file: VFileWithOutput<CompileResult>) => undefined | void) | undefined} resolve
		* @param {(error: Error | undefined) => undefined | void} reject
		* @returns {undefined}
		*/
		function executor(resolve, reject) {
			const realFile = vfile(file);
			const parseTree = self.parse(realFile);
			self.run(parseTree, realFile, function(error, tree, file) {
				if (error || !tree || !file) return realDone(error);
				const compileTree = tree;
				const compileResult = self.stringify(compileTree, file);
				if (looksLikeAValue(compileResult)) file.value = compileResult;
				else file.result = compileResult;
				realDone(error, file);
			});
			/**
			* @param {Error | undefined} error
			* @param {VFileWithOutput<CompileResult> | undefined} [file]
			* @returns {undefined}
			*/
			function realDone(error, file) {
				if (error || !file) reject(error);
				else if (resolve) resolve(file);
				else done(void 0, file);
			}
		}
	}
	/**
	* Process the given file as configured on the processor.
	*
	* An error is thrown if asynchronous transforms are configured.
	*
	* > **Note**: `processSync` freezes the processor if not already *frozen*.
	*
	* > **Note**: `processSync` performs the parse, run, and stringify phases.
	*
	* @param {Compatible | undefined} [file]
	*   File (optional); typically `string` or `VFile`; any value accepted as
	*   `x` in `new VFile(x)`.
	* @returns {VFileWithOutput<CompileResult>}
	*   The processed file.
	*
	*   The parsed, transformed, and compiled value is available at
	*   `file.value` (see note).
	*
	*   > **Note**: unified typically compiles by serializing: most
	*   > compilers return `string` (or `Uint8Array`).
	*   > Some compilers, such as the one configured with
	*   > [`rehype-react`][rehype-react], return other values (in this case, a
	*   > React tree).
	*   > If you’re using a compiler that doesn’t serialize, expect different
	*   > result values.
	*   >
	*   > To register custom results in TypeScript, add them to
	*   > {@linkcode CompileResultMap}.
	*
	*   [rehype-react]: https://github.com/rehypejs/rehype-react
	*/
	processSync(file) {
		/** @type {boolean} */
		let complete = false;
		/** @type {VFileWithOutput<CompileResult> | undefined} */
		let result;
		this.freeze();
		assertParser("processSync", this.parser || this.Parser);
		assertCompiler("processSync", this.compiler || this.Compiler);
		this.process(file, realDone);
		assertDone("processSync", "process", complete);
		return result;
		/**
		* @type {ProcessCallback<VFileWithOutput<CompileResult>>}
		*/
		function realDone(error, file) {
			complete = true;
			bail(error);
			result = file;
		}
	}
	/**
	* Run *transformers* on a syntax tree.
	*
	* > **Note**: `run` freezes the processor if not already *frozen*.
	*
	* > **Note**: `run` performs the run phase, not other phases.
	*
	* @overload
	* @param {HeadTree extends undefined ? Node : HeadTree} tree
	* @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
	* @returns {undefined}
	*
	* @overload
	* @param {HeadTree extends undefined ? Node : HeadTree} tree
	* @param {Compatible | undefined} file
	* @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
	* @returns {undefined}
	*
	* @overload
	* @param {HeadTree extends undefined ? Node : HeadTree} tree
	* @param {Compatible | undefined} [file]
	* @returns {Promise<TailTree extends undefined ? Node : TailTree>}
	*
	* @param {HeadTree extends undefined ? Node : HeadTree} tree
	*   Tree to transform and inspect.
	* @param {(
	*   RunCallback<TailTree extends undefined ? Node : TailTree> |
	*   Compatible
	* )} [file]
	*   File associated with `node` (optional); any value accepted as `x` in
	*   `new VFile(x)`.
	* @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
	*   Callback (optional).
	* @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
	*   Nothing if `done` is given.
	*   Otherwise, a promise rejected with a fatal error or resolved with the
	*   transformed tree.
	*/
	run(tree, file, done) {
		assertNode(tree);
		this.freeze();
		const transformers = this.transformers;
		if (!done && typeof file === "function") {
			done = file;
			file = void 0;
		}
		return done ? executor(void 0, done) : new Promise(executor);
		/**
		* @param {(
		*   ((tree: TailTree extends undefined ? Node : TailTree) => undefined | void) |
		*   undefined
		* )} resolve
		* @param {(error: Error) => undefined | void} reject
		* @returns {undefined}
		*/
		function executor(resolve, reject) {
			const realFile = vfile(file);
			transformers.run(tree, realFile, realDone);
			/**
			* @param {Error | undefined} error
			* @param {Node} outputTree
			* @param {VFile} file
			* @returns {undefined}
			*/
			function realDone(error, outputTree, file) {
				const resultingTree = outputTree || tree;
				if (error) reject(error);
				else if (resolve) resolve(resultingTree);
				else done(void 0, resultingTree, file);
			}
		}
	}
	/**
	* Run *transformers* on a syntax tree.
	*
	* An error is thrown if asynchronous transforms are configured.
	*
	* > **Note**: `runSync` freezes the processor if not already *frozen*.
	*
	* > **Note**: `runSync` performs the run phase, not other phases.
	*
	* @param {HeadTree extends undefined ? Node : HeadTree} tree
	*   Tree to transform and inspect.
	* @param {Compatible | undefined} [file]
	*   File associated with `node` (optional); any value accepted as `x` in
	*   `new VFile(x)`.
	* @returns {TailTree extends undefined ? Node : TailTree}
	*   Transformed tree.
	*/
	runSync(tree, file) {
		/** @type {boolean} */
		let complete = false;
		/** @type {(TailTree extends undefined ? Node : TailTree) | undefined} */
		let result;
		this.run(tree, file, realDone);
		assertDone("runSync", "run", complete);
		return result;
		/**
		* @type {RunCallback<TailTree extends undefined ? Node : TailTree>}
		*/
		function realDone(error, tree) {
			bail(error);
			result = tree;
			complete = true;
		}
	}
	/**
	* Compile a syntax tree.
	*
	* > **Note**: `stringify` freezes the processor if not already *frozen*.
	*
	* > **Note**: `stringify` performs the stringify phase, not the run phase
	* > or other phases.
	*
	* @param {CompileTree extends undefined ? Node : CompileTree} tree
	*   Tree to compile.
	* @param {Compatible | undefined} [file]
	*   File associated with `node` (optional); any value accepted as `x` in
	*   `new VFile(x)`.
	* @returns {CompileResult extends undefined ? Value : CompileResult}
	*   Textual representation of the tree (see note).
	*
	*   > **Note**: unified typically compiles by serializing: most compilers
	*   > return `string` (or `Uint8Array`).
	*   > Some compilers, such as the one configured with
	*   > [`rehype-react`][rehype-react], return other values (in this case, a
	*   > React tree).
	*   > If you’re using a compiler that doesn’t serialize, expect different
	*   > result values.
	*   >
	*   > To register custom results in TypeScript, add them to
	*   > {@linkcode CompileResultMap}.
	*
	*   [rehype-react]: https://github.com/rehypejs/rehype-react
	*/
	stringify(tree, file) {
		this.freeze();
		const realFile = vfile(file);
		const compiler = this.compiler || this.Compiler;
		assertCompiler("stringify", compiler);
		assertNode(tree);
		return compiler(tree, realFile);
	}
	/**
	* Configure the processor to use a plugin, a list of usable values, or a
	* preset.
	*
	* If the processor is already using a plugin, the previous plugin
	* configuration is changed based on the options that are passed in.
	* In other words, the plugin is not added a second time.
	*
	* > **Note**: `use` cannot be called on *frozen* processors.
	* > Call the processor first to create a new unfrozen processor.
	*
	* @example
	*   There are many ways to pass plugins to `.use()`.
	*   This example gives an overview:
	*
	*   ```js
	*   import {unified} from 'unified'
	*
	*   unified()
	*     // Plugin with options:
	*     .use(pluginA, {x: true, y: true})
	*     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
	*     .use(pluginA, {y: false, z: true})
	*     // Plugins:
	*     .use([pluginB, pluginC])
	*     // Two plugins, the second with options:
	*     .use([pluginD, [pluginE, {}]])
	*     // Preset with plugins and settings:
	*     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
	*     // Settings only:
	*     .use({settings: {position: false}})
	*   ```
	*
	* @template {Array<unknown>} [Parameters=[]]
	* @template {Node | string | undefined} [Input=undefined]
	* @template [Output=Input]
	*
	* @overload
	* @param {Preset | null | undefined} [preset]
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*
	* @overload
	* @param {PluggableList} list
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*
	* @overload
	* @param {Plugin<Parameters, Input, Output>} plugin
	* @param {...(Parameters | [boolean])} parameters
	* @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
	*
	* @param {PluggableList | Plugin | Preset | null | undefined} value
	*   Usable value.
	* @param {...unknown} parameters
	*   Parameters, when a plugin is given as a usable value.
	* @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	*   Current processor.
	*/
	use(value, ...parameters) {
		const attachers = this.attachers;
		const namespace = this.namespace;
		assertUnfrozen("use", this.frozen);
		if (value === null || value === void 0) {} else if (typeof value === "function") addPlugin(value, parameters);
		else if (typeof value === "object") if (Array.isArray(value)) addList(value);
		else addPreset(value);
		else throw new TypeError("Expected usable value, not `" + value + "`");
		return this;
		/**
		* @param {Pluggable} value
		* @returns {undefined}
		*/
		function add(value) {
			if (typeof value === "function") addPlugin(value, []);
			else if (typeof value === "object") if (Array.isArray(value)) {
				const [plugin, ...parameters] = value;
				addPlugin(plugin, parameters);
			} else addPreset(value);
			else throw new TypeError("Expected usable value, not `" + value + "`");
		}
		/**
		* @param {Preset} result
		* @returns {undefined}
		*/
		function addPreset(result) {
			if (!("plugins" in result) && !("settings" in result)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			addList(result.plugins);
			if (result.settings) namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
		}
		/**
		* @param {PluggableList | null | undefined} plugins
		* @returns {undefined}
		*/
		function addList(plugins) {
			let index = -1;
			if (plugins === null || plugins === void 0) {} else if (Array.isArray(plugins)) while (++index < plugins.length) {
				const thing = plugins[index];
				add(thing);
			}
			else throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
		}
		/**
		* @param {Plugin} plugin
		* @param {Array<unknown>} parameters
		* @returns {undefined}
		*/
		function addPlugin(plugin, parameters) {
			let index = -1;
			let entryIndex = -1;
			while (++index < attachers.length) if (attachers[index][0] === plugin) {
				entryIndex = index;
				break;
			}
			if (entryIndex === -1) attachers.push([plugin, ...parameters]);
			else if (parameters.length > 0) {
				let [primary, ...rest] = parameters;
				const currentPrimary = attachers[entryIndex][1];
				if (isPlainObject(currentPrimary) && isPlainObject(primary)) primary = (0, import_extend.default)(true, currentPrimary, primary);
				attachers[entryIndex] = [
					plugin,
					primary,
					...rest
				];
			}
		}
	}
}().freeze();
/**
* Assert a parser is available.
*
* @param {string} name
* @param {unknown} value
* @returns {asserts value is Parser}
*/
function assertParser(name, value) {
	if (typeof value !== "function") throw new TypeError("Cannot `" + name + "` without `parser`");
}
/**
* Assert a compiler is available.
*
* @param {string} name
* @param {unknown} value
* @returns {asserts value is Compiler}
*/
function assertCompiler(name, value) {
	if (typeof value !== "function") throw new TypeError("Cannot `" + name + "` without `compiler`");
}
/**
* Assert the processor is not frozen.
*
* @param {string} name
* @param {unknown} frozen
* @returns {asserts frozen is false}
*/
function assertUnfrozen(name, frozen) {
	if (frozen) throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
/**
* Assert `node` is a unist node.
*
* @param {unknown} node
* @returns {asserts node is Node}
*/
function assertNode(node) {
	if (!isPlainObject(node) || typeof node.type !== "string") throw new TypeError("Expected node, got `" + node + "`");
}
/**
* Assert that `complete` is `true`.
*
* @param {string} name
* @param {string} asyncName
* @param {unknown} complete
* @returns {asserts complete is true}
*/
function assertDone(name, asyncName, complete) {
	if (!complete) throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
}
/**
* @param {Compatible | undefined} [value]
* @returns {VFile}
*/
function vfile(value) {
	return looksLikeAVFile(value) ? value : new VFile(value);
}
/**
* @param {Compatible | undefined} [value]
* @returns {value is VFile}
*/
function looksLikeAVFile(value) {
	return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
/**
* @param {unknown} [value]
* @returns {value is Value}
*/
function looksLikeAValue(value) {
	return typeof value === "string" || isUint8Array(value);
}
/**
* Assert `value` is an `Uint8Array`.
*
* @param {unknown} value
*   thing.
* @returns {value is Uint8Array}
*   Whether `value` is an `Uint8Array`.
*/
function isUint8Array(value) {
	return Boolean(value && typeof value === "object" && "byteLength" in value && "byteOffset" in value);
}
//#endregion
//#region node_modules/streamdown/dist/chunk-QFRCQQWI.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var vs = 300;
var Ts = "300px";
var Es = 500;
function xn(e = {}) {
	let { immediate: t = false, debounceDelay: n = vs, rootMargin: o = Ts, idleTimeout: r = Es } = e, [s, a] = (0, import_react.useState)(false), l = (0, import_react.useRef)(null), i = (0, import_react.useRef)(null), c = (0, import_react.useRef)(null), d = (0, import_react.useMemo)(() => (u) => {
		let m = Date.now();
		return window.setTimeout(() => {
			u({
				didTimeout: false,
				timeRemaining: () => Math.max(0, 50 - (Date.now() - m))
			});
		}, 1);
	}, []), p = (0, import_react.useMemo)(() => typeof window != "undefined" && window.requestIdleCallback ? (u, m) => window.requestIdleCallback(u, m) : d, [d]), f = (0, import_react.useMemo)(() => typeof window != "undefined" && window.cancelIdleCallback ? (u) => window.cancelIdleCallback(u) : (u) => {
		clearTimeout(u);
	}, []);
	return (0, import_react.useEffect)(() => {
		if (t) {
			a(true);
			return;
		}
		let u = l.current;
		if (!u) return;
		i.current && (clearTimeout(i.current), i.current = null), c.current && (f(c.current), c.current = null);
		let m = () => {
			i.current && (clearTimeout(i.current), i.current = null), c.current && (f(c.current), c.current = null);
		}, g = (b) => {
			c.current = p((v) => {
				v.timeRemaining() > 0 || v.didTimeout ? (a(true), b.disconnect()) : c.current = p(() => {
					a(true), b.disconnect();
				}, { timeout: r / 2 });
			}, { timeout: r });
		}, y = (b) => {
			m(), i.current = window.setTimeout(() => {
				var w, R;
				let v = b.takeRecords();
				(v.length === 0 || (R = (w = v.at(-1)) == null ? void 0 : w.isIntersecting) != null && R) && g(b);
			}, n);
		}, h = (b, v) => {
			b.isIntersecting ? y(v) : m();
		}, C = new IntersectionObserver((b) => {
			for (let v of b) h(v, C);
		}, {
			rootMargin: o,
			threshold: 0
		});
		return C.observe(u), () => {
			i.current && clearTimeout(i.current), c.current && f(c.current), C.disconnect();
		};
	}, [
		t,
		n,
		o,
		r,
		f,
		p
	]), {
		shouldRender: s,
		containerRef: l
	};
}
var Ps = 320;
var Ms = 4;
var Pn = () => typeof performance_default == "undefined" ? Date.now() : performance_default.now();
function It(e) {
	var s, a;
	let t = (s = e == null ? void 0 : e.now) != null ? s : Pn, n = (a = e == null ? void 0 : e.maxBacklogMs) != null ? a : Ps, o = 0, r = 0;
	return {
		now: t,
		beginPass(l) {
			r = Math.min(Math.max(o, l), l + n);
		},
		mark() {
			return r;
		},
		rewind(l) {
			r = l;
		},
		take(l, i, c) {
			if (l <= 0) return {
				baseDelay: 0,
				step: Math.max(0, i)
			};
			let d = Math.max(0, i), p = d === 0 ? 0 : Math.min(d, Ms), f = Math.max(r, c), u = c + n, m = f + Math.max(0, l - 1) * d, g = d;
			if (m > u && l > 1) if (f < u) {
				let h = u - f;
				g = Math.max(p, h / (l - 1));
			} else g = p;
			let y = Math.max(0, Math.round(f - c));
			return r = f + l * g, {
				baseDelay: y,
				step: g
			};
		},
		commitPass() {
			o = r;
		}
	};
}
var Mn = /\s/;
var Ss = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\u3000-\u303F\uFF00-\uFFEF]/u;
var Nt = /^\s+$/;
var Rs = /* @__PURE__ */ new Set([
	"pre",
	"svg",
	"math",
	"annotation"
]);
var Ls = /* @__PURE__ */ new Set(["img", "hr"]);
var $e = (e) => typeof e == "object" && e !== null && "type" in e && e.type === "element";
var Dt = (e) => e.some((t) => $e(t) && Rs.has(t.tagName));
var Is = (e) => {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if ($e(n) && n.tagName === "li") return n;
	}
};
var Ns = (e, t, n, o) => {
	e.properties ??= {}, e.properties["data-sd-animate-marker"] = true;
	let r = typeof e.properties.style == "string" ? `${e.properties.style};` : "";
	e.properties.style = `${r}--sd-marker-duration:${t}ms;--sd-marker-delay:${Math.round(n)}ms;--sd-marker-easing:${o}`;
};
var Ds = /* @__PURE__ */ new Set([
	"ul",
	"ol",
	"li"
]);
var Sn = (e) => {
	for (let t of e.children) if ($e(t)) {
		if (t.tagName === "input") return t;
		if (Ds.has(t.tagName)) continue;
		let n = Sn(t);
		if (n) return n;
	}
};
var Rn = (e, t, n, o) => {
	e.properties ??= {}, e.properties["data-sd-animate"] = true;
	let r = typeof e.properties.style == "string" ? `${e.properties.style};` : "";
	e.properties.style = `${r}--sd-animation:sd-${t.animation};--sd-duration:${n}ms;--sd-easing:${t.easing};--sd-delay:${Math.round(o)}ms`;
};
var As = (e, t, n, o) => {
	let r = Sn(e);
	r && Rn(r, t, n, o);
};
var Hs = (e, t, n, o, r, s) => {
	if (Dt(t)) return;
	let a = o.prevContentLength, l = r.count;
	r.count += 1;
	let i = a > 0 && l < a, c = i ? 0 : s.baseDelay + r.newIndex++ * s.step;
	Rn(e, n, i ? 0 : n.duration, c);
};
var Os = (e) => {
	var t;
	for (let n = e.length - 1; n >= 0; n -= 1) {
		let o = e[n];
		if ($e(o)) {
			if ((t = o.properties) != null && t["data-sd-animated"]) break;
			o.properties = {
				...o.properties,
				"data-sd-animated": true
			};
		}
	}
};
var Ln = (e) => {
	let t = [], n = "", o = false, r = false;
	for (let s of e) {
		let a = Mn.test(s), l = !a && Ss.test(s);
		if (!a && n !== "" && (l || r)) t.push(n), n = "", o = false;
		else if (a !== o && n) {
			if (a) {
				n += s, o = true;
				continue;
			}
			t.push(n), n = "";
		}
		n += s, o = a, r = l;
	}
	return n && t.push(n), t;
};
var In = (e) => {
	let t = [], n = "";
	for (let o of e) Mn.test(o) ? t.length > 0 && !Nt.test(t.at(-1)) ? t[t.length - 1] += o : n += o : (n && (t.push(n), n = ""), t.push(o));
	return n && (t.length > 0 ? t[t.length - 1] += n : t.push(n)), t;
};
var kn = /^[^\s;:'"\\/](?:[^;:'"\\/\r\n]*[^\s;:'"\\/])?$/;
var Bs = (e, t, n, o) => {
	let r = `sd-${t.animation}`, s = `${n ? 0 : t.duration}ms`, a;
	return t.styleObjects ? (a = {
		"--sd-animation": r,
		"--sd-duration": s,
		"--sd-easing": t.easing
	}, o && (a["--sd-delay"] = `${Math.round(o)}ms`)) : (a = `--sd-animation:${r};--sd-duration:${s};--sd-easing:${t.easing}`, o && (a += `;--sd-delay:${Math.round(o)}ms`)), {
		type: "element",
		tagName: "span",
		properties: {
			"data-sd-animate": true,
			style: a
		},
		children: [{
			type: "text",
			value: e
		}]
	};
};
var vn = (e, t) => !(e > 0 && t < e);
var Lt = (e) => $e(e) && Ls.has(e.tagName);
var Fs = (e, t, n) => {
	let o = 0, r = 0;
	return visitParents(e, (s) => s.type === "text" || Lt(s), (s, a) => {
		if (Dt(a)) return SKIP;
		if (Lt(s)) {
			vn(n, r) && (o += 1), r += 1;
			return;
		}
		let l = s.value;
		if (!l.trim()) {
			r += l.length;
			return;
		}
		let i = t.sep === "char" ? In(l) : Ln(l);
		for (let c of i) {
			let d = r;
			r += c.length, !Nt.test(c) && vn(n, d) && (o += 1);
		}
	}), o;
};
var _s = (e, t, n, o, r, s) => {
	var h;
	let a = t.at(-1);
	if (!(a && "children" in a)) return;
	if (Dt(t)) return SKIP;
	let l = a, i = l.children.indexOf(e);
	if (i === -1) return;
	let c = e.value;
	if (!c.trim()) {
		r.count += c.length;
		return;
	}
	let d = n.sep === "char" ? In(c) : Ln(c), p = o.prevContentLength, f = false, u = Is(t), m = !!(u && !((h = u.properties) != null && h["data-sd-animate-marker"])), g = false, y = d.map((C) => {
		let b = r.count;
		if (r.count += C.length, Nt.test(C)) return {
			type: "text",
			value: C
		};
		let v = p > 0 && b < p, T = v ? 0 : s.baseDelay + r.newIndex++ * s.step;
		if (f = true, u && m && !g) {
			let w = v ? 0 : n.duration;
			Ns(u, w, T, n.easing), As(u, n, w, T), g = true;
		}
		return Bs(C, n, v, T);
	});
	return f && Os(t), l.children.splice(i, 1, ...y), i + y.length;
};
function Nn(e) {
	return An(e, false);
}
var Dn = (e) => An(e, true);
function An(e, t) {
	var l, i, c, d, p;
	let n = (l = e == null ? void 0 : e.animation) != null ? l : "fadeIn", o = (i = e == null ? void 0 : e.easing) != null ? i : "ease", r = {
		animation: n,
		duration: (c = e == null ? void 0 : e.duration) != null ? c : 150,
		easing: o,
		sep: (d = e == null ? void 0 : e.sep) != null ? d : "word",
		stagger: (p = e == null ? void 0 : e.stagger) != null ? p : 40,
		styleObjects: t && kn.test(n) && kn.test(o),
		timeline: e == null ? void 0 : e.timeline
	}, s = {
		committedCharCount: 0,
		prevContentLength: 0,
		lastRenderCharCount: 0,
		pendingMark: null
	};
	return {
		name: "animate",
		type: "animate",
		rehypePlugin: () => (f) => {
			var h;
			let u = {
				count: 0,
				newIndex: 0
			};
			s.prevContentLength = s.committedCharCount;
			let m = r.timeline, g = (h = m == null ? void 0 : m.now()) != null ? h : Pn();
			m && (s.pendingMark === null ? s.pendingMark = m.mark() : m.rewind(s.pendingMark));
			let y = m ? m.take(Fs(f, r, s.prevContentLength), r.stagger, g) : {
				baseDelay: 0,
				step: r.stagger
			};
			visitParents(f, (C) => C.type === "text" || Lt(C), (C, b) => {
				if (C.type === "text") return _s(C, b, r, s, u, y);
				Hs(C, b, r, s, u, y);
			}), s.lastRenderCharCount = u.count, s.prevContentLength = 0;
		},
		setPrevContentLength(f) {
			s.committedCharCount = f, s.prevContentLength = f;
		},
		getLastRenderCharCount() {
			return s.lastRenderCharCount;
		},
		commit() {
			s.committedCharCount = s.lastRenderCharCount, s.pendingMark = null;
		}
	};
}
Nn();
var At = (0, import_react.createContext)(false);
var We = () => (0, import_react.useContext)(At);
var On = extendTailwindMerge({ extend: { conflictingClassGroups: {
	ps: ["pl", "pr"],
	pe: ["pl", "pr"],
	pl: ["ps", "pe"],
	pr: ["ps", "pe"],
	px: ["ps", "pe"],
	ms: ["ml", "mr"],
	me: ["ml", "mr"],
	ml: ["ms", "me"],
	mr: ["ms", "me"],
	mx: ["ms", "me"],
	"border-w-s": ["border-w-l", "border-w-r"],
	"border-w-e": ["border-w-l", "border-w-r"],
	"border-w-l": ["border-w-s", "border-w-e"],
	"border-w-r": ["border-w-s", "border-w-e"],
	"border-w-x": ["border-w-s", "border-w-e"],
	start: ["left", "right"],
	end: ["left", "right"],
	left: ["start", "end"],
	right: ["start", "end"],
	"inset-x": ["start", "end"]
} } });
var Le = (...e) => On(clsx(e));
var Ws = (e, t) => {
	if (!e || !t) return t;
	let n = `${e}:`;
	return t.split(/\s+/).filter(Boolean).map((o) => o.startsWith(n) ? o : `${e}:${o}`).join(" ");
};
var Bn = (e) => e ? (...t) => Ws(e, On(clsx(t))) : Le;
var ae = (e, t, n) => {
	let o = typeof t == "string" && n.startsWith("text/csv") ? "﻿" : "", r = typeof t == "string" ? new Blob([o + t], { type: n }) : t, s = URL.createObjectURL(r), a = document.createElement("a");
	a.href = s, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(s);
};
var st = (0, import_react.createContext)(Le);
var k = () => (0, import_react.useContext)(st);
var Gs = 8;
var lt = (e) => {
	if (!(e === void 0 || e === 0 || e === Number.POSITIVE_INFINITY)) {
		if (typeof e == "number") return Number.isFinite(e) && e > 0 ? `${e}px` : void 0;
		if (!(e === "0" || e === "none" || e === "Infinity")) return e;
	}
};
var ct = (e, t, n) => {
	let o = (0, import_react.useRef)(null), r = (0, import_react.useRef)(true), s = (0, import_react.useRef)(false), a = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		let l = o.current;
		if (!(l && t)) return;
		let i = () => {
			let c = l.scrollHeight - l.scrollTop - l.clientHeight < Gs;
			r.current = c;
		};
		return l.addEventListener("scroll", i, { passive: true }), () => l.removeEventListener("scroll", i);
	}, [t]), (0, import_react.useEffect)(() => {
		e && !s.current && (r.current = true), e || (r.current = true), s.current = e;
	}, [e]), (0, import_react.useEffect)(() => () => {
		a.current !== null && cancelAnimationFrame(a.current);
	}, []), (0, import_react.useEffect)(() => {
		let l = o.current;
		!(l && t && e && r.current) || a.current !== null || (a.current = requestAnimationFrame(() => {
			a.current = null, r.current && l.scrollTo({
				top: l.scrollHeight,
				behavior: "instant"
			});
		}));
	}, [
		e,
		t,
		n
	]), o;
};
var Js = Le("block");
var Us = Le("block", "before:content-[counter(line)]", "before:inline-block", "before:[counter-increment:line]", "before:w-6", "before:mr-4", "before:text-[13px]", "before:text-right", "before:text-muted-foreground/50", "before:font-mono", "before:select-none");
var Ys = (e) => {
	let t = {};
	for (let n of e.split(";")) {
		let o = n.indexOf(":");
		if (o > 0) {
			let r = n.slice(0, o).trim(), s = n.slice(o + 1).trim();
			r && s && (t[r] = s);
		}
	}
	return t;
};
var Fn = (0, import_react.memo)(({ children: e, result: t, language: n, className: o, maxHeight: r, startLine: s, lineNumbers: a = true, ...l }) => {
	let i = k(), { isAnimating: c } = (0, import_react.useContext)(S), d = lt(r), p = ct(c, !!d, t), f = (0, import_react.useMemo)(() => i(Us), [i]), u = (0, import_react.useMemo)(() => i(Js), [i]), m = (0, import_react.useMemo)(() => {
		let g = {};
		return t.bg && (g["--sdm-bg"] = t.bg), t.fg && (g["--sdm-fg"] = t.fg), t.rootStyle && Object.assign(g, Ys(t.rootStyle)), g;
	}, [
		t.bg,
		t.fg,
		t.rootStyle
	]);
	return (0, import_jsx_runtime.jsx)("div", {
		className: i(o, d ? "overflow-y-auto" : null, "overflow-x-auto rounded-md border border-border bg-background p-4 text-sm"),
		"data-language": n,
		"data-streamdown": "code-block-body",
		ref: p,
		style: d ? { maxHeight: d } : void 0,
		...l,
		children: (0, import_jsx_runtime.jsx)("pre", {
			className: i(o, "bg-[var(--sdm-bg,inherit)]", "dark:bg-[var(--shiki-dark-bg,var(--sdm-bg,inherit))]"),
			style: m,
			children: (0, import_jsx_runtime.jsx)("code", {
				className: a ? i("[counter-increment:line_0] [counter-reset:line]") : void 0,
				style: a && s && s > 1 ? { counterReset: `line ${s - 1}` } : void 0,
				children: t.tokens.map((g, y) => (0, import_jsx_runtime.jsx)("span", {
					className: a ? f : u,
					children: g.length === 0 || g.length === 1 && g[0].content === "" ? `
` : g.map((h, C) => {
						let b = {}, v = !!h.bgColor;
						if (h.color && (b["--sdm-c"] = h.color), h.bgColor && (b["--sdm-tbg"] = h.bgColor), h.htmlStyle) for (let [T, w] of Object.entries(h.htmlStyle)) T === "color" ? b["--sdm-c"] = w : T === "background-color" ? (b["--sdm-tbg"] = w, v = true) : b[T] = w;
						return (0, import_jsx_runtime.jsx)("span", {
							className: i("text-[var(--sdm-c,inherit)]", "dark:text-[var(--shiki-dark,var(--sdm-c,inherit))]", v && "bg-[var(--sdm-tbg)]", v && "dark:bg-[var(--shiki-dark-bg,var(--sdm-tbg))]"),
							style: b,
							...h.htmlAttrs,
							children: h.content
						}, C);
					})
				}, y))
			})
		})
	});
});
var Ot = ({ className: e, language: t, style: n, isIncomplete: o, ...r }) => {
	let s = k();
	return (0, import_jsx_runtime.jsx)("div", {
		className: s("relative my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", e),
		"data-incomplete": o || void 0,
		"data-language": t,
		"data-streamdown": "code-block",
		style: {
			contentVisibility: "auto",
			containIntrinsicSize: "auto 200px",
			...n
		},
		...r
	});
};
var Bt = (0, import_react.createContext)({ code: "" });
var dt = () => (0, import_react.useContext)(Bt);
var Ft = ({ language: e }) => {
	let t = k();
	return (0, import_jsx_runtime.jsx)("div", {
		className: t("flex h-8 items-center text-muted-foreground text-xs"),
		"data-language": e,
		"data-streamdown": "code-block-header",
		children: (0, import_jsx_runtime.jsx)("span", {
			className: t("ml-1 font-mono lowercase"),
			children: e
		})
	});
};
var sa = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] === `
`;) t--;
	return e.slice(0, t);
};
var aa = (0, import_react.lazy)(() => import("./_366.mjs").then((e) => ({ default: e.HighlightedCodeBlockBody })));
var _t = ({ code: e, language: t, className: n, children: o, isIncomplete: r = false, startLine: s, lineNumbers: a, ...l }) => {
	let i = k(), { codeBlockMaxHeight: c } = (0, import_react.useContext)(S), d = (0, import_react.useMemo)(() => sa(e), [e]), p = (0, import_react.useMemo)(() => ({
		bg: "transparent",
		fg: "inherit",
		tokens: d.split(`
`).map((f) => [{
			content: f,
			color: "inherit",
			bgColor: "transparent",
			htmlStyle: {},
			offset: 0
		}])
	}), [d]);
	return (0, import_jsx_runtime.jsx)(Bt.Provider, {
		value: { code: e },
		children: (0, import_jsx_runtime.jsxs)(Ot, {
			dir: "ltr",
			isIncomplete: r,
			language: t,
			children: [
				(0, import_jsx_runtime.jsx)(Ft, { language: t }),
				o ? (0, import_jsx_runtime.jsx)("div", {
					className: i("pointer-events-none absolute top-2 right-2 z-10 flex items-center"),
					children: (0, import_jsx_runtime.jsx)("div", {
						className: i("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
						"data-streamdown": "code-block-actions",
						children: o
					})
				}) : null,
				(0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: (0, import_jsx_runtime.jsx)(Fn, {
						className: n,
						language: t,
						lineNumbers: a,
						maxHeight: c,
						result: p,
						startLine: s,
						...l
					}),
					children: (0, import_jsx_runtime.jsx)(aa, {
						className: n,
						code: d,
						isIncomplete: r,
						language: t,
						lineNumbers: a,
						maxHeight: c,
						raw: p,
						startLine: s,
						...l
					})
				})
			]
		})
	});
};
var Vn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var zn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var $n = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Wn = (e) => (0, import_jsx_runtime.jsxs)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: [
		(0, import_jsx_runtime.jsx)("path", {
			d: "M8 0V4",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M8 16V12",
			opacity: "0.5",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M3.29773 1.52783L5.64887 4.7639",
			opacity: "0.9",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M12.7023 1.52783L10.3511 4.7639",
			opacity: "0.1",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M12.7023 14.472L10.3511 11.236",
			opacity: "0.4",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M3.29773 14.472L5.64887 11.236",
			opacity: "0.6",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M15.6085 5.52783L11.8043 6.7639",
			opacity: "0.2",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M0.391602 10.472L4.19583 9.23598",
			opacity: "0.7",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M15.6085 10.4722L11.8043 9.2361",
			opacity: "0.3",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		(0, import_jsx_runtime.jsx)("path", {
			d: "M0.391602 5.52783L4.19583 6.7639",
			opacity: "0.8",
			stroke: "currentColor",
			strokeWidth: "1.5"
		})
	]
});
var qn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Xn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Gn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Zn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Kn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H5.875V4.75V4.125H7.125V4.75V5.875H8.25H8.875V7.125H8.25H7.125V8.25V8.875H5.875V8.25V7.125H4.75H4.125V5.875Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Jn = (e) => (0, import_jsx_runtime.jsx)("svg", {
	"aria-hidden": "true",
	color: "currentColor",
	height: 16,
	strokeLinejoin: "round",
	viewBox: "0 0 16 16",
	width: 16,
	...e,
	children: (0, import_jsx_runtime.jsx)("path", {
		clipRule: "evenodd",
		d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H8.25H8.875V7.125H8.25H4.75H4.125V5.875Z",
		fill: "currentColor",
		fillRule: "evenodd"
	})
});
var Xe = {
	CheckIcon: Vn,
	CopyIcon: zn,
	DownloadIcon: $n,
	ExternalLinkIcon: Zn,
	Loader2Icon: Wn,
	Maximize2Icon: qn,
	RotateCcwIcon: Xn,
	XIcon: Gn,
	ZoomInIcon: Kn,
	ZoomOutIcon: Jn
};
var Yn = (0, import_react.createContext)(Xe);
var ua = (e, t) => {
	if (e === t) return true;
	if (!(e && t)) return e === t;
	let n = Object.keys(e), o = Object.keys(t);
	return n.length !== o.length ? false : n.every((r) => e[r] === t[r]);
};
var jt = ({ icons: e, children: t }) => {
	let n = (0, import_react.useRef)(e), o = (0, import_react.useRef)(e ? {
		...Xe,
		...e
	} : Xe);
	ua(n.current, e) || (n.current = e, o.current = e ? {
		...Xe,
		...e
	} : Xe);
	let r = o.current;
	return (0, import_jsx_runtime.jsx)(Yn.Provider, {
		value: r,
		children: t
	});
};
var O = () => (0, import_react.useContext)(Yn);
var ut = {
	copyCode: "Copy Code",
	downloadFile: "Download file",
	downloadDiagram: "Download diagram",
	downloadDiagramAsSvg: "Download diagram as SVG",
	downloadDiagramAsPng: "Download diagram as PNG",
	downloadDiagramAsMmd: "Download diagram as MMD",
	viewFullscreen: "View fullscreen",
	exitFullscreen: "Exit fullscreen",
	mermaidFormatSvg: "SVG",
	mermaidFormatPng: "PNG",
	mermaidFormatMmd: "MMD",
	zoomIn: "Zoom in",
	zoomOut: "Zoom out",
	resetView: "Reset zoom and pan",
	mermaidAriaLabel: "Mermaid chart",
	errorMermaid: "Failed to render Mermaid chart",
	copyTable: "Copy table",
	copyTableAsMarkdown: "Copy table as Markdown",
	copyTableAsCsv: "Copy table as CSV",
	copyTableAsTsv: "Copy table as TSV",
	downloadTable: "Download table",
	downloadTableAsCsv: "Download table as CSV",
	downloadTableAsMarkdown: "Download table as Markdown",
	tableFormatMarkdown: "Markdown",
	tableFormatCsv: "CSV",
	tableFormatTsv: "TSV",
	imageNotAvailable: "Image not available",
	downloadImage: "Download image",
	openExternalLink: "Open external link?",
	externalLinkWarning: "You're about to visit an external website.",
	close: "Close",
	copyLink: "Copy link",
	copied: "Copied",
	openLink: "Open link"
};
var mt = (0, import_react.createContext)(ut);
var B = () => (0, import_react.useContext)(mt);
var Ie = ({ onCopy: e, onError: t, timeout: n = 2e3, children: o, className: r, code: s, ...a }) => {
	let l = k(), [i, c] = (0, import_react.useState)(false), d = (0, import_react.useRef)(0), { code: p } = dt(), { isAnimating: f } = (0, import_react.useContext)(S), u = B(), m = s != null ? s : p, g = async () => {
		var C;
		if (typeof window == "undefined" || !((C = navigator == null ? void 0 : navigator.clipboard) != null && C.writeText)) {
			t?.(/* @__PURE__ */ new Error("Clipboard API not available"));
			return;
		}
		try {
			i || (await navigator.clipboard.writeText(m), c(!0), e?.(), d.current = window.setTimeout(() => c(!1), n));
		} catch (b) {
			t?.(b);
		}
	};
	(0, import_react.useEffect)(() => () => {
		window.clearTimeout(d.current);
	}, []);
	let y = O(), h = i ? y.CheckIcon : y.CopyIcon;
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("button", {
		"aria-label": u.copyCode,
		className: l("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", r),
		"data-streamdown": "code-block-copy-button",
		disabled: f,
		onClick: g,
		title: u.copyCode,
		type: "button",
		...a,
		children: o != null ? o : (0, import_jsx_runtime.jsx)(h, {
			"aria-hidden": "true",
			size: 14
		})
	}), i && (0, import_jsx_runtime.jsx)("output", {
		"aria-live": "polite",
		className: "sr-only",
		children: u.copied
	})] });
};
var ke = (e, t, n) => {
	if (typeof e == "boolean") return n;
	let o = e[t];
	if (typeof o != "object") return n;
	let r = o.download;
	return typeof r != "object" ? n : r.filename || n;
};
var Ge = (e, t) => {
	if (typeof e == "boolean") return {};
	let n = e[t];
	if (typeof n != "object") return {};
	let o = n.copy;
	return typeof o != "object" || o === null ? {} : {
		onCopy: o.onCopy,
		onError: o.onError
	};
};
var Qn = {
	"1c": "1c",
	"1c-query": "1cq",
	abap: "abap",
	"actionscript-3": "as",
	ada: "ada",
	adoc: "adoc",
	"angular-html": "html",
	"angular-ts": "ts",
	apache: "conf",
	apex: "cls",
	apl: "apl",
	applescript: "applescript",
	ara: "ara",
	asciidoc: "adoc",
	asm: "asm",
	astro: "astro",
	awk: "awk",
	ballerina: "bal",
	bash: "sh",
	bat: "bat",
	batch: "bat",
	be: "be",
	beancount: "beancount",
	berry: "berry",
	bibtex: "bib",
	bicep: "bicep",
	blade: "blade.php",
	bsl: "bsl",
	c: "c",
	"c#": "cs",
	"c++": "cpp",
	cadence: "cdc",
	cairo: "cairo",
	cdc: "cdc",
	clarity: "clar",
	clj: "clj",
	clojure: "clj",
	"closure-templates": "soy",
	cmake: "cmake",
	cmd: "cmd",
	cobol: "cob",
	codeowners: "CODEOWNERS",
	codeql: "ql",
	coffee: "coffee",
	coffeescript: "coffee",
	"common-lisp": "lisp",
	console: "sh",
	coq: "v",
	cpp: "cpp",
	cql: "cql",
	crystal: "cr",
	cs: "cs",
	csharp: "cs",
	css: "css",
	csv: "csv",
	cue: "cue",
	cypher: "cql",
	d: "d",
	dart: "dart",
	dax: "dax",
	desktop: "desktop",
	diff: "diff",
	docker: "dockerfile",
	dockerfile: "dockerfile",
	dotenv: "env",
	"dream-maker": "dm",
	edge: "edge",
	elisp: "el",
	elixir: "ex",
	elm: "elm",
	"emacs-lisp": "el",
	erb: "erb",
	erl: "erl",
	erlang: "erl",
	f: "f",
	"f#": "fs",
	f03: "f03",
	f08: "f08",
	f18: "f18",
	f77: "f77",
	f90: "f90",
	f95: "f95",
	fennel: "fnl",
	fish: "fish",
	fluent: "ftl",
	for: "for",
	"fortran-fixed-form": "f",
	"fortran-free-form": "f90",
	fs: "fs",
	fsharp: "fs",
	fsl: "fsl",
	ftl: "ftl",
	gdresource: "tres",
	gdscript: "gd",
	gdshader: "gdshader",
	genie: "gs",
	gherkin: "feature",
	"git-commit": "gitcommit",
	"git-rebase": "gitrebase",
	gjs: "js",
	gleam: "gleam",
	"glimmer-js": "js",
	"glimmer-ts": "ts",
	glsl: "glsl",
	gnuplot: "plt",
	go: "go",
	gql: "gql",
	graphql: "graphql",
	groovy: "groovy",
	gts: "gts",
	hack: "hack",
	haml: "haml",
	handlebars: "hbs",
	haskell: "hs",
	haxe: "hx",
	hbs: "hbs",
	hcl: "hcl",
	hjson: "hjson",
	hlsl: "hlsl",
	hs: "hs",
	html: "html",
	"html-derivative": "html",
	http: "http",
	hxml: "hxml",
	hy: "hy",
	imba: "imba",
	ini: "ini",
	jade: "jade",
	java: "java",
	javascript: "js",
	jinja: "jinja",
	jison: "jison",
	jl: "jl",
	js: "js",
	json: "json",
	json5: "json5",
	jsonc: "jsonc",
	jsonl: "jsonl",
	jsonnet: "jsonnet",
	jssm: "jssm",
	jsx: "jsx",
	julia: "jl",
	kotlin: "kt",
	kql: "kql",
	kt: "kt",
	kts: "kts",
	kusto: "kql",
	latex: "tex",
	lean: "lean",
	lean4: "lean",
	less: "less",
	liquid: "liquid",
	lisp: "lisp",
	lit: "lit",
	llvm: "ll",
	log: "log",
	logo: "logo",
	lua: "lua",
	luau: "luau",
	make: "mak",
	makefile: "mak",
	markdown: "md",
	marko: "marko",
	matlab: "m",
	md: "md",
	mdc: "mdc",
	mdx: "mdx",
	mediawiki: "wiki",
	mermaid: "mmd",
	mips: "s",
	mipsasm: "s",
	mmd: "mmd",
	mojo: "mojo",
	move: "move",
	nar: "nar",
	narrat: "narrat",
	nextflow: "nf",
	nf: "nf",
	nginx: "conf",
	nim: "nim",
	nix: "nix",
	nu: "nu",
	nushell: "nu",
	objc: "m",
	"objective-c": "m",
	"objective-cpp": "mm",
	ocaml: "ml",
	pascal: "pas",
	perl: "pl",
	perl6: "p6",
	php: "php",
	plsql: "pls",
	po: "po",
	polar: "polar",
	postcss: "pcss",
	pot: "pot",
	potx: "potx",
	powerquery: "pq",
	powershell: "ps1",
	prisma: "prisma",
	prolog: "pl",
	properties: "properties",
	proto: "proto",
	protobuf: "proto",
	ps: "ps",
	ps1: "ps1",
	pug: "pug",
	puppet: "pp",
	purescript: "purs",
	py: "py",
	python: "py",
	ql: "ql",
	qml: "qml",
	qmldir: "qmldir",
	qss: "qss",
	r: "r",
	racket: "rkt",
	raku: "raku",
	razor: "cshtml",
	rb: "rb",
	reg: "reg",
	regex: "regex",
	regexp: "regexp",
	rel: "rel",
	riscv: "s",
	rs: "rs",
	rst: "rst",
	ruby: "rb",
	rust: "rs",
	sas: "sas",
	sass: "sass",
	scala: "scala",
	scheme: "scm",
	scss: "scss",
	sdbl: "sdbl",
	sh: "sh",
	shader: "shader",
	shaderlab: "shader",
	shell: "sh",
	shellscript: "sh",
	shellsession: "sh",
	smalltalk: "st",
	solidity: "sol",
	soy: "soy",
	sparql: "rq",
	spl: "spl",
	splunk: "spl",
	sql: "sql",
	"ssh-config": "config",
	stata: "do",
	styl: "styl",
	stylus: "styl",
	svelte: "svelte",
	swift: "swift",
	"system-verilog": "sv",
	systemd: "service",
	talon: "talon",
	talonscript: "talon",
	tasl: "tasl",
	tcl: "tcl",
	templ: "templ",
	terraform: "tf",
	tex: "tex",
	tf: "tf",
	tfvars: "tfvars",
	toml: "toml",
	ts: "ts",
	"ts-tags": "ts",
	tsp: "tsp",
	tsv: "tsv",
	tsx: "tsx",
	turtle: "ttl",
	twig: "twig",
	typ: "typ",
	typescript: "ts",
	typespec: "tsp",
	typst: "typ",
	v: "v",
	vala: "vala",
	vb: "vb",
	verilog: "v",
	vhdl: "vhdl",
	vim: "vim",
	viml: "vim",
	vimscript: "vim",
	vue: "vue",
	"vue-html": "html",
	"vue-vine": "vine",
	vy: "vy",
	vyper: "vy",
	wasm: "wasm",
	wenyan: "wy",
	wgsl: "wgsl",
	wiki: "wiki",
	wikitext: "wiki",
	wit: "wit",
	wl: "wl",
	wolfram: "wl",
	xml: "xml",
	xsl: "xsl",
	yaml: "yaml",
	yml: "yml",
	zenscript: "zs",
	zig: "zig",
	zsh: "zsh",
	文言: "wy"
};
var zt = ({ onDownload: e, onError: t, language: n, children: o, className: r, code: s, ...a }) => {
	let l = k(), { code: i } = dt(), { isAnimating: c, controls: d } = (0, import_react.useContext)(S), p = B(), f = O(), u = s != null ? s : i, m = n == null ? void 0 : n.toLowerCase(), g = m && Object.hasOwn(Qn, m) ? Qn[m] : "txt", y = `${ke(d, "code", "file")}.${g}`, h = "text/plain", C = () => {
		try {
			ae(y, u, h), e?.();
		} catch (b) {
			t?.(b);
		}
	};
	return (0, import_jsx_runtime.jsx)("button", {
		"aria-label": p.downloadFile,
		className: l("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", r),
		"data-streamdown": "code-block-download-button",
		disabled: c,
		onClick: C,
		title: p.downloadFile,
		type: "button",
		...a,
		children: o != null ? o : (0, import_jsx_runtime.jsx)(f.DownloadIcon, { size: 14 })
	});
};
var pt = () => {
	let { Loader2Icon: e } = O(), t = k();
	return (0, import_jsx_runtime.jsxs)("div", {
		className: t("w-full divide-y divide-border overflow-hidden rounded-xl border border-border"),
		children: [(0, import_jsx_runtime.jsx)("div", { className: t("h-[46px] w-full bg-muted/80") }), (0, import_jsx_runtime.jsx)("div", {
			className: t("flex w-full items-center justify-center p-4"),
			children: (0, import_jsx_runtime.jsx)(e, { className: t("size-4 animate-spin") })
		})]
	});
};
var Pa = /\.[^/.]+$/;
var oo = ({ node: e, className: t, src: n, alt: o, onLoad: r, onError: s, showControls: a = true, showDownloadControl: l = true, ...i }) => {
	let { DownloadIcon: c } = O(), d = k(), p = (0, import_react.useRef)(null), [f, u] = (0, import_react.useState)(false), [m, g] = (0, import_react.useState)(false), y = B(), h = i.width != null || i.height != null, b = (f || h) && !m && a && l, v = m && !h;
	(0, import_react.useEffect)(() => {
		let M = p.current;
		if (M != null && M.complete) {
			let N = M.naturalWidth > 0;
			u(N), g(!N);
		}
	}, []);
	let T = (0, import_react.useCallback)((M) => {
		u(true), g(false), r?.(M);
	}, [r]), w = (0, import_react.useCallback)((M) => {
		u(false), g(true), s?.(M);
	}, [s]), R = async () => {
		if (n) try {
			let N = await (await fetch(n)).blob(), V = new URL(n, window.location.origin).pathname.split("/").pop() || "", F = V.split(".").pop(), Q = V.includes(".") && F !== void 0 && F.length <= 4, _ = "";
			if (Q) _ = V;
			else {
				let X = N.type, W = "png";
				X.includes("jpeg") || X.includes("jpg") ? W = "jpg" : X.includes("png") ? W = "png" : X.includes("svg") ? W = "svg" : X.includes("gif") ? W = "gif" : X.includes("webp") && (W = "webp"), _ = `${(o || V || "image").replace(Pa, "")}.${W}`;
			}
			ae(_, N, N.type);
		} catch (M) {
			window.open(n, "_blank");
		}
	};
	return n ? n === "streamdown:incomplete-image" ? (0, import_jsx_runtime.jsx)("div", {
		className: d("group relative my-4 inline-block"),
		"data-incomplete": "true",
		"data-streamdown": "image-wrapper",
		children: (0, import_jsx_runtime.jsx)("div", {
			className: d("h-24 w-48 animate-pulse rounded-lg bg-muted"),
			"data-streamdown": "image-placeholder"
		})
	}) : (0, import_jsx_runtime.jsxs)("div", {
		className: d("group relative my-4 inline-block"),
		"data-streamdown": "image-wrapper",
		children: [
			(0, import_jsx_runtime.jsx)("img", {
				alt: o,
				className: d("max-w-full rounded-lg", v && "hidden", t),
				"data-streamdown": "image",
				onError: w,
				onLoad: T,
				ref: p,
				src: n,
				...i
			}),
			v && (0, import_jsx_runtime.jsx)("span", {
				className: d("text-muted-foreground text-xs italic"),
				"data-streamdown": "image-fallback",
				children: y.imageNotAvailable
			}),
			a && (0, import_jsx_runtime.jsx)("div", {
				className: d("pointer-events-none absolute inset-0 hidden rounded-lg bg-black/10 group-hover:block"),
				"data-streamdown": "image-overlay"
			}),
			b && (0, import_jsx_runtime.jsx)("button", {
				className: d("absolute end-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-background/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background", "opacity-0 group-hover:opacity-100"),
				onClick: R,
				title: y.downloadImage,
				type: "button",
				children: (0, import_jsx_runtime.jsx)(c, { size: 14 })
			})
		]
	}) : null;
};
var Ne = (e) => {
	let t = typeof e == "function" ? e() : e;
	return t != null ? t : document.body;
};
var Ze = 0;
var De = () => {
	Ze += 1, Ze === 1 && (document.body.style.overflow = "hidden");
};
var Ae = () => {
	Ze = Math.max(0, Ze - 1), Ze === 0 && (document.body.style.overflow = "");
};
var Ra = "a[href], button, input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
var La = (e) => Array.from(e.querySelectorAll(Ra)).filter((t) => t.tabIndex >= 0 && !t.hasAttribute("disabled"));
var so = (e, t) => t instanceof Node && e.contains(t);
var Ia = (e, t) => {
	let n = La(e), o = n[0], r = n.at(-1);
	if (!(o && r)) return e;
	let s = document.activeElement, a = so(e, s);
	return t ? s === o || !a ? r : null : s === r || !a ? o : null;
};
var He = (e, t) => {
	let n = (0, import_react.useRef)(null), o = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		var a, l;
		if (!e) return;
		let r = (a = t == null ? void 0 : t.current) != null ? a : document.activeElement instanceof HTMLElement ? document.activeElement : null;
		(l = o.current) == null || l.focus();
		let s = (i) => {
			let c = n.current;
			if (i.key !== "Tab" || !c || i.target !== document.body && !so(c, i.target)) return;
			let d = Ia(c, i.shiftKey);
			d && (i.preventDefault(), d.focus());
		};
		return document.addEventListener("keydown", s, true), () => {
			document.removeEventListener("keydown", s, true), r != null && r.isConnected && r.focus();
		};
	}, [e, t]), {
		dialogRef: n,
		initialFocusRef: o
	};
};
var lo = ({ url: e, isOpen: t, onClose: n, onConfirm: o }) => {
	let { CheckIcon: r, CopyIcon: s, ExternalLinkIcon: a, XIcon: l } = O(), i = k(), [c, d] = (0, import_react.useState)(false), p = B(), { portal: f } = (0, import_react.useContext)(S), { dialogRef: u, initialFocusRef: m } = He(t), g = (0, import_react.useCallback)(async () => {
		try {
			await navigator.clipboard.writeText(e), d(!0), setTimeout(() => d(!1), 2e3);
		} catch (C) {}
	}, [e]), y = (0, import_react.useCallback)(() => {
		o(), n();
	}, [o, n]);
	if ((0, import_react.useEffect)(() => {
		if (t) {
			De();
			let C = (b) => {
				b.key === "Escape" && n();
			};
			return document.addEventListener("keydown", C), () => {
				document.removeEventListener("keydown", C), Ae();
			};
		}
	}, [t, n]), !t || typeof document == "undefined") return null;
	let h = (0, import_jsx_runtime.jsx)("div", {
		className: i("fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm"),
		"data-streamdown": "link-safety-modal",
		onClick: n,
		onKeyDown: (C) => {
			C.key === "Escape" && (C.stopPropagation(), n());
		},
		ref: u,
		role: "button",
		tabIndex: 0,
		children: (0, import_jsx_runtime.jsxs)("div", {
			className: i("relative mx-4 flex w-full max-w-md flex-col gap-4 rounded-xl border bg-background p-6 shadow-lg"),
			onClick: (C) => C.stopPropagation(),
			onKeyDown: (C) => {
				C.key !== "Escape" && C.stopPropagation();
			},
			role: "presentation",
			children: [
				(0, import_jsx_runtime.jsx)("button", {
					className: i("absolute end-4 top-4 rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
					onClick: n,
					ref: m,
					title: p.close,
					type: "button",
					children: (0, import_jsx_runtime.jsx)(l, { size: 16 })
				}),
				(0, import_jsx_runtime.jsxs)("div", {
					className: i("flex flex-col gap-2"),
					children: [(0, import_jsx_runtime.jsxs)("div", {
						className: i("flex items-center gap-2 font-semibold text-lg"),
						children: [(0, import_jsx_runtime.jsx)(a, { size: 20 }), (0, import_jsx_runtime.jsx)("span", { children: p.openExternalLink })]
					}), (0, import_jsx_runtime.jsx)("p", {
						className: i("text-muted-foreground text-sm"),
						children: p.externalLinkWarning
					})]
				}),
				(0, import_jsx_runtime.jsx)("div", {
					className: i("break-all rounded-md bg-muted p-3 font-mono text-sm", e.length > 100 && "max-h-32 overflow-y-auto"),
					children: e
				}),
				(0, import_jsx_runtime.jsxs)("div", {
					className: i("flex gap-2"),
					children: [(0, import_jsx_runtime.jsx)("button", {
						className: i("flex flex-1 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 font-medium text-sm transition-all hover:bg-muted"),
						onClick: g,
						type: "button",
						children: c ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(r, { size: 14 }), (0, import_jsx_runtime.jsx)("span", { children: p.copied })] }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(s, { size: 14 }), (0, import_jsx_runtime.jsx)("span", { children: p.copyLink })] })
					}), (0, import_jsx_runtime.jsxs)("button", {
						className: i("flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-all hover:bg-primary/90"),
						onClick: y,
						type: "button",
						children: [(0, import_jsx_runtime.jsx)(a, { size: 14 }), (0, import_jsx_runtime.jsx)("span", { children: p.openLink })]
					})]
				})
			]
		})
	});
	return (0, import_react_dom.createPortal)(h, Ne(f));
};
var ft = (0, import_react.createContext)(null);
var Wt = () => (0, import_react.useContext)(ft);
var ru = () => {
	var t;
	let e = Wt();
	return (t = e == null ? void 0 : e.code) != null ? t : null;
};
var Oe = () => {
	var t;
	let e = Wt();
	return (t = e == null ? void 0 : e.mermaid) != null ? t : null;
};
var co = (e) => {
	var n;
	let t = Wt();
	return t != null && t.renderers && e && (n = t.renderers.find((o) => Array.isArray(o.language) ? o.language.includes(e) : o.language === e)) != null ? n : null;
};
var po = /<svg\b[^>]*>/i;
var Fa = /\bviewBox=(['"])(.*?)\1/i;
var _a = /[\s,]+/;
var ja = /\swidth=(['"]).*?\1/gi;
var Va = /\sheight=(['"]).*?\1/gi;
var uo = /\sstyle=(['"])(.*?)\1/i;
var za = /^width\s*:/i;
var $a = /^height\s*:/i;
var Wa = /^max-width\s*:/i;
var mo = /^<svg/i;
var qt = (e) => {
	let t = e.match(po);
	if (!t) return null;
	let o = t[0].match(Fa), r = o == null ? void 0 : o[2];
	if (!r) return null;
	let s = r.trim().split(_a).map((i) => Number.parseFloat(i));
	if (s.length < 4 || s.slice(0, 4).some(Number.isNaN)) return null;
	let a = s[2], l = s[3];
	return a > 0 && l > 0 ? {
		height: l,
		width: a
	} : null;
};
var fo = (e) => {
	let t = e.match(po);
	if (!t) return e;
	try {
		let n = t[0], o = qt(e);
		if (!o) return e;
		let { width: r, height: s } = o, a = n.replace(ja, "").replace(Va, ""), l = a.match(uo), i = `width:${r}px;height:${s}px;max-width:none;`;
		if (l) {
			let c = l[1], p = l[2].split(";").map((u) => u.trim()).filter(Boolean).filter((u) => !(za.test(u) || $a.test(u) || Wa.test(u))).join(";"), f = `${i}${p ? `${p};` : ""}`;
			a = a.replace(uo, ` style=${c}${f}${c}`);
		} else a = a.replace(mo, `<svg style="${i}"`);
		return a = a.replace(mo, `<svg width="${r}" height="${s}"`), e.replace(n, a);
	} catch (n) {
		return e;
	}
};
var go = (e) => {
	if (typeof DOMParser == "undefined" || typeof XMLSerializer == "undefined") return e;
	let n = new DOMParser().parseFromString(e, "text/html").querySelector("svg");
	return n ? new XMLSerializer().serializeToString(n) : e;
};
var bo = (e, t) => {
	var o;
	let n = (o = void 0) != null ? o : 5;
	return new Promise((r, s) => {
		let a = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e))), l = new Image();
		l.crossOrigin = "anonymous", l.onload = () => {
			let i = document.createElement("canvas"), c = l.width * n, d = l.height * n;
			i.width = c, i.height = d;
			let p = i.getContext("2d");
			if (!p) {
				s(/* @__PURE__ */ new Error("Failed to create 2D canvas context for PNG export"));
				return;
			}
			p.drawImage(l, 0, 0, c, d), i.toBlob((f) => {
				if (!f) {
					s(/* @__PURE__ */ new Error("Failed to create PNG blob"));
					return;
				}
				r(f);
			}, "image/png");
		}, l.onerror = () => s(/* @__PURE__ */ new Error("Failed to load SVG image")), l.src = a;
	});
};
var gt = ({ chart: e, children: t, className: n, onDownload: o, config: r, onError: s }) => {
	let a = k(), [l, i] = (0, import_react.useState)(false), c = (0, import_react.useRef)(null), { isAnimating: d, controls: p } = (0, import_react.useContext)(S), f = O(), u = Oe(), m = B(), g = ke(p, "mermaid", "diagram"), y = async (h) => {
		try {
			if (h === "mmd") {
				ae(`${g}.mmd`, e, "text/plain"), i(!1), o?.(h);
				return;
			}
			if (!u) {
				s?.(/* @__PURE__ */ new Error("Mermaid plugin not available"));
				return;
			}
			let C = u.getMermaid(r), b = e.split("").reduce((R, j) => (R << 5) - R + j.charCodeAt(0) | 0, 0), v = `mermaid-${Math.abs(b)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: T } = await C.render(v, e);
			if (!T) {
				s?.(/* @__PURE__ */ new Error("SVG not found. Please wait for the diagram to render."));
				return;
			}
			let w = go(T);
			if (h === "svg") {
				ae(`${g}.svg`, w, "image/svg+xml"), i(!1), o?.(h);
				return;
			}
			if (h === "png") {
				let R = await bo(w);
				ae(`${g}.png`, R, "image/png"), o?.(h), i(!1);
				return;
			}
		} catch (C) {
			s?.(C);
		}
	};
	return (0, import_react.useEffect)(() => {
		let h = (C) => {
			let b = C.composedPath();
			c.current && !b.includes(c.current) && i(false);
		};
		return document.addEventListener("mousedown", h), () => {
			document.removeEventListener("mousedown", h);
		};
	}, []), (0, import_jsx_runtime.jsxs)("div", {
		className: a("relative"),
		ref: c,
		children: [(0, import_jsx_runtime.jsx)("button", {
			"aria-label": m.downloadDiagram,
			className: a("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", n),
			disabled: d,
			onClick: () => i(!l),
			title: m.downloadDiagram,
			type: "button",
			children: t != null ? t : (0, import_jsx_runtime.jsx)(f.DownloadIcon, {
				"aria-hidden": "true",
				size: 14
			})
		}), l ? (0, import_jsx_runtime.jsxs)("div", {
			className: a("absolute end-0 top-full z-10 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": m.downloadDiagramAsSvg,
					className: a("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("svg"),
					title: m.downloadDiagramAsSvg,
					type: "button",
					children: m.mermaidFormatSvg
				}),
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": m.downloadDiagramAsPng,
					className: a("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("png"),
					title: m.downloadDiagramAsPng,
					type: "button",
					children: m.mermaidFormatPng
				}),
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": m.downloadDiagramAsMmd,
					className: a("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("mmd"),
					title: m.downloadDiagramAsMmd,
					type: "button",
					children: m.mermaidFormatMmd
				})
			]
		}) : null]
	});
};
var wo = ({ chart: e, config: t, onFullscreen: n, onExit: o, className: r, ...s }) => {
	let { Maximize2Icon: a, XIcon: l } = O(), i = k(), [c, d] = (0, import_react.useState)(false), { isAnimating: p, controls: f, portal: u } = (0, import_react.useContext)(S), m = B(), g = (0, import_react.useRef)(null), { dialogRef: y, initialFocusRef: h } = He(c, g), C = (() => {
		if (typeof f == "boolean") return f;
		let w = f.mermaid;
		return w === false ? false : w === true || w === void 0 ? true : w.panZoom !== false;
	})(), b = (() => {
		if (typeof f == "boolean") return f;
		let w = f.mermaid;
		return w === false ? false : w === true || w === void 0 ? true : w.download !== false;
	})(), v = (() => {
		if (typeof f == "boolean") return f;
		let w = f.mermaid;
		return w === false ? false : w === true || w === void 0 ? true : w.copy !== false;
	})(), T = () => {
		d(!c);
	};
	return (0, import_react.useEffect)(() => {
		if (c) {
			De();
			let w = (R) => {
				R.key === "Escape" && d(false);
			};
			return document.addEventListener("keydown", w), () => {
				document.removeEventListener("keydown", w), Ae();
			};
		}
	}, [c]), (0, import_react.useEffect)(() => {
		c ? n?.() : o && o();
	}, [
		c,
		n,
		o
	]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("button", {
		className: i("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", r),
		disabled: p,
		onClick: T,
		ref: g,
		title: m.viewFullscreen,
		type: "button",
		...s,
		"aria-label": m.viewFullscreen,
		children: (0, import_jsx_runtime.jsx)(a, {
			"aria-hidden": "true",
			size: 14
		})
	}), c ? (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsxs)("div", {
		"aria-label": m.viewFullscreen,
		"aria-modal": "true",
		className: i("fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"),
		"data-streamdown": "mermaid-fullscreen",
		onClick: T,
		onKeyDown: (w) => {
			w.key === "Escape" && (w.stopPropagation(), T());
		},
		ref: y,
		role: "dialog",
		children: [(0, import_jsx_runtime.jsxs)("div", {
			className: i("absolute end-4 top-4 z-10 flex items-center gap-1"),
			onClick: (w) => w.stopPropagation(),
			onKeyDown: (w) => {
				w.key !== "Escape" && w.stopPropagation();
			},
			role: "presentation",
			children: [
				b ? (0, import_jsx_runtime.jsx)(gt, {
					chart: e,
					config: t
				}) : null,
				v ? (0, import_jsx_runtime.jsx)(Ie, {
					code: e,
					...Ge(f, "mermaid")
				}) : null,
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": m.exitFullscreen,
					className: i("rounded-md p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
					onClick: T,
					ref: h,
					title: m.exitFullscreen,
					type: "button",
					children: (0, import_jsx_runtime.jsx)(l, {
						"aria-hidden": "true",
						size: 20
					})
				})
			]
		}), (0, import_jsx_runtime.jsx)("div", {
			className: i("flex size-full items-center justify-center p-4"),
			onClick: (w) => w.stopPropagation(),
			onKeyDown: (w) => {
				w.key !== "Escape" && w.stopPropagation();
			},
			role: "presentation",
			children: (0, import_jsx_runtime.jsx)(Co, {
				chart: e,
				className: i("size-full [&_svg]:h-auto [&_svg]:w-auto"),
				config: t,
				fullscreen: true,
				showControls: C
			})
		})]
	}), Ne(u)) : null] });
};
var ti = {
	fontFamily: "ui-monospace, \"SF Mono\", \"Cascadia Mono\", \"DejaVu Sans Mono\", \"Liberation Mono\", Menlo, Consolas, monospace",
	fontFeatureSettings: "\"liga\" 0, \"calt\" 0",
	fontVariantLigatures: "none",
	overflowX: "auto",
	tabSize: 2,
	whiteSpace: "pre"
};
var xo = ({ code: e, isIncomplete: t, language: n }) => {
	let o = k();
	return (0, import_jsx_runtime.jsx)("pre", {
		className: o("my-4 overflow-x-auto rounded-xl border bg-sidebar p-4 text-sm"),
		"data-incomplete": t,
		"data-language": n,
		"data-streamdown": "raw-code-block",
		style: ti,
		children: e
	});
};
function Gt(e) {
	var n;
	if (e.nodeType === Node.TEXT_NODE) return (n = e.textContent) != null ? n : "";
	if (e.nodeType !== Node.ELEMENT_NODE) return "";
	let t = e;
	return t.tagName === "BR" ? `
` : Array.from(t.childNodes).map(Gt).join("");
}
var Be = (e) => {
	let t = [], n = [], o = e.querySelectorAll("thead th");
	for (let s of o) t.push(Gt(s).trim());
	let r = e.querySelectorAll("tbody tr");
	for (let s of r) {
		let a = [], l = s.querySelectorAll("td");
		for (let i of l) a.push(Gt(i).trim());
		n.push(a);
	}
	return {
		headers: t,
		rows: n
	};
};
var Je = (e) => {
	var n;
	if (typeof e != "object") return ",";
	let t = e.table;
	return typeof t != "object" ? "," : (n = t.csvSeparator) != null ? n : ",";
};
var Ee = (e, t = ",") => {
	let n;
	t === "auto" ? Intl.NumberFormat().format(1.1).includes(",") ? n = ";" : n = "," : n = t;
	let { headers: o, rows: r } = e, s = (c) => {
		let d = false;
		for (let p of c) if (p === n || p === "\"" || p === `
` || p === "\r") {
			d = true;
			break;
		}
		return d ? `"${c.replace(/"/g, "\"\"")}"` : c;
	}, a = o.length > 0 ? r.length + 1 : r.length, l = new Array(a), i = 0;
	o.length > 0 && (l[i] = o.map(s).join(n), i += 1);
	for (let c of r) l[i] = c.map(s).join(n), i += 1;
	return l.join(`
`);
};
var Zt = (e) => {
	let { headers: t, rows: n } = e, o = (l) => {
		let i = false;
		for (let d of l) if (d === "	" || d === `
` || d === "\r") {
			i = true;
			break;
		}
		if (!i) return l;
		let c = [];
		for (let d of l) d === "	" ? c.push("\\t") : d === `
` ? c.push("\\n") : d === "\r" ? c.push("\\r") : c.push(d);
		return c.join("");
	}, r = t.length > 0 ? n.length + 1 : n.length, s = new Array(r), a = 0;
	t.length > 0 && (s[a] = t.map(o).join("	"), a += 1);
	for (let l of n) s[a] = l.map(o).join("	"), a += 1;
	return s.join(`
`);
};
var ko = /* @__PURE__ */ new Set([
	"\\",
	"|",
	"`",
	"*",
	"_",
	"~",
	"[",
	"]",
	"$",
	"@"
]);
var oi = (e, t) => e[t] === ":" && e[t + 1] === "/" && e[t + 2] === "/" || e[t] === "." && e.slice(Math.max(0, t - 3), t).toLowerCase() === "www";
var bt = (e) => {
	let t = false;
	for (let o of e) if (ko.has(o) || o === `
` || o === "&" || o === "<" || o === ">") {
		t = true;
		break;
	}
	if (!t) return e;
	let n = [];
	for (let o = 0; o < e.length; o += 1) {
		let r = e[o];
		ko.has(r) || oi(e, o) ? n.push(`\\${r}`) : r === `
` ? n.push("<br>") : r === "&" ? n.push("&amp;") : r === "<" ? n.push("&lt;") : r === ">" ? n.push("&gt;") : n.push(r);
	}
	return n.join("");
};
var Fe = (e) => {
	let { headers: t, rows: n } = e;
	if (t.length === 0) return "";
	let o = new Array(n.length + 2), r = 0, s = t.map((l) => bt(l));
	o[r] = `| ${s.join(" | ")} |`, r += 1;
	let a = new Array(t.length);
	for (let l = 0; l < t.length; l += 1) a[l] = "---";
	o[r] = `| ${a.join(" | ")} |`, r += 1;
	for (let l of n) if (l.length < t.length) {
		let i = new Array(t.length);
		for (let c = 0; c < t.length; c += 1) i[c] = c < l.length ? bt(l[c]) : "";
		o[r] = `| ${i.join(" | ")} |`, r += 1;
	} else {
		let i = l.map((c) => bt(c));
		o[r] = `| ${i.join(" | ")} |`, r += 1;
	}
	return o.join(`
`);
};
var Ye = ({ children: e, className: t, onCopy: n, onError: o, timeout: r = 2e3 }) => {
	let s = k(), [a, l] = (0, import_react.useState)(false), [i, c] = (0, import_react.useState)(false), d = (0, import_react.useRef)(null), p = (0, import_react.useRef)(0), { isAnimating: f, controls: u } = (0, import_react.useContext)(S), m = B(), g = Je(u), y = async (b) => {
		var v, T;
		if (typeof window == "undefined" || !((v = navigator == null ? void 0 : navigator.clipboard) != null && v.write)) {
			o?.(/* @__PURE__ */ new Error("Clipboard API not available"));
			return;
		}
		try {
			let w = (T = d.current) == null ? void 0 : T.closest("[data-streamdown=\"table-wrapper\"]"), R = w == null ? void 0 : w.querySelector("table");
			if (!R) {
				o?.(/* @__PURE__ */ new Error("Table not found"));
				return;
			}
			let j = Be(R), M = "";
			b === "csv" ? M = Ee(j, g) : b === "tsv" ? M = Zt(j) : M = Fe(j);
			let N = new ClipboardItem({
				"text/plain": new Blob([M], { type: "text/plain" }),
				"text/html": new Blob([R.outerHTML], { type: "text/html" })
			});
			await navigator.clipboard.write([N]), c(!0), l(!1), n?.(b), p.current = window.setTimeout(() => c(!1), r);
		} catch (w) {
			o?.(w);
		}
	};
	(0, import_react.useEffect)(() => {
		let b = (v) => {
			let T = v.composedPath();
			d.current && !T.includes(d.current) && l(false);
		};
		return document.addEventListener("mousedown", b), () => {
			document.removeEventListener("mousedown", b), window.clearTimeout(p.current);
		};
	}, []);
	let h = O(), C = i ? h.CheckIcon : h.CopyIcon;
	return (0, import_jsx_runtime.jsxs)("div", {
		className: s("relative"),
		ref: d,
		children: [(0, import_jsx_runtime.jsx)("button", {
			className: s("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
			disabled: f,
			onClick: () => l(!a),
			title: m.copyTable,
			type: "button",
			children: e != null ? e : (0, import_jsx_runtime.jsx)(C, {
				height: 14,
				width: 14
			})
		}), a ? (0, import_jsx_runtime.jsxs)("div", {
			className: s("absolute end-0 top-full z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [
				(0, import_jsx_runtime.jsx)("button", {
					className: s("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("md"),
					title: m.copyTableAsMarkdown,
					type: "button",
					children: m.tableFormatMarkdown
				}),
				(0, import_jsx_runtime.jsx)("button", {
					className: s("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("csv"),
					title: m.copyTableAsCsv,
					type: "button",
					children: m.tableFormatCsv
				}),
				(0, import_jsx_runtime.jsx)("button", {
					className: s("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
					onClick: () => y("tsv"),
					title: m.copyTableAsTsv,
					type: "button",
					children: m.tableFormatTsv
				})
			]
		}) : null]
	});
};
var Qe = ({ children: e, className: t, onDownload: n, onError: o }) => {
	let r = k(), [s, a] = (0, import_react.useState)(false), l = (0, import_react.useRef)(null), { isAnimating: i, controls: c } = (0, import_react.useContext)(S), d = B(), p = O(), f = Je(c), u = (m) => {
		var g;
		try {
			let y = (g = l.current) == null ? void 0 : g.closest("[data-streamdown=\"table-wrapper\"]"), h = y == null ? void 0 : y.querySelector("table");
			if (!h) {
				o?.(/* @__PURE__ */ new Error("Table not found"));
				return;
			}
			let C = Be(h), b = m === "csv" ? Ee(C, f) : Fe(C), v = m === "csv" ? "csv" : "md";
			ae(`${ke(c, "table", "table")}.${v}`, b, m === "csv" ? "text/csv" : "text/markdown"), a(!1), n?.(m);
		} catch (y) {
			o?.(y);
		}
	};
	return (0, import_react.useEffect)(() => {
		let m = (g) => {
			let y = g.composedPath();
			l.current && !y.includes(l.current) && a(false);
		};
		return document.addEventListener("mousedown", m), () => {
			document.removeEventListener("mousedown", m);
		};
	}, []), (0, import_jsx_runtime.jsxs)("div", {
		className: r("relative"),
		ref: l,
		children: [(0, import_jsx_runtime.jsx)("button", {
			className: r("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
			disabled: i,
			onClick: () => a(!s),
			title: d.downloadTable,
			type: "button",
			children: e != null ? e : (0, import_jsx_runtime.jsx)(p.DownloadIcon, { size: 14 })
		}), s ? (0, import_jsx_runtime.jsxs)("div", {
			className: r("absolute end-0 top-full z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [(0, import_jsx_runtime.jsx)("button", {
				className: r("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
				onClick: () => u("csv"),
				title: d.downloadTableAsCsv,
				type: "button",
				children: d.tableFormatCsv
			}), (0, import_jsx_runtime.jsx)("button", {
				className: r("w-full px-3 py-2 text-start text-sm transition-colors hover:bg-muted/40"),
				onClick: () => u("markdown"),
				title: d.downloadTableAsMarkdown,
				type: "button",
				children: d.tableFormatMarkdown
			})]
		}) : null]
	});
};
var So = ({ children: e, className: t, showCopy: n = true, showDownload: o = true }) => {
	let { Maximize2Icon: r, XIcon: s } = O(), a = k(), [l, i] = (0, import_react.useState)(false), { isAnimating: c, portal: d } = (0, import_react.useContext)(S), p = B(), f = (0, import_react.useRef)(null), { dialogRef: u, initialFocusRef: m } = He(l, f), g = () => {
		i(true);
	}, y = () => {
		i(false);
	};
	return (0, import_react.useEffect)(() => {
		if (l) {
			De();
			let h = (C) => {
				C.key === "Escape" && i(false);
			};
			return document.addEventListener("keydown", h), () => {
				document.removeEventListener("keydown", h), Ae();
			};
		}
	}, [l]), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("button", {
		className: a("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
		disabled: c,
		onClick: g,
		ref: f,
		title: p.viewFullscreen,
		type: "button",
		children: (0, import_jsx_runtime.jsx)(r, { size: 14 })
	}), l ? (0, import_react_dom.createPortal)((0, import_jsx_runtime.jsx)("div", {
		"aria-label": p.viewFullscreen,
		"aria-modal": "true",
		className: a("fixed inset-0 z-50 flex flex-col bg-background"),
		"data-streamdown": "table-fullscreen",
		onClick: y,
		onKeyDown: (h) => {
			h.key === "Escape" && (h.stopPropagation(), y());
		},
		ref: u,
		role: "dialog",
		children: (0, import_jsx_runtime.jsxs)("div", {
			className: a("flex h-full flex-col"),
			"data-streamdown": "table-wrapper",
			onClick: (h) => h.stopPropagation(),
			onKeyDown: (h) => {
				h.key !== "Escape" && h.stopPropagation();
			},
			role: "presentation",
			children: [(0, import_jsx_runtime.jsxs)("div", {
				className: a("flex items-center justify-end gap-1 p-4"),
				children: [
					n ? (0, import_jsx_runtime.jsx)(Ye, {}) : null,
					o ? (0, import_jsx_runtime.jsx)(Qe, {}) : null,
					(0, import_jsx_runtime.jsx)("button", {
						className: a("rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
						onClick: y,
						ref: m,
						title: p.exitFullscreen,
						type: "button",
						children: (0, import_jsx_runtime.jsx)(s, { size: 20 })
					})
				]
			}), (0, import_jsx_runtime.jsx)("div", {
				className: a("flex-1 overflow-auto p-4 pt-0 [&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10"),
				children: (0, import_jsx_runtime.jsx)("table", {
					className: a("w-full border-collapse border border-border"),
					"data-streamdown": "table",
					children: e
				})
			})]
		})
	}), Ne(d)) : null] });
};
var Lo = ({ children: e, className: t, maxHeight: n, showControls: o, showCopy: r = true, showDownload: s = true, showFullscreen: a = true, ...l }) => {
	let i = k(), { isAnimating: c } = (0, import_react.useContext)(S), d = lt(n), p = ct(c, !!d, e), f = o && r, u = o && s, m = o && a, g = f || u || m;
	return (0, import_jsx_runtime.jsxs)("div", {
		className: i("my-4 flex flex-col gap-2 rounded-lg border border-border bg-sidebar p-2"),
		"data-streamdown": "table-wrapper",
		children: [g ? (0, import_jsx_runtime.jsxs)("div", {
			className: i("flex items-center justify-end gap-1"),
			children: [
				f ? (0, import_jsx_runtime.jsx)(Ye, {}) : null,
				u ? (0, import_jsx_runtime.jsx)(Qe, {}) : null,
				m ? (0, import_jsx_runtime.jsx)(So, {
					showCopy: f,
					showDownload: u,
					children: e
				}) : null
			]
		}) : null, (0, import_jsx_runtime.jsx)("div", {
			className: i("border-collapse overflow-x-auto overflow-y-auto rounded-md border border-border bg-background"),
			ref: p,
			style: d ? { maxHeight: d } : void 0,
			children: (0, import_jsx_runtime.jsx)("table", {
				className: i("w-full divide-y divide-border", t),
				"data-streamdown": "table",
				...l,
				children: e
			})
		})]
	});
};
var wi = /startLine=(\d+)/;
var xi = /\bnoLineNumbers\b/;
var ki = (0, import_react.lazy)(() => import("./_367.mjs").then((e) => ({ default: e.Mermaid })));
var vi = /language-([^\s]+)/;
var Ti = "node";
function H(e, t) {
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return false;
	let o = e, r = t;
	for (let s of n) if (s !== Ti && !Object.is(o[s], r[s])) return false;
	return true;
}
function Ei(e, t) {
	var n, o;
	return ((n = e == null ? void 0 : e.properties) == null ? void 0 : n.metastring) === ((o = t == null ? void 0 : t.properties) == null ? void 0 : o.metastring);
}
var Ct = (e, t) => typeof e == "boolean" ? e : e[t] !== false;
var Ut = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.table;
	return n === false ? false : n === true || n === void 0 ? true : n[t] !== false;
};
var No = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.code;
	return n === false ? false : n === true || n === void 0 ? true : n[t] !== false;
};
var ht = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.mermaid;
	return n === false ? false : n === true || n === void 0 ? true : n[t] !== false;
};
var Pi = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.image;
	return n === false ? false : n === true || n === void 0 ? true : n[t] !== false;
};
var Yt = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("ol", {
		className: r("list-inside list-decimal whitespace-normal [li_&]:ps-6", t),
		"data-streamdown": "ordered-list",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Yt.displayName = "MarkdownOl";
var Do = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	var l;
	let r = k(), s = Array.isArray(e) ? e.filter((i) => i !== `
` && i !== "") : [e], a = s.length === 1 && (0, import_react.isValidElement)(s[0]) && (s[0].type === Qt || ((l = s[0].props.node) == null ? void 0 : l.tagname) === "p") ? s[0].props.children : e;
	return (0, import_jsx_runtime.jsx)("li", {
		className: r("py-1 [&>p]:inline", t),
		"data-streamdown": "list-item",
		...o,
		children: a
	});
}, (e, t) => H(e, t));
Do.displayName = "MarkdownLi";
var Ao = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("ul", {
		className: r("list-inside list-disc whitespace-normal [li_&]:ps-6", t),
		"data-streamdown": "unordered-list",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Ao.displayName = "MarkdownUl";
var Ho = (0, import_react.memo)(({ className: e, node: t, ...n }) => {
	let o = k();
	return (0, import_jsx_runtime.jsx)("hr", {
		className: o("my-6 border-border", e),
		"data-streamdown": "horizontal-rule",
		...n
	});
}, (e, t) => H(e, t));
Ho.displayName = "MarkdownHr";
var Oo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("span", {
		className: r("font-semibold", t),
		"data-streamdown": "strong",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Oo.displayName = "MarkdownStrong";
var Mi = ({ children: e, className: t, href: n, node: o, ...r }) => {
	let s = k(), { linkSafety: a } = (0, import_react.useContext)(S), [l, i] = (0, import_react.useState)(false), c = n === "streamdown:incomplete-link", d = (0, import_react.useCallback)(async (m) => {
		if (!(!(a != null && a.enabled && n) || c)) {
			if (m.preventDefault(), a.onLinkCheck && await a.onLinkCheck(n)) {
				window.open(n, "_blank", "noreferrer");
				return;
			}
			i(true);
		}
	}, [
		a,
		n,
		c
	]), p = (0, import_react.useCallback)(() => {
		n && window.open(n, "_blank", "noreferrer");
	}, [n]), f = (0, import_react.useCallback)(() => {
		i(false);
	}, []), u = {
		url: n != null ? n : "",
		isOpen: l,
		onClose: f,
		onConfirm: p
	};
	return a != null && a.enabled && n ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("button", {
		className: s("wrap-anywhere appearance-none text-start font-medium text-primary underline", t),
		"data-incomplete": c,
		"data-streamdown": "link",
		onClick: d,
		type: "button",
		children: e
	}), a.renderModal ? a.renderModal(u) : (0, import_jsx_runtime.jsx)(lo, { ...u })] }) : (0, import_jsx_runtime.jsx)("a", {
		className: s("wrap-anywhere font-medium text-primary underline", t),
		"data-incomplete": c,
		"data-streamdown": "link",
		href: n,
		rel: "noreferrer",
		target: "_blank",
		...r,
		children: e
	});
};
var Bo = (0, import_react.memo)(Mi, (e, t) => H(e, t));
Bo.displayName = "MarkdownA";
var Fo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h1", {
		className: r("mt-6 mb-2 font-semibold text-3xl", t),
		"data-streamdown": "heading-1",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Fo.displayName = "MarkdownH1";
var _o = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h2", {
		className: r("mt-6 mb-2 font-semibold text-2xl", t),
		"data-streamdown": "heading-2",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
_o.displayName = "MarkdownH2";
var jo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h3", {
		className: r("mt-6 mb-2 font-semibold text-xl", t),
		"data-streamdown": "heading-3",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
jo.displayName = "MarkdownH3";
var Vo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h4", {
		className: r("mt-6 mb-2 font-semibold text-lg", t),
		"data-streamdown": "heading-4",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Vo.displayName = "MarkdownH4";
var zo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h5", {
		className: r("mt-6 mb-2 font-semibold text-base", t),
		"data-streamdown": "heading-5",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
zo.displayName = "MarkdownH5";
var $o = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("h6", {
		className: r("mt-6 mb-2 font-semibold text-sm", t),
		"data-streamdown": "heading-6",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
$o.displayName = "MarkdownH6";
var Wo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let { controls: r, tableMaxHeight: s } = (0, import_react.useContext)(S), a = Ct(r, "table"), l = Ut(r, "copy"), i = Ut(r, "download"), c = Ut(r, "fullscreen");
	return (0, import_jsx_runtime.jsx)(Lo, {
		className: t,
		maxHeight: s,
		showControls: a,
		showCopy: l,
		showDownload: i,
		showFullscreen: c,
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Wo.displayName = "MarkdownTable";
var qo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("thead", {
		className: r("bg-muted/80", t),
		"data-streamdown": "table-header",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
qo.displayName = "MarkdownThead";
var Xo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("tbody", {
		className: r("divide-y divide-border", t),
		"data-streamdown": "table-body",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Xo.displayName = "MarkdownTbody";
var Go = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("tr", {
		className: r("border-border", t),
		"data-streamdown": "table-row",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Go.displayName = "MarkdownTr";
var Zo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("th", {
		className: r("whitespace-nowrap px-4 py-2 text-start font-semibold text-sm", t),
		"data-streamdown": "table-header-cell",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Zo.displayName = "MarkdownTh";
var Ko = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("td", {
		className: r("px-4 py-2 text-sm", t),
		"data-streamdown": "table-cell",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Ko.displayName = "MarkdownTd";
var Jo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("blockquote", {
		className: r("my-4 border-muted-foreground/30 border-s-4 ps-4 text-muted-foreground italic", t),
		"data-streamdown": "blockquote",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Jo.displayName = "MarkdownBlockquote";
var Uo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("sup", {
		className: r("text-sm", t),
		"data-streamdown": "superscript",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Uo.displayName = "MarkdownSup";
var Yo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	let r = k();
	return (0, import_jsx_runtime.jsx)("sub", {
		className: r("text-sm", t),
		"data-streamdown": "subscript",
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Yo.displayName = "MarkdownSub";
var Qo = (0, import_react.memo)(({ children: e, className: t, node: n, ...o }) => {
	if ("data-footnotes" in o) {
		let s = (i) => {
			var f, u;
			if (!(0, import_react.isValidElement)(i)) return false;
			let c = Array.isArray(i.props.children) ? i.props.children : [i.props.children], d = false, p = false;
			for (let m of c) if (m) {
				if (typeof m == "string") m.trim() !== "" && (d = true);
				else if ((0, import_react.isValidElement)(m)) if (((f = m.props) == null ? void 0 : f["data-footnote-backref"]) !== void 0) p = true;
				else {
					let g = Array.isArray(m.props.children) ? m.props.children : [m.props.children];
					for (let y of g) {
						if (typeof y == "string" && y.trim() !== "") {
							d = true;
							break;
						}
						if ((0, import_react.isValidElement)(y) && ((u = y.props) == null ? void 0 : u["data-footnote-backref"]) === void 0) {
							d = true;
							break;
						}
					}
				}
			}
			return p && !d;
		}, a = Array.isArray(e) ? e.map((i) => {
			if (!(0, import_react.isValidElement)(i)) return i;
			if (i.type === Yt) {
				let d = (Array.isArray(i.props.children) ? i.props.children : [i.props.children]).filter((p) => !s(p));
				return d.length === 0 ? null : {
					...i,
					props: {
						...i.props,
						children: d
					}
				};
			}
			return i;
		}) : e;
		return (Array.isArray(a) ? a.some((i) => i !== null) : a !== null) ? (0, import_jsx_runtime.jsx)("section", {
			className: t,
			...o,
			children: a
		}) : null;
	}
	return (0, import_jsx_runtime.jsx)("section", {
		className: t,
		...o,
		children: e
	});
}, (e, t) => H(e, t));
Qo.displayName = "MarkdownSection";
var Si = ({ node: e, className: t, children: n, ...o }) => {
	var D, V;
	let r = k(), s = !("data-block" in o), { mermaid: a, controls: l, lineNumbers: i, codeBlockRawLanguages: c } = (0, import_react.useContext)(S), d = Oe(), p = We(), f = t == null ? void 0 : t.match(vi), u = (D = f == null ? void 0 : f.at(1)) != null ? D : "", m = co(u);
	if (s) return (0, import_jsx_runtime.jsx)("code", {
		className: r("rounded bg-muted px-1.5 py-0.5 font-mono text-sm", t),
		"data-streamdown": "inline-code",
		...o,
		children: n
	});
	let g = (V = e == null ? void 0 : e.properties) == null ? void 0 : V.metastring, y = g == null ? void 0 : g.match(wi), h = y ? Number.parseInt(y[1], 10) : void 0, C = h !== void 0 && h >= 1 ? h : void 0, v = !(g ? xi.test(g) : false) && i !== false, T = "";
	if ((0, import_react.isValidElement)(n) && n.props && typeof n.props == "object" && "children" in n.props && typeof n.props.children == "string" ? T = n.props.children : typeof n == "string" && (T = n), m) {
		let F = m.component;
		return (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: (0, import_jsx_runtime.jsx)(pt, {}),
			children: (0, import_jsx_runtime.jsx)(F, {
				code: T,
				isIncomplete: p,
				language: u,
				meta: g
			})
		});
	}
	if (u && c != null && c.includes(u) && !(u === "mermaid" && d)) return (0, import_jsx_runtime.jsx)(xo, {
		code: T,
		isIncomplete: p,
		language: u
	});
	if (u === "mermaid" && d) {
		let F = Ct(l, "mermaid"), Q = ht(l, "download"), _ = ht(l, "copy"), X = ht(l, "fullscreen"), W = ht(l, "panZoom"), re = F && (Q || _ || X);
		return (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: (0, import_jsx_runtime.jsx)(pt, {}),
			children: (0, import_jsx_runtime.jsxs)("div", {
				className: r("group relative my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", t),
				"data-streamdown": "mermaid-block",
				children: [
					(0, import_jsx_runtime.jsx)("div", {
						className: r("flex h-8 items-center text-muted-foreground text-xs"),
						children: (0, import_jsx_runtime.jsx)("span", {
							className: r("ms-1 font-mono lowercase"),
							children: "mermaid"
						})
					}),
					re ? (0, import_jsx_runtime.jsx)("div", {
						className: r("pointer-events-none absolute end-2 top-2 z-10 flex items-center"),
						children: (0, import_jsx_runtime.jsxs)("div", {
							className: r("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
							"data-streamdown": "mermaid-block-actions",
							children: [
								Q ? (0, import_jsx_runtime.jsx)(gt, {
									chart: T,
									config: a == null ? void 0 : a.config
								}) : null,
								_ ? (0, import_jsx_runtime.jsx)(Ie, {
									code: T,
									...Ge(l, "mermaid")
								}) : null,
								X ? (0, import_jsx_runtime.jsx)(wo, {
									chart: T,
									config: a == null ? void 0 : a.config
								}) : null
							]
						})
					}) : null,
					(0, import_jsx_runtime.jsx)("div", {
						className: r("overflow-hidden rounded-md border border-border bg-background"),
						children: (0, import_jsx_runtime.jsx)(ki, {
							chart: T,
							config: a == null ? void 0 : a.config,
							showControls: W
						})
					})
				]
			})
		});
	}
	let w = Ct(l, "code"), R = No(l, "download"), j = No(l, "copy"), { "data-block": M, ...N } = o;
	return (0, import_jsx_runtime.jsx)(_t, {
		className: t,
		code: T,
		isIncomplete: p,
		language: u,
		lineNumbers: v,
		startLine: C,
		...N,
		children: w ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [R ? (0, import_jsx_runtime.jsx)(zt, {
			code: T,
			language: u
		}) : null, j ? (0, import_jsx_runtime.jsx)(Ie, { ...Ge(l, "code") }) : null] }) : null
	});
};
var er = (0, import_react.memo)(Si, (e, t) => H(e, t) && Ei(e.node, t.node));
er.displayName = "MarkdownCode";
var Ri = ({ node: e, className: t, ...n }) => {
	let { controls: o } = (0, import_react.useContext)(S), r = Ct(o, "image"), s = r && Pi(o, "download");
	return (0, import_jsx_runtime.jsx)(oo, {
		className: t,
		node: e,
		showControls: r,
		showDownloadControl: s,
		...n
	});
};
var tr = (0, import_react.memo)(Ri, (e, t) => H(e, t));
tr.displayName = "MarkdownImg";
var Qt = (0, import_react.memo)(({ children: e, node: t, ...n }) => {
	let r = (Array.isArray(e) ? e : [e]).filter((s) => s != null && s !== "");
	if (r.length === 1 && (0, import_react.isValidElement)(r[0])) {
		let s = r[0].props.node, a = s == null ? void 0 : s.tagName;
		if (a === "img") return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e });
		if (a === "code" && "data-block" in r[0].props) return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e });
	}
	return (0, import_jsx_runtime.jsx)("p", {
		...n,
		children: e
	});
}, (e, t) => H(e, t));
Qt.displayName = "MarkdownParagraph";
var en = {
	ol: Yt,
	li: Do,
	ul: Ao,
	hr: Ho,
	strong: Oo,
	a: Bo,
	h1: Fo,
	h2: _o,
	h3: jo,
	h4: Vo,
	h5: zo,
	h6: $o,
	table: Wo,
	thead: qo,
	tbody: Xo,
	tr: Go,
	th: Zo,
	td: Ko,
	blockquote: Jo,
	code: er,
	img: tr,
	pre: ({ children: e }) => (0, import_react.isValidElement)(e) ? (0, import_react.cloneElement)(e, { "data-block": "true" }) : e,
	sup: Uo,
	sub: Yo,
	p: Qt,
	section: Qo
};
var nr = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
var Li = /\p{L}/u;
function tt(e) {
	let t = e.replace(/(```|~~~)[\s\S]*?\1/g, "").replace(/^#{1,6}\s+/gm, "").replace(/(\*{1,3}|_{1,3})/g, "").replace(/`[^`]*`/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^[\s>*\-+\d.]+/gm, ""), n, o = 0, r = 0;
	for (let s of t) if (Li.test(s)) {
		if (nr.test(s)) {
			n ??= "rtl", r += 1;
			continue;
		}
		n ??= "ltr", o += 1;
	}
	return r > o ? "rtl" : o > r ? "ltr" : n != null ? n : nr.test(t) ? "rtl" : "ltr";
}
var Ii = /^[ \t]{0,3}(`{3,}|~{3,})/;
var Ni = /^\|?[ \t]*:?-{1,}:?[ \t]*(\|[ \t]*:?-{1,}:?[ \t]*)*\|?$/;
var tn = (e) => {
	let t = e.split(`
`), n = null, o = 0;
	for (let r of t) {
		let s = Ii.exec(r);
		if (n === null) {
			if (s) {
				let a = s[1];
				n = a[0], o = a.length;
			}
		} else if (s) {
			let a = s[1], l = a[0], i = a.length;
			l === n && i >= o && (n = null, o = 0);
		}
	}
	return n !== null;
};
var or = (e) => {
	let t = e.split(`
`);
	for (let n of t) {
		let o = n.trim();
		if (o.length > 0 && o.includes("|") && Ni.test(o)) return true;
	}
	return false;
};
var rr = () => (e) => {
	visit(e, "html", (t, n, o) => {
		!o || typeof n != "number" || (o.children[n] = {
			type: "text",
			value: t.value
		});
	});
};
var ar = [];
var ir = { allowDangerousHtml: true };
var lr = /* @__PURE__ */ new WeakMap();
var cr = 0;
var on = (e) => {
	let t = lr.get(e);
	if (t !== void 0) return t;
	let n = cr;
	return cr += 1, lr.set(e, n), n;
};
var dr = (e) => {
	let t = /* @__PURE__ */ new WeakMap(), n = [], o = [], r = JSON.stringify(e, function(s, a) {
		let l = t.get(this), i = l ? [...l, s] : [];
		if (typeof a == "function") return n.push([i, on(a)]), a;
		let c = a;
		return a instanceof RegExp ? (o.push([i, "RegExp"]), c = String(a)) : (a instanceof Map || a instanceof Set) && (o.push([i, a instanceof Map ? "Map" : "Set"]), c = [...a]), c !== null && typeof c == "object" && t.set(c, i), c;
	});
	return JSON.stringify([
		r,
		n,
		o
	]);
};
var rn = class {
	constructor() {
		this.cache = /* @__PURE__ */ new Map();
		this.keyCache = /* @__PURE__ */ new WeakMap();
		this.maxSize = 100;
	}
	generateCacheKey(t) {
		let n = this.keyCache.get(t);
		if (n) return n;
		let o = t.rehypePlugins, r = t.remarkPlugins, s = t.remarkRehypeOptions;
		if (!(o || r || s)) {
			let p = "default";
			return this.keyCache.set(t, p), p;
		}
		let a = (p) => {
			if (!p || p.length === 0) return "";
			let f = "";
			for (let u = 0; u < p.length; u += 1) {
				let m = p[u];
				if (u > 0 && (f += ","), Array.isArray(m)) {
					let [g, y] = m;
					typeof g == "function" ? f += on(g) : f += String(g), f += ":", f += dr(y);
				} else typeof m == "function" ? f += on(m) : f += String(m);
			}
			return f;
		}, l = a(o), d = `${a(r)}::${l}::${s ? dr(s) : ""}`;
		return this.keyCache.set(t, d), d;
	}
	get(t) {
		let n = this.generateCacheKey(t), o = this.cache.get(n);
		return o && (this.cache.delete(n), this.cache.set(n, o)), o;
	}
	set(t, n) {
		let o = this.generateCacheKey(t);
		if (this.cache.size >= this.maxSize) {
			let r = this.cache.keys().next().value;
			r && this.cache.delete(r);
		}
		this.cache.set(o, n);
	}
	clear() {
		this.cache.clear();
	}
};
var ur = new rn();
var sn = (e) => {
	let t = zi(e), n = e.children || "";
	return Zi(t.runSync(t.parse(n), n), e);
};
var zi = (e) => {
	let t = ur.get(e);
	if (t) return t;
	let n = Wi(e);
	return ur.set(e, n), n;
};
var $i = (e) => e.some((t) => Array.isArray(t) ? t[0] === rehypeRaw : t === rehypeRaw);
var Wi = (e) => {
	let t = e.rehypePlugins || ar, n = e.remarkPlugins || ar, o = $i(t) ? n : [...n, rr], r = e.remarkRehypeOptions ? {
		...ir,
		...e.remarkRehypeOptions
	} : ir;
	return unified().use(remarkParse).use(o).use(remarkRehype, r).use(t);
};
var mr = (e) => e;
var qi = (e, t, n, o) => {
	n ? e.children.splice(t, 1) : e.children[t] = {
		type: "text",
		value: o
	};
};
var Xi = (e, t) => {
	var n;
	for (let o in urlAttributes) if (Object.hasOwn(urlAttributes, o) && Object.hasOwn(e.properties, o)) {
		let r = e.properties[o], s = urlAttributes[o];
		(s === null || s.includes(e.tagName)) && (e.properties[o] = (n = t(String(r || ""), o, e)) != null ? n : void 0);
	}
};
var Gi = (e, t, n, o, r, s) => {
	let a = false;
	return o ? a = !o.includes(e.tagName) : r && (a = r.includes(e.tagName)), !a && s && typeof t == "number" && (a = !s(e, t, n)), a;
};
var Zi = (e, t) => {
	let { allowElement: n, allowedElements: o, disallowedElements: r, skipHtml: s, unwrapDisallowed: a, urlTransform: l } = t;
	if (n || o || r || s || l) {
		let c = l || mr;
		visit(e, (d, p, f) => {
			if (d.type === "raw" && f && typeof p == "number") return qi(f, p, s, d.value), p;
			if (d.type === "element" && (Xi(d, c), Gi(d, p, f, o, r, n) && f && typeof p == "number")) return a && d.children ? f.children.splice(p, 1, ...d.children) : f.children.splice(p, 1), p;
		});
	}
	return toJsxRuntime(e, {
		Fragment: import_jsx_runtime.Fragment,
		components: t.components,
		ignoreInvalidStyle: true,
		jsx: import_jsx_runtime.jsx,
		jsxs: import_jsx_runtime.jsxs,
		passKeys: true,
		passNode: true
	});
};
var pr = /\[\^[\w-]{1,200}\]:/;
var Ji = /<([A-Za-z][\w:-]*)[\s>/]/;
var fr = /^ {0,3}\[[^\]]+\]:/m;
var an = (e, t) => e !== null && t.length >= e.input.length && t.startsWith(e.input);
var vr = 205;
var gr = /\[\^[\w-]{1,200}\][^:]/;
var Ui = /\[\^[\w-]{1,200}\]$/;
var br = null;
var hr = null;
var yr = null;
var Tr = (e, t) => t.slice(Math.max(0, e.input.length - vr));
var Yi = (e) => {
	let t = br, n = an(t, e) ? t.found || gr.test(Tr(t, e)) : gr.test(e);
	return br = {
		input: e,
		found: n
	}, n || Ui.test(e.slice(-vr));
};
var Qi = (e) => {
	let t = hr, n = an(t, e) ? t.found || pr.test(Tr(t, e)) : pr.test(e);
	return hr = {
		input: e,
		found: n
	}, n;
};
var el = (e) => {
	let t = yr, n;
	if (!an(t, e)) n = fr.test(e);
	else if (t.found) n = true;
	else {
		let o = t.input.length, r = o >= 2 ? t.input.lastIndexOf("]", o - 2) : -1, s = r < 0 ? 0 : e.lastIndexOf(`
`, r) + 1;
		n = fr.test(e.slice(s));
	}
	return yr = {
		input: e,
		found: n
	}, n;
};
var tl = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]);
var Cr = /* @__PURE__ */ new Map();
var wr = /* @__PURE__ */ new Map();
var nl = (e) => {
	let t = e.toLowerCase(), n = Cr.get(t);
	if (n) return n;
	let o = new RegExp(`<${t}(?=[\\s>/])[^>]*>`, "gi");
	return Cr.set(t, o), o;
};
var ol = (e) => {
	let t = e.toLowerCase(), n = wr.get(t);
	if (n) return n;
	let o = new RegExp(`</${t}(?=[\\s>])[^>]*>`, "gi");
	return wr.set(t, o), o;
};
var xr = (e, t) => {
	if (tl.has(t.toLowerCase())) return 0;
	let n = e.match(nl(t));
	if (!n) return 0;
	let o = 0;
	for (let r of n) r.trimEnd().endsWith("/>") || (o += 1);
	return o;
};
var kr = (e, t) => {
	let n = e.match(ol(t));
	return n ? n.length : 0;
};
var rl = (e) => {
	let t = 0;
	for (let n = 0; n < e.length - 1; n += 1) e[n] === "$" && e[n + 1] === "$" && (t += 1, n += 1);
	return t;
};
var sl = /\r\n|\r/g;
var Er = (e) => {
	let t = new w({ gfm: true });
	return {
		tokens: t.blockTokens(e),
		hasLinkDefinitions: Object.keys(t.tokens.links).length > 0
	};
};
var Pe = null;
var al = `

`;
var il = (e) => {
	for (let t = e.length - 3; t >= 0; t -= 1) if (e[t].endsWith(al)) return t + 1;
	return 0;
};
var Pr = (e) => ` ${e}`.slice(1);
var Mr = (e) => e.map(Pr);
var Sr = (e) => {
	let t = [], n = [], o = false;
	for (let r of e) {
		let s = r.raw, a = t.length;
		if (n.length > 0) {
			t[a - 1] += s;
			let l = n.at(-1), i = xr(s, l), c = kr(s, l);
			for (let d = 0; d < i; d += 1) n.push(l);
			for (let d = 0; d < c; d += 1) n.length > 0 && n.at(-1) === l && n.pop();
			continue;
		}
		if (r.type === "html" && r.block) {
			let l = s.match(Ji);
			if (l) {
				let i = l[1];
				xr(s, i) > kr(s, i) && n.push(i);
			}
		}
		if (r.type === "space" && a > 0) {
			t[a - 1] += s;
			continue;
		}
		if (a > 0 && !o) {
			let l = t[a - 1];
			if (rl(l) % 2 === 1) {
				t[a - 1] = l + s;
				continue;
			}
		}
		t.push(s), r.type !== "space" && (o = r.type === "code");
	}
	return t;
};
var ll = (e, t) => {
	if (t.length <= e.input.length || t.slice(0, e.input.length) !== e.input || el(t)) return null;
	let n = il(e.blocks);
	if (n === 0) return null;
	let o = e.verifiedCount, r = e.verifiedLength;
	if (o > n) {
		o = n, r = 0;
		for (let l = 0; l < o; l += 1) r += e.blocks[l].length;
	}
	for (; o < n && t.startsWith(e.blocks[o], r);) r += e.blocks[o].length, o += 1;
	if (o !== n) return null;
	let s = Er(t.slice(r));
	if (s.hasLinkDefinitions) return null;
	let a = Mr(Sr(s.tokens));
	return {
		input: t,
		blocks: e.blocks.slice(0, n).concat(a),
		verifiedCount: o,
		verifiedLength: r
	};
};
var kt = (e) => {
	let t = Yi(e), n = Qi(e);
	if (t || n) return [e];
	let o = e.includes("\r") ? e.replace(sl, `
`) : e;
	if ((Pe == null ? void 0 : Pe.input) === o) return Pe.blocks;
	let s = Pe ? ll(Pe, o) : null;
	if (!s) {
		let { tokens: a, hasLinkDefinitions: l } = Er(o);
		s = {
			input: o,
			blocks: l ? [Pr(o)] : Mr(Sr(a)),
			verifiedCount: 0,
			verifiedLength: 0
		};
	}
	return Pe = s, s.blocks;
};
var cl = /^\n*/;
var dl = /\n*$/;
var ul = /\n\n/g;
var ml = /^[ \t]*(`{3,}|~{3,})(.*)$/;
var pl = /[.*+?^${}()|[\]\\]/g;
var cn = (e) => e.replace(pl, "\\$&");
var fl = (e) => `<${cn(e)}(?=[\\s>/])(?:[^>]*[^>/])?>`;
var Rr = /[ \t]*(?:(?:[*+-]|\d{1,9}[.)])[ \t]+|>[ \t]*|<\/[A-Za-z][^<>\n]*>[ \t]*)*/y;
var Lr = (e, t) => {
	let n = -1, o = e.length - 1;
	for (; n < o;) {
		let r = Math.ceil((n + o) / 2);
		e[r] <= t ? n = r : o = r - 1;
	}
	return n;
};
var Ir = (e) => {
	let t = [];
	if (!(e.includes("```") || e.includes("~~~"))) return t;
	let n = -1, o = "", r = 0, s = 0;
	for (; s <= e.length;) {
		let a = e.indexOf(`
`, s);
		a === -1 && (a = e.length);
		let l = ml.exec(e.slice(s, a));
		if (l) {
			let i = l[1], c = l[2];
			n === -1 ? i[0] === "`" && c.includes("`") || (n = s, o = i[0], r = i.length) : i[0] === o && i.length >= r && c.trim() === "" && (t.push([n, a]), n = -1);
		}
		s = a + 1;
	}
	return n !== -1 && t.push([n, e.length]), t;
};
var Nr = (e) => {
	let t = Ir(e), n = 0;
	return (o) => {
		for (; n < t.length && t[n][1] <= o;) n += 1;
		return n < t.length && t[n][0] <= o;
	};
};
var gl = /\/\s*>$/;
var bl = /^<([A-Za-z][\w:-]*)/;
var hl = (e, t) => {
	let n = new RegExp(`<(/?)(${t.map(cn).join("|")})(?=[\\s>/])[^>]*>`, "gi"), o = Nr(e), r = [], s = /* @__PURE__ */ new Map(), a = -1, l = e.indexOf(`
`);
	for (let i of e.matchAll(n)) {
		if (o(i.index)) continue;
		let c = i[2].toLowerCase(), d = i[1] === "/", p = i.index + i[0].length;
		if (!d && gl.test(i[0])) continue;
		let u = s.get(c);
		if (!d) {
			u || (u = [], s.set(c, u)), u.push({
				index: i.index,
				end: p
			});
			continue;
		}
		let m = u == null ? void 0 : u.pop();
		if (!m) continue;
		let { index: g, end: y } = m;
		for (; l !== -1 && l < i.index;) a = l, l = e.indexOf(`
`, l + 1);
		a >= g && r.push({
			open: g,
			openEnd: y,
			closeStart: i.index,
			closeEnd: p,
			children: [],
			padded: false
		});
	}
	return r.sort((i, c) => i.open - c.open || c.closeEnd - i.closeEnd);
};
var yl = (e) => {
	let t = /* @__PURE__ */ new Map(), n, o = (a) => {
		if (!n) {
			n = [e.startsWith("﻿") ? 1 : 0];
			for (let l = e.indexOf(`
`); l !== -1; l = e.indexOf(`
`, l + 1)) n.push(l + 1);
		}
		return n[Lr(n, a)];
	}, r = (a) => {
		var i, c;
		let l = t.get(a);
		return l === void 0 && (Rr.lastIndex = a, l = a + ((c = (i = Rr.exec(e)) == null ? void 0 : i[0].length) != null ? c : 0), t.set(a, l)), l;
	};
	return (a, l) => {
		let i = o(a);
		return r(i) === a || l > i && r(l) === a;
	};
};
var Dr = (e, t) => {
	let n = yl(e), o = [], r = [], s = [], a = -1, l = (i) => {
		i.padded && (s.push(i.closeEnd), a = Math.max(a, i.closeEnd));
	};
	for (let i of hl(e, t)) {
		let c = r.at(-1);
		for (; c && c.closeEnd <= i.open;) l(c), r.pop(), c = r.at(-1);
		c && i.closeEnd > c.closeStart || r.length >= 256 || (i.padded = n(i.open, a), (c ? c.children : o).push(i), r.push(i));
	}
	for (let i of r) l(i);
	return s.sort((i, c) => i - c), {
		roots: o,
		startsBlock: (i) => {
			let c = Lr(s, i);
			return n(i, c === -1 ? -1 : s[c]);
		}
	};
};
var Cl = /(?<=<[^<>\n]*>)\n\n|\n\n(?=<)/g;
var ln = (e) => {
	let t = (a) => a.replace(Cl, (l) => l.replace(`

`, `
\0`)), n = (a) => a.replaceAll("\0", `
`), o = (a) => n(t(a).replace(ul, `
<!---->
`)), r = "", s = 0;
	for (let [a, l] of Ir(e)) r += o(e.slice(s, a)) + e.slice(a, l), s = l;
	return r + o(e.slice(s));
};
var wl = (e, t, n) => {
	if (!t.includes(`
`)) return e + t + n;
	return `${e}${ln(t).replace(cl, `

`).replace(dl, `

`)}${n}

`;
};
var xl = (e, t) => {
	var f, u, m;
	let n = new RegExp(t.map(fl).join("|"), "gi"), o, r, s = () => {
		let g = /* @__PURE__ */ new Map(), y = new RegExp(`</(${t.map(cn).join("|")})\\s*>`, "gi");
		for (let h of e.matchAll(y)) g.set(h[1].toLowerCase(), h.index);
		return g;
	}, a = /\S/g, l = Nr(e), i = "", c = 0, d = n.exec(e), p = (g) => {
		i += c === 0 ? e.slice(0, g) : ln(e.slice(c, g + 1)).slice(0, -1);
	};
	for (; d;) {
		let g = d[0], y = d.index + g.length;
		if (l(d.index)) {
			d = n.exec(e);
			continue;
		}
		if (o ??= Dr(e, t).startsBlock, !o(d.index)) {
			d = n.exec(e);
			continue;
		}
		let h = ((u = (f = bl.exec(g)) == null ? void 0 : f[1]) != null ? u : "").toLowerCase();
		if (r ??= s(), ((m = r.get(h)) != null ? m : -1) >= y) {
			d = n.exec(e);
			continue;
		}
		if (p(d.index), y === e.length) {
			i += g, c = y, d = n.exec(e);
			continue;
		}
		if (e.startsWith(`

`, y)) {
			i += `${g}

`, c = y + 2, d = n.exec(e);
			continue;
		}
		if (e[y] !== `
`) {
			i += g, c = y, d = n.exec(e);
			continue;
		}
		if (a.lastIndex = y + 1, !a.test(e)) {
			i += g, c = y, d = n.exec(e);
			continue;
		}
		i += `${g}

`, c = y + 1, n.lastIndex = c, d = n.exec(e);
	}
	return c === 0 ? e : i + ln(e.slice(c));
};
var Ar = (e, t, n, o) => {
	let r = "", s = t;
	for (let a of o) {
		let { open: l, openEnd: i, closeStart: c, closeEnd: d } = a, p = e.slice(l, i), f = e.slice(c, d), u = Ar(e, i, c, a.children);
		r += e.slice(s, l) + (a.padded ? wl(p, u, f) : p + u + f), s = d;
	}
	return r + e.slice(s, n);
};
var kl = (e, t) => {
	let { roots: n } = Dr(e, t);
	return n.length ? Ar(e, 0, e.length, n) : e;
};
var Hr = (e, t) => t.length ? xl(kl(e, t), t) : e;
var vl = /([\\`*_~[\]|])/g;
var Tl = (e) => e.replace(vl, "\\$1");
var Or = (e, t) => {
	if (!t.length) return e;
	let n = e;
	for (let o of t) {
		let r = new RegExp(`(<${o}(?=[\\s>/])[^>]*>)([\\s\\S]*?)(</${o}\\s*>)`, "gi");
		n = n.replace(r, (s, a, l, i) => {
			return a + Tl(l).replace(/\n\n/g, "&#10;&#10;") + i;
		});
	}
	return n;
};
var Pl = /* @__PURE__ */ new Set([
	"blockquote",
	"dd",
	"dt",
	"figcaption",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"li",
	"p",
	"td",
	"th"
]);
var Br = /* @__PURE__ */ new Set([
	"code",
	"kbd",
	"pre",
	"samp",
	"var"
]);
function Fr(e) {
	return e.children.map((t) => t.type === "text" ? t.value : t.type === "element" && !Br.has(t.tagName) ? Fr(t) : "").join("");
}
function _r() {
	return (e) => {
		visit(e, "element", (t) => {
			if (Br.has(t.tagName)) {
				t.properties ??= {}, t.properties.dir = "ltr";
				return;
			}
			Pl.has(t.tagName) && (t.properties ??= {}, typeof t.properties.dir != "string" && (t.properties.dir = tt(Fr(t))));
		});
	};
}
var jr = (e) => e.type === "text" ? e.value : "children" in e && Array.isArray(e.children) ? e.children.map(jr).join("") : "";
var Vr = (e) => (t) => {
	if (!e || e.length === 0) return;
	let n = new Set(e.map((o) => o.toLowerCase()));
	visit(t, "element", (o) => {
		if (n.has(o.tagName.toLowerCase())) {
			let r = jr(o);
			o.children = r ? [{
				type: "text",
				value: r
			}] : [];
		}
	});
};
var zr = () => (e) => {
	visit(e, "code", (t) => {
		var n, o;
		t.meta && (t.data = (n = t.data) != null ? n : {}, t.data.hProperties = {
			...(o = t.data.hProperties) != null ? o : {},
			metastring: t.meta
		});
	});
};
var Ll = /^([a-zA-Z][a-zA-Z\d+\-.]*:)/;
var Il = (e) => new Set(e.map((t) => t.trim().toLowerCase()).filter((t) => t.length > 0).map((t) => t.endsWith(":") ? t : `${t}:`));
function Nl(e, t, n) {
	var l, i;
	let o = (i = (l = e.position) == null ? void 0 : l.start) == null ? void 0 : i.offset;
	if (typeof o == "number" && n.charCodeAt(o) === 91 || e.children.length !== 1) return false;
	let [r] = e.children;
	if (r.type !== "text") return false;
	let s = Ll.exec(e.url);
	if (!s) return false;
	let a = s[1].toLowerCase();
	return t.has(a) ? a === "mailto:" ? e.url === `mailto:${r.value}` : e.url === r.value || e.url === `${a}//${r.value}` : false;
}
var $r = (e = []) => {
	let t = Il(e);
	return (n, o) => {
		var s;
		if (t.size === 0) return;
		let r = String((s = o.value) != null ? s : "");
		visit(n, "link", (a, l, i) => {
			if (!(!i || l === void 0) && Nl(a, t, r)) return i.children.splice(l, 1, ...a.children), l;
		});
	};
};
var Dl = 2;
var Al = /\$|\\[([]/;
var Hl = /`+/g;
var Ol = /\s/;
var qr = (e) => {
	let t = 0;
	for (; e[t] === " " && t < 3;) t += 1;
	let n = e[t];
	if (n !== "`" && n !== "~") return false;
	let o = t;
	for (; e[o] === n;) o += 1;
	if (o - t < 3) return false;
	let r = e.length;
	for (; r > 0 && Ol.test(e[r - 1]);) r -= 1;
	let s = e.lastIndexOf(`
`, r - 1) + 1;
	if (s < t + 3) return false;
	let a = s;
	for (; e[a] === " " && a - s < 3;) a += 1;
	let l = a;
	for (; e[l] === n;) l += 1;
	return l === r && l - a >= o - t;
};
var Bl = (e) => e.includes("$$") || Al.test(e) && !qr(e);
var Fl = (e) => {
	var n;
	if (!e.includes("`") || qr(e)) return false;
	let t = /* @__PURE__ */ new Map();
	for (let [o] of e.matchAll(Hl)) t.set(o.length, ((n = t.get(o.length)) != null ? n : 0) + 1);
	return [...t.values()].some((o) => o % 2 === 1);
};
var Xr = (e, t, n) => {
	let r = e !== null && e.options === n && !t.includes("\r") && t.length >= e.input.length && t.startsWith(e.input) ? e.stableLength : 0;
	return {
		input: t,
		options: n,
		repaired: r > 0 ? t.slice(0, r) + Fr$1(t.slice(r), n) : Fr$1(t, n),
		stableLength: r
	};
};
var Gr = (e, t) => {
	var o, r;
	if (e.repaired !== e.input || e.input.includes("\r") || (r = (o = e.options) == null ? void 0 : o.handlers) != null && r.length) return;
	let n = 0;
	for (let s = 0; s < t.length - Dl; s += 1) if (n += t[s].length, !(n <= e.stableLength)) {
		if (Bl(t[s]) || Fl(t[s])) return;
		e.stableLength = n;
	}
};
var Kr = "data-sd-caret-hidden";
var Vl = () => {};
var zl = () => Vl;
var Jr = (e) => {
	let t = (0, import_react.useRef)(null), n = (0, import_react.useRef)(null), o = (0, import_react.useSyncExternalStore)(zl, () => true, () => false);
	return (0, import_react.useLayoutEffect)(() => {
		var a, l;
		let r = e && (l = (a = t.current) == null ? void 0 : a.lastElementChild) != null ? l : null, s = n.current;
		s !== r && (s?.removeAttribute(Kr), r?.setAttribute(Kr, ""), n.current = r);
	}), {
		containerRef: t,
		showCaret: o || !e
	};
};
var Yr = /^[a-z]/;
var Jl = /^[ \t]*<[\w!/?-]/;
var Ul = /(^|\n)[ \t]{4,}(?=<[\w!/?-])/g;
var Yl = (e) => typeof e != "string" || e.length === 0 || !Jl.test(e) ? e : e.replace(Ul, "$1");
var nt = "user-content-";
function Ql() {
	let e = `${nt}${nt}`, t = (n) => {
		var o, r;
		if (n.type === "element" && typeof ((o = n.properties) == null ? void 0 : o.id) == "string" && n.properties.id.startsWith(e) && (n.properties.id = n.properties.id.slice(nt.length)), n.type === "element" && typeof ((r = n.properties) == null ? void 0 : r.href) == "string" && n.properties.href.startsWith("#") && n.properties.href.length > 1 && !n.properties.href.startsWith(`#${nt}`) && (n.properties.href = `#${nt}${n.properties.href.slice(1)}`), Array.isArray(n.children)) for (let s of n.children) t(s);
	};
	return (n) => {
		t(n);
	};
}
var es;
var ts;
var ns;
var os;
var rs;
var ss;
var vt = {
	...defaultSchema,
	protocols: {
		...defaultSchema.protocols,
		href: [
			...(ts = (es = defaultSchema.protocols) == null ? void 0 : es.href) != null ? ts : [],
			"tel",
			"streamdown"
		],
		src: [...(os = (ns = defaultSchema.protocols) == null ? void 0 : ns.src) != null ? os : [], "streamdown"]
	},
	attributes: {
		...defaultSchema.attributes,
		code: [...(ss = (rs = defaultSchema.attributes) == null ? void 0 : rs.code) != null ? ss : [], "metastring"]
	}
};
var Tt = {
	raw: rehypeRaw,
	sanitize: [rehypeSanitize, vt],
	undoubleClobberPrefix: Ql,
	harden: [harden, {
		allowedImagePrefixes: ["*"],
		allowedLinkPrefixes: ["*"],
		allowedProtocols: ["*"],
		defaultOrigin: void 0,
		allowDataImages: true
	}]
};
var ec = {
	gfm: [remarkGfm, {}],
	codeMeta: zr
};
var Qr = Object.values(Tt);
var tc = Object.values(ec);
var nc = {
	block: " ▋",
	circle: " ●"
};
var oc = (e) => e != null && e.length ? JSON.stringify(e) : "";
var rc = (e) => e ? JSON.parse(e) : void 0;
var cs = ["github-light", "github-dark"];
var ds = { enabled: true };
var S = (0, import_react.createContext)({
	codeBlockMaxHeight: 400,
	shikiTheme: cs,
	controls: true,
	isAnimating: false,
	lineNumbers: true,
	mode: "streaming",
	mermaid: void 0,
	linkSafety: ds,
	portal: void 0,
	tableMaxHeight: 300
});
var us = (e, t) => {
	if (e === t) return true;
	let n = Object.keys(e != null ? e : {});
	return n.length === Object.keys(t != null ? t : {}).length && n.every((o) => Object.hasOwn(t != null ? t : {}, o) && (e == null ? void 0 : e[o]) === (t == null ? void 0 : t[o]));
};
var ms = (0, import_react.memo)(({ content: e, shouldParseIncompleteMarkdown: t, shouldNormalizeHtmlIndentation: n, index: o, isIncomplete: r, dir: s, animatePlugin: a, ...l }) => {
	(0, import_react.useLayoutEffect)(() => {
		a?.commit();
	});
	let i = typeof e == "string" && n ? Yl(e) : e, c = (0, import_jsx_runtime.jsx)(sn, {
		...l,
		children: i
	});
	return (0, import_jsx_runtime.jsx)(At.Provider, {
		value: r,
		children: s ? (0, import_jsx_runtime.jsx)("div", {
			dir: s,
			style: { display: "contents" },
			children: c
		}) : c
	});
}, (e, t) => !(e.content !== t.content || e.shouldNormalizeHtmlIndentation !== t.shouldNormalizeHtmlIndentation || e.index !== t.index || e.isIncomplete !== t.isIncomplete || e.dir !== t.dir || !us(e.components, t.components) || e.rehypePlugins !== t.rehypePlugins || e.remarkPlugins !== t.remarkPlugins || !!e.animatePlugin != !!t.animatePlugin));
ms.displayName = "Block";
var dn = (e) => {
	let t = {};
	for (let [n, o] of Object.entries(e)) (n.startsWith("data-") || n.startsWith("aria-")) && (t[n] = o);
	return t;
};
var ac = (e, t) => {
	let n = dn(e), o = dn(t), r = Object.keys(n);
	return r.length === Object.keys(o).length && r.every((s) => Object.hasOwn(o, s) && n[s] === o[s]);
};
var ic = (0, import_react.memo)(({ children: e, mode: t = "streaming", dir: n, parseIncompleteMarkdown: o = true, normalizeHtmlIndentation: r = false, components: s, rehypePlugins: a = Qr, remarkPlugins: l = tc, className: i, shikiTheme: c, mermaid: d, codeBlockMaxHeight: p = 400, controls: f = true, isAnimating: u = false, tableMaxHeight: m = 300, animated: g, BlockComponent: y = ms, parseMarkdownIntoBlocksFn: h = kt, caret: C, plugins: b, remend: v, linkSafety: T = ds, portal: w, lineNumbers: R = true, codeBlockRawLanguages: j, allowedTags: M, fallbackComponent: N, literalTagContent: D, disableAutolinkProtocols: V, translations: F, icons: Q, prefix: _, onAnimationStart: X, onAnimationEnd: W, ...re }) => {
	let $ = (0, import_react.useId)(), K = dn(re), J = (0, import_react.useMemo)(() => Bn(_), [_]), ee = (0, import_react.useRef)(null), ne = (0, import_react.useRef)(X), pe = (0, import_react.useRef)(W);
	ne.current = X, pe.current = W, (0, import_react.useEffect)(() => {
		var L, G, se;
		if (t === "static") return;
		let x = ee.current;
		if (ee.current = u, x === null) {
			u && ((L = ne.current) == null || L.call(ne));
			return;
		}
		u && !x ? (G = ne.current) == null || G.call(ne) : !u && x && ((se = pe.current) == null || se.call(pe));
	}, [u, t]);
	let Re = (0, import_react.useMemo)(() => M ? Object.keys(M) : [], [M]), fe = (0, import_react.useRef)(null), le = (0, import_react.useMemo)(() => {
		if (typeof e != "string") return "";
		let x = e;
		return t === "streaming" && o && (h === kt && !(D != null && D.length) && Re.length === 0 ? (fe.current = Xr(fe.current, e, v), x = fe.current.repaired) : x = Fr$1(e, v)), D && D.length > 0 && (x = Or(x, D)), Re.length > 0 && (x = Hr(x, Re)), x;
	}, [
		e,
		t,
		o,
		v,
		Re,
		D,
		h
	]), P = (0, import_react.useMemo)(() => {
		let x = h(le), L = fe.current;
		return (L == null ? void 0 : L.repaired) === le && Gr(L, x), x;
	}, [le, h]), z = (0, import_react.useMemo)(() => n === "auto" ? P.map(tt) : void 0, [P, n]), ye = (0, import_react.useMemo)(() => P.map((x, L) => `${$}-${L}`), [P.length, $]), ce = (0, import_react.useMemo)(() => g === true ? "true" : g ? JSON.stringify(g) : "", [g]), oe = (0, import_react.useRef)(null), Ve = (0, import_react.useRef)([]), Ce = (0, import_react.useRef)([]), gn = (0, import_react.useRef)(null), Mt = (0, import_react.useRef)("");
	if (ce) {
		if (Mt.current !== ce) {
			Mt.current = ce;
			oe.current = It({ maxBacklogMs: ce !== "true" ? g.maxBacklogMs : void 0 }), Ve.current = [], Ce.current = [];
		} else oe.current || (oe.current = It());
		u && oe.current && oe.current.beginPass(oe.current.now());
	} else oe.current = null, Ve.current = [], Ce.current = [], Mt.current = "";
	(0, import_react.useLayoutEffect)(() => {
		var x;
		u && ((x = oe.current) == null || x.commitPass());
	});
	let bn = oc(j), hn = (0, import_react.useMemo)(() => {
		var x, L;
		return {
			codeBlockMaxHeight: p,
			codeBlockRawLanguages: rc(bn),
			shikiTheme: (L = c != null ? c : (x = b == null ? void 0 : b.code) == null ? void 0 : x.getThemes()) != null ? L : cs,
			controls: f,
			isAnimating: u,
			lineNumbers: R,
			mode: t,
			mermaid: d,
			linkSafety: T,
			portal: w,
			tableMaxHeight: m
		};
	}, [
		p,
		bn,
		c,
		f,
		u,
		R,
		t,
		d,
		T,
		w,
		b == null ? void 0 : b.code,
		m
	]), gs = (0, import_react.useMemo)(() => F ? JSON.stringify(F) : "", [F]), yn = (0, import_react.useMemo)(() => ({
		...ut,
		...F
	}), [gs]), Cn = (0, import_react.useMemo)(() => {
		let { inlineCode: x, ...L } = s != null ? s : {}, G = {
			...en,
			...L
		};
		if (x) {
			let se = G.code;
			G.code = (U) => "data-block" in U ? se ? (0, import_react.createElement)(se, U) : null : (0, import_react.createElement)(x, U);
		}
		if (N) {
			if (M) for (let U of Object.keys(M)) Object.hasOwn(G, U) || (G[U] = N);
			let se = {
				configurable: true,
				enumerable: false,
				value: N,
				writable: false
			};
			return new Proxy(G, {
				getOwnPropertyDescriptor(U, te) {
					let we = Object.getOwnPropertyDescriptor(U, te);
					if (we) return we;
					if (typeof te == "string" && Yr.test(te)) return se;
				},
				get(U, te, we) {
					return typeof te == "string" && Yr.test(te) && !Object.hasOwn(U, te) ? N : Reflect.get(U, te, we);
				}
			});
		}
		return G;
	}, [
		s,
		N,
		M
	]), wn = (0, import_react.useMemo)(() => {
		let x = [];
		return b != null && b.cjk && (x = [...x, ...b.cjk.remarkPluginsBefore]), x = [...x, ...l], V && V.length > 0 && (x = [...x, [$r, V]]), b != null && b.cjk && (x = [...x, ...b.cjk.remarkPluginsAfter]), b != null && b.math && (x = [...x, b.math.remarkPlugin]), x;
	}, [
		l,
		b == null ? void 0 : b.math,
		b == null ? void 0 : b.cjk,
		V
	]), ze = (0, import_react.useMemo)(() => {
		var L;
		let x = a;
		if (M && Object.keys(M).length > 0 && a === Qr) {
			let G = {
				...vt,
				tagNames: [...(L = vt.tagNames) != null ? L : [], ...Object.keys(M)],
				attributes: {
					...vt.attributes,
					...M
				}
			};
			x = [
				Tt.raw,
				[rehypeSanitize, G],
				Tt.undoubleClobberPrefix,
				Tt.harden
			];
		}
		return D && D.length > 0 && (x = [...x, [Vr, D]]), b != null && b.math && (x = [...x, b.math.rehypePlugin]), n === "auto" && t === "static" && (x = [...x, _r]), x;
	}, [
		a,
		b == null ? void 0 : b.math,
		M,
		D,
		n,
		t
	]), bs = (0, import_react.useMemo)(() => C && u ? { "--streamdown-caret": `"${nc[C]}"` } : void 0, [C, u]), { containerRef: ys, showCaret: Cs } = Jr((0, import_react.useMemo)(() => {
		if (!u || P.length === 0) return false;
		let x = P.at(-1);
		return tn(x) || or(x);
	}, [u, P])), ws = (x) => {
		let L = null;
		if (oe.current && u) {
			if (!Ve.current[x]) {
				let { maxBacklogMs: U, ...te } = ce && ce !== "true" ? g : {};
				Ve.current[x] = Dn({
					...te,
					timeline: oe.current
				});
			}
			L = Ve.current[x];
		}
		gn.current !== ze && (Ce.current = [], gn.current = ze), L && !Ce.current[x] && (Ce.current[x] = [...ze, L.rehypePlugin]);
		let G = L && Ce.current[x] ? Ce.current[x] : ze;
		return {
			blockAnimatePlugin: L,
			blockRehypePlugins: G
		};
	};
	return t === "static" ? (0, import_jsx_runtime.jsx)(mt.Provider, {
		value: yn,
		children: (0, import_jsx_runtime.jsx)(ft.Provider, {
			value: b != null ? b : null,
			children: (0, import_jsx_runtime.jsx)(S.Provider, {
				value: hn,
				children: (0, import_jsx_runtime.jsx)(jt, {
					icons: Q,
					children: (0, import_jsx_runtime.jsx)(st.Provider, {
						value: J,
						children: (0, import_jsx_runtime.jsx)("div", {
							...K,
							className: J("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", i),
							dir: n === "auto" ? void 0 : n,
							children: (0, import_jsx_runtime.jsx)(sn, {
								components: Cn,
								rehypePlugins: ze,
								remarkPlugins: wn,
								...re,
								children: le
							})
						})
					})
				})
			})
		})
	}) : (0, import_jsx_runtime.jsx)(mt.Provider, {
		value: yn,
		children: (0, import_jsx_runtime.jsx)(ft.Provider, {
			value: b != null ? b : null,
			children: (0, import_jsx_runtime.jsx)(S.Provider, {
				value: hn,
				children: (0, import_jsx_runtime.jsx)(jt, {
					icons: Q,
					children: (0, import_jsx_runtime.jsx)(st.Provider, {
						value: J,
						children: (0, import_jsx_runtime.jsxs)("div", {
							...K,
							className: J("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", C && Cs ? "[&>*:last-child:not([data-sd-caret-hidden])]:after:inline [&>*:last-child:not([data-sd-caret-hidden])]:after:align-baseline [&>*:last-child:not([data-sd-caret-hidden])]:after:content-[var(--streamdown-caret)]" : null, i),
							ref: ys,
							style: bs,
							children: [P.length === 0 && C && u && (0, import_jsx_runtime.jsx)("span", {}), P.map((x, L) => {
								var we;
								let G = L === P.length - 1, se = u && G && tn(x), { blockAnimatePlugin: U, blockRehypePlugins: te } = ws(L);
								return (0, import_jsx_runtime.jsx)(y, {
									animatePlugin: U,
									components: Cn,
									content: x,
									dir: (we = z == null ? void 0 : z[L]) != null ? we : n !== "auto" ? n : void 0,
									index: L,
									isIncomplete: se,
									rehypePlugins: te,
									remarkPlugins: wn,
									shouldNormalizeHtmlIndentation: r,
									shouldParseIncompleteMarkdown: o,
									...re
								}, ye[L]);
							})]
						})
					})
				})
			})
		})
	});
}, (e, t) => e.children === t.children && us(e.components, t.components) && e.shikiTheme === t.shikiTheme && e.isAnimating === t.isAnimating && e.animated === t.animated && e.mode === t.mode && e.plugins === t.plugins && e.className === t.className && e.linkSafety === t.linkSafety && e.lineNumbers === t.lineNumbers && JSON.stringify(e.codeBlockRawLanguages) === JSON.stringify(t.codeBlockRawLanguages) && e.codeBlockMaxHeight === t.codeBlockMaxHeight && e.tableMaxHeight === t.tableMaxHeight && e.normalizeHtmlIndentation === t.normalizeHtmlIndentation && e.literalTagContent === t.literalTagContent && e.disableAutolinkProtocols === t.disableAutolinkProtocols && JSON.stringify(e.translations) === JSON.stringify(t.translations) && e.prefix === t.prefix && e.dir === t.dir && e.fallbackComponent === t.fallbackComponent && ac(e, t));
ic.displayName = "Streamdown";
var ot = (e) => e > 0 ? e : null;
var dc = (e, t) => {
	if (e.endsWith("px")) return ot(Number.parseFloat(e));
	if (e.endsWith("rem")) {
		let n = Number.parseFloat(getComputedStyle(document.documentElement).fontSize || "16");
		return ot(Number.parseFloat(e) * n);
	}
	if (e.endsWith("em")) {
		let n = Number.parseFloat(getComputedStyle(t).fontSize || "16");
		return ot(Number.parseFloat(e) * n);
	}
	if (e.endsWith("vh")) return ot(Number.parseFloat(e) / 100 * window.innerHeight);
	if (e.endsWith("%")) {
		let n = t.parentElement;
		return n && n.clientHeight > 0 ? ot(Number.parseFloat(e) / 100 * n.clientHeight) : null;
	}
	return null;
};
var mn = (e, t) => {
	let n = t.trim().toLowerCase();
	return !n || n === "none" || n === "auto" ? null : dc(n, e);
};
var uc = /^min\(\s*([^,]+)\s*,\s*([^)]+)\s*\)$/i;
var mc = (e, t) => {
	let n = mn(e, t);
	if (n != null) return n;
	let o = t.trim().match(uc);
	if (!o) return null;
	let r = mn(e, o[1].trim()), s = mn(e, o[2].trim());
	return r == null || s == null ? null : Math.min(r, s);
};
var pc = (e, t, n) => {
	let o = t.clientWidth;
	if (!(o > 0)) return null;
	if (n) {
		let d = t.clientHeight;
		if (!(d > 0)) return null;
		let p = Math.min(o / e.width, d / e.height, 1);
		return !(p > 0) || Number.isNaN(p) ? null : {
			fitZoom: p,
			viewportHeight: null
		};
	}
	let r = Math.min(o / e.width, 1);
	if (!(r > 0) || Number.isNaN(r)) return null;
	let s = e.height * r, a = null, l = t;
	for (; l && a == null;) {
		let d = getComputedStyle(l);
		a = mc(l, d.maxHeight), l = l.parentElement;
	}
	let i = a != null ? Math.min(s, a) : s, c = Math.min(r, i / e.height, 1);
	return !(c > 0) || Number.isNaN(c) ? null : {
		fitZoom: c,
		viewportHeight: i
	};
};
var fs = ({ children: e, className: t, contentSize: n, fitKey: o, minZoom: r = .5, maxZoom: s = 3, zoomStep: a = .1, showControls: l = true, initialZoom: i = 1, isAutoFit: c = false, fullscreen: d = false }) => {
	let { RotateCcwIcon: p, ZoomInIcon: f, ZoomOutIcon: u } = O(), m = k(), g = B(), y = (0, import_react.useRef)(null), h = (0, import_react.useRef)(null), C = (0, import_react.useRef)(false), [b, v] = (0, import_react.useState)(i), [T, w] = (0, import_react.useState)(r), [R, j] = (0, import_react.useState)(i), [M, N] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), [D, V] = (0, import_react.useState)(false), [F, Q] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), [_, X] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), [W, re] = (0, import_react.useState)(null), $ = (0, import_react.useCallback)((P) => {
		let z = y.current;
		if (!z) return;
		let ye = pc(P, z, d);
		if (!ye) return;
		let { fitZoom: ce, viewportHeight: oe } = ye;
		re(oe), v(ce), w(Math.min(r, ce)), C.current || (j(ce), N({
			x: 0,
			y: 0
		}));
	}, [d, r]), K = (0, import_react.useCallback)((P) => {
		j((z) => Math.max(T, Math.min(s, z + P))), C.current = true;
	}, [T, s]), J = (0, import_react.useCallback)(() => {
		K(a);
	}, [K, a]), ee = (0, import_react.useCallback)(() => {
		K(-a);
	}, [K, a]), ne = (0, import_react.useCallback)(() => {
		j(b), N({
			x: 0,
			y: 0
		}), C.current = false;
	}, [b]), pe = (0, import_react.useCallback)((P) => {
		P.preventDefault();
		let z = P.deltaY > 0 ? -a : a;
		K(z);
	}, [K, a]), Re = (0, import_react.useCallback)((P) => {
		if (P.button !== 0 || P.isPrimary === false) return;
		V(true), C.current = true, Q({
			x: P.clientX,
			y: P.clientY
		}), X(M);
		let z = P.currentTarget;
		z instanceof HTMLElement && z.setPointerCapture(P.pointerId);
	}, [M]), fe = (0, import_react.useCallback)((P) => {
		if (!D) return;
		P.preventDefault();
		let z = P.clientX - F.x, ye = P.clientY - F.y;
		N({
			x: _.x + z,
			y: _.y + ye
		});
	}, [
		D,
		F,
		_
	]), le = (0, import_react.useCallback)((P) => {
		V(false);
		let z = P.currentTarget;
		z instanceof HTMLElement && z.releasePointerCapture(P.pointerId);
	}, []);
	(0, import_react.useEffect)(() => {
		w(r), c || (v(i), j(i), re(null));
	}, [
		i,
		c,
		r
	]), (0, import_react.useLayoutEffect)(() => {
		if (!(c && n)) return;
		$(n);
		let P = y.current;
		if (!P || typeof ResizeObserver == "undefined") return;
		let z = new ResizeObserver(() => {
			$(n);
		});
		return z.observe(P), () => {
			z.disconnect();
		};
	}, [
		$,
		n,
		c
	]), (0, import_react.useEffect)(() => {
		c && (C.current = false);
	}, [o, c]), (0, import_react.useEffect)(() => {
		let P = y.current;
		if (P) return P.addEventListener("wheel", pe, { passive: false }), () => {
			P.removeEventListener("wheel", pe);
		};
	}, [pe]), (0, import_react.useEffect)(() => {
		let P = h.current;
		if (P && D) return document.body.style.userSelect = "none", P.addEventListener("pointermove", fe, { passive: false }), P.addEventListener("pointerup", le), P.addEventListener("pointercancel", le), () => {
			document.body.style.userSelect = "", P.removeEventListener("pointermove", fe), P.removeEventListener("pointerup", le), P.removeEventListener("pointercancel", le);
		};
	}, [
		D,
		fe,
		le
	]);
	let fn = !d && c && W != null ? { height: W } : void 0;
	return (0, import_jsx_runtime.jsxs)("div", {
		className: m("relative flex flex-col", d ? "h-full w-full" : "min-h-28 w-full", t),
		ref: y,
		style: {
			cursor: D ? "grabbing" : "grab",
			...fn
		},
		children: [l ? (0, import_jsx_runtime.jsxs)("div", {
			className: m("absolute z-10 flex flex-col gap-1 rounded-md border border-border bg-background/80 p-1 supports-[backdrop-filter]:bg-background/70 supports-[backdrop-filter]:backdrop-blur-sm", d ? "start-4 bottom-4" : "start-2 bottom-2"),
			children: [
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": g.zoomIn,
					className: m("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
					disabled: R >= s,
					onClick: J,
					title: g.zoomIn,
					type: "button",
					children: (0, import_jsx_runtime.jsx)(f, {
						"aria-hidden": "true",
						size: 16
					})
				}),
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": g.zoomOut,
					className: m("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
					disabled: R <= T,
					onClick: ee,
					title: g.zoomOut,
					type: "button",
					children: (0, import_jsx_runtime.jsx)(u, {
						"aria-hidden": "true",
						size: 16
					})
				}),
				(0, import_jsx_runtime.jsx)("button", {
					"aria-label": g.resetView,
					className: m("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"),
					onClick: ne,
					title: g.resetView,
					type: "button",
					children: (0, import_jsx_runtime.jsx)(p, {
						"aria-hidden": "true",
						size: 16
					})
				})
			]
		}) : null, (0, import_jsx_runtime.jsx)("div", {
			className: m("flex h-full w-full flex-1 origin-center items-center justify-center transition-transform duration-150 ease-out"),
			onPointerDown: Re,
			ref: h,
			role: "application",
			style: {
				transform: `translate(${M.x}px, ${M.y}px) scale(${R})`,
				transformOrigin: "center center",
				touchAction: "none",
				willChange: "transform"
			},
			children: e
		})]
	});
};
var bc = (e, t) => new Promise((n) => {
	let o = setTimeout(n, e);
	t(() => {
		clearTimeout(o), n();
	});
});
var hc = async (e, { chart: t, config: n }, o, r) => {
	try {
		let s = e.getMermaid(n), a = t.split("").reduce((d, p) => (d << 5) - d + p.charCodeAt(0) | 0, 0), l = `mermaid-${Math.abs(a)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: i } = await s.render(l, t), c = qt(i);
		return {
			ok: !0,
			svg: o ? i : fo(i),
			size: c
		};
	} catch (s) {
		return {
			ok: false,
			error: s instanceof Error ? s.message : r,
			cause: s
		};
	}
};
var Co = ({ chart: e, className: t, config: n, fullscreen: o = false, showControls: r = true }) => {
	let s = k(), [a, l] = (0, import_react.useState)(null), [i, c] = (0, import_react.useState)(void 0), [d, p] = (0, import_react.useState)(false), [f, u] = (0, import_react.useState)(""), [m, g] = (0, import_react.useState)(null), y = B(), [h, C] = (0, import_react.useState)(""), [b, v] = (0, import_react.useState)(0), { mermaid: T } = (0, import_react.useContext)(S), w = Oe(), R = T == null ? void 0 : T.errorComponent, { shouldRender: j, containerRef: M } = xn({ immediate: o }), N = (0, import_react.useRef)(null), D = (0, import_react.useRef)(false), V = (0, import_react.useRef)(false), F = We(), Q = (0, import_react.useRef)(F), _ = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => (V.current = true, () => {
		var $;
		V.current = false, ($ = _.current) == null || $.call(_);
	}), []), (0, import_react.useEffect)(() => {
		var $;
		Q.current = F, F || ($ = _.current) == null || $.call(_);
	}, [F]);
	let X = async ($) => {
		Q.current && (await bc($, (K) => {
			_.current = K;
		}), _.current = null);
	};
	(0, import_react.useEffect)(() => {
		if (!j) return;
		if (!w) {
			l("Mermaid plugin not available. Please add the mermaid plugin to enable diagram rendering."), c(void 0);
			return;
		}
		if (N.current = {
			chart: e,
			config: n
		}, D.current) return;
		let $ = (J, ee) => {
			ee.ok ? (u(ee.svg), g(ee.size), C(ee.svg)) : J === N.current && !Q.current && (l(ee.error), c(ee.cause));
		};
		(async () => {
			D.current = true, l(null), c(void 0), p(true);
			try {
				let J = N.current;
				for (; J;) {
					let ee = performance_default.now(), ne = await hc(w, J, o, y.errorMermaid);
					if (!V.current || ($(J, ne), ne.ok && await X(performance_default.now() - ee), !V.current || J === N.current)) return;
					J = N.current;
				}
			} finally {
				D.current = false, V.current && p(false);
			}
		})();
	}, [
		e,
		n,
		b,
		j,
		w,
		F
	]);
	let W = f || h, re = (0, import_react.useMemo)(() => ({ __html: W }), [W]);
	if (!(j || f || h)) return (0, import_jsx_runtime.jsx)("div", {
		className: s("my-4 min-h-[200px]", t),
		ref: M
	});
	if ((d || F) && !f && !h) return (0, import_jsx_runtime.jsx)("div", {
		className: s("my-4 flex justify-center p-4", t),
		ref: M,
		children: (0, import_jsx_runtime.jsxs)("div", {
			className: s("flex items-center space-x-2 text-muted-foreground"),
			children: [(0, import_jsx_runtime.jsx)("div", { className: s("h-4 w-4 animate-spin rounded-full border-current border-b-2") }), (0, import_jsx_runtime.jsx)("span", {
				className: s("text-sm"),
				children: "Loading diagram..."
			})]
		})
	});
	if (a && !f && !h) {
		let $ = () => v((K) => K + 1);
		return R ? (0, import_jsx_runtime.jsx)("div", {
			ref: M,
			children: (0, import_jsx_runtime.jsx)(R, {
				cause: i,
				chart: e,
				error: a,
				retry: $
			})
		}) : (0, import_jsx_runtime.jsxs)("div", {
			className: s("rounded-md bg-red-50 p-4", t),
			ref: M,
			children: [(0, import_jsx_runtime.jsxs)("p", {
				className: s("font-mono text-red-700 text-sm"),
				children: ["Mermaid Error: ", a]
			}), (0, import_jsx_runtime.jsxs)("details", {
				className: s("mt-2"),
				children: [(0, import_jsx_runtime.jsx)("summary", {
					className: s("cursor-pointer text-red-600 text-xs"),
					children: "Show Code"
				}), (0, import_jsx_runtime.jsx)("pre", {
					className: s("mt-2 overflow-x-auto rounded bg-red-100 p-2 text-red-800 text-xs"),
					children: e
				})]
			})]
		});
	}
	return (0, import_jsx_runtime.jsx)("div", {
		className: s(o ? "size-full" : "max-h-[min(70vh,40rem)] w-full", t),
		"data-streamdown": "mermaid",
		ref: M,
		children: (0, import_jsx_runtime.jsx)(fs, {
			className: s(o ? "size-full overflow-hidden" : "max-h-[min(70vh,40rem)] overflow-hidden", t),
			contentSize: m,
			fitKey: e,
			fullscreen: o,
			isAutoFit: true,
			maxZoom: 3,
			minZoom: .1,
			showControls: r,
			zoomStep: .1,
			children: (0, import_jsx_runtime.jsx)("div", {
				"aria-label": y.mermaidAriaLabel,
				className: s("flex justify-center", o ? "size-full items-center" : null),
				dangerouslySetInnerHTML: re,
				role: "img"
			})
		})
	});
};
//#endregion
//#region node_modules/streamdown/dist/highlighted-body-PUFBAJJF.js
var T = ({ code: s, isIncomplete: l = false, language: e, maxHeight: d, raw: t, className: a, startLine: c$1, lineNumbers: p, ...f$1 }) => {
	let { shikiTheme: r } = (0, import_react.useContext)(S), o = ru(), [H, i] = (0, import_react.useState)(t);
	return (0, import_react.useEffect)(() => {
		if (!o) {
			i(t);
			return;
		}
		let n = true, u = o.highlight({
			code: s,
			isIncomplete: l,
			language: e,
			themes: r
		}, (B) => {
			n && i(B);
		});
		return u && i(u), () => {
			n = false;
		};
	}, [
		s,
		l,
		e,
		r,
		o,
		t
	]), (0, import_jsx_runtime.jsx)(Fn, {
		className: a,
		language: e,
		lineNumbers: p,
		maxHeight: d,
		result: H,
		startLine: c$1,
		...f$1
	});
};
//#endregion
export { twMerge as i, Co as n, ic as r, T as t };
