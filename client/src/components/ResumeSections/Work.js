import React, { useState, useEffect } from "react";

const WorkData = ({ workState }) => {
  console.log("Work Section", workState)
  if (workState) {
    return (
      <>
        <h2>Work</h2>
        <div>
          <div>
            <p>company: {workState.company}</p>
            <p>roles: {workState.roles}</p>
            <p>startDate: {workState.startDate}</p>
            <p>endDate: {workState.endDate}</p>
            <p>duties: {workState.duties}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2> No Work Data</h2>
      </>
    );
  }
};

export default WorkData;