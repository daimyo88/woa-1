import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

const AnimeListContainer: FC = ({children}) => {
    return (
        <Grid 
            container 
            spacing={0} 
            sx={{
                maxWidth: '996px',
                margin: '0 auto',
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

export default AnimeListContainer;