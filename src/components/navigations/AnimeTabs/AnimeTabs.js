import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function AnimeTabs(props) {
    const { options, value, changeHandler } = props;

    return (
        <Tabs 
            value={value} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{ width: '100%', maxWidth: 'calc(100vw - 32px)' }}
            onChange={(e, value) => {changeHandler(value)}} 
        >
            { options.map(el => {
                return (
                    <Tab 
                        label={el} 
                        id={el} 
                        key={el} 
                    />
                )
            })}
        </Tabs>
    )
}

AnimeTabs.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    changeHandler: PropTypes.func,
}