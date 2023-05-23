#!/usr/bin/node
'use strict';

const fs = require('fs');

function printFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
      console.error(error);
    } else {
      console.log(content);
    }
  });
}

// Get the file path from command line arguments
const args = process.argv.slice(2);
const filePath = args[0];


printFileContent(filePath);
