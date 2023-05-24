import React, { useEffect, useState } from "react";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Admin from "../../../../../layouts/Admin";
import { useTranslation } from "../../../../../Utility/Translations/useTranslation";
import styles from "../../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Add, ArrowBack, Backspace } from "@material-ui/icons";
import PlanCourses from "../planCourses";
import CourseService from "../../../../../Services/CourseService";
import { ICourseModel } from "../../../../../Models/Courses/CourseModel";
import SpecialityService from "../../../../../Services/SpecialityService";
import { ISpecialityModel } from "../../../../../Models/ApiResponse/SpecialityModel";
import Router from "next/router";
import YearsService from "../../../../../Services/SpecYearsService";
import SpecYearsService from "../../../../../Services/SpecYearsService";
import {
  ISpecYear,
  IStudentYear,
} from "../../../../../Models/StudentsYear/IStudentYear";

interface ISpecifyCoursesProps {}
const SpcecifyCourses: React.FC<ISpecifyCoursesProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [programs, setPrograms] = useState([]);

  // Courses
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);

  // Specialities
  const [specialities, setSpecialities] = useState([]);
  const [spec, setSpec] = useState(null);

  // Semester
  const _sems = [
    {
      id: 1,
      value: "الفصل الأول",
    },
    {
      id: 2,
      value: "الفصل الثاني",
    },
  ];
  const [semesters, setSemesters] = useState(_sems);
  const [semester, setSemester] = useState(null);

  // Years ( Speciality Year)
  const [specYears, setSpecYears] = useState([]);
  const [specYear, setSpecYear] = useState(null);

  useEffect(() => {
    CourseService.GetAll()
      .then((courses) => {
        SpecialityService.GetAll()
          .then((specs) => {
            console.log("Courses", specs.result);
            // setFilteredCourses(res.result as ICourseModel[]);
            setCourses(courses.result as ICourseModel[]);
            setSpecialities(specs.result as ISpecialityModel[]);
            courses.result.length > 0 && setCourse(course.result[0].id);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, []);

  const [loadSpecYear, setLoadSpecYear] = useState(false);
  const changeSpec = (e) => {
    setLoadSpecYear(true);
    setSpec(e.target.value);
    SpecYearsService.GetWhereSpeciality(e.target.value)
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
  const handleAddCourse = () => {};
  const handleBack = (e) => {
    e.preventDefault();
    Router.push("/students_affairs/affairs_officer/initialize-year");
  };
  useEffect(() => {});
  return (
    <GridContainer md={12}>
      <GridItem
        style={{ margin: "-1em 0 1em 0" }}
        md={12}
        className={classes.typography}
      >
        <Typography variant="h5" component="div">
          {translate(`You're in the year`) + ` ${"2022"}`}
        </Typography>
      </GridItem>
      <GridItem
        style={{ margin: "0 0 1em 0" }}
        md={12}
        className={classes.typography}
      >
        <Typography variant="h5" component="div">
          {translate("Year Plan")} ({translate("Specify Courses")})
        </Typography>
      </GridItem>
      <GridContainer md={12}>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">المقرّر</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="courses"
              onChange={(e) => setCourse(e.target.value)}
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={spec}
              label="speciality"
              onChange={changeSpec}
            >
              {specialities.map((spec) => (
                <MenuItem key={spec.id} value={spec.id}>
                  {spec.ar_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel id="demo-simple-select-label">الفصل</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={semester}
              label="speciality"
              onChange={(e) => setSemester(e.target.value)}
            >
              {semesters.map((sem) => (
                <MenuItem key={sem.id} value={sem.id}>
                  {sem.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small">
            <InputLabel id="demo-simple-select-label">السنة</InputLabel>
            <Select
              disabled={loadSpecYear}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={specYear}
              label="specYears"
              onChange={(e) => {
                setSpecYear(e.target.value);
              }}
            >
              {specYears.map((spYear) => (
                <MenuItem key={spYear.id} value={spYear.id}>
                  {spYear.ar_name}
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
            onClick={handleAddCourse}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Add")}
            </span>
            <Add />
          </Button>
        </GridItem>
        <GridItem md={2}>
          <Button
            style={{ margin: "10px 5px" }}
            variant="contained"
            className={classes.submitBtn}
            onClick={handleBack}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Back")}
            </span>
            <ArrowBack />
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer md={12}>
        <GridItem md={12} style={{ margin: "1em 0 0 0" }}>
          <PlanCourses />
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

(SpcecifyCourses as any).layout = Admin;
(SpcecifyCourses as any).auth = false;
export default SpcecifyCourses;
