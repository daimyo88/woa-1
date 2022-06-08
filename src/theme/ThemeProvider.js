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
                fontSize: 24,
                fontWeight: 400,
                [breakpoints.down('sm')]: {
                  fontSize: 20,
                },
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
          ...(themeMode.mode === 'light' ? {
          primary: {
            main: '#512888',
            light: '#512888',
            dark: '#512888' 
          },
          secondary: {
            main: '#DA4200',
            light: '#DA4200',
            dark: '#DA4200' 
          },
          background: '#ffffff',
          text: {
            primary: 'rgb(30, 30, 30)'
          }
        } : {
            primary: {
              main: '#512888',
              light: '#512888',
              dark: '#512888' 
            },
            secondary: {
              main: '#DA4200',
              light: '#DA4200',
              dark: '#DA4200' 
            },
            background: 'rgb(30, 30, 30)',
            text: {
              primary: '#fff'
            }  
        })
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
