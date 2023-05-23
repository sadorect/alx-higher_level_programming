#!/usr/bin/node
'use strict';

const request = require('request');

// Get movie ID from command line argument
const args = process.argv.slice(2);
const movieId = args[0];

// Check if movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID.');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Failed to retrieve movie data.');
  } else {
    try {
      const movieData = JSON.parse(body);
      const characterUrls = movieData.characters;
      let charactersProcessed = 0;

      characterUrls.forEach(characterUrl => {
        request.get(characterUrl, (error, response, body) => {
          if (error) {
            console.error(error);
          } else if (response.statusCode !== 200) {
            console.error('Error: Failed to retrieve character data.');
          } else {
            try {
              const characterData = JSON.parse(body);
              console.log(characterData.name);

              charactersProcessed++;
              if (charactersProcessed === characterUrls.length) {
                // All characters have been processed
                // Add any additional processing after all characters have been printed
              }
            } catch (parseError) {
              console.error('Error: Failed to parse character data.');
            }
          }
        });
      });
    } catch (parseError) {
      console.error('Error: Failed to parse movie data.');
    }
  }
});
