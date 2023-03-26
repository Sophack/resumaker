const { Schema, model } = require('mongoose');

const workSchema = new Schema(
    {        
        company:  { type: String },    
        role: { type: String },    
        start: { type: String },    
        end: { type: String },    
        duties: { type: String },           
        resume: {
            type: Schema.Types.ObjectId, //we can make a reference with "users" collection
            ref: "resumes",
        },
    },   
);


const Work = model("Work", workSchema);

module.exports = Work;