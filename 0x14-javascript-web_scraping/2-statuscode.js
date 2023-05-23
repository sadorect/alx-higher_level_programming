#!/usr/bin/node
'use strict';

const request = require('request');

// Get URL from command line argument
const args = process.argv.slice(2);
const url = args[0];

// Check if URL is provided
if (!url) {
  console.error('Please provide a URL.');
  process.exit(1);
}

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('code:', response.statusCode);
  }
});
