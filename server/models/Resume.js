const { Schema, model } = require('mongoose');

const educationScema = require('./Education');
const workSchema = require('./Work')

const resumeSchema = new Schema(
    {
        color: {type: String},
        education: [educationScema],
        name: { type: String},
        work: [workSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }  
);

const Resume = model('Resume', resumeSchema);

module.exports = Resume;