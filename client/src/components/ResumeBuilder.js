import React, { useState, useEffect, useRef } from 'react';
import { memo } from 'react';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_RESUME } from '../utils/mutations';
import { FormControl, TextField, Box, Button, Tab, Tabs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faBriefcase, faClipboard, faPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; 

import Auth from '../utils/auth';

const ResumeFields = memo(
    ({
        personalState,
        handlePersonalChange,
        educationState,
        setEducationState,
        handleEducationChange,
        workState,
        setWorkState,
        handleWorkChange,
        handleWork,
        skillsState,
        handleSkillsChange,
        handleSkills,
        setIndexEducation,
        setField1,
        field1
    }) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [focusedInput, setFocusedInput] = useState(null);
    const inputRefs = useRef([]);
    const [savedResume] = useMutation(CREATE_RESUME);
    const textFieldRef = useRef(null);    
    //State Objects
    const [educationStateObject, setEducation] = useState([]);
    const [workStateObject, setWork] = useState([]);
    const [skillStateObject, setSkills] = useState([]);

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
                work: {
                    ...workState
                },
                skills: {
                    ...skillsState,
                }
            }
        }
        try {
          delete resume.resumeInput.personal.__typename;
          delete resume.resumeInput.education.__typename;
          delete resume.resumeInput.work.__typename;
          delete resume.resumeInput.skills.__typename;
          console.log(resume);
          const response = savedResume({variables: { ...resume}});    
        } catch (error) {
            console.log(error);
        }       

    }

    // const handleClear = () => {
    //     if(textFieldRef != null){
    //         // inputRefs.current.forEach((ref) => (ref.current.value = ""));
    //         console.log(inputRefs.current.values);
    //     }

    //     // textFieldRef.current.value = ""; 
    // };

    useEffect(()=> {
        setEducationState({
          ...educationState,
          field1
        })
      }, [field1])


    async function handleAddEducation(event) {

        const elements = document.getElementsByClassName('education');
        await setIndexEducation(1);

        for( let i = 0; i < elements.length; i++){
            const input = elements[i].querySelector("input");
            if (input) {
                input.value = "";
            }            
        }    
    }

    const handleTabChange = (event, newValue) => {
        event.preventDefault();
        setSelectedTab(newValue);        
      };

    const userIcon = <FontAwesomeIcon icon={faUser} />
    const gradCapIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} />
    const clipboardIcon = <FontAwesomeIcon icon={faClipboard} />


        return(
            <>
              <Box id='form-container'>
                <section className='form-and-buttons'>
                    <div id='form-tabs'>
                        <Tabs 
                            onChange={handleTabChange} 
                            // selectedTab={selectedTab} 
                            aria-label="Form Tabs"
                        >
                            {/* {console.log(selectedTab)} */}
                            <Tab 
                                className='tab-personal' 
                                // value={0} 
                                icon={userIcon} 
                                aria-label="Personal"  
                                />
                            <Tab 
                                className='tab-education' 
                                // value={1}  
                                icon={gradCapIcon} 
                                aria-label="Education"  
                            />
                            <Tab 
                                className='tab-work' 
                                // value={2} 
                                icon={briefcaseIcon}  
                                aria-label="Work"  
                            />
                            <Tab 
                                className='tab-skills' 
                                // value={3} 
                                icon={clipboardIcon}  
                                aria-label="Skills" 
                            />
                        </Tabs>
                    </div>

                {selectedTab === 0 && (    
                <div className='form-box'>
                    <FormControl style={{width : "90%"}}>
                        <TextField
                            label="Full name" 
                            name='fullName'
                            value={personalState.fullName} 
                            onChange={(event) => handlePersonalChange(event, 'fullName')}
                            onFocus={() => handleFocus('fullName')}
                            ref={(el) => (inputRefs.current.fullName = el)}
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px' }}                             
                        />
                        <TextField
                            label="Role" 
                            name='role'
                            onFocus={() => handleFocus('role')}
                            ref={(el) => (inputRefs.current.role = el)}
                            value={personalState.role} 
                            onChange={(event) => handlePersonalChange(event, 'role')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                            />
                        <TextField
                            label="Location" 
                            name='location' 
                            onFocus={() => handleFocus('location')}
                            ref={(el) => (inputRefs.current[2] = el)} 
                            value={personalState.location} 
                            onChange={(event) => handlePersonalChange(event, 'location')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                            />
                        <TextField
                            label="Email" 
                            name='email'  
                            onFocus={() => handleFocus('email')}
                            ref={(el) => (inputRefs.current[3] = el)} 
                            value={personalState.email} 
                            onChange={(event) => handlePersonalChange(event, 'email')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                            />
                        <TextField
                            label="Phone number" 
                            name='phone' 
                            onFocus={() => handleFocus('phone')}
                            ref={(el) => (inputRefs.current[4] = el)} 
                            value={personalState.phone} 
                            onChange={(event) => handlePersonalChange(event, 'phone')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                            />
                        <TextField
                            multiline rows={5} 
                            label="Career objective" 
                            name='objective' 
                            onFocus={() => handleFocus('objective')}
                            ref={(el) => (inputRefs.current[5] = el)} 
                            value={personalState.objective} 
                            onChange={(event) => handlePersonalChange(event, 'objective')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}}
                            />
                    </FormControl>
                </div>
                )}

                {selectedTab === 1 && (
                <div className='form-box'>
                        <FormControl style={{width : "90%"}}>
                            <TextField 
                                label="School"  
                                name='school' 
                                className='education'
                                onFocus={() => handleFocus('school')}
                                ref={(el) => (inputRefs.current[0] = el)} 
                                defaultValue={educationState.school}
                                // value = {educationState.school}
                                onChange={(event) => handleEducationChange(event)} 
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}} 
                                inputRef={textFieldRef}
                            />
                            <TextField 
                                label="Program"  
                                name='program'
                                className='education' 
                                onFocus={() => handleFocus('program')}
                                ref={(el) => (inputRefs.current[1] = el)} 
                                defaultValue={educationState.program}
                                // value={educationState.program}
                                onChange={handleEducationChange} 
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}} 
                                inputRef={textFieldRef}
                            />
                            <TextField 
                                label="Start"  
                                name='start'
                                className='education' 
                                onFocus={() => handleFocus('start')}
                                ref={(el) => (inputRefs.current[2] = el)} 
                                defaultValue={educationState.start}
                                // value={educationState.start}
                                onChange={handleEducationChange} 
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}}
                                inputRef={textFieldRef} 
                            />
                            <TextField 
                                label="End"  
                                name='end'
                                className='education' 
                                onFocus={() => handleFocus('start')}
                                ref={(el) => (inputRefs.current[3] = el)}
                                defaultValue={educationState.end}
                                // value={educationState.end}
                                onChange={handleEducationChange} 
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}}
                                inputRef={textFieldRef} 
                            />
                            <Button
                                className='add-button'
                                variant="outlined"
                                size="medium"
                                onClick={handleAddEducation}
                            >
                                <FontAwesomeIcon icon={faPlus} size="medium" />
                            </Button>
                        </FormControl>
                    </div>
                )}

                {selectedTab === 2 && (
                <div className='form-box'>
                    <FormControl style={{width : "90%"}}>
                        <TextField 
                            label="Company" 
                            name='company' 
                            onFocus={() => handleFocus('company')}
                            ref={(el) => (inputRefs.current[0] = el)}
                            value={workState.company} 
                            onChange={(event) => handleWork(event, 'company')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                        />
                        <TextField 
                            label='Role'
                            name='roles' 
                            onFocus={() => handleFocus('roles')}
                            ref={(el) => (inputRefs.current[1] = el)}
                            value={workState.roles} 
                            onChange={(event) => handleWork(event, 'roles')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                        />
                        <TextField 
                            label="Start" 
                            name='startDate' 
                            onFocus={() => handleFocus('startDate')}
                            ref={(el) => (inputRefs.current[2] = el)}
                            value={workState.startDate} 
                            onChange={(event) => handleWork(event, 'startDate')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                        />
                        <TextField 
                            label="End" 
                            name='endDate' 
                            onFocus={() => handleFocus('endDate')}
                            ref={(el) => (inputRefs.current[3] = el)}
                            value={workState.endDate} 
                            onChange={(event) => handleWork(event, 'endDate')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                        />
                        <TextField 
                            multiline rows={5} 
                            label='Duties' 
                            name='duties' 
                            onFocus={() => handleFocus('duties')}
                            ref={(el) => (inputRefs.current[4] = el)}
                            value={workState.duties} 
                            onChange={(event) => handleWork(event, 'duties')} 
                            InputLabelProps={{ shrink: true }} 
                            style={{marginTop: '20px'}} 
                        />
                        <Button
                            className='add-button'
                            variant="outlined"
                            size="medium"
                            // onClick={}
                        >
                                <FontAwesomeIcon icon={faPlus} size="medium" />
                            </Button>
                    </FormControl>
                </div>
                )}

                {selectedTab === 3 && (
                    <div className='form-box'>
                        <FormControl style={{width : "90%"}}>
                            <TextField 
                                label='Industry skills' 
                                name='industryKnowledge' 
                                value={skillsState.industryKnowledge} 
                                onChange={(event) => handleSkills(event, 'industryKnowledge')}
                                onFocus={() => handleFocus('industryKnowledge')}
                                ref={(el) => (inputRefs.current[0] = el)}
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}} 
                            />
                            <Button
                            className='add-button'
                            variant="outlined"
                            size="medium"
                            // onClick={}
                        >
                                <FontAwesomeIcon icon={faPlus} size="medium" />
                            </Button>
                            <TextField 
                                label='Tools & Tech'
                                name='toolsAndTechnologies' 
                                value={skillsState.toolsAndTechnologies} 
                                onChange={(event) => handleSkills(event, 'toolsAndTechnologies')} 
                                onFocus={() => handleFocus('toolsAndTechnologies')}
                                ref={(el) => (inputRefs.current[1] = el)}
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}} 
                            />
                            <Button
                                className='add-button'
                                variant="outlined"
                                size="medium"
                                // onClick={}
                            >
                                <FontAwesomeIcon icon={faPlus} size="medium" />
                            </Button>
                            <TextField 
                                label='Languages' 
                                name='languages' 
                                onFocus={() => handleFocus('languages')}
                                ref={(el) => (inputRefs.current[2] = el)}
                                value={skillsState.languages} 
                                onChange={(event) => handleSkills(event, 'languages')} 
                                InputLabelProps={{ shrink: true }} 
                                style={{marginTop: '20px'}} 
                            />
                            <Button
                                className='add-button'
                                variant="outlined"
                                size="medium"
                                // onClick={}
                        >
                                <FontAwesomeIcon icon={faPlus} size="medium" />
                            </Button>
                        </FormControl>
                    </div>
                )}

                    <div className='button-container'>
                        <FormControl>
                            <Button class='save-button' type="submit" onClick={handleSubmit}>
                                Save
                            </Button>
                        </FormControl> 
                        {/* <Button id='resume-pdf-button' onClick={handleSubmit}>
                                Export PDF
                        </Button> */}
                    </div>
                </section>
            </Box>
        </>
    )
    
});

export default ResumeFields;