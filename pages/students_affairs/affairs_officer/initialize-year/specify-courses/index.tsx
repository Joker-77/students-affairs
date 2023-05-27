import React, { useEffect, useState } from "react";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import {
  Button,
  FormControl,
  Grid,
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
import Router, { useRouter, withRouter } from "next/router";
import YearsService from "../../../../../Services/SpecYearsService";
import SpecYearsService from "../../../../../Services/SpecYearsService";
import {
  ISpecYear,
  IStudentYear,
} from "../../../../../Models/StudentsYear/IStudentYear";
import PlanService from "../../../../../Services/PlanService";
import {
  IProgramCourseModel,
  IProgramModel,
} from "../../../../../Models/Programs/IProgramModel";
import { toast } from "react-toastify";

const SpcecifyCourses: React.FC<ISpecifyCoursesProps> = () => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // Programs
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState(null);

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

  // Year
  const router = useRouter();
  const [year, setYear] = useState(router.query?.year);

  // handle component route data
  useEffect(() => {
    setYear(router?.query?.year);
  }, [router.query?.year]);

  // handle component api data
  useEffect(() => {
    PlanService.GetAll()
      .then((programs) => {
        console.log("Program", programs);
        CourseService.GetAll()
          .then((courses) => {
            SpecialityService.GetAll()
              .then((specs) => {
                setPrograms(programs.result as IProgramModel[]);
                setCourses(courses.result as ICourseModel[]);
                setSpecialities(specs.result as ISpecialityModel[]);
                courses.result.length > 0 && setCourse(course.result[0].id);
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  // handle change speciality
  const [loadSpecYear, setLoadSpecYear] = useState(false);
  const changeSpec = (e) => {
    setLoadSpecYear(true);
    setSpec(e.target.value);
    SpecYearsService.GetWhereSpeciality(e.target.value)
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

  // handle add coursse to program
  const handleAddCourse = () => {
    const payLoad = {
      program_id: program,
      year_id: specYear,
      edu_year_id: year,
      course_id: course,
      semester: semester,
    };
    console.clear();
    console.log(payLoad);
    PlanService.AddCourse(payLoad)
      .then((result) => {
        if (result.success) {
          toast.success(translate("Course Added To Plan Successfully"));
        }
      })
      .catch((error) => {});
  };

  const handleShowCourses = () => {};
  // handle routing back
  const handleBack = (e) => {
    e.preventDefault();
    Router.push("/students_affairs/affairs_officer/initialize-year");
  };
  // handle added courses to program
  // Courses
  const [ProgramCourses, setProgramCourses] =
    React.useState<IProgramCourseModel[]>(null);

  // handle program courses
  const changeProgram = (val: number) => {
    setProgram(val);
  };
  return (
    <GridContainer md={12}>
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
          md={10}
          className={classes.typography}
        >
          <Typography variant="h5" component="div">
            {translate("Year Plan")} ({translate("Specify Courses")})
          </Typography>
        </GridItem>
        <GridItem md={2}>
          <Button
            style={{ margin: "5px 5px" }}
            variant="contained"
            className={classes.warning}
            onClick={handleBack}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Back")}
            </span>
            <ArrowBack />
          </Button>
        </GridItem>
      </GridContainer>
      <Grid container md={12} style={{ margin: "2em 0em" }}>
        <GridItem md={2}>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <InputLabel id="demo-simple-select-label">البرنامج</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={program}
              label="programs"
              onChange={(e) => changeProgram(e.target.value)}
            >
              {programs.map((program) => (
                <MenuItem key={program.id} value={program.id}>
                  {program.name}
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
            onClick={handleShowCourses}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Show Courses")}
            </span>
            <ArrowBack />
          </Button>
        </GridItem>
      </Grid>
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
