var express = require('express');
var router = express.Router();
var path = require('path');
var assignments = require('../models/assignments');


router.get('/template', function(request, response){
  response.sendFile(path.join(__dirname, '../views/templates/template.html'));
});

router.post("/", function(req,res,next){
  assignments.create(req.body, function(err, post){
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
});

/* GET home page. */
router.get('/', function(req, res, next){
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});


console.log('index.js loaded');
module.exports = router;
