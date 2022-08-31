// Authentication Purposes
const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // GET routes for users
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    // GET all posts
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).populate("comments");
    },
    // Get single post by ID
    post: async (parent, { _id }) => {
      return await Post.findById({ _id });
    },
  },

  Mutation: {
    // SIGN UP ROUTE
    addUser: async (parent, { username, email, password, gitHub }) => {
      // Creating the user
      const user = await User.create({ username, email, password, gitHub });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    // ROUTES FOR POSTS
    addPost: async (parent, { postText, postAuthor }) => {
      const post = await Post.create({ postText, postAuthor });

      await Post.findOneAndUpdate(
        { username: postAuthor },
        { $addToSet: { posts: post._id } }
      );
      return post;
    },
    updatePost: async (parent, { _id, postText }) => {
      return await Post.findOneAndUpdate({ _id }, { postText }, { new: true });
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },

    // ROUTES FOR COMMENTS
    addComment: async (parent, { postId, commentText, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    updateComment: async (parent, { postId, commentId, commentText }) => {
      return await Post.findOneAndUpdate(
        { _id: postId, "comments._id": commentId },
        { "comments.$.commentText": commentText },
        { new: true }
      );
    },
    removeComment: async (parent, { postId, commentId }) => {
      return await Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },

    // userId is the USER itself
    // username belongs to the friend we want to add to our Friend List
    addFriend: async (parent, { userId, username }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $push: { friends: username } },
        { new: true }
      );
    },
    removeFriend: async (parent, { userId, username }) => {
      return await User.findOneAndDelete(
        { _id: userId },
        { $pull: { friends: { _id: username } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
