import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import styled from '@emotion/styled';

const Container = styled('section')`
    margin-left: 30px;
`

const Title = styled('h2')`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`
const Box = styled('div')`
    padding-left: 13px;
    border-left: 2px solid;
    border-color: #7f7cb3;
`

const Program = styled('h3')`
    font-size: 13px;
    letter-spacing: 1px;
    margin-top: 0;
`

const School = styled('h4')`
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: -5px;
`

const Time = styled('div')`
    color: #a5a5a5;
    margin-top: -6px;
    display: flex;
`

const StartEnd = styled('h5')`
    color: #a5a5a5;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
`

const EducationData = ({educationState}) => {

    if(educationState){
        return(
            <>
                <div>
                    <Container className='education'>
                        <Title>Education</Title>    
                        <Box>
                            <Program>{educationState.program ? educationState.program : 'Degree / Program'}</Program>          
                            <School>{educationState.school ? educationState.program : 'Institution Name'}</School>
                            <Time id='education-time'>
                                <StartEnd>{educationState.start ? educationState.start : '20XX'}</StartEnd><StartEnd>  -  </StartEnd><StartEnd>{educationState.end ? educationState.end : '20XX'}</StartEnd>
                            </Time>
                        </Box>
                    </Container>
                </div>                                         
            </>  
        );
    } 
}

export default EducationData;