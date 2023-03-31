import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { FormControl, TextField, TextArea, Card, CardContent, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Auth from '../utils/auth';
import { GET_ME, GET_RESUME } from "../utils/queries";
import { CREATE_RESUME } from '../utils/mutations';


const PopulateResume = () => {
  //State Objects
  const [educationState, setEducation] = useState([]);
  const [workState, setWork] = useState([]);
  const [skillState, setSkills] = useState();
  //Personal Variable States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [objective, setObjective] = useState('');
  //Education Variable States
  const [school, setSchool] = useState('');
  const [program, setProgram] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  //Work Variable States
  const [company, setCompany] = useState('');
  const [roles, setRoles] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duties, setDuties] = useState('');
  //Skills Variable State
  const [skill, setSkill] = useState('');

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
                    <li>{single.startDate}</li>
                    <li>{single.endDate}</li>
                    </ul>            
                  )}               
                  
                </div>
                </CardContent>
              </Card>     
            </div>
            
            {/* Create Resume Form On Right Side */}
            <div className='createResume' style={{width : "50%", marginLeft: "20px", marginTop: "35px"}}>
              <h1>Create Resume</h1>
              <FormControl style={{width : "90%"}}>
                  <h3 style={{ marginTop : "15px"}}>Personal</h3>
                  <TextField label="Full Name" value = {name} onChange={handleNameChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Location" value = {location} onChange={handleLocationChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Phone Number" value = {phone} onChange={handlePhoneChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Email" value = {email} onChange={handleEmailChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Role" value = {role} onChange={handleRoleChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextareaAutosize aria-label="empty textarea" value = {objective} onChange={handleObjectiveChange} placeholder="  Objective" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                  <h3 style={{ marginTop : "15px"}}>Education</h3>
                  <TextField label="School" value = {school} onChange={handleSchoolChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Program" value = {program} onChange={handleProgramChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="Start" value = {start} onChange={handleStartChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="End" value = {end} onChange={handleEndChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <h3 style={{ marginTop : "15px"}}>Work</h3>
                  <TextField label="Company" value = {company} onChange={handleCompanyChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextareaAutosize aria-label="empty textarea" value = {roles} onChange={handleRolesChange} placeholder="  What was the role(s)" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                  <TextField label="Start" value = {startDate} onChange={handleStartDateChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextField label="End" value = {endDate} onChange={handleEndDateChange} sx={{ width: "90%", marginTop: "5px"}}/>
                  <TextareaAutosize aria-label="empty textarea" value = {duties} onChange={handleDutiesChange} placeholder="  Duties" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                  <h3 style={{ marginTop : "15px"}}>Skills</h3>
                  <TextField label="Skills" value = {skill} onChange={handleSkillChange} sx={{ width: "90%", marginTop: "5px"}}/>
              </FormControl>
              <FormControl>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                  Get Data Log
                </Button>
              </FormControl>
            </div>
          </div>
          </>
        )         
  } else {
      return(
        <>           
        <div style={{marginTop: "60px", display: "flex", flexDirection: "row", justifyContent: "center"}}>

          {/* Rendered Resume On Left Half of Page */}
          <div className='populated' style={{width : "40%"}}>
            <Card style={{marginTop: "30px", marginBottom: "30px"}}>
              <CardContent>
                  <h2>Empty Resume</h2>
              </CardContent>
            </Card>     
          </div>
          
          {/* Create Resume Form On Right Side */}
          <div className='createResume' style={{width : "50%", marginLeft: "20px", marginTop: "35px"}}>
            <h1>Create Resume</h1>
            <FormControl style={{width : "90%"}}>
                <h3 style={{ marginTop : "15px"}}>Personal</h3>
                <TextField label="Full Name" value = {name} onChange={handleNameChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Location" value = {location} onChange={handleLocationChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Phone Number" value = {phone} onChange={handlePhoneChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Email" value = {email} onChange={handleEmailChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Role" value = {role} onChange={handleRoleChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextareaAutosize aria-label="empty textarea" value = {objective} onChange={handleObjectiveChange} placeholder="  Objective" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                <h3 style={{ marginTop : "15px"}}>Education</h3>
                <TextField label="School" value = {school} onChange={handleSchoolChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Program" value = {program} onChange={handleProgramChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="Start" value = {start} onChange={handleStartChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="End" value = {end} onChange={handleEndChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <h3 style={{ marginTop : "15px"}}>Work</h3>
                <TextField label="Company" value = {company} onChange={handleCompanyChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextareaAutosize aria-label="empty textarea" value = {roles} onChange={handleRolesChange} placeholder="  What was the role(s)" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                <TextField label="Start" value = {startDate} onChange={handleStartDateChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextField label="End" value = {endDate} onChange={handleEndDateChange} sx={{ width: "90%", marginTop: "5px"}}/>
                <TextareaAutosize aria-label="empty textarea" value = {duties} onChange={handleDutiesChange} placeholder="  Duties" style={{ width: "90%", height: "60px"  , marginTop: "5px" }}/>
                <h3 style={{ marginTop : "15px"}}>Skills</h3>
                <TextField label="Skills" value = {skill} onChange={handleSkillChange} sx={{ width: "90%", marginTop: "5px"}}/>
            </FormControl>
            <FormControl>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Get Data Log
              </Button>
            </FormControl>
          </div>
        </div>
        </>
      );        
  }; 
};

export default PopulateResume;