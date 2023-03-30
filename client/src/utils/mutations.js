import { gql } from "@apollo/client";

export const CREATE_RESUME = gql`
mutation Mutation($resumeInput: ResumeInput!) {
  createResume(resumeInput: $resumeInput) {
    resume {
      personal {
        fullName
        email
        phone
        location
        role
        objective
      }
      work {
        company
        role
        start
        end
        duties
      }
      education {
        school
        program
        start
        end
      }
      skills {
        industryKnowledge
        languages
        toolsAndTechnologies
        transferableSkills
      }
    }
  }
}
`

export const LOGIN_USER = gql`
  mutation login( $email: String!, $password: String! ) {
    login( email: $email, password: $password, ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( $email: String!, $password: String! ) {
    addUser( email: $email, password: $password ) {
      token
      user {
        _id
        username
      }
    }
  }
`;