import React, { useState, useEffect } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';

import Templates from './Templates'
import ResumeBuilder from './ResumeBuilder';
import ResumePreview from './ResumePreview';

const MakeAResume = (props) => {
const {
  resumeData,
  personalState,
  educationState,
  workState,
  handlePersonalInfoChange,
  handleEducationChange,
  handleWorkChange,
  handleSubmit,
} = props
    return(
      <>
        <section id='resume-maker-container'>
            <h2 id='builder-title'>Create your resume</h2>
            <Templates />
            <div id='builder-preview'>
                <ResumeBuilder 
                 resumeData={resumeData}
                 personalState={personalState}
                 educationState={educationState}
                 workState={workState}
                 handlePersonalInfoChange={handlePersonalInfoChange}
                 handleEducationChange={handleEducationChange}
                 handleWorkChange={handleWorkChange}
                 handleSubmit={handleSubmit}
                />
                <ResumePreview />
            </div>
        </section>
      </>  
    );
} 

export default MakeAResume;