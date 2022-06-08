import React, { useContext, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import lightPicture from '../assets/img/hanekawa_double_reverse.png';
import darkPicture from '../assets/img/hanekawa_double.png';
import { ThemeModeContext } from "../context/theme-mode-context";


export default function Home(){
    const {themeMode} = useContext(ThemeModeContext);
    const theme = useTheme();
    
    const Span = useMemo(() => styled.span`
            color: ${theme.palette.secondary.main};
            font-weight: bold;
            font-size: 28px;
            @media(max-width: 768px) {
                font-size: 24px;
            }
        `)

    const Hyperlink = useMemo(() => styled.a`
            color: ${theme.palette.primary.main};
            text-decoration: none;
            }
        `)


    return (
        <Container 
            sx={{
                maxWidth: '800px',
                py: '30px'
            }}
        >
            <Grid 
                container
                sx={{

                }}
            >
                <Grid 
                    item xs={12} 
                    sx={{ textAlign: 'center'}}
                >
                    { themeMode.mode === 'light' ? <img src={lightPicture} alt="anime character light theme" />
                    : <img src={darkPicture} alt="anime character dark theme" /> }
                </Grid>
                <Grid item xs={12} sx={{ py: '30px' }}>
                    <Paper elevation={0}>
                        <Typography 
                            align="center"
                            variant="h1"
                        >
                            Welcome to the <Span>World of Anime</Span>, <br />online anime library based on <Hyperlink target="blank" href="https://jikan.moe/">Jikan REST API</Hyperlink>
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
                        SEARCH
                    </Button> 
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}