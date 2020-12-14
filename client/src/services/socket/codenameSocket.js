import { io } from "socket.io-client";
const socket = io("http://localhost:3800");

export { codenameJoin, codenameReciveMessage };

function codenameJoin(id) {
  socket.emit("codenameJoin", { id: id });
}

function codenameReciveMessage(id, callback) {
  socket.on("codename_" + id, ({ message }) => callback(null, message));
}
