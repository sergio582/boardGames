import axios from "axios";

const BASE_URL = "http://localhost:3800/codename/game/";

export { createGame };

async function createGame(game) {
  let url = BASE_URL;
  return axios.post(url, game).then((res) => res.data);
}
