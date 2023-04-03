const { Schema } = require("mongoose");

const skillsSchema = new Schema({
  industryKnowledge: {
    type: String,
  },
  toolsAndTechnologies: {
    type: String,
  },
  languages: {
    type: String,
  },
});

// const Skills = model("Skills", skillsSchema);

module.exports = skillsSchema;
