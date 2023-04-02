
import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';

const EducationData = ({educationState}) => {

    if(educationState){
        return(
            <>
              <h2>Education</h2>              
                <div>                    
                    <div>
                        <p>School: {educationState.school}</p>
                        <p>Program: {educationState.program}</p>
                        <p>Start: {educationState.start}</p>
                        <p>End: {educationState.end}</p>
                    </div>                
                </div>                             
            </>  
        );
    } else {
        return(
            <>
                <h2>No Education Data</h2>
             </>  
        )
    }
}

export default EducationData;