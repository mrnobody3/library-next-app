import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#004F4D',
    },
    secondary: {
      main: '#A68F97',
    },
    error: {
      main: red.A400,
    },
    primaryLight: {
      main: '#79717A',
      contrastText: '#1c1c1c',
    },
  },
  status: {
    danger: orange[500],
  },
  text: {
    fontSize: '16px',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
  },
});
export default theme;
