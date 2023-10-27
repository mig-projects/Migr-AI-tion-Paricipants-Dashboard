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
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'white',
            borderRadius: '8px',
          },
        },
      },
    },
  }
});

export {lightTheme};
