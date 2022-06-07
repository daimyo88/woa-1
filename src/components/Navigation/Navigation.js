import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const pages = [
    {
        name: 'Search',
        url: 'search'
    },
    {
        name: 'About',
        url: 'about'
    },
    {
        name: 'Contact',
        url: 'contact'
    },
];

export default function Navigation(props) {
    return (
        <>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    color='primary'
                    sx={{ color: '#fff', display: 'block' }}
                    selected={true}
                >
                    <NavLink
                        to={page.url}
                        style={({ isActive }) => ({
                            color: 'inherit',
                            textDecoration: (isActive ? 'underline': 'none')
                        })
                    }
                    >
                        {page.name}
                    </NavLink>
                </Button>
            ))}
        </>
    )
}