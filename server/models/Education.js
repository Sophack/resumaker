const { Schema } = require('mongoose');

const educationSchema = new Schema(
    {        
        school:  { type: String },    
        program: { type: String },
        start: { type: String },    
        end: { type: String },           
    },   
);


module.exports = educationSchema;