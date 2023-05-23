#!/usr/bin/node
'use strict';

import { get } from 'request';

// Get API URL from command line argument
const args = process.argv.slice(2);
const apiUrl = args[0];

// Check if API URL is provided
if (!apiUrl) {
  console.error('Please provide an API URL.');
  process.exit(1);
}

const characterId = 18;

get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Failed to retrieve movies data.');
  } else {
    try {
      const moviesData = JSON.parse(body);
      const moviesWithWedgeAntilles = moviesData.results.filter(movie => {
        return movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
      });
      console.log('Number of movies with Wedge Antilles:', moviesWithWedgeAntilles.length);
    } catch (parseError) {
      console.error('Error: Failed to parse movies data.');
    }
  }
});
