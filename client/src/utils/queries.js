import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      email
      bookCount
      savedBooks {
        bookId
        authors
        image  
        title
        description
        link
      }
    }
  }
`;