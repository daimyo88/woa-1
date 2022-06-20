import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { AnimeListContext } from '../../context/anime-list-context';

export default function AnimeFilters() {
    const { genres, selectedGenres, setSelectedGenres } = useContext(AnimeListContext);

    const genreClickHandler = (id) => {
        const currentGenres = [...selectedGenres];
        const existingGenreIndex = currentGenres.indexOf(id);
        if(existingGenreIndex !== -1) {
            currentGenres.splice(existingGenreIndex, 1);
        } else {
            currentGenres.push(id);
        }
        setSelectedGenres(currentGenres)
    }

    return (
        <Paper sx={{ mb: '5px', p: '10px 15px'}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography 
                        variant="h3" 
                        color="secondary.light"
                        sx={{ fontWeight: '400'}}
                    >
                        Genres
                    </Typography>
                    <Grid container spacing={1}>
                        { genres.map(({mal_id, name}) => {
                            const variant = selectedGenres.includes(mal_id) ? "filled" : "outlined";
                            return (
                                <Grid key={mal_id} item>
                                    <Chip 
                                        color="primary" 
                                        label={name} 
                                        variant={variant}
                                        onClick={() => genreClickHandler(mal_id)}
                                        sx={{
                                            color: 'text.primary'
                                        }}
                                    />
                                </Grid>
                            )  
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}