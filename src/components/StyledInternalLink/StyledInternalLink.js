import React from 'react';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const StyledLink = styled((props) => (
        <Link {...props } />
    ))(({theme}) => ({
        color: theme.palette.text.primary,
        transition: '0.3s',
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    }));

export default function StyledInternalLink({url, text}) {
    return (
        <StyledLink to={url}>{text}</StyledLink>
    )
}