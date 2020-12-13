//IMPORTS
const express = require("express");

const { getUsers } = require("../../controller/main/userController");

//MIDDLEWARE
const router = express.Router();

//WORD ROUTES
//GET ALL
router.get("/", getUsers);

module.exports = router;
