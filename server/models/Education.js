const { Schema } = require("mongoose");

const education = new Schema(
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

module.exports = education;
