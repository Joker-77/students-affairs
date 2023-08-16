import React from "react";
import { Formik, Form } from "formik";
import {
    TextField,
    Box,
    Grid,
    Typography, FormControlLabel, Radio, RadioGroup, MenuItem,
} from "@material-ui/core";
import Card from "../../../../components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import CardBody from "../../../../components/Card/CardBody.js";
import SuiButton from "../../../../components/SuiButton";
import PersonInfoPartialForm from "./PersonInfoPartialForm";
import {useRouter} from "next/router";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle";
import CandidateService from "../../../../Services/CandidateService";
import {examPlaces, registerationClasses, registerationMethods, studyPlaces, yesNo} from "../../../../Static/resources";
import {
  useAppDispatch,
  setCandidate,
} from "../../../../redux";
import {toast} from "react-toastify";

interface ICandidatePersonalInfoProps {
  initValues: any;
  forAdd: boolean;
  handleClose();
}
const CandidatePersonalInfo: React.FC<ICandidatePersonalInfoProps> = ({
                                                                        initValues,
                                                                        forAdd = false,
                                                                        handleClose,
                                                                      }) => {
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [disabled, setDisabled] = React.useState<boolean>(false);

  const submitFunction = forAdd ? CandidateService.Add : CandidateService.Edit;

  const submitForm = async (values: any, setSubmitting) => {
      setSubmitting(true);
      values = {...values, permenant_address: 'permenant_address', temporary_address: 'temporary_address'}
      submitFunction(values)
          .then((res) => {
              console.log("res", res);
              if(forAdd) {
                handleClose && handleClose();
                dispatch(setCandidate({...res.result, certificates: [], person: values?.person}));
                router.push(`/${router.locale}/students_affairs/affairs_officer/candidates/candidate-details`)
              } else {
                  toast(translate('Candidate updated.'), {type: 'success'});
              }
            })
          .catch((error) => {
              console.error("error", error);
          })
          .finally(() => {
              setSubmitting(false);
          });
      ;
  };

  const formScheme = Yup.object().shape({
    // first_name: Yup.string().required(translate("{0} is required", "First name")),
    // last_name: Yup.string().required(translate("{0} is required", "Last name")),
    // passport_first_name: Yup.string().required(translate("{0} is required", "Passport First Name")),
    // passport_last_name: Yup.string().required(translate("{0} is required", "Passport Last Name")),
    // passport_number: Yup.string().required(translate("{0} is required", "Passport Number")),
    // national_number: Yup.string().required(translate("{0} is required", "National number")),
    // sex: Yup.string().required(translate("{0} is required", "Gender")),
    // nationality: Yup.string().required(translate("{0} is required", "Nationality")),
  });

  return (
      <Box>
        <Card>
          <CardHeader>
            <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{translate('Personal Info')}</h4>
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

                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <Box mb={2}>
                                    <Box mb={1} ml={0.5}>
                                        <Typography component="label" variant="caption">
                                            {translate("Registeration Class")}
                                        </Typography>
                                    </Box>
                                    <TextField
                                        disabled={disabled}
                                        variant="outlined"
                                        size="small"
                                        type="select"
                                        id={`registeration_class`}
                                        name={`registeration_class`}
                                        select={true}
                                        value={values.registeration_class}
                                        onChange={handleChange(`registeration_class`)}
                                        onBlur={handleBlur}
                                        placeholder={translate("registeration_class")}
                                        fullWidth
                                    >
                                        {registerationClasses(translate).map((_class) => (
                                            <MenuItem key={_class} value={_class}>
                                                {_class}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box mb={2}>
                                    <Box mb={1} ml={0.5}>
                                        <Typography component="label" variant="caption">
                                            {translate("Exam Place")}
                                        </Typography>
                                    </Box>
                                    <TextField
                                        disabled={disabled}
                                        variant="outlined"
                                        size="small"
                                        type="select"
                                        id={`exam_place`}
                                        name={`exam_place`}
                                        select={true}
                                        value={values.exam_place}
                                        onChange={handleChange(`exam_place`)}
                                        onBlur={handleBlur}
                                        placeholder={translate("exam_place")}
                                        fullWidth
                                    >
                                        {examPlaces(translate).map((place) => (
                                            <MenuItem key={place} value={place}>
                                                {place}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                            </Grid>
                            <Grid item md={4}></Grid>
                            <Grid item md={4}>
                                <Box mb={2}>
                                    <Box mb={1} ml={0.5}>
                                        <Typography component="label" variant="caption">
                                            {translate("Registeration Method")}
                                        </Typography>
                                    </Box>
                                    <RadioGroup id={'registeration_method'} name={'registeration_method'} value={values?.registeration_method} onChange={handleChange}
                                         defaultValue={registerationMethods(translate)[0]}>
                                        {registerationMethods(translate).map((place) => (
                                            <FormControlLabel value={place} control={<Radio />} label={place} />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box mb={2}>
                                    <Box mb={1} ml={0.5}>
                                        <Typography component="label" variant="caption">
                                            {translate("Study Place")}
                                        </Typography>
                                    </Box>
                                    <RadioGroup id={'study_place'} name={'study_place'} value={values?.study_place} onChange={handleChange}
                                         defaultValue={studyPlaces(translate)[0]}>
                                        {studyPlaces(translate).map((place) => (
                                            <FormControlLabel value={place} control={<Radio />} label={place} />
                                        ))}
                                    </RadioGroup>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box mb={2}>
                                    <Box mb={1} ml={0.5}>
                                        <Typography component="label" variant="caption">
                                            {translate("Need Residance")}
                                        </Typography>
                                    </Box>
                                    <RadioGroup id={'residance'} name={'residance'} value={values?.residance?.toString()} onChange={handleChange} defaultValue={yesNo(translate)[0].value}>
                                        {yesNo(translate).map((option) => (
                                            <FormControlLabel control={<Radio />} value={option.value} label={option.label}/>
                                        ))}
                                    </RadioGroup>
                                </Box>
                            </Grid>
                        </Grid>
                      <Grid container spacing={2}>
                        <Grid item md={4}>
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
                        </Grid>
                        <Grid item md={4}>
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
                        </Grid>
                        <Grid item md={4}>
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
                        </Grid>
                        <Grid item md={4}>
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
                        </Grid>
                        <Grid item md={4}>
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
                        </Grid>
                      </Grid>
                      {/*<PersonInfoPartialForm prefix={"father"} title={translate("Father")} formik={formik} disabled={disabled} isGray/>*/}
                      {/*<PersonInfoPartialForm prefix={"mother"} title={translate("Mother")} formik={formik} disabled={disabled} isGray/>*/}

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
                                // disabled={!(dirty && isValid)}
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
  );
};

export default CandidatePersonalInfo;
