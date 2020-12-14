const Game = require("../../model/codename/GameCodeName");

exports.getGames = (req, res) => {
  Game.find({}, (err, games) => {
    err === null ? res.json(games) : res.json({ message: err });
  });
};

exports.getGameById = (req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      res.json({ success: true, result: game });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

exports.createGame = function (req, res) {
  let new_game = new Game(req.body);
  new_game
    .save()
    .then((game) => {
      res.json({ success: true, result: game });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};
