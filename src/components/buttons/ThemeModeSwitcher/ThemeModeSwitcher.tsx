import React, { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { themeModeActions } from '../../../store/theme-mode-slice';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeModeSwitcher: FC = () => {
    const themeMode = useAppSelector(state => state.themeMode);
    const dispatch = useAppDispatch();

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

export default ThemeModeSwitcher;