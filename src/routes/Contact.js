import React, { useState } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import { Paper, Typography } from '@mui/material';
import StyledExternalLink from '../components/StyledExternalLink/StyledExternalLink';
import ContactForm from '../components/ContactForm/ContactForm';
import sendMessage from '../services/sendMessage';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (values, formik) => {
        try {
            setLoading(true);
            const response = await sendMessage(values, setError);
            if(response?.status === 200) {
                formik.resetForm();
                setSuccess(true);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <PageTitle text="Contact" />
            <Paper sx={{mb: '15px', p: '15px'}}>
                { success && !loading && !error && <SuccessMessage text="Thank you for your time!" /> }
                { !success && !loading && error && <ErrorMessage text="Something went wrong :( Please try again later!" /> }
                { !success && !error && <>
                    <Typography paragraph >
                        Hi! If you found this project interesting or useful, or found a bug, I would really appreciate to receive a message from you! I can be found on <StyledExternalLink url="https://www.linkedin.com/in/denys-dmytruk-b54845131/" text="LinkedIn"/> or you can just send me a message directly via the form below:
                    </Typography>
                    <ContactForm
                        loading={loading}
                        submitHandler={sendEmail}
                    />
                </> }
            </Paper>
        </>
    )
}