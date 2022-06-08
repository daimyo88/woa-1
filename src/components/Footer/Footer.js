import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function Footer() {
    return (
        <Paper elevation={2}>
            <Container sx={{maxWidth: '1400px'}}>
                Footer
            </Container>
        </Paper>
    )
}