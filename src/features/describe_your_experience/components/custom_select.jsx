import {Checkbox, FormControl, ListItemText, MenuItem, Select} from "@mui/material";
import PropTypes from "prop-types";

const CustomSelect = ({
  onChange,
  value,
  title,
  list,
  greyedList,
}) => {
  return <FormControl variant={`outlined`} sx={{ m: 1, minWidth: 150 }}>
    <Select
      sx={{
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
      }}
      multiple
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      displayEmpty
      inputProps={{ outline: "none" }}
      renderValue={(selected) => `${title} ${selected.length > 0 ? `(${selected.length})` : ''}`}
      MenuProps={{
        PaperProps: {
          elevation: 0,
        },
      }}
    >
      {
        list.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        )).concat(greyedList === undefined ? [] : greyedList.map((name) => (
          <MenuItem key={name} value={name} disabled>
            <Checkbox checked={value.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        )))
      }
    </Select>
  </FormControl>;
}

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  title: PropTypes.string,
  list: PropTypes.array,
  greyedList: PropTypes.array,
}

export default CustomSelect;
