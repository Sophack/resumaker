const { AuthenticationError } = require("apollo-server-express");
const { User, Resume} = require("../models");
const { signToken } = require("../utils/auth");

//import stripe with a dummy api key on resolvers.js 
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
    //queries for stripe payment 
    categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('category');
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      },
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
          //products & associated 
        const line_items = [];
  
        const { products } = await order.populate('products');
        //iterate through all the products 
        for (let i = 0; i < products.length; i++) {
          //define the products that will go through the payments 
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
          });
          //create the price as a stripe instance (can just pass id instead of all the info)
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
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
                //Get the resume id from user schema
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

        //stripe mutations 
        addUserStripe: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          
    updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateProduct: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;
  
        return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    },
};

module.exports = resolvers;