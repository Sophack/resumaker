const { Schema } = require("mongoose");

const experience = new Schema({
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
});

module.exports = experience;
