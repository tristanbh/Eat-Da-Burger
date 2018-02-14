var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {burgers: data});
  });
});

router.get('/api/burgers', function(req, res) {
	res.redirect('/');
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "buger_name", "devoured"
  ],[
    req.body.burger_name, req.body.devoured
  ], function(result){
    res.json({id: result.insertId});

    });
  });

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var objColVals = {devoured : req.body.devoured};

  burger.update(objColVals, condition, function(){
    res.redirect('/');
  });
});

  // console.log("condition", condition);

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
