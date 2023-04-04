// see SignupForm.js for comments
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Input, FormLabel, Alert } from '@mui/joy';

// Importing useMutation and the exported login_user mutation
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";

import SignUpForm from './SignupForm';

//Auth middleware
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [showElement, setShowElement] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {

      const { data } = await loginUser({ variables: { ...userFormData } });

      Auth.login(data.login.token);

    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className='fade-in'>
    <div className={showElement ? 'hide' : null}>
      <Typography className='modal-title' component='h1'>
        Log in
      </Typography>

      <Typography className='modal-subtitle' component='p'>
        Log in to access all the site's features
      </Typography>

      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <FormLabel className='email-label' htmlFor='email'>Email</FormLabel>
          <Input
            className='email-input'
            type='text'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          {/* <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback> */}
        </div>

        <div className='mb-3'>
          <FormLabel className='password-label' htmlFor='password'>Password</FormLabel>
          <Input
            className='password-input'
            type='password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {/* <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback> */}
        </div>

        {/* show alert if server response is bad */}
        {/* <Alert severity="error" dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Something went wrong with your login credentials!
        </Alert> */}

        <div className='modal-button-container'>
          <Button
            className='submit-button'
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Log in
          </Button>
        </div>

        <div className='modal-divider' />

        <Typography className='modal-footer' component='p'>
          New user? <a href='/#' onClick={() => setShowElement(!showElement)}>Create an account</a>!
        </Typography>
      </form>
      </div>
      </div>
      {showElement && <SignUpForm />}
    </>
  );
};

export default LoginForm;
