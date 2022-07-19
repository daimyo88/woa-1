import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FilterSelect({ title, value, options, changeHandler}) {
    const theme = useTheme();
    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                { title }
            </Typography>
            <FormControl 
                sx={{ 
                    width: '100%',
                    '@media(max-width: 546px)': {
                        display: 'flex',
                        justifyContent: 'center'
                    }           
                }} 
                size="small"
            >
                <Select
                    displayEmpty
                    value={value}
                    onChange={(e) => { changeHandler(e.target.value)}}
                    color="primary"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{fontSize: '14px'}}
                > 
                    { options.map(({title, value}) => {
                        return (
                            <MenuItem 
                                key={value} 
                                style={{background: theme.palette.background, fontSize: '14px'}} 
                                value={value}
                            >
                                {title}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}

FilterSelect.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    options: PropTypes.array,
    changeHandler: PropTypes.func,
}