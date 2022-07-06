import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import CustomInput from '../../inputs/CustomInput/CustomInput';

export default function ContactForm(props) {
    return (
        <Formik
            initialValues = {{
                name: '',
                lastName: '',
                email: '',
                message: ''
            }}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
            validationSchema= { Yup.object({
                lastName: Yup.string()
                    .test('bot defence', (value) => {
                        return !value;
                    }),
                name: Yup.string()
                    .required('Required field'),
                message: Yup.string()
                    .required('Required field'),

            })}

            onSubmit= {(values, formik) => {
                props.submitHandler(values, formik);
            }}
        >
        {
            formProps => {

                return (
                <form onSubmit={formProps.handleSubmit} style={{maxWidth: '400px', margin: '0 auto 5px'}}>

                    <Grid container >
                        <Grid sx={{opacity: 0}} item xs={12}>
                            <CustomInput 
                                name="lastName"
                                type="hidden"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mb: '20px'}}>
                            <CustomInput 
                                name="name"
                                type="text"
                                label="Name*"
                                isrequired="true"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mb: '20px'}}>
                            <CustomInput 
                                name="email"
                                type="email"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <CustomInput 
                                name="message"
                                type="text"
                                label="Message*"
                                multiline={true}
                            />
                        </Grid>
                    </Grid> 

                    <Grid container justifyContent="center" style={{'marginTop':'20px'}}>
                        <LoadingButton
                            type="submit" 
                            size="large"
                            variant="contained" 
                            color="secondary"
                            endIcon={<SendIcon />}
                            loading={props.loading}
                            loadingPosition="end"
                        >
                            SEND MESSAGE
                        </LoadingButton>
                    </Grid>
                </form> 
                )
            }
        }
        </Formik>
    )
}

ContactForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
}