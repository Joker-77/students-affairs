import React, { useState } from "react";
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
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { ISpecialityModel } from "../../../../Models/ApiResponse/SpecialityModel";
import { Close } from "@material-ui/icons";
import { IStudentYear } from "../../../../Models/StudentsYear/IStudentYear";
import YearsService from "../../../../Services/SpecYearsService";
import Router from "next/router";
import StudentsImportService from "../../../../Services/StudentsImportService";
import { toast } from "react-toastify";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface InitPlanTabsProps {
  message: string;
  specialties: ISpecialityModel[];
  initYears: IStudentYear[];
  handleChangeEduYear: (value) => void;
  handleChangeSpec: (value) => void;
  latestYear: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const InitPlanTabs: React.FC<InitPlanTabsProps> = ({
  latestYear,
  message,
  specialties,
  initYears,
}) => {
  const [value, setValue] = React.useState(0);
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [year, setYear] = useState<number | undefined>(null);
  const [speciality, setSpeciality] = useState(1);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [years, setYears] = useState<IStudentYear[]>(initYears);
  const [studetnsMsg, setStudentMsg] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChangeEduYear = (event) => {
    setYear(event.target.value);
  };
  const handleChangeSpec = (event) => {
    let _val = event.target.value ?? "";
    if (_val) {
      setDisabled(true);
      setSpeciality(event.target.value);
      YearsService.GetWhereSpeciality(_val)
        .then((response) => {
          let res = response.result?.map((data) => {
            return {
              id: data.id,
              en_name: data.en_name,
              ar_name: data.ar_name,
              code: data.code,
            };
          }) as IStudentYear[];
          console.clear();
          console.log(res);
          setYears(res);
          if (res.length > 0) setYear(res[0].id);
          else setYear(undefined);
          setDisabled(false);
        })
        .catch((error) => {});
    }
  };
  const handleConfirm = () => {
    setOpenConfirmDialog(true);
  };
  const handleConfirmDialog = () => {
    const _payload = {
      edu_year_id: latestYear.id,
      year_id: year,
    };
    StudentsImportService.Import(_payload)
      .then((result) => {
        if (result.success) {
          toast.success(translate("Students Imported Successfully"));
          setOpenConfirmDialog(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSpecifyCourses = (e) => {
    e.preventDefault();
    Router.push({
      pathname:
        "/students_affairs/affairs_officer/initialize-year/specify-courses",
      query: { year: latestYear.id, eduYear: latestYear.year },
    });
  };
  const handleAssignTeachers = (e) => {
    e.preventDefault();
    Router.push({
      pathname:
        "/students_affairs/affairs_officer/initialize-year/assign-teachers",
      query: { year: latestYear.id, eduYear: latestYear.year },
    });
  };
  const ConfirmDialog = ({
    show,
    handleConfirmDialog,
    handleClose,
    studentsMsg,
  }) => {
    return (
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography>هل تريد تأكيد استيراد الطلاب {studentsMsg}</Typography>
        </DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={() => handleClose(false)}>
            <Close />
          </IconButton>
        </Box>
        <DialogActions>
          <Button
            onClick={() => handleClose(false)}
            color="secondary"
            variant="contained"
          >
            {translate("Cancel")}
          </Button>
          <Button
            onClick={handleConfirmDialog}
            color="primary"
            variant="contained"
          >
            {translate("Confirm")}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid
        item
        style={{ margin: "0 0 1em 0" }}
        md={12}
        className={classes.typography}
      >
        <Typography variant="h5" component="div">
          {message}
        </Typography>
      </Grid>
      <Grid item md={12} style={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="استيراد الطلاب" {...tabProps(0)} />
          <Tab label="الخطّة الدرسية" {...tabProps(1)} />
        </Tabs>
      </Grid>
      <Grid item md={12}>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <FormControl fullWidth variant="filled">
                <InputLabel id="demo-simple-select-label">الاختصاص</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={speciality}
                  label="speciality"
                  onChange={handleChangeSpec}
                >
                  {specialties.map((special) => (
                    <MenuItem key={special.id} value={special.id}>
                      {special.ar_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  السنة الدراسية
                </InputLabel>
                <Select
                  disabled={disabled}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Age"
                  onChange={handleChangeEduYear}
                >
                  {years.map((year) => (
                    <MenuItem key={year.id} value={year.id}>
                      {year.ar_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <Button
                type="submit"
                style={{ margin: "2em 5px", width: "20%" }}
                variant="contained"
                className={classes.submitBtn}
                onClick={handleConfirm}
              >
                <span style={{ padding: "0px 0px 0px 10px" }}>
                  {translate("Confirm")}
                </span>
              </Button>
            </Grid>
          </Grid>
          <ConfirmDialog
            show={openConfirmDialog}
            handleClose={setOpenConfirmDialog}
            handleConfirmDialog={handleConfirmDialog}
            studentsMsg={""}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Button
                type="submit"
                style={{ margin: "2em 5px", width: "20%" }}
                variant="contained"
                className={classes.submitBtn}
                onClick={handleSpecifyCourses}
              >
                <span style={{ padding: "0px 0px 0px 10px" }}>
                  {translate("Specify Courses")}
                </span>
              </Button>
              <Button
                type="submit"
                style={{ margin: "2em 5px", width: "20%" }}
                variant="contained"
                className={classes.submitBtn}
                onClick={handleAssignTeachers}
              >
                <span style={{ padding: "0px 0px 0px 10px" }}>
                  {translate("Assign Teachers")}
                </span>
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
};
export default InitPlanTabs;
