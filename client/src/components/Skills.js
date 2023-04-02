import React, { useState, useEffect } from "react";

const Skills = ({ skillsState }) => {
  
  if (skillsState) {
    return (
      <>
        <h2>Skills</h2>
        <div>
          <div>
            <p>Industry Knowledge: {skillsState.industryKnowledge}</p>
            <p>Tools and Technologies: {skillsState.toolsAndTechnologies}</p>
            <p>Languages: {skillsState.languages}</p>
            <p>Transferable Skills: {skillsState.transferableSkills}</p>
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