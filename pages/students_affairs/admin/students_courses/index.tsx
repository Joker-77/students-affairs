import React, { useState, useEffect } from "react";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import GridContainer from "../../../../components/Grid/GridContainer.js";
import GridItem from "../../../../components/Grid/GridItem.js";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { useRouter } from "next/router";
import CourseService from "../../../../Services/CourseService";
import StudentsImportService from "../../../../Services/StudentsImportService";
import EduYearService from "../../../../Services/EduYearService";
import SpecialityService from "../../../../Services/SpecialityService";
import SpecYearsService from "../../../../Services/SpecYearsService";
import StudentListCourses from "./list-students-course";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
interface IStudentCoursesProps {}
const StudentCourses: React.FC<IStudentCoursesProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();

  // Confirm Lock
  const [confirm, setConfirm] = React.useState(false);
  const [lockMarks, setLockMarks] = React.useState(false);
  const handleShowConfirmLock = () => {
    setConfirm(true);
  };
  const handleCloseConfirmLock = () => {
    setConfirm(false);
  };
  const handleLock = () => {};
  // Lock Dialog
  const ConfirmDialog = () => (
    <div>
      <Dialog
        open={confirm}
        onClose={handleCloseConfirmLock}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {translate("Delete a course")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {translate("Are you sure you want to delete this course")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLock}>{translate("Yes")}</Button>
          <Button onClick={handleCloseConfirmLock} autoFocus>
            {translate("No")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [eduYears, setEduYears] = useState([]);
  const [years, setYears] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([]);
  const [specialities, setSpecialities] = React.useState([]);

  const [selectedEduYear, setEduYear] = useState(null);
  const [selectedYear, setYear] = useState(null);
  const [selectedStudent, setStudent] = useState(null);
  const [selectedCourse, setCourse] = useState(null);
  const [selectedSpeciality, setSpeciality] = useState(null);
  const [loadSpecYears, setloadSpecYears] = useState(false);
  const [loadStuds, setloadStuds] = useState(false);
  const handleCreate = () => {
    let ids = studentCourses.map((e) => e.edu_course?.course?.id);
    console.log(ids);
    console.log(selectedCourse);
    if (ids.includes(selectedCourse)) {
      toast.error("المقرر موجود ضمن مقرّرات الطالب");
    } else {
      let data = new FormData();
      alert(selectedStudent);
      alert(selectedEduYear);
      alert(selectedCourse);
      data.append("student_id", selectedStudent);
      data.append("edu_year_id", selectedEduYear);
      data.append("edu_course_id", selectedCourse);
      StudentsImportService.AddStudentCourss(data)
        .then((e) => {
          toast.success("تمت إضافة المقرر بنجاح");
        })
        .catch((e) => toast.error(e.message));
    }
  };

  const changeSpeciality = (id) => {
    setSpeciality(id);
    setloadSpecYears(true);
    SpecYearsService.GetWhereSpeciality(id)
      .then((resp) => {
        setYears(resp.result);
        setloadSpecYears(false);
      })
      .catch((er) => {});
  };

  const changeCourse = (id) => {
    setCourse(id);
  };
  const changeStudent = (id) => {
    setStudent(id);
    if (selectedEduYear) {
      StudentsImportService.GetStudentCourses(id, selectedEduYear)
        .then((resp) => {
          setStudentCourses(resp.result);
        })
        .catch((e) => {});
    }
  };
  const changeEduYear = (id) => {
    setEduYear(id);
  };
  const changeYear = (id) => {
    setYear(id);
    StudentsImportService.GetAllImported(id, selectedEduYear)
      .then((resp) => {
        console.clear();
        console.log(resp);
        setStudents(resp.result);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    CourseService.GetAll()
      .then((res) => {
        EduYearService.GetYears("")
          .then((years) => {
            SpecialityService.GetAll()
              .then((specs) => {
                setSpecialities(specs.result);
              })
              .catch((err) => {});
            setEduYears(years.result as ICourseModel[]);
          })
          .catch((error) => {
            console.error("error", error);
          });
        setCourses(res.result as ICourseModel[]);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  return (
    <GridContainer>
      <GridContainer md={12}>
        <GridItem
          style={{ margin: "-1em 0 1em 0" }}
          md={12}
          className={classes.typography}
        >
          <Typography variant="h5" component="div">
            {`مقررات الطالب`}
          </Typography>
        </GridItem>
      </GridContainer>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">
              السنة الدراسية
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedEduYear}
              label="eduYears"
              onChange={(e) => changeEduYear(e.target.value)}
            >
              {eduYears?.map((year) => (
                <MenuItem key={year.id} value={year.id}>
                  {year.year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">الاختصاصات</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedSpeciality}
              label="specs"
              onChange={(e) => changeSpeciality(e.target.value)}
            >
              {specialities?.map((spec) => (
                <MenuItem key={spec.id} value={spec.id}>
                  {spec.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">السنوات</InputLabel>
            <Select
              disabled={loadSpecYears}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedYear}
              label="specs"
              onChange={(e) => changeYear(e.target.value)}
            >
              {years?.map((specYear) => (
                <MenuItem key={specYear.id} value={specYear.id}>
                  {specYear.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel id="demo-simple-select-label">الطالب</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStudent}
              label="students"
              onChange={(e) => changeStudent(e.target.value)}
            >
              {students.map((st) => (
                <MenuItem key={st.id} value={st.id}>
                  {`${st.candidate.person?.first_name} ${st.candidate.father?.first_name} ${st.candidate.person?.last_name}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">المقرّر</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCourse}
              label="courses"
              onChange={(e) => changeCourse(e.target.value)}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem>
          <Button
            style={{ margin: "0px 5px" }}
            disabled={false}
            variant="contained"
            className={classes.submitBtn}
            onClick={handleCreate}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("إضافة مقرر")}
            </span>
            <AddBox />
          </Button>
        </GridItem>
      </Grid>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        {studentCourses && <StudentListCourses courses={studentCourses} />}
      </Grid>
    </GridContainer>
  );
};
(StudentCourses as any).auth = true;
(StudentCourses as any).layout = Admin;
export default StudentCourses;
