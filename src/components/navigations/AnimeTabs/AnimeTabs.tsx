import React, { FC } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabsProps {
    options: Array<string>,
    value: number,
    changeHandler: (value: number) => void,
}

const AnimeTabs: FC<TabsProps> = (props) => {
    const { options, value, changeHandler } = props;

    const switchTab = (e: React.SyntheticEvent<Element, Event>, value: number) => {
        changeHandler(value);
    }

    return (
        <Tabs 
            value={value} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{ width: '100%', maxWidth: 'calc(100vw - 32px)' }}
            onChange={(e, value) => {switchTab(e, value)}} 
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

export default AnimeTabs;