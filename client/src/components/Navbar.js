import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { AppBar, Box, Toolbar, Menu, MenuItem, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faBars, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {

  // set modal display state
  const [showModal, setShowModal] = useState(false);
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
                  <>
                    <MenuItem onClick={Auth.logout}>
                      Log out
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      </MenuItem>
                  </>
                ) : (
                    // if user is not logged in, show sign up & log in, which opens modal
                    <>
                      <MenuItem id='nav-sign-up' onClick={() => setShowModal(true)}>Sign up</MenuItem>
                      <MenuItem id='nav-log-in' onClick={() => setShowModal(true)}>
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
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
