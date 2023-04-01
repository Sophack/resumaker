import React, { useState, useEffect } from "react";
import { GET_RESUME } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

const Skills = (props) => {
  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [skillsState, setSkillsState] = useState([]);

  useEffect(() => {
    if (data) {
      setSkillsState(data.getResume.skills);
      console.log(skillsState);
    }
  }, [data]);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (resumeData.skills) {
    return (
      <>
        <h2>Skills</h2>
        {skillsState.map((single) => (
          <div>
            <div>
              {console.log(single)}
              <p>Industry Knowledge: {single.industryKnowledge}</p>
              <p>Tools and Technologies: {single.toolsAndTechnologies}</p>
              <p>Languages: {single.languages}</p>
              <p>Transferable Skills: {single.transferableSkills}</p>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h2>No Skills Data</h2>
      </>
    );
  }
};

export default Skills;
