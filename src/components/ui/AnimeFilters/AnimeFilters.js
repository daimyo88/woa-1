import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import { AnimeListContext } from '../../../context/anime-list-context';
import FilterGenres from '../../inputs/FilterGenres/FilterGenres';
import FilterSelect from '../../inputs/FilterSelect/FilterSelect';
import FilterDate from '../../inputs/FilterDate/FilterDate';
import FilterSwitch from '../../inputs/FilterSwitch/FilterSwitch';

import { actions } from '../../../actions/searchActions';
import { TYPE_OPTIONS  } from '../../../constants/contstants';
import { RATING_OPTIONS } from '../../../constants/contstants';
import { STATUS_OPTIONS } from '../../../constants/contstants';

export default function AnimeFilters() {
    const { searchOptions, dispatchSearch } = useContext(AnimeListContext);
    const { type, rating, status, startDate, endDate, sfw } = searchOptions;

    const setFilter = (filter, val) => {
        dispatchSearch({
            type: actions.updateFilter,
            filter,
            val
        })
    }

    return (
        <Paper sx={{ mb: '5px', p: '15px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sx={{mb: '10px'}}>
                    <FilterGenres />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Type"
                        value={ type }
                        options={ TYPE_OPTIONS }
                        changeHandler={ (val) => setFilter('type', val) }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Rating"
                        value={ rating }
                        options={ RATING_OPTIONS }
                        changeHandler={ (val) => setFilter('rating', val)  }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterSelect 
                        title="Status"
                        value={ status}
                        options={ STATUS_OPTIONS }
                        changeHandler={ (val) => setFilter('status', val)  }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={1} sx={{mb: '10px'}} >
                    <FilterSwitch 
                        title="SFW"
                        value={ sfw }
                        changeHandler={ (val) => setFilter('sfw', val)  }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="Start year"
                        value={ startDate }
                        changeHandler={ (val) => setFilter('startDate', val)  }
                    />
                </Grid>
                <Grid item xs={6} md={4} lg={2} sx={{mb: '10px'}}>
                    <FilterDate 
                        title="End year"
                        value={ endDate }
                        changeHandler={ (val) => setFilter('endDate', val)  }
                    />
                </Grid>
                <Grid item xs={12} >
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={ () => dispatchSearch({type: actions.resetFilters }) }
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