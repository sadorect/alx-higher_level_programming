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

const filePath = 'path/to/your/file.txt';
printFileContent(filePath);
