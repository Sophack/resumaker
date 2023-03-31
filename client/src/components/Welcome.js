import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import Resume from '../pages/Resume'


const Welcome = (props) => {
  const {
    handleClickResume
  } = props

  return (
    <>
      <section id='welcome-hero'>
        <div className='bg-image'>
          <Box id='welcome-box'>
            <Typography component='h2'>Create your own professional resume</Typography>
            <Typography component='p'>In a few easy steps, create a beautiful resume of your own that highlights your skills and experience the best & become employment ready!</Typography>
           <Resume><Button id='welcome-button' onClick={handleClickResume}>Make a resume!</Button></Resume>
          </Box>
        </div>
      </section>
    </>

  );
};

export default Welcome;
