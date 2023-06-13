import React, { useEffect, useState } from 'react'
import Admin from 'layouts/Admin.js';
import GridContainer from '../../../../components/Grid/GridContainer';
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
} from "@material-ui/core";
import GridItem from '../../../../components/Grid/GridItem';
import PlanService from '../../../../Services/PlanService';
import CourseService from '../../../../Services/CourseService';
import EduYearService from '../../../../Services/EduYearService';
import ExamService from '../../../../Services/ExamService';
import { useTranslation } from '../../../../Utility/Translations/useTranslation';
import styles from 'assets/jss/nextjs-material-dashboard/views/dashboardStyle.js';
import { type } from '../../../../components/Privilege/Privilege';

interface IExamsListProps { }
const ExamsList: React.FC<IExamsListProps> = ({ }) => {
    const { translate } = useTranslation();
    const useStyles = makeStyles(styles);
    const classes = useStyles();


    // Programs
    const [programs, setPrograms] = useState([]);
    const [program, setProgram] = useState(null);

    // Courses
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(null);

    // Edu Year
    const [eduYears, setEduYears] = useState([]);
    const [eduYear, setEduYear] = useState(null);

    // Exam Type
    const [examsTypes, setExamsType] = useState([]);
    const [examType, setExamType] = useState(null);

    useEffect(() => {
        PlanService.GetAll()
            .then((programs) => {
                EduYearService.GetYears('')
                    .then((eduYears) => {
                        setPrograms(programs.result);
                        setEduYears(eduYears.result);
                    })
                    .catch((err) => {
                        console.error("Error", err);
                    })
            })
            .catch((err) => {
                console.error("Error", err);
            });
    }, []);

    const changeProgram = (val: number) => {
        setProgram(val);
    };

    const changeEduYear = (val: number) => {
        setEduYear(val);
        setLoadCourses(true);
        ExamService.GetAllCourses(program, val.toString()).then(resp => {
            console.log(resp.result)
            setCourses(resp.result);
        }).catch(error => {

        })
        setLoadCourses(false)
    };

    const changeCourse = (val: number) => {
        setCourse(val);
        setLoadExamsType(true);
        let _course = courses.find(e => e.id === val);
        setExamsType(_course.evaluation_methods);
        setLoadExamsType(false);
    }

    const [loadCourses, setLoadCourses] = useState(false);
    const [loadExamsType, setLoadExamsType] = useState(false);

    const [plans, setPlans] = useState([]);
    const changeExamType = (val: number) => {
        let _course = courses.find(e => e.id == course);
        setExamType(val);
        console.clear();
        console.log(courses);
        console.log(_course);
        ExamService.GetAllPlans(program, eduYear, _course.edu_course_id, val.toString())
            .then(resp => setPlans(resp.result))
            .catch(error => { })
    }
    // handle add coursse to program
    const handleAddExam = () => {
        // const payLoad = {
        //   program_id: program,
        //   year_id: specYear,
        //   edu_year_id: year,
        //   course_id: course,
        //   semester: semester,
        // };
        // PlanService.AddCourse(payLoad)
        //   .then((result) => {
        //     if (result.success) {
        //       toast.success(translate("Course Added To Plan Successfully"));
        //       PlanService.GetProgramCourses(program, specYear, year)
        //         .then((resp) => {
        //           if (resp.success) {
        //             setProgramCourses(resp.result);
        //           }
        //         })
        //         .catch((err) => {});
        //     }
        //   })
        //   .catch((error) => {
        //     toast.error(error.message);
        //   });
    };

    const renderPlans = (plans) => {
        if (plans.length > 0) {
            return <>
                <Grid container md={12}>
                    <GridItem md={2}>
                        <h5 style={{ fontWeight: 'bold' }}>السنة</h5>
                    </GridItem>
                    <GridItem md={2}>
                        <h5 style={{ fontWeight: 'bold' }}>الاختصاص</h5>
                    </GridItem>
                    <GridItem md={2}>
                        <h5 style={{ fontWeight: 'bold' }}>الفصل</h5>

                    </GridItem>
                    <GridItem md={2}>
                        <h5 style={{ fontWeight: 'bold' }}>عدد الطلاب </h5>
                        <h5 style={{ fontWeight: 'bold' }}>مستجد | معيد </h5>
                    </GridItem>
                </Grid>
                <Grid container md={12} style={{ margin: "2em 0em" }}>
                    {
                        plans.map(e => (<>
                            <GridItem md={2}>
                                {e.year ?.ar_name}
                            </GridItem>
                            <GridItem md={2}>
                                {e.year ?.speciality ?.ar_name}
                            </GridItem>
                            <GridItem md={2}>
                                {e.semester}
                            </GridItem>
                            <GridItem md={1}>
                                {e.new_students_num} | {e.old_students_num}
                            </GridItem>
                            <GridItem md={2}>
                                <Input type="checkbox" />
                            </GridItem>
                        </>))
                    }
                </Grid>
            </>
        }
        else {
            return <Grid container md={12} style={{
                margin: "2em 0em", display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography style={{ textAlign: 'center' }} variant="h5" component="div">
                    {`لاتوجد بيانات لعرضها`}
                </Typography>
            </Grid>
        }
    }
    return <GridContainer md={12}>
        <GridContainer md={12}>
            <GridItem
                style={{ margin: "-1em 0 1em 0" }}
                md={12}
                className={classes.typography}
            >
                <Typography variant="h5" component="div">
                    {`إضافة واقعة امتحانية`}
                </Typography>
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
                        {programs ?.map((program) => (
                            <MenuItem key={program.id} value={program.id}>
                                {program.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem md={2}>
                <FormControl fullWidth variant="filled" size="small">
                    <InputLabel id="demo-simple-select-label">السنة</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={eduYear}
                        label="specYears"
                        onChange={(e) => changeEduYear(e.target.value)}
                    >
                        {eduYears.map((spYear) => (
                            <MenuItem key={spYear.id} value={spYear.id}>
                                {spYear.year}
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
                            <MenuItem key={course.id} value={course.id}>
                                {course.ar_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem md={2}>
                <FormControl fullWidth variant="filled" size="small" size="small">
                    <InputLabel id="demo-simple-select-label">نوع الواقعة</InputLabel>
                    <Select
                        disabled={loadExamsType}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={examType}
                        label="examTypes"
                        onChange={(e) => changeExamType(e.target.value)}
                    >
                        {examsTypes.map((exam) => (
                            <MenuItem key={exam.id} value={exam.id}>
                                {exam.name}
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
                    onClick={handleAddExam}
                >
                    <span style={{ padding: "0px 0px 0px 10px" }}>
                        {translate("Add")}
                    </span>
                    <Add />
                </Button>
            </GridItem>
            {/* <GridItem md={2}>
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
            </GridItem> */}
        </Grid>
        {
            renderPlans(plans)
        }
    </GridContainer>
}

(ExamsList as any).auth = true;
(ExamsList as any).layout = Admin;
export default ExamsList;

