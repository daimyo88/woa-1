import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import errorPicture from '../../../assets/img/shinobu_pout.png';

export default function ErrorMessage({text}) {
    return (
        <Grid container justifyContent="center">
            <Grid item sx={{p: '50px 20px'}}>
                <img src={errorPicture} alt="anime character pout" />
                <Typography 
                    variant="h2" 
                    align="center"
                    color="secondary"
                    sx={{mt: '20px', fontWeight: '400'}}
                >
                    { text }
                </Typography>
            </Grid>
        </Grid>
    )
}

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
}