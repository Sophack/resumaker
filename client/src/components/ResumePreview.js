import React, { useState, useEffect, useRef } from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import '@progress/kendo-theme-material/dist/all.css';
import { FormControl, TextField, Box, Button, Tab, Tabs } from '@mui/material';
import styled from '@emotion/styled';
import Personal from "./ResumeSections/Personal";
import Education from "./ResumeSections/Education";
import Work from "./ResumeSections/Work";
import Skills from "./ResumeSections/Skills";

const ResumePreview = ({personalState, educationState, workState, skillsState, styles, theme}) => {


  const Title = styled('h2')`
    ${styles.Title}
  `  
  const SideSection = styled('section')`
    ${styles.SideSection}
  `
  const MainSection = styled('div')`
    ${styles.MainSection}
  `
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }
    return(
      <>
        <section className='form-and-buttons'>
        <PDFExport ref={pdfExportComponent} paperSize="A4" scale={1.465} >
        <container id='resume-preview'>
          <SideSection id='side-column'>
            <Skills skillsState={skillsState} styles={styles}></Skills>
          </SideSection>
          <MainSection id='main-column'>
            <Personal personalState={personalState} styles={styles}></Personal> 
            <Title>Education</Title>           
            <Education educationState={educationState} styles={styles} theme={theme}></Education>
            <Work workState={workState} styles={styles}></Work>
          </MainSection>

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