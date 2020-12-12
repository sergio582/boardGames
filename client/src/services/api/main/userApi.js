import axios from "axios";

const BASE_URL = "http://localhost:3800/auth/";

export { registerUser };

function registerUser(user) {
  var url = BASE_URL + "signup";
  return axios.post(url, user).then((res) => res.data);
}
