import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

import { AnimeListContext } from '../../context/anime-list-context';

export default function FilterSelect({ title, value, changeHandler}) {
    const { setPage } = useContext(AnimeListContext);

    const handleChange = (e) => {
        changeHandler(e.target.checked);
        setPage(1);
    };

    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                { title }
            </Typography>
            <Switch 
                color="primary"
                checked={value}
                onChange={handleChange} 
            />
        </>
    )
}