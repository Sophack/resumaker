import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';

const Container = styled('section')`
    margin-left: 10px;
`

const Box = styled('div')`
  margin-top: 155px;
`

const Title = styled('h2')`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Paragraph = styled('p')`
    font-size: 10px;
    margin-right: 10px;
`

const Skills = ({ skillsState }) => {
  if (skillsState) {
    return (
      <>
      <Container>
        <Box id='skills'>
          <div id='industry-skills'>
              <Title className='side-column-title'>Industry Skills</Title>
              <Paragraph>{skillsState.industryKnowledge ? skillsState.industryKnowledge : 'Curabitur non, Etiam ante, Nulla placerat, Malesuada, Etiam pharetra, Mauris in'}</Paragraph>
            </div>
            <div id='tool-tech'>
              <Title className='side-column-title'>Tools & Tech</Title>
              <Paragraph>{skillsState.toolsAndTechnologies ? skillsState.toolsAndTechnologies : 'HTML CSS Javascript Node.js MySQL MongoDB React'}</Paragraph>
            </div>
            <div id='languages'>
              <Title className='side-column-title'>Languages</Title>
              <Paragraph>{skillsState.languages ? skillsState.languages : 'English French Spanish'}</Paragraph>
            </div>
          </Box>
        </Container>
      </>
    );
  } 
};

export default Skills;