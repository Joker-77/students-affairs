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
        if (i < 10) times.push(this.checkTime(i) + ":" + quarterHours[j]);
      }
    }

    return times;
  }

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiY2hlY2tUaW1lIiwiaSIsImdldFF1YXJ0ZXJIb3VyVGltZXMiLCJxdWFydGVySG91cnMiLCJ0aW1lcyIsImoiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLE1BQU1BLFVBQU4sQ0FBaUI7QUFDdEIsU0FBT0MsTUFBUCxDQUFjQyxHQUFkLEVBQTJCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0QsR0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsU0FBT0UsU0FBUCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsUUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFBWTtBQUNWQSxPQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNEOztBQUNELFdBQU9BLENBQVA7QUFDRDs7QUFDRCxTQUFPQyxtQkFBUCxHQUE2QjtBQUMzQixRQUFJQyxZQUFZLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFlBQUlKLENBQUMsR0FBRyxFQUFSLEVBQVlHLEtBQUssQ0FBQ0UsSUFBTixDQUFXLEtBQUtOLFNBQUwsQ0FBZUMsQ0FBZixJQUFvQixHQUFwQixHQUEwQkUsWUFBWSxDQUFDRSxDQUFELENBQWpEO0FBQ2I7QUFDRjs7QUFDRCxXQUFPRCxLQUFQO0FBQ0Q7O0FBbkJxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuMmM0Y2Y2MWNjMzVhMDNiNGFkYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRlSGVscGVyIHtcclxuICBzdGF0aWMgZ2V0RGF5KGRheTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGF5c1tkYXldO1xyXG4gIH1cclxuICBzdGF0aWMgY2hlY2tUaW1lKGkpIHtcclxuICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgaSA9IFwiMFwiICsgaTtcclxuICAgIH1cclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0UXVhcnRlckhvdXJUaW1lcygpIHtcclxuICAgIHZhciBxdWFydGVySG91cnMgPSBbXCIwMFwiLCBcIjE1XCIsIFwiMzBcIiwgXCI0NVwiXTtcclxuICAgIHZhciB0aW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPCAxMCkgdGltZXMucHVzaCh0aGlzLmNoZWNrVGltZShpKSArIFwiOlwiICsgcXVhcnRlckhvdXJzW2pdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVzO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9