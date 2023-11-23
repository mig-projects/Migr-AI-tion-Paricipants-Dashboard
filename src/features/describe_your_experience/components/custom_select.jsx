import {Checkbox, FormControl, ListItemText, MenuItem, Select} from "@mui/material";
import PropTypes from "prop-types";

const CustomSelect = ({
  onChange,
  value,
  title,
  list,
}) => {
  return <FormControl variant={`outlined`} sx={{ m: 1, minWidth: 150 }}>
    <Select
      sx={{
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        maxWidth: '300px',
      }}
      multiple
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      displayEmpty
      inputProps={{ outline: "none" }}
      renderValue={(selected) => selected.length > 0 ? selected.map((e) => e.name).join(', ') : title}
      MenuProps={{
        PaperProps: {
          elevation: 0,
        },
      }}
    >
      {
        list.map((tag) => (
          <MenuItem key={tag.id} value={tag}>
            <Checkbox checked={value.indexOf(tag) > -1} />
            <ListItemText primary={tag.name} />
          </MenuItem>
        ))
      }
    </Select>
  </FormControl>;
}

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  title: PropTypes.string,
  list: PropTypes.array,
}

export default CustomSelect;
