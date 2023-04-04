import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';

const Container = styled('section')`
    margin-left: 30px;
`

const Title = styled('h2')`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 20px;
`
const Box = styled('div')`
    padding-left: 13px;
    border-left: 2px solid;
    border-color: #7f7cb3;
`

const RoleCompany = styled('div')`
    display: flex;
`

const Role = styled('h3')`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
`

const Company = styled('h3')`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 0;
    margin-right: 8px;
`

const Time = styled('div')`
    color: #a5a5a5;
    margin-top: -3px;
    margin-bottom: 5px;
    display: flex;
`

const StartEnd = styled('h5')`
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
`

const Paragraph = styled('p')`
    font-size: 10px;
    margin-right: 10px;
`

const WorkData = ({ workState }) => {
  console.log("Work Section", workState)
  if (workState) {
    return (
      <>
      <div>
        <Container className='work'>
          <Title>Work Experience</Title>
          <Box>
            <RoleCompany className='position-company'>
              <Role>{workState.roles ? workState.roles : 'Position Name'}</Role><Company>  —  </Company><Company>{workState.company ? workState.company : 'Company'}</Company>
            </RoleCompany>
            <Time className='work-time'>
              <StartEnd>{workState.startDate ? workState.startDate : 'January 20XX'}</StartEnd><StartEnd>  -  </StartEnd><StartEnd>{workState.endDate ? workState.endDate : 'December 20XX'}</StartEnd>
            </Time>
              <Paragraph>{workState.duties ? workState.duties : 'Donec vitae felis vel felis tincidunt malesuada. Sed ac odio varius, lacinia orci ut, varius velit. Proin eu quam porttitor, cursus diam eu, dignissim tortor. Sed in purus aliquet, accumsan mi sed.'}</Paragraph>
            </Box>
          </Container>
        </div>
      </>
    );
  } 
};

export default WorkData;