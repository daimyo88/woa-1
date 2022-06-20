import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';

export default function Public() {
    return (
        <>
            <Grid 
                container
                direction="column"
                sx={{
                    minHeight: '100vh'
                }}
            >
                <Grid item>
                    <Header />
                </Grid>
                <Grid 
                    item
                    sx={{
                        flexGrow: 1,
                        backgroundColor: 'background'
                    }}
                >
                        <Container 
                            sx={
                                {maxWidth: '1400px'}
                            }

                        >
                            <Outlet />
                        </Container>
                </Grid>
                <Grid item 
                    sx={{
                        backgroundColor: 'background'
                    }}
                >
                    <Footer />
                </Grid>
            </Grid>
            <ScrollTopButton />
        </>
    )
}