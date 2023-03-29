import React, {useEffect} from "react";
import Admin from "../../../../layouts/Admin";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import * as Yup from "yup";
import {Box, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, TextField, Typography} from "@material-ui/core";
import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/CardHeader";
import CardBody from "../../../../components/Card/CardBody";
import {FieldArray, Form, Formik} from "formik";
import {acceptPlaces, acceptStatus, governorates, registerationClasses, studyPlaces} from "../../../../Static/resources";
import SuiButton from "../../../../components/SuiButton";
import SpecialityService from "../../../../Services/SpecialityService";
import RegisterationService from "../../../../Services/RegisterationService";
import {toast} from "react-toastify";

interface IEditRegistrationProps {candidate: any}

const EditRegistration: React.FC<IEditRegistrationProps> = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const {translate} = useTranslation();
    const {locale} = useRouter();

    const candidate = props.candidate;
    const registeration = candidate?.registerations[0] || {};

    const [disabled, setDisabled] = React.useState<boolean>(false);
    const [specialities, setSpecialities] = React.useState([]);

    const formScheme = Yup.object().shape({
    });

    /************************** Get Specialities ****************************/
    useEffect(() => {
        SpecialityService.GetAll()
            .then((res) => {
                console.log("Speciality", res);
                setSpecialities(res.result);
            })
            .catch((error) => {
                console.error("error", error);
            });
    }, []);
    /************************** Finish Data ****************************/


    const submitForm = async (values: any, setSubmitting) => {
        setSubmitting(true);
        console.log("values", values);
        RegisterationService.Edit({...values, id: registeration?.id})
            .then((res) => {
                console.log("Registeration", res);
                toast(translate('Registration updated.'), {type: 'success'});
            })
            .catch((error) => {
                console.error("error", error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (

        <Box>
            <Card>
                <CardHeader>
                    <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{translate("Edit Registration")} </h4>
                </CardHeader>

                <CardBody>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Box mb={2}>
                                <Box mb={1} ml={0.5}>
                                    <Typography component="label" variant="caption">
                                        {translate("Name")}
                                    </Typography>
                                </Box>
                                <TextField
                                    disabled={true}
                                    variant="outlined"
                                    size="small"
                                    value={`${candidate?.person.first_name} ${candidate?.father?.first_name} ${candidate?.person.last_name}`}
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
                                    disabled={true}
                                    variant="outlined"
                                    size="small"
                                    value={candidate?.certificates[0]?.subscription_number}
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box mb={2}>
                                <Box mb={1} ml={0.5}>
                                    <Typography component="label" variant="caption">
                                        {translate("Registeration number")}
                                    </Typography>
                                </Box>
                                <TextField
                                    disabled={true}
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    value={candidate?.registeration_number}
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Formik
                        initialValues={registeration}
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
                                                        {translate("Mark from 2400")}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    min={0}
                                                    id="mark"
                                                    name="mark"
                                                    value={values.mark}
                                                    onBlur={handleBlur}
                                                    error={Boolean(touched.mark && errors.mark)}
                                                    helperText={touched.mark && errors.mark}
                                                    placeholder={translate("Mark from 2400")}
                                                    fullWidth
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item md={4}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {`${translate("Acceptance Test")} ${translate("Math")}`}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    min={0}
                                                    id="math"
                                                    name="math"
                                                    value={values.math}
                                                    onBlur={handleBlur}
                                                    error={Boolean(touched.math && errors.math)}
                                                    helperText={touched.math && errors.math}
                                                    placeholder={`${translate("Acceptance Test")} ${translate("Math")}`}
                                                    fullWidth
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item md={4}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {`${translate("Acceptance Test")} ${translate("Physics")}`}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    min={0}
                                                    id="physics"
                                                    name="physics"
                                                    value={values.physics}
                                                    onBlur={handleBlur}
                                                    error={Boolean(touched.physics && errors.physics)}
                                                    helperText={touched.physics && errors.physics}
                                                    placeholder={`${translate("Acceptance Test")} ${translate("Physics")}`}
                                                    fullWidth
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item md={4}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Mark from 3400")}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    min={0}
                                                    id="mark_3400"
                                                    name="mark_3400"
                                                    value={values.mark_3400}
                                                    onBlur={handleBlur}
                                                    error={Boolean(touched.mark_3400 && errors.mark_3400)}
                                                    helperText={touched.mark_3400 && errors.mark_3400}
                                                    placeholder={translate("Mark from 3400")}
                                                    fullWidth
                                                />
                                            </Box>
                                        </Grid>

                                        <Grid item md={4}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Mark from 3600")}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    size="small"
                                                    type="number"
                                                    min={0}
                                                    id="mark_3600"
                                                    name="mark_3600"
                                                    value={values.mark_3600}
                                                    onBlur={handleBlur}
                                                    error={Boolean(touched.mark_3600 && errors.mark_3600)}
                                                    helperText={touched.mark_3600 && errors.mark_3600}
                                                    placeholder={translate("Mark from 3600")}
                                                    fullWidth
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2}>


                                        <Grid item md={3}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Acceptance Status")}
                                                    </Typography>
                                                </Box>
                                                <RadioGroup id={'status'} name={'status'} value={values?.status} onChange={handleChange}
                                                            defaultValue={acceptStatus(translate)[0]}>
                                                    {acceptStatus(translate).map((place) => (
                                                        <FormControlLabel value={place} control={<Radio />} label={place} />
                                                    ))}
                                                </RadioGroup>
                                            </Box>
                                        </Grid>

                                        <Grid item md={3}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Acceptance Class")}
                                                    </Typography>
                                                </Box>
                                                <RadioGroup id={'class'} name={'class'} value={values?.class} onChange={handleChange}
                                                            defaultValue={registerationClasses(translate)[0]}>
                                                    {registerationClasses(translate).map((place) => (
                                                        <FormControlLabel value={place} control={<Radio />} label={place} />
                                                    ))}
                                                </RadioGroup>
                                            </Box>
                                        </Grid>

                                        <Grid item md={3}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Acceptance Place")}
                                                    </Typography>
                                                </Box>
                                                <RadioGroup id={'accept_place'} name={'accept_place'} value={values?.accept_place} onChange={handleChange}
                                                            defaultValue={acceptPlaces(translate)[0]}>
                                                    {acceptPlaces(translate).map((place) => (
                                                        <FormControlLabel value={place} control={<Radio />} label={place} />
                                                    ))}
                                                </RadioGroup>
                                            </Box>
                                        </Grid>

                                        <Grid item md={3}>
                                            <Box mb={2}>
                                                <Box mb={1} ml={0.5}>
                                                    <Typography component="label" variant="caption">
                                                        {translate("Acceptance Speciality")}
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    disabled={disabled}
                                                    variant="outlined"
                                                    size="small"
                                                    type="select"
                                                    id={`speciality_id`}
                                                    name={`speciality_id`}
                                                    select={true}
                                                    value={values.speciality_id}
                                                    onChange={handleChange(`speciality_id`)}
                                                    onBlur={handleBlur}
                                                    placeholder={translate("Acceptance Speciality")}
                                                    fullWidth
                                                >
                                                    {specialities.filter(item => !(values?.accept_place === translate('Aleppo')) || item.ar_name === 'هندسة طيران').map((speciality) => (
                                                        <MenuItem key={speciality.id} value={speciality.id}>
                                                            {locale === 'ar' ? speciality.ar_name : speciality.en_name}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Box>
                                        </Grid>

                                        {values.status === translate('Waiting') && (
                                            <Grid item md={3}>
                                                <Box mb={2}>
                                                    <Box mb={1} ml={0.5}>
                                                        <Typography component="label" variant="caption">
                                                            {translate("Waiting number")}
                                                        </Typography>
                                                    </Box>
                                                    <TextField
                                                        disabled={disabled}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        size="small"
                                                        type="number"
                                                        min={0}
                                                        id="backup_no"
                                                        name="backup_no"
                                                        value={values.backup_no}
                                                        onBlur={handleBlur}
                                                        error={Boolean(touched.backup_no && errors.backup_no)}
                                                        helperText={touched.backup_no && errors.backup_no}
                                                        placeholder={translate("Waiting number")}
                                                        fullWidth
                                                    />
                                                </Box>
                                            </Grid>
                                        )}
                                    </Grid>

                                    <Box mt={4} mb={1}>
                                      {isSubmitting ? (
                                          <SuiButton
                                              disabled={true}
                                              variant="gradient"
                                              color="info"
                                              fullWidth
                                          >
                                            {translate('Processing ...')}
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
    );
};

(EditRegistration as any).layout = Admin;
(EditRegistration as any).auth = false;

const mapStateToProps = state => {
    console.log('state', state);
    return {
        candidate: state.baseReducer.candidate
    }
}

export default connect(mapStateToProps, null)(EditRegistration);

