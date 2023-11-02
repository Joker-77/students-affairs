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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2FK4");




function Index() {
  const _sessionKey = Object(_redux__WEBPACK_IMPORTED_MODULE_3__[/* useAppSelector */ "j"])(_redux__WEBPACK_IMPORTED_MODULE_3__[/* selectSessionKey */ "c"]);

  console.log("_sessionKey", _sessionKey);

  if (!!_sessionKey ||  false && false) {
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/students_affairs/dashboard");
    });
  } else {
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/authentication/sign-in");
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {});
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });