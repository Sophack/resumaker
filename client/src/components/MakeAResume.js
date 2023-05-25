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
  const [indexEducation, setIndexEducation] = useState(0);
  const [indexWork, setIndexWork] = useState(0)

  const[styles, setStyles] = useState({});
  const [theme, setTheme] = useState('professional');


  const [personalState, setPersonalState] = useState({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      objective: '',
      role: ''
  });

  const [educationState, setEducationState] = useState([
      // {
      //   school: '',
      //   program: '',
      //   start: '',
      //   end: ''    
      // }
    ]
  );
  const [field0,setField0] = useState({});
  const [field1, setField1] = useState({});
  const [workField1, setWorkField1] = useState({});
  const [workField2, setWorkField2] = useState({});


  const [workState, setWorkState] = useState([
    // {
    //   company: "",
    //   roles: "",
    //   startDate: "",
    //   endDate: "",
    //   duties: "",
    // }
  ]);

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


  const handleEducationChange = async(event) => {
    console.log(indexEducation);

    if(event.target === undefined){
      return;
    }
    if(indexEducation === 0) {
      console.log("1st index " + JSON.stringify(educationState));

       
      setField0(field0 => ({
        ...field0,
        [event.target.name]: event.target.value
      }));  
      

      setEducationState({
          ...educationState,          
          field0
      });  
    }
    if(indexEducation === 1){
      console.log(" NOW YOU CAN CHANGE THE FIELD1 VALUE "  + JSON.stringify(educationState));
      setField1({
        ...field1,
        [event.target.name]: event.target.value
      })
      setEducationState({
        ...educationState,
        field1
      })
    }    
  };

  const handleWork = (event) => {

    if(event.target === undefined){
      return;
    }
    if(indexWork === 0) {
      console.log("1st index " + JSON.stringify(workState));

       
      setWorkField1(field0 => ({
        ...field0,
        [event.target.name]: event.target.value
      }));  
      

      setWorkState({
          ...workState,          
          field0
      });  
    }
    if(indexWork === 1){
      console.log(" NOW YOU CAN CHANGE THE FIELD1 VALUE "  + JSON.stringify(workState));
      setField1({
        ...workField2,
        [event.target.name]: event.target.value
      })
      setWorkState({
        ...workState,
        workField2
      })
    }
  };

  const handleSkills = (event, propertyName) => {
    setSkillsState({
      ...skillsState,
      [propertyName]: event.target.value,
    });
  };

  useEffect(() => {
    async function loadStyles() {
      const stylesModule = await import(`../themes/${theme}.js`);
      setStyles(stylesModule.default);
    }
    loadStyles();
  }, [theme])

  useEffect(()=> {
    setEducationState({
      ...educationState,
      field0
    })
  }, [field0])


  
  useEffect(()=> {
      if (data) {    
        setPersonalState(data.getResume.personal[0]);
        setEducationState(data.getResume.education);
        console.log(data.getResume.education);
        setWorkState(data.getResume.work[0]);
        setSkillsState(data.getResume.skills[0]);

      }
  }, [data])

    return(
      <>
        <section id='resume-maker-container'>
            <Templates setTheme={setTheme}/>
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
                    setIndexEducation={setIndexEducation}
                    field1={field1}
                    setField1={setField1}
                />
                
                <ResumePreview 
                    styles={styles}
                    theme={theme}
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