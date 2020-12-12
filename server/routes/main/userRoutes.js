//IMPORTS
const express = require("express");
const User = require("../../model/main/User");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", async (req, res) => {
  try {
    var users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

//GET BY ID MONGO
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

//POST NEW
router.post("/", async (req, res) => {
  const user = new User({
    pseudo: req.body.pseudo,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const userSave = await user.save();
    res.json(userSave);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE BY ID
router.delete("/:id", async (req, res) => {
  try {
    const userRemove = await User.deleteOne({ _id: req.params.id });
    res.json(userRemove);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
