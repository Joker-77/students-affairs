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

interface IAssignTeachersProps {}
const AssignTeachers: React.FC<IAssignTeachersProps> = ({}) => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [programs, setPrograms] = useState([]);

  useEffect(() => {}, []);

  const handleBack = (e) => {
    e.preventDefault();
    Router.push("/students_affairs/affairs_officer/initialize-year");
  };
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
        <GridItem md={10} style={{ margin: "1em 0 0 0" }}>
          <PlanCourses />
        </GridItem>
        <GridItem md={2}>
          <Button
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
    </GridContainer>
  );
};

(AssignTeachers as any).layout = Admin;
(AssignTeachers as any).auth = false;
export default AssignTeachers;
