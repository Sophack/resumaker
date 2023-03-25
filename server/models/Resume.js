const { Schema } = require('mongoose');

const PersonalInfo = require("./Personal-Info");
const EducationInfo = require("./Education-Info");
const ExperienceInfo = require("./Experience-Info");
const SkillsInfo = require("./Skills-Info");

const resumeSchema = new Schema(
  {
    personal: [PersonalInfo],
    education: [EducationInfo],
    experience: [ExperienceInfo],
    skills: [SkillsInfo],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// const Resume = mongoose.model("Resume", resumeSchema);

module.exports = resumeSchema;
