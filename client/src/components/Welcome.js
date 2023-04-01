import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import Resume from "../pages/Resume";

export default function Welcome() {
  return (
    <>
      <section id="welcome-hero">
        <div className="bg-image">
          <Box id="welcome-box">
            <Typography component="h2">
              Create your own professional resume
            </Typography>
            <Typography component="p">
              In a few easy steps, create a beautiful resume of your own that
              highlights your skills and experience the best & become employment
              ready!
            </Typography>
              <Button component={Link} to="/resume" id="welcome-button">Make a resume!</Button>
          </Box>
        </div>
      </section>
    </>
  );
}
