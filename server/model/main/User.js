const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  pseudo: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
