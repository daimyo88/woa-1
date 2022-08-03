import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

interface AnimeInfoProps {
    synopsis: string,
    genres: Array<{ name: string }>,
    rating: string,
    aired: string,
    score: number,
    type: string,
    status: string,
}

const AnimeInfo: FC<AnimeInfoProps> = (props) => {
    const { synopsis, genres, rating, aired, score, type, status } = props;
    const genresArr = genres?.map(genre => genre.name);
    const scoreString = score ? `${score} / 10` : 'N/A';
    return (
        <>
            { synopsis && <Typography paragraph>
                { synopsis }
            </Typography> }
            <Grid container>
                <Grid item lg={6} xs={12}>
                    { !!genres.length && <AdditionalInfo label="Genres: " text={ genresArr.join(', ') } /> }
                    { rating && <AdditionalInfo color="secondary" label="Rating: " text={ rating } /> }
                    { aired && <AdditionalInfo label="Aired: " text={ aired } /> }         
                </Grid>
                <Grid item lg={6} xs={12}>
                    { scoreString && <AdditionalInfo color="secondary" label="Score: " text={ scoreString } /> }
                    { type && <AdditionalInfo label="Type: " text={ type } /> } 
                    { status && <AdditionalInfo color="secondary" label="Status: " text={ status } /> }
                </Grid>
            </Grid>
        </>
    )
}

export default AnimeInfo;