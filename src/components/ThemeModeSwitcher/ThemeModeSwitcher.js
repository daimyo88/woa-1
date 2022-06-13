import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ThemeModeContext } from "../../context/theme-mode-context";

export default function ThemeModeSwitcher() {
    const {themeMode, setThemeMode} = useContext(ThemeModeContext);
    const switchMode = (mode) => {
        setThemeMode({mode: mode});
        localStorage.setItem('woaThemeMode', mode);
    }
    return (
        <>
            { themeMode.mode === 'dark' && 
                <Button 
                    onClick={() => { switchMode('light')}}
                    variant="contained" 
                    color="secondary"
                    sx={{minWidth: '88px'}}
                    startIcon={<LightModeIcon />}
                >
                    Light
                </Button> 
            }
            { themeMode.mode === 'light' && 
                <Button 
                    onClick={() => { switchMode('dark')}}
                    variant="contained" 
                    color="secondary"
                    sx={{minWidth: '88px'}}
                    startIcon={<DarkModeIcon />}
                >
                    Dark
                </Button> 
            }
        </>
    )
}