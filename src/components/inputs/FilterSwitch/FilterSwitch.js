import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

export default function FilterSwitch({ title, value, changeHandler}) {
    const handleChange = (e) => {
        changeHandler(e.target.checked);
    };

    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                { title }
            </Typography>
            <Switch 
                color="primary"
                checked={value}
                onChange={handleChange} 
            />
        </>
    )
}

FilterSwitch.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.bool,
    changeHandler: PropTypes.func,
}