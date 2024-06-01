import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const Modal = (props) => {
  return (
    <Dialog open={props.openDialog}>
      <DialogContent>TEST</DialogContent>
      <DialogActions>
        <Button onClick={props.onClick} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
