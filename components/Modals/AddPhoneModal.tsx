import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Modal, TextField, Box, Typography } from "@material-ui/core";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import SuiButton from "../SuiButton";
import { IPhoneModel } from "../../Models/ApiResponse/PersonModel.jsx";

interface ICusomModalProps {
  title: string;
  open: boolean;
  handleClose();
  submitForm(values, submitting): void;
  initValues: IPhoneModel;
  formScheme: any;
}
const AddPhoneModal: React.FC<ICusomModalProps> = ({
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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card style={cardStyle}>
          <CardHeader
            style={{
              height: "5em",
              borderTopRightRadius: "inherit",
              borderTopLeftRadius: "inherit",
              backgroundColor: "#A69577",
            }}
          >
            <center>
              <h4 style={{ fontWeight: "bold" }}>{title}</h4>
            </center>
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
                          Phone
                        </Typography>
                      </Box>
                      <TextField
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
                        placeholder="12345"
                        fullWidth
                      />
                    </Box>
                    <Box mb={2}>
                      <Box mb={1} ml={0.5}>
                        <Typography component="label" variant="caption">
                          Type
                        </Typography>
                      </Box>
                      <TextField
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        type="text"
                        id="type"
                        name="type"
                        value={values.type}
                        onBlur={handleBlur}
                        error={Boolean(touched.type && errors.type)}
                        helperText={touched.type && errors.type}
                        placeholder="phone type (mobile. etc..)"
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
                          Processing
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

export default AddPhoneModal;
