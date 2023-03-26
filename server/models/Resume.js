const { Schema } = require("mongoose");

const personal = require("./Personal");
const education = require("./Education");
const experience = require("./Experience");
const skills = require("./Skills");

const resume = new Schema(
  {
    personal: personal,
    education: [education],
    experience: [experience],
    skills: [skills],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = resume;
