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
import EduYearService from "../../../../Services/EduYearService";
import ExamService from "../../../../Services/ExamService";
import YearsService from "../../../../Services/SpecYearsService";
import SpecialityService from "../../../../Services/SpecialityService";
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
const ExamSchedule: React.FC<IExamsListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const times = DateHelper.getQuarterHourTimes();
  console.log(times);
  // Programs
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState(null);

  // Edu Year
  const [eduYears, setEduYears] = useState([]);
  const [eduYear, setEduYear] = useState(null);

  const [years, setYears] = useState<IStudentYear[]>();
  const [year, setYear] = useState<number | undefined>(null);
  const [speciality, setSpeciality] = useState(1);
  const [specialities, SetSpecialities] = useState<any>([]);
  const [spec, setSpec] = useState(null);

  // Exam Type
  const [examsTypes, setExamsType] = useState([
    {
      label: "مذاكرة",
      value: "مذاكرة",
    },
    {
      label: "امتحان",
      value: "امتحان",
    },
  ]);
  const [examType, setExamType] = useState(null);

  // Years ( Speciality Year)
  const [specYears, setSpecYears] = useState([]);
  const [specYear, setSpecYear] = useState(null);
  const [loadSpecYear, setLoadSpecYear] = useState(false);

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

  useEffect(() => {
    EduYearService.GetYears(`${new Date().getFullYear()}`)
      .then((resp) => {
        let result = resp.result;
        if (result.length > 0) setLatestYear(result[0]);
        console.log(result[0].year);
        EduYearService.checkYear(result[0]?.year)
          .then((response) => {
            console.log("response", response);
            if (response?.success) {
              EduYearService.InitYears({
                year: latestYear.year,
                type: value,
              })
                .then((response) => {
                  console.clear();
                  console.log(response);
                  let result = response?.result;
                })
                .catch((error) => {});
            } else {
              toast.success("السنة موجودة");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {});
    SpecialityService.GetAll()
      .then((response) => {
        if (response.result.length > 0) {
          console.log(response.result);
          YearsService.GetWhereSpeciality(response.result[0].id)
            .then((res) => {
              console.log(res.result);
              if (res.result.length > 0) {
                let specs = response.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                let initYears = res.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                SetSpecialities(specs);
              }
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {});
  }, []);

  const changeProgram = (val: number) => {
    setProgram(val);
  };

  const changeEduYear = (val: number) => {
    setEduYear(val);
  };

  const changeSpec = (e) => {
    setSpeciality(e);
    setLoadSpecYear(true);
    YearsService.GetWhereSpeciality(e)
      .then((response) => {
        if (response.result && response.result.length > 0) {
          console.clear();
          console.log(response.result);
          let _data: ISpecYear[] = response.result.map((e) => {
            return {
              id: e.id,
              en_name: e.en_name,
              ar_name: e.ar_name,
              speciality_id: e.speciality_id,
            };
          });
          setSpecYears(_data);
          setSpecYear(_data[0].id);
        } else {
          setSpecYears([]);
          setSpecYear(null);
        }
        setLoadSpecYear(false);
      })
      .catch((err) => {
        setSpecYears([]);
        setSpecYear(null);
        setLoadSpecYear(false);
      });
  };
  // ------------------------

  const [data, setData] = React.useState(null);

  const [semester, setSemester] = React.useState("1");
  const changeExamType = (val) => {
    setExamType(val);
  };
  const changeSemester = (val) => {
    setSemester(val);
    ExamService.schedule(program, eduYear, examType, spec, val)
      .then((resp) => {
        setData(resp.result);
      })
      .then((e) => console.log(e));
  };
  const semesters = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
  ];
  return (
    <GridContainer md={12}>
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
          <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
          <FormControl fullWidth variant="filled">
            <RSelect
              defaultValue={speciality}
              placeholder={"اختيار الاختصاص"}
              isSearchable={true}
              options={specialities}
              onChange={(e) => changeSpec(e.id)}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">السنة</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={spec}
              label="Single select"
              placeholder={"اختيار السنة"}
              isSearchable={true}
              options={specYears}
              isDisabled={loadSpecYear}
              onChange={(e) => setSpec(e.id)}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">نوع الواقعة</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              defaultValue={examType}
              placeholder={"اختيار الواقعة"}
              isSearchable={true}
              options={examsTypes}
              onChange={(e) => changeExamType(e.value)}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">الفصل</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              defaultValue={semester}
              placeholder={"اختيار الفصل"}
              isSearchable={true}
              options={semesters}
              onChange={(e) => changeSemester(e.value)}
              getOptionLabel={(option) => option.label}
              getOptionValue={(option) => option.value}
            />
          </FormControl>
        </GridItem>
      </Grid>
    </GridContainer>
  );
};

(ExamSchedule as any).auth = true;
(ExamSchedule as any).layout = Admin;
export default ExamSchedule;
