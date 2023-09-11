import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#6264A7",
      light: "#3B7BDB",
    },
    secondary: {
      main: "#454691",
      light: "#fff",
    },
    error: {
      main: "#FF0404",
    },
  },
  typography: {
    fontFamily: ['"Noto Sans"', "sans-serif"].join(","),
    caption: { fontSize: "18px", fontWeight: 700 },
    body2: { fontSize: "14px", fontWeight: 700 },
    body1: { fontSize: "14px", fontWeight: 400 },
    subtitle1: { fontSize: "12px", fontWeight: 400 },
    subtitle2: { fontSize: "10px", fontWeight: 400 },
  },
});
