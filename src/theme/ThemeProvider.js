import React, { useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeModeContext } from "../context/theme-mode-context";

const breakpoints = createBreakpoints({});

export default function Theme({children}) {
    const {themeMode} = useContext(ThemeModeContext);

    const theme = createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
              },
            },
          },
          MuiToolbar: {
            styleOverrides: {
              regular: {
                  minHeight: "48px"
              },
            }
          }
        },
        typography: {
            h1: {
                fontSize: themeMode.mode === 'light' ? 50 : 60,
                fontWeight: 600
            },
            h2: {
                fontSize: 22,
                fontWeight: 600,
                [breakpoints.down('sm')]: {
                  fontSize: 20,
                },
            },
            h3: {
                fontSize: 17,
                fontWeight: 600,
                marginBottom: '20px',
                [breakpoints.down('sm')]: {
                  fontSize: 16,
                },
            },
            fontFamily: [
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        palette: {
          mode: themeMode.mode,
          // primary: {
          //   main: '#e37c31',
          //   light: 'rgba(234,234,234,0.9)',
          //   dark: '#da6d1d' 
          // },
          // secondary: {
          //   main: '#75AF9E',
          //   light: '#B4DBD0',
          //   dark: '#5B887B' 
          // },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
