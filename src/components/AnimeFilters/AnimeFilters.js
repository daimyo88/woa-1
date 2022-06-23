import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import { AnimeListContext } from '../../context/anime-list-context';
import FilterGenres from '../FilterGenres/FilterGenres';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterDate from '../FilterDate/FilterDate';
import FilterSwitch from '../FilterSwitch/FilterSwitch';

import { TYPE_OPTIONS  } from '../../constants/contstants';
import { RATING_OPTIONS } from '../../constants/contstants';
import { STATUS_OPTIONS } from '../../constants/contstants';

export default function AnimeFilters() {
    const { 
        type, 
        setType, 
        rating, 
        setRating, 
        status, 
        setStatus, 
        startDate, 
        setStartDate, 
        endDate, 
        setEndDate,
        sfw,
        setSfw,
        resetFilters
    } = useContext(AnimeListContext);

    return (
        <Paper sx={{ mb: '5px', p: '10px 15px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{mb: '10px'}}>
                    <FilterGenres />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Type"
                        value={ type }
                        options={ TYPE_OPTIONS }
                        changeHandler={ setType }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Rating"
                        value={ rating }
                        options={ RATING_OPTIONS }
                        changeHandler={ setRating }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Status"
                        value={ status}
                        options={ STATUS_OPTIONS }
                        changeHandler={ setStatus }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={1} sx={{mb: '10px'}} >
                    <FilterSwitch 
                        title="SFW"
                        value={ sfw }
                        changeHandler={ setSfw }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="Start year"
                        value={ startDate }
                        changeHandler={ setStartDate }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="End year"
                        value={ endDate }
                        changeHandler={ setEndDate }
                    />
                </Grid>
                <Grid item xs={12} >
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={ resetFilters }
                                endIcon={<ClearIcon />}
                            >
                                Clear filters
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}