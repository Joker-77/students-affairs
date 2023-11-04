webpackHotUpdate_N_E("pages/students_affairs/admin/exams/exams-list",{

/***/ "./Helpers/DateHelper.ts":
/*!*******************************!*\
  !*** ./Helpers/DateHelper.ts ***!
  \*******************************/
/*! exports provided: DateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateHelper", function() { return DateHelper; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

class DateHelper {
  static getDay(day) {
    return days[day];
  }

  static checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  }

  static getQuarterHourTimes() {
    var quarterHours = ["00", "15", "30", "45"];
    var times = [];

    for (var i = 0; i < 24; i++) {
      for (var j = 0; j < 4; j++) {
        times.push(this.checkTime(i) + ":" + quarterHours[j]);
      }
    }

    return times;
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(DateHelper, "getTimeOfDay", void 0);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiY2hlY2tUaW1lIiwiaSIsImdldFF1YXJ0ZXJIb3VyVGltZXMiLCJxdWFydGVySG91cnMiLCJ0aW1lcyIsImoiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFVBQU4sQ0FBaUI7QUFDdEIsU0FBT0MsTUFBUCxDQUFjQyxHQUFkLEVBQTJCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0QsR0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsU0FBT0UsU0FBUCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsUUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFBWTtBQUNWQSxPQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNEOztBQUNELFdBQU9BLENBQVA7QUFDRDs7QUFDRCxTQUFPQyxtQkFBUCxHQUE2QjtBQUMzQixRQUFJQyxZQUFZLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRCxhQUFLLENBQUNFLElBQU4sQ0FBVyxLQUFLTixTQUFMLENBQWVDLENBQWYsSUFBb0IsR0FBcEIsR0FBMEJFLFlBQVksQ0FBQ0UsQ0FBRCxDQUFqRDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT0QsS0FBUDtBQUNEOztBQW5CcUI7OzBGQUFYUixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC5mYTM2YzBmNjJiN2NhMzc0NTQ2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGVIZWxwZXIge1xyXG4gIHN0YXRpYyBnZXREYXkoZGF5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBkYXlzW2RheV07XHJcbiAgfVxyXG4gIHN0YXRpYyBjaGVja1RpbWUoaSkge1xyXG4gICAgaWYgKGkgPCAxMCkge1xyXG4gICAgICBpID0gXCIwXCIgKyBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRRdWFydGVySG91clRpbWVzKCkge1xyXG4gICAgdmFyIHF1YXJ0ZXJIb3VycyA9IFtcIjAwXCIsIFwiMTVcIiwgXCIzMFwiLCBcIjQ1XCJdO1xyXG4gICAgdmFyIHRpbWVzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICB0aW1lcy5wdXNoKHRoaXMuY2hlY2tUaW1lKGkpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGltZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VGltZU9mRGF5XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==