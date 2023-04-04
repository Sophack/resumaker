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

    Mutation: {
        addUser: async ( parent, args ) => {
            try {   
                const createdUser = {username: args.email, email: args.email, password: args.password}
                console.log(createdUser)
                const user = await User.create(createdUser);
                const token = signToken(user);
                return { token, user };                
            } catch (error) {
                console.log(error);                
            }
        },
        login: async ( parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Invliad Username");
            };

            const correctPW = await user.isCorrectPassword(password);
            if (!correctPW) {
                throw new AuthenticationError("Incorrect Password!");
            };

            const token = signToken(user);
            return { token, user };
        },     
        createResume: async (parent, {resumeInput}, context) => {
            if (context.user) {
                const user = await User.findById({_id: context.user._id});                
                const resumeID = user.resume[0];
                if(resumeID){
                    //Remove the sepcific resume from user schema
                    await User.findByIdAndUpdate(
                        {_id: context.user._id},
                        {$unset: {resume: resumeID}}                    
                    );  
                    //Delete the found resume from the resumes
                    await Resume.findByIdAndDelete({_id: resumeID});
                }               
                //Create the resume and add to user
                const resume = await Resume.create(
                    {...resumeInput});
                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$push: {resume: resume._id}},
                    {new: true}
                );
                return resume;
            }
            throw new AuthenticationError("Login!");
        },
    },
};

module.exports = resolvers;