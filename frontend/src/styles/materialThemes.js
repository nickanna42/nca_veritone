import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1871E8",
    },
    secondary: {
      main: "#4D81B7",
    },
  },
  typography: {
    fontFamily: [
      '"Nunito"',
      '"Roboto"',
      '"Helvetica"',
      '"Arial"'
    ].join(',')
  },
});