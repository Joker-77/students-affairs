import React, {useEffect} from "react";
import {Formik, Form, FieldArray} from "formik";
import {
  TextField,
  Box,
  Typography,
  MenuItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Card from "../../../../components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import CardBody from "../../../../components/Card/CardBody.js";
import SuiButton from "../../../../components/SuiButton";
import {useRouter} from "next/router";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import {governorates} from "../../../../Static/resources";
import * as Yup from "yup";
import CertificateService from "../../../../Services/CertificateService";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle";

interface ICusomModalProps {
  initValues: any;
}
const AddCertificateModal: React.FC<ICusomModalProps> = ({initValues}) => {
  const {locale} = useRouter();
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  useEffect(() => console.log(initValues), []);


  const courses = [
    {
      id: 'math',
      value: translate('Math'),
    },
    {
      id: 'physics',
      value: translate('Physics'),
    },
    {
      id: 'english',
      value: translate('English'),
    },
    {
      id: 'arabic',
      value: translate('Arabic'),
    },
    {
      id: 'chemestry',
      value: translate('Chemistry'),
    },
    {
      id: 'science',
      value: translate('Science'),
    },
    {
      id: 'الفرنسية',
      value: translate('French'),
    },
    {
      id: 'الروسية',
      value: translate('Russian'),
    },
    {
      id: 'nationality',
      value: translate('Nationality Course'),
    },
  ];

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const formScheme = Yup.object().shape({
    // type: Yup.string().required(translate("{0} is required", "Type")),
    // year: Yup.string().required(translate("{0} is required", "Year")),
    // result: Yup.string().required(translate("{0} is required", "Result")),
    // city: Yup.string().required(translate("{0} is required", "City")),
    // round: Yup.string().required(translate("{0} is required", "Round")),
    // subscription_number: Yup.string().required(translate("{0} is required", "Subscription number")),
    // candidate_id: Yup.string().required(translate("{0} is required", "Candidate")),
  });


  const submitForm = async (values: any, setSubmitting) => {
    // setSubmitting(true);
    // console.log("values", values);
    // CertificateService.Edit(values)
    //     .then((res) => {
    //       console.log("Certificate", res);
    //     })
    //     .catch((error) => {
    //       console.error("error", error);
    //     })
    //     .finally(() => {
    //       setSubmitting(false);
    //     });
  };

  return (

        <Box>
          <Card>
            <CardHeader>
              <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{translate("Certificate Details")} </h4>
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

                  const validCourses = values.details?.filter((item) => courses.map(c=>c.id).includes(item.key));

                  return (
                      <Form>

                        <Grid container spacing={2}>
                          {/*<Grid item md={4}>*/}


                          {/*  <Box mb={2}>*/}
                          {/*    <Box mb={1} ml={0.5}>*/}
                          {/*      <Typography component="label" variant="caption">*/}
                          {/*        {translate("Type")}*/}
                          {/*      </Typography>*/}
                          {/*    </Box>*/}
                          {/*    <TextField*/}
                          {/*        disabled={disabled}*/}
                          {/*        onChange={handleChange}*/}
                          {/*        variant="outlined"*/}
                          {/*        size="small"*/}
                          {/*        type="text"*/}
                          {/*        id="type"*/}
                          {/*        name="type"*/}
                          {/*        value={values.type}*/}
                          {/*        onBlur={handleBlur}*/}
                          {/*        error={Boolean(touched.type && errors.type)}*/}
                          {/*        helperText={touched.type && errors.type}*/}
                          {/*        placeholder={translate("Type")}*/}
                          {/*        fullWidth*/}
                          {/*    />*/}
                          {/*  </Box>*/}
                          {/*</Grid>*/}
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
                                {governorates(translate).map((city) => (
                                    <MenuItem key={city.value} value={city.value}>
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
                                    {validCourses && validCourses.length > 0 ? (
                                        validCourses.map((mark, index) => (
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
                                                      value={mark.key}
                                                      onChange={handleChange(`details.${index}.key`)}
                                                      onBlur={handleBlur}
                                                      placeholder={translate("Course")}
                                                      fullWidth
                                                  >
                                                    {courses.map((course) => (
                                                        <MenuItem key={course.id} value={course.id}>
                                                          {course.value}
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
                                                      color="primary"
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
                                              color="primary"
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


                        {/*<Box mt={4} mb={1}>*/}
                        {/*  {isSubmitting ? (*/}
                        {/*      <SuiButton*/}
                        {/*          disabled={true}*/}
                        {/*          variant="gradient"*/}
                        {/*          color="info"*/}
                        {/*          fullWidth*/}
                        {/*      >*/}
                        {/*        {translate('Processing ...')}*/}
                        {/*      </SuiButton>*/}
                        {/*  ) : (*/}
                        {/*      <SuiButton*/}
                        {/*          disabled={!(dirty && isValid)}*/}
                        {/*          type="submit"*/}
                        {/*          variant="gradient"*/}
                        {/*          color="info"*/}
                        {/*          fullWidth*/}
                        {/*      >*/}
                        {/*        {translate("Save")}*/}
                        {/*      </SuiButton>*/}
                        {/*  )}*/}
                        {/*</Box>*/}
                      </Form>
                  );
                }}
              </Formik>
            </CardBody>
          </Card>
        </Box>
  );
};

export default AddCertificateModal;
