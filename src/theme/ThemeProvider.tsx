import React, { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
import { useAppSelector } from "../hooks/redux";

declare module "@mui/material/styles/createPalette" {
    interface PaletteOptions {
        footerBackground: string;
        tooltipBackground: string;
    }
}

declare module "@mui/material/styles" {
    interface Components {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    background: string;
                };
            };
        };
        MuiPickersToolbar: {
            styleOverrides: {
                root: {
                    background: string;
                };
            };
        };
        MuiTabScrollButton: {
            styleOverrides: {
                root: {
                    color: string;
                    "&.Mui-disabled": {
                        opacity: number;
                    };
                };
            };
        };
    }
}

const breakpoints = createBreakpoints({});

const Theme: FC = ({ children }) => {
    const themeMode = useAppSelector((state) => state.themeMode);

    const theme = createTheme({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    fontFamily: "arial",
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
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
                        minHeight: "48px",
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        background:
                            themeMode.mode === "light" ? "#e5d9f3" : "#353535",
                    },
                    arrow: {
                        "&&:before": {
                            background:
                                themeMode.mode === "light"
                                    ? "#e5d9f3"
                                    : "#353535",
                        },
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    padding: {
                        padding: 0,
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    icon: {
                        color: "#ff5c15",
                    },
                },
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        background: "transparent",
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor:
                            themeMode.mode === "light"
                                ? "#f2ecf9"
                                : "transparent",
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        background:
                            themeMode.mode === "light" ? "#e5d9f3" : "#cccccc",
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        background:
                            themeMode.mode === "light" ? "#e5d9f3" : "#353535",
                    },
                },
            },
            MuiPickersToolbar: {
                styleOverrides: {
                    root: {
                        background:
                            themeMode.mode === "light" ? "#e5d9f3" : "#353535",
                    },
                },
            },
            MuiCalendarPicker: {
                styleOverrides: {
                    root: {
                        background:
                            themeMode.mode === "light" ? "#e5d9f3" : "#353535",
                    },
                },
            },
            MuiTabScrollButton: {
                styleOverrides: {
                    root: {
                        color:
                            themeMode.mode === "light"
                                ? "rgb(30, 30, 30)"
                                : "#ffffff",
                        "&.Mui-disabled": {
                            opacity: 0.3,
                        },
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    outlined: {
                        color:
                            themeMode.mode === "light"
                                ? "rgb(30, 30, 30)"
                                : "#ffffff",
                    },
                    filled: {
                        border: "1px solid transparent",
                    },
                    label: {
                        lineHeight: "16px",
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    textColorPrimary: {
                        color:
                            themeMode.mode === "light"
                                ? "rgb(30, 30, 30)"
                                : "#ffffff",
                    },
                    root: {
                        "&.Mui-selected": {
                            color: "#804ac9",
                        },
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: "#804ac9",
                    },
                },
            },
        },
        typography: {
            h1: {
                fontSize: 24,
                fontWeight: 400,
                [breakpoints.down("sm")]: {
                    fontSize: 20,
                },
            },
            h2: {
                fontSize: 22,
                fontWeight: 400,
                marginBottom: "15px",
                [breakpoints.down("sm")]: {
                    fontSize: 20,
                },
            },
            h3: {
                fontSize: 18,
                fontWeight: 600,
                marginBottom: "10px",
                [breakpoints.down("sm")]: {
                    fontSize: 16,
                },
            },
            fontFamily: ["Roboto Flex", "sans-serif"].join(","),
        },
        palette: {
            mode: themeMode.mode,
            primary: {
                main: "#512888",
                light: "#804ac9",
                dark: "#40206c",
            },
            secondary: {
                main: "#ff5c15",
                light: "#ff5c15",
                dark: "#ae3400",
            },
            footerBackground:
                themeMode.mode === "light" ? "#dacbef" : "transparent",
            tooltipBackground:
                themeMode.mode === "light" ? "#e5d9f3" : "#353535",
            background: {
                default:
                    themeMode.mode === "light" ? "#ffffff" : "rgb(30, 30, 30)",
            },
            text: {
                primary:
                    themeMode.mode === "light" ? "rgb(30, 30, 30)" : "#fff",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
