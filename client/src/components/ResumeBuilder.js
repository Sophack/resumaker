import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_RESUME } from '../utils/mutations';
import { FormControl, TextField, Box, Button, Tab, Tabs, TabPanel } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faClipboard } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; 

import Auth from '../utils/auth';

const ResumeFields = ({personalState, setPersonalState, educationState, setEducationState}) => {

    console.log(personalState);
    const [savedResume] = useMutation(CREATE_RESUME);

    //State Objects
    const [educationStateObject, setEducation] = useState([]);
    const [workStateObject, setWork] = useState([]);
    const [skillStateObject, setSkills] = useState([]);
    

    const handlePersonalInfoChange = (event) => {
      setPersonalState({
          ...personalState,
          [event.target.name]: event.target.value
      });
  };  



    const handleEducationChange = (event) => {
        event.stopPropagation(); 
        const { name, value } = event.target;
        setEducationState(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
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

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log(personalState);
        console.log(educationState);
        console.log(workState);

        const resume = {
            resumeInput: {
                personal: {
                    ...personalState
                },

                education: {
                    ...educationState
                },
                work: {
                    ...workState
                }
            }
        }

        try {
          delete resume.resumeInput.personal.__typename;
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
        event.stopPropagation(); 
        setTabValue(newValue);
      };

    const userIcon = <FontAwesomeIcon icon={faUser} />
    const gradCapIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} />
    const clipboardIcon = <FontAwesomeIcon icon={faClipboard} />


        return(
            <>
                <Box id='form-container'>
                <div id='form-tabs'>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="Form Tabs">
                        <Tab className='tab-personal' icon={userIcon} aria-label="Personal" {...a11yProps(0)} />
                        <Tab className='tab-education' icon={gradCapIcon} aria-label="Education" {...a11yProps(1)} />
                        <Tab className='tab-work'icon={briefcaseIcon} aria-label="Work" {...a11yProps(2)} />
                        <Tab className='tab-skills' icon={clipboardIcon} aria-label="Skills" {...a11yProps(3)} />
                    </Tabs>
                </div>
            <div className='form-box'>
            <TabPanel value={tabValue} index={0}>
                <FormControl style={{width : "90%"}}>
                    <TextField
                         label="Full name" 
                         name='fullName' 
                         value={personalState.fullName} 
                         key={`fullName-${personalState.fullName}`} 
                         onChange={handlePersonalInfoChange}
                         InputLabelProps={{ shrink: true }} 
                         style={{marginTop: '20px' }} 
                    />
                    <TextField
                         label="Role" 
                         name='role' 
                         value={personalState.role} 
                         key={`role-${personalState.role}`} onChange={handlePersonalInfoChange} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="Location" name='location' value={personalState.location} key={`location-${personalState.location}`} onChange={handlePersonalInfoChange} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="Email" name='email' value={personalState.email} key={`email-${personalState.email}`} onChange={handlePersonalInfoChange} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="Phone number" name='phone' value={personalState.phone} key={`phone-${personalState.phone}`}  onChange={handlePersonalInfoChange} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="Website" name='website'  onChange={handlePersonalInfoChange } InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="LinkedIn" name='linkedin'  onChange={(e) => e.target.value} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         label="GitHub" name='github'  onChange={(e) => e.target.value} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}} />
                    <TextField
                         multiline rows={5} label="Career objective" name='objective' value={personalState.objective} key={`objective-${personalState.objective}`} onChange={handlePersonalInfoChange} InputLabelProps={{ shrink: true }} style={{marginTop: '20px'}}/>
                </FormControl>
            </TabPanel>
            </div>

            <div className='form-box'>
            <TabPanel value={tabValue} index={1}>
                <FormControl style={{width : "90%"}}>
                    <TextField label="School"  name='school' value = {educationState.school} onChange={handleEducationChange} />
                    <TextField label="Program"  name='program' value = {educationState.program} onChange={handleEducationChange} />
                    <TextField label="Start"  name='start' value = {educationState.start} onChange={handleEducationChange} />
                    <TextField label="End"  name='end' value = {educationState.end} onChange={handleEducationChange} />
                </FormControl>
            </TabPanel>
            </div>
            
            <div className='form-box'>
            <TabPanel value={tabValue} index={2}>
                <FormControl style={{width : "90%"}}>
                    <TextField label="Company" name='company' value={workState.company} onChange={handleWorkChange} />
                    <TextareaAutosize aria-label="empty textarea" name='roles' value={workState.roles} onChange={handleWorkChange} />
                    <TextField label="Start" name='startDate' valu ={workState.startDate} onChange={handleWorkChange} />
                    <TextField label="End" name='endDate' value={workState.endDate} onChange={handleWorkChange} />
                    <TextareaAutosize aria-label="empty textarea" name='duties' value={workState.duties} onChange={handleWorkChange} />
                </FormControl>
            </TabPanel>
            </div>

            <div className='form-box'>
            <TabPanel value={tabValue} index={3}>
                <FormControl>
                    <h3 style={{ marginTop : "15px"}}>Skills</h3>
                </FormControl>
            </TabPanel>
            </div>
            </Box>
             {/* <div id='button-container'>
                <FormControl>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
                </FormControl> 
            </div>  */}
          </>
        )
    
}

export default ResumeFields;