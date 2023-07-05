import {
  Box,
  Button,
  Card,
  Grid,
  Modal,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import colors from "../../../../assets/theme/base/colors";
import { useTranslation } from "../../../../Utility/Translations/useTranslation";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Message, Warning } from "@material-ui/icons";

interface IConfirmPropertiesProps {
  open: boolean;
  message: string;
  alert: string;
  handleClose: () => void;
  handleConfirm: (event) => void;
}
const ConfirmProperties: React.FC<IConfirmPropertiesProps> = ({
  open,
  message,
  alert,
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
          <CardBody>
            <Grid container dir="rtl">
              <Grid container md={12}>
                <Grid item lg={5} md={5} sm={5} />
                <Grid item lg={5} md={5} sm={5}>
                  <Warning style={{ fontSize: "50px" }} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Typography>{alert}</Typography>
                </Grid>
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
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
              </Grid>
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </Modal>
  );
};

export default ConfirmProperties;
