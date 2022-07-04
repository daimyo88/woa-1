import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLink = styled.a(({theme}) => ({
        color: theme.palette.text.primary,
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

StyledExternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}