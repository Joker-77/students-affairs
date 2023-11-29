import React, { useEffect, useState } from "react";
import GridContainer from "../../../../components/Grid/GridContainer";
import {
  makeStyles,
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Select,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Card,
  Grid,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import ExamService from "../../../../Services/ExamService";
import PlanService from "../../../../Services/PlanService";
import EduYearService from "../../../../Services/EduYearService";
import MarkService from "../../../../Services/MarkService";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import SpecialityService from "../../../../Services/SpecialityService";
import SpecYearsService from "../../../../Services/SpecYearsService";
import ListStudents from "./list-students";
import StudentsImportService from "../../../../Services/StudentsImportService";

interface IAddMarkProps {}
const AddMark: React.FC<IAddMarkProps> = () => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState();

  const [eduYears, setEduYears] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedEduYear, setEduYear] = useState(null);
  const [selectedYear, setYear] = useState(null);

  // Specialities
  const [specialities, setSpecialities] = React.useState([]);
  const [selectedSpeciality, setSpeciality] = useState(null);

  // Programs
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState(null);

  // Students
  const [students, setStudents] = useState([]);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel?.current?.offsetWidth);
  }, []);

  useEffect(() => {
    PlanService.GetAll()
      .then((programs) => {
        setPrograms(programs.result);
        EduYearService.GetYears("")
          .then((years) => {
            SpecialityService.GetAll()
              .then((specs) => {
                setSpecialities(specs.result);
                setEduYears(years.result);
                setPrograms(programs.result);
              })
              .catch((err) => {});
          })
          .catch((error) => {
            console.error("error", error);
          });
      })
      .catch((e) => {});
  }, []);
  const [loadCourses, setLoadCourses] = useState(false);
  const [rows, setRows] = useState([]);
  const changeEduYear = (id) => {
    setEduYear(id);
    setLoadCourses(true);
    ExamService.GetAllCourses(program, id)
      .then((resp) => {
        setCourses(resp.result);
        setLoadCourses(false);
      })
      .catch((error) => {});
  };
  const [courseName, setCourseName] = useState("");
  const changeCourse = (id) => {
    setCourse(id);
    console.log(courses);
    let course = courses.filter((e) => e.edu_course_id == parseInt(id))[0];
    setCourseName(course.ar_name);
    setExam(null);
    MarkService.GetAllExams(id, selectedEduYear)
      .then((e) => {
        setRows(e.result);
      })
      .catch((e) => {});
  };
  const changeProgram = (id) => {
    setProgram(id);
  };
  const showStudents = () => {
    StudentsImportService.GetAllImported(selectedYear, selectedEduYear)
      .then((resp) => {
        setStudents(resp.result);
      })
      .catch((err) => {});
  };

  const [loadSpecYears, setloadSpecYears] = useState(false);
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
  const changeYear = (id) => {
    setYear(id);
  };
  const [exam, setExam] = useState(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExam((event.target as HTMLInputElement).value);
  };
  const columns = [
    {
      id: 0,
      title: translate("Id"),
      field: "id",
      hidden: true,
    },
    {
      id: 1,
      title: translate("ID Number"),
      field: "number",
    },
    {
      id: 2,
      title: "اسم الطالب",
      field: "name",
    },
  ];
  return (
    <GridContainer>
      <GridContainer md={12}>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">البرنامج</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={program}
              label="program"
              onChange={(e) => changeProgram(e.target.value)}
            >
              {programs?.map((program) => (
                <MenuItem key={program.id} value={program.id}>
                  {program.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
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
            <InputLabel id="demo-simple-select-label">المقرّر</InputLabel>
            <Select
              disabled={loadCourses}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="courses"
              onChange={(e) => changeCourse(e.target.value)}
            >
              {courses.map((course) => (
                <MenuItem
                  key={course.edu_course_id}
                  value={course.edu_course_id}
                >
                  {course.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
      </GridContainer>
      <GridContainer md={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                المعرّف
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                اسم المقرر
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                نوع الواقعة
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                تاريخ الواقعة
              </TableCell>
              <TableCell
                style={{ textAlign: "center", fontWeight: "bold" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow>
                  <TableCell
                    style={{ textAlign: "center", background: "lightgrey" }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", background: "lightgrey" }}
                  >
                    {courseName}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", background: "lightgrey" }}
                  >
                    {row.evaluatio_method_name}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", background: "lightblue" }}
                  >
                    {row.date.split("T")[0]}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center", background: "lightblue" }}
                  >
                    <FormControlLabel
                      value={row.id}
                      onChange={handleChange}
                      checked={row.id == exam}
                      control={<Radio />}
                      label=""
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </GridContainer>
      <Grid container md={12} style={{ padding: "0", marginTop: "3em" }}>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
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
            <InputLabel id="demo-simple-select-label">السنة</InputLabel>
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
          <Button
            style={{ margin: "10px 5px" }}
            variant="contained"
            className={classes.submitBtn}
            onClick={showStudents}
          >
            إظهار طلاب السنة
          </Button>
        </GridItem>
      </Grid>
      <ListStudents exam={exam} type={0} students={students} />
    </GridContainer>
  );
};

export default AddMark;
