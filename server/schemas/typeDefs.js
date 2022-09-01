// integrating graphicql into our express app
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    github: String
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
    github: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    friends: [Friend]
    me: User
    favorites(userId: ID!): [Post]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      github: String
    ): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    updatePost(_id: ID!, postText: String!): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, commentText: String!, commentAuthor: String!): Post
    updateComment(postId: ID!, commentId: ID!, commentText: String!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addFriend(userId: ID!, friendId: ID!): User
    removeFriend(userId: ID!, friendId: ID!): User
  }
`;

module.exports = typeDefs;
