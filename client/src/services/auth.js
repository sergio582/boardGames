const USER_ID = "USER_ID";
const USER_NAME = "USER_NAME";
const TOKEN = "TOKEN";

export function isLogin() {
  return localStorage.getItem(TOKEN) !== null;
}

export function login(user_id, user_name, token) {
  localStorage.setItem(USER_ID, user_id);
  localStorage.setItem(USER_NAME, user_name);
  localStorage.setItem(TOKEN, token);
}

export function logout() {
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(TOKEN);
}
