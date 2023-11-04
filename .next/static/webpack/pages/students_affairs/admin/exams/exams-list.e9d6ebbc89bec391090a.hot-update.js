webpackHotUpdate_N_E("pages/students_affairs/admin/exams/exams-list",{

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
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
  }; // Get Exams


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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_Helpers_DateHelper__WEBPACK_IMPORTED_MODULE_18__["DateHelper"].getTimeOfDay());
  const {
    0: endTime,
    1: setEndTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getTimeOfDay()); // Dynamic Halls

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
                lineNumber: 369,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
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
                lineNumber: 372,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
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
                lineNumber: 375,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
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
                lineNumber: 378,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 367,
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
                    lineNumber: 390,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 389,
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
                    lineNumber: 398,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
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
                    lineNumber: 406,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 413,
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
                    lineNumber: 417,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
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
                lineNumber: 430,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 427,
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
                lineNumber: 442,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
                defaultValue: startTime,
                placeholder: "اختيار الوقت",
                isSearchable: true,
                options: times,
                onChange: e => {
                  handleStartTime(e);
                },
                getOptionLabel: option => option,
                getOptionValue: option => option
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 445,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 444,
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
                lineNumber: 458,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 457,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
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
                  lineNumber: 470,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 469,
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
                  lineNumber: 475,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 359,
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
                lineNumber: 494,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
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
                      lineNumber: 515,
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
                        lineNumber: 530,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 518,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 509,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 508,
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
                      lineNumber: 545,
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
                          lineNumber: 558,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 548,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 539,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 538,
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
                    lineNumber: 566,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 565,
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
                    lineNumber: 577,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 576,
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
                    lineNumber: 588,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 587,
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
                    lineNumber: 599,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 598,
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
                    lineNumber: 612,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 610,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 507,
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
              lineNumber: 632,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 485,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 358,
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
          lineNumber: 658,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 649,
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
          lineNumber: 677,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 671,
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
          lineNumber: 684,
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
            lineNumber: 686,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 685,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 700,
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
            lineNumber: 702,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 701,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 714,
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
            lineNumber: 730,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 743,
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
            lineNumber: 745,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 670,
    columnNumber: 5
  }, undefined);
};

_s(ExamsList, "r16YncU6/nYgwP/Z7lNSG2JEoR8=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsImxvYWRDb3Vyc2VzIiwic2V0TG9hZENvdXJzZXMiLCJsb2FkRXhhbXNUeXBlIiwic2V0TG9hZEV4YW1zVHlwZSIsInBsYW5zIiwic2V0UGxhbnMiLCJ1c2VFZmZlY3QiLCJQbGFuU2VydmljZSIsIkdldEFsbCIsInRoZW4iLCJFZHVZZWFyU2VydmljZSIsIkdldFllYXJzIiwicmVzdWx0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGFuZ2VQcm9ncmFtIiwidmFsIiwiY2hhbmdlRWR1WWVhciIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImxvZyIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsImdldFRpbWVPZkRheSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5Iiwib3B0aW9uIiwic3VibWl0QnRuIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNsb3NlQnRuIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ0eXBvZ3JhcGh5IiwiYXV0aCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxTQUFvQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQUE7O0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFnQkMsMkZBQWMsRUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLHFHQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxTQUFTLEVBQXpCO0FBRUEsUUFBTUksS0FBSyxHQUFHQywrREFBVSxDQUFDQyxtQkFBWCxFQUFkLENBTG1ELENBTW5EOztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FS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YWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LmU5ZDZlYmJjODliZWMzOTEwOTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dCYWNrLCBCYWNrc3BhY2UsIFpvb21JbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbVwiO1xyXG5pbXBvcnQgUGxhblNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL1BsYW5TZXJ2aWNlXCI7XHJcbmltcG9ydCBDb3Vyc2VTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9Db3Vyc2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBFZHVZZWFyU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRWR1WWVhclNlcnZpY2VcIjtcclxuaW1wb3J0IEV4YW1TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FeGFtU2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9VdGlsaXR5L1RyYW5zbGF0aW9ucy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvdmlld3MvZGFzaGJvYXJkU3R5bGUuanNcIjtcclxuaW1wb3J0IHtcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbiAgVGltZVBpY2tlcixcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgYXJTQSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwiLi9leGFtcy1saXN0LXN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdWlCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3VpQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUlNlbGVjdCB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gXCIuLy4uLy4uLy4uLy4uL0hlbHBlcnMvRGF0ZUhlbHBlclwiO1xyXG5cclxuaW50ZXJmYWNlIElFeGFtc0xpc3RQcm9wcyB7fVxyXG5jb25zdCBFeGFtc0xpc3Q6IFJlYWN0LkZDPElFeGFtc0xpc3RQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aW1lcyA9IERhdGVIZWxwZXIuZ2V0UXVhcnRlckhvdXJUaW1lcygpO1xyXG4gIC8vIFByb2dyYW1zXHJcbiAgY29uc3QgW3Byb2dyYW1zLCBzZXRQcm9ncmFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIENvdXJzZXNcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFZHUgWWVhclxyXG4gIGNvbnN0IFtlZHVZZWFycywgc2V0RWR1WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZHVZZWFyLCBzZXRFZHVZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFeGFtIFR5cGVcclxuICBjb25zdCBbZXhhbXNUeXBlcywgc2V0RXhhbXNUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhhbVR5cGUsIHNldEV4YW1UeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBcclxuICBjb25zdCBbbG9hZENvdXJzZXMsIHNldExvYWRDb3Vyc2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZEV4YW1zVHlwZSwgc2V0TG9hZEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwbGFucywgc2V0UGxhbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUGxhblNlcnZpY2UuR2V0QWxsKClcclxuICAgICAgLnRoZW4oKHByb2dyYW1zKSA9PiB7XHJcbiAgICAgICAgRWR1WWVhclNlcnZpY2UuR2V0WWVhcnMoXCJcIilcclxuICAgICAgICAgIC50aGVuKChlZHVZZWFycykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmFtcyhwcm9ncmFtcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRFZHVZZWFycyhlZHVZZWFycy5yZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUHJvZ3JhbSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UHJvZ3JhbSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVkdVllYXIgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldEVkdVllYXIodmFsKTtcclxuICAgIHNldExvYWRDb3Vyc2VzKHRydWUpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsQ291cnNlcyhwcm9ncmFtLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgICAgc2V0Q291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICAgIHNldExvYWRDb3Vyc2VzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gR2V0IEV4YW1zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZElucHV0RmllbGQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRGaWVsZHMubGVuZ3RoID49IGhhbGxzLmxlbmd0aClcclxuICAgICAgdG9hc3QuZXJyb3IoXCLZhNin2YrZhdmD2YbZgyDYp9mE2KXYttin2YHYqSEg2YTYp9mK2YjYrNivINiz2YjZiSDZgtin2LnYqtmK2YZcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAgICAuLi5pbnB1dEZpZWxkcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVJbnB1dEZpZWxkcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICByb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhyb3dzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleCwgZXZudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZudC50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIGxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhsaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZT8uZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZT8uZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IGRhdGU/LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyBUaGlzIGFycmFuZ2VtZW50IGNhbiBiZSBhbHRlcmVkIGJhc2VkIG9uIGhvdyB3ZSB3YW50IHRoZSBkYXRlJ3MgZm9ybWF0IHRvIGFwcGVhci5cclxuICAgIHJldHVybiBgJHsoXCIwXCIgKyBkYXkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBtb250aCkuc2xpY2UoLTIpfS0ke3llYXJ9YDtcclxuICB9O1xyXG4gIC8vXHJcbiAgY29uc3QgZ2V0RnVsbFRpbWUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgfTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbnMoW10pO1xyXG4gICAgc2V0UGxhbnMoW10pO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShbXSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VDb3Vyc2UgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBzZXRDb3Vyc2UodmFsKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUodHJ1ZSk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09PSB2YWwpO1xyXG4gICAgc2V0RXhhbXNUeXBlKF9jb3Vyc2UuZXZhbHVhdGlvbl9tZXRob2RzKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlRXhhbVR5cGUgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09IGNvdXJzZSk7XHJcbiAgICBzZXRFeGFtVHlwZSh2YWwpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsUGxhbnMoXHJcbiAgICAgIHByb2dyYW0sXHJcbiAgICAgIGVkdVllYXIsXHJcbiAgICAgIF9jb3Vyc2UuZWR1X2NvdXJzZV9pZCxcclxuICAgICAgdmFsLnRvU3RyaW5nKClcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHNldFBsYW5zKHJlc3AucmVzdWx0KSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH07XHJcbiAgLy8gSGFsbHNcclxuICAvLyBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBoYW5kbGUgYWRkIGNvdXJzc2UgdG8gcHJvZ3JhbVxyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuRGF0YSwgc2V0U2VsZWN0ZWRQbGFuRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbnMsIHNldFNlbGVjdGVkUGxhbnNdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWROZXdTdGRzLCBzZXRTZWxlY3RlZE5ld1N0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT2xkU3Rkcywgc2V0U2VsZWN0ZWRPbGRTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc3RhcnRUaW1lLCBzZXRTdGFydFRpbWVdID0gdXNlU3RhdGUoRGF0ZUhlbHBlci5nZXRUaW1lT2ZEYXkoKSk7XHJcbiAgY29uc3QgW2VuZFRpbWUsIHNldEVuZFRpbWVdID0gdXNlU3RhdGUoZ2V0VGltZU9mRGF5KCkpO1xyXG4gIC8vIER5bmFtaWMgSGFsbHNcclxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaGFsbDogMCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgIG51bV9zdHVkczogMCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRGaWVsZHMpO1xyXG4gIGNvbnN0IF9oYWxscyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwi2YIxXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcItmCMlwiLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShfaGFsbHMpO1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0VGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGFydFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRW5kVGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbmRUaW1lKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gICAgY29uc3Qgc3RhcnRIb3VyID0gc3RhcnRUaW1lLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBzdGFydE1pbnV0ZSA9IHN0YXJ0VGltZS5nZXRNaW51dGVzKCk7XHJcbiAgICBjb25zdCBlbmRIb3VyID0gZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgZW5kTWludXRlID0gZS5nZXRNaW51dGVzKCk7XHJcbiAgICBpZiAoZSA8IHN0YXJ0VGltZSkgdG9hc3QuZXJyb3IoXCLZiNmC2Kog2KfZhNin2YbYqtmH2KfYoSDZitis2Kgg2KPZhiDZitmD2YjZhiDYqNi52K8g2YjZgtiqINin2YTYqNiv2KFcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gZ2V0IHNlbGVjdGVkIHBsYW4gZXhhbXNcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuLCBzZXRTZWxlY3RlZFBsYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gU2VsZWN0IFBsYW5cclxuICBjb25zdCBzZWxlY3RQbGFuID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgdmFsQXNOdW0gPSBwYXJzZUludChpZCk7XHJcbiAgICAvLyBzZXRTZWxlY3RlZFBsYW4odmFsQXNOdW0pO1xyXG4gICAgbGV0IF9hcnIgPSBzZWxlY3RlZFBsYW5zLnNsaWNlKCk7XHJcbiAgICBpZiAoX2Fyci5pbmNsdWRlcyh2YWxBc051bSkpIHtcclxuICAgICAgbGV0IGluZGV4ID0gX2Fyci5maW5kSW5kZXgoKGUpID0+IGUgPT0gdmFsQXNOdW0pO1xyXG4gICAgICBfYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBpZiAoc2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfYXJyLnB1c2godmFsQXNOdW0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRXhhbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBheUxvYWQgPSB7XHJcbiAgICAgIHBsYW5faWRzOiBbLi4uc2VsZWN0ZWRQbGFuc10sXHJcbiAgICAgIHR5cGU6IGAke2V4YW1zVHlwZXMuZmlsdGVyKChlKSA9PiBlLmlkID09IGV4YW1UeXBlKVswXS5uYW1lfWAsXHJcbiAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgaGFsbHM6IGlucHV0RmllbGRzLm1hcCgoZGQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IGRkLmhhbGwsXHJcbiAgICAgICAgICBwbGFuX2lkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgICBzdHVkZW50c19udW06IHBhcnNlSW50KGAke2RkLm51bV9zdHVkc31gKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhwYXlMb2FkKTtcclxuICAgIC8vIFBsYW5TZXJ2aWNlLkFkZENvdXJzZShwYXlMb2FkKVxyXG4gICAgLy8gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICB0b2FzdC5zdWNjZXNzKHRyYW5zbGF0ZShcIkNvdXJzZSBBZGRlZCBUbyBQbGFuIFN1Y2Nlc3NmdWxseVwiKSk7XHJcbiAgICAvLyAgICAgICBQbGFuU2VydmljZS5HZXRQcm9ncmFtQ291cnNlcyhwcm9ncmFtLCBzcGVjWWVhciwgeWVhcilcclxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgIC8vICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRQcm9ncmFtQ291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclBsYW5zID0gKHBsYW5zKSA9PiB7XHJcbiAgICBpZiAocGxhbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciBsb2NhbGU9e2FyU0F9IHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNiz2YbYqTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYp9iu2KrYtdin2LU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2YHYtdmEPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpbkJvdHRvbTogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINi52K/YryDYp9mE2LfZhNin2Kh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Ub3A6IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDZhdiz2KrYrNivIHwg2YXYudmK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICAgICAgICB7cGxhbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Uuc2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZS5uZXdfc3R1ZGVudHNfbnVtfSB8IHtlLm9sZF9zdHVkZW50c19udW19XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRQbGFucy5pbmNsdWRlcyhlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwKSA9PiBzZWxlY3RQbGFuKHAudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT7Yp9mE2KrYp9ix2YrYrjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGlucHV0VmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+INin2YTZiNmC2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdGFydFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YjZgtiqXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0YXJ0VGltZShlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJub3dcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cItil2YTZiVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICBtaW51dGVzU3RlcD17NX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVuZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Yp9mE2YXYrNmF2YjYuSDYp9mE2YPZhNmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LPYqtis2K88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYudmK2K88L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROZXdTdGRzICsgc2VsZWN0ZWRPbGRTdGRzXHJcbiAgICAgICAgICAgICAgICAgIH1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWROZXdTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWRPbGRTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXRCdG59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZElucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINiq2K7YtdmK2LUg2YLYp9i52KlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBsYW5EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YLYp9i52KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGFsbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhbGwuc2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2hhbGwuaWR9IHZhbHVlPXtoYWxsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYs9mG2Kkg2YjYp9mE2KfYrtiq2LXYp9i1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wbGFuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYW5JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxhbkRhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkYXRhLnllYXI/LmFyX25hbWV9IC0gJHtkYXRhLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYp9mE2KrYp9ix2YrYrlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItmF2YZcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KXZhNmJXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtX3N0dWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEubnVtX3N0dWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2LnYr9ivINin2YTYt9mE2ZHYp9ioXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5sZW5ndGggIT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUlucHV0RmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8U3VpQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRFeGFtfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyMywgMTkzLCAyMzIpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICAgICAgPC9TdWlCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YNmE2KfYqtmI2KzYryDYqNmK2KfZhtin2Kog2YTYudix2LbZh9inYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCItMWVtIDAgMWVtIDBcIiB9fVxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2KjYsdmG2KfZhdisPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9ncmFtfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2KjYsdmG2KfZhdisXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2dyYW1zfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUHJvZ3JhbShlLmlkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYs9mG2Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkdVllYXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYs9mG2KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZWR1WWVhcnN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFZHVZZWFyKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ueWVhcn1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTZhdmC2LHZkdixPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiY291cnNlc1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2UpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NvdXJzZS5pZH0gdmFsdWU9e2NvdXJzZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PiAqL31cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmF2YLYsdmR2LFcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Y291cnNlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLmVkdV9jb3Vyc2VfaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uYXJfbmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmVkdV9jb3Vyc2VfaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2YbZiNi5INin2YTZiNin2YLYudipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZEV4YW1zVHlwZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2V4YW1UeXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YjYp9mC2LnYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtleGFtc1R5cGVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRXhhbVR5cGUoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3JlbmRlclBsYW5zKHBsYW5zKX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuKEV4YW1zTGlzdCBhcyBhbnkpLmF1dGggPSB0cnVlO1xyXG4oRXhhbXNMaXN0IGFzIGFueSkubGF5b3V0ID0gQWRtaW47XHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1zTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==