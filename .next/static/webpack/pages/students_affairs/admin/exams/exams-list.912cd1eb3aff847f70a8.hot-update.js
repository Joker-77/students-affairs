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
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiY2hlY2tUaW1lIiwiaSIsImdldFF1YXJ0ZXJIb3VyVGltZXMiLCJxdWFydGVySG91cnMiLCJ0aW1lcyIsImoiLCJwdXNoIiwiZ2V0VGltZU9mRGF5IiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QixTQUFPQyxNQUFQLENBQWNDLEdBQWQsRUFBMkI7QUFDekIsV0FBT0MsSUFBSSxDQUFDRCxHQUFELENBQVg7QUFDRDs7QUFDRCxTQUFPRSxTQUFQLENBQWlCQyxDQUFqQixFQUFvQjtBQUNsQixRQUFJQSxDQUFDLEdBQUcsRUFBUixFQUFZO0FBQ1ZBLE9BQUMsR0FBRyxNQUFNQSxDQUFWO0FBQ0Q7O0FBQ0QsV0FBT0EsQ0FBUDtBQUNEOztBQUNELFNBQU9DLG1CQUFQLEdBQTZCO0FBQzNCLFFBQUlDLFlBQVksR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFuQjtBQUNBLFFBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixXQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJELGFBQUssQ0FBQ0UsSUFBTixDQUFXLEtBQUtOLFNBQUwsQ0FBZUMsQ0FBZixJQUFvQixHQUFwQixHQUEwQkUsWUFBWSxDQUFDRSxDQUFELENBQWpEO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPRCxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0csWUFBUCxHQUFzQjtBQUNwQixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHRixLQUFLLENBQUNHLFFBQU4sRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBR0osS0FBSyxDQUFDSyxVQUFOLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sVUFBTixFQUFSLENBSm9CLENBS3BCOztBQUNBSCxLQUFDLEdBQUdaLFNBQVMsQ0FBQ1ksQ0FBRCxDQUFiO0FBQ0FFLEtBQUMsR0FBR2QsU0FBUyxDQUFDYyxDQUFELENBQWI7QUFDQUUsWUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxTQUFoQyxHQUE0Q1IsQ0FBQyxHQUFHLEdBQUosR0FBVUUsQ0FBVixHQUFjLEdBQWQsR0FBb0JFLENBQWhFO0FBQ0Q7O0FBOUJxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuOTEyY2QxZWIzYWZmODQ3ZjcwYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRlSGVscGVyIHtcclxuICBzdGF0aWMgZ2V0RGF5KGRheTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGF5c1tkYXldO1xyXG4gIH1cclxuICBzdGF0aWMgY2hlY2tUaW1lKGkpIHtcclxuICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgaSA9IFwiMFwiICsgaTtcclxuICAgIH1cclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0UXVhcnRlckhvdXJUaW1lcygpIHtcclxuICAgIHZhciBxdWFydGVySG91cnMgPSBbXCIwMFwiLCBcIjE1XCIsIFwiMzBcIiwgXCI0NVwiXTtcclxuICAgIHZhciB0aW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgdGltZXMucHVzaCh0aGlzLmNoZWNrVGltZShpKSArIFwiOlwiICsgcXVhcnRlckhvdXJzW2pdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRpbWVPZkRheSgpIHtcclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XHJcbiAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcclxuICAgIHZhciBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXHJcbiAgICBtID0gY2hlY2tUaW1lKG0pO1xyXG4gICAgcyA9IGNoZWNrVGltZShzKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykuaW5uZXJIVE1MID0gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==