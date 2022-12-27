const { gql } = require('apollo-server-express');
// We need to add stuff to a most of these and add more as we detail what the webpage will display
// I put the examples we have down at the bottom.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// examples from deep-thoughts
// type User {
//   _id: ID
//   username: String
//   email: String
//   friendCount: Int
//   thoughts: [Thought]
//   friends: [User]
// }

// type Thought {
//   _id: ID
//   thoughtText: String
//   createdAt: String
//   username: String
//   reactionCount: Int
//   reactions: [Reaction]
// }

// type Reaction {
//   _id: ID
//   reactionBody: String
//   createdAt: String
//   username: String
// }

// type Auth {
//   token: ID!
//   user: User
// }

// type Query {
//   me: User
//   users: [User]
//   user(username: String!): User
//   thoughts(username: String): [Thought]
//   thought(_id: ID!): Thought
// }

// type Mutation {
//   login(email: String!, password: String!): Auth
//   addUser(username: String!, email: String!, password: String!): Auth
//   addThought(thoughtText: String!): Thought
//   addReaction(thoughtId: ID!, reactionBody: String!): Thought
//   addFriend(friendId: ID!): User
// }

// examples from book search project
// type User {
//   _id: ID
//   username: String
//   email: String
//   bookCount: Int
//   Books: [Book]
// }

// type Book {
//   bookId : String
//   authors: String
//   description: String
//   title:
//   image:
//   link:
// }

// type Auth {
//   token: ID!
//   user: User
// }

// type Book {
//   bookId: String
//   authors: [String]
//   description: String
//   title: String
//   image: String
//   link: String
// }

// input savedBook {
//   description: String
//   title: String
//   bookId: String
//   image: String
//   link: String
//   authors: [String]
// }


// type Query {
//   me: User
// }

// type Mutation {
//   login(email: String!, password: String!): Auth
//   addUser(username: String!, email: String!, password: String!): Auth
//   saveBook(input: savedBook!): User
//   removeBook(bookId: ID!): User

