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
          roles
          startDate
          endDate
          duties
        }
      }
    }
  }
`;

export const GET_RESUME = gql`
  {
    getResume {
      education {
        school
        program
        start
        end
      }
      personal {
        fullName
        email
        phone
        location
        role
        objective
      }
      skills {
        skill
      }
      work {
        company
        roles
        startDate
        endDate
        duties
      }
    }
  }
`;
