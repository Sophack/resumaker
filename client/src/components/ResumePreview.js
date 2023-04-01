import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  TextArea,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const ResumePreview = (props) => {
  const { personal, education, work, skills } = props;

  return (
    <>
      {/* <Personal personal={personal}/>
      <Education education={education} />
      <Work work={work}/>
      <Skills skills={skills}/> */}
    </>
  );
};

export default ResumePreview;
