const { Schema, model } = require("mongoose");

const skillsInfoSchema = new Schema(
    {
        industryKnowledge: {
            type: String,
        },
        toolsAndTechnologies: {
            type: String,
        },
        languages: {
            type: String,
        },
        transferableSkills: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const SkillsInfo = model("SkillsInfo", skillsInfoSchema);

module.exports = SkillsInfo;