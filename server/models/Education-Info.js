const { Schema } = require("mongoose");

const educationInfoSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// const EducationInfo = model("EducationInfo", educationInfoSchema);

module.exports = educationInfoSchema;
