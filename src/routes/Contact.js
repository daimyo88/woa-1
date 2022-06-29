import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import { Paper, Typography } from '@mui/material';
import StyledExternalLink from '../components/StyledExternalLink/StyledExternalLink';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Page(){
    return (
        <>
            <PageTitle text="Contact" />
            <Paper sx={{mb: '15px', p: '15px'}}>
                <Typography paragraph>
                    Hi! If you found this project interesting or useful, or found a bug, I would really appreciate to receive a message from you! I can be found on <StyledExternalLink url="https://www.linkedin.com/in/denys-dmytruk-b54845131/" text="LinkedIn"/> or you can just directly send me a message via the form below:
                </Typography>
                <ContactForm />
            </Paper>
        </>
    )
}