const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const savedSchema = new Schema(
  {
    searchInput: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    }, 
    createAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Saved = model('Saved', savedSchema);

module.exports = Saved;