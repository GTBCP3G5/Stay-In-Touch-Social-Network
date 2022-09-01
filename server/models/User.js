const { Schema, model } = require("mongoose");
// use bcrypt for password stuff
const bcrypt = require("bcrypt");
// imports email validator from the validator npm
const isEmail = require("validator/lib/isEmail");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email address"],
  },
  // github username
  github: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // user's post referencing the Post.js file schema
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  // user's list of friends
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // user's favorited posts
  favorites: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});
// [this]

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
