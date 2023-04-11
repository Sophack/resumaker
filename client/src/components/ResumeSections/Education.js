
import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import styled from '@emotion/styled';


const EducationData = ({educationState, styles, theme}) => {
    console.log(Object.keys(educationState).length + " the length of the educationState");

    const Container = styled('section')`
        ${styles.Container}
    `
    const Title = styled('h2')`
        ${styles.eTitle}
    `
    const Box = styled('div')`
        ${styles.eBox}    `

    const Program = styled('h3')`
        ${styles.eProgram}
    `
    const School = styled('h4')`
        ${styles.eSchool}
    `
    const Time = styled('div')`
        ${styles.eTime}
    `
    const StartEnd = styled('h5')`
        ${styles.eStartEnd}
    `


    if(educationState){
        console.log(Object.keys(educationState).length + " is the length of the state in redndere");
        console.log('education state in render is ' + JSON.stringify(educationState[0]));
        return Object.keys(educationState).map((item) => (
            <>
            {console.log(item)}
                <div key = {item} style={{marginTop: "5px"}}>
                    <Container className='education'>
                        <Box>
                            <School>{educationState[item].school ? educationState[item].school : 'Institution Name'}</School>
                            <Program>{educationState[item].program ? educationState[item].program : 'Degree / Program'}</Program>                           
                            <Time id='education-time'>
                                <StartEnd>{educationState[item].start ? educationState[item].start : '20XX'}</StartEnd><StartEnd>  -  </StartEnd><StartEnd>{educationState[item].end ? educationState[item].end : '20XX'}</StartEnd>
                            </Time>
                        </Box>
                    </Container>
                </div>                             
            </>  
        ));
    } else {
        console.log('education state in render NO ITEM ' + JSON.stringify(educationState));
        return(
            <>
                <div>
                    <Container className='education'>
                        <Box> 
                            {console.log(educationState)}
                            <School>{educationState.school ? educationState.school : 'Institution Name'}</School>
                            <Program>{educationState.program ? educationState.program : 'Degree / Program'}</Program>         
                            <Time id='education-time'>
                                <StartEnd>{educationState.start ? educationState.start : '20XX'}</StartEnd><StartEnd>  -  </StartEnd><StartEnd>{educationState.end ? educationState.end : '20XX'}</StartEnd>
                            </Time>
                        </Box>
                    </Container>
                </div>    
             </>  
        )
    }
}

export default EducationData;