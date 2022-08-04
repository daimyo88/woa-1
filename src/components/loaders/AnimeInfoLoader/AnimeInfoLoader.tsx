import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const tabsBlank = [0, 1, 2, 3];
const textBlank = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const AnimeInfoLoader: FC = () => {
    return (
        <Grid container sx={{my: '20px'}}>
            <Grid item xs={12} sx={{ pb: '15px', mb: '10px'}}>
                <Skeleton 
                    animation="wave" 
                    variant="text" 
                    sx={{ 
                        maxWidth: '500px',
                        m: '0 auto',
                        height: '36px'
                    }} 
                />
            </Grid>
            <Grid item sm={4} xs={12} sx={{textAlign: 'center'}}>
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '500px', }}/>
            </Grid>
            <Grid 
                item 
                sm={8} 
                xs={12}
                sx={theme => ({
                pl: '50px',
                [theme.breakpoints.down('md')]: {
                    pl: '30px'
                }, 
                [theme.breakpoints.down('sm')]: {
                    mt: '10px',
                    pl: '0'
                }, 
                })}
            >                 
                <Grid container>
                    { tabsBlank.map(tab => (
                        <Grid key={tab} item sx={{p: '12px 16px', maxWidth: '25%'}}>
                            <Skeleton 
                                animation="wave" 
                                variant="text" 
                                sx={{ width: '70px', maxWidth: '100%' }} 
                            />
                        </Grid>
                    ))}
                </Grid>
                { textBlank.map(el => {
                    return (
                        <Skeleton 
                            key={el}
                            animation="wave" 
                            variant="text" 
                            sx={{ width: '100%', my: '5px', height: '16px' }} 
                        /> 
                    )
                }) }        
            </Grid>
    </Grid>
    )
}

export default AnimeInfoLoader;