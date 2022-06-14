import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

import getAnimeAll from '../../services/getAnimeAll';

const AnimeItem = ({mal_id, title, images}) => {
    return (
        <Grid 
            item 
            sx={{
                width: '249px',
                p: '0 12px',
                mb: '20px'
            }}>
            <Link 
                to={`/anime/${mal_id}`}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Paper>
                    <img 
                        style={{
                            display: 'block', 
                            width: '100%', 
                            height: '300px', 
                            objectFit: 'cover'
                        }} 
                        src={images?.webp?.large_image_url} 
                        alt={title}
                    />
                    <Typography 
                        sx={{
                            p: '10px 15px',
                            m: 0,
                            fontWeight: '400',
                        }} 
                        variant="h3"
                        align="center"
                    >
                        {title}
                    </Typography>
                </Paper>
            </Link>
        </Grid>
    )
}

export default function AnimeList() {

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const getAnimes = async () => {
            const animeList = await getAnimeAll();
            setAnimes(animeList.data.data);;
        }
        getAnimes();   
    }, []);

   // console.log(animes)

    return (
        <>
            { !animes && <div>Loading</div> }
            { !!animes?.length && 
                <Container 
                    style={{
                        maxWidth: '1100px',
                        padding: 0,
                        margin: '15px auto 20px'
                    }}
                >
                    <Grid 
                        container 
                        justifyContent="center" 
                        spacing={0} 
                    >
                        { animes.map(anime => {
                            console.log(anime)
                            return (
                                <AnimeItem {...anime} key={anime.mal_id} />
                            )
                        })}
                    </Grid>
                </Container>
            }
        </>
    )
}