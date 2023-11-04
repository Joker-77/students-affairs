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
        if (i < 10) {
          times.push({
            label: "0" + i + ":" + quarterHours[j],
            value: "0" + i + ":" + quarterHours[j]
          });
        } else times.push({
          label: i + ":" + quarterHours[j],
          value: i + ":" + quarterHours[j]
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInF1YXJ0ZXJIb3VycyIsInRpbWVzIiwiaSIsImoiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsImdldFRpbWVPZkRheSIsInRvZGF5IiwiRGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QixTQUFPQyxNQUFQLENBQWNDLEdBQWQsRUFBMkI7QUFDekIsV0FBT0MsSUFBSSxDQUFDRCxHQUFELENBQVg7QUFDRDs7QUFFRCxTQUFPRSxtQkFBUCxHQUE2QjtBQUMzQixRQUFJQyxZQUFZLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFlBQUlELENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDVkQsZUFBSyxDQUFDRyxJQUFOLENBQVc7QUFDVEMsaUJBQUssRUFBRSxNQUFNSCxDQUFOLEdBQVUsR0FBVixHQUFnQkYsWUFBWSxDQUFDRyxDQUFELENBRDFCO0FBRVRHLGlCQUFLLEVBQUUsTUFBTUosQ0FBTixHQUFVLEdBQVYsR0FBZ0JGLFlBQVksQ0FBQ0csQ0FBRDtBQUYxQixXQUFYO0FBSUQsU0FMRCxNQU1FRixLQUFLLENBQUNHLElBQU4sQ0FBVztBQUNUQyxlQUFLLEVBQUVILENBQUMsR0FBRyxHQUFKLEdBQVVGLFlBQVksQ0FBQ0csQ0FBRCxDQURwQjtBQUVURyxlQUFLLEVBQUVKLENBQUMsR0FBRyxHQUFKLEdBQVVGLFlBQVksQ0FBQ0csQ0FBRDtBQUZwQixTQUFYO0FBSUg7QUFDRjs7QUFDRCxXQUFPRixLQUFQO0FBQ0Q7O0FBRUQsU0FBT00sWUFBUCxHQUFzQjtBQUNwQixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHRixLQUFLLENBQUNHLFFBQU4sRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBR0osS0FBSyxDQUFDSyxVQUFOLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUdOLEtBQUssQ0FBQ08sVUFBTixFQUFSLENBSm9CLENBS3BCOztBQUNBSCxLQUFDLEdBQUdBLENBQUMsR0FBRyxFQUFKLEdBQVUsSUFBR0EsQ0FBRSxFQUFmLEdBQW1CQSxDQUF2QjtBQUNBRixLQUFDLEdBQUdBLENBQUMsR0FBRyxFQUFKLEdBQVUsSUFBR0EsQ0FBRSxFQUFmLEdBQW1CQSxDQUF2QjtBQUNBLFdBQU9BLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQWpCO0FBQ0Q7O0FBbENxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuZDNlYTgyOTUwZjMwZjY5YTJmNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRlSGVscGVyIHtcclxuICBzdGF0aWMgZ2V0RGF5KGRheTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGF5c1tkYXldO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFF1YXJ0ZXJIb3VyVGltZXMoKSB7XHJcbiAgICB2YXIgcXVhcnRlckhvdXJzID0gW1wiMDBcIiwgXCIxNVwiLCBcIjMwXCIsIFwiNDVcIl07XHJcbiAgICB2YXIgdGltZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgICAgIHRpbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogXCIwXCIgKyBpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIjBcIiArIGkgKyBcIjpcIiArIHF1YXJ0ZXJIb3Vyc1tqXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgdGltZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRpbWVPZkRheSgpIHtcclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XHJcbiAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcclxuICAgIHZhciBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXHJcbiAgICBtID0gbSA8IDEwID8gYDAke219YCA6IG07XHJcbiAgICBoID0gaCA8IDEwID8gYDAke2h9YCA6IGg7XHJcbiAgICByZXR1cm4gaCArIFwiOlwiICsgbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==