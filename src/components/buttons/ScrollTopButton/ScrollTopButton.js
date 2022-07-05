import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <IconButton 
            size="large"
            onClick={scrollToTop}
            sx={{
                display: visible ? 'flex' : 'none',
                position: 'fixed',
                right: '10px',
                bottom: '10px',
                zIndex: 999,
                transition: '0.2s',
                backgroundColor: 'primary.light',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: 'primary.main', 
                }
            }}
        >
            <KeyboardArrowUpIcon />
        </IconButton>
    )
}