import { useState, useEffect } from "react";
import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { CREATE_RESUME } from "../utils/mutations";
import CreateResume from "../components/CreateResume";

const LOCAL_STORAGE_KEY = "resumaker.resume";

export default function Resume() {
  const [resume, setResume] = useState({});
  console.log("this is resume state", resume)

  useEffect(() => {
    const resumeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (resumeJSON != null) setResume(JSON.parse(resumeJSON));
  }, []);

  useEffect(() => {
    console.log("Rendered:");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resume));
  }, [resume]);

  const [createResume, { error }] = useMutation(CREATE_RESUME);

  function handleCreateResume() {
    try {
      const newResume = createResume([...resume, setResume]);
      console.log("this is newResume", resume)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <CreateResume resume={resume} handleCreateResume={handleCreateResume}/>
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
