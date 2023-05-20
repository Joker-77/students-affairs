import React, { useEffect, useState } from "react";
import Admin from "../../../../layouts/Admin";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Add } from "@material-ui/icons";
import Properties from "./peroperties";
import ConfirmProperties from "./confirmProperties";
import InitPlanTabs from "./tabbedView";
import SpecialityService from "../../../../Services/SpecialityService";
import { ISpecialityModel } from "../../../../Models/ApiResponse/SpecialityModel";
import { IStudentYear } from "../../../../Models/StudentsYear/IStudentYear";
import YearsService from "../../../../Services/SpecYearsService";
import { error } from "console";

const InitializeYear: React.FC = () => {
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // --------------- Show Modal --------------------
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // --------------- Data --------------------------
  const [message, setMessage] = useState("");
  const [alertMsg, setAlertMessage] = useState("");
  const [value, setValue] = useState("");
  const [success, SetSuccess] = useState(false);
  const [specialities, SetSpecialities] = useState<ISpecialityModel[]>([]);
  const [initYears, setInitYears] = useState<IStudentYear[]>([]);

  useEffect(() => {
    SpecialityService.GetAll()
      .then((response) => {
        if (response.result.length > 0) {
          console.clear();
          console.log(response.result);
          YearsService.GetWhereSpeciality(response.result[0].id)
            .then((res) => {
              console.log(res.result);
              if (res.result.length > 0) {
                let specs = response.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                let initYears = res.result.map((data) => {
                  return {
                    id: data.id,
                    en_name: data.en_name,
                    ar_name: data.ar_name,
                    code: data.code,
                  };
                });
                SetSpecialities(specs);
                setInitYears(initYears);
              }
            })
            .catch((error) => {});
        }
      })
      .catch((error) => {});
  }, []);
  const closeProperties = () => {
    setShow(false);
  };
  const handleInit = () => {
    setShow(true);
  };

  const confirmOpenYear = (value, message) => {
    console.clear();
    let alertMessage = message?.split("%")[0] + " 2022-2023";
    let confirmMessage = message?.split("%")[1];
    console.clear();
    console.log(specialities);
    setValue(value);
    setAlertMessage(alertMessage);
    setMessage(confirmMessage);
    setShowConfirm(true);
  };

  const handleSubmitConfirm = () => {
    setShowConfirm(false);
    setShow(false);
    SetSuccess(true);
  };
  const closeConfirmProperties = () => {
    setShowConfirm(false);
  };

  return (
    <GridContainer>
      <GridItem
        style={{ margin: "0 0 1em 0" }}
        md={12}
        className={classes.typography}
      >
        <Typography variant="h5" component="div">
          {translate(`You're in the year`) + ` ${"2022"}`}
        </Typography>
      </GridItem>
      <GridItem md={12}>
        <GridItem md={7}>
          <Button
            style={{ margin: "0px 5px" }}
            disabled={success}
            variant="contained"
            className={classes.submitBtn}
            onClick={handleInit}
          >
            <span style={{ padding: "0px 0px 0px 10px" }}>
              {translate("Open new educational year")}
            </span>
            <Add />
          </Button>
        </GridItem>
      </GridItem>
      {success && (
        <GridItem style={{ marginTop: "2em" }}>
          <GridItem md={12}>
            <InitPlanTabs
              message={message}
              specialties={specialities}
              initYears={initYears}
            />
          </GridItem>
        </GridItem>
      )}
      <Properties
        open={show}
        key={"properties"}
        title="فتح عام دراسي جديد"
        handleClose={closeProperties}
        handleConfirm={confirmOpenYear}
      />
      <ConfirmProperties
        open={showConfirm}
        alert={alertMsg}
        message={message}
        handleClose={closeConfirmProperties}
        handleConfirm={handleSubmitConfirm}
      />
    </GridContainer>
  );
};

(InitializeYear as any).layout = Admin;
(InitializeYear as any).auth = false;
export default InitializeYear;
