import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import { searchOptionsSliceActions } from '../../../store/search-options-slice';
import { useGetGenresQuery } from '../../../services/genres';

export default function FilterGenres() {
    const searchOptions = useSelector(state => state.searchOptions);
    const dispatch = useDispatch();
    const { data } = useGetGenresQuery();

    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                Genres
            </Typography>
            <Grid container spacing={1}>
                { data?.data.map(({mal_id, name}) => {
                    const variant = searchOptions.genres.includes(mal_id) ? "filled" : "outlined";
                    return (
                        <Grid key={mal_id} item>
                            <Chip 
                                color="primary" 
                                label={name} 
                                variant={variant}
                                onClick={() => dispatch(searchOptionsSliceActions.updateSelectedGenres(mal_id))}
                            />
                        </Grid>
                    )  
                })}
            </Grid>
        </>
    )
}