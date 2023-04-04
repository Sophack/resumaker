import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
 

const Templates = () => {

    return(
      <>
         <Box id='templates-box'>
            <div id='template-1' className="template-selected" />
            <div className="template-locked" >
              <FontAwesomeIcon icon={faLock} />
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