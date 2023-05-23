#!/usr/bin/node
'use strict';

import { writeFile } from 'fs';
import { get } from 'request';

// Get URL and file path from command line arguments
const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

// Check if URL and file path are provided
if (!url || !filePath) {
  console.error('Please provide a URL and file path.');
  process.exit(1);
}

get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Failed to retrieve the webpage content.');
  } else {
    writeFile(filePath, body, 'utf-8', (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Webpage content saved successfully.');
      }
    });
  }
});
