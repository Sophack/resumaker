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
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( $username: String!, $email: String!, $password: String! ) {
    addUser( username: $username, email: $email, password: $password ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: bookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    bookCount
    savedBooks {
      bookId
      authors
      image
      link
      title
      description
    }
  }
}
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

