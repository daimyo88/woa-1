import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeModeActions } from '../../../store/theme-mode-slice';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeModeSwitcher() {
    const themeMode = useSelector(state => state.themeMode);
    const dispatch = useDispatch();

    const switchMode = () => {
        dispatch(themeModeActions.toggleThemeMode());
    }

    useEffect(() => {
        localStorage.setItem('woaThemeMode', themeMode.mode);
    }, [themeMode.mode]);

    const buttonText = themeMode.mode === 'light' ? 'Dark' : 'Light';

    return (
        <Button 
            onClick={ switchMode }
            variant="contained" 
            color="secondary"
            sx={{minWidth: '88px'}}
            startIcon={themeMode.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        >
            { buttonText }
        </Button> 
    )
}