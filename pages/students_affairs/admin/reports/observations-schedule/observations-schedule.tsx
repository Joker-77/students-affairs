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
import { getObservProgToPrint } from "../../../../../Helpers/observations-prog-print";

interface IExamsListProps {}
const ObservationsSchedule: React.FC<IExamsListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // ------------------------
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(null);
  const [final, setFinal] = React.useState(null);
  const tableRef = React.useRef();
  const [disable, setDisable] = React.useState(true);

  const load = () => {
    setLoading(true);
    if (startDate && endDate)
      ExamService.getObservSchedule(startDate, endDate)
        .then((resp) => {
          let res = resp.map((dt) => {
            return {
              ...dt,
              date: DateHelper.getArabicDatefromDate(dt.date),
              time: `${dt.to.split("T")[1].split(".")[0].split(":")[0]}:${
                dt.to.split("T")[1].split(".")[0].split(":")[1]
              }-${dt.from.split("T")[1].split(".")[0].split(":")[0]}:${
                dt.from.split("T")[1].split(".")[0].split(":")[1]
              }`,
              code: dt.exams.map((e) => e.course.code).join("/"),
              name: dt.exams
                .map((e) => {
                  let specs = e.year.speciality.en_code;
                  return `${e.course.ar_name} ${e.year.ar_name}:${specs}`;
                })
                .join("/"),
              type: dt.exams.map((e) => e.exam_type).join("/"),
              numbers: dt.exams.map((e) => e.students_num).join("+"),
            };
          });
          let final = Object.groupBy(res, ({ date }) => date);
          setFinal(final);
          setData(res);
          console.clear();
          console.log(final);
          setDisable(false);
          setLoading(false);
        })
        .then((e) => {
          console.log(e);
          setLoading(false);
        });
    else toast.error("يجب اختيار كافة المعلومات");
  };

  let columns = [
    {
      title: "التاريخ",
      field: "date",
    },
    {
      title: "القاعة",
      field: "hall",
    },
    {
      title: "التوقيت",
      field: "time",
    },
    {
      title: "رمز المقرر",
      field: "code",
    },
    {
      title: "اسم المقرر",
      field: "name",
    },
    {
      title: "نوع الامتحان",
      field: "type",
    },
    {
      title: "عدد الطلاب",
      field: "numbers",
    },
  ];
  const renderObservSchedule = () => {
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
      return (
        <div ref={tableRef}>
          <ActionTable
            Title={"برنامج المراقبات الامتحانية"}
            Columns={columns}
            Data={data.map((item) => {
              return {
                ...item,
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
    if (data) {
      const printWindow = window.open("", "_blank");
      let dateAsInt = parseInt(startDate.split("/")[2]);
      let headerDate = `${dateAsInt}-${dateAsInt - 1}`;
      printWindow.document.write(
        getObservProgToPrint(
          data,
          headerDate,
          getFullDateForPrint(startDate),
          getFullDateForPrint(endDate)
        )
      );
      printWindow.document.close();
      printWindow.focus();
      // setTimeout(() => printWindow.print(), 2500);
    }
  };
  const getFullDate = (date) => {
    if (date.split("/").length > 2) {
      return `${("0" + date.split("/")[0]).slice(-2)}-${(
        "0" + date.split("/")[1]
      ).slice(-2)}-${date.split("/")[2]}`;
    } else return "";
  };
  const getFullDateForPrint = (date) => {
    if (date.split("/").length > 2) {
      return `${("0" + date.split("/")[0]).slice(-2)}/${(
        "0" + date.split("/")[1]
      ).slice(-2)}/${date.split("/")[2]}`;
    } else return "";
  };
  const handleStartDateChange = (e) => {
    setStartDate(e);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e);
  };
  return (
    <GridContainer md={12}>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">
            من (تاريخ البدء)
          </InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <TextField
              clearable
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">
            إلى (تاريخ الانتهاء)
          </InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <TextField
              clearable
              value={endDate}
              onChange={(e) => handleEndDateChange(e.target.value)}
              variant="outlined"
              size="small"
            />
          </FormControl>
        </GridItem>
        <GridItem md={3}>
          <SuiButton
            style={{ minWidth: 140, marginTop: "1.5em" }}
            color={"primary"}
            onClick={load}
          >
            عرض البرنامج
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
        <GridItem md={12}>{renderObservSchedule()}</GridItem>
      </Grid>
    </GridContainer>
  );
};

(ObservationsSchedule as any).auth = true;
(ObservationsSchedule as any).layout = Admin;
export default ObservationsSchedule;
