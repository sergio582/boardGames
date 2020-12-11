import axios from "axios";

const BASE_URL = "http://localhost:3800/word/";

export { getListWords, getWords };

async function getListWords(list) {
  var url;
  var cards = [];
  for (var i = 0; i < list.length; i++) {
    url = BASE_URL + list[i];
    await axios.get(url).then((res) => {
      cards.push(res.data[0]);
    });
  }

  return cards;
}

function getWords() {
  var url = BASE_URL;
  return axios.get(url).then((res) => res.data);
}
