//IMPORTS
const express = require("express");

const { getUsers, getUser } = require("../../controller/main/userController");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
