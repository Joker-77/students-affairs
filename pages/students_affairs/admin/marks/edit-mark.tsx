import React, { Component, useState, useEffect } from "react";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import PlanService from "../../../../Services/PlanService";
import EduYearService from "../../../../Services/EduYearService";
import SpecialityService from "../../../../Services/SpecialityService";
import ExamService from "../../../../Services/ExamService";
import MarkService from "../../../../Services/MarkService";
import ListStudents from "./list-students";

interface EditMarkProps {}

export default EditMark = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState();

  const [eduYears, setEduYears] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedEduYear, setEduYear] = useState(null);
  const [selectedYear, setYear] = useState(null);

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
            setEduYears(years.result);
            setPrograms(programs.result);
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
  const [exam, setExam] = useState(null);
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExam((event.target as HTMLInputElement).value);
    ExamService.getMarks(event.target.value)
      .then((resp) => {
        setStudents(resp.result);
      })
      .catch((e) => {});
  };
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
      <ListStudents exam={exam} type={1} students={students} />
    </GridContainer>
  );
};
