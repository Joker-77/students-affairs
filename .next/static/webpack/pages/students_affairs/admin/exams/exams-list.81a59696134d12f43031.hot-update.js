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
        times.push(i + ":" + quarterHours[j]);
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

/***/ }),

/***/ "./pages/students_affairs/admin/exams/exams-list.tsx":
/*!***********************************************************!*\
  !*** ./pages/students_affairs/admin/exams/exams-list.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var _components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Grid/GridContainer */ "./components/Grid/GridContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Grid/GridItem */ "./components/Grid/GridItem.js");
/* harmony import */ var _Services_PlanService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Services/PlanService */ "./Services/PlanService.tsx");
/* harmony import */ var _Services_EduYearService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Services/EduYearService */ "./Services/EduYearService.tsx");
/* harmony import */ var _Services_ExamService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../Services/ExamService */ "./Services/ExamService.ts");
/* harmony import */ var _Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../Utility/Translations/useTranslation */ "./Utility/Translations/useTranslation.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_views_dashboardStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/views/dashboardStyle.js */ "./assets/jss/nextjs-material-dashboard/views/dashboardStyle.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _exams_list_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exams-list-style.css */ "./pages/students_affairs/admin/exams/exams-list-style.css");
/* harmony import */ var _exams_list_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_exams_list_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_SuiButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/SuiButton */ "./components/SuiButton/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Helpers_DateHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../../../Helpers/DateHelper */ "./Helpers/DateHelper.ts");



var _jsxFileName = "F:\\StudentAffairs\\students\\students\\pages\\students_affairs\\admin\\exams\\exams-list.tsx",
    _s = $RefreshSig$();





















const ExamsList = ({}) => {
  _s();

  const {
    translate
  } = Object(_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])();
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_views_dashboardStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  const classes = useStyles();
  const times = _Helpers_DateHelper__WEBPACK_IMPORTED_MODULE_18__["DateHelper"].getQuarterHourTimes(); // Programs

  const {
    0: programs,
    1: setPrograms
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: program,
    1: setProgram
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Courses

  const {
    0: courses,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: course,
    1: setCourse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Edu Year

  const {
    0: eduYears,
    1: setEduYears
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: eduYear,
    1: setEduYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); // Exam Type

  const {
    0: examsTypes,
    1: setExamsType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: examType,
    1: setExamType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _Services_PlanService__WEBPACK_IMPORTED_MODULE_6__["default"].GetAll().then(programs => {
      _Services_EduYearService__WEBPACK_IMPORTED_MODULE_7__["default"].GetYears("").then(eduYears => {
        setPrograms(programs.result);
        setEduYears(eduYears.result);
      }).catch(err => {
        console.error("Error", err);
      });
    }).catch(err => {
      console.error("Error", err);
    });
  }, []);

  const changeProgram = val => {
    setProgram(val);
  };

  const changeEduYear = val => {
    setEduYear(val);
    setLoadCourses(true);
    _Services_ExamService__WEBPACK_IMPORTED_MODULE_8__["default"].GetAllCourses(program, val.toString()).then(resp => {
      console.log(resp.result);
      setCourses(resp.result);
    }).catch(error => {});
    setLoadCourses(false);
  };

  const {
    0: loadCourses,
    1: setLoadCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: loadExamsType,
    1: setLoadExamsType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: plans,
    1: setPlans
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Get Exams

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, []);

  const addInputField = () => {
    if (inputFields.length >= halls.length) react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].error("لايمكنك الإضافة! لايوجد سوى قاعتين");else setInputFields([...inputFields, {
      hall: 0,
      date: getFullDate(selectedDate),
      from: getFullTime(startTime),
      to: getFullTime(endTime),
      planId: 0,
      num_studs: 0
    }]);
  };

  const removeInputFields = index => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChange = (index, evnt) => {
    const {
      name,
      value
    } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    console.log(list);
  }; //


  const getFullDate = date => {
    let day = date === null || date === void 0 ? void 0 : date.getDate();
    let month = (date === null || date === void 0 ? void 0 : date.getMonth()) + 1;
    let year = date === null || date === void 0 ? void 0 : date.getFullYear(); // This arrangement can be altered based on how we want the date's format to appear.

    return `${("0" + day).slice(-2)}-${("0" + month).slice(-2)}-${year}`;
  }; //


  const getFullTime = date => {
    return date.toLocaleTimeString();
  }; // ------------------------


  const clear = () => {
    setSelectedNewStds(0);
    setSelectedOldStds(0);
    setSelectedPlans([]);
    setPlans([]);
    setSelectedPlanData([]);
    setInputFields([{
      hall: 0,
      date: getFullDate(selectedDate),
      from: getFullTime(startTime),
      to: getFullTime(endTime),
      num_studs: 0
    }]);
  };

  const changeCourse = val => {
    clear();
    setCourse(val);
    setLoadExamsType(true);

    let _course = courses.find(e => e.edu_course_id === val);

    setExamsType(_course.evaluation_methods);
    setLoadExamsType(false);
  };

  const changeExamType = val => {
    clear();

    let _course = courses.find(e => e.edu_course_id == course);

    setExamType(val);
    _Services_ExamService__WEBPACK_IMPORTED_MODULE_8__["default"].GetAllPlans(program, eduYear, _course.edu_course_id, val.toString()).then(resp => setPlans(resp.result)).catch(error => {});
  }; // Halls
  // const [halls, setHalls] = useState([]);
  // handle add coursse to program


  const {
    0: selectedPlanData,
    1: setSelectedPlanData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: selectedPlans,
    1: setSelectedPlans
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: selectedNewStds,
    1: setSelectedNewStds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: selectedOldStds,
    1: setSelectedOldStds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  const {
    0: startTime,
    1: setStartTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  const {
    0: endTime,
    1: setEndTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  console.log("selectedDate", selectedDate.getDay()); // Dynamic Halls

  const {
    0: inputFields,
    1: setInputFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    hall: 0,
    date: getFullDate(selectedDate),
    from: getFullTime(startTime),
    to: getFullTime(endTime),
    planId: 0,
    num_studs: 0
  }]);
  console.log(inputFields);
  const _halls = [{
    id: 1,
    name: "ق1",
    selected: false
  }, {
    id: 2,
    name: "ق2",
    selected: false
  }];
  const {
    0: halls,
    1: setHalls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_halls);

  const handleDateChange = e => {
    setSelectedDate(e);

    let _inptFilds = inputFields.slice().map(dd => {
      return {
        hall: dd.hall,
        date: getFullDate(e),
        from: getFullTime(startTime),
        to: getFullTime(endTime),
        planId: dd.planId,
        num_studs: dd.num_studs
      };
    });

    setInputFields(_inptFilds);
  };

  const handleStartTime = e => {
    setStartTime(e);

    let _inptFilds = inputFields.slice().map(dd => {
      return {
        hall: dd.hall,
        date: getFullDate(selectedDate),
        from: getFullTime(e),
        to: getFullTime(endTime),
        planId: dd.planId,
        num_studs: dd.num_studs
      };
    });

    setInputFields(_inptFilds);
  };

  const handleEndTime = e => {
    setEndTime(e);

    let _inptFilds = inputFields.slice().map(dd => {
      return {
        hall: dd.hall,
        date: getFullDate(selectedDate),
        from: getFullTime(startTime),
        to: getFullTime(e),
        planId: dd.planId,
        num_studs: dd.num_studs
      };
    });

    setInputFields(_inptFilds);
    const startHour = startTime.getHours();
    const startMinute = startTime.getMinutes();
    const endHour = e.getHours();
    const endMinute = e.getMinutes();
    if (e < startTime) react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].error("وقت الانتهاء يجب أن يكون بعد وقت البدء");
  }; // get selected plan exams


  const {
    0: selectedPlan,
    1: setSelectedPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); // Select Plan

  const selectPlan = id => {
    let valAsNum = parseInt(id); // setSelectedPlan(valAsNum);

    let _arr = selectedPlans.slice();

    if (_arr.includes(valAsNum)) {
      let index = _arr.findIndex(e => e == valAsNum);

      _arr.splice(index, 1);

      setSelectedPlans(_arr);
      let sel = _arr.length > 0 ? plans.map(e => {
        if (_arr.includes(parseInt(e.id))) return e;
      }) : [];
      setSelectedPlanData(sel);

      if (sel.length > 0) {
        const sumOld = sel.reduce((partialSum, a) => partialSum + a.old_students_num, 0);
        const sumNew = sel.reduce((partialSum, a) => partialSum + a.new_students_num, 0);
        setSelectedNewStds(sumNew);
        setSelectedOldStds(sumOld);
      } else {
        setSelectedNewStds(0);
        setSelectedOldStds(0);
      }
    } else {
      _arr.push(valAsNum);

      setSelectedPlans(_arr);
      let sel = _arr.length > 0 ? plans.map(e => {
        if (_arr.includes(parseInt(e.id))) return e;
      }) : [];
      setSelectedPlanData(sel);
      const sumOld = sel.reduce((partialSum, a) => partialSum + a.old_students_num, 0);
      const sumNew = sel.reduce((partialSum, a) => partialSum + a.new_students_num, 0);
      setSelectedNewStds(sumNew);
      setSelectedOldStds(sumOld);
    }
  };

  const handleAddExam = () => {
    const payLoad = {
      plan_ids: [...selectedPlans],
      type: `${examsTypes.filter(e => e.id == examType)[0].name}`,
      date: getFullDate(selectedDate),
      from: getFullTime(startTime),
      to: getFullTime(endTime),
      halls: inputFields.map(dd => {
        return {
          id: dd.hall,
          plan_id: dd.planId,
          students_num: parseInt(`${dd.num_studs}`)
        };
      })
    };
    console.log(payLoad); // PlanService.AddCourse(payLoad)
    //   .then((result) => {
    //     if (result.success) {
    //       toast.success(translate("Course Added To Plan Successfully"));
    //       PlanService.GetProgramCourses(program, specYear, year)
    //         .then((resp) => {
    //           if (resp.success) {
    //             setProgramCourses(resp.result);
    //           }
    //         })
    //         .catch((err) => {});
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };

  const renderPlans = plans => {
    if (plans.length > 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["MuiPickersUtilsProvider"], {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_13__["arSA"],
        utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_12__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          style: {
            margin: "5px 0px",
            width: "100%",
            paddingRight: "1em",
            paddingBottom: "1em"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            style: {
              height: "7em"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold"
                },
                children: "\u0627\u0644\u0633\u0646\u0629"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold"
                },
                children: "\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0635"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold"
                },
                children: "\u0627\u0644\u0641\u0635\u0644"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginBottom: "0"
                },
                children: ["\u0639\u062F\u062F \u0627\u0644\u0637\u0644\u0627\u0628", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            style: {
              margin: "2em 0em"
            },
            children: plans.map(e => {
              var _e$year, _e$year2, _e$year2$speciality;

              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    variant: "outlined",
                    size: "small",
                    disabled: true,
                    value: (_e$year = e.year) === null || _e$year === void 0 ? void 0 : _e$year.ar_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 389,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 388,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    variant: "outlined",
                    size: "small",
                    disabled: true,
                    value: (_e$year2 = e.year) === null || _e$year2 === void 0 ? void 0 : (_e$year2$speciality = _e$year2.speciality) === null || _e$year2$speciality === void 0 ? void 0 : _e$year2$speciality.ar_name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 397,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 396,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    variant: "outlined",
                    size: "small",
                    disabled: true,
                    value: e.semester
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 405,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: selectedPlans.includes(e.id),
                    value: e.id,
                    onChange: p => selectPlan(p.target.value)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 3,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["KeyboardDatePicker"], {
                clearable: true,
                value: selectedDate,
                onChange: date => handleDateChange(date),
                minDate: new Date(),
                format: "dd/MM/yyyy" // inputVariant="outlined"

              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            style: {
              marginTop: "3em"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                display: "flex",
                marginTop: "1em"
              },
              md: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: " \u0627\u0644\u0648\u0642\u062A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["TimePicker"], {
                clearable: true,
                label: "\u0645\u0646",
                value: startTime,
                onChange: handleStartTime
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["TimePicker"], {
                showTodayButton: true,
                todayLabel: "now",
                label: "\u0625\u0644\u0649",
                value: endTime,
                minutesStep: 5,
                onChange: handleEndTime
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              container: true,
              md: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
                item: true,
                md: 5,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0643\u0644\u064A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 466,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
                item: true,
                md: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: `${selectedNewStds + selectedOldStds}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 468,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
          container: true,
          md: 12,
          style: {
            marginTop: "1em"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            style: {
              margin: "5px 0px",
              width: "100%",
              paddingRight: "1em",
              paddingBottom: "1em"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
              container: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                style: {
                  margin: "10px 5px"
                },
                variant: "contained",
                className: classes.submitBtn,
                onClick: addInputField,
                children: "\u062A\u062E\u0635\u064A\u0635 \u0642\u0627\u0639\u0629"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 487,
              columnNumber: 15
            }, undefined), inputFields.map((data, index) => {
              console.log(data);
              console.log(selectedPlanData);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
                container: true,
                md: 12,
                style: {
                  marginTop: "1em"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
                    fullWidth: true,
                    variant: "filled",
                    size: "small",
                    size: "small",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                      id: "demo-simple-select-label",
                      children: "\u0627\u0644\u0642\u0627\u0639\u0629"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 509,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
                      fullWidth: true,
                      labelId: "demo-simple-select-label",
                      id: "demo-simple-select",
                      value: data.hall,
                      label: "halls",
                      name: "hall",
                      onChange: evnt => handleChange(index, evnt),
                      children: halls.map(hall => !hall.selected && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                        value: hall.id,
                        children: hall.name
                      }, hall.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 524,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 512,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 503,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 502,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
                    fullWidth: true,
                    variant: "filled",
                    size: "small",
                    size: "small",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                      id: "demo-simple-select-label",
                      children: "\u0627\u0644\u0633\u0646\u0629 \u0648\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0635"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 539,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
                      fullWidth: true,
                      labelId: "demo-simple-select-label",
                      id: "demo-simple-select",
                      value: data.planId,
                      label: "halls",
                      name: "planId",
                      onChange: evnt => handleChange(index, evnt),
                      children: selectedPlanData.map(data => {
                        var _data$year, _data$year2, _data$year2$specialit;

                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
                          value: data.id,
                          children: `${(_data$year = data.year) === null || _data$year === void 0 ? void 0 : _data$year.ar_name} - ${(_data$year2 = data.year) === null || _data$year2 === void 0 ? void 0 : (_data$year2$specialit = _data$year2.speciality) === null || _data$year2$specialit === void 0 ? void 0 : _data$year2$specialit.ar_name}`
                        }, data.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 552,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 542,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 533,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 532,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    disabled: true,
                    variant: "outlined",
                    size: "small",
                    type: "text",
                    value: data.date,
                    label: translate("التاريخ"),
                    fullWidth: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 560,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 559,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    disabled: true,
                    variant: "outlined",
                    size: "small",
                    type: "text",
                    value: data.from,
                    label: translate("من"),
                    fullWidth: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 571,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 570,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    disabled: true,
                    variant: "outlined",
                    size: "small",
                    type: "text",
                    value: data.to,
                    label: translate("إلى"),
                    fullWidth: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 582,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 581,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    onChange: evnt => handleChange(index, evnt),
                    variant: "outlined",
                    size: "small",
                    type: "number",
                    name: "num_studs",
                    value: data.num_studs,
                    label: translate("عدد الطلّاب"),
                    fullWidth: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 593,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 592,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  style: {
                    marginTop: "1em"
                  },
                  children: inputFields.length !== 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    type: "button",
                    style: {
                      width: "10%",
                      color: "white",
                      background: "red"
                    },
                    variant: "outlined",
                    className: classes.closeBtn,
                    onClick: removeInputFields,
                    children: "x"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 606,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 604,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 501,
                columnNumber: 19
              }, undefined);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SuiButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
              onClick: handleAddExam,
              style: {
                margin: "2em 0",
                color: "rgb(255, 255, 255)",
                background: "rgb(23, 193, 232)"
              },
              type: "button",
              children: `إضافة واقعة امتحانية`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 626,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        md: 12,
        style: {
          margin: "2em 0em",
          display: "flex",
          justifyContent: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          style: {
            textAlign: "center"
          },
          variant: "h5",
          component: "div",
          children: `لاتوجد بيانات لعرضها`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 9
      }, undefined);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 12,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          margin: "-1em 0 1em 0"
        },
        md: 12,
        className: classes.typography,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
          variant: "h5",
          component: "div",
          children: `إضافة واقعة امتحانية`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      md: 12,
      style: {
        margin: "2em 0em"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          fullWidth: true,
          variant: "filled",
          size: "small",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
            defaultValue: program,
            placeholder: "اختيار البرنامج",
            isSearchable: true,
            options: programs,
            onChange: e => {
              changeProgram(e.id);
            },
            getOptionLabel: option => option.name,
            getOptionValue: option => option.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 680,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 694,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          fullWidth: true,
          variant: "filled",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
            defaultValue: eduYear,
            placeholder: "اختيار السنة",
            isSearchable: true,
            options: eduYears,
            onChange: e => changeEduYear(e.id),
            getOptionLabel: option => option.year,
            getOptionValue: option => option.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 696,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 695,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          fullWidth: true,
          variant: "filled",
          size: "small",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
            isDisabled: loadCourses,
            defaultValue: course,
            placeholder: "اختيار المقرّر",
            isSearchable: true,
            options: courses,
            onChange: e => changeCourse(e.edu_course_id),
            getOptionLabel: option => option.ar_name,
            getOptionValue: option => option.edu_course_id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 724,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 737,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
          fullWidth: true,
          variant: "filled",
          size: "small",
          size: "small",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
            isDisabled: loadExamsType,
            defaultValue: examType,
            placeholder: "اختيار الواقعة",
            isSearchable: true,
            options: examsTypes,
            onChange: e => changeExamType(e.id),
            getOptionLabel: option => option.name,
            getOptionValue: option => option.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 739,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 664,
    columnNumber: 5
  }, undefined);
};

_s(ExamsList, "kMTBZwjDmZ5vqfGPBi5+o5Lqx8Y=", true, function () {
  return [_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_9__["useTranslation"]];
});

_c = ExamsList;
ExamsList.auth = true;
ExamsList.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ExamsList);

var _c;

$RefreshReg$(_c, "ExamsList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSGVscGVycy9EYXRlSGVscGVyLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QudHN4Il0sIm5hbWVzIjpbIkRhdGVIZWxwZXIiLCJnZXREYXkiLCJkYXkiLCJkYXlzIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInF1YXJ0ZXJIb3VycyIsInRpbWVzIiwiaSIsImoiLCJwdXNoIiwiRXhhbXNMaXN0IiwidHJhbnNsYXRlIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2xhc3NlcyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsInVzZUVmZmVjdCIsIlBsYW5TZXJ2aWNlIiwiR2V0QWxsIiwidGhlbiIsIkVkdVllYXJTZXJ2aWNlIiwiR2V0WWVhcnMiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNoYW5nZVByb2dyYW0iLCJ2YWwiLCJjaGFuZ2VFZHVZZWFyIiwic2V0TG9hZENvdXJzZXMiLCJFeGFtU2VydmljZSIsIkdldEFsbENvdXJzZXMiLCJ0b1N0cmluZyIsInJlc3AiLCJsb2ciLCJsb2FkQ291cnNlcyIsImxvYWRFeGFtc1R5cGUiLCJzZXRMb2FkRXhhbXNUeXBlIiwicGxhbnMiLCJzZXRQbGFucyIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsImhhbmRsZUFkZEV4YW0iLCJwYXlMb2FkIiwicGxhbl9pZHMiLCJ0eXBlIiwiZmlsdGVyIiwicGxhbl9pZCIsInN0dWRlbnRzX251bSIsInJlbmRlclBsYW5zIiwiYXJTQSIsIkRhdGVGbnNVdGlscyIsIm1hcmdpbiIsIndpZHRoIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJhcl9uYW1lIiwic3BlY2lhbGl0eSIsInNlbWVzdGVyIiwicCIsImRpc3BsYXkiLCJzdWJtaXRCdG4iLCJkYXRhIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2xvc2VCdG4iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInR5cG9ncmFwaHkiLCJvcHRpb24iLCJhdXRoIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QixTQUFPQyxNQUFQLENBQWNDLEdBQWQsRUFBMkI7QUFDekIsV0FBT0MsSUFBSSxDQUFDRCxHQUFELENBQVg7QUFDRDs7QUFDRCxTQUFPRSxtQkFBUCxHQUE2QjtBQUMzQixRQUFJQyxZQUFZLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCRixhQUFLLENBQUNHLElBQU4sQ0FBV0YsQ0FBQyxHQUFHLEdBQUos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RSxJQUpoQjtBQUtFLG1CQUFPLEVBQUVGLFVBTFg7QUFNRSxvQkFBUSxFQUFHdUUsQ0FBRCxJQUFPRyxjQUFjLENBQUNILENBQUMsQ0FBQ2MsRUFBSCxDQU5qQztBQU9FLDBCQUFjLEVBQUc4RCxNQUFELElBQVlBLE1BQU0sQ0FBQy9GLElBUHJDO0FBUUUsMEJBQWMsRUFBRytGLE1BQUQsSUFBWUEsTUFBTSxDQUFDOUQ7QUFSckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsRUF3RkdzQyxXQUFXLENBQUNoRyxLQUFELENBeEZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNEZELENBNXNCRDs7R0FBTS9DLFM7VUFDa0JFLG1GOzs7S0FEbEJGLFM7QUE4c0JMQSxTQUFELENBQW1Cd0ssSUFBbkIsR0FBMEIsSUFBMUI7QUFDQ3hLLFNBQUQsQ0FBbUJ5SyxNQUFuQixHQUE0QkMsd0RBQTVCO0FBQ2UxSyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuODFhNTk2OTYxMzRkMTJmNDMwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRlSGVscGVyIHtcclxuICBzdGF0aWMgZ2V0RGF5KGRheTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGF5c1tkYXldO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0UXVhcnRlckhvdXJUaW1lcygpIHtcclxuICAgIHZhciBxdWFydGVySG91cnMgPSBbXCIwMFwiLCBcIjE1XCIsIFwiMzBcIiwgXCI0NVwiXTtcclxuICAgIHZhciB0aW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XHJcbiAgICAgICAgdGltZXMucHVzaChpICsgXCI6XCIgKyBxdWFydGVySG91cnNbal0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGltZXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQWRkLCBBcnJvd0JhY2ssIEJhY2tzcGFjZSwgWm9vbUluIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBJbnB1dCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtXCI7XHJcbmltcG9ydCBQbGFuU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvUGxhblNlcnZpY2VcIjtcclxuaW1wb3J0IENvdXJzZVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0NvdXJzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEVkdVllYXJTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FZHVZZWFyU2VydmljZVwiO1xyXG5pbXBvcnQgRXhhbVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0V4YW1TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1V0aWxpdHkvVHJhbnNsYXRpb25zL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxuICBUaW1lUGlja2VyLFxyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBhclNBIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCIuL2V4YW1zLWxpc3Qtc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN1aUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TdWlCdXR0b25cIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSU2VsZWN0IH0gZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vSGVscGVycy9EYXRlSGVscGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSUV4YW1zTGlzdFByb3BzIHt9XHJcbmNvbnN0IEV4YW1zTGlzdDogUmVhY3QuRkM8SUV4YW1zTGlzdFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRpbWVzID0gRGF0ZUhlbHBlci5nZXRRdWFydGVySG91clRpbWVzKCk7XHJcbiAgLy8gUHJvZ3JhbXNcclxuICBjb25zdCBbcHJvZ3JhbXMsIHNldFByb2dyYW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZ3JhbSwgc2V0UHJvZ3JhbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gQ291cnNlc1xyXG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIEVkdSBZZWFyXHJcbiAgY29uc3QgW2VkdVllYXJzLCBzZXRFZHVZZWFyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VkdVllYXIsIHNldEVkdVllYXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIEV4YW0gVHlwZVxyXG4gIGNvbnN0IFtleGFtc1R5cGVzLCBzZXRFeGFtc1R5cGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtleGFtVHlwZSwgc2V0RXhhbVR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBQbGFuU2VydmljZS5HZXRBbGwoKVxyXG4gICAgICAudGhlbigocHJvZ3JhbXMpID0+IHtcclxuICAgICAgICBFZHVZZWFyU2VydmljZS5HZXRZZWFycyhcIlwiKVxyXG4gICAgICAgICAgLnRoZW4oKGVkdVllYXJzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2dyYW1zKHByb2dyYW1zLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIHNldEVkdVllYXJzKGVkdVllYXJzLnJlc3VsdCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VQcm9ncmFtID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRQcm9ncmFtKHZhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRWR1WWVhciA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RWR1WWVhcih2YWwpO1xyXG4gICAgc2V0TG9hZENvdXJzZXModHJ1ZSk7XHJcbiAgICBFeGFtU2VydmljZS5HZXRBbGxDb3Vyc2VzKHByb2dyYW0sIHZhbC50b1N0cmluZygpKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3AucmVzdWx0KTtcclxuICAgICAgICBzZXRDb3Vyc2VzKHJlc3AucmVzdWx0KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gICAgc2V0TG9hZENvdXJzZXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtsb2FkQ291cnNlcywgc2V0TG9hZENvdXJzZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkRXhhbXNUeXBlLCBzZXRMb2FkRXhhbXNUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3BsYW5zLCBzZXRQbGFuc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIEdldCBFeGFtc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRJbnB1dEZpZWxkID0gKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0RmllbGRzLmxlbmd0aCA+PSBoYWxscy5sZW5ndGgpXHJcbiAgICAgIHRvYXN0LmVycm9yKFwi2YTYp9mK2YXZg9mG2YMg2KfZhNil2LbYp9mB2KkhINmE2KfZitmI2KzYryDYs9mI2Ykg2YLYp9i52KrZitmGXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICBzZXRJbnB1dEZpZWxkcyhbXHJcbiAgICAgICAgLi4uaW5wdXRGaWVsZHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGFsbDogMCxcclxuICAgICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgICAgcGxhbklkOiAwLFxyXG4gICAgICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlSW5wdXRGaWVsZHMgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHJvd3MgPSBbLi4uaW5wdXRGaWVsZHNdO1xyXG4gICAgcm93cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMocm93cyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5kZXgsIGV2bnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2bnQudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICBsaXN0W2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMobGlzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICB9O1xyXG4gIC8vXHJcbiAgY29uc3QgZ2V0RnVsbERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IGRheSA9IGRhdGU/LmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGU/LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlPy5nZXRGdWxsWWVhcigpO1xyXG4gICAgLy8gVGhpcyBhcnJhbmdlbWVudCBjYW4gYmUgYWx0ZXJlZCBiYXNlZCBvbiBob3cgd2Ugd2FudCB0aGUgZGF0ZSdzIGZvcm1hdCB0byBhcHBlYXIuXHJcbiAgICByZXR1cm4gYCR7KFwiMFwiICsgZGF5KS5zbGljZSgtMil9LSR7KFwiMFwiICsgbW9udGgpLnNsaWNlKC0yKX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuICAvL1xyXG4gIGNvbnN0IGdldEZ1bGxUaW1lID0gKGRhdGUpID0+IHtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gIH07XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5zKFtdKTtcclxuICAgIHNldFBsYW5zKFtdKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoW10pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGFsbDogMCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlQ291cnNlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgc2V0Q291cnNlKHZhbCk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKHRydWUpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PT0gdmFsKTtcclxuICAgIHNldEV4YW1zVHlwZShfY291cnNlLmV2YWx1YXRpb25fbWV0aG9kcyk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUV4YW1UeXBlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PSBjb3Vyc2UpO1xyXG4gICAgc2V0RXhhbVR5cGUodmFsKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbFBsYW5zKFxyXG4gICAgICBwcm9ncmFtLFxyXG4gICAgICBlZHVZZWFyLFxyXG4gICAgICBfY291cnNlLmVkdV9jb3Vyc2VfaWQsXHJcbiAgICAgIHZhbC50b1N0cmluZygpXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiBzZXRQbGFucyhyZXNwLnJlc3VsdCkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICB9O1xyXG4gIC8vIEhhbGxzXHJcbiAgLy8gY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gaGFuZGxlIGFkZCBjb3Vyc3NlIHRvIHByb2dyYW1cclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbkRhdGEsIHNldFNlbGVjdGVkUGxhbkRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5zLCBzZXRTZWxlY3RlZFBsYW5zXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmV3U3Rkcywgc2V0U2VsZWN0ZWROZXdTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9sZFN0ZHMsIHNldFNlbGVjdGVkT2xkU3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3N0YXJ0VGltZSwgc2V0U3RhcnRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtlbmRUaW1lLCBzZXRFbmRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwic2VsZWN0ZWREYXRlXCIsIHNlbGVjdGVkRGF0ZS5nZXREYXkoKSk7XHJcbiAgLy8gRHluYW1pYyBIYWxsc1xyXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBoYWxsOiAwLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIHBsYW5JZDogMCxcclxuICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkcyk7XHJcbiAgY29uc3QgX2hhbGxzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCLZgjFcIixcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwi2YIyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKF9oYWxscyk7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZERhdGUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldFN0YXJ0VGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKGUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFbmRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldEVuZFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgICBjb25zdCBzdGFydEhvdXIgPSBzdGFydFRpbWUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IHN0YXJ0TWludXRlID0gc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IGVuZEhvdXIgPSBlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBlbmRNaW51dGUgPSBlLmdldE1pbnV0ZXMoKTtcclxuICAgIGlmIChlIDwgc3RhcnRUaW1lKSB0b2FzdC5lcnJvcihcItmI2YLYqiDYp9mE2KfZhtiq2YfYp9ihINmK2KzYqCDYo9mGINmK2YPZiNmGINio2LnYryDZiNmC2Kog2KfZhNio2K/YoVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBnZXQgc2VsZWN0ZWQgcGxhbiBleGFtc1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW4sIHNldFNlbGVjdGVkUGxhbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBTZWxlY3QgUGxhblxyXG4gIGNvbnN0IHNlbGVjdFBsYW4gPSAoaWQpID0+IHtcclxuICAgIGxldCB2YWxBc051bSA9IHBhcnNlSW50KGlkKTtcclxuICAgIC8vIHNldFNlbGVjdGVkUGxhbih2YWxBc051bSk7XHJcbiAgICBsZXQgX2FyciA9IHNlbGVjdGVkUGxhbnMuc2xpY2UoKTtcclxuICAgIGlmIChfYXJyLmluY2x1ZGVzKHZhbEFzTnVtKSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBfYXJyLmZpbmRJbmRleCgoZSkgPT4gZSA9PSB2YWxBc051bSk7XHJcbiAgICAgIF9hcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGlmIChzZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9hcnIucHVzaCh2YWxBc051bSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRFeGFtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5TG9hZCA9IHtcclxuICAgICAgcGxhbl9pZHM6IFsuLi5zZWxlY3RlZFBsYW5zXSxcclxuICAgICAgdHlwZTogYCR7ZXhhbXNUeXBlcy5maWx0ZXIoKGUpID0+IGUuaWQgPT0gZXhhbVR5cGUpWzBdLm5hbWV9YCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBoYWxsczogaW5wdXRGaWVsZHMubWFwKChkZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogZGQuaGFsbCxcclxuICAgICAgICAgIHBsYW5faWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICAgIHN0dWRlbnRzX251bTogcGFyc2VJbnQoYCR7ZGQubnVtX3N0dWRzfWApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHBheUxvYWQpO1xyXG4gICAgLy8gUGxhblNlcnZpY2UuQWRkQ291cnNlKHBheUxvYWQpXHJcbiAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgIHRvYXN0LnN1Y2Nlc3ModHJhbnNsYXRlKFwiQ291cnNlIEFkZGVkIFRvIFBsYW4gU3VjY2Vzc2Z1bGx5XCIpKTtcclxuICAgIC8vICAgICAgIFBsYW5TZXJ2aWNlLkdldFByb2dyYW1Db3Vyc2VzKHByb2dyYW0sIHNwZWNZZWFyLCB5ZWFyKVxyXG4gICAgLy8gICAgICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldFByb2dyYW1Db3Vyc2VzKHJlc3AucmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUGxhbnMgPSAocGxhbnMpID0+IHtcclxuICAgIGlmIChwbGFucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIGxvY2FsZT17YXJTQX0gdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBoZWlnaHQ6IFwiN2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2LPZhtipPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNin2K7Yqti12KfYtTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTZgdi12YQ8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luQm90dG9tOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2LnYr9ivINin2YTYt9mE2KfYqHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpblRvcDogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINmF2LPYqtis2K8gfCDZhdi52YrYr3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgICAgICAgIHtwbGFucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5zZW1lc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlLm5ld19zdHVkZW50c19udW19IHwge2Uub2xkX3N0dWRlbnRzX251bX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFBsYW5zLmluY2x1ZGVzKGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHApID0+IHNlbGVjdFBsYW4ocC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9Ptin2YTYqtin2LHZitiuPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVEYXRlQ2hhbmdlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgLy8gaW5wdXRWYXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxZW1cIiB9fSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4g2KfZhNmI2YLYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8VGltZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLZhdmGXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJub3dcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cItil2YTZiVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICBtaW51dGVzU3RlcD17NX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVuZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Yp9mE2YXYrNmF2YjYuSDYp9mE2YPZhNmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LPYqtis2K88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYudmK2K88L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROZXdTdGRzICsgc2VsZWN0ZWRPbGRTdGRzXHJcbiAgICAgICAgICAgICAgICAgIH1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWROZXdTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWRPbGRTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXRCdG59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZElucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINiq2K7YtdmK2LUg2YLYp9i52KlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBsYW5EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YLYp9i52KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGFsbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhbGwuc2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2hhbGwuaWR9IHZhbHVlPXtoYWxsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYs9mG2Kkg2YjYp9mE2KfYrtiq2LXYp9i1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wbGFuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYW5JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxhbkRhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkYXRhLnllYXI/LmFyX25hbWV9IC0gJHtkYXRhLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYp9mE2KrYp9ix2YrYrlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItmF2YZcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KXZhNmJXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtX3N0dWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEubnVtX3N0dWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2LnYr9ivINin2YTYt9mE2ZHYp9ioXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5sZW5ndGggIT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUlucHV0RmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8U3VpQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRFeGFtfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyMywgMTkzLCAyMzIpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICAgICAgPC9TdWlCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YNmE2KfYqtmI2KzYryDYqNmK2KfZhtin2Kog2YTYudix2LbZh9inYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCItMWVtIDAgMWVtIDBcIiB9fVxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2KjYsdmG2KfZhdisPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9ncmFtfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2KjYsdmG2KfZhdisXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2dyYW1zfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUHJvZ3JhbShlLmlkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYs9mG2Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkdVllYXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYs9mG2KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZWR1WWVhcnN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFZHVZZWFyKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ueWVhcn1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTZhdmC2LHZkdixPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiY291cnNlc1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2UpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NvdXJzZS5pZH0gdmFsdWU9e2NvdXJzZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PiAqL31cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmF2YLYsdmR2LFcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Y291cnNlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLmVkdV9jb3Vyc2VfaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uYXJfbmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmVkdV9jb3Vyc2VfaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2YbZiNi5INin2YTZiNin2YLYudipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZEV4YW1zVHlwZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2V4YW1UeXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YjYp9mC2LnYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtleGFtc1R5cGVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRXhhbVR5cGUoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3JlbmRlclBsYW5zKHBsYW5zKX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuKEV4YW1zTGlzdCBhcyBhbnkpLmF1dGggPSB0cnVlO1xyXG4oRXhhbXNMaXN0IGFzIGFueSkubGF5b3V0ID0gQWRtaW47XHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1zTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==