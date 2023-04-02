import React, { useState, useEffect, useRef } from 'react';
import { memo } from 'react';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_RESUME } from '../utils/mutations';
import { FormControl, TextField, Box, Button, Tab, Tabs } from '@mui/material';


import TextareaAutosize from '@mui/base/TextareaAutosize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faClipboard } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; 

import Auth from '../utils/auth';

const ResumeFields = memo(({personalState, handlePersonalChange,educationState, setEducationState, handleEducationChange}) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [focusedInput, setFocusedInput] = useState(null);
    const inputRefs = useRef([]);
    const [savedResume] = useMutation(CREATE_RESUME);

    //State Objects
    const [educationStateObject, setEducation] = useState([]);
    const [workStateObject, setWork] = useState([]);
    const [skillStateObject, setSkills] = useState([]);

    const [workState, setWorkState] = useState({
        company: '',
        roles: '',
        startDate: '',
        endDate: '',
        duties: ''
    });

    const handleWorkChange = (event) => {
      setWorkState({
          ...workState,
          [event.target.name]: event.target.value
      });
  }; 
  

  const handleFocus = (propertyName) => {
    setFocusedInput(propertyName);
  };

    const handleSubmit= (event) => {
        event.preventDefault();
        const resume = {
            resumeInput: {
                personal: {
                    ...personalState
                },

                education: {
                    ...educationState
                },
            }
        }

        try {
          delete resume.resumeInput.personal.__typename;
          delete resume.resumeInput.education.__typename;

          console.log(resume);
          const response = savedResume({variables: { ...resume}});    
        } catch (error) {
            console.log(error);
        }       

    }

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                {children}
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      const a11yProps = (index) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const [tabValue, setTabValue] = useState(0);
    const [textValue, setTextValue] = useState('');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);        
      };

    const userIcon = <FontAwesomeIcon icon={faUser} />
    const gradCapIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} />
    const clipboardIcon = <FontAwesomeIcon icon={faClipboard} />


        return(
            <>

              <Box id='form-container'>
                  <div id='form-tabs'>
                      <Tabs onChange={handleTabChange} selectedTab={selectedTab} aria-label="Form Tabs">
                          {console.log(selectedTab)}
                          <Tab className='tab-personal'  icon={userIcon} aria-label="Personal"  />
                          <Tab className='tab-education' icon={gradCapIcon} aria-label="Education"  />
                          <Tab className='tab-work' icon={briefcaseIcon}  aria-label="Work"  />
                          <Tab className='tab-skills' icon={clipboardIcon}  aria-label="Skills" />
                      </Tabs>
                  </div>

              {selectedTab == 0 && (    
              <div className='form-box'>
                  <FormControl style={{width : "90%"}}>
                      <TextField
                          label="Full name" 
                          name='fullName'
                          value={personalState.fullName} 
  
                          onChange={(event) => handlePersonalChange(event, 'fullName')}
                          onFocus={() => handleFocus('fullName')}
                          inputRefs={(el) => (inputRefs.current.fullName = el)}
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px' }} 
                      />
                      <TextField
                          label="Role" 
                          name='role'
                          onFocus={() => handleFocus('role')}
                          inputRefs={(el) => (inputRefs.current.role = el)}
                          value={personalState.role} 

                          onChange={(event) => handlePersonalChange(event, 'role')} 
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px'}} />
                      <TextField
                          label="Location" 
                          name='location' 
                          onFocus={() => handleFocus('location')}
                          ref={(el) => (inputRefs.current[2] = el)} 
                          value={personalState.location} 

                          onChange={(event) => handlePersonalChange(event, 'location')} 
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px'}} />
                      <TextField
                          label="Email" 
                          name='email'  
                          onFocus={() => handleFocus('email')}
                          ref={(el) => (inputRefs.current[3] = el)} 
                          value={personalState.email} 

                          onChange={(event) => handlePersonalChange(event, 'email')} 
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px'}} />
                      <TextField
                          label="Phone number" 
                          name='phone' 
                          onFocus={() => handleFocus('phone')}
                          ref={(el) => (inputRefs.current[4] = el)} 
                          value={personalState.phone} 

                          onChange={(event) => handlePersonalChange(event, 'phone')} 
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px'}} />
                      <TextField
                          multiline rows={5} 
                          label="Career objective" 
                          name='objective' 
                          onFocus={() => handleFocus('objective')}
                          ref={(el) => (inputRefs.current[5] = el)} 
                          value={personalState.objective} 
                
                          onChange={(event) => handlePersonalChange(event, 'objective')} 
                          InputLabelProps={{ shrink: true }} 
                          style={{marginTop: '20px'}}/>
                  </FormControl>
              </div>
              )}

              {selectedTab == 1 && (
              <div className='form-box'>
                
                    <FormControl style={{width : "90%"}}>
                        <TextField label="School"
                          name='school' 
                          value = {educationState.school} 
                          onChange={(event) =>handleEducationChange(event, 'school')}
                          style={{marginTop: '20px'}} />
                        <TextField label="Program"  
                          name='program' 
                          value = {educationState.program} 
                          onChange={(event) => handleEducationChange(event, 'program')} 
                          style={{marginTop: '20px'}}/>
                        <TextField label="Start"  
                          name='start' 
                          value = {educationState.start} 
                          onChange={(event) => handleEducationChange(event, 'start')} 
                          style={{marginTop: '20px'}}/>
                        <TextField label="End"  
                          name='end' 
                          value = {educationState.end} 
                          onChange={(event) => handleEducationChange(event, 'end')} 
                          style={{marginTop: '20px'}}/>
                    </FormControl>
                
                </div>
              )}

              {selectedTab == 2 && (
              <div className='form-box'>
              
                  <FormControl style={{width : "90%"}}>
                      <TextField label="Company" 
                        name='company' 
                        value={workState.company} 
                        onChange={handleWorkChange} 
                        style={{marginTop: '20px'}}/>                      
                      <TextField label="Start" 
                        name='startDate' 
                        value ={workState.startDate} 
                        onChange={handleWorkChange} 
                        style={{marginTop: '20px'}}/>
                      <TextField label="End" 
                        name='endDate' 
                        value={workState.endDate} 
                        onChange={handleWorkChange} 
                        style={{marginTop: '20px'}}/>
                      <TextareaAutosize                 
                        minRows={5}
                        variant="standard"
                        placeholder="Roles"
                        name='roles' 
                        value={workState.roles} 
                        onChange={handleWorkChange} 
                        style={{marginTop: '20px'}}/>
                      <TextareaAutosize aria-label="empty textarea"
                        minRows={5}
                        variant="standard"
                        placeholder="Duties" 
                        name='duties' 
                        value={workState.duties} 
                        onChange={handleWorkChange} 
                        style={{marginTop: '20px'}}/>
                  </FormControl>
              
              </div>
              )}
              {selectedTab == 3 && (
              <div className='form-box'>              
                  <FormControl style={{width : "90%"}}>
                      <h3 style={{ marginTop : "15px"}}>Skills</h3>
                      <TextField label="Skill"
                          name='skill' 
                          value = {educationState.school} 
                          onChange={(event) =>handleEducationChange(event, 'school')}
                          style={{marginTop: '20px'}} />
                  </FormControl>
              
              </div>
              )}            
              </Box>

             <div id='button-container'>
                <FormControl>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
                </FormControl> 
            </div> 
          </>
        )
    
});

export default ResumeFields;