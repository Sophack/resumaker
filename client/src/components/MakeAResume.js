import React, { useState, useEffect, useCallback  } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import Templates from './Templates'
import ResumeBuilder from './ResumeBuilder';
import ResumePreview from './ResumePreview';

const MakeAResume = () => {

  const {loading, data} = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [personalState, setPersonalState] = useState({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      objective: '',
      role: ''
  })

  const [educationState, setEducationState] = useState([]);

  const handlePersonalInfoChange = (event) => {
    setPersonalState({
        ...personalState,
        [event.target.name]: event.target.value
    });
};  

const handlePersonalChange = (event, propertyName) => { 
    setPersonalState({
      ...personalState,
      [propertyName]: event.target.value
  });     
};

  
  useEffect(()=> {
      if (data) {    
          setPersonalState(data.getResume.personal[0]);
          setEducationState(data.getResume.education);
      }
  }, [data])

    return(
      <>
        <section id='resume-maker-container'>
            <h2 id='builder-title'>Create your resume</h2>
            <Templates />
            <div id='builder-preview'>
                <ResumeBuilder personalState={personalState} 
                  handlePersonalChange={handlePersonalChange} educationState={educationState} setEducationState={setEducationState} />
                <ResumePreview   personalState={personalState}
                  educationState={educationState}/>
            </div>
        </section>
      </>  
    );
} 

export default MakeAResume;