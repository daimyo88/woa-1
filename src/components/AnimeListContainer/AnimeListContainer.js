import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

export default function AnimeListContainer({children}) {
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

AnimeListContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
      ]),
}