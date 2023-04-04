import React, { useState, useEffect, useCallback  } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import Templates from '../components/Templates';
import ResumeBuilder from '../components/ResumeBuilder';
import ResumePreview from '../components/ResumePreview';

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

  const [educationState, setEducationState] = useState({    
    school: '',
    program: '',
    start: '',
    end: ''    
  });

  const [workState, setWorkState] = useState({
    company: "",
    roles: "",
    startDate: "",
    endDate: "",
    duties: "",
  });

  const [skillsState, setSkillsState] = useState({
    industryKnowledge: "",
    toolsAndTechnologies: "",
    languages: "",
  });


  const handlePersonalChange = (event, propertyName) => { 
      setPersonalState({
        ...personalState,
        [propertyName]: event.target.value
    });     
  };

  const handleEducationChange = (event, propertyName) => {
    setEducationState({
      ...educationState,
      [propertyName]: event.target.value
    }); 
  };

  const handleWork = (event, propertyName) => {
    setWorkState({
      ...workState,
      [propertyName]: event.target.value,
    });
  };

  const handleSkills = (event, propertyName) => {
    setSkillsState({
      ...skillsState,
      [propertyName]: event.target.value,
    });
  };

  
  useEffect(()=> {
      if (data) {    
        setPersonalState(data.getResume.personal[0]);
        console.log(data.getResume.personal[0]);
        setEducationState(data.getResume.education[0]);
        console.log(data.getResume.education);
        setWorkState(data.getResume.work[0]);
        console.log(data.getResume.work);
        setSkillsState(data.getResume.skills[0]);
        console.log(data.getResume.skills);
      }
  }, [data])

    return(
      <>
        <section id='resume-maker-container'>
            <h2 id='builder-title'>Create your resume</h2>
            <Templates />
            <div id='builder-preview'>
                <ResumeBuilder 
                    personalState={personalState}
                    handlePersonalChange={handlePersonalChange}
                    educationState={educationState}
                    setEducationState={setEducationState}
                    handleEducationChange={handleEducationChange}
                    workState={workState}
                    setWorkState={setWorkState}
                    handleWork={handleWork}
                    skillsState={skillsState}
                    setSkillsState={setSkillsState}
                    handleSkills={handleSkills}
                />
                
                <ResumePreview 
                    personalState={personalState}
                    educationState={educationState}
                    workState={workState}
                    skillsState={skillsState}
                />
            </div>
        </section>
      </>  
    );
} 

export default MakeAResume;