const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    location: {
      city: String,
      country: String
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
