import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledTitle = styled('h1')(({theme}) => ({
        color: theme.palette.secondary.main,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '28px',
        margin: '10px 0 10px',
        '@media(max-width: 768px)': {
            margin: '12px 0',
            fontSize: '22px',
        }
    }))

const PageTitle: FC<{ text: string }> = ({ text }) => {
    const theme = useTheme();

    return (
        <StyledTitle theme={theme}>{text}</StyledTitle>
    )
}

export default PageTitle;