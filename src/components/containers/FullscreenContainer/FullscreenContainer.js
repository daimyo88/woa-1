import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

export default function FullscreenContainer({children}) {
    return (
        <Grid 
            container 
            spacing={0} 
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({
                minHeight: 'calc(100vh - 108px)',
                '@media(max-width: 600px)': {
                    minHeight: 'calc(100vh - 92px)',
                },  
                // '@media(max-width: 600px)': {
                //     minHeight: 'calc(100vh - 92px)',
                // },  
            })}
        >
            <Grid item>
                { children }
            </Grid>
        </Grid>
    )
}

FullscreenContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
      ]),
}