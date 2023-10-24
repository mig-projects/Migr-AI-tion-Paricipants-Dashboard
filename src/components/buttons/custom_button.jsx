import {Button} from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
  onClick,
  disabled,
  text,
}) => (
  <Button
    variant={'contained'}
    size={'large'}
    style={{
      borderRadius: '8px',
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
}

export default CustomButton;
