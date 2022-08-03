import React, { FC } from 'react';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { searchOptionsSliceActions } from '../../../store/search-options-slice';
import { useGetGenresQuery } from '../../../services/genres';
import Genre from '../../../models/Genre';

const FilterGenres: FC = () => {
    const searchOptions = useAppSelector(state => state.searchOptions);
    const dispatch = useAppDispatch();
    const { data } = useGetGenresQuery('');

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
                { data?.data.map(({mal_id, name}: Genre) => {
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

export default FilterGenres;