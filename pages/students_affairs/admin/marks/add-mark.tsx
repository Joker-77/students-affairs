import React, { useEffect, useState } from 'react'
import GridContainer from '../../../../components/Grid/GridContainer';
import { FormControl, MenuItem, OutlinedInput, InputLabel, Select, Table, TableHead, TableCell, TableBody, TableRow, Card } from '@material-ui/core';
import GridItem from 'components/Grid/GridItem.js';
import ExamService from '../../../../Services/ExamService';
import PlanService from '../../../../Services/PlanService';
import EduYearService from '../../../../Services/EduYearService';
import MarkService from '../../../../Services/MarkService';

interface IAddMarkProps { }
export const AddMark: React.FC<IAddMarkProps> = () => {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState();

    const [eduYears, setEduYears] = useState([]);
    const [selectedEduYear, setEduYear] = useState(null);

    // Programs
    const [programs, setPrograms] = useState([]);
    const [program, setProgram] = useState(null);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel ?.current ?.offsetWidth);
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
            }).catch((e) => { });
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
            .catch((error) => { });
    };
    const changeCourse = (id) => {
        setCourse(id);
        MarkService.GetAllExams(id, selectedEduYear).then(e => {
            console.clear();
            console.log(e.result);
            setRows(e.result);
        }).catch(e => { })
    };
    const changeProgram = (id) => {
        setProgram(id);
    };
    const handleChangeCourse = () => { }
    return <GridContainer>
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
                        {programs ?.map((program) => (
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
                        {eduYears ?.map((year) => (
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
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>نوع الواقعة</TableCell>
                        <TableCell style={{ textAlign: 'center', fontWeight: 'bold' }}>تاريخ الواقعة</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 && rows.map(row => <TableRow>
                            <TableCell style={{ textAlign: 'center', background: 'lightgrey' }}>{row.evaluatio_method_name}</TableCell>
                            <TableCell style={{ textAlign: 'center', background: 'lightblue' }}>{row.date.split('T')[0]}</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </GridContainer>
        <Card style={{ padding: "1em 4em", width: '100%', margin: "5px 0px" }}>
            <GridContainer md={12} style={{ padding: '0', marginTop: '1em' }}>
            </GridContainer>
        </Card>
    </GridContainer>
}