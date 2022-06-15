import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ThemeModeContext } from "../../context/theme-mode-context";

export default function ThemeModeSwitcher() {
    const {themeMode, setThemeMode} = useContext(ThemeModeContext);
    const switchMode = () => {
        const newMode = themeMode.mode === 'light' ? 'dark' : 'light';
        setThemeMode({mode: newMode});
        localStorage.setItem('woaThemeMode', newMode);
    }
    return (
        <Button 
            onClick={() => { switchMode()}}
            variant="contained" 
            color="secondary"
            sx={{minWidth: '88px'}}
            startIcon={themeMode.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        >
            { themeMode.mode === 'light' ? 'Dark' : 'Light'}
        </Button> 
    )
}