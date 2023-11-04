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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Date);
  const {
    0: endTime,
    1: setEndTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()); // Dynamic Halls

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

_s(ExamsList, "v2HmPBG7mB2pE1DsFZkuT5n7ris=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsImxvYWRDb3Vyc2VzIiwic2V0TG9hZENvdXJzZXMiLCJsb2FkRXhhbXNUeXBlIiwic2V0TG9hZEV4YW1zVHlwZSIsInBsYW5zIiwic2V0UGxhbnMiLCJ1c2VFZmZlY3QiLCJQbGFuU2VydmljZSIsIkdldEFsbCIsInRoZW4iLCJFZHVZZWFyU2VydmljZSIsIkdldFllYXJzIiwicmVzdWx0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGFuZ2VQcm9ncmFtIiwidmFsIiwiY2hhbmdlRWR1WWVhciIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImxvZyIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5Iiwib3B0aW9uIiwic3VibWl0QnRuIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNsb3NlQnRuIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ0eXBvZ3JhcGh5IiwiYXV0aCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxTQUFvQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQUE7O0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFnQkMsMkZBQWMsRUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLHFHQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxTQUFTLEVBQXpCO0FBRUEsUUFBTUksS0FBSyxHQUFHQywrREFBVSxDQUFDQyxtQkFBWCxFQUFkLENBTG1ELENBTW5EOztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FSbUQsQ0FVbkQ7O0FBQ0Es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aXN0LjFhNjlkMDFkYzI0MWRmYzM4Y2IwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dCYWNrLCBCYWNrc3BhY2UsIFpvb21JbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbVwiO1xyXG5pbXBvcnQgUGxhblNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL1BsYW5TZXJ2aWNlXCI7XHJcbmltcG9ydCBDb3Vyc2VTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9Db3Vyc2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBFZHVZZWFyU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRWR1WWVhclNlcnZpY2VcIjtcclxuaW1wb3J0IEV4YW1TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FeGFtU2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9VdGlsaXR5L1RyYW5zbGF0aW9ucy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvdmlld3MvZGFzaGJvYXJkU3R5bGUuanNcIjtcclxuaW1wb3J0IHtcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbiAgVGltZVBpY2tlcixcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgYXJTQSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwiLi9leGFtcy1saXN0LXN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdWlCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3VpQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUlNlbGVjdCB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gXCIuLy4uLy4uLy4uLy4uL0hlbHBlcnMvRGF0ZUhlbHBlclwiO1xyXG5cclxuaW50ZXJmYWNlIElFeGFtc0xpc3RQcm9wcyB7fVxyXG5jb25zdCBFeGFtc0xpc3Q6IFJlYWN0LkZDPElFeGFtc0xpc3RQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aW1lcyA9IERhdGVIZWxwZXIuZ2V0UXVhcnRlckhvdXJUaW1lcygpO1xyXG4gIC8vIFByb2dyYW1zXHJcbiAgY29uc3QgW3Byb2dyYW1zLCBzZXRQcm9ncmFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIENvdXJzZXNcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFZHUgWWVhclxyXG4gIGNvbnN0IFtlZHVZZWFycywgc2V0RWR1WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZHVZZWFyLCBzZXRFZHVZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFeGFtIFR5cGVcclxuICBjb25zdCBbZXhhbXNUeXBlcywgc2V0RXhhbXNUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhhbVR5cGUsIHNldEV4YW1UeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBcclxuICBjb25zdCBbbG9hZENvdXJzZXMsIHNldExvYWRDb3Vyc2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZEV4YW1zVHlwZSwgc2V0TG9hZEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwbGFucywgc2V0UGxhbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUGxhblNlcnZpY2UuR2V0QWxsKClcclxuICAgICAgLnRoZW4oKHByb2dyYW1zKSA9PiB7XHJcbiAgICAgICAgRWR1WWVhclNlcnZpY2UuR2V0WWVhcnMoXCJcIilcclxuICAgICAgICAgIC50aGVuKChlZHVZZWFycykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmFtcyhwcm9ncmFtcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRFZHVZZWFycyhlZHVZZWFycy5yZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUHJvZ3JhbSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UHJvZ3JhbSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVkdVllYXIgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldEVkdVllYXIodmFsKTtcclxuICAgIHNldExvYWRDb3Vyc2VzKHRydWUpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsQ291cnNlcyhwcm9ncmFtLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgICAgc2V0Q291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICAgIHNldExvYWRDb3Vyc2VzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gR2V0IEV4YW1zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZElucHV0RmllbGQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRGaWVsZHMubGVuZ3RoID49IGhhbGxzLmxlbmd0aClcclxuICAgICAgdG9hc3QuZXJyb3IoXCLZhNin2YrZhdmD2YbZgyDYp9mE2KXYttin2YHYqSEg2YTYp9mK2YjYrNivINiz2YjZiSDZgtin2LnYqtmK2YZcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAgICAuLi5pbnB1dEZpZWxkcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVJbnB1dEZpZWxkcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICByb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhyb3dzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleCwgZXZudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZudC50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIGxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhsaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZT8uZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZT8uZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IGRhdGU/LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyBUaGlzIGFycmFuZ2VtZW50IGNhbiBiZSBhbHRlcmVkIGJhc2VkIG9uIGhvdyB3ZSB3YW50IHRoZSBkYXRlJ3MgZm9ybWF0IHRvIGFwcGVhci5cclxuICAgIHJldHVybiBgJHsoXCIwXCIgKyBkYXkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBtb250aCkuc2xpY2UoLTIpfS0ke3llYXJ9YDtcclxuICB9O1xyXG4gIC8vXHJcbiAgY29uc3QgZ2V0RnVsbFRpbWUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgfTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbnMoW10pO1xyXG4gICAgc2V0UGxhbnMoW10pO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShbXSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VDb3Vyc2UgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBzZXRDb3Vyc2UodmFsKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUodHJ1ZSk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09PSB2YWwpO1xyXG4gICAgc2V0RXhhbXNUeXBlKF9jb3Vyc2UuZXZhbHVhdGlvbl9tZXRob2RzKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlRXhhbVR5cGUgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09IGNvdXJzZSk7XHJcbiAgICBzZXRFeGFtVHlwZSh2YWwpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsUGxhbnMoXHJcbiAgICAgIHByb2dyYW0sXHJcbiAgICAgIGVkdVllYXIsXHJcbiAgICAgIF9jb3Vyc2UuZWR1X2NvdXJzZV9pZCxcclxuICAgICAgdmFsLnRvU3RyaW5nKClcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHNldFBsYW5zKHJlc3AucmVzdWx0KSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH07XHJcbiAgLy8gSGFsbHNcclxuICAvLyBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBoYW5kbGUgYWRkIGNvdXJzc2UgdG8gcHJvZ3JhbVxyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuRGF0YSwgc2V0U2VsZWN0ZWRQbGFuRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbnMsIHNldFNlbGVjdGVkUGxhbnNdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWROZXdTdGRzLCBzZXRTZWxlY3RlZE5ld1N0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT2xkU3Rkcywgc2V0U2VsZWN0ZWRPbGRTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc3RhcnRUaW1lLCBzZXRTdGFydFRpbWVdID0gdXNlU3RhdGUoRGF0ZSk7XHJcbiAgY29uc3QgW2VuZFRpbWUsIHNldEVuZFRpbWVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgLy8gRHluYW1pYyBIYWxsc1xyXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBoYWxsOiAwLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIHBsYW5JZDogMCxcclxuICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkcyk7XHJcbiAgY29uc3QgX2hhbGxzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCLZgjFcIixcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwi2YIyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKF9oYWxscyk7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZERhdGUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldFN0YXJ0VGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKGUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFbmRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldEVuZFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgICBjb25zdCBzdGFydEhvdXIgPSBzdGFydFRpbWUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IHN0YXJ0TWludXRlID0gc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IGVuZEhvdXIgPSBlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBlbmRNaW51dGUgPSBlLmdldE1pbnV0ZXMoKTtcclxuICAgIGlmIChlIDwgc3RhcnRUaW1lKSB0b2FzdC5lcnJvcihcItmI2YLYqiDYp9mE2KfZhtiq2YfYp9ihINmK2KzYqCDYo9mGINmK2YPZiNmGINio2LnYryDZiNmC2Kog2KfZhNio2K/YoVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBnZXQgc2VsZWN0ZWQgcGxhbiBleGFtc1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW4sIHNldFNlbGVjdGVkUGxhbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBTZWxlY3QgUGxhblxyXG4gIGNvbnN0IHNlbGVjdFBsYW4gPSAoaWQpID0+IHtcclxuICAgIGxldCB2YWxBc051bSA9IHBhcnNlSW50KGlkKTtcclxuICAgIC8vIHNldFNlbGVjdGVkUGxhbih2YWxBc051bSk7XHJcbiAgICBsZXQgX2FyciA9IHNlbGVjdGVkUGxhbnMuc2xpY2UoKTtcclxuICAgIGlmIChfYXJyLmluY2x1ZGVzKHZhbEFzTnVtKSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBfYXJyLmZpbmRJbmRleCgoZSkgPT4gZSA9PSB2YWxBc051bSk7XHJcbiAgICAgIF9hcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGlmIChzZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9hcnIucHVzaCh2YWxBc051bSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRFeGFtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5TG9hZCA9IHtcclxuICAgICAgcGxhbl9pZHM6IFsuLi5zZWxlY3RlZFBsYW5zXSxcclxuICAgICAgdHlwZTogYCR7ZXhhbXNUeXBlcy5maWx0ZXIoKGUpID0+IGUuaWQgPT0gZXhhbVR5cGUpWzBdLm5hbWV9YCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBoYWxsczogaW5wdXRGaWVsZHMubWFwKChkZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogZGQuaGFsbCxcclxuICAgICAgICAgIHBsYW5faWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICAgIHN0dWRlbnRzX251bTogcGFyc2VJbnQoYCR7ZGQubnVtX3N0dWRzfWApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHBheUxvYWQpO1xyXG4gICAgLy8gUGxhblNlcnZpY2UuQWRkQ291cnNlKHBheUxvYWQpXHJcbiAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgIHRvYXN0LnN1Y2Nlc3ModHJhbnNsYXRlKFwiQ291cnNlIEFkZGVkIFRvIFBsYW4gU3VjY2Vzc2Z1bGx5XCIpKTtcclxuICAgIC8vICAgICAgIFBsYW5TZXJ2aWNlLkdldFByb2dyYW1Db3Vyc2VzKHByb2dyYW0sIHNwZWNZZWFyLCB5ZWFyKVxyXG4gICAgLy8gICAgICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldFByb2dyYW1Db3Vyc2VzKHJlc3AucmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUGxhbnMgPSAocGxhbnMpID0+IHtcclxuICAgIGlmIChwbGFucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIGxvY2FsZT17YXJTQX0gdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBoZWlnaHQ6IFwiN2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2LPZhtipPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNin2K7Yqti12KfYtTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTZgdi12YQ8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luQm90dG9tOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2LnYr9ivINin2YTYt9mE2KfYqHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpblRvcDogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINmF2LPYqtis2K8gfCDZhdi52YrYr3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgICAgICAgIHtwbGFucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5zZW1lc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlLm5ld19zdHVkZW50c19udW19IHwge2Uub2xkX3N0dWRlbnRzX251bX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFBsYW5zLmluY2x1ZGVzKGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHApID0+IHNlbGVjdFBsYW4ocC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9Ptin2YTYqtin2LHZitiuPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVEYXRlQ2hhbmdlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgLy8gaW5wdXRWYXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxZW1cIiB9fSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4g2KfZhNmI2YLYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNmC2KpcIn1cclxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3RhcnRUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8VGltZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzaG93VG9kYXlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIm5vd1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi2KXZhNmJXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgIG1pbnV0ZXNTdGVwPXs1fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kVGltZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19Ptin2YTZhdis2YXZiNi5INin2YTZg9mE2Yo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYs9iq2KzYrzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdi52YrYrzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntgJHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE5ld1N0ZHMgKyBzZWxlY3RlZE9sZFN0ZHNcclxuICAgICAgICAgICAgICAgICAgfWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE5ld1N0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE9sZFN0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCA1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdEJ0bn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkSW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg2KrYrti12YrYtSDZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGxhbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGxzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoYWxsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFsbC5zZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aGFsbC5pZH0gdmFsdWU9e2hhbGwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiz2YbYqSDZiNin2YTYp9iu2KrYtdin2LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBsYW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhbklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGFuRGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2RhdGEueWVhcj8uYXJfbmFtZX0gLSAke2RhdGEueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItin2YTYqtin2LHZitiuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5mcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2YXZhlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYpdmE2YlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1fc3R1ZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5udW1fc3R1ZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYudiv2K8g2KfZhNi32YTZkdin2KhcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lucHV0RmllbGRzLmxlbmd0aCAhPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlSW5wdXRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDxTdWlCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEV4YW19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiKDIzLCAxOTMsIDIzMilcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgICAgICA8L1N1aUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMGVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtg2YTYp9iq2YjYrNivINio2YrYp9mG2KfYqiDZhNi52LHYttmH2KdgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgIDxHcmlkSXRlbVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIi0xZW0gMCAxZW0gMFwiIH19XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYqNix2YbYp9mF2Kw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2dyYW19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYqNix2YbYp9mF2KxcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZ3JhbXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9ncmFtKGUuaWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNiz2YbYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWR1WWVhcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNiz2YbYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtlZHVZZWFyc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUVkdVllYXIoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNmF2YLYsdmR2LE8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgey8qIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJjb3Vyc2VzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y291cnNlLmlkfSB2YWx1ZT17Y291cnNlLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2NvdXJzZS5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YXZgtix2ZHYsVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtjb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUuZWR1X2NvdXJzZV9pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uZWR1X2NvdXJzZV9pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7ZhtmI2Lkg2KfZhNmI2KfZgti52Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkRXhhbXNUeXBlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZXhhbVR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNin2YLYudipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2V4YW1zVHlwZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFeGFtVHlwZShlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7cmVuZGVyUGxhbnMocGxhbnMpfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4oRXhhbXNMaXN0IGFzIGFueSkuYXV0aCA9IHRydWU7XHJcbihFeGFtc0xpc3QgYXMgYW55KS5sYXlvdXQgPSBBZG1pbjtcclxuZXhwb3J0IGRlZmF1bHQgRXhhbXNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9