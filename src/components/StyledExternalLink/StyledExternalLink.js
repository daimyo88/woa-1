import React from 'react';
import styled from '@emotion/styled';

const StyledLink = styled((props) => (
        <a {...props } />
    ))(({theme}) => ({
        color: theme.palette.text.primary,
        textDecoration: 'none',
        transition: '0.3s',
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    }));

export default function StyledExternalLink({url, text}) {
    return (
        <StyledLink href={url} target="blank" rel="noopener">{text}</StyledLink>
    )
}