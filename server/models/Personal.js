const { Schema } = require("mongoose");

const personalSchema = new Schema({
  fullName: { type: String, required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    // match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/],
  },
  location: {
    type: String, //Should we add in address,city, province/state, country?
  },
  role: {
    type: String,
  },
  objective: {
    type: String,
  },
});

// const Personal = model("Personal", personalSchema);

module.exports = personalSchema;
