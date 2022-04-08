const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    console.log(coins);
}