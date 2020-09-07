const express = require("express");
const burger = require("../models/burgers.js");

var router = express.Router();

router
.route('/burgers')
    .get(function (req, res) {
        burger.selectAll(function(data) {
            var burger_data = {
                burgers: data
            };
            res.render("index", burger_data);
        })
    })
    .post(function (req, res) {
        burger.insertOne(req.body.burger_name, function (results){
          res.json( {id: results.insertId} )
        })
    })
router
.route('/api/burgers/:id')
    .put(function (req, res){
        let id = req.params.id;
        burger.updateOne(id, function(result){
            res.json(result);
        });
    });

    router.route('*') 
    .get(function (req, res) {
        res.redirect("/burgers")
    })

module.exports = router;
