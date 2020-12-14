const Game = require("../../model/codename/GameCodeName");

exports.getGames = (req, res) => {
  Game.find({}, (err, games) => {
    err === null ? res.json(games) : res.json({ message: err });
  });
};

exports.getGameById = (req, res) => {
  Game.findById(req.params.id)
    .then((game) => {
      game !== null ? res.json({ success: true, result: game }) : res.json({ error: "Partie non trouvé !" });
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

exports.deleteGame = function (req, res) {
  Game.deleteOne({ _id: req.params.id })
    .then((game) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

exports.updateGame = function (req, res) {
  Game.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((game) => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ error: err });
    });
};
