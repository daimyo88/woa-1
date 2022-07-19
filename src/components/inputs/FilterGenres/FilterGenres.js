import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';

import { actions } from '../../../actions/searchActions';
import { AnimeListContext } from '../../../context/anime-list-context';

export default function FilterGenres() {
    const { genres, searchOptions, dispatchSearch } = useContext(AnimeListContext);

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
                { genres?.map(({mal_id, name}) => {
                    const variant = searchOptions.selectedGenres.includes(mal_id) ? "filled" : "outlined";
                    return (
                        <Grid key={mal_id} item>
                            <Chip 
                                color="primary" 
                                label={name} 
                                variant={variant}
                                onClick={() => dispatchSearch({ type: actions.updateSelectedGenres, val: mal_id})}
                            />
                        </Grid>
                    )  
                })}
            </Grid>
        </>
    )
}