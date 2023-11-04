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
        from: e.value,
        to: endTime.value,
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
        from: startTime.value,
        to: e.value,
        planId: dd.planId,
        num_studs: dd.num_studs
      };
    });

    setInputFields(_inptFilds);
    let st = new Date(2023, 1, 1, parseInt(startTime.value.split(":")[0]), parseInt(startTime.value.split(":")[1]));
    let en = new Date(2023, 1, 1, parseInt(e.value.split(":")[0]), parseInt(e.value.split(":")[1]));
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
                lineNumber: 375,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
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
                lineNumber: 378,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
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
                lineNumber: 381,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
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
                lineNumber: 384,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                style: {
                  fontWeight: "bold",
                  marginTop: "0"
                },
                children: ["\u0645\u0633\u062A\u062C\u062F | \u0645\u0639\u064A\u062F", " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
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
                    value: (_e$year2 = e.year) === null || _e$year2 === void 0 ? void 0 : (_e$year2$speciality = _e$year2.speciality) === null || _e$year2$speciality === void 0 ? void 0 : _e$year2$speciality.ar_name
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
                  md: 2,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                    variant: "outlined",
                    size: "small",
                    disabled: true,
                    value: e.semester
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 412,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 411,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  md: 1,
                  children: [e.new_students_num, " | ", e.old_students_num]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 419,
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
                    lineNumber: 423,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 422,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1,
              children: "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
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
                lineNumber: 436,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            container: true,
            md: 12,
            style: {
              marginTop: "3em",
              height: "10em"
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
                lineNumber: 452,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                id: "demo-simple-select-label",
                children: "\u0645\u0646"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 455,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
                lineNumber: 456,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
                id: "demo-simple-select-label",
                children: "\u0625\u0644\u0649"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
                style: {
                  zIndex: 999
                },
                defaultValue: endTime,
                placeholder: "اختيار الوقت",
                isSearchable: true,
                options: times,
                onChange: e => {
                  handleEndTime(e);
                },
                getOptionLabel: option => option.label,
                getOptionValue: option => option.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
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
                  lineNumber: 487,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 488,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 489,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 486,
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
                  lineNumber: 492,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 495,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 496,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 491,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
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
                lineNumber: 511,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 510,
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
                      lineNumber: 532,
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
                        lineNumber: 547,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 535,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 526,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 525,
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
                      lineNumber: 562,
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
                          lineNumber: 575,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 565,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 556,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 555,
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
                    disabled: true,
                    variant: "outlined",
                    size: "small",
                    type: "text",
                    value: data.from,
                    label: translate("من"),
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
                    lineNumber: 605,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 604,
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
                    lineNumber: 616,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 615,
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
                    lineNumber: 629,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 627,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 524,
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
              lineNumber: 649,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 364,
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
          lineNumber: 675,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 666,
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
          lineNumber: 694,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 688,
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
          lineNumber: 701,
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
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 717,
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
            lineNumber: 719,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 731,
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
            lineNumber: 747,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 760,
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
            lineNumber: 762,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 687,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwidGltZXMiLCJEYXRlSGVscGVyIiwiZ2V0UXVhcnRlckhvdXJUaW1lcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9ncmFtcyIsInNldFByb2dyYW1zIiwidXNlU3RhdGUiLCJwcm9ncmFtIiwic2V0UHJvZ3JhbSIsImNvdXJzZXMiLCJzZXRDb3Vyc2VzIiwiY291cnNlIiwic2V0Q291cnNlIiwiZWR1WWVhcnMiLCJzZXRFZHVZZWFycyIsImVkdVllYXIiLCJzZXRFZHVZZWFyIiwiZXhhbXNUeXBlcyIsInNldEV4YW1zVHlwZSIsImV4YW1UeXBlIiwic2V0RXhhbVR5cGUiLCJsb2FkQ291cnNlcyIsInNldExvYWRDb3Vyc2VzIiwibG9hZEV4YW1zVHlwZSIsInNldExvYWRFeGFtc1R5cGUiLCJwbGFucyIsInNldFBsYW5zIiwidXNlRWZmZWN0IiwiUGxhblNlcnZpY2UiLCJHZXRBbGwiLCJ0aGVuIiwiRWR1WWVhclNlcnZpY2UiLCJHZXRZZWFycyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjaGFuZ2VQcm9ncmFtIiwidmFsIiwiY2hhbmdlRWR1WWVhciIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImFkZElucHV0RmllbGQiLCJpbnB1dEZpZWxkcyIsImxlbmd0aCIsImhhbGxzIiwidG9hc3QiLCJzZXRJbnB1dEZpZWxkcyIsImhhbGwiLCJkYXRlIiwiZ2V0RnVsbERhdGUiLCJzZWxlY3RlZERhdGUiLCJmcm9tIiwiZ2V0RnVsbFRpbWUiLCJzdGFydFRpbWUiLCJ0byIsImVuZFRpbWUiLCJwbGFuSWQiLCJudW1fc3R1ZHMiLCJyZW1vdmVJbnB1dEZpZWxkcyIsImluZGV4Iiwicm93cyIsInNwbGljZSIsImhhbmRsZUNoYW5nZSIsImV2bnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJsaXN0IiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsImNsZWFyIiwic2V0U2VsZWN0ZWROZXdTdGRzIiwic2V0U2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWRQbGFucyIsInNldFNlbGVjdGVkUGxhbkRhdGEiLCJjaGFuZ2VDb3Vyc2UiLCJfY291cnNlIiwiZmluZCIsImUiLCJlZHVfY291cnNlX2lkIiwiZXZhbHVhdGlvbl9tZXRob2RzIiwiY2hhbmdlRXhhbVR5cGUiLCJHZXRBbGxQbGFucyIsInNlbGVjdGVkUGxhbkRhdGEiLCJzZWxlY3RlZFBsYW5zIiwic2VsZWN0ZWROZXdTdGRzIiwic2VsZWN0ZWRPbGRTdGRzIiwic2V0U2VsZWN0ZWREYXRlIiwiRGF0ZSIsInNldFN0YXJ0VGltZSIsImdldFRpbWVPZkRheSIsInNldEVuZFRpbWUiLCJfaGFsbHMiLCJpZCIsInNlbGVjdGVkIiwic2V0SGFsbHMiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiX2lucHRGaWxkcyIsIm1hcCIsImRkIiwiaGFuZGxlU3RhcnRUaW1lIiwiaGFuZGxlRW5kVGltZSIsInN0IiwicGFyc2VJbnQiLCJzcGxpdCIsImVuIiwic2VsZWN0ZWRQbGFuIiwic2V0U2VsZWN0ZWRQbGFuIiwic2VsZWN0UGxhbiIsInZhbEFzTnVtIiwiX2FyciIsImluY2x1ZGVzIiwiZmluZEluZGV4Iiwic2VsIiwic3VtT2xkIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJvbGRfc3R1ZGVudHNfbnVtIiwic3VtTmV3IiwibmV3X3N0dWRlbnRzX251bSIsInB1c2giLCJoYW5kbGVBZGRFeGFtIiwicGF5TG9hZCIsInBsYW5faWRzIiwidHlwZSIsImZpbHRlciIsInBsYW5faWQiLCJzdHVkZW50c19udW0iLCJyZW5kZXJQbGFucyIsImFyU0EiLCJEYXRlRm5zVXRpbHMiLCJtYXJnaW4iLCJ3aWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiYXJfbmFtZSIsInNwZWNpYWxpdHkiLCJzZW1lc3RlciIsInAiLCJkaXNwbGF5IiwiekluZGV4Iiwib3B0aW9uIiwibGFiZWwiLCJzdWJtaXRCdG4iLCJkYXRhIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2xvc2VCdG4iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInR5cG9ncmFwaHkiLCJhdXRoIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1BLFNBQW9DLEdBQUcsQ0FBQyxFQUFELEtBQVE7QUFBQTs7QUFDbkQsUUFBTTtBQUFFQztBQUFGLE1BQWdCQywyRkFBYyxFQUFwQztBQUNBLFFBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MscUdBQUQsQ0FBNUI7QUFDQSxRQUFNQyxPQUFPLEdBQUdILFNBQVMsRUFBekI7QUFFQSxRQUFNSSxLQUFLLEdBQUdDLCtEQUFVLENBQUNDLG1CQUFYLEVBQWQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVosRUFObUQsQ0FPbkQ7O0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QyxDQVRtRCxDQVduRDs7QUFDQSxRQUFNO0FBQUEs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b0JBQVEsRUFBR3FFLENBQUQsSUFBT0csY0FBYyxDQUFDSCxDQUFDLENBQUNlLEVBQUgsQ0FOakM7QUFPRSwwQkFBYyxFQUFHcUQsTUFBRCxJQUFZQSxNQUFNLENBQUN2RixJQVByQztBQVFFLDBCQUFjLEVBQUd1RixNQUFELElBQVlBLE1BQU0sQ0FBQ3JEO0FBUnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBd0ZHb0MsV0FBVyxDQUFDaEgsS0FBRCxDQXhGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRGRCxDQW51QkQ7O0dBQU1qQyxTO1VBQ2tCRSxtRjs7O0tBRGxCRixTO0FBcXVCTEEsU0FBRCxDQUFtQjRLLElBQW5CLEdBQTBCLElBQTFCO0FBQ0M1SyxTQUFELENBQW1CNkssTUFBbkIsR0FBNEJDLHdEQUE1QjtBQUNlOUssd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LjE1ZmFjZWMxZjI5OTI3NTMzY2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSBcImxheW91dHMvQWRtaW4uanNcIjtcclxuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dCYWNrLCBCYWNrc3BhY2UsIFpvb21JbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgR3JpZCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbVwiO1xyXG5pbXBvcnQgUGxhblNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL1BsYW5TZXJ2aWNlXCI7XHJcbmltcG9ydCBDb3Vyc2VTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9Db3Vyc2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBFZHVZZWFyU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvRWR1WWVhclNlcnZpY2VcIjtcclxuaW1wb3J0IEV4YW1TZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FeGFtU2VydmljZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9VdGlsaXR5L1RyYW5zbGF0aW9ucy91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvdmlld3MvZGFzaGJvYXJkU3R5bGUuanNcIjtcclxuaW1wb3J0IHtcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbiAgVGltZVBpY2tlcixcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tIFwiQGRhdGUtaW8vZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgYXJTQSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwiLi9leGFtcy1saXN0LXN0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdWlCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3VpQnV0dG9uXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUlNlbGVjdCB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgRGF0ZUhlbHBlciB9IGZyb20gXCIuLy4uLy4uLy4uLy4uL0hlbHBlcnMvRGF0ZUhlbHBlclwiO1xyXG5cclxuaW50ZXJmYWNlIElFeGFtc0xpc3RQcm9wcyB7fVxyXG5jb25zdCBFeGFtc0xpc3Q6IFJlYWN0LkZDPElFeGFtc0xpc3RQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aW1lcyA9IERhdGVIZWxwZXIuZ2V0UXVhcnRlckhvdXJUaW1lcygpO1xyXG4gIGNvbnNvbGUubG9nKHRpbWVzKTtcclxuICAvLyBQcm9ncmFtc1xyXG4gIGNvbnN0IFtwcm9ncmFtcywgc2V0UHJvZ3JhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9ncmFtLCBzZXRQcm9ncmFtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBDb3Vyc2VzXHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3Vyc2UsIHNldENvdXJzZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRWR1IFllYXJcclxuICBjb25zdCBbZWR1WWVhcnMsIHNldEVkdVllYXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWR1WWVhciwgc2V0RWR1WWVhcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gRXhhbSBUeXBlXHJcbiAgY29uc3QgW2V4YW1zVHlwZXMsIHNldEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2V4YW1UeXBlLCBzZXRFeGFtVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2xvYWRDb3Vyc2VzLCBzZXRMb2FkQ291cnNlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRFeGFtc1R5cGUsIHNldExvYWRFeGFtc1R5cGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcGxhbnMsIHNldFBsYW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFBsYW5TZXJ2aWNlLkdldEFsbCgpXHJcbiAgICAgIC50aGVuKChwcm9ncmFtcykgPT4ge1xyXG4gICAgICAgIEVkdVllYXJTZXJ2aWNlLkdldFllYXJzKFwiXCIpXHJcbiAgICAgICAgICAudGhlbigoZWR1WWVhcnMpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3JhbXMocHJvZ3JhbXMucmVzdWx0KTtcclxuICAgICAgICAgICAgc2V0RWR1WWVhcnMoZWR1WWVhcnMucmVzdWx0KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3JcIiwgZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVByb2dyYW0gPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldFByb2dyYW0odmFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VFZHVZZWFyID0gKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRFZHVZZWFyKHZhbCk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyh0cnVlKTtcclxuICAgIEV4YW1TZXJ2aWNlLkdldEFsbENvdXJzZXMocHJvZ3JhbSwgdmFsLnRvU3RyaW5nKCkpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5yZXN1bHQpO1xyXG4gICAgICAgIHNldENvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgICBzZXRMb2FkQ291cnNlcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0IEV4YW1zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFkZElucHV0RmllbGQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRGaWVsZHMubGVuZ3RoID49IGhhbGxzLmxlbmd0aClcclxuICAgICAgdG9hc3QuZXJyb3IoXCLZhNin2YrZhdmD2YbZgyDYp9mE2KXYttin2YHYqSEg2YTYp9mK2YjYrNivINiz2YjZiSDZgtin2LnYqtmK2YZcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAgICAuLi5pbnB1dEZpZWxkcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoYWxsOiAwLFxyXG4gICAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVJbnB1dEZpZWxkcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgcm93cyA9IFsuLi5pbnB1dEZpZWxkc107XHJcbiAgICByb3dzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhyb3dzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleCwgZXZudCkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZudC50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIGxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhsaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZGF5ID0gZGF0ZT8uZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZT8uZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IGRhdGU/LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyBUaGlzIGFycmFuZ2VtZW50IGNhbiBiZSBhbHRlcmVkIGJhc2VkIG9uIGhvdyB3ZSB3YW50IHRoZSBkYXRlJ3MgZm9ybWF0IHRvIGFwcGVhci5cclxuICAgIHJldHVybiBgJHsoXCIwXCIgKyBkYXkpLnNsaWNlKC0yKX0tJHsoXCIwXCIgKyBtb250aCkuc2xpY2UoLTIpfS0ke3llYXJ9YDtcclxuICB9O1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFucyhbXSk7XHJcbiAgICBzZXRQbGFucyhbXSk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKFtdKTtcclxuICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBzdGFydFRpbWUsXHJcbiAgICAgICAgdG86IGVuZFRpbWUsXHJcbiAgICAgICAgbnVtX3N0dWRzOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VDb3Vyc2UgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBzZXRDb3Vyc2UodmFsKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUodHJ1ZSk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09PSB2YWwpO1xyXG4gICAgc2V0RXhhbXNUeXBlKF9jb3Vyc2UuZXZhbHVhdGlvbl9tZXRob2RzKTtcclxuICAgIHNldExvYWRFeGFtc1R5cGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlRXhhbVR5cGUgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBsZXQgX2NvdXJzZSA9IGNvdXJzZXMuZmluZCgoZSkgPT4gZS5lZHVfY291cnNlX2lkID09IGNvdXJzZSk7XHJcbiAgICBzZXRFeGFtVHlwZSh2YWwpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsUGxhbnMoXHJcbiAgICAgIHByb2dyYW0sXHJcbiAgICAgIGVkdVllYXIsXHJcbiAgICAgIF9jb3Vyc2UuZWR1X2NvdXJzZV9pZCxcclxuICAgICAgdmFsLnRvU3RyaW5nKClcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHNldFBsYW5zKHJlc3AucmVzdWx0KSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xyXG4gIH07XHJcbiAgLy8gSGFsbHNcclxuICAvLyBjb25zdCBbaGFsbHMsIHNldEhhbGxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBoYW5kbGUgYWRkIGNvdXJzc2UgdG8gcHJvZ3JhbVxyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuRGF0YSwgc2V0U2VsZWN0ZWRQbGFuRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbnMsIHNldFNlbGVjdGVkUGxhbnNdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWROZXdTdGRzLCBzZXRTZWxlY3RlZE5ld1N0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT2xkU3Rkcywgc2V0U2VsZWN0ZWRPbGRTdGRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbc3RhcnRUaW1lLCBzZXRTdGFydFRpbWVdID0gdXNlU3RhdGUoRGF0ZUhlbHBlci5nZXRUaW1lT2ZEYXkoKSk7XHJcbiAgY29uc3QgW2VuZFRpbWUsIHNldEVuZFRpbWVdID0gdXNlU3RhdGUoRGF0ZUhlbHBlci5nZXRUaW1lT2ZEYXkoKSk7XHJcbiAgLy8gRHluYW1pYyBIYWxsc1xyXG4gIGNvbnN0IFtpbnB1dEZpZWxkcywgc2V0SW5wdXRGaWVsZHNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBoYWxsOiAwLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBzdGFydFRpbWUsXHJcbiAgICAgIHRvOiBlbmRUaW1lLFxyXG4gICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgIG51bV9zdHVkczogMCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRGaWVsZHMpO1xyXG4gIGNvbnN0IF9oYWxscyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwi2YIxXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcItmCMlwiLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShfaGFsbHMpO1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0VGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGFydFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBlLnZhbHVlLFxyXG4gICAgICAgIHRvOiBlbmRUaW1lLnZhbHVlLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUVuZFRpbWUgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW5kVGltZShlKTtcclxuICAgIGxldCBfaW5wdEZpbGRzID0gaW5wdXRGaWVsZHMuc2xpY2UoKS5tYXAoKGRkKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGFsbDogZGQuaGFsbCxcclxuICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgIGZyb206IHN0YXJ0VGltZS52YWx1ZSxcclxuICAgICAgICB0bzogZS52YWx1ZSxcclxuICAgICAgICBwbGFuSWQ6IGRkLnBsYW5JZCxcclxuICAgICAgICBudW1fc3R1ZHM6IGRkLm51bV9zdHVkcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGaWVsZHMoX2lucHRGaWxkcyk7XHJcbiAgICBsZXQgc3QgPSBuZXcgRGF0ZShcclxuICAgICAgMjAyMyxcclxuICAgICAgMSxcclxuICAgICAgMSxcclxuICAgICAgcGFyc2VJbnQoc3RhcnRUaW1lLnZhbHVlLnNwbGl0KFwiOlwiKVswXSksXHJcbiAgICAgIHBhcnNlSW50KHN0YXJ0VGltZS52YWx1ZS5zcGxpdChcIjpcIilbMV0pXHJcbiAgICApO1xyXG4gICAgbGV0IGVuID0gbmV3IERhdGUoXHJcbiAgICAgIDIwMjMsXHJcbiAgICAgIDEsXHJcbiAgICAgIDEsXHJcbiAgICAgIHBhcnNlSW50KGUudmFsdWUuc3BsaXQoXCI6XCIpWzBdKSxcclxuICAgICAgcGFyc2VJbnQoZS52YWx1ZS5zcGxpdChcIjpcIilbMV0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgaWYgKGUgPCBzdGFydFRpbWUpIHRvYXN0LmVycm9yKFwi2YjZgtiqINin2YTYp9mG2KrZh9in2KEg2YrYrNioINij2YYg2YrZg9mI2YYg2KjYudivINmI2YLYqiDYp9mE2KjYr9ihXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGdldCBzZWxlY3RlZCBwbGFuIGV4YW1zXHJcbiAgY29uc3QgW3NlbGVjdGVkUGxhbiwgc2V0U2VsZWN0ZWRQbGFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vIFNlbGVjdCBQbGFuXHJcbiAgY29uc3Qgc2VsZWN0UGxhbiA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHZhbEFzTnVtID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgLy8gc2V0U2VsZWN0ZWRQbGFuKHZhbEFzTnVtKTtcclxuICAgIGxldCBfYXJyID0gc2VsZWN0ZWRQbGFucy5zbGljZSgpO1xyXG4gICAgaWYgKF9hcnIuaW5jbHVkZXModmFsQXNOdW0pKSB7XHJcbiAgICAgIGxldCBpbmRleCA9IF9hcnIuZmluZEluZGV4KChlKSA9PiBlID09IHZhbEFzTnVtKTtcclxuICAgICAgX2Fyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5vbGRfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc3VtTmV3ID0gc2VsLnJlZHVjZShcclxuICAgICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgICAgIHNldFNlbGVjdGVkT2xkU3RkcygwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2Fyci5wdXNoKHZhbEFzTnVtKTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFucyhfYXJyKTtcclxuICAgICAgbGV0IHNlbCA9XHJcbiAgICAgICAgX2Fyci5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHBsYW5zLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChfYXJyLmluY2x1ZGVzKHBhcnNlSW50KGUuaWQpKSkgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKHNlbCk7XHJcbiAgICAgIGNvbnN0IHN1bU9sZCA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgIChwYXJ0aWFsU3VtLCBhKSA9PiBwYXJ0aWFsU3VtICsgYS5uZXdfc3R1ZGVudHNfbnVtLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgc2V0U2VsZWN0ZWROZXdTdGRzKHN1bU5ldyk7XHJcbiAgICAgIHNldFNlbGVjdGVkT2xkU3RkcyhzdW1PbGQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEV4YW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXlMb2FkID0ge1xyXG4gICAgICBwbGFuX2lkczogWy4uLnNlbGVjdGVkUGxhbnNdLFxyXG4gICAgICB0eXBlOiBgJHtleGFtc1R5cGVzLmZpbHRlcigoZSkgPT4gZS5pZCA9PSBleGFtVHlwZSlbMF0ubmFtZX1gLFxyXG4gICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgIGhhbGxzOiBpbnB1dEZpZWxkcy5tYXAoKGRkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBkZC5oYWxsLFxyXG4gICAgICAgICAgcGxhbl9pZDogZGQucGxhbklkLFxyXG4gICAgICAgICAgc3R1ZGVudHNfbnVtOiBwYXJzZUludChgJHtkZC5udW1fc3R1ZHN9YCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocGF5TG9hZCk7XHJcbiAgICAvLyBQbGFuU2VydmljZS5BZGRDb3Vyc2UocGF5TG9hZClcclxuICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgdG9hc3Quc3VjY2Vzcyh0cmFuc2xhdGUoXCJDb3Vyc2UgQWRkZWQgVG8gUGxhbiBTdWNjZXNzZnVsbHlcIikpO1xyXG4gICAgLy8gICAgICAgUGxhblNlcnZpY2UuR2V0UHJvZ3JhbUNvdXJzZXMocHJvZ3JhbSwgc3BlY1llYXIsIHllYXIpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0UHJvZ3JhbUNvdXJzZXMocmVzcC5yZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJQbGFucyA9IChwbGFucykgPT4ge1xyXG4gICAgaWYgKHBsYW5zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgbG9jYWxlPXthclNBfSB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjVweCAwcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMWVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IGhlaWdodDogXCI3ZW1cIiB9fT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYs9mG2Kk8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2KfYrtiq2LXYp9i1PC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNmB2LXZhDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Cb3R0b206IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDYudiv2K8g2KfZhNi32YTYp9ioe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgbWFyZ2luVG9wOiBcIjBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAg2YXYs9iq2KzYryB8INmF2LnZitive1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgICAgICAge3BsYW5zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2UueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnNlbWVzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2UubmV3X3N0dWRlbnRzX251bX0gfCB7ZS5vbGRfc3R1ZGVudHNfbnVtfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUGxhbnMuaW5jbHVkZXMoZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocCkgPT4gc2VsZWN0UGxhbihwLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+2KfZhNiq2KfYsdmK2K48L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZURhdGVDaGFuZ2UoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjNlbVwiLCBoZWlnaHQ6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxZW1cIiB9fSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4g2KfZhNmI2YLYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtmF2YY8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDk5OSB9fVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3N0YXJ0VGltZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNmC2KpcIn1cclxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3RhcnRUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtil2YTZiTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5IH19XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZW5kVGltZX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNmC2KpcIn1cclxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRW5kVGltZShlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezF9PjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19Ptin2YTZhdis2YXZiNi5INin2YTZg9mE2Yo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2YXYs9iq2KzYrzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdi52YrYrzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntgJHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE5ld1N0ZHMgKyBzZWxlY3RlZE9sZFN0ZHNcclxuICAgICAgICAgICAgICAgICAgfWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE5ld1N0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PntzZWxlY3RlZE9sZFN0ZHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCA1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdEJ0bn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkSW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg2KrYrti12YrYtSDZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGxhbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZgtin2LnYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuaGFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGxzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoYWxsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFsbC5zZWxlY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aGFsbC5pZH0gdmFsdWU9e2hhbGwuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhbGwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiz2YbYqSDZiNin2YTYp9iu2KrYtdin2LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBsYW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImhhbGxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhbklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQbGFuRGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2RhdGEueWVhcj8uYXJfbmFtZX0gLSAke2RhdGEueWVhcj8uc3BlY2lhbGl0eT8uYXJfbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItin2YTYqtin2LHZitiuXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5mcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2YXZhlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYpdmE2YlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1fc3R1ZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5udW1fc3R1ZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLYudiv2K8g2KfZhNi32YTZkdin2KhcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lucHV0RmllbGRzLmxlbmd0aCAhPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlSW5wdXRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDxTdWlCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEV4YW19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMmVtIDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiKDIzLCAxOTMsIDIzMilcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgICAgICA8L1N1aUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMGVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtg2YTYp9iq2YjYrNivINio2YrYp9mG2KfYqiDZhNi52LHYttmH2KdgfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICA8R3JpZENvbnRhaW5lciBtZD17MTJ9PlxyXG4gICAgICAgIDxHcmlkSXRlbVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIi0xZW0gMCAxZW0gMFwiIH19XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHlwb2dyYXBoeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAge2DYpdi22KfZgdipINmI2KfZgti52Kkg2KfZhdiq2K3Yp9mG2YrYqWB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW46IFwiMmVtIDBlbVwiIH19PlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtin2YTYqNix2YbYp9mF2Kw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb2dyYW19XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTYqNix2YbYp9mF2KxcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cHJvZ3JhbXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQcm9ncmFtKGUuaWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNiz2YbYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZWR1WWVhcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNiz2YbYqVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtlZHVZZWFyc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUVkdVllYXIoZS5pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNmF2YLYsdmR2LE8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgey8qIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJjb3Vyc2VzXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNvdXJzZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y291cnNlLmlkfSB2YWx1ZT17Y291cnNlLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2NvdXJzZS5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+ICovfVxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRDb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2YXZgtix2ZHYsVwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtjb3Vyc2VzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUuZWR1X2NvdXJzZV9pZCl9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXsob3B0aW9uKSA9PiBvcHRpb24uZWR1X2NvdXJzZV9pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7ZhtmI2Lkg2KfZhNmI2KfZgti52Kk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIHZhcmlhbnQ9XCJmaWxsZWRcIiBzaXplPVwic21hbGxcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPFJTZWxlY3RcclxuICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtsb2FkRXhhbXNUeXBlfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZXhhbVR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZiNin2YLYudipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2V4YW1zVHlwZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VFeGFtVHlwZShlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7cmVuZGVyUGxhbnMocGxhbnMpfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4oRXhhbXNMaXN0IGFzIGFueSkuYXV0aCA9IHRydWU7XHJcbihFeGFtc0xpc3QgYXMgYW55KS5sYXlvdXQgPSBBZG1pbjtcclxuZXhwb3J0IGRlZmF1bHQgRXhhbXNMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9