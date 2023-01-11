import { gql } from '@apollo/client';

export const QUERY_ALL_SAVED = gql`
  query all_saved($username: String) {
    all_saved(username: $username) {
      _id
      searchInput
      createdAt
      username
    }
  }
`;
export const QUERY_SAVED = gql`
  query saved($username: String) {
    saved(username: $username) {
      _id
      searchInput
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
        searchInput
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
        searchInput
      }
    }
  }
`;

