const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    me: User
    getResume: Resume
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveBook(bookData: bookInput! ): User
    removeBook(bookId: String!): User
    createResume(resumeInput: ResumeInput!): Resume

  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    resume: Resume
  }

  type Resume {
    _id: ID
    color: String
    education: [Education]
    name: String
    work: [Work]
  }

  input ResumeInput{
    color: String
    education: [educationInput]
    name: String
    work: [workInput]
  }

  input workInput {
    company: String
    role: String
    start: String
    end: String
    duties: String
  }

  input educationInput {
    school: String
    program: String
    start: String
    end: String
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
  
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  input bookInput{
    description: String
    title: String!
    bookId: String!
    image: String
    link: String
    authors: [String]
  }

  type Auth{
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;