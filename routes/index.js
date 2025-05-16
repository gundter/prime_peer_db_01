var express = require('express');
var router = express.Router();
var path = require('path');
var assignments = require('../models/assignments');
var RateLimit = require('express-rate-limit');

// Configure rate limiter: maximum of 100 requests per 15 minutes
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

router.get('/template', function(request, response){
  response.sendFile(path.join(__dirname, '../views/templates/template.html'));
});

router.post("/", function(req,res,next){
  assignments.create(req.body, function(err, post){
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })
});

/* GET home page. */
router.get('/', limiter, function(req, res, next){
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

console.log('index.js loaded');
module.exports = router;
