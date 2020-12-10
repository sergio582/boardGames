const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
  id: Number,
  word: String,
});

module.exports = mongoose.model("Word", wordSchema);
