import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const mode = 'dark';

const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            _lg: 1600,
            xl: 1920,
          },
        },
        overrides: {
          MuiPaginationItem: {
            textSecondary: {
              '&$selected': {
                  color: '#ffffff'
              }
            }
          },
          MuiPickersToolbarText: {
            toolbarBtnSelected: {
              color: '#fff'
            },
            toolbarTxt: {
              color: '#fff'
            }
          },
          MuiPickersDay: {
            daySelected: {
              color: '#fff'
            }
          },
          MuiStepper:{
            root: {
              padding: 0
            }
          },
          MuiStepIcon: {
            active: {
              '& text': {
                fill: '#fff'
              }
            }
          },
          MuiDialogContent: {
            root: {
              padding: '40px 30px 10px', 
            }
          },
          MuiDialogActions: {
            root: {
              padding: '10px 30px 25px',
              justifyContent: 'center'
            }
          },
          MuiAutocomplete: {
            input: {
              padding: '8px !important'
            },
          },
          MuiOutlinedInput: {
            input: {
              padding: '14px'
            },
            adornedStart: {
              paddingLeft: '5px'
            },
            adornedEnd: {
              paddingRight: '7px'
            },
            multiline: {
              padding: '10px 14px'
            },
            inputMultiline: {
              lineHeight: '24px'
            }
          },
          MuiButton: {
            root: {
              borderRadius: 0,
              padding: '8px 30px',
              fontSize: '16px',
              [breakpoints.down('sm')]: {
                padding: '6px 10px',
                fontSize: '14px'
              },
              [breakpoints.down('xs')]: {
                width: '100%'
              },
            },
            containedPrimary: {
              color: '#fff',
              fontWeight: 'bold'
            }
          },
          MuiList: {
            padding: {
              paddingTop: '0',
              paddingBottom: '0'
            }
          },
          MuiInputLabel: {
            outlined: {
              padding: '0 5px',
              background: '#fff',
              transform: 'translate(14px, 15px) scale(1)',
              '&$marginDense' : {
                transform: 'translate(14px, 15px) scale(1)'
              }
            },
            asterisk: {
              color: '#C21807'
            }
          },
          MuiTooltip: {
            tooltip: {
                fontSize: '14px'
            }
          },
          MuiListSubheader: {
            root: {
              color: '#e37c31'
            }
          },
          MuiGrid: {
            'spacing-xs-2': {
              margin: '0 -8px',
              '& > .MuiGrid-item': {
                padding: '0 8px'
              }
            } 
          },
          MuiFormControl: {
            root: {
              width: '100%'
            }
          },
          MuiListItem: {
            button: {
              '&:hover': {
                backgroundColor: 'rgba(234,234,234,0.9)',
                color: '#75AF9E',
                '& svg': {
                  color: '#75AF9E',
                }
              },
              '&$selected': {
                backgroundColor: 'rgba(234,234,234,0.9)',
                color: '#75AF9E',
                '& svg': {
                  color: '#75AF9E',
                }
              }
            },
          },
        },
        typography: {
            h1: {
                fontSize: mode === 'light' ? 50 : 60,
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
                'Lato',
                'sans-serif',
            ].join(','),
        },
        palette: {
          primary: {
            main: '#e37c31',
            light: 'rgba(234,234,234,0.9)',
            dark: '#da6d1d' 
          },
          secondary: {
            main: '#75AF9E',
            light: '#B4DBD0',
            dark: '#5B887B' 
          },
          text: {
            primary: '#777',
            secondary: "#555"
          }
        },
    })


export default theme;
