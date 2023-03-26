// const { AuthenticationError } = require("apollo-server-express");
const { User, Resume } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, { meId }) => {
      return await User.findOne({ meId });
    },
  },

    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        try {
          const user = await User.create({ username, email, password });
          // const token = signToken(user);
          return user; //add "token" back here
        } catch (error) {
          console.log(error);
        }
      },

      createResume: async (parent, { id, PersonalData }) => {
        //took out context
        //   if (user) {
        try {
          const createResume = await User.create({ id, PersonalData})
          return createResume;
        } catch (error) {
          console.log(error);
        }
        //   throw new AuthenticationError("Please Login");
      },
      //   },
    },
  };

module.exports = resolvers;

// getResume: () => Resume,

// getOneResume: async (parent, { meId, resume }) => {
//   return await User.findOne({ meId, resume });
  // throw new AuthenticationError("Your need to be logged in");
  // //   return await User.findById(args.id);

// const resolvers = {
//     Query: {
//         me: async (parent, args, context) => {
//             if (context.user) {
//                 const userData = await User.findOne({ _id: context.user._id })
//                 .select("-__v -password")
//                 .populate('books');
//                 return userData;
//             };
//             throw new AuthenticationError("Please Login!");
//         },
// getResume: async () => {
//   return await User.find({});
// },

//     },

//     Mutation: {
//         addUser: async ( parent, args ) => {
//             try {
//                 const user = await User.create(args);
//                 const token = signToken(user);
//                 return { token, user };
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         login: async ( parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 throw new AuthenticationError("Invliad Username");
//             };

//             const correctPW = await user.isCorrectPassword(password);
//             if (!correctPW) {
//                 throw new AuthenticationError("Incorrect Password!");
//             };

//             const token = signToken(user);
//             return { token, user };
//         },

//         saveBook: async (parent, { bookData }, context) => {
//             if ( context.user ) {
//                 const updatedUser = await User
//                     .findOneAndUpdate(
//                         { _id: context.user._id },
//                         { $addToSet: { savedBooks: bookData }},
//                         { new: true }
//                     );
//                 return updatedUser;
//             };
//             throw new AuthenticationError("Please Login");
//         },

//         removeBook: async (parent, { bookId }, context) => {
//             if (context.user) {
//                 const updatedUser = await User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $pull: { savedBooks: { bookId } }},
//                     { new: true,  runValidators: true }
//                 );
//                 return updatedUser;
//             };
//             throw new AuthenticationError("Please Login!");
//         },
//     },
// };
