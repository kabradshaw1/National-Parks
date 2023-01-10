import { gql } from '@apollo/client';

export const QUERY_ALL_SAVED = gql`
  query all_saved($username: String) {
    all_saved(username: $username) {
      _id
      searched
      createdAt
      username
    }
  }
`;
export const QUERY_SAVED = gql`
  query saved($id: ID!) {
    saved(_id: $id) {
      _id
      searched
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
        searched
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
        searched
      }
    }
  }
`;

