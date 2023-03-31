import { useState, useEffect } from "react";
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

import { useMutation } from "@apollo/client";
import { CREATE_RESUME } from "../utils/mutations";

const LOCAL_STORAGE_KEY = "resumaker.resume";

export default function Resume() {

  const [resume, setResume] = useState({});

  const [createResume, { error }] = useMutation(CREATE_RESUME);

  useEffect(() => {
    const resumeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (resumeJSON) setResume(JSON.parse(resumeJSON));
  }, []);

  useEffect(() => {
    console.log("Rendered:");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resume));
  }, [resume]);

  function handleCreateResume() {
    try {
      const newResume = createResume(
        {
          variables: { ...resume },
        },
        setResume([...resume, newResume])
      );
    } catch (err) {
      console.error(err);
    }
  }

  // function handleResumeChange(id, resume) {
  //   const newResume = [...resume];
  //   const index = newResume.findIndex((r) => r.id === id);
  //   newResume[index] = resume;
  //   setResume(newResume);
  // }

  // function handleChange(changes) {
  //   handleResumeChange(resume.id, { ...resume, ...changes });
  // }

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
    </>
  );
}

// {
//   /* Create Resume Form On Right Side */
// }
// if(Object.keys(resumeData).length){
//     return (
//         <>
//         {console.log(Object.keys(resumeData).length)}
//         <div style={{marginTop: "60px", display: "flex", flexDirection: "row", justifyContent: "center"}}>

//           {/* Rendered Resume On Left Half of Page */}
//           <div className='populated' style={{width : "40%"}}>
//             <Card style={{marginTop: "30px", marginBottom: "30px"}}>
//               <CardContent>
//               <h1>{resumeData.__typename}</h1>
//               <p>{resumeData.color}</p>

//               {/* Education Section */}
//               <div>
//                 <h2>{resumeData.education[0].__typename}</h2>
//                 {resumeData.education.map((single) =>
//                   <ul>
//                     <li>{single.school}</li>
//                     <li>{single.program}</li>
//                     <li>{single.start}</li>
//                     <li>{single.end}</li>
//                   </ul>
//                 )}
//               </div>

//                 {/* Work Section */}
//                 <div>
//                 <h2>{resumeData.work[0].__typename}</h2>
//                 {resumeData.work.map((single) =>
//                   <ul>
//                   <li>{single.company}</li>
//                   <li>{single.role}</li>
//                   <li>{single.duties}</li>
//                   <li>{single.startDate}</li>
//                   <li>{single.endDate}</li>
//                   </ul>
//                 )}

//               </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Create Resume Form On Right Side */}
//           <div className='createResume' style={{width : "50%", marginLeft: "20px", marginTop: "35px"}}>
//             <h1>Create Resume</h1>

//         {/* Rendered Resume On Left Half of Page */}
//         <div className='populated' style={{width : "40%"}}>
//           <Card style={{marginTop: "30px", marginBottom: "30px"}}>
//             <CardContent>
//                 <h2>Empty Resume</h2>
//             </CardContent>
//           </Card>
//         </div>
