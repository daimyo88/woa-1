import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

const FullscreenContainer: FC = ({children}) => {
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

export default FullscreenContainer;