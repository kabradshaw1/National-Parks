const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const savedSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true
    }
  }
)

const Saved = model('Saved', savedSchema)

module.exports = Saved;