import axios from "axios";

const BASE_URL = "http://localhost:3800/codename/game/";

export { createGame, getGame };

async function createGame(game) {
  let url = BASE_URL;
  return axios.post(url, game).then((res) => res.data);
}

async function getGame(id) {
  let url = BASE_URL + id;
  return axios.get(url).then((res) => res.data);
}
