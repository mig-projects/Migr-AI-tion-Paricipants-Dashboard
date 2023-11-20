import {Button, CircularProgress} from "@mui/material";
import PropTypes from "prop-types";
import {useState} from "react";

const CustomButton = ({
  onClick,
  disabled,
  text,
  variant,
  className,
  color = 'primary',
  sx,
}) => {
  const [loading, setLoading] = useState(false);

  return <Button
    variant={variant ?? 'contained'}
    size={'large'}
    style={{
      borderRadius: '8px',
      borderWidth: '2px',
    }}
    color={color}
    fullWidth
    onClick={async () => {
      setLoading(true);
      await onClick();
      setLoading(false);
    }}
    disabled={disabled}
    className={className}
    sx={sx}
  >
    {loading ? <CircularProgress  size={25} color={ variant === "outlined" ? 'primary' : "secondary" }/> : text}
  </Button>;
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  sx: PropTypes.object,
  color: PropTypes.string,
}

export default CustomButton;
