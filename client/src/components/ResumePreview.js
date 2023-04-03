import React, { useState, useEffect } from 'react';
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

    return(
      <>
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
      </>  
    );
} 

export default ResumePreview;