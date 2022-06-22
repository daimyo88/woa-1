import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { AnimeListContext } from '../../context/anime-list-context';
import FilterGenres from '../FilterGenres/FilterGenres';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterDate from '../FilterDate/FilterDate';

import { TYPE_OPTIONS  } from '../../constants/contstants';
import { RATING_OPTIONS } from '../../constants/contstants';
import { STATUS_OPTIONS } from '../../constants/contstants';

export default function AnimeFilters() {
    const { type, setType, rating, setRating, status, setStatus, startDate, setStartDate, endDate, setEndDate } = useContext(AnimeListContext);

    return (
        <Paper sx={{ mb: '5px', p: '10px 15px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{mb: '10px'}}>
                    <FilterGenres />
                </Grid>
                <Grid item lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Type"
                        value={ type }
                        options={ TYPE_OPTIONS }
                        changeHandler={ setType }
                    />
                </Grid>
                <Grid item lg={3} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Rating"
                        value={ rating }
                        options={ RATING_OPTIONS }
                        changeHandler={ setRating }
                    />
                </Grid>
                <Grid item lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Status"
                        value={ status}
                        options={ STATUS_OPTIONS }
                        changeHandler={ setStatus }
                    />
                </Grid>
                <Grid item lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="Start year"
                        value={ startDate }
                        changeHandler={ setStartDate }
                    />
                </Grid>
                <Grid item lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="End year"
                        value={ endDate }
                        changeHandler={ setEndDate }
                    />
                </Grid>
                <Grid item lg={1} sx={{mb: '10px'}}>
               
                </Grid>
            </Grid>
        </Paper>
    )
}