const { Schema } = require("mongoose");

const personal = new Schema({
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ], 
  resume_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resume",
    },
  ], 
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/],
  },
  location: {
    type: String, //Should we add in address,city, province/state, country?
  },
  role: {
    type: String,
  },
  objective: {
    type: String,
    required: true,
  },
});

module.exports = personal;
