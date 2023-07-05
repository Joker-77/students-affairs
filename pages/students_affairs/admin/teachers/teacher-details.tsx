import React, { FC, useEffect, useMemo, useState } from "react";
import {
  //IAddDescriptionModel,
  ITeacherModel,
  ICreateTeacherModel,
  IEditTeacherModel,
  //IEditTeacherBasicInfo,
  //IEvaluationMethod,
} from "../../../../Models/Teachers/TeacherModel";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import SuiButton from "../../../../components/SuiButton";
import { toast } from "react-toastify";
import TeacherService from "../../../../Services/TeacherService";
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
import {name_prefixes, work_fields, genders, degrees, statuses, authorities} from "../../../../Static/resources";

interface ITeacherDetailProps {
  isCreate: boolean;
  details: ITeacherModel;
  isEditable: boolean;
  setShow(): void;
  activateEdit(): void;
}

const TeacherDetail: FC<ITeacherDetailProps> = React.forwardRef(({
  isCreate,
  details,
  isEditable,
  setShow,
  activateEdit,
}, ref) => {
  const { translate } = useTranslation();
  const router = useRouter();

  const [teacher, setDetails] = useState<ITeacherModel>(details);
  const [fileName, setFileName] = useState<string>(
    teacher?.attachements[0]?.name
  );
  
  let teacherSchema = 
  //isCreate ?
   yup.object({
        first_name: yup
          .string(translate("First name"))
          .required(translate("Field is required")),
        last_name: yup
          .string(translate("Last name"))
          .required(translate("Field is required")),
        father_name: yup
          .string(translate("Father name"))
          .required(translate("Field is required")),
        national_number: yup
          .number(translate("National number"))
          .required(translate("Field is required")),
        number: yup
          .number(translate("ID Number")),
          //.required(translate("Field is required")),
        gender: yup
          .string(translate("Gender"))
          .required(translate("Field is required")),
        authority: yup
          .string(translate("Functional Body")),
        /*work_field: yup
          .string(translate("Work Field"))
          .required(translate("Field is required")),*/
        /*activity: yup
          .string(translate("Activity"))
          .required(translate("Field is required")),*/
        /*prefix_name: yup
          .string(translate("Name prefix"))
          .required(translate("Field is required")),*/
        primary_number: yup
          .number(translate("Primary number"))
          .required(translate("Field is required")),
        secondary_number: yup
          .number(translate("Secondary number")),
        office_number: yup
          .number(translate("Office number")),
        mobile_1: yup
          .number(translate("Mobile 1"))
          .required(translate("Field is required")),
        mobile_2: yup
          .number(translate("Mobile 2")),
        degree: yup
          .string(translate("Degree"))
          .required(translate("Field is required")),
        /*hiast_graduate: yup
          .boolean(translate("HIAST graduate"))
          .required(translate("Field is required")),*/
        status: yup
          .string(translate("Status"))
          .required(translate("Field is required")),        
        attachement: yup
          .mixed()
          //.required(translate("Need an attachement for this teacher")),
      });
    /*: yup.object({
        en_name: yup
          .string(translate("English Name"))
          .required(translate("Field is required")),
        ar_name: yup
          .string(translate("Arabic Name"))
          .required(translate("Field is required")),
        fr_name: yup
          .string(translate("French Name"))
          .required(translate("Field is required")),
        code: yup
          .string(translate("Teacher Code"))
          .required(translate("Field is required")),
        attachement: yup
          .mixed()
          .required(translate("Need an attachement for this teacher")),
      });*/

  let initialValues = 
  //isCreate ?
   {
        first_name: teacher?.person?.first_name,
        last_name: teacher?.person?.last_name,
        father_name: teacher?.father_name,
        national_number: teacher?.person?.national_number,
        number: teacher?.number,
        gender: teacher?.person?.sex,
        authority: teacher?.authority,
        work_field: teacher && teacher.work_field ? teacher.work_field : work_fields(translate)[0].id,
        activity: teacher?.activity,
        prefix_name: teacher && teacher.prefix_name ? teacher.prefix_name : name_prefixes(translate)[0].id,
        primary_number: teacher?.person?.phones?.find(
          (phone) => phone?.type === "primary"
        )?.phone,
        secondary_number: teacher?.person?.phones?.find(
          (phone) => phone?.type === "secondary"
        )?.phone,
        office_number: teacher?.person?.phones?.find(
          (phone) => phone?.type === "office"
        )?.phone,
        mobile_1: teacher?.person?.phones?.find(
          (phone) => phone?.type === "personal"
        )?.phone,
        mobile_2: teacher?.person?.phones?.filter(
          (phone) => phone?.type === "personal"
        )[1]?.phone,
        degree: teacher?.degree,
        hiast_graduate: teacher ? teacher.hiast_graduate : 1,
        status: teacher?.status,
        attachement: teacher?.attachement,
      };
    /*: {
        id: teacher.id,
        en_name: teacher.en_name,
        ar_name: teacher.ar_name,
        fr_name: teacher.fr_name,
        code: teacher.code,
        attachement: teacher?.current_description?.attachement,
      };*/
  /************************* Handle Edit Teacher ************/
  const handleEditTeacher = (event) => {
    event.preventDefault();
    activateEdit();
  };
  /************************* Handle Add Description ************/
  /*const validationSchema = useMemo(() => {
    //if (addDescription) {
      teacherSchema = yup.object({
        first_name: yup
          .string(translate("First name"))
          .required(translate("Field is required")),
        last_name: yup
          .string(translate("Last name"))
          .required(translate("Field is required")),
        father_name: yup
          .string(translate("Father name"))
          .required(translate("Field is required")),
        national_number: yup
          .number(translate("National number"))
          .required(translate("Field is required")),
        number: yup
          .number(translate("ID Number"))
          .required(translate("Field is required")),
        gender: yup
          .number(translate("Gender"))
          .required(translate("Field is required")),
        work_field: yup
          .string(translate("Work Field"))
          .required(translate("Field is required")),
        activity: yup
          .string(translate("Activity"))
          .required(translate("Field is required")),
        prefix_name: yup
          .string(translate("Name prefix"))
          .required(translate("Field is required")),
        primary_number: yup
          .number(translate("Primary number"))
          .required(translate("Field is required")),
        secondary_number: yup
          .number(translate("Secondary number")),
        office_number: yup
          .number(translate("Office number")),
        mobile_1: yup
          .number(translate("Mobile 1"))
          .required(translate("Field is required")),
        mobile_2: yup
          .number(translate("Mobile 2")),
        degree: yup
          .string(translate("Degree"))
          .required(translate("Field is required")),
        hiast_graduate: yup
          .boolean(translate("HIAST graduate"))
          .required(translate("Field is required")),
        status: yup
          .string(translate("Status"))
          .required(translate("Field is required")),        
        attachement: yup
          .mixed()
          .required(translate("Need an attachement for this teacher")),
      });
    } else {
      teacherSchema = yup.object({
        en_name: yup
          .string(translate("English Name"))
          .required(translate("Field is required")),
        ar_name: yup
          .string(translate("Arabic Name"))
          .required(translate("Field is required")),
        fr_name: yup
          .string(translate("French Name"))
          .required(translate("Field is required")),
        code: yup
          .string(translate("Teacher Code"))
          .required(translate("Field is required")),
        attachement: yup.mixed(),
        // .required(translate("Need an attachement for this teacher")),
      });
    }
    return teacherSchema;
  }, [addDescription]);*/

  /*const handleActivateAddDesc = (event) => {
    event.preventDefault();
    setAddDescription(!addDescription);
    if (addDescription) {
      initialValues = {
        en_name: teacher?.en_name,
        ar_name: teacher?.ar_name,
        fr_name: teacher?.fr_name,
        code: teacher?.code,
        credit: teacher?.current_description?.credit,
        theoretical_hours: teacher?.current_description?.hours?.find(
          (hour) => hour?.type == "theoretic"
        )?.hours,
        practical_hours: teacher?.current_description?.hours?.find(
          (hour) => hour?.type == "practical"
        )?.hours,
        mixed_hours: teacher?.current_description?.hours?.find(
          (hour) => hour?.type == "mixed"
        )?.hours,
        evaluation_methods:
          teacher?.current_description?.evaluation_methods?.map((ev, idx) => {
            return {
              id: ev.id,
              name: ev.name,
              percentage: ev.percentage * 100,
            };
          }),
        attachement: teacher?.current_description?.attachement,
      };
    } else {
      initialValues = {
        id: teacher.id,
        en_name: teacher.en_name,
        ar_name: teacher.ar_name,
        fr_name: teacher.fr_name,
        code: teacher.code,
        attachement: teacher?.current_description?.attachement,
      };
    }
  };*/
  /*************** Handle End Add Description For Teacher ******/

  const [errorPercentageMsg, setErrorPercentageMsg] = useState("");
  const submitForm = (values, setSubmitting) => {
    if (isCreate) {
      const payload: ICreateTeacherModel = {
        first_name: values.first_name,
        last_name: values.last_name,
        father_name: values.father_name,
        national_number: values.national_number,
        number: values.number,
        gender: values.gender,
        authority: values.authority,
        work_field: values.work_field,
        activity: values.activity,
        degree: values.degree,
        prefix_name: values.prefix_name,
        primary_number: values.primary_number,
        secondary_number: values.secondary_number,
        office_number: values.office_number,
        mobile_1: values.mobile_1,
        mobile_2: values.mobile_2,
        hiast_graduate: values.hiast_graduate,
        status: values.status,
      };
      //console.clear();
      const isFile = hiddenInput.current.value != "";
      if (isFile) {
        payload.attachement = values.attachement;
        payload.attachement_name = fileName;
      }
      console.log(payload);
      TeacherService.Add(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Teacher Added Successfully");
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
    /*else if (addDescription) {
      console.clear();
      console.log("add desc info");
      const payload: IAddDescriptionModel = {
        teacher_id: teacher.id,
        credit: values.credit,
        theoretic_hours: values.theoretical_hours,
        practical_hours: values.practical_hours,
        mixed_hours: values.mixed_hours,
        evaluation_methods: values.evaluation_methods,
      };
      const isFile = hiddenInput.current.value != "";
      if (isFile) payload.attachement = values.attachement;
      console.log(payload);
      TeacherService.AddDesc(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Description Added Successfully");
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
    }*/ 
    else {
      const payload: IEditTeacherModel = {
        id: teacher.id,
        first_name: values.first_name,
        last_name: values.last_name,
        father_name: values.father_name,
        national_number: values.national_number,
        number: values.number,
        gender: values.gender,
        authority: values.authority,
        work_field: values.work_field,
        activity: values.activity,
        degree: values.degree,
        prefix_name: values.prefix_name,
        primary_number: values.primary_number,
        secondary_number: values.secondary_number,
        office_number: values.office_number,
        mobile_1: values.mobile_1,
        mobile_2: values.mobile_2,
        hiast_graduate: values.hiast_graduate,
        status: values.status,
      };
      const isFile = hiddenInput.current.value != "";
      if (isFile) {
        payload.attachement = values.attachement;
        payload.attachement_name = fileName;
      }
      console.log(payload);
      TeacherService.Edit(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Teacher Edited Successfully");
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
    // TeacherService.Add(payload)
    //   .then(() => {})
    //   .catch((e) => console.error(e));
  };

  const hiddenInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenInput.current?.click();
  };
  const [changed, setChanged] = useState(false);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      setFileName(file?.name);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFile = async (e, setFieldValue) => {
    const file = e.target.files[0];
    setChanged(true);
    //check the size of image
    if (file?.size / 1024 / 1024 < 2) {
      const base64 = await convertToBase64(file);
      setFieldValue("attachement", base64);
    } else {
      toast.error("File size must be of 5MB or less");
    }
  };

  const initialWorkField = isCreate ? work_fields(translate)[0].id : initialValues.work_field;
  const [selectedWorkField, setSelectedWorkField] = useState(initialWorkField);
  const handleWorkFieldChange = (event, basicHandleChange) => {
    setSelectedWorkField(event.target.value);
    basicHandleChange(event);
  };

  return (
    <div ref={ref}>
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              {!isCreate ? (
                <>
                  <Typography variant="h5" component="div">
                    {translate("Teacher Name")}:{" "}
                    {`${details?.person?.first_name} ${details?.father_name} ${details?.person.last_name}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {translate("Teacher Details")}
                  </Typography>
                </>
              ) : (
                <Typography variant="h5" component="div">
                  {translate("Add New Teacher")}
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
            validationSchema={teacherSchema}
            onSubmit={(values, { setSubmitting }) => {
              const work_field = work_fields(translate).find((field) => 
                field.id == values.work_field
              );
              //console.log("values.work_field: " + values.work_field);
              //console.log("work_field: " + JSON.stringify(work_field));
              if (work_field && work_field.activities.length === 0)
                values.activity = undefined;
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
                    <Grid item xs={4} md={4}>
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
                    <Grid item xs={4} md={4}>
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
                    <Grid item xs={4} md={4}>
                      <GridItem>
                        <TextField
                          disabled={!isEditable}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="father_name"
                          name="father_name"
                          value={values.father_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.father_name && errors.father_name)}
                          helperText={touched.father_name && errors.father_name}
                          placeholder={translate("Father name")}
                          label={translate("Father name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="national_number"
                            name="national_number"
                            value={values.national_number}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.national_number &&
                                errors.national_number
                            )}
                            helperText={
                              touched.national_number &&
                              errors.national_number
                            }
                            placeholder={translate("National number")}
                            label={translate("National number")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
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
                      <Grid item xs={4} md={4}>
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
                    </Grid>
                  //)}
                            }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                        <FormControlLabel label={translate("Work Field")}
                          labelPlacement="top"
                          control={
                          <RadioGroup
                            onChange={(e) => handleWorkFieldChange(e, handleChange)}
                            id="work_field"
                            name="work_field"
                            value={values.work_field}
                            onBlur={handleBlur}
                            placeholder={translate("Work Field")}
                            //defaultValue={work_fields(translate)[0].id}
                          >
                            {work_fields(translate).map((field) => (
                              <>
                                <FormControlLabel key={field.id} value={field.id} control={<Radio />} label={field.value} />
                                {//values.work_field === field.id ?
                                selectedWorkField === field.id &&
                                field.activities?.length > 0 ?
                                (<GridItem><TextField
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
                                  placeholder={field.activitiesLabel}
                                  label={field.activitiesLabel}
                                  fullWidth
                               >
                                  {field.activities?.map((activity) => (
                                    <MenuItem key={activity.id} value={activity.id}>
                                      {activity.value}
                                    </MenuItem>
                                  ))}
                                </TextField></GridItem>) :
                                  (<></>)}
                              </>
                            ))}
                          </RadioGroup>
                          } />
                        </GridItem>
                      </Grid>

                      <Grid item xs={4} md={4}>
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
                      </Grid>

                      <Grid item xs={4} md={4}>
                        <GridItem>
                        <FormControlLabel label={translate("Name prefix")}
                          labelPlacement="top"
                          control={
                          <RadioGroup
                            onChange={handleChange}
                            id="prefix_name"
                            name="prefix_name"
                            value={values.prefix_name}
                            onBlur={handleBlur}
                            placeholder={translate("Name prefix")}
                            //defaultValue={name_prefixes(translate)[0].id}
                          >
                            {name_prefixes(translate).map((prefix) => (
                                <FormControlLabel key={prefix.id} value={prefix.id} control={<Radio />} label={prefix.value} />
                            ))}
                          </RadioGroup>
                          } />
                        </GridItem>
                      </Grid>
                    </Grid>
                  //)
                }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="primary_number"
                            name="primary_number"
                            value={values.primary_number}
                            onBlur={handleBlur}
                            error={Boolean(touched.primary_number && errors.primary_number)}
                            helperText={touched.primary_number && errors.primary_number}
                            placeholder={translate("Primary number")}
                            label={translate("Primary number")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="secondary_number"
                            name="secondary_number"
                            value={values.secondary_number}
                            onBlur={handleBlur}
                            error={Boolean(touched.secondary_number && errors.secondary_number)}
                            helperText={touched.secondary_number && errors.secondary_number}
                            placeholder={translate("Secondary number")}
                            label={translate("Secondary number")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
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
                    </Grid>
                  //)
                }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="mobile_1"
                            name="mobile_1"
                            value={values.mobile_1}
                            onBlur={handleBlur}
                            error={Boolean(touched.mobile_1 && errors.mobile_1)}
                            helperText={touched.mobile_1 && errors.mobile_1}
                            placeholder={translate("Mobile 1")}
                            label={translate("Mobile 1")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="mobile_2"
                            name="mobile_2"
                            value={values.mobile_2}
                            onBlur={handleBlur}
                            error={Boolean(touched.mobile_2 && errors.mobile_2)}
                            helperText={touched.mobile_2 && errors.mobile_2}
                            placeholder={translate("Mobile 2")}
                            label={translate("Mobile 2")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        {/* Intentionally empty */}
                      </Grid>
                    </Grid>
                  //)
                }

                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="select"
                            id="degree"
                            name="degree"
                            select={true}
                            value={values.degree}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.degree && errors.degree
                            )}
                            helperText={
                              touched.degree && errors.degree
                            }
                            placeholder={translate("Degree")}
                            label={translate("Degree")}
                            fullWidth
                          >
                            {degrees(translate).map((degree) => (
                              <MenuItem key={degree.id} value={degree.id}>
                                {degree.value}
                              </MenuItem>
                            ))}
                          </TextField>
                        </GridItem>
                      </Grid>
                      
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          <FormControlLabel label={translate("HIAST graduate")}
                            onChange={handleChange}
                            control={
                              <Checkbox
                                disabled={!isEditable}
                                onChange={handleChange}
                                id="hiast_graduate"
                                name="hiast_graduate"
                                checked={values.hiast_graduate == 1} 
                                onBlur={handleBlur}
                                placeholder={translate("HIAST graduate")}
                                //defaultChecked
                              />
                            } />
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        {/* Intentionally empty */}
                      </Grid>
                    </Grid>
                  //)
                }
                  {//isCreate && (
                    <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                      <Grid item xs={4} md={4}>
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
                      
                      <Grid item xs={4} md={4}>
                        <GridItem>
                          {/* Intentionally empty */}
                        </GridItem>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        {/* Intentionally empty */}
                      </Grid>
                    </Grid>
                  //)
                }

                  <Divider style={{ margin: "2em 0em" }} />
                  
                  <Box mb={1} ml={0.5}>
                    <Typography component="label" variant="caption">
                      <h5>{translate("Attachements")}</h5>
                    </Typography>
                  </Box>
                  <Box>
                    <SuiButton
                      disabled={!isEditable}
                      color="primary"
                      onClick={handleClick}
                    >
                      {translate("Upload a file")}
                      <AttachFile />
                    </SuiButton>
                    <input
                      id="attachement"
                      name="attachement"
                      type="file"
                      ref={hiddenInput}
                      style={{ display: "none" }}
                      onChange={(event) => {
                        handleFile(event, setFieldValue);
                      }}
                      className="form-control"
                    />
                    <Grid md={4} style={{ marginTop: "1em" }}>
                      <TextField
                        fullWidth
                        helperText={touched?.attachement && errors?.attachement}
                        error={Boolean(
                          errors?.attachement && touched?.attachement
                        )}
                        variant="outlined"
                        type="text"
                        size="small"
                        disabled
                        placeholder=""
                        value={fileName}
                      />
                    </Grid>
                    {//values.attachement != null &&
                      //values.attachement != "" &&
                      teacher?.attachements &&
                      teacher?.attachements.length != 0 &&
                      !changed && (
                        <Grid md={6} style={{ marginTop: "1em" }}>
                          <a
                            href={
                              process.env.BASE_URL + "/" + teacher.attachements[0].url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SuiButton
                              type="button"
                              disabled={true}
                              variant="gradient"
                              color="warning"
                              fullWidth
                            >
                              <CloudDownload style={{ margin: "0em .3em" }} />
                              {translate("Download")}
                            </SuiButton>
                          </a>
                        </Grid>
                      )}
                  </Box>
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
                        onClick={handleEditTeacher}
                        type="button"
                        variant="gradient"
                        color="info"
                      >
                        {translate("Edit Teacher")}
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
    </div>
  );
});

(TeacherDetail as any).layout = Admin;
(TeacherDetail as any).auth = false;

export default TeacherDetail;
