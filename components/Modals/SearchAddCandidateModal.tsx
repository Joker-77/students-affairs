import React from "react";
import { Formik, Form } from "formik";
import {
    Modal,
    TextField,
    Radio,
    Box,
    Typography,
    MenuItem,
    IconButton,
    Grid, RadioGroup, FormControlLabel,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import SuiButton from "../SuiButton";
import {useRouter} from "next/router";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import {governorates, rounds, years} from "../../Static/resources";
import colors from "../../assets/theme/base/colors";

interface ICusomModalProps {
  searchResult?: object,
  onAddClick(values, submitting): void;
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: any;
  formScheme: any;
}
const SearchAddCandidateModal: React.FC<ICusomModalProps> = ({
                                                               searchResult,
                                                               onAddClick,
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
    cardValue: {
      fontWeight: 'bold',
    },
    cardLabel: {
      color: 'gray',
    },
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
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",    },
  };

  const renderCardItem = (label, value) => (
      <Grid item xs={3}>
        <label style={styles.cardLabel}> {translate(label)}: </label> <label style={styles.cardValue}> {value} </label>
      </Grid>
  );

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
                    searchResult?.found ? onAddClick(values, setSubmitting) : submitForm(values, setSubmitting);
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
                          <Grid item xs={3}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("Subscription number")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled||searchResult?.found}
                                  onChange={handleChange}
                                  variant="outlined"
                                  size="small"
                                  type="text"
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
                          <Grid item xs={3}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate("City")}
                                </Typography>
                              </Box>
                              <TextField
                                  disabled={disabled||searchResult?.found}
                                  variant="outlined"
                                  size="small"
                                  type="select"
                                  id={`governorate`}
                                  name={`governorate`}
                                  select={true}
                                  value={values.governorate}
                                  onChange={handleChange(`governorate`)}
                                  onBlur={handleBlur}
                                  placeholder={translate("City")}
                                  fullWidth
                              >
                                {governorates(translate).map((governorate) => (
                                    <MenuItem key={governorate.value} value={governorate.value}>
                                      {governorate.value}
                                    </MenuItem>
                                ))}
                              </TextField>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate('Year')}
                                </Typography>
                                <TextField
                                    disabled={disabled||searchResult?.found}
                                    id="year"
                                    select={true}
                                    value={values.year}
                                    onChange={handleChange("year")}
                                    margin="normal"
                                    fullWidth
                                >
                                  {years.map((year) => (
                                      <MenuItem key={year.value} value={year.value}>
                                        {year.value}
                                      </MenuItem>
                                  ))}
                                </TextField>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box mb={2}>
                              <Box mb={1} ml={0.5}>
                                <Typography component="label" variant="caption">
                                  {translate('Round')}
                                </Typography>

                                <TextField
                                    disabled={disabled||searchResult?.found}
                                    id="round"
                                    select={true}
                                    value={values.round}
                                    onChange={handleChange("round")}
                                    margin="normal"
                                    fullWidth
                                >
                                  {rounds(translate).map((round) => (
                                      <MenuItem key={round.id} value={round.id}>
                                        {round.value}
                                      </MenuItem>
                                  ))}
                                </TextField>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                          </Grid>
                        </Grid>

                        {!!searchResult && <React.Fragment>

                          <Card style={{padding: 20}}>
                            {searchResult.found ?
                                <Grid container spacing={2}>
                                  {renderCardItem('Full Name', `${searchResult.result?.first_name} ${searchResult.result?.father_name} ${searchResult.result?.last_name}`)}
                                  {renderCardItem('Mother Name', searchResult.result?.mother_name)}
                                  {renderCardItem('Gender', searchResult.result?.gender)}
                                  {renderCardItem('City', searchResult.result?.governorate)}
                                  {renderCardItem('Year', searchResult.result?.year)}
                                  {renderCardItem('Round', searchResult.result?.round)}
                                  {renderCardItem('QAID place', searchResult.result?.qaid_place)}
                                  {renderCardItem('QAID number', searchResult.result?.qaid_number)}
                                </Grid>
                                : <h4>{translate('Student is not exist')}</h4>}
                          </Card>

                          {/*{searchResult.found &&*/}
                          {/*  <Box mb={2}>*/}
                          {/*  <Box mb={1} ml={0.5}>*/}
                          {/*    <Typography component="label" variant="caption">*/}
                          {/*      {translate("Registeration number")}*/}
                          {/*    </Typography>*/}
                          {/*  </Box>*/}
                          {/*  <TextField*/}
                          {/*      disabled={disabled}*/}
                          {/*      onChange={handleChange}*/}
                          {/*      variant="outlined"*/}
                          {/*      size="small"*/}
                          {/*      type="text"*/}
                          {/*      id="registeration_number"*/}
                          {/*      name="registeration_number"*/}
                          {/*      value={values.registeration_number}*/}
                          {/*      onBlur={handleBlur}*/}
                          {/*      error={Boolean(touched.registeration_number && errors.registeration_number)}*/}
                          {/*      helperText={touched.registeration_number && errors.registeration_number}*/}
                          {/*      placeholder={translate("Registeration number")}*/}
                          {/*      fullWidth*/}
                          {/*  />*/}
                          {/*</Box>*/}
                          {/*}*/}
                        </React.Fragment>
                        }

                        <Box mt={4} mb={1}>
                          {isSubmitting ? (
                              <SuiButton
                                  disabled={true}
                                  variant="gradient"
                                  color={searchResult?.found ? "success" : "info"}
                                  fullWidth
                              >
                                {translate("Processing ...")}
                              </SuiButton>
                          ) : ( <React.Fragment>
                            {!(searchResult?.found) ? (
                                <SuiButton
                                    disabled={!(dirty && isValid)}
                                    type="submit"
                                    variant="gradient"
                                    color="info"
                                    fullWidth
                                >
                                  {translate("Search")}
                                </SuiButton>
                            ): (
                                <SuiButton
                                    disabled={!(dirty && isValid)}
                                    type="submit"
                                    variant="gradient"
                                    color="primary"
                                    fullWidth
                                >
                                  {translate("Add to candidates")}
                                </SuiButton>
                            )}
                          </React.Fragment>)}
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

export default SearchAddCandidateModal;
