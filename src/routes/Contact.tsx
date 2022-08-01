import React, { useState, FC } from 'react';
import { Paper, Typography } from '@mui/material';
import PageTitle from '../components/text/PageTitle/PageTitle';
import StyledExternalLink from '../components/text/StyledExternalLink/StyledExternalLink';
import sendMessage from '../services/sendMessage';
import ContactForm from '../components/forms/ContactForm/ContactForm';
import SuccessMessage from '../components/messages/SuccessMessage/SuccessMessage';
import ErrorMessage from '../components/messages/ErrorMessage/ErrorMessage';
import FullscreenContainer from '../components/containers/FullscreenContainer/FullscreenContainer';

import ContactData from '../models/contactData';

const Page: FC = () => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = async (values: ContactData, formik: any) => {
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
        <FullscreenContainer>
            <PageTitle text="Contact" />
            <Paper sx={{mb: '15px', p: '15px'}}>
                { success && !loading && !error && <SuccessMessage text="Thank you for your time!" /> }
                { !success && !loading && error && <ErrorMessage text="Something went wrong :( Please try again later!" /> }
                { !success && !error && <>
                    <Typography paragraph sx={{ textAlign: { md: 'center'}}}>
                        Hi! If you found this project interesting or useful, or found a bug, I would really appreciate to receive a message from you! I can be found on <StyledExternalLink url="https://www.linkedin.com/in/denys-dmytruk-b54845131/" text="LinkedIn"/> or you can just send me a message directly via the form below:
                    </Typography>
                    <ContactForm
                        loading={loading}
                        submitHandler={sendEmail}
                    />
                </> }
            </Paper>
        </FullscreenContainer>
    )
}

export default Page;