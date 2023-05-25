import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';


const WorkData = ({ workState, styles }) => {

  const Container = styled('h2')`
    ${styles.wContainer}
  ` 
  const Title = styled('h2')`
    ${styles.wTitle}
  ` 
  const Box = styled('h2')`
    ${styles.wBox}
  ` 
  const RoleCompany = styled('h2')`
    ${styles.wRoleCompany}
  ` 
  const Role = styled('h2')`
    ${styles.wRole}
  ` 
  const Company = styled('h2')`
    ${styles.wCompany}
  ` 
  const Time = styled('h2')`
    ${styles.wTime}
  ` 
  const StartEnd = styled('h2')`
    ${styles.wStartEnd}
  ` 
  const Paragraph = styled('h2')`
    ${styles.wParagraph}
  ` 


  if (workState) {
    console.log('work state in render is ' + JSON.stringify(workState[0]));
    return Object.keys(workState).map((item) => (
      <>
      {console.log(item)}
          <div key = {item} style={{marginTop: "5px"}}>
              <Container className='work'>
              <Box>
                <RoleCompany className='position-company'>
                  <Role>{workState[item].roles ? workState[item].roles : 'Position Name'}</Role><Company>  —  </Company><Company>{workState[item].company ? workState[item].company : 'Company'}</Company>
                </RoleCompany>
                <Time className='work-time'>
                  <StartEnd>{workState[item].startDate ? workState[item].startDate : 'January 20XX'}</StartEnd><StartEnd>  -  </StartEnd><StartEnd>{workState[item].endDate ? workState[item].endDate : 'December 20XX'}</StartEnd>
                </Time>
                  <Paragraph>{workState[item].duties ? workState[item].duties : 'Donec vitae felis vel felis tincidunt malesuada. Sed ac odio varius, lacinia orci ut, varius velit. Proin eu quam porttitor, cursus diam eu, dignissim tortor. Sed in purus aliquet, accumsan mi sed.'}</Paragraph>
              </Box>
              </Container>
          </div>                             
      </>  
    ));
  } else {
    return(
      <>
        <div>
          <Container className='work'>
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
    )
  } 
};

export default WorkData;