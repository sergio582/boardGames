import axios from "axios";

const BASE_URL = "http://localhost:3800/auth/";
const BASE_URL_USER = "http://localhost:3800/user/";

export { registerUser, connectUser, getUser, getListUsers };

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

async function getListUsers(list) {
  let url;
  let users = [];
  for (let i = 0; i < list.length; i++) {
    url = BASE_URL_USER + list[i];
    await axios.get(url).then((res) => {
      users.push(res.data.result);
    });
  }

  return users;
}
