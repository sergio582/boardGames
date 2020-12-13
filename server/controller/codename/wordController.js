const Word = require("../../model/codename/Word");

exports.getWords = (req, res) => {
  Word.find({}, (err, words) => {
    err === null ? res.json(words) : res.json({ message: err });
  });
};

exports.getWordById = (req, res) => {
  Word.find({ id: req.params.id }, (err, word) => {
    err === null ? res.json(word) : res.json({ message: err });
  });
};
