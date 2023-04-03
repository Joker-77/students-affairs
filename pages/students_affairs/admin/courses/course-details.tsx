import React, { FC, useState } from "react";
import { ICourseModel } from "../../../../Models/ApiResponse/Courses/CourseModel";
import Card from "../../../../components/Card/Card";
import {
  CardActions,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Admin from "../../../../layouts/Admin";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import GridItem from "../../../../components/Grid/GridItem";
import * as yup from "yup";
import { Form, Formik } from "formik";

interface ICourseDetailProps {
  courseDetail: ICourseModel;
}

const CourseDetail: FC<ICourseDetailProps> = ({ courseDetail, ...props }) => {
  const { translate } = useTranslation();
  const [details, setDetails] = useState(courseDetail);
  const initialValues: ICourseDetailProps | any = {};
  const [submitting, setSubmitting] = useState(false);
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
  });
  const submitForm = () => {};
  return (
    <Grid container md={12} sm={12}>
      <Grid md={12} sm={12} xs={12}>
        <Card style={{ padding: "1em 4em", margin: "5px 0px" }}>
          <Typography variant="h5" component="div">
            {translate("Course Name")}: {details?.ar_name ?? "التحليل الرياضي"}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {translate("Course Details")}
          </Typography>
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
              } = formik;
              return (
                <Form>
                  <Grid container md={12} xs={12} style={{ margin: "1em 0em" }}>
                    <Grid item xs={3} md={3}>
                      <GridItem>
                        <TextField
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
