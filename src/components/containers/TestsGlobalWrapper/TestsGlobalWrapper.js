import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeModeContextProvider } from "../../../context/theme-mode-context";
import ThemeProvider from '../../../theme/ThemeProvider';

export default function Wrapper({children}) {
    return (
        <BrowserRouter> 
            <ThemeModeContextProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ThemeModeContextProvider>
        </BrowserRouter>
    )
}