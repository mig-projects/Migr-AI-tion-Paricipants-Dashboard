import {Autocomplete, Checkbox, FormControl, ListItemText, MenuItem, TextField} from "@mui/material";
import PropTypes from "prop-types";

const CustomSelect = ({
  onChange,
  value,
  title,
  list,
}) => {
  return <FormControl variant={`outlined`} sx={{ m: 1, minWidth: 150 }}>
    <Autocomplete
      sx={{
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        minWidth: '150px',
        width: '100%',
      }}
      multiple
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label={title} />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem key={option.id} value={option} {...props}>
          <Checkbox checked={selected} />
          <ListItemText primary={option.name} />
        </MenuItem>
      )}
      options={list}
    />
  </FormControl>;
}

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  title: PropTypes.string,
  list: PropTypes.array,
}

export default CustomSelect;
