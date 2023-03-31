import { useState } from "react";
import { useMutation } from "@apollo/client";
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
// import { GET_ME, GET_RESUME } from "../utils/queries";
import { CREATE_RESUME } from "../utils/mutations";

export default function Resume() {
  const [resume, setResume] = useState(resumeData);

  // const { loading, data } = useQuery(GET_RESUME);
  // let resumeData = data?.getResume || {};

  const [createThought, { error }] = useMutation(CREATE_RESUME);

  function handleCreateResume(event) {
    event.preventDefault();

    try {
      const { newResume } = createThought(
        {
          variables: { ...resume },
        },
        setResume([...resume, newResume])
      );

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  function handleResumeChange(id, resume) {
    const newResume = [...resume];
    const index = newResume.findIndex((r) => r.id === id);
    newResume[index] = resume;
    setResume(newResume);
  }

  function handleChange(changes) {
    handleResumeChange(resume.id, { ...resume, ...changes });
  }

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
            label="Full Name"
            value={resume.personal.fullName}
            onInput={(e) => handleChange({ name: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Location"
            value={resume.personal.location}
            onInput={(e) => handleChange({ location: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Phone Number"
            value={resume.personal.phone}
            onInput={(e) => handleChange({ phone: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Email"
            value={resume.personal.email}
            onInput={(e) => handleChange({ email: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Role"
            value={resume.personal.role}
            onInput={(e) => handleChange({ role: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={resume.personal.objective}
            onInput={(e) => handleChange({ objective: e.target.value })}
            placeholder="  Objective"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Education</h3>
          <TextField
            label="School"
            value={resume.education.school}
            onInput={(e) => handleChange({ school: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Program"
            value={resume.education.program}
            onInput={(e) => handleChange({ education: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="Start"
            value={resume.education.start}
            onInput={(e) => handleChange({ start: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="End"
            value={resume.education.end}
            onInput={(e) => handleChange({ end: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Work</h3>
          <TextField
            label="Company"
            value={resume.work.company}
            onInput={(e) => handleChange({ company: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={Resume.work.roles}
            onInput={(e) => handleChange({ roles: e.target.value })}
            placeholder="  What was the role(s)"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <TextField
            label="Start"
            value={resume.work.startDate}
            onInput={(e) => handleChange({ startDate: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextField
            label="End"
            value={resume.work.endDate}
            onInput={(e) => handleChange({ endDate: e.target.value })}
            sx={{ width: "90%", marginTop: "5px" }}
          />

          <TextareaAutosize
            aria-label="empty textarea"
            value={resume.work.duties}
            onInput={(e) => handleChange({ duties: e.target.value })}
            placeholder="  Duties"
            style={{ width: "90%", height: "60px", marginTop: "5px" }}
          />

          <h3 style={{ marginTop: "15px" }}>Skills</h3>
          <TextField
            label="Skills"
            value={resume.skills.skill}
            onInput={(e) => handleChange({ skill: e.target.value })}
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

{
  /* Create Resume Form On Right Side */
}
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
