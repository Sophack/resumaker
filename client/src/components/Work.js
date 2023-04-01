import React, { useState, useEffect } from "react";
import { GET_RESUME } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

const WorkData = () => {
  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  const [workState, setWorkState] = useState([]);

  useEffect(() => {
    if (data) {
      setWorkState(data.getResume.work);
      console.log(workState);
    }
  }, [data]);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (resumeData.work) {
    return (
      <>
        <h2>Work</h2>
        {workState.map((single) => (
          <div>
            <div>
              {console.log(single)}
              <p>company: {single.company}</p>
              <p>roles: {single.roles}</p>
              <p>startDate: {single.startDate}</p>
              <p>endDate: {single.endDate}</p>
              <p>duties: {single.duties}</p>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h2>No Work Data</h2>
      </>
    );
  }
};

export default WorkData;
