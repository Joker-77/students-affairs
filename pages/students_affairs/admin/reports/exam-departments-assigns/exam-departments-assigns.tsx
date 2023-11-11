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
import DepartmentsService from "../../../../../Services/DepartmentsService";
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
import { getDepartmentAssign } from "../../../../../Helpers/department-assign-print";
interface IExamsListProps {}
const ExamDepartmentAssign: React.FC<IExamsListProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const times = DateHelper.getQuarterHourTimes();
  console.log(times);
  // Programs
  const [depts, setDepts] = useState([]);
  const [dept, setDept] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disable, setDisable] = useState(true);

  // Years ( Speciality Year)
  useEffect(() => {
    DepartmentsService.GetAll()
      .then((resp) => {
        setDepts(resp.result);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  useEffect(() => {
    if (dept && startDate && endDate) setDisable(false);
    else setDisable(true);
  }, [dept, startDate, endDate]);

  // ------------------------
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isObserv, setIsObserv] = React.useState<boolean>(false);

  const [data, setData] = React.useState(null);
  const [dataObserv, setDataObserv] = React.useState(null);

  const [toPrint, setToPrint] = React.useState(null);
  const [toPrintObserv, setToPrintObserv] = React.useState(null);
  const tableRef = React.useRef();

  let columns = [
    {
      title: "اسم المدرّس",
      field: "teacher_name",
    },
    {
      title: "رمز المقرّر",
      field: "course_code",
    },
    {
      title: "السنوات الدراسية",
      field: "years",
    },
  ];

  let observColumns = [
    {
      title: "اسم المدرّس",
      field: "name",
    },
    {
      title: "عدد المراقبات",
      field: "observation_count",
    },
  ];

  const renderExam = () => {
    if (loading) return <Placeholder loading={loading} />;
    if (isObserv) {
      if (dataObserv != null && dataObserv.length > 0) {
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
              Title={""}
              Columns={observColumns}
              Data={dataObserv}
              Options={options}
              Actions={null}
            />
          </div>
        );
      } else return <Placeholder loading={false} />;
    } else {
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
              Title={""}
              Columns={columns}
              Data={data}
              Options={options}
              Actions={null}
            />
          </div>
        );
      } else return <Placeholder loading={false} />;
    }
  };
  const printObservs = () => {
    if (toPrintObserv) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        getDepartmentAssign(
          toPrintObserv,
          startDate,
          endDate,
          DateHelper.getCurrentDate(),
          dept,
          1
        )
      );
      printWindow.document.close();
      printWindow.focus();
    }
  };
  const print = () => {
    if (toPrint) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        getDepartmentAssign(
          toPrint,
          startDate,
          endDate,
          DateHelper.getCurrentDate(),
          dept,
          0
        )
      );
      printWindow.document.close();
      printWindow.focus();
    }
  };
  const changeStart = (e) => {
    setStartDate(e);
  };
  const changeEnd = (e) => {
    setEndDate(e);
  };
  const show = () => {
    setIsObserv(false);
    let st = `${startDate.split("/")[1]}/${startDate.split("/")[0]}/${
      startDate.split("/")[2]
    }`;
    let en = `${endDate.split("/")[1]}/${endDate.split("/")[0]}/${
      endDate.split("/")[2]
    }`;
    ExamService.DepartmentTeacherAssign(dept, st, en)
      .then((resp) => {
        let result = resp.map((item) => {
          let dt = item.years.map((e) => e.ar_name);
          return {
            ...item,
            years: dt.filter((ee, index) => dt.indexOf(ee) === index).join(","),
          };
        });
        setData(result);
        setToPrint(result);
      })
      .catch((e) => console.error(e));
  };
  const showObserv = () => {
    setIsObserv(true);
    let st = `${startDate.split("/")[1]}/${startDate.split("/")[0]}/${
      startDate.split("/")[2]
    }`;
    let en = `${endDate.split("/")[1]}/${endDate.split("/")[0]}/${
      endDate.split("/")[2]
    }`;
    ExamService.DepartmentObservAssign(dept, st, en)
      .then((resp) => {
        setDataObserv(resp);
        setToPrintObserv(resp);
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
              defaultValue={dept}
              placeholder={"اختيار القسم"}
              isSearchable={true}
              options={depts}
              onChange={(e) => {
                setDept(e.name);
              }}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.name}
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
        <GridItem md={6}>
          <SuiButton
            style={{ minWidth: 100, marginRight: ".2em", marginTop: "1.5em" }}
            color={"primary"}
            onClick={show}
            disabled={disable}
          >
            عرض تكاليف الأساتذة
          </SuiButton>
          <SuiButton
            style={{ minWidth: 100, marginRight: ".2em", marginTop: "1.5em" }}
            color={"primary"}
            onClick={showObserv}
            disabled={disable}
          >
            عرض تكاليف المراقبين
          </SuiButton>
          <SuiButton
            style={{ minWidth: 100, marginRight: ".2em", marginTop: "1.5em" }}
            color={"primary"}
            onClick={print}
            disabled={disable}
          >
            طباعة تكليف الأساتذة
          </SuiButton>
          <SuiButton
            style={{ minWidth: 100, marginRight: ".2em", marginTop: "1.5em" }}
            color={"primary"}
            onClick={printObservs}
            disabled={disable}
          >
            طباعة تكليف المراقبين
          </SuiButton>
        </GridItem>
        <GridItem md={12}>{renderExam()}</GridItem>
      </Grid>
    </GridContainer>
  );
};

(ExamDepartmentAssign as any).auth = true;
(ExamDepartmentAssign as any).layout = Admin;
export default ExamDepartmentAssign;
