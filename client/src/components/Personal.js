import React, { useState, useEffect } from 'react';
import { GET_ME, GET_RESUME } from "../utils/queries";
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';

const PersonalData = () => {

    const {loading, data} = useQuery(GET_RESUME);
    let resumeData = data?.getResume || {};


    const [personalState, setPersonalState] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        objective: '',
        role: ''
    })

    useEffect(()=> {
        if (data) {
            setPersonalState(data.getResume.personal[0]);
            console.log(personalState);
        }
    }, [data])


    if (loading) {
        return <h2>LOADING...</h2>;
    }   

    if(resumeData){
        return(
            <>
              <h2>Personal</h2>
              {resumeData &&(
                <div>
                    {resumeData.personal.map((single)=>
                        <div>
                            <p>Name: {personalState.fullName}</p>
                            <p>Email: {personalState.email}</p>
                            <p>Phone: {personalState.phone}</p>
                            <p>Location: {personalState.location}</p>
                            <p>Objective: {personalState.objective}</p>
                            <p>Role: {personalState.role}</p>
                        </div>
                    )}
                </div>
              )}
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