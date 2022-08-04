import React, { FC } from 'react';
import { styled } from "@mui/material/styles";

const StyledLink = styled('a')(({theme}) => ({
        color: theme.palette.text.primary,
        transition: '0.3s',
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    }));

const StyledExternalLink: FC<{ url: string, text: string }> = ({url, text}) => {
    return (
        <StyledLink href={url} target="blank" rel="noopener">{text}</StyledLink>
    )
}

export default StyledExternalLink;