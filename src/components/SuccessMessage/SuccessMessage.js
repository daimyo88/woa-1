import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import successPicture from '../../assets/img/hachikuji_smile.png';

export default function SuccessMessage({text}) {
    return (
        <Grid container justifyContent="center">
            <Grid item sx={{p: '50px 20px'}}>
                <img src={successPicture} alt="anime character smile" />
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