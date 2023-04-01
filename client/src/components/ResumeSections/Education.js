import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';

const EducationData = ({educationState}) => {

    if(educationState){
        return(
            <>
              <h2>Education</h2>
              {educationState.map((item,index)=>
                <div key={index}>
                <p>Institution: {item.school}</p>
                <p>Program: {item.program}</p>
                <p>End: {item.start}</p>
                <p>Start: {item.end}</p>
                </div>  
              )}            
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