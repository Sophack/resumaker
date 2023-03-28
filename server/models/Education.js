const { Schema, model } = require("mongoose");

const educationSchema = new Schema({
  programName: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  resume_id: {
    type: Schema.Types.ObjectId,
    ref: "Resume",
  },
});

const Education = model("Education", educationSchema);

module.exports = Education;
