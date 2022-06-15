import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { Box } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';

export default function AnimeItem({mal_id, title, images, score, type}) {

    return (
        <Grid 
            item 
            sx={{
                width: '249px',
                p: '0 12px',
                mb: '24px'
            }}>
            <Link 
                to={`/anime/${mal_id}`}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Paper 
                    sx={{
                        '&:hover h3': {
                            color: 'secondary.main'
                        }
                    }}
                >
                    <Box style={{position: 'relative'}}>
                        <Chip 
                            color="primary"
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px'
                            }}
                            icon={<StarIcon style={{color: '#FFDF00'}}/>} 
                            label={score} 
                        />
                        <Chip 
                            color="secondary"
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: '5px',
                                left: '5px'
                            }}
                            label={type} 
                        />
                        <img 
                            style={{
                                display: 'block', 
                                width: '100%', 
                                height: '300px', 
                                objectFit: 'cover'
                            }} 
                            src={images?.jpg?.large_image_url} 
                            alt={title}
                        />
                    </Box>
                    <Typography 
                        sx={{
                            transition: '0.3s',
                            p: '10px 15px',
                            m: 0,
                            fontWeight: '400',
                        }} 
                        variant="h3"
                        align="center"
                    >
                        {title}
                    </Typography>
                </Paper>
            </Link>
        </Grid>
    )
}