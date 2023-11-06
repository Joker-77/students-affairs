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
const ExamsList: React.FC<IExamsListProps> = ({}) => {
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

  // Get Exams
  useEffect(() => {}, []);

  const addInputField = () => {
    if (inputFields.length >= halls.length)
      toast.error("لايمكنك الإضافة! لايوجد سوى قاعتين");
    else
      setInputFields([
        ...inputFields,
        {
          hall: 0,
          date: getFullDate(selectedDate),
          from: getFullTime(startTime),
          to: getFullTime(endTime),
          planId: 0,
          num_studs: 0,
        },
      ]);
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
  const getFullDate = (date) => {
    let day = date?.getDate();
    let month = date?.getMonth() + 1;
    let year = date?.getFullYear();
    // This arrangement can be altered based on how we want the date's format to appear.
    return `${("0" + day).slice(-2)}-${("0" + month).slice(-2)}-${year}`;
  };
  // ------------------------
  const clear = () => {
    setSelectedNewStds(0);
    setSelectedOldStds(0);
    setSelectedPlans([]);
    setPlans([]);
    setSelectedPlanData([]);
    setInputFields([
      {
        hall: 0,
        date: getFullDate(selectedDate),
        from: startTime,
        to: endTime,
        num_studs: 0,
      },
    ]);
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
    ExamService.GetAllPlans(
      program,
      eduYear,
      _course.edu_course_id,
      val.toString()
    )
      .then((resp) => setPlans(resp.result))
      .catch((error) => {});
  };
  // Halls
  // const [halls, setHalls] = useState([]);
  // handle add coursse to program

  const [selectedPlanData, setSelectedPlanData] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState<number[]>([]);
  const [selectedNewStds, setSelectedNewStds] = useState(0);
  const [selectedOldStds, setSelectedOldStds] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(DateHelper.getTimeOfDay());
  const [endTime, setEndTime] = useState(DateHelper.getTimeOfDay());
  // Dynamic Halls
  const [inputFields, setInputFields] = useState([
    {
      hall: 0,
      date: getFullDate(selectedDate),
      from: startTime,
      to: endTime,
      planId: 0,
      num_studs: 0,
    },
  ]);
  console.log(inputFields);
  const _halls = [
    {
      id: 1,
      name: "ق1",
      selected: false,
    },
    {
      id: 2,
      name: "ق2",
      selected: false,
    },
    {
      id: 3,
      name: "3ق",
      selected: false,
    },
    {
      id: 4,
      name: "4ق",
      selected: false,
    },
  ];
  const [halls, setHalls] = useState(_halls);
  const handleDateChange = (e) => {
    setSelectedDate(e);
    let _inptFilds = inputFields.slice().map((dd) => {
      return {
        hall: dd.hall,
        date: getFullDate(e),
        from: getFullTime(startTime),
        to: getFullTime(endTime),
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
        from: e.value,
        to: endTime.value,
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
        from: startTime.value,
        to: e.value,
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
    // setSelectedPlan(valAsNum);
    let _arr = selectedPlans.slice();
    if (_arr.includes(valAsNum)) {
      let index = _arr.findIndex((e) => e == valAsNum);
      _arr.splice(index, 1);
      setSelectedPlans(_arr);
      let sel =
        _arr.length > 0
          ? plans.map((e) => {
              if (_arr.includes(parseInt(e.id))) return e;
            })
          : [];
      setSelectedPlanData(sel);
      if (sel.length > 0) {
        const sumOld = sel.reduce(
          (partialSum, a) => partialSum + a.old_students_num,
          0
        );
        const sumNew = sel.reduce(
          (partialSum, a) => partialSum + a.new_students_num,
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
          ? plans.map((e) => {
              if (_arr.includes(parseInt(e.id))) return e;
            })
          : [];
      setSelectedPlanData(sel);
      const sumOld = sel.reduce(
        (partialSum, a) => partialSum + a.old_students_num,
        0
      );
      const sumNew = sel.reduce(
        (partialSum, a) => partialSum + a.new_students_num,
        0
      );
      setSelectedNewStds(sumNew);
      setSelectedOldStds(sumOld);
    }
  };

  const handleAddExam = () => {
    const payLoad = {
      plan_ids: [...selectedPlans],
      type: `${examsTypes.filter((e) => e.id == examType)[0].name}`,
      date: getFullDate(selectedDate),
      from: startTime.value,
      to: endTime.value,
      halls: inputFields.map((dd) => {
        return {
          id: dd.hall,
          plan_id: dd.planId,
          students_num: parseInt(`${dd.num_studs}`),
        };
      }),
    };
    console.log(payLoad);
    ExamService.Add(payLoad)
      .then((result) => {
        if (result.success) {
          toast.success("تمت إضافة الواقعة الامتحانية بنجاح");
        }
      })
      .catch((error) => {
        // toast.error(error.message);
      });
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
            <Grid container md={12} style={{ margin: "2em 0em" }}>
              {plans.map((e) => (
                <>
                  <GridItem md={2}>
                    <TextField
                      variant="outlined"
                      size="small"
                      disabled
                      value={e.year?.ar_name}
                    />
                  </GridItem>
                  <GridItem md={2}>
                    <TextField
                      variant="outlined"
                      size="small"
                      disabled
                      value={e.year?.speciality?.ar_name}
                    />
                  </GridItem>
                  <GridItem md={2}>
                    <TextField
                      variant="outlined"
                      size="small"
                      disabled
                      value={e.semester}
                    />
                  </GridItem>
                  <GridItem md={1}>
                    {e.new_students_num} | {e.old_students_num}
                  </GridItem>
                  <GridItem md={1}>
                    <input
                      type="checkbox"
                      checked={selectedPlans.includes(e.id)}
                      value={e.id}
                      onChange={(p) => selectPlan(p.target.value)}
                    />
                  </GridItem>
                </>
              ))}
            </Grid>
            <Grid container md={12}>
              <GridItem md={1}>التاريخ</GridItem>
              <GridItem md={3}>
                <KeyboardDatePicker
                  clearable
                  value={selectedDate}
                  onChange={(date) => handleDateChange(date)}
                  minDate={new Date()}
                  format="dd/MM/yyyy"
                  // inputVariant="outlined"
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
                console.log(data);
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
                        value={data.from}
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
                        value={data.to}
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
                      {inputFields.length !== 1 ? (
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
                onClick={handleAddExam}
                style={{
                  margin: "2em 0",
                  color: "rgb(255, 255, 255)",
                  background: "rgb(23, 193, 232)",
                }}
                type="button"
              >
                {`إضافة واقعة امتحانية`}
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
            {`إضافة واقعة امتحانية`}
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
              getOptionLabel={(option) => option.ar_name}
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

(ExamsList as any).auth = true;
(ExamsList as any).layout = Admin;
export default ExamsList;
