const { Schema, model } = require("mongoose");

const experienceInfoSchema = new Schema(
    {
        role: {
            type: String,
        },
        company: {
            type: String,
        },
        startDate: {
            type: Date,
        }, //format on query? Month/YYYY
        endDate: {
            type: Date,
        }, //format on query? Month/YYYY
        employmentDuration: {
            type: String, //Should it be number of years? But what happens with months?
        },
        description: {
            type: String,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const ExperienceInfo = model("ExperienceInfo", experienceInfoSchema);

module.exports = ExperienceInfo;