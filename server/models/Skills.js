const { Schema } = require("mongoose");

const skills = new Schema({
  industryKnowledge: {
    type: String,
  },
  toolsAndTechnologies: {
    type: String,
  },
  languages: {
    type: String,
  },
  transferableSkills: {
    type: String,
  },
});

module.exports = skills;
