import { io } from "socket.io-client";
const socket = io("http://localhost:3800");

export { codenameJoin, codenameRecivePlayer };

function codenameJoin(idGame, idUser) {
  socket.emit("codenameJoin", { id_game: idGame, id_user: idUser });
}

function codenameRecivePlayer(id, callback) {
  socket.on("codename_" + id, ({ player_join }) => callback(null, player_join));
}
