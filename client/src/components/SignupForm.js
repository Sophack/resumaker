import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Input, FormLabel, Alert } from '@mui/joy';

// importing useMutation and the exported add_user mutation
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [showElement, setShowElement] = useState(false);

  const [addUser, {error}] = useMutation(ADD_USER);

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
    };

    try {
      const { data } = await addUser({ variables: { ...userFormData } });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
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
        Sign up
      </Typography>
      <Typography className='modal-subtitle' component='p'>
        Sign up to update your resume at any time
      </Typography>
      {/* This is needed for the validation functionality above */}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>

        <div className='mb-3'>
          <FormLabel className='email-label' htmlFor='email'>Email</FormLabel>
          <Input
            className='email-input'
            type='email'
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
          Something went wrong with your signup!
        </Alert> */}

        <div className='modal-button-container'>
          <Button
            className='submit-button'
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </div>

        <div className='modal-divider' />

        <Typography className='modal-footer' component='p'>
          Already an existing user? <a href='/#' onClick={() => setShowElement(!showElement)}>Log in</a>!
        </Typography>
      </form>
      </div>
      </div>
      {showElement && <LoginForm />}
    </>
  );
};

export default SignupForm;
