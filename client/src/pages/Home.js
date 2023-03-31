import React, { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
// import {
//   Container,
//   Col,
//   Form,
//   Button,
//   Card,
//   Row
// } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { GET_RESUME } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(GET_RESUME);
  const resume = data?.thoughts || [];
  console.log(resume)

  return (
    <>
      <section id='welcome-hero'>
        <div className='bg-image'>
          <Box id='welcome-box'>
            <Typography component='h2'>Title</Typography>
            <Typography component='p'>Info here</Typography>
            <Link to="resume"><Button id='welcome-button'>Make a resume!</Button></Link>
          </Box>
        </div>
      </section>
    </>

  );
};

export default Home;
