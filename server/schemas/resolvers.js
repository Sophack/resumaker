const { AuthenticationError } = require("apollo-server-express");
const { User, Resume} = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findById({ _id: context.user._id })
                    .select("-__v -password")
                    .populate('resumes');
                console.log(userData)              
                return userData;
            };
            throw new AuthenticationError("Please Login!");
        },
        getResume: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById({_id: context.user._id});
                const resumeID = user.resume[0];
                const resume = await Resume.findById({_id: resumeID});
                return resume;
            };
            throw new AuthenticationError("Please Login!");
        }

    }, 
};

module.exports = resolvers;