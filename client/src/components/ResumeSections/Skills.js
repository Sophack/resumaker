import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';


const Skills = ({ skillsState, styles }) => {

  const Container = styled('h2')`
    ${styles.sContainer}
  ` 
  const Box = styled('h2')`
    ${styles.sBox}
  ` 
  const Title = styled('h2')`
    ${styles.sTitle}
  ` 
  const Paragraph = styled('h2')`
    ${styles.sParagraph}
  `  

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