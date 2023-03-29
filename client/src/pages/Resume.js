import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ME, GET_RESUME } from "../utils/queries";

const PopulateResume = () => {

  const {loading, data} = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};
  
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  if (loading) {
    return <h2>LOADING RESUME</h2>;
  } 

    if(Object.keys(resumeData).length){
        return (
            <>       
            {console.log(Object.keys(resumeData).length)}      
            <div style={{marginTop: "60px"}}>
                <h1>`{resumeData.__typename}`</h1>
                <p>{resumeData.color}</p>
                <p>{resumeData.education[0].__typename}</p>
                <ul>
                    <li>{resumeData.education[0].school}</li>
                    <li>{resumeData.education[0].program}</li>
                    <li>{resumeData.education[0].start}</li>
                    <li>{resumeData.education[0].end}</li>
                </ul>
                <p>{resumeData.work[0].__typename}</p>
                <ul>
                    <li>{resumeData.work[0].company}</li>
                    <li>{resumeData.work[0].role}</li>
                    <li>{resumeData.work[0].duties}</li>
                    <li>{resumeData.work[0].start}</li>
                    <li>{resumeData.work[0].end}</li>
                </ul>
                {/* {console.log(JSON.stringify(resumeData.work[0]) + " is this working?")} */}
            </div> 
            </>
         )         
    } else {
        return(<h1 style={{marginTop: "60px"}}>Emply Resume</h1>);        
    }; 
};

export default PopulateResume;