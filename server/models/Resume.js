// We probably could get rid of this, but here it is for now...

const { Schema, model } = require("mongoose");

const PersonalInfo = require('./Personal-Info');
const EducationInfo = require('./Education-Info');
const ExperienceInfo = require('./Experience-Info');
const SkillsInfo = require('./Skills-Info');

const resumeSchema = new Schema(
    {
        personal: [PersonalInfo],
        education: [EducationInfo],
        experience: [ExperienceInfo],
        skills: [SkillsInfo]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Resume = model("Resume", resumeSchema);

module.exports = Resume;