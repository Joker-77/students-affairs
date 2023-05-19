import React, { FC, useEffect, useMemo, useState } from "react";
import {
  //IAddDescriptionModel,
  IObserverModel,
  ICreateObserverModel,
  IEditObserverModel,
  //IEditObserverBasicInfo,
  //IEvaluationMethod,
} from "../../../../Models/Observers/ObserverModel";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import SuiButton from "../../../../components/SuiButton";
import { toast } from "react-toastify";
import ObserverService from "../../../../Services/ObserverService";
import { useRouter } from "next/router";
import {
  Add,
  ArrowBack,
  AttachFile,
  //CheckBox,
  CloudDownload,
  FontDownload,
} from "@material-ui/icons";
import Card from "../../../../components/Card/Card";
import {
  Box,
  CardActions,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";
import {genders, statuses, authorities, work_fields} from "../../../../Static/resources";

interface IObserverDetailProps {
  isCreate: boolean;
  details: IObserverModel;
  isEditable: boolean;
  setShow(): void;
  activateEdit(): void;
}

const ObserverDetail: FC<IObserverDetailProps> = ({
  isCreate,
  details,
  isEditable,
  setShow,
  activateEdit,
}) => {
  const { translate } = useTranslation();
  const router = useRouter();

  const [observer, setDetails] = useState<IObserverModel>(details);
  
  let observerSchema = 
  //isCreate ?
   yup.object({
        first_name: yup
          .string(translate("First name"))
          .required(translate("Field is required")),
        last_name: yup
          .string(translate("Last name"))
          .required(translate("Field is required")),
        number: yup
          .number(translate("ID Number"))
          .required(translate("Field is required")),
        gender: yup
          .string(translate("Gender"))
          .required(translate("Field is required")),
        authority: yup
          .string(translate("Functional Body")),
        activity: yup
          .string(translate("Activity"))
          .required(translate("Field is required")),
        office_number: yup
          .number(translate("Office number"))
          .required(translate("Field is required")),
        mobile: yup
          .number(translate("Mobile"))
          .required(translate("Field is required")),
        excluded: yup
          .boolean(translate("Excluded"))
          .required(translate("Field is required")),
        status: yup
          .string(translate("Status")),
          //.required(translate("Field is required")),        
      });

  let initialValues = 
  //isCreate ?
   {
        first_name: observer?.person?.first_name,
        last_name: observer?.person?.last_name,
        number: observer?.number,
        gender: observer?.person?.sex,
        authority: observer?.authority,
        activity: observer?.activity,
        office_number: observer?.person?.phones?.find(
          (phone) => phone?.type === "office"
        )?.phone,
        mobile: observer?.person?.phones?.find(
          (phone) => phone?.type === "personal"
        )?.phone,
        excluded: observer ? observer.excluded : 0,
        status: observer?.status,
      };
    
  /************************* Handle Edit Observer ************/
  const handleEditObserver = (event) => {
    event.preventDefault();
    activateEdit();
  };

  /*************** Handle End Add Description For Observer ******/

  const submitForm = (values, setSubmitting) => {
    if (isCreate) {
      const payload: ICreateObserverModel = {
        first_name: values.first_name,
        last_name: values.last_name,
        number: values.number,
        gender: values.gender,
        authority: values.authority,
        activity: values.activity,
        office_number: values.office_number,
        mobile: values.mobile,
        excluded: values.excluded,
        status: values.status,
      };
      //console.clear();
      console.log(payload);
      ObserverService.Add(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Observer Added Successfully");
            setShow();
          } else {
            console.log(response.error);
            toast.error(response.error.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
          throw new Error(error);
        });
    } 
    else {
      const payload: IEditObserverModel = {
        id: observer.id,
        first_name: values.first_name,
        last_name: values.last_name,
        number: values.number,
        gender: values.gender,
        authority: values.authority,
        activity: values.activity,
        office_number: values.office_number,
        mobile: values.mobile,
        excluded: values.excluded,
        status: values.status,
      };
      console.log(payload);
      ObserverService.Edit(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Observer Edited Successfully");
            setShow();
          } else {
            console.log(response.error);
            toast.error(response.error.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
          throw new Error(error);
        });
    }
    setSubmitting(false);
  };

  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              {!isCreate ? (
                <>
                  <Typography variant="h5" component="div">
                    {translate("Observer Name")}:{" "}
                    {`${details?.person?.first_name} ${details?.person.last_name}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {translate("Observer Details")}
                  </Typography>
                </>
              ) : (
                <Typography variant="h5" component="div">
                  {translate("Add New Observer")}
                </Typography>
              )}
            </GridItem>
            <GridItem md={3} xs={12} sm={12}>
              <SuiButton onClick={setShow} color={"warning"}>
                <ArrowBack />
                {translate("Back To Previous Page")}
              </SuiButton>
            </GridItem>
          </Grid>
        </Card>
        <Card style={{ padding: "3em 3em", margin: "5px 0px" }}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={observerSchema}
            onSubmit={(values, { setSubmitting }) => {
              submitForm(values, setSubmitting);
              // console.clear();
              // console.log(values);
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
                setFieldValue,
              } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid
                      container
                      md={12}
                      style={{
                        margin: "1em 0em",
                        color: "red",
                        display:
                          errors && // 👈 null and undefined check
                          Object.keys(errors).length === 0 &&
                          Object.getPrototypeOf(errors) === Object.prototype
                            ? "none"
                            : "block",
                      }}
                    >
                      <Grid item xs={3} md={3} style={{ color: "red" }}>
                        {JSON.stringify(errors)}
                      </Grid>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="number"
                            name="number"
                            value={values.number}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.number && errors.number
                            )}
                            helperText={
                              touched.number && errors.number
                            }
                            placeholder={translate("ID Number")}
                            label={translate("ID Number")}
                            fullWidth
                          />
                        </GridItem>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        {/* Intentionally empty */}
                    </Grid>
                  </Grid>
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid item xs={6} md={6}>
                      <GridItem>
                        <TextField
                          disabled={!isEditable}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="first_name"
                          name="first_name"
                          value={values.first_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.first_name && errors.first_name)}
                          helperText={touched.first_name && errors.first_name}
                          placeholder={translate("First name")}
                          label={translate("First name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <GridItem>
                        <TextField
                          disabled={!isEditable}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="last_name"
                          name="last_name"
                          value={values.last_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.last_name && errors.last_name)}
                          helperText={touched.last_name && errors.last_name}
                          placeholder={translate("Last name")}
                          label={translate("Last name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="select"
                            id="gender"
                            name="gender"
                            select={true}
                            value={values.gender}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.gender && errors.gender
                            )}
                            helperText={
                              touched.gender && errors.gender
                            }
                            placeholder={translate("Gender")}
                            label={translate("Gender")}
                            fullWidth
                          >
                            {genders(translate).map((gender) => (
                              <MenuItem key={gender.id} value={gender.id}>
                                {gender.value}
                              </MenuItem>
                            ))}
                          </TextField>
                        </GridItem>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="select"
                            id="authority"
                            name="authority"
                            select={true}
                            value={values.authority}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.authority && errors.authority
                            )}
                            helperText={
                              touched.authority && errors.authority
                            }
                            placeholder={translate("Functional Body")}
                            label={translate("Functional Body")}
                            fullWidth
                          >
                            {authorities(translate).map((authority) => (
                              <MenuItem key={authority.id} value={authority.id}>
                                {authority.value}
                              </MenuItem>
                            ))}
                          </TextField>
                      </GridItem>
                    </Grid>
                  </Grid>
                }
                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                            <TextField
                                disabled={!isEditable}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                type="select"
                                id="activity"
                                name="activity"
                                select={true}
                                value={values.activity}
                                onBlur={handleBlur}
                                error={Boolean(
                                  touched.activity && errors.activity
                                )}
                                helperText={
                                  touched.activity && errors.activity
                                }
                                placeholder={translate("Activity in HIAST")}
                                label={translate("Activity in HIAST")}
                                fullWidth
                            >
                                {work_fields(translate)[0].activities?.map((activity) => (
                                    <MenuItem key={activity.id} value={activity.id}>
                                      {activity.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </GridItem>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="select"
                            id="status"
                            name="status"
                            select={true}
                            value={values.status}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.status && errors.status
                            )}
                            helperText={
                              touched.status && errors.status
                            }
                            placeholder={translate("Status")}
                            label={translate("Status")}
                            fullWidth
                          >
                            {statuses(translate).map((status) => (
                              <MenuItem key={status.id} value={status.id}>
                                {status.value}
                              </MenuItem>
                            ))}
                          </TextField>
                        </GridItem>
                      </Grid>
                    </Grid>
                  //)
                }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="office_number"
                            name="office_number"
                            value={values.office_number}
                            onBlur={handleBlur}
                            error={Boolean(touched.office_number && errors.office_number)}
                            helperText={touched.office_number && errors.office_number}
                            placeholder={translate("Office number")}
                            label={translate("Office number")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={values.mobile}
                            onBlur={handleBlur}
                            error={Boolean(touched.mobile && errors.mobile)}
                            helperText={touched.mobile && errors.mobile}
                            placeholder={translate("Mobile")}
                            label={translate("Mobile")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                    </Grid>
                  //)
                }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={6} md={6}>
                        <GridItem>
                          <FormControlLabel label={translate("Excluded")}
                            onChange={handleChange}
                            control={
                              <Checkbox
                                disabled={!isEditable}
                                onChange={handleChange}
                                id="excluded"
                                name="excluded"
                                checked={values.excluded == 1} 
                                onBlur={handleBlur}
                                placeholder={translate("Excluded")}
                              />
                            } />
                        </GridItem>
                      </Grid>
                      <Grid item xs={6} md={6}>
                        {/* Intentionally empty */}
                      </Grid>
                    </Grid>
                  //)
                }
                
                  <Divider style={{ margin: "2em 0em" }} />
                  
                  <Box
                    mt={4}
                    mb={1}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {isEditable ? (
                      isSubmitting ? (
                        <SuiButton
                          type="button"
                          disabled={true}
                          variant="gradient"
                          color="info"
                        >
                          {translate("Processing ...")}
                        </SuiButton>
                      ) : (
                        <SuiButton
                          style={{
                            color: "rgb(255, 255, 255)",
                            background: "rgb(23, 193, 232)",
                          }}
                          disabled={!isValid && isSubmitting}
                          type="submit"
                        >
                          {translate("Save")}
                        </SuiButton>
                      )
                    ) : (
                      <SuiButton
                        onClick={handleEditObserver}
                        type="button"
                        variant="gradient"
                        color="info"
                      >
                        {translate("Edit Observer")}
                      </SuiButton>
                    )}
                    
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Card>
        <CardActions></CardActions>
      </Grid>
    </Grid>
  );
};

(ObserverDetail as any).layout = Admin;
(ObserverDetail as any).auth = false;

export default ObserverDetail;
