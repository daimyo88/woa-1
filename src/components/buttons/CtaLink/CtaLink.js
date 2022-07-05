import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function CtaLink({url, text, icon}) {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Button 
                    component={Link}
                    to={url}
                    variant="contained" 
                    color="secondary"
                    size="large"
                    endIcon={icon}
                >
                    { text }
                </Button> 
            </Grid>
        </Grid>
    )
}

CtaLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
}