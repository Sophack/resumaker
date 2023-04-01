const { Schema } = require('mongoose');

const workSchema = new Schema(
    {        
        company:  { type: String },    
        roles: { type: String },    
        startDate: { type: String },    
        endDate: { type: String },    
        duties: { type: String },           
    },   
);


module.exports = workSchema;