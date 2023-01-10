import * as React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@material-ui/core";

interface IDeleteDialogProps {
  open: boolean;
  handleClose(): void;
  handleSubmitDelete(): void;
  text: string;
  submitDelete: string;
  discard: string;
  confirmMsg: string;
}
const DeleteDialog: React.FC<IDeleteDialogProps> = ({
  open,
  handleClose,
  text,
  handleSubmitDelete,
  submitDelete,
  discard,
  confirmMsg,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{confirmMsg}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{discard}</Button>
        <Button style={{ color: "red" }} onClick={handleSubmitDelete} autoFocus>
          {submitDelete}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
