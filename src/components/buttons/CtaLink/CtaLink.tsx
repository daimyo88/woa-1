import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

interface CtaLinkProps {
    url: string,
    text: string,
    icon: React.ReactElement | null
}

const CtaLink: FC<CtaLinkProps> = ({url, text, icon}) => {
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

export default CtaLink;