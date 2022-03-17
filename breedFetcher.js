const request = require('request');
const args = process.argv.slice(2);

const breed = args[0];
let quality = args[1];
if (quality === undefined) quality = 'name';

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) return console.log('Broken link.');
  console.log('statusCode:', response && response.statusCode);
  if (JSON.parse(body)[0] === undefined) {
    return console.log('Sorry, that breed is not present.');
  }
  console.log('body:', JSON.parse(body)[0][quality]);
});