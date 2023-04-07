import React, { FC, useEffect, useState } from "react";
import {
  ICourseModel,
  IEvaluationMethod,
} from "../../../../Models/Courses/CourseModel";
import Card from "../../../../components/Card/Card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import GridItem from "../../../../components/Grid/GridItem";
import * as yup from "yup";
import { Field, FieldArray, Form, Formik, getIn, ErrorMessage } from "formik";
import { connect } from "react-redux";
import SuiButton from "../../../../components/SuiButton";
import { Add, ArrowBack, AttachFile, Backspace } from "@material-ui/icons";
import AddAttachment from "../../../../components/AddAttachment/AddAttachment";

interface ICourseDetailProps {
  show: boolean;
  details: ICourseModel;
  isEditable: boolean;
  setShow(): void;
  activateEdit(): void;
}

const CourseDetail: FC<ICourseDetailProps> = ({
  show,
  details,
  isEditable,
  setShow,
  activateEdit,
}) => {
  const methodTypes = [
    {
      id: "midTerm",
      name: "مذاكرة",
    },
    {
      id: "exam",
      name: "امتحان",
    },
    {
      id: "practicalExam",
      name: "امتحان عملي",
    },
  ];

  const { translate } = useTranslation();
  const [course, setDetails] = useState<ICourseModel>(details);
  const initialValues = {
    en_name: course?.en_name,
    ar_name: course?.ar_name,
    fr_name: course?.fr_name,
    code: course?.code,
    // theoretical_hours: courseDetail.current_description.th
  };
  // const [submitting, setSubmitting] = useState(false);
  const courseSchema = yup.object({
    en_name: yup
      .string(translate("English Name"))
      .required(translate("Field is required")),
    ar_name: yup
      .string(translate("Arabic Name"))
      .required(translate("Field is required")),
    fr_name: yup
      .string(translate("French Name"))
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
          name: yup.string().required("Name is required"),
          percentage: yup
            .number()
            .min(0, translate("Field must be greater than 0"))
            .max(100, translate("Field must be less than 100"))
            .transform((value) => (isNaN(value) ? undefined : value))
            .required("Percentage is required"),
        })
      )
      .min(1, "Need at least one evaluation method")
      .test((methods: Array<{ percentage: number }>) => {
        const sum = methods?.reduce((acc, curr) => acc + curr.percentage, 0);
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
    file: yup.mixed(),
  });
  const [errorPercentageMsg, setErrorPercentageMsg] = useState("");
  const submitForm = () => {};

  const hiddenInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenInput.current?.click();
  };

  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              <Typography variant="h5" component="div">
                {translate("Course Name")}:{" "}
                {details?.ar_name ?? "التحليل الرياضي"}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {translate("Course Details")}
              </Typography>
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
            initialValues={initialValues}
            validationSchema={courseSchema}
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
                setFieldValue,
              } = formik;
              return (
                <Form>
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          disabled={!isEditable}
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
                          disabled={!isEditable}
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
                          disabled={!isEditable}
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
                  </Grid>
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
                          helperText={touched.mixed_hours && errors.mixed_hours}
                          placeholder={translate("Mixed Hours")}
                          label={translate("Mixed Hours")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  <Divider style={{ margin: "2em 0em" }} />
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
                        {values?.evaluation_methods &&
                        values?.evaluation_methods.length > 0 ? (
                          values?.evaluation_methods.map((method, index) => (
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
                                    {methodTypes?.map((type) => (
                                      <MenuItem key={type.id} value={type.id}>
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
                                        errors.evaluation_methods[index] &&
                                        errors.evaluation_methods[index]
                                          .percentage &&
                                        touched &&
                                        touched.evaluation_methods &&
                                        touched.evaluation_methods[index] &&
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
                                  <label style={{ color: "rgb(234, 6, 6)" }}>
                                    <ErrorMessage
                                      name={`evaluation_methods.${index}.percentage`}
                                    />
                                  </label>
                                </Grid>
                                <Grid
                                  item
                                  xs={4}
                                  style={{ display: isEditable ? "" : "none" }}
                                >
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
                          ))
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
                  <Box mb={1} ml={0.5}>
                    <Typography component="label" variant="caption">
                      <h5>{translate("Attachments")}</h5>
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
                      id="file"
                      name="file"
                      type="file"
                      ref={hiddenInput}
                      style={{ display: "none" }}
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                      className="form-control"
                    />
                    <Grid md={6} style={{ marginTop: "1em" }}>
                      <TextField
                        variant="outlined"
                        type="text"
                        size="small"
                        disabled
                        placeholder=""
                        value={values.file?.name}
                      />
                    </Grid>
                  </Box>
                  <Box mt={4} mb={1}>
                    {isEditable ? (
                      isSubmitting ? (
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
                      )
                    ) : (
                      <SuiButton
                        onClick={activateEdit}
                        type="submit"
                        variant="gradient"
                        color="info"
                        fullWidth
                      >
                        {translate("Edit Course")}
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
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    candidate: state.baseReducer.course,
  };
};

export default connect(mapStateToProps, null)(CourseDetail);
