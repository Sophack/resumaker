import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_RESUME } from '../utils/queries';
import { CREATE_RESUME } from '../utils/mutations';
import { FormControl, TextField } from '@mui/material';

export default function ResumeBuilder() {

    const { loading, data } = useQuery(GET_RESUME);
    let resumeData = data?.getResume || {};
  
    const [savedResume] = useMutation(CREATE_RESUME);
  
    const [personalState, setPersonalState] = useState({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      objective: "",
      role: "",
    });
  
    function handlePersonalInfoChange(event) {
      event.stopPropagation();
      const { name, value } = event.target;
      setPersonalState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const [educationState, setEducationState] = useState([
      {
        id: "",
        school: "",
        program: "",
        end: "",
        start: "",
      },
    ]);
  
    function handleEducationChange(event) {
      event.stopPropagation();
      const { name, value } = event.target;
      setEducationState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const [workState, setWorkState] = useState({
      company: "",
      roles: "",
      startDate: "",
      endDate: "",
      duties: "",
    });
  
    function handleWorkChange(event) {
      event.stopPropagation();
      const { name, value } = event.target;
      setWorkState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(personalState);
      console.log(educationState);
      console.log(workState);
  
      const resume = {
        resumeInput: {
          personal: {
            ...personalState,
          },
  
          education: {
            ...educationState,
          },
          work: {
            ...workState,
          },
        },
      };
  
      try {
        const response = savedResume({ variables: { ...resume } });
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
    <FormControl style={{ width: "90%" }}>
        <TextField
          label="Full name"
          name="fullName"
          value={personalState.fullName}
          key={`fullName-${personalState.fullName}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Role"
          name="role"
          value={personalState.role}
          key={`role-${personalState.role}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Location"
          name="location"
          value={personalState.location}
          key={`location-${personalState.location}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Email"
          name="email"
          value={personalState.email}
          key={`email-${personalState.email}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Phone number"
          name="phone"
          value={personalState.phone}
          key={`phone-${personalState.phone}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Website"
          name="website"
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="LinkedIn"
          name="linkedin"
          onChange={(e) => e.target.value}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="GitHub"
          name="github"
          onChange={(e) => e.target.value}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          multiline
          rows={5}
          label="Career objective"
          name="objective"
          value={personalState.objective}
          key={`objective-${personalState.objective}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
      </FormControl>
    </>
  )
}
