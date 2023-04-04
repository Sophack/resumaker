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
    username: String
    email: String
    resume: Resume
  }

  type Resume {
    _id: ID
    personal: [Personal]
    education: [Education]
    work: [Work]
    skills: [Skills]
  }

  input ResumeInput{
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
    roles: String
    startDate: String
    endDate: String
    duties: String
  }

  input skillsInput {
    industryKnowledge: String
    toolsAndTechnologies: String
    languages: String
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
    roles: String
    startDate: String
    endDate: String
    duties: String
  }

  type Skills {
    _id: ID!
    industryKnowledge: String
    toolsAndTechnologies: String
    languages: String
  }
  
  type Auth{
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;