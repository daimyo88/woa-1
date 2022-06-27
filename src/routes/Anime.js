import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';

import getAnime from '../services/getAnime';
import GoBackButtons from '../components/GoBackButtons/GoBackButtons';
import PageTitle from '../components/PageTitle/PageTitle';

import { ANIME_SINGLE_TABS } from '../constants/contstants';
import AnimeTabs from '../components/AnimeTabs/AnimeTabs';
import { Paper } from '@mui/material';

import AnimeInfo from '../components/AnimeInfo/AnimeInfo';
import AnimeInfoLoader from '../components/AnimeInfoLoader/AnimeInfoLoader';
import ApiErrorMessage from '../components/ApiErrorMessage/ApiErrorMessage';

export default function Anime() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [anime, setAnime] = useState(null);
    const [tab, setTab] = useState(0);
    let params = useParams();

    useEffect(() => {
        const fetchAnime = async () => {
            // JIKAN API allows only 3 requests per second. React renders twice in development mode 
            // so it causes API errors
            setTimeout(async () => {
                    try {
                        const animeData = await getAnime(params.id, setError);
                        setAnime(animeData?.data?.data);
                    } finally {
                        setLoading(false);
                    }
                }, process.env.REACT_APP_API_DELAY)
        }

        fetchAnime();
    }, [params]);

    console.log(anime);

    return (
        <>
            <GoBackButtons />
            { !loading && error && <ApiErrorMessage />}
            { loading && !error && <AnimeInfoLoader />}
            { !loading && !error && anime && <>
                <PageTitle text={anime.title} />
                <Grid container sx={{my: '20px'}}>
                    <Grid item sm={4} xs={12} sx={{textAlign: 'center'}}>
                        <img src={ anime?.images?.jpg?.large_image_url } alt={anime.title} />
                    </Grid>
                    <Grid 
                        item 
                        sm={8} 
                        xs={12}
                        sx={theme => ({
                          pl: '50px',
                          [theme.breakpoints.down('md')]: {
                            pl: '30px'
                          }, 
                          [theme.breakpoints.down('sm')]: {
                            mt: '10px',
                            pl: '0'
                          }, 
                        })}
                    >                 
                        <AnimeTabs value={tab} changeHandler={setTab} options={ANIME_SINGLE_TABS} />
                        <Paper sx={{mt: '15px', p: '15px'}}>
                            { tab === 0 && 
                                <AnimeInfo 
                                    synopsis={ anime?.synopsis } 
                                    genres={ anime?.genres }
                                    rating={ anime?.rating }
                                    aired={ anime?.aired?.string }
                                    status= { anime?.status }
                                    type= { anime?.type }
                                    score= { anime?.score }
                                />
                            }
                            { tab === 1 && <>related</>}
                            { tab === 2 && <>external</>}
                        </Paper>
                    </Grid>
                </Grid>
            </>}
        </>
    )
}