'use strict';

const express = require('express');


const characters = require('./charData');
console.log(characters);

// This array is used to keep track of user records
// as they are created.
const users = [];

// Construct a router instance.
const router = express.Router();

// Route that returns a list of users.
router.get('/users', (req, res) => {
  res.json(users);
});

// Route that creates a new user.
router.post('/users', (req, res) => {
  // Get the user from the request body.
  const user = req.body;

  const errors = [];

  if(!user.name){
    errors.push('Please provide a value for name');
  }

  if(!user.email){
    errors.push('Please provide a valid email address');
  }

  if(errors.length > 0){
    res.status(400).json({erros});
  }else {

     // Add the user to the `users` array.
    users.push(user);

      // Set the status to 201 Created and end the response.
  res.status(201).end();

    
  }

 
 


});

router.get('/characters', (req, res) => {
  res.json(characters);
});

module.exports = router;