//IMPORTS
const express = require("express");

const { getGames, getGameById, createGame } = require("../../controller/codename/gameCodeNameController");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", getGames);

//GET BY REAL ID
router.get("/:id", getGameById);

//POST GAME
router.post("/", createGame);

module.exports = router;
