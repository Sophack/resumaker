const { Schema, model } = require("mongoose");

const personal = require("./Personal");
const education = require("./Education");
const experience = require("./Experience");
const skills = require("./Skills");

const resumeSchema = new Schema({
  resumeId: [
    {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  ],
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  personal: [personal],
  education: [education],
  experience: [experience],
  skills: [skills],
});

const Resume = model("Resume", resumeSchema);

module.exports = Resume;
