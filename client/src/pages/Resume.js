import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FormControl, TextField, TextArea, Card, CardContent } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Auth from '../utils/auth';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { maxWidth } from '@mui/system';

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
            <div style={{marginTop: "60px", display: "flex", flexDirection: "row", justifyContent: "center"}}>

              {/* Rendered Resume On Left Half of Page */}
              <div className='populated' style={{width : "40%"}}>
                <Card style={{marginTop: "30px", marginBottom: "30px"}}>
                  <CardContent>
                  <h1>{resumeData.__typename}</h1>
                  <p>{resumeData.color}</p>

                  {/* Education Section */}
                  <div>
                    <h2>{resumeData.education[0].__typename}</h2>
                    {resumeData.education.map((single) =>                       
                      <ul>
                        <li>{single.school}</li>                        
                        <li>{single.program}</li>
                        <li>{single.start}</li>
                        <li>{single.end}</li>
                      </ul>            
                    )}    
                  </div>

                    {/* Work Section */}
                    <div>
                    <h2>{resumeData.work[0].__typename}</h2>
                    {resumeData.work.map((single) => 
                      <ul>
                      <li>{single.company}</li>
                      <li>{single.role}</li>
                      <li>{single.duties}</li>
                      <li>{single.start}</li>
                      <li>{single.end}</li>
                      </ul>            
                    )}               
                    
                  </div>
                  </CardContent>
                </Card>     
              </div>
              
              {/* Create Resume Form On Right Side */}
              <div className='createResume' style={{width : "50%", marginLeft: "20px", marginTop: "30px"}}>
                <h1>Create Resume</h1>
                <FormControl style={{width : "90%"}}>
                    <TextField label="Color" sx={{ width: "90%"}}/>
                    <TextField label="Name" sx={{ width: "90%", marginTop: "5px"}}/>
                    <TextareaAutosize aria-label="empty textarea" placeholder="Objective" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                </FormControl>
              </div>
            </div>
            </>
         )         
    } else {
        return(<h1 style={{marginTop: "60px"}}>Emply Resume</h1>);        
    }; 
};

export default PopulateResume;