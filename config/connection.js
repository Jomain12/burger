const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'Googlechrome12!',
    database: 'burgers_db'
});;

connection.connect();

module.exports = connection;