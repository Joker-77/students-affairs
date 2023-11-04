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
        times.push(this.checkTime(i) + ":" + quarterHours[j]);
      }
    }

    return times;
  }

  static getTimeOfDay() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); // add a zero in front of numbers<10

    m = checkTime(m);
    return h + ":" + m + ":" + s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiY2hlY2tUaW1lIiwiaSIsImdldFF1YXJ0ZXJIb3VyVGltZXMiLCJxdWFydGVySG91cnMiLCJ0aW1lcyIsImoiLCJwdXNoIiwiZ2V0VGltZU9mRGF5IiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCLFNBQU9DLE1BQVAsQ0FBY0MsR0FBZCxFQUEyQjtBQUN6QixXQUFPQyxJQUFJLENBQUNELEdBQUQsQ0FBWDtBQUNEOztBQUNELFNBQU9FLFNBQVAsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2xCLFFBQUlBLENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDVkEsT0FBQyxHQUFHLE1BQU1BLENBQVY7QUFDRDs7QUFDRCxXQUFPQSxDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsbUJBQVAsR0FBNkI7QUFDM0IsUUFBSUMsWUFBWSxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQW5CO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsU0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFdBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQkQsYUFBSyxDQUFDRSxJQUFOLENBQVcsS0FBS04sU0FBTCxDQUFlQyxDQUFmLElBQW9CLEdBQXBCLEdBQTBCRSxZQUFZLENBQUNFLENBQUQsQ0FBakQ7QUFDRDtBQUNGOztBQUNELFdBQU9ELEtBQVA7QUFDRDs7QUFFRCxTQUFPRyxZQUFQLEdBQXNCO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxRQUFJQyxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLFVBQU4sRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBR04sS0FBSyxDQUFDTyxVQUFOLEVBQVIsQ0FKb0IsQ0FLcEI7O0FBQ0FILEtBQUMsR0FBR1osU0FBUyxDQUFDWSxDQUFELENBQWI7QUFDQSxXQUFPRixDQUFDLEdBQUcsR0FBSixHQUFVRSxDQUFWLEdBQWMsR0FBZCxHQUFvQkUsQ0FBM0I7QUFDRDs7QUE3QnFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC42YzRmZDMwYzgwYmU3Njc3ZjY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGVIZWxwZXIge1xyXG4gIHN0YXRpYyBnZXREYXkoZGF5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBkYXlzW2RheV07XHJcbiAgfVxyXG4gIHN0YXRpYyBjaGVja1RpbWUoaSkge1xyXG4gICAgaWYgKGkgPCAxMCkge1xyXG4gICAgICBpID0gXCIwXCIgKyBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGk7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRRdWFydGVySG91clRpbWVzKCkge1xyXG4gICAgdmFyIHF1YXJ0ZXJIb3VycyA9IFtcIjAwXCIsIFwiMTVcIiwgXCIzMFwiLCBcIjQ1XCJdO1xyXG4gICAgdmFyIHRpbWVzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICB0aW1lcy5wdXNoKHRoaXMuY2hlY2tUaW1lKGkpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGltZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VGltZU9mRGF5KCkge1xyXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBoID0gdG9kYXkuZ2V0SG91cnMoKTtcclxuICAgIHZhciBtID0gdG9kYXkuZ2V0TWludXRlcygpO1xyXG4gICAgdmFyIHMgPSB0b2RheS5nZXRTZWNvbmRzKCk7XHJcbiAgICAvLyBhZGQgYSB6ZXJvIGluIGZyb250IG9mIG51bWJlcnM8MTBcclxuICAgIG0gPSBjaGVja1RpbWUobSk7XHJcbiAgICByZXR1cm4gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==