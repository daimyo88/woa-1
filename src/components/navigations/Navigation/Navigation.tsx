import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { PAGES } from '../../../constants/contstants';
import SearchIcon from '@mui/icons-material/Search';

const Navigation: FC = () => {
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
                            fontSize: '16px',
                            mx: '5px',
                            '&:hover': {
                                color: 'secondary.main'
                            },
                            '&.active': {
                                color: 'secondary.main'
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

export default Navigation;