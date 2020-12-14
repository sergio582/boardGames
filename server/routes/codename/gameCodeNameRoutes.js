//IMPORTS
const express = require("express");

const { getGames, getGameById, createGame, deleteGame, updateGame } = require("../../controller/codename/gameCodeNameController");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", getGames);

//GET BY REAL ID
router.get("/:id", getGameById);

//POST GAME
router.post("/", createGame);

//DELETE GAME
router.delete("/:id", deleteGame);

//UPDATE GAME
router.put("/:id", updateGame);

module.exports = router;
