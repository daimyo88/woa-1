import React, { FC } from "react";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLink: FC<{ href: string; targetBlank: boolean; text: string }> = ({
    href,
    targetBlank,
    text,
}) => {
    const theme = useTheme();
    let target = targetBlank ? "blank" : "";
    const color =
        theme.palette.mode === "light"
            ? theme.palette.primary.main
            : theme.palette.primary.light;
    const hoverColor =
        theme.palette.mode === "light" ? theme.palette.primary.dark : "#dacbef";

    const Link = styled('a')`
        color: ${color};
        text-decoration: none;
        transition: 0.3s;
        &:hover {
            color: ${hoverColor};
        }
    `;
    return (
        <Link href={href} target={target}>
            {text}
        </Link>
    );
};

export default StyledLink;
