import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledTitle = styled.h1(({theme}) => ({
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

export default function PageTitle({ text }) {
    const theme = useTheme();

    return (
        <StyledTitle theme={theme}>{text}</StyledTitle>
    )
}