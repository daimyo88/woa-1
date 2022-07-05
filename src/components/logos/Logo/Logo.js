import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Logo() {

    return (
        <Button
            component={ Link }
            to='/'
            variant="contained" 
            color="secondary"
            sx={ theme => ({
                display: 'block',
                borderRadius: '50%',
                height: '50px',
                width: '50px',
                minWidth: '0',
                padding: '0',
                color: '#ffffff',
                fontWeight: 'normal',
                fontSize: '16px',
                textAlign: 'center',
                lineHeight: '50px',
                [theme.breakpoints.down('md')]: {
                    height: '40px',
                    width: '40px',
                    fontSize: '14px',
                    lineHeight: '40px',
                  },
            })}
        >
            WoA
        </Button>
    )
}