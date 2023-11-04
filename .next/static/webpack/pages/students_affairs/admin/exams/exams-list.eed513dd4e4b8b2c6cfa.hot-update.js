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
  const times = _Helpers_DateHelper__WEBPACK_IMPORTED_MODULE_18__["DateHelper"].getQuarterHourTimes();
  console.log(times); // Programs

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
        from: e,
        to: endTime,
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
        from: startTime,
        to: e,
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
                lineNumber: 364,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
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
                children: "\u0627\u0644\u0641\u0635\u0644"
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginBottom: "0"
                },
                children: ["\u0639\u062F\u062F \u0627\u0644\u0637\u0644\u0627\u0628", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
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
                    lineNumber: 385,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
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
                    lineNumber: 393,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
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
                    lineNumber: 401,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 400,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 408,
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
                    lineNumber: 412,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 411,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
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
                lineNumber: 425,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 422,
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
                lineNumber: 437,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
                style: {
                  zIndex: 999
                },
                defaultValue: startTime,
                placeholder: "اختيار الوقت",
                isSearchable: true,
                options: times,
                onChange: e => {
                  handleStartTime(e);
                },
                getOptionLabel: option => option.label,
                getOptionValue: option => option.value
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["TimePicker"], {
                showTodayButton: true,
                todayLabel: "now",
                label: "\u0625\u0644\u0649",
                value: endTime,
                minutesStep: 5,
                onChange: handleEndTime
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 463,
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
                  lineNumber: 466,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 467,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 465,
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
                  lineNumber: 471,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 475,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
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
                lineNumber: 490,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
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
                      lineNumber: 511,
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
                        lineNumber: 526,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 514,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 505,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 504,
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
                      lineNumber: 541,
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
                          lineNumber: 554,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 544,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 535,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 534,
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
                    lineNumber: 562,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 561,
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
                    lineNumber: 573,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 572,
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
                    lineNumber: 584,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 583,
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
                    lineNumber: 595,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 594,
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
                    lineNumber: 608,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 606,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 503,
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
              lineNumber: 628,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 353,
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
          lineNumber: 654,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 645,
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
          lineNumber: 673,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 667,
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
          lineNumber: 680,
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
            lineNumber: 682,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 696,
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
            lineNumber: 698,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 697,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 710,
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
            lineNumber: 726,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 711,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 739,
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
            lineNumber: 741,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 666,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9ncmFtcyIsInNldFByb2dyYW1zIiwidXNlU3RhdGUiLCJwcm9ncmFtIiwic2V0UHJvZ3JhbSIsImNvdXJzZXMiLCJzZXRDb3Vyc2VzIiwiY291cnNlIiwic2V0Q291cnNlIiwiZWR1WWVhcnMiLCJzZXRFZHVZZWFycyIsImVkdVllYXIiLCJzZXRFZHVZZWFyIiwiZXhhbXNUeXBlcyIsInNldEV4YW1zVHlwZSIsImV4YW1UeXBlIiwic2V0RXhhbVR5cGUiLCJsb2FkQ291cnNlcyIsInNldExvYWRDb3Vyc2VzIiwibG9hZEV4YW1zVHlwZSIsInNldExvYWRFeGFtc1R5cGUiLCJwbGFucyIsInNldFBsYW5zIiwidXNlRWZmZWN0IiwiUGxhblNlcnZpY2UiLCJHZXRBbGwiLCJ0aGVuIiwiRWR1WWVhclNlcnZpY2UiLCJHZXRZZWFycyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjaGFuZ2VQcm9ncmFtIiwidmFsIiwiY2hhbmdlRWR1WWVhciIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsImdldFRpbWVPZkRheSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5IiwiekluZGV4Iiwib3B0aW9uIiwibGFiZWwiLCJzdWJtaXRCdG4iLCJkYXRhIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2xvc2VCdG4iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInR5cG9ncmFwaHkiLCJhdXRoIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1BLFNBQW9DLEdBQUcsQ0FBQyxFQUFELEtBQVE7QUFBQTs7QUFDbkQsUUFBTTtBQUFFQztBQUFGLE1BQWdCQywyRkFBYyxFQUFwQztBQUNBLFFBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MscUdBQUQsQ0FBNUI7QUFDQSxRQUFNQyxPQUFPLEdBQUdILFNBQVMsRUFBekI7QUFFQSxRQUFNSSxLQUFLLEdBQUdDLCtEQUFVLENBQUNDLG1CQUFYLEVBQWQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVosRUFObUQsQ0FPbkQ7O0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFB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QUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBYSxtQkFBUyxNQUF0QjtBQUF1QixpQkFBTyxFQUFDLFFBQS9CO0FBQXdDLGNBQUksRUFBQyxPQUE3QztBQUFxRCxjQUFJLEVBQUMsT0FBMUQ7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUNFLHNCQUFVLEVBQUVoRSxhQURkO0FBRUUsd0JBQVksRUFBRUosUUFGaEI7QUFHRSx1QkFBVyxFQUFFLGdCQUhmO0FBSUUsd0JBQVksRUFBRSxJQUpoQjtBQUtFLG1CQUFPLEVBQUVGLFVBTFg7QUFNRSxvQkFBUSxFQUFHcUUsQ0FBRCxJQUFPRyxjQUFjLENBQUNILENBQUMsQ0FBQ2UsRUFBSCxDQU5qQztBQU9FLDBCQUFjLEVBQUd3RCxNQUFELElBQVlBLE1BQU0sQ0FBQzFGLElBUHJDO0FBUUUsMEJBQWMsRUFBRzBGLE1BQUQsSUFBWUEsTUFBTSxDQUFDeEQ7QUFSckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsRUF3Rkd1QyxXQUFXLENBQUNuSCxLQUFELENBeEZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNEZELENBOXNCRDs7R0FBTWpDLFM7VUFDa0JFLG1GOzs7S0FEbEJGLFM7QUFndEJMQSxTQUFELENBQW1CK0ssSUFBbkIsR0FBMEIsSUFBMUI7QUFDQy9LLFNBQUQsQ0FBbUJnTCxNQUFuQixHQUE0QkMsd0RBQTVCO0FBQ2VqTCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuZWVkNTEzZGQ0ZTRiOGIyYzZjZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQWRkLCBBcnJvd0JhY2ssIEJhY2tzcGFjZSwgWm9vbUluIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBJbnB1dCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtXCI7XHJcbmltcG9ydCBQbGFuU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvUGxhblNlcnZpY2VcIjtcclxuaW1wb3J0IENvdXJzZVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0NvdXJzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEVkdVllYXJTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FZHVZZWFyU2VydmljZVwiO1xyXG5pbXBvcnQgRXhhbVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0V4YW1TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1V0aWxpdHkvVHJhbnNsYXRpb25zL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxuICBUaW1lUGlja2VyLFxyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBhclNBIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCIuL2V4YW1zLWxpc3Qtc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN1aUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TdWlCdXR0b25cIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSU2VsZWN0IH0gZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vSGVscGVycy9EYXRlSGVscGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSUV4YW1zTGlzdFByb3BzIHt9XHJcbmNvbnN0IEV4YW1zTGlzdDogUmVhY3QuRkM8SUV4YW1zTGlzdFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRpbWVzID0gRGF0ZUhlbHBlci5nZXRRdWFydGVySG91clRpbWVzKCk7XHJcbiAgY29uc29sZS5sb2codGltZXMpO1xyXG4gIC8vIFByb2dyYW1zXHJcbiAgY29uc3QgW3Byb2dyYW1zLCBzZXRQcm9ncmFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIENvdXJzZXNcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFZHUgWWVhclxyXG4gIGNvbnN0IFtlZHVZZWFycywgc2V0RWR1WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZHVZZWFyLCBzZXRFZHVZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFeGFtIFR5cGVcclxuICBjb25zdCBbZXhhbXNUeXBlcywgc2V0RXhhbXNUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhhbVR5cGUsIHNldEV4YW1UeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbbG9hZENvdXJzZXMsIHNldExvYWRDb3Vyc2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZEV4YW1zVHlwZSwgc2V0TG9hZEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwbGFucywgc2V0UGxhbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUGxhblNlcnZpY2UuR2V0QWxsKClcclxuICAgICAgLnRoZW4oKHByb2dyYW1zKSA9PiB7XHJcbiAgICAgICAgRWR1WWVhclNlcnZpY2UuR2V0WWVhcnMoXCJcIilcclxuICAgICAgICAgIC50aGVuKChlZHVZZWFycykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmFtcyhwcm9ncmFtcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRFZHVZZWFycyhlZHVZZWFycy5yZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUHJvZ3JhbSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UHJvZ3JhbSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVkdVllYXIgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldEVkdVllYXIodmFsKTtcclxuICAgIHNldExvYWRDb3Vyc2VzKHRydWUpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsQ291cnNlcyhwcm9ncmFtLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgICAgc2V0Q291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICAgIHNldExvYWRDb3Vyc2VzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICAvLyBHZXQgRXhhbXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkSW5wdXRGaWVsZCA9ICgpID0+IHtcclxuICAgIGlmIChpbnB1dEZpZWxkcy5sZW5ndGggPj0gaGFsbHMubGVuZ3RoKVxyXG4gICAgICB0b2FzdC5lcnJvcihcItmE2KfZitmF2YPZhtmDINin2YTYpdi22KfZgdipISDZhNin2YrZiNis2K8g2LPZiNmJINmC2KfYudiq2YrZhlwiKTtcclxuICAgIGVsc2VcclxuICAgICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICAgIC4uLmlucHV0RmllbGRzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICAgIHBsYW5JZDogMCxcclxuICAgICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUlucHV0RmllbGRzID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByb3dzID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIHJvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldElucHV0RmllbGRzKHJvd3MpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4LCBldm50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldm50LnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaW5wdXRGaWVsZHNdO1xyXG4gICAgbGlzdFtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIHNldElucHV0RmllbGRzKGxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgfTtcclxuICAvL1xyXG4gIGNvbnN0IGdldEZ1bGxEYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBkYXkgPSBkYXRlPy5nZXREYXRlKCk7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlPy5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZT8uZ2V0RnVsbFllYXIoKTtcclxuICAgIC8vIFRoaXMgYXJyYW5nZW1lbnQgY2FuIGJlIGFsdGVyZWQgYmFzZWQgb24gaG93IHdlIHdhbnQgdGhlIGRhdGUncyBmb3JtYXQgdG8gYXBwZWFyLlxyXG4gICAgcmV0dXJuIGAkeyhcIjBcIiArIGRheSkuc2xpY2UoLTIpfS0keyhcIjBcIiArIG1vbnRoKS5zbGljZSgtMil9LSR7eWVhcn1gO1xyXG4gIH07XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5zKFtdKTtcclxuICAgIHNldFBsYW5zKFtdKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoW10pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGFsbDogMCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IHN0YXJ0VGltZSxcclxuICAgICAgICB0bzogZW5kVGltZSxcclxuICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUNvdXJzZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIHNldENvdXJzZSh2YWwpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZSh0cnVlKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT09IHZhbCk7XHJcbiAgICBzZXRFeGFtc1R5cGUoX2NvdXJzZS5ldmFsdWF0aW9uX21ldGhvZHMpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VFeGFtVHlwZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT0gY291cnNlKTtcclxuICAgIHNldEV4YW1UeXBlKHZhbCk7XHJcbiAgICBFeGFtU2VydmljZS5HZXRBbGxQbGFucyhcclxuICAgICAgcHJvZ3JhbSxcclxuICAgICAgZWR1WWVhcixcclxuICAgICAgX2NvdXJzZS5lZHVfY291cnNlX2lkLFxyXG4gICAgICB2YWwudG9TdHJpbmcoKVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gc2V0UGxhbnMocmVzcC5yZXN1bHQpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfTtcclxuICAvLyBIYWxsc1xyXG4gIC8vIGNvbnN0IFtoYWxscywgc2V0SGFsbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGhhbmRsZSBhZGQgY291cnNzZSB0byBwcm9ncmFtXHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5EYXRhLCBzZXRTZWxlY3RlZFBsYW5EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFucywgc2V0U2VsZWN0ZWRQbGFuc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5ld1N0ZHMsIHNldFNlbGVjdGVkTmV3U3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPbGRTdGRzLCBzZXRTZWxlY3RlZE9sZFN0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtzdGFydFRpbWUsIHNldFN0YXJ0VGltZV0gPSB1c2VTdGF0ZShEYXRlSGVscGVyLmdldFRpbWVPZkRheSgpKTtcclxuICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VTdGF0ZShEYXRlSGVscGVyLmdldFRpbWVPZkRheSgpKTtcclxuICAvLyBEeW5hbWljIEhhbGxzXHJcbiAgY29uc3QgW2lucHV0RmllbGRzLCBzZXRJbnB1dEZpZWxkc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIGhhbGw6IDAsXHJcbiAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgIGZyb206IHN0YXJ0VGltZSxcclxuICAgICAgdG86IGVuZFRpbWUsXHJcbiAgICAgIHBsYW5JZDogMCxcclxuICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkcyk7XHJcbiAgY29uc3QgX2hhbGxzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCLZgjFcIixcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwi2YIyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKF9oYWxscyk7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZERhdGUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldFN0YXJ0VGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGUsXHJcbiAgICAgICAgdG86IGVuZFRpbWUsXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRW5kVGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbmRUaW1lKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogc3RhcnRUaW1lLFxyXG4gICAgICAgIHRvOiBlLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICAgIGNvbnN0IHN0YXJ0SG91ciA9IHN0YXJ0VGltZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3Qgc3RhcnRNaW51dGUgPSBzdGFydFRpbWUuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3QgZW5kSG91ciA9IGUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IGVuZE1pbnV0ZSA9IGUuZ2V0TWludXRlcygpO1xyXG4gICAgaWYgKGUgPCBzdGFydFRpbWUpIHRvYXN0LmVycm9yKFwi2YjZgtiqINin2YTYp9mG2KrZh9in2KEg2YrYrNioINij2YYg2YrZg9mI2YYg2KjYudivINmI2YLYqiDYp9mE2KjYr9ihXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGdldCBzZWxlY3RlZCBwbGFuIGV4YW1zXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbiwgc2V0U2VsZWN0ZWRQbGFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vIFNlbGVjdCBQbGFuXHJcbiAgY29uc3Qgc2VsZWN0UGxhbiA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHZhbEFzTnVtID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgLy8gc2V0U2VsZWN0ZWRQbGFuKHZhbEFzTnVtKTtcclxuICAgIGxldCBfYXJyID0gc2VsZWN0ZWRQbGFucy5zbGljZSgpO1xyXG4gICAgaWYgKF9hcnIuaW5jbHVkZXModmFsQXNOdW0pKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IF9hcnIuZmluZEluZGV4KChlKSA9PiBlID09IHZhbEFzTnVtKTtcclxuICAgICAgX2Fyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2Fyci5wdXNoKHZhbEFzTnVtKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEV4YW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlMb2FkID0ge1xyXG4gICAgICBwbGFuX2lkczogWy4uLnNlbGVjdGVkUGxhbnNdLFxyXG4gICAgICB0eXBlOiBgJHtleGFtc1R5cGVzLmZpbHRlcigoZSkgPT4gZS5pZCA9PSBleGFtVHlwZSlbMF0ubmFtZX1gLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIGhhbGxzOiBpbnB1dEZpZWxkcy5tYXAoKGRkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBkZC5oYWxsLFxyXG4gICAgICAgICAgcGxhbl9pZDogZGQucGxhbklkLFxyXG4gICAgICAgICAgc3R1ZGVudHNfbnVtOiBwYXJzZUludChgJHtkZC5udW1fc3R1ZHN9YCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocGF5TG9hZCk7XHJcbiAgICAvLyBQbGFuU2VydmljZS5BZGRDb3Vyc2UocGF5TG9hZClcclxuICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgdG9hc3Quc3VjY2Vzcyh0cmFuc2xhdGUoXCJDb3Vyc2UgQWRkZWQgVG8gUGxhbiBTdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgLy8gICAgICAgUGxhblNlcnZpY2UuR2V0UHJvZ3JhbUNvdXJzZXMocHJvZ3JhbSwgc3BlY1llYXIsIHllYXIpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0UHJvZ3JhbUNvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJQbGFucyA9IChwbGFucykgPT4ge1xyXG4gICAgaWYgKHBsYW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgbG9jYWxlPXthclNBfSB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IGhlaWdodDogXCI3ZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYs9mG2Kk8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2KfYrtiq2LXYp9i1PC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNmB2LXZhDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Cb3R0b206IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDYudiv2K8g2KfZhNi32YTYp9ioe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luVG9wOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2YXYs9iq2KzYryB8INmF2LnZitive1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICAgICAge3BsYW5zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnNlbWVzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2UubmV3X3N0dWRlbnRzX251bX0gfCB7ZS5vbGRfc3R1ZGVudHNfbnVtfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUGxhbnMuaW5jbHVkZXMoZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocCkgPT4gc2VsZWN0UGxhbihwLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+2KfZhNiq2KfYsdmK2K48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjNlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjFlbVwiIH19IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiDYp9mE2YjZgtiqPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5IH19XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhcnRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmI2YLYqlwifVxyXG4gICAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVzfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdGFydFRpbWUoZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNob3dUb2RheUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0b2RheUxhYmVsPVwibm93XCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLYpdmE2YlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kVGltZX1cclxuICAgICAgICAgICAgICAgICAgbWludXRlc1N0ZXA9ezV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+PC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2KfZhNmF2KzZhdmI2Lkg2KfZhNmD2YTZijwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdiz2KrYrNivPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LnZitivPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTmV3U3RkcyArIHNlbGVjdGVkT2xkU3Rkc1xyXG4gICAgICAgICAgICAgICAgICB9YH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkTmV3U3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkT2xkU3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0QnRufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRJbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDYqtiu2LXZiti1INmC2KfYudipXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2lucHV0RmllbGRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQbGFuRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmC2KfYudipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhhbGwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYWxsLnNlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtoYWxsLmlkfSB2YWx1ZT17aGFsbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2LPZhtipINmI2KfZhNin2K7Yqti12KfYtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucGxhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFuSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYW5EYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGF0YS55ZWFyPy5hcl9uYW1lfSAtICR7ZGF0YS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KfZhNiq2KfYsdmK2K5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmZyb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLZhdmGXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItil2YTZiVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bV9zdHVkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLm51bV9zdHVkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcIti52K/YryDYp9mE2LfZhNmR2KfYqFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubGVuZ3RoICE9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVJbnB1dEZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPFN1aUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRXhhbX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjMsIDE5MywgMjMyKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgICAgIDwvU3VpQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2DZhNin2KrZiNis2K8g2KjZitin2YbYp9iqINmE2LnYsdi22YfYp2B9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgPEdyaWRJdGVtXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiLTFlbSAwIDFlbSAwXCIgfX1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNio2LHZhtin2YXYrDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvZ3JhbX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNio2LHZhtin2YXYrFwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtwcm9ncmFtc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVByb2dyYW0oZS5pZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2LPZhtipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZHVZZWFyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2LPZhtipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2VkdVllYXJzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRWR1WWVhcihlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2YXZgtix2ZHYsTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICB7LyogPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBsYWJlbD1cImNvdXJzZXNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjb3Vyc2UuaWR9IHZhbHVlPXtjb3Vyc2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7Y291cnNlLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD4gKi99XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZhdmC2LHZkdixXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvdXJzZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS5lZHVfY291cnNlX2lkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5lZHVfY291cnNlX2lkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtmG2YjYuSDYp9mE2YjYp9mC2LnYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRFeGFtc1R5cGV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtleGFtVHlwZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmI2KfZgti52KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZXhhbXNUeXBlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUV4YW1UeXBlKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtyZW5kZXJQbGFucyhwbGFucyl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbihFeGFtc0xpc3QgYXMgYW55KS5hdXRoID0gdHJ1ZTtcclxuKEV4YW1zTGlzdCBhcyBhbnkpLmxheW91dCA9IEFkbWluO1xyXG5leHBvcnQgZGVmYXVsdCBFeGFtc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=