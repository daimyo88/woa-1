import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { parseISO } from 'date-fns';

export default function FilterSelect({ title, value, changeHandler}) {

    const handleChange = (newValue) => {
        changeHandler(newValue.toString());
    };

    const resetDate = () => {
        changeHandler(null);
    }

    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                { title }
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                disableHighlightToday
                inputFormat="yyyy"
                value={value}
                onChange={handleChange}
                views={['year']}
                reduceAnimations
                minDate={parseISO('1917-01-01')}
                maxDate={parseISO('2030-12-31')}
                type="contained"
                renderInput={(params) => 
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'nowrap'
                        }}
                    >
                        <TextField size="small" {...params} />
                        <IconButton onClick={ resetDate }>
                            <CloseIcon color="primary"/>
                        </IconButton>
                    </Box>}
            />
            </LocalizationProvider>
        </>
    )
}

FilterSelect.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    changeHandler: PropTypes.func,
}