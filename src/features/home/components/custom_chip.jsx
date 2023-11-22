import {Chip} from "@mui/material";
import PropTypes from "prop-types";

const CustomChip = ({
                      text,
                      selected,
                      onClick,
                    }) => {
  return <Chip label={text} onClick={onClick}
               variant="outlined"
               sx={{
                 borderRadius: '8px',
                 backgroundColor: selected ? '#d3c7fa' : 'white',
                 border: '2px solid rgba(116, 56, 226, 0.30)',
                 width: '200px',
                 height: '50px',
                 "&&:hover": {
                   backgroundColor: selected ? '#d3c7fa' : '#f5f5f5',
                 },
               }}
               className={`fw-semibold fs-6`}
  />
}

CustomChip.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default CustomChip;
