const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//ROUTES
const authRoutes = require("./routes/main/authRoutes");
const userRoutes = require("./routes/main/userRoutes");
const wordRoutes = require("./routes/codename/wordRoutes");
const gameCodeNameRoutes = require("./routes/codename/gameCodeNameRoutes");

//MIDDLEWARE
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/word", wordRoutes);
app.use("/codename/game", gameCodeNameRoutes);

//DB
mongoose.connect(process.env.MONGO_DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("db connecter !"));

//SERVER START
app.listen(3800);
