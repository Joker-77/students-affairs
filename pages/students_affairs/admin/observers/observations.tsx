import { useState, useEffect } from "react";
import Admin from "../../../../layouts/Admin";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { FieldArray } from "formik";
import SuiButton from "../../../../components/SuiButton";
import React from "react";
import ActionTable from "../../../../components/MaterialTable/ActionTable";
import Placeholder from "../../../../Utility/Placeholders";
import AssignObserversToHall from "../../../../components/AssignObserversToHall";
import * as Yup from "yup";
import EducationalYearService from "../../../../Services/EducationalYearService";
import { IEducationalYearModel } from "../../../../Models/EducationalYearModel";
import ExamHallsService from "../../../../Services/ExamHallsService";

interface IObservationsProps { }

const Observations: React.FC<IObservationsProps> = () => {
    const [eduYear, setEduYear] = useState(null);
    const today = new Date();
    const todayStr = today.getDate().toString().padStart(2, "0") + "/" +
        (today.getMonth() + 1).toString().padStart(2, "0") + "/" +
        today.getFullYear();
    const { translate } = useTranslation();
    const [examDate, setExamDate] = useState(todayStr);

    const [showAssignObservers, setshowAssignObservers] = React.useState(false);
    const setShow = () => {
        setshowAssignObservers(!showAssignObservers);
    };

    const handleDateChange = (event) => {
        setExamDate(event.target.value);
    };

    const handleShowExams = (event) => {
        if (eduYear) {
            setInitialLoad(false);
            let formattedExamDate = `${examDate.split("/")[2]}-${examDate.split("/")[1]}-${examDate.split("/")[0]}}`
            ExamHallsService.GetAll(eduYear.id, formattedExamDate)
                .then((res) => {
                    console.log(res.result);
                    setHalls(res.result);
                })
                .catch((error) => {
                    console.error("error", error);
                });
            }
        }
    
        /*useEffect(() => {
            if (eduYear) {
                let formattedExamDate = `${examDate.split("/")[2]}-${examDate.split("/")[1]}-${examDate.split("/")[0]}}`
                ExamHallsService.GetAll(eduYear.id, formattedExamDate)
                    .then((res) => {
                        console.log(res.result);
                        setHalls(res.result);
                    })
                    .catch((error) => {
                        console.error("error", error);
                    });
            }
        }, [examDate]);*/
    

    useEffect(() => {
        if (eduYear && !showAssignObservers) {
            let formattedExamDate = `${examDate.split("/")[2]}-${examDate.split("/")[1]}-${examDate.split("/")[0]}}`
            ExamHallsService.GetAll(eduYear.id, formattedExamDate)
                .then((res) => {
                    console.log(res.result);
                    setHalls(res.result);
                })
                .catch((error) => {
                    console.error("error", error);
                });
        }
    }, [showAssignObservers]);

    const handleAddObserver = (data) => {
        setHall(data);
        setshowAssignObservers(true);
    }

    const handleClose = () => {
        setshowAssignObservers(false);
    }

    const handleAddObserverSubmit = (values, submitting) => {}

    const [loading, setLoading] = useState(false);
    const [halls, setHalls] = useState([]);
    const [hall, setHall] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);
    /************** LOADING DATA ***************/
    useEffect(() => {
        EducationalYearService.GetAll()
            .then((res) => {
                let edu_year = (res.result as IEducationalYearModel[]).slice(0)[0];
                setEduYear(edu_year);
                ExamHallsService.GetAll(edu_year?.id, examDate)
                    .then((res) => {
                        console.log("Exam Halls:");
                        console.log(res.result);
                        setHalls(res.result);
                    })
                    .catch((error) => {
                        console.error("error", error);
                    });
            })
            .catch((error) => {
                console.error("error", error);
        });
    }, []);

    const addObserverScheme = Yup.object().shape({
        employee: Yup.number().required(translate("{0} is required", "Observer")),
    });

    let columns = [
        {
            title: translate("Exam Halls Ids"),
            field: "exam_halls_ids",
            hidden: true,
        },
        {
            title: translate("Hall Id"),
            field: "hall",
            hidden: true,
        },
        {
            title: translate("Hall"),
            field: "hallName",
        },
        {
            title: translate("From"),
            field: "from",
        },
        {
            title: translate("To"),
            field: "to",
        },
        {
            title: translate("Exams details"),
            field: "examsDetails",
        },
        {
            title: translate("Number of observers"),
            field: "observers",
        },
    ];

    const renderHalls = () => {
        if (halls != null && halls.length > 0) {
            let data = halls;
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
                            style={{ margin: 5 }}
                            color="primary"
                        >
                            {translate("Assign Observers")}
                        </SuiButton>
                    ),
                    onClick: (evt, data) => handleAddObserver(data),
                },
            ];
            return (
                <div>
                    <ActionTable
                        Title=""
                        Columns={columns}
                        Data={data.map(item => {
                            return {
                                ...item,
                                hallName: item.hall.name,
                                from: item.timePeriod.slice(11, 16),
                                to: item.timePeriod.slice(33, 38),
                                examsDetails: item.exams.reduce((acc, exam) => {
                                    return acc ? `${acc} + ${exam.ar_year} ${exam.ar_name} ${exam.code}` : `${exam.ar_year} ${exam.ar_name} ${exam.code}`
                                }, ""),
                            }
                        })}
                        Options={options}
                        Actions={actions}
                    />
                </div>
            );
        } else if (!initialLoad)
        return <Placeholder loading={false} />;
    else return <></>;
      };

    /*return (
        <React.Fragment>
        <Grid container>
            <Grid item md={12} spacing={2}>
                <Grid item md={4}>
                    <Box mb={2}>
                        <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                                {translate("Examination Halls on")}
                            </Typography>
                        </Box>
                        <TextField
                            disabled={false}
                            onChange={handleDateChange}
                            variant="outlined"
                            size="small"
                            type="date"
                            id="exam_date"
                            name="exam_date"
                            //defaultValue={todayStr}
                            value={examDate}
                            //onBlur={handleBlur}
                            //error={Boolean(touched.birth_date && errors.birth_date)}
                            //helperText={touched.birth_date && errors.birth_date}
                            placeholder={translate("Exam date")}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item md={8}>
                    
                </Grid>
            </Grid>
        </Grid>
        {halls && halls.length > 0 ? (
        <Grid container>
            <Grid item md={12} spacing={2}>
                <Grid item md={3}>
                        <Typography component="label" variant="caption">
                            {translate("Hall")}
                        </Typography>
                </Grid>
                <Grid item md={1.5}>
                        <Typography component="label" variant="caption">
                            {translate("From")}
                        </Typography>
                </Grid>
                <Grid item md={1.5}>
                        <Typography component="label" variant="caption">
                            {translate("To")}
                        </Typography>
                </Grid>
                <Grid item md={3}>
                        <Typography component="label" variant="caption">
                            {translate("Exams details")}
                        </Typography>
                </Grid>
                <Grid item md={1.5}>
                        <Typography component="label" variant="caption">
                            {translate("Number of observers")}
                        </Typography>
                </Grid>
                <GridItem md={1.5}>
                    
                </GridItem>
            </Grid>
            <FieldArray
                name="halls"
                render={(arrayHelpers) => (
                    <div>
                        {halls.map((hall, index) => (
                            <div key={index}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <Grid item>
                                            <TextField
                                                disabled={true}
                                                variant="outlined"
                                                size="small"
                                                type="text"
                                                id={`${hall.id}-${hall.hallName}`}
                                                name={`${hall.id}-${hall.hallName}`}
                                                value={hall.hallName}
                                                placeholder={translate("Hall")}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Grid item>
                                            <TextField
                                                disabled={true}
                                                variant="outlined"
                                                size="small"
                                                type="text"
                                                id={`${hall.id}-${hall.from}`}
                                                name={`${hall.id}-${hall.from}`}
                                                value={hall.from}
                                                placeholder={translate("From")}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Grid item>
                                            <TextField
                                                disabled={true}
                                                variant="outlined"
                                                size="small"
                                                type="text"
                                                id={`${hall.id}-${hall.to}`}
                                                name={`${hall.id}-${hall.to}`}
                                                value={hall.to}
                                                placeholder={translate("To")}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Grid item>
                                            <TextField
                                                disabled={true}
                                                variant="outlined"
                                                size="small"
                                                type="text"
                                                id={`${hall.id}-${hall.examsDetails}`}
                                                name={`${hall.id}-${hall.examsDetails}`}
                                                value={hall.examsDetails}
                                                placeholder={translate("Exams details")}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Grid item>
                                            <TextField
                                                disabled={true}
                                                variant="outlined"
                                                size="small"
                                                type="text"
                                                id={`${hall.id}-${hall.observersNumber}`}
                                                name={`${hall.id}-${hall.observersNumber}`}
                                                value={hall.observersNumber}
                                                placeholder={translate("Number of observers")}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Grid item>
                                            <SuiButton
                                                style={{ margin: 5 }}
                                                color="primary"
                                                onClick={handleAddObserver}
                                            >
                                                {translate("Assign Observers")}
                                            </SuiButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </div>
                )}
            />
        </Grid>
            ) : (
                    <React.Fragment>
                        {translate("No exams on this date")}
                    </React.Fragment>
                )}
        </React.Fragment>
    );*/
    return (!showAssignObservers ? (
        <React.Fragment>
        <Grid container>
            <Grid item md={12} spacing={2}>
                <Grid item md={4}>
                    <Box mb={2}>
                        <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                                {`${translate("Educational year")}: ${eduYear?.year}`}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <Box mb={2}>
                        <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                                {translate("Examination Halls on")}
                            </Typography>
                        </Box>
                        <TextField
                            disabled={false}
                            onChange={handleDateChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="exam_date"
                            name="exam_date"
                            //defaultValue={todayStr}
                            value={examDate}
                            //onBlur={handleBlur}
                            //error={Boolean(touched.birth_date && errors.birth_date)}
                            //helperText={touched.birth_date && errors.birth_date}
                            placeholder={translate("Exam date")}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item md={4}>
                        <SuiButton
                            style={{ minWidth: 100, marginRight: ".2em", marginTop: "1.5em" }}
                            color={"primary"}
                            onClick={handleShowExams}
                        >
                            {translate("Show Exams")}
                        </SuiButton>
                    </Grid>
                    <Grid item md={4}>

                    </Grid>
            </Grid>
        </Grid>
        {renderHalls()}
        </React.Fragment>
    ) : (
            <AssignObserversToHall
              setShow={setShow}
              hall={hall}
              formScheme={addObserverScheme}
              examDate={`${examDate.split("/")[2]}-${examDate.split("/")[1]}-${examDate.split("/")[0]}}`}
            />
          )
    );
};

(Observations as any).auth = true;
(Observations as any).layout = Admin;

export default Observations;