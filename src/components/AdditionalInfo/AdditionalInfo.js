import React from 'react';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';

export default function AdditionalInfo({label, text, color = 'primary'}) {
    const theme = useTheme();
    const textColor = color === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light;
    return (
        <Typography paragraph sx={{my:'2px'}} color="text.primary">
            <span style={{color: textColor }}>{ label } </span>{ text }
        </Typography>
    )
}