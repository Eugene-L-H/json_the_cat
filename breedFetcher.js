const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    let desc = body;
    if (body.length < 3) {
      desc = 'That breed is not in our database.';
    } else {
      desc = JSON.parse(body)[0].description;
    }
    return callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };