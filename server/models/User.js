const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    saved: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Saved',
      }
    ],
    // I've left in the examples for both projects we've done with mern.
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Thought'
    //   }
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   }
    // ]
    // savedBooks: [bookSchema],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// This was used in both the book and social apps.
// userSchema.virtual('bookCount').get(function () {
//   return this.savedBooks.length;
// });

const User = model('User', userSchema);

module.exports = User;