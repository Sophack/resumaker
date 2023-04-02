import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';

import MakeAResume from './MakeAResume';
import Resume from '../components/MakeAResume';

import Auth from '../utils/auth';
import { useMutation } from "@apollo/react-hooks";

const Welcome = () => {
  
  const [showElement, setShowElement] = useState(false);

  return (
    <>
      <section id='welcome-hero' className={showElement ? 'hide' : null}> 
        <div className='bg-image'>
          <Box id='welcome-box' className='fade-side'>
            <Typography component='h2'>Create your own professional resume</Typography>
            <Typography component='p'>In a few easy steps, create a beautiful resume of your own that highlights your skills and experience the best & become employment ready!</Typography>
            {Auth.loggedIn() ? (
              <>
                <Button id='welcome-button' onClick={() => setShowElement(!showElement)}>Make a resume!</Button>
              </>
            ) : (
              <>
                <Button id='welcome-button' disabled={Auth.loggedIn}>Log in or Sign up</Button>
              </>
                )} 
          </Box>
        </div>
      </section>
      {showElement && <Resume/>}
    </>

  );
};

export default Welcome;
