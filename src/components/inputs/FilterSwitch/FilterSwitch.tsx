import React, { FC } from "react";
import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

interface SwitchProps {
    title: string;
    value: boolean;
    changeHandler: (value: boolean) => void;
}

const FilterSwitch: FC<SwitchProps> = ({ title, value, changeHandler }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeHandler(e.target.checked);
    };

    return (
        <>
            <Typography
                variant="h3"
                color="secondary.light"
                sx={{ fontWeight: "400" }}
            >
                {title}
            </Typography>
            <Switch color="primary" checked={value} onChange={handleChange} />
        </>
    );
};

export default FilterSwitch;
