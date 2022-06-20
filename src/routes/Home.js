import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import lightPicture from '../assets/img/hanekawa_double_reverse.png';
import darkPicture from '../assets/img/hanekawa_double.png';
import { ThemeModeContext } from "../context/theme-mode-context";
import StyledLink from '../components/StyledLink/StyledLink';
import HighlightedTitle from '../components/HighlightedTitle/HighlightedTitle';

export default function Home(){
    const {themeMode} = useContext(ThemeModeContext);
    
    return (
        <Container 
            sx={{
                maxWidth: '800px',
                py: '50px',
                px: 0
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
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button 
                            component={Link}
                            to="/search"
                            variant="contained" 
                            color="secondary"
                            size="large"
                            endIcon={<SearchIcon />}
                    >
                        ANIME SEARCH
                    </Button> 
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}