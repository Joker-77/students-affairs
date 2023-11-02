module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: ./redux/reducers/reducer.ts
var reducer = __webpack_require__("JU76");

// CONCATENATED MODULE: ./redux/store.tsx


const store = Object(toolkit_["configureStore"])({
  reducer: {
    baseReducer: reducer["a" /* reducer */]
  }
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: ./assets/jss/nextjs-material-dashboard.js
var nextjs_material_dashboard = __webpack_require__("jfJP");

// CONCATENATED MODULE: ./components/PageChange/PageChange.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // @material-ui/core components


 // core components


const styles = {
  progress: {
    color: nextjs_material_dashboard["p" /* infoColor */],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: _objectSpread(_objectSpread({}, nextjs_material_dashboard["z" /* title */]), {}, {
    color: "#FFFFFF"
  })
};
function PageChange(props) {
  const useStyles = Object(styles_["makeStyles"])(styles);
  const classes = useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: classes.wrapperDiv,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.iconWrapper,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CircularProgress_default.a, {
          className: classes.progress
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
        className: classes.title,
        children: ["Loading page contents for: ", props.path]
      })]
    })
  });
}
// EXTERNAL MODULE: ./assets/theme/base/colors.js
var colors = __webpack_require__("Z3aw");

// CONCATENATED MODULE: ./assets/theme/base/breakpoints.js
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
 * The base breakpoints for the Soft UI Dashboard React.
 * You can add new breakpoints using this file.
 * You can customized the breakpoints for the entire Soft UI Dashboard React using thie file.
 */
const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  }
};
/* harmony default export */ var base_breakpoints = (breakpoints);
// CONCATENATED MODULE: ./assets/theme/functions/pxToRem.js
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */
function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

/* harmony default export */ var functions_pxToRem = (pxToRem);
// CONCATENATED MODULE: ./assets/theme/base/typography.js
function typography_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function typography_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { typography_ownKeys(Object(source), true).forEach(function (key) { typography_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { typography_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function typography_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * The base typography styles for the Soft UI Dashboard React.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  dark
} = colors["a" /* default */];
const baseProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: functions_pxToRem(10.4),
  fontSizeXS: functions_pxToRem(12),
  fontSizeSM: functions_pxToRem(14),
  fontSizeMD: functions_pxToRem(16),
  fontSizeLG: functions_pxToRem(18),
  fontSizeXL: functions_pxToRem(20)
};
const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium
};
const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2
};
const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,
  h1: typography_objectSpread({
    fontSize: functions_pxToRem(48),
    lineHeight: 1.25
  }, baseHeadingProperties),
  h2: typography_objectSpread({
    fontSize: functions_pxToRem(36),
    lineHeight: 1.3
  }, baseHeadingProperties),
  h3: typography_objectSpread({
    fontSize: functions_pxToRem(30),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h4: typography_objectSpread({
    fontSize: functions_pxToRem(24),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h5: typography_objectSpread({
    fontSize: functions_pxToRem(20),
    lineHeight: 1.375
  }, baseHeadingProperties),
  h6: typography_objectSpread({
    fontSize: functions_pxToRem(16),
    lineHeight: 1.625
  }, baseHeadingProperties),
  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  subtitle2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.6
  },
  body1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625
  },
  body2: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.6
  },
  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightBold,
    lineHeight: 1.5,
    textTransform: "uppercase"
  },
  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.25
  },
  overline: {
    fontFamily: baseProperties.fontFamily
  },
  d1: typography_objectSpread({
    fontSize: functions_pxToRem(80)
  }, baseDisplayProperties),
  d2: typography_objectSpread({
    fontSize: functions_pxToRem(72)
  }, baseDisplayProperties),
  d3: typography_objectSpread({
    fontSize: functions_pxToRem(64)
  }, baseDisplayProperties),
  d4: typography_objectSpread({
    fontSize: functions_pxToRem(56)
  }, baseDisplayProperties),
  d5: typography_objectSpread({
    fontSize: functions_pxToRem(48)
  }, baseDisplayProperties),
  d6: typography_objectSpread({
    fontSize: functions_pxToRem(40)
  }, baseDisplayProperties),
  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL
  },
  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2
  }
};
/* harmony default export */ var base_typography = (typography);
// EXTERNAL MODULE: external "chroma-js"
var external_chroma_js_ = __webpack_require__("QmcS");
var external_chroma_js_default = /*#__PURE__*/__webpack_require__.n(external_chroma_js_);

// CONCATENATED MODULE: ./assets/theme/functions/hexToRgb.js
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The hexToRgb() function helps you to change the hex color code to rgb
  using chroma-js library.
 */
// chroma-js is a library for all kinds of color conversions and color scales.


function hexToRgb(color) {
  return external_chroma_js_default()(color).rgb().join(", ");
}

/* harmony default export */ var functions_hexToRgb = (hexToRgb);
// CONCATENATED MODULE: ./assets/theme/functions/rgba.js
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */
// Soft UI Dashboard React helper functions


function rgba(color, opacity) {
  return `rgba(${functions_hexToRgb(color)}, ${opacity})`;
}

/* harmony default export */ var functions_rgba = (rgba);
// CONCATENATED MODULE: ./assets/theme/functions/boxShadow.js
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The boxShadow() function helps you to create a box shadow for an element
 */
// Soft UI Dashboard React helper functions



function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;
  return `${inset} ${functions_pxToRem(x)} ${functions_pxToRem(y)} ${functions_pxToRem(blur)} ${functions_pxToRem(spread)} ${functions_rgba(color, opacity)}`;
}

/* harmony default export */ var functions_boxShadow = (boxShadow);
// CONCATENATED MODULE: ./assets/theme/base/boxShadows.js
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
 * The base box-shadow styles for the Soft UI Dashboard React.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  black,
  white,
  info,
  inputColors,
  tabs
} = colors["a" /* default */];
const boxShadows = {
  xs: functions_boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: functions_boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: `${functions_boxShadow([0, 4], [6, -1], black.light, 0.12)}, ${functions_boxShadow([0, 2], [4, -1], black.light, 0.07)}`,
  lg: `${functions_boxShadow([0, 8], [26, -4], black.light, 0.15)}, ${functions_boxShadow([0, 8], [9, -5], black.light, 0.06)}`,
  xl: functions_boxShadow([0, 23], [45, -11], black.light, 0.25),
  xxl: functions_boxShadow([0, 20], [27, 0], black.main, 0.05),
  inset: functions_boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
  navbarBoxShadow: `${functions_boxShadow([0, 0], [1, 1], white.main, 0.9, "inset")}, ${functions_boxShadow([0, 20], [27, 0], black.main, 0.05)}`,
  buttonBoxShadow: {
    main: `${functions_boxShadow([0, 4], [7, -1], black.main, 0.11)}, ${functions_boxShadow([0, 2], [4, -1], black.main, 0.07)}`,
    stateOf: `${functions_boxShadow([0, 3], [5, -1], black.main, 0.09)}, ${functions_boxShadow([0, 2], [5, -1], black.main, 0.07)}`,
    stateOfNotHover: functions_boxShadow([0, 0], [0, 3.2], info.main, 0.5)
  },
  inputBoxShadow: {
    focus: functions_boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1),
    error: functions_boxShadow([0, 0], [0, 2], inputColors.error, 0.6),
    success: functions_boxShadow([0, 0], [0, 2], inputColors.success, 0.6)
  },
  sliderBoxShadow: {
    thumb: functions_boxShadow([0, 1], [13, 0], black.main, 0.2)
  },
  tabsBoxShadow: {
    indicator: functions_boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow, 1)
  }
};
/* harmony default export */ var base_boxShadows = (boxShadows);
// CONCATENATED MODULE: ./assets/theme/base/borders.js
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
 * The base border styles for the Soft UI Dashboard React.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Soft UI Dashboard React using thie file.
 */
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  grey
} = colors["a" /* default */];
const borders = {
  borderColor: grey[300],
  borderWidth: {
    0: 0,
    1: functions_pxToRem(1),
    2: functions_pxToRem(2),
    3: functions_pxToRem(3),
    4: functions_pxToRem(4),
    5: functions_pxToRem(5)
  },
  borderRadius: {
    xs: functions_pxToRem(2),
    sm: functions_pxToRem(4),
    md: functions_pxToRem(8),
    lg: functions_pxToRem(12),
    xl: functions_pxToRem(16),
    xxl: functions_pxToRem(24),
    section: functions_pxToRem(160)
  }
};
/* harmony default export */ var base_borders = (borders);
// CONCATENATED MODULE: ./assets/theme/base/globals.js
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
// Soft UI Dashboard React Base Styles

const {
  info: globals_info,
  dark: globals_dark
} = colors["a" /* default */];
const globals = {
  html: {
    scrollBehavior: "smooth"
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important"
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${globals_dark.main} !important`,
    transition: "color 150ms ease-in !important"
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${globals_info.main} !important`
  }
};
/* harmony default export */ var base_globals = (globals);
// CONCATENATED MODULE: ./assets/theme/functions/linearGradient.js
/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The linearGradient() function helps you to create a linear gradient color background
 */
function linearGradient(color, colorState, angle = 310) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

/* harmony default export */ var functions_linearGradient = (linearGradient);
// CONCATENATED MODULE: ./assets/theme/components/sidenav.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  white: sidenav_white
} = colors["a" /* default */];
const {
  borderRadius
} = base_borders;
const sidenav = {
  styleOverrides: {
    root: {
      width: functions_pxToRem(250),
      whiteSpace: "nowrap",
      border: "none"
    },
    paper: {
      width: functions_pxToRem(250),
      backgroundColor: functions_rgba(sidenav_white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${functions_pxToRem(30)})`,
      height: `calc(100vh - ${functions_pxToRem(32)})`,
      margin: functions_pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none"
    },
    paperAnchorDockedLeft: {
      borderRight: "none"
    }
  }
};
/* harmony default export */ var components_sidenav = (sidenav);
// CONCATENATED MODULE: ./assets/theme/components/list/index.js
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
const list = {
  styleOverrides: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};
/* harmony default export */ var components_list = (list);
// CONCATENATED MODULE: ./assets/theme/components/list/listItem.js
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
const listItem = {
  defaultProps: {
    disableGutters: true
  },
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
};
/* harmony default export */ var list_listItem = (listItem);
// CONCATENATED MODULE: ./assets/theme/components/list/listItemText.js
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
const listItemText = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0
    }
  }
};
/* harmony default export */ var list_listItemText = (listItemText);
// CONCATENATED MODULE: ./assets/theme/components/card/index.js
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
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Function


const {
  black: card_black,
  white: card_white
} = colors["a" /* default */];
const {
  borderWidth,
  borderRadius: card_borderRadius
} = base_borders;
const {
  xxl
} = base_boxShadows;
const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: card_white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${functions_rgba(card_black.main, 0.125)}`,
      borderRadius: card_borderRadius.xl,
      boxShadow: xxl
    }
  }
};
/* harmony default export */ var components_card = (card);
// CONCATENATED MODULE: ./assets/theme/components/card/cardMedia.js
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
// Soft UI Dashboard React Base Styles
 // Soft UI Dashboard React Helper Functions


const {
  borderRadius: cardMedia_borderRadius
} = base_borders;
const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: cardMedia_borderRadius.xl,
      margin: `${functions_pxToRem(16)} ${functions_pxToRem(16)} 0`
    },
    media: {
      width: "auto"
    }
  }
};
/* harmony default export */ var card_cardMedia = (cardMedia);
// CONCATENATED MODULE: ./assets/theme/components/card/cardContent.js
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
// Soft UI Dashboard React Helper Functions

const cardContent = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${functions_pxToRem(8)} ${functions_pxToRem(24)} ${functions_pxToRem(24)}`
    }
  }
};
/* harmony default export */ var card_cardContent = (cardContent);
// CONCATENATED MODULE: ./assets/theme/components/button/root.js
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
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard React Helper Functions


const {
  fontWeightBold,
  size
} = base_typography;
const {
  borderRadius: root_borderRadius
} = base_borders;
const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: root_borderRadius.md,
  padding: `${functions_pxToRem(12)} ${functions_pxToRem(24)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: `all 150ms ease-in`,
  "&:hover": {
    transform: "scale(1.02)"
  },
  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65
  },
  "& .material-icons": {
    fontSize: functions_pxToRem(15),
    marginTop: functions_pxToRem(-2)
  }
};
/* harmony default export */ var button_root = (root);
// CONCATENATED MODULE: ./assets/theme/components/button/contained.js
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
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Functions


const {
  white: contained_white,
  text: contained_text,
  info: contained_info,
  secondary
} = colors["a" /* default */];
const {
  size: contained_size
} = base_typography;
const {
  buttonBoxShadow
} = base_boxShadows;
const contained = {
  base: {
    backgroundColor: contained_white.main,
    minHeight: functions_pxToRem(40),
    color: contained_text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${functions_pxToRem(12)} ${functions_pxToRem(24)}`,
    "&:hover": {
      backgroundColor: contained_white.main,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:focus": {
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf
    },
    "&:disabled": {
      boxShadow: buttonBoxShadow.main
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(16)} !important`
    }
  },
  small: {
    minHeight: functions_pxToRem(32),
    padding: `${functions_pxToRem(8)} ${functions_pxToRem(32)}`,
    fontSize: contained_size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(12)} !important`
    }
  },
  large: {
    minHeight: functions_pxToRem(47),
    padding: `${functions_pxToRem(14)} ${functions_pxToRem(64)}`,
    fontSize: contained_size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(22)} !important`
    }
  },
  primary: {
    backgroundColor: contained_info.main,
    "&:hover": {
      backgroundColor: contained_info.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: contained_info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: secondary.main,
    "&:hover": {
      backgroundColor: secondary.main
    },
    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover
    }
  }
};
/* harmony default export */ var button_contained = (contained);
// CONCATENATED MODULE: ./assets/theme/components/button/outlined.js
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
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard React Helper Functions


const {
  transparent,
  light,
  info: outlined_info,
  secondary: outlined_secondary
} = colors["a" /* default */];
const {
  size: outlined_size
} = base_typography;
const {
  buttonBoxShadow: outlined_buttonBoxShadow
} = base_boxShadows;
const outlined = {
  base: {
    minHeight: functions_pxToRem(42),
    color: light.main,
    borderColor: light.main,
    padding: `${functions_pxToRem(12)} ${functions_pxToRem(24)}`,
    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: outlined_buttonBoxShadow.stateOfNotHover
    },
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(16)} !important`
    }
  },
  small: {
    minHeight: functions_pxToRem(34),
    padding: `${functions_pxToRem(8)} ${functions_pxToRem(32)}`,
    fontSize: outlined_size.xs,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(12)} !important`
    }
  },
  large: {
    minHeight: functions_pxToRem(49),
    padding: `${functions_pxToRem(14)} ${functions_pxToRem(64)}`,
    fontSize: outlined_size.sm,
    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${functions_pxToRem(22)} !important`
    }
  },
  primary: {
    backgroundColor: transparent.main,
    borderColor: outlined_info.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: outlined_buttonBoxShadow.stateOfNotHover
    }
  },
  secondary: {
    backgroundColor: transparent.main,
    borderColor: outlined_secondary.main,
    "&:hover": {
      backgroundColor: transparent.main
    },
    "&:focus:not(:hover)": {
      boxShadow: outlined_buttonBoxShadow.stateOfNotHover
    }
  }
};
/* harmony default export */ var button_outlined = (outlined);
// CONCATENATED MODULE: ./assets/theme/components/button/text.js
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
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard React Helper Functions


const {
  transparent: text_transparent,
  info: text_info,
  secondary: text_secondary,
  grey: text_grey
} = colors["a" /* default */];
const {
  size: text_size
} = base_typography;
const buttonText = {
  base: {
    backgroundColor: text_transparent.main,
    height: "max-content",
    color: text_info.main,
    boxShadow: "none",
    padding: `${functions_pxToRem(6)} ${functions_pxToRem(12)}`,
    "&:hover": {
      backgroundColor: text_transparent.main,
      boxShadow: "none",
      color: text_info.focus
    },
    "&:focus": {
      boxShadow: "none",
      color: text_info.focus
    },
    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none"
    },
    "&:disabled": {
      color: text_grey[600],
      boxShadow: "none"
    },
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${functions_pxToRem(16)} !important`
    }
  },
  small: {
    fontSize: text_size.xs,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${functions_pxToRem(12)} !important`
    }
  },
  large: {
    fontSize: text_size.sm,
    "& .material-icons, .material-icons-round, svg, span": {
      fontSize: `${functions_pxToRem(22)} !important`
    }
  },
  primary: {
    color: text_info.main,
    backgroundColor: text_transparent.main,
    "&:hover": {
      color: text_info.focus,
      backgroundColor: text_transparent.main
    },
    "&:focus:not(:hover)": {
      color: text_info.focus,
      backgroundColor: text_transparent.focus,
      boxShadow: "none"
    }
  },
  secondary: {
    color: text_secondary.focus,
    backgroundColor: text_transparent.main,
    "&:hover": {
      color: text_secondary.focus,
      backgroundColor: text_transparent.main
    },
    "&:focus:not(:hover)": {
      color: text_secondary.focus,
      backgroundColor: text_transparent.focus,
      boxShadow: "none"
    }
  }
};
/* harmony default export */ var button_text = (buttonText);
// CONCATENATED MODULE: ./assets/theme/components/button/index.js
function button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { button_ownKeys(Object(source), true).forEach(function (key) { button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// Soft UI Dashboard React Button Styles




const button_button = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: button_objectSpread({}, button_root),
    contained: button_objectSpread({}, button_contained.base),
    containedSizeSmall: button_objectSpread({}, button_contained.small),
    containedSizeLarge: button_objectSpread({}, button_contained.large),
    containedPrimary: button_objectSpread({}, button_contained.primary),
    containedSecondary: button_objectSpread({}, button_contained.secondary),
    outlined: button_objectSpread({}, button_outlined.base),
    outlinedSizeSmall: button_objectSpread({}, button_outlined.small),
    outlinedSizeLarge: button_objectSpread({}, button_outlined.large),
    outlinedPrimary: button_objectSpread({}, button_outlined.primary),
    outlinedSecondary: button_objectSpread({}, button_outlined.secondary),
    text: button_objectSpread({}, button_text.base),
    textSizeSmall: button_objectSpread({}, button_text.small),
    textSizeLarge: button_objectSpread({}, button_text.large),
    textPrimary: button_objectSpread({}, button_text.primary),
    textSecondary: button_objectSpread({}, button_text.secondary)
  }
};
/* harmony default export */ var components_button = (button_button);
// CONCATENATED MODULE: ./assets/theme/components/iconButton.js
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
// Soft UI Dashboard React Base Styles

const {
  transparent: iconButton_transparent
} = colors["a" /* default */];
const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: iconButton_transparent.main
      }
    }
  }
};
/* harmony default export */ var components_iconButton = (iconButton);
// CONCATENATED MODULE: ./assets/theme/components/form/inputBase.js
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
// Soft UI Dashboard React Base Styles


 // Soft UI Dashboard PRO helper functions


const {
  dark: inputBase_dark,
  white: inputBase_white,
  grey: inputBase_grey,
  inputColors: inputBase_inputColors
} = colors["a" /* default */];
const {
  size: inputBase_size,
  fontWeightRegular
} = base_typography;
const {
  borderWidth: inputBase_borderWidth,
  borderRadius: inputBase_borderRadius
} = base_borders;
const inputBase = {
  styleOverrides: {
    root: {
      display: "grid !important",
      placeItems: "center !important",
      width: "100% !important",
      height: "auto !important",
      padding: `${functions_pxToRem(8)} ${functions_pxToRem(12)}`,
      fontSize: `${inputBase_size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${inputBase_grey[700]} !important`,
      backgroundColor: `${inputBase_white.main} !important`,
      backgroundClip: "padding-box !important",
      border: `${inputBase_borderWidth[1]} solid ${inputBase_inputColors.borderColor.main}`,
      appearance: "none !important",
      borderRadius: inputBase_borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important"
    },
    input: {
      width: "100% !important",
      height: `${functions_pxToRem(22)}`,
      padding: "0 !important",
      "&::-webkit-input-placeholder": {
        color: `${inputBase_dark.main} !important`
      }
    }
  }
};
/* harmony default export */ var form_inputBase = (inputBase);
// CONCATENATED MODULE: ./assets/theme/components/menu/index.js
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
// Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  lg
} = base_boxShadows;
const {
  size: menu_size
} = base_typography;
const {
  text: menu_text,
  white: menu_white
} = colors["a" /* default */];
const {
  borderRadius: menu_borderRadius
} = base_borders;
const menu = {
  defaultProps: {
    disableAutoFocusItem: true
  },
  styleOverrides: {
    paper: {
      minWidth: functions_pxToRem(160),
      boxShadow: lg,
      padding: `${functions_pxToRem(16)} ${functions_pxToRem(8)}`,
      fontSize: menu_size.sm,
      color: menu_text.main,
      textAlign: "left",
      backgroundColor: `${menu_white.main} !important`,
      borderRadius: menu_borderRadius.md
    }
  }
};
/* harmony default export */ var components_menu = (menu);
// CONCATENATED MODULE: ./assets/theme/components/menu/menuItem.js
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
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  light: menuItem_light,
  text: menuItem_text,
  dark: menuItem_dark
} = colors["a" /* default */];
const {
  borderRadius: menuItem_borderRadius
} = base_borders;
const {
  size: menuItem_size
} = base_typography;
const menuItem = {
  styleOverrides: {
    root: {
      minWidth: functions_pxToRem(160),
      minHeight: "unset",
      padding: `${functions_pxToRem(4.8)} ${functions_pxToRem(16)}`,
      borderRadius: menuItem_borderRadius.md,
      fontSize: menuItem_size.sm,
      color: menuItem_text.main,
      transition: "background-color 300ms ease, color 300ms ease",
      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: menuItem_light.main,
        color: menuItem_dark.main
      }
    }
  }
};
/* harmony default export */ var menu_menuItem = (menuItem);
// CONCATENATED MODULE: ./assets/theme/components/form/switchButton.js
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
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions




const {
  white: switchButton_white,
  light: switchButton_light,
  gradients
} = colors["a" /* default */];
const {
  borderWidth: switchButton_borderWidth
} = base_borders;
const {
  md
} = base_boxShadows;
const switchButton = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: {
      width: functions_pxToRem(40),
      height: functions_pxToRem(20),
      margin: `${functions_pxToRem(4)} 0`,
      padding: 0,
      borderRadius: functions_pxToRem(160),
      transition: "transform 250ms ease-in"
    },
    switchBase: {
      padding: 0,
      top: "50%",
      transform: `translate(${functions_pxToRem(2)}, -50%)`,
      transition: `transform 250ms ease-in-out`,
      "&.Mui-checked": {
        transform: `translate(${functions_pxToRem(22)}, -50%)`,
        "& + .MuiSwitch-track": {
          backgroundColor: `${functions_rgba(gradients.dark.state, 0.95)} !important`,
          borderColor: `${functions_rgba(gradients.dark.state, 0.95)} !important`,
          opacity: 1
        }
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important"
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: functions_linearGradient(gradients.info.main, gradients.info.state)
      }
    },
    thumb: {
      width: functions_pxToRem(16),
      height: functions_pxToRem(16),
      backgroundColor: switchButton_white.main,
      boxShadow: md,
      top: "50%"
    },
    track: {
      backgroundColor: functions_rgba(gradients.dark.state, 0.1),
      border: `${switchButton_borderWidth[1]} solid ${switchButton_light.main}`,
      borderRadius: functions_pxToRem(160),
      opacity: 1,
      transition: `background-color 250ms ease, border-color 200ms ease`
    },
    checked: {}
  }
};
/* harmony default export */ var form_switchButton = (switchButton);
// CONCATENATED MODULE: ./assets/theme/components/divider.js
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
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions



const {
  dark: divider_dark,
  transparent: divider_transparent,
  white: divider_white
} = colors["a" /* default */];
const divider = {
  styleOverrides: {
    root: {
      backgroundColor: divider_transparent.main,
      backgroundImage: `linear-gradient(to right, ${functions_rgba(divider_dark.main, 0)}, ${functions_rgba(divider_dark.main, 0.5)}, ${functions_rgba(divider_dark.main, 0)}) !important`,
      height: functions_pxToRem(1),
      margin: `${functions_pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25
    },
    vertical: {
      backgroundColor: divider_transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${functions_rgba(divider_dark.main, 0)}, ${functions_rgba(divider_dark.main, 0.5)}, ${functions_rgba(divider_dark.main, 0)}) !important`,
      width: functions_pxToRem(1),
      height: "100%",
      margin: `0 ${functions_pxToRem(16)}`,
      borderRight: "none"
    },
    light: {
      backgroundColor: divider_transparent.main,
      backgroundImage: `linear-gradient(to right, ${functions_rgba(divider_white.main, 0)}, ${functions_rgba(divider_white.main, 0.5)}, ${functions_rgba(divider_white.main, 0)}) !important`,
      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${functions_rgba(divider_white.main, 0)}, ${functions_rgba(divider_white.main, 0.5)}, ${functions_rgba(divider_white.main, 0)}) !important`
      }
    }
  }
};
/* harmony default export */ var components_divider = (divider);
// CONCATENATED MODULE: ./assets/theme/components/table/tableContainer.js
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
// Soft UI Dashboard React base styles



const {
  white: tableContainer_white
} = colors["a" /* default */];
const {
  xxl: tableContainer_xxl
} = base_boxShadows;
const {
  borderRadius: tableContainer_borderRadius
} = base_borders;
const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: tableContainer_white.main,
      boxShadow: tableContainer_xxl,
      borderRadius: tableContainer_borderRadius.xl
    }
  }
};
/* harmony default export */ var table_tableContainer = (tableContainer);
// CONCATENATED MODULE: ./assets/theme/components/table/tableHead.js
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
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  borderRadius: tableHead_borderRadius
} = base_borders;
const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${functions_pxToRem(16)} ${functions_pxToRem(16)} 0  ${functions_pxToRem(16)}`,
      borderRadius: `${tableHead_borderRadius.xl} ${tableHead_borderRadius.xl} 0 0`
    }
  }
};
/* harmony default export */ var table_tableHead = (tableHead);
// CONCATENATED MODULE: ./assets/theme/components/table/tableCell.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  borderWidth: tableCell_borderWidth
} = base_borders;
const {
  light: tableCell_light
} = colors["a" /* default */];
const tableCell = {
  styleOverrides: {
    root: {
      padding: `${functions_pxToRem(12)} ${functions_pxToRem(16)}`,
      borderBottom: `${tableCell_borderWidth[1]} solid ${tableCell_light.main}`
    }
  }
};
/* harmony default export */ var table_tableCell = (tableCell);
// CONCATENATED MODULE: ./assets/theme/components/linearProgress.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  borderRadius: linearProgress_borderRadius
} = base_borders;
const {
  light: linearProgress_light
} = colors["a" /* default */];
const linearProgress = {
  styleOverrides: {
    root: {
      height: functions_pxToRem(3),
      borderRadius: linearProgress_borderRadius.md,
      overflow: "visible",
      position: "relative"
    },
    colorPrimary: {
      backgroundColor: linearProgress_light.main
    },
    colorSecondary: {
      backgroundColor: linearProgress_light.main
    },
    bar: {
      height: functions_pxToRem(6),
      borderRadius: linearProgress_borderRadius.sm,
      position: "absolute",
      transform: `translate(0, ${functions_pxToRem(-1.5)}) !important`,
      transition: "width 0.6s ease !important"
    }
  }
};
/* harmony default export */ var components_linearProgress = (linearProgress);
// CONCATENATED MODULE: ./assets/theme/components/breadcrumbs.js
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
// Soft UI Dashboard React base styles


const {
  grey: breadcrumbs_grey
} = colors["a" /* default */];
const {
  size: breadcrumbs_size
} = base_typography;
const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0
    },
    separator: {
      fontSize: breadcrumbs_size.sm,
      color: breadcrumbs_grey[600]
    }
  }
};
/* harmony default export */ var components_breadcrumbs = (breadcrumbs);
// CONCATENATED MODULE: ./assets/theme/components/slider.js
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
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions



const {
  light: slider_light,
  white: slider_white,
  sliderColors,
  black: slider_black,
  gradients: slider_gradients
} = colors["a" /* default */];
const {
  borderRadius: slider_borderRadius,
  borderWidth: slider_borderWidth
} = base_borders;
const {
  sliderBoxShadow
} = base_boxShadows;
const slider = {
  styleOverrides: {
    root: {
      width: "100%",
      "& .MuiSlider-active, & .Mui-focusVisible": {
        boxShadow: "none !important"
      },
      "& .MuiSlider-valueLabel": {
        color: slider_black.main
      }
    },
    rail: {
      height: functions_pxToRem(3),
      backgroundColor: slider_light.main,
      borderRadius: slider_borderRadius.sm
    },
    track: {
      backgroundImage: functions_linearGradient(slider_gradients.info.main, slider_gradients.info.state),
      height: functions_pxToRem(6),
      position: "relative",
      top: functions_pxToRem(2),
      border: "none",
      borderRadius: slider_borderRadius.lg,
      zIndex: 1
    },
    thumb: {
      width: functions_pxToRem(15),
      height: functions_pxToRem(15),
      backgroundColor: slider_white.main,
      zIndex: 10,
      boxShadow: sliderBoxShadow.thumb,
      border: `${slider_borderWidth[1]} solid ${sliderColors.thumb.borderColor}`,
      "&:hover": {
        boxShadow: "none"
      }
    }
  }
};
/* harmony default export */ var components_slider = (slider);
// CONCATENATED MODULE: ./assets/theme/components/avatar.js
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
// Soft UI Dashboard React base styles

const {
  borderRadius: avatar_borderRadius
} = base_borders;
const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out"
    },
    rounded: {
      borderRadius: avatar_borderRadius.lg
    },
    img: {
      height: "auto"
    }
  }
};
/* harmony default export */ var components_avatar = (avatar);
// EXTERNAL MODULE: external "@material-ui/core/Fade"
var Fade_ = __webpack_require__("QAc9");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./assets/theme/components/tooltip.js
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
// @mui material components
 // Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  black: tooltip_black,
  light: tooltip_light
} = colors["a" /* default */];
const {
  size: tooltip_size,
  fontWeightRegular: tooltip_fontWeightRegular
} = base_typography;
const {
  borderRadius: tooltip_borderRadius
} = base_borders;
const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade_default.a
  },
  styleOverrides: {
    tooltip: {
      maxWidth: functions_pxToRem(200),
      backgroundColor: tooltip_black.main,
      color: tooltip_light.main,
      fontSize: tooltip_size.sm,
      fontWeight: tooltip_fontWeightRegular,
      textAlign: "center",
      borderRadius: tooltip_borderRadius.md,
      opacity: 0.7,
      padding: `${functions_pxToRem(5)} ${functions_pxToRem(8)} ${functions_pxToRem(4)}`
    },
    arrow: {
      color: tooltip_black.main
    }
  }
};
/* harmony default export */ var components_tooltip = (tooltip);
// CONCATENATED MODULE: ./assets/theme/components/appBar.js
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
const appBar = {
  defaultProps: {
    color: "transparent"
  },
  styleOverrides: {
    root: {
      boxShadow: "none"
    }
  }
};
/* harmony default export */ var components_appBar = (appBar);
// CONCATENATED MODULE: ./assets/theme/components/tabs/index.js
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
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  grey: tabs_grey,
  white: tabs_white
} = colors["a" /* default */];
const {
  borderRadius: tabs_borderRadius
} = base_borders;
const {
  tabsBoxShadow
} = base_boxShadows;
const tabs_tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: tabs_grey[100],
      borderRadius: tabs_borderRadius.lg,
      minHeight: "unset",
      padding: functions_pxToRem(4)
    },
    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10
    },
    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important"
    },
    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%"
      }
    },
    indicator: {
      height: "100%",
      borderRadius: tabs_borderRadius.md,
      backgroundColor: tabs_white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease"
    }
  }
};
/* harmony default export */ var components_tabs = (tabs_tabs);
// CONCATENATED MODULE: ./assets/theme/components/tabs/tab.js
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
// Soft UI Dashboard React base styles


 // Soft UI Dashboard React helper functions


const {
  size: tab_size,
  fontWeightRegular: tab_fontWeightRegular
} = base_typography;
const {
  borderRadius: tab_borderRadius
} = base_borders;
const {
  dark: tab_dark
} = colors["a" /* default */];
const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: tab_size.md,
      fontWeight: tab_fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: functions_pxToRem(4),
      borderRadius: tab_borderRadius.md,
      color: `${tab_dark.main} !important`,
      opacity: "1 !important",
      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: functions_pxToRem(4)
      },
      "& svg": {
        marginBottom: "0 !important",
        marginRight: functions_pxToRem(6)
      }
    },
    labelIcon: {
      paddingTop: functions_pxToRem(4)
    }
  }
};
/* harmony default export */ var tabs_tab = (tab);
// CONCATENATED MODULE: ./assets/theme/components/stepper/index.js
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
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  transparent: stepper_transparent
} = colors["a" /* default */];
const stepper = {
  styleOverrides: {
    root: {
      margin: `${functions_pxToRem(48)} 0`,
      padding: `0 ${functions_pxToRem(12)}`,
      "&.MuiPaper-root": {
        backgroundColor: stepper_transparent.main
      }
    }
  }
};
/* harmony default export */ var components_stepper = (stepper);
// CONCATENATED MODULE: ./assets/theme/components/stepper/step.js
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
// Soft UI Dashboard React helper functions

const step = {
  styleOverrides: {
    root: {
      padding: `0 ${functions_pxToRem(6)}`
    }
  }
};
/* harmony default export */ var stepper_step = (step);
// CONCATENATED MODULE: ./assets/theme/components/stepper/stepConnector.js
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
// Soft UI Dashboard React base styles


const {
  dark: stepConnector_dark
} = colors["a" /* default */];
const {
  borderWidth: stepConnector_borderWidth,
  borderColor
} = base_borders;
const stepConnector = {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",
      "&.Mui-active": {
        color: stepConnector_dark.main
      },
      "&.Mui-completed": {
        color: stepConnector_dark.main
      }
    },
    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%"
    },
    line: {
      borderWidth: `${stepConnector_borderWidth[2]} !important`,
      borderColor: "currentColor"
    }
  }
};
/* harmony default export */ var stepper_stepConnector = (stepConnector);
// CONCATENATED MODULE: ./assets/theme/components/stepper/stepLabel.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  size: stepLabel_size,
  fontWeightRegular: stepLabel_fontWeightRegular
} = base_typography;
const {
  grey: stepLabel_grey,
  dark: stepLabel_dark,
  secondary: stepLabel_secondary
} = colors["a" /* default */];
const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${functions_pxToRem(8)} !important`,
      fontWeight: stepLabel_fontWeightRegular,
      fontSize: stepLabel_size.md,
      color: stepLabel_grey[300],
      "&.Mui-active": {
        fontWeight: `${stepLabel_fontWeightRegular} !important`,
        color: `${stepLabel_dark.main} !important`
      },
      "&.Mui-completed": {
        fontWeight: `${stepLabel_fontWeightRegular} !important`,
        color: `${stepLabel_secondary.main} !important`
      }
    }
  }
};
/* harmony default export */ var stepper_stepLabel = (stepLabel);
// CONCATENATED MODULE: ./assets/theme/components/stepper/stepIcon.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  dark: stepIcon_dark,
  white: stepIcon_white
} = colors["a" /* default */];
const {
  borderWidth: stepIcon_borderWidth,
  borderColor: stepIcon_borderColor
} = base_borders;
const stepIcon = {
  styleOverrides: {
    root: {
      background: stepIcon_white.main,
      fill: stepIcon_white.main,
      stroke: stepIcon_white.main,
      strokeWidth: functions_pxToRem(10),
      width: functions_pxToRem(13),
      height: functions_pxToRem(13),
      border: `${stepIcon_borderWidth[2]} solid ${stepIcon_borderColor}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",
      "&.Mui-active": {
        background: stepIcon_dark.main,
        fill: stepIcon_dark.main,
        stroke: stepIcon_dark.main,
        borderColor: stepIcon_dark.main,
        boxShadow: functions_boxShadow([0, 0], [0, 2], stepIcon_dark.main, 1)
      },
      "&.Mui-completed": {
        background: stepIcon_dark.main,
        fill: stepIcon_dark.main,
        stroke: stepIcon_dark.main,
        borderColor: stepIcon_dark.main,
        boxShadow: functions_boxShadow([0, 0], [0, 2], stepIcon_dark.main, 1)
      }
    }
  }
};
/* harmony default export */ var stepper_stepIcon = (stepIcon);
// CONCATENATED MODULE: ./assets/theme/components/form/select.js
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
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  transparent: select_transparent
} = colors["a" /* default */];
const select_select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${functions_pxToRem(12)} !important`,
      "& .Mui-selected": {
        backgroundColor: select_transparent.main
      }
    },
    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset"
    },
    icon: {
      display: "none"
    }
  }
};
/* harmony default export */ var form_select = (select_select);
// CONCATENATED MODULE: ./assets/theme/components/form/formControlLabel.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions


const {
  dark: formControlLabel_dark
} = colors["a" /* default */];
const {
  size: formControlLabel_size,
  fontWeightBold: formControlLabel_fontWeightBold
} = base_typography;
const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: functions_pxToRem(24),
      marginBottom: functions_pxToRem(2)
    },
    label: {
      display: "inline-block",
      fontSize: formControlLabel_size.sm,
      fontWeight: formControlLabel_fontWeightBold,
      color: formControlLabel_dark.main,
      lineHeight: 1,
      transform: `translateY(${functions_pxToRem(1)})`,
      marginLeft: functions_pxToRem(4),
      "&.Mui-disabled": {
        color: formControlLabel_dark.main
      }
    }
  }
};
/* harmony default export */ var form_formControlLabel = (formControlLabel);
// CONCATENATED MODULE: ./assets/theme/components/form/formLabel.js
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
// Soft UI Dashboard React base styles

const {
  dark: formLabel_dark
} = colors["a" /* default */];
const formLabel = {
  styleOverrides: {
    root: {
      color: formLabel_dark.main
    }
  }
};
/* harmony default export */ var form_formLabel = (formLabel);
// CONCATENATED MODULE: ./assets/theme/components/form/checkbox.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  borderWidth: checkbox_borderWidth,
  borderColor: checkbox_borderColor
} = base_borders;
const {
  transparent: checkbox_transparent,
  gradients: checkbox_gradients,
  info: checkbox_info
} = colors["a" /* default */];
const checkbox_checkbox = {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: functions_pxToRem(20),
      height: functions_pxToRem(20),
      marginRight: functions_pxToRem(6),
      padding: 0,
      color: checkbox_transparent.main,
      border: `${checkbox_borderWidth[1]} solid ${checkbox_borderColor}`,
      borderRadius: functions_pxToRem(5.6),
      transition: "all 250ms ease",
      "&:hover": {
        backgroundColor: checkbox_transparent.main
      },
      "& .MuiSvgIcon-root": {
        fill: checkbox_transparent.main
      },
      "&.Mui-focusVisible": {
        border: `${checkbox_borderWidth[2]} solid ${checkbox_info.main} !important`
      }
    },
    colorPrimary: {
      backgroundColor: checkbox_transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${functions_linearGradient(checkbox_gradients.dark.main, checkbox_gradients.dark.state)}`,
        borderColor: checkbox_gradients.dark.main
      },
      "&:hover": {
        backgroundColor: checkbox_transparent.main
      }
    },
    colorSecondary: {
      backgroundColor: checkbox_transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${functions_linearGradient(checkbox_gradients.dark.main, checkbox_gradients.dark.state)}`,
        borderColor: checkbox_gradients.dark.main
      },
      "&:hover": {
        backgroundColor: checkbox_transparent.main
      }
    }
  }
};
/* harmony default export */ var form_checkbox = (checkbox_checkbox);
// CONCATENATED MODULE: ./assets/theme/components/form/radio.js
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
// Soft UI Dashboard React base styles

 // Soft UI Dashboard React helper functions



const {
  borderWidth: radio_borderWidth,
  borderColor: radio_borderColor
} = base_borders;
const {
  transparent: radio_transparent,
  gradients: radio_gradients,
  info: radio_info
} = colors["a" /* default */];
const radio_radio = {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: functions_pxToRem(20),
      height: functions_pxToRem(20),
      marginRight: functions_pxToRem(6),
      padding: 0,
      color: radio_transparent.main,
      border: `${radio_borderWidth[1]} solid ${radio_borderColor}`,
      borderRadius: "50%",
      transition: "all 250ms ease",
      "&:hover": {
        backgroundColor: radio_transparent.main
      },
      "& .MuiSvgIcon-root": {
        fill: radio_transparent.main
      },
      "&.Mui-focusVisible": {
        border: `${radio_borderWidth[2]} solid ${radio_info.main} !important`
      }
    },
    colorPrimary: {
      backgroundColor: radio_transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${functions_linearGradient(radio_gradients.dark.main, radio_gradients.dark.state)}`,
        borderColor: radio_gradients.dark.main
      },
      "&:hover": {
        backgroundColor: radio_transparent.main
      }
    },
    colorSecondary: {
      backgroundColor: radio_transparent.main,
      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${functions_linearGradient(radio_gradients.dark.main, radio_gradients.dark.state)}`,
        borderColor: radio_gradients.dark.main
      },
      "&:hover": {
        backgroundColor: radio_transparent.main
      }
    }
  }
};
/* harmony default export */ var form_radio = (radio_radio);
// CONCATENATED MODULE: ./assets/theme/components/form/autocomplete.js
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
// Soft UI Dashboard React base styles



 // Soft UI Dashboard React helper functions


const {
  lg: autocomplete_lg
} = base_boxShadows;
const {
  size: autocomplete_size
} = base_typography;
const {
  text: autocomplete_text,
  white: autocomplete_white,
  transparent: autocomplete_transparent,
  light: autocomplete_light,
  dark: autocomplete_dark,
  gradients: autocomplete_gradients
} = colors["a" /* default */];
const {
  borderRadius: autocomplete_borderRadius
} = base_borders;
const autocomplete = {
  styleOverrides: {
    popper: {
      boxShadow: autocomplete_lg,
      padding: functions_pxToRem(8),
      fontSize: autocomplete_size.sm,
      color: autocomplete_text.main,
      textAlign: "left",
      backgroundColor: `${autocomplete_white.main} !important`,
      borderRadius: autocomplete_borderRadius.md
    },
    paper: {
      boxShadow: "none",
      backgroundColor: autocomplete_transparent.main
    },
    option: {
      padding: `${functions_pxToRem(4.8)} ${functions_pxToRem(16)}`,
      borderRadius: autocomplete_borderRadius.md,
      fontSize: autocomplete_size.sm,
      color: autocomplete_text.main,
      transition: "background-color 300ms ease, color 300ms ease",
      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: autocomplete_light.main,
        color: autocomplete_dark.main
      },
      '&[aria-selected="true"]': {
        backgroundColor: `${autocomplete_light.main} !important`,
        color: `${autocomplete_dark.main} !important`
      }
    },
    noOptions: {
      fontSize: autocomplete_size.sm,
      color: autocomplete_text.main
    },
    groupLabel: {
      color: autocomplete_dark.main
    },
    loading: {
      fontSize: autocomplete_size.sm,
      color: autocomplete_text.main
    },
    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: functions_pxToRem(4),
      backgroundColor: autocomplete_gradients.dark.state,
      color: autocomplete_white.main,
      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${functions_pxToRem(10)} 0 ${functions_pxToRem(4)}`
      },
      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: autocomplete_white.main,
        marginRight: 0
      }
    }
  }
};
/* harmony default export */ var form_autocomplete = (autocomplete);
// CONCATENATED MODULE: ./assets/theme/components/form/input.js
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
// Soft UI Dashboard React Base Styles

 // Soft UI Dashboard PRO helper functions


const {
  inputColors: input_inputColors
} = colors["a" /* default */];
const {
  borderWidth: input_borderWidth,
  borderRadius: input_borderRadius
} = base_borders;
const input = {
  styleOverrides: {
    root: {
      display: "flex !important",
      padding: `${functions_pxToRem(8)} ${functions_pxToRem(28)} ${functions_pxToRem(8)} ${functions_pxToRem(12)} !important`,
      border: `${input_borderWidth[1]} solid ${input_inputColors.borderColor.main}`,
      borderRadius: `${input_borderRadius.md} !important`,
      "& fieldset": {
        border: "none"
      }
    },
    input: {
      height: functions_pxToRem(22),
      width: "max-content !important"
    },
    inputSizeSmall: {
      height: functions_pxToRem(14)
    }
  }
};
/* harmony default export */ var form_input = (input);
// CONCATENATED MODULE: ./assets/theme/components/container.js
function container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { container_ownKeys(Object(source), true).forEach(function (key) { container_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// Soft UI Dashboard React base styles
 // Soft UI Dashboard React helper functions


const {
  values: {
    sm,
    md: container_md,
    lg: container_lg,
    xl,
    xxl: container_xxl
  }
} = base_breakpoints;
const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${container_md}px)`;
const LG = `@media (min-width: ${container_lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${container_xxl}px)`;
const sharedClasses = {
  paddingRight: `${functions_pxToRem(24)} !important`,
  paddingLeft: `${functions_pxToRem(24)} !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative"
};
const container = {
  [SM]: {
    ".MuiContainer-root": container_objectSpread(container_objectSpread({}, sharedClasses), {}, {
      maxWidth: "540px !important"
    })
  },
  [MD]: {
    ".MuiContainer-root": container_objectSpread(container_objectSpread({}, sharedClasses), {}, {
      maxWidth: "720px !important"
    })
  },
  [LG]: {
    ".MuiContainer-root": container_objectSpread(container_objectSpread({}, sharedClasses), {}, {
      maxWidth: "960px !important"
    })
  },
  [XL]: {
    ".MuiContainer-root": container_objectSpread(container_objectSpread({}, sharedClasses), {}, {
      maxWidth: "1140px !important"
    })
  },
  [XXL]: {
    ".MuiContainer-root": container_objectSpread(container_objectSpread({}, sharedClasses), {}, {
      maxWidth: "1320px !important"
    })
  }
};
/* harmony default export */ var components_container = (container);
// CONCATENATED MODULE: ./assets/theme/components/popover.js
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
// Soft UI Dashboard React helper functions
 // Soft UI Dashboard React base styles




const {
  transparent: popover_transparent
} = colors["a" /* default */];
const {
  lg: popover_lg
} = base_boxShadows;
const {
  borderRadius: popover_borderRadius
} = base_borders;
const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: popover_transparent.main,
      boxShadow: popover_lg,
      padding: functions_pxToRem(8),
      borderRadius: popover_borderRadius.lg
    }
  }
};
/* harmony default export */ var components_popover = (popover);
// CONCATENATED MODULE: ./assets/theme/components/buttonBase.js
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
const buttonBase = {
  defaultProps: {
    disableRipple: true
  }
};
/* harmony default export */ var components_buttonBase = (buttonBase);
// CONCATENATED MODULE: ./assets/theme/components/icon.js
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
// Soft UI Dashboard React helper functions

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit"
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important"
    },
    fontSizeSmall: {
      fontSize: `${functions_pxToRem(20)} !important`
    },
    fontSizeLarge: {
      fontSize: `${functions_pxToRem(36)} !important`
    }
  }
};
/* harmony default export */ var components_icon = (icon);
// CONCATENATED MODULE: ./assets/theme/components/svgIcon.js
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
// Soft UI Dashboard React helper functions

const svgIcon = {
  defaultProps: {
    fontSize: "inherit"
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important"
    },
    fontSizeSmall: {
      fontSize: `${functions_pxToRem(20)} !important`
    },
    fontSizeLarge: {
      fontSize: `${functions_pxToRem(36)} !important`
    }
  }
};
/* harmony default export */ var components_svgIcon = (svgIcon);
// CONCATENATED MODULE: ./assets/theme/components/link.js
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
const link_link = {
  defaultProps: {
    underline: "none",
    color: "inherit"
  }
};
/* harmony default export */ var components_link = (link_link);
// CONCATENATED MODULE: ./assets/theme/index.js
function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Soft UI Dashboard React base styles






 // Soft UI Dashboard React helper functions





 // Soft UI Dashboard React components base styles for @mui material components












































/* harmony default export */ var theme = (Object(styles_["createMuiTheme"])({
  breakpoints: theme_objectSpread({}, base_breakpoints),
  palette: theme_objectSpread({}, colors["a" /* default */]),
  typography: theme_objectSpread({}, base_typography),
  boxShadows: theme_objectSpread({}, base_boxShadows),
  borders: theme_objectSpread({}, base_borders),
  functions: {
    boxShadow: functions_boxShadow,
    hexToRgb: functions_hexToRgb,
    linearGradient: functions_linearGradient,
    pxToRem: functions_pxToRem,
    rgba: functions_rgba
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme_objectSpread(theme_objectSpread({}, base_globals), components_container)
    },
    MuiDrawer: theme_objectSpread({}, components_sidenav),
    MuiList: theme_objectSpread({}, components_list),
    MuiListItem: theme_objectSpread({}, list_listItem),
    MuiListItemText: theme_objectSpread({}, list_listItemText),
    MuiCard: theme_objectSpread({}, components_card),
    MuiCardMedia: theme_objectSpread({}, card_cardMedia),
    MuiCardContent: theme_objectSpread({}, card_cardContent),
    MuiButton: theme_objectSpread({}, components_button),
    MuiIconButton: theme_objectSpread({}, components_iconButton),
    MuiInputBase: theme_objectSpread({}, form_inputBase),
    MuiMenu: theme_objectSpread({}, components_menu),
    MuiMenuItem: theme_objectSpread({}, menu_menuItem),
    MuiSwitch: theme_objectSpread({}, form_switchButton),
    MuiDivider: theme_objectSpread({}, components_divider),
    MuiTableContainer: theme_objectSpread({}, table_tableContainer),
    MuiTableHead: theme_objectSpread({}, table_tableHead),
    MuiTableCell: theme_objectSpread({}, table_tableCell),
    MuiLinearProgress: theme_objectSpread({}, components_linearProgress),
    MuiBreadcrumbs: theme_objectSpread({}, components_breadcrumbs),
    MuiSlider: theme_objectSpread({}, components_slider),
    MuiAvatar: theme_objectSpread({}, components_avatar),
    MuiTooltip: theme_objectSpread({}, components_tooltip),
    MuiAppBar: theme_objectSpread({}, components_appBar),
    MuiTabs: theme_objectSpread({}, components_tabs),
    MuiTab: theme_objectSpread({}, tabs_tab),
    MuiStepper: theme_objectSpread({}, components_stepper),
    MuiStep: theme_objectSpread({}, stepper_step),
    MuiStepConnector: theme_objectSpread({}, stepper_stepConnector),
    MuiStepLabel: theme_objectSpread({}, stepper_stepLabel),
    MuiStepIcon: theme_objectSpread({}, stepper_stepIcon),
    MuiSelect: theme_objectSpread({}, form_select),
    MuiFormControlLabel: theme_objectSpread({}, form_formControlLabel),
    MuiFormLabel: theme_objectSpread({}, form_formLabel),
    MuiCheckbox: theme_objectSpread({}, form_checkbox),
    MuiRadio: theme_objectSpread({}, form_radio),
    MuiAutocomplete: theme_objectSpread({}, form_autocomplete),
    MuiInput: theme_objectSpread({}, form_input),
    MuiOutlinedInput: theme_objectSpread({}, form_input),
    MuiFilledInput: theme_objectSpread({}, form_input),
    MuiPopover: theme_objectSpread({}, components_popover),
    MuiButtonBase: theme_objectSpread({}, components_buttonBase),
    MuiIcon: theme_objectSpread({}, components_icon),
    MuiSvgIcon: theme_objectSpread({}, components_svgIcon),
    MuiLink: theme_objectSpread({}, components_link)
  }
}));
// CONCATENATED MODULE: ./assets/theme/theme-rtl.js
function theme_rtl_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_rtl_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_rtl_ownKeys(Object(source), true).forEach(function (key) { theme_rtl_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_rtl_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_rtl_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Soft UI Dashboard React base styles






 // Soft UI Dashboard React helper functions





 // Soft UI Dashboard React components base styles for @mui material components












































/* harmony default export */ var theme_rtl = (Object(styles_["createMuiTheme"])({
  direction: "rtl",
  breakpoints: theme_rtl_objectSpread({}, base_breakpoints),
  palette: theme_rtl_objectSpread({}, colors["a" /* default */]),
  typography: theme_rtl_objectSpread({}, base_typography),
  boxShadows: theme_rtl_objectSpread({}, base_boxShadows),
  borders: theme_rtl_objectSpread({}, base_borders),
  functions: {
    boxShadow: functions_boxShadow,
    hexToRgb: functions_hexToRgb,
    linearGradient: functions_linearGradient,
    pxToRem: functions_pxToRem,
    rgba: functions_rgba
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme_rtl_objectSpread(theme_rtl_objectSpread({}, base_globals), components_container)
    },
    MuiDrawer: theme_rtl_objectSpread({}, components_sidenav),
    MuiList: theme_rtl_objectSpread({}, components_list),
    MuiListItem: theme_rtl_objectSpread({}, list_listItem),
    MuiListItemText: theme_rtl_objectSpread({}, list_listItemText),
    MuiCard: theme_rtl_objectSpread({}, components_card),
    MuiCardMedia: theme_rtl_objectSpread({}, card_cardMedia),
    MuiCardContent: theme_rtl_objectSpread({}, card_cardContent),
    MuiButton: theme_rtl_objectSpread({}, components_button),
    MuiIconButton: theme_rtl_objectSpread({}, components_iconButton),
    MuiInputBase: theme_rtl_objectSpread({}, form_inputBase),
    MuiMenu: theme_rtl_objectSpread({}, components_menu),
    MuiMenuItem: theme_rtl_objectSpread({}, menu_menuItem),
    MuiSwitch: theme_rtl_objectSpread({}, form_switchButton),
    MuiDivider: theme_rtl_objectSpread({}, components_divider),
    MuiTableContainer: theme_rtl_objectSpread({}, table_tableContainer),
    MuiTableHead: theme_rtl_objectSpread({}, table_tableHead),
    MuiTableCell: theme_rtl_objectSpread({}, table_tableCell),
    MuiLinearProgress: theme_rtl_objectSpread({}, components_linearProgress),
    MuiBreadcrumbs: theme_rtl_objectSpread({}, components_breadcrumbs),
    MuiSlider: theme_rtl_objectSpread({}, components_slider),
    MuiAvatar: theme_rtl_objectSpread({}, components_avatar),
    MuiTooltip: theme_rtl_objectSpread({}, components_tooltip),
    MuiAppBar: theme_rtl_objectSpread({}, components_appBar),
    MuiTabs: theme_rtl_objectSpread({}, components_tabs),
    MuiTab: theme_rtl_objectSpread({}, tabs_tab),
    MuiStepper: theme_rtl_objectSpread({}, components_stepper),
    MuiStep: theme_rtl_objectSpread({}, stepper_step),
    MuiStepConnector: theme_rtl_objectSpread({}, stepper_stepConnector),
    MuiStepLabel: theme_rtl_objectSpread({}, stepper_stepLabel),
    MuiStepIcon: theme_rtl_objectSpread({}, stepper_stepIcon),
    MuiSelect: theme_rtl_objectSpread({}, form_select),
    MuiFormControlLabel: theme_rtl_objectSpread({}, form_formControlLabel),
    MuiFormLabel: theme_rtl_objectSpread({}, form_formLabel),
    MuiCheckbox: theme_rtl_objectSpread({}, form_checkbox),
    MuiRadio: theme_rtl_objectSpread({}, form_radio),
    MuiAutocomplete: theme_rtl_objectSpread({}, form_autocomplete),
    MuiInput: theme_rtl_objectSpread({}, form_input),
    MuiOutlinedInput: theme_rtl_objectSpread({}, form_input),
    MuiFilledInput: theme_rtl_objectSpread({}, form_input),
    MuiPopover: theme_rtl_objectSpread({}, components_popover),
    MuiButtonBase: theme_rtl_objectSpread({}, components_buttonBase),
    MuiIcon: theme_rtl_objectSpread({}, components_icon),
    MuiSvgIcon: theme_rtl_objectSpread({}, components_svgIcon),
    MuiLink: theme_rtl_objectSpread({}, components_link)
  }
}));
// EXTERNAL MODULE: ./assets/css/nextjs-material-dashboard.css?v=1.1.0
var nextjs_material_dashboardv_1_1 = __webpack_require__("MVND");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__("IHQW");

// EXTERNAL MODULE: ./pages/_toast.js
var _toast = __webpack_require__("pA9Q");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: ./redux/index.ts + 1 modules
var redux = __webpack_require__("2FK4");

// CONCATENATED MODULE: ./components/AuthProvider/AuthProvider.tsx





function AuthProvider({
  children
}) {
  const router = Object(router_["useRouter"])();
  const {
    data: session,
    status
  } = Object(react_["useSession"])();
  const isUser = !!(session !== null && session !== void 0 && session.user);
  const dispatch = Object(redux["i" /* useAppDispatch */])();
  const sessionKey = Object(redux["j" /* useAppSelector */])(redux["c" /* selectSessionKey */]);
  console.log("session", status, session);
  external_react_default.a.useEffect(() => {
    var _session$data, _session$data$user;

    if ((session === null || session === void 0 ? void 0 : session.status) === "unauthenticated") router.push("/authentication/sign-in");
    localStorage.setItem("sa_access_token", (_session$data = session.data) === null || _session$data === void 0 ? void 0 : (_session$data$user = _session$data.user) === null || _session$data$user === void 0 ? void 0 : _session$data$user.token);
  });
  if (isUser) return children;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: "Loading..."
  });
}
// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















router_default.a.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  console.log(`Process: ${"http://teststudent.hiast.edu.sy/backend/public"}`);
  document.body.classList.add("body-page-transition"); // ReactDOM.render(
  //   <PageChange path={url} />,
  //   document.getElementById("page-transition")
  // );
});
router_default.a.events.on("routeChangeComplete", () => {
  external_react_dom_default.a.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
router_default.a.events.on("routeChangeError", () => {
  external_react_dom_default.a.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
class _app_MyApp extends app_default.a {
  constructor(params) {
    super(params);
    this.state = {
      backToSignIn: false
    };
  }

  async componentDidMount() {
    let comment = document.createComment(`Component Did mount`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      let key = localStorage.getItem("sa_access_token");
      let profile = JSON.parse(localStorage.getItem("logged_in_profile"));
      pageProps = await Component.getInitialProps(ctx);
      pageProps.sessionKey = key;
      pageProps.profile = profile;
      console.clear();
      console.log(pageProps);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;

    const Layout = Component.layout || (({
      children
    }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: children
    }));

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["SessionProvider"], {
        session: pageProps.session,
        children: Component.auth ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
              theme: theme_rtl,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CssBaseline"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(_toast["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))]
            })
          })]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {})]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
              theme: theme,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CssBaseline"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(_toast["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))]
            })
          })]
        })
      })
    });
  }

}

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "IHQW":
/***/ (function(module, exports) {

module.exports = require("next-auth/react");

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

/***/ "MVND":
/***/ (function(module, exports) {



/***/ }),

/***/ "QAc9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "QmcS":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "pA9Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomToastContainer; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jDDT");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BAEn");






function CustomToastContainer() {
  const {
    locale
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: locale === 'ar',
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light"
  });
}

/***/ }),

/***/ "pDG+":
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });