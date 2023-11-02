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
import { Add, ArrowBack, Backspace, ZoomIn } from "@material-ui/icons";
import PlanCourses from "../planCourses";
import CourseService from "../../../../../Services/CourseService";
import { ICourseModel } from "../../../../../Models/Courses/CourseModel";
import SpecialityService from "../../../../../Services/SpecialityService";
import { ISpecialityModel } from "../../../../../Models/ApiResponse/SpecialityModel";
import Router, { useRouter, withRouter } from "next/router";
import YearsService from "../../../../../Services/SpecYearsService";
import SpecYearsService from "../../../../../Services/SpecYearsService";
import { default as RSelect } from "react-select";

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
  const [year, setYear] = useState(router.query?.year) as string;
  const [eduYear, setEduYear] = useState(router.query?.eduYear) as string;

  // handle component route data
  useEffect(() => {
    setYear(router?.query?.year);
    setEduYear(router?.query?.eduYear);
  }, [router.query?.year, router.query?.eduYear]);

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
    setSpec(e);
    SpecYearsService.GetWhereSpeciality(e)
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
    PlanService.AddCourse(payLoad)
      .then((result) => {
        if (result.success) {
          toast.success(translate("Course Added To Plan Successfully"));
          PlanService.GetProgramCourses(program, specYear, year)
            .then((resp) => {
              if (resp.success) {
                setProgramCourses(resp.result);
              }
            })
            .catch((err) => {});
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // handle routing back
  const handleBack = (e) => {
    e.preventDefault();
    Router.push("/students_affairs/affairs_officer/initialize-year");
  };
  // handle added courses to program
  // Courses
  const [programCourses, setProgramCourses] = React.useState<any>([]);

  const getProgramCourses = () => {
    if (year && specYear && program) {
      PlanService.GetProgramCourses(program, specYear, year)
        .then((resp) => {
          if (resp.success) {
            setProgramCourses(resp.result);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("يجب تحديد البرنامج والسنة والاختصاص");
    }
  };
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
            {translate(`You're in the year`) + ` ${eduYear}`}
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
            {/* <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={program}
              label="programs"
              onChange={(e) => changeProgram(e.target.value)}
            >
              {programs?.map((program) => (
                <MenuItem key={program.id} value={program.id}>
                  {program.name}
                </MenuItem>
              ))}
            </Select> */}
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">المقرّر</InputLabel>
          <FormControl fullWidth variant="filled" size="small" size="small">
            <RSelect
              style={{ zIndex: 99 }}
              defaultValue={course}
              label="Single select"
              placeholder={"اختيار مقرر"}
              isSearchable={true}
              options={courses}
              onChange={(e) => {
                setCourse(e.id);
              }}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
            {/* <Select
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
            </Select> */}
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              style={{ zIndex: 99 }}
              defaultValue={spec}
              label="Single select"
              placeholder={"اختيار الاختصاص"}
              isSearchable={true}
              options={specialities}
              onChange={(e) => {
                changeSpec(e.id);
              }}
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
              isDisabled={loadSpecYear}
              options={specYears}
              onChange={(e) => {
                setSpecYear(e.id);
              }}
              getOptionLabel={(option) => option.ar_name}
              getOptionValue={(option) => option.id}
            />
            {/* <Select
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
            </Select> */}
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <InputLabel id="demo-simple-select-label">الفصل</InputLabel>
          <FormControl fullWidth variant="filled" size="small">
            <RSelect
              defaultValue={semester}
              label="Single select"
              placeholder={"اختيار الفصل"}
              isSearchable={true}
              options={semesters}
              onChange={(e) => setSemester(e.id)}
              getOptionLabel={(option) => option.value}
              getOptionValue={(option) => option.id}
            />
            {/* <Select
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
            </Select> */}
          </FormControl>
        </GridItem>
        <GridItem md={2}>
          <Button
            style={{ margin: "20px 5px" }}
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
            onClick={getProgramCourses}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Show Courses")}
            </span>
            <ZoomIn />
          </Button>
        </GridItem>
      </Grid>
      <GridContainer md={12}>
        <GridItem md={12} style={{ margin: "1em 0 0 0" }}>
          <PlanCourses
            nofilter={false}
            type="courses"
            key={"Plan Courses"}
            programCourses={programCourses}
          />
        </GridItem>
      </GridContainer>
    </GridContainer>
  );
};

(SpcecifyCourses as any).layout = Admin;
(SpcecifyCourses as any).auth = false;
export default SpcecifyCourses;
