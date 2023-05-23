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

get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error('Error: Failed to retrieve data from the API.');
  } else {
    try {
      const tasksData = JSON.parse(body);
      const completedTasksByUser = {};

      tasksData.forEach(task => {
        if (task.completed) {
          const userId = task.userId;
          if (completedTasksByUser[userId]) {
            completedTasksByUser[userId]++;
          } else {
            completedTasksByUser[userId] = 1;
          }
        }
      });

      Object.entries(completedTasksByUser).forEach(([userId, count]) => {
        console.log(`User ID: ${userId}, Completed Tasks: ${count}`);
      });
    } catch (parseError) {
      console.error('Error: Failed to parse data from the API.');
    }
  }
});
