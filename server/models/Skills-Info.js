const { Schema } = require("mongoose");

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
);

// const SkillsInfo = model("SkillsInfo", skillsInfoSchema);

module.exports = skillsInfoSchema;