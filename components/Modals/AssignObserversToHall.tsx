import * as React from "react";
import {
  Modal, Box, Grid, IconButton, Typography, TextField,
} from "@material-ui/core";
import {useRouter} from "next/router";
import colors from "../../assets/theme/base/colors";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import {Close} from "@material-ui/icons";
import CardBody from "../Card/CardBody";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import ObserverService from "../../Services/ObserverService";
import { IObserverModel } from "../../Models/Observers/ObserverModel";
//import {Autocomplete} from "@material-ui/Autocomplete";

interface IAssignObserversToHallModalProps {
  open: boolean;
  handleClose(): void;
  hall: any;
  //formScheme: any;
  submitForm(values, submitting): void;
}
const AssignObserversToHallModal: React.FC<IAssignObserversToHallModalProps> = ({
  open,
  handleClose,
  hall,
  //formScheme,
  submitForm
}) => {
  const initValues = {
    //from: hall.from,
    //to: hall.to,
    hallChef: 1,
  };

  const {locale} = useRouter();
  const {translate} = useTranslation();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
  };
  const cardStyle = {
    position: "absolute" as "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "95%",
      direction: locale === 'ar' ? "rtl" : "ltr",
    },
    header: {
      height: "7em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",
    },
  };

  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    ObserverService.GetAll()
      .then((res) => {
        console.log("Observers", res.result);
        setEmployees(res.result as IObserverModel[]);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  const title = `${translate("Exam")} ${hall?.examsDetails} ${translate("from")} ${hall?.from} ${translate("to")} ${hall?.to} ${translate("in")} ${hall?.hallName} ${translate("on")} ${hall?.examDate}`;

  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={styles.modal}>
          <Card style={cardStyle}>
            <CardHeader style={styles.header}>
              <Grid container>
                <Grid md={8}>
                  <h4 style={{ fontWeight: "bold" }}>{title}</h4>
                </Grid>
                <Grid md={4}>
                  <IconButton
                      style={{
                        color: '#fff',
                        position: "absolute",
                        top: "1em",
                        [locale === 'ar' ? 'left' : 'right']: "2em",
                      }}
                      onClick={handleClose}
                  >
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
            </CardHeader>
            <CardBody>
                {/*
                <Formik
                    initialValues={initValues}
                    validationSchema={formScheme}
                    onSubmit={(values, { setSubmitting }) => {
                        submitForm(values, setSubmitting);
                    }}
                >
                {(formik) => {
                    const {
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        handleBlur,
                        isSubmitting,
                        isValid,
                        dirty,
                    } = formik;
                return (
                <Form>*/}
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box mb={2}>
                            <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                    {translate("Observer")}
                                </Typography>
                            </Box>
                            {/*}
                            <Autocomplete
                              disablePortal
                              id="select-observer"
                              options={employees.map(emp => {
                                return {label: `${emp.firstName} ${emp.lastName}`, id: emp.id};
                              })}
                              sx={{ width: 300 }}
                              renderInput={(params) => <TextField {...params} label={translate("Observer")} />}
                            />
                            {*/}
                        </Box>
                    </Grid>
                </Grid>
                {/*</Form>
                    )}}
            </Formik>*/}
            </CardBody>
          </Card>
      </Box>
    </Modal>
  );
};

export default AssignObserversToHallModal;
