const { AuthenticationError } = require("apollo-server-express");
const { User, Resume, Education, Work } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select("-__v -password")
                .populate('books')
                .populate('resumes');              
                return userData;
            };
            throw new AuthenticationError("Please Login!");
        },
    }, 

    Mutation: {
        addUser: async ( parent, args ) => {
            try {
                const user = await User.create(args);
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


        saveBook: async (parent, { bookData }, context) => {
            console.log(context.user);
            if ( context.user ) {
                const updatedUser = await User
                    .findOneAndUpdate(
                        { _id: context.user._id }, 
                        { $addToSet: { savedBooks: bookData }},
                        { new: true }
                    );
                return updatedUser;
            };
            throw new AuthenticationError("Please Login");
        },

        removeBook: async (parent, { bookId }, context) => {
            console.log(context.book);
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } }},
                    { new: true,  runValidators: true }
                );
                return updatedUser;
            };
            throw new AuthenticationError("Please Login!");
        },
        createResume: async (parent, {resumeInput}, context) => {
            // if (context.user) {
                console.log(resumeInput.name);
                const newResume = new Resume ({
                    color: resumeInput.color,                    
                    user: context.user._id,
                });
                return newResume;
            // }
            // throw new AuthenticationError("Login!");
        },
        createEducation: async (parent, {education}, context) => {
            if(context.user) {
                const createEducation = new Education({
                    education,
                    resume: resume.id,
                });
                const education = await createEducation.save();
                return education;
            }
        }
    },
};

module.exports = resolvers;