import { orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  status: {
    danger: orange[500],
  },
  text: {
    fontSize: "16px",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
  },
});
export default theme;
