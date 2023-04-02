import React, { useState, useEffect } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import Personal from "./ResumeSections/Personal";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";

 

const ResumePreview = ({personalState, educationState}) => {

    return(
      <>
        <section id='resume-preview'>
          <Personal personalState={personalState}></Personal>
          <Education educationState={educationState}></Education>
          <Work></Work>
          <Skills></Skills>
        </section>  
      </>  
    );
} 

export default ResumePreview;