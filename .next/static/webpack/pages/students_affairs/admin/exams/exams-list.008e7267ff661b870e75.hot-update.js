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

  static getQuarterHourTimes() {
    var quarterHours = ["00", "15", "30", "45"];
    var times = [];

    for (var i = 0; i < 24; i++) {
      for (var j = 0; j < 4; j++) {
        if (i < 10) times.push("0" + i + ":" + quarterHours[j]);else times.push("0" + i + ":" + quarterHours[j]);
      }
    }

    return times;
  }

  static getTimeOfDay() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); // add a zero in front of numbers<10

    m = m < 10 ? `0${m}` : m;
    h = h < 10 ? `0${h}` : h;
    return h + ":" + m;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInF1YXJ0ZXJIb3VycyIsInRpbWVzIiwiaSIsImoiLCJwdXNoIiwiZ2V0VGltZU9mRGF5IiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCLFNBQU9DLE1BQVAsQ0FBY0MsR0FBZCxFQUEyQjtBQUN6QixXQUFPQyxJQUFJLENBQUNELEdBQUQsQ0FBWDtBQUNEOztBQUVELFNBQU9FLG1CQUFQLEdBQTZCO0FBQzNCLFFBQUlDLFlBQVksR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFuQjtBQUNBLFFBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsWUFBSUQsQ0FBQyxHQUFHLEVBQVIsRUFBWUQsS0FBSyxDQUFDRyxJQUFOLENBQVcsTUFBTUYsQ0FBTixHQUFVLEdBQVYsR0FBZ0JGLFlBQVksQ0FBQ0csQ0FBRCxDQUF2QyxFQUFaLEtBQ0tGLEtBQUssQ0FBQ0csSUFBTixDQUFXLE1BQU1GLENBQU4sR0FBVSxHQUFWLEdBQWdCRixZQUFZLENBQUNHLENBQUQsQ0FBdkM7QUFDTjtBQUNGOztBQUNELFdBQU9GLEtBQVA7QUFDRDs7QUFFRCxTQUFPSSxZQUFQLEdBQXNCO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxRQUFJQyxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLFVBQU4sRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBR04sS0FBSyxDQUFDTyxVQUFOLEVBQVIsQ0FKb0IsQ0FLcEI7O0FBQ0FILEtBQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUosR0FBVSxJQUFHQSxDQUFFLEVBQWYsR0FBbUJBLENBQXZCO0FBQ0FGLEtBQUMsR0FBR0EsQ0FBQyxHQUFHLEVBQUosR0FBVSxJQUFHQSxDQUFFLEVBQWYsR0FBbUJBLENBQXZCO0FBQ0EsV0FBT0EsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBakI7QUFDRDs7QUExQnFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC4wMDhlNzI2N2ZmNjYxYjg3MGU3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGVIZWxwZXIge1xyXG4gIHN0YXRpYyBnZXREYXkoZGF5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBkYXlzW2RheV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UXVhcnRlckhvdXJUaW1lcygpIHtcclxuICAgIHZhciBxdWFydGVySG91cnMgPSBbXCIwMFwiLCBcIjE1XCIsIFwiMzBcIiwgXCI0NVwiXTtcclxuICAgIHZhciB0aW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPCAxMCkgdGltZXMucHVzaChcIjBcIiArIGkgKyBcIjpcIiArIHF1YXJ0ZXJIb3Vyc1tqXSk7XHJcbiAgICAgICAgZWxzZSB0aW1lcy5wdXNoKFwiMFwiICsgaSArIFwiOlwiICsgcXVhcnRlckhvdXJzW2pdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRpbWVPZkRheSgpIHtcclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XHJcbiAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcclxuICAgIHZhciBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXHJcbiAgICBtID0gbSA8IDEwID8gYDAke219YCA6IG07XHJcbiAgICBoID0gaCA8IDEwID8gYDAke2h9YCA6IGg7XHJcbiAgICByZXR1cm4gaCArIFwiOlwiICsgbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==