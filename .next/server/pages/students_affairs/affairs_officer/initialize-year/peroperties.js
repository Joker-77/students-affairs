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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DVEy");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "DVEy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UsYt");
/* harmony import */ var _components_Card_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2zww");
/* harmony import */ var _assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Z3aw");
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("BAEn");
/* harmony import */ var _assets_jss_nextjs_material_dashboard_views_rtlStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("dCKf");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);











const Properties = ({
  open,
  title,
  handleClose,
  handleConfirm
}) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px"
  };
  const cardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px"
  };
  const {
    translate
  } = Object(_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_6__[/* useTranslation */ "a"])();
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_nextjs_material_dashboard_views_rtlStyle_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: style,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        style: cardStyle,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Card_CardHeader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          dir: "rtl",
          style: {
            height: "5em",
            borderTopRightRadius: "inherit",
            borderTopLeftRadius: "inherit",
            backgroundColor: _assets_theme_base_colors__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].gradients.primary.main,
            color: "#fff"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
            style: {
              fontWeight: "bold"
            },
            children: title
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            container: true,
            dir: "rtl",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
              item: true,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
                initialValues: {
                  picked: "1"
                },
                onSubmit: values => {
                  switch (values.picked) {
                    case "1":
                      handleConfirm(values.picked, `${translate("do you want to")} ${translate("Open new educational year")}% 
                           ${translate("import educational plan from previous year")}`);
                      break;

                    case "2":
                      handleConfirm(values.picked, `${translate("do you want to")} ${translate("Open new educational year")}% 
                           ${translate("import educational plan and assign teachers")}`);
                      break;

                    case "3":
                      handleConfirm(values.picked, `${translate("do you want to")} ${translate("Open new educational year")}%
                           ${translate("no import")}`);
                      break;

                    default:
                      handleConfirm("0", `${translate("do you want to")} 
                             ${translate("Open new educational year")} ${translate("import educational plan from previous year")}`);
                      break;
                  }
                },
                children: ({
                  values,
                  handleChange
                }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
                      id: "demo-radio-buttons-group-label",
                      children: translate("do you want to")
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
                      "aria-labelledby": "demo-radio-buttons-group-label",
                      name: "picked",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                          checked: values.picked == "1",
                          onChange: handleChange,
                          style: {
                            color: "#01579b"
                          },
                          defaultValue: values.picked,
                          value: "1"
                        }),
                        label: translate("import educational plan from previous year")
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
                        name: "picked",
                        value: "male",
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                          checked: values.picked == "2",
                          onChange: handleChange,
                          style: {
                            color: "#01579b"
                          },
                          value: "2"
                        }),
                        label: translate("import educational plan and assign teachers")
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
                        name: "picked",
                        control: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
                          checked: values.picked == "3",
                          onChange: handleChange,
                          style: {
                            color: "#01579b"
                          },
                          value: "3"
                        }),
                        label: translate("no import")
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
                      item: true,
                      style: {
                        display: "flex",
                        justifyContent: "space-around"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                        type: "submit",
                        style: {
                          margin: "2em 5px",
                          width: "30%"
                        },
                        variant: "contained",
                        className: classes.submitBtn,
                        onClick: handleConfirm,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          style: {
                            padding: "0px 0px 0px 10px"
                          },
                          children: translate("Confirm")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                        type: "button",
                        style: {
                          margin: "2em 5px",
                          width: "30%"
                        },
                        variant: "contained",
                        className: classes.closeBtn,
                        onClick: handleClose,
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          style: {
                            padding: "0px 0px 0px 10px"
                          },
                          children: translate("Cancel")
                        })
                      })]
                    })]
                  })
                })
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Properties);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "pDG+":
/***/ (function(module) {

module.exports = JSON.parse("{\"Hiast Students Affairs\":\"نظام معلومات الطالب\",\"Hello Admin!\":\"مرحباً!\",\"Actions\":\"الأزرار\",\"First Page\":\"الصفحة الأولى\",\"Previous Page\":\"الصفخة السابقة\",\"Next Page\":\"الصفحة التالي\",\"Rows\":\"أسطر\",\"Rows per page\":\"سطر بالصفحة\",\"Last Page\":\"الصفحة الأخيرة\",\"of\":\"من\",\"Copyrights\":\"حقوق النشر محفوظة\",\"No data found\":\"لا يوجد بيانات حتى الآن\",\"Add New Candidate\":\"إضافة مرشح جديد\",\"Candidates List\":\"قائمة المرشحين\",\"Add New Certificate\":\"إضافة شهادة جديدة\",\"Add New Speciality\":\"إضافة اختصاص جديد\",\"Add Candidate\":\"إضافة مرشح\",\"Update Candidate\":\"تعديل مرشح\",\"Course\":\"المقرر\",\"Add New Course\":\"إضافة مقرر جديد\",\"Courses List\":\"قائمة المقررات\",\"Course Details\":\"تفاصيل المقرر\",\"Course Name\":\"اسم المقرر\",\"French Name\":\"الاسم بالفرنسية\",\"Course Code\":\"رمز المقرر\",\"Total Hours\":\"عدد الساعات الكلية\",\"Credit Hours\":\"وحدات التعلّم\",\"Add Course Document\":\"إضافة استمارة مقرر\",\"Export To Excel\":\"تصدير إلى إكسل\",\"Print\":\"طباعة\",\"Theoretical Hours\":\"عدد ساعات النظري\",\"Theoretical Classes\":\"فئات النظري\",\"Practical Hours\":\"عدد ساعات العملي\",\"Practical Classes\":\"فئات العملي\",\"Mixed Hours\":\"عدد ساعات النظري/العملي\",\"Mixed Classes\":\"فئات النظري/العملي\",\"Evaluations Method\":\"طرائق تقييم\",\"Add an evaluation method\":\"إضافة طريقة تقييم\",\"Edit Course\":\"تعديل معلومات المقرّر\",\"Upload a file\":\"رفع مرفق\",\"Need at least one evaluation method\":\"يجب إضافة طريقة تقييم واحدة على الأقل\",\"Need an attachement for this course\":\"يجب رفع مرفق خاص بهذا المقرر\",\"Edit description\":\"تعديل معلومات الاستمارة\",\"Back to edit basic info\":\"عودة إلى معلومات المقرر الرئيسية\",\"Delete a course\":\"حذف مقرر\",\"Are you sure you want to delete this course\":\"هل أنت متأكد من حذف هذا المقرّر\",\"Select Columns\":\"اختيار الأعمدة\",\"Teachers List\":\"قائمة المدرسين\",\"ID Number\":\"الرقم الذاتي\",\"Add New Teacher\":\"إضافة مدرس جديد\",\"Teacher Details\":\"تفاصيل المدرس\",\"Functional Body\":\"الهيئة\",\"Work Field\":\"مكان العمل\",\"Activity\":\"الفعالية\",\"Office Phone\":\"الهاتف الداخلي\",\"Father name\":\"اسم الأب\",\"Name prefix\":\"سابقة الاسم\",\"Primary number\":\"رقم أساسي 1\",\"Mobile 1\":\"موبايل 1\",\"Degree\":\"شهادة المدرس\",\"HIAST graduate\":\"خريج معهد عالي\",\"Status\":\"الوضع الحالي\",\"Secondary number\":\"هاتف 2\",\"Office number\":\"هاتف المكتب\",\"Mobile 2\":\"موبايل 2\",\"Teacher Name\":\"اسم المدرس\",\"Dr.\":\"د.\",\"Ma.\":\"ما.\",\"Eng.\":\"م.\",\"Mr.\":\"أ.\",\"HIAST\":\"معهد عالي\",\"Center\":\"مركز\",\"Outsider\":\"خارج الملاك\",\"HIAST Secretariat\":\"أمانة المعهد\",\"Directorate of Administrative and Financial Affairs\":\"مديرية الشؤون الإدارية والمالية\",\"Directorate of Rehabilitation and Continuing Training\":\"مديرية التأهيل والتدريب المستمر\",\"Environmental Studies Laboratory\":\"مخبر الدراسات البيئية\",\"Urban Services Department\":\"دائرة الخدمات العمرانية\",\"Technical maintenance department\":\"دائرة الصيانة الفنية\",\"Student Affairs Directorate - Library Department\":\"مديرية شؤون الطلاب - دائرة المكتبة\",\"Student Affairs Directorate - Registration and Follow-up Department\":\"مديرية شؤون الطلاب - دائرة التسجيل والمتابعة\",\"HIAST Administration\":\"إدارة المعهد\",\"Mathematics Department\":\"قسم الرياضيات\",\"Physics Department\":\"قسم الفيزياء\",\"Informatics department\":\"قسم المعلوميات\",\"Mecatronics Department\":\"قسم النظم الإلكترونية والميكانيكية\",\"Management Engineering Department\":\"قسم هندسة الإدارة\",\"Foreign Language Education Center\":\"مركز تعليم اللغات الأجنبية\",\"Directorate of Planning and Follow-up\":\"مديرية التخطيط والمتابعة\",\"Directorate of Professional Work Coordination\":\"مديرية تنسيق العمل المهني\",\"Student Affairs Directorate - Examinations Department\":\"مديرية شؤون الطلاب - دائرة الامتحانات\",\"Restaurnt Department\":\"دائرة المطعم\",\"Student Affairs Directorate - Division of Sports Activities\":\"مديرية شؤون الطلاب - شعبة الأنشطة الرياضية\",\"Student Affairs Directorate - City Residential Department\":\"مديرية شؤون الطلاب - دائرة المدينة السكنية\",\"Student Affairs Directorate - Social Activities Department\":\"مديرية شؤون الطلاب - دائرة الأنشطة الاجتماعية\",\"Telecommunications department\":\"قسم الاتصالات\",\"Directorate of Scientific Cooperation, Media and Publishing\":\"مديرية التعاون العلمي والإعلام والنشر\",\"Department of Public Relations and Services Relations\":\"دائرة العلاقات العلاقات العامة والخدمات\",\"Directorate of Student Affairs - Higher Education Department\":\"مديرية شؤون الطلاب - دائرة الدراسات العليا\",\"Informatics Services and Software Development Directorate\":\"مديرية الخدمات المعلوماتية والتطوير البرمجي\",\"Student Affairs Directorate\":\"مديرية شؤون الطلاب\",\"Institute 1000\":\"معهد 1000\",\"Research and Development Branch\":\"فرع البحث والتطوير\",\"Electronic Industries Branch 410\":\"فرع الصناعات الإلكترونية 410\",\"Institute of Mechanics 2000\":\"معهد الميكانيك 2000\",\"Mechanical Industries Branch\":\"فرع الصناعات الميكانيكية\",\"Institute of Chemistry 3000\":\"معهد الكيمياء 3000\",\"Aviation Institute 4000\":\"معهد الطيران 4000\",\"Branch 350\":\"الفرع 350\",\"Project 99\":\"المشروع 99\",\"Studies and Planning Department\":\"إدارة الدراسات والتخطيط\",\"Directorate of Information Resources\":\"مديرية موارد المعلومات\",\"Coordination Directorate\":\"مديرية التنسيق\",\"National Standards and Calibration Laboratory\":\"المخبر الوطني للمعايير والمعايرة\",\"Branch 550\":\"الفرع 550\",\"Sector 4\":\"القطاع 4\",\"Administrative and financial affairs of the Centre\":\"الشؤون الادارية والمالية بالمركز\",\"Institute 6000\":\"معهد 6000\",\"Branch 650\":\"الفرع 650\",\"Activity in HIAST\":\"الفعالية ضمن المعهد\",\"Activity in Center\":\"الفعالية ضمن المركز\",\"Active\":\"على رأس عمله\",\"Delegate\":\"موفد\",\"Retired\":\"متقاعد\",\"Dead\":\"متوفى\",\"Runaway\":\"ناكل\",\"Edit Teacher\":\"تعديل\",\"Teacher Edited Successfully\":\"تم تعديل بيانات المدرس بنجاح\",\"Teacher Added Successfully\":\"تم إضافة مدرس جديد\",\"Engineering\":\"هندسة\",\"Bachelor's\":\"إجازة جامعية\",\"Intermediate institute\":\"معهد متوسط\",\"Research\":\"هيئة بحث\",\"Technical\":\"فنية\",\"Lab\":\"مخبرية\",\"Workers\":\"قانون عاملين\",\"Excluded\":\"مستثنى من المراقبة\",\"Observers List\":\"قائمة المراقبين\",\"Add New Observer\":\"إضافة مراقب جديد\",\"Mobile\":\"رقم الموبايل\",\"Observer Added Successfully\":\"تم إضافة مراقب جديد\",\"Observer Edited Successfully\":\"تم تعديل بيانات المراقب بنجاح\",\"Observer Name\":\"اسم المراقب\",\"Observer Details\":\"تفاصيل المراقب\",\"Observing Assignments\":\"تكليفات المراقبة\",\"Title\":\"اللقب\",\"Building\":\"المبنى\",\"Examination Halls on\":\"القاعات الامتحانية بتاريخ\",\"Exam date\":\"تاريخ الامتحان\",\"Hall\":\"القاعة\",\"From\":\"من\",\"To\":\"إلى\",\"Exams details\":\"تفاصيل الامتحانات\",\"Number of observers\":\"عدد المراقبين\",\"Assign Observers\":\"تعيين مراقبين\",\"No exams on this date\":\"لا توجد امتحانات في هذا اليوم\",\"Observer\":\"المراقب\",\"Exam\":\"امتحان\",\"from\":\"من\",\"to\":\"إلى\",\"in\":\"في\",\"on\":\"بتاريخ\",\"Hall chef\":\"رئيس قاعة\",\"Add observer\":\"إضافة مراقب\",\"Educational year\":\"العام الدراسي\",\"Cancel\":\"إلغاء\",\"Observations Updated Successfully\":\"تم تعديل المراقبين بنجاح\",\"Printing name\":\"الاسم المطبوع\",\"There's no chef in this hall. Do you want to continue?\":\"لم يتم اختيار رئيس للقاعة. هل تريد الاستمرار؟\",\"Private\":\"خاص\",\"Family\":\"عائلي\",\"Male\":\"ذكر\",\"Female\":\"أنثى\",\"{0} is required\":\"{0} مطلوب\",\"Id\":\"الرقم\",\"First name\":\"الاسم الأول\",\"Last name\":\"النسبة\",\"Gender\":\"الجنس\",\"Passport First Name\":\"الاسم الأول في جواز السفر\",\"Passport Last Name\":\"الكنية في جواز السفر\",\"Passport Number\":\"رقم جواز السفر\",\"Phones\":\"أرقام الهواتف\",\"Phone\":\"رقم الهاتف\",\"Add a phone\":\"أضف رقم هاتف\",\"Nationality\":\"الجنسية\",\"National number\":\"الرقم الوطني\",\"Full Name\":\"الاسم الثلاثي\",\"Mother Name\":\"اسم الأم\",\"Phd\":\"دكتوراه\",\"Master\":\"ماجستير\",\"Registeration number\":\"رقم التسجيل\",\"Birth date\":\"تاريخ الولادة\",\"Birth place\":\"مكان الولادة\",\"QAID place\":\"محل القيد\",\"QAID number\":\"رقم القيد\",\"Military office\":\"شعبة التجنيد\",\"Father\":\"الأب\",\"Mother\":\"الأم\",\"Processing ...\":\"قيد المعالجة ...\",\"Save\":\"حفظ\",\"Certificates\":\"الشهادات\",\"Desires\":\"الرغبات\",\"Registration Desires\":\"رغبات التسجيل\",\"Candidate Details\":\"تفاصيل المرشح\",\"Speciality List\":\"قائمة الاختصاصات\",\"Add Speciality\":\"إضافة اختصاص\",\"Update Speciality\":\"تعديل الاختصاص\",\"Edit Speciality\":\"تعديل الاختصاص\",\"Speciality Details\":\"تفاصيل الاختصاص\",\"English Name\":\"الاسم بالانكليزية\",\"English Short Name\":\"الاسم المختصر بالانكليزية\",\"Arabic Name\":\"الاسم بالعربية\",\"Arabic Short Name\":\"الاسم المختصر بالعربية\",\"Code\":\"الرمز\",\"Certificate List\":\"قائمة الشهادات\",\"Add Certificate\":\"إضافة شهادة\",\"Update Certificate\":\"تعديل الشهادة\",\"Edit Certificate\":\"تعديل الشهادة\",\"Certificate Details\":\"تفاصيل الشهادة\",\"Type\":\"النوع\",\"Year\":\"السنة\",\"Result\":\"النتيجة\",\"City\":\"المحافظة\",\"Round\":\"الدورة\",\"Subscription number\":\"رقم الاكتتاب\",\"Candidate\":\"المرشح\",\"Registration Year\":\"عام التسجيل\",\"Ministry External\":\"خارج الوزارة\",\"Math\":\"الرياضيات\",\"Physics\":\"الفيزياء\",\"English\":\"اللغة الانكليزية\",\"Arabic\":\"اللغة العربية\",\"Chemistry\":\"الكيمياء\",\"Sum\":\"المجموع المثقل\",\"Reif-Damascus\":\"ريف دمشق\",\"Damascus\":\"دمشق\",\"Homs\":\"حمص\",\"Hama\":\"حماه\",\"Idleb\":\"إدلب\",\"Aleppo\":\"حلب\",\"Latakia\":\"اللاذقيه\",\"Tartus\":\"طرطوس\",\"Dir Al-Zour\":\"دير الزور\",\"Al-Raqa\":\"الرقة\",\"Al-Hasaqa\":\"الحسكه\",\"Al-Qonaitra\":\"القنيطرة\",\"Al-Qamshli\":\"القامشلي\",\"Daraa\":\"درعا\",\"Al-Sweedaa\":\"السويداء\",\"Marks\":\"علامات المواد\",\"Mark\":\"العلامة\",\"Add a mark\":\"إضافة علامة\",\"Weighted mark\":\"المجموع المثقل\",\"Desire List\":\"قائمة الرغبات\",\"Add Desire\":\"إضافة رغبة\",\"Add New Desire\":\"إضافة رغبة جديدة\",\"Update Desire\":\"تعديل الرغبة\",\"Edit Desire\":\"تعديل الرغبة\",\"Desire Details\":\"تفاصيل الرغبة\",\"Desire\":\"الرغبة\",\"Speciality\":\"الاختصاص\",\"Order\":\"الترتيب\",\"Registration Desire List\":\"قائمة رغبات التسجيل\",\"Add Registration Desire\":\"إضافة رغبة تسجيل\",\"Add New Registration Desire\":\"إضافة رغبة تسجيل جديدة\",\"Update Registration Desire\":\"تعديل رغبة التسجيل\",\"Edit Registration Desire\":\"تعديل رغبة التسجيل\",\"Registration Desire Details\":\"تفاصيل رغبة التسجيل\",\"Password is too short - should be {0} chars minimum\":\"كلمة السر قصيرة جداً - يجب أن تكون على الأقل {0} أحرف\",\"Enter your credentials to sign in\":\"أدخل اسم المستخدم وكلمة المرور للدخول\",\"Welcome\":\"مرحباً\",\"Username\":\"اسم المستخدم\",\"Password\":\"كلمة المرور\",\"Remember me\":\"تذكرني\",\"Signing in...\":\"جاري تسجيل الدخول\",\"Sign in\":\"تسجيل الدخول\",\"Current Year\":\"العام الحالي\",\"Last Year\":\"العام السابق\",\"First\":\"الأولى\",\"Second\":\"الثانية\",\"Search\":\"بحث\",\"Student is not exist\":\"الطالب غير موجود\",\"Add to candidates\":\"إضافة إلى المرشحين\",\"This Candidate Already Exists\":\"المرشح مضاف مسبقاً\",\"Personal Info\":\"الذاتية\",\"Personal\":\"شخصي\",\"Science\":\"العلوم\",\"French\":\"اللغة الفرنسية\",\"Russian\":\"اللغة الروسية\",\"Nationality Course\":\"التربية الوطنية\",\"Upload Other Attachment\":\"تحميل مرفقات أخرى\",\"Upload personal image\":\"تحميل الصورة الشخصية\",\"Upload ID image\":\"تحميل صورة الهوية\",\"Attachements\":\"المرفقات\",\"ID image\":\"صورة الهوية\",\"Personal image\":\"الصورة الشخصية\",\"Name\":\"الاسم\",\"Export to excel\":\"تصدير إلى إكسل\",\"Export\":\"تصدير\",\"Add Attachment\":\"إضافة ملف مرفق\",\"Attachments\":\"المرفقات\",\"Candidate updated.\":\"تم تعديل معلومات المرشح\",\"Desires updated.\":\"تم تعديل رغبات المرشح\",\"out-side of ministry data\":\"من خارج بيانات الوزارة\",\"Add acceptance test results\":\"إدخال نتائج امتحان القبول\",\"Results File\":\"ملف النتائج\",\"Upload\":\"تحميل\",\"Study Place\":\"مكان الدراسة\",\"No problem\":\"لا مانع\",\"Registeration Class\":\"فئة التسجيل\",\"Internal\":\"مركز\",\"Private Study\":\"دراسة خاصة\",\"Employees Sons\":\"خ. أ. ع\",\"Special\":\"متميزين (وزارة)\",\"Registeration Method\":\"آلية التسجيل\",\"Automatic\":\"آلي\",\"Electronic\":\"الكتروني\",\"Need Residance\":\"سكن جامعي\",\"Yes\":\"نعم\",\"No\":\"لا\",\"Exam Place\":\"مكان تقديم امتحان القبول\",\"Test results updated.\":\"تم تعديل علامات امتحان القبول\",\"Attendees List\":\"قائمة المتقدمين للمفاضلة\",\"Acceptance Test\":\"امتحان قبول\",\"Mark from 3400\":\"العلامة من 3400\",\"Mark from 2400\":\"العلامة من 2400\",\"Mark from 3600\":\"العلامة من 3600\",\"Acceptance Place\":\"مكان القبول\",\"Acceptance Speciality\":\"اختصاص القبول\",\"Acceptance Class\":\"فئة القبول\",\"Acceptance Status\":\"حالة القبول\",\"Edit Registration\":\"إدخال نتائج المفاضلة\",\"Accepted\":\"مقبول\",\"Not Accepted\":\"غير مقبول\",\"Canceled\":\"مستنكف\",\"Waiting\":\"احتياط\",\"Waiting number\":\"رقم الاحتياط\",\"Registration updated.\":\"تم تحديث بيانات المفاضلة\",\"You're in the year\":\"أنت الآن في العام الدراسي\",\"Open new educational year\":\"فتح عام دراسي جديد\",\"do you want to\":\"هل تريد\",\"import educational plan from previous year\":\"استيراد الخطة الدرسية من العام السابق\",\"import educational plan and assign teachers\":\"استيراد الخطة الدرسية وتكليف المدرسين من العام السابق\",\"no import\":\"بدون استيراد\",\"Specify Courses\":\"تحديد المقرّرات\",\"Assign Teachers\":\"تكليف المدرّسين\",\"Assign Teacher\":\"تكليف\",\"Teacher\":\"المدرس\",\"You must select a teacher\":\"يجب اختيار مدرّس\",\"Year Plan\":\"الخطة الدرسية\",\"Program\":\"البرنامج\",\"Semester\":\"الفصل\",\"Students Imported Successfully\":\"تم استيراد الطلاب بنجاح\",\"Course Added To Plan Successfully\":\"تم إضافة مقرر إلى الخطة الدرسية بنجاح\",\"Show Courses\":\"عرض المقرّرات\",\"Number of accredited hours\":\"عدد الساعات المعتمدة\",\"Teacher assigned successfully\":\"تم تكليف المدرّس بنجاح\",\"Teacher disengage successfully\":\"تم إنهاء تكليف المدرّس بنجاح\",\"Course removed from plan successfully\":\"تم حذف المقرّر من الخطة الدرسية\",\"Add\":\"إضافة\",\"Confirm\":\"تأكيد\",\"Delete\":\"حذف\",\"Filter\":\"فلتر\",\"All\":\"الكل\",\"None\":\"بلا\",\"Sort By\":\"ترتيب حسب\",\"Number of all hours\":\"عدد الساعات الكلية\",\"Notes\":\"ملاحظات\",\"Details\":\"تفاصيل\",\"Back\":\"عودة\",\"Field is required\":\"هذا الحقل مطلوب\",\"Field must be less than 100\":\"هذا الحقل يجب أن يكون رقم أصغر من 100\",\"Field must be greater than 0\":\"هذا الحقل يجب أن يكون رقم أكبر من 0\",\"Back To Previous Page\":\"العودة للصفحة السابقة\",\"Percentage should be 100%, but you have:\":\"يجب أن يكون مجموع طرائق تقييم المقرّر هو 100 بينما المجموع الحالي هو:\"}");

/***/ })

/******/ });