import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export default function StyledLink({ href, targetBlank, text }) {
    const theme = useTheme();
    let target = targetBlank ? 'blank' : '';
    const color = theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light;
    const hoverColor = theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.lightest;

    const Link = styled.a`
        color: ${color};
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            color: ${hoverColor}
        }
    `
    return (
        <Link href={href} target={target}>{text}</Link>
    )
}