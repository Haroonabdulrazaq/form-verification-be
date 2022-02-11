// import { body, validationResult } from 'express-validator';
import * as validator from 'express-validator';
const { body, validationResult } = validator;
import bcrypt from 'bcryptjs';
import pool from '../models/userModel.js';

const createUser = (req, res)=>{
  body('email')
    .isString()
    .withMessage('Email has to be a String.')
    .isEmail()
    .withMessage('Invalid Email format')
    .normalizeEmail().required,
  body('firstname')
    .isString()
    .withMessage('Firstname has to be a String.')
    .isLength({min: 4, max: 25}).withMessage('Firstname should be greater than 2 and less than 25')
    .trim()
    .escape().required,
  body('lastname')
    .isString()
    .withMessage('Lastname has to be a String.')
    .isLength({min: 4, max: 25}).withMessage('Lastname should be greater than 2 and less than 25')
    .trim()
    .escape().required,
  body('password').required

  // Removing noise and making sure its in right format
  const errors = validationResult(req)

  console.log('Im am the Error in BE', errors)
  if(!errors.isEmpty()){ //  if error is not empty, meaning there is an error while sanitizing user input above 
    res.json({ msg: 'Error occured while creating new user, please check your inputs', error: errors.array() });
    return;
  } else {
    pool.query('SELECT * FROM myusers WHERE email = $1', [req.body.email], async(error, result)=>{
      if(error) {
        res.json({ msg: 'Oops an error occured, while checking if user exist', error });
        return;
      }
      // console.log('Searching if user exist condition', result);
      if(result.rows.length > 0) {
        // console.log('Searching if user exist condition', result);
        res.json({ msg: 'Email is in use by another user', result: result.rows });
        return;
      } else {
        const {email, firstname, lastname, password} = req.body;  // Destructuring from req.body
        const hashPassword = await bcrypt.hash(password, 10);
      
        pool.query('INSERT INTO myusers (email, firstname, lastname, password) VALUES ($1, $2, $3, $4)',
          [email, firstname, lastname, hashPassword],
          (error, result)=>{
          if(error) {
            res.json({ msg: 'Error occured while creating new user', error: error });
            return;
          }
          console.log('Inserting condition');
          res.json({ status: 200, msg: 'User is saved successfully', result: result.rows });
        })
      }
    })
  }
}


export default createUser;
