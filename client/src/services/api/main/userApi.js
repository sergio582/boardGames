import axios from "axios";

const BASE_URL = "http://localhost:3800/auth/";
const BASE_URL_USER = "http://localhost:3800/user/";

export { registerUser, connectUser, getUser };

function registerUser(user) {
  let url = BASE_URL + "signup";
  return axios.post(url, user).then((res) => res.data);
}

function connectUser(user) {
  let url = BASE_URL + "signin";
  return axios.post(url, user).then((res) => res.data);
}

function getUser(id) {
  let url = BASE_URL_USER + id;
  return axios.get(url).then((res) => res.data);
}
