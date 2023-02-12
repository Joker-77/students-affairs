import React from "react";
import {Formik, Form, FieldArray} from "formik";
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
import { IPersonModel } from "../../Models/ApiResponse/PersonModel.jsx";
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
const AddCertificateModal: React.FC<ICusomModalProps> = ({
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
    width: "60%",
    bgcolor: "background.paper",
    // btype: "2px solid brown",
    boxShadow: 24,
    btypeRadius: "20px",
  };
  const cardStyle = {
    position: "absolute" as "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%, -50%)",
    // width: 700,
    bgcolor: "background.paper",
    // btype: "2px solid brown",
    boxShadow: 24,
    btypeRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "85%",
      direction: locale === 'ar' ? "rtl" : "ltr",
    },
    header: {
      height: "5em",
      position: "sticky",
      btypeTopRightRadius: "inherit",
      btypeTopLeftRadius: "inherit",
      backgroundColor: "#A69577",
    },
  };

  const courses = [
    {
      id: 'Math',
      value: translate('Math'),
    },
    {
      id: 'Physics',
      value: translate('Physics'),
    },
    {
      id: 'English',
      value: translate('English'),
    },
    {
      id: 'Arabic',
      value: translate('Arabic'),
    },
    {
      id: 'Chemistry',
      value: translate('Chemistry'),
    },
  ];

  const cities = [
    {
      id: 'Damascus',
      value: translate('Damascus'),
    },
    {
      id: 'Homs',
      value: translate('Homs'),
    },
    {
      id: 'Hama',
      value: translate('Hama'),
    },
    {
      id: 'Idleb',
      value: translate('Idleb'),
    },
    {
      id: 'Aleppo',
      value: translate('Aleppo'),
    },
    {
      id: 'Latakia',
      value: translate('Latakia'),
    },
    {
      id: 'Tartus',
      value: translate('Tartus'),
    },
    {
      id: 'Dir Al-Zour',
      value: translate('Dir Al-Zour'),
    },
    {
      id: 'Al-Raqa',
      value: translate('Al-Raqa'),
    },
    {
      id: 'Al-Hasaqa',
      value: translate('Al-Hasaqa'),
    },
    {
      id: 'Al-Qonaitra',
      value: translate('Al-Qonaitra'),
    },
    {
      id: 'Al-Qamshli',
      value: translate('Al-Qamshli'),
    },
    {
      id: 'Daraa',
      value: translate('Daraa'),
    },
    {
      id: 'Al-Sweedaa',
      value: translate('Al-Sweedaa'),
    },
  ];

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

                        <Grid container spacing={2}>
                          <Grid item md={4}>


                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Type")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  id="type"
                                  name="type"
                                  value={values.type}
                                  onBlur={handleBlur}
                                  error={Boolean(touched.type && errors.type)}
                                  helperText={touched.type && errors.type}
                                  placeholder={translate("Type")}
                                  fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item md={4}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Year")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="number"
                                  min={0}
                                  id="year"
                                  name="year"
                                  value={values.year}
                                  onBlur={handleBlur}
                                  error={Boolean(touched.year && errors.year)}
                                  helperText={touched.year && errors.year}
                                  placeholder={translate("Year")}
                                  fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item md={4}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Result")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="number"
                                  min={0}
                                  id="result"
                                  name="result"
                                  value={values.result}
                                  onBlur={handleBlur}
                                  error={Boolean(touched.result && errors.result)}
                                  helperText={touched.result && errors.result}
                                  placeholder={translate("Result")}
                                  fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item md={4}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("City")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  variant="outlined"
                                  size="small"
                                  type="select"
                                  id={`city`}
                                  name={`city`}
                                  select={true}
                                  value={values.city}
                                  onChange={handleChange(`city`)}
                                  onBlur={handleBlur}
                                  placeholder={translate("City")}
                                  fullWidth
                              >
                                {cities.map((city) => (
                                    <MenuItem key={city.id} value={city.id}>
                                      {city.value}
                                    </MenuItem>
                                ))}
                              </TextField>
                            </Box>
                          </Grid>
                          <Grid item md={4}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Round")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  id="round"
                                  name="round"
                                  value={values.round}
                                  onBlur={handleBlur}
                                  error={Boolean(touched.round && errors.round)}
                                  helperText={touched.round && errors.round}
                                  placeholder={translate("Round")}
                                  fullWidth
                              />
                            </Box>
                          </Grid>
                          <Grid item md={4}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Subscription number")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="number"
                                  min={0}
                                  id="subscription_number"
                                  name="subscription_number"
                                  value={values.subscription_number}
                                  onBlur={handleBlur}
                                  error={Boolean(touched.subscription_number && errors.subscription_number)}
                                  helperText={touched.subscription_number && errors.subscription_number}
                                  placeholder={translate("Subscription number")}
                                  fullWidth
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Box mb={2}>
                          <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                              {translate("Marks")}
                            </Typography>
                          </Box>
                          <FieldArray
                              name={`details`}
                              render={arrayHelpers => (
                                  <div>
                                    {values.details && values.details.length > 0 ? (
                                        values.details.map((mark, index) => (
                                            <div key={index}>

                                              <Grid container spacing={2}>
                                                <Grid item xs={4}>
                                                  <TextField
                                                      disabled={disabled}
                                                      variant="outlined"
                                                      size="small"
                                                      type="select"
                                                      id={`details.${index}.key`}
                                                      name={`details.${index}.key`}
                                                      select={true}
                                                      value={values.details[index].key}
                                                      onChange={handleChange(`details.${index}.key`)}
                                                      onBlur={handleBlur}
                                                      placeholder={translate("Course")}
                                                      fullWidth
                                                  >
                                                    {courses.map((type) => (
                                                        <MenuItem key={type.id} value={type.id}>
                                                          {type.value}
                                                        </MenuItem>
                                                    ))}
                                                  </TextField>
                                                </Grid>

                                                <Grid item xs={4}>
                                                  <TextField
                                                      disabled={disabled}
                                                      onChange={handleChange(`details.${index}.value`)}
                                                      variant="outlined"
                                                      size="small"
                                                      type="number"
                                                      min={0}
                                                      id={`details.${index}.value`}
                                                      name={`details.${index}.value`}
                                                      value={mark.value}
                                                      onBlur={handleBlur}
                                                      error={Boolean(touched?.details && errors?.details)}
                                                      helperText={touched?.details && errors?.details}
                                                      placeholder={translate("Mark")}
                                                      //fullWidth
                                                  />
                                                </Grid>

                                                {!disabled && <Grid item xs={4}>
                                                  <SuiButton
                                                      style={{ margin: 5 }}
                                                      color="error"
                                                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                  >
                                                    -
                                                  </SuiButton>

                                                  <SuiButton
                                                      style={{ margin: 5 }}
                                                      color="success"
                                                      onClick={() => arrayHelpers.insert(index+1, {phone: '', type: ''})} // insert an empty string at a position
                                                  >
                                                    +
                                                  </SuiButton>
                                                </Grid>}
                                              </Grid>

                                            </div>
                                        ))
                                    ) : (
                                        <React.Fragment>
                                          {!disabled && <SuiButton
                                              variant="gradient"
                                              color="success"
                                              onClick={() => arrayHelpers.push('')}>
                                            {/* show this when user has removed all phones from the list */}
                                            {translate("Add a mark")}
                                          </SuiButton>}
                                        </React.Fragment>
                                    )}
                                  </div>
                              )}
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
                                Processing ...
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

export default AddCertificateModal;
