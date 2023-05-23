#!/usr/bin/node
'use strict';

import { get } from 'request';

// Get movie ID from command line argument
const args = process.argv.slice(2);
const movieId = args[0];

// Check if movie ID is provided
if (!movieId) {
  console.error('Please provide a movie ID.');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Failed to retrieve movie data.');
  } else {
    try {
      const movieData = JSON.parse(body);
      console.log('Title:', movieData.title);
    } catch (parseError) {
      console.error('Error: Failed to parse movie data.');
    }
  }
});
