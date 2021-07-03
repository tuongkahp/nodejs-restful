const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    phoneNumber: String,
    avatarUrl: String,
    address: String,
    gender: Number,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
