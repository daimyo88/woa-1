import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import styled from '@emotion/styled';

const HighlightedTitle: FC<{ text: string }> = ({ text }) => {
    const theme = useTheme();
    const StyledTitle = styled.span`
            color: ${theme.palette.secondary.main};
            font-weight: bold;
            font-size: 28px;
            @media(max-width: 768px) {
                font-size: 24px;
            }
        `;

    return (
        <StyledTitle>{text}</StyledTitle>
    )
}

export default HighlightedTitle;