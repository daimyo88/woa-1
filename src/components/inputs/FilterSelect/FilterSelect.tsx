import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface SelectProps {
    title: string,
    value: string,
    options: Array<{ title: string, value: string}>,
    changeHandler: (value: string) => void,

}

const FilterSelect: FC<SelectProps> = ({ title, value, options, changeHandler})  => {
    const theme = useTheme();
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
                    width: '100%',
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
                    onChange={(e) => { changeHandler(e.target.value)}}
                    color="primary"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{fontSize: '14px'}}
                > 
                    { options.map(({title, value}) => {
                        return (
                            <MenuItem 
                                key={value} 
                              //  style={{background: theme.palette.menuBackground, fontSize: '14px'}} 
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

export default FilterSelect;
