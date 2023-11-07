import {Button} from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
  onClick,
  disabled,
  text,
  variant,
  className,
  sx,
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
    className={className}
    sx={sx}
  >
    {text}
  </Button>
);

CustomButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  sx: PropTypes.object,
}

export default CustomButton;
