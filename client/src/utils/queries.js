import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
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
        industryKnowledge
        toolsAndTechnologies
        languages
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
