import React, { useState, useEffect } from "react";
import { GET_ME, GET_RESUME } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_RESUME } from "../utils/mutations";
import {
  FormControl,
  TextField,
  TextArea,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Auth from "../utils/auth";

const ResumeFields = () => {
  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [savedResume] = useMutation(CREATE_RESUME);

  //State Objects
  const [educationStateObject, setEducation] = useState([]);
  const [workStateObject, setWork] = useState([]);
  const [skillStateObject, setSkills] = useState([]);

  const [personalState, setPersonalState] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
    role: "",
  });

  const handlePersonalInfoChange = (event) => {
    setPersonalState({
      ...personalState,
      [event.target.name]: event.target.value,
    });
  };

  const [educationState, setEducationState] = useState({
    school: "",
    program: "",
    end: "",
    start: "",
  });

  const handleEducationChange = (event) => {
    setEducationState({
      ...educationState,
      [event.target.name]: event.target.value,
    });
  };

  const [workState, setWorkState] = useState({
    company: "",
    roles: "",
    startDate: "",
    endDate: "",
    duties: "",
  });

  const handleWorkChange = (event) => {
    setWorkState({
      ...workState,
      [event.target.name]: event.target.value,
    });
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

  if (resumeData) {
    return (
      <div>
        <h1>Create Resume</h1>
        <FormControl style={{ width: "90%" }}>
          <h3 style={{ marginTop: "15px" }}>Personal</h3>
          <TextField
            label="Full Name"
            name="fullName"
            value={personalState.fullName}
            onChange={handlePersonalInfoChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Location"
            name="location"
            value={personalState.location}
            onChange={handlePersonalInfoChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={personalState.phone}
            onChange={handlePersonalInfoChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Email"
            name="email"
            value={personalState.email}
            onChange={handlePersonalInfoChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Role"
            name="role"
            value={personalState.role}
            onChange={handlePersonalInfoChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            name="objective"
            value={personalState.objective}
            onChange={handlePersonalInfoChange}
            placeholder="  Objective"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />
        </FormControl>

        <FormControl style={{ width: "90%" }}>
          <h3 style={{ marginTop: "15px" }}>Education</h3>
          <TextField
            label="School"
            name="school"
            value={educationState.school}
            onChange={handleEducationChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Program"
            name="program"
            value={educationState.program}
            onChange={handleEducationChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="Start"
            name="start"
            value={educationState.start}
            onChange={handleEducationChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="End"
            name="end"
            value={educationState.end}
            onChange={handleEducationChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
        </FormControl>

        <FormControl style={{ width: "90%" }}>
          <h3 style={{ marginTop: "15px" }}>Work</h3>
          <TextField
            label="Company"
            name="company"
            value={workState.company}
            onChange={handleWorkChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            name="roles"
            value={workState.roles}
            onChange={handleWorkChange}
            placeholder="  What was the role(s)"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />
          <TextField
            label="Start"
            name="startDate"
            value={workState.startDate}
            onChange={handleWorkChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextField
            label="End"
            name="endDate"
            value={workState.endDate}
            onChange={handleWorkChange}
            sx={{ width: "90%", marginTop: "5px" }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            name="duties"
            value={workState.duties}
            onChange={handleWorkChange}
            placeholder="  Duties"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />
        </FormControl>

        <FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Get Data Log
          </Button>
        </FormControl>
      </div>
    );
  }
};

export default ResumeFields;
