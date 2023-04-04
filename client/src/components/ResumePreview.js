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
  height: 100%;
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
        <section className='form-and-buttons'>
        <PDFExport ref={pdfExportComponent}>
        <container id='resume-preview'>
          <MainSection id='main-column'>
            <Personal personalState={personalState}></Personal>
            <Education educationState={educationState}></Education>
            <Work workState={workState}></Work>
          </MainSection>
          <SideSection id='side-column'>
            <Skills skillsState={skillsState}></Skills>
          </SideSection>
        </container>  
        </PDFExport>

        <div className='button-container'>
            <Button id='resume-pdf-button' onClick={handleExportWithComponent}>
              Download PDF
            </Button>
        </div>
        </section>
        
      </>  
    );
} 

export default ResumePreview;