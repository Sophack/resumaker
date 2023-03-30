const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    me: User
    getResume: Resume
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    createResume(resumeInput: ResumeInput!): Resume
  }

  type User {
    _id: ID!
    email: String
    resume: Resume
  }

  type Resume {
    _id: ID
    name: String
    color: String
    personal: [Personal]
    education: [Education]
    work: [Work]
    skills: [Skills]
  }

  input ResumeInput{
    name: String
    color: String    
    personal: [personalInput]
    education: [educationInput]
    work: [workInput]
    skills: [skillsInput]
  }

  input personalInput {
    fullName: String
    email: String
    phone: String
    location: String
    role: String
    objective: String
  }

  input educationInput {
    school: String
    program: String
    start: String
    end: String
  }

  input workInput {
    company: String
    role: String
    start: String
    end: String
    duties: String
  }

  input skillsInput {
    industryKnowledge: [String]
    toolsAndTechnologies: [String]
    languages: [String]
    transferableSkills: [String]
  }

  type Personal {
    fullName: String
    email: String
    phone: String
    location: String
    role: String
    objective: String
  }

  type Education {
    _id: ID
    school: String
    program: String
    start: String
    end: String
  }

  type Work {
    _id: ID
    company: String
    role: String
    start: String
    end: String
    duties: String
  }

  type Skills {
    id: ID!
    industryKnowledge: [String]
    toolsAndTechnologies: [String]
    languages: [String]
    transferableSkills: [String]
  }
  
  type Auth{
    token: ID!
    user: User
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUserStripe(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;