const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    me: User
    getResume(_id: ID!): Resume
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput! ): User
    removeBook(bookId: String!): User
    createResume(resumeInput: ResumeInput): Resume
    createEducation(educationInput: EducationInput) : Resume
    createWork(workInput: WorkInput) : Resume
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Resume {
    id: ID
    color: String!
    education: [Education]!
    name: String!
    work: [Work]!
  }

  type Education {
    id:ID!
    school: String!
    program: String!
    start: String!
    end: String!
  }

  input EducationInput {
    school: String!
    program: String!
    start: String!
    end: String!
  }

  type Work {
    id: ID!
    company: String!
    role: String!
    start: String!
    end: String!
    duties: String!
  }
  
  input WorkInput {
    company: String!
    role: String!
    start: String!
    end: String!
    duties: String!
  }

  input ResumeInput{
    color: String
    name: String
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