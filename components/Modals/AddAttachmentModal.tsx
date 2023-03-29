import React from "react";
import {Formik, Form, FieldArray} from "formik";
import {
  Modal,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import SuiButton from "../SuiButton";
import { IPersonModel } from "../../Models/ApiResponse/PersonModel.jsx";
import {useRouter} from "next/router";
import {useTranslation} from "../../Utility/Translations/useTranslation";
import {governorates} from "../../Static/resources";
import colors from "../../assets/theme/base/colors";
import * as Yup from "yup";

interface ICusomModalProps {
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: any;
  formScheme: any;
}
const AddAttachmentModal: React.FC<ICusomModalProps> = ({
                                                           disabled = false,
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
    width: "40%",
    bgcolor: "background.paper",
    // btype: "2px solid brown",
    boxShadow: 24,
    btypeRadius: "20px",
  };
  const cardStyle = {
    position: "absolute" as "absolute",
    //top: "50%",
    //left: "50%",
    //transform: "translate(-50%, -50%)",
    // width: 700,
    bgcolor: "background.paper",
    // btype: "2px solid brown",
    boxShadow: 24,
    btypeRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "300px",
      direction: locale === 'ar' ? "rtl" : "ltr",
    },
    header: {
      height: "5em",
      position: "sticky",
      btypeTopRightRadius: "inherit",
      btypeTopLeftRadius: "inherit",
      backgroundColor: colors.gradients.primary.main,
      color: "#fff",    },
  };

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
                <Grid md={4}>
                  <IconButton
                      style={{
                        color: '#fff',
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
                        <Box mb={2}>
                          <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                              {translate("Name")}
                            </Typography>
                          </Box>
                          <TextField
                              disabled={disabled}
                              onChange={handleChange}
                              variant="outlined"
                              size="small"
                              type="text"
                              id="name"
                              name="name"
                              value={values.name}
                              onBlur={handleBlur}
                              error={Boolean(touched.name && errors.name)}
                              helperText={touched.name && errors.name}
                              placeholder={translate("Name")}
                              fullWidth
                          />
                        </Box>
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
      </Modal>
  );
};

export default AddAttachmentModal;
