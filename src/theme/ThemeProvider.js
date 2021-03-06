import React  from 'react';
import { useSelector } from 'react-redux/es/exports';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

export default function Theme({children}) {
    const themeMode = useSelector(state => state.themeMode);

    const theme = createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
                fontFamily: 'arial',
            }
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
              },
            },
          },
          MuiAccordionSummary: {
            styleOverrides: {
              content: {
                margin: 0,
              },
            },
          },
          MuiToolbar: {
            styleOverrides: {
              regular: {
                  minHeight: "48px"
              },
            }
          },
          MuiList: {
            styleOverrides: {
              padding: {
                  padding: 0
              },
            }     
          },
          MuiSelect: {
            styleOverrides: {
              icon: {
                  color: '#ff5c15'
              },
            }     
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                  background: 'transparent'
              }
            }
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                ...(themeMode.mode === 'light' && {
                  background: '#f2ecf9'
                })
              },
            }     
          },
          MuiDialogActions: {
            styleOverrides: {
              root: {
                  background: themeMode.mode === 'light' ? '#e5d9f3' : '#cccccc'
              },
            }  
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                  background: themeMode.mode === 'light' ? '#e5d9f3' : '#353535'
              },
            }  
          },
          MuiPickersToolbar: {
            styleOverrides: {
              root: {
                  background: themeMode.mode === 'light' ? '#e5d9f3' : '#353535'
              },
            }  
          },
          MuiCalendarPicker: {
            styleOverrides: {
              root: {
                  background: themeMode.mode === 'light' ? '#e5d9f3' : '#353535'
              },
            }     
          },
          MuiChip: {
            styleOverrides: {
              outlined: {
                color: themeMode.mode === 'light' ? 'rgb(30, 30, 30)' : '#ffffff'
              },
              filled: {
                border: '1px solid transparent'
              },
              label: {
                lineHeight: '16px'
              }
            }
          },
          MuiTab: {
            styleOverrides: {
              textColorPrimary: {
                color: themeMode.mode === 'light' ? 'rgb(30, 30, 30)' : '#ffffff'
              },
              root: {
                '&.Mui-selected': {
                  color: '#804ac9'
                }
              }
            }
          },
          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: '#804ac9'
              }
            }
          },
          MuiTabScrollButton: {
            styleOverrides: {
              root: {
                color: themeMode.mode === 'light' ? 'rgb(30, 30, 30)' : '#ffffff',
                '&.Mui-disabled': {
                  opacity: 0.3
                }
              }
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
                fontWeight: 400,
                marginBottom: '15px',
                [breakpoints.down('sm')]: {
                  fontSize: 20,
                },
            },
            h3: {
                fontSize: 18,
                fontWeight: 600,
                marginBottom: '10px',
                [breakpoints.down('sm')]: {
                  fontSize: 16,
                },
            },
            fontFamily: [
                'Roboto Flex',
                'sans-serif',
            ].join(','),
        },
        palette: {
          mode: themeMode.mode,
          primary: {
            main: '#512888',
            light: '#804ac9',
            lightest: '#dacbef',
            dark: '#40206c'
          },
          secondary: {
            main: '#ff5c15',
            light: '#ff5c15',
            dark: '#ae3400'
          },
          ...(themeMode.mode === 'light' ? {
          footerBackground: '#dacbef',
          tooltipBackground: '#e5d9f3',
          background: '#ffffff',
          text: {
            primary: 'rgb(30, 30, 30)'
          }
        } : {
            footerBackground: 'transparent',
            tooltipBackground: '#353535',
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
