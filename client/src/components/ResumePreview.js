import React, { useState, useEffect } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
 

const ResumePreview = (props) => {

    return(
      <>
        <Personal></Personal>
        <Education></Education>
        <Work></Work>
        <Skills></Skills>        
      </>  
    );
} 

export default ResumePreview;