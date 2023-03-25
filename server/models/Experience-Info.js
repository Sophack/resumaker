const { Schema } = require("mongoose");

const experienceInfoSchema = new Schema(
    {
        role: {
            type: String,
        },
        company: {
            type: String,
        },
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        },
        employmentDuration: {
            type: String, //Should it be number of years? But what happens with months?
        },
        description: {
            type: String,
        }
    },
);

// const ExperienceInfo = model("ExperienceInfo", experienceInfoSchema);

module.exports = experienceInfoSchema;