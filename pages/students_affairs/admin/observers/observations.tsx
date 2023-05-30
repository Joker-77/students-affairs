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
import AssignObserversToHallModal from "../../../../components/Modals/AssignObserversToHall";

interface IObservationsProps { }

const Observations: React.FC<IObservationsProps> = () => {
    const today = new Date();
    const todayStr = today.getFullYear() + "-" + 
                     (today.getMonth() + 1).toString().padStart(2, "0") + "-" +
                     today.getDate().toString().padStart(2, "0");
    const { translate } = useTranslation();
    const [openAddObservers, setOpenAddObservers] = useState(false);
    const [examDate, setExamDate] = useState(todayStr);

    const handleDateChange = (event) => {
        setExamDate(event.target.value);
    };

    useEffect(() => {

    }, [examDate]);

    const handleAddObserver = (data) => {
        setHall(data);
        setOpenAddObservers(true);
    }

    const handleClose = () => {
        setOpenAddObservers(false);
    }

    const hanldeAddObserverSubmit = (values, submitting) => {}

    const [loading, setLoading] = useState(false);
    const [halls, setHalls] = useState([]);
    const [hall, setHall] = useState(null);
    /************** LOADING DATA ***************/
    useEffect(() => {
        setHalls([{
            id: 1,
            hallName: "قاعة 1",
            from: "09:30",
            to: "11:30",
            examsDetails: "سنة أولى فرنسي مشترك + سنة ثانية لغات برمجة معلوميات",
            observersNumber: 0,
            examDate: "30/5/2023"
        }]);
    }, []);

    let columns = [
        {
            title: translate("Id"),
            field: "id",
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
            field: "observersNumber",
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
                Data={data}
                Options={options}
                Actions={actions}
              />
              {}
              <AssignObserversToHallModal 
                open={openAddObservers}
                handleClose={handleClose}
                hall={hall}
                submitForm={hanldeAddObserverSubmit}
              />
          {}
            </div>
          );
        } else return <Placeholder loading={false} />;
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
    return (
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
        {renderHalls()}
        </React.Fragment>
    );
};

(Observations as any).auth = true;
(Observations as any).layout = Admin;

export default Observations;