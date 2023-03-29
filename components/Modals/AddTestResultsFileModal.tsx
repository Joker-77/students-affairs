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
  Grid, Button,
} from "@material-ui/core";
import {AttachFile, Close} from "@material-ui/icons";
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
import RegisterationService from "../../Services/RegisterationService";
import {makeStyles} from "@material-ui/core/styles";
import customstyles from "../../assets/jss/nextjs-material-dashboard/views/rtlStyle";
import {toast} from "react-toastify";

interface ICusomModalProps {
  disabled?: boolean;
  title: string;
  open: boolean;
  handleClose();
  submitForm(): void;
}
const AddTestResultsFileModal: React.FC<ICusomModalProps> = ({
                                                           disabled = false,
                                                           title,
                                                           open,
                                                           submitForm,
                                                           handleClose,
                                                         }) => {
  const {locale} = useRouter();
  const {translate} = useTranslation();
  const useStyles = makeStyles(customstyles);
  const classes = useStyles();

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

  const [file, setFile] = React.useState(null);

  const submitTestResults = async (setSubmitting) => {
    setSubmitting(true);
    RegisterationService.Add({csv_file: file?.base64/*.replace('data:text/csv;base64,', '')*/})
        .then((res) => {
          submitForm();
          toast(translate('Test results updated.'), {type: 'success'});
        })
        .catch((error) => {
          console.error("error", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    ;
  };

  const handleUpload = ({ target }) => {
    console.log('file: ', target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
        setFile({name: target.files[0]?.name, base64: e.target.result});
    };
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
                  initialValues={{}}
                  validationSchema={Yup.object().shape({})}
                  onSubmit={(values, { setSubmitting }) => {
                    submitTestResults(setSubmitting);
                  }}
              >
                {(formik) => {
                  const {
                    isSubmitting,
                  } = formik;
                  return (
                      <Form>
                        <Box mb={2}>
                          <Box mb={1} ml={0.5}>
                            <Typography component="label" variant="caption">
                              {translate("Results File")}{!!file && <span>: {file?.name}</span>}
                            </Typography>
                          </Box>
                          <Button
                              disabled={isSubmitting}
                              variant="contained"
                              className={classes.submitBtn}
                              component="label"
                              style={{minWidth: 200, color: 'white'}}
                          >
                            <AttachFile />
                            {translate("Upload")} {translate("Results File")}
                            <input
                                accept=".csv"
                                type="file"
                                name={'csv_file'}
                                hidden
                                onChange={handleUpload}
                            />
                          </Button>
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
                                  disabled={!file}
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

export default AddTestResultsFileModal;
