import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  //DialogTitle,
  DialogContentText,
  Button,
} from "@material-ui/core";

interface IAlertDialogProps {
  open: boolean;
  handleClose(): void;
  handleOK(): void;
  text: string;
  ok: string;
  discard: string;
  //confirmMsg: string;
}
const AlertDialog: React.FC<IAlertDialogProps> = ({
  open,
  handleClose,
  text,
  handleOK,
  ok,
  discard,
  //confirmMsg,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/*<DialogTitle id="alert-dialog-title">{confirmMsg}</DialogTitle>*/}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{discard}</Button>
        <Button style={{ color: "primary" }} onClick={handleOK} autoFocus>
          {ok}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;