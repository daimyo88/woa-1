import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

interface LinkProps {
    url: string,
    text: string
}

const StyledLink = styled((props: { to: string }) => (
        <Link {...props } />
    ))(({theme}) => ({
        color: theme.palette.text.primary,
        transition: '0.3s',
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    }));

const StyledInternalLink: FC<LinkProps> = ({url, text}) => {
    return (
        <StyledLink to={url}>{text}</StyledLink>
    )
}

export default StyledInternalLink;