import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Admin from "../../../../../layouts/Admin";
import {
  Box,
  Card,
  Grid,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import GridItem from "../../../../../components/Grid/GridItem";
import { useRouter } from "next/router";
import { useTranslation } from "../../../../../Utility/Translations/useTranslation";
import { toast } from "react-toastify";
import { IAssignTeacherModel } from "../../../../../Models/Teachers/TeacherModel";
import { ArrowBack, Close } from "@material-ui/icons";
import SuiButton from "../../../../../components/SuiButton";
import TeacherService from "../../../../../Services/TeacherService";
import { AssignedTeachers } from "./AssignedTeachers";

interface IAssignTeacherProps {
  title: string;
  data: any;
  setShow(): void;
}
const AssignTeacher: React.FC<IAssignTeacherProps> = ({
  title,
  data,
  setShow,
}) => {
  const router = useRouter();
  const { translate } = useTranslation();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    TeacherService.GetAll()
      .then((res) => {
        setTeachers(res.result);
      })
      .catch((err) => {
        toast.error(err?.error);
      });
  }, []);

  let asssignTeacherSchema = yup.object({
    teacher_id: yup
      .number(translate("Teacher"))
      .positive(translate("You must select a teacher"))
      .required(translate("Field is required")),
    theoretical_hours: yup
      .number(translate("Theoretical Hours"))
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    practical_hours: yup
      .number("Practical Hours")
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    mixed_hours: yup
      .number("Practical Hours")
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    theoretical_classes: yup
      .number(translate("Theoretical Classes"))
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    practical_classes: yup
      .number("Practical Classes")
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    mixed_classes: yup
      .number("Mixed Classes")
      .positive(translate("Field must be greater than 0"))
      .required(translate("Field is required")),
    notes: yup.string().nullable(),
  });
  let initialValues = {
    teacher_id: -1,
    theoretical_hours: 0,
    practical_hours: 0,
    mixed_hours: 0,
    theoretical_classes: 0,
    practical_classes: 0,
    mixed_classes: 0,
    notes: "",
  };
  const submitForm = (values, setSubmitting) => {
    // CourseService.Add(payload)
    //   .then((response) => {
    //     if (response.success) {
    //       toast.success("Course Added Successfully");
    //     } else {
    //       console.log(response.error);
    //       toast.error(response.error.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     toast.error(error.message);
    //     throw new Error(error);
    //   });
    setSubmitting(false);
    // CourseService.Add(payload)
    //   .then(() => {})
    //   .catch((e) => console.error(e));
  };

  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Grid container>
            <GridItem item md={9} xs={12} sm={12}>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
            </GridItem>
            <GridItem md={3} xs={12} sm={12}>
              <SuiButton
                onClick={setShow}
                style={{
                  color: "#dc3545",
                  backgroundColor: "transparent",
                  border: "1px solid #dc3545",
                }}
              >
                <Close />
                {translate("Cancel")}
              </SuiButton>
            </GridItem>
          </Grid>
        </Card>
        <Card style={{ padding: "3em 3em", margin: "5px 0px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={asssignTeacherSchema}
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
                    {/* <Grid
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
                    </Grid> */}
                    <Grid
                      container
                      md={12}
                      xs={12}
                      style={{ margin: "1em 0em" }}
                    >
                      <Grid item xs={3} md={3}>
                        <GridItem>
                          <TextField
                            variant="outlined"
                            size="small"
                            type="select"
                            id="teacher_id"
                            name="teacher_id"
                            select={true}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={translate("Teacher")}
                            label={translate("Teacher")}
                            error={Boolean(
                              touched.teacher_id && errors.teacher_id
                            )}
                            helperText={touched.teacher_id && errors.teacher_id}
                            fullWidth
                          >
                            {teachers?.map((t) => (
                              <MenuItem key={t.id} value={t.id}>
                                {`${t.prefix_name} ${t.person?.first_name} ${t.person?.last_name}`}
                              </MenuItem>
                            ))}
                          </TextField>
                        </GridItem>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="theoretical_hours"
                          name="theoretical_hours"
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
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="practical_hours"
                          name="practical_hours"
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
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="mixed_hours"
                          name="mixed_hours"
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
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    {/* <Grid
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
                    </Grid> */}
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="theoretical_classes"
                          name="theoretical_classes"
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.theoretical_classes &&
                              errors.theoretical_classes
                          )}
                          helperText={
                            touched.theoretical_classes &&
                            errors.theoretical_classes
                          }
                          placeholder={translate("Theoretical Classes")}
                          label={translate("Theoretical Classes")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="practical_classes"
                          name="practical_classes"
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.practical_classes &&
                              errors.practical_classes
                          )}
                          helperText={
                            touched.practical_classes &&
                            errors.practical_classes
                          }
                          placeholder={translate("Practical Classes")}
                          label={translate("Practical Classes")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          type="number"
                          id="mixed_hours"
                          name="mixed_hours"
                          onBlur={handleBlur}
                          error={Boolean(
                            touched.mixed_classes && errors.mixed_classes
                          )}
                          helperText={
                            touched.mixed_classes && errors.mixed_classes
                          }
                          placeholder={translate("Mixed Classes")}
                          label={translate("Mixed Classes")}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid item xs={6} md={6}>
                      <GridItem>
                        <TextField
                          onChange={handleChange}
                          variant="outlined"
                          type="text"
                          id="notes"
                          name="notes"
                          onBlur={handleBlur}
                          error={Boolean(touched.notes && errors.notes)}
                          helperText={touched.notes && errors.notes}
                          placeholder={translate("Notes")}
                          label={translate("Notes")}
                          InputProps={{
                            rows: 4,
                          }}
                          fullWidth
                        />
                      </GridItem>
                    </Grid>
                  </Grid>
                  <Box
                    mt={4}
                    mb={1}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {isSubmitting ? (
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
                    )}
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Card>
        <Card>
          <AssignedTeachers planData={data} />
        </Card>
      </Grid>
    </Grid>
  );
};

(AssignTeacher as any).layout = Admin;
(AssignTeacher as any).auth = false;

export default AssignTeacher;
