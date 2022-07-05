import React from 'react';
import Grid from '@mui/material/Grid';

import Skeleton from '@mui/material/Skeleton';
import AnimeListContainer from '../../containers/AnimeListContainer/AnimeListContainer';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';

let blankItems = [1,2,3,4,5,6,7,8];

if(window.innerWidth < 1061 && window.innerWidth > 548) {
    blankItems.length = 6;
} 

if(window.innerWidth < 548) {
    blankItems.length = 2;
} 

export default function AnimeListLoader() {
    return (
        <AnimeListContainer>
            { blankItems.map(item => {
                return (
                    <Grid 
                        item
                        key={item}
                        sx={{
                            width: '249px',
                            p: '0 12px',
                            mb: '24px'
                        }}>
                        <Paper>
                            <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '300px', }}/>
                            <Box sx={{ p: '10px 15px'}}>
                                <Skeleton animation="wave" variant="text" sx={{ height: '18px'}} />
                            </Box>
                        </Paper>
                    </Grid>

                )
            })}
        </AnimeListContainer>
    )
}