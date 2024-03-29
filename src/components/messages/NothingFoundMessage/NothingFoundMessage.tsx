import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import nothingFoundPicture from '../../../assets/img/hachikuji_confused.png';

const NothingFoundMessage: FC<{ text?: string }> = ({text = 'Nothing found :('}) =>  {
    return (
        <Grid container justifyContent="center">
            <Grid item sx={{p: '50px 20px'}}>
                <img src={nothingFoundPicture} alt="anime character confused" />
                <Typography 
                    variant="h2" 
                    align="center"
                    color="secondary"
                    sx={{mt: '20px', fontWeight: '400'}}
                >
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NothingFoundMessage;
