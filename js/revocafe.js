// Select DOM elements
const revocafe = document.querySelector('.revocafe-api');

const APP_KEY = '767a316f51f406e28759775035c693db';
const APP_ID = '166d8a58';
const url = `https://api.edamam.com/api/recipes/v2`;

export { revocafe };

const get = async function () {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=166d8a58&app_key=767a316f51f406e28759775035c693db&type=public`
  );

  const data = await response.json();
  console.log(data);
};

get();
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
