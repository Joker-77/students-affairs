import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

interface ICusomModalProps {
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: any;
  formScheme: any;
}
const AddSpecialityModal: React.FC<ICusomModalProps> = ({
  disabled,
  title,
  open,
  initValues,
  submitForm,
  formScheme,
  handleClose,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const styles = {
    modal: {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "75%",
    },
    header: {
      height: "5em",
      position: "sticky",
      borderTopRightRadius: "inherit",
      borderTopLeftRadius: "inherit",
      backgroundColor: "#A69577",
    },
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
                <center>
                  <h4 style={{ fontWeight: "bold" }}>{title} </h4>
                </center>
              </Grid>
              <Grid md={4}>
                <IconButton
                  style={{
                    position: "absolute",
                    right: "2em",
                    top: "1em",
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
                          English Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
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
                        placeholder="English Name"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Arabic Name
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
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
                        placeholder="Arabic Name"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Code
                        </Typography>
                      </Box>
                      <TextField
                        disabled={disabled}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="code"
                        name="code"
                        value={values.code}
                        onBlur={handleBlur}
                        error={Boolean(
                          touched.code && errors.code
                        )}
                        helperText={touched.code && errors.code}
                        placeholder="Code"
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
                          Processing ...
                        </SuiButton>
                      ) : (
                        <SuiButton
                          disabled={!(dirty && isValid)}
                          type="submit"
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          Save
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

export default AddSpecialityModal;
