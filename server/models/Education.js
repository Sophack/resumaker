const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
    {        
        school:  { type: String },    
        program: { type: String },
        start: { type: String },    
        end: { type: String },           
        resume: {
            type: Schema.Types.ObjectId, //we can make a reference with "users" collection
            ref: "resumes",
        },
    },   
);


const Education = model("Education", educationSchema);

module.exports = Education;