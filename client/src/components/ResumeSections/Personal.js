import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
  

const PersonalData = ({personalState, styles}) => {

    const Container = styled('section')`
        ${styles.pContainer}
    `
    const Name = styled('h1')`
        ${styles.pName}
    `
    const Box = styled('div')`
        ${styles.pBox}
    `
    const Role = styled('div')`
        ${styles.pRole}
    `
    const PersonalInfo = styled('section')`
        ${styles.pPersonalInfo}
    `
    const Title = styled('h2')`
        ${styles.pTitle}
    `
    const Paragraph = styled('p')`
        ${styles.pParagraph}
    `


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