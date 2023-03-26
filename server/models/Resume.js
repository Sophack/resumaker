const { Schema, model } = require('mongoose');

const resumeSchema = new Schema(
    {
        color: {type: String},
        education: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Education',
            },
        ],
        name: { type: String},
        work: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Work',    
            }
        ],
        user: {
            type: Schema.Types.ObjectId, //we can make a reference with "users" collection
            ref: "User",
        },
    },   
);


const Resume = model("Resume", resumeSchema);

module.exports = Resume;