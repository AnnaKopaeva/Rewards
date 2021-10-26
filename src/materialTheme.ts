import { createTheme } from "@mui/material/styles";

const colors = {
  purple: "#6259f0",
  grey: "#E0E5EC",
};

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
    },
    grey: {
      A200: colors.grey,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
