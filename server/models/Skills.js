const { Schema } = require("mongoose");

const skillsSchema = new Schema({
  skill: {
    type: String,
  },
});

// const Skills = model("Skills", skillsSchema);

module.exports = skillsSchema;
