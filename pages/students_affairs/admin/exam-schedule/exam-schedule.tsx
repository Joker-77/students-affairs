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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  IconButton,
} from "@material-ui/core";
import { Close, Description } from "@material-ui/icons";
import GridItem from "../../../../components/Grid/GridItem";
import PlanService from "../../../../Services/PlanService";
import EduYearService from "../../../../Services/EduYearService";
import ExamService from "../../../../Services/ExamService";
import YearsService from "../../../../Services/SpecYearsService";
import SpecialityService from "../../../../Services/SpecialityService";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
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
import { getExamToPrint } from "../../../../Helpers/exam-print.js";

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
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState(null);
  const tableRef = React.useRef();
  const [disable, setDisable] = React.useState(true);
  const [semester, setSemester] = React.useState("1");
  const [deleteId, setDeleteId] = React.useState(null);
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const handleConfirmOpen = (data) => {
    setDeleteId(data.id);
    setConfirmDelete(true);
  };

  const handleCloseConfirmDialog = () => {
    setDeleteId(null);
    setConfirmDelete(false);
  };

  const ConfirmDialog = ({ id, show, handleClose, handleDeleteExam }) => (
    <div>
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography>{`هل تريد تأكيد حذف الواقعة`}</Typography>
        </DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            {translate("Cancel")}
          </Button>
          <Button
            onClick={() => handleDeleteExam(id)}
            color="primary"
            variant="contained"
          >
            {translate("Confirm")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  const changeExamType = (val) => {
    setExamType(val);
  };
  const changeSemester = (val) => {
    setSemester(val);
    setLoading(true);
    if (program && eduYear && examType && spec && val)
      ExamService.schedule(program, eduYear, examType, spec, val)
        .then((resp) => {
          let _dd = resp.map((e) => {
            return {
              ...e,
              date: DateHelper.getArabicDatefromDate(e.date),
              type: examType,
              time: `${e.to}-${e.from}`,
            };
          });
          setData(_dd);
          console.log(_dd);
          setDisable(false);
          setLoading(false);
        })
        .then((e) => {
          console.log(e);
          setLoading(false);
        });
    else toast.error("يجب اختيار كافة المعلومات");
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
  let columns = [
    {
      title: translate("Id"),
      field: "id",
      hidden: true,
    },
    {
      title: "اليوم والتاريخ",
      field: "date",
    },
    {
      title: "رمز المقرّر",
      field: "course.code",
    },
    {
      title: "نوع الامتحان",
      field: "type",
    },
    {
      title: "اسم المقرّر",
      field: "course.ar_name",
    },
    {
      title: "التوقيت",
      field: "time",
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
              };
            })}
            Options={options}
            Actions={actions}
          />
        </div>
      );
    } else return <Placeholder loading={false} />;
  };
  const print = () => {
    if (data) {
      const printWindow = window.open("", "_blank");
      let _eduYear = eduYears.filter((e) => e.id == eduYear)[0].year;
      let _spec = specYears.filter((e) => e.id == spec)[0].ar_name;
      printWindow.document.write(
        getExamToPrint(data, semester, _eduYear, _spec)
      );
      setTimeout(() => printWindow.print(), 2500);
    }
  };
  const handleDeleteExam = (id) => {
    setLoading(true);
    setConfirmDelete(false);
    ExamService.delete(id)
      .then((response) => {
        toast.success("تم حذف الواقعة بنجاح");
        let _data = (data as Array<any>).filter((item) => {
          return item.id != deleteId;
        });
        setData(_data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
      <ConfirmDialog
        key={"Confirm Delete Exam"}
        id={deleteId}
        show={confirmDelete}
        handleClose={handleCloseConfirmDialog}
        handleDeleteExam={handleDeleteExam}
      />
    </GridContainer>
  );
};

(ExamSchedule as any).auth = true;
(ExamSchedule as any).layout = Admin;
export default ExamSchedule;
