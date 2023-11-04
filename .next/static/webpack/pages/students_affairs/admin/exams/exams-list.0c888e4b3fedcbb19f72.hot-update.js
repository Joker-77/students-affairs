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
      from: startTime,
      to: endTime,
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_Helpers_DateHelper__WEBPACK_IMPORTED_MODULE_18__["DateHelper"].getTimeOfDay()); // Dynamic Halls

  const {
    0: inputFields,
    1: setInputFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    hall: 0,
    date: getFullDate(selectedDate),
    from: startTime,
    to: endTime,
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
                lineNumber: 367,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
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
                lineNumber: 370,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
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
                lineNumber: 373,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
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
                lineNumber: 376,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
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
                    lineNumber: 388,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
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
                    lineNumber: 396,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 395,
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
                    lineNumber: 404,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 411,
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
                    lineNumber: 415,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
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
                lineNumber: 428,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 425,
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
                lineNumber: 440,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
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
                lineNumber: 443,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
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
                lineNumber: 456,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 465,
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
                  lineNumber: 468,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 470,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
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
                  lineNumber: 473,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 476,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 477,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 466,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 357,
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
                lineNumber: 492,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
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
                      lineNumber: 513,
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
                        lineNumber: 528,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 516,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 507,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 506,
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
                      lineNumber: 543,
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
                          lineNumber: 556,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 546,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 537,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 536,
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
                    lineNumber: 564,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 563,
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
                    lineNumber: 575,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 574,
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
                    lineNumber: 586,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 585,
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
                    lineNumber: 597,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 596,
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
                    lineNumber: 610,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 608,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 505,
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
              lineNumber: 630,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 356,
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
          lineNumber: 656,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 647,
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
          lineNumber: 675,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 670,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 669,
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
          lineNumber: 682,
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
            lineNumber: 684,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 698,
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
            lineNumber: 700,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 699,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 712,
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
            lineNumber: 728,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 741,
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
            lineNumber: 743,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 740,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 668,
    columnNumber: 5
  }, undefined);
};

_s(ExamsList, "bwtugR4tP2jlMh387HD51w4P39M=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsImxvYWRDb3Vyc2VzIiwic2V0TG9hZENvdXJzZXMiLCJsb2FkRXhhbXNUeXBlIiwic2V0TG9hZEV4YW1zVHlwZSIsInBsYW5zIiwic2V0UGxhbnMiLCJ1c2VFZmZlY3QiLCJQbGFuU2VydmljZSIsIkdldEFsbCIsInRoZW4iLCJFZHVZZWFyU2VydmljZSIsIkdldFllYXJzIiwicmVzdWx0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGFuZ2VQcm9ncmFtIiwidmFsIiwiY2hhbmdlRWR1WWVhciIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImxvZyIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsImdldFRpbWVPZkRheSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5Iiwib3B0aW9uIiwic3VibWl0QnRuIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNsb3NlQnRuIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ0eXBvZ3JhcGh5IiwiYXV0aCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxTQUFvQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQUE7O0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFnQkMsMkZBQWMsRUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLHFHQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxTQUFTLEVBQXpCO0FBRUEsUUFBTUksS0FBSyxHQUFHQywrREFBVSxDQUFDQyxtQkFBWCxFQUFkLENBTG1ELENBTW5EOztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FS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RDtBQUFVLFVBQUUsRUFBRSxDQUFkO0FBQUEsZ0NBQ0UscUVBQUMsNERBQUQ7QUFBWSxZQUFFLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFhLG1CQUFTLE1BQXRCO0FBQXVCLGlCQUFPLEVBQUMsUUFBL0I7QUFBd0MsY0FBSSxFQUFDLE9BQTdDO0FBQXFELGNBQUksRUFBQyxPQUExRDtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQ0Usc0JBQVUsRUFBRW5FLGFBRGQ7QUFFRSx3QkFBWSxFQUFFSixRQUZoQjtBQUdFLHVCQUFXLEVBQUUsZ0JBSGY7QUFJRSx3QkFBWSxFQUFFLElBSmhCO0FBS0UsbUJBQU8sRUFBRUYsVUFMWDtBQU1FLG9CQUFRLEVBQUd3RSxDQUFELElBQU9HLGNBQWMsQ0FBQ0gsQ0FBQyxDQUFDZSxFQUFILENBTmpDO0FBT0UsMEJBQWMsRUFBR3VELE1BQUQsSUFBWUEsTUFBTSxDQUFDMUYsSUFQckM7QUFRRSwwQkFBYyxFQUFHMEYsTUFBRCxJQUFZQSxNQUFNLENBQUN2RDtBQVJyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixFQXdGR3VDLFdBQVcsQ0FBQ3RILEtBQUQsQ0F4RmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0RkQsQ0FodEJEOztHQUFNL0IsUztVQUNrQkUsbUY7OztLQURsQkYsUztBQWt0QkxBLFNBQUQsQ0FBbUI4SyxJQUFuQixHQUEwQixJQUExQjtBQUNDOUssU0FBRCxDQUFtQitLLE1BQW5CLEdBQTRCQyx3REFBNUI7QUFDZWhMLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC4wYzg4OGU0YjNmZWRjYmIxOWY3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBBZGQsIEFycm93QmFjaywgQmFja3NwYWNlLCBab29tSW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIElucHV0LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW1cIjtcclxuaW1wb3J0IFBsYW5TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9QbGFuU2VydmljZVwiO1xyXG5pbXBvcnQgQ291cnNlU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvQ291cnNlU2VydmljZVwiO1xyXG5pbXBvcnQgRWR1WWVhclNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0VkdVllYXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBFeGFtU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRXhhbVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vVXRpbGl0eS9UcmFuc2xhdGlvbnMvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG4gIFRpbWVQaWNrZXIsXHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGFyU0EgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcIi4vZXhhbXMtbGlzdC1zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3VpQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1N1aUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJTZWxlY3QgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9IZWxwZXJzL0RhdGVIZWxwZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRXhhbXNMaXN0UHJvcHMge31cclxuY29uc3QgRXhhbXNMaXN0OiBSZWFjdC5GQzxJRXhhbXNMaXN0UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGltZXMgPSBEYXRlSGVscGVyLmdldFF1YXJ0ZXJIb3VyVGltZXMoKTtcclxuICAvLyBQcm9ncmFtc1xyXG4gIGNvbnN0IFtwcm9ncmFtcywgc2V0UHJvZ3JhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9ncmFtLCBzZXRQcm9ncmFtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBDb3Vyc2VzXHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3Vyc2UsIHNldENvdXJzZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRWR1IFllYXJcclxuICBjb25zdCBbZWR1WWVhcnMsIHNldEVkdVllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWR1WWVhciwgc2V0RWR1WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRXhhbSBUeXBlXHJcbiAgY29uc3QgW2V4YW1zVHlwZXMsIHNldEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4YW1UeXBlLCBzZXRFeGFtVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2xvYWRDb3Vyc2VzLCBzZXRMb2FkQ291cnNlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRFeGFtc1R5cGUsIHNldExvYWRFeGFtc1R5cGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcGxhbnMsIHNldFBsYW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFBsYW5TZXJ2aWNlLkdldEFsbCgpXHJcbiAgICAgIC50aGVuKChwcm9ncmFtcykgPT4ge1xyXG4gICAgICAgIEVkdVllYXJTZXJ2aWNlLkdldFllYXJzKFwiXCIpXHJcbiAgICAgICAgICAudGhlbigoZWR1WWVhcnMpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3JhbXMocHJvZ3JhbXMucmVzdWx0KTtcclxuICAgICAgICAgICAgc2V0RWR1WWVhcnMoZWR1WWVhcnMucmVzdWx0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JcIiwgZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVByb2dyYW0gPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldFByb2dyYW0odmFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VFZHVZZWFyID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRFZHVZZWFyKHZhbCk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyh0cnVlKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbENvdXJzZXMocHJvZ3JhbSwgdmFsLnRvU3RyaW5nKCkpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5yZXN1bHQpO1xyXG4gICAgICAgIHNldENvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0IEV4YW1zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZElucHV0RmllbGQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRGaWVsZHMubGVuZ3RoID49IGhhbGxzLmxlbmd0aClcclxuICAgICAgdG9hc3QuZXJyb3IoXCLZhNin2YrZhdmD2YbZgyDYp9mE2KXYttin2YHYqSEg2YTYp9mK2YjYrNivINiz2YjZiSDZgtin2LnYqtmK2YZcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAgICAuLi5pbnB1dEZpZWxkcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVJbnB1dEZpZWxkcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICByb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhyb3dzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleCwgZXZudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZudC50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIGxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhsaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZT8uZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZT8uZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IGRhdGU/LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyBUaGlzIGFycmFuZ2VtZW50IGNhbiBiZSBhbHRlcmVkIGJhc2VkIG9uIGhvdyB3ZSB3YW50IHRoZSBkYXRlJ3MgZm9ybWF0IHRvIGFwcGVhci5cclxuICAgIHJldHVybiBgJHsoXCIwXCIgKyBkYXkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBtb250aCkuc2xpY2UoLTIpfS0ke3llYXJ9YDtcclxuICB9O1xyXG4gIC8vXHJcbiAgY29uc3QgZ2V0RnVsbFRpbWUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgfTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbnMoW10pO1xyXG4gICAgc2V0UGxhbnMoW10pO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShbXSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogc3RhcnRUaW1lLFxyXG4gICAgICAgIHRvOiBlbmRUaW1lLFxyXG4gICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlQ291cnNlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgc2V0Q291cnNlKHZhbCk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKHRydWUpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PT0gdmFsKTtcclxuICAgIHNldEV4YW1zVHlwZShfY291cnNlLmV2YWx1YXRpb25fbWV0aG9kcyk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUV4YW1UeXBlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PSBjb3Vyc2UpO1xyXG4gICAgc2V0RXhhbVR5cGUodmFsKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbFBsYW5zKFxyXG4gICAgICBwcm9ncmFtLFxyXG4gICAgICBlZHVZZWFyLFxyXG4gICAgICBfY291cnNlLmVkdV9jb3Vyc2VfaWQsXHJcbiAgICAgIHZhbC50b1N0cmluZygpXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiBzZXRQbGFucyhyZXNwLnJlc3VsdCkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICB9O1xyXG4gIC8vIEhhbGxzXHJcbiAgLy8gY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gaGFuZGxlIGFkZCBjb3Vyc3NlIHRvIHByb2dyYW1cclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbkRhdGEsIHNldFNlbGVjdGVkUGxhbkRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5zLCBzZXRTZWxlY3RlZFBsYW5zXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmV3U3Rkcywgc2V0U2VsZWN0ZWROZXdTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9sZFN0ZHMsIHNldFNlbGVjdGVkT2xkU3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3N0YXJ0VGltZSwgc2V0U3RhcnRUaW1lXSA9IHVzZVN0YXRlKERhdGVIZWxwZXIuZ2V0VGltZU9mRGF5KCkpO1xyXG4gIGNvbnN0IFtlbmRUaW1lLCBzZXRFbmRUaW1lXSA9IHVzZVN0YXRlKERhdGVIZWxwZXIuZ2V0VGltZU9mRGF5KCkpO1xyXG4gIC8vIER5bmFtaWMgSGFsbHNcclxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaGFsbDogMCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogc3RhcnRUaW1lLFxyXG4gICAgICB0bzogZW5kVGltZSxcclxuICAgICAgcGxhbklkOiAwLFxyXG4gICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnNvbGUubG9nKGlucHV0RmllbGRzKTtcclxuICBjb25zdCBfaGFsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiBcItmCMVwiLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogXCLZgjJcIixcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IFtoYWxscywgc2V0SGFsbHNdID0gdXNlU3RhdGUoX2hhbGxzKTtcclxuICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkRGF0ZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdGFydFRpbWUgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhcnRUaW1lKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUVuZFRpbWUgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW5kVGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICAgIGNvbnN0IHN0YXJ0SG91ciA9IHN0YXJ0VGltZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3Qgc3RhcnRNaW51dGUgPSBzdGFydFRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3QgZW5kSG91ciA9IGUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IGVuZE1pbnV0ZSA9IGUuZ2V0TWludXRlcygpO1xyXG4gICAgaWYgKGUgPCBzdGFydFRpbWUpIHRvYXN0LmVycm9yKFwi2YjZgtiqINin2YTYp9mG2KrZh9in2KEg2YrYrNioINij2YYg2YrZg9mI2YYg2KjYudivINmI2YLYqiDYp9mE2KjYr9ihXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGdldCBzZWxlY3RlZCBwbGFuIGV4YW1zXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbiwgc2V0U2VsZWN0ZWRQbGFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vIFNlbGVjdCBQbGFuXHJcbiAgY29uc3Qgc2VsZWN0UGxhbiA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHZhbEFzTnVtID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgLy8gc2V0U2VsZWN0ZWRQbGFuKHZhbEFzTnVtKTtcclxuICAgIGxldCBfYXJyID0gc2VsZWN0ZWRQbGFucy5zbGljZSgpO1xyXG4gICAgaWYgKF9hcnIuaW5jbHVkZXModmFsQXNOdW0pKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IF9hcnIuZmluZEluZGV4KChlKSA9PiBlID09IHZhbEFzTnVtKTtcclxuICAgICAgX2Fyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2Fyci5wdXNoKHZhbEFzTnVtKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEV4YW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlMb2FkID0ge1xyXG4gICAgICBwbGFuX2lkczogWy4uLnNlbGVjdGVkUGxhbnNdLFxyXG4gICAgICB0eXBlOiBgJHtleGFtc1R5cGVzLmZpbHRlcigoZSkgPT4gZS5pZCA9PSBleGFtVHlwZSlbMF0ubmFtZX1gLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIGhhbGxzOiBpbnB1dEZpZWxkcy5tYXAoKGRkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBkZC5oYWxsLFxyXG4gICAgICAgICAgcGxhbl9pZDogZGQucGxhbklkLFxyXG4gICAgICAgICAgc3R1ZGVudHNfbnVtOiBwYXJzZUludChgJHtkZC5udW1fc3R1ZHN9YCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocGF5TG9hZCk7XHJcbiAgICAvLyBQbGFuU2VydmljZS5BZGRDb3Vyc2UocGF5TG9hZClcclxuICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgdG9hc3Quc3VjY2Vzcyh0cmFuc2xhdGUoXCJDb3Vyc2UgQWRkZWQgVG8gUGxhbiBTdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgLy8gICAgICAgUGxhblNlcnZpY2UuR2V0UHJvZ3JhbUNvdXJzZXMocHJvZ3JhbSwgc3BlY1llYXIsIHllYXIpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0UHJvZ3JhbUNvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJQbGFucyA9IChwbGFucykgPT4ge1xyXG4gICAgaWYgKHBsYW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgbG9jYWxlPXthclNBfSB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IGhlaWdodDogXCI3ZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYs9mG2Kk8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2KfYrtiq2LXYp9i1PC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNmB2LXZhDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Cb3R0b206IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDYudiv2K8g2KfZhNi32YTYp9ioe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luVG9wOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2YXYs9iq2KzYryB8INmF2LnZitive1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICAgICAge3BsYW5zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnNlbWVzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2UubmV3X3N0dWRlbnRzX251bX0gfCB7ZS5vbGRfc3R1ZGVudHNfbnVtfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUGxhbnMuaW5jbHVkZXMoZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocCkgPT4gc2VsZWN0UGxhbihwLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+2KfZhNiq2KfYsdmK2K48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjNlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjFlbVwiIH19IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiDYp9mE2YjZgtiqPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhcnRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmI2YLYqlwifVxyXG4gICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVzfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdGFydFRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNob3dUb2RheUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0b2RheUxhYmVsPVwibm93XCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLYpdmE2YlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kVGltZX1cclxuICAgICAgICAgICAgICAgICAgbWludXRlc1N0ZXA9ezV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+PC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2KfZhNmF2KzZhdmI2Lkg2KfZhNmD2YTZijwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdiz2KrYrNivPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LnZitivPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTmV3U3RkcyArIHNlbGVjdGVkT2xkU3Rkc1xyXG4gICAgICAgICAgICAgICAgICB9YH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkTmV3U3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkT2xkU3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0QnRufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRJbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDYqtiu2LXZiti1INmC2KfYudipXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2lucHV0RmllbGRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQbGFuRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmC2KfYudipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhhbGwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYWxsLnNlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtoYWxsLmlkfSB2YWx1ZT17aGFsbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2LPZhtipINmI2KfZhNin2K7Yqti12KfYtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucGxhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFuSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYW5EYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGF0YS55ZWFyPy5hcl9uYW1lfSAtICR7ZGF0YS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KfZhNiq2KfYsdmK2K5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmZyb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLZhdmGXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItil2YTZiVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bV9zdHVkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLm51bV9zdHVkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcIti52K/YryDYp9mE2LfZhNmR2KfYqFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubGVuZ3RoICE9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVJbnB1dEZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPFN1aUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRXhhbX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjMsIDE5MywgMjMyKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgICAgIDwvU3VpQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2DZhNin2KrZiNis2K8g2KjZitin2YbYp9iqINmE2LnYsdi22YfYp2B9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgPEdyaWRJdGVtXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiLTFlbSAwIDFlbSAwXCIgfX1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNio2LHZhtin2YXYrDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvZ3JhbX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNio2LHZhtin2YXYrFwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtwcm9ncmFtc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVByb2dyYW0oZS5pZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2LPZhtipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZHVZZWFyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2LPZhtipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2VkdVllYXJzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRWR1WWVhcihlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2YXZgtix2ZHYsTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICB7LyogPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBsYWJlbD1cImNvdXJzZXNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjb3Vyc2UuaWR9IHZhbHVlPXtjb3Vyc2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7Y291cnNlLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD4gKi99XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZhdmC2LHZkdixXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvdXJzZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS5lZHVfY291cnNlX2lkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5lZHVfY291cnNlX2lkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtmG2YjYuSDYp9mE2YjYp9mC2LnYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRFeGFtc1R5cGV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtleGFtVHlwZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmI2KfZgti52KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZXhhbXNUeXBlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUV4YW1UeXBlKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtyZW5kZXJQbGFucyhwbGFucyl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbihFeGFtc0xpc3QgYXMgYW55KS5hdXRoID0gdHJ1ZTtcclxuKEV4YW1zTGlzdCBhcyBhbnkpLmxheW91dCA9IEFkbWluO1xyXG5leHBvcnQgZGVmYXVsdCBFeGFtc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=