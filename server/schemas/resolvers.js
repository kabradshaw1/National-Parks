const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          // .populate('thoughts')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        // .populate('thoughts')
        // need help
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        // need help
        // .populate('thoughts')
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
    // need lots of help. This needs to contain our new updates to the database, so once we decide what else
    // we want in to display as either pages or components, we will need to define our responses here.  I

  //   addThought: async (parent, args, context) => {
  //     if (context.user) {
  //       const thought = await Thought.create({ ...args, username: context.user.username });

  //       await User.findByIdAndUpdate(
  //         { _id: context.user._id },
  //         { $push: { thoughts: thought._id } },
  //         { new: true }
  //       );

  //       return thought;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   addReaction: async (parent, { thoughtId, reactionBody }, context) => {
  //     if (context.user) {
  //       const updatedThought = await Thought.findOneAndUpdate(
  //         { _id: thoughtId },
  //         { $push: { reactions: { reactionBody, username: context.user.username } } },
  //         { new: true, runValidators: true }
  //       );

  //       return updatedThought;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   },
  //   addFriend: async (parent, { friendId }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $addToSet: { friends: friendId } },
  //         { new: true }
  //       ).populate('friends');

  //       return updatedUser;
  //     }

  //     throw new AuthenticationError('You need to be logged in!');
  //   }
  }

};

module.exports = resolvers;
