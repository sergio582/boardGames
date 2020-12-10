const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv/config");

//ROUTES
const wordRoutes = require("./routes/wordRoutes");

//MIDDLEWARE
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/word", wordRoutes);

//DB
mongoose.connect(process.env.MONGO_DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("db connecter !"));

//SERVER START
app.listen(3800);
