import React, { useState, useEffect } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import Personal from "./ResumeSections/Personal";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";
 

const ResumePreview = (props) => {

    return(
      <>
        <section id='resume-preview'>
          <Personal></Personal>
          <Education></Education>
          <Work></Work>
          <Skills></Skills>
        </section>  
      </>  
    );
} 

export default ResumePreview;