import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ThemeModeContext } from "../../context/theme-mode-context";

export default function ThemeModeSwitcher() {
    const {themeMode, setThemeMode} = useContext(ThemeModeContext);
    return (
        <>
            { themeMode.mode === 'dark' && 
                <Button 
                    onClick={() => { setThemeMode({mode: 'light'})}}
                    variant="contained" 
                    color="secondary"
                    startIcon={<LightModeIcon />}
                >
                    Light
                </Button> 
            }
            { themeMode.mode === 'light' && 
                <Button 
                    onClick={() => { setThemeMode({mode: 'dark'})}}
                    variant="contained" 
                    color="secondary"
                    startIcon={<DarkModeIcon />}
                >
                    Dark
                </Button> 
            }
        </>
    )
}