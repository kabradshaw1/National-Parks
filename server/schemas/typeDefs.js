const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    saved: [Saved]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Saved {
    _id: ID
    name: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    all_saved(username: String): [Saved]
    saved(id: ID!): Saved
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePark(name: String!): Saved
  }
`;

module.exports = typeDefs;
