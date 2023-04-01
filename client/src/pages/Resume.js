import { useState, useEffect } from "react";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { CREATE_RESUME } from "../utils/mutations";
import { GET_RESUME } from "../utils/queries";
import CreateResume from "../components/CreateResume";

export default function Resume() {
  const { loading, error, data } = useQuery(GET_RESUME, { errorPolicy: "all"});
  let resumeData = data?.getResume || {};

  const [createResume] = useMutation(CREATE_RESUME);

  const [resume, setResume] = useState({resumeData});
  console.log("this is resume state", resume)

  function handleCreateResume() {
    try {
      const newResume = {
        personal: {
          fullName: "",
          email: "",
          phone: "",
          location: "",
          objective: "",
          role: "",
        },
        education: {
          school: "",
          program: "",
          end: "",
          start: "",
        },
        work: {
          company: "",
          roles: "",
          startDate: "",
          endDate: "",
          duties: "",
        },
        skills: {
          industryKnowledge: [""],
          toolsAndTechnologies: [""],
          languages: [""],
          transferableSkills: [""],
        }
      };
      console.log("this is newResume", newResume)
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
