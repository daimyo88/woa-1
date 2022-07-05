import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export default function GoBackButtons() {

    return (
        <Grid container alignItems="center" justifyContent="space-between" sx={{mt: '15px'}}>
            <Grid item>
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={ () => { window.history.back() } }
                    startIcon={<KeyboardArrowLeftIcon />}
                >
                    Go back
                </Button>
            </Grid>
            <Grid item>
                <IconButton 
                    size="large"
                    component={Link}
                    to="/search"
                >
                    <ClearIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}