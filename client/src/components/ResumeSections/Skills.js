import React, { useState, useEffect } from "react";

const Skills = ({ skillsState }) => {
  console.log(skillsState)
  if (skillsState) {
    return (
      <>
        <h2>Skills</h2>
        <div>
          <div>
            <p>Industry Knowledge: {skillsState.industryKnowledge}</p>
            <p>Tools and Technologies: {skillsState.toolsAndTechnologies}</p>
            <p>Languages: {skillsState.languages}</p>
          </div>
        </div>
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