import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { PAGES } from '../../constants/contstants';
import SearchIcon from '@mui/icons-material/Search';

export default function Navigation() {
    return (
        <>
            {PAGES.map((page) => {
                let icon = null;
                if (page.name === 'Search') icon = <SearchIcon />;
                return (
                    <Button 
                        key={page.name}
                        endIcon= {icon}
                        component={ NavLink }
                        to={page.url}
                        sx={{
                            color: '#ffffff',
                            fontWeight: 'normal',
                            mx: '5px',
                            '&.active': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        {page.name}
                    </Button>
                )}
            )}
        </>
    )
}