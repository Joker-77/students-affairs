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



var _jsxFileName = "F:\\StudentAffairs\\students\\students\\pages\\students_affairs\\admin\\exams\\exams-list.tsx",
    _s = $RefreshSig$();




















const ExamsList = ({}) => {
  _s();

  const {
    translate
  } = Object(_Utility_Translations_useTranslation__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])();
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_views_dashboardStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  const classes = useStyles(); // Programs

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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["TimePicker"], {
                clearable: true,
                label: "\u0645\u0646",
                value: startTime,
                onChange: handleStartTime
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
                lineNumber: 451,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
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
                  lineNumber: 463,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0633\u062A\u062C\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 464,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: "\u0645\u0639\u064A\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 462,
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
                  lineNumber: 468,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedNewStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    margin: "0"
                  },
                  children: selectedOldStds
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 472,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 461,
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
                lineNumber: 487,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 486,
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
                      lineNumber: 508,
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
                        lineNumber: 523,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 511,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 502,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 501,
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
                      lineNumber: 538,
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
                          lineNumber: 551,
                          columnNumber: 29
                        }, undefined);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 541,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 532,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 531,
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
                    lineNumber: 559,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 558,
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
                    lineNumber: 570,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 569,
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
                    lineNumber: 581,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 580,
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
                    lineNumber: 592,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 591,
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
                    lineNumber: 605,
                    columnNumber: 25
                  }, undefined) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 603,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 500,
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
              lineNumber: 625,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 477,
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
          lineNumber: 651,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 642,
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
          lineNumber: 670,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 664,
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
          lineNumber: 677,
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
            lineNumber: 679,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0633\u0646\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 693,
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
            lineNumber: 695,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 694,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 692,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0627\u0644\u0645\u0642\u0631\u0651\u0631"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 707,
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
            lineNumber: 723,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        md: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          id: "demo-simple-select-label",
          children: "\u0646\u0648\u0639 \u0627\u0644\u0648\u0627\u0642\u0639\u0629"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 736,
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
            lineNumber: 738,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 737,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 7
    }, undefined), renderPlans(plans)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 663,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHNfYWZmYWlycy9hZG1pbi9leGFtcy9leGFtcy1saXN0LnRzeCJdLCJuYW1lcyI6WyJFeGFtc0xpc3QiLCJ0cmFuc2xhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJjbGFzc2VzIiwicHJvZ3JhbXMiLCJzZXRQcm9ncmFtcyIsInVzZVN0YXRlIiwicHJvZ3JhbSIsInNldFByb2dyYW0iLCJjb3Vyc2VzIiwic2V0Q291cnNlcyIsImNvdXJzZSIsInNldENvdXJzZSIsImVkdVllYXJzIiwic2V0RWR1WWVhcnMiLCJlZHVZZWFyIiwic2V0RWR1WWVhciIsImV4YW1zVHlwZXMiLCJzZXRFeGFtc1R5cGUiLCJleGFtVHlwZSIsInNldEV4YW1UeXBlIiwidXNlRWZmZWN0IiwiUGxhblNlcnZpY2UiLCJHZXRBbGwiLCJ0aGVuIiwiRWR1WWVhclNlcnZpY2UiLCJHZXRZZWFycyIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiY2hhbmdlUHJvZ3JhbSIsInZhbCIsImNoYW5nZUVkdVllYXIiLCJzZXRMb2FkQ291cnNlcyIsIkV4YW1TZXJ2aWNlIiwiR2V0QWxsQ291cnNlcyIsInRvU3RyaW5nIiwicmVzcCIsImxvZyIsImxvYWRDb3Vyc2VzIiwibG9hZEV4YW1zVHlwZSIsInNldExvYWRFeGFtc1R5cGUiLCJwbGFucyIsInNldFBsYW5zIiwiYWRkSW5wdXRGaWVsZCIsImlucHV0RmllbGRzIiwibGVuZ3RoIiwiaGFsbHMiLCJ0b2FzdCIsInNldElucHV0RmllbGRzIiwiaGFsbCIsImRhdGUiLCJnZXRGdWxsRGF0ZSIsInNlbGVjdGVkRGF0ZSIsImZyb20iLCJnZXRGdWxsVGltZSIsInN0YXJ0VGltZSIsInRvIiwiZW5kVGltZSIsInBsYW5JZCIsIm51bV9zdHVkcyIsInJlbW92ZUlucHV0RmllbGRzIiwiaW5kZXgiLCJyb3dzIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImxpc3QiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInNsaWNlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiY2xlYXIiLCJzZXRTZWxlY3RlZE5ld1N0ZHMiLCJzZXRTZWxlY3RlZE9sZFN0ZHMiLCJzZXRTZWxlY3RlZFBsYW5zIiwic2V0U2VsZWN0ZWRQbGFuRGF0YSIsImNoYW5nZUNvdXJzZSIsIl9jb3Vyc2UiLCJmaW5kIiwiZSIsImVkdV9jb3Vyc2VfaWQiLCJldmFsdWF0aW9uX21ldGhvZHMiLCJjaGFuZ2VFeGFtVHlwZSIsIkdldEFsbFBsYW5zIiwic2VsZWN0ZWRQbGFuRGF0YSIsInNlbGVjdGVkUGxhbnMiLCJzZWxlY3RlZE5ld1N0ZHMiLCJzZWxlY3RlZE9sZFN0ZHMiLCJzZXRTZWxlY3RlZERhdGUiLCJEYXRlIiwic2V0U3RhcnRUaW1lIiwic2V0RW5kVGltZSIsImdldERheSIsIl9oYWxscyIsImlkIiwic2VsZWN0ZWQiLCJzZXRIYWxscyIsImhhbmRsZURhdGVDaGFuZ2UiLCJfaW5wdEZpbGRzIiwibWFwIiwiZGQiLCJoYW5kbGVTdGFydFRpbWUiLCJoYW5kbGVFbmRUaW1lIiwic3RhcnRIb3VyIiwiZ2V0SG91cnMiLCJzdGFydE1pbnV0ZSIsImdldE1pbnV0ZXMiLCJlbmRIb3VyIiwiZW5kTWludXRlIiwic2VsZWN0ZWRQbGFuIiwic2V0U2VsZWN0ZWRQbGFuIiwic2VsZWN0UGxhbiIsInZhbEFzTnVtIiwicGFyc2VJbnQiLCJfYXJyIiwiaW5jbHVkZXMiLCJmaW5kSW5kZXgiLCJzZWwiLCJzdW1PbGQiLCJyZWR1Y2UiLCJwYXJ0aWFsU3VtIiwiYSIsIm9sZF9zdHVkZW50c19udW0iLCJzdW1OZXciLCJuZXdfc3R1ZGVudHNfbnVtIiwicHVzaCIsImhhbmRsZUFkZEV4YW0iLCJwYXlMb2FkIiwicGxhbl9pZHMiLCJ0eXBlIiwiZmlsdGVyIiwicGxhbl9pZCIsInN0dWRlbnRzX251bSIsInJlbmRlclBsYW5zIiwiYXJTQSIsIkRhdGVGbnNVdGlscyIsIm1hcmdpbiIsIndpZHRoIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJhcl9uYW1lIiwic3BlY2lhbGl0eSIsInNlbWVzdGVyIiwicCIsImRpc3BsYXkiLCJzdWJtaXRCdG4iLCJkYXRhIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY2xvc2VCdG4iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInR5cG9ncmFwaHkiLCJvcHRpb24iLCJhdXRoIiwibGF5b3V0IiwiQWRtaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLFNBQW9DLEdBQUcsQ0FBQyxFQUFELEtBQVE7QUFBQTs7QUFDbkQsUUFBTTtBQUFFQztBQUFGLE1BQWdCQywyRkFBYyxFQUFwQztBQUNBLFFBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MscUdBQUQsQ0FBNUI7QUFDQSxRQUFNQyxPQUFPLEdBQUdILFNBQVMsRUFBekIsQ0FIbUQsQ0FLbkQ7O0FBQ0EsUUFBTTtBQUFBLE9BQUNJLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QyxDQVBtRCxDQVNuRDs7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFD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LGlCQUFPLEVBQUMsUUFBL0I7QUFBd0MsY0FBSSxFQUFDLE9BQTdDO0FBQXFELGNBQUksRUFBQyxPQUExRDtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQ0Usc0JBQVUsRUFBRWhELGFBRGQ7QUFFRSx3QkFBWSxFQUFFdkIsUUFGaEI7QUFHRSx1QkFBVyxFQUFFLGdCQUhmO0FBSUUsd0JBQVksRUFBRSxJQUpoQjtBQUtFLG1CQUFPLEVBQUVGLFVBTFg7QUFNRSxvQkFBUSxFQUFHd0UsQ0FBRCxJQUFPRyxjQUFjLENBQUNILENBQUMsQ0FBQ2UsRUFBSCxDQU5qQztBQU9FLDBCQUFjLEVBQUcrRCxNQUFELElBQVlBLE1BQU0sQ0FBQ2xHLElBUHJDO0FBUUUsMEJBQWMsRUFBR2tHLE1BQUQsSUFBWUEsTUFBTSxDQUFDL0Q7QUFSckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsRUF3Rkd1QyxXQUFXLENBQUNuRyxLQUFELENBeEZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNEZELENBM3NCRDs7R0FBTS9DLFM7VUFDa0JFLG1GOzs7S0FEbEJGLFM7QUE2c0JMQSxTQUFELENBQW1CMkssSUFBbkIsR0FBMEIsSUFBMUI7QUFDQzNLLFNBQUQsQ0FBbUI0SyxNQUFuQixHQUE0QkMsd0RBQTVCO0FBQ2U3Syx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdHVkZW50c19hZmZhaXJzL2FkbWluL2V4YW1zL2V4YW1zLWxpc3QuNTQ0NzEyZjNjODkwZTM2NjNmMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pbiBmcm9tIFwibGF5b3V0cy9BZG1pbi5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQWRkLCBBcnJvd0JhY2ssIEJhY2tzcGFjZSwgWm9vbUluIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbCxcclxuICBHcmlkLFxyXG4gIElucHV0TGFiZWwsXHJcbiAgTWVudUl0ZW0sXHJcbiAgU2VsZWN0LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICBJbnB1dCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtXCI7XHJcbmltcG9ydCBQbGFuU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2VydmljZXMvUGxhblNlcnZpY2VcIjtcclxuaW1wb3J0IENvdXJzZVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0NvdXJzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEVkdVllYXJTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi8uLi9TZXJ2aWNlcy9FZHVZZWFyU2VydmljZVwiO1xyXG5pbXBvcnQgRXhhbVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NlcnZpY2VzL0V4YW1TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1V0aWxpdHkvVHJhbnNsYXRpb25zL3VzZVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC92aWV3cy9kYXNoYm9hcmRTdHlsZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxuICBUaW1lUGlja2VyLFxyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gXCJAZGF0ZS1pby9kYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBhclNBIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCIuL2V4YW1zLWxpc3Qtc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFN1aUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TdWlCdXR0b25cIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBSU2VsZWN0IH0gZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgeyBEYXRlSGVscGVyIH0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vSGVscGVycy9EYXRlSGVscGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSUV4YW1zTGlzdFByb3BzIHt9XHJcbmNvbnN0IEV4YW1zTGlzdDogUmVhY3QuRkM8SUV4YW1zTGlzdFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIFByb2dyYW1zXHJcbiAgY29uc3QgW3Byb2dyYW1zLCBzZXRQcm9ncmFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIENvdXJzZXNcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFZHUgWWVhclxyXG4gIGNvbnN0IFtlZHVZZWFycywgc2V0RWR1WWVhcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZHVZZWFyLCBzZXRFZHVZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBFeGFtIFR5cGVcclxuICBjb25zdCBbZXhhbXNUeXBlcywgc2V0RXhhbXNUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZXhhbVR5cGUsIHNldEV4YW1UeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUGxhblNlcnZpY2UuR2V0QWxsKClcclxuICAgICAgLnRoZW4oKHByb2dyYW1zKSA9PiB7XHJcbiAgICAgICAgRWR1WWVhclNlcnZpY2UuR2V0WWVhcnMoXCJcIilcclxuICAgICAgICAgIC50aGVuKChlZHVZZWFycykgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9ncmFtcyhwcm9ncmFtcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRFZHVZZWFycyhlZHVZZWFycy5yZXN1bHQpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUHJvZ3JhbSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0UHJvZ3JhbSh2YWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUVkdVllYXIgPSAodmFsOiBudW1iZXIpID0+IHtcclxuICAgIHNldEVkdVllYXIodmFsKTtcclxuICAgIHNldExvYWRDb3Vyc2VzKHRydWUpO1xyXG4gICAgRXhhbVNlcnZpY2UuR2V0QWxsQ291cnNlcyhwcm9ncmFtLCB2YWwudG9TdHJpbmcoKSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgICAgc2V0Q291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcclxuICAgIHNldExvYWRDb3Vyc2VzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbG9hZENvdXJzZXMsIHNldExvYWRDb3Vyc2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZEV4YW1zVHlwZSwgc2V0TG9hZEV4YW1zVHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwbGFucywgc2V0UGxhbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBHZXQgRXhhbXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgY29uc3QgYWRkSW5wdXRGaWVsZCA9ICgpID0+IHtcclxuICAgIGlmIChpbnB1dEZpZWxkcy5sZW5ndGggPj0gaGFsbHMubGVuZ3RoKVxyXG4gICAgICB0b2FzdC5lcnJvcihcItmE2KfZitmF2YPZhtmDINin2YTYpdi22KfZgdipISDZhNin2YrZiNis2K8g2LPZiNmJINmC2KfYudiq2YrZhlwiKTtcclxuICAgIGVsc2VcclxuICAgICAgc2V0SW5wdXRGaWVsZHMoW1xyXG4gICAgICAgIC4uLmlucHV0RmllbGRzLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgICBkYXRlOiBnZXRGdWxsRGF0ZShzZWxlY3RlZERhdGUpLFxyXG4gICAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICAgIHBsYW5JZDogMCxcclxuICAgICAgICAgIG51bV9zdHVkczogMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZUlucHV0RmllbGRzID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByb3dzID0gWy4uLmlucHV0RmllbGRzXTtcclxuICAgIHJvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldElucHV0RmllbGRzKHJvd3MpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4LCBldm50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldm50LnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uaW5wdXRGaWVsZHNdO1xyXG4gICAgbGlzdFtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIHNldElucHV0RmllbGRzKGxpc3QpO1xyXG4gICAgY29uc29sZS5sb2cobGlzdCk7XHJcbiAgfTtcclxuICAvL1xyXG4gIGNvbnN0IGdldEZ1bGxEYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBkYXkgPSBkYXRlPy5nZXREYXRlKCk7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlPy5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZT8uZ2V0RnVsbFllYXIoKTtcclxuICAgIC8vIFRoaXMgYXJyYW5nZW1lbnQgY2FuIGJlIGFsdGVyZWQgYmFzZWQgb24gaG93IHdlIHdhbnQgdGhlIGRhdGUncyBmb3JtYXQgdG8gYXBwZWFyLlxyXG4gICAgcmV0dXJuIGAkeyhcIjBcIiArIGRheSkuc2xpY2UoLTIpfS0keyhcIjBcIiArIG1vbnRoKS5zbGljZSgtMil9LSR7eWVhcn1gO1xyXG4gIH07XHJcbiAgLy9cclxuICBjb25zdCBnZXRGdWxsVGltZSA9IChkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICB9O1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWROZXdTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgc2V0U2VsZWN0ZWRQbGFucyhbXSk7XHJcbiAgICBzZXRQbGFucyhbXSk7XHJcbiAgICBzZXRTZWxlY3RlZFBsYW5EYXRhKFtdKTtcclxuICAgIHNldElucHV0RmllbGRzKFtcclxuICAgICAge1xyXG4gICAgICAgIGhhbGw6IDAsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShzdGFydFRpbWUpLFxyXG4gICAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgICBudW1fc3R1ZHM6IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUNvdXJzZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIHNldENvdXJzZSh2YWwpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZSh0cnVlKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT09IHZhbCk7XHJcbiAgICBzZXRFeGFtc1R5cGUoX2NvdXJzZS5ldmFsdWF0aW9uX21ldGhvZHMpO1xyXG4gICAgc2V0TG9hZEV4YW1zVHlwZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VFeGFtVHlwZSA9ICh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGxldCBfY291cnNlID0gY291cnNlcy5maW5kKChlKSA9PiBlLmVkdV9jb3Vyc2VfaWQgPT0gY291cnNlKTtcclxuICAgIHNldEV4YW1UeXBlKHZhbCk7XHJcbiAgICBFeGFtU2VydmljZS5HZXRBbGxQbGFucyhcclxuICAgICAgcHJvZ3JhbSxcclxuICAgICAgZWR1WWVhcixcclxuICAgICAgX2NvdXJzZS5lZHVfY291cnNlX2lkLFxyXG4gICAgICB2YWwudG9TdHJpbmcoKVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gc2V0UGxhbnMocmVzcC5yZXN1bHQpKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfTtcclxuICAvLyBIYWxsc1xyXG4gIC8vIGNvbnN0IFtoYWxscywgc2V0SGFsbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGhhbmRsZSBhZGQgY291cnNzZSB0byBwcm9ncmFtXHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFBsYW5EYXRhLCBzZXRTZWxlY3RlZFBsYW5EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFucywgc2V0U2VsZWN0ZWRQbGFuc10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE5ld1N0ZHMsIHNldFNlbGVjdGVkTmV3U3Rkc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPbGRTdGRzLCBzZXRTZWxlY3RlZE9sZFN0ZHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFtzdGFydFRpbWUsIHNldFN0YXJ0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbZW5kVGltZSwgc2V0RW5kVGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zb2xlLmxvZyhcInNlbGVjdGVkRGF0ZVwiLCBzZWxlY3RlZERhdGUuZ2V0RGF5KCkpO1xyXG4gIC8vIER5bmFtaWMgSGFsbHNcclxuICBjb25zdCBbaW5wdXRGaWVsZHMsIHNldElucHV0RmllbGRzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaGFsbDogMCxcclxuICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICBwbGFuSWQ6IDAsXHJcbiAgICAgIG51bV9zdHVkczogMCxcclxuICAgIH0sXHJcbiAgXSk7XHJcbiAgY29uc29sZS5sb2coaW5wdXRGaWVsZHMpO1xyXG4gIGNvbnN0IF9oYWxscyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwi2YIxXCIsXHJcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcItmCMlwiLFxyXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW2hhbGxzLCBzZXRIYWxsc10gPSB1c2VTdGF0ZShfaGFsbHMpO1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXRlKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKGUpLFxyXG4gICAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgICAgdG86IGdldEZ1bGxUaW1lKGVuZFRpbWUpLFxyXG4gICAgICAgIHBsYW5JZDogZGQucGxhbklkLFxyXG4gICAgICAgIG51bV9zdHVkczogZGQubnVtX3N0dWRzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZpZWxkcyhfaW5wdEZpbGRzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0VGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGFydFRpbWUoZSk7XHJcbiAgICBsZXQgX2lucHRGaWxkcyA9IGlucHV0RmllbGRzLnNsaWNlKCkubWFwKChkZCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhbGw6IGRkLmhhbGwsXHJcbiAgICAgICAgZGF0ZTogZ2V0RnVsbERhdGUoc2VsZWN0ZWREYXRlKSxcclxuICAgICAgICBmcm9tOiBnZXRGdWxsVGltZShlKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZW5kVGltZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRW5kVGltZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFbmRUaW1lKGUpO1xyXG4gICAgbGV0IF9pbnB0RmlsZHMgPSBpbnB1dEZpZWxkcy5zbGljZSgpLm1hcCgoZGQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoYWxsOiBkZC5oYWxsLFxyXG4gICAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgICAgZnJvbTogZ2V0RnVsbFRpbWUoc3RhcnRUaW1lKSxcclxuICAgICAgICB0bzogZ2V0RnVsbFRpbWUoZSksXHJcbiAgICAgICAgcGxhbklkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgbnVtX3N0dWRzOiBkZC5udW1fc3R1ZHMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmllbGRzKF9pbnB0RmlsZHMpO1xyXG4gICAgY29uc3Qgc3RhcnRIb3VyID0gc3RhcnRUaW1lLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBzdGFydE1pbnV0ZSA9IHN0YXJ0VGltZS5nZXRNaW51dGVzKCk7XHJcbiAgICBjb25zdCBlbmRIb3VyID0gZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgZW5kTWludXRlID0gZS5nZXRNaW51dGVzKCk7XHJcbiAgICBpZiAoZSA8IHN0YXJ0VGltZSkgdG9hc3QuZXJyb3IoXCLZiNmC2Kog2KfZhNin2YbYqtmH2KfYoSDZitis2Kgg2KPZhiDZitmD2YjZhiDYqNi52K8g2YjZgtiqINin2YTYqNiv2KFcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gZ2V0IHNlbGVjdGVkIHBsYW4gZXhhbXNcclxuICBjb25zdCBbc2VsZWN0ZWRQbGFuLCBzZXRTZWxlY3RlZFBsYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gU2VsZWN0IFBsYW5cclxuICBjb25zdCBzZWxlY3RQbGFuID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgdmFsQXNOdW0gPSBwYXJzZUludChpZCk7XHJcbiAgICAvLyBzZXRTZWxlY3RlZFBsYW4odmFsQXNOdW0pO1xyXG4gICAgbGV0IF9hcnIgPSBzZWxlY3RlZFBsYW5zLnNsaWNlKCk7XHJcbiAgICBpZiAoX2Fyci5pbmNsdWRlcyh2YWxBc051bSkpIHtcclxuICAgICAgbGV0IGluZGV4ID0gX2Fyci5maW5kSW5kZXgoKGUpID0+IGUgPT0gdmFsQXNOdW0pO1xyXG4gICAgICBfYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbnMoX2Fycik7XHJcbiAgICAgIGxldCBzZWwgPVxyXG4gICAgICAgIF9hcnIubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBwbGFucy5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoX2Fyci5pbmNsdWRlcyhwYXJzZUludChlLmlkKSkpIHJldHVybiBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgc2V0U2VsZWN0ZWRQbGFuRGF0YShzZWwpO1xyXG4gICAgICBpZiAoc2VsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBzdW1PbGQgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm9sZF9zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzdW1OZXcgPSBzZWwucmVkdWNlKFxyXG4gICAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgICBzZXRTZWxlY3RlZE9sZFN0ZHMoc3VtT2xkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoMCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfYXJyLnB1c2godmFsQXNOdW0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFBsYW5zKF9hcnIpO1xyXG4gICAgICBsZXQgc2VsID1cclxuICAgICAgICBfYXJyLmxlbmd0aCA+IDBcclxuICAgICAgICAgID8gcGxhbnMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKF9hcnIuaW5jbHVkZXMocGFyc2VJbnQoZS5pZCkpKSByZXR1cm4gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIHNldFNlbGVjdGVkUGxhbkRhdGEoc2VsKTtcclxuICAgICAgY29uc3Qgc3VtT2xkID0gc2VsLnJlZHVjZShcclxuICAgICAgICAocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEub2xkX3N0dWRlbnRzX251bSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN1bU5ldyA9IHNlbC5yZWR1Y2UoXHJcbiAgICAgICAgKHBhcnRpYWxTdW0sIGEpID0+IHBhcnRpYWxTdW0gKyBhLm5ld19zdHVkZW50c19udW0sXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTZWxlY3RlZE5ld1N0ZHMoc3VtTmV3KTtcclxuICAgICAgc2V0U2VsZWN0ZWRPbGRTdGRzKHN1bU9sZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRXhhbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBheUxvYWQgPSB7XHJcbiAgICAgIHBsYW5faWRzOiBbLi4uc2VsZWN0ZWRQbGFuc10sXHJcbiAgICAgIHR5cGU6IGAke2V4YW1zVHlwZXMuZmlsdGVyKChlKSA9PiBlLmlkID09IGV4YW1UeXBlKVswXS5uYW1lfWAsXHJcbiAgICAgIGRhdGU6IGdldEZ1bGxEYXRlKHNlbGVjdGVkRGF0ZSksXHJcbiAgICAgIGZyb206IGdldEZ1bGxUaW1lKHN0YXJ0VGltZSksXHJcbiAgICAgIHRvOiBnZXRGdWxsVGltZShlbmRUaW1lKSxcclxuICAgICAgaGFsbHM6IGlucHV0RmllbGRzLm1hcCgoZGQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IGRkLmhhbGwsXHJcbiAgICAgICAgICBwbGFuX2lkOiBkZC5wbGFuSWQsXHJcbiAgICAgICAgICBzdHVkZW50c19udW06IHBhcnNlSW50KGAke2RkLm51bV9zdHVkc31gKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhwYXlMb2FkKTtcclxuICAgIC8vIFBsYW5TZXJ2aWNlLkFkZENvdXJzZShwYXlMb2FkKVxyXG4gICAgLy8gICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICB0b2FzdC5zdWNjZXNzKHRyYW5zbGF0ZShcIkNvdXJzZSBBZGRlZCBUbyBQbGFuIFN1Y2Nlc3NmdWxseVwiKSk7XHJcbiAgICAvLyAgICAgICBQbGFuU2VydmljZS5HZXRQcm9ncmFtQ291cnNlcyhwcm9ncmFtLCBzcGVjWWVhciwgeWVhcilcclxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgIC8vICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRQcm9ncmFtQ291cnNlcyhyZXNwLnJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclBsYW5zID0gKHBsYW5zKSA9PiB7XHJcbiAgICBpZiAocGxhbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciBsb2NhbGU9e2FyU0F9IHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjdlbVwiIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+2KfZhNiz2YbYqTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19Ptin2YTYp9iu2KrYtdin2LU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT7Yp9mE2YHYtdmEPC9oNT5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIG1hcmdpbkJvdHRvbTogXCIwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgINi52K/YryDYp9mE2LfZhNin2Kh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBtYXJnaW5Ub3A6IFwiMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDZhdiz2KrYrNivIHwg2YXYudmK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0gc3R5bGU9e3sgbWFyZ2luOiBcIjJlbSAwZW1cIiB9fT5cclxuICAgICAgICAgICAgICB7cGxhbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLnllYXI/LmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Uuc2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZS5uZXdfc3R1ZGVudHNfbnVtfSB8IHtlLm9sZF9zdHVkZW50c19udW19XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRQbGFucy5pbmNsdWRlcyhlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwKSA9PiBzZWxlY3RQbGFuKHAudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfT7Yp9mE2KrYp9ix2YrYrjwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXszfT5cclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZUNoYW5nZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGlucHV0VmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM2VtXCIgfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+INin2YTZiNmC2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwi2YXZhlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGFydFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydFRpbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNob3dUb2RheUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0b2RheUxhYmVsPVwibm93XCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCLYpdmE2YlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kVGltZX1cclxuICAgICAgICAgICAgICAgICAgbWludXRlc1N0ZXA9ezV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmRUaW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17MX0+PC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+2KfZhNmF2KzZhdmI2Lkg2KfZhNmD2YTZijwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiBcIjBcIiB9fT7Zhdiz2KrYrNivPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PtmF2LnZitivPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTmV3U3RkcyArIHNlbGVjdGVkT2xkU3Rkc1xyXG4gICAgICAgICAgICAgICAgICB9YH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkTmV3U3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwXCIgfX0+e3NlbGVjdGVkT2xkU3Rkc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1cHggMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0QnRufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRJbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDYqtiu2LXZiti1INmC2KfYudipXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAge2lucHV0RmllbGRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQbGFuRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgbWQ9ezEyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmC2KfYudipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5oYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2bnQpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgZXZudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhhbGwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYWxsLnNlbGVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtoYWxsLmlkfSB2YWx1ZT17aGFsbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2LPZhtipINmI2KfZhNin2K7Yqti12KfYtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEucGxhbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiaGFsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFuSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZudCkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCBldm50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBsYW5EYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGF0YS55ZWFyPy5hcl9uYW1lfSAtICR7ZGF0YS55ZWFyPy5zcGVjaWFsaXR5Py5hcl9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKFwi2KfZhNiq2KfYsdmK2K5cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmZyb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoXCLZhdmGXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcItil2YTZiVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldm50KSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsIGV2bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bV9zdHVkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLm51bV9zdHVkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZShcIti52K/YryDYp9mE2LfZhNmR2KfYqFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRJdGVtIG1kPXsxfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubGVuZ3RoICE9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVJbnB1dEZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPFN1aUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRXhhbX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyZW0gMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjMsIDE5MywgMjMyKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtg2KXYttin2YHYqSDZiNin2YLYudipINin2YXYqtit2KfZhtmK2KlgfVxyXG4gICAgICAgICAgICAgIDwvU3VpQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjJlbSAwZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2DZhNin2KrZiNis2K8g2KjZitin2YbYp9iqINmE2LnYsdi22YfYp2B9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgIDxHcmlkQ29udGFpbmVyIG1kPXsxMn0+XHJcbiAgICAgICAgPEdyaWRJdGVtXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiLTFlbSAwIDFlbSAwXCIgfX1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvZ3JhcGh5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICB7YNil2LbYp9mB2Kkg2YjYp9mC2LnYqSDYp9mF2KrYrdin2YbZitipYH1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBtZD17MTJ9IHN0eWxlPXt7IG1hcmdpbjogXCIyZW0gMGVtXCIgfX0+XHJcbiAgICAgICAgPEdyaWRJdGVtIG1kPXsyfT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+2KfZhNio2LHZhtin2YXYrDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvZ3JhbX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNio2LHZhtin2YXYrFwifVxyXG4gICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtwcm9ncmFtc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVByb2dyYW0oZS5pZCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2LPZhtipPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCB2YXJpYW50PVwiZmlsbGVkXCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlZHVZZWFyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcItin2K7YqtmK2KfYsSDYp9mE2LPZhtipXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2VkdVllYXJzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRWR1WWVhcihlLmlkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0gbWQ9ezJ9PlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj7Yp9mE2YXZgtix2ZHYsTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICB7LyogPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkQ291cnNlc31cclxuICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZX1cclxuICAgICAgICAgICAgICBsYWJlbD1cImNvdXJzZXNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ291cnNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjb3Vyc2UuaWR9IHZhbHVlPXtjb3Vyc2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7Y291cnNlLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD4gKi99XHJcbiAgICAgICAgICAgIDxSU2VsZWN0XHJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17bG9hZENvdXJzZXN9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi2KfYrtiq2YrYp9ixINin2YTZhdmC2LHZkdixXCJ9XHJcbiAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvdXJzZXN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDb3Vyc2UoZS5lZHVfY291cnNlX2lkKX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmFyX25hbWV9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhvcHRpb24pID0+IG9wdGlvbi5lZHVfY291cnNlX2lkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgIDxHcmlkSXRlbSBtZD17Mn0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPtmG2YjYuSDYp9mE2YjYp9mC2LnYqTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cImZpbGxlZFwiIHNpemU9XCJzbWFsbFwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8UlNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2xvYWRFeGFtc1R5cGV9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtleGFtVHlwZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLYp9iu2KrZitin2LEg2KfZhNmI2KfZgti52KlcIn1cclxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17ZXhhbXNUeXBlc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUV4YW1UeXBlKGUuaWQpfVxyXG4gICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtyZW5kZXJQbGFucyhwbGFucyl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbihFeGFtc0xpc3QgYXMgYW55KS5hdXRoID0gdHJ1ZTtcclxuKEV4YW1zTGlzdCBhcyBhbnkpLmxheW91dCA9IEFkbWluO1xyXG5leHBvcnQgZGVmYXVsdCBFeGFtc0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=