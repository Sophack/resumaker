const { Schema, model } = require("mongoose");

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
  transferableSkills: {
    type: String,
  },
  resume_id: {
    type: Schema.Types.ObjectId,
    ref: "Resume",
  },
});

const Skills = model("Skills", skillsSchema);

module.exports = Skills;
