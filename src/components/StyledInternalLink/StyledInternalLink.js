import React from 'react';
import PropTypes from 'prop-types';
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

StyledInternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}