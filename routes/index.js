var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/template', function(request, response){
  response.sendFile(path.join(__dirname, '../views/templates/template.html'));
});

/* GET home page. */
router.get('/', function(req, res, next){
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});


console.log('index.js loaded');
module.exports = router;
