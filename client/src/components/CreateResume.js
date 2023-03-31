import React from "react";
import {
  FormControl,
  TextField,
  TextArea,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export default function CreateResume(props) {
  const { resume, handleCreateResume } = props;

  return (
    <>
      <div
        className="createResume"
        style={{ width: "50%", marginLeft: "20px", marginTop: "35px" }}
      >
        <h1>Create Resume</h1>
        <FormControl style={{ width: "90%" }}>
          <h3 style={{ marginTop: "15px" }}>Personal</h3>
          <TextField
            label="name"
            value={resume.name}
            // onInput={(e) => handleChange({ name: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Location"
            value={resume.location}
            // onInput={(e) => handleChange({ location: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Phone Number"
            value={resume.phone}
            // onInput={(e) => handleChange({ phone: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Email"
            value={resume.email}
            // onInput={(e) => handleChange({ email: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Role"
            value={resume.role}
            // onInput={(e) => handleChange({ role: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={resume.objective}
            // onInput={(e) => handleChange({ objective: e.target.value })}
            placeholder="  Objective"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Education</h3>
          <TextField
            label="School"
            value={resume.school}
            // onInput={(e) => handleChange({ school: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Program"
            value={resume.program}
            // onInput={(e) => handleChange({ education: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Start"
            value={resume.start}
            // onInput={(e) => handleChange({ start: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="End"
            value={resume.end}
            // onInput={(e) => handleChange({ end: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Work</h3>
          <TextField
            label="Company"
            value={resume.company}
            // onInput={(e) => handleChange({ company: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={resume.roles}
            // onInput={(e) => handleChange({ roles: e.target.value })}
            placeholder="  What was the role(s)"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <TextField
            label="Start"
            value={resume.startDate}
            // onInput={(e) => handleChange({ startDate: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="End"
            value={resume.endDate}
            // onInput={(e) => handleChange({ endDate: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={resume.duties}
            // onInput={(e) => handleChange({ duties: e.target.value })}
            placeholder="  Duties"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Skills</h3>
          <TextField
            label="Skills"
            value={resume.skill}
            // onInput={(e) => handleChange({ skill: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />
        </FormControl>

        <FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => handleCreateResume()}
          >
            Create Resume!
          </Button>
        </FormControl>
      </div>

      <div
        style={{ width: "50%", marginRight: "20px", marginTop: "35px" }}>
             <h1>Render Resume</h1>
        </div>
      <div></div>
    </>
  );
}
