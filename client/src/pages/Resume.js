import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Auth from '../utils/auth';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { CREATE_RESUME } from '../utils/mutations';
import ResumePreview from '../components/ResumePreview';
import ResumeBuilder from '../components/ResumeBuilder';

const PopulateResume = () => {
  
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

  
  useEffect(()=> {
      if (data) {    
          setPersonalState(data.getResume.personal[0]);
          setEducationState(data.getResume.education);
      }
  }, [data])

    return (
        <>    
        <div style={{marginTop: "60px", display: "flex", flexDirection: "row", justifyContent: "center"}}>

          {/* Rendered Resume On Left Half of Page */}
          <div className='populated' style={{width : "40%"}}>
            <Card style={{marginTop: "30px", marginBottom: "30px"}}>
              <CardContent>
                <ResumePreview personalState={personalState}
                  educationState={educationState}
                  ></ResumePreview>
              </CardContent>
            </Card>     
          </div>
          
          {/* Create Resume Form On Right Side */}
          <div className='createResume' style={{width : "50%", marginLeft: "20px", marginTop: "35px"}}>
            <ResumeBuilder personalState={personalState} setPersonalState={setPersonalState}
              educationState={educationState} setEducationState={setEducationState}           
              ></ResumeBuilder>
          </div>
        </div>
        </>        
  )
};

export default PopulateResume;