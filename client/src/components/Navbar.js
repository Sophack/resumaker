import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Menu, MenuItem, Typography, Modal } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faBars, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {

  // set modal / sign up / log in display state
  const [showModal, setShowModal] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // set anchored element state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // click event handler
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // close handler
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className='navbar' position='fixed'>
          <Toolbar>
            <Typography className='title' component='div' sx={{ flexGrow: 1 }}>
            <FontAwesomeIcon icon={faFile} />
              resumaker
            </Typography>
            <FontAwesomeIcon 
              id='nav-button'
              aria-label='menu' 
              aria-controls={open ? 'nav-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : 'undefined'}
              onClick={handleClick}
              icon={faBars}>
            </FontAwesomeIcon>
            <Menu
              id='nav-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              MenuListProps={{'aria-labelledby': 'nav-button'}}
              >
                {/* if user is logged in, show log out in nav menu */}
                {Auth.loggedIn() ? (
                    <MenuItem onClick={Auth.logout}>
                      Log out
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      </MenuItem>
                ) : (
                    // if user is not logged in, show sign up & log in, which opens modal
                    <>
                      <MenuItem id='nav-sign-up' onClick={() => setShowModal(true)+setShowSignup(!showSignup)}>Sign up</MenuItem>
                      <MenuItem id='nav-log-in' onClick={() => setShowModal(true)+setShowLogin(!showLogin)}>
                        Log in
                        <FontAwesomeIcon icon={faRightToBracket} />
                      </MenuItem>
                    </>
                )} 
              </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      {/* set modal data up */}
      <Modal
        open={showModal}
        className='fade-in'
        onClose={() => setShowModal(false)+setShowSignup(false)+setShowLogin(false)}
        aria-labelledby='signup-modal'
      >
        <Box className='modal-box'>
            {showLogin && <LoginForm
              handleModalClose={() => setShowModal(false)} 
              />}
            {showSignup && <SignUpForm 
              handleModalClose={() => setShowModal(false)} 
              />}
        </Box>
      </Modal>
    </>
  );
};

export default AppNavbar;