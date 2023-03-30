const { Schema } = require('mongoose');

const workSchema = new Schema(
    {        
        company:  { type: String },    
        role: { type: String },    
        start: { type: String },    
        end: { type: String },    
        duties: { type: String },           
    },   
);


module.exports = workSchema;