const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    location: {
      city: String,
      country: String
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: "Product"
  }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
