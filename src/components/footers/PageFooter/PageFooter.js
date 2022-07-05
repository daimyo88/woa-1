import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import StyledLink from '../../text/StyledLink/StyledLink';

export default function PageFooter() {
    return (
        <Box sx={{bgcolor: 'footerBackground'}}>
            <Paper elevation={2}>
                <Container sx={{maxWidth: '1400px'}}>
                    <Typography paragraph align="center" sx={{m:0, py: '10px'}}>
                        Developed by <StyledLink targetBlank={true} href="https://www.linkedin.com/in/denys-dmytruk-b54845131" text="Den Dmytruk" /> ©2022
                    </Typography>
                </Container>
            </Paper>
        </Box>
    )
}