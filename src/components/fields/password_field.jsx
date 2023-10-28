import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as PropTypes from "prop-types";
import {useState} from "react";

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return <TextField
    required
    type={showPassword ? 'text' : 'password'}
    id={props.id}
    label={props.label}
    value={props.value}
    fullWidth={true}
    error={props.showError}
    helperText={props.showError ? props.error : null}
    onChange={props.onChange}
    InputProps={{
      endAdornment: <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          edge="end"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }}
  />;
}

PasswordField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  showError: PropTypes.bool,
  onChange: PropTypes.func,
};

export default PasswordField;
