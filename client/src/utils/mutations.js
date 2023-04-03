import { gql } from "@apollo/client";

export const CREATE_RESUME = gql`
  mutation createResume($resumeInput: ResumeInput!) {
    createResume(resumeInput: $resumeInput) {
      _id
      personal {
        fullName
        email
        phone
        location
        role
        objective
      }
      education {
        _id
        school
        program
        start
        end
      }
      work {
        _id
        company
        roles
        startDate
        endDate
        duties
      }
      skills {
        _id
        industryKnowledge
        toolsAndTechnologies
        languages
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login( $email: String!, $password: String! ) {
    login( email: $email, password: $password, ) {
      token
      user {
        _id
        username
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