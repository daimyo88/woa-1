import React from 'react';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';

export default function AdditionalInfo({label, text, color = 'primary'}) {
    const theme = useTheme();
    const textColor = color === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light;
    return (
        <Typography paragraph sx={{mb:'2px'}} color="text.primary">
            <span style={{display: 'inline-block', minWidth: '60px', color: textColor }}>{ label } </span>{ text }
        </Typography>
    )
}