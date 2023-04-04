import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import styled from '@emotion/styled';

const Container = styled('section')`
    margin-top: 40px;
    margin-left: 30px;
`

const Name = styled('h1')`
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 1px;
`

const Box = styled('div')`
    background-color: #7f7cb3;
    padding: 0px 4px 0px 4px;
    width: fit-content;
    height: 19px;
    margin-bottom: 8px;
    margin-left: -5px;
`

const Role = styled('div')`
    color: #7f7cb3;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 5px;
`

const PersonalInfo = styled('section')`
    color: #a5a5a5;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 16px;
`

const Title = styled('h2')`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Paragraph = styled('p')`
    font-size: 10px;
    margin-right: 10px;
`


const PersonalData = ({personalState}) => {

    if(personalState){
        return(
            <>         
                <div>
                    <Container id='personal'>
                        <Box>
                            <Name id='full-name'>{personalState.fullName ? personalState.fullName : 'Your Name Here'}</Name>
                        </Box>
                        <Role id='role'>{personalState.role ? personalState.role : 'Role goes here'}</Role>

                        <PersonalInfo id='personal-info'>
                            <div>{personalState.location ? personalState.location : 'Province, Country'}</div>
                            <div>{personalState.email ? personalState.email : 'Username@email.com'}</div>
                            <div>{personalState.phone ? personalState.phone : '(555)555-5555'}</div>
                        </PersonalInfo>

                        <Title>Career Objective</Title>
                        <Paragraph>{personalState.objective ? personalState.objective : 'Lorem ipsli dolor sit amet, consectetli adipiscing elit, sed do eilimod tempor incididlit li labore et dolore magna aliqli. Qlis ipsli slipendisse litrices gravida. Risli commodo viverra maecenas acclisan lacli vel.'}</Paragraph>
                    </Container>
                </div>                             
            </>  
        );
    }
}

export default PersonalData;