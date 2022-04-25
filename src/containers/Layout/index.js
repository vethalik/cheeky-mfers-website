import React from 'react'
import {createTheme, ThemeProvider} from "@mui/material";
import Navigation from '../../components/Navigation'

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#1e1f35',
      },
      secondary: {
        main: '#a3ff12',
      },
    },
    typography: {
      fontFamily: [
        'KGHAPPYSolid',
        'KGHAPPY',
        'sans-serif',
      ].join(', '),
    },
});

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Navigation />
    {children}
  </ThemeProvider>
)

export default Layout;