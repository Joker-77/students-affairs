module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fkQ1");


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

/***/ "2zww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardHeader; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-dashboard.js
var nextjs_material_dashboard = __webpack_require__("jfJP");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cardHeaderStyle = {
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: nextjs_material_dashboard["E" /* whiteColor */]
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["C" /* warningCardHeader */])
  },
  successCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["x" /* successCardHeader */])
  },
  dangerCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["e" /* dangerCardHeader */])
  },
  infoCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["o" /* infoCardHeader */])
  },
  primaryCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["r" /* primaryCardHeader */])
  },
  roseCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["u" /* roseCardHeader */])
  },
  darkCardHeader: {
    color: nextjs_material_dashboard["E" /* whiteColor */],
    "&:not($cardHeaderIcon)": _objectSpread({}, nextjs_material_dashboard["g" /* darkCardHeader */])
  }
};
/* harmony default export */ var components_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./components/Card/CardHeader.js


function CardHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardHeader_ownKeys(Object(source), true).forEach(function (key) { CardHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


function CardHeader(props) {
  const useStyles = Object(styles_["makeStyles"])(components_cardHeaderStyle);
  const classes = useStyles();

  const {
    className,
    children,
    color,
    plain,
    stats,
    icon
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "stats", "icon"]);

  const cardHeaderClasses = external_classnames_default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", CardHeader_objectSpread(CardHeader_objectSpread({
    className: cardHeaderClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



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

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/nextjs-material-dashboard.js
var nextjs_material_dashboard = __webpack_require__("jfJP");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-dashboard/components/cardStyle.js

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(nextjs_material_dashboard["m" /* hexToRgb */])(nextjs_material_dashboard["a" /* blackColor */]) + ", 0.87)",
    background: nextjs_material_dashboard["E" /* whiteColor */],
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + Object(nextjs_material_dashboard["m" /* hexToRgb */])(nextjs_material_dashboard["a" /* blackColor */]) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};
/* harmony default export */ var components_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


function Card(props) {
  const useStyles = Object(styles_["makeStyles"])(components_cardStyle);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile,
    chart
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "chart"]);

  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "B2g9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SuiButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8uep");
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BAEn");








const PersonInfoPartialForm = ({
  title,
  formik,
  disabled,
  isGray,
  prefix
}) => {
  var _values$prefix, _touched$prefix, _errors$prefix, _touched$prefix2, _errors$prefix2, _values$prefix2, _touched$prefix3, _errors$prefix3, _touched$prefix4, _errors$prefix4, _values$father, _touched$father, _errors$father, _touched$father2, _errors$father2, _values$mother, _touched$mother, _errors$mother, _touched$mother2, _errors$mother2, _values$prefix3, _values$prefix4, _touched$prefix5, _errors$prefix5, _touched$prefix6, _errors$prefix6, _values$prefix5, _touched$prefix7, _errors$prefix7, _touched$prefix8, _errors$prefix8, _values$prefix6, _touched$prefix9, _errors$prefix9, _touched$prefix10, _errors$prefix10, _values$prefix7, _touched$prefix11, _errors$prefix11, _touched$prefix12, _errors$prefix12, _values$prefix8, _touched$prefix13, _errors$prefix13, _touched$prefix14, _errors$prefix14;

  const {
    translate
  } = Object(_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_5__[/* useTranslation */ "a"])();
  const style = {
    bgcolor: isGray ? "#d3d3d326" : "background.paper",
    padding: "15px",
    boxShadow: 24,
    borderRadius: "20px",
    marginVertically: "15px"
  };
  const sexs = [{
    id: "male",
    value: translate("Male")
  }, {
    id: "female",
    value: translate("Female")
  }];
  const phoneTypes = [{
    id: "personal",
    value: translate("Personal")
  }, {
    id: "family",
    value: translate("Family")
  }];
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur
  } = formik;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: style,
    mb: 2,
    children: [!!title && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mb: 2,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        component: "label",
        variant: "caption",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
          children: title
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("First name")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.first_name`,
            name: `${prefix}.first_name`,
            value: (_values$prefix = values[prefix]) === null || _values$prefix === void 0 ? void 0 : _values$prefix.first_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix = touched[prefix]) === null || _touched$prefix === void 0 ? void 0 : _touched$prefix.first_name) && ((_errors$prefix = errors[prefix]) === null || _errors$prefix === void 0 ? void 0 : _errors$prefix.first_name)),
            helperText: ((_touched$prefix2 = touched[prefix]) === null || _touched$prefix2 === void 0 ? void 0 : _touched$prefix2.first_name) && ((_errors$prefix2 = errors[prefix]) === null || _errors$prefix2 === void 0 ? void 0 : _errors$prefix2.first_name),
            placeholder: translate("First name"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Last name")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.last_name`,
            name: `${prefix}.last_name`,
            value: (_values$prefix2 = values[prefix]) === null || _values$prefix2 === void 0 ? void 0 : _values$prefix2.last_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix3 = touched[prefix]) === null || _touched$prefix3 === void 0 ? void 0 : _touched$prefix3.last_name) && ((_errors$prefix3 = errors[prefix]) === null || _errors$prefix3 === void 0 ? void 0 : _errors$prefix3.last_name)),
            helperText: ((_touched$prefix4 = touched[prefix]) === null || _touched$prefix4 === void 0 ? void 0 : _touched$prefix4.last_name) && ((_errors$prefix4 = errors[prefix]) === null || _errors$prefix4 === void 0 ? void 0 : _errors$prefix4.last_name),
            placeholder: translate("Last name"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Father")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `father.first_name`,
            name: `father.first_name`,
            value: (_values$father = values.father) === null || _values$father === void 0 ? void 0 : _values$father.first_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$father = touched.father) === null || _touched$father === void 0 ? void 0 : _touched$father.first_name) && ((_errors$father = errors.father) === null || _errors$father === void 0 ? void 0 : _errors$father.first_name)),
            helperText: ((_touched$father2 = touched.father) === null || _touched$father2 === void 0 ? void 0 : _touched$father2.first_name) && ((_errors$father2 = errors.father) === null || _errors$father2 === void 0 ? void 0 : _errors$father2.first_name),
            placeholder: translate("Father"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Mother")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `mother.first_name`,
            name: `mother.first_name`,
            value: (_values$mother = values.mother) === null || _values$mother === void 0 ? void 0 : _values$mother.first_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$mother = touched.mother) === null || _touched$mother === void 0 ? void 0 : _touched$mother.first_name) && ((_errors$mother = errors.mother) === null || _errors$mother === void 0 ? void 0 : _errors$mother.first_name)),
            helperText: ((_touched$mother2 = touched.mother) === null || _touched$mother2 === void 0 ? void 0 : _touched$mother2.first_name) && ((_errors$mother2 = errors.mother) === null || _errors$mother2 === void 0 ? void 0 : _errors$mother2.first_name),
            placeholder: translate("Mother"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Registeration number")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: "registeration_number",
            name: "registeration_number",
            value: values.registeration_number,
            onBlur: handleBlur,
            error: Boolean(touched.registeration_number && errors.registeration_number),
            helperText: touched.registeration_number && errors.registeration_number,
            placeholder: translate("Registeration number"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        style: prefix != "person" ? {
          display: "none"
        } : {},
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Gender")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            variant: "outlined",
            size: "small",
            type: "select",
            id: `${prefix}.sex`,
            name: `${prefix}.sex`,
            select: true,
            value: (_values$prefix3 = values[prefix]) === null || _values$prefix3 === void 0 ? void 0 : _values$prefix3.sex,
            onChange: handleChange(`${prefix}.sex`),
            onBlur: handleBlur,
            placeholder: translate("Gender"),
            fullWidth: true,
            children: sexs.map(sex => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
              value: sex.id,
              children: sex.value
            }, sex.id))
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Nationality")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.nationality`,
            name: `${prefix}.nationality`,
            value: (_values$prefix4 = values[prefix]) === null || _values$prefix4 === void 0 ? void 0 : _values$prefix4.nationality,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix5 = touched[prefix]) === null || _touched$prefix5 === void 0 ? void 0 : _touched$prefix5.nationality) && ((_errors$prefix5 = errors[prefix]) === null || _errors$prefix5 === void 0 ? void 0 : _errors$prefix5.nationality)),
            helperText: ((_touched$prefix6 = touched[prefix]) === null || _touched$prefix6 === void 0 ? void 0 : _touched$prefix6.nationality) && ((_errors$prefix6 = errors[prefix]) === null || _errors$prefix6 === void 0 ? void 0 : _errors$prefix6.nationality),
            placeholder: translate("Nationality"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("National number")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.national_number`,
            name: `${prefix}.national_number`,
            value: (_values$prefix5 = values[prefix]) === null || _values$prefix5 === void 0 ? void 0 : _values$prefix5.national_number,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix7 = touched[prefix]) === null || _touched$prefix7 === void 0 ? void 0 : _touched$prefix7.national_number) && ((_errors$prefix7 = errors[prefix]) === null || _errors$prefix7 === void 0 ? void 0 : _errors$prefix7.national_number)),
            helperText: ((_touched$prefix8 = touched[prefix]) === null || _touched$prefix8 === void 0 ? void 0 : _touched$prefix8.national_number) && ((_errors$prefix8 = errors[prefix]) === null || _errors$prefix8 === void 0 ? void 0 : _errors$prefix8.national_number),
            placeholder: translate("National number"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Passport First Name")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.passport_first_name`,
            name: `${prefix}.passport_first_name`,
            value: (_values$prefix6 = values[prefix]) === null || _values$prefix6 === void 0 ? void 0 : _values$prefix6.passport_first_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix9 = touched[prefix]) === null || _touched$prefix9 === void 0 ? void 0 : _touched$prefix9.passport_first_name) && ((_errors$prefix9 = errors[prefix]) === null || _errors$prefix9 === void 0 ? void 0 : _errors$prefix9.passport_first_name)),
            helperText: ((_touched$prefix10 = touched[prefix]) === null || _touched$prefix10 === void 0 ? void 0 : _touched$prefix10.passport_first_name) && ((_errors$prefix10 = errors[prefix]) === null || _errors$prefix10 === void 0 ? void 0 : _errors$prefix10.passport_first_name),
            placeholder: translate("Passport First Name"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Passport Last Name")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.passport_last_name`,
            name: `${prefix}.passport_last_name`,
            value: (_values$prefix7 = values[prefix]) === null || _values$prefix7 === void 0 ? void 0 : _values$prefix7.passport_last_name,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix11 = touched[prefix]) === null || _touched$prefix11 === void 0 ? void 0 : _touched$prefix11.passport_last_name) && ((_errors$prefix11 = errors[prefix]) === null || _errors$prefix11 === void 0 ? void 0 : _errors$prefix11.passport_last_name)),
            helperText: ((_touched$prefix12 = touched[prefix]) === null || _touched$prefix12 === void 0 ? void 0 : _touched$prefix12.passport_last_name) && ((_errors$prefix12 = errors[prefix]) === null || _errors$prefix12 === void 0 ? void 0 : _errors$prefix12.passport_last_name),
            placeholder: translate("Passport Last Name"),
            fullWidth: true
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          mb: 2,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mb: 1,
            ml: 0.5,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              component: "label",
              variant: "caption",
              children: translate("Passport Number")
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            disabled: disabled,
            onChange: handleChange,
            variant: "outlined",
            size: "small",
            type: "text",
            id: `${prefix}.passport_number`,
            name: `${prefix}.passport_number`,
            value: (_values$prefix8 = values[prefix]) === null || _values$prefix8 === void 0 ? void 0 : _values$prefix8.passport_number,
            onBlur: handleBlur,
            error: Boolean(((_touched$prefix13 = touched[prefix]) === null || _touched$prefix13 === void 0 ? void 0 : _touched$prefix13.passport_number) && ((_errors$prefix13 = errors[prefix]) === null || _errors$prefix13 === void 0 ? void 0 : _errors$prefix13.passport_number)),
            helperText: ((_touched$prefix14 = touched[prefix]) === null || _touched$prefix14 === void 0 ? void 0 : _touched$prefix14.passport_number) && ((_errors$prefix14 = errors[prefix]) === null || _errors$prefix14 === void 0 ? void 0 : _errors$prefix14.passport_number),
            placeholder: translate("Passport Number"),
            fullWidth: true
          })]
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mb: 2,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        mb: 1,
        ml: 0.5,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          component: "label",
          variant: "caption",
          children: translate("Phones")
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
        name: `${prefix}.phones`,
        render: arrayHelpers => {
          var _values$prefix9, _values$prefix10, _values$prefix11;

          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            children: (_values$prefix9 = values[prefix]) !== null && _values$prefix9 !== void 0 && _values$prefix9.phones && ((_values$prefix10 = values[prefix]) === null || _values$prefix10 === void 0 ? void 0 : _values$prefix10.phones.length) > 0 ? (_values$prefix11 = values[prefix]) === null || _values$prefix11 === void 0 ? void 0 : _values$prefix11.phones.map((phone, index) => {
              var _touched$prefix15, _errors$prefix15, _touched$prefix16, _errors$prefix16;

              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
                  container: true,
                  spacing: 2,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                      disabled: disabled,
                      onChange: handleChange(`${prefix}.phones.${index}.phone`),
                      variant: "outlined",
                      size: "small",
                      type: "text",
                      id: `${prefix}.phones.${index}.phone`,
                      name: `${prefix}.phones.${index}.phone`,
                      value: phone.phone,
                      onBlur: handleBlur,
                      error: Boolean(((_touched$prefix15 = touched[prefix]) === null || _touched$prefix15 === void 0 ? void 0 : _touched$prefix15.phones) && ((_errors$prefix15 = errors[prefix]) === null || _errors$prefix15 === void 0 ? void 0 : _errors$prefix15.phones)),
                      helperText: ((_touched$prefix16 = touched[prefix]) === null || _touched$prefix16 === void 0 ? void 0 : _touched$prefix16.phones) && ((_errors$prefix16 = errors[prefix]) === null || _errors$prefix16 === void 0 ? void 0 : _errors$prefix16.phones),
                      placeholder: translate("Phone") //fullWidth

                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                      disabled: disabled,
                      variant: "outlined",
                      size: "small",
                      type: "select",
                      id: `${prefix}.phones.${index}.type`,
                      name: `${prefix}.phones.${index}.type`,
                      select: true,
                      value: phone.type,
                      onChange: handleChange(`${prefix}.phones.${index}.type`),
                      onBlur: handleBlur,
                      placeholder: "Phone type",
                      fullWidth: true,
                      children: phoneTypes.map(type => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
                        value: type.id,
                        children: type.value
                      }, type.id))
                    })
                  }), !disabled && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
                    item: true,
                    xs: 4,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
                      style: {
                        margin: 5
                      },
                      color: "error",
                      onClick: () => arrayHelpers.remove(index) // remove a friend from the list
                      ,
                      children: "-"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
                      style: {
                        margin: 5
                      },
                      color: "primary",
                      onClick: () => arrayHelpers.insert(index + 1, {
                        phone: "",
                        type: ""
                      }) // insert an empty string at a position
                      ,
                      children: "+"
                    })]
                  })]
                })
              }, index);
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
                variant: "gradient",
                color: "primary",
                onClick: () => arrayHelpers.push({
                  name: "",
                  percentage: 0
                }),
                children: translate("Add a phone")
              })
            })
          });
        }
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PersonInfoPartialForm);

/***/ }),

/***/ "B6G6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iMaL");

_ApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].interceptors.request.use(async config => {
  let token = localStorage.getItem("sa_access_token");
  config.headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json"
  };
  return config;
}, error => {
  Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (_ApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FJke":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return governorates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return acceptStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return studyPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerationMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return examPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return registerationClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return yesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return name_prefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return work_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return genders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authorities; });
const years = translate => [{
  name: translate('Current Year'),
  value: new Date().getFullYear()
}, {
  name: translate('Last Year'),
  value: new Date().getFullYear() - 1
}];
const rounds = translate => [{
  id: '1',
  value: translate('First')
}, {
  id: '2',
  value: translate('Second')
}];
const governorates = translate => [{
  id: 'Damascus',
  value: translate('Damascus')
}, {
  id: 'Reif-Damascus',
  value: translate('Reif-Damascus')
}, {
  id: 'Homs',
  value: translate('Homs')
}, {
  id: 'Hama',
  value: translate('Hama')
}, {
  id: 'Idleb',
  value: translate('Idleb')
}, {
  id: 'Aleppo',
  value: translate('Aleppo')
}, {
  id: 'Latakia',
  value: translate('Latakia')
}, {
  id: 'Tartus',
  value: translate('Tartus')
}, {
  id: 'Dir Al-Zour',
  value: translate('Dir Al-Zour')
}, {
  id: 'Al-Raqa',
  value: translate('Al-Raqa')
}, {
  id: 'Al-Hasaqa',
  value: translate('Al-Hasaqa')
}, {
  id: 'Al-Qonaitra',
  value: translate('Al-Qonaitra')
}, {
  id: 'Al-Qamshli',
  value: translate('Al-Qamshli')
}, {
  id: 'Daraa',
  value: translate('Daraa')
}, {
  id: 'Al-Sweedaa',
  value: translate('Al-Sweedaa')
}];
const acceptStatus = translate => [translate('Accepted'), translate('Not Accepted'), translate('Canceled'), translate('Waiting')];
const acceptPlaces = translate => [translate('Damascus'), translate('Aleppo')];
const studyPlaces = translate => [...acceptPlaces(translate), translate('No problem')];
const registerationMethods = translate => [translate('Personal'), translate('Automatic'), translate('Electronic')];
const examPlaces = translate => [translate('Damascus'), translate('Aleppo'), translate('Latakia')];
const registerationClasses = translate => [translate('Internal'), translate('Private Study'), translate('Employees Sons'), translate('Special')];
const yesNo = translate => [{
  value: '1',
  label: translate('Yes')
}, {
  value: '0',
  label: translate('No')
}];
const name_prefixes = translate => [{
  id: "د.",
  value: translate("Dr.")
}, {
  id: "ما.",
  value: translate("Ma.")
}, {
  id: "م.",
  value: translate("Eng.")
}, {
  id: "أ.",
  value: translate("Mr.")
}];
const work_fields = translate => [{
  id: "معهد عالي",
  value: translate("HIAST"),
  activitiesLabel: translate("Activity in HIAST"),
  activities: [{
    id: "أمانة المعهد",
    value: translate("HIAST Secretariat")
  }, {
    id: "مديرية الشؤون الإدارية والمالية",
    value: translate("Directorate of Administrative and Financial Affairs")
  }, {
    id: "مديرية التأهيل والتدريب المستمر",
    value: translate("Directorate of Rehabilitation and Continuing Training")
  }, {
    id: "مخبر الدراسات البيئية",
    value: translate("Environmental Studies Laboratory")
  }, {
    id: "دائرة الخدمات العمرانية",
    value: translate("Urban Services Department")
  }, {
    id: "دائرة الصيانة الفنية",
    value: translate("Technical maintenance department")
  }, {
    id: "مديرية شؤون الطلاب - دائرة المكتبة",
    value: translate("Student Affairs Directorate - Library Department")
  }, {
    id: "مديرية شؤون الطلاب - دائرة التسجيل والمتابعة",
    value: translate("Student Affairs Directorate - Registration and Follow-up Department")
  }, {
    id: "إدارة المعهد",
    value: translate("HIAST Administration")
  }, {
    id: "قسم الرياضيات",
    value: translate("Mathematics Department")
  }, {
    id: "قسم الفيزياء",
    value: translate("Physics Department")
  }, {
    id: "قسم المعلوميات",
    value: translate("Informatics department")
  }, {
    id: "قسم النظم الإلكترونية والميكانيكية",
    value: translate("Mecatronics Department")
  }, {
    id: "قسم هندسة الإدارة",
    value: translate("Management Engineering Department")
  }, {
    id: "مركز تعليم اللغات الأجنبية",
    value: translate("Foreign Language Education Center")
  }, {
    id: "مديرية التخطيط والمتابعة",
    value: translate("Directorate of Planning and Follow-up")
  }, {
    id: "مديرية تنسيق العمل المهني",
    value: translate("Directorate of Professional Work Coordination")
  }, {
    id: "مديرية شؤون الطلاب - دائرة الامتحانات",
    value: translate("Student Affairs Directorate - Examinations Department")
  }, {
    id: "دائرة المطعم",
    value: translate("Restaurnt Department")
  }, {
    id: "مديرية شؤون الطلاب - شعبة الأنشطة الرياضية",
    value: translate("Student Affairs Directorate - Division of Sports Activities")
  }, {
    id: "مديرية شؤون الطلاب - دائرة المدينة السكنية",
    value: translate("Student Affairs Directorate - City Residential Department")
  }, {
    id: "مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية",
    value: translate("Student Affairs Directorate - Social Activities Department")
  }, {
    id: "قسم الاتصالات",
    value: translate("Telecommunications department")
  }, {
    id: "مديرية التعاون العلمي والإعلام والنشر",
    value: translate("Directorate of Scientific Cooperation, Media and Publishing")
  }, {
    id: "دائرة العلاقات العلاقات العامة والخدمات",
    value: translate("Department of Public Relations and Services Relations")
  }, {
    id: "مديرية شؤون الطلاب - دائرة الدراسات العليا",
    value: translate("Directorate of Student Affairs - Higher Education Department")
  }, {
    id: "مديرية الخدمات المعلوماتية والتطوير البرمجي",
    value: translate("Informatics Services and Software Development Directorate")
  }, {
    id: "مديرية شؤون الطلاب",
    value: translate("Student Affairs Directorate")
  }]
}, {
  id: "مركز",
  value: translate("Center"),
  activitiesLabel: translate("Activity in Center"),
  activities: [{
    id: "معهد 1000",
    value: translate("Institute 1000")
  }, {
    id: "فرع البحث والتطوير",
    value: translate("Research and Development Branch")
  }, {
    id: "فرع الصناعات الإلكترونية 410",
    value: translate("Electronic Industries Branch 410")
  }, {
    id: "معهد الميكانيك 2000",
    value: translate("Institute of Mechanics 2000")
  }, {
    id: "فرع الصناعات الميكانيكية",
    value: translate("Mechanical Industries Branch")
  }, {
    id: "معهد الكيمياء 3000",
    value: translate("Institute of Chemistry 3000")
  }, {
    id: "معهد الطيران 4000",
    value: translate("Aviation Institute 4000")
  }, {
    id: "الفرع 350",
    value: translate("Branch 350")
  }, {
    id: "المشروع 99",
    value: translate("Project 99")
  }, {
    id: "إدارة الدراسات والتخطيط",
    value: translate("Studies and Planning Department")
  }, {
    id: "مديرية موارد المعلومات",
    value: translate("Directorate of Information Resources")
  }, {
    id: "مديرية التنسيق",
    value: translate("Coordination Directorate")
  }, {
    id: "المخبر الوطني للمعايير والمعايرة",
    value: translate("National Standards and Calibration Laboratory")
  }, {
    id: "الفرع 550",
    value: translate("Branch 550")
  }, {
    id: "القطاع 4",
    value: translate("Sector 4")
  }, {
    id: "الشؤون الادارية والمالية بالمركز",
    value: translate("Administrative and financial affairs of the Centre")
  }, {
    id: "معهد 6000",
    value: translate("Institute 6000")
  }, {
    id: "الفرع 650",
    value: translate("Branch 650")
  }]
}, {
  id: "خارج الملاك",
  value: translate("Outsider"),
  activitiesLabel: "",
  activities: []
}];
const genders = translate => [{
  id: "male",
  value: translate("Male")
}, {
  id: "female",
  value: translate("Female")
}];
const degrees = translate => [{
  id: "دكتوراه",
  value: translate("Phd")
}, {
  id: "ماجستير",
  value: translate("Master")
}, {
  id: "هندسة",
  value: translate("Engineering")
}, {
  id: "إجازة جامعية",
  value: translate("Bachelor's")
}, {
  id: "معهد متوسط",
  value: translate("Intermediate institute")
}];
const statuses = translate => [{
  id: "على رأس عمله",
  value: translate("Active")
}, {
  id: "موفد",
  value: translate("Delegate")
}, {
  id: "متقاعد",
  value: translate("Retired")
}, {
  id: "متوفى",
  value: translate("Dead")
}, {
  id: "ناكل",
  value: translate("Runaway")
}];
/* الهيئة */

const authorities = translate => [{
  id: "هيئة بحث",
  value: translate("Research")
}, {
  id: "فنية",
  value: translate("Technical")
}, {
  id: "مخبرية",
  value: translate("Lab")
}, {
  id: "قانون عاملين",
  value: translate("Workers")
}];

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardBody; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};
/* harmony default export */ var components_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


function CardBody(props) {
  const useStyles = Object(styles_["makeStyles"])(components_cardBodyStyle);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }));
}

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

/***/ "Z3aw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base colors for the Soft UI Dashboard React.
 * You can add new color using this file.
 * You can customized the colors for the entire Soft UI Dashboard React using thie file.
 */
const colors = {
  background: {
    default: "#f8f9fa"
  },
  text: {
    main: "#67748e",
    focus: "#67748e"
  },
  transparent: {
    main: "transparent"
  },
  white: {
    main: "#ffffff",
    focus: "#ffffff"
  },
  black: {
    light: "#141414",
    main: "#000000",
    focus: "#000000"
  },
  primary: {
    // main: "#01579b" /* "#cb0c9f", */,
    main: "#01579b",
    focus: "#344767"
  },
  secondary: {
    main: "#8392ab",
    focus: "#96a2b8"
  },
  info: {
    main: "#17c1e8",
    focus: "#3acaeb"
  },
  success: {
    main: "#82d616",
    focus: "#95dc39"
  },
  warning: {
    main: "#fbcf33",
    focus: "#fcd652"
  },
  error: {
    main: "#ea0606",
    focus: "#c70505"
  },
  light: {
    main: "#e9ecef",
    focus: "#e9ecef"
  },
  dark: {
    main: "#344767",
    focus: "#344767"
  },
  grey: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529"
  },
  gradients: {
    primary: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#7928ca",
      state: "#344767"
    },
    secondary: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#627594",
      state: "#a8b8d8"
    },
    info: {
      main: "#01579b"
      /* "#cb0c9f", */
      ,
      // main: "#2152ff",
      state: "#0077b5"
      /* "#21d4fd" */

    },
    success: {
      main: "#17ad37",
      state: "#98ec2d"
    },
    warning: {
      main: "#f53939",
      state: "#fbcf33"
    },
    error: {
      main: "#ea0606",
      state: "#ff667c"
    },
    light: {
      main: "#ced4da",
      state: "#ebeff4"
    },
    dark: {
      main: "#141727",
      state: "#3a416f"
    }
  },
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86"
    },
    twitter: {
      main: "#55acee",
      dark: "#3ea1ec"
    },
    instagram: {
      main: "#125688",
      dark: "#0e456d"
    },
    linkedin: {
      main: "#0077b5",
      dark: "#00669c"
    },
    pinterest: {
      main: "#cc2127",
      dark: "#b21d22"
    },
    youtube: {
      main: "#e52d27",
      dark: "#d41f1a"
    },
    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2"
    },
    slack: {
      main: "#3aaf85",
      dark: "#329874"
    },
    dribbble: {
      main: "#344767",
      dark: "#344767"
    },
    github: {
      main: "#24292e",
      dark: "#171a1d"
    },
    reddit: {
      main: "#ff4500",
      dark: "#e03d00"
    },
    tumblr: {
      main: "#35465c",
      dark: "#2a3749"
    }
  },
  alertColors: {
    primary: {
      main: "#7928ca",
      state: "#d6006c",
      border: "#efb6e2"
    },
    secondary: {
      main: "#627594",
      state: "#8ca1cb",
      border: "#dadee6"
    },
    info: {
      main: "#2152ff",
      state: "#02c6f3",
      border: "#b9ecf8"
    },
    success: {
      main: "#17ad37",
      state: "#84dc14",
      border: "#daf3b9"
    },
    warning: {
      main: "#f53939",
      state: "#fac60b",
      border: "#fef1c2"
    },
    error: {
      main: "#ea0606",
      state: "#ff3d59",
      border: "#f9b4b4"
    },
    light: {
      main: "#ced4da",
      state: "#d1dae6",
      border: "#f8f9fa"
    },
    dark: {
      main: "#141727",
      state: "#2c3154",
      border: "#c2c8d1"
    }
  },
  badgeColors: {
    primary: {
      background: "#f883dd",
      text: "#a3017e"
    },
    secondary: {
      background: "#e4e8ed",
      text: "#5974a2"
    },
    info: {
      background: "#abe9f7",
      text: "#08a1c4"
    },
    success: {
      background: "#cdf59b",
      text: "#67b108"
    },
    warning: {
      background: "#fef5d3",
      text: "#fbc400"
    },
    error: {
      background: "#fc9797",
      text: "#bd0000"
    },
    light: {
      background: "#ffffff",
      text: "#c7d3de"
    },
    dark: {
      background: "#8097bf",
      text: "#1e2e4a"
    }
  },
  inputColors: {
    borderColor: {
      main: "#d2d6da",
      focus: "#35d1f5"
    },
    boxShadow: "#81e3f9",
    error: "#fd5c70",
    success: "#66d432"
  },
  sliderColors: {
    thumb: {
      borderColor: "#d9d9d9"
    }
  },
  circleSliderColors: {
    background: "#d3d3d3"
  },
  tabs: {
    indicator: {
      boxShadow: "#ddd"
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (colors);

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "ZljZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateService; });
/* harmony import */ var _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("B6G6");

class CandidateService {
  static async GetAll() {
    const listUrl = "/candidate";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(listUrl).then(response => {
      if (response.data.success) {
        let result = response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async AddAfterSearch(payload) {
    const addUrl = "/ministry/candidate/add";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(addUrl, payload).then(response => {
      var _response$data;

      if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.success) {
        let result = response === null || response === void 0 ? void 0 : response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async delete(_id) {
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/candidate/delete", {
      id: parseInt(_id)
    }).then(response => {
      var _response$data2;

      if (response !== null && response !== void 0 && (_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.success) {
        return response === null || response === void 0 ? void 0 : response.data;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async Add(payload) {
    const addUrl = "/candidate/add";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(addUrl, payload).then(response => {
      var _response$data3;

      if (response !== null && response !== void 0 && (_response$data3 = response.data) !== null && _response$data3 !== void 0 && _response$data3.success) {
        let result = response === null || response === void 0 ? void 0 : response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async Search(payload) {
    const searchUrl = "/ministry/candidate/get";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(searchUrl, {
      params: payload
    }).then(response => {
      var _response$data4;

      if (response !== null && response !== void 0 && (_response$data4 = response.data) !== null && _response$data4 !== void 0 && _response$data4.success) {
        let result = response === null || response === void 0 ? void 0 : response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async Edit(payload) {
    const editUrl = "/candidate/edit";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(editUrl, payload).then(response => {
      if (response.data.success) {
        let result = response.data;
        return result;
      }
    }).catch(error => {
      throw error;
    });
  }

  static async Get() {
    const detailUrl = "/candidate/details";
    return await _TokenizedApiClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(detailUrl).then(response => {
      if (response.data.success) {
        let result = response.data;
        return result;
      }
    }).catch(error => {
      console.log("Api Error:", error);
      throw error;
    });
  }

}

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

/***/ "dCKf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jfJP");
/* harmony import */ var _theme_base_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z3aw");


const rtlStyle = {
  cardHeader: {
    height: "5em",
    position: "sticky",
    btypeTopRightRadius: "inherit",
    btypeTopLeftRadius: "inherit",
    backgroundColor: "#f5f5f5"
  },
  cardStyle: {
    bgcolor: "background.paper",
    boxShadow: 24,
    btypeRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px"
  },
  successText: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "y"][0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "l"][0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "l"][0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "m"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "E"]) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    "& a": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "E"]
    }
  },
  cardTitle: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "l"][2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "l"][1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "E"],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "l"][1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  typography: {
    fontWeight: "bold"
  },
  textField: {},
  submitBtn: {
    color: "rgb(255, 255, 255)",
    marginBottom: "1em",
    marginTop: "1em",
    background: `linear-gradient(310deg, ${_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].gradients.primary.main}, ${_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].gradients.info.state})`,
    "&:hover": {}
  },
  closeBtn: {
    color: "rgb(255, 255, 255)",
    marginBottom: "1em",
    marginTop: "1em",
    background: `${_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].gradients.error.main}`,
    "&:hover": {
      color: "rgb(255, 255, 255)",
      background: `${_theme_base_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].gradients.error.main}`
    }
  },
  select: {
    marginBottom: "1em"
  },
  userMngSubmitBtnGrid: {
    marginTop: ".5em !important"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (rtlStyle);

/***/ }),

/***/ "fkQ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("A2So");
/* harmony import */ var _components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2zww");
/* harmony import */ var _components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UsYt");
/* harmony import */ var _components_SuiButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8uep");
/* harmony import */ var _PersonInfoPartialForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("B2g9");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("BAEn");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_jss_nextjs_material_dashboard_views_rtlStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("dCKf");
/* harmony import */ var _Services_CandidateService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZljZ");
/* harmony import */ var _Static_resources__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("FJke");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("2FK4");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("5Buo");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const CandidatePersonalInfo = ({
  initValues,
  external = 0,
  forAdd = false,
  handleClose,
  callback,
  updateCandidate
}) => {
  const {
    translate
  } = Object(_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_10__[/* useTranslation */ "a"])();
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(_assets_jss_nextjs_material_dashboard_views_rtlStyle__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]);
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const dispatch = Object(_redux__WEBPACK_IMPORTED_MODULE_16__[/* useAppDispatch */ "i"])();
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const submitFunction = forAdd ? _Services_CandidateService__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Add : _Services_CandidateService__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].Edit;

  const submitForm = async (values, setSubmitting) => {
    setSubmitting(true);
    values = _objectSpread(_objectSpread({}, values), {}, {
      external: external,
      permenant_address: 'permenant_address',
      temporary_address: 'temporary_address'
    });
    submitFunction(values).then(res => {
      if (res.success) {
        if (forAdd) {
          var _values;

          handleClose && handleClose();
          updateCandidate(res.result);
          dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_16__[/* setCandidate */ "e"])(_objectSpread(_objectSpread({}, res.result), {}, {
            certificates: [],
            person: (_values = values) === null || _values === void 0 ? void 0 : _values.person
          })));
          router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/candidate-details`);
        } else {
          updateCandidate(_objectSpread(_objectSpread({}, res.result), {}, {
            desires: res.result.desires.map(e => e.speciality)
          }));
          dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_16__[/* setCandidate */ "e"])(_objectSpread(_objectSpread({}, res.result), {}, {
            desires: res.result.desires.map(e => e.speciality)
          })));
          Object(react_toastify__WEBPACK_IMPORTED_MODULE_17__["toast"])(translate('Candidate updated.'), {
            type: 'success'
          });
        }

        callback && callback(res.result);
      }
    }).catch(error => {
      console.error("error", error);
    }).finally(() => {
      setSubmitting(false);
    });
    ;
  };

  const formScheme = yup__WEBPACK_IMPORTED_MODULE_11__["object"]().shape({// first_name: Yup.string().required(translate("{0} is required", "First name")),
    // last_name: Yup.string().required(translate("{0} is required", "Last name")),
    // passport_first_name: Yup.string().required(translate("{0} is required", "Passport First Name")),
    // passport_last_name: Yup.string().required(translate("{0} is required", "Passport Last Name")),
    // passport_number: Yup.string().required(translate("{0} is required", "Passport Number")),
    // national_number: Yup.string().required(translate("{0} is required", "National number")),
    // sex: Yup.string().required(translate("{0} is required", "Gender")),
    // nationality: Yup.string().required(translate("{0} is required", "Nationality")),
  });

  const range = (start, stop, step) => Array.from({
    length: (stop - start) / step + 1
  }, (_, i) => start + i * step);

  const years = range(1990, Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["getYear"])(new Date()) + 1, 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          style: {
            fontWeight: "bold",
            color: "#01579b"
          },
          children: translate('Personal Info')
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
          initialValues: initValues,
          validationSchema: formScheme,
          onSubmit: (values, {
            setSubmitting
          }) => {
            submitForm(values, setSubmitting);
          },
          children: formik => {
            var _values$residance;

            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isSubmitting,
              isValid,
              dirty,
              setFieldValue
            } = formik;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_PersonInfoPartialForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
                prefix: "person",
                formik: formik,
                disabled: disabled
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                container: true,
                spacing: 2,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Registeration Class")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      variant: "outlined",
                      size: "small",
                      type: "select",
                      id: `registeration_class`,
                      name: `registeration_class`,
                      select: true,
                      value: values.registeration_class,
                      onChange: handleChange(`registeration_class`),
                      onBlur: handleBlur,
                      placeholder: translate("registeration_class"),
                      fullWidth: true,
                      children: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* registerationClasses */ "i"])(translate).map(_class => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
                        value: _class,
                        children: _class
                      }, _class))
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Exam Place")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      variant: "outlined",
                      size: "small",
                      type: "select",
                      id: `exam_place`,
                      name: `exam_place`,
                      select: true,
                      value: values.exam_place,
                      onChange: handleChange(`exam_place`),
                      onBlur: handleBlur,
                      placeholder: translate("exam_place"),
                      fullWidth: true,
                      children: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* examPlaces */ "e"])(translate).map(place => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
                        value: place,
                        children: place
                      }, place))
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Registeration Method")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], {
                      id: 'registeration_method',
                      name: 'registeration_method',
                      value: values === null || values === void 0 ? void 0 : values.registeration_method,
                      onChange: handleChange,
                      defaultValue: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* registerationMethods */ "j"])(translate)[0],
                      children: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* registerationMethods */ "j"])(translate).map(place => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
                        value: place,
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Radio"], {}),
                        label: place
                      }))
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Study Place")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], {
                      id: 'study_place',
                      name: 'study_place',
                      value: values === null || values === void 0 ? void 0 : values.study_place,
                      onChange: handleChange,
                      defaultValue: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* studyPlaces */ "m"])(translate)[0],
                      children: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* studyPlaces */ "m"])(translate).map(place => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
                        value: place,
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Radio"], {}),
                        label: place
                      }))
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Need Residance")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], {
                      id: 'residance',
                      name: 'residance',
                      value: values === null || values === void 0 ? void 0 : (_values$residance = values.residance) === null || _values$residance === void 0 ? void 0 : _values$residance.toString(),
                      onChange: handleChange,
                      defaultValue: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* yesNo */ "p"])(translate)[0].value,
                      children: Object(_Static_resources__WEBPACK_IMPORTED_MODULE_15__[/* yesNo */ "p"])(translate).map(option => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Radio"], {}),
                        value: option.value,
                        label: option.label
                      }))
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                container: true,
                spacing: 2,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Birth date")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_datepicker__WEBPACK_IMPORTED_MODULE_18___default.a, {
                      renderCustomHeader: ({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        style: {
                          margin: 10,
                          display: "flex",
                          justifyContent: "center"
                        },
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          onClick: decreaseMonth,
                          disabled: prevMonthButtonDisabled,
                          children: "<"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("select", {
                          value: Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["getYear"])(date),
                          onChange: ({
                            target: {
                              value
                            }
                          }) => changeYear(value),
                          children: years.map(option => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                            value: option,
                            children: option
                          }, option))
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("select", {
                          value: months[Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["getMonth"])(date)],
                          onChange: ({
                            target: {
                              value
                            }
                          }) => changeMonth(months.indexOf(value)),
                          children: months.map(option => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                            value: option,
                            children: option
                          }, option))
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                          onClick: increaseMonth,
                          disabled: nextMonthButtonDisabled,
                          children: ">"
                        })]
                      }),
                      disabled: disabled,
                      onChange: date => setFieldValue('birth_date', Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["format"])(date, "yyyy-MM-dd")),
                      size: "small",
                      name: "birth_date",
                      value: `${values.birth_date}`,
                      onBlur: handleBlur,
                      error: Boolean(touched.birth_date && errors.birth_date),
                      helperText: touched.birth_date && errors.birth_date,
                      placeholder: translate("Birth date"),
                      fullWidth: true
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Birth place")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      onChange: handleChange,
                      variant: "outlined",
                      size: "small",
                      type: "text",
                      id: "birth_place",
                      name: "birth_place",
                      value: values.birth_place,
                      onBlur: handleBlur,
                      error: Boolean(touched.birth_place && errors.birth_place),
                      helperText: touched.birth_place && errors.birth_place,
                      placeholder: translate("Birth place"),
                      fullWidth: true
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("QAID place")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      onChange: handleChange,
                      variant: "outlined",
                      size: "small",
                      type: "text",
                      id: "qaid_place",
                      name: "qaid_place",
                      value: values.qaid_place,
                      onBlur: handleBlur,
                      error: Boolean(touched.qaid_place && errors.qaid_place),
                      helperText: touched.qaid_place && errors.qaid_place,
                      placeholder: translate("QAID place"),
                      fullWidth: true
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("QAID number")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      onChange: handleChange,
                      variant: "outlined",
                      size: "small",
                      type: "text",
                      id: "qaid_number",
                      name: "qaid_number",
                      value: values.qaid_number,
                      onBlur: handleBlur,
                      error: Boolean(touched.qaid_number && errors.qaid_number),
                      helperText: touched.qaid_number && errors.qaid_number,
                      placeholder: translate("QAID number"),
                      fullWidth: true
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                  item: true,
                  md: 4,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                    mb: 2,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                      mb: 1,
                      ml: 0.5,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
                        component: "label",
                        variant: "caption",
                        children: translate("Military office")
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                      disabled: disabled,
                      onChange: handleChange,
                      variant: "outlined",
                      size: "small",
                      type: "text",
                      id: "military_office",
                      name: "military_office",
                      value: values.military_office,
                      onBlur: handleBlur,
                      error: Boolean(touched.military_office && errors.military_office),
                      helperText: touched.military_office && errors.military_office,
                      placeholder: translate("Military office"),
                      fullWidth: true
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
                mt: 4,
                mb: 1,
                children: isSubmitting ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
                  disabled: true,
                  variant: "gradient",
                  color: "info",
                  fullWidth: true,
                  children: translate("Processing ...")
                }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] // disabled={!(dirty && isValid)}
                , {
                  type: "submit",
                  variant: "gradient",
                  color: "info",
                  fullWidth: true,
                  children: translate("Save")
                })
              })]
            });
          }
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CandidatePersonalInfo);

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

/***/ "jfJP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return drawerToggleWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boxShadow; });
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return roseBoxShadow; });
/* unused harmony export darkBoxShadow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return darkCardHeader; });
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return title; });
/* unused harmony export cardTitle */
/* unused harmony export cardSubtitle */
/* unused harmony export cardLink */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/nextjs-material-dashboard
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const drawerToggleWidth = 50;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#01579b", "#01579c", "#01579a", "#015799"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7", "#212121", "#263238"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};
const darkBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(grayColor[12]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const darkCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + grayColor[13] + ", " + grayColor[12] + ")"
}, darkBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pDG+":
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

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