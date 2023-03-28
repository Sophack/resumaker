const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({
  role: {
    type: String,
  },
  company: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  employmentDuration: {
    type: String, //Should it be number of years? But what happens with months?
  },
  description: {
    type: String,
  },
  resume_id: {
    type: Schema.Types.ObjectId,
    ref: "Resume",
  },
});

const Experience = model("Experience", experienceSchema);

module.exports = Experience;
