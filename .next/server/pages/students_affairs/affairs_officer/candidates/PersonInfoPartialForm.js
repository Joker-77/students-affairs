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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B2g9");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "pDG+":
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })

/******/ });