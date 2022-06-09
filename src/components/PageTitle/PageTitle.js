import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export default function PageTitle({ text }) {
    const theme = useTheme();

    const StyledTitle = styled.h1`
            color: ${theme.palette.secondary.main};
            text-align: center;
            font-weight: 500;
            font-size: 30px;
            margin: 20px 0;
            @media(max-width: 768px) {
                margin: 15px 0;
                font-size: 24px;
            }
        `;

    return (
        <StyledTitle>{text}</StyledTitle>
    )
}