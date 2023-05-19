import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import colors from "../../../../assets/theme/base/colors";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Field, Form, Formik } from "formik";
import { ConfirmationNumber } from "@material-ui/icons";

interface IPropertiesProps {
  open: boolean;
  title: string;
  handleClose: () => void;
  handleConfirm: (event, message) => void;
}
const Properties: React.FC<IPropertiesProps> = ({
  open,
  title,
  handleClose,
  handleConfirm,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
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
    width: 600,
    bgcolor: "background.paper",
    // border: "2px solid brown",
    boxShadow: 24,
    borderRadius: "20px",
    marginTop: "0px",
    marginBottom: "0px",
  };
  const { translate } = useTranslation();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
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
            dir="rtl"
            style={{
              height: "5em",
              borderTopRightRadius: "inherit",
              borderTopLeftRadius: "inherit",
              backgroundColor: colors.gradients.primary.main,
              color: "#fff",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>{title}</h4>
          </CardHeader>
          <CardBody>
            <Grid container dir="rtl">
              <Grid item>
                <Formik
                  initialValues={{
                    picked: "0",
                  }}
                  onSubmit={(values) => {
                    switch (values.picked) {
                      case "0":
                        handleConfirm(
                          values.picked,
                          `${translate("do you want to")} ${translate(
                            "Open new educational year"
                          )}% 
                           ${translate(
                             "import educational plan from previous year"
                           )}`
                        );
                        break;
                      case "1":
                        handleConfirm(
                          values.picked,
                          `${translate("do you want to")} ${translate(
                            "Open new educational year"
                          )}% 
                           ${translate(
                             "import educational plan and assign teachers"
                           )}`
                        );
                        break;
                      case "2":
                        handleConfirm(
                          values.picked,
                          `${translate("do you want to")} ${translate(
                            "Open new educational year"
                          )}%
                           ${translate("no import")}`
                        );
                        break;
                      default:
                        handleConfirm(
                          "0",
                          `${translate("do you want to")} 
                             ${translate(
                               "Open new educational year"
                             )} ${translate(
                            "import educational plan from previous year"
                          )}`
                        );
                        break;
                    }
                  }}
                >
                  {({ values, handleChange }) => (
                    <Form>
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          {translate("do you want to")}
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="picked"
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                checked={values.picked == "0"}
                                onChange={handleChange}
                                style={{ color: "#01579b" }}
                                defaultValue={values.picked}
                                value="0"
                              />
                            }
                            label={translate(
                              "import educational plan from previous year"
                            )}
                          />
                          <FormControlLabel
                            name="picked"
                            value="male"
                            control={
                              <Radio
                                checked={values.picked == "1"}
                                onChange={handleChange}
                                style={{ color: "#01579b" }}
                                value="1"
                              />
                            }
                            label={translate(
                              "import educational plan and assign teachers"
                            )}
                          />
                          <FormControlLabel
                            name="picked"
                            control={
                              <Radio
                                checked={values.picked == "2"}
                                onChange={handleChange}
                                style={{ color: "#01579b" }}
                                value="2"
                              />
                            }
                            label={translate("no import")}
                          />
                        </RadioGroup>
                        <Grid
                          item
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button
                            type="submit"
                            style={{ margin: "2em 5px", width: "30%" }}
                            variant="contained"
                            className={classes.submitBtn}
                            onClick={handleConfirm}
                          >
                            <span style={{ padding: "0px 0px 0px 10px" }}>
                              {translate("Confirm")}
                            </span>
                          </Button>
                          <Button
                            type="button"
                            style={{ margin: "2em 5px", width: "30%" }}
                            variant="contained"
                            className={classes.closeBtn}
                            onClick={handleClose}
                          >
                            <span style={{ padding: "0px 0px 0px 10px" }}>
                              {translate("Cancel")}
                            </span>
                          </Button>
                        </Grid>
                      </FormControl>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </Modal>
  );
};

export default Properties;
