import React from "react";
import { Formik, Form } from "formik";
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
import {Close} from "@material-ui/icons";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import SuiButton from "../SuiButton";
import { IPersonModel } from "../../Models/ApiResponse/PersonModel.jsx";
import {useRouter} from "next/router";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import colors from "../../assets/theme/base/colors";

interface ICusomModalProps {
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: any;
  formScheme: any;
}
const AddPersonModal: React.FC<ICusomModalProps> = ({
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
    width: 400,
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
    width: 400,
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
      height: "75%",
      direction: locale === 'ar' ? "rtl" : "ltr",
    },
    header: {
      height: "5em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",    },
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
                    color: "#fff",
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
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          First Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        onBlur={handleBlur}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        placeholder="ahmad"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Last Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        placeholder="ahmad"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Gender
                        </Typography>
                        <TextField
                          disabled={disabled}
                          id="gender"
                          select={true}
                          value={values.gender}
                          onChange={handleChange("gender")}
                          margin="normal"
                          fullWidth
                        >
                          {genders.map((gender) => (
                            <MenuItem key={gender.id} value={gender.id}>
                              {gender.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Nationality
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={values.nationality}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.nationality && errors.nationality
                        )}
                        helperText={touched.nationality && errors.nationality}
                        placeholder="syrian"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          National Id
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="nationalId"
                        name="nationalId"
                        value={values.nationalId}
                        onBlur={handleBlur}
                        error={Boolean(touched.nationalId && errors.nationalId)}
                        helperText={touched.nationalId && errors.nationalId}
                        placeholder="037234"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Passport First Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="passportFirstName"
                        name="passportFirstName"
                        value={values.passportFirstName}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.passportFirstName && errors.passportFirstName
                        )}
                        helperText={
                          touched.passportFirstName && errors.passportFirstName
                        }
                        placeholder="AHMAD"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Passport Last Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="passportLastName"
                        name="passportLastName"
                        value={values.passportLastName}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.passportLastName && errors.passportLastName
                        )}
                        helperText={
                          touched.passportLastName && errors.passportLastName
                        }
                        placeholder="AHMAD"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Passport Number
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="passportNumber"
                        name="passportNumber"
                        value={values.passportNumber}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.passportNumber && errors.passportNumber
                        )}
                        helperText={
                          touched.passportNumber && errors.passportNumber
                        }
                        placeholder="5434566"
                        fullWidth
                      />
                    </Box>
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
                          disabled={!(dirty && isValid)}
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

export default AddPersonModal;
