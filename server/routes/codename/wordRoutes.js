//IMPORTS
const express = require("express");

const { getWords, getWordById } = require("../../controller/codename/wordController");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", getWords);

//GET BY REAL ID
router.get("/:id", getWordById);

module.exports = router;
