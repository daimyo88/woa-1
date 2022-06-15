import React from 'react';
import Grid from '@mui/material/Grid';

export default function AnimeListContainer({children}) {
    return (
        <Grid 
            container 
            spacing={0} 
            sx={{
                maxWidth: '996px',
                margin: '15px auto 20px',
                '@media(max-width: 1060px)': {
                    maxWidth: '747px',
                },  
                '@media(max-width: 811px)': {
                    maxWidth: '498px',
                },  
                '@media(max-width: 546px)': {
                    maxWidth: '249px',
                },  
            }}
        >
            { children }
        </Grid>
    )
}