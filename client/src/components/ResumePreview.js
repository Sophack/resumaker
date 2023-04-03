import React, { useState, useEffect, useRef } from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { FormControl, TextField, Box, Button, Tab, Tabs } from '@mui/material';
import styled from '@emotion/styled';
import Personal from "./ResumeSections/Personal";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";

const MainSection = styled('div')`
  float: left;
  width: 70%;
`

const SideSection = styled('section')`
  float: right;
  width: 30%;
  height: 100%;
  background-color: #f7f7f7;
`
const ResumePreview = ({personalState, educationState, workState, skillsState}) => {

  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
    console.log("clicked");
  }



    return(
      <>

        <container id='resume-preview'>
        <PDFExport ref={pdfExportComponent}>
          <MainSection id='main-column'>
            <Personal personalState={personalState}></Personal>
            <Education educationState={educationState}></Education>
            <Work workState={workState}></Work>
          </MainSection>
          <SideSection id='side-column'>
            <Skills skillsState={skillsState}></Skills>
          </SideSection>
          <div className='button-area'>
            <Button primary= {true} onClick={handleExportWithComponent}>
              Download PDF
            </Button>
          </div>
          </PDFExport>
        </container>  
        
      </>  
    );
} 

export default ResumePreview;