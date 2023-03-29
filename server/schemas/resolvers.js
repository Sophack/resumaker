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


        saveBook: async (parent, { bookData }, context) => {
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
        //Change when front end input fields complete
        createResume: async (parent, {resumeInput}, context) => {
            // if (context.user) {


                const resume = await Resume.create(
                    {...resumeInput});
                await User.findByIdAndUpdate(
                    {_id: "6423cb096e5f8b10581fb587"},
                    {$push: {resume: resume._id}},
                    {new: true}
                );

                return resume;
            // }
            // throw new AuthenticationError("Login!");
        },
    },
};

module.exports = resolvers;