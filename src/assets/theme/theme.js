import {createTheme} from "@mui/material";
import variables from '../../variables.module.scss';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryPurple,
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  }
});

export {lightTheme};
