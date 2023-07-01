const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 12,
      minLength: 4,
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      maxLength: 20,
      minLength: 4,
      trim: true
    },
  }
);

module.exports = mongoose.model("User", UserSchema);
