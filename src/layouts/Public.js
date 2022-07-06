import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Header from '../components/headers/PageHeader/PageHeader';
import Footer from '../components/footers/PageFooter/PageFooter';
import PageLoader from '../components/loaders/PageLoader/PageLoader';
import ScrollTopButton from '../components/buttons/ScrollTopButton/ScrollTopButton';

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
                            <React.Suspense fallback={<PageLoader />} >
                                <Outlet />
                            </React.Suspense>
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