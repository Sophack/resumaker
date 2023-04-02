import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../../utils/queries";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';

const PersonalData = ({personalState}) => {

    if(personalState){
        return(
            <>
              <h2>Personal</h2>
                <div>                    
                    <div>
                        <p>Name: {personalState.fullName}</p>
                        <p>Email: {personalState.email}</p>
                        <p>Phone: {personalState.phone}</p>
                        <p>Location: {personalState.location}</p>
                        <p>Objective: {personalState.objective}</p>
                        <p>Role: {personalState.role}</p>
                    </div>                
                </div>              
            </>  
        );
    } else {
        return(
            <>
                <h2>No Personal Data</h2>
             </>  
        )
    }
}

export default PersonalData;