module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "2FK4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ actions["b" /* collapseMenu */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ actions["i" /* setLayout */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ actions["k" /* setSessionKey */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ actions["l" /* updateProfile */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ actions["g" /* setCandidate */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ selectCollapseMenu; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ selectSessionKey; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ selectUserProfile; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ hooks["a" /* useAppDispatch */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ hooks["b" /* useAppSelector */]; });

// UNUSED EXPORTS: collapseToggle, navContentLeave, navCollapseLeave, setDirection, clearSessionKey, setMessage, lockScreen, reducer, collapseMenuSelector, selectIsLocked, isLockedSelector, selectIsOpen, isOpenSelector, selectIsTrigger, isTriggerSelector, selectLayout, layoutSelector, selectDirection, directionSelector, selectMessage, messageSelector, selectRememberMe, remeberMeSelector, sessionKeySelector, userProfileSelector, selectCandidate, candidateSelector

// EXTERNAL MODULE: ./redux/actions/actions.ts + 1 modules
var actions = __webpack_require__("KJcM");

// EXTERNAL MODULE: ./redux/reducers/reducer.ts
var reducer = __webpack_require__("JU76");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// CONCATENATED MODULE: ./redux/selectors/selectors.ts

// CollapseMenu selector
const selectCollapseMenu = state => state.baseReducer.collapseMenu;
const collapseMenuSelector = Object(toolkit_["createSelector"])(selectCollapseMenu, state => state); // LockedScreen selector

const selectIsLocked = state => state.baseReducer.isLocked;
const isLockedSelector = Object(toolkit_["createSelector"])(selectIsLocked, state => state); // IsOpen Selector

const selectIsOpen = state => state.baseReducer.isOpen;
const isOpenSelector = Object(toolkit_["createSelector"])(selectIsOpen, state => state); // IsTrigger Selector

const selectIsTrigger = state => state.baseReducer.isTrigger;
const isTriggerSelector = Object(toolkit_["createSelector"])(selectIsTrigger, state => state); // Layout Selector

const selectLayout = state => state.baseReducer.layout;
const layoutSelector = Object(toolkit_["createSelector"])(selectLayout, state => state); // Direction Selector

const selectDirection = state => state.baseReducer.direction;
const directionSelector = Object(toolkit_["createSelector"])(selectDirection, state => state); // Message Selector

const selectMessage = state => state.baseReducer.message;
const messageSelector = Object(toolkit_["createSelector"])(selectMessage, state => state); // RememberMe Selector

const selectRememberMe = state => state.baseReducer.rememberMe;
const remeberMeSelector = Object(toolkit_["createSelector"])(selectRememberMe, state => state); // SessionKey Selector

const selectSessionKey = state => state.baseReducer.sessionKey;
const sessionKeySelector = Object(toolkit_["createSelector"])(selectSessionKey, state => state); // UserProfile Selector

const selectUserProfile = state => state.baseReducer.userProfile;
const userProfileSelector = Object(toolkit_["createSelector"])(selectUserProfile, state => state); // Candidate Selector

const selectCandidate = state => state.baseReducer.candidate;
const candidateSelector = Object(toolkit_["createSelector"])(selectCandidate, state => state);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__("We1U");

// CONCATENATED MODULE: ./redux/index.ts





/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BPf2");


/***/ }),

/***/ "7WL4":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "8uep":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/SuiButton/SuiButtonRoot.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @mui material components


/* harmony default export */ var SuiButtonRoot = (Object(styles_["styled"])(Button_default.a)(({
  theme,
  ownerState
}) => {
  const {
    palette,
    functions,
    borders
  } = theme;
  const {
    color,
    variant,
    size,
    circular,
    iconOnly
  } = ownerState;
  const {
    white,
    dark,
    text,
    transparent,
    gradients
  } = palette;
  const {
    boxShadow,
    linearGradient,
    pxToRem,
    rgba
  } = functions;
  const {
    borderRadius
  } = borders; // styles for the button with variant="contained"

  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main; // backgroundColor value when button is focused

    const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus; // boxShadow value

    const boxShadowValue = palette[color] ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5) : boxShadow([0, 0], [0, 3.2], dark.main, 0.5); // color value

    let colorValue = white.main;

    if (color === "white" || !palette[color]) {
      colorValue = text.main;
    } else if (color === "light") {
      colorValue = gradients.dark.state;
    } // color value when button is focused


    let focusedColorValue = white.main;

    if (color === "white") {
      focusedColorValue = text.main;
    } else if (color === "primary" || color === "error" || color === "dark") {
      focusedColorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      "&:hover": {
        backgroundColor: backgroundValue
      },
      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        boxShadow: boxShadowValue
      },
      "&:disabled": {
        backgroundColor: backgroundValue,
        color: focusedColorValue
      }
    };
  }; // styles for the button with variant="outlined"


  const outliedStyles = () => {
    // background color value
    const backgroundValue = color === "white" ? rgba(white.main, 0.1) : transparent.main; // color value

    const colorValue = palette[color] ? palette[color].main : white.main; // boxShadow value

    const boxShadowValue = palette[color] ? boxShadow([0, 0], [0, 3.2], palette[color].main, 0.5) : boxShadow([0, 0], [0, 3.2], white.main, 0.5); // border color value

    let borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);

    if (color === "white") {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,
      "&:hover": {
        background: transparent.main,
        borderColor: colorValue
      },
      "&:focus:not(:hover)": {
        background: transparent.main,
        boxShadow: boxShadowValue
      },
      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85
      },
      "&:disabled": {
        color: colorValue,
        borderColor: colorValue
      }
    };
  }; // styles for the button with variant="gradient"


  const gradientStyles = () => {
    // background value
    const backgroundValue = color === "white" || !gradients[color] ? white.main : linearGradient(gradients[color].main, gradients[color].state); // color value

    let colorValue = white.main;

    if (color === "white") {
      colorValue = text.main;
    } else if (color === "light") {
      colorValue = gradients.dark.state;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      "&:focus:not(:hover)": {
        boxShadow: "none"
      },
      "&:disabled": {
        background: backgroundValue,
        color: colorValue
      }
    };
  }; // styles for the button with variant="text"


  const textStyles = () => {
    // color value
    const colorValue = palette[color] ? palette[color].main : white.main; // color value when button is focused

    const focusedColorValue = palette[color] ? palette[color].focus : white.focus;
    return {
      color: colorValue,
      "&:hover": {
        color: focusedColorValue
      },
      "&:focus:not(:hover)": {
        color: focusedColorValue
      }
    };
  }; // styles for the button with circular={true}


  const circularStyles = () => ({
    borderRadius: borderRadius.section
  }); // styles for the button with iconOnly={true}


  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    } // padding value


    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
      "& .material-icons": {
        marginTop: 0
      },
      "&:hover, &:focus, &:active": {
        transform: "none"
      }
    };
  };

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, variant === "contained" && containedStyles()), variant === "outlined" && outliedStyles()), variant === "gradient" && gradientStyles()), variant === "text" && textStyles()), circular && circularStyles()), iconOnly && iconOnlyStyles());
}));
// CONCATENATED MODULE: ./components/SuiButton/index.js


function SuiButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SuiButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SuiButton_ownKeys(Object(source), true).forEach(function (key) { SuiButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SuiButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SuiButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // prop-types is a library for typechecking of props

 // Custom styles for SuiButton


const SuiButton = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    color,
    variant,
    size,
    circular,
    iconOnly,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "variant", "size", "circular", "iconOnly", "children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuiButtonRoot, SuiButton_objectSpread(SuiButton_objectSpread({}, rest), {}, {
    ref: ref,
    color: "primary",
    variant: variant === "gradient" ? "contained" : variant,
    size: size,
    ownerState: {
      color,
      variant,
      size,
      circular,
      iconOnly
    },
    children: children
  }));
}); // Setting default values for the props of SuiButton

SuiButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false
}; // Typechecking props for the SuiButton

SuiButton.propTypes = {
  size: external_prop_types_default.a.oneOf(["small", "medium", "large"]),
  variant: external_prop_types_default.a.oneOf(["text", "contained", "outlined", "gradient"]),
  color: external_prop_types_default.a.oneOf(["white", "primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  circular: external_prop_types_default.a.bool,
  iconOnly: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node.isRequired
};
/* harmony default export */ var components_SuiButton = __webpack_exports__["a"] = (SuiButton);

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "BAEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTranslation; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b87j");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dictionary__WEBPACK_IMPORTED_MODULE_1__);


const useTranslation = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const locales = (router === null || router === void 0 ? void 0 : router.locales) || [];
  const defaultLocale = (router === null || router === void 0 ? void 0 : router.defaultLocale) || 'ar';
  const nextRouter = router;
  const locale = locales.includes(nextRouter.locale || '') ? nextRouter.locale : defaultLocale;

  const translateOrTerm = term => {
    const translation = _dictionary__WEBPACK_IMPORTED_MODULE_1___default.a[locale][term];
    return Boolean(translation) ? translation : term;
  };

  return {
    translate: (term, param = null, translateParam = true) => {
      let toBeReturned = translateOrTerm(term);

      if (param) {
        let toBeReplaced = translateParam ? translateOrTerm(param) : param;
        toBeReturned = toBeReturned.replace('{0}', toBeReplaced);
      }

      return toBeReturned;
    }
  };
};

/***/ }),

/***/ "BPf2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/SuiBox/SuiBoxRoot.js


/* harmony default export */ var SuiBoxRoot = (Object(styles_["styled"])(Box_default.a)(({
  theme,
  ownerState
}) => {
  // console.clear();
  // console.log(theme);
  // console.log(ownerState);
  const {
    palette,
    functions,
    borders,
    boxShadows
  } = theme;
  const {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow
  } = ownerState;
  const {
    gradients,
    grey,
    white
  } = palette;
  const {
    linearGradient
  } = functions;
  const {
    borderRadius: radius
  } = borders;
  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900]
  };
  const validGradients = ["primary", "secondary", "info", "success", "warning", "error", "dark", "light"];
  const validColors = ["transparent", "white", "black", "primary", "secondary", "info", "success", "warning", "error", "light", "dark", "text", "grey-100", "grey-200", "grey-300", "grey-400", "grey-500", "grey-600", "grey-700", "grey-800", "grey-900"];
  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"]; // background value

  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.find(el => el === bgColor) ? linearGradient(gradients[bgColor].main, gradients[bgColor].state) : white.main;
  } else if (validColors.find(el => el === bgColor)) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  } // color value


  let colorValue = color;

  if (validColors.find(el => el === color)) {
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  } // borderRadius value


  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find(el => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  } // boxShadow value


  let boxShadowValue = boxShadows;

  if (validBoxShadows.find(el => el === shadow)) {
    boxShadowValue = boxShadows[shadow];
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue
  };
}));
// CONCATENATED MODULE: ./components/SuiBox/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // prop-types is a library for typechecking of props

 // Custom styles for SuiBox


const SuiBox = /*#__PURE__*/Object(external_react_["forwardRef"])((_ref, ref) => {
  let {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant", "bgColor", "color", "opacity", "borderRadius", "shadow"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuiBoxRoot, _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    ownerState: {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow
    }
  }));
}); // Setting default values for the props of SuiBox

SuiBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none"
}; // Typechecking props for the SuiBox

SuiBox.propTypes = {
  variant: external_prop_types_default.a.oneOf(["contained", "gradient"]),
  bgColor: external_prop_types_default.a.string,
  color: external_prop_types_default.a.string,
  opacity: external_prop_types_default.a.number,
  borderRadius: external_prop_types_default.a.string,
  shadow: external_prop_types_default.a.string
};
/* harmony default export */ var components_SuiBox = (SuiBox);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__("We1U");

// EXTERNAL MODULE: ./redux/index.ts + 1 modules
var redux = __webpack_require__("2FK4");

// CONCATENATED MODULE: ./components/PageLayout/index.js

 // prop-types is a library for typechecking of props.

// Soft UI Dashboard React components

 // Soft UI Dashboard React context




function PageLayout({
  background,
  children
}) {
  const dispatch = Object(hooks["a" /* useAppDispatch */])();
  const router = Object(router_["useRouter"])();
  const {
    pathname
  } = router.pathname;
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(redux["f" /* setLayout */])("page"));
  }, [pathname]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SuiBox, {
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
    bgColor: background,
    sx: {
      overflowX: "hidden"
    },
    children: children
  });
} // Setting default values for the props for PageLayout


PageLayout.defaultProps = {
  background: "default"
}; // Typechecking props for the PageLayout

/* harmony default export */ var components_PageLayout = (PageLayout);
// CONCATENATED MODULE: ./components/CoverLayout/index.js



// prop-types is a library for typechecking of props
// @mui material components
 // Soft UI Dashboard React components

 // Soft UI Dashboard React examples




function CoverLayout({
  color,
  header,
  title,
  description,
  image,
  top,
  children
}) {
  const {
    locale
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PageLayout, {
    background: "white",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
      container: true,
      style: {
        justifyContent: "center",
        direction: locale === 'ar' ? 'rtl' : 'ltr'
      },
      sx: {
        minHeight: "75vh",
        margin: 0
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        item: true,
        xs: 11,
        sm: 8,
        md: 5,
        xl: 3,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          mt: top,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
            pt: 3,
            px: 3,
            children: !header ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
                mb: 1,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  variant: "h3",
                  fontWeight: "bold",
                  color: color,
                  textGradient: true,
                  children: title
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                variant: "body2",
                fontWeight: "regular",
                color: "text",
                children: description
              })]
            }) : header
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
            p: 3,
            children: children
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        item: true,
        xs: 12,
        md: 5,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
          height: "100%",
          display: {
            xs: "none",
            md: "block"
          },
          position: "relative" // right={{ md: "-12rem", xl: "-16rem" }}
          ,
          left: {
            md: "-15rem",
            xl: "-20rem"
          },
          mr: -16,
          sx: {
            transform: `skewX(${locale === 'ar' ? '+' : '-'}10deg)`,
            overflow: "hidden",
            borderBottomLeftRadius: ({
              borders: {
                borderRadius
              }
            }) => borderRadius.lg
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
            ml: -8,
            height: "100%",
            sx: {
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              transform: locale === 'ar' ? "skewX(0deg)" : "skewX(10deg)"
            }
          })
        })
      })]
    })
  });
} // Setting default values for the props of CoverLayout


CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20
}; // Typechecking props for the CoverLayout

/* harmony default export */ var components_CoverLayout = (CoverLayout);
// EXTERNAL MODULE: ./components/SuiButton/index.js + 1 modules
var SuiButton = __webpack_require__("8uep");

// EXTERNAL MODULE: ./assets/css/main.css
var main = __webpack_require__("Qnqu");

// EXTERNAL MODULE: ./Services/ApiClient.tsx
var ApiClient = __webpack_require__("iMaL");

// CONCATENATED MODULE: ./Services/LoginService.tsx

class LoginService_LoginService {
  static async Login(payload) {
    const _url = "/login";
    return await ApiClient["a" /* default */].post(_url, payload).then(response => {
      var _response$data;

      if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
        let result = response.data;
        return result;
      } else {
        var _response$error;

        return (_response$error = response.error) === null || _response$error === void 0 ? void 0 : _response$error.message;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async GetYears() {
    return await ApiClient["a" /* default */].get("/StudentAffairs/GetYears").then(response => {
      if (response.data.success) {
        let result = response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

}
// EXTERNAL MODULE: ./Utility/Translations/useTranslation.js
var useTranslation = __webpack_require__("BAEn");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./pages/authentication/sign-in/index.tsx





 // Authentication layout components









 // Images

const bg7 = __webpack_require__("qy/J");

function SignIn(props) {
  const {
    translate
  } = Object(useTranslation["a" /* useTranslation */])();
  const {
    locale
  } = Object(router_["useRouter"])();
  const dispatch = Object(redux["i" /* useAppDispatch */])();
  const {
    0: rememberMe,
    1: setRememberMe
  } = Object(external_react_["useState"])(true);
  const {
    0: _currentSessionKey,
    1: setCurrentSessionKey
  } = Object(external_react_["useState"])("");
  const sessionKey = Object(redux["j" /* useAppSelector */])(redux["c" /* selectSessionKey */]);
  const userProfile = Object(redux["j" /* useAppSelector */])(redux["d" /* selectUserProfile */]);
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  const {
    0: isLoading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: years,
    1: setYears
  } = Object(external_react_["useState"])([]);
  const {
    0: selectedYear,
    1: setSelectedYear
  } = Object(external_react_["useState"])("");
  const initialValues = {
    username: "",
    // email: "",
    password: "",
    rememberMe: false
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const router = Object(router_["useRouter"])();

  async function fetchApi() {
    let data = await LoginService_LoginService.GetYears();
    return data;
  }

  const handleChangeYear = event => {
    setSelectedYear(event.target.value);
  };

  Object(external_react_["useEffect"])(() => {
    setLoading(true);
  }, []);
  const SignInSchema = external_yup_["object"]().shape({
    username: external_yup_["string"]().required(translate("{0} is required", "Username")),
    // .required("Email is required"),
    // email: Yup.string()
    //   .email("Must be a valid email")
    //   .required("Email is required"),
    password: external_yup_["string"]().required(translate("{0} is required", "Password")).min(4, translate("Password is too short - should be {0} chars minimum", "4", false))
  });

  const submitForm = async (values, setSubmitting) => {
    LoginService_LoginService.Login({
      email: values.username,
      password: values.password
    }).then(response => {
      if (response.success) {
        localStorage.setItem("sa_access_token", response.result.token);
        localStorage.setItem("logged_in_profile", JSON.stringify(response.result));
        dispatch(Object(redux["h" /* updateProfile */])(response.result));
        dispatch(Object(redux["g" /* setSessionKey */])(response.result.token));
        router.push("/students_affairs/dashboard");
      } else {
        external_react_toastify_["toast"].error(response);
        setSubmitting(false);
      }
    }).catch(e => {
      throw new Error(e);
    });
  };

  return !sessionKey && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CoverLayout, {
    title: translate("Welcome"),
    description: translate("Enter your credentials to sign in"),
    image: bg7,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
        initialValues: initialValues,
        validationSchema: SignInSchema,
        onSubmit: (values, {
          setSubmitting
        }) => {
          submitForm(values, setSubmitting);
        },
        children: formik => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isSubmitting,
            isValid,
            dirty
          } = formik;
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
            children: [!isLoading && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
              mb: 2,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
                mb: 1,
                ml: 0.5,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  component: "label",
                  variant: "caption",
                  children: "Year"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Select"], {
                labelId: "demo-simple-select-label",
                id: "demo-simple-select",
                value: selectedYear,
                label: "Year",
                onChange: handleChangeYear,
                children: years.map((item, ind) => {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["MenuItem"], {
                    value: item.id,
                    children: item.year
                  });
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
              mb: 2,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
                mb: 1,
                ml: 0.5,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  component: "label",
                  variant: "caption",
                  children: translate("Username")
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                onChange: handleChange,
                variant: "outlined",
                size: "small",
                type: "text",
                id: "username",
                name: "username",
                value: values.username,
                onBlur: handleBlur,
                error: Boolean(touched.username && errors.username),
                helperText: touched.username && errors.username,
                placeholder: translate("Username"),
                fullWidth: true
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
              mb: 2,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
                mb: 1,
                ml: 0.5,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                  component: "label",
                  variant: "caption",
                  children: translate("Password")
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                id: "password",
                name: "password",
                type: "password",
                variant: "outlined",
                size: "small",
                placeholder: translate("Password"),
                onChange: handleChange,
                onBlur: handleBlur,
                error: Boolean(errors.password && touched.password),
                helperText: touched.password && errors.password,
                fullWidth: true
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Switch"], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
                variant: "button",
                style: {
                  fontWeight: "regular",
                  cursor: "pointer",
                  userSelect: "none"
                } // onClick={handleSetRememberMe}
                // sx={{ cursor: "pointer", userSelect: "none" }}
                ,
                children: ["\xA0\xA0", translate("Remember me")]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Box"], {
              mt: 4,
              mb: 1,
              children: isSubmitting ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuiButton["a" /* default */], {
                disabled: true,
                variant: "gradient",
                color: "info",
                fullWidth: true,
                children: translate("Signing in...")
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(SuiButton["a" /* default */], {
                disabled: !(dirty && isValid),
                type: "submit",
                variant: "gradient",
                color: "info",
                fullWidth: true,
                children: translate("Sign in")
              })
            })]
          });
        }
      })
    })
  });
}

/* harmony default export */ var sign_in = __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "JU76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KJcM");


const initialState = {
  isOpen: [],
  //for active default menu
  isTrigger: [],
  //for active default menu, set blank for horizontal
  collapseMenu: false,
  isLocked: false,
  // Lock all screens for protection against abuse
  // ...config,
  rememberMe: false,
  //
  sessionKey: "",
  userProfile: null,
  layout: "page",
  direction: "ltr",
  message: {
    Content: "",
    Type: 0
  },
  // 0 is confirmation 1 is error 2 is warning
  candidate: null
};
const reducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, builder => {
  builder.addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* setSessionKey */ "k"], (state, action) => {
    state.sessionKey = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* clearSessionKey */ "a"], state => {
    state.sessionKey = "", state.rememberMe = false;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* setMessage */ "j"], (state, action) => {
    state.message = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* updateProfile */ "l"], (state, action) => {
    state.userProfile = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* collapseMenu */ "b"], (state, action) => {
    state.collapseMenu = !action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* collapseToggle */ "c"], (state, action) => {
    let trigger = [];
    let open = [];

    if (action.payload.menu.type === "sub") {
      open = state.isOpen;
      trigger = state.isTrigger;
      const triggerIndex = trigger.indexOf(action.payload.menu.id);

      if (triggerIndex > -1) {
        open = open.filter(item => item !== action.payload.menu.id);
        trigger = trigger.filter(item => item !== action.payload.menu.id);
      }

      if (triggerIndex === -1) {
        open = [...open, action.payload.menu.id];
        trigger = [...trigger, action.payload.menu.id];
      }
    } else {
      open = state.isOpen;
      const triggerIndex = state.isTrigger.indexOf(action.payload.menu.id);
      trigger = triggerIndex === -1 ? [action.payload.menu.id] : [];
      open = triggerIndex === -1 ? [action.payload.menu.id] : [];
    }

    state.isOpen = open;
    state.isTrigger = trigger;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* navContentLeave */ "f"], (state, action) => {
    let trigger = [];
    let open = [];
    state.isOpen = open;
    state.isTrigger = trigger;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* navCollapseLeave */ "e"], (state, action) => {
    let trigger = [];
    let open = [];

    if (action.payload.menu.type === "sub") {
      open = state.isOpen;
      trigger = state.isTrigger;
      const triggerIndex = trigger.indexOf(action.payload.menu.id);

      if (triggerIndex > -1) {
        open = open.filter(item => item !== action.payload.menu.id);
        trigger = trigger.filter(item => item !== action.payload.menu.id);
      }

      state.isOpen = open;
      state.isTrigger = trigger;
    }
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* setLayout */ "i"], (state, action) => {
    state.layout = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* lockScreen */ "d"], (state, action) => {
    state.isLocked = action.payload && !action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* setDirection */ "h"], (state, action) => {
    state.direction = action.payload;
  }).addCase(_actions_actions__WEBPACK_IMPORTED_MODULE_1__[/* setCandidate */ "g"], (state, action) => {
    state.candidate = action.payload;
  });
});

/***/ }),

/***/ "KJcM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ collapseMenu; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ collapseToggle; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ navContentLeave; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ navCollapseLeave; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ setLayout; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ setDirection; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ setSessionKey; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ clearSessionKey; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ setMessage; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ updateProfile; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ lockScreen; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ setCandidate; });

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// CONCATENATED MODULE: ./redux/types.js
const SET_USER_NAME = "SET_USER_NAME";
const SET_SESSION_KEY = "SET_SESSION_KEY";
const SET_LAYOUT = "SET_LAYOUT";
const SET_DIRECTION = "SET_DIRECTION";
const CLEAR_SESSION_KEY = "CLEAR_SESSION_KEY";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const COLLAPSE_MENU = "COLLAPSE_MENU";
const COLLAPSE_TOGGLE = "COLLAPSE_TOGGLE";
const NAV_CONTENT_LEAVE = "NAV_CONTENT_LEAVE";
const NAV_COLLAPSE_LEAVE = "NAV_COLLAPSE_LEAVE";
const SET_MESSAGE = "SET_MESSAGE";
const LOCK_SCREEN = "LOCK_SCREEN";
const SELECT_CANDIDATE = "SELECT_CANDIDATE";
// CONCATENATED MODULE: ./redux/actions/actions.ts


const collapseMenu = Object(toolkit_["createAction"])(COLLAPSE_MENU);
const collapseToggle = Object(toolkit_["createAction"])(COLLAPSE_TOGGLE);
const navContentLeave = Object(toolkit_["createAction"])(NAV_CONTENT_LEAVE);
const navCollapseLeave = Object(toolkit_["createAction"])(NAV_COLLAPSE_LEAVE);
const setLayout = Object(toolkit_["createAction"])(SET_LAYOUT);
const setDirection = Object(toolkit_["createAction"])(SET_DIRECTION);
const setSessionKey = Object(toolkit_["createAction"])(SET_SESSION_KEY);
const clearSessionKey = Object(toolkit_["createAction"])(CLEAR_SESSION_KEY);
const setMessage = Object(toolkit_["createAction"])(SET_MESSAGE);
const updateProfile = Object(toolkit_["createAction"])(UPDATE_PROFILE);
const lockScreen = Object(toolkit_["createAction"])(LOCK_SCREEN);
const setCandidate = Object(toolkit_["createAction"])(SELECT_CANDIDATE);

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Qnqu":
/***/ (function(module, exports) {



/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "We1U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "b87j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ar = _interopRequireDefault(__webpack_require__("pDG+"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ar: _ar.default,
  en: {}
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iMaL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7WL4");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);



const configs = {
  baseURL: `${"http://teststudent.hiast.edu.sy/backend/public"}/api`,
  httpsAgent: new https__WEBPACK_IMPORTED_MODULE_1___default.a.Agent({
    rejectUnauthorized: false
  })
};
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(configs);
instance.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8"; // instance.defaults.timeout = 2500;

instance.interceptors.response.use(response => {
  if (!response.data.success) {
    let result = response.data;
    return result;
  }

  return response;
}, error => {
  console.error(error);

  if (error.response.status === 401) {
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])("You're unauthorized to do this!", {
      type: "error"
    });
  } else if (error.response.status === 403) {
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])("Session expired! Please login again.", {
      type: "error"
    });
  } else {
    if (!error.response.data.success) {
      let result = error.response.data;
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])(result.error.message, {
        type: "error"
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pDG+":
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

/***/ }),

/***/ "qy/J":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/HIAST-1945f55df2b393de49a57c6bab5b5395.jpg";

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });