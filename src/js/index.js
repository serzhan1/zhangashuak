

const text = document.getElementById('jora');
let eboy = 'Helos';
async function getResponse() {
  let response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  let jesper = response.text();

  text.innerHTML = eboy;
}

getResponse()

