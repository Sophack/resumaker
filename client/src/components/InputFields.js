<>
<Box id="form-container">
  <div id="form-tabs">
    <Tabs
      value={tabValue}
      onChange={handleTabChange}
      aria-label="Form Tabs"
    >
      <Tab
        className="tab-personal"
        icon={userIcon}
        aria-label="Personal"
        {...a11yProps(0)}
      />
      <Tab
        className="tab-education"
        icon={gradCapIcon}
        aria-label="Education"
        {...a11yProps(1)}
      />
      <Tab
        className="tab-work"
        icon={briefcaseIcon}
        aria-label="Work"
        {...a11yProps(2)}
      />
      <Tab
        className="tab-skills"
        icon={clipboardIcon}
        aria-label="Skills"
        {...a11yProps(3)}
      />
    </Tabs>
  </div>
  <div className="form-box">
    <TabPanel value={tabValue} index={0}>
      <FormControl style={{ width: "90%" }}>
        <TextField
          label="Full name"
          name="fullName"
          value={personalState.fullName}
          key={`fullName-${personalState.fullName}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Role"
          name="role"
          value={personalState.role}
          key={`role-${personalState.role}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Location"
          name="location"
          value={personalState.location}
          key={`location-${personalState.location}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Email"
          name="email"
          value={personalState.email}
          key={`email-${personalState.email}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Phone number"
          name="phone"
          value={personalState.phone}
          key={`phone-${personalState.phone}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="Website"
          name="website"
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="LinkedIn"
          name="linkedin"
          onChange={(e) => e.target.value}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          label="GitHub"
          name="github"
          onChange={(e) => e.target.value}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
        <TextField
          multiline
          rows={5}
          label="Career objective"
          name="objective"
          value={personalState.objective}
          key={`objective-${personalState.objective}`}
          onChange={handlePersonalInfoChange}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: "20px" }}
        />
      </FormControl>
    </TabPanel>
  </div>

  <div className="form-box">
    <TabPanel value={tabValue} index={1}>
      <FormControl style={{ width: "90%" }}>
        <TextField
          label="School"
          name="school"
          value={educationState.school}
          onChange={handleEducationChange}
        />
        <TextField
          label="Program"
          name="program"
          value={educationState.program}
          onChange={handleEducationChange}
        />
        <TextField
          label="Start"
          name="start"
          value={educationState.start}
          onChange={handleEducationChange}
        />
        <TextField
          label="End"
          name="end"
          value={educationState.end}
          onChange={handleEducationChange}
        />
      </FormControl>
    </TabPanel>
  </div>

  <div className="form-box">
    <TabPanel value={tabValue} index={2}>
      <FormControl style={{ width: "90%" }}>
        <TextField
          label="Company"
          name="company"
          value={workState.company}
          onChange={handleWorkChange}
        />
        <TextareaAutosize
          aria-label="empty textarea"
          name="roles"
          value={workState.roles}
          onChange={handleWorkChange}
        />
        <TextField
          label="Start"
          name="startDate"
          valu={workState.startDate}
          onChange={handleWorkChange}
        />
        <TextField
          label="End"
          name="endDate"
          value={workState.endDate}
          onChange={handleWorkChange}
        />
        <TextareaAutosize
          aria-label="empty textarea"
          name="duties"
          value={workState.duties}
          onChange={handleWorkChange}
        />
      </FormControl>
    </TabPanel>
  </div>

  <div className="form-box">
    <TabPanel value={tabValue} index={3}>
      <FormControl>
        <h3 style={{ marginTop: "15px" }}>Skills</h3>
      </FormControl>
    </TabPanel>
  </div>
</Box>
{/* <div id='button-container'>
        <FormControl>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Save
        </Button>
        </FormControl> 
    </div>  */}
</>