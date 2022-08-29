const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    // Query logic will go here...

  },

  Mutation: {

    // Mutation logic will go here...

  },
};

module.exports = resolvers;