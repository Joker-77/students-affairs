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
import {useRouter} from "next/router";
import {useTranslation} from "../../Utility/Translations/useTranslation";

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
              <Grid md={4} style={{display: 'flex'}}>
                <IconButton
                  style={{
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
                          {translate("Registeration number")}
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
                        placeholder={translate("Registeration number")}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          {translate("Birth date")}
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
                        placeholder={translate("Birth date")}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          {translate("Birth place")}
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
                        placeholder={translate("Birth place")}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          {translate("QAID place")}
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
                        placeholder={translate("QAID place")}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          {translate("QAID number")}
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
                        placeholder={translate("QAID number")}
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          {translate("Military office")}
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
                        placeholder={translate("Military office")}
                        fullWidth
                      />
                    </Box>

                    <PersonInfoPartialForm prefix={"father"} title={translate("Father")} formik={formik} disabled={disabled} isGray/>
                    <PersonInfoPartialForm prefix={"mother"} title={translate("Mother")} formik={formik} disabled={disabled} isGray/>

                    <Box mt={4} mb={1}>
                      {isSubmitting ? (
                        <SuiButton
                          disabled={true}
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          {translate("Processing ...")}
                        </SuiButton>
                      ) : (
                        <SuiButton
                          disabled={!(dirty && isValid)}
                          type="submit"
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          {translate("Save")}
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
