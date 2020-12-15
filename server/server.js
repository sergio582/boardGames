const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
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
mongoose.connect(process.env.MONGO_DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("database connected"));

//SOCKET IO
io.on("connection", (socket) => {
  console.log("socket io client connected");

  socket.on("codenameJoin", ({ id_game }) => {
    socket.broadcast.emit("codename_" + id_game, { refresh: "join" });
  });

  socket.on("codenameQuit", ({ id_game }) => {
    socket.broadcast.emit("codename_" + id_game, { refresh: "quit" });
  });

  socket.on("codenameUpdateParam", ({ id_game }) => {
    socket.broadcast.emit("codename_" + id_game, { refresh: "team_update" });
  });

  socket.on("disconnect", () => {
    console.log("socket io client diconnected");
  });
});

//SERVER START
server.listen(3800);
