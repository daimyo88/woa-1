import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function AnimeTabs(props) {
    const { options, value, changeHandler } = props;

    return (
        <Tabs value={value} onChange={(e, value) => {changeHandler(value)}} >
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