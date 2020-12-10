//IMPORTS
const express = require("express");
const Word = require("../model/Word");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", async (req, res) => {
  try {
    var words = await Word.find();
    res.json(words);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//GET BY ID MONGO
// router.get("/:id", async (req, res) => {
//   try {
//     const word = await Word.findById(req.params.id);
//     res.json(word);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//GET BY REAL ID
router.get("/:id", async (req, res) => {
  try {
    const word = await Word.find({ id: req.params.id });
    res.json(word);
  } catch (err) {
    res.json({ message: err });
  }
});

//POST NEW
router.post("/", async (req, res) => {
  const word = new Word({
    id: req.body.id,
    word: req.body.word,
  });
  try {
    const wordSave = await word.save();
    res.json(wordSave);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE BY ID
router.delete("/:id", async (req, res) => {
  try {
    const wordRemove = await Word.deleteOne({ _id: req.params.id });
    res.json(wordRemove);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
