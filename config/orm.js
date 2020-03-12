const connection = require('./connection');

const orm = {
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
          });
    },
    // insertOne: function() {
    //     connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ?", function (err, data) {
    //         if (err) cb(err, null);
    //         cb(?, ?);
    //       });
    // },
    // updateOne: function() {
    //     connection.query("SELECT * FROM burgers", function (err, data) {
    //         if (err) cb(err, null);
    //         cb(null, data);
    //       });
    // }
};

module.exports = orm;