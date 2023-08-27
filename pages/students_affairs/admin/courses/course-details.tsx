import React, { FC, useEffect, useMemo, useState } from "react";
import {
  IAddDescriptionModel,
  ICourseModel,
  ICreateCourseModel,
  IEditCourseBasicInfo,
  IEvaluationMethod,
} from "../../../../Models/Courses/CourseModel";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import SuiButton from "../../../../components/SuiButton";
import { toast } from "react-toastify";
import CourseService from "../../../../Services/CourseService";
import { useRouter } from "next/router";
import {
  Add,
  ArrowBack,
  AttachFile,
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
} from "@material-ui/core";
import GridItem from "../../../../components/Grid/GridItem";

interface ICourseDetailProps {
  isCreate: boolean;
  details: ICourseModel;
  isEditable: boolean;
  handleBack(): void;
  activateEdit(): void;
}

const CourseDetail: FC<ICourseDetailProps> = ({
  isCreate,
  details,
  isEditable,
  handleBack,
  activateEdit,
}) => {
  console.clear();
  console.log(details);
  const methodTypes = [
    {
      name: "مذاكرة",
    },
    {
      name: "أعمال",
    },
    {
      name: "امتحان",
    },
    {
      name: "آخر",
    }
  ];
  const router = useRouter();
  const { translate } = useTranslation();
  const [course, setDetails] = useState<ICourseModel>(details);
  const [fileName, setFileName] = useState<string>(
    course ?.current_description ?.attachement
  );
  const [addDescription, setAddDescription] = useState(isCreate);
  let courseSchema = isCreate
    ? yup.object({
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
        .string(translate("Course Code"))
        .required(translate("Field is required")),
      theoretical_hours: yup
        .number("Theoretical Hours")
        .min(0, translate("Field must be greater than 0"))
        .required(translate("Field is required")),
      practical_hours: yup
        .number("Practical Hours")
        .min(0, translate("Field must be greater than 0"))
        .required(translate("Field is required")),
      mixed_hours: yup
        .number("Practical Hours")
        .min(0, translate("Field must be greater than 0"))
        .required(translate("Field is required")),
      evaluation_methods: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string(),
            percentage: yup
              .number()
              .min(0, translate("Field must be greater than 0"))
              .max(100, translate("Field must be less than 100"))
              .transform((value) => (isNaN(value) ? undefined : value))
              .required("Percentage is required"),
          })
        )
        .min(1, translate("Need at least one evaluation method"))
        .test((methods: Array<{ percentage: number }>) => {
          const sum = methods ?.reduce(
            (acc, curr) => acc + curr.percentage,
            0
          );
          if (sum != 100) {
            isNaN(sum)
              ? setErrorPercentageMsg(
                translate("Percentage should be 100%, but you have:") + "0%"
              )
              : setErrorPercentageMsg(
                translate("Percentage should be 100%, but you have:") +
                sum +
                "%"
              );
            return new yup.ValidationError(
              translate(
                `Percentage should be 100%, but you have ${sum}%`,
                undefined,
                translate("Evaluation Methods")
              )
            );
          } else {
            setErrorPercentageMsg("");
            return true;
          }
        }),
      attachement: yup
        .mixed()
        .required(translate("Need an attachement for this course")),
    })
    : yup.object({
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
        .string(translate("Course Code"))
        .required(translate("Field is required")),
      attachement: yup
        .mixed()
        .required(translate("Need an attachement for this course")),
    });

  let initialValues = isCreate
    ? {
      en_name: course ?.en_name,
      ar_name: course ?.ar_name,
      fr_name: course ?.fr_name,
      code: course ?.code,
      credit: course ?.current_description ?.credit,
      theoretical_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "theoretic"
        ) ?.hours,
      practical_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "practical"
        ) ?.hours,
      mixed_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "mixed"
        ) ?.hours,
      evaluation_methods:
        course ?.current_description ?.evaluation_methods ?.map((ev, idx) => {
          return {
            id: ev.id,
            name: ev.name,
            percentage: ev.percentage,
          };
        }),
      attachement: course ?.current_description ?.attachement,
    }
    : {
      id: course.id,
      en_name: course.en_name,
      ar_name: course.ar_name,
      fr_name: course.fr_name,
      code: course.code,
      credit: course ?.current_description ?.credit,
      theoretical_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "theoretic"
        ) ?.hours,
      practical_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "practical"
        ) ?.hours,
      mixed_hours: course ?.current_description ?.hours ?.find(
        (hour) => hour ?.type == "mixed"
        ) ?.hours,
      evaluation_methods:
        course ?.current_description ?.evaluation_methods ?.map((ev, idx) => {
          return {
            id: ev.id,
            name: ev.name,
            percentage: ev.percentage,
          };
        }),
      attachement: course ?.current_description ?.attachement,
    };
  /************************* Handle Edit Course ************/
  const handleEditCourse = (event) => {
    event.preventDefault();
    activateEdit();
  };
  /************************* Handle Add Description ************/
  const validationSchema = useMemo(() => {
    if (addDescription) {
      courseSchema = yup.object({
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
          .string(translate("Course Code"))
          .required(translate("Field is required")),
        theoretical_hours: yup
          .number("Theoretical Hours")
          .min(0, translate("Field must be greater than 0"))
          .required(translate("Field is required")),
        practical_hours: yup
          .number("Practical Hours")
          .min(0, translate("Field must be greater than 0"))
          .required(translate("Field is required")),
        mixed_hours: yup
          .number("Practical Hours")
          .min(0, translate("Field must be greater than 0"))
          .required(translate("Field is required")),
        credit: yup
          .number("Credit Hours")
          .min(0, translate("Field must be greater than 0"))
          .required(translate("Field is required")),
        evaluation_methods: yup
          .array()
          .of(
            yup.object().shape({
              name: yup.string(),
              percentage: yup
                .number()
                .min(0, translate("Field must be greater than 0"))
                .max(100, translate("Field must be less than 100"))
                .transform((value) => (isNaN(value) ? undefined : value))
                .required("Percentage is required"),
            })
          )
          .min(1, translate("Need at least one evaluation method"))
          .test((methods: Array<{ percentage: number }>) => {
            const sum = methods ?.reduce(
              (acc, curr) => acc + curr.percentage,
              0
            );
            if (sum != 100) {
              isNaN(sum)
                ? setErrorPercentageMsg(
                  translate("Percentage should be 100%, but you have:") + "0%"
                )
                : setErrorPercentageMsg(
                  translate("Percentage should be 100%, but you have:") +
                  sum +
                  "%"
                );
              return new yup.ValidationError(
                translate(
                  `Percentage should be 100%, but you have ${sum}%`,
                  undefined,
                  translate("Evaluation Methods")
                )
              );
            } else {
              setErrorPercentageMsg("");
              return true;
            }
          }),
        attachement: yup.mixed(),
        // .required(translate("Need an attachement for this course")),
      });
    } else {
      courseSchema = yup.object({
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
          .string(translate("Course Code"))
          .required(translate("Field is required")),
        attachement: yup.mixed(),
        // .required(translate("Need an attachement for this course")),
      });
    }
    return courseSchema;
  }, [addDescription]);

  const handleActivateAddDesc = (event) => {
    event.preventDefault();
    setAddDescription(!addDescription);
    if (addDescription) {
      initialValues = {
        en_name: course ?.en_name,
        ar_name: course ?.ar_name,
        fr_name: course ?.fr_name,
        code: course ?.code,
        credit: course ?.current_description ?.credit,
        theoretical_hours: course ?.current_description ?.hours ?.find(
          (hour) => hour ?.type == "theoretic"
        ) ?.hours,
        practical_hours: course ?.current_description ?.hours ?.find(
          (hour) => hour ?.type == "practical"
        ) ?.hours,
        mixed_hours: course ?.current_description ?.hours ?.find(
          (hour) => hour ?.type == "mixed"
        ) ?.hours,
        evaluation_methods:
          course ?.current_description ?.evaluation_methods ?.map((ev, idx) => {
            return {
              id: ev.id,
              name: ev.name,
              percentage: ev.percentage * 100,
            };
          }),
        attachement: course ?.current_description ?.attachement,
      };
    } else {
      initialValues = {
        id: course.id,
        en_name: course.en_name,
        ar_name: course.ar_name,
        fr_name: course.fr_name,
        code: course.code,
        attachement: course ?.current_description ?.attachement,
      };
    }
  };
  /*************** Handle End Add Description For Course ******/

  const [errorPercentageMsg, setErrorPercentageMsg] = useState("");
  const submitForm = (values, setSubmitting) => {
    if (isCreate) {
      const payload: ICreateCourseModel = {
        en_name: values.en_name,
        fr_name: values.fr_name,
        ar_name: values.ar_name,
        code: values.code,
        credit: values.credit,
        theoretic_hours: values.theoretical_hours,
        practical_hours: values.practical_hours,
        mixed_hours: values.mixed_hours,
        evaluation_methods: values.evaluation_methods,
      };
      console.clear();
      const isFile = hiddenInput.current.value != "";
      if (isFile) payload.attachement = values.attachement;
      console.log(payload);
      CourseService.Add(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Course Added Successfully");
            handleBack();
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
    } else if (addDescription) {
      console.clear();
      console.log("add desc info");
      const payload: IAddDescriptionModel = {
        course_id: course.id,
        credit: values.credit,
        theoretic_hours: values.theoretical_hours,
        practical_hours: values.practical_hours,
        mixed_hours: values.mixed_hours,
        evaluation_methods: values.evaluation_methods.map((e) => {
          return {
            name: e.name,
            percentage: e.percentage,
          };
        }),
      };
      const isFile = hiddenInput.current.value != "";
      if (isFile) payload.attachement = values.attachement;
      console.log(payload);
      CourseService.AddDesc(payload)
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
          // throw new Error(error);
        });
    } else {
      const payload: IEditCourseBasicInfo = {
        id: course.id,
        en_name: values.en_name,
        ar_name: values.ar_name,
        fr_name: values.fr_name,
        code: values.code,
      };
      const isFile = hiddenInput.current.value != "";
      if (isFile) payload.attachement = values.attachement;
      console.log(payload);
      CourseService.Edit(payload)
        .then((response) => {
          if (response.success) {
            toast.success("Courses Edited Successfully");
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
    // CourseService.Add(payload)
    //   .then(() => {})
    //   .catch((e) => console.error(e));
  };

  const hiddenInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenInput.current ?.click();
  };
  const [changed, setChanged] = useState(false);
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      setFileName(file ?.name);
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
    if (file ?.size / 1024 / 1024 < 2) {
      const base64 = await convertToBase64(file);
      setFieldValue("attachement", base64);
    } else {
      toast.error("File size must be of 5MB or less");
    }
  };
  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              <Typography variant="h5" component="div">
                {/* {translate("Course Name")}:{" "}
                {details ?.ar_name ?? "التحليل الرياضي"} */}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {translate("Course Details")}
              </Typography>
            </GridItem>
            <GridItem md={3} xs={12} sm={12}>
              <SuiButton onClick={() => handleBack()} color={"warning"}>
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
            validationSchema={validationSchema}
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
                      {/* <Grid item xs={3} md={3} style={{ color: "red" }}>
                        {JSON.stringify(errors)}
                      </Grid> */}
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={!(isEditable || addDescription)}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="ar_name"
                          name="ar_name"
                          value={values.ar_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.ar_name && errors.ar_name)}
                          helperText={touched.ar_name && errors.ar_name}
                          placeholder={translate("Arabic Name")}
                          label={translate("Arabic Name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={!(isEditable || addDescription)}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="en_name"
                          name="en_name"
                          value={values.en_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.en_name && errors.en_name)}
                          helperText={touched.en_name && errors.en_name}
                          placeholder={translate("English Name")}
                          label={translate("English Name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={!(isEditable || addDescription)}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="fr_name"
                          name="fr_name"
                          value={values.fr_name}
                          onBlur={handleBlur}
                          error={Boolean(touched.fr_name && errors.fr_name)}
                          helperText={touched.fr_name && errors.fr_name}
                          placeholder={translate("French Name")}
                          label={translate("French Name")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={!(isEditable || addDescription)}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="text"
                          id="code"
                          name="code"
                          value={values.code}
                          onBlur={handleBlur}
                          error={Boolean(touched.code && errors.code)}
                          helperText={touched.code && errors.code}
                          placeholder={translate("Course Code")}
                          label={translate("Course Code")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  {(isCreate || addDescription) && (
                    <Grid container md={12} xs={12}>
                      <Grid item xs={3} md={3}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="number"
                            id="theoretical_hours"
                            name="theoretical_hours"
                            value={values.theoretical_hours}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.theoretical_hours &&
                              errors.theoretical_hours
                            )}
                            helperText={
                              touched.theoretical_hours &&
                              errors.theoretical_hours
                            }
                            placeholder={translate("Theoretical Hours")}
                            label={translate("Theoretical Hours")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="number"
                            id="practical_hours"
                            name="practical_hours"
                            value={values.practical_hours}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.practical_hours && errors.practical_hours
                            )}
                            helperText={
                              touched.practical_hours && errors.practical_hours
                            }
                            placeholder={translate("Practical Hours")}
                            label={translate("Practical Hours")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="number"
                            id="mixed_hours"
                            name="mixed_hours"
                            value={values.mixed_hours}
                            onBlur={handleBlur}
                            error={Boolean(
                              touched.mixed_hours && errors.mixed_hours
                            )}
                            helperText={
                              touched.mixed_hours && errors.mixed_hours
                            }
                            placeholder={translate("Mixed Hours")}
                            label={translate("Mixed Hours")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <GridItem>
                          <TextField
                            disabled={!isEditable}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            type="text"
                            id="credit"
                            name="credit"
                            value={values.credit}
                            onBlur={handleBlur}
                            error={Boolean(touched.credit && errors.credit)}
                            helperText={touched.credit && errors.credit}
                            placeholder={translate(
                              "Number of accredited hours"
                            )}
                            label={translate("Number of accredited hours")}
                            fullWidth
                          />
                        </GridItem>
                      </Grid>
                    </Grid>
                  )}
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid item xs={3} md={3}></Grid>
                  </Grid>
                  <Divider style={{ margin: "2em 0em" }} />
                  {(isCreate || addDescription) && (
                    <>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          <h5>{translate("Evaluations Method")}</h5>
                        </Typography>
                      </Box>
                      <Box my={1}>
                        <Typography component="label" variant="caption">
                          {errorPercentageMsg && (
                            <label style={{ color: "rgb(234, 6, 6)" }}>
                              {errorPercentageMsg}
                            </label>
                          )}
                        </Typography>
                      </Box>
                      <FieldArray
                        name={"evaluation_methods"}
                        render={(arrayHelpers) => (
                          <div>
                            {values ?.evaluation_methods &&
                              values ?.evaluation_methods.length > 0 ? (
                                values ?.evaluation_methods.map(
                                  (method, index) => (
                                    <div key={index}>
                                      <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                          <TextField
                                            disabled={!isEditable}
                                            variant="outlined"
                                            size="small"
                                            type="select"
                                            id={`evaluation_methods.${index}.name`}
                                            name={`evaluation_methods.${index}.name`}
                                            select={true}
                                            value={method.name}
                                            onChange={handleChange(
                                              `evaluation_methods.${index}.name`
                                            )}
                                            onBlur={handleBlur}
                                            fullWidth
                                          >
                                            {methodTypes ?.map((type) => (
                                              <MenuItem
                                                key={type.name}
                                                value={type.name}
                                              >
                                                {type.name}
                                              </MenuItem>
                                            ))}
                                          </TextField>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={4}
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <TextField
                                            disabled={!isEditable}
                                            onChange={handleChange(
                                              `evaluation_methods.${index}.percentage`
                                            )}
                                            variant="outlined"
                                            size="small"
                                            type="number"
                                            id={`$evaluation_methods.${index}.percentage`}
                                            name={`evaluation_methods.${index}.percentage`}
                                            value={method.percentage}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                              errors &&
                                              errors.evaluation_methods &&
                                              errors.evaluation_methods[
                                              index
                                              ] &&
                                              errors.evaluation_methods[index]
                                                .percentage &&
                                              touched &&
                                              touched.evaluation_methods &&
                                              touched.evaluation_methods[
                                              index
                                              ] &&
                                              touched.evaluation_methods[index]
                                                .percentage
                                            )}
                                            helperText={
                                              errors &&
                                              errors.evaluation_methods &&
                                              errors.evaluation_methods[index] &&
                                              errors.evaluation_methods[index]
                                                .percentage &&
                                              touched &&
                                              touched.evaluation_methods &&
                                              touched.evaluation_methods[index] &&
                                              touched.evaluation_methods[index]
                                                .percentage
                                            }
                                            placeholder={translate("Percentage")}
                                          //fullWidth
                                          />
                                          <label
                                            style={{ color: "rgb(234, 6, 6)" }}
                                          >
                                            <ErrorMessage
                                              name={`evaluation_methods.${index}.percentage`}
                                            />
                                          </label>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={4}
                                          style={{
                                            display: isEditable ? "" : "none",
                                          }}
                                        >
                                          <SuiButton
                                            style={{ margin: 5 }}
                                            color="error"
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            } // remove a friend from the list
                                          >
                                            -
                                        </SuiButton>
                                          <SuiButton
                                            style={{ margin: 5 }}
                                            color="primary"
                                            onClick={() =>
                                              arrayHelpers.push({
                                                name: "",
                                                percentage: 0,
                                              })
                                            } // insert an empty string at a position
                                          >
                                            +
                                        </SuiButton>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  )
                                )
                            ) : (
                                  <React.Fragment>
                                    <SuiButton
                                      style={{ display: isEditable ? "" : "none" }}
                                      color="primary"
                                      onClick={() =>
                                        arrayHelpers.push({
                                          name: "",
                                          percentage: 0,
                                        })
                                      }
                                    >
                                      {/* show this when user has removed all phones from the list */}
                                      {translate("Add an evaluation method")}
                                      <Add />
                                    </SuiButton>
                                  </React.Fragment>
                                )}
                          </div>
                        )}
                      />
                      <Divider style={{ margin: "2em 0em" }} />
                    </>
                  )}
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
                    <Grid md={6} style={{ marginTop: "1em" }}>
                      <TextField
                        fullWidth
                        helperText={touched ?.attachement && errors ?.attachement}
                        error={Boolean(
                          errors ?.attachement && touched ?.attachement
                        )}
                        variant="outlined"
                        type="text"
                        size="small"
                        disabled
                        placeholder=""
                        value={fileName}
                      />
                    </Grid>
                    {values.attachement != null &&
                      values.attachement != "" &&
                      !changed && (
                        <Grid md={6} style={{ marginTop: "1em" }}>
                          <a
                            href={
                              process.env.BASE_URL + "/" + values.attachement
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
                          onClick={handleEditCourse}
                          type="button"
                          variant="gradient"
                          color="info"
                        >
                          {translate("Edit Course")}
                        </SuiButton>
                      )}
                    {isEditable && !(addDescription && isEditable) && (
                      <SuiButton
                        onClick={handleActivateAddDesc}
                        type="button"
                        variant="gradient"
                        color="primary"
                      >
                        {!addDescription
                          ? translate("Edit description")
                          : translate("Back to edit basic info")}
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

(CourseDetail as any).layout = Admin;
(CourseDetail as any).auth = false;

export default CourseDetail;
