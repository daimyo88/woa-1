import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export default function HighlightedTitle({ text }) {
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

HighlightedTitle.propTypes = {
    text: PropTypes.string.isRequired,
}