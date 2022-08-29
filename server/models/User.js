const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import schema from other models here...

const userSchema = new Schema(
  {

    // userSchema will go here...

  }
);

const User = model('User', userSchema);

module.exports = User;