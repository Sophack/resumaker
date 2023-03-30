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


export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;