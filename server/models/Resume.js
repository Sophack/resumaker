const { Schema, model } = require("mongoose");

const personalSchema = require("./Personal");
const educationScema = require("./Education");
const workSchema = require("./Work");
const skillsSchema = require("./Skills");

const resumeSchema = new Schema(
  {
    name: { type: String },
    color: { type: String },
    personal: [personalSchema],
    education: [educationScema],
    work: [workSchema],
    skills: [skillsSchema],
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
