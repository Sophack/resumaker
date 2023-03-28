// see SignupForm.js for comments
import React, { useState, useEffect } from 'react';
import { Button, Typography , Modal} from '@mui/material';
import { Input, FormLabel, Alert } from '@mui/joy';

//Importing useMutation and the exported login_user mutation
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
//Auth middleware
import Auth from '../utils/auth';
import { Box } from '@mui/material';
import SignUpForm from  './SignupForm';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


  const [loginUser, { error }] = useMutation(LOGIN_USER);

  //update the browser with useEffect
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  //defined to handle input 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

    //clear form values 

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Typography className='modal-title' component='h1'>
        Log in
      </Typography>

      <Typography className='modal-subtitle' component='p'>
        Log in to access all the site's features
      </Typography>

      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <FormLabel className='email-label' htmlFor='email'>Email</FormLabel>
          <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
          Are you sure you're a new user?
        </Alert>
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
          Something went wrong with your login credentials!
        </Alert> */}

        <div className='modal-button-container'>
          <Button
            onClick={() => setShowModal(true)+setShowSignup(!showSignup)}
            className='submit-button'
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Log in
          </Button>
        </div>

        <div className='modal-divider' />

        <Typography className='modal-footer' component='p'>
          New user? <Button
        
          type='submit'
          className='submit-button'
          variant='success'>
          Create an account
        </Button>
        </Typography>

        <Modal
        open={showModal}
        onClose={() => setShowModal(false)+setShowSignup(false)}
        aria-labelledby='signup-modal'
      >
        <Box className='modal-box'>
            {showSignup && <SignUpForm handleModalClose={() => setShowModal(false)} />}
            {showLogin && <LoginForm handleModalClose={() => setShowModal(false)} />}
        </Box>
      </Modal>
      </form>
    </>
  );
};

export default LoginForm;
