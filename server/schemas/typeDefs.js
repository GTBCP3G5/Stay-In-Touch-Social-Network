// integrating graphicql into our express app
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    ghub: String
    password: String!
    posts: [Post]
    friends: [Friend]
  }

  type Post {
    _id: ID!
    postText: String!
    postAuthor: String!
    createdAt: String!
    comments: [Comment]
  }
  type Comment {
    _id: ID!
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Friend {
    _id: ID!
    username: String!
    gitHub: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    friends: [Friend]
    friend(username: String): Friend
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    updatePost(postId: ID!, postText: String!): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    updateComment(postId: ID!, commentId: ID!, commentText: String!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
