import axios from "axios";

const BASE_URL = "http://localhost:3800/auth/";

export { registerUser, connectUser };

function registerUser(user) {
  let url = BASE_URL + "signup";
  return axios.post(url, user).then((res) => res.data);
}

function connectUser(user) {
  let url = BASE_URL + "signin";
  return axios.post(url, user).then((res) => res.data);
}
