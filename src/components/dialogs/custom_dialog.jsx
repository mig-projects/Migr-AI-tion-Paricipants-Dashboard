import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";

const CustomDialog = ({
  title,
  description,
  open,
  handleClose,
  onAgree,
}) => {
  const [loading, setLoading] = useState(false);

  return <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Disagree</Button>
      <Button onClick={async () => {
        setLoading(true);
        await onAgree();
        setLoading(false);
        handleClose();
      }} autoFocus>
        {
          loading ? <CircularProgress size={25} color={'primary'}/> : 'Agree'
        }
      </Button>
    </DialogActions>
  </Dialog>;
}

CustomDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onAgree: PropTypes.func,
}

export default CustomDialog;
