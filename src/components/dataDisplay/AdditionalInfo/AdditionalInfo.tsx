import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

interface AdditionalInfoProps {
    label: string,
    text: string,
    color?: string
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({label, text, color = 'primary'}) => {
    const theme = useTheme();
    const textColor = color === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light;
    return (
        <Typography paragraph sx={{mb:'2px'}} color="text.primary">
            <span style={{display: 'inline-block', minWidth: '60px', color: textColor }}>{ label } </span>{ text }
        </Typography>
    )
}

export default AdditionalInfo;
