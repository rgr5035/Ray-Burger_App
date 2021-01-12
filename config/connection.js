//declaring mySQL variable to require npm package for app functionality
const mysql = require('mysql');

//setting up connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'N!cholas15', //use mySQL specific password
    database: 'burgers_db',
});

//make connection
connection.connect((err) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
})

//export connection for our ORM to use
module.exports = connection;