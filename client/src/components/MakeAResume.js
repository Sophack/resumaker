import React, { useState, useEffect } from 'react';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';

import Templates from './Templates'
import ResumeBuilder from './ResumeBuilder';
import ResumePreview from './ResumePreview';

const MakeAResume = () => {

    return(
      <>
        <section id='resume-maker-container'>
            <h2 id='builder-title'>Create your resume</h2>
            <Templates />
            <div id='builder-preview'>
                <ResumeBuilder />
                <ResumePreview />
            </div>
        </section>
      </>  
    );
} 

export default MakeAResume;