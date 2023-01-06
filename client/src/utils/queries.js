import { gql } from '@apollo/client';

export const QUERY_SAVED = gql`
  query saved($username: String) {
    saved(username: $username) {
      _id
      name
      username
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      saved {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      saved {
        _id
        name
      }
    }
  }
`;




