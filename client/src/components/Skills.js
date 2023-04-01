import React, { useState, useEffect } from 'react';
import { GET_RESUME } from '../utils/queries';
import { useQuery } from '@apollo/client'

const Skills = (props) => {
  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [skillsState, setSkillsState] = useState({
    industryKnowledge: "",
    toolsAndTechnologies: "",
    languages: "",
    transferableSkills: "",
  });

  useEffect(() => {
    if (data) {
      setSkillsState(data.getResume);
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