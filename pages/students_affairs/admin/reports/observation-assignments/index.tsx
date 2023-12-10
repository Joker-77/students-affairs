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
import { getObservationAssignments } from "../../../../../Helpers/observation-assignments";

interface IObservationAssignmentsProps {}

const ObservationAssignments: React.FC<IObservationAssignmentsProps> = ({}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (startDate && endDate) setDisable(false);
    else setDisable(true);
  }, [startDate, endDate]);
  // ------------------------
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(null);
  const [toPrint, setToPrint] = React.useState(null);
  
  const print = () => {
    getAssignments().then((toPrint) => {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        getObservationAssignments(toPrint, startDate, endDate, DateHelper.getCurrentDate())
      );
      setTimeout(() => printWindow.print(), 2500);
      printWindow.document.close();
      printWindow.focus();
    })
    .catch((e) => {
        console.log(e);
      });
  };

  const changeStart = (e) => {
    setStartDate(e);
  };

  const changeEnd = (e) => {
    setEndDate(e);
  };

  const getAssignments = async () => {
    let st = `${startDate.split("/")[1]}/${startDate.split("/")[0]}/${
      startDate.split("/")[2]
    }`;
    let en = `${endDate.split("/")[1]}/${endDate.split("/")[0]}/${
      endDate.split("/")[2]
    }`;
    return await ExamService.observations(st, en)
      .then((resp) => {
        let toP = resp.map((item) => {
          return {
            ...item,
            date: DateHelper.getArabicDatefromDate(item.date),
            from: `${DateHelper.getTimeOfSpecificDate(item.from)}`,
            to: `${DateHelper.getTimeOfSpecificDate(item.to)}`,
          };
        });
        return toP;
      })
      .catch((e) => console.error(e));
  };

  return (
    <GridContainer md={12}>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
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
        <GridItem md={1}>
          <SuiButton
            style={{ minWidth: 100, marginTop: "1.5em" }}
            color={"primary"}
            onClick={print}
            disabled={disable}
          >
            طباعة التكاليف
          </SuiButton>
        </GridItem>
        </Grid>
    </GridContainer>
  );
};

(ObservationAssignments as any).auth = true;
(ObservationAssignments as any).layout = Admin;
export default ObservationAssignments;
