const orm = require("../config/orm");
//const burger = require("./burger.js");

//create code that will call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        })  
    },
    updateOne: function (id, cb) {
        orm.updateOne(id, function(res){
            cb(res);
        })
    }
}
module.exports = burger;