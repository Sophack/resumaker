import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import ResumeFields from "./ResumeBuilder";

import PDFButton from './components/ButtonPDF';
import DonateButton from './components/DonateButton';
import Auth from "../utils/auth";
import { useMutation } from "@apollo/react-hooks";

const Welcome = () => {
  const [show, setShow] = useState(false);

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
          </Box>
          {show ? <ResumeFields /> : null}
          <Button id="welcome-button" onClick={() => setShow(!show)}>
            Make a resume!
          </Button>

        </div>
      </section>
    </>
  );
};

export default Welcome;
