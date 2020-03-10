const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Googlechrome12!',
    database: 'burgers_db'
});;

connection.connect();

module.exports = connection;