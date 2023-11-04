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
                lineNumber: 453,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
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
                  lineNumber: 465,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 466,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 467,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 464,
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
                  lineNumber: 470,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 463,
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
                lineNumber: 489,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
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
                      lineNumber: 510,
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
                        lineNumber: 525,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 513,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 504,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 503,
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
                      lineNumber: 540,
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
                          lineNumber: 553,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 534,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 533,
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
                    lineNumber: 561,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 560,
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
                    lineNumber: 572,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 571,
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
                    lineNumber: 583,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 582,
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
                    lineNumber: 594,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 593,
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
                    lineNumber: 607,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 605,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 502,
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
              lineNumber: 627,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 480,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 479,
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
          lineNumber: 653,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 644,
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
          lineNumber: 672,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 666,
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
          lineNumber: 679,
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
            lineNumber: 681,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 695,
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
            lineNumber: 697,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 709,
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
            lineNumber: 725,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 738,
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
            lineNumber: 740,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 665,
    columnNumber: 5
  }, undefined);
};

_s(ExamsList, "OhNQN5URakuEs6eBZUAMshOZ+kA=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsInByb2dyYW1zIiwic2V0UHJvZ3JhbXMiLCJ1c2VTdGF0ZSIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJlZHVZZWFycyIsInNldEVkdVllYXJzIiwiZWR1WWVhciIsInNldEVkdVllYXIiLCJleGFtc1R5cGVzIiwic2V0RXhhbXNUeXBlIiwiZXhhbVR5cGUiLCJzZXRFeGFtVHlwZSIsInVzZUVmZmVjdCIsIlBsYW5TZXJ2aWNlIiwiR2V0QWxsIiwidGhlbiIsIkVkdVllYXJTZXJ2aWNlIiwiR2V0WWVhcnMiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNoYW5nZVByb2dyYW0iLCJ2YWwiLCJjaGFuZ2VFZHVZZWFyIiwic2V0TG9hZENvdXJzZXMiLCJFeGFtU2VydmljZSIsIkdldEFsbENvdXJzZXMiLCJ0b1N0cmluZyIsInJlc3AiLCJsb2ciLCJhZGRJbnB1dEZpZWxkIiwiaW5wdXRGaWVsZHMiLCJsZW5ndGgiLCJoYWxscyIsInRvYXN0Iiwic2V0SW5wdXRGaWVsZHMiLCJoYWxsIiwiZGF0ZSIsImdldEZ1bGxEYXRlIiwic2VsZWN0ZWREYXRlIiwiZnJvbSIsImdldEZ1bGxUaW1lIiwic3RhcnRUaW1lIiwidG8iLCJlbmRUaW1lIiwicGxhbklkIiwibnVtX3N0dWRzIiwicmVtb3ZlSW5wdXRGaWVsZHMiLCJpbmRleCIsInJvd3MiLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2UiLCJldm50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwibGlzdCIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwic2xpY2UiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJjbGVhciIsInNldFNlbGVjdGVkTmV3U3RkcyIsInNldFNlbGVjdGVkT2xkU3RkcyIsInNldFNlbGVjdGVkUGxhbnMiLCJzZXRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJzZXRMb2FkRXhhbXNUeXBlIiwiX2NvdXJzZSIsImZpbmQiLCJlIiwiZWR1X2NvdXJzZV9pZCIsImV2YWx1YXRpb25fbWV0aG9kcyIsImNoYW5nZUV4YW1UeXBlIiwiR2V0QWxsUGxhbnMiLCJzZWxlY3RlZFBsYW5EYXRhIiwic2VsZWN0ZWRQbGFucyIsInNlbGVjdGVkTmV3U3RkcyIsInNlbGVjdGVkT2xkU3RkcyIsInNldFNlbGVjdGVkRGF0ZSIsIkRhdGUiLCJzZXRTdGFydFRpbWUiLCJzZXRFbmRUaW1lIiwiZ2V0RGF5IiwiX2hhbGxzIiwiaWQiLCJzZWxlY3RlZCIsInNldEhhbGxzIiwiaGFuZGxlRGF0ZUNoYW5nZSIsIl9pbnB0RmlsZHMiLCJtYXAiLCJkZCIsImhhbmRsZVN0YXJ0VGltZSIsImhhbmRsZUVuZFRpbWUiLCJzdGFydEhvdXIiLCJnZXRIb3VycyIsInN0YXJ0TWludXRlIiwiZ2V0TWludXRlcyIsImVuZEhvdXIiLCJlbmRNaW51dGUiLCJzZWxlY3RlZFBsYW4iLCJzZXRTZWxlY3RlZFBsYW4iLCJzZWxlY3RQbGFuIiwidmFsQXNOdW0iLCJwYXJzZUludCIsIl9hcnIiLCJpbmNsdWRlcyIsImZpbmRJbmRleCIsInNlbCIsInBsYW5zIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5Iiwib3B0aW9uIiwic3VibWl0QnRuIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNsb3NlQnRuIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJ0eXBvZ3JhcGh5IiwibG9hZENvdXJzZXMiLCJsb2FkRXhhbXNUeXBlIiwiYXV0aCIsImxheW91dCIsIkFkbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxTQUFvQyxHQUFHLENBQUMsRUFBRCxLQUFRO0FBQUE7O0FBQ25ELFFBQU07QUFBRUM7QUFBRixNQUFnQkMsMkZBQWMsRUFBcEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUNDLHFHQUFELENBQTVCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHSCxTQUFTLEVBQXpCO0FBRUEsUUFBTUksS0FBSyxHQUFHQywrREFBVSxDQUFDQyxtQkFBWCxFQUFkLENBTG1ELENBTW5EOztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FSbUQsQ0FV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O0FBQWEsbUJBQVMsTUFBdEI7QUFBdUIsaUJBQU8sRUFBQyxRQUEvQjtBQUF3QyxjQUFJLEVBQUMsT0FBN0M7QUFBcUQsY0FBSSxFQUFDLE9BQTFEO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFDRSxzQkFBVSxFQUFFZ0YsYUFEZDtBQUVFLHdCQUFZLEVBQUVwSixRQUZoQjtBQUdFLHVCQUFXLEVBQUUsZ0JBSGY7QUFJRSx3QkFBWSxFQUFFLElBSmhCO0FBS0UsbUJBQU8sRUFBRUYsVUFMWDtBQU1FLG9CQUFRLEVBQUdxRSxDQUFELElBQU9HLGNBQWMsQ0FBQ0gsQ0FBQyxDQUFDZSxFQUFILENBTmpDO0FBT0UsMEJBQWMsRUFBR3dELE1BQUQsSUFBWUEsTUFBTSxDQUFDN0YsSUFQckM7QUFRRSwwQkFBYyxFQUFHNkYsTUFBRCxJQUFZQSxNQUFNLENBQUN4RDtBQVJyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixFQXdGR3dDLFdBQVcsQ0FBQ2hCLEtBQUQsQ0F4RmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0RkQsQ0E3c0JEOztHQUFNbkksUztVQUNrQkUsbUY7OztLQURsQkYsUztBQStzQkxBLFNBQUQsQ0FBbUI4SyxJQUFuQixHQUEwQixJQUExQjtBQUNDOUssU0FBRCxDQUFtQitLLE1BQW5CLEdBQTRCQyx3REFBNUI7QUFDZWhMLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0dWRlbnRzX2FmZmFpcnMvYWRtaW4vZXhhbXMvZXhhbXMtbGlzdC5hM2IxZTk5ODhmMGYxZjY5ZWU5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBBZGQsIEFycm93QmFjaywgQmFja3NwYWNlLCBab29tSW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEdyaWQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBtYWtlU3R5bGVzLFxyXG4gIElucHV0LFxyXG4gIFRleHRGaWVsZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dyaWQvR3JpZEl0ZW1cIjtcclxuaW1wb3J0IFBsYW5TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9QbGFuU2VydmljZVwiO1xyXG5pbXBvcnQgQ291cnNlU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvQ291cnNlU2VydmljZVwiO1xyXG5pbXBvcnQgRWR1WWVhclNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0VkdVllYXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBFeGFtU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRXhhbVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vVXRpbGl0eS9UcmFuc2xhdGlvbnMvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL3ZpZXdzL2Rhc2hib2FyZFN0eWxlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG4gIFRpbWVQaWNrZXIsXHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSBcIkBkYXRlLWlvL2RhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGFyU0EgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcIi4vZXhhbXMtbGlzdC1zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3VpQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1N1aUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJTZWxlY3QgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IERhdGVIZWxwZXIgfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9IZWxwZXJzL0RhdGVIZWxwZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRXhhbXNMaXN0UHJvcHMge31cclxuY29uc3QgRXhhbXNMaXN0OiBSZWFjdC5GQzxJRXhhbXNMaXN0UHJvcHM+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgeyB0cmFuc2xhdGUgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGltZXMgPSBEYXRlSGVscGVyLmdldFF1YXJ0ZXJIb3VyVGltZXMoKTtcclxuICAvLyBQcm9ncmFtc1xyXG4gIGNvbnN0IFtwcm9ncmFtcywgc2V0UHJvZ3JhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9ncmFtLCBzZXRQcm9ncmFtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBDb3Vyc2VzXHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3Vyc2UsIHNldENvdXJzZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRWR1IFllYXJcclxuICBjb25zdCBbZWR1WWVhcnMsIHNldEVkdVllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWR1WWVhciwgc2V0RWR1WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRXhhbSBUeXBlXHJcbiAgY29uc3QgW2V4YW1zVHlwZXMsIHNldEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4YW1UeXBlLCBzZXRFeGFtVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFBsYW5TZXJ2aWNlLkdldEFsbCgpXHJcbiAgICAgIC50aGVuKChwcm9ncmFtcykgPT4ge1xyXG4gICAgICAgIEVkdVllYXJTZXJ2aWNlLkdldFllYXJzKFwiXCIpXHJcbiAgICAgICAgICAudGhlbigoZWR1WWVhcnMpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3JhbXMocHJvZ3JhbXMucmVzdWx0KTtcclxuICAgICAgICAgICAgc2V0RWR1WWVhcnMoZWR1WWVhcnMucmVzdWx0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JcIiwgZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVByb2dyYW0gPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldFByb2dyYW0odmFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VFZHVZZWFyID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRFZHVZZWFyKHZhbCk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyh0cnVlKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbENvdXJzZXMocHJvZ3JhbSwgdmFsLnRvU3RyaW5nKCkpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5yZXN1bHQpO1xyXG4gICAgICAgIHNldENvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIEdldCBFeGFtc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xyXG5cclxuICBjb25zdCBhZGRJbnB1dEZpZWxkID0gKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0RmllbGRzLmxlbmd0aCA+PSBoYWxscy5sZW5ndGgpXHJcbiAgICAgIHRvYXN0LmVycm9yKFwi2YTYp9mK2YXZg9mG2YMg2KfZhNil2LbYp9mB2KkhINmE2KfZitmI2KzYryDYs9mI2Ykg2YLYp9i52KrZitmGXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICBzZXRJbnB1dEZpZWxkcyhbXHJcbiAgICAgICAgLi4uaW5wdXRGaWVsZHMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGFsbDogMCxcclxuICAgICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgICAgcGxhbklkOiAwLFxyXG4gICAgICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlSW5wdXRGaWVsZHMgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHJvd3MgPSBbLi4uaW5wdXRGaWVsZHNdO1xyXG4gICAgcm93cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMocm93cyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5kZXgsIGV2bnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2bnQudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICBsaXN0W2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMobGlzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICB9O1xyXG4gIC8vXHJcbiAgY29uc3QgZ2V0RnVsbERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IGRheSA9IGRhdGU/LmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IGRhdGU/LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlPy5nZXRGdWxsWWVhcigpO1xyXG4gICAgLy8gVGhpcyBhcnJhbmdlbWVudCBjYW4gYmUgYWx0ZXJlZCBiYXNlZCBvbiBob3cgd2Ugd2FudCB0aGUgZGF0ZSdzIGZvcm1hdCB0byBhcHBlYXIuXHJcbiAgICByZXR1cm4gYCR7KFwiMFwiICsgZGF5KS5zbGljZSgtMil9LSR7KFwiMFwiICsgbW9udGgpLnNsaWNlKC0yKX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuICAvL1xyXG4gIGNvbnN0IGdldEZ1bGxUaW1lID0gKGRhdGUpID0+IHtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gIH07XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5zKFtdKTtcclxuICAgIHNldFBsYW5zKFtdKTtcclxuICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoW10pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGFsbDogMCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlQ291cnNlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgc2V0Q291cnNlKHZhbCk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKHRydWUpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PT0gdmFsKTtcclxuICAgIHNldEV4YW1zVHlwZShfY291cnNlLmV2YWx1YXRpb25fbWV0aG9kcyk7XHJcbiAgICBzZXRMb2FkRXhhbXNUeXBlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUV4YW1UeXBlID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgbGV0IF9jb3Vyc2UgPSBjb3Vyc2VzLmZpbmQoKGUpID0+IGUuZWR1X2NvdXJzZV9pZCA9PSBjb3Vyc2UpO1xyXG4gICAgc2V0RXhhbVR5cGUodmFsKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbFBsYW5zKFxyXG4gICAgICBwcm9ncmFtLFxyXG4gICAgICBlZHVZZWFyLFxyXG4gICAgICBfY291cnNlLmVkdV9jb3Vyc2VfaWQsXHJcbiAgICAgIHZhbC50b1N0cmluZygpXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiBzZXRQbGFucyhyZXNwLnJlc3VsdCkpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICB9O1xyXG4gIC8vIEhhbGxzXHJcbiAgLy8gY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gaGFuZGxlIGFkZCBjb3Vyc3NlIHRvIHByb2dyYW1cclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbkRhdGEsIHNldFNlbGVjdGVkUGxhbkRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5zLCBzZXRTZWxlY3RlZFBsYW5zXSA9IHVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTmV3U3Rkcywgc2V0U2VsZWN0ZWROZXdTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9sZFN0ZHMsIHNldFNlbGVjdGVkT2xkU3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3N0YXJ0VGltZSwgc2V0U3RhcnRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtlbmRUaW1lLCBzZXRFbmRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwic2VsZWN0ZWREYXRlXCIsIHNlbGVjdGVkRGF0ZS5nZXREYXkoKSk7XHJcbiAgLy8gRHluYW1pYyBIYWxsc1xyXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBoYWxsOiAwLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIHBsYW5JZDogMCxcclxuICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgfSxcclxuICBdKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dEZpZWxkcyk7XHJcbiAgY29uc3QgX2hhbGxzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCLZgjFcIixcclxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwi2YIyXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKF9oYWxscyk7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZERhdGUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3RhcnRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldFN0YXJ0VGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKGUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFbmRUaW1lID0gKGUpID0+IHtcclxuICAgIHNldEVuZFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgICBjb25zdCBzdGFydEhvdXIgPSBzdGFydFRpbWUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IHN0YXJ0TWludXRlID0gc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IGVuZEhvdXIgPSBlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBlbmRNaW51dGUgPSBlLmdldE1pbnV0ZXMoKTtcclxuICAgIGlmIChlIDwgc3RhcnRUaW1lKSB0b2FzdC5lcnJvcihcItmI2YLYqiDYp9mE2KfZhtiq2YfYp9ihINmK2KzYqCDYo9mGINmK2YPZiNmGINio2LnYryDZiNmC2Kog2KfZhNio2K/YoVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBnZXQgc2VsZWN0ZWQgcGxhbiBleGFtc1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW4sIHNldFNlbGVjdGVkUGxhbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBTZWxlY3QgUGxhblxyXG4gIGNvbnN0IHNlbGVjdFBsYW4gPSAoaWQpID0+IHtcclxuICAgIGxldCB2YWxBc051bSA9IHBhcnNlSW50KGlkKTtcclxuICAgIC8vIHNldFNlbGVjdGVkUGxhbih2YWxBc051bSk7XHJcbiAgICBsZXQgX2FyciA9IHNlbGVjdGVkUGxhbnMuc2xpY2UoKTtcclxuICAgIGlmIChfYXJyLmluY2x1ZGVzKHZhbEFzTnVtKSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBfYXJyLmZpbmRJbmRleCgoZSkgPT4gZSA9PSB2YWxBc051bSk7XHJcbiAgICAgIF9hcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGlmIChzZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFNlbGVjdGVkTmV3U3RkcygwKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9hcnIucHVzaCh2YWxBc051bSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEubmV3X3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNlbGVjdGVkTmV3U3RkcyhzdW1OZXcpO1xyXG4gICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRFeGFtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGF5TG9hZCA9IHtcclxuICAgICAgcGxhbl9pZHM6IFsuLi5zZWxlY3RlZFBsYW5zXSxcclxuICAgICAgdHlwZTogYCR7ZXhhbXNUeXBlcy5maWx0ZXIoKGUpID0+IGUuaWQgPT0gZXhhbVR5cGUpWzBdLm5hbWV9YCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBoYWxsczogaW5wdXRGaWVsZHMubWFwKChkZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogZGQuaGFsbCxcclxuICAgICAgICAgIHBsYW5faWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICAgIHN0dWRlbnRzX251bTogcGFyc2VJbnQoYCR7ZGQubnVtX3N0dWRzfWApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHBheUxvYWQpO1xyXG4gICAgLy8gUGxhblNlcnZpY2UuQWRkQ291cnNlKHBheUxvYWQpXHJcbiAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgIHRvYXN0LnN1Y2Nlc3ModHJhbnNsYXRlKFwiQ291cnNlIEFkZGVkIFRvIFBsYW4gU3VjY2Vzc2Z1bGx5XCIpKTtcclxuICAgIC8vICAgICAgIFBsYW5TZXJ2aWNlLkdldFByb2dyYW1Db3Vyc2VzKHByb2dyYW0sIHNwZWNZZWFyLCB5ZWFyKVxyXG4gICAgLy8gICAgICAgICAudGhlbigocmVzcCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldFByb2dyYW1Db3Vyc2VzKHJlc3AucmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAvLyAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUGxhbnMgPSAocGxhbnMpID0+IHtcclxuICAgIGlmIChwbGFucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIGxvY2FsZT17YXJTQX0gdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxZW1cIixcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBoZWlnaHQ6IFwiN2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2LPZhtipPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNin2K7Yqti12KfYtTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTZgdi12YQ8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luQm90dG9tOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2LnYr9ivINin2YTYt9mE2KfYqHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpblRvcDogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINmF2LPYqtis2K8gfCDZhdi52YrYr3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgICAgICAgIHtwbGFucy5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LnNwZWNpYWxpdHk/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5zZW1lc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlLm5ld19zdHVkZW50c19udW19IHwge2Uub2xkX3N0dWRlbnRzX251bX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFBsYW5zLmluY2x1ZGVzKGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHApID0+IHNlbGVjdFBsYW4ocC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9Ptin2YTYqtin2LHZitiuPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVEYXRlQ2hhbmdlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgLy8gaW5wdXRWYXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIzZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxZW1cIiB9fSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4g2KfZhNmI2YLYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNmC2KpcIn1cclxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3RhcnRUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8VGltZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzaG93VG9kYXlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdG9kYXlMYWJlbD1cIm5vd1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi2KXZhNmJXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VuZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgIG1pbnV0ZXNTdGVwPXs1fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kVGltZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19Ptin2YTZhdis2YXZiNi5INin2YTZg9mE2Yo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYs9iq2KzYrzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdi52YrYrzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntgJHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE5ld1N0ZHMgKyBzZWxlY3RlZE9sZFN0ZHNcclxuICAgICAgICAgICAgICAgICAgfWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE5ld1N0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE9sZFN0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCA1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdEJ0bn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkSW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg2KrYrti12YrYtSDZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGxhbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGxzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoYWxsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFsbC5zZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aGFsbC5pZH0gdmFsdWU9e2hhbGwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiz2YbYqSDZiNin2YTYp9iu2KrYtdin2LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBsYW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhbklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGFuRGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2RhdGEueWVhcj8uYXJfbmFtZX0gLSAke2RhdGEueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItin2YTYqtin2LHZitiuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5mcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2YXZhlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYpdmE2YlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1fc3R1ZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5udW1fc3R1ZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYudiv2K8g2KfZhNi32YTZkdin2KhcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lucHV0RmllbGRzLmxlbmd0aCAhPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlSW5wdXRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDxTdWlCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEV4YW19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiKDIzLCAxOTMsIDIzMilcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgICAgICA8L1N1aUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMGVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtg2YTYp9iq2YjYrNivINio2YrYp9mG2KfYqiDZhNi52LHYttmH2KdgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgIDxHcmlkSXRlbVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIi0xZW0gMCAxZW0gMFwiIH19XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYqNix2YbYp9mF2Kw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2dyYW19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYqNix2YbYp9mF2KxcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZ3JhbXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9ncmFtKGUuaWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNiz2YbYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWR1WWVhcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNiz2YbYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtlZHVZZWFyc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUVkdVllYXIoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNmF2YLYsdmR2LE8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgey8qIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJjb3Vyc2VzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y291cnNlLmlkfSB2YWx1ZT17Y291cnNlLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2NvdXJzZS5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YXZgtix2ZHYsVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtjb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUuZWR1X2NvdXJzZV9pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uZWR1X2NvdXJzZV9pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7ZhtmI2Lkg2KfZhNmI2KfZgti52Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkRXhhbXNUeXBlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZXhhbVR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNin2YLYudipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2V4YW1zVHlwZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFeGFtVHlwZShlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7cmVuZGVyUGxhbnMocGxhbnMpfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4oRXhhbXNMaXN0IGFzIGFueSkuYXV0aCA9IHRydWU7XHJcbihFeGFtc0xpc3QgYXMgYW55KS5sYXlvdXQgPSBBZG1pbjtcclxuZXhwb3J0IGRlZmF1bHQgRXhhbXNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9