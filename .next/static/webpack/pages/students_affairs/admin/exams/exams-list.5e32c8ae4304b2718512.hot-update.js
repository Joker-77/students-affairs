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

    m = checkTime(m);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiY2hlY2tUaW1lIiwiaSIsImdldFF1YXJ0ZXJIb3VyVGltZXMiLCJxdWFydGVySG91cnMiLCJ0aW1lcyIsImoiLCJwdXNoIiwiZ2V0VGltZU9mRGF5IiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCLFNBQU9DLE1BQVAsQ0FBY0MsR0FBZCxFQUEyQjtBQUN6QixXQUFPQyxJQUFJLENBQUNELEdBQUQsQ0FBWDtBQUNEOztBQUNELFNBQU9FLFNBQVAsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2xCLFFBQUlBLENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDVkEsT0FBQyxHQUFHLE1BQU1BLENBQVY7QUFDRDs7QUFDRCxXQUFPQSxDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsbUJBQVAsR0FBNkI7QUFDM0IsUUFBSUMsWUFBWSxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQW5CO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsU0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFdBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMxQixZQUFJSixDQUFDLEdBQUcsRUFBUixFQUFZRyxLQUFLLENBQUNFLElBQU4sQ0FBVyxNQUFNTCxDQUFOLEdBQVUsR0FBVixHQUFnQkUsWUFBWSxDQUFDRSxDQUFELENBQXZDLEVBQVosS0FDS0QsS0FBSyxDQUFDRSxJQUFOLENBQVcsTUFBTUwsQ0FBTixHQUFVLEdBQVYsR0FBZ0JFLFlBQVksQ0FBQ0UsQ0FBRCxDQUF2QztBQUNOO0FBQ0Y7O0FBQ0QsV0FBT0QsS0FBUDtBQUNEOztBQUVELFNBQU9HLFlBQVAsR0FBc0I7QUFDcEIsUUFBSUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQUlDLENBQUMsR0FBR0YsS0FBSyxDQUFDRyxRQUFOLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssVUFBTixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHTixLQUFLLENBQUNPLFVBQU4sRUFBUixDQUpvQixDQUtwQjs7QUFDQUgsS0FBQyxHQUFHWixTQUFTLENBQUNZLENBQUQsQ0FBYjtBQUNBLFdBQU9GLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQWpCO0FBQ0Q7O0FBOUJxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuNWUzMmM4YWU0MzA0YjI3MTg1MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRlSGVscGVyIHtcclxuICBzdGF0aWMgZ2V0RGF5KGRheTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGF5c1tkYXldO1xyXG4gIH1cclxuICBzdGF0aWMgY2hlY2tUaW1lKGkpIHtcclxuICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgaSA9IFwiMFwiICsgaTtcclxuICAgIH1cclxuICAgIHJldHVybiBpO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0UXVhcnRlckhvdXJUaW1lcygpIHtcclxuICAgIHZhciBxdWFydGVySG91cnMgPSBbXCIwMFwiLCBcIjE1XCIsIFwiMzBcIiwgXCI0NVwiXTtcclxuICAgIHZhciB0aW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGkgPCAxMCkgdGltZXMucHVzaChcIjBcIiArIGkgKyBcIjpcIiArIHF1YXJ0ZXJIb3Vyc1tqXSk7XHJcbiAgICAgICAgZWxzZSB0aW1lcy5wdXNoKFwiMFwiICsgaSArIFwiOlwiICsgcXVhcnRlckhvdXJzW2pdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRpbWVPZkRheSgpIHtcclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XHJcbiAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcclxuICAgIHZhciBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xyXG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXHJcbiAgICBtID0gY2hlY2tUaW1lKG0pO1xyXG4gICAgcmV0dXJuIGggKyBcIjpcIiArIG07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=