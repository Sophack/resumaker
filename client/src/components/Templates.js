import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Popover } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
 

const Templates = ({setTheme}) => {

  const [card, setCard] = useState(null);

  const handlePopoverOpen = (event) => {
    setCard(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setCard(null);
  };

  const handleThemeChange = (event) =>{
    console.log(event.target.id)
    setTheme(event.target.id);
  }

  const open = Boolean(card);

    return(
      <>
         <Box id='templates-box'>
            <div id='professional' 
              className="template-selected hoverable" 
              onClick={handleThemeChange}>
              <div className='dropDown'>
                <p>Professional</p>  
              </div>  
            </div>

            
            <div id='agent' className='hoverable' onClick={handleThemeChange}>
              <div className='dropDown'>
                <p>Agent</p>  
              </div>             
            </div>   

            <div className="template-locked" >
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="template-locked" >
              <FontAwesomeIcon icon={faLock} />
            </div>
          </Box>
          
      </>  
    );
} 

export default Templates;