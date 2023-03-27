const { gql } = require("apollo-server-express");

//should update Resume target the subdocs in resume first and then update, or will we need an update to happen across the board?
const typeDefs = gql`
  type Query {
    me(id: ID!): User
    resume(id: ID!): User
    personalInfo(user_id: ID!): Resume
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User

    createPersonalInfo(user_id: ID!, input: PersonalData): Resume
  }

  type User {
    _id: ID!
    username: String
    email: String
    savedResumes: Int
    resume_id: String
  }

  type Resume {
    resume_id: ID
    user_id: String
    personal: [PersonalInfo]
  }

  type PersonalInfo {
    user_id: ID
    resume_id: ID
    fullName: String
    email: String
    phone: String
    location: String
    role: String
    objective: String
  }

  input PersonalData {
    fullName: String
    email: String
    phone: String
    location: String
    role: String
    objective: String
  }
`;

module.exports = typeDefs;

// type Query {
//   me: User
//   getResume: Resume
// }
// type Mutation {
//   login(email: String!, password: String!): Auth

//   addUser(username: String!, email: String!, password: String!): Auth

//   saveResume(
//     input: [PersonalInfoInput]
//   ): User

//   updateResume(
//     ID: ID!
//     input: [PersonalInfoInput]
//   ): User
// }

// type User {
//   _id: ID!
//   username: String
//   email: String
//   savedResumes: Int
//   resume: [Resume]
// }

// type Resume {
//   personal: [PersonalInfo]
// }

// type PersonalInfo {
//   id: ID!
//   fullName: String
//   email: String
//   phone: String
//   location: String
//   role: String
//   objective: String
// }

// input PersonalInfoInput {
//   fullName: String
//   email: String
//   phone: String
//   location: String
//   role: String
//   objective: String
// }

// education: [EducationInfo]
// experience: [ExperienceInfo]
// skills: [SkillsInfo]
// }

// type PersonalInfo {
// id: ID!
// fullName: String
// email: String
// phone: String
// location: String
// role: String
// objective: String
// }

// input PersonalInfoInput {
// fullName: String
// email: String
// phone: String
// location: String
// role: String
// objective: String
// }

// type EducationInfo {
// id: ID!
// programName: String
// institution: String
// startDate: String
// endDate: String
// }

// input EducationInfoInput {
// programName: String
// institution: String
// startDate: String
// endDate: String
// }

// type ExperienceInfo {
// id: ID!
// role: String
// company: String
// startDate: String
// endDate: String
// employmentDuration: String
// description: String
// }

// input ExperienceInfoInput {
// role: String
// company: String
// startDate: String
// endDate: String
// employmentDuration: String
// description: String
// }

// type SkillsInfo {
// id: ID!
// industryKnowledge: String
// toolsAndTechnologies: String
// languages: String
// transferableSkills: String
// }

// input SkillsInfoInput {
// industryKnowledge: String
// toolsAndTechnologies: String
// languages: String
// transferableSkills: String
// }

// type Auth {
// token: ID!
// user: User
// }
// `;
