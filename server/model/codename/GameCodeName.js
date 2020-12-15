const mongoose = require("mongoose");

const codeNameGameSchema = mongoose.Schema({
  id: String,
  name: String,
  num_players: Number,
  admin: Object,
  players: Array,
  deck: Array,
});

module.exports = mongoose.model("GameCodeName", codeNameGameSchema);
