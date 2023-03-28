const { Schema, model } = require("mongoose");

const personalSchema = require("./Personal");
// const education = require("./Education");
// const experience = require("./Experience");
const skillsSchema = require("./Skills");

const resumeSchema = new Schema(
  {
    personal: [personalSchema],
    skills: [skillsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
