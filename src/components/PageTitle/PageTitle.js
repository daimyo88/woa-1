import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledTitle = styled.h1(({theme}) => ({
        color: theme.palette.secondary.main,
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '30px',
        margin: '20px 0 5px',
        '@media(max-width: 768px)': {
            margin: '12px 0 5px',
            fontSize: '22px',
        }
    }))

export default function PageTitle({ text }) {
    const theme = useTheme();

    return (
        <StyledTitle theme={theme}>{text}</StyledTitle>
    )
}