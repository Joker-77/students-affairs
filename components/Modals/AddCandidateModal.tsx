import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Modal,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import SuiButton from "../SuiButton";
import { ICandidateModel } from "../../Models/ApiResponse/CandidateModel.jsx";
import PersonInfoPartialForm from "./PersonInfoPartialForm";

interface ICusomModalProps {
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: any;
  formScheme: any;
}
const AddCandidateModal: React.FC<ICusomModalProps> = ({
  disabled,
  title,
  open,
  initValues,
  submitForm,
  formScheme,
  handleClose,
}) => {
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
  const genders = [
    {
      id: "male",
      value: "Male",
    },
    {
      id: "female",
      value: "Female",
    },
  ];
  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "95%",
    },
    header: {
      height: "5em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: "#A69577",
    },
  };

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
                <h4 style={{ fontWeight: "bold" }}>{title} </h4>
              </Grid>
              <Grid md={4}>
                <IconButton
                  style={{
                    position: "absolute",
                    right: "2em",
                    top: "1em",
                  }}
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>
              </Grid>
            </Grid>
          </CardHeader>
          <CardBody>
            
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
                  <Form>
                    <PersonInfoPartialForm prefix={"person"} formik={formik} disabled={disabled}/>

                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        Registeration number
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="registeration_number"
                        name="registeration_number"
                        value={values.registeration_number}
                        onBlur={handleBlur}
                        error={Boolean(touched.registeration_number && errors.registeration_number)}
                        helperText={touched.registeration_number && errors.registeration_number}
                        placeholder="Registeration number"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        Birth date
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="date"
                        id="birth_date"
                        name="birth_date"
                        value={values.birth_date}
                        onBlur={handleBlur}
                        error={Boolean(touched.birth_date && errors.birth_date)}
                        helperText={touched.birth_date && errors.birth_date}
                        placeholder="Birth date"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        Birth place
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="birth_place"
                        name="birth_place"
                        value={values.birth_place}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.birth_place && errors.birth_place
                        )}
                        helperText={touched.birth_place && errors.birth_place}
                        placeholder="Birth place"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        AQID place
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="qaid_place"
                        name="qaid_place"
                        value={values.qaid_place}
                        onBlur={handleBlur}
                        error={Boolean(touched.qaid_place && errors.qaid_place)}
                        helperText={touched.qaid_place && errors.qaid_place}
                        placeholder="AQID place"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        QAID number
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="qaid_number"
                        name="qaid_number"
                        value={values.qaid_number}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.qaid_number && errors.qaid_number
                        )}
                        helperText={
                          touched.qaid_number && errors.qaid_number
                        }
                        placeholder="QAID number"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                        Military office
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="military_office"
                        name="military_office"
                        value={values.military_office}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.military_office && errors.military_office
                        )}
                        helperText={
                          touched.military_office && errors.military_office
                        }
                        placeholder="Military office"
                        fullWidth
                      />
                    </Box>

                    <PersonInfoPartialForm prefix={"father"} title={'Father'} formik={formik} disabled={disabled} isGray/>
                    <PersonInfoPartialForm prefix={"mother"} title={'Mother'} formik={formik} disabled={disabled} isGray/>

                    <Box mt={4} mb={1}>
                      {isSubmitting ? (
                        <SuiButton
                          disabled={true}
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          Processing
                        </SuiButton>
                      ) : (
                        <SuiButton
                          // disabled={!(dirty && isValid)}
                          type="submit"
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          Save
                        </SuiButton>
                      )}
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </CardBody>
        </Card>
      </Box>
    </Modal>
  );
};

export default AddCandidateModal;
