import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export default function AnimeGalleryLoader() {
    return (
        <Grid container alignItems="center" spacing={1} >
            <Grid item sm={4} xs={12}>
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '300px', }}/>
            </Grid>            
            <Grid item sm={4} xs={12} sx={{px: '4px'}}>
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '250px', }}/>
            </Grid>            
            <Grid item sm={4} xs={12} sx={{px: '4px'}}>
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '300px', }}/>
            </Grid>            
    </Grid>
    )
}

