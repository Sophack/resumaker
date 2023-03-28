// NOTE: COPIED MOST from Lesson 23-Stripe
const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");
// const resume = require("./Resume.js");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    resume: [
      {
        type: Schema.Types.ObjectId,
        ref: "Resume",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual for saved resumes
userSchema.virtual("savedResumes").get(function () {
  return this.resume.length;
});

// // set up pre-save middleware to create password
// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const User = model("User", userSchema);

module.exports = User;
