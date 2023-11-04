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
  console.clear();
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
                children: "\u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0635"
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold"
                },
                children: "\u0627\u0644\u0641\u0635\u0644"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
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
                lineNumber: 379,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
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
                    lineNumber: 391,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 390,
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
                    lineNumber: 399,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
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
                    lineNumber: 407,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
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
                    lineNumber: 418,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
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
                lineNumber: 431,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
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
                lineNumber: 443,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
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
                lineNumber: 446,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 445,
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
                lineNumber: 459,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
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
                  lineNumber: 471,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 470,
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
                  lineNumber: 476,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 360,
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
                lineNumber: 495,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
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
                      lineNumber: 516,
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
                        lineNumber: 531,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 519,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 510,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 509,
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
                      lineNumber: 546,
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
                          lineNumber: 559,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 540,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 539,
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
                    lineNumber: 567,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 566,
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
                    lineNumber: 578,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 577,
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
                    lineNumber: 589,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 588,
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
                    lineNumber: 600,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 599,
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
                    lineNumber: 613,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 611,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 508,
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
              lineNumber: 633,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 486,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
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
          lineNumber: 659,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 650,
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
          lineNumber: 678,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 672,
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
          lineNumber: 685,
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
            lineNumber: 687,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 686,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 701,
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
            lineNumber: 703,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 715,
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
            lineNumber: 731,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 716,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 744,
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
            lineNumber: 746,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 671,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsInVzZUVmZmVjdCIsIlBsYW5TZXJ2aWNlIiwiR2V0QWxsIiwidGhlbiIsIkVkdVllYXJTZXJ2aWNlIiwiR2V0WWVhcnMiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImVycm9yIiwiY2hhbmdlUHJvZ3JhbSIsInZhbCIsImNoYW5nZUVkdVllYXIiLCJzZXRMb2FkQ291cnNlcyIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImxvYWRDb3Vyc2VzIiwibG9hZEV4YW1zVHlwZSIsInNldExvYWRFeGFtc1R5cGUiLCJwbGFucyIsInNldFBsYW5zIiwiYWRkSW5wdXRGaWVsZCIsImlucHV0RmllbGRzIiwibGVuZ3RoIiwiaGFsbHMiLCJ0b2FzdCIsInNldElucHV0RmllbGRzIiwiaGFsbCIsImRhdGUiLCJnZXRGdWxsRGF0ZSIsInNlbGVjdGVkRGF0ZSIsImZyb20iLCJnZXRGdWxsVGltZSIsInN0YXJ0VGltZSIsInRvIiwiZW5kVGltZSIsInBsYW5JZCIsIm51bV9zdHVkcyIsInJlbW92ZUlucHV0RmllbGRzIiwiaW5kZXgiLCJyb3dzIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImxpc3QiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInNsaWNlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsInNldEVuZFRpbWUiLCJnZXREYXkiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0YXJ0SG91ciIsImdldEhvdXJzIiwic3RhcnRNaW51dGUiLCJnZXRNaW51dGVzIiwiZW5kSG91ciIsImVuZE1pbnV0ZSIsInNlbGVjdGVkUGxhbiIsInNldFNlbGVjdGVkUGxhbiIsInNlbGVjdFBsYW4iLCJ2YWxBc051bSIsInBhcnNlSW50IiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5Iiwib3B0aW9uIiwic3VibWl0QnRuIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNsb3NlQnRuIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ0eXBvZ3JhcGh5IiwiYXV0aCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxTQUFvQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQUE7O0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFnQkMsMkZBQWMsRUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLHFHQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxTQUFTLEVBQXpCO0FBRUEsUUFBTUksS0FBSyxHQUFHQywrREFBVSxDQUFDQyxtQkFBWCxFQUFkO0FBQ0FDLFNBQU8sQ0FBQ0MsS0FBUjtBQUNBRCxTQUFPLENBQUNFLEdBQVIsQ0FBWUwsS0FBWixFQVBtRCxDQVFuRDs7QUFDQSxRQUFNO0FBQUEsT0FBQ00sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxJQUFELENBQXRDLENBVm1ELENBWW5EOztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDLElBQUQsQ0FBcEMsQ0FkbUQsQ0FnQm5EOztBQUNBLFFBQU07QUFBQSxPQUFDTyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlIsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCVixzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FsQm1ELENBb0JuRDs7QUFDQSxRQUFNO0FBQUEsT0FBQ1csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBNkJaLHNEQUFRLENBQUMsRUFBRCxDQUEzQztBQUNBLFFBQU07QUFBQSxPQUFDYSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmQsc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBRUFlLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxpRUFBVyxDQUFDQyxNQUFaLEdBQ0dDLElBREgsQ0FDU3BCLFFBQUQsSUFBYztBQUNsQnFCLHNFQUFjLENBQUNDLFFBQWYsQ0FBd0IsRUFBeEIsRUFDR0YsSUFESCxDQUNTWCxRQUFELElBQWM7QUFDbEJSLG1CQUFXLENBQUNELFFBQVEsQ0FBQ3VCLE1BQVYsQ0FBWDtBQUNBYixtQkFBVyxDQUFDRCxRQUFRLENBQUNjLE1BQVYsQ0FBWDtBQUNELE9BSkgsRUFLR0MsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZDVCLGVBQU8sQ0FBQzZCLEtBQVIsQ0FBYyxPQUFkLEVBQXVCRCxHQUF2QjtBQUNELE9BUEg7QUFRRCxLQVZILEVBV0dELEtBWEgsQ0FXVUMsR0FBRCxJQUFTO0FBQ2Q1QixhQUFPLENBQUM2QixLQUFSLENBQWMsT0FBZCxFQUF1QkQsR0FBdkI7QUFDRCxLQWJIO0FBY0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFpQkEsUUFBTUUsYUFBYSxHQUFJQyxHQUFELElBQWlCO0FBQ3JDeEIsY0FBVSxDQUFDd0IsR0FBRCxDQUFWO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxhQUFhLEdBQUlELEdBQUQsSUFBaUI7QUFDckNoQixjQUFVLENBQUNnQixHQUFELENBQVY7QUFDQUUsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUMsaUVBQVcsQ0FBQ0MsYUFBWixDQUEwQjdCLE9BQTFCLEVBQW1DeUIsR0FBRyxDQUFDSyxRQUFKLEVBQW5DLEVBQ0diLElBREgsQ0FDU2MsSUFBRCxJQUFVO0FBQ2RyQyxhQUFPLENBQUNFLEdBQVIsQ0FBWW1DLElBQUksQ0FBQ1gsTUFBakI7QUFDQWpCLGdCQUFVLENBQUM0QixJQUFJLENBQUNYLE1BQU4sQ0FBVjtBQUNELEtBSkgsRUFLR0MsS0FMSCxDQUtVRSxLQUFELElBQVcsQ0FBRSxDQUx0QjtBQU1BSSxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBVkQ7O0FBWUEsUUFBTTtBQUFBLE9BQUNLLFdBQUQ7QUFBQSxPQUFjTDtBQUFkLE1BQWdDNUIsc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNrQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DbkMsc0RBQVEsQ0FBQyxLQUFELENBQWxEO0FBRUEsUUFBTTtBQUFBLE9BQUNvQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnJDLHNEQUFRLENBQUMsRUFBRCxDQUFsQyxDQTVEbUQsQ0E4RG5EOztBQUNBZSx5REFBUyxDQUFDLE1BQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUOztBQUVBLFFBQU11QixhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFJQyxXQUFXLENBQUNDLE1BQVosSUFBc0JDLEtBQUssQ0FBQ0QsTUFBaEMsRUFDRUUscURBQUssQ0FBQ2xCLEtBQU4sQ0FBWSxvQ0FBWixFQURGLEtBR0VtQixjQUFjLENBQUMsQ0FDYixHQUFHSixXQURVLEVBRWI7QUFDRUssVUFBSSxFQUFFLENBRFI7QUFFRUMsVUFBSSxFQUFFQyxXQUFXLENBQUNDLFlBQUQsQ0FGbkI7QUFHRUMsVUFBSSxFQUFFQyxXQUFXLENBQUNDLFNBQUQsQ0FIbkI7QUFJRUMsUUFBRSxFQUFFRixXQUFXLENBQUNHLE9BQUQsQ0FKakI7QUFLRUMsWUFBTSxFQUFFLENBTFY7QUFNRUMsZUFBUyxFQUFFO0FBTmIsS0FGYSxDQUFELENBQWQ7QUFXSCxHQWZEOztBQWdCQSxRQUFNQyxpQkFBaUIsR0FBSUMsS0FBRCxJQUFXO0FBQ25DLFVBQU1DLElBQUksR0FBRyxDQUFDLEdBQUdsQixXQUFKLENBQWI7QUFDQWtCLFFBQUksQ0FBQ0MsTUFBTCxDQUFZRixLQUFaLEVBQW1CLENBQW5CO0FBQ0FiLGtCQUFjLENBQUNjLElBQUQsQ0FBZDtBQUNELEdBSkQ7O0FBS0EsUUFBTUUsWUFBWSxHQUFHLENBQUNILEtBQUQsRUFBUUksSUFBUixLQUFpQjtBQUNwQyxVQUFNO0FBQUVDLFVBQUY7QUFBUUM7QUFBUixRQUFrQkYsSUFBSSxDQUFDRyxNQUE3QjtBQUNBLFVBQU1DLElBQUksR0FBRyxDQUFDLEdBQUd6QixXQUFKLENBQWI7QUFDQXlCLFFBQUksQ0FBQ1IsS0FBRCxDQUFKLENBQVlLLElBQVosSUFBb0JDLEtBQXBCO0FBQ0FuQixrQkFBYyxDQUFDcUIsSUFBRCxDQUFkO0FBQ0FyRSxXQUFPLENBQUNFLEdBQVIsQ0FBWW1FLElBQVo7QUFDRCxHQU5ELENBdEZtRCxDQTZGbkQ7OztBQUNBLFFBQU1sQixXQUFXLEdBQUlELElBQUQsSUFBVTtBQUM1QixRQUFJb0IsR0FBRyxHQUFHcEIsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVxQixPQUFOLEVBQVY7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBQXRCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFdUIsUUFBTixNQUFtQixDQUEvQjtBQUNBLFFBQUlDLElBQUksR0FBR3hCLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFeUIsV0FBTixFQUFYLENBSDRCLENBSTVCOztBQUNBLFdBQVEsR0FBRSxDQUFDLE1BQU1MLEdBQVAsRUFBWU0sS0FBWixDQUFrQixDQUFDLENBQW5CLENBQXNCLElBQUcsQ0FBQyxNQUFNSixLQUFQLEVBQWNJLEtBQWQsQ0FBb0IsQ0FBQyxDQUFyQixDQUF3QixJQUFHRixJQUFLLEVBQW5FO0FBQ0QsR0FORCxDQTlGbUQsQ0FxR25EOzs7QUFDQSxRQUFNcEIsV0FBVyxHQUFJSixJQUFELElBQVU7QUFDNUIsV0FBT0EsSUFBSSxDQUFDMkIsa0JBQUwsRUFBUDtBQUNELEdBRkQsQ0F0R21ELENBeUduRDs7O0FBQ0EsUUFBTTVFLEtBQUssR0FBRyxNQUFNO0FBQ2xCNkUsc0JBQWtCLENBQUMsQ0FBRCxDQUFsQjtBQUNBQyxzQkFBa0IsQ0FBQyxDQUFELENBQWxCO0FBQ0FDLG9CQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQXRDLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQXVDLHVCQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDQWpDLGtCQUFjLENBQUMsQ0FDYjtBQUNFQyxVQUFJLEVBQUUsQ0FEUjtBQUVFQyxVQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsWUFBRCxDQUZuQjtBQUdFQyxVQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsU0FBRCxDQUhuQjtBQUlFQyxRQUFFLEVBQUVGLFdBQVcsQ0FBQ0csT0FBRCxDQUpqQjtBQUtFRSxlQUFTLEVBQUU7QUFMYixLQURhLENBQUQsQ0FBZDtBQVNELEdBZkQ7O0FBZ0JBLFFBQU11QixZQUFZLEdBQUluRCxHQUFELElBQWlCO0FBQ3BDOUIsU0FBSztBQUNMVSxhQUFTLENBQUNvQixHQUFELENBQVQ7QUFDQVMsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjs7QUFDQSxRQUFJMkMsT0FBTyxHQUFHM0UsT0FBTyxDQUFDNEUsSUFBUixDQUFjQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsYUFBRixLQUFvQnZELEdBQXhDLENBQWQ7O0FBQ0FkLGdCQUFZLENBQUNrRSxPQUFPLENBQUNJLGtCQUFULENBQVo7QUFDQS9DLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRCxHQVBEOztBQVFBLFFBQU1nRCxjQUFjLEdBQUl6RCxHQUFELElBQWlCO0FBQ3RDOUIsU0FBSzs7QUFDTCxRQUFJa0YsT0FBTyxHQUFHM0UsT0FBTyxDQUFDNEUsSUFBUixDQUFjQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsYUFBRixJQUFtQjVFLE1BQXZDLENBQWQ7O0FBQ0FTLGVBQVcsQ0FBQ1ksR0FBRCxDQUFYO0FBQ0FHLGlFQUFXLENBQUN1RCxXQUFaLENBQ0VuRixPQURGLEVBRUVRLE9BRkYsRUFHRXFFLE9BQU8sQ0FBQ0csYUFIVixFQUlFdkQsR0FBRyxDQUFDSyxRQUFKLEVBSkYsRUFNR2IsSUFOSCxDQU1TYyxJQUFELElBQVVLLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDWCxNQUFOLENBTjFCLEVBT0dDLEtBUEgsQ0FPVUUsS0FBRCxJQUFXLENBQUUsQ0FQdEI7QUFRRCxHQVpELENBbEltRCxDQStJbkQ7QUFDQTtBQUNBOzs7QUFFQSxRQUFNO0FBQUEsT0FBQzZELGdCQUFEO0FBQUEsT0FBbUJUO0FBQW5CLE1BQTBDNUUsc0RBQVEsQ0FBQyxFQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNzRixhQUFEO0FBQUEsT0FBZ0JYO0FBQWhCLE1BQW9DM0Usc0RBQVEsQ0FBVyxFQUFYLENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUN1RixlQUFEO0FBQUEsT0FBa0JkO0FBQWxCLE1BQXdDekUsc0RBQVEsQ0FBQyxDQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUN3RixlQUFEO0FBQUEsT0FBa0JkO0FBQWxCLE1BQXdDMUUsc0RBQVEsQ0FBQyxDQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUMrQyxZQUFEO0FBQUEsT0FBZTBDO0FBQWYsTUFBa0N6RixzREFBUSxDQUFDLElBQUkwRixJQUFKLEVBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3hDLFNBQUQ7QUFBQSxPQUFZeUM7QUFBWixNQUE0QjNGLHNEQUFRLENBQUMsSUFBSTBGLElBQUosRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDdEMsT0FBRDtBQUFBLE9BQVV3QztBQUFWLE1BQXdCNUYsc0RBQVEsQ0FBQyxJQUFJMEYsSUFBSixFQUFELENBQXRDO0FBQ0EvRixTQUFPLENBQUNFLEdBQVIsQ0FBWSxjQUFaLEVBQTRCa0QsWUFBWSxDQUFDOEMsTUFBYixFQUE1QixFQTFKbUQsQ0EySm5EOztBQUNBLFFBQU07QUFBQSxPQUFDdEQsV0FBRDtBQUFBLE9BQWNJO0FBQWQsTUFBZ0MzQyxzREFBUSxDQUFDLENBQzdDO0FBQ0U0QyxRQUFJLEVBQUUsQ0FEUjtBQUVFQyxRQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsWUFBRCxDQUZuQjtBQUdFQyxRQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsU0FBRCxDQUhuQjtBQUlFQyxNQUFFLEVBQUVGLFdBQVcsQ0FBQ0csT0FBRCxDQUpqQjtBQUtFQyxVQUFNLEVBQUUsQ0FMVjtBQU1FQyxhQUFTLEVBQUU7QUFOYixHQUQ2QyxDQUFELENBQTlDO0FBVUEzRCxTQUFPLENBQUNFLEdBQVIsQ0FBWTBDLFdBQVo7QUFDQSxRQUFNdUQsTUFBTSxHQUFHLENBQ2I7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRWxDLFFBQUksRUFBRSxJQUZSO0FBR0VtQyxZQUFRLEVBQUU7QUFIWixHQURhLEVBTWI7QUFDRUQsTUFBRSxFQUFFLENBRE47QUFFRWxDLFFBQUksRUFBRSxJQUZSO0FBR0VtQyxZQUFRLEVBQUU7QUFIWixHQU5hLENBQWY7QUFZQSxRQUFNO0FBQUEsT0FBQ3ZELEtBQUQ7QUFBQSxPQUFRd0Q7QUFBUixNQUFvQmpHLHNEQUFRLENBQUM4RixNQUFELENBQWxDOztBQUNBLFFBQU1JLGdCQUFnQixHQUFJbEIsQ0FBRCxJQUFPO0FBQzlCUyxtQkFBZSxDQUFDVCxDQUFELENBQWY7O0FBQ0EsUUFBSW1CLFVBQVUsR0FBRzVELFdBQVcsQ0FBQ2dDLEtBQVosR0FBb0I2QixHQUFwQixDQUF5QkMsRUFBRCxJQUFRO0FBQy9DLGFBQU87QUFDTHpELFlBQUksRUFBRXlELEVBQUUsQ0FBQ3pELElBREo7QUFFTEMsWUFBSSxFQUFFQyxXQUFXLENBQUNrQyxDQUFELENBRlo7QUFHTGhDLFlBQUksRUFBRUMsV0FBVyxDQUFDQyxTQUFELENBSFo7QUFJTEMsVUFBRSxFQUFFRixXQUFXLENBQUNHLE9BQUQsQ0FKVjtBQUtMQyxjQUFNLEVBQUVnRCxFQUFFLENBQUNoRCxNQUxOO0FBTUxDLGlCQUFTLEVBQUUrQyxFQUFFLENBQUMvQztBQU5ULE9BQVA7QUFRRCxLQVRnQixDQUFqQjs7QUFVQVgsa0JBQWMsQ0FBQ3dELFVBQUQsQ0FBZDtBQUNELEdBYkQ7O0FBY0EsUUFBTUcsZUFBZSxHQUFJdEIsQ0FBRCxJQUFPO0FBQzdCVyxnQkFBWSxDQUFDWCxDQUFELENBQVo7O0FBQ0EsUUFBSW1CLFVBQVUsR0FBRzVELFdBQVcsQ0FBQ2dDLEtBQVosR0FBb0I2QixHQUFwQixDQUF5QkMsRUFBRCxJQUFRO0FBQy9DLGFBQU87QUFDTHpELFlBQUksRUFBRXlELEVBQUUsQ0FBQ3pELElBREo7QUFFTEMsWUFBSSxFQUFFQyxXQUFXLENBQUNDLFlBQUQsQ0FGWjtBQUdMQyxZQUFJLEVBQUVDLFdBQVcsQ0FBQytCLENBQUQsQ0FIWjtBQUlMN0IsVUFBRSxFQUFFRixXQUFXLENBQUNHLE9BQUQsQ0FKVjtBQUtMQyxjQUFNLEVBQUVnRCxFQUFFLENBQUNoRCxNQUxOO0FBTUxDLGlCQUFTLEVBQUUrQyxFQUFFLENBQUMvQztBQU5ULE9BQVA7QUFRRCxLQVRnQixDQUFqQjs7QUFVQVgsa0JBQWMsQ0FBQ3dELFVBQUQsQ0FBZDtBQUNELEdBYkQ7O0FBY0EsUUFBTUksYUFBYSxHQUFJdkIsQ0FBRCxJQUFPO0FBQzNCWSxjQUFVLENBQUNaLENBQUQsQ0FBVjs7QUFDQSxRQUFJbUIsVUFBVSxHQUFHNUQsV0FBVyxDQUFDZ0MsS0FBWixHQUFvQjZCLEdBQXBCLENBQXlCQyxFQUFELElBQVE7QUFDL0MsYUFBTztBQUNMekQsWUFBSSxFQUFFeUQsRUFBRSxDQUFDekQsSUFESjtBQUVMQyxZQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsWUFBRCxDQUZaO0FBR0xDLFlBQUksRUFBRUMsV0FBVyxDQUFDQyxTQUFELENBSFo7QUFJTEMsVUFBRSxFQUFFRixXQUFXLENBQUMrQixDQUFELENBSlY7QUFLTDNCLGNBQU0sRUFBRWdELEVBQUUsQ0FBQ2hELE1BTE47QUFNTEMsaUJBQVMsRUFBRStDLEVBQUUsQ0FBQy9DO0FBTlQsT0FBUDtBQVFELEtBVGdCLENBQWpCOztBQVVBWCxrQkFBYyxDQUFDd0QsVUFBRCxDQUFkO0FBQ0EsVUFBTUssU0FBUyxHQUFHdEQsU0FBUyxDQUFDdUQsUUFBVixFQUFsQjtBQUNBLFVBQU1DLFdBQVcsR0FBR3hELFNBQVMsQ0FBQ3lELFVBQVYsRUFBcEI7QUFDQSxVQUFNQyxPQUFPLEdBQUc1QixDQUFDLENBQUN5QixRQUFGLEVBQWhCO0FBQ0EsVUFBTUksU0FBUyxHQUFHN0IsQ0FBQyxDQUFDMkIsVUFBRixFQUFsQjtBQUNBLFFBQUkzQixDQUFDLEdBQUc5QixTQUFSLEVBQW1CUixxREFBSyxDQUFDbEIsS0FBTixDQUFZLHdDQUFaO0FBQ3BCLEdBbEJELENBaE5tRCxDQW9PbkQ7OztBQUNBLFFBQU07QUFBQSxPQUFDc0YsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0MvRyxzREFBUSxDQUFDLENBQUQsQ0FBaEQsQ0FyT21ELENBc09uRDs7QUFDQSxRQUFNZ0gsVUFBVSxHQUFJakIsRUFBRCxJQUFRO0FBQ3pCLFFBQUlrQixRQUFRLEdBQUdDLFFBQVEsQ0FBQ25CLEVBQUQsQ0FBdkIsQ0FEeUIsQ0FFekI7O0FBQ0EsUUFBSW9CLElBQUksR0FBRzdCLGFBQWEsQ0FBQ2YsS0FBZCxFQUFYOztBQUNBLFFBQUk0QyxJQUFJLENBQUNDLFFBQUwsQ0FBY0gsUUFBZCxDQUFKLEVBQTZCO0FBQzNCLFVBQUl6RCxLQUFLLEdBQUcyRCxJQUFJLENBQUNFLFNBQUwsQ0FBZ0JyQyxDQUFELElBQU9BLENBQUMsSUFBSWlDLFFBQTNCLENBQVo7O0FBQ0FFLFVBQUksQ0FBQ3pELE1BQUwsQ0FBWUYsS0FBWixFQUFtQixDQUFuQjs7QUFDQW1CLHNCQUFnQixDQUFDd0MsSUFBRCxDQUFoQjtBQUNBLFVBQUlHLEdBQUcsR0FDTEgsSUFBSSxDQUFDM0UsTUFBTCxHQUFjLENBQWQsR0FDSUosS0FBSyxDQUFDZ0UsR0FBTixDQUFXcEIsQ0FBRCxJQUFPO0FBQ2YsWUFBSW1DLElBQUksQ0FBQ0MsUUFBTCxDQUFjRixRQUFRLENBQUNsQyxDQUFDLENBQUNlLEVBQUgsQ0FBdEIsQ0FBSixFQUFtQyxPQUFPZixDQUFQO0FBQ3BDLE9BRkQsQ0FESixHQUlJLEVBTE47QUFNQUoseUJBQW1CLENBQUMwQyxHQUFELENBQW5COztBQUNBLFVBQUlBLEdBQUcsQ0FBQzlFLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQixjQUFNK0UsTUFBTSxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FDYixDQUFDQyxVQUFELEVBQWFDLENBQWIsS0FBbUJELFVBQVUsR0FBR0MsQ0FBQyxDQUFDQyxnQkFEckIsRUFFYixDQUZhLENBQWY7QUFJQSxjQUFNQyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ0UsTUFBSixDQUNiLENBQUNDLFVBQUQsRUFBYUMsQ0FBYixLQUFtQkQsVUFBVSxHQUFHQyxDQUFDLENBQUNHLGdCQURyQixFQUViLENBRmEsQ0FBZjtBQUlBcEQsMEJBQWtCLENBQUNtRCxNQUFELENBQWxCO0FBQ0FsRCwwQkFBa0IsQ0FBQzZDLE1BQUQsQ0FBbEI7QUFDRCxPQVhELE1BV087QUFDTDlDLDBCQUFrQixDQUFDLENBQUQsQ0FBbEI7QUFDQUMsMEJBQWtCLENBQUMsQ0FBRCxDQUFsQjtBQUNEO0FBQ0YsS0ExQkQsTUEwQk87QUFDTHlDLFVBQUksQ0FBQ1csSUFBTCxDQUFVYixRQUFWOztBQUNBdEMsc0JBQWdCLENBQUN3QyxJQUFELENBQWhCO0FBQ0EsVUFBSUcsR0FBRyxHQUNMSCxJQUFJLENBQUMzRSxNQUFMLEdBQWMsQ0FBZCxHQUNJSixLQUFLLENBQUNnRSxHQUFOLENBQVdwQixDQUFELElBQU87QUFDZixZQUFJbUMsSUFBSSxDQUFDQyxRQUFMLENBQWNGLFFBQVEsQ0FBQ2xDLENBQUMsQ0FBQ2UsRUFBSCxDQUF0QixDQUFKLEVBQW1DLE9BQU9mLENBQVA7QUFDcEMsT0FGRCxDQURKLEdBSUksRUFMTjtBQU1BSix5QkFBbUIsQ0FBQzBDLEdBQUQsQ0FBbkI7QUFDQSxZQUFNQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUNiLENBQUNDLFVBQUQsRUFBYUMsQ0FBYixLQUFtQkQsVUFBVSxHQUFHQyxDQUFDLENBQUNDLGdCQURyQixFQUViLENBRmEsQ0FBZjtBQUlBLFlBQU1DLE1BQU0sR0FBR04sR0FBRyxDQUFDRSxNQUFKLENBQ2IsQ0FBQ0MsVUFBRCxFQUFhQyxDQUFiLEtBQW1CRCxVQUFVLEdBQUdDLENBQUMsQ0FBQ0csZ0JBRHJCLEVBRWIsQ0FGYSxDQUFmO0FBSUFwRCx3QkFBa0IsQ0FBQ21ELE1BQUQsQ0FBbEI7QUFDQWxELHdCQUFrQixDQUFDNkMsTUFBRCxDQUFsQjtBQUNEO0FBQ0YsR0FuREQ7O0FBcURBLFFBQU1RLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxjQUFRLEVBQUUsQ0FBQyxHQUFHM0MsYUFBSixDQURJO0FBRWQ0QyxVQUFJLEVBQUcsR0FBRXZILFVBQVUsQ0FBQ3dILE1BQVgsQ0FBbUJuRCxDQUFELElBQU9BLENBQUMsQ0FBQ2UsRUFBRixJQUFRbEYsUUFBakMsRUFBMkMsQ0FBM0MsRUFBOENnRCxJQUFLLEVBRjlDO0FBR2RoQixVQUFJLEVBQUVDLFdBQVcsQ0FBQ0MsWUFBRCxDQUhIO0FBSWRDLFVBQUksRUFBRUMsV0FBVyxDQUFDQyxTQUFELENBSkg7QUFLZEMsUUFBRSxFQUFFRixXQUFXLENBQUNHLE9BQUQsQ0FMRDtBQU1kWCxXQUFLLEVBQUVGLFdBQVcsQ0FBQzZELEdBQVosQ0FBaUJDLEVBQUQsSUFBUTtBQUM3QixlQUFPO0FBQ0xOLFlBQUUsRUFBRU0sRUFBRSxDQUFDekQsSUFERjtBQUVMd0YsaUJBQU8sRUFBRS9CLEVBQUUsQ0FBQ2hELE1BRlA7QUFHTGdGLHNCQUFZLEVBQUVuQixRQUFRLENBQUUsR0FBRWIsRUFBRSxDQUFDL0MsU0FBVSxFQUFqQjtBQUhqQixTQUFQO0FBS0QsT0FOTTtBQU5PLEtBQWhCO0FBY0EzRCxXQUFPLENBQUNFLEdBQVIsQ0FBWW1JLE9BQVosRUFmMEIsQ0FnQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FoQ0Q7O0FBaUNBLFFBQU1NLFdBQVcsR0FBSWxHLEtBQUQsSUFBVztBQUM3QixRQUFJQSxLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQiwwQkFDRSxxRUFBQyw2RUFBRDtBQUF5QixjQUFNLEVBQUUrRixxREFBakM7QUFBdUMsYUFBSyxFQUFFQywwREFBOUM7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUNFLGVBQUssRUFBRTtBQUNMQyxrQkFBTSxFQUFFLFNBREg7QUFFTEMsaUJBQUssRUFBRSxNQUZGO0FBR0xDLHdCQUFZLEVBQUUsS0FIVDtBQUlMQyx5QkFBYSxFQUFFO0FBSlYsV0FEVDtBQUFBLGtDQVFFLHFFQUFDLHNEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixjQUFFLEVBQUUsRUFBcEI7QUFBd0IsaUJBQUssRUFBRTtBQUFFQyxvQkFBTSxFQUFFO0FBQVYsYUFBL0I7QUFBQSxvQ0FDRSxxRUFBQyxpRUFBRDtBQUFVLGdCQUFFLEVBQUUsQ0FBZDtBQUFBLHFDQUNFO0FBQUkscUJBQUssRUFBRTtBQUFFQyw0QkFBVSxFQUFFO0FBQWQsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUscUVBQUMsaUVBQUQ7QUFBVSxnQkFBRSxFQUFFLENBQWQ7QUFBQSxxQ0FDRTtBQUFJLHFCQUFLLEVBQUU7QUFBRUEsNEJBQVUsRUFBRTtBQUFkLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU9FLHFFQUFDLGlFQUFEO0FBQVUsZ0JBQUUsRUFBRSxDQUFkO0FBQUEscUNBQ0U7QUFBSSxxQkFBSyxFQUFFO0FBQUVBLDRCQUFVLEVBQUU7QUFBZCxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsZUFVRSxxRUFBQyxpRUFBRDtBQUFVLGdCQUFFLEVBQUUsQ0FBZDtBQUFBLHNDQUNFO0FBQUkscUJBQUssRUFBRTtBQUFFQSw0QkFBVSxFQUFFLE1BQWQ7QUFBc0JDLDhCQUFZLEVBQUU7QUFBcEMsaUJBQVg7QUFBQSxzRkFDYSxHQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUkscUJBQUssRUFBRTtBQUFFRCw0QkFBVSxFQUFFLE1BQWQ7QUFBc0JFLDJCQUFTLEVBQUU7QUFBakMsaUJBQVg7QUFBQSx3RkFDZSxHQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGLGVBMkJFLHFFQUFDLHNEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixjQUFFLEVBQUUsRUFBcEI7QUFBd0IsaUJBQUssRUFBRTtBQUFFUCxvQkFBTSxFQUFFO0FBQVYsYUFBL0I7QUFBQSxzQkFDR3JHLEtBQUssQ0FBQ2dFLEdBQU4sQ0FBV3BCLENBQUQ7QUFBQTs7QUFBQSxrQ0FDVDtBQUFBLHdDQUNFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEseUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSwyQkFBTyxFQUFDLFVBRFY7QUFFRSx3QkFBSSxFQUFDLE9BRlA7QUFHRSw0QkFBUSxNQUhWO0FBSUUseUJBQUssYUFBRUEsQ0FBQyxDQUFDWCxJQUFKLDRDQUFFLFFBQVE0RTtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQVNFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEseUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSwyQkFBTyxFQUFDLFVBRFY7QUFFRSx3QkFBSSxFQUFDLE9BRlA7QUFHRSw0QkFBUSxNQUhWO0FBSUUseUJBQUssY0FBRWpFLENBQUMsQ0FBQ1gsSUFBSixvRUFBRSxTQUFRNkUsVUFBVix3REFBRSxvQkFBb0JEO0FBSjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVRGLGVBaUJFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEseUNBQ0UscUVBQUMsMkRBQUQ7QUFDRSwyQkFBTyxFQUFDLFVBRFY7QUFFRSx3QkFBSSxFQUFDLE9BRlA7QUFHRSw0QkFBUSxNQUhWO0FBSUUseUJBQUssRUFBRWpFLENBQUMsQ0FBQ21FO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBakJGLGVBeUJFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEsNkJBQ0duRSxDQUFDLENBQUM2QyxnQkFETCxTQUMwQjdDLENBQUMsQ0FBQzJDLGdCQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBekJGLGVBNEJFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLFVBRFA7QUFFRSwyQkFBTyxFQUFFckMsYUFBYSxDQUFDOEIsUUFBZCxDQUF1QnBDLENBQUMsQ0FBQ2UsRUFBekIsQ0FGWDtBQUdFLHlCQUFLLEVBQUVmLENBQUMsQ0FBQ2UsRUFIWDtBQUlFLDRCQUFRLEVBQUdxRCxDQUFELElBQU9wQyxVQUFVLENBQUNvQyxDQUFDLENBQUNyRixNQUFGLENBQVNELEtBQVY7QUFKN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBNUJGO0FBQUEsOEJBRFM7QUFBQSxhQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkEzQkYsZUFvRUUscUVBQUMsc0RBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQWdCLGNBQUUsRUFBRSxFQUFwQjtBQUFBLG9DQUNFLHFFQUFDLGlFQUFEO0FBQVUsZ0JBQUUsRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBVSxnQkFBRSxFQUFFLENBQWQ7QUFBQSxxQ0FDRSxxRUFBQyx3RUFBRDtBQUNFLHlCQUFTLE1BRFg7QUFFRSxxQkFBSyxFQUFFZixZQUZUO0FBR0Usd0JBQVEsRUFBR0YsSUFBRCxJQUFVcUQsZ0JBQWdCLENBQUNyRCxJQUFELENBSHRDO0FBSUUsdUJBQU8sRUFBRSxJQUFJNkMsSUFBSixFQUpYO0FBS0Usc0JBQU0sRUFBQyxZQUxULENBTUU7O0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBFRixlQWlGRSxxRUFBQyxzREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBZ0IsY0FBRSxFQUFFLEVBQXBCO0FBQXdCLGlCQUFLLEVBQUU7QUFBRXNELHVCQUFTLEVBQUU7QUFBYixhQUEvQjtBQUFBLG9DQUNFLHFFQUFDLGlFQUFEO0FBQVUsbUJBQUssRUFBRTtBQUFFSyx1QkFBTyxFQUFFLE1BQVg7QUFBbUJMLHlCQUFTLEVBQUU7QUFBOUIsZUFBakI7QUFBd0QsZ0JBQUUsRUFBRSxDQUE1RDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFLHFFQUFDLGlFQUFEO0FBQVUsZ0JBQUUsRUFBRSxDQUFkO0FBQUEscUNBQ0UscUVBQUMscURBQUQ7QUFDRSw0QkFBWSxFQUFFOUYsU0FEaEI7QUFFRSwyQkFBVyxFQUFFLGNBRmY7QUFHRSw0QkFBWSxFQUFFLElBSGhCO0FBSUUsdUJBQU8sRUFBRTFELEtBSlg7QUFLRSx3QkFBUSxFQUFHd0YsQ0FBRCxJQUFPO0FBQ2ZzQixpQ0FBZSxDQUFDdEIsQ0FBRCxDQUFmO0FBQ0QsaUJBUEg7QUFRRSw4QkFBYyxFQUFHc0UsTUFBRCxJQUFZQSxNQVI5QjtBQVNFLDhCQUFjLEVBQUdBLE1BQUQsSUFBWUE7QUFUOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFpQkUscUVBQUMsaUVBQUQ7QUFBVSxnQkFBRSxFQUFFLENBQWQ7QUFBQSxxQ0FDRSxxRUFBQyxnRUFBRDtBQUNFLCtCQUFlLE1BRGpCO0FBRUUsMEJBQVUsRUFBQyxLQUZiO0FBR0UscUJBQUssRUFBQyxvQkFIUjtBQUlFLHFCQUFLLEVBQUVsRyxPQUpUO0FBS0UsMkJBQVcsRUFBRSxDQUxmO0FBTUUsd0JBQVEsRUFBRW1EO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBakJGLGVBMkJFLHFFQUFDLGlFQUFEO0FBQVUsZ0JBQUUsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBM0JGLGVBNEJFLHFFQUFDLHNEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFnQixnQkFBRSxFQUFFLENBQXBCO0FBQUEsc0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxvQkFBSSxNQUFWO0FBQVcsa0JBQUUsRUFBRSxDQUFmO0FBQUEsd0NBQ0U7QUFBRyx1QkFBSyxFQUFFO0FBQUVrQywwQkFBTSxFQUFFO0FBQVYsbUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFHLHVCQUFLLEVBQUU7QUFBRUEsMEJBQU0sRUFBRTtBQUFWLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBR0U7QUFBRyx1QkFBSyxFQUFFO0FBQUVBLDBCQUFNLEVBQUU7QUFBVixtQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFNRSxxRUFBQyxzREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBVyxrQkFBRSxFQUFFLENBQWY7QUFBQSx3Q0FDRTtBQUFHLHVCQUFLLEVBQUU7QUFBRUEsMEJBQU0sRUFBRTtBQUFWLG1CQUFWO0FBQUEsNEJBQTZCLEdBQzNCbEQsZUFBZSxHQUFHQyxlQUNuQjtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFHLHVCQUFLLEVBQUU7QUFBRWlELDBCQUFNLEVBQUU7QUFBVixtQkFBVjtBQUFBLDRCQUE0QmxEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsZUFLRTtBQUFHLHVCQUFLLEVBQUU7QUFBRWtELDBCQUFNLEVBQUU7QUFBVixtQkFBVjtBQUFBLDRCQUE0QmpEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUE4SEUscUVBQUMsc0RBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQWdCLFlBQUUsRUFBRSxFQUFwQjtBQUF3QixlQUFLLEVBQUU7QUFBRXdELHFCQUFTLEVBQUU7QUFBYixXQUEvQjtBQUFBLGlDQUNFLHFFQUFDLHNEQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUNMUCxvQkFBTSxFQUFFLFNBREg7QUFFTEMsbUJBQUssRUFBRSxNQUZGO0FBR0xDLDBCQUFZLEVBQUUsS0FIVDtBQUlMQywyQkFBYSxFQUFFO0FBSlYsYUFEVDtBQUFBLG9DQVFFLHFFQUFDLHNEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFBLHFDQUNFLHFFQUFDLHdEQUFEO0FBQ0UscUJBQUssRUFBRTtBQUFFSCx3QkFBTSxFQUFFO0FBQVYsaUJBRFQ7QUFFRSx1QkFBTyxFQUFDLFdBRlY7QUFHRSx5QkFBUyxFQUFFbEosT0FBTyxDQUFDZ0ssU0FIckI7QUFJRSx1QkFBTyxFQUFFakgsYUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkYsRUFrQkdDLFdBQVcsQ0FBQzZELEdBQVosQ0FBZ0IsQ0FBQ29ELElBQUQsRUFBT2hHLEtBQVAsS0FBaUI7QUFDaEM3RCxxQkFBTyxDQUFDRSxHQUFSLENBQVkySixJQUFaO0FBQ0E3SixxQkFBTyxDQUFDRSxHQUFSLENBQVl3RixnQkFBWjtBQUNBLGtDQUNFLHFFQUFDLHNEQUFEO0FBQU0seUJBQVMsTUFBZjtBQUFnQixrQkFBRSxFQUFFLEVBQXBCO0FBQXdCLHFCQUFLLEVBQUU7QUFBRTJELDJCQUFTLEVBQUU7QUFBYixpQkFBL0I7QUFBQSx3Q0FDRSxxRUFBQyxpRUFBRDtBQUFVLG9CQUFFLEVBQUUsQ0FBZDtBQUFBLHlDQUNFLHFFQUFDLDZEQUFEO0FBQ0UsNkJBQVMsTUFEWDtBQUVFLDJCQUFPLEVBQUMsUUFGVjtBQUdFLHdCQUFJLEVBQUMsT0FIUDtBQUlFLHdCQUFJLEVBQUMsT0FKUDtBQUFBLDRDQU1FLHFFQUFDLDREQUFEO0FBQVksd0JBQUUsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FORixlQVNFLHFFQUFDLHdEQUFEO0FBQ0UsK0JBQVMsTUFEWDtBQUVFLDZCQUFPLEVBQUMsMEJBRlY7QUFHRSx3QkFBRSxFQUFDLG9CQUhMO0FBSUUsMkJBQUssRUFBRVEsSUFBSSxDQUFDNUcsSUFKZDtBQUtFLDJCQUFLLEVBQUMsT0FMUjtBQU1FLDBCQUFJLEVBQUMsTUFOUDtBQU9FLDhCQUFRLEVBQUdnQixJQUFELElBQVVELFlBQVksQ0FBQ0gsS0FBRCxFQUFRSSxJQUFSLENBUGxDO0FBQUEsZ0NBU0duQixLQUFLLENBQUMyRCxHQUFOLENBQ0V4RCxJQUFELElBQ0UsQ0FBQ0EsSUFBSSxDQUFDb0QsUUFBTixpQkFDRSxxRUFBQywwREFBRDtBQUF3Qiw2QkFBSyxFQUFFcEQsSUFBSSxDQUFDbUQsRUFBcEM7QUFBQSxrQ0FDR25ELElBQUksQ0FBQ2lCO0FBRFIseUJBQWVqQixJQUFJLENBQUNtRCxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUhMO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBK0JFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQUEseUNBQ0UscUVBQUMsNkRBQUQ7QUFDRSw2QkFBUyxNQURYO0FBRUUsMkJBQU8sRUFBQyxRQUZWO0FBR0Usd0JBQUksRUFBQyxPQUhQO0FBSUUsd0JBQUksRUFBQyxPQUpQO0FBQUEsNENBTUUscUVBQUMsNERBQUQ7QUFBWSx3QkFBRSxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5GLGVBU0UscUVBQUMsd0RBQUQ7QUFDRSwrQkFBUyxNQURYO0FBRUUsNkJBQU8sRUFBQywwQkFGVjtBQUdFLHdCQUFFLEVBQUMsb0JBSEw7QUFJRSwyQkFBSyxFQUFFeUQsSUFBSSxDQUFDbkcsTUFKZDtBQUtFLDJCQUFLLEVBQUMsT0FMUjtBQU1FLDBCQUFJLEVBQUMsUUFOUDtBQU9FLDhCQUFRLEVBQUdPLElBQUQsSUFBVUQsWUFBWSxDQUFDSCxLQUFELEVBQVFJLElBQVIsQ0FQbEM7QUFBQSxnQ0FTR3lCLGdCQUFnQixDQUFDZSxHQUFqQixDQUFzQm9ELElBQUQ7QUFBQTs7QUFBQSw0Q0FDcEIscUVBQUMsMERBQUQ7QUFBd0IsK0JBQUssRUFBRUEsSUFBSSxDQUFDekQsRUFBcEM7QUFBQSxvQ0FDSSxHQUFELGNBQUd5RCxJQUFJLENBQUNuRixJQUFSLCtDQUFHLFdBQVc0RSxPQUFRLE1BQXRCLGVBQTJCTyxJQUFJLENBQUNuRixJQUFoQyx5RUFBMkIsWUFBVzZFLFVBQXRDLDBEQUEyQixzQkFBdUJELE9BQVE7QUFEN0QsMkJBQWVPLElBQUksQ0FBQ3pELEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRG9CO0FBQUEsdUJBQXJCO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQS9CRixlQTBERSxxRUFBQyxpRUFBRDtBQUFVLG9CQUFFLEVBQUUsQ0FBZDtBQUFBLHlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQVEsRUFBRSxJQURaO0FBRUUsMkJBQU8sRUFBQyxVQUZWO0FBR0Usd0JBQUksRUFBQyxPQUhQO0FBSUUsd0JBQUksRUFBQyxNQUpQO0FBS0UseUJBQUssRUFBRXlELElBQUksQ0FBQzNHLElBTGQ7QUFNRSx5QkFBSyxFQUFFM0QsU0FBUyxDQUFDLFNBQUQsQ0FObEI7QUFPRSw2QkFBUztBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQTFERixlQXFFRSxxRUFBQyxpRUFBRDtBQUFVLG9CQUFFLEVBQUUsQ0FBZDtBQUFBLHlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQVEsRUFBRSxJQURaO0FBRUUsMkJBQU8sRUFBQyxVQUZWO0FBR0Usd0JBQUksRUFBQyxPQUhQO0FBSUUsd0JBQUksRUFBQyxNQUpQO0FBS0UseUJBQUssRUFBRXNLLElBQUksQ0FBQ3hHLElBTGQ7QUFNRSx5QkFBSyxFQUFFOUQsU0FBUyxDQUFDLElBQUQsQ0FObEI7QUFPRSw2QkFBUztBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXJFRixlQWdGRSxxRUFBQyxpRUFBRDtBQUFVLG9CQUFFLEVBQUUsQ0FBZDtBQUFBLHlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQVEsRUFBRSxJQURaO0FBRUUsMkJBQU8sRUFBQyxVQUZWO0FBR0Usd0JBQUksRUFBQyxPQUhQO0FBSUUsd0JBQUksRUFBQyxNQUpQO0FBS0UseUJBQUssRUFBRXNLLElBQUksQ0FBQ3JHLEVBTGQ7QUFNRSx5QkFBSyxFQUFFakUsU0FBUyxDQUFDLEtBQUQsQ0FObEI7QUFPRSw2QkFBUztBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWhGRixlQTJGRSxxRUFBQyxpRUFBRDtBQUFVLG9CQUFFLEVBQUUsQ0FBZDtBQUFBLHlDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsNEJBQVEsRUFBRzBFLElBQUQsSUFBVUQsWUFBWSxDQUFDSCxLQUFELEVBQVFJLElBQVIsQ0FEbEM7QUFFRSwyQkFBTyxFQUFDLFVBRlY7QUFHRSx3QkFBSSxFQUFDLE9BSFA7QUFJRSx3QkFBSSxFQUFDLFFBSlA7QUFLRSx3QkFBSSxFQUFDLFdBTFA7QUFNRSx5QkFBSyxFQUFFNEYsSUFBSSxDQUFDbEcsU0FOZDtBQU9FLHlCQUFLLEVBQUVwRSxTQUFTLENBQUMsYUFBRCxDQVBsQjtBQVFFLDZCQUFTO0FBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBM0ZGLGVBdUdFLHFFQUFDLGlFQUFEO0FBQVUsb0JBQUUsRUFBRSxDQUFkO0FBQWlCLHVCQUFLLEVBQUU7QUFBRThKLDZCQUFTLEVBQUU7QUFBYixtQkFBeEI7QUFBQSw0QkFDR3pHLFdBQVcsQ0FBQ0MsTUFBWixLQUF1QixDQUF2QixnQkFDQyxxRUFBQyx3REFBRDtBQUNFLHdCQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFLLEVBQUU7QUFDTGtHLDJCQUFLLEVBQUUsS0FERjtBQUVMZSwyQkFBSyxFQUFFLE9BRkY7QUFHTEMsZ0NBQVUsRUFBRTtBQUhQLHFCQUZUO0FBT0UsMkJBQU8sRUFBQyxVQVBWO0FBUUUsNkJBQVMsRUFBRW5LLE9BQU8sQ0FBQ29LLFFBUnJCO0FBU0UsMkJBQU8sRUFBRXBHLGlCQVRYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBZUM7QUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkF2R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGO0FBNkhELGFBaElBLENBbEJILGVBbUpFLHFFQUFDLDhEQUFEO0FBQ0UscUJBQU8sRUFBRXdFLGFBRFg7QUFFRSxtQkFBSyxFQUFFO0FBQ0xVLHNCQUFNLEVBQUUsT0FESDtBQUVMZ0IscUJBQUssRUFBRSxvQkFGRjtBQUdMQywwQkFBVSxFQUFFO0FBSFAsZUFGVDtBQU9FLGtCQUFJLEVBQUMsUUFQUDtBQUFBLHdCQVNJO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFuSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBa1NELEtBblNELE1BbVNPO0FBQ0wsMEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsVUFBRSxFQUFFLEVBRk47QUFHRSxhQUFLLEVBQUU7QUFDTGpCLGdCQUFNLEVBQUUsU0FESDtBQUVMWSxpQkFBTyxFQUFFLE1BRko7QUFHTE8sd0JBQWMsRUFBRTtBQUhYLFNBSFQ7QUFBQSwrQkFTRSxxRUFBQyw0REFBRDtBQUNFLGVBQUssRUFBRTtBQUFFQyxxQkFBUyxFQUFFO0FBQWIsV0FEVDtBQUVFLGlCQUFPLEVBQUMsSUFGVjtBQUdFLG1CQUFTLEVBQUMsS0FIWjtBQUFBLG9CQUtJO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFtQkQ7QUFDRixHQXpURDs7QUEwVEEsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxNQUFFLEVBQUUsRUFBbkI7QUFBQSw0QkFDRSxxRUFBQyxzRUFBRDtBQUFlLFFBQUUsRUFBRSxFQUFuQjtBQUFBLDZCQUNFLHFFQUFDLGlFQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQUVwQixnQkFBTSxFQUFFO0FBQVYsU0FEVDtBQUVFLFVBQUUsRUFBRSxFQUZOO0FBR0UsaUJBQVMsRUFBRWxKLE9BQU8sQ0FBQ3VLLFVBSHJCO0FBQUEsK0JBS0UscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQXlCLG1CQUFTLEVBQUMsS0FBbkM7QUFBQSxvQkFDSTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLHFFQUFDLHNEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLFFBQUUsRUFBRSxFQUFwQjtBQUF3QixXQUFLLEVBQUU7QUFBRXJCLGNBQU0sRUFBRTtBQUFWLE9BQS9CO0FBQUEsOEJBQ0UscUVBQUMsaUVBQUQ7QUFBVSxVQUFFLEVBQUUsQ0FBZDtBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQVksWUFBRSxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBYSxtQkFBUyxNQUF0QjtBQUF1QixpQkFBTyxFQUFDLFFBQS9CO0FBQXdDLGNBQUksRUFBQyxPQUE3QztBQUFxRCxjQUFJLEVBQUMsT0FBMUQ7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUNFLHdCQUFZLEVBQUV4SSxPQURoQjtBQUVFLHVCQUFXLEVBQUUsaUJBRmY7QUFHRSx3QkFBWSxFQUFFLElBSGhCO0FBSUUsbUJBQU8sRUFBRUgsUUFKWDtBQUtFLG9CQUFRLEVBQUdrRixDQUFELElBQU87QUFDZnZELDJCQUFhLENBQUN1RCxDQUFDLENBQUNlLEVBQUgsQ0FBYjtBQUNELGFBUEg7QUFRRSwwQkFBYyxFQUFHdUQsTUFBRCxJQUFZQSxNQUFNLENBQUN6RixJQVJyQztBQVNFLDBCQUFjLEVBQUd5RixNQUFELElBQVlBLE1BQU0sQ0FBQ3ZEO0FBVHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlCRSxxRUFBQyxpRUFBRDtBQUFVLFVBQUUsRUFBRSxDQUFkO0FBQUEsZ0NBQ0UscUVBQUMsNERBQUQ7QUFBWSxZQUFFLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFhLG1CQUFTLE1BQXRCO0FBQXVCLGlCQUFPLEVBQUMsUUFBL0I7QUFBd0MsY0FBSSxFQUFDLE9BQTdDO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFDRSx3QkFBWSxFQUFFdEYsT0FEaEI7QUFFRSx1QkFBVyxFQUFFLGNBRmY7QUFHRSx3QkFBWSxFQUFFLElBSGhCO0FBSUUsbUJBQU8sRUFBRUYsUUFKWDtBQUtFLG9CQUFRLEVBQUd5RSxDQUFELElBQU9yRCxhQUFhLENBQUNxRCxDQUFDLENBQUNlLEVBQUgsQ0FMaEM7QUFNRSwwQkFBYyxFQUFHdUQsTUFBRCxJQUFZQSxNQUFNLENBQUNqRixJQU5yQztBQU9FLDBCQUFjLEVBQUdpRixNQUFELElBQVlBLE1BQU0sQ0FBQ3ZEO0FBUHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkYsZUErQkUscUVBQUMsaUVBQUQ7QUFBVSxVQUFFLEVBQUUsQ0FBZDtBQUFBLGdDQUNFLHFFQUFDLDREQUFEO0FBQVksWUFBRSxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFBYSxtQkFBUyxNQUF0QjtBQUF1QixpQkFBTyxFQUFDLFFBQS9CO0FBQXdDLGNBQUksRUFBQyxPQUE3QztBQUFxRCxjQUFJLEVBQUMsT0FBMUQ7QUFBQSxpQ0FlRSxxRUFBQyxxREFBRDtBQUNFLHNCQUFVLEVBQUU5RCxXQURkO0FBRUUsd0JBQVksRUFBRTVCLE1BRmhCO0FBR0UsdUJBQVcsRUFBRSxnQkFIZjtBQUlFLHdCQUFZLEVBQUUsSUFKaEI7QUFLRSxtQkFBTyxFQUFFRixPQUxYO0FBTUUsb0JBQVEsRUFBRzZFLENBQUQsSUFBT0gsWUFBWSxDQUFDRyxDQUFDLENBQUNDLGFBQUgsQ0FOL0I7QUFPRSwwQkFBYyxFQUFHcUUsTUFBRCxJQUFZQSxNQUFNLENBQUNMLE9BUHJDO0FBUUUsMEJBQWMsRUFBR0ssTUFBRCxJQUFZQSxNQUFNLENBQUNyRTtBQVJyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JGLGVBNERFLHFFQUFDLGlFQUFEO0FBQVUsVUFBRSxFQUFFLENBQWQ7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFZLFlBQUUsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLDZEQUFEO0FBQWEsbUJBQVMsTUFBdEI7QUFBdUIsaUJBQU8sRUFBQyxRQUEvQjtBQUF3QyxjQUFJLEVBQUMsT0FBN0M7QUFBcUQsY0FBSSxFQUFDLE9BQTFEO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFDRSxzQkFBVSxFQUFFL0MsYUFEZDtBQUVFLHdCQUFZLEVBQUVyQixRQUZoQjtBQUdFLHVCQUFXLEVBQUUsZ0JBSGY7QUFJRSx3QkFBWSxFQUFFLElBSmhCO0FBS0UsbUJBQU8sRUFBRUYsVUFMWDtBQU1FLG9CQUFRLEVBQUdxRSxDQUFELElBQU9HLGNBQWMsQ0FBQ0gsQ0FBQyxDQUFDZSxFQUFILENBTmpDO0FBT0UsMEJBQWMsRUFBR3VELE1BQUQsSUFBWUEsTUFBTSxDQUFDekYsSUFQckM7QUFRRSwwQkFBYyxFQUFHeUYsTUFBRCxJQUFZQSxNQUFNLENBQUN2RDtBQVJyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixFQXdGR3VDLFdBQVcsQ0FBQ2xHLEtBQUQsQ0F4RmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0RkQsQ0FudEJEOztHQUFNbkQsUztVQUNrQkUsbUY7OztLQURsQkYsUztBQXF0QkxBLFNBQUQsQ0FBbUI4SyxJQUFuQixHQUEwQixJQUExQjtBQUNDOUssU0FBRCxDQUFtQitLLE1BQW5CLEdBQTRCQyx3REFBNUI7QUFDZWhMLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC5hNDBmYTg4OGRiMzYxNDVmMmE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBBZGQsIEFycm93QmFjaywgQmFja3NwYWNlLCBab29tSW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIElucHV0LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW1cIjtcclxuaW1wb3J0IFBsYW5TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9QbGFuU2VydmljZVwiO1xyXG5pbXBvcnQgQ291cnNlU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvQ291cnNlU2VydmljZVwiO1xyXG5pbXBvcnQgRWR1WWVhclNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0VkdVllYXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBFeGFtU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRXhhbVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vVXRpbGl0eS9UcmFuc2xhdGlvbnMvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG4gIFRpbWVQaWNrZXIsXHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGFyU0EgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcIi4vZXhhbXMtbGlzdC1zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3VpQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1N1aUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJTZWxlY3QgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9IZWxwZXJzL0RhdGVIZWxwZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRXhhbXNMaXN0UHJvcHMge31cclxuY29uc3QgRXhhbXNMaXN0OiBSZWFjdC5GQzxJRXhhbXNMaXN0UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGltZXMgPSBEYXRlSGVscGVyLmdldFF1YXJ0ZXJIb3VyVGltZXMoKTtcclxuICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgY29uc29sZS5sb2codGltZXMpO1xyXG4gIC8vIFByb2dyYW1zXHJcbiAgY29uc3QgW3Byb2dyYW1zLCBzZXRQcm9ncmFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIENvdXJzZXNcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFZHUgWWVhclxyXG4gIGNvbnN0IFtlZHVZZWFycywgc2V0RWR1WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZHVZZWFyLCBzZXRFZHVZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFeGFtIFR5cGVcclxuICBjb25zdCBbZXhhbXNUeXBlcywgc2V0RXhhbXNUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhhbVR5cGUsIHNldEV4YW1UeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUGxhblNlcnZpY2UuR2V0QWxsKClcclxuICAgICAgLnRoZW4oKHByb2dyYW1zKSA9PiB7XHJcbiAgICAgICAgRWR1WWVhclNlcnZpY2UuR2V0WWVhcnMoXCJcIilcclxuICAgICAgICAgIC50aGVuKChlZHVZZWFycykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmFtcyhwcm9ncmFtcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRFZHVZZWFycyhlZHVZZWFycy5yZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUHJvZ3JhbSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UHJvZ3JhbSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVkdVllYXIgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldEVkdVllYXIodmFsKTtcclxuICAgIHNldExvYWRDb3Vyc2VzKHRydWUpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsQ291cnNlcyhwcm9ncmFtLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgICAgc2V0Q291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICAgIHNldExvYWRDb3Vyc2VzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbG9hZENvdXJzZXMsIHNldExvYWRDb3Vyc2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZEV4YW1zVHlwZSwgc2V0TG9hZEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwbGFucywgc2V0UGxhbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBHZXQgRXhhbXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkSW5wdXRGaWVsZCA9ICgpID0+IHtcclxuICAgIGlmIChpbnB1dEZpZWxkcy5sZW5ndGggPj0gaGFsbHMubGVuZ3RoKVxyXG4gICAgICB0b2FzdC5lcnJvcihcItmE2KfZitmF2YPZhtmDINin2YTYpdi22KfZgdipISDZhNin2YrZiNis2K8g2LPZiNmJINmC2KfYudiq2YrZhlwiKTtcclxuICAgIGVsc2VcclxuICAgICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICAgIC4uLmlucHV0RmllbGRzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICAgIHBsYW5JZDogMCxcclxuICAgICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUlucHV0RmllbGRzID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByb3dzID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIHJvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldElucHV0RmllbGRzKHJvd3MpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4LCBldm50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldm50LnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaW5wdXRGaWVsZHNdO1xyXG4gICAgbGlzdFtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIHNldElucHV0RmllbGRzKGxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgfTtcclxuICAvL1xyXG4gIGNvbnN0IGdldEZ1bGxEYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBkYXkgPSBkYXRlPy5nZXREYXRlKCk7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlPy5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZT8uZ2V0RnVsbFllYXIoKTtcclxuICAgIC8vIFRoaXMgYXJyYW5nZW1lbnQgY2FuIGJlIGFsdGVyZWQgYmFzZWQgb24gaG93IHdlIHdhbnQgdGhlIGRhdGUncyBmb3JtYXQgdG8gYXBwZWFyLlxyXG4gICAgcmV0dXJuIGAkeyhcIjBcIiArIGRheSkuc2xpY2UoLTIpfS0keyhcIjBcIiArIG1vbnRoKS5zbGljZSgtMil9LSR7eWVhcn1gO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsVGltZSA9IChkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICB9O1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFucyhbXSk7XHJcbiAgICBzZXRQbGFucyhbXSk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKFtdKTtcclxuICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUNvdXJzZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIHNldENvdXJzZSh2YWwpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZSh0cnVlKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT09IHZhbCk7XHJcbiAgICBzZXRFeGFtc1R5cGUoX2NvdXJzZS5ldmFsdWF0aW9uX21ldGhvZHMpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VFeGFtVHlwZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT0gY291cnNlKTtcclxuICAgIHNldEV4YW1UeXBlKHZhbCk7XHJcbiAgICBFeGFtU2VydmljZS5HZXRBbGxQbGFucyhcclxuICAgICAgcHJvZ3JhbSxcclxuICAgICAgZWR1WWVhcixcclxuICAgICAgX2NvdXJzZS5lZHVfY291cnNlX2lkLFxyXG4gICAgICB2YWwudG9TdHJpbmcoKVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gc2V0UGxhbnMocmVzcC5yZXN1bHQpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfTtcclxuICAvLyBIYWxsc1xyXG4gIC8vIGNvbnN0IFtoYWxscywgc2V0SGFsbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGhhbmRsZSBhZGQgY291cnNzZSB0byBwcm9ncmFtXHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5EYXRhLCBzZXRTZWxlY3RlZFBsYW5EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFucywgc2V0U2VsZWN0ZWRQbGFuc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5ld1N0ZHMsIHNldFNlbGVjdGVkTmV3U3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPbGRTdGRzLCBzZXRTZWxlY3RlZE9sZFN0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtzdGFydFRpbWUsIHNldFN0YXJ0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zb2xlLmxvZyhcInNlbGVjdGVkRGF0ZVwiLCBzZWxlY3RlZERhdGUuZ2V0RGF5KCkpO1xyXG4gIC8vIER5bmFtaWMgSGFsbHNcclxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaGFsbDogMCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgIG51bV9zdHVkczogMCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRGaWVsZHMpO1xyXG4gIGNvbnN0IF9oYWxscyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwi2YIxXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcItmCMlwiLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShfaGFsbHMpO1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0VGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGFydFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRW5kVGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbmRUaW1lKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gICAgY29uc3Qgc3RhcnRIb3VyID0gc3RhcnRUaW1lLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBzdGFydE1pbnV0ZSA9IHN0YXJ0VGltZS5nZXRNaW51dGVzKCk7XHJcbiAgICBjb25zdCBlbmRIb3VyID0gZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgZW5kTWludXRlID0gZS5nZXRNaW51dGVzKCk7XHJcbiAgICBpZiAoZSA8IHN0YXJ0VGltZSkgdG9hc3QuZXJyb3IoXCLZiNmC2Kog2KfZhNin2YbYqtmH2KfYoSDZitis2Kgg2KPZhiDZitmD2YjZhiDYqNi52K8g2YjZgtiqINin2YTYqNiv2KFcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gZ2V0IHNlbGVjdGVkIHBsYW4gZXhhbXNcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuLCBzZXRTZWxlY3RlZFBsYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gU2VsZWN0IFBsYW5cclxuICBjb25zdCBzZWxlY3RQbGFuID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgdmFsQXNOdW0gPSBwYXJzZUludChpZCk7XHJcbiAgICAvLyBzZXRTZWxlY3RlZFBsYW4odmFsQXNOdW0pO1xyXG4gICAgbGV0IF9hcnIgPSBzZWxlY3RlZFBsYW5zLnNsaWNlKCk7XHJcbiAgICBpZiAoX2Fyci5pbmNsdWRlcyh2YWxBc051bSkpIHtcclxuICAgICAgbGV0IGluZGV4ID0gX2Fyci5maW5kSW5kZXgoKGUpID0+IGUgPT0gdmFsQXNOdW0pO1xyXG4gICAgICBfYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBpZiAoc2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfYXJyLnB1c2godmFsQXNOdW0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRXhhbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBheUxvYWQgPSB7XHJcbiAgICAgIHBsYW5faWRzOiBbLi4uc2VsZWN0ZWRQbGFuc10sXHJcbiAgICAgIHR5cGU6IGAke2V4YW1zVHlwZXMuZmlsdGVyKChlKSA9PiBlLmlkID09IGV4YW1UeXBlKVswXS5uYW1lfWAsXHJcbiAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgaGFsbHM6IGlucHV0RmllbGRzLm1hcCgoZGQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IGRkLmhhbGwsXHJcbiAgICAgICAgICBwbGFuX2lkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgICBzdHVkZW50c19udW06IHBhcnNlSW50KGAke2RkLm51bV9zdHVkc31gKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhwYXlMb2FkKTtcclxuICAgIC8vIFBsYW5TZXJ2aWNlLkFkZENvdXJzZShwYXlMb2FkKVxyXG4gICAgLy8gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICB0b2FzdC5zdWNjZXNzKHRyYW5zbGF0ZShcIkNvdXJzZSBBZGRlZCBUbyBQbGFuIFN1Y2Nlc3NmdWxseVwiKSk7XHJcbiAgICAvLyAgICAgICBQbGFuU2VydmljZS5HZXRQcm9ncmFtQ291cnNlcyhwcm9ncmFtLCBzcGVjWWVhciwgeWVhcilcclxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgIC8vICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRQcm9ncmFtQ291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclBsYW5zID0gKHBsYW5zKSA9PiB7XHJcbiAgICBpZiAocGxhbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciBsb2NhbGU9e2FyU0F9IHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNiz2YbYqTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYp9iu2KrYtdin2LU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2YHYtdmEPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpbkJvdHRvbTogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINi52K/YryDYp9mE2LfZhNin2Kh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Ub3A6IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDZhdiz2KrYrNivIHwg2YXYudmK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICAgICAgICB7cGxhbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Uuc2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZS5uZXdfc3R1ZGVudHNfbnVtfSB8IHtlLm9sZF9zdHVkZW50c19udW19XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRQbGFucy5pbmNsdWRlcyhlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwKSA9PiBzZWxlY3RQbGFuKHAudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT7Yp9mE2KrYp9ix2YrYrjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGlucHV0VmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+INin2YTZiNmC2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzdGFydFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YjZgtiqXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0YXJ0VGltZShlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRvZGF5TGFiZWw9XCJub3dcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cItil2YTZiVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICBtaW51dGVzU3RlcD17NX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVuZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Yp9mE2YXYrNmF2YjYuSDYp9mE2YPZhNmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LPYqtis2K88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYudmK2K88L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROZXdTdGRzICsgc2VsZWN0ZWRPbGRTdGRzXHJcbiAgICAgICAgICAgICAgICAgIH1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWROZXdTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT57c2VsZWN0ZWRPbGRTdGRzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXRCdG59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZElucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINiq2K7YtdmK2LUg2YLYp9i52KlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFBsYW5EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YLYp9i52KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmhhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGFsbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhbGwuc2VsZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2hhbGwuaWR9IHZhbHVlPXtoYWxsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYWxsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYs9mG2Kkg2YjYp9mE2KfYrtiq2LXYp9i1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wbGFuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJoYWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYW5JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGxhbkRhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtkYXRhLnllYXI/LmFyX25hbWV9IC0gJHtkYXRhLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYp9mE2KrYp9ix2YrYrlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItmF2YZcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KXZhNmJXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtX3N0dWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEubnVtX3N0dWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2LnYr9ivINin2YTYt9mE2ZHYp9ioXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5sZW5ndGggIT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUlucHV0RmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8U3VpQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRFeGFtfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyMywgMTkzLCAyMzIpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICAgICAgPC9TdWlCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YNmE2KfYqtmI2KzYryDYqNmK2KfZhtin2Kog2YTYudix2LbZh9inYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgPEdyaWRDb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCItMWVtIDAgMWVtIDBcIiB9fVxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2KjYsdmG2KfZhdisPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9ncmFtfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2KjYsdmG2KfZhdisXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2dyYW1zfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlUHJvZ3JhbShlLmlkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYs9mG2Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VkdVllYXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYs9mG2KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZWR1WWVhcnN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFZHVZZWFyKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ueWVhcn1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTZhdmC2LHZkdixPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIHsvKiA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiY291cnNlc1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2UpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NvdXJzZS5pZH0gdmFsdWU9e2NvdXJzZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PiAqL31cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmF2YLYsdmR2LFcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Y291cnNlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLmVkdV9jb3Vyc2VfaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uYXJfbmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmVkdV9jb3Vyc2VfaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2YbZiNi5INin2YTZiNin2YLYudipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZEV4YW1zVHlwZX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2V4YW1UeXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YjYp9mC2LnYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtleGFtc1R5cGVzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRXhhbVR5cGUoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAge3JlbmRlclBsYW5zKHBsYW5zKX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuKEV4YW1zTGlzdCBhcyBhbnkpLmF1dGggPSB0cnVlO1xyXG4oRXhhbXNMaXN0IGFzIGFueSkubGF5b3V0ID0gQWRtaW47XHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1zTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==