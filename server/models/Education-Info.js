const { Schema, model } = require("mongoose");

const educationInfoSchema = new Schema(
    {
        programName: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
        },
        startDate: {
            type: Date,
        }, //format on query? Month/YYYY
        endDate: {
            type: Date,
        }, //format on query? Month/YYYY
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const EducationInfo = model("EducationInfo", educationInfoSchema);

module.exports = EducationInfo;