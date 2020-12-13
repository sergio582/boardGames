const mongoose = require("mongoose");

const wordSchema = mongoose.Schema({
  id: String,
  name: String,
  num_players: Number,
  admin: String,
  players: Array,
});

module.exports = mongoose.model("GameCodeName", wordSchema);
