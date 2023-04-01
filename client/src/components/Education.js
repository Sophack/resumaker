import React, { useState, useEffect } from "react";
import { GET_ME, GET_RESUME } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";

const EducationData = () => {
  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [educationState, setEducationState] = useState([]);

  useEffect(() => {
    if (data) {
      setEducationState(data.getResume.education);
      console.log(educationState);
    }
  }, [data]);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (resumeData.education) {
    return (
      <>
        <h2>Education</h2>
        {educationState.map((single) => (
          <div>
            <div>
              {console.log(single)}
              <p>Institution: {single.school}</p>
              <p>Program: {single.program}</p>
              <p>End: {single.start}</p>
              <p>Start: {single.end}</p>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h2>No Education Data</h2>
      </>
    );
  }
};

export default EducationData;
