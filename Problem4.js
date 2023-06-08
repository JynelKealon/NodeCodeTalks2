// Coding Problem 4
        // validation.js
            // Importing the 'check' function from the 'express-validator' library
            const { check } = require('express-validator');
            // Exporting a validation middleware for user signup requests
            exports.signupValidation = [
                // Checking that the 'name' field is not empty
                check('name', 'Please provide a name.').not().isEmpty(),
                // Checking that the 'email' field is a valid email address and normalizing it by removing dots from the Gmail username (if applicable)
                check('email', 'Please enter a valid email address.').isEmail().normalizeEmail({ gmail_remove_dots: true }),
                // Checking that the 'password' field has a minimum length of 6 characters
                check('password', 'Password should be at least 6 characters long.').isLength({ min: 6 })
            ];
            // Exporting a validation middleware for user login requests
            exports.loginValidation = [
                // Checking that the 'email' field is a valid email address and normalizing it by removing dots from the Gmail username (if applicable)
                check('email', 'Please enter a valid email address.').isEmail().normalizeEmail({ gmail_remove_dots: true }),
                // Checking that the 'password' field has a minimum length of 6 characters
                check('password', 'Password should be at least 6 characters long.').isLength({ min: 6 })
            ];
        // server.js
            // Importing required modules and libraries
            const createError = require('http-errors');
            const express = require('express');
            const path = require('path');
            const bodyParser = require('body-parser');
            const cors = require('cors');
            // Importing validation functions from our validation.js file above
            const { signupValidation, loginValidation } = require('./validation.js');
            // Creating an instance of the Express application
            const app = express();
            // Utilizing the Express instance to handle JSON requests
            app.use(express.json());
            // Utilizing the Express instance to parse JSON data
            app.use(bodyParser.json());
            // Utilizing the Express instance to parse URL-encoded data
            app.use(bodyParser.urlencoded({ extended: true }));
            // Enabling Cross-Origin Resource Sharing
            app.use(cors());
            // Defining a route for the root URL
            app.get('/', (req, res) => {
                res.send('Node js file upload rest APIs');
            });
            // Defining a route for the '/register' URL, and applying signupValidation middleware
            app.post('/register', signupValidation, (req, res, next) => {
                // Code to handle user registration
            });
            // Defining a route for the '/login' URL, and applying loginValidation middleware
            app.post('/login', loginValidation, (req, res, next) => {
                // Code to handle user login
            });
            // Handling errors
            app.use((err, req, res, next) => {
                // Setting the error status code to 500 if not already set
                err.statusCode = err.statusCode || 500;
                // Setting the error message to "Internal Server Error" if not already set
                err.message = err.message || "Internal Server Error";
                // Sending the error status code and message as a JSON response
                res.status(err.statusCode).json({
                    message: err.message
                });
            });
            // Starting the server and listening on port 3000
            app.listen(3000, () => console.log('Server is running on port 3000'));