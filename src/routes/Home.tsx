import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

import { useAppSelector } from '../hooks/redux';
import lightPicture from '../assets/img/hanekawa_double_reverse.png';
import darkPicture from '../assets/img/hanekawa_double.png';
import StyledLink from '../components/text/StyledLink/StyledLink';
import HighlightedTitle from '../components/text/HighlightedTitle/HighlightedTitle';
import CtaLink from '../components/buttons/CtaLink/CtaLink';
import FullscreenContainer from '../components/containers/FullscreenContainer/FullscreenContainer';

const Home: FC = () => {
    const themeMode = useAppSelector(state => state.themeMode);
    
    return (
        <FullscreenContainer>
            <Box 
                sx={{
                    maxWidth: '800px',
                    py: '30px',
                    m: '0 auto'
                }}
            >
                <Grid 
                    container
                >
                    <Grid 
                        item xs={12} 
                        sx={{ textAlign: 'center'}}
                    >
                        { themeMode.mode === 'light' ? <img src={lightPicture} alt="anime character light theme" />
                        : <img src={darkPicture} alt="anime character dark theme" /> }
                    </Grid>
                    <Grid item xs={12} sx={{ py: '25px' }}>
                        <Paper elevation={0}  sx={{ py: '15px' }}>
                            <Typography 
                                align="center"
                                variant="h1"
                            >
                                Welcome to the <HighlightedTitle text="World of Anime" />, <br />online anime library based on <StyledLink targetBlank={true} href="https://jikan.moe/" text="Jikan REST API" />
                            </Typography>
                        </Paper>
                    </Grid>
                    <CtaLink url='/search' icon={<SearchIcon />} text='ANIME SEARCH' />
                </Grid>
            </Box>
        </FullscreenContainer>
    )
}

export default Home;