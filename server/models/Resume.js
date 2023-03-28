const { Schema, model } = require("mongoose");

// const personal = require("./Personal");
// const education = require("./Education");
// const experience = require("./Experience");
// const skills = require("./Skills");

const resumeSchema = new Schema({
  personal: [
    {
      type: Schema.Types.ObjectId,
      ref: "Personal",
    },
  ],
  education: [
    {
      type: Schema.Types.ObjectId,
      ref: "Education",
    },
  ],
  experience: [
    {
      type: Schema.Types.ObjectId,
      ref: "Experience",
    },
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skills",
    },
  ],
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
