import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import GridContainer from "../../../../components/Grid/GridContainer";
import { Add, ArrowBack, Backspace, ZoomIn } from "@material-ui/icons";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  makeStyles,
  Input,
  TextField,
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";
import PlanService from "../../../../Services/PlanService";
import CourseService from "../../../../Services/CourseService";
import EduYearService from "../../../../Services/EduYearService";
import ExamService from "../../../../Services/ExamService";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import {
  KeyboardDatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { arSA } from "date-fns/locale";
import { toast } from "react-toastify";
import "./exams-list-style.css";
import { Card } from "@material-ui/core";
import SuiButton from "../../../../components/SuiButton";
import { default as RSelect } from "react-select";
import { DateHelper } from "./../../../../Helpers/DateHelper";

interface IExamsListProps {}
const ExamsEdit: React.FC<IExamsListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const times = DateHelper.getQuarterHourTimes();
  console.log(times);
  // Programs
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState(null);

  // Courses
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);

  // Edu Year
  const [eduYears, setEduYears] = useState([]);
  const [eduYear, setEduYear] = useState(null);

  // Exam Type
  const [examsTypes, setExamsType] = useState([]);
  const [examType, setExamType] = useState(null);

  const [loadCourses, setLoadCourses] = useState(false);
  const [loadExamsType, setLoadExamsType] = useState(false);

  const [plans, setPlans] = useState([]);
  const [allNums, setAllNums] = useState(0);

  const [selectedPlanData, setSelectedPlanData] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState<number[]>([]);
  const [selectedNewStds, setSelectedNewStds] = useState(0);
  const [selectedOldStds, setSelectedOldStds] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState(times[0]);
  const [endTime, setEndTime] = useState(times[12]);
  const getFullDate = (date) => {
    if (date.split("/").length > 2) {
      date = new Date(
        date.split("/")[2],
        date.split("/")[1],
        date.split("/")[0]
      );
      console.clear();
      console.log("date", date);
      let day = date?.getDate();
      let month = date?.getMonth() + 1;
      let year = date?.getFullYear();
      // This arrangement can be altered based on how we want the date's format to appear.
      return `${("0" + day).slice(-2)}-${("0" + month).slice(-2)}-${year}`;
    } else return "";
  };
  // Dynamic Halls
  const [inputFields, setInputFields] = useState([]);
  const [halls, setHalls] = useState([]);
  useEffect(() => {
    PlanService.GetAll()
      .then((programs) => {
        EduYearService.GetYears("")
          .then((eduYears) => {
            setPrograms(programs.result);
            setEduYears(eduYears.result);
          })
          .catch((err) => {
            console.error("Error", err);
          });
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  const changeProgram = (val: number) => {
    setProgram(val);
  };

  const changeEduYear = (val: number) => {
    setEduYear(val);
    setLoadCourses(true);
    ExamService.GetAllCourses(program, val.toString())
      .then((resp) => {
        console.log(resp.result);
        setCourses(resp.result);
      })
      .catch((error) => {});
    setLoadCourses(false);
  };
  const addInputField = () => {
    if (getFullDate(selectedDate) !== "")
      if (inputFields.length >= halls.length)
        toast.error("لايمكنك الإضافة! لايوجد سوى قاعتين");
      else
        setInputFields([
          ...inputFields,
          {
            hall: 0,
            date: getFullDate(selectedDate),
            from: startTime,
            to: endTime,
            planId: 0,
            num_studs: 0,
          },
        ]);
    else toast.error("الرجاء ادخال تاريخ صالح");
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    console.log(list);
  };
  //

  // ------------------------
  const clear = () => {
    setSelectedNewStds(0);
    setSelectedOldStds(0);
    setSelectedPlans([]);
    setPlans([]);
    setSelectedPlanData([]);
    setInputFields([]);
  };
  const changeCourse = (val: number) => {
    clear();
    setCourse(val);
    setLoadExamsType(true);
    let _course = courses.find((e) => e.edu_course_id === val);
    setExamsType(_course.evaluation_methods);
    setLoadExamsType(false);
  };
  const changeExamType = (val: number) => {
    clear();
    let _course = courses.find((e) => e.edu_course_id == course);
    setExamType(val);
    ExamService.GetAllExams(
      program,
      eduYear,
      _course.edu_course_id,
      val.toString()
    )
      .then((resp) => {
        setSelectedDate(
          `${resp?.result[0]?.date.split("T")[0].split("-")[2]}/${
            resp?.result[0]?.date.split("T")[0].split("-")[1]
          }/${resp?.result[0]?.date.split("T")[0].split("-")[0]}`
        );
        let _stime = times.filter((e) => e.value == resp.result[0].from)[0];
        let _etime = times.filter((e) => e.value == resp.result[0].to)[0];
        setStartTime(_stime);
        setEndTime(_etime);
        let all = resp.result.reduce(
          (partialSum, a) =>
            partialSum + a.plan.old_students_num + a.plan.new_students_num,
          0
        );
        setPlans(resp.result);
        setAllNums(all);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    ExamService.getHalls()
      .then((resp) => {
        setHalls(resp);
      })
      .catch((e) => {});
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e);
    let _inptFilds = inputFields.slice().map((dd) => {
      return {
        hall: dd.hall,
        date: getFullDate(e),
        from: startTime.value,
        to: endTime.value,
        planId: dd.planId,
        num_studs: dd.num_studs,
      };
    });
    setInputFields(_inptFilds);
  };
  const handleStartTime = (e) => {
    setStartTime(e);
    let _inptFilds = inputFields.slice().map((dd) => {
      return {
        hall: dd.hall,
        date: getFullDate(selectedDate),
        from: e,
        to: endTime,
        planId: dd.planId,
        num_studs: dd.num_studs,
      };
    });
    setInputFields(_inptFilds);
  };
  const handleEndTime = (e) => {
    setEndTime(e);
    let _inptFilds = inputFields.slice().map((dd) => {
      return {
        hall: dd.hall,
        date: getFullDate(selectedDate),
        from: startTime,
        to: e,
        planId: dd.planId,
        num_studs: dd.num_studs,
      };
    });
    setInputFields(_inptFilds);
    let st = new Date(
      2023,
      1,
      1,
      parseInt(startTime.value.split(":")[0]),
      parseInt(startTime.value.split(":")[1])
    );
    let en = new Date(
      2023,
      1,
      1,
      parseInt(e.value.split(":")[0]),
      parseInt(e.value.split(":")[1])
    );
    if (en < st) toast.error("وقت الانتهاء يجب أن يكون بعد وقت البدء");
  };

  // get selected plan exams
  const [selectedPlan, setSelectedPlan] = useState(0);
  // Select Plan
  const selectPlan = (id) => {
    let valAsNum = parseInt(id);
    setSelectedPlan(valAsNum);
    let _arr = selectedPlans.slice();
    if (_arr.includes(valAsNum)) {
      let index = _arr.findIndex((e) => e == valAsNum);
      _arr.splice(index, 1);
      setSelectedPlans(_arr);
      let sel =
        _arr.length > 0
          ? _arr.map(
              (ee) =>
                plans.filter((e) => {
                  return ee == e.id;
                })[0]
            )
          : [];
      setSelectedPlanData(sel);
      console.log(sel);
      if (sel.length > 0) {
        const sumOld = sel.reduce(
          (partialSum, a) => partialSum + a.plan.old_students_num,
          0
        );
        const sumNew = sel.reduce(
          (partialSum, a) => partialSum + a.plan.new_students_num,
          0
        );
        setSelectedNewStds(sumNew);
        setSelectedOldStds(sumOld);
      } else {
        setSelectedNewStds(0);
        setSelectedOldStds(0);
      }
    } else {
      _arr.push(valAsNum);
      setSelectedPlans(_arr);
      let sel =
        _arr.length > 0
          ? _arr.map(
              (ee) =>
                plans.filter((e) => {
                  return ee == e.id;
                })[0]
            )
          : [];
      setSelectedPlanData(sel);
      const sumOld = sel.reduce(
        (partialSum, a) => partialSum + a.plan.old_students_num,
        0
      );
      const sumNew = sel.reduce(
        (partialSum, a) => partialSum + a.plan.new_students_num,
        0
      );
      setSelectedNewStds(sumNew);
      setSelectedOldStds(sumOld);
    }
  };

  const handleEditExam = () => {
    if (selectedPlans.length !== plans.length) {
      toast.error("يجب اختيار كل السنوات");
      return;
    } else {
      const payLoad = {
        exam_ids: [...selectedPlans],
        date: getFullDate(selectedDate),
        from: startTime.value,
        to: endTime.value,
      };
      ExamService.Edit(payLoad)
        .then((result) => {
          if (result.success) {
            toast.success("تم تعديل الواقعة الامتحانية بنجاح");
          }
        })
        .catch((error) => {
          // toast.error(error.message);
        });
    }
    // if (
    //   payLoad.halls.some((e) => e.id == 0) ||
    //   payLoad.halls.some((e) => e.plan_id == undefined)
    // ) {
    //   toast.error("يجب اختيار قاعة ");
    // } else {
    //   ExamService.Add(payLoad)
    //     .then((result) => {
    //       if (result.success) {
    //         toast.success("تمت إضافة الواقعة الامتحانية بنجاح");
    //       }
    //     })
    //     .catch((error) => {
    //       // toast.error(error.message);
    //     });
    // }
  };
  const renderPlans = (plans) => {
    if (plans.length > 0) {
      return (
        <MuiPickersUtilsProvider locale={arSA} utils={DateFnsUtils}>
          <Card
            style={{
              margin: "5px 0px",
              width: "100%",
              paddingRight: "1em",
              paddingBottom: "1em",
            }}
          >
            <Grid container md={12} style={{ height: "7em" }}>
              <GridItem md={2}>
                <h5 style={{ fontWeight: "bold" }}>السنة</h5>
              </GridItem>
              <GridItem md={2}>
                <h5 style={{ fontWeight: "bold" }}>الاختصاص</h5>
              </GridItem>
              <GridItem md={2}>
                <h5 style={{ fontWeight: "bold" }}>الفصل</h5>
              </GridItem>
              <GridItem md={2}>
                <h5 style={{ fontWeight: "bold", marginBottom: "0" }}>
                  عدد الطلاب{" "}
                </h5>
                <h5 style={{ fontWeight: "bold", marginTop: "0" }}>
                  مستجد | معيد{" "}
                </h5>
              </GridItem>
            </Grid>
            {plans.map((e) => (
              <Grid container md={12} style={{ margin: "2em 0em" }}>
                <GridItem md={2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    disabled
                    value={e.plan.year?.ar_name}
                  />
                </GridItem>
                <GridItem md={2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    disabled
                    value={e.plan.year?.speciality?.ar_name}
                  />
                </GridItem>
                <GridItem md={2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    disabled
                    value={e.plan.semester}
                  />
                </GridItem>
                <GridItem md={1}>
                  {e.plan.new_students_num} | {e.plan.old_students_num}
                </GridItem>
                <GridItem md={1}>
                  <input
                    type="checkbox"
                    checked={selectedPlans.includes(e.id)}
                    value={e.id}
                    onChange={(p) => selectPlan(p.target.value)}
                  />
                </GridItem>
              </Grid>
            ))}
            <Grid container md={12}>
              <GridItem md={1}>التاريخ</GridItem>
              <GridItem md={3}>
                <TextField
                  clearable
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </GridItem>
            </Grid>
            <Grid
              container
              md={12}
              style={{ marginTop: "3em", height: "15em" }}
            >
              <GridItem style={{ display: "flex", marginTop: "1em" }} md={1}>
                <span> الوقت</span>
              </GridItem>
              <GridItem md={2}>
                <InputLabel id="demo-simple-select-label">من</InputLabel>
                <RSelect
                  style={{ zIndex: 999 }}
                  defaultValue={startTime}
                  placeholder={"اختيار الوقت"}
                  isSearchable={true}
                  options={times}
                  onChange={(e) => {
                    handleStartTime(e);
                  }}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                />
              </GridItem>
              <GridItem md={2}>
                <InputLabel id="demo-simple-select-label">إلى</InputLabel>
                <RSelect
                  style={{ zIndex: 999 }}
                  defaultValue={endTime}
                  placeholder={"اختيار الوقت"}
                  isSearchable={true}
                  options={times}
                  onChange={(e) => {
                    handleEndTime(e);
                  }}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                />
              </GridItem>
              <GridItem md={1}></GridItem>
              <Grid container md={4}>
                <Grid item md={5}>
                  <p style={{ margin: "0" }}>المجموع الكلي</p>
                  <p style={{ margin: "0" }}>مستجد</p>
                  <p style={{ margin: "0" }}>معيد</p>
                </Grid>
                <Grid item md={3}>
                  <p style={{ margin: "0" }}>{`${
                    selectedNewStds + selectedOldStds
                  }`}</p>
                  <p style={{ margin: "0" }}>{selectedNewStds}</p>
                  <p style={{ margin: "0" }}>{selectedOldStds}</p>
                </Grid>
                <Grid item md={12}>
                  <SuiButton
                    onClick={handleEditExam}
                    style={{
                      margin: "2em 0",
                      color: "rgb(255, 255, 255)",
                      background: "rgb(23, 193, 232)",
                    }}
                    type="button"
                  >
                    {`تعديل واقعة امتحانية`}
                  </SuiButton>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Grid container md={12} style={{ marginTop: "1em" }}>
            <Card
              style={{
                margin: "5px 0px",
                width: "100%",
                paddingRight: "1em",
                paddingBottom: "1em",
              }}
            >
              <Grid container>
                <Button
                  style={{ margin: "10px 5px" }}
                  variant="contained"
                  className={classes.submitBtn}
                  onClick={addInputField}
                >
                  تخصيص قاعة
                </Button>
              </Grid>
              {inputFields.map((data, index) => {
                console.log("data", data);
                console.log(selectedPlanData);
                return (
                  <Grid container md={12} style={{ marginTop: "1em" }}>
                    <GridItem md={2}>
                      <FormControl
                        fullWidth
                        variant="filled"
                        size="small"
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-label">
                          القاعة
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={data.hall}
                          label="halls"
                          name="hall"
                          onChange={(evnt) => handleChange(index, evnt)}
                        >
                          {halls.map(
                            (hall) =>
                              !hall.selected && (
                                <MenuItem key={hall.id} value={hall.id}>
                                  {hall.name}
                                </MenuItem>
                              )
                          )}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={2}>
                      <FormControl
                        fullWidth
                        variant="filled"
                        size="small"
                        size="small"
                      >
                        <InputLabel id="demo-simple-select-label">
                          السنة والاختصاص
                        </InputLabel>
                        <Select
                          fullWidth
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={data.planId}
                          label="halls"
                          name="planId"
                          onChange={(evnt) => handleChange(index, evnt)}
                        >
                          {selectedPlanData.map((data) => (
                            <MenuItem key={data.id} value={data.id}>
                              {`${data.year?.ar_name} - ${data.year?.speciality?.ar_name}`}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={2}>
                      <TextField
                        disabled={true}
                        variant="outlined"
                        size="small"
                        type="text"
                        value={data.date}
                        label={translate("التاريخ")}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem md={2}>
                      <TextField
                        disabled={true}
                        variant="outlined"
                        size="small"
                        type="text"
                        value={data.from.value}
                        label={translate("من")}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem md={2}>
                      <TextField
                        disabled={true}
                        variant="outlined"
                        size="small"
                        type="text"
                        value={data.to.value}
                        label={translate("إلى")}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem md={2}>
                      <TextField
                        onChange={(evnt) => handleChange(index, evnt)}
                        variant="outlined"
                        size="small"
                        type="number"
                        name="num_studs"
                        value={data.num_studs}
                        label={translate("عدد الطلّاب")}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem md={1} style={{ marginTop: "1em" }}>
                      {inputFields.length >= 1 ? (
                        <Button
                          type="button"
                          style={{
                            width: "10%",
                            color: "white",
                            background: "red",
                          }}
                          variant="outlined"
                          className={classes.closeBtn}
                          onClick={removeInputFields}
                        >
                          x
                        </Button>
                      ) : (
                        ""
                      )}
                    </GridItem>
                  </Grid>
                );
              })}
              <SuiButton
                onClick={handleEditExam}
                style={{
                  margin: "2em 0",
                  color: "rgb(255, 255, 255)",
                  background: "rgb(23, 193, 232)",
                }}
                type="button"
              >
                {`تعديل واقعة امتحانية`}
              </SuiButton>
            </Card>
          </Grid>
        </MuiPickersUtilsProvider>
      );
    } else {
      return (
        <Grid
          container
          md={12}
          style={{
            margin: "2em 0em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{ textAlign: "center" }}
            variant="h5"
            component="div"
          >
            {`لاتوجد بيانات لعرضها`}
          </Typography>
        </Grid>
      );
    }
  };
  return (
    <GridContainer md={12}>
      <GridContainer md={12}>
        <GridItem
          style={{ margin: "-1em 0 1em 0" }}
          md={12}
          className={classes.typography}
        >
          <Typography variant="h5" component="div">
            {`تعديل واقعة امتحانية`}
          </Typography>
        </GridItem>
      </GridContainer>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">البرنامج</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              defaultValue={program}
              placeholder={"اختيار البرنامج"}
              isSearchable={true}
              options={programs}
              onChange={(e) => {
                changeProgram(e.id);
              }}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">السنة</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={eduYear}
              placeholder={"اختيار السنة"}
              isSearchable={true}
              options={eduYears}
              onChange={(e) => changeEduYear(e.id)}
              getOptionLabel={(option) => option.year}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">المقرّر</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            {/* <Select
              disabled={loadCourses}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="courses"
              onChange={(e) => changeCourse(e.target.value)}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.ar_name}
                </MenuItem>
              ))}
            </Select> */}
            <RSelect
              isDisabled={loadCourses}
              defaultValue={course}
              placeholder={"اختيار المقرّر"}
              isSearchable={true}
              options={courses}
              onChange={(e) => changeCourse(e.edu_course_id)}
              getOptionLabel={(option) => `${option.ar_name} ${option.code}`}
              getOptionValue={(option) => option.edu_course_id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">نوع الواقعة</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              isDisabled={loadExamsType}
              defaultValue={examType}
              placeholder={"اختيار الواقعة"}
              isSearchable={true}
              options={examsTypes}
              onChange={(e) => changeExamType(e.id)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
      </Grid>
      {renderPlans(plans)}
    </GridContainer>
  );
};

(ExamsEdit as any).auth = true;
(ExamsEdit as any).layout = Admin;
export default ExamsEdit;
