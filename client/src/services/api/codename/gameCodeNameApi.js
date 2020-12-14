import axios from "axios";

const BASE_URL = "http://localhost:3800/codename/game/";

export { createGame, getGame, deleteGame, updateGame };

function createGame(game) {
  let url = BASE_URL;
  return axios.post(url, game).then((res) => res.data);
}

function getGame(id) {
  let url = BASE_URL + id;
  return axios.get(url).then((res) => res.data);
}

function deleteGame(id) {
  let url = BASE_URL + id;
  return axios.delete(url).then((res) => res.data);
}

function updateGame(id, game) {
  let url = BASE_URL + id;
  return axios.put(url, game).then((res) => res.data);
}
