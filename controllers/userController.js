const pool = require('../models/userModel');
const {body, validationResult } = require('express-validator');

const createUser = (req, res) => {
  const {email, firstname, lastname, password } = req.body //Destructuring email and firstname from req.body

  pool.query('INSERT INTO myusers (email, firstname, lastname, password) VALUES ($1, $2, $3, $4)', [email, firstname, lastname, password], (error, results) => {
    if (error) {
      throw error;
    }
    console.log('I am the result', results);
    res.status(201).json(`User added with ID: ${results.insertId}`);
  })
}

// const createUser = [
//     body("firstname")
//     .isString()
//     .withMessage("First name has to be a String.")
//     .trim()
//     .isLength({ min: 2 })
//     .escape(),
//   body("lastname")
//     .isString()
//     .withMessage("Last name has to be a String.")
//     .trim()
//     .isLength({ min: 2 })
//     .escape(),
//   body("email")
//     .isString()
//     .withMessage("Email has to be a String.")
//     .isEmail()
//     .withMessage("Invalid Email format")
//     .normalizeEmail(),
  

// ]

// const createUser = (req, res, next) => {  
//   console.log('Hello world', req.body);
//   res.write('Hello world');

//   res.end();
// }

module.exports = createUser;