// Coding Problem 5
    // Importing the 'mysql' module
    var mysql = require('mysql');
    // Creating a connection object using the 'createConnection' method from the 'mysql' module
    var connection = mysql.createConnection({
    host: 'localhost',             // Setting the host of the MySQL database
    user: 'your username',         // Setting the username to connect to the database
    password: 'your password',     // Setting the password to connect to the database
    database: 'your database name' // Setting the name of the database to be connected
    });
    // Attempting to establish a connection to the MySQL database
    connection.connect(function(error) {
    // Checking if there is an error during the connection process
    if (!!error) {
        console.log('Error:', error); // Logging the error message to the console
    } else {
        console.log('Connected! :)'); // Logging a success message to the console if the connection is successful
    }
    });
    // Exporting the 'connection' object to make it available for other parts of the application
    module.exports = connection;












