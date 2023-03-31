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
        description
        title
        image
        link
      }
      resume {
        color
        education {
          school
          program
          start
          end
        }
        name
        work {
          company
          role
          start
          end
          duties
        }
      }
    }
  }
`;

export const GET_RESUME = gql`
  {
    getResume {
      _id
      color
      name
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
        role
        start
        end
        duties
      }
    }
  }
`;
