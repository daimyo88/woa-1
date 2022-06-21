import React, { useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

import { AnimeListContext } from '../../context/anime-list-context';

export default function FilterSelect({ title, value, options, changeHandler}) {
    const theme = useTheme();
    const { setPage } = useContext(AnimeListContext);

    const [svalue, setSValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setSValue(newValue);
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                disableHighlightToday
                inputFormat="dd/MM/yyyy"
                value={svalue}
                onChange={handleChange}
                openTo="month"
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
        </>
    )
}