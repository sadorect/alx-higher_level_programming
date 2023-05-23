#!/usr/bin/node
/*
This script writes a provided string to a named file
*/
'use strict';

import { writeFile } from 'fs';

function writeFileContent(filePath, content) {
  const newLine = "\n"
  writeFile(filePath, content + newLine, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('File written successfully.');
    }
  });
}

// Get file path and content from command line arguments
const args = process.argv.slice(2);
const filePath = args[0];
const content = args[1];

// Check if file path and content are provided
if (!filePath || !content) {
  console.error('Please provide a file path and content.');
  process.exit(1);
}

writeFileContent(filePath, content);
