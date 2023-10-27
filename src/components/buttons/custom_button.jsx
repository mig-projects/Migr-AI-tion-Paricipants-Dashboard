import {Button} from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
  onClick,
  disabled,
  text,
  variant,
}) => (
  <Button
    variant={variant ?? 'contained'}
    size={'large'}
    style={{
      borderRadius: '8px',
      borderWidth: '2px',
    }}
    fullWidth
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Button>
);

CustomButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default CustomButton;
