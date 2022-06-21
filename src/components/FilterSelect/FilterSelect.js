import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { AnimeListContext } from '../../context/anime-list-context';

export default function FilterSelect({ title, value, options, changeHandler}) {
    const theme = useTheme();
    const { setPage } = useContext(AnimeListContext);
    return (
        <>
            <Typography 
                variant="h3" 
                color="secondary.light"
                sx={{ fontWeight: '400'}}
            >
                { title }
            </Typography>
            <FormControl 
                sx={{ 
                    minWidth: 190,
                    '@media(max-width: 546px)': {
                        display: 'flex',
                        justifyContent: 'center'
                    }           
                }} 
                size="small"
            >
                <Select
                    displayEmpty
                    value={value}
                    onChange={(e) => { changeHandler(e.target.value);setPage(1) }}
                    color="primary"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{fontSize: '14px'}}
                > 
                    { options.map(({title, value}) => {
                        return (
                            <MenuItem 
                                key={value} 
                                style={{background: theme.palette.background, fontSize: '14px'}} 
                                value={value}
                            >
                                {title}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}