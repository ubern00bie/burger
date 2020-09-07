const connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        connection.query(`SELECT * FROM ${table}`, function(err, result) {
            if (err) throw err;
            cb(result);
        }); 
    },

    insertOne: function(burger_name, cb){
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES("${burger_name}", 0);`, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
          });
    },

    updateOne: function(id,cb){
        connection.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
          }); 
    }
}

module.exports = orm;