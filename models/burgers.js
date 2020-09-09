const orm = require("../config/orm");

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