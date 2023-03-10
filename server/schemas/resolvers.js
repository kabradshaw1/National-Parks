const { AuthenticationError } = require('apollo-server-express');
const { User, Saved } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('saved');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('saved')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('saved')
    },
    all_saved: async (parent, { username }) => {
      console.log(username)
      const params = username ? { username } : {};
      return Saved.find(params).sort({ createdAt: -1 });
    },
    saved: async (parent, { _id }) => {
      return Saved.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveSearch: async (parent, args, context) => {
      if (context.user) {
        const saved = await Saved.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { saved: saved._id } },
          { new: true }
        );

        return saved;
      }
      
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
