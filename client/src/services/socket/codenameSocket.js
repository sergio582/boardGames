import { io } from "socket.io-client";
const socket = io("http://localhost:3800");

export { codenameJoin, codenameQuit, codenameGameUpdate, codenameUpdateParam };

async function codenameJoin(idGame) {
  await socket.emit("codenameJoin", { id_game: idGame });
  return true;
}

async function codenameQuit(idGame) {
  await socket.emit("codenameQuit", { id_game: idGame });
  return true;
}

async function codenameUpdateParam(idGame) {
  await socket.emit("codenameUpdateParam", { id_game: idGame });
  return true;
}

function codenameGameUpdate(id, callback) {
  socket.on("codename_" + id, ({ refresh }) => callback(null, refresh));
}
