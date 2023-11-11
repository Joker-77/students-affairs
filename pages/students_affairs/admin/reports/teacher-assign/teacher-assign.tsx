import React, { useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import GridContainer from "../../../../../components/Grid/GridContainer";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  IconButton,
} from "@material-ui/core";
import { Close, Description } from "@material-ui/icons";
import GridItem from "../../../../../components/Grid/GridItem";
import PlanService from "../../../../../Services/PlanService";
import EduYearService from "../../../../../Services/EduYearService";
import ExamService from "../../../../../Services/ExamService";
import YearsService from "../../../../../Services/SpecYearsService";
import SpecialityService from "../../../../../Services/SpecialityService";
import { useTranslation } from "../../../../../Utility/Translations/useTranslation";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import ActionTable from "../../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../../Utility/Placeholders";
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
import SuiButton from "../../../../../components/SuiButton";
import { default as RSelect } from "react-select";
import { DateHelper } from "./../../../../../Helpers/DateHelper";
import { getTeacherAssign } from "../../../../../Helpers/teacher-assign-print";
interface IExamsListProps {}
const TeacherAssign: React.FC<IExamsListProps> = ({}) => {
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disable, setDisable] = useState(true);

  // Years ( Speciality Year)
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
  }, []);

  const changeProgram = (val: number) => {
    setProgram(val);
  };

  const changeEduYear = (val: number) => {
    setEduYear(val);
  };

  useEffect(() => {
    if (program && eduYear && startDate && endDate) setDisable(false);
    else setDisable(true);
  }, [program, eduYear, startDate, endDate]);
  // ------------------------
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(null);
  const [toPrint, setToPrint] = React.useState(null);
  const tableRef = React.useRef();

  let columns = [
    {
      title: "اسم المدرّس",
      field: "teacher_name",
    },
    {
      title: "القسم",
      field: "department",
    },
    {
      title: "اسم المقرّر",
      field: "course_name",
    },
    {
      title: "رمز المقرّر",
      field: "course_code",
    },
    {
      title: "التاريخ",
      field: "date",
    },
    {
      title: "التوقيت",
      field: "time",
    },
    {
      title: "السنوات",
      field: "years",
    },
  ];

  const renderExam = () => {
    if (loading) return <Placeholder loading={loading} />;
    if (data != null && data.length > 0) {
      let options = {
        // exportAllData: true,
        // exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
          fontWeight: "bold",
        },
        filtering: false,
        paging: true,
        pageSize: 10,
        maxBodyHeight: "500px",
        search: false,
        tableLayout: "auto",
      };
      let actions = [
        {
          icon: () => (
            <SuiButton
              style={{
                minWidth: 80,
                color: "#dc3545",
                backgroundColor: "transparent",
                border: "1px solid #dc3545",
              }}
              color={"danger"}
            >
              {translate("Delete")}
            </SuiButton>
          ),
          onClick: (evt, data) => handleConfirmOpen(data),
        },
      ];
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={"برنامج الامتحان"}
            Columns={columns}
            Data={data.map((item) => {
              return {
                ...item,
                date: DateHelper.getArabicDatefromDate(item.date),
                time: `${DateHelper.getTimeOfSpecificDate(
                  item.to
                )}-${DateHelper.getTimeOfSpecificDate(item.from)}`,
                years: item.years
                  .map(
                    (e) =>
                      e.ar_name +
                      " " +
                      e.speciality.ar_name +
                      " (" +
                      e.speciality.en_code +
                      ")"
                  )
                  .join(" "),
              };
            })}
            Options={options}
            Actions={null}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  const print = () => {
    if (toPrint) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(getTeacherAssign(toPrint));
      printWindow.document.close();
      printWindow.focus();
      // setTimeout(() => printWindow.print(), 2500);
    }
  };
  const changeStart = (e) => {
    setStartDate(e);
  };
  const changeEnd = (e) => {
    setEndDate(e);
  };
  const show = () => {
    let st = `${startDate.split("/")[1]}/${startDate.split("/")[0]}/${
      startDate.split("/")[2]
    }`;
    let en = `${endDate.split("/")[1]}/${endDate.split("/")[0]}/${
      endDate.split("/")[2]
    }`;
    ExamService.teacherAssignReport(eduYear, st, en)
      .then((resp) => {
        setData(resp);
        let toP = resp.map((item) => {
          let dt = item.years.map((e) => e.speciality.en_code);
          return {
            ...item,
            date: DateHelper.getArabicDatefromDate(item.date),
            from: `${DateHelper.getTimeOfSpecificDate(item.from)}`,
            to: `${DateHelper.getTimeOfSpecificDate(item.to)}`,
            years: item.years.map((e) => e.ar_name)[0],
            specs: dt.filter((ee, index) => dt.indexOf(ee) === index).join(","),
          };
        });
        setToPrint(toP);
        console.log(resp);
      })
      .catch((e) => console.error(e));
  };
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
          <InputLabel id="demo-simple-select-label">
            تاريخ البدء (من)
          </InputLabel>
          <FormControl fullWidth variant="filled">
            <TextField
              value={startDate}
              onChange={(e) => changeStart(e.target.value)}
              type="text"
              size="small"
              variant="outlined"
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">
            تاريخ الانتهاء (إلى)
          </InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <TextField
              value={endDate}
              onChange={(e) => changeEnd(e.target.value)}
              type="text"
              size="small"
              variant="outlined"
            />
          </FormControl>
        </GridItem>
        <GridItem md={3}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={show}
            disabled={disable}
          >
            عرض التكاليف
          </SuiButton>
        </GridItem>
        <GridItem md={3}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={print}
            disabled={disable}
          >
            طباعة البرنامج
          </SuiButton>
        </GridItem>
        <GridItem md={12}>{renderExam()}</GridItem>
      </Grid>
    </GridContainer>
  );
};

(TeacherAssign as any).auth = true;
(TeacherAssign as any).layout = Admin;
export default TeacherAssign;
